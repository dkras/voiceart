/*
 Copyright 2016
 Pilyugin Alexey

 This file is part of Voice ART.

 Voice ART is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Voice ART is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

import AsyncInitialized from './../async-initialized';
import Command from './../command';
import ItemEvent from './item-event';
import merge from 'merge';
import Section from './section';
import strings from './../strings';
import TaskUnit from './task-unit';
import utils from './../controller-utils';

/**
 * Base problem item class from which all other context items must be extend.
 */
export default class Item extends AsyncInitialized {

    /**
     * Returns context name.
     * @returns {string}
     */
    static get CONTEXT() {
        throw new Error(`${this.name}.CONTEXT (get): method is not defined.`);
    }

    static get DEFAULT_SETTINGS() {
        return {
            isAdvancedMode: () => false,
            ready: function () {
            }
        }
    }

    /**
     * Returns list of section's dom elements
     * or array of children elements arrays.
     * @param {Element} domElement
     * @returns {NodeList | Array.<Element> | Array.<Array.<Element>>}
     */
    static getSectionElements(domElement) {
        throw new Error(`${this.name}.getSectionElements: method is not defined.`);
    }

    /**
     * Returns type of the field.
     * @param {Element} domElement - field's root element
     * @returns {string}
     */
    static determineFieldType(domElement) {
        throw new Error(`${this.name}.determineFieldType: method is not defined.`);
    }

    /**
     * Returns item's root element.
     * @param {Element} domElement - element one of which children is item's root element.
     * @returns {Element}
     */
    static findItemElement(domElement) {
        throw new Error(`${this.name}.findItemElement: method is not defined.`);
    }

    /**
     * Returns true if domElement is the root element of some field.
     * @param domElement
     * @returns {boolean}
     */
    static isField(domElement) {
        throw new Error(`${this.name}.isField: method is not defined.`);
    }


    /**
     *
     * @param {Element} domElement
     * @param {{ready: function}} settings
     * @param {CommandService} commandService
     * @constructor
     */
    constructor(domElement, settings, commandService) {
        super();
        this.settings = merge(true, {}, this.constructor.DEFAULT_SETTINGS, settings);
        this.commandService = commandService;
        this.domElement = this.constructor.findItemElement(domElement);
        this._initHook();
        /**
         * @type {Array.<Section>}
         */
        this.sections = this.determineSections();
        /**
         * @type {Array.<Field>}
         */
        this.fields = [];
        this.sections.forEach((section) => {
            this.fields.splice(this.fields.length, 0, ...section.fields);
        });

        this.reset();

        // change current field when user focused it manually
        this.fields.forEach((field) => {
            field.on(ItemEvent.FIELD_FOCUSED, (field) => {
                if (this.currentField != field) {
                    this.currentField = field;
                }
            });
        });

        this._registerCommands();
        this._addEventsEmission();
        this._initReady();
    }

    /**
     * In this method ItemEvent.SUBMIT and ItemEvent.RESPONSE_RECEIVED should be emitted when its occurred.
     * Should be implemented for each context.
     * @private
     */
    _addEventsEmission() {
        throw new Error(`${this.constructor.name}._addEventsEmission: method is not defined.`);
    }

    /** @inheritdoc */
    _getReady() {
        if (this._ready)
            return this._ready;

        // resolve ready promise when all sections will be ready
        return Promise.all(
            this.sections.map(function (section) {
                return section._getReady();
            })
        ).
            then(this.settings.ready).
            catch(error => {
                console.error(error);
            });
    }

    /**
     * This method is called in constructor and can be used to define additional properties in descendant classes.
     * @private
     */
    _initHook() {
    }

    /**
     * Registers item's commands in CommandService.
     * @private
     */
    _registerCommands() {
        var commands = this.getCommands();
        commands.forEach((command) => {
            this.commandService.register(command);
        });
    }

    /**
     * Returns selected field's answer speech.
     * @returns {string}
     */
    get currentAnswerSpeech() {
        if (this.currentField.isAnswerEmpty()) {
            return strings.messages.EMPTY_ANSWER;
        }
        else {
            let answerSpeech = `${strings.messages.ANSWER_IS} ${this.currentField.getStateToSpeech()}`;
            let someFieldIsEmpty = this.fields.some(field => field.isAnswerEmpty());
            if (this.settings.isAdvancedMode()) {
                answerSpeech = `${answerSpeech} ${strings.messages.CLEAR_HINT_SHORT}`;
            }
            else if (someFieldIsEmpty) {
                answerSpeech = `${answerSpeech} ${strings.messages.CLEAR_HINT} ${strings.commands.FIELD_NAVIGATION_HINT}`;
            }
            else {
                answerSpeech = `${answerSpeech} ${strings.messages.SUBMIT_HINT} ${strings.messages.CLEAR_HINT}`;
            }
            return answerSpeech;
        }
    }

    /**
     * Selected field.
     * @returns {Field}
     */
    get currentField() {
        return this._currentField;
    }

    /**
     *
     * @param {Field} field
     */
    set currentField(field) {
        if (field == this._currentField)
            return;

        // remove old fields command from service
        if (this._currentField) {
            var oldCommands = this._currentField.getCommands();
            oldCommands.forEach((command) => {
                this.commandService.unregister(command);
            })
        }

        this._currentField = field;
        this.currentSection = this.getSectionByUnit(this._currentField);

        // register commands in service
        var commands = this._currentField.getCommands();
        for (var i = 0; i < commands.length; i++) {
            this.commandService.register(commands[i]);
        }
    }

    /**
     * Returns speech for just selected field including field's state if it is not empty.
     * @returns {string}
     */
    get currentFieldSelectionSpeech() {
        var fieldIndex = this.fields.indexOf(this.currentField);
        var selectedSpeech = `${strings.messages.FIELD_SELECTED_1} ${utils.toWordsOrdinal(fieldIndex + 1)} ${strings.messages.FIELD_SELECTED_2}`;
        var answerSpeech = this.currentField.isAnswerEmpty() ? '' : this.currentAnswerSpeech;
        var questionSpeech = ('fieldElement' in this.currentField.adapter)? (this.currentField.adapter.fieldElement.getAttribute('placeholder') || '') : '';
        return (`${selectedSpeech} ${questionSpeech} ${answerSpeech}`).trim();
    }

    /**
     * Section which contains selected field.
     * @returns {Section}
     */
    get currentSection() {
        return this._currentSection;
    }

    /**
     *
     * @param {Section} section
     */
    set currentSection(section) {
        if (this._currentSection == section)
            return;

        this._currentSection = section;
    }

    /**
     * Returns speech which will be read only once when current item have been just started.
     * @returns {string}
     */
    get initialSpeech() {
        if (this.hasInitialAlreadyRead)
            return '';

        var speech = '';
        var isMultipleFields = this.fields.length > 1;
        if (isMultipleFields) {
            speech = `${strings.messages.INITIAL_SPEECH_MULTI_1} ${this.fields.length} ${strings.messages.INITIAL_SPEECH_MULTI_2} ${this.currentFieldSelectionSpeech}`;
        }
        else {
            speech = `There is ${this.fields[0].typeSpeech} question.`;
        }

        return speech;
    }

    set lang(language){
        this.settings.lang = language;
        this._units.forEach(unit => unit.lang = language);
    }

    /**
     *
     * @returns {string}
     */
    taskSpeech(navigation = true) {
        var fieldHelp = this.settings.isAdvancedMode() ? this.currentField.helpSpeechAdvanced : this.currentField.helpSpeech;
        var isMultipleFields = this.fields.length > 1;
        var itemHint = isMultipleFields && navigation && !this.settings.isAdvancedMode() ? strings.commands.FIELD_NAVIGATION_HINT : '';
        return (`${this.currentSection.taskSpeech} ${fieldHelp} ${itemHint}`).trim();
    }

    /**
     * Clears current field.
     */
    clear() {
        this.currentField.clear();
    }

    /**
     * Clears all fields.
     */
    clearAll() {
        this.fields.forEach((field) => {
            field.clear();
        });
    }

    /**
     * Return section which contains passed unit.
     * @param {Unit} unit
     * @returns {Section|undefined}
     */
    getSectionByUnit(unit) {
        for (var i = 0; i < this.sections.length; i++) {
            var section = this.sections[i];
            if (section.units.indexOf(unit) != -1) {
                return section;
            }
        }
    }

    /**
     * Returns array of section found in item domElement.
     * @returns {Array.<Section>}
     */
    determineSections() {
        var sections = [];
        var sectionElements = this.constructor.getSectionElements(this.domElement);
        for (let i = 0; i < sectionElements.length; i++) {
            //let units = [];
            this._units = [];
            let unitElements = sectionElements[i];
            let sectionPredefinedSpeech;
            if (!Array.isArray(unitElements)) {
                // if unitElements is DOM element get speech attribute first
                sectionPredefinedSpeech = unitElements.getAttribute('speech') || '';
                unitElements = unitElements.childNodes;
            }
            for (let j = 0; j < unitElements.length; j++) {
                let unitElement = unitElements[j];
                let unit;
                if (this.constructor.isField(unitElement)) {
                    let type = this.constructor.determineFieldType(unitElement);
                    let FieldDecorator = require(`./../../field-decorators/${type}-decorator.js`);
                    console.log(this.settings);
                    unit = new FieldDecorator(
                        unitElement,
                        {
                            context: this.constructor.CONTEXT,
                            lang: this.settings.lang
                        },
                        this.commandService
                    );
                }
                else {
                    unit = new TaskUnit(unitElement);
                }
                //units.push(unit);
                this._units.push(unit);
            }
            let section = new Section(this._units, sectionPredefinedSpeech);
            sections.push(section);
        }
        return sections;
    }

    /**
     * Returns array of field specific commands.
     * @returns {Array.<Command>}
     */
    getCommands() {
        if (!this._commands) {
            this._commands = [];

            let isMultipleFields = this.fields.length > 1;
            if (isMultipleFields) {

                this._commands.push(new Command(strings.commands.NEXT_FIELD, ()=> {
                    var currentFieldIndex = this.fields.indexOf(this.currentField);
                    currentFieldIndex++;
                    if (currentFieldIndex >= this.fields.length) {
                        currentFieldIndex = 0;
                    }
                    this.moveToField(currentFieldIndex);
                }, strings.commands.FIELD_NAVIGATION_HINT, 100));

                this._commands.push(new Command(strings.commands.PREV_FIELD, ()=> {
                    var currentFieldIndex = this.fields.indexOf(this.currentField);
                    currentFieldIndex--;
                    if (currentFieldIndex < 0) {
                        currentFieldIndex = this.fields.length - 1;
                    }
                    this.moveToField(currentFieldIndex);
                }));

            }
        }
        return this._commands;
    }

    /**
     * Returns array of possible answers for current field to create grammar
     * @returns {Array.<string>}
     */
    getAnswerAlternatives() {
        //todo: check this
        return this.currentField.getAnswerAlternatives();
    }

    /**
     * Returns current item state.
     * @returns {Array}
     */
    getState() {
        var state = [];
        this.fields.forEach((field) => {
            state.push(field.getState());
        });
        return state;
    }

    /**
     * Sets current item state.
     * @param {Array} state
     */
    setState(state) {
        if (!Array.isArray(state)) {
            state = [state];
        }
        state.forEach((fieldState, index) => {
            var field = this.fields[index];
            if (field) {
                field.setState(fieldState);
            }
        });
    }

    /**
     * Returns speech for current state.
     * @returns {string}
     */
    getStateToSpeech() {
        //todo: think about speech for multiple fields
        return this.currentField.getStateToSpeech();
    }

    /**
     * Returns true if the current field's state is empty/not defined.
     * @returns {boolean}
     */
    isAnswerEmpty() {
        //todo: think about speech for multiple fields
        return this.currentField.isAnswerEmpty();
    }

    /**
     * Returns true if answer can be set to the current field with current state.
     * @returns {boolean}
     */
    isAnswerInputAvailable() {
        return this.currentField.isAnswerInputAvailable();
    }

    /**
     * Returns true, if item is already submitted.
     * @returns {boolean}
     */
    isSubmitted() {
        throw new Error(`${this.constructor.name}.isSubmitted: method is not defined.`);
    }

    /**
     * Should return state, which obtained from joining the passed state to current field's state.
     * @param state - new state which will be joined to the current field's state.
     * @returns {*}
     */
    joinState(state) {
        return this.currentField.joinState(state);
    }

    /**
     * Returns recognized array with matched objects. 'type' property of matched object should be set to MatchObject.TYPES.ANSWER.
     * @param {Array.<string|MatchObject>} recognized
     * @returns {Array.<string|MatchObject>}
     */
    matchRecognized(recognized) {
        return this.currentField.matchRecognized(recognized);
    }

    /**
     * Changes current field with field's element focusing and accompanying speech.
     * @param {Field|number} field - field or field's index
     */
    moveToField(field) {
        if (typeof field === 'number') {
            field = this.fields[field];
        }
        if (field) {
            var oldSection = this.currentSection;
            this.currentField = field;
            this.currentField.focus();
            // if section was changed and its task have not read yet
            if (oldSection != this.currentSection && !this.currentSection.alreadyRead) {
                this.readTask(this.currentFieldSelectionSpeech);
            }
            else {
                this.commandService.execute(strings.commands.SAY, this.currentFieldSelectionSpeech);
            }
        }
    }

    /**
     * Returns state from recognized array in appropriate format.
     * @param {Array.<string|MatchObject>} recognized
     * @returns {*}
     */
    getStateByRecognized(recognized) {
        return this.currentField.getStateByRecognized(recognized);
    }

    /**
     * Adds recognized answer to current field's state and returns recognized array with matched objects.
     * @param {Array.<string|MatchObject>} recognized
     * @returns {Array.<string|MatchObject>}
     */
    setStateByRecognized(recognized) {
        return this.currentField.setStateByRecognized(recognized);
    }

    /**
     * Executes Say command with current sections task and passed texts.
     * @param preSpeech - speech which will be read before section task.
     * @param postSpeech - speech which will be read after section task.
     */
    readTask(preSpeech = '', postSpeech = '') {
        if (!this.hasInitialAlreadyRead) {
            preSpeech += ` ${this.initialSpeech}`;
        }
        var taskSpeech = (`${preSpeech} ${this.taskSpeech(preSpeech.indexOf(strings.commands.FIELD_NAVIGATION_HINT) > -1? false : true)} ${postSpeech}`).trim();//if preSpeech it's not necessary to read taskSpeech
        this.hasInitialAlreadyRead = true;
        this.currentField.focus();
        this.commandService.execute(strings.commands.SAY, taskSpeech);
        // mark current section have already read to prevent repeated reading
        this.currentSection.alreadyRead = true;
    }

    /**
     * Register a handler to be called when instance initialization complete.
     * @param {function} handler
     */
    ready(handler) {
        return this._ready.then(handler);
    }

    /**
     * Reset item to initial state.
     */
    reset() {
        // flag for initial speech reading (it should be read only one time)
        this.hasInitialAlreadyRead = false;
        this.currentSection = this.sections[0];
        this.currentField = this.fields[0];
        this.sections.forEach((section) => {
            section.alreadyRead = false;
        });
        //todo:
    }

    /**
     * Submits user answer.
     */
    submit() {
        throw new Error(`${this.constructor.name}.submit: method is not defined.`);
    }

};
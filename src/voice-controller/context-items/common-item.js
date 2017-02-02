/*
 Copyright 2016
 Ilnaz Shayakhmetov

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

import AsyncInitialized from '../common/async-initialized';
import ItemEvent from './../common/item/item-event';
import Command from '../common/command';
import utils from '../common/controller-utils';
import strings from '../common/strings';
import merge from 'merge';

/*const DECORATORS = {
    mc: require('../field-decorators/mc-decorator'),
    dropdown: require('../field-decorators/dropdown-decorator'),
    essay: require('../field-decorators/essay-decorator'),
};*/
/*strings.types.forEach(type => {
    DECORATORS[type] = require(`../field-decorators/${type}-decorator`);
});*/

const FIELD_CLASS = `${strings.selectors.NAMESPACE}-${strings.selectors.FIELD}`;

export default class Item extends AsyncInitialized {

    constructor(domElement, settings, commandService){
        super();
        this.settings = merge(true, {}, this.constructor.DEFAULT_SETTINGS, settings);
        this.commandService = commandService;
        this.domElement = domElement;
        this.hasInitialAlreadyRead = false;
        this._initHook();
        this._addListeners();
    }

    static get CONTEXT() {
        return 'common';
    }

    isSubmitted(){
        return false;
    }
    isAnswerEmpty(){
        return this.currentField.isAnswerEmpty();
    }
    isAnswerInputAvailable(){
        return this.currentField.isAnswerEmpty();
    }
    getAnswerAlternatives() {
        return this.currentField.getAnswerAlternatives();
    }
    reset(){

    }
    clear(){
        this.currentField.setState('');
    }
    setStateByRecognized(recognised){
        this.currentField.setStateByRecognized(recognised);
    }

    /** @inheritdoc */
    _initHook(){
        this._fieldElements = Array.prototype.slice.call(this.domElement.querySelectorAll(`.${FIELD_CLASS}`));
        this._fields = [];
        this._index = 0;
        this._fieldElements.forEach((el, index) => {
            let field = this._initField(el);
            if(field)
                this._fields.push(field);
        });
        this._registerCommands();
    }

    _addListeners() {
        this._fields.forEach((field, index) => {
            field.on(ItemEvent.FIELD_FOCUSED, ()=>{
                this.emit(ItemEvent.STOP, true);
                this._unregisterCommands();
                this._index = index;
                this._registerCommands();
                this.readTask();
            });
        });
    }

    _initField(el){
        let fieldType = '';
        strings.types.some(type => {
            let selector = `.${strings.selectors.NAMESPACE}-${type}`;
            if(el.matches(selector) || el.querySelector(selector) != null){
                fieldType = type;
                return true;
            } else {
                return false;
            }
        });
        if(fieldType.length === 0) {
            console.error('There are no available fields or fields not specified');
            return;
        }
        let FieldDecorator = require(`../field-decorators/${fieldType}-decorator.js`);
        let field = new FieldDecorator(
            el,
            {
                context: this.constructor.CONTEXT,
                lang: this.settings.lang
            },
            this.commandService
        );
        return field;
    }


    /** @inheritdoc */
    submit() {
        this.emit(ItemEvent.SUBMIT);
    }

    _getReady() {
        if (this._ready)
            return this._ready;

        // resolve ready promise when all fields will be ready
        return Promise.all(
            this._fields.map(function (field) {
                return field._getReady();
            })
        ).
        then(this.settings.ready).
        catch(error => {
            console.error(error);
        });
    }
    _unregisterCommands(){
        var commands = this.getCommands();
        commands.forEach((command) => {
            this.commandService.unregister(command);
        });
    }
    _registerCommands() {
        var commands = this.getCommands();
        commands.forEach((command) => {
            this.commandService.register(command);
        });
    }
    //redefined methods
    getCommands() {
        let currentFieldCommands = this.currentField.getCommands();
        let navigationCommands = [];
        let nextFieldCommand = new Command(strings.commands.NEXT_FIELD, ()=> {
            var currentFieldIndex = this.fields.indexOf(this.currentField);
            currentFieldIndex++;
            if (currentFieldIndex >= this.fields.length) {
                currentFieldIndex = 0;
            }
            this.moveToField(currentFieldIndex);
        }, strings.commands.FIELD_NAVIGATION_HINT, 100),
            prevFieldCommand = new Command(strings.commands.PREV_FIELD, ()=> {
                var currentFieldIndex = this.fields.indexOf(this.currentField);
                currentFieldIndex--;
                if (currentFieldIndex < 0) {
                    currentFieldIndex = this.fields.length - 1;
                }
                this.moveToField(currentFieldIndex);
            });
        if(this._fields.length > 0){
            if(this._index === 0){
                navigationCommands.push(nextFieldCommand);
            } else if(this._index === this._fields.length - 1){
                navigationCommands.push(prevFieldCommand);
            } else {
                navigationCommands.push(nextFieldCommand);
                navigationCommands.push(prevFieldCommand);
            }
        }
        return currentFieldCommands.concat(navigationCommands);
    }


    getStateToSpeech(){
        return this.currentField.getStateToSpeech();
    }
    /**
     *
     * @returns {string}
     */
    taskSpeech(navigation = true) {
        var fieldHelp = this.settings.isAdvancedMode() ? this.currentField.helpSpeechAdvanced : this.currentField.helpSpeech;
        var isMultipleFields = this._fields.length > 1;
        var itemHint = isMultipleFields && navigation && !this.settings.isAdvancedMode() ? strings.commands.FIELD_NAVIGATION_HINT : '';
        return (`${this.currentField.taskSpeech} ${fieldHelp} ${itemHint}`).trim();
    }
    readTask(preSpeech = '', postSpeech = '') {
        if (!this.hasInitialAlreadyRead) {
            preSpeech += ` ${this.initialSpeech}`;
        }
        this.commandService.execute(strings.commands.SAY, preSpeech + this.taskSpeech() + this.getStateToSpeech() + strings.messages.SPEAK);
        this.hasInitialAlreadyRead = true;
    }
    get currentAnswerSpeech() {
        if (this.isAnswerEmpty()) {
            return strings.messages.EMPTY_ANSWER;
        }
        else {
            let answerSpeech = `${strings.messages.ANSWER_IS} ${this.getStateToSpeech()}`;
            if (!this.settings.isAdvancedMode()) {
                answerSpeech = `${answerSpeech} ${(this._fields.length > 1)? strings.commands.FIELD_NAVIGATION_HINT : ''} ${strings.messages.SUBMIT_HINT}`;
            }
            else {
                let fieldCommands = '';
                this.currentField.getCommands().forEach(command => fieldCommands = fieldCommands + ' ' + command.helpSpeech);
                answerSpeech = `${answerSpeech} ${fieldCommands}`;
            }
            return answerSpeech;
        }
    }
    get initialSpeech(){
        return utils.getElementSpeech(this.domElement) || utils.getElementDisplayText(this.domElement, strings.selectors.NAMESPACE);
    }
    get currentField(){
        return this._fields[this._index];
    }

};
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
import ItemEvent from './item-event';
import merge from 'merge';
import Unit from './unit';
import utils from '../controller-utils';

export default class Field extends Unit {

    static get DEFAULT_SETTINGS() {
        return {
            context: '',
            ready: function () {
            }
        }
    }

    /**
     * Speech which will be read with the rest item task. (If speech is undefined in item and widget configs).
     * @returns {string}
     * @constructor
     */
    static get DEFAULT_SPEECH() {
        return '';
    }

    static get TYPE() {
        throw new Error(`${this.name}: static property TYPE is not defined.`);
    }

    /**
     * Returns promise which pass PT Adapter class as the fulfillment value
     * to the next 'then' in chain
     * @param {string} context
     * @param {string} type
     * @returns {Promise}
     */
    static getAdapter(context, type) {
        var adapterPrefix = `${context}-${type}`;
        return new Promise(
                resolve => {
                let load = require(`bundle!./../../adapters/${adapterPrefix}-adapter.js`);
                load(resolve);
            }
        );
    }

    /**
     *
     * @param {Element} domElement
     * @param {Object} settings
     * @param {CommandService} commandService
     * @constructor
     */
    constructor(domElement, settings, commandService) {
        super(domElement);
        this.settings = merge(true, {}, this.constructor.DEFAULT_SETTINGS, settings);
        this.commandService = commandService;
        if (!this.settings.context) {
            throw new Error(`${this.constructor.name}: settings.context must be defined.`);
        }
        this._taskSpeech = utils.getElementSpeech(this.domElement) || this.constructor.DEFAULT_SPEECH;
        this._initReady();
        this.ready(this.settings.ready);
    }

    /** @inheritdoc */
    _getReady() {
        if (this._ready)
            return this._ready;

        return this.constructor.getAdapter(this.settings.context, this.constructor.TYPE).
            then(Adapter => {
                /**
                 *
                 * @name Field#adapter
                 * @type {AbstractFieldAdapter}
                 */
                this.adapter = new Adapter(this.domElement);

                this.adapter.on(ItemEvent.FIELD_FOCUSED, () => {
                    this.emit(ItemEvent.FIELD_FOCUSED, this);
                });
            }).
            catch(error => {
                console.error(error);
            });
    }

    /**
     * Help speech which will be read after main task speech for current field type.
     * @returns {string}
     */
    get helpSpeech() {
        return '';
    }

    /**
     * Help speech which will be read after main task speech for current field type in Advanced Mode.
     * @returns {string}
     */
    get helpSpeechAdvanced() {
        return '';
    }

    /**
     * Speech which will be read with the rest item task. (If speech is undefined in section config).
     * @returns {string}
     */
    get taskSpeech() {
        return this._taskSpeech ? `. ${this._taskSpeech}.` : '';
    }

    /**
     * Returns speech which characterizes field type. (Uses in initial task speech)
     * @returns {string}
     */
    get typeSpeech() {
        throw new Error(`${this.constructor.name}.typeSpeech (get): method is not defined.`);
    }

    set lang(language){
        this.settings.lang = language;
    }

    /**
     * Clears field's state.
     */
    clear() {
        if (!this.adapter) {
            return ready(this.clear.bind(this));
        }
        this.adapter.clear();
    }

    /**
     * Sets focus to field's element.
     */
    focus() {
        if (!this.adapter) {
            return;
        }
        this.adapter.focus();
    }

    /**
     * Returns true if field's state is empty/not defined.
     * @returns {boolean}
     */
    isAnswerEmpty() {
        throw new Error(`${this.constructor.name}.isAnswerEmpty: method is not defined.`);
    }

    /**
     * Returns true if answer can be set to the field with current state.
     * @returns {boolean}
     */
    isAnswerInputAvailable() {
        return this.isAnswerEmpty();
    }

    /**
     * Returns array of field's specific commands.
     * @returns {Array.<Command>}
     */
    getCommands() {
        return [];
    }

    /**
     * Should return array of possible answers to create grammar
     * @returns {Array.<string>}
     */
    getAnswerAlternatives() {
        return [];
    }

    getModel() {
        if (!this.adapter) {
            //todo: return promise with model
            return;
        }
        return this.adapter.model;
    }

    /**
     * Returns current field's state.
     * @returns {*}
     */
    getState() {
        if (!this.adapter) {
            //todo: return promise with state
            return;
        }
        return this.adapter.getState();
    }

    /**
     * Sets current field's state.
     * @param {*} state
     */
    setState(state) {
        if (!this.adapter) {
            return ready(this.setState.bind(this, state));
        }
        this.adapter.setState(state);
    }

    /**
     * Should return speech for current state.
     * @returns {string}
     */
    getStateToSpeech() {
        throw new Error(`${this.constructor.name}.getStateSpeech: method is not defined.`);
    }

    /**
     * Returns recognized array with matched objects. 'type' property of matched object should be set to MatchObject.TYPES.ANSWER.
     * @param {Array.<string|MatchObject>} recognized
     * @returns {Array.<string|MatchObject>}
     */
    matchRecognized(recognized) {
        throw new Error(`${this.constructor.name}.matchRecognized: method is not defined.`);
    }

    /**
     * Returns state, which obtained from joining the passed state to current field state.
     * @param state - new state which will be joined to the current field state.
     * @returns {*}
     */
    joinState(state) {
        throw new Error(`${this.constructor.name}.joinState: method is not defined.`);
    }

    /**
     * Returns state from recognized array in appropriate format.
     * @param {Array.<string|MatchObject>} recognized
     * @returns {*}
     */
    getStateByRecognized(recognized) {
        throw new Error(`${this.constructor.name}.getAnswerByRecognized: method is not defined.`);
    }

    /**
     * Adds recognized answer to current field's state and returns recognized array with matched objects.
     * @param {Array.<string|MatchObject>} recognized
     * @returns {Array.<string|MatchObject>}
     */
    setStateByRecognized(recognized) {
        recognized = this.matchRecognized(recognized);
        if (typeof recognized === 'undefined') {
            new Error(`${this.constructor.name}.matchRecognized: method should return array of recognized strings and matched objects.`);
        }
        var recognizedState = this.getStateByRecognized(recognized);
        // join recognized state to the current state to save changes in previous steps.
        var mergedState = this.joinState(recognizedState);
        this.setState(mergedState);
        return recognized;
    }

};
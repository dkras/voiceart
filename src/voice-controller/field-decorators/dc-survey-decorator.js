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

import MatchObject from './../common/match-object';
import McDropdownDecorator from './mc-dropdown-decorator.js';
import SpeechRecognitionService from './../common/speech-recognition-service';
import strings from './../common/strings';
import utils from './../common/controller-utils';

export default class McDecorator extends McDropdownDecorator {

    static get TYPE() {
        return 'mc';
    }

    constructor(domElement, settings, commandService) {
        super(domElement, settings, commandService);

        //add ordinal numbers
        this.ready(()=> {
            var model = this.getModel();
            for (var i = 0; i < model.choices.length; i++) {
                var choice = model.choices[i];
                choice.alternatives = choice.alternatives || [];
                choice.alternatives.push(utils.toWordsOrdinal(i + 1));
                choice.alternatives.push(`${strings.ORDINAL_CHOICE_PREFIX_1} ${(i + 1)}`);
                choice.alternatives.push(`${strings.ORDINAL_CHOICE_PREFIX_2} ${(i + 1)}`);
            }
        });
    }

    /** @inheritdoc */
    get helpSpeech() {
        return `${this.helpSpeechAdvanced} ${strings.commands.LIST_OPTIONS_HINT}`;
    }

    /** @inheritdoc */
    get helpSpeechAdvanced() {
        var isCheckbox = this.getModel().subtype === 'checkbox';
        var speech = isCheckbox ? strings.messages.MC_HINT_MULTIPLE : strings.messages.MC_HINT_SINGLE;
        return `${speech}`;
    }

    get typeSpeech() {
        var isCheckbox = this.getModel().subtype === 'checkbox';
        return isCheckbox ? 'Multiple Choice' : 'Single Choice';
    }

    /** @inheritdoc */
    getStateToSpeech() {
        var state = this.getState();
        if (typeof state === 'string') {
            state = [state];
        }
        var selected = [];
        for (let i = 0; i < state.length; i++) {
            var choiceValue = state[i];
            var choice = this._getOptionByValue(choiceValue);
            if (choice) {
                selected.push(choice);
            }
        }
        return this._getOptionsToSpeech(selected);
    }

    isAnswerInputAvailable() {
        return this.getModel().subtype === 'radio' ? super.isAnswerEmpty() : true;
    }

    /** @inheritdoc */
    joinState(state) {
        var currentState = this.getState();
        if (typeof state === 'undefined' || state.length === 0) {
            // no changes
            return currentState;
        }
        else if (this.getModel().subtype === 'radio') {
            // last answer
            return state[state.length - 1];
        }
        else {
            for (var i = 0; i < state.length; i++) {
                var newVal = state[i];
                if (currentState.indexOf(newVal) == -1) {
                    currentState.push(newVal);
                }
            }
            return currentState;
        }
    }

};
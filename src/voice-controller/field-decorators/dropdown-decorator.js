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

import Command from './../common/command';
import MatchObject from './../common/match-object';
import McDropdownDecorator from './mc-dropdown-decorator';
import SpeechRecognitionService from './../common/speech-recognition-service';
import strings from './../common/strings';
import utils from './../common/controller-utils';

const NEXT_COMMAND = 'Next field';
const PREV_COMMAND = 'Previous field';


export default class DropdownDecorator extends McDropdownDecorator {

    static get DEFAULT_SPEECH() {
        return 'Dropdown field';
    }

    static get TYPE() {
        return 'dropdown';
    }

    constructor(domElement, settings, commandService) {
        super(domElement, settings, commandService);

        //add ordinal numbers
        this.ready(()=> {
            let model = this.getModel();
            for (let i = 0; i < model.options.length; i++) {
                let option = model.options[i];
                option.alternatives = option.alternatives || [];
                option.alternatives.push(utils.toWordsOrdinal(i + 1));
                option.alternatives.push(`${strings.ORDINAL_CHOICE_PREFIX_1} ${(i + 1)}`);
                option.alternatives.push(`${strings.ORDINAL_CHOICE_PREFIX_2} ${(i + 1)}`);
            }
        });
    }

    /** @inheritdoc */
    get helpSpeech() {
        return `${this.helpSpeechAdvanced} ${strings.commands.HELP_HINT}`;
    }

    /** @inheritdoc */
    get helpSpeechAdvanced() {
        var speech = `${strings.messages.MC_HINT_SINGLE}`;
        return `${speech} ${strings.commands.LIST_OPTIONS_HINT}`;
    }

    /** @inheritdoc */
    get typeSpeech() {
        return 'Dropdown';
    }

    /** @inheritdoc */
    getStateByRecognized(recognized) {
        var state = super.getStateByRecognized(recognized);
        return state[state.length - 1];
    }

    /** @inheritdoc */
    getStateToSpeech() {
        var state = this.getState();
        var option = this._getOptionByValue(state);
        return option.speech;
    }

    /** @inheritdoc */
    joinState(state) {
        var currentState = this.getState();
        if (!state) {
            return currentState;
        }
        else {
            return state;
        }
    }

}
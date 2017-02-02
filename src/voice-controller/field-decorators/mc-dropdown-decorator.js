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
import Field from './../common/item/field';
import MatchObject from './../common/match-object';
import SpeechRecognitionService from './../common/speech-recognition-service';
import strings from './../common/strings';

export default class McDropdownDecorator extends Field {

    /**
     *
     * @returns {Array.<MatchObject>}
     * @private
     */
    _getMatchObjects() {
        if (this._matchObjects)
            return this._matchObjects;

        var map = [];
        var model = this.getModel();
        var options = model.options || model.choices;
        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            let withoutPunctuation = option.display.replace(/[\.,!\?;:]\s?/g, ' ').trim();

            /*if (option.display) {
                map.push(new MatchObject(option.display, option, MatchObject.TYPES.ANSWER));
            }*/
            if (withoutPunctuation && option.display !== withoutPunctuation) {
                map.push(new MatchObject(withoutPunctuation, option, MatchObject.TYPES.ANSWER));
            } else {
                map.push(new MatchObject(option.display, option, MatchObject.TYPES.ANSWER));
            }
            if (option.speech && option.speech !== option.display) {
                map.push(new MatchObject(option.speech, option, MatchObject.TYPES.ANSWER));
            }
            if (option.alternatives) {
                option.alternatives.forEach((a)=> {
                    map.push(new MatchObject(a, option, MatchObject.TYPES.ANSWER));
                });
            }
        }
        // sort by key length (from highest to lowest) to prefer lager collocation
        map.sort(function (a, b) {
            return b.key.length - a.key.length;
        });

        this._matchObjects = map;

        return map;
    }

    _getOptionByValue(value) {
        var model = this.getModel();
        var options = model.options || model.choices;
        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            if (option.value == value) {
                return option;
            }
        }
    }

    _getOptionsToSpeech(choices = this.getModel().options || this.getModel().choices) {
        return choices.map(function (v) {
                return v.speech || v.display;
            }).join(', ') + '.';
    }

    /** @inheritdoc */
    getAnswerAlternatives() {
        if (this._answerAlternatives)
            return this._answerAlternatives;

        var alternatives = [];
        var matchObjects = this._getMatchObjects();
        for (var i = 0; i < matchObjects.length; i++) {
            alternatives.push(matchObjects[i].key);
        }

        this._answerAlternatives = alternatives;
        return alternatives;
    }

    /** @inheritdoc */
    getCommands() {
        var self = this;
        if (!this._commands) {
            this._commands = [
                new Command(
                    [
                        strings.commands.LIST_OPTIONS,
                        strings.commands.LIST_OPTIONS_ALT_1,
                        strings.commands.LIST_OPTIONS_ALT_2
                    ],
                    function () {
                        self.commandService.execute(strings.commands.SAY, self._getOptionsToSpeech());
                    }
                )
            ];
        }
        return this._commands;
    }

    /** @inheritdoc */
    getStateByRecognized(recognized) {
        var state = [];
        for (var i = 0; i < recognized.length; i++) {
            if (recognized[i].type === MatchObject.TYPES.ANSWER) {
                state.push(recognized[i].value);
            }
        }

        return state.map(function (v) {
            return v.value;
        });
    }

    /** @inheritdoc */
    isAnswerEmpty() {
        var state = this.getState();
        return typeof state === 'undefined' || state.length === 0;
    }

    /** @inheritdoc */
    matchRecognized(recognized) {
        return SpeechRecognitionService.matchRecognition(recognized, this._getMatchObjects());
    }

}
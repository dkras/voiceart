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

import utils from './../common/controller-utils';
import MatchObject from './../common/match-object';
import Field from './../common/item/field';

export default class FitbEssayDecorator extends Field {

    /** @inheritdoc */
    getStateByRecognized(recognized) {
        var state = [];
        for (var i = 0; i < recognized.length; i++) {
            var r = recognized[i];
            if (r instanceof MatchObject && r.type != MatchObject.TYPES.COMMAND) {
                state.push(r.value);
            }
        }
        return state.join(' ');
    }

    /** @inheritdoc */
    getStateToSpeech() {
        return this.getState();
    }

    /** @inheritdoc */
    isAnswerEmpty() {
        var state = this.getState();
        return typeof state === 'undefined' || state.length === 0;
    }

    /** @inheritdoc */
    joinState(state) {
        var currentState = this.getState();
        if (state) {
            // if string does not begin with a punctuation mark, whitespace should be added
            state = state.trim().search(/[\.,!?:;]/) == 0 ? state : ' ' + state;
            currentState = currentState.trim() + state;
        }
        return currentState;
    }

    /** @inheritdoc */
    matchRecognized(recognized) {
        utils.joinNeighboringStrings(recognized);
        for (var i = 0; i < recognized.length; i++) {
            if (typeof recognized[i] === 'string') {
                recognized[i] = new MatchObject(recognized[i], recognized[i]);
            }
            else if (recognized[i] instanceof MatchObject && recognized[i].type == MatchObject.TYPES.COMMAND) {
                break;
            }
        }
        return recognized;
    }

};
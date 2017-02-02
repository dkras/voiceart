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

import FitbEssayDecorator from './fitb-essay-decorator';
import MatchObject from './../common/match-object';
import commonUtils from './../../common/common-utils.js';
import utils from './../common/controller-utils';
import MET from 'cg-met';

/**
 *
 * @param {string} mathML
 * @returns {boolean}
 */
function isEmptyMathML(mathML) {
    //todo: refactor this
    return !mathML || mathML == '<math><mrow></mrow></math>' || mathML == '<math><mrow><mo>&#160;</mo></mrow></math>';
}

/**
 *
 * @param {string} mathML
 * @returns {string}
 */
function getContentMathML(mathML) {
    var mathMLRegexp = /(<math[^>]*>)([\s\S]*)(<\/math>)/ig;
    return isEmptyMathML(mathML) ? '' : mathML.replace(mathMLRegexp, '$2');
}

export default class FitbDecorator extends FitbEssayDecorator {

    static get DEFAULT_SPEECH() {
        return 'Fill in the blank field';
    }

    static get TYPE() {
        return 'fitb';
    }

    get typeSpeech() {
        return 'Fill in the blank';
    }

    set lang(language){
        this.settings.lang = language;
    }

    /** @inheritdoc */
    getStateToSpeech() {
        var speech;
        switch (this.getModel().subtype) {
            case 'math':
                /*var mml = this.getState();
                speech = commonUtils.getSpeechByMathML(mml);*/
                var latex = this.getState();
                speech = commonUtils.getSpeechByLatex(latex);
                break;
            default:
                speech = super.getStateToSpeech();
        }
        return speech;
    }


    /** @inheritdoc */
    isAnswerEmpty() {
        switch (this.getModel().subtype) {
            case 'math':
                /*var mml = this.getState();
                return isEmptyMathML(mml);*/
                return  this.getState() == '';
                break;
            default:
                return super.isAnswerEmpty();
        }
    }

    /** @inheritdoc */
    joinState(state) {
        var currentState = this.getState();
        switch (this.getModel().subtype) {
            case 'math':
                /*var currentPart = getContentMathML(currentState);
                var addingPart = getContentMathML(state);*/
                return `${currentState}${state}`;
                break;
            default:
                return super.joinState(state);
        }
    }

    /** @inheritdoc */
    getStateByRecognized(recognized) {
        var state = '';
        switch (this.getModel().subtype) {
            case 'math':
                for (var i = recognized.length - 1; i >= 0; i--) {
                    if (recognized[i].type != MatchObject.TYPES.COMMAND) {
                        state = recognized[i].value;
                        break;
                    }
                }
                /*var mml = text2exp.mathml(state);
                delete mml.attributes.title;
                state = mml.toString();*/
                var state = MET(state, {output: 'latex', lang: this.settings.lang.substr(0,2)});
                break;
            default:
                state = super.getStateByRecognized(recognized);
        }
        return state;
    }

};
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

import AbstractFieldAdapter from './abstract-field-adapter';
import ItemEvent from './../common/item/item-event';
import utils from './../common/controller-utils';
import strings from './../common/strings';

const CHOICE_CLASS = `${strings.selectors.NAMESPACE}-${strings.selectors.CHOICE}`;

export default class CommonMcAdapter extends AbstractFieldAdapter {

    addFocusEmission() {
        this.model.choices.forEach((choice) => {
            choice.element.addEventListener('focus', () => {
                this.emit(ItemEvent.FIELD_FOCUSED);
            });
        });
    }

    buildModel() {
        if (this._model) {
            return this._model
        }

        var domElement = this.domElement;
        var subtype = (domElement.matches(`.${strings.selectors.NAMESPACE}-${strings.selectors.MC}-radio`))? 'radio' : 'checkbox';
        var model = {
            subtype: subtype,
            choices: []
        };

        var cElements = domElement.querySelectorAll(`.${CHOICE_CLASS}`);
        for (var i = 0; i < cElements.length; i++) {
            let cElement = cElements[i];
            let inputElement = cElement.querySelector('input') || cElement;
            let choice = {
                display: utils.getElementDisplayText(cElement, CHOICE_CLASS),
                value: inputElement.value,
                element: inputElement
            };
            choice.speech = utils.getElementSpeech(cElement) || utils.getElementSpeech(choice.element) || choice.display;
            var alts = cElement.getAttribute('alternatives') || choice.element.getAttribute('alternatives');
            choice.alternatives = alts ? alts.split(',') : [];

            model.choices.push(choice);
        }

        this._model = model;
        return this._model;
    }

    focus() {
        if (this.model.choices.length) {
            this.model.choices[0].element.focus();
        }
    }

    getState() {
        var choices = this.model.choices;
        var state = [];
        for (var i = 0; i < choices.length; i++) {
            var choice = choices[i];
            if (choice.element.checked) {
                state.push(choice.value);
            }
        }
        return this.model.subtype === 'radio' ? (state[0] || '') : state;
    }

    /**
     *
     * @param {Array.<string>|string} state
     */
    setState(state) {
        if (typeof state === 'string') {
            state = [state];
        }

        var choices = this.model.choices;
        for (var i = 0; i < choices.length; i++) {
            var choice = choices[i];
            choice.element.checked = state.indexOf(choice.value) != -1;
        }
    }

    clear() {
        var choices = this.model.choices;
        for (var i = 0; i < choices.length; i++) {
            choices[i].element.checked = false;
        }
    }

};
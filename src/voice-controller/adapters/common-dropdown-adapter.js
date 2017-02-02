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
import utils from './../common/controller-utils'
import strings from './../common/strings'

const OPTION_CLASS = `${strings.selectors.NAMESPACE}-${strings.selectors.OPTION}`;

export default class CommonDropdownAdapter extends AbstractFieldAdapter {

    /** @inheritdoc */
    _initHook() {
        super._initHook();
        this.selectElement = this.domElement.querySelector('select');
    }

    /** @inheritdoc */
    addFocusEmission() {
        this.selectElement.addEventListener('focus', () => {
            this.emit(ItemEvent.FIELD_FOCUSED);
        });
    }

    /** @inheritdoc */
    buildModel() {
        if (this._model) {
            return this._model
        }

        var domElement = this.domElement;
        var model = {
            options: []
        };

        var oElements = domElement.querySelectorAll(`.${OPTION_CLASS}`);
        for (var i = 0; i < oElements.length; i++) {
            let oElement = oElements[i];
            let option = {
                display: utils.getElementDisplayText(oElement, OPTION_CLASS),
                value: oElement.value
            };
            option.speech = utils.getElementSpeech(oElement) || option.display;
            var alts = oElement.getAttribute('alternatives');
            option.alternatives = alts ? alts.split(',') : [];

            model.options.push(option);
        }
        this._model = model;

        return this._model;
    }

    /** @inheritdoc */
    clear() {
        this.setState('');
    }

    /** @inheritdoc */
    focus() {
        this.selectElement.focus();
    }

    /** @inheritdoc */
    getState() {
        return this.selectElement.value;
    }

    /** @inheritdoc */
    setState(state) {
        this.selectElement.value = state;
    }

};
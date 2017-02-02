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

const SELECT_SELECTOR = 'select';
const OPTION_SELECTOR = `${SELECT_SELECTOR} option[value]:not([value=""])`;

export default class CxpDropdownAdapter extends AbstractFieldAdapter {

    /** @inheritdoc */
    _initHook() {
        super._initHook();
        this.selectElement = this.domElement.matches(SELECT_SELECTOR) ? this.domElement : this.domElement.querySelector(SELECT_SELECTOR);
    }

    /** @inheritdoc */
    addFocusEmission() {
        this.selectElement.addEventListener('focus', () => {
            this.emit(ItemEvent.FIELD_FOCUSED);
        });
    }

    /** @inheritdoc */
    buildModel() {
        let model = {
            options: []
        };

        var oElements = this.domElement.querySelectorAll(OPTION_SELECTOR);
        for (let i = 0; i < oElements.length; i++) {
            let oElement = oElements[i];
            let option = {
                display: utils.getElementText(oElement),
                value: oElement.value
            };
            option.speech = oElement.getAttribute('speech') || option.display;

            model.options.push(option);
        }

        return model;
    }

    /** @inheritdoc */
    clear() {
        this.selectElement.value = '';
    }

    /** @inheritdoc */
    focus() {
        this.selectElement.focus();
    }

    /** @inheritdoc */
    getState() {
        return this.selectElement.selectedIndex == -1 ? '' : this.selectElement.options[this.selectElement.selectedIndex].getAttribute('value') || '';
    }

    /** @inheritdoc */
    setState(state) {
        this.selectElement.value = state;
    }

};
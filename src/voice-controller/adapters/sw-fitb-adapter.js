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

import TextEntryAdapter from './text-entry-adapter';
import ItemEvent from './../common/item/item-event';

const TYPE = 'fitb';
const FIELD_SELECTOR = `#hardKeyboardInput`;

export default class CgFitbAdapter extends TextEntryAdapter {

    _getFieldSelector() {
        return FIELD_SELECTOR;
    }

    /** @inheritdoc */
    addFocusEmission() {
        super.addFocusEmission();
    }

    /** @inheritdoc */
    buildModel() {
        if (!this._model) {
            this._model = {};
        }
        return this._model;
    }

    /** @inheritdoc */
    focus() {
        super.focus();
    }

    /** @inheritdoc */
    getState() {
        var state = this.domElement.querySelector('.hardkeyboard > .asciiPreview .MathJax').getAttribute('data-mathml');
        return state;
    }

    /** @inheritdoc */
    setState(state) {
        this.fieldElement.value = state;
        this.domElement.querySelector('.hard-keyboard-container .qq-key-number').click();
        this.domElement.querySelector('.hard-keyboard-container .qq-key-button.q-dkgray-bkgd').click();
    }

    /** @inheritdoc */
    joinState(state) {
        this.fieldElement.value = this.fieldElement.value + state;
    }

};
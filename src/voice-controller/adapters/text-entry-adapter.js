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

export default class TextEntryAdapter extends AbstractFieldAdapter {

    /** @inheritdoc */
    _initHook() {
        super._initHook();
        this.fieldElement = this.domElement.matches(this._getFieldSelector()) ? this.domElement : this.domElement.querySelector(this._getFieldSelector());
    }

    _getFieldSelector() {
        throw new Error(`${this.constructor.name}._getFieldSelector: method is not defined.`);
    }

    /** @inheritdoc */
    addFocusEmission() {
        this.fieldElement.addEventListener('focus', () => {
            this.emit(ItemEvent.FIELD_FOCUSED);
        });
    }

    /** @inheritdoc */
    buildModel() {
        if (!this._model) {
            this._model = {};
        }
        return this._model;
    }

    /** @inheritdoc */
    clear() {
        this.setState('');
    }

    /** @inheritdoc */
    focus() {
        this.fieldElement.focus();
    }

    /** @inheritdoc */
    getState() {
        return this.fieldElement.value;
    }

    /** @inheritdoc */
    setState(state) {
        this.fieldElement.value = state;
    }

    /** @inheritdoc */
    joinState(state) {
        this.fieldElement.value = this.fieldElement.value + state;
    }

};
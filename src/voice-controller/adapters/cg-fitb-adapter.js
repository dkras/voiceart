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

var MathQuill = require('../../common/mathquill');

const TYPE = 'fitb';
const FIELD_SELECTOR = `.${TYPE}-field`;

export default class CgFitbAdapter extends TextEntryAdapter {

    _getFieldSelector() {
        return FIELD_SELECTOR;
    }

    /** @inheritdoc */
    addFocusEmission() {
        switch (this.model.subtype) {
            case 'math':
                var textarea = this.fieldElement.querySelector('textarea');
                if (!textarea)
                    return;
                textarea.addEventListener('focus', () => {
                    this.emit(ItemEvent.FIELD_FOCUSED);
                });
                break;
            default:
                super.addFocusEmission();
        }
    }

    /** @inheritdoc */
    buildModel() {
        if (!this._model) {
            this._model = {
                subtype: this.domElement.getAttribute('widget-subtype') || 'text'
            };
        }
        return this._model;
    }

    /** @inheritdoc */
    focus() {
        switch (this.model.subtype) {
            case 'math':
                var event = document.createEvent('MouseEvents');
                event.initEvent('click', true, true);
                this.fieldElement.dispatchEvent(event);
                break;
            default:
                super.focus();
        }
    }

    /** @inheritdoc */
    getState() {
        var state;
        switch (this.model.subtype) {
            case 'math':
                //todo: remove jQuery
                var MQ = MathQuill.getInterface(2);
                var mathField = MQ.MathField(this.fieldElement);
                state = mathField.latex();
                break;
            default:
                state = super.getState();
        }
        return state;
    }

    /** @inheritdoc */
    setState(state) {
        switch (this.model.subtype) {
            case 'math':
                //todo: remove jQuery
                var MQ = MathQuill.getInterface(2); // for backcompat
                var mathField = MQ.MathField(this.fieldElement);
                mathField.latex(state);
                break;
            default:
                super.setState(state);
        }
    }

    /** @inheritdoc */
    joinState(state) {
        switch (this.model.subtype) {
            case 'math':
                //todo: remove jQuery
                var MQ = MathQuill.getInterface(2); // for backcompat
                var mathField = MQ.MathField(this.fieldElement);
                mathField.write(state);
                break;
            default:
                super.addState(state);
        }
    }

};
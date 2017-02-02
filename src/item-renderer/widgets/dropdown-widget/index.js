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
import './dropdown.less';

import AbstractWidget from './../abstract-widget';

const PT_PREFIX = 'dropdown-';
const FIELD_CLASS = PT_PREFIX + 'field';
const OPTION_CLASS = PT_PREFIX + 'option';

const _DEFAULT_CONFIG = {
    options: []
};

function generateOption(props) {
    var attributes;
    if (props.value) {
        attributes = {
            value: props.value
        };
    }
    else {
        attributes = {
            disabled: 'disabled',
            selected: 'selected'
        };
    }

    if (props.speech) {
        attributes.speech = props.speech;
    }
    if (Array.isArray(props.alternatives)) {
        attributes.alternatives = props.alternatives.join();
    }

    return $(`<option>${props.display}</option>`).
        attr(attributes).
        addClass(OPTION_CLASS);
}

export default class DropdownWidget extends AbstractWidget {

    static get DEFAULT_CONFIG() {
        return _DEFAULT_CONFIG;
    }

    constructor(config) {
        super(config);

        var inputName = `${this.config.id}_input`;
        this.$dropdown = $('<select></select>').
            attr('input-name', inputName).
            addClass(FIELD_CLASS).
            appendTo(this.$domElement);

        this.options = [];

        for (var i = 0; i < this.config.options.length; i++) {
            let optionProps = this.config.options[i];
            let $choice = generateOption(optionProps).
                appendTo(this.$dropdown);

            let option = $.extend({}, optionProps, {
                element: $choice
            });

            this.options.push(option);
        }
    }

    configHook() {
        super.configHook();
        // add empty option
        this.config.options.unshift({
            'value': '',
            'display': ''
        });
    }

    /**
     *
     * @returns {string}
     */
    getState() {
        return this.$dropdown.val();
    }

    /**
     *
     * @param {string} state
     */
    setState(state) {
        this.$dropdown.val(state);
    }

}
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
import './mc.less';

import AbstractWidget from './../abstract-widget';
import ContentUnit from './../../core/content-unit';

const PT_PREFIX = 'mc-';
const CHOICE_HOLDER_CLASS = PT_PREFIX + 'choices';
const CHOICE_CLASS = PT_PREFIX + 'choice';
const HORIZONTAL_CLASS = PT_PREFIX + 'horizontal';

const SUBTYPES = {
    RADIO: 'radio',
    CHECKBOX: 'checkbox'
};

function generateChoice(props, type, name, id) {
    var $choice = $(`<div class="${CHOICE_CLASS}"></div>`);

    var $input = $(`<input id="${id}" name="${name}" type="${type}" value="${props.value}">`).
        on('focus', function () {
            var $thisInput = $(this);
            // wait while mouse-focusing had checked
            setTimeout(() => {
                if ($thisInput.is(':focus') && !$thisInput.hasClass('is-mouse-focused')) {
                    $choice.addClass('focused');
                }
            }, 0);
        }).
        on('blur', function () {
            $choice.removeClass('focused');
        }).
        appendTo($choice);
    var $label = $(`<label for="${id}"></label>`).
        appendTo($choice);

    if (props.speech) {
        $input.attr('speech', props.speech);
    }
    if (Array.isArray(props.alternatives)) {
        $input.attr('alternatives', props.alternatives.join());
    }

    // add aria-labels to input label
    if (props.speech) {
        if (typeof props.display == 'string') {
            props.display = $.extend(true, {}, ContentUnit.DEFAULT_CONFIG, {value: props.display})
        }
        else if (Array.isArray(props.display)) {
            props.display = $.extend(true, {}, ContentUnit.DEFAULT_CONFIG, {
                type: ContentUnit.CONTENT_TYPES.MULTI,
                value: props.display
            })
        }
        // save defined value if it exists
        props.display.speech = props.display.speech || props.speech;
    }
    var contentUnit = new ContentUnit(props.display, true);
    contentUnit.$domElement.removeAttr('speech');
    $label.append(contentUnit.$domElement);
    return $choice;
}

function shuffle(array) {
    var randomIndex, randomElement;
    let tempArr = array.splice(0, array.length);

    while (tempArr.length) {
        randomIndex = Math.floor(Math.random() * tempArr.length);
        randomElement = tempArr.splice(randomIndex, 1)[0];
        array.push(randomElement);
    }
    return array;
}

export default class McWidget extends AbstractWidget {

    static get DEFAULT_CONFIG() {
        if (!this._DEFAULT_CONFIG) {
            this._DEFAULT_CONFIG = {
                subtype: SUBTYPES.RADIO,
                randomOrder: true,
                choices: []
            };
        }
        return this._DEFAULT_CONFIG;
    }

    constructor(config) {
        super(config);

        this.$domElement.attr('widget-subtype', this.config.subtype);

        this.$domElement.append('<hr>');


        var inputName = `${this.config.id}_input`;
        this.$choices = $('<div></div>').
            attr('input-name', inputName).
            addClass(CHOICE_HOLDER_CLASS).
            appendTo(this.$domElement);

        if(!!this.config.horizontal)
            this.$choices.addClass(HORIZONTAL_CLASS);


        this.choices = [];

        for (var i = 0; i < this.config.choices.length; i++) {
            let choiceProps = this.config.choices[i];
            let $choice = generateChoice(choiceProps, this.config.subtype, inputName, `${inputName}_${i}`).
                appendTo(this.$choices);

            let choice = $.extend({}, choiceProps, {
                element: $choice.find('input')[0]
            });

            this.choices.push(choice);
        }
    }

    configHook() {
        super.configHook();
        var config = this.config;

        if (config.randomOrder) {
            shuffle(config.choices);
        }
    }

    /**
     *
     * @param {Array.<string>|string} state
     */
    setState(state) {
        if (typeof state === 'string') {
            state = [state];
        }
        for (var i = 0; i < this.choices.length; i++) {
            var choice = this.choices[i];
            choice.element.checked = state.indexOf(choice.value) != -1;
        }
    }

    /**
     *
     * @returns {Array.<string>|string}
     */
    getState() {
        var state = [];
        for (var i = 0; i < this.choices.length; i++) {
            var choice = this.choices[i];
            if (choice.element.checked) {
                state.push(choice.value);
            }
        }
        return this.config.subtype === SUBTYPES.RADIO ? state[0] || '' : state;
    }
}
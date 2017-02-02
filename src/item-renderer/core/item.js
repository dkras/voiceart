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

import EventEmitter from 'events';
import shortid from 'shortid';
import Constants from './../common/constants';
import ContentUnit from './content-unit';
import GradePanel from './grade-panel';

const ITEM_CLASS = Constants.ITEM_CLASS;
const CONTENT_CLASS = `${ITEM_CLASS}-content`;
const SECTION_CLASS = `${ITEM_CLASS}-section`;
const FOOTER_CLASS = `${ITEM_CLASS}-footer`;

const DEFAULT_SETTINGS = {
    gradable: true
};

class Item extends EventEmitter {

    /**
     *
     * @returns {Object} EVENTS
     * @property SUBMIT {string} - Fire when item submit
     * @property RESPONSE_RECEIVED {string} - Fire when response from grade service received
     */
    static get EVENTS() {
        if (!this._EVENTS) {
            this._EVENTS = {
                SUBMIT: 'submit',
                RESPONSE_RECEIVED: 'response_received'
            };
        }
        return this._EVENTS;
    }


    /**
     * @alias ItemRenderer
     * @param {Element} element - Container element
     * @param {Config} config - Item configuration sample
     * @param {Object} - Task configuration
     * @param {boolean} settings.gradable=true - If TRUE, ItemRenderer will perform grading after the user has submitted the answer.
     */
    constructor(element, config, settings) {
        super();
        this.$rootElement = $(element);
        this.applyConfig(config);
        this.settings = $.extend(true, {}, DEFAULT_SETTINGS, settings);

        this.id = `item_${shortid.generate()}`;

        this.$domElement = $('<div></div>').
            attr({
                'id': this.id
            }).
            addClass(ITEM_CLASS).
            appendTo(this.$rootElement);

        this.$content = $('<div></div>').
            attr('id', `${this.id}_content`).
            addClass(CONTENT_CLASS).
            appendTo(this.$domElement);

        this.$footer = $('<div></div>').
            addClass(FOOTER_CLASS).
            appendTo(this.$domElement);

        this.widgets = [];
        this.sections = [];

        this.config.sections.forEach((sectionConfig, index) => {
            var section = {
                $domElement: $('<div></div>').
                    attr('id', `${this.id}_section_${index}`).
                    addClass(SECTION_CLASS).
                    appendTo(this.$content),
                units: []
            };
            // if section speech is defined it should be added to aria-label and element should be tabbable
            if (sectionConfig.speech) {
                section.$domElement.attr({
                    'speech': sectionConfig.speech,
                    'aria-label': sectionConfig.speech,
                    'tabindex': 0
                });
            }
            sectionConfig.units.forEach((cuConfig) => {
                if (cuConfig.type == ContentUnit.CONTENT_TYPES.WIDGET) {
                    cuConfig.value.id = `${this.id}_widget_${this.widgets.length}`;
                }
                var withAriaLabel = !sectionConfig.speech;
                var contentUnit = new ContentUnit(cuConfig, withAriaLabel, 0);
                section.$domElement.append(contentUnit.$domElement);
                section.units.push(contentUnit);
                if (cuConfig.type == ContentUnit.CONTENT_TYPES.WIDGET) {
                    this.widgets.push(contentUnit.widget);
                }
            });
            this.sections.push(section);
        });


        this.$content.append('<hr>');

        if (this.settings.gradable) {
            this.gradePanel = new GradePanel(this.$footer, {
                widgets: this.widgets,

            });
            this.gradePanel.on(GradePanel.EVENTS.SUBMIT, (answer) => {
                this.emit(this.constructor.EVENTS.SUBMIT, answer);
            });
            this.gradePanel.on(GradePanel.EVENTS.RESPONSE_RECEIVED, (response) => {
                this.emit(this.constructor.EVENTS.RESPONSE_RECEIVED, response);
            });

            //todo: remove this, when server grading will be implemented
            this.gradePanel.correct = this.config.correct;
            this.gradePanel.feedbacks = this.config.feedbacks;
        }

    }

    applyConfig(config) {
        // adduction to the required format
        if (!Array.isArray(config.sections)) {
            config.sections = [config.sections];
        }
        this.config = config;
    }

};

export default Item;
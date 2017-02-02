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

import Item from './../common/item';
import ItemEvent from './../common/item/item-event';

const ITEM_CLASS = 'cg-item';
const FIELD_CLASS = 'pt-widget';
const SECTION_CLASS = `${ITEM_CLASS}-section`;

const GRADE_PANEL_SELECTOR = `.${ITEM_CLASS}-grade-panel`;
const SUBMIT_BUTTON_SELECTOR = `.${ITEM_CLASS}-submit-btn`;

export default class CgItem extends Item {

    static get CONTEXT() {
        return 'cg';
    }

    /** @inheritdoc */
    static determineFieldType(domElement) {
        var widgetElement = this.isField(domElement) ? domElement : domElement.querySelector(`.${FIELD_CLASS}`);
        let pt = widgetElement.getAttribute('widget-type');
        if (!pt) {
            throw new Error(`${this.name}.determineFieldType: item-type attribute is undefined.`);
        }
        return pt;
    }

    /** @inheritdoc */
    static findItemElement(domElement) {
        return domElement.matches(`.${ITEM_CLASS}`) ? domElement : domElement.querySelector(`.${ITEM_CLASS}`);
    }

    /** @inheritdoc */
    static getSectionElements(domElement) {
        return domElement.querySelectorAll(`.${SECTION_CLASS}`);
    }

    /** @inheritdoc */
    static isField(domElement) {
        return domElement.matches(`.${FIELD_CLASS}`);
    }

    /** @inheritdoc */
    _addEventsEmission() {
        this.submitButton.addEventListener('click', ()=> {
            this.emit(ItemEvent.SUBMIT);
        });
        //todo: MutationObserver works only in modern browsers - need support older versions.
        var submitObserver = new MutationObserver((mutations)=> {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'status') {
                    var status = this.gradePanel.getAttribute('status');
                    if (status === 'response-received') {
                        var response = {
                            score: parseFloat(this.gradePanel.getAttribute('score')),
                            feedback: this.gradePanel.getAttribute('feedback')
                        };
                        this.emit(ItemEvent.RESPONSE_RECEIVED, response);
                    }
                }
            });
        });
        submitObserver.observe(this.gradePanel, {attributes: true});
    }

    /** @inheritdoc */
    _initHook(){
        super._initHook();

        this.gradePanel = this.domElement.querySelector(GRADE_PANEL_SELECTOR);
        this.submitButton = this.gradePanel.querySelector(SUBMIT_BUTTON_SELECTOR);
    }

    /** @inheritdoc */
    isSubmitted() {
        return this.gradePanel.getAttribute('is-submitted') == 'true';
    }

    /** @inheritdoc */
    submit() {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('click', true, true);
        this.submitButton.dispatchEvent(clickEvent);
    }

};
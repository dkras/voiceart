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
import utils from './../common/controller-utils';

const ITEM_CLASS = 'covalent-item';
const ITEM_CLASS_PREFIX = `${ITEM_CLASS}-`;

const FIELD_SELECTOR = '.ci-input';
const FITB_MC_CHECKBOX_SELECTOR = '.ci-checkbox-group';
const FITB_MC_RADIO_SELECTOR = '.ci-radio-group';
const FITB_DD_SELECTOR = `select${FIELD_SELECTOR}`;
const FITB_TEXT_SELECTOR = `.ci-text, ${FIELD_SELECTOR}[type="text"], .ci-mathml-mathml`;

const GRADE_ELEMENT_SELECTOR = '.ci-grade';
const SUBMIT_BUTTON_SELECTOR = '.ci-submit input';

const FIELD_MARK_CLASS = 'cg-vc-marked-field-container';

var handlers = {
    FITB_HANDLER: 'fitb',
    PLUGIN_HANDLER: 'plugin'
};

/**
 *
 * @param {Array.<Node>} elements
 * @returns {Node}
 */
function findOverallParent(elements) {
    elements = elements.map(element => {
        let parents = [];
        do {
            let parent = parents.length ? parents[0].parentNode : element.parentNode;
            parents.unshift(parent);
        }
        while (parents[0].parentNode);
        return {
            element: element,
            parents: parents
        }
    });

    var commonParent;
    for (var i = 0; i < elements[0].parents.length; i++) {
        var parent = elements[0].parents[i];
        var everyHasThisParent = elements.every(a => {
            return a.parents[i] === parent;
        });
        if (everyHasThisParent) {
            commonParent = parent;
        }
        else {
            break;
        }
    }
    return commonParent;
}

export default class CxpItem extends Item {

    static get CONTEXT() {
        return 'cxp';
    }


    /**
     *
     * @param {Element} domElement
     * @returns {string}
     * @private
     */
    static _getHandler(domElement) {
        if (domElement.matches(`.${ITEM_CLASS_PREFIX}${handlers.FITB_HANDLER}, .${ITEM_CLASS_PREFIX}${handlers.FITB_HANDLER} *`)) {
            return handlers.FITB_HANDLER;
        }
        else if (domElement.matches(`.${ITEM_CLASS_PREFIX}${handlers.PLUGIN_HANDLER}, .${ITEM_CLASS_PREFIX}${handlers.PLUGIN_HANDLER} *`)) {
            return handlers.PLUGIN_HANDLER;
        }
        else {
            throw new Error(`${this.name}._getHandler: unsupported item handler.`);
        }
    }

    /**
     * @param {Element} domElement
     * @returns {number}
     * @private
     */
    static _getNumberOfFields(domElement) {
        return this._getFieldsMap(domElement).size;
    }

    /**
     *
     * @param {Element} domElement
     * @returns {Map.<Element | Array.<Element>>}
     * @private
     */
    static _getFieldsMap(domElement) {
        var fields = new Map();
        if (!(domElement instanceof Element))
            return fields;
        var inputs = domElement.querySelectorAll(`${FIELD_SELECTOR}[name]`);
        for (var i = 0; i < inputs.length; i++) {
            let name = inputs[i].getAttribute('name');
            if (fields.get(name)) {
                let field = fields.get(name);
                if (!Array.isArray(field)) {
                    field = [field];
                    fields.set(name, field);
                }
                field.push(inputs[i]);
            }
            else {
                fields.set(name, inputs[i]);
            }
        }

        return fields;
    }

    /**
     *
     * @param {Node} node
     * @returns {boolean}
     * @private
     */
    static _isUnit(node) {
        return (node.nodeName === '#text' && node.textContent.trim())
            || (node instanceof Element && !node.matches('.ci-rejoinder-detail-wrapper, br, hr, script'));
    }

    static _unwrapUntilFieldLevel(element) {
        var elements = [];
        for (var i = 0; i < element.childNodes.length; i++) {
            var childNode = element.childNodes[i];
            if (this.isField(childNode)) {
                elements.push(childNode);
            }
            else if (this._getNumberOfFields(childNode)) {
                elements.splice(elements.length, 0, ...this._unwrapUntilFieldLevel(childNode));
                if (utils.breaksLine(childNode)) {
                    // add line break to do not lost it when sections will be split
                    elements.push(document.createElement('br'));
                }
            }
            else {
                elements.push(childNode);
            }
        }
        return elements;
    }

    /** @inheritdoc */
    static determineFieldType(domElement) {
        if (domElement.matches(FITB_MC_RADIO_SELECTOR) || domElement.matches(FITB_MC_CHECKBOX_SELECTOR) || domElement.querySelector('input[type="radio"], input[type="checkbox"]')) {
            return 'mc';
        }
        else if (domElement.matches(FITB_DD_SELECTOR)) {
            return 'dropdown';
        }
        else if (domElement.matches(FITB_TEXT_SELECTOR) || domElement.querySelector(FITB_TEXT_SELECTOR)) {
            return 'fitb';
        }

        throw new Error(`${this.name}.determineFieldType: unknown item type.`);
    }

    /** @inheritdoc */
    static findItemElement(domElement) {
        return domElement.matches(`.${ITEM_CLASS}`) ? domElement : domElement.querySelector(`.${ITEM_CLASS}`);
    }

    /** @inheritdoc */
    static getSectionElements(domElement) {
        var contentElement;
        var itemHandler = this._getHandler(domElement);
        switch (itemHandler) {
            case handlers.FITB_HANDLER:
                contentElement = domElement.querySelector('.ci-question');
                break;
            case handlers.PLUGIN_HANDLER:
                contentElement = domElement.querySelector('.ci-item.mtqengine');
                var fieldsMap = this._getFieldsMap(domElement);
                fieldsMap.forEach((field) => {
                    if (Array.isArray(field)) {
                        // mark overall container (which contains inputs with the same name) as field
                        let fieldContainer = findOverallParent(field);
                        fieldContainer.classList.add(FIELD_MARK_CLASS);
                    }
                    else if (field.matches('.mtqengine-symbolic')) {
                        field.parentNode.classList.add(FIELD_MARK_CLASS);
                    }
                    //todo: add for other fields
                });
                break;
            default:
                throw new Error(`${this.name}.getSectionElements: unsupported item handler type "${itemHandler}".`);
        }

        var units = this._unwrapUntilFieldLevel(contentElement);
        var isMultipleFields = this._getNumberOfFields(contentElement) > 1;

        var sections = [];
        var section = [];
        sections.push(section);
        var hasField = false;
        for (var i = 0; i < units.length; i++) {
            var unitElement = units[i];
            section.push(unitElement);
            if (isMultipleFields) {
                if (this.isField(unitElement)) {
                    hasField = true;
                }

                if (utils.breaksLine(unitElement) && hasField) {
                    section = [];
                    sections.push(section);
                    hasField = false;
                }
            }
        }
        //if last section has not field, all units should be moved to penultimate
        if (sections.length > 1 && !hasField) {
            sections[sections.length - 2].splice(sections[sections.length - 2].length, 0, ...sections[sections.length - 1]);
            sections.splice(-1);
        }
        // remove not unit elements
        sections.forEach(section => {
            for (var i = section.length - 1; i >= 0; i--) {
                if (!this._isUnit(section[i])) {
                    section.splice(i, 1);
                }
            }
        });

        return sections;
    }

    /** @inheritdoc */
    static isField(domElement) {
        if (!(domElement instanceof Element))
            return false;

        return domElement.matches(`${FIELD_SELECTOR}[name]`)
            || domElement.matches(`.${FIELD_MARK_CLASS}`)
            || domElement.matches(FITB_MC_RADIO_SELECTOR)
            || domElement.matches(FITB_MC_CHECKBOX_SELECTOR);
    }

    /** @inheritdoc */
    _addEventsEmission() {
        this.submitButton.addEventListener('click', ()=> {
            this.emit(ItemEvent.SUBMIT);
        });
        //todo: MutationObserver works only in modern browsers - need support older versions.
        var submitObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                // emit after receiving grading result
                if (mutation.type === 'attributes' && mutation.attributeName === 'value' && this.gradeElement.getAttribute('value') != null) {
                    var response = JSON.parse(this.gradeElement.getAttribute('value'));
                    if (typeof response.score != 'undefined') {
                        this.emit(ItemEvent.RESPONSE_RECEIVED, response);
                    }
                    //todo: emit Submit
                }
            });
        });
        submitObserver.observe(this.gradeElement, {attributes: true});
    }

    /** @inheritdoc */
    _initHook() {
        super._initHook();

        this.gradeElement = this.domElement.querySelector(GRADE_ELEMENT_SELECTOR);
        this.submitButton = this.domElement.querySelector(SUBMIT_BUTTON_SELECTOR);
    }

    /** @inheritdoc */
    isSubmitted() {
        var grade = JSON.parse(this.gradeElement.getAttribute('value'));
        return typeof grade.properties.submitted !== 'undefined' && grade.properties.submitted[0] === 'true';
    }

    /** @inheritdoc */
    submit() {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('click', true, true);
        this.submitButton.dispatchEvent(clickEvent);
    }

};
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

import commonUtils from '../../common/common-utils';
import converter from 'number-to-words';

const MATH_JAX_CLASS = 'MathJax';
const SPEECH_RULE_ENGINE_SERVICE_URL = 'https://devdemo3.competentum.com:444/mmltospeech';

export default {

    /**
     * Returns true if element breaks line.
     * @param {Element} element
     * @returns {boolean}
     */
    breaksLine: function breaksLine(element) {
        return element instanceof Element
            && (
                getComputedStyle(element).display === 'block'
                || getComputedStyle(element).display === 'table-row'
                || element.nodeName === 'BR'
            );
    },

    /**
     *
     * @param {string} html
     * @returns {Node}
     */
    createHTML: function createHTML(html) {
        var div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstChild;
    },

    /**
     * Returns passed array instance with joined neighboring strings.
     * @example joinNeighboringStrings(['hello', 'world']) => ['hello world']
     * @param {Array} arr - this array instance will be changed.
     * @param {string} [separator = ' '] Optional. Specifies a string to separate neighboring strings of the array. If omitted, the array elements are separated with a whitespace.
     * @returns {Array}
     */
    joinNeighboringStrings: function joinNeighboringStrings(arr, separator = ' ') {
        var i = 0;
        while (i < arr.length) {
            if (typeof arr[i] === 'string' && arr[i + 1] && typeof arr[i + 1] === 'string') {
                arr[i] += separator + arr[i + 1];
                arr.splice(i + 1, 1);
            }
            else {
                i++;
            }
        }
        return arr;
    },

    /**
     * Determine whether element are assigned is given class.
     * @param {Element} element - DOM element where class will be searched.
     * @param {string} className - the class name to search for.
     * @returns {boolean}
     */
    hasClass: function hasClass(element, className) {
        return element.matches('.' + className);
    },

    /**
     *
     * @param {Element} element
     * @param {string} className
     */
    addClass: function (element, className) {
        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g")
        if (re.test(element.className)) return
        if(!(!!document.documentMode && element.tagName.toLowerCase() === 'svg'))
            element.className = (element.className + " " + className).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
    },

    /**
     *
     * @param {Element} element
     * @param {string} className
     */
    removeClass: function (element, className) {
        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g")
        element.className = element.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
    },

    /**
     * Converts a number into words.
     * @example toWords(12) => 'twelve'
     * @param {number} num
     * @returns {string}
     */
    toWords: function toWords(num) {
        return converter.toWords(num).replace('-', ' ');
    },

    /**
     * Converts a number into ordinal words.
     * @example toWordsOrdinal(12) => 'twelfth'
     * @param {number} num
     * @returns {string}
     */
    toWordsOrdinal: function toWordsOrdinal(num) {
        return converter.toWordsOrdinal(num).replace('-', ' ');
    },

    /**
     * Converts string with numbers to words.
     * @example convertToFullWords('21st') => 'twenty first'
     * @param {string} str
     * @returns {string}
     */
    convertToFullWords: function convertToFullWords(str) {
        var NUMBER_REG_EXP = /\d+/g;
        // examples: 1st, 1-st, 11-th
        var ORDINAL_REG_EXP = /(\d*1-?st|\d*2-?nd|\d*3-?rd|\d*[04-9]-?th|\d*(11|12|13)-?th)(?!\w)/g;

        // replace ordinal numbers, example: 1st -> first
        str = str.replace(ORDINAL_REG_EXP, (a) => {
            return ` ${this.toWordsOrdinal(a)} `;
        });
        // replace other numbers, example: 1 -> one
        str = str.replace(NUMBER_REG_EXP, (a) => {
            return ` ${this.toWords(a)} `;
        });
        // remove double whitespaces
        str = str.replace(/ +/, ' ');

        return str.trim();
    },

    //todo: implement async
    /**
     *
     * @param {Element} element
     * @param {boolean} [addDotsToLineBreak=false] - If 'true' dots will be added to each line break to make pause in speech.
     * @returns {string}
     */
    getElementSpeech: function(element, addDotsToLineBreak = false){
        var text = '';
        var label = element.getAttribute('aria-label');
        var speech = element.getAttribute('speech');
        var labelId = element.getAttribute('aria-labelledby');
        var descId = element.getAttribute('aria-describedby');
        if (!!label) {
            text = label;
        } else if(!!speech){
            text =  speech;
        } else if(!!labelId){
            text =  document.querySelector(`#${labelId}`).textContent;
        } else if(!!descId){
            text = document.querySelector(`#${descId}`).textContent;
        }
        return this.processText(text, addDotsToLineBreak);
    },

    /**
     *
     * @param {Element} element
     * @param {string} className - className specifying element entity for looking for title at element with class ${className}-title
     * @param {boolean} [addDotsToLineBreak=false] - If 'true' dots will be added to each line break to make pause in speech.
     * @returns {string}
     */
    getElementDisplayText: function (element, className, addDotsToLineBreak = false) {
        var text = '';
        var titleEl = element.querySelector(`.${className}-title`);
        var labelId = element.getAttribute('aria-labelledby');
        var id = element.getAttribute('id');
        if (element.querySelector('*') == null && element.textContent.length > 0) {
            text = element.textContent;
        } else if(!!titleEl){
            text = titleEl.textContent;
        } else if(!!document.querySelector(`label`)){
            text = document.querySelector(`label`).textContent;
        } else if(!!labelId){
            text = document.querySelector(`#${labelId}`).textContent;
        }
        return this.processText(text, addDotsToLineBreak);
    },

    /**
     *
     * @param {Element} element
     * @param {boolean} [addDotsToLineBreak=false] - If 'true' dots will be added to each line break to make pause in speech.
     * @returns {string}
     */
    getElementText: function getElementText(element, addDotsToLineBreak = false) {
        var text = '';

        if (element.nodeName == '#text') {
            text = element.textContent;
        }
        else if (element.nodeName == '#comment') {
            text = element.textContent;
        }
        else if (element.getAttribute('speech')) {
            text = element.getAttribute('speech');
        }
        //todo: implement context independently
        else  if (this.hasClass(element, 'cg-item-content-unit') && element.getAttribute('type') == 'latex' ) {
            //todo: implement async
            text = element.getAttribute('aria-label');
        } else if (this.hasClass(element, 'cg-item-content-unit') && element.getAttribute('type') == 'mathml' || element.matches('math, .MathJax, .MathJax_SVG, .MathJax_CHTML,  .MathJax_PHTML')) {
            //todo: implement async
            text = this.getFormulaSpeech(element);
        }
        else {
            for (var i = 0; i < element.childNodes.length; i++) {
                var childNode = element.childNodes[i];
                text += this.getElementText(childNode);
            }
        }

        return this.processText(text, addDotsToLineBreak);
    },

    processText(text, addDotsToLineBreak){
        // remove line breaks
        text = text.replace(/[\r\n]/g, ' ');
        // and multiple whitespaces
        text = text.replace(/\s+/g, ' ');

        if (addDotsToLineBreak) {
            var hasWhitespaceOnBegin = text.match(/^\s/g);
            var hasWhitespaceOnEnd = text.match(/\s$/g);

            if (text.trim()) {
                text = text.trim();
                // add dot to make pause in speech if there is no punctuation mark
                if (this.breaksLine(element) && !text.match(/[\.,\?!]$/)) {
                    text += '.';
                }
                // return spaces as it was
                text = hasWhitespaceOnBegin ? ' ' + text : text;
                text = hasWhitespaceOnEnd ? text + ' ' : text;
            }
        }

        return text;
    },

    /**
     *
     * @param {Element} element
     * @param {boolean} [async = false]
     * @returns {string|Promise}
     */
    getFormulaSpeech: function getFormulaSpeech(element, async = false) {
        var mml = '';
        var mmlElement;

        if (element.matches('script[type="math/mml"]') || element.matches('math')) {
            mmlElement = element;
        }
        else {
            mmlElement = element.querySelector('script[type="math/mml"]') || element.querySelector('math');
        }
        if (!mmlElement) {
            mmlElement = element.parentNode.querySelector('script[type="math/mml"]') || element.parentNode.querySelector('math');
        }

        if (mmlElement.tagName == 'math') {
            mml = mmlElement.outerHTML;
        }
        else {
            // extract from MathJax script node
            mml = mmlElement.innerHTML.trim();
        }
        return commonUtils.getSpeechByMathML(mml, async);
    },

    /**
     * Removes current node from tree.
     * @param {Node} node
     */
    removeNode: function removeNode(node) {
        if (node.parentNode)
            node.parentNode.removeChild(node);
    }

};
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
import MET from 'cg-met';

const SPEECH_RULE_ENGINE_SERVICE_URL = 'https://devdemo3.competentum.com:444/mmltospeech';

export default {

    /**
     * Adds class to element.
     * @param {Element} element
     * @param {string} className
     */
    addClass: function addClass(element, className) {
        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
        if (re.test(element.className)) return;
        element.className = (element.className + " " + className).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
    },

    /**
     * Removes class from element.
     * @param {Element} element
     * @param {string} className
     */
    removeClass: function removeClass(element, className) {
        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
        element.className = element.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    },

    /**
     * Focus to element with saving 'is-mouse-focused' class.
     * @param {Element} element
     */
    forcedFocus: function forcedFocus(element) {
        var self = this;
        if (document.activeElement && document.activeElement.matches('.is-mouse-focused')) {
            this.addClass(element, 'is-mouse-focused');
            element.addEventListener('blur', onBlur);
        }
        element.focus();

        function onBlur() {
            self.removeClass(element, 'is-mouse-focused');
            element.removeEventListener('blur', onBlur);
        }
    },

    /**
     *
     * @param {string} latex - LATEX which should be converted to speech.
     * @returns {string}
     */
    getSpeechByLatex: function(latex){
        return MET(latex, {output: 'text', lang: 'en'});
    },

    /**
     *
     * @param {string} mml - MathML which should be converted to speech.
     * @param {boolean} [async = false]
     * @returns {string|Promise}
     */
    getSpeechByMathML: function getSpeechByMathML(mml, async = false) {
        var speech = '';
        var promise = new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', SPEECH_RULE_ENGINE_SERVICE_URL, async);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        speech = xhr.responseText;
                        resolve(speech);
                    }
                    else {
                        reject(new Error(`Error in getSpeechByMathML method: Can not convert MathML to speech: ${mml}`));
                    }
                }
            };
            xhr.send('mml=' + encodeURIComponent(mml));
        });
        return async ? promise : speech;
    }

};
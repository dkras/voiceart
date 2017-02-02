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

import CONST from './../common/constants';
import commonUtils from './../../common/common-utils';

var MathQuill = require('../../common/mathquill');

const MATH_JAX_URL = '//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML';

const _CONTENT_TYPES = {
    HTML: 'html',
    IMAGE: 'image',
    MATHML: 'mathml',
    LATEX: 'latex',
    MULTI: 'multi',
    TEXT: 'text',
    WIDGET: 'widget'
};

const UNIT_CLASS = `${CONST.ITEM_CLASS}-content-unit`;

const _DEFAULT_CONFIG = {
    type: _CONTENT_TYPES.TEXT,
    value: ''
};

export default class ContentUnit {

    static get CONTENT_TYPES() {
        return _CONTENT_TYPES;
    }

    static get DEFAULT_CONFIG() {
        return _DEFAULT_CONFIG;
    }

    /**
     *
     * @param {string} mathML
     * @returns {*|jQuery|HTMLElement}
     */
    static createMathMLFormula(mathML) {
        var thisClass = this;
        var $formula = $(`<span>${mathML}</span>`);
        // render with MathJax
        if (window.MathJax) {
            // timeout because this element is not added to the page yet
            setTimeout(()=> {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            }, 0);
        }
        else if (!thisClass.mathJaxStartLoad) {
            thisClass.mathJaxStartLoad = true;
            $.ajax({
                url: MATH_JAX_URL,
                dataType: "script"
            });
        }
        return $formula;
    }


    /**
     * Create static element with latex formula
     * @param {string} latex
     * @returns {*|jQuery|HTMLElement}
     */
    static createLatexFormula(latex) {
        var thisClass = this;
        var MQ = MathQuill.getInterface(2);
        var $formula = $(`<span>${latex}</span>`);

        MQ.StaticMath($formula[0]);
        return $formula;
    }


    /**
     *
     * @param {object} widgetConfig
     * @returns {Widget}
     */
    static createWidget(widgetConfig) {
        var Widget = require('./../widgets/' + widgetConfig.type + '-widget/index.js');
        return new Widget(widgetConfig);
    }

    /**
     *
     * @param {object} imageConfig
     * @returns {*|jQuery|HTMLElement}
     */
    static createImage(imageConfig) {
        if (typeof imageConfig === 'string') {
            imageConfig = {
                link: imageConfig
            };
        }

        var $image = $(`<img src="${imageConfig.link}">`);

        if (imageConfig.align) {
            $image.css('display', 'block');
            switch (imageConfig.align) {
                case "left":
                    $image.css({
                        'margin-right': 'auto'
                    });
                    break;
                case "right":
                    $image.css({
                        'margin-left': 'auto'
                    });
                    break;
                case "center":
                    $image.css({
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                    });
                    break;
                default:
                    throw new Error(`${this.name}.createImage: unknown image align ${imageConfig.align}`);
            }
        }
        return $image;
    }

    /**
     *
     * @param {string | {type: string, value: *} | Array.<string|{type: string, value: *}>} config
     * @param {boolean} [withAriaLabel = false] - If true aria-label attribute will be added.
     * @param {number | undefined} [tabindex = undefined] - tabindex of created element. Will be add if only withAriaLabel parameter is true.
     */
    constructor(config, withAriaLabel = false, tabindex = undefined) {
        this.withAriaLabel = withAriaLabel;
        this.tabindex = tabindex;
        this.applyConfig(config);
        this.render();
    }

    applyConfig(config) {
        // adduction to the required format
        if (Array.isArray(config)) {
            config = {
                type: this.constructor.CONTENT_TYPES.MULTI,
                value: config
            }
        }
        else if (typeof config === 'string') {
            config = {
                value: config
            };
        }
        $.extend(true, this, this.constructor.DEFAULT_CONFIG, config);
    }

    render() {
        switch (this.type) {

            case this.constructor.CONTENT_TYPES.HTML:
            case this.constructor.CONTENT_TYPES.TEXT:
                this.$domElement = $(`<span>${this.value}</span>`);
                break;

            case this.constructor.CONTENT_TYPES.IMAGE:
                this.$domElement = this.constructor.createImage(this.value);
                break;

            case this.constructor.CONTENT_TYPES.MATHML:
                this.$domElement = this.constructor.createMathMLFormula(this.value);
                break;

            case this.constructor.CONTENT_TYPES.LATEX:
                this.$domElement = this.constructor.createLatexFormula(this.value);
                break;

            case this.constructor.CONTENT_TYPES.MULTI:
                this.$domElement = $('<span></span>');
                this.subUnits = [];
                this.value.forEach((config)=> {
                    let subUnit = new ContentUnit(config, this.withAriaLabel && !this.speech, this.tabindex);
                    this.subUnits.push(subUnit);
                    this.$domElement.append(subUnit.$domElement);
                });
                break;

            case this.constructor.CONTENT_TYPES.WIDGET:
                this.widget = this.constructor.createWidget(this.value);
                this.$domElement = this.widget.$domElement;
                break;

            default:
                throw new Error(`${this.constructor.name}.render: unknown content type ${this.type}`);
        }

        this.$domElement.
            attr('type', this.type).
            addClass(UNIT_CLASS);
        if (this.speech) {
            this.$domElement.attr('speech', this.speech);
        }

        if (!this.withAriaLabel)
            return;

        if (this.speech) {
            this.$domElement.attr('aria-label', this.speech);
        }
        else if (this.type == this.constructor.CONTENT_TYPES.MATHML) {
            commonUtils.getSpeechByMathML(this.value, true).
                then((speech) => {
                    this.$domElement.attr('aria-label', speech);
                });
        } else if (this.type == this.constructor.CONTENT_TYPES.LATEX) {
            this.$domElement.attr('aria-label', commonUtils.getSpeechByLatex(this.value));
        }

        if (typeof this.tabindex !== 'undefined' && this.type != this.constructor.CONTENT_TYPES.WIDGET) {
            this.$domElement.attr('tabindex', this.tabindex);
        }
    }

};
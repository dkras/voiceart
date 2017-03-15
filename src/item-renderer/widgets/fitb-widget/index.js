/*
 Copyright 2016
 Pilyugin Alexey
 Shayakhmetov Ilnaz

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
import './fitb.less';

import AbstractWidget from './../abstract-widget';

var MathQuill = require('../../../common/mathquill');


const PT_PREFIX = 'fitb-';
const FIELD_CLASS = PT_PREFIX + 'field';

export default class FitbWidget extends AbstractWidget {

    static get DEFAULT_CONFIG() {
        if (!this._DEFAULT_CONFIG) {
            this._DEFAULT_CONFIG = {
                align: 'left',
                width: '140px',
                placeholder: 'Type answer here',
                subtype: 'text'
            };
        }
        return this._DEFAULT_CONFIG;
    }

    constructor(config) {
        super(config);

        this.$domElement.attr('widget-subtype', this.config.subtype);

        if(this.config.subtype === 'text') {
            this.$field = $('<input type="text"/>').addClass(FIELD_CLASS).attr('placeholder', this.config.placeholder).css({
                'text-align': this.config.align,
                'width': this.config.width
            }).appendTo(this.$domElement);
        } else if(this.config.subtype === 'math') {
            var $field = $(`<span/>`).addClass(FIELD_CLASS).addClass('js-paletteField').attr('placeholder', this.config.placeholder).css({
                'text-align': this.config.align,
                'width': this.config.width
            }).appendTo(this.$domElement);
            var MQ = MathQuill.getInterface(2); // for backcompat
            this.$field = MQ.MathField($field[0], ('mathquill' in this.config)? this.config.mathquill : {});
            if(this.isTouchDevice())
                this.$field.el().querySelector('textarea').setAttribute('readonly', true);
            //this.$field.palette({notEditable: false, config: {skin: 'black-small', hidden: (('palette' in this.config) && !this.config.palette)}});
        }
    }

    /**
     *
     * @returns {string}
     */
    getState() {
        if(this.config.subtype === 'text') {
            return this.$field.val();
        } else if(this.config.subtype === 'math') {
            return this.$field.latex();
        }
    }

    /**
     *
     * @param {string} state
     */
    setState(state) {
        if(this.config.subtype === 'text') {
            return this.$field.val(state);
        } else if(this.config.subtype === 'math') {
            return this.$field.latex(state);
        }
    }

    isTouchDevice() {
        return 'ontouchstart' in window        // works on most browsers
            || 'onmsgesturechange' in window;  // works on IE10 with some false positives
    }


};
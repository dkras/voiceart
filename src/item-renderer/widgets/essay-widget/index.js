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
import './essay.less';

import AbstractWidget from './../abstract-widget';

const PT_PREFIX = 'essay-';
const FIELD_CLASS = PT_PREFIX + 'field';

const PLACEHOLDER_TEXT = 'Type answer here';

export default class EssayWidget extends AbstractWidget {

    constructor(config) {
        super(config);

        this.$field = $('<textarea></textarea>').
            addClass(FIELD_CLASS).
            attr('placeholder', PLACEHOLDER_TEXT).
            appendTo(this.$domElement);
    }

    /**
     *
     * @returns {string}
     */
    getState() {
        return this.$field.val();
    }

    /**
     *
     * @param {string} state
     */
    setState(state) {
        this.$field.val(state);
    }


};
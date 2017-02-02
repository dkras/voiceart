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

const _TYPES = {
    ANSWER: 'answer',
    COMMAND: 'command'
};

export default class MatchObject {

    static get TYPES() {
        return _TYPES;
    }

    /**
     *
     * @param {string} key - corresponding string.
     * @param {*} value
     * @param {string} [type]
     */
    constructor(key, value, type) {
        /**
         * Corresponding string, which will be searched in recognized phrase.
         * @name MatchObject#key
         * @type {string}
         */
        this.key = key;

        /**
         * Value corresponding to the key
         * @name MatchObject#value
         * @type {*}
         */
        this.value = value;

        if (typeof type === 'string') {
            this.type = type;
        }
    }

    /**
     *
     * @returns {string}
     */
    get type() {
        return this._type;
    }

    /**
     *
     * @param {string} value
     */
    set type(value) {
        this._type = value;
    }

}
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
import doubleMetaphone from 'double-metaphone';

/**
 * Class for fuzzy (phonetic) words matching
 */
export default class Word {

    /**
     * Returns phonetic representation of word.
     * @param {string} val
     * @returns {Array.<string>}
     */
    static getPhonetic(val) {
        return doubleMetaphone(val);
    }

    /**
     * Return true if words are phonetically equivalent.
     * @param {Word} word1
     * @param {Word} word2
     * @returns {boolean}
     */
    static isEqual(word1, word2) {
        return word1.value === word2.value
            || word1.phonetic[0] === word2.phonetic[0]
            || word1.phonetic[1] === word2.phonetic[1];
    }

    /**
     *
     * @param {string} value
     */
    constructor(value) {
        this.value = value;
        this.phonetic = this.constructor.getPhonetic(this.value);
    }

    /**
     * Return true if words are phonetically equivalent.
     * @param {Word} word
     * @returns {boolean}
     */
    isEqual(word) {
        return this.constructor.isEqual(this, word);
    }
};
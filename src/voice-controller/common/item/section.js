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

import AsyncInitialized from './../async-initialized';
import Field from './field';
import Unit from './unit';

/**
 * Part of item with separate task. Each section can contain several fields.
 */
export default class Section extends AsyncInitialized {

    /**
     *
     * @param {Array.<Unit>} units
     * @param {string} [speech]
     */
    constructor(units, speech = '') {
        super();
        /**
         * @type {Array.<Unit>}
         */
        this.units = [];
        /**
         * @type {Array.<Field>}
         */
        this.fields = [];
        units.forEach((unit) => {
            this.addUnit(unit);
        });

        this.speech = speech;
        this._initReady();
    }

    /** @inheritdoc */
    _getReady() {
        if (this._ready)
            return this._ready;

        // resolve ready promise when all units will be ready
        return Promise.all(
            this.units.map(function (unit) {
                return unit._getReady();
            })
        )
    }

    /**
     * Adds unit to units array and to fields array if it is field.
     * IMPORTANT: if this method called not inside Section constructor, added unit will not affect to ready promise
     * @param {Unit} unit
     */
    addUnit(unit) {
        this.units.push(unit);
        if (unit instanceof Field) {
            this.fields.push(unit);
        }
    }

    /**
     *
     * @returns {string}
     */
    get taskSpeech() {
        if (this.speech)
            return this.speech;
        var taskSpeech = '';
        this.units.forEach((unit) => {
            taskSpeech += ' ' + unit.taskSpeech.trim();
        });
        return taskSpeech.trim();
    }

};
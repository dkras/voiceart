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

import EventEmitter from 'events';

/**
 * @class AsyncInitialized
 * @extends EventEmitter
 */
export default class AsyncInitialized extends EventEmitter {

    /**
     * Returns Promise which should be resolved, when instance is fully initialized.
     * @returns {Promise.<*>}
     * @private
     */
    _getReady() {
        if (this._ready)
            return this._ready;

        return Promise.resolve();
    }

    /**
     * IMPORTANT: This method must be called in the constructor of subclass to define _ready promise.
     * @private
     */
    _initReady() {
        this._ready = this._getReady();
    }

    /**
     * Register a handler to be called when instance initialization complete.
     * @param {function} handler
     */
    ready(handler) {
        if (!this._ready) {
            throw new Error(`${this.constructor.name}._ready: property is not defined.`);
        }
        return this._ready.then(handler);
    }

};
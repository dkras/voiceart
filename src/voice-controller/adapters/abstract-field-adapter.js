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
 * Base Adapter class from which other Adapters must be inherited.
 */
export default class AbstractFieldAdapter extends EventEmitter {

    constructor(domElement) {
        super();
        this.domElement = domElement;
        this._initHook();
        this.model = this.buildModel();
        this.addFocusEmission();
    }

    /**
     * This method is called in constructor and can be used to define additional properties in descendant classes.
     * @private
     */
    _initHook() {
    }

    /**
     * In this method ItemEvent.FIELD_FOCUSED event should be emitted when it occurred.
     * Must be implemented for each adapter.
     */
    addFocusEmission() {
        throw new Error(`${this.constructor.name}.addFocusEmission: method is not defined.`);
    }

    /**
     * Returns field's model.
     */
    buildModel() {
        throw new Error(`${this.constructor.name}.buildModel: method is not defined.`);
    }

    /**
     * Clears current state.
     */
    clear() {
        throw new Error(`${this.constructor.name}.clear: method is not defined.`);
    }

    /**
     * Sets focus to field's element.
     */
    focus() {
        throw new Error(`${this.constructor.name}.focus: method is not defined.`);
    }

    /**
     * Returns current field's state.
     * @returns {*}
     */
    getState() {
        throw new Error(`${this.constructor.name}.getState: method is not defined.`);
    }

    /**
     * Sets current field's state.
     * @param {*} state
     */
    setState(state) {
        throw new Error(`${this.constructor.name}.setState: method is not defined.`);
    }

};
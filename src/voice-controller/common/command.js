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

import MatchObject from './match-object'
import strings from './strings'

export default class Command {

    static get PREFIX() {
        return strings.SERVICE_NAME ? `${strings.SERVICE_NAME} ` : '';
    }

    /**
     * @constructor Command
     * @param {Array.<string>|string} names - command names
     * @param {function} handler - function which will be called when command will be executed
     * @param {string} [helpSpeech] - speech which will be read when Help command will be executed
     * @param {number} [helpOrder] - the lower helpOrder, the sooner command will be read in the overall help speech
     */
    constructor(names, handler, helpSpeech = '', helpOrder = 999) {
        this.names = typeof names === 'string' ? [names] : names;
        this.handler = handler;
        this.helpSpeech = helpSpeech;
        this.helpOrder = helpOrder;
    }

    /**
     * @param {boolean} [strict=true] - if this flag is true returns only service name prefixed commands.
     * @returns {Array.<MatchObject>}
     */
    getMatchObjects(strict = true) {
        if (!this._matchObjects) {
            this._strictMatchObjects = [];
            this._matchObjects = [];
            this.names.forEach((name)=> {
                this._strictMatchObjects.push(new MatchObject(`${this.constructor.PREFIX}${name}`, this, MatchObject.TYPES.COMMAND));
                this._matchObjects.push(new MatchObject(`${this.constructor.PREFIX}${name}`, this, MatchObject.TYPES.COMMAND));
                this._matchObjects.push(new MatchObject(`${name}`, this, MatchObject.TYPES.COMMAND));
            });
        }
        return strict ? this._strictMatchObjects : this._matchObjects;
    }

    execute(...args) {
        console.log(`${this} is executing with parameters: (${args})`);
        return this.handler.apply(null, args);
    }

    toString() {
        return `${this.constructor.name}: (${this.names.join(' | ')})`
    }

};
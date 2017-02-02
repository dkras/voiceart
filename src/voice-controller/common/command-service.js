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

import Command from './command';

export default class CommandService {

    /**
     * @constructor CommandService
     */
    constructor() {
        this._commands = [];
        this._commandsMap = {};
        this.needUpdate = true;
    }

    /**
     *
     * Registered commands array.
     * @returns {Array.<Command>}
     */
    get commands() {
        return this._commands;
    }

    /**
     *
     * Registered commands object.
     * @returns {object}
     */
    get commandsMap() {
        return this._commandsMap;
    }

    /**
     *
     * Returns names of registered commands.
     * @returns {Array.<string>}
     */
    get commandsList() {
        return Object.keys(this.commandsMap);
    }

    /**
     *
     * @param {boolean} [strict=true] - if this flag is true returns only service name prefixed commands.
     * @returns {Array.<MatchObject>}
     */
    getMatchObjects(strict = true) {
        if (!this._matchObjects || this.needUpdate) {
            this._strictMatchObjects = [];
            this._matchObjects = [];
            this.commands.forEach((command)=> {
                this._strictMatchObjects = this._strictMatchObjects.concat(command.getMatchObjects(true));
                this._matchObjects = this._matchObjects.concat(command.getMatchObjects(false));
            });
            // sort by key length (from highest to lowest) to prefer lager collocation
            this._strictMatchObjects.sort(function (a, b) {
                return b.key.length - a.key.length;
            });
            // sort by key length (from highest to lowest) to prefer lager collocation
            this._matchObjects.sort(function (a, b) {
                return b.key.length - a.key.length;
            });
            this.needUpdate = false;
        }

        return strict ? this._strictMatchObjects : this._matchObjects;
    }

    /**
     *
     * Execute registered command and returns its result.
     * @param {Command | string} command - command or command's name
     * @param args - other arguments
     */
    execute(command, ...args) {
        if (typeof command === 'string') {
            if (!this.isCommandRegistered(command)) {
                throw new Error(`${this.constructor.name}.execute: command "${command}" have not registered in the service.`);
            }
            command = this.getCommandByName(command);
        }
        return command.execute(...args);
    }

    /**
     *
     * @param {string} name
     * @returns {Command}
     */
    getCommandByName(name) {
        return this.commandsMap[name.toLowerCase()];
    }

    /**
     *
     * Returns true if command is registered.
     * @param {string} name - command's name
     * @returns {boolean}
     */
    isCommandRegistered(name) {
        return typeof this.getCommandByName(name) !== 'undefined';
    }

    /**
     *
     * Register command in service.
     * @param {Command} command - command's names
     */
    register(command) {
        if (this.commands.indexOf(command) === -1) {
            this.commands.push(command);
            for (var i = 0; i < command.names.length; i++) {
                var name = command.names[i].toLowerCase();
                if (this.isCommandRegistered(name)) {
                    console.warn(`${this.constructor.name}.register: command "${name}" have already registered in the service.`);
                }
                this.commandsMap[name] = command;
            }
            this.needUpdate = true;
        }
        else {
            console.warn(`${this.constructor.name}.register: "${command}" have already registered in the service.`);
        }
    }

    /**
     *
     * Removes command with such name from the service.
     * @param {Command | string} command - command or command's name
     */
    unregister(command) {
        if (typeof command === 'string') {
            command = this.getCommandByName(command);
        }

        if (command) {
            command.names.forEach((name) => {
                delete this.commandsMap[name];
            });
            var index = this.commands.indexOf(command);
            if (index != -1) {
                this.commands.splice(index, 1);
            }
            this.needUpdate = true;
        }
    }
};
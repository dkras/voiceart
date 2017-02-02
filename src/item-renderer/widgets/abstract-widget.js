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

import './widgets.less';

import shortid from 'shortid';

class AbstractWidget {

    static get DEFAULT_CONFIG() {
        if (!this._DEFAULT_CONFIG) {
            this._DEFAULT_CONFIG = {
            }
        }
        return this._DEFAULT_CONFIG;
    }

    /**
     *
     * @param config
     */
    constructor(config) {
        this.config = $.extend(true, {}, this.constructor.DEFAULT_CONFIG, config);

        this.configHook();

        var classes = ['pt-widget', `${this.config.type}-widget`];

        this.$domElement = $('<div></div>').
            attr({
                'widget-type': this.config.type,
                'id': `${this.config.id}`
            }).
            addClass(classes.join(' '));
    }

    /**
     * This method is called in constructor to prepare config object for rendering.
     * Super method must be called from the overridden
     */
    configHook() {
        if (!this.config.id) {
            this.config.id = `${shortid.generate()}_widget`;
        }
    }

    setState(state) {
        throw new Error(`${this.name}.setState: method is not defined.`);
    }

    getState() {
        throw new Error(`${this.name}.getState: method is not defined.`);
    }
}

export default AbstractWidget;
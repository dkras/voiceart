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

import './control-panel.less';

import EventEmitter from 'events';
import merge from 'merge';
import strings from './../common/strings';
import utils from './../common/controller-utils';

var PREFIX = 'cg-voice';
var CONTROL_PANEL_CLASS = `${PREFIX}-cp`;

var BUTTONS_CONTAINER_CLASS = `${CONTROL_PANEL_CLASS}-buttons`;
var INDICATOR_BUTTON_CLASS = `${CONTROL_PANEL_CLASS}-indicator-button`;
var SIDE_BUTTON_CLASS = `${CONTROL_PANEL_CLASS}-side-button`;
var SIDE_TOP_BUTTON_CLASS = 'top-side';
var SIDE_LEFT_BUTTON_CLASS = 'left-side';
var SIDE_BOTTOM_BUTTON_CLASS = 'bottom-side';
var SIDE_RIGHT_BUTTON_CLASS = 'right-side';
var POWER_BUTTON_CLASS = `${CONTROL_PANEL_CLASS}-power-button`;
var HELP_BUTTON_CLASS = `${CONTROL_PANEL_CLASS}-help-button`;
var SETTINGS_BUTTON_CLASS = `${CONTROL_PANEL_CLASS}-settings-button`;
var SKIP_BUTTON_CLASS = `${CONTROL_PANEL_CLASS}-skip-button`;

var MESSAGE_CONTAINER_CLASS = `${CONTROL_PANEL_CLASS}-messages`;
var NOTIFICATION_CONTAINER_CLASS = `${CONTROL_PANEL_CLASS}-notifications`;
var NOTIFICATION_CLASS = `${CONTROL_PANEL_CLASS}-notification`;
var TEMPORARY_CONTAINER_CLASS = `${CONTROL_PANEL_CLASS}-temporary`;

var HIDDEN_CLASS = `${CONTROL_PANEL_CLASS}-hidden`;

var DEFAULT_SETTINGS = {
    notificationFadeoutDelay: 3000,
    mode: 0
};

export var ControlPanelEvent = {
    TURN_ON: 'turn_on',
    TURN_OFF: 'turn_off',
    SKIP: 'skip',
    HELP: 'help',
    SETTINGS: 'settings'
};

export default class ControlPanel extends EventEmitter {

    static get STATES() {
        if (typeof this._STATES === 'undefined') {
            this._STATES = {
                PENDING: 'pending',
                QUIESCENCE: 'quiescence',
                LISTENING: 'listening',
                SPEAKING: 'speaking'
            };
        }
        return this._STATES;
    }

    constructor(element, settings) {
        super();
        this.settings = merge(true, {}, DEFAULT_SETTINGS, settings);
        this.rootElement = element;

        this._render();
        this._addListeners();
        this.state = this.constructor.STATES.QUIESCENCE;
    }

    /**
     *
     * @returns {boolean}
     * @private
     */
    get _turnOnEnabled() {
        return !this.indicatorButton.disabled;
    }

    /**
     *
     * @param {boolean} enabled
     * @private
     */
    set _turnOnEnabled(enabled) {
        this.indicatorButton.disabled = !enabled;
        this.offButton.disabled = enabled;
        if (enabled) {
            this.indicatorButton.setAttribute('title', strings.cp.titles.TURN_ON_BUTTON);
            this.offButton.removeAttribute('title');
        }
        else {
            this.indicatorButton.removeAttribute('title');
            this.offButton.setAttribute('title', strings.cp.titles.TURN_OFF_BUTTON);
        }
    }

    /**
     *
     * @param {boolean} enabled
     * @private
     */
    set _turnOnEnabled1(enabled) {
        this.indicatorButton.disabled = true;
        this.offButton.disabled = false;
        if (enabled) {
            this.offButton.setAttribute('title', strings.cp.titles.TURN_ON_BUTTON);
        }
        else {
            this.offButton.setAttribute('title', strings.cp.titles.TURN_OFF_BUTTON);
        }
    }

    get isActive() {
        if (typeof this._isActive === 'undefined')
            this._isActive = false;
        return this._isActive;
    }

    set isActive(val) {
        this._isActive = val;
        if (this._isActive) {
            this.domElement.setAttribute('active', 'active');
            this.settingsButton.disabled = true;
            this.skipButton.disabled = false;
        }
        else {
            this.domElement.removeAttribute('active');
            this.settingsButton.disabled = false;
            this.skipButton.disabled = true;
        }
    }

    get state() {
        if (!this._state)
            this._state = this.constructor.STATES.QUIESCENCE;
        return this._state;
    }

    set state(val) {
        this._state = val;
        this.domElement.setAttribute('state', val);
        if(this.settings.mode === 0)
            switch (this._state) {
                case this.constructor.STATES.LISTENING:
                case this.constructor.STATES.SPEAKING:
                    this.isActive = true;
                    this._turnOnEnabled = false;
                    break;
                case this.constructor.STATES.PENDING:
                    this.isActive = false;
                    this._turnOnEnabled = false;
                    break;
                case this.constructor.STATES.QUIESCENCE:
                    this.isActive = false;
                    this._turnOnEnabled = true;
                    break;
            }
        else{
            switch (this._state) {
                case this.constructor.STATES.LISTENING:
                case this.constructor.STATES.SPEAKING:
                    this.isActive = true;
                    this._turnOnEnabled1 = false;
                    break;
                case this.constructor.STATES.PENDING:
                    this.isActive = false;
                    this._turnOnEnabled1 = false;
                    break;
                case this.constructor.STATES.QUIESCENCE:
                    this.isActive = false;
                    this._turnOnEnabled1 = true;
                    break;
            }
        }
    }

    get temporary() {
        return this.tempContainer.innerHTML;
    }

    _addListeners() {
        if(this.settings.mode === 0) {
            this.indicatorButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.TURN_ON));
            this.offButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.TURN_OFF));
        } else {
            let self = this;
            this.offButton.addEventListener('click', () => {
                if(self.state === self.constructor.STATES.QUIESCENCE){
                    self.emit(ControlPanelEvent.TURN_ON);
                } else {
                    self.emit(ControlPanelEvent.TURN_OFF);
                }
            });
        }
        this.helpButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.HELP));
        this.settingsButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.SETTINGS));
        this.skipButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.SKIP));
    }

    _render() {
        var elementHTML = `
            <div class="${CONTROL_PANEL_CLASS}">
                <div class="${BUTTONS_CONTAINER_CLASS}">
                    <button aria-label="${strings.cp.ariaLabels.TURN_ON_BUTTON}" class="${INDICATOR_BUTTON_CLASS}"></button>
                    <button class="${SIDE_BUTTON_CLASS} ${SIDE_TOP_BUTTON_CLASS} ${POWER_BUTTON_CLASS}"></button>
                    <button class="${SIDE_BUTTON_CLASS} ${SIDE_LEFT_BUTTON_CLASS} ${HELP_BUTTON_CLASS}" title="${strings.cp.titles.HELP_BUTTON}"></button>
                    <button class="${SIDE_BUTTON_CLASS} ${SIDE_BOTTOM_BUTTON_CLASS} ${SETTINGS_BUTTON_CLASS}" title="${strings.cp.titles.SETTINGS_BUTTON}"></button>
                    <button class="${SIDE_BUTTON_CLASS} ${SIDE_RIGHT_BUTTON_CLASS} ${SKIP_BUTTON_CLASS}" title="${strings.cp.titles.SKIP_BUTTON}"></button>
                </div>
                <div class="${MESSAGE_CONTAINER_CLASS} ${HIDDEN_CLASS}">
                    <span class="${NOTIFICATION_CONTAINER_CLASS}"></span>
                    <span class="${TEMPORARY_CONTAINER_CLASS}"></span>
                </div>
            </div>
        `;
        this.domElement = utils.createHTML(elementHTML);
        this.rootElement.insertBefore(this.domElement, this.rootElement.firstChild);

        this.buttonsContainer = this.domElement.querySelector(`.${BUTTONS_CONTAINER_CLASS}`);
        this.indicatorButton = this.buttonsContainer.querySelector(`.${INDICATOR_BUTTON_CLASS}`);
        this.offButton = this.buttonsContainer.querySelector(`.${POWER_BUTTON_CLASS}`);
        this.helpButton = this.buttonsContainer.querySelector(`.${HELP_BUTTON_CLASS}`);
        this.settingsButton = this.buttonsContainer.querySelector(`.${SETTINGS_BUTTON_CLASS}`);
        this.skipButton = this.buttonsContainer.querySelector(`.${SKIP_BUTTON_CLASS}`);

        this.messageContainer = this.domElement.querySelector(`.${MESSAGE_CONTAINER_CLASS}`);
        this.notificationContainer = this.messageContainer.querySelector(`.${NOTIFICATION_CONTAINER_CLASS}`);
        this.tempContainer = this.messageContainer.querySelector(`.${TEMPORARY_CONTAINER_CLASS}`);
    }

    clearNotifications() {
        this.notificationContainer.innerHTML = '';
        if(!this.notificationContainer.hasChildNodes()) {
            utils.addClass(this.messageContainer, HIDDEN_CLASS);
        }
    }

    clearTemporary() {
        var temp = this.tempContainer.innerHTML;
        this.tempContainer.innerHTML = '';
        if(!this.notificationContainer.hasChildNodes()){
            utils.addClass(this.messageContainer, HIDDEN_CLASS);
        }
        return temp;
    }

    destroy() {
        utils.removeNode(this.domElement);
    }

    hide() {
        this.domElement.style.display = 'none';
    }

    /**
     *
     * @param {string} text
     * @param {string} [type] - can be one of the following strings: 'error' or 'command' or 'answer'.
     */
    pushNotification(text, type) {
        let self = this;
        let nodeRemoved = false;
        if(text.length > 0) {
            utils.removeClass(self.messageContainer, HIDDEN_CLASS);
            var notificationElement = document.createElement('span');
            notificationElement.className = NOTIFICATION_CLASS;
            notificationElement.innerHTML = text;
            if (typeof type === 'string') {
                notificationElement.setAttribute('type', type);
            }
            this.notificationContainer.appendChild(notificationElement);


            notificationElement.addEventListener('transitionend', function () {
                if(!nodeRemoved) {
                    nodeRemoved = true;
                    utils.removeNode(notificationElement);
                }
                if (!self.notificationContainer.hasChildNodes()) {
                    utils.addClass(self.messageContainer, HIDDEN_CLASS);
                }
            });
            setTimeout(()=> {
                // opacity styled with transition, when it will end element should be removed
                notificationElement.style.opacity = 0;
                setTimeout(()=>{
                    if(!nodeRemoved) {
                        nodeRemoved = true;
                        utils.removeNode(notificationElement);
                    }
                    if (!self.notificationContainer.hasChildNodes()) {
                        utils.addClass(self.messageContainer, HIDDEN_CLASS);
                    }
                }, 3000);
            }, this.settings.notificationFadeoutDelay);
        }
    }

    pushTemporary(message) {
        if(message.length > 0) {
            utils.removeClass(this.messageContainer, HIDDEN_CLASS);
            this.tempContainer.innerHTML = this.tempContainer.innerHTML + ' ' + message;
        }
    }

    show() {
        this.domElement.style.display = '';
    }

};
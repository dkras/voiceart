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

import './settings-dialog.less';

import Dialog from 'cg-dialog';
import merge from 'merge';
import Slider from 'cg-slider';
import shortid from 'shortid';
import strings from './../common/strings';
import utils from './../common/controller-utils';
import SpeechSynthesisService from './../common/speech-synthesis-service';

var PREFIX = 'cg-voice';
var SETTINGS_FORM_CLASS = `${PREFIX}-sf`;

var DIALOG_CLASS = `${SETTINGS_FORM_CLASS}-dialog`;
var ADVANCED_MODE_CLASS = `${SETTINGS_FORM_CLASS}-advanced-mode`;
var ROW_CLASS = `${SETTINGS_FORM_CLASS}-row`;
var LABEL_TEXT_CLASS = `${SETTINGS_FORM_CLASS}-label-text`;
var SLIDER_CONTAINER_CLASS = `${SETTINGS_FORM_CLASS}-slider-container`;
var DESCRIPTION_CLASS = `${SETTINGS_FORM_CLASS}-description`;
var SPEECH_SPEED_CLASS = `${SETTINGS_FORM_CLASS}-speech-speed`;
var CHECK_SPEECH_SPEED_CLASS = `${SETTINGS_FORM_CLASS}-speech-speed-check`;
var USER_RESPONSE_TIMEOUT_CLASS = `${SETTINGS_FORM_CLASS}-no-speech`;
var USE_BROWSER_CLASS = `${SETTINGS_FORM_CLASS}-use-browser`;
var LANG_CLASS = `${SETTINGS_FORM_CLASS}-lang`;
var LANG_SELECT_CLASS = `${SETTINGS_FORM_CLASS}-lang_select`;
var ALLOW_COMMANDS_WITHOUT_PREFIX_CLASS = `${SETTINGS_FORM_CLASS}-allow-without-prefix`;
var PAUSE_INTERVAL_CLASS = `${SETTINGS_FORM_CLASS}-pause-interval`;
var RESET_DEFAULTS_CLASS = `${SETTINGS_FORM_CLASS}-reset-defaults`;

export default class SettingsDialog {

    static get DEFAULT_OPTIONS() {
        return {
            defaultSettings: {
                advancedMode: false,
                allowCommandsWithoutPrefix: false,
                userResponseTimeout: 5,
                pauseInterval: 2,
                speechSpeed: 1,
                lang: strings.consts.langs.en
            },
            minSpeechSpeed: 0.5,
            maxSpeechSpeed: 2,
            speechSpeedStep: 0.1,
            minUserResponseTimeout: 2,
            maxUserResponseTimeout: 10,
            minPauseInterval: 1,
            maxPauseInterval: 5,
            timeStep: 1,
            onopen: ()=> {
            },
            onclose: ()=> {
            }
        };
    }

    constructor(options) {
        this.options = merge.recursive(this.constructor.DEFAULT_OPTIONS, options);
        this.form = this._render();
        this.dialog = new Dialog({
            content: this.form,
            classes: DIALOG_CLASS,
            title: strings.sf.labels.DIALOG_TITLE,
            type: Dialog.TYPES.OK,
            onopen: this.options.onopen,
            onclose: this.options.onclose
        });

        this.advancedModeCB = this.form.querySelector(`.${ADVANCED_MODE_CLASS} input`);

        this.speechSpeedSlider = new Slider(
            {
                min: this.options.minSpeechSpeed,
                max: this.options.maxSpeechSpeed,
                step: this.options.speechSpeedStep,
                ariaLabel: strings.sf.labels.SPEECH_SPEED,
                enableTooltips: true,
                withTicks: false,
                tooltipFormatter: value => `×${value}`
            },
            this.form.querySelector(`.${SPEECH_SPEED_CLASS} .${SLIDER_CONTAINER_CLASS}`)
        );
        this.userResponseTimeoutSlider = new Slider(
            {
                min: this.options.minUserResponseTimeout,
                max: this.options.maxUserResponseTimeout,
                step: this.options.timeStep,
                ariaLabel: strings.sf.labels.USER_RESPONSE_TIMEOUT,
                enableTooltips: true,
                tooltipFormatter: value => `${value} ${strings.sf.TIME_SUFFIX}`
            },
            this.form.querySelector(`.${USER_RESPONSE_TIMEOUT_CLASS} .${SLIDER_CONTAINER_CLASS}`)
        );
        this.pauseIntervalSlider = new Slider(
            {
                min: this.options.minPauseInterval,
                max: this.options.maxPauseInterval,
                step: this.options.timeStep,
                ariaLabel: strings.sf.labels.PAUSE_INTERVAL,
                enableTooltips: true,
                tooltipFormatter: value => `${value} ${strings.sf.TIME_SUFFIX}`
            },
            this.form.querySelector(`.${PAUSE_INTERVAL_CLASS} .${SLIDER_CONTAINER_CLASS}`)
        );

        this.checkSpeedButton = this.form.querySelector(`.${CHECK_SPEECH_SPEED_CLASS}`);
        this.checkSpeedButton.addEventListener('click', (e) => {
            SpeechSynthesisService.synthesize(strings.sf.CHECK_PHRASE, {rate: this.settings.speechSpeed});
            e.preventDefault();
        });

        this.allowCommandsWithoutPrefixCB = this.form.querySelector(`.${ALLOW_COMMANDS_WITHOUT_PREFIX_CLASS} input`);
        this.languageSelect = this.form.querySelector(`.${LANG_SELECT_CLASS}`);

        this.resetButton = this.form.querySelector(`.${RESET_DEFAULTS_CLASS}`);
        this.resetButton.addEventListener('click', (e) => {
            this.settings = this.options.defaultSettings;
            e.preventDefault();
        });

        this.settings = this.options.defaultSettings;
    }

    get settings() {
        return {
            advancedMode: this.advancedModeCB.checked,
            allowCommandsWithoutPrefix: this.allowCommandsWithoutPrefixCB.checked,
            speechSpeed: this.speechSpeedSlider.value,
            userResponseTimeout: this.userResponseTimeoutSlider.value,
            pauseInterval: this.pauseIntervalSlider.value,
            lang: this.languageSelect.querySelector(`option:checked`).value
        };
    }

    set settings(settings) {
        this.advancedModeCB.checked = settings.advancedMode;
        this.allowCommandsWithoutPrefixCB.checked = settings.allowCommandsWithoutPrefix;
        this.speechSpeedSlider.value = settings.speechSpeed;
        this.userResponseTimeoutSlider.value = settings.userResponseTimeout;
        this.pauseIntervalSlider.value = settings.pauseInterval;
        let option = this.languageSelect.querySelector(`option[value=${settings.lang}]`)
            if(option)
                option.setAttribute('selected', 'selected');
    }

    /**
     * Returns form element.
     * @returns {Element|Node}
     * @private
     */
    _render() {
        var id = `sf_${shortid.generate()}`;
        var langOptions = ``;
        for(let lang in strings.sf.langs){
            langOptions += `<option value="${lang}" ${(lang === this.options.defaultSettings.lang)? 'selected' : ''}>${strings.sf.langs[lang]}</option>`;
        }
        var elementHTML = `
            <form id="${id}" class="${SETTINGS_FORM_CLASS}">
                <div class="${ROW_CLASS} ${SPEECH_SPEED_CLASS}">
                    <div>
                        <label>
                            <span class="${LABEL_TEXT_CLASS}">${strings.sf.labels.SPEECH_SPEED}:</span>
                        </label><!--
                     --><div class="${SLIDER_CONTAINER_CLASS}"></div><!--
                     --><button class="${CHECK_SPEECH_SPEED_CLASS}" title="${strings.sf.descriptions.CHECK_SPEECH_SPEED}"></button>
                    </div>
                    <div class="${DESCRIPTION_CLASS}">
                        ${strings.sf.descriptions.SPEECH_SPEED}
                    </div>
                </div>
                <div class="${ROW_CLASS} ${ADVANCED_MODE_CLASS}">
                    <div>
                        <label>
                            <span class="${LABEL_TEXT_CLASS}">${strings.sf.labels.ADVANCED_MODE}:</span>
                        </label><!--
                     --><input class="cg-toggle" type="checkbox" aria-labelledby="${id}_advanced_mode_aria">
                    </div>
                    <div class="${DESCRIPTION_CLASS}">
                        ${strings.sf.descriptions.ADVANCED_MODE}
                    </div>
                </div>
                <div class="${ROW_CLASS} ${USER_RESPONSE_TIMEOUT_CLASS}">
                    <div>
                        <label>
                            <span class="${LABEL_TEXT_CLASS}">${strings.sf.labels.USER_RESPONSE_TIMEOUT}:</span>
                        </label><!--
                     --><div class="${SLIDER_CONTAINER_CLASS}"></div>
                    </div>
                    <div class="${DESCRIPTION_CLASS}">
                        ${strings.sf.descriptions.USER_RESPONSE_TIMEOUT}
                    </div>
                </div>
                <div class="${ROW_CLASS} ${PAUSE_INTERVAL_CLASS}">
                    <div>
                        <label>
                            <span class="${LABEL_TEXT_CLASS}">${strings.sf.labels.PAUSE_INTERVAL}:</span>
                        </label><!--
                     --><div class="${SLIDER_CONTAINER_CLASS}"></div>
                    </div>
                    <div class="${DESCRIPTION_CLASS}">
                        ${strings.sf.descriptions.PAUSE_INTERVAL}
                    </div>
                </div>
                <div class="${ROW_CLASS} ${LANG_CLASS}">
                    <div>
                        <label id="${id}_lang_aria">
                            <span class="${LABEL_TEXT_CLASS}">${strings.sf.labels.LANG}:</span>
                        </label><!--
                     --><select class="${LANG_SELECT_CLASS}" aria-labelledby="${id}_lang_aria">
                            ${langOptions}
                        </select>
                    </div>
                </div>
                <div class="${ROW_CLASS} ${ALLOW_COMMANDS_WITHOUT_PREFIX_CLASS}">
                    <div>
                        <label id="${id}_allow_without_prefix_aria">
                            <span class="${LABEL_TEXT_CLASS}">${strings.sf.labels.ALLOW_COMMANDS_WITHOUT_PREFIX}:</span>
                        </label><!--
                     --><input class="cg-toggle" type="checkbox" aria-labelledby="${id}_allow_without_prefix_aria">
                    </div>
                </div>
                <div class="${ROW_CLASS}">
                    <div>
                        <label>
                            <span class="${LABEL_TEXT_CLASS}">${strings.sf.labels.RESET_DEFAULTS}:</span>
                        </label><!--
                     --><button class="${RESET_DEFAULTS_CLASS}" title="${strings.sf.descriptions.RESET_DEFAULTS}">${strings.sf.RESET_DEFAULTS_BUTTON_LABEL}</button>
                    </div>

                </div>

                <div class="cg-screen-readers-only">
                    <label id="${id}_speech_speed_aria">${strings.sf.labels.SPEECH_SPEED}. ${strings.sf.descriptions.SPEECH_SPEED}</label>
                    <label id="${id}_advanced_mode_aria">${strings.sf.labels.ADVANCED_MODE}. ${strings.sf.descriptions.ADVANCED_MODE}</label>
                    <label id="${id}_user_response_timeout_aria">${strings.sf.labels.USER_RESPONSE_TIMEOUT}. ${strings.sf.descriptions.USER_RESPONSE_TIMEOUT}</label>
                    <label id="${id}_pause_interval_aria">${strings.sf.labels.PAUSE_INTERVAL}. ${strings.sf.descriptions.PAUSE_INTERVAL}</label>
                </div>
            </form>
        `;
        return utils.createHTML(elementHTML);
    }

    close() {
        this.dialog.close();
    }

    open() {
        this.dialog.open();
    }

};
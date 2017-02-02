/**
 * Created by 96664_000 on 11.12.2016.
 */
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

import 'mouse-focused';
import './../common/polyfills';
import './dynamic-public-path';

import EventEmitter from 'events';
import merge from 'merge';
import SpeechSynthesisService from './common/speech-synthesis-service';
import SpeechRecognitionService from './common/speech-recognition-service';
import strings from './common/strings';
import dm from 'double-metaphone';

window.dm = dm;

const SETTINGS_KEY = 'cg-vc-settings';

class VoiceCommander extends EventEmitter {

    /**
     * @typedef {Object} CommanderSettings - Voice-controller settings
     * @property {function} ready=noop - Defines Voice-controller ready callback
     * @property {number} speechSpeed=1 - Defines the Voice Controller speech speed
     * @property {string} lang='en' - Recognition language
     * @property {alternative[]} alternatives - recognition phrase alternatives array
     */



    static get DEFAULT_SETTINGS() {
        return {
            alternatives: [],
            ready: function () {
            },
            speechSpeed: 1,
            useBrowser: true,
            lang: 'en-US'
        }
    }

    /**
     * States
     * @returns {Object}
     * @property {string} DISABLED
     * @property {string} PENDING
     * @property {string} LISTENING
     * @property {string} SPEAKING
     */
    static get STATES() {
        if (typeof this._STATES === 'undefined') {
            this._STATES = {
                DISABLED: 'disabled',
                PENDING: 'pending',
                LISTENING: 'listening',
                SPEAKING: 'speaking'
            };
        }
        return this._STATES;
    }

    /**
     * @constructor VoiceCommander
     * @param {CommanderSettings} settings - Settings
     */
    constructor(settings) {
        super();
        this.settings = merge(true, this.constructor.DEFAULT_SETTINGS, settings);
        //this.settings = merge(true, this.defaultSettings, this._getSettingsFromStore());
        this._initGlobalListener();
    }


    /**
     *
     * Accessors to the Voice-Controller state
     * @type {string}
     */
    get state() {
        if (!this._state)
            this._state = this.constructor.STATES.DISABLED;
        return this._state;
    }

    //noinspection JSAnnotator
    set state(val) {
        this._state = val;
        if (!this.controlPanel)
            return;
        switch (this._state) {
            case this.constructor.STATES.LISTENING:
                this.controlPanel.state = ControlPanel.STATES.LISTENING;
                break;
            case this.constructor.STATES.SPEAKING:
                this.controlPanel.state = ControlPanel.STATES.SPEAKING;
                break;
            case this.constructor.STATES.PENDING:
                this.controlPanel.state = ControlPanel.STATES.PENDING;
                break;
            default:
                this.controlPanel.state = ControlPanel.STATES.DISABLED;
                break;
        }
        if (this.state == this.constructor.STATES.DISABLED) {
            this.ariaHidden = false;
            this.reset();
        }
        else {
            this.ariaHidden = true;
        }
    }

    _getReady() {
        if (this._ready)
            return this._ready;

        return Promise.all([
            this.item._getReady()
        ]);
    }


    /**
     *
     * Method for destroy Voice-Controller
     */
    destroy() {
        //todo:
        this.stop();
        this.destroyed = true;
    }

    /**
     * Help
     */
    help() {

    }


    /**
     * Skip current speech
     */
    skip() {
        if (this.state === this.constructor.STATES.SPEAKING) {
            SpeechSynthesisService.skip();
        }
        else if (this.state === this.constructor.STATES.LISTENING) {
            this.stop(true);
        }
    }

    /**
     * Start read task
     */
    start() {

    }

    /**
     * Stops current recognition and speech and change state according [pending] argument.
     * @param {boolean} [pending=false] - If true, [state] property will be set to PENDING, else to DISABLED
     */
    stop(pending = false) {
        this.state = this.constructor.STATES.DISABLED;
        SpeechRecognitionService.stop();
        SpeechSynthesisService.stop();
    }

    /**
     * Speak [text] argument.
     * @param {boolean} text - Text
     */
    speak(text) {
        this.state = this.constructor.STATES.SPEAKING;
        return SpeechSynthesisService.synthesize(text, {rate: this.settings.speechSpeed}).
        then(() => {
            this.state = this.constructor.STATES.LISTENING;
        });
    }


    _initGlobalListener(){
        var self = this;
        this._grammars = [];
        var commandGrammar = SpeechRecognitionService.createGrammar('command', self.settings.customCommands);
        this._grammars.push(commandGrammar);
        this.listen();
    }
    /**
     * Start command listen for subsequent recognition and execution if possible
     */
    listen() {
        var self = this;
        self.state = self.constructor.STATES.LISTENING;
        SpeechRecognitionService.listen({

            useBrowser: self.settings.useBrowser,
            grammars:  self._grammars,
            lang: self.settings.lang,

            onresult: function (event) {
                let results = event.results[event.results.length - 1];
                let words = results[0].transcript;
                if(results.isFinal){
                    // replace predefined phrases from settings
                    for (let j = 0; j < self.settings.alternatives.length; j++) {
                        let phrase = self.settings.alternatives[j].phrase;
                        let altRegExp = new RegExp(`\\b(${self.settings.alternatives[j].alts.join('|')})\\b`, 'ig');
                        words = words.replace(altRegExp, phrase);
                    }
                    console.log('onresult: ', words);
                    self.settings.customCommands.some(cmd => {
                        return dm(words).some(word => {
                            if(new RegExp(`(${dm(cmd).join('|')})`, 'ig').test(word)){
                                self.emit('command', cmd);
                                return true;
                            } else return false;
                        });
                    });
                }
            },
            onend: function(){
                if(self.state === self.constructor.STATES.LISTENING){
                    self.listen();
                }
            }
        });
    }

    /**
     * Reset controller to initial state.
     */
    reset() {
        //todo:
        this.item.reset();
        this.isWaitingResponse = false;
        this.counters = {
            noSpeechError: 0
        };
    }

}

export default VoiceCommander;
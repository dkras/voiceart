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


import CommandService from './common/command-service';
import Item from './common/item';
import MatchObject from './common/match-object';
import SettingsDialog from './settings-dialog';
import SpeechSynthesisService from './common/speech-synthesis-service';
import SpeechRecognitionService from './common/speech-recognition-service';
import ControlPanel, {ControlPanelEvent} from './control-panel';

import simulator from './common/simulator';
import AsyncInitialized from './common/async-initialized';
import ItemEvent from './common/item/item-event';
import Command from './common/command';
import commonUtils from '../common/common-utils';
import strings from './common/strings';
import MET from 'cg-met';
import merge from 'merge';

const SETTINGS_KEY = 'cg-vc-settings';

class VoiceController extends AsyncInitialized {

    /**
     * @typedef {Object} Settings - Voice-controller settings
     * @property {boolean} advancedMode=false - Recommended for the experienced users, the advanced playback mode includes shorter versions of the introductory phrases
     * @property {Element} panelContainer=document.body - Control panel container element
     * @property {Object} panelSettings
     * @property {number} panelSettings.notificationFadeoutDelay=3000 - The recognized speech appears on the screen. This parameter defines for how long the recognized speech is displayed.
     * @property {number} panelSettings.mode=0 - This parameter is used together with the default control panel. If 0, there will be separate on and off buttons for the Voice Controller. If 1, there will be the single button to turn it on and off.
     * @property {string} context='' - item context ('cg', 'cxp')
     * @property {number} maxNoSpeechErrors=5 - Max allowable no-speech errors
     * @property {number} userResponseTimeout=5 - Defines for how long (in seconds) the system waits for the user voice response in the recognition mode.
     * @property {number} pauseInterval=2 - Defines the longest possible pause (in seconds) between the words inside the single voice command or the answer input.
     * @property {function} ready=noop - Defines Voice-controller ready callback
     * @property {number} speechSpeed=1 - Defines the Voice Controller speech speed coefficient. The range is from 0.1 to 10.
     * @property {string} lang='en' - Recognition language
     * @property {Alternative[]} alternatives - Contains the list of the defined phrases with alternatives.
     */

    /**
     * @typedef {Object} Alternative - This feature defines the alternative pronunciations for the specified phrase and helps to avoid the recognition mistakes via post-processing.
     * @property {string} phrase - Specifies the target phrase.
     * @property {string[]} alts - Defines the array of alternative pronunciations.
     *
     */

    static get MET(){
        return MET;
    }
    static get AsyncInitialized(){
        return AsyncInitialized;
    }
    static get Command(){
        return Command;
    }
    static get commonUtils(){
        return commonUtils;
    }
    static get ItemEvent(){
        return ItemEvent;
    }
    static get merge(){
        return merge;
    }
    static get strings(){
        return strings;
    }
    static get simulator(){
        return simulator;
    }


    /**
     *
     * @returns {Settings} Includes the default settings of the Voice Controller. These settings are applied in case none is specified explicitly.
     */
    static get DEFAULT_SETTINGS() {
        return {
            advancedMode: false,
            allowCommandsWithoutPrefix: false,
            alternatives: [],
            panelContainer: document.body,
            customCommands: [],
            controllerSettings: {
                custom: false
            },
            context: '',
            maxNoSpeechErrors: 5,
            userResponseTimeout: 5, // in seconds
            pauseInterval: 2, // in seconds
            ready: function () {},
            speechSpeed: 1,
            lang: strings.consts.langs.en
        }
    }

    /**
     *
     * @returns {Object} EVENTS
     * @property STATE_CHANGE {string} - Fire when controller state change
     */
    static get EVENTS() {
        return {
            STATE_CHANGE: 'state_change'
        }
    }

    /**
     * Implies the keys for saving the Voice Controller settings.
     * @returns {string[]}
     */
    static get STORABLE_SETTINGS_KEYS() {
        if (!this._STORABLE_SETTINGS_KEYS) {
            this._STORABLE_SETTINGS_KEYS = [
                'advancedMode',
                'allowCommandsWithoutPrefix',
                'userResponseTimeout',
                'pauseInterval',
                'speechSpeed'
            ];
        }
        return this._STORABLE_SETTINGS_KEYS;
    }
    /**
     * States
     * @returns {Object}
     * @property {string} QUIESCENCE
     * @property {string} PENDING
     * @property {string} LISTENING
     * @property {string} SPEAKING
     */
    static get STATES() {
        if (typeof this._STATES === 'undefined') {
            this._STATES = {
                QUIESCENCE: 'quiescence',
                PENDING: 'pending',
                LISTENING: 'listening',
                SPEAKING: 'speaking'
            };
        }
        return this._STATES;
    }

    /**
     * Initializes the new Voice Controller object with the specified parameters
     * @constructor VoiceController
     * @param {Element} domElement - Container element
     * @param {Settings} settings - Voice controller settings
     */
    constructor(domElement, settings) {
        super();

            this.defaultSettings = merge(true, this.constructor.DEFAULT_SETTINGS, settings);
            this.settings = merge(true, this.defaultSettings, this._getSettingsFromStore());
            this.domElement = domElement;
            if(!this.settings.controllerSettings.custom) {
                this.controlPanel = new ControlPanel(this.settings.panelContainer, this.settings.controllerSettings);
                this.controlPanel.on(ControlPanelEvent.TURN_ON, this.start.bind(this));
                this.controlPanel.on(ControlPanelEvent.TURN_OFF, this.stop.bind(this, false));
                this.controlPanel.on(ControlPanelEvent.HELP, this.help.bind(this));
                this.controlPanel.on(ControlPanelEvent.SETTINGS, this.editSettings.bind(this));
                this.controlPanel.on(ControlPanelEvent.SKIP, this.skip.bind(this));
            }

            this._createSettingsDialog();

            this.commandService = new CommandService();
            this._registerCommands();
            this._initItem();
            this._initReady();
            this._addListeners();

            this.ready(this.reset.bind(this));
            this.ready(this.settings.ready);
    }

    /**
     *
     * If true, the corresponding element is hidden from the screen-readers.
     * @type {boolean}
     */
    get ariaHidden() {
        return this._hiddenFromScreenReaders;
    }

    //noinspection JSAnnotator
    set ariaHidden(hidden) {
        this._hiddenFromScreenReaders = hidden;
        if (this._hiddenFromScreenReaders) {
            this.domElement.setAttribute('aria-hidden', 'true');
        }
        else {
            this.domElement.removeAttribute('aria-hidden');
        }
    }

    /**
     *
     * Accessors to the Voice-Controller state
     * @type {boolean}
     */
    get state() {
        if (!this._state)
            this._state = this.constructor.STATES.QUIESCENCE;
        return this._state;
    }

    //noinspection JSAnnotator
    set state(val) {
        this.emit(this.constructor.EVENTS.STATE_CHANGE, this._state, val);
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
                this.controlPanel.state = ControlPanel.STATES.QUIESCENCE;
                break;
        }
        if (this.state == this.constructor.STATES.QUIESCENCE) {
            this.ariaHidden = false;
            this.reset();
        }
        else {
            this.ariaHidden = true;
        }
    }

    _createSettingsDialog() {
        this.settingsDialog = new SettingsDialog({
            defaultSettings: this.defaultSettings,
            onopen: () => {
                this.settingsDialog.settings = this.settings;
            },
            onclose: () => {
                merge(this.settings, this.settingsDialog.settings);
                this._saveSettings();
                this._setItemLang();
            }
        });
    }
    _setItemLang(){
        if(this.item)
            this.item.lang = this.settings.lang;
    }

    _getCommands() {
        return [
            new Command([strings.commands.STOP], (pending)=> {
                this.stop(pending);
            }, strings.commands.STOP_HINT, 1000),

            new Command([strings.commands.REPEAT], ()=> {
                this.commandService.execute(strings.commands.STOP, true);
                this.item.readTask();
            }, strings.commands.REPEAT_HINT, 1),

            new Command([strings.commands.CLEAR], ()=> {
                this.commandService.execute(strings.commands.STOP, true);
                this.item.clear();
                var clearedFeedback = this.settings.advancedMode ? strings.messages.CLEARED_FEEDBACK_SHORT : strings.messages.CLEARED_FEEDBACK;
                this.speak(clearedFeedback).
                    then(()=> {
                        this.listen();
                    });
            }, strings.commands.CLEAR_HINT, 3),

            new Command([strings.commands.SUBMIT], ()=> {
                this.item.submit();
            }, strings.commands.SUBMIT_HINT, 2),

            new Command([strings.commands.SAY], (text)=> {
                this.commandService.execute(strings.commands.STOP, true);
                this.speak(text).
                    then(()=> {
                        this.listen();
                    });
            }),

            new Command([strings.commands.HELP], ()=> {
                this.help();
            })
        ];
    }

    _getReady() {
        if (this._ready)
            return this._ready;

        return Promise.all([
            this.item._getReady()
        ]);
    }

    _getSettingsFromStore() {
        var settings = localStorage.getItem(SETTINGS_KEY);
        if (settings) {
            settings = JSON.parse(settings);
        }
        return settings || {};
    }

    _saveSettings() {
        var storableSettings = {};
        this.constructor.STORABLE_SETTINGS_KEYS.forEach(key => {
            if (this.settings[key] != this.defaultSettings[key]) {
                storableSettings[key] = this.settings[key];
            }
        });
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(storableSettings));
    }

    _initItem() {
        var ContextItem, opts = {
            isAdvancedMode: () => this.settings.advancedMode,
            lang: this.settings.lang
        };
        if (!this.settings.context) {
            if (!this.settings.scenario) {
                throw new Error(`${this.constructor.name}: settings.context must be defined.`);
            } else {
                ContextItem = this.settings.scenario;
            }
        } else {
            var context = this.settings.context;
            opts.context = context;
            ContextItem = require(`./context-items/${context}-item.js`);
        }
        this.item = new ContextItem(
            this.domElement,
            opts,
            this.commandService
        );
        this.item.on(ItemEvent.SUBMIT, this._onSubmit.bind(this));
        this.item.on(ItemEvent.RESPONSE_RECEIVED, this._onResponseReceived.bind(this));
        this.item.on(ItemEvent.SPEAK, this._onSpeak.bind(this));
        this.item.on(ItemEvent.LISTEN, this._onListen.bind(this));
        this.item.on(ItemEvent.STOP, this._onStop.bind(this));
    }

    _addListeners(){
        window.addEventListener('unload', () => {
            this.stop();
        });
    }
    /**
     *
     * @param {boolean} [notAllowed=false] - If true error message will be read and controller will be stopped.
     * @private
     */
    _onListenComplete(notAllowed = false) {
        //todo: handle if is submitted using other controls
        if (this.item.isSubmitted()) {
            //todo: read result
        }
        if (notAllowed) {
            this.controlPanel.pushNotification(strings.messages.NOT_ALLOWED_ERROR, 'error');
            this.speak(strings.messages.NOT_ALLOWED_ERROR).
                then(()=> {
                    this.stop();
                });
        }
        else if (this.settings.maxNoSpeechErrors && this.counters.noSpeechError >= this.settings.maxNoSpeechErrors) {
            this.speak(strings.messages.NO_SPEECH_ERROR).
                then(()=> {
                    this.stop();
                });
        }
        else if (this.item.isAnswerEmpty()) {
            this.speak(`${strings.messages.EMPTY_ANSWER} ${strings.messages.TRY_AGAIN} ${this.settings.advancedMode ? strings.commands.HELP_HINT : `${strings.commands.HELP_HINT} ${strings.commands.STOP_HINT} ${strings.commands.REPEAT_HINT}`}`).
                then(()=> {
                    this.listen();
                });
        }
        else {
            this.speak(this.item.currentAnswerSpeech).
                then(()=> {
                    this.listen();
                });
        }
    }

    _onResponseReceived(result) {
        if (this.state == this.constructor.STATES.QUIESCENCE)
            return;
        this.isWaitingResponse = false;
        var feedbackSpeech = '';
        if (result.score != 1) {
            feedbackSpeech = result.feedback;//result.score > 0 ? strings.messages.PARTIALLY_CORRECT_ANSWER : strings.messages.INCORRECT_ANSWER;
            this.speak(feedbackSpeech).
                then(()=> {
                    this.listen();
                });
        }
        else {
            feedbackSpeech = result.feedback;//strings.messages.CORRECT_ANSWER;
            this.speak(feedbackSpeech).
                then(()=> {
                    this.state = this.constructor.STATES.QUIESCENCE;
                });
        }
    }

    _onSubmit() {
        if (this.state == this.constructor.STATES.QUIESCENCE)
            return;
        this.isWaitingResponse = true;
        this.stop(true);
    }
    _onSpeak(text, callbackFn){
        this.stop(true);
        this.speak(text).
        then(()=> {
            callbackFn();
        });
    }
    _onListen(){
        this.listen();
    }
    _onStop(pending = true) {
        this.stop(pending);
    }

    _registerCommands() {
        var commands = this._getCommands();
        for (var i = 0; i < commands.length; i++) {
            this.commandService.register(commands[i]);
        }
    }

    /**
     *
     * This method destroys the Voice-Controller object.
     */
    destroy() {
        //todo:
        this.stop();
        if (this.controlPanel)
            this.controlPanel.destroy();
        this.destroyed = true;
    }

    /**
     * This method plays the contents of Help, which can be configured in the
     */
    help() {
        var commandsWithHelp = [];
        this.commandService.commands.forEach((command) => {
            if (command.helpSpeech) {
                commandsWithHelp.push(command);
            }
        });
        commandsWithHelp.sort((a, b) => {
            return a.helpOrder - b.helpOrder;
        });
        var helpText = commandsWithHelp.map((command) => {
            return command.helpSpeech;
        }).join(' ');
        this.commandService.execute(strings.commands.SAY, helpText);
    }


    /**
     * Use this method to open the Edit Settings dialog window.
     */
    editSettings() {
        if (!this.controlPanel)
            return;
        this.settingsDialog.open();
        //todo: save settings
    }

    /**
     * This method allows to skip the current VC speech playback.
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
     * By default, this method makes the Voice Controller to start reading the current question item.
     * The action can be customized by the scenario.
     */
    start() {
        this.item.readTask();
    }

    /**
     * With this method, the current speech recognition or playback is interrupted, and the Voice Controller state is changed according to the [pending] argument.
     * @param {boolean} [pending=false] - If true, [state] property will be set to PENDING, else to QUIESCENCE
     */
    stop(pending = false) {
        SpeechRecognitionService.stop();
        SpeechSynthesisService.stop();
        if (pending) {
            this.state = this.constructor.STATES.PENDING;
        }
        else {
            this.state = this.constructor.STATES.QUIESCENCE;
        }
    }

    /**
     * The method makes the Voice Controller to speak the text that has been passed as an argument.
     * @param {string} text - Text
     */
    speak(text) {
        this.state = this.constructor.STATES.SPEAKING;

        return SpeechSynthesisService.synthesize(text, {rate: this.settings.speechSpeed}).
            then(() => {
                this.state = this.constructor.STATES.PENDING;
            });
    }


    /**
     * This method makes the Voice Controller to listen for the user's speech. Listening is followed by recognition and execution if possible. The state is changed correspondingly
     */
    listen() {
        var self = this;

        // if answer can not be set to the field only command can be executed
        var commandOnly = !this.item.isAnswerInputAvailable();

        // create grammars
        var grammars = [];
        var answerAlternatives = [];
        if (!commandOnly) {
            answerAlternatives = this.item.getAnswerAlternatives();
            let answerGrammar = SpeechRecognitionService.createGrammar('answer', answerAlternatives);
            grammars.push(answerGrammar);
        }
        var commandsList = this.commandService.commandsList;
        var commandGrammar = SpeechRecognitionService.createGrammar('command', commandsList);
        grammars.push(commandGrammar);


        var dictionary = strings.SERVICE_NAME_ALTERNATIVES.concat(commandsList).concat(answerAlternatives);

        var isCommand = false;
        var noSpeech = true;
        var notAllowed = false;
        var recognized = [];

        var lastResultTimeStamp;
        var checkTimeInterval;

        function stopIfTimeIsOver() {
            var leftTime = Math.round((new Date() - lastResultTimeStamp) / 1000);
            // if user have said something remaining time should be less than if user have not said anything.
            var remainingTime = noSpeech ? self.settings.userResponseTimeout - leftTime : self.settings.pauseInterval - leftTime;
            //todo: display remaining time
            console.log('you have:', remainingTime);
            if (remainingTime <= 0) {
                stopCoundown();
                self.stop(true);
            }
        }

        function resetInterval() {
            lastResultTimeStamp = new Date();
            clearInterval(checkTimeInterval);
            checkTimeInterval = setInterval(stopIfTimeIsOver, 1000);
        }

        function stopCoundown() {
            clearInterval(checkTimeInterval);
        }

        SpeechRecognitionService.listen({

            lang: this.settings.lang,
            grammars: grammars,

            onresult: function (event) {console.log('onresult', event);
                noSpeech = false;
                resetInterval();
                var notFinalRecognitions = [];
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    var alternatives = Array.prototype.map.call(event.results[i], res => res.transcript.trim());
                    let word = SpeechRecognitionService.getMoreRelevantWord(alternatives, dictionary);

                    // replace predefined phrases
                    for (let j = 0; j < strings.REPLACE_MAP.length; j++) {
                        let phrase = strings.REPLACE_MAP[j].phrase;
                        let altRegExp = strings.REPLACE_MAP[j].alternativesRE;
                        word = word.replace(altRegExp, phrase);
                    }

                    // replace predefined phrases from settings
                    for (let j = 0; j < self.settings.alternatives.length; j++) {
                        let phrase = alternatives.phrase;
                        let altRegExp = new RegExp(`\\b(${alternatives.alts.join('|')})\\b`, 'ig');
                        word = word.replace(altRegExp, phrase);
                    }

                    if (event.results[i].isFinal) {
                        recognized.push(word);
                    }
                    else {
                        //todo: add to controlPanel temp container
                        notFinalRecognitions.push(word);
                    }
                }
                if (recognized.length) {
                    // if only commands can be accepted, its can be used without prefix
                    SpeechRecognitionService.matchRecognition(recognized, self.commandService.getMatchObjects(!commandOnly && !self.settings.allowCommandsWithoutPrefix));
                    if (!commandOnly) {console.log(recognized);
                        // set item state by recognized words
                        self.item.setStateByRecognized(recognized);
                    }
                }

                //find last matched recognition
                var lastMatchedIndex = -1;
                for (let i = recognized.length - 1; i >= 0; i--) {
                    if (recognized[i] instanceof MatchObject) {
                        lastMatchedIndex = i;
                        break;
                    }
                }

                // push recognized text to controlPanel
                self.controlPanel.clearTemporary();
                recognized.forEach((a, index)=> {
                    var text = a;
                    if (index <= lastMatchedIndex) {
                        let type;
                        if (a instanceof MatchObject) {
                            text = a.key;
                            type = a.type;
                        }
                        self.controlPanel.pushNotification(text, type);
                    }
                    else {
                        self.controlPanel.pushTemporary(text);
                    }
                });
                self.controlPanel.pushTemporary(notFinalRecognitions.join(' '));

                // execute first recognized command
                isCommand = recognized.some((a, index)=> {
                    if (a instanceof MatchObject && a.type === MatchObject.TYPES.COMMAND) {
                        // Easter egg just for fun (for 'Say' command)
                        if (a.value.names.indexOf(strings.commands.SAY) != -1) {
                            let sayPhrase = recognized.slice(index + 1).
                                map(function (r) {
                                    return typeof r === 'string' ? r : r.key;
                                }).
                                join(' ');
                            sayPhrase = (` ${sayPhrase} `.replace(/ i'm | i am /gi, ' you are ').replace(/ i /gi, ' you ')).trim();
                            a.value.execute(sayPhrase);
                        }
                        else {
                            a.value.execute();
                        }
                        return true;
                    }
                });

                // clean recognized before last matched
                recognized.splice(0, lastMatchedIndex + 1);

                console.log('------------------');
            },

            onstart: function () {
                SpeechSynthesisService.synthesize('${sound short_beep}');
                resetInterval();
                self.state = self.constructor.STATES.LISTENING;
            },

            onend: function () {
                var temporary = self.controlPanel.clearTemporary();
                self.controlPanel.pushNotification(temporary);
                stopCoundown();
                if (self.destroyed)
                    return;

                if (self.state === self.constructor.STATES.LISTENING) {
                    self.state = self.constructor.STATES.PENDING;
                }

                // if item has been submitted already but response has not been received yet
                // or command has already executed
                if (self.isWaitingResponse
                    || isCommand
                    || self.state === self.constructor.STATES.QUIESCENCE)
                    return;

                if (noSpeech) {
                    self.counters.noSpeechError++;
                }

                SpeechSynthesisService.synthesize('${sound long_beep}').
                    then(() => {
                        self._onListenComplete(notAllowed);
                    });
            },

            onerror: function (e) {
                stopCoundown();
                if (e.error == 'no-speech') {
                    self.counters.noSpeechError++;
                    //set noSpeech to false to avoid double incrementing in end event handler
                    noSpeech = false;
                }
                else if (e.error == 'not-allowed') {
                    notAllowed = true;
                }
            }

        });
    }

    /**
     * Use this method to reset the Voice Controller to its initial state, which can be configured within the scenario.
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

export default VoiceController;
/*!
 * 
 *  Copyright 2016
 *  Pilyugin Alexey
 * 
 *  This file is part of Voice ART.
 * 
 *  Voice ART is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 * 
 *  Voice ART is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 * 
 *  You should have received a copy of the GNU General Public License
 *  along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.
 *  
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VoiceController"] = factory();
	else
		root["VoiceArt"] = root["VoiceArt"] || {}, root["VoiceArt"]["VoiceController"] = factory();
})(this, function() {
return webpackJsonpVoiceArt__name_([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(77);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(3);

	__webpack_require__(62);

	__webpack_require__(63);

	var _commandService = __webpack_require__(78);

	var _commandService2 = _interopRequireDefault(_commandService);

	var _item = __webpack_require__(81);

	var _item2 = _interopRequireDefault(_item);

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _settingsDialog = __webpack_require__(129);

	var _settingsDialog2 = _interopRequireDefault(_settingsDialog);

	var _speechSynthesisService = __webpack_require__(66);

	var _speechSynthesisService2 = _interopRequireDefault(_speechSynthesisService);

	var _speechRecognitionService = __webpack_require__(70);

	var _speechRecognitionService2 = _interopRequireDefault(_speechRecognitionService);

	var _controlPanel = __webpack_require__(145);

	var _controlPanel2 = _interopRequireDefault(_controlPanel);

	var _simulator = __webpack_require__(156);

	var _simulator2 = _interopRequireDefault(_simulator);

	var _asyncInitialized = __webpack_require__(82);

	var _asyncInitialized2 = _interopRequireDefault(_asyncInitialized);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	var _command = __webpack_require__(79);

	var _command2 = _interopRequireDefault(_command);

	var _commonUtils = __webpack_require__(22);

	var _commonUtils2 = _interopRequireDefault(_commonUtils);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _cgMet = __webpack_require__(23);

	var _cgMet2 = _interopRequireDefault(_cgMet);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SETTINGS_KEY = 'cg-vc-settings';

	var VoiceController = function (_AsyncInitialized) {
	    _inherits(VoiceController, _AsyncInitialized);

	    _createClass(VoiceController, null, [{
	        key: 'MET',


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

	        get: function get() {
	            return _cgMet2.default;
	        }
	    }, {
	        key: 'AsyncInitialized',
	        get: function get() {
	            return _asyncInitialized2.default;
	        }
	    }, {
	        key: 'Command',
	        get: function get() {
	            return _command2.default;
	        }
	    }, {
	        key: 'commonUtils',
	        get: function get() {
	            return _commonUtils2.default;
	        }
	    }, {
	        key: 'ItemEvent',
	        get: function get() {
	            return _itemEvent2.default;
	        }
	    }, {
	        key: 'merge',
	        get: function get() {
	            return _merge2.default;
	        }
	    }, {
	        key: 'strings',
	        get: function get() {
	            return _strings2.default;
	        }
	    }, {
	        key: 'simulator',
	        get: function get() {
	            return _simulator2.default;
	        }

	        /**
	         *
	         * @returns {Settings} Includes the default settings of the Voice Controller. These settings are applied in case none is specified explicitly.
	         */

	    }, {
	        key: 'DEFAULT_SETTINGS',
	        get: function get() {
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
	                ready: function ready() {},
	                speechSpeed: 1,
	                lang: _strings2.default.consts.langs.en
	            };
	        }

	        /**
	         *
	         * @returns {Object} EVENTS
	         * @property STATE_CHANGE {string} - Fire when controller state change
	         */

	    }, {
	        key: 'EVENTS',
	        get: function get() {
	            return {
	                STATE_CHANGE: 'state_change'
	            };
	        }

	        /**
	         * Implies the keys for saving the Voice Controller settings.
	         * @returns {string[]}
	         */

	    }, {
	        key: 'STORABLE_SETTINGS_KEYS',
	        get: function get() {
	            if (!this._STORABLE_SETTINGS_KEYS) {
	                this._STORABLE_SETTINGS_KEYS = ['advancedMode', 'allowCommandsWithoutPrefix', 'userResponseTimeout', 'pauseInterval', 'speechSpeed'];
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

	    }, {
	        key: 'STATES',
	        get: function get() {
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

	    }]);

	    function VoiceController(domElement, settings) {
	        _classCallCheck(this, VoiceController);

	        var _this = _possibleConstructorReturn(this, (VoiceController.__proto__ || Object.getPrototypeOf(VoiceController)).call(this));

	        _this.defaultSettings = (0, _merge2.default)(true, _this.constructor.DEFAULT_SETTINGS, settings);
	        _this.settings = (0, _merge2.default)(true, _this.defaultSettings, _this._getSettingsFromStore());
	        _this.domElement = domElement;
	        if (!_this.settings.controllerSettings.custom) {
	            _this.controlPanel = new _controlPanel2.default(_this.settings.panelContainer, _this.settings.controllerSettings);
	            _this.controlPanel.on(_controlPanel.ControlPanelEvent.TURN_ON, _this.start.bind(_this));
	            _this.controlPanel.on(_controlPanel.ControlPanelEvent.TURN_OFF, _this.stop.bind(_this, false));
	            _this.controlPanel.on(_controlPanel.ControlPanelEvent.HELP, _this.help.bind(_this));
	            _this.controlPanel.on(_controlPanel.ControlPanelEvent.SETTINGS, _this.editSettings.bind(_this));
	            _this.controlPanel.on(_controlPanel.ControlPanelEvent.SKIP, _this.skip.bind(_this));
	        }

	        _this._createSettingsDialog();

	        _this.commandService = new _commandService2.default();
	        _this._registerCommands();
	        _this._initItem();
	        _this._initReady();
	        _this._addListeners();

	        _this.ready(_this.reset.bind(_this));
	        _this.ready(_this.settings.ready);
	        return _this;
	    }

	    /**
	     *
	     * If true, the corresponding element is hidden from the screen-readers.
	     * @type {boolean}
	     */


	    _createClass(VoiceController, [{
	        key: '_createSettingsDialog',
	        value: function _createSettingsDialog() {
	            var _this2 = this;

	            this.settingsDialog = new _settingsDialog2.default({
	                defaultSettings: this.defaultSettings,
	                onopen: function onopen() {
	                    _this2.settingsDialog.settings = _this2.settings;
	                },
	                onclose: function onclose() {
	                    (0, _merge2.default)(_this2.settings, _this2.settingsDialog.settings);
	                    _this2._saveSettings();
	                    _this2._setItemLang();
	                }
	            });
	        }
	    }, {
	        key: '_setItemLang',
	        value: function _setItemLang() {
	            if (this.item) this.item.lang = this.settings.lang;
	        }
	    }, {
	        key: '_getCommands',
	        value: function _getCommands() {
	            var _this3 = this;

	            return [new _command2.default([_strings2.default.commands.STOP], function (pending) {
	                _this3.stop(pending);
	            }, _strings2.default.commands.STOP_HINT, 1000), new _command2.default([_strings2.default.commands.REPEAT], function () {
	                _this3.commandService.execute(_strings2.default.commands.STOP, true);
	                _this3.item.readTask();
	            }, _strings2.default.commands.REPEAT_HINT, 1), new _command2.default([_strings2.default.commands.CLEAR], function () {
	                _this3.commandService.execute(_strings2.default.commands.STOP, true);
	                _this3.item.clear();
	                var clearedFeedback = _this3.settings.advancedMode ? _strings2.default.messages.CLEARED_FEEDBACK_SHORT : _strings2.default.messages.CLEARED_FEEDBACK;
	                _this3.speak(clearedFeedback).then(function () {
	                    _this3.listen();
	                });
	            }, _strings2.default.commands.CLEAR_HINT, 3), new _command2.default([_strings2.default.commands.SUBMIT], function () {
	                _this3.item.submit();
	            }, _strings2.default.commands.SUBMIT_HINT, 2), new _command2.default([_strings2.default.commands.SAY], function (text) {
	                _this3.commandService.execute(_strings2.default.commands.STOP, true);
	                _this3.speak(text).then(function () {
	                    _this3.listen();
	                });
	            }), new _command2.default([_strings2.default.commands.HELP], function () {
	                _this3.help();
	            })];
	        }
	    }, {
	        key: '_getReady',
	        value: function _getReady() {
	            if (this._ready) return this._ready;

	            return Promise.all([this.item._getReady()]);
	        }
	    }, {
	        key: '_getSettingsFromStore',
	        value: function _getSettingsFromStore() {
	            var settings = localStorage.getItem(SETTINGS_KEY);
	            if (settings) {
	                settings = JSON.parse(settings);
	            }
	            return settings || {};
	        }
	    }, {
	        key: '_saveSettings',
	        value: function _saveSettings() {
	            var _this4 = this;

	            var storableSettings = {};
	            this.constructor.STORABLE_SETTINGS_KEYS.forEach(function (key) {
	                if (_this4.settings[key] != _this4.defaultSettings[key]) {
	                    storableSettings[key] = _this4.settings[key];
	                }
	            });
	            localStorage.setItem(SETTINGS_KEY, JSON.stringify(storableSettings));
	        }
	    }, {
	        key: '_initItem',
	        value: function _initItem() {
	            var _this5 = this;

	            var ContextItem,
	                opts = {
	                isAdvancedMode: function isAdvancedMode() {
	                    return _this5.settings.advancedMode;
	                },
	                lang: this.settings.lang
	            };
	            if (!this.settings.context) {
	                if (!this.settings.scenario) {
	                    throw new Error(this.constructor.name + ': settings.context must be defined.');
	                } else {
	                    ContextItem = this.settings.scenario;
	                }
	            } else {
	                var context = this.settings.context;
	                opts.context = context;
	                ContextItem = __webpack_require__(157)("./" + context + '-item.js');
	            }
	            this.item = new ContextItem(this.domElement, opts, this.commandService);
	            this.item.on(_itemEvent2.default.SUBMIT, this._onSubmit.bind(this));
	            this.item.on(_itemEvent2.default.RESPONSE_RECEIVED, this._onResponseReceived.bind(this));
	            this.item.on(_itemEvent2.default.SPEAK, this._onSpeak.bind(this));
	            this.item.on(_itemEvent2.default.LISTEN, this._onListen.bind(this));
	            this.item.on(_itemEvent2.default.STOP, this._onStop.bind(this));
	        }
	    }, {
	        key: '_addListeners',
	        value: function _addListeners() {
	            var _this6 = this;

	            window.addEventListener('unload', function () {
	                _this6.stop();
	            });
	        }
	        /**
	         *
	         * @param {boolean} [notAllowed=false] - If true error message will be read and controller will be stopped.
	         * @private
	         */

	    }, {
	        key: '_onListenComplete',
	        value: function _onListenComplete() {
	            var _this7 = this;

	            var notAllowed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            //todo: handle if is submitted using other controls
	            if (this.item.isSubmitted()) {
	                //todo: read result
	            }
	            if (notAllowed) {
	                this.controlPanel.pushNotification(_strings2.default.messages.NOT_ALLOWED_ERROR, 'error');
	                this.speak(_strings2.default.messages.NOT_ALLOWED_ERROR).then(function () {
	                    _this7.stop();
	                });
	            } else if (this.settings.maxNoSpeechErrors && this.counters.noSpeechError >= this.settings.maxNoSpeechErrors) {
	                this.speak(_strings2.default.messages.NO_SPEECH_ERROR).then(function () {
	                    _this7.stop();
	                });
	            } else if (this.item.isAnswerEmpty()) {
	                this.speak(_strings2.default.messages.EMPTY_ANSWER + ' ' + _strings2.default.messages.TRY_AGAIN + ' ' + (this.settings.advancedMode ? _strings2.default.commands.HELP_HINT : _strings2.default.commands.HELP_HINT + ' ' + _strings2.default.commands.STOP_HINT + ' ' + _strings2.default.commands.REPEAT_HINT)).then(function () {
	                    _this7.listen();
	                });
	            } else {
	                this.speak(this.item.currentAnswerSpeech).then(function () {
	                    _this7.listen();
	                });
	            }
	        }
	    }, {
	        key: '_onResponseReceived',
	        value: function _onResponseReceived(result) {
	            var _this8 = this;

	            if (this.state == this.constructor.STATES.QUIESCENCE) return;
	            this.isWaitingResponse = false;
	            var feedbackSpeech = '';
	            if (result.score != 1) {
	                feedbackSpeech = result.feedback; //result.score > 0 ? strings.messages.PARTIALLY_CORRECT_ANSWER : strings.messages.INCORRECT_ANSWER;
	                this.speak(feedbackSpeech).then(function () {
	                    _this8.listen();
	                });
	            } else {
	                feedbackSpeech = result.feedback; //strings.messages.CORRECT_ANSWER;
	                this.speak(feedbackSpeech).then(function () {
	                    _this8.state = _this8.constructor.STATES.QUIESCENCE;
	                });
	            }
	        }
	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit() {
	            if (this.state == this.constructor.STATES.QUIESCENCE) return;
	            this.isWaitingResponse = true;
	            this.stop(true);
	        }
	    }, {
	        key: '_onSpeak',
	        value: function _onSpeak(text, callbackFn) {
	            this.stop(true);
	            this.speak(text).then(function () {
	                callbackFn();
	            });
	        }
	    }, {
	        key: '_onListen',
	        value: function _onListen() {
	            this.listen();
	        }
	    }, {
	        key: '_onStop',
	        value: function _onStop() {
	            var pending = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            this.stop(pending);
	        }
	    }, {
	        key: '_registerCommands',
	        value: function _registerCommands() {
	            var commands = this._getCommands();
	            for (var i = 0; i < commands.length; i++) {
	                this.commandService.register(commands[i]);
	            }
	        }

	        /**
	         *
	         * This method destroys the Voice-Controller object.
	         */

	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            //todo:
	            this.stop();
	            if (this.controlPanel) this.controlPanel.destroy();
	            this.destroyed = true;
	        }

	        /**
	         * This method plays the contents of Help, which can be configured in the
	         */

	    }, {
	        key: 'help',
	        value: function help() {
	            var commandsWithHelp = [];
	            this.commandService.commands.forEach(function (command) {
	                if (command.helpSpeech) {
	                    commandsWithHelp.push(command);
	                }
	            });
	            commandsWithHelp.sort(function (a, b) {
	                return a.helpOrder - b.helpOrder;
	            });
	            var helpText = commandsWithHelp.map(function (command) {
	                return command.helpSpeech;
	            }).join(' ');
	            this.commandService.execute(_strings2.default.commands.SAY, helpText);
	        }

	        /**
	         * Use this method to open the Edit Settings dialog window.
	         */

	    }, {
	        key: 'editSettings',
	        value: function editSettings() {
	            if (!this.controlPanel) return;
	            this.settingsDialog.open();
	            //todo: save settings
	        }

	        /**
	         * This method allows to skip the current VC speech playback.
	         */

	    }, {
	        key: 'skip',
	        value: function skip() {
	            if (this.state === this.constructor.STATES.SPEAKING) {
	                _speechSynthesisService2.default.skip();
	            } else if (this.state === this.constructor.STATES.LISTENING) {
	                this.stop(true);
	            }
	        }

	        /**
	         * By default, this method makes the Voice Controller to start reading the current question item.
	         * The action can be customized by the scenario.
	         */

	    }, {
	        key: 'start',
	        value: function start() {
	            this.item.readTask();
	        }

	        /**
	         * With this method, the current speech recognition or playback is interrupted, and the Voice Controller state is changed according to the [pending] argument.
	         * @param {boolean} [pending=false] - If true, [state] property will be set to PENDING, else to QUIESCENCE
	         */

	    }, {
	        key: 'stop',
	        value: function stop() {
	            var pending = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            _speechRecognitionService2.default.stop();
	            _speechSynthesisService2.default.stop();
	            if (pending) {
	                this.state = this.constructor.STATES.PENDING;
	            } else {
	                this.state = this.constructor.STATES.QUIESCENCE;
	            }
	        }

	        /**
	         * The method makes the Voice Controller to speak the text that has been passed as an argument.
	         * @param {string} text - Text
	         */

	    }, {
	        key: 'speak',
	        value: function speak(text) {
	            var _this9 = this;

	            this.state = this.constructor.STATES.SPEAKING;

	            return _speechSynthesisService2.default.synthesize(text, { rate: this.settings.speechSpeed }).then(function () {
	                _this9.state = _this9.constructor.STATES.PENDING;
	            });
	        }

	        /**
	         * This method makes the Voice Controller to listen for the user's speech. Listening is followed by recognition and execution if possible. The state is changed correspondingly
	         */

	    }, {
	        key: 'listen',
	        value: function listen() {
	            var self = this;

	            // if answer can not be set to the field only command can be executed
	            var commandOnly = !this.item.isAnswerInputAvailable();

	            // create grammars
	            var grammars = [];
	            var answerAlternatives = [];
	            if (!commandOnly) {
	                answerAlternatives = this.item.getAnswerAlternatives();
	                var answerGrammar = _speechRecognitionService2.default.createGrammar('answer', answerAlternatives);
	                grammars.push(answerGrammar);
	            }
	            var commandsList = this.commandService.commandsList;
	            var commandGrammar = _speechRecognitionService2.default.createGrammar('command', commandsList);
	            grammars.push(commandGrammar);

	            var dictionary = _strings2.default.SERVICE_NAME_ALTERNATIVES.concat(commandsList).concat(answerAlternatives);

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

	            _speechRecognitionService2.default.listen({

	                lang: this.settings.lang,
	                grammars: grammars,

	                onresult: function onresult(event) {
	                    console.log('onresult', event);
	                    noSpeech = false;
	                    resetInterval();
	                    var notFinalRecognitions = [];
	                    for (var i = event.resultIndex; i < event.results.length; i++) {
	                        var alternatives = Array.prototype.map.call(event.results[i], function (res) {
	                            return res.transcript.trim();
	                        });
	                        var word = _speechRecognitionService2.default.getMoreRelevantWord(alternatives, dictionary);

	                        // replace predefined phrases
	                        for (var j = 0; j < _strings2.default.REPLACE_MAP.length; j++) {
	                            var phrase = _strings2.default.REPLACE_MAP[j].phrase;
	                            var altRegExp = _strings2.default.REPLACE_MAP[j].alternativesRE;
	                            word = word.replace(altRegExp, phrase);
	                        }

	                        // replace predefined phrases from settings
	                        for (var _j = 0; _j < self.settings.alternatives.length; _j++) {
	                            var _phrase = alternatives.phrase;
	                            var _altRegExp = new RegExp('\\b(' + alternatives.alts.join('|') + ')\\b', 'ig');
	                            word = word.replace(_altRegExp, _phrase);
	                        }

	                        if (event.results[i].isFinal) {
	                            recognized.push(word);
	                        } else {
	                            //todo: add to controlPanel temp container
	                            notFinalRecognitions.push(word);
	                        }
	                    }
	                    if (recognized.length) {
	                        // if only commands can be accepted, its can be used without prefix
	                        _speechRecognitionService2.default.matchRecognition(recognized, self.commandService.getMatchObjects(!commandOnly && !self.settings.allowCommandsWithoutPrefix));
	                        if (!commandOnly) {
	                            console.log(recognized);
	                            // set item state by recognized words
	                            self.item.setStateByRecognized(recognized);
	                        }
	                    }

	                    //find last matched recognition
	                    var lastMatchedIndex = -1;
	                    for (var _i = recognized.length - 1; _i >= 0; _i--) {
	                        if (recognized[_i] instanceof _matchObject2.default) {
	                            lastMatchedIndex = _i;
	                            break;
	                        }
	                    }

	                    // push recognized text to controlPanel
	                    self.controlPanel.clearTemporary();
	                    recognized.forEach(function (a, index) {
	                        var text = a;
	                        if (index <= lastMatchedIndex) {
	                            var type = void 0;
	                            if (a instanceof _matchObject2.default) {
	                                text = a.key;
	                                type = a.type;
	                            }
	                            self.controlPanel.pushNotification(text, type);
	                        } else {
	                            self.controlPanel.pushTemporary(text);
	                        }
	                    });
	                    self.controlPanel.pushTemporary(notFinalRecognitions.join(' '));

	                    // execute first recognized command
	                    isCommand = recognized.some(function (a, index) {
	                        if (a instanceof _matchObject2.default && a.type === _matchObject2.default.TYPES.COMMAND) {
	                            // Easter egg just for fun (for 'Say' command)
	                            if (a.value.names.indexOf(_strings2.default.commands.SAY) != -1) {
	                                var sayPhrase = recognized.slice(index + 1).map(function (r) {
	                                    return typeof r === 'string' ? r : r.key;
	                                }).join(' ');
	                                sayPhrase = (' ' + sayPhrase + ' ').replace(/ i'm | i am /gi, ' you are ').replace(/ i /gi, ' you ').trim();
	                                a.value.execute(sayPhrase);
	                            } else {
	                                a.value.execute();
	                            }
	                            return true;
	                        }
	                    });

	                    // clean recognized before last matched
	                    recognized.splice(0, lastMatchedIndex + 1);

	                    console.log('------------------');
	                },

	                onstart: function onstart() {
	                    _speechSynthesisService2.default.synthesize('${sound short_beep}');
	                    resetInterval();
	                    self.state = self.constructor.STATES.LISTENING;
	                },

	                onend: function onend() {
	                    var temporary = self.controlPanel.clearTemporary();
	                    self.controlPanel.pushNotification(temporary);
	                    stopCoundown();
	                    if (self.destroyed) return;

	                    if (self.state === self.constructor.STATES.LISTENING) {
	                        self.state = self.constructor.STATES.PENDING;
	                    }

	                    // if item has been submitted already but response has not been received yet
	                    // or command has already executed
	                    if (self.isWaitingResponse || isCommand || self.state === self.constructor.STATES.QUIESCENCE) return;

	                    if (noSpeech) {
	                        self.counters.noSpeechError++;
	                    }

	                    _speechSynthesisService2.default.synthesize('${sound long_beep}').then(function () {
	                        self._onListenComplete(notAllowed);
	                    });
	                },

	                onerror: function onerror(e) {
	                    stopCoundown();
	                    if (e.error == 'no-speech') {
	                        self.counters.noSpeechError++;
	                        //set noSpeech to false to avoid double incrementing in end event handler
	                        noSpeech = false;
	                    } else if (e.error == 'not-allowed') {
	                        notAllowed = true;
	                    }
	                }

	            });
	        }

	        /**
	         * Use this method to reset the Voice Controller to its initial state, which can be configured within the scenario.
	         */

	    }, {
	        key: 'reset',
	        value: function reset() {
	            //todo:
	            this.item.reset();
	            this.isWaitingResponse = false;
	            this.counters = {
	                noSpeechError: 0
	            };
	        }
	    }, {
	        key: 'ariaHidden',
	        get: function get() {
	            return this._hiddenFromScreenReaders;
	        }

	        //noinspection JSAnnotator
	        ,
	        set: function set(hidden) {
	            this._hiddenFromScreenReaders = hidden;
	            if (this._hiddenFromScreenReaders) {
	                this.domElement.setAttribute('aria-hidden', 'true');
	            } else {
	                this.domElement.removeAttribute('aria-hidden');
	            }
	        }

	        /**
	         *
	         * Accessors to the Voice-Controller state
	         * @type {boolean}
	         */

	    }, {
	        key: 'state',
	        get: function get() {
	            if (!this._state) this._state = this.constructor.STATES.QUIESCENCE;
	            return this._state;
	        }

	        //noinspection JSAnnotator
	        ,
	        set: function set(val) {
	            this.emit(this.constructor.EVENTS.STATE_CHANGE, this._state, val);
	            this._state = val;
	            if (!this.controlPanel) return;
	            switch (this._state) {
	                case this.constructor.STATES.LISTENING:
	                    this.controlPanel.state = _controlPanel2.default.STATES.LISTENING;
	                    break;
	                case this.constructor.STATES.SPEAKING:
	                    this.controlPanel.state = _controlPanel2.default.STATES.SPEAKING;
	                    break;
	                case this.constructor.STATES.PENDING:
	                    this.controlPanel.state = _controlPanel2.default.STATES.PENDING;
	                    break;
	                default:
	                    this.controlPanel.state = _controlPanel2.default.STATES.QUIESCENCE;
	                    break;
	            }
	            if (this.state == this.constructor.STATES.QUIESCENCE) {
	                this.ariaHidden = false;
	                this.reset();
	            } else {
	                this.ariaHidden = true;
	            }
	        }
	    }]);

	    return VoiceController;
	}(_asyncInitialized2.default);

	exports.default = VoiceController;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _command2 = __webpack_require__(79);

	var _command3 = _interopRequireDefault(_command2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CommandService = function () {

	    /**
	     * @constructor CommandService
	     */
	    function CommandService() {
	        _classCallCheck(this, CommandService);

	        this._commands = [];
	        this._commandsMap = {};
	        this.needUpdate = true;
	    }

	    /**
	     *
	     * Registered commands array.
	     * @returns {Array.<Command>}
	     */


	    _createClass(CommandService, [{
	        key: 'getMatchObjects',


	        /**
	         *
	         * @param {boolean} [strict=true] - if this flag is true returns only service name prefixed commands.
	         * @returns {Array.<MatchObject>}
	         */
	        value: function getMatchObjects() {
	            var _this = this;

	            var strict = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            if (!this._matchObjects || this.needUpdate) {
	                this._strictMatchObjects = [];
	                this._matchObjects = [];
	                this.commands.forEach(function (command) {
	                    _this._strictMatchObjects = _this._strictMatchObjects.concat(command.getMatchObjects(true));
	                    _this._matchObjects = _this._matchObjects.concat(command.getMatchObjects(false));
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

	    }, {
	        key: 'execute',
	        value: function execute(command) {
	            var _command;

	            if (typeof command === 'string') {
	                if (!this.isCommandRegistered(command)) {
	                    throw new Error(this.constructor.name + '.execute: command "' + command + '" have not registered in the service.');
	                }
	                command = this.getCommandByName(command);
	            }

	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	            }

	            return (_command = command).execute.apply(_command, args);
	        }

	        /**
	         *
	         * @param {string} name
	         * @returns {Command}
	         */

	    }, {
	        key: 'getCommandByName',
	        value: function getCommandByName(name) {
	            return this.commandsMap[name.toLowerCase()];
	        }

	        /**
	         *
	         * Returns true if command is registered.
	         * @param {string} name - command's name
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isCommandRegistered',
	        value: function isCommandRegistered(name) {
	            return typeof this.getCommandByName(name) !== 'undefined';
	        }

	        /**
	         *
	         * Register command in service.
	         * @param {Command} command - command's names
	         */

	    }, {
	        key: 'register',
	        value: function register(command) {
	            if (this.commands.indexOf(command) === -1) {
	                this.commands.push(command);
	                for (var i = 0; i < command.names.length; i++) {
	                    var name = command.names[i].toLowerCase();
	                    if (this.isCommandRegistered(name)) {
	                        console.warn(this.constructor.name + '.register: command "' + name + '" have already registered in the service.');
	                    }
	                    this.commandsMap[name] = command;
	                }
	                this.needUpdate = true;
	            } else {
	                console.warn(this.constructor.name + '.register: "' + command + '" have already registered in the service.');
	            }
	        }

	        /**
	         *
	         * Removes command with such name from the service.
	         * @param {Command | string} command - command or command's name
	         */

	    }, {
	        key: 'unregister',
	        value: function unregister(command) {
	            var _this2 = this;

	            if (typeof command === 'string') {
	                command = this.getCommandByName(command);
	            }

	            if (command) {
	                command.names.forEach(function (name) {
	                    delete _this2.commandsMap[name];
	                });
	                var index = this.commands.indexOf(command);
	                if (index != -1) {
	                    this.commands.splice(index, 1);
	                }
	                this.needUpdate = true;
	            }
	        }
	    }, {
	        key: 'commands',
	        get: function get() {
	            return this._commands;
	        }

	        /**
	         *
	         * Registered commands object.
	         * @returns {object}
	         */

	    }, {
	        key: 'commandsMap',
	        get: function get() {
	            return this._commandsMap;
	        }

	        /**
	         *
	         * Returns names of registered commands.
	         * @returns {Array.<string>}
	         */

	    }, {
	        key: 'commandsList',
	        get: function get() {
	            return Object.keys(this.commandsMap);
	        }
	    }]);

	    return CommandService;
	}();

	exports.default = CommandService;
	;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Command = function () {
	    _createClass(Command, null, [{
	        key: 'PREFIX',
	        get: function get() {
	            return _strings2.default.SERVICE_NAME ? _strings2.default.SERVICE_NAME + ' ' : '';
	        }

	        /**
	         * @constructor Command
	         * @param {Array.<string>|string} names - command names
	         * @param {function} handler - function which will be called when command will be executed
	         * @param {string} [helpSpeech] - speech which will be read when Help command will be executed
	         * @param {number} [helpOrder] - the lower helpOrder, the sooner command will be read in the overall help speech
	         */

	    }]);

	    function Command(names, handler) {
	        var helpSpeech = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	        var helpOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 999;

	        _classCallCheck(this, Command);

	        this.names = typeof names === 'string' ? [names] : names;
	        this.handler = handler;
	        this.helpSpeech = helpSpeech;
	        this.helpOrder = helpOrder;
	    }

	    /**
	     * @param {boolean} [strict=true] - if this flag is true returns only service name prefixed commands.
	     * @returns {Array.<MatchObject>}
	     */


	    _createClass(Command, [{
	        key: 'getMatchObjects',
	        value: function getMatchObjects() {
	            var _this = this;

	            var strict = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            if (!this._matchObjects) {
	                this._strictMatchObjects = [];
	                this._matchObjects = [];
	                this.names.forEach(function (name) {
	                    _this._strictMatchObjects.push(new _matchObject2.default('' + _this.constructor.PREFIX + name, _this, _matchObject2.default.TYPES.COMMAND));
	                    _this._matchObjects.push(new _matchObject2.default('' + _this.constructor.PREFIX + name, _this, _matchObject2.default.TYPES.COMMAND));
	                    _this._matchObjects.push(new _matchObject2.default('' + name, _this, _matchObject2.default.TYPES.COMMAND));
	                });
	            }
	            return strict ? this._strictMatchObjects : this._matchObjects;
	        }
	    }, {
	        key: 'execute',
	        value: function execute() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            console.log(this + ' is executing with parameters: (' + args + ')');
	            return this.handler.apply(null, args);
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.constructor.name + ': (' + this.names.join(' | ') + ')';
	        }
	    }]);

	    return Command;
	}();

	exports.default = Command;
	;
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports) {

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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _TYPES = {
	  ANSWER: 'answer',
	  COMMAND: 'command'
	};

	var MatchObject = function () {
	  _createClass(MatchObject, null, [{
	    key: 'TYPES',
	    get: function get() {
	      return _TYPES;
	    }

	    /**
	     *
	     * @param {string} key - corresponding string.
	     * @param {*} value
	     * @param {string} [type]
	     */

	  }]);

	  function MatchObject(key, value, type) {
	    _classCallCheck(this, MatchObject);

	    /**
	     * Corresponding string, which will be searched in recognized phrase.
	     * @name MatchObject#key
	     * @type {string}
	     */
	    this.key = key;

	    /**
	     * Value corresponding to the key
	     * @name MatchObject#value
	     * @type {*}
	     */
	    this.value = value;

	    if (typeof type === 'string') {
	      this.type = type;
	    }
	  }

	  /**
	   *
	   * @returns {string}
	   */


	  _createClass(MatchObject, [{
	    key: 'type',
	    get: function get() {
	      return this._type;
	    }

	    /**
	     *
	     * @param {string} value
	     */
	    ,
	    set: function set(value) {
	      this._type = value;
	    }
	  }]);

	  return MatchObject;
	}();

	exports.default = MatchObject;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _asyncInitialized = __webpack_require__(82);

	var _asyncInitialized2 = _interopRequireDefault(_asyncInitialized);

	var _command = __webpack_require__(79);

	var _command2 = _interopRequireDefault(_command);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	var _section = __webpack_require__(84);

	var _section2 = _interopRequireDefault(_section);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _taskUnit = __webpack_require__(118);

	var _taskUnit2 = _interopRequireDefault(_taskUnit);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Base problem item class from which all other context items must be extend.
	 */
	var Item = function (_AsyncInitialized) {
	    _inherits(Item, _AsyncInitialized);

	    _createClass(Item, null, [{
	        key: 'getSectionElements',


	        /**
	         * Returns list of section's dom elements
	         * or array of children elements arrays.
	         * @param {Element} domElement
	         * @returns {NodeList | Array.<Element> | Array.<Array.<Element>>}
	         */
	        value: function getSectionElements(domElement) {
	            throw new Error(this.name + '.getSectionElements: method is not defined.');
	        }

	        /**
	         * Returns type of the field.
	         * @param {Element} domElement - field's root element
	         * @returns {string}
	         */

	    }, {
	        key: 'determineFieldType',
	        value: function determineFieldType(domElement) {
	            throw new Error(this.name + '.determineFieldType: method is not defined.');
	        }

	        /**
	         * Returns item's root element.
	         * @param {Element} domElement - element one of which children is item's root element.
	         * @returns {Element}
	         */

	    }, {
	        key: 'findItemElement',
	        value: function findItemElement(domElement) {
	            throw new Error(this.name + '.findItemElement: method is not defined.');
	        }

	        /**
	         * Returns true if domElement is the root element of some field.
	         * @param domElement
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isField',
	        value: function isField(domElement) {
	            throw new Error(this.name + '.isField: method is not defined.');
	        }

	        /**
	         *
	         * @param {Element} domElement
	         * @param {{ready: function}} settings
	         * @param {CommandService} commandService
	         * @constructor
	         */

	    }, {
	        key: 'CONTEXT',


	        /**
	         * Returns context name.
	         * @returns {string}
	         */
	        get: function get() {
	            throw new Error(this.name + '.CONTEXT (get): method is not defined.');
	        }
	    }, {
	        key: 'DEFAULT_SETTINGS',
	        get: function get() {
	            return {
	                isAdvancedMode: function isAdvancedMode() {
	                    return false;
	                },
	                ready: function ready() {}
	            };
	        }
	    }]);

	    function Item(domElement, settings, commandService) {
	        _classCallCheck(this, Item);

	        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

	        _this.settings = (0, _merge2.default)(true, {}, _this.constructor.DEFAULT_SETTINGS, settings);
	        _this.commandService = commandService;
	        _this.domElement = _this.constructor.findItemElement(domElement);
	        _this._initHook();
	        /**
	         * @type {Array.<Section>}
	         */
	        _this.sections = _this.determineSections();
	        /**
	         * @type {Array.<Field>}
	         */
	        _this.fields = [];
	        _this.sections.forEach(function (section) {
	            var _this$fields;

	            (_this$fields = _this.fields).splice.apply(_this$fields, [_this.fields.length, 0].concat(_toConsumableArray(section.fields)));
	        });

	        _this.reset();

	        // change current field when user focused it manually
	        _this.fields.forEach(function (field) {
	            field.on(_itemEvent2.default.FIELD_FOCUSED, function (field) {
	                if (_this.currentField != field) {
	                    _this.currentField = field;
	                }
	            });
	        });

	        _this._registerCommands();
	        _this._addEventsEmission();
	        _this._initReady();
	        return _this;
	    }

	    /**
	     * In this method ItemEvent.SUBMIT and ItemEvent.RESPONSE_RECEIVED should be emitted when its occurred.
	     * Should be implemented for each context.
	     * @private
	     */


	    _createClass(Item, [{
	        key: '_addEventsEmission',
	        value: function _addEventsEmission() {
	            throw new Error(this.constructor.name + '._addEventsEmission: method is not defined.');
	        }

	        /** @inheritdoc */

	    }, {
	        key: '_getReady',
	        value: function _getReady() {
	            if (this._ready) return this._ready;

	            // resolve ready promise when all sections will be ready
	            return Promise.all(this.sections.map(function (section) {
	                return section._getReady();
	            })).then(this.settings.ready).catch(function (error) {
	                console.error(error);
	            });
	        }

	        /**
	         * This method is called in constructor and can be used to define additional properties in descendant classes.
	         * @private
	         */

	    }, {
	        key: '_initHook',
	        value: function _initHook() {}

	        /**
	         * Registers item's commands in CommandService.
	         * @private
	         */

	    }, {
	        key: '_registerCommands',
	        value: function _registerCommands() {
	            var _this2 = this;

	            var commands = this.getCommands();
	            commands.forEach(function (command) {
	                _this2.commandService.register(command);
	            });
	        }

	        /**
	         * Returns selected field's answer speech.
	         * @returns {string}
	         */

	    }, {
	        key: 'taskSpeech',


	        /**
	         *
	         * @returns {string}
	         */
	        value: function taskSpeech() {
	            var navigation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            var fieldHelp = this.settings.isAdvancedMode() ? this.currentField.helpSpeechAdvanced : this.currentField.helpSpeech;
	            var isMultipleFields = this.fields.length > 1;
	            var itemHint = isMultipleFields && navigation && !this.settings.isAdvancedMode() ? _strings2.default.commands.FIELD_NAVIGATION_HINT : '';
	            return (this.currentSection.taskSpeech + ' ' + fieldHelp + ' ' + itemHint).trim();
	        }

	        /**
	         * Clears current field.
	         */

	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.currentField.clear();
	        }

	        /**
	         * Clears all fields.
	         */

	    }, {
	        key: 'clearAll',
	        value: function clearAll() {
	            this.fields.forEach(function (field) {
	                field.clear();
	            });
	        }

	        /**
	         * Return section which contains passed unit.
	         * @param {Unit} unit
	         * @returns {Section|undefined}
	         */

	    }, {
	        key: 'getSectionByUnit',
	        value: function getSectionByUnit(unit) {
	            for (var i = 0; i < this.sections.length; i++) {
	                var section = this.sections[i];
	                if (section.units.indexOf(unit) != -1) {
	                    return section;
	                }
	            }
	        }

	        /**
	         * Returns array of section found in item domElement.
	         * @returns {Array.<Section>}
	         */

	    }, {
	        key: 'determineSections',
	        value: function determineSections() {
	            var sections = [];
	            var sectionElements = this.constructor.getSectionElements(this.domElement);
	            for (var i = 0; i < sectionElements.length; i++) {
	                //let units = [];
	                this._units = [];
	                var unitElements = sectionElements[i];
	                var sectionPredefinedSpeech = void 0;
	                if (!Array.isArray(unitElements)) {
	                    // if unitElements is DOM element get speech attribute first
	                    sectionPredefinedSpeech = unitElements.getAttribute('speech') || '';
	                    unitElements = unitElements.childNodes;
	                }
	                for (var j = 0; j < unitElements.length; j++) {
	                    var unitElement = unitElements[j];
	                    var unit = void 0;
	                    if (this.constructor.isField(unitElement)) {
	                        var type = this.constructor.determineFieldType(unitElement);
	                        var FieldDecorator = __webpack_require__(119)("./" + type + '-decorator.js');
	                        console.log(this.settings);
	                        unit = new FieldDecorator(unitElement, {
	                            context: this.constructor.CONTEXT,
	                            lang: this.settings.lang
	                        }, this.commandService);
	                    } else {
	                        unit = new _taskUnit2.default(unitElement);
	                    }
	                    //units.push(unit);
	                    this._units.push(unit);
	                }
	                var section = new _section2.default(this._units, sectionPredefinedSpeech);
	                sections.push(section);
	            }
	            return sections;
	        }

	        /**
	         * Returns array of field specific commands.
	         * @returns {Array.<Command>}
	         */

	    }, {
	        key: 'getCommands',
	        value: function getCommands() {
	            var _this3 = this;

	            if (!this._commands) {
	                this._commands = [];

	                var isMultipleFields = this.fields.length > 1;
	                if (isMultipleFields) {

	                    this._commands.push(new _command2.default(_strings2.default.commands.NEXT_FIELD, function () {
	                        var currentFieldIndex = _this3.fields.indexOf(_this3.currentField);
	                        currentFieldIndex++;
	                        if (currentFieldIndex >= _this3.fields.length) {
	                            currentFieldIndex = 0;
	                        }
	                        _this3.moveToField(currentFieldIndex);
	                    }, _strings2.default.commands.FIELD_NAVIGATION_HINT, 100));

	                    this._commands.push(new _command2.default(_strings2.default.commands.PREV_FIELD, function () {
	                        var currentFieldIndex = _this3.fields.indexOf(_this3.currentField);
	                        currentFieldIndex--;
	                        if (currentFieldIndex < 0) {
	                            currentFieldIndex = _this3.fields.length - 1;
	                        }
	                        _this3.moveToField(currentFieldIndex);
	                    }));
	                }
	            }
	            return this._commands;
	        }

	        /**
	         * Returns array of possible answers for current field to create grammar
	         * @returns {Array.<string>}
	         */

	    }, {
	        key: 'getAnswerAlternatives',
	        value: function getAnswerAlternatives() {
	            //todo: check this
	            return this.currentField.getAnswerAlternatives();
	        }

	        /**
	         * Returns current item state.
	         * @returns {Array}
	         */

	    }, {
	        key: 'getState',
	        value: function getState() {
	            var state = [];
	            this.fields.forEach(function (field) {
	                state.push(field.getState());
	            });
	            return state;
	        }

	        /**
	         * Sets current item state.
	         * @param {Array} state
	         */

	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            var _this4 = this;

	            if (!Array.isArray(state)) {
	                state = [state];
	            }
	            state.forEach(function (fieldState, index) {
	                var field = _this4.fields[index];
	                if (field) {
	                    field.setState(fieldState);
	                }
	            });
	        }

	        /**
	         * Returns speech for current state.
	         * @returns {string}
	         */

	    }, {
	        key: 'getStateToSpeech',
	        value: function getStateToSpeech() {
	            //todo: think about speech for multiple fields
	            return this.currentField.getStateToSpeech();
	        }

	        /**
	         * Returns true if the current field's state is empty/not defined.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isAnswerEmpty',
	        value: function isAnswerEmpty() {
	            //todo: think about speech for multiple fields
	            return this.currentField.isAnswerEmpty();
	        }

	        /**
	         * Returns true if answer can be set to the current field with current state.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isAnswerInputAvailable',
	        value: function isAnswerInputAvailable() {
	            return this.currentField.isAnswerInputAvailable();
	        }

	        /**
	         * Returns true, if item is already submitted.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isSubmitted',
	        value: function isSubmitted() {
	            throw new Error(this.constructor.name + '.isSubmitted: method is not defined.');
	        }

	        /**
	         * Should return state, which obtained from joining the passed state to current field's state.
	         * @param state - new state which will be joined to the current field's state.
	         * @returns {*}
	         */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            return this.currentField.joinState(state);
	        }

	        /**
	         * Returns recognized array with matched objects. 'type' property of matched object should be set to MatchObject.TYPES.ANSWER.
	         * @param {Array.<string|MatchObject>} recognized
	         * @returns {Array.<string|MatchObject>}
	         */

	    }, {
	        key: 'matchRecognized',
	        value: function matchRecognized(recognized) {
	            return this.currentField.matchRecognized(recognized);
	        }

	        /**
	         * Changes current field with field's element focusing and accompanying speech.
	         * @param {Field|number} field - field or field's index
	         */

	    }, {
	        key: 'moveToField',
	        value: function moveToField(field) {
	            if (typeof field === 'number') {
	                field = this.fields[field];
	            }
	            if (field) {
	                var oldSection = this.currentSection;
	                this.currentField = field;
	                this.currentField.focus();
	                // if section was changed and its task have not read yet
	                if (oldSection != this.currentSection && !this.currentSection.alreadyRead) {
	                    this.readTask(this.currentFieldSelectionSpeech);
	                } else {
	                    this.commandService.execute(_strings2.default.commands.SAY, this.currentFieldSelectionSpeech);
	                }
	            }
	        }

	        /**
	         * Returns state from recognized array in appropriate format.
	         * @param {Array.<string|MatchObject>} recognized
	         * @returns {*}
	         */

	    }, {
	        key: 'getStateByRecognized',
	        value: function getStateByRecognized(recognized) {
	            return this.currentField.getStateByRecognized(recognized);
	        }

	        /**
	         * Adds recognized answer to current field's state and returns recognized array with matched objects.
	         * @param {Array.<string|MatchObject>} recognized
	         * @returns {Array.<string|MatchObject>}
	         */

	    }, {
	        key: 'setStateByRecognized',
	        value: function setStateByRecognized(recognized) {
	            return this.currentField.setStateByRecognized(recognized);
	        }

	        /**
	         * Executes Say command with current sections task and passed texts.
	         * @param preSpeech - speech which will be read before section task.
	         * @param postSpeech - speech which will be read after section task.
	         */

	    }, {
	        key: 'readTask',
	        value: function readTask() {
	            var preSpeech = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	            var postSpeech = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	            if (!this.hasInitialAlreadyRead) {
	                preSpeech += ' ' + this.initialSpeech;
	            }
	            var taskSpeech = (preSpeech + ' ' + this.taskSpeech(preSpeech.indexOf(_strings2.default.commands.FIELD_NAVIGATION_HINT) > -1 ? false : true) + ' ' + postSpeech).trim(); //if preSpeech it's not necessary to read taskSpeech
	            this.hasInitialAlreadyRead = true;
	            this.currentField.focus();
	            this.commandService.execute(_strings2.default.commands.SAY, taskSpeech);
	            // mark current section have already read to prevent repeated reading
	            this.currentSection.alreadyRead = true;
	        }

	        /**
	         * Register a handler to be called when instance initialization complete.
	         * @param {function} handler
	         */

	    }, {
	        key: 'ready',
	        value: function ready(handler) {
	            return this._ready.then(handler);
	        }

	        /**
	         * Reset item to initial state.
	         */

	    }, {
	        key: 'reset',
	        value: function reset() {
	            // flag for initial speech reading (it should be read only one time)
	            this.hasInitialAlreadyRead = false;
	            this.currentSection = this.sections[0];
	            this.currentField = this.fields[0];
	            this.sections.forEach(function (section) {
	                section.alreadyRead = false;
	            });
	            //todo:
	        }

	        /**
	         * Submits user answer.
	         */

	    }, {
	        key: 'submit',
	        value: function submit() {
	            throw new Error(this.constructor.name + '.submit: method is not defined.');
	        }
	    }, {
	        key: 'currentAnswerSpeech',
	        get: function get() {
	            if (this.currentField.isAnswerEmpty()) {
	                return _strings2.default.messages.EMPTY_ANSWER;
	            } else {
	                var answerSpeech = _strings2.default.messages.ANSWER_IS + ' ' + this.currentField.getStateToSpeech();
	                var someFieldIsEmpty = this.fields.some(function (field) {
	                    return field.isAnswerEmpty();
	                });
	                if (this.settings.isAdvancedMode()) {
	                    answerSpeech = answerSpeech + ' ' + _strings2.default.messages.CLEAR_HINT_SHORT;
	                } else if (someFieldIsEmpty) {
	                    answerSpeech = answerSpeech + ' ' + _strings2.default.messages.CLEAR_HINT + ' ' + _strings2.default.commands.FIELD_NAVIGATION_HINT;
	                } else {
	                    answerSpeech = answerSpeech + ' ' + _strings2.default.messages.SUBMIT_HINT + ' ' + _strings2.default.messages.CLEAR_HINT;
	                }
	                return answerSpeech;
	            }
	        }

	        /**
	         * Selected field.
	         * @returns {Field}
	         */

	    }, {
	        key: 'currentField',
	        get: function get() {
	            return this._currentField;
	        }

	        /**
	         *
	         * @param {Field} field
	         */
	        ,
	        set: function set(field) {
	            var _this5 = this;

	            if (field == this._currentField) return;

	            // remove old fields command from service
	            if (this._currentField) {
	                var oldCommands = this._currentField.getCommands();
	                oldCommands.forEach(function (command) {
	                    _this5.commandService.unregister(command);
	                });
	            }

	            this._currentField = field;
	            this.currentSection = this.getSectionByUnit(this._currentField);

	            // register commands in service
	            var commands = this._currentField.getCommands();
	            for (var i = 0; i < commands.length; i++) {
	                this.commandService.register(commands[i]);
	            }
	        }

	        /**
	         * Returns speech for just selected field including field's state if it is not empty.
	         * @returns {string}
	         */

	    }, {
	        key: 'currentFieldSelectionSpeech',
	        get: function get() {
	            var fieldIndex = this.fields.indexOf(this.currentField);
	            var selectedSpeech = _strings2.default.messages.FIELD_SELECTED_1 + ' ' + _controllerUtils2.default.toWordsOrdinal(fieldIndex + 1) + ' ' + _strings2.default.messages.FIELD_SELECTED_2;
	            var answerSpeech = this.currentField.isAnswerEmpty() ? '' : this.currentAnswerSpeech;
	            var questionSpeech = 'fieldElement' in this.currentField.adapter ? this.currentField.adapter.fieldElement.getAttribute('placeholder') || '' : '';
	            return (selectedSpeech + ' ' + questionSpeech + ' ' + answerSpeech).trim();
	        }

	        /**
	         * Section which contains selected field.
	         * @returns {Section}
	         */

	    }, {
	        key: 'currentSection',
	        get: function get() {
	            return this._currentSection;
	        }

	        /**
	         *
	         * @param {Section} section
	         */
	        ,
	        set: function set(section) {
	            if (this._currentSection == section) return;

	            this._currentSection = section;
	        }

	        /**
	         * Returns speech which will be read only once when current item have been just started.
	         * @returns {string}
	         */

	    }, {
	        key: 'initialSpeech',
	        get: function get() {
	            if (this.hasInitialAlreadyRead) return '';

	            var speech = '';
	            var isMultipleFields = this.fields.length > 1;
	            if (isMultipleFields) {
	                speech = _strings2.default.messages.INITIAL_SPEECH_MULTI_1 + ' ' + this.fields.length + ' ' + _strings2.default.messages.INITIAL_SPEECH_MULTI_2 + ' ' + this.currentFieldSelectionSpeech;
	            } else {
	                speech = 'There is ' + this.fields[0].typeSpeech + ' question.';
	            }

	            return speech;
	        }
	    }, {
	        key: 'lang',
	        set: function set(language) {
	            this.settings.lang = language;
	            this._units.forEach(function (unit) {
	                return unit.lang = language;
	            });
	        }
	    }]);

	    return Item;
	}(_asyncInitialized2.default);

	exports.default = Item;
	;
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(10);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class AsyncInitialized
	 * @extends EventEmitter
	 */
	var AsyncInitialized = function (_EventEmitter) {
	  _inherits(AsyncInitialized, _EventEmitter);

	  function AsyncInitialized() {
	    _classCallCheck(this, AsyncInitialized);

	    return _possibleConstructorReturn(this, (AsyncInitialized.__proto__ || Object.getPrototypeOf(AsyncInitialized)).apply(this, arguments));
	  }

	  _createClass(AsyncInitialized, [{
	    key: '_getReady',


	    /**
	     * Returns Promise which should be resolved, when instance is fully initialized.
	     * @returns {Promise.<*>}
	     * @private
	     */
	    value: function _getReady() {
	      if (this._ready) return this._ready;

	      return Promise.resolve();
	    }

	    /**
	     * IMPORTANT: This method must be called in the constructor of subclass to define _ready promise.
	     * @private
	     */

	  }, {
	    key: '_initReady',
	    value: function _initReady() {
	      this._ready = this._getReady();
	    }

	    /**
	     * Register a handler to be called when instance initialization complete.
	     * @param {function} handler
	     */

	  }, {
	    key: 'ready',
	    value: function ready(handler) {
	      if (!this._ready) {
	        throw new Error(this.constructor.name + '._ready: property is not defined.');
	      }
	      return this._ready.then(handler);
	    }
	  }]);

	  return AsyncInitialized;
	}(_events2.default);

	exports.default = AsyncInitialized;
	;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports) {

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

	/**
	 * @namespace
	 * @property {object}  ItemEvent
	 * @property {number}  SUBMIT
	 * @property {string}  RESPONSE_RECEIVED
	 * @property {object}  FIELD_FOCUSED
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ItemEvent = {
	  SUBMIT: 'submit',
	  RESPONSE_RECEIVED: 'response_received',
	  FIELD_FOCUSED: 'field_focused',
	  SPEAK: 'speak',
	  LISTEN: 'listen',
	  STOP: 'stop'
	};

	exports.default = ItemEvent;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _asyncInitialized = __webpack_require__(82);

	var _asyncInitialized2 = _interopRequireDefault(_asyncInitialized);

	var _field = __webpack_require__(85);

	var _field2 = _interopRequireDefault(_field);

	var _unit = __webpack_require__(86);

	var _unit2 = _interopRequireDefault(_unit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Part of item with separate task. Each section can contain several fields.
	 */
	var Section = function (_AsyncInitialized) {
	    _inherits(Section, _AsyncInitialized);

	    /**
	     *
	     * @param {Array.<Unit>} units
	     * @param {string} [speech]
	     */
	    function Section(units) {
	        var speech = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	        _classCallCheck(this, Section);

	        /**
	         * @type {Array.<Unit>}
	         */
	        var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this));

	        _this.units = [];
	        /**
	         * @type {Array.<Field>}
	         */
	        _this.fields = [];
	        units.forEach(function (unit) {
	            _this.addUnit(unit);
	        });

	        _this.speech = speech;
	        _this._initReady();
	        return _this;
	    }

	    /** @inheritdoc */


	    _createClass(Section, [{
	        key: '_getReady',
	        value: function _getReady() {
	            if (this._ready) return this._ready;

	            // resolve ready promise when all units will be ready
	            return Promise.all(this.units.map(function (unit) {
	                return unit._getReady();
	            }));
	        }

	        /**
	         * Adds unit to units array and to fields array if it is field.
	         * IMPORTANT: if this method called not inside Section constructor, added unit will not affect to ready promise
	         * @param {Unit} unit
	         */

	    }, {
	        key: 'addUnit',
	        value: function addUnit(unit) {
	            this.units.push(unit);
	            if (unit instanceof _field2.default) {
	                this.fields.push(unit);
	            }
	        }

	        /**
	         *
	         * @returns {string}
	         */

	    }, {
	        key: 'taskSpeech',
	        get: function get() {
	            if (this.speech) return this.speech;
	            var taskSpeech = '';
	            this.units.forEach(function (unit) {
	                taskSpeech += ' ' + unit.taskSpeech.trim();
	            });
	            return taskSpeech.trim();
	        }
	    }]);

	    return Section;
	}(_asyncInitialized2.default);

	exports.default = Section;
	;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	var _unit = __webpack_require__(86);

	var _unit2 = _interopRequireDefault(_unit);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Field = function (_Unit) {
	    _inherits(Field, _Unit);

	    _createClass(Field, null, [{
	        key: 'getAdapter',


	        /**
	         * Returns promise which pass PT Adapter class as the fulfillment value
	         * to the next 'then' in chain
	         * @param {string} context
	         * @param {string} type
	         * @returns {Promise}
	         */
	        value: function getAdapter(context, type) {
	            var adapterPrefix = context + '-' + type;
	            return new Promise(function (resolve) {
	                var load = __webpack_require__(87)("./" + adapterPrefix + '-adapter.js');
	                load(resolve);
	            });
	        }

	        /**
	         *
	         * @param {Element} domElement
	         * @param {Object} settings
	         * @param {CommandService} commandService
	         * @constructor
	         */

	    }, {
	        key: 'DEFAULT_SETTINGS',
	        get: function get() {
	            return {
	                context: '',
	                ready: function ready() {}
	            };
	        }

	        /**
	         * Speech which will be read with the rest item task. (If speech is undefined in item and widget configs).
	         * @returns {string}
	         * @constructor
	         */

	    }, {
	        key: 'DEFAULT_SPEECH',
	        get: function get() {
	            return '';
	        }
	    }, {
	        key: 'TYPE',
	        get: function get() {
	            throw new Error(this.name + ': static property TYPE is not defined.');
	        }
	    }]);

	    function Field(domElement, settings, commandService) {
	        _classCallCheck(this, Field);

	        var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, domElement));

	        _this.settings = (0, _merge2.default)(true, {}, _this.constructor.DEFAULT_SETTINGS, settings);
	        _this.commandService = commandService;
	        if (!_this.settings.context) {
	            throw new Error(_this.constructor.name + ': settings.context must be defined.');
	        }
	        _this._taskSpeech = _controllerUtils2.default.getElementSpeech(_this.domElement) || _this.constructor.DEFAULT_SPEECH;
	        _this._initReady();
	        _this.ready(_this.settings.ready);
	        return _this;
	    }

	    /** @inheritdoc */


	    _createClass(Field, [{
	        key: '_getReady',
	        value: function _getReady() {
	            var _this2 = this;

	            if (this._ready) return this._ready;

	            return this.constructor.getAdapter(this.settings.context, this.constructor.TYPE).then(function (Adapter) {
	                /**
	                 *
	                 * @name Field#adapter
	                 * @type {AbstractFieldAdapter}
	                 */
	                _this2.adapter = new Adapter(_this2.domElement);

	                _this2.adapter.on(_itemEvent2.default.FIELD_FOCUSED, function () {
	                    _this2.emit(_itemEvent2.default.FIELD_FOCUSED, _this2);
	                });
	            }).catch(function (error) {
	                console.error(error);
	            });
	        }

	        /**
	         * Help speech which will be read after main task speech for current field type.
	         * @returns {string}
	         */

	    }, {
	        key: 'clear',


	        /**
	         * Clears field's state.
	         */
	        value: function clear() {
	            if (!this.adapter) {
	                return ready(this.clear.bind(this));
	            }
	            this.adapter.clear();
	        }

	        /**
	         * Sets focus to field's element.
	         */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            if (!this.adapter) {
	                return;
	            }
	            this.adapter.focus();
	        }

	        /**
	         * Returns true if field's state is empty/not defined.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isAnswerEmpty',
	        value: function isAnswerEmpty() {
	            throw new Error(this.constructor.name + '.isAnswerEmpty: method is not defined.');
	        }

	        /**
	         * Returns true if answer can be set to the field with current state.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isAnswerInputAvailable',
	        value: function isAnswerInputAvailable() {
	            return this.isAnswerEmpty();
	        }

	        /**
	         * Returns array of field's specific commands.
	         * @returns {Array.<Command>}
	         */

	    }, {
	        key: 'getCommands',
	        value: function getCommands() {
	            return [];
	        }

	        /**
	         * Should return array of possible answers to create grammar
	         * @returns {Array.<string>}
	         */

	    }, {
	        key: 'getAnswerAlternatives',
	        value: function getAnswerAlternatives() {
	            return [];
	        }
	    }, {
	        key: 'getModel',
	        value: function getModel() {
	            if (!this.adapter) {
	                //todo: return promise with model
	                return;
	            }
	            return this.adapter.model;
	        }

	        /**
	         * Returns current field's state.
	         * @returns {*}
	         */

	    }, {
	        key: 'getState',
	        value: function getState() {
	            if (!this.adapter) {
	                //todo: return promise with state
	                return;
	            }
	            return this.adapter.getState();
	        }

	        /**
	         * Sets current field's state.
	         * @param {*} state
	         */

	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            if (!this.adapter) {
	                return ready(this.setState.bind(this, state));
	            }
	            this.adapter.setState(state);
	        }

	        /**
	         * Should return speech for current state.
	         * @returns {string}
	         */

	    }, {
	        key: 'getStateToSpeech',
	        value: function getStateToSpeech() {
	            throw new Error(this.constructor.name + '.getStateSpeech: method is not defined.');
	        }

	        /**
	         * Returns recognized array with matched objects. 'type' property of matched object should be set to MatchObject.TYPES.ANSWER.
	         * @param {Array.<string|MatchObject>} recognized
	         * @returns {Array.<string|MatchObject>}
	         */

	    }, {
	        key: 'matchRecognized',
	        value: function matchRecognized(recognized) {
	            throw new Error(this.constructor.name + '.matchRecognized: method is not defined.');
	        }

	        /**
	         * Returns state, which obtained from joining the passed state to current field state.
	         * @param state - new state which will be joined to the current field state.
	         * @returns {*}
	         */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            throw new Error(this.constructor.name + '.joinState: method is not defined.');
	        }

	        /**
	         * Returns state from recognized array in appropriate format.
	         * @param {Array.<string|MatchObject>} recognized
	         * @returns {*}
	         */

	    }, {
	        key: 'getStateByRecognized',
	        value: function getStateByRecognized(recognized) {
	            throw new Error(this.constructor.name + '.getAnswerByRecognized: method is not defined.');
	        }

	        /**
	         * Adds recognized answer to current field's state and returns recognized array with matched objects.
	         * @param {Array.<string|MatchObject>} recognized
	         * @returns {Array.<string|MatchObject>}
	         */

	    }, {
	        key: 'setStateByRecognized',
	        value: function setStateByRecognized(recognized) {
	            recognized = this.matchRecognized(recognized);
	            if (typeof recognized === 'undefined') {
	                new Error(this.constructor.name + '.matchRecognized: method should return array of recognized strings and matched objects.');
	            }
	            var recognizedState = this.getStateByRecognized(recognized);
	            // join recognized state to the current state to save changes in previous steps.
	            var mergedState = this.joinState(recognizedState);
	            this.setState(mergedState);
	            return recognized;
	        }
	    }, {
	        key: 'helpSpeech',
	        get: function get() {
	            return '';
	        }

	        /**
	         * Help speech which will be read after main task speech for current field type in Advanced Mode.
	         * @returns {string}
	         */

	    }, {
	        key: 'helpSpeechAdvanced',
	        get: function get() {
	            return '';
	        }

	        /**
	         * Speech which will be read with the rest item task. (If speech is undefined in section config).
	         * @returns {string}
	         */

	    }, {
	        key: 'taskSpeech',
	        get: function get() {
	            return this._taskSpeech ? '. ' + this._taskSpeech + '.' : '';
	        }

	        /**
	         * Returns speech which characterizes field type. (Uses in initial task speech)
	         * @returns {string}
	         */

	    }, {
	        key: 'typeSpeech',
	        get: function get() {
	            throw new Error(this.constructor.name + '.typeSpeech (get): method is not defined.');
	        }
	    }, {
	        key: 'lang',
	        set: function set(language) {
	            this.settings.lang = language;
	        }
	    }]);

	    return Field;
	}(_unit2.default);

	exports.default = Field;
	;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _asyncInitialized = __webpack_require__(82);

	var _asyncInitialized2 = _interopRequireDefault(_asyncInitialized);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Unit = function (_AsyncInitialized) {
	  _inherits(Unit, _AsyncInitialized);

	  /**
	   *
	   * @param {Element} domElement
	   * @constructor
	   */
	  function Unit(domElement) {
	    _classCallCheck(this, Unit);

	    var _this = _possibleConstructorReturn(this, (Unit.__proto__ || Object.getPrototypeOf(Unit)).call(this));

	    _this.domElement = domElement;
	    return _this;
	  }

	  /**
	   * Returns text for speech synthesis.
	   * @returns {string}
	   */


	  _createClass(Unit, [{
	    key: 'taskSpeech',
	    get: function get() {
	      throw new Error(this.constructor.name + '.taskSpeech (get): method is not defined.');
	    }
	  }]);

	  return Unit;
	}(_asyncInitialized2.default);

	exports.default = Unit;
	;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./abstract-field-adapter.js": 88,
		"./cg-dropdown-adapter.js": 90,
		"./cg-essay-adapter.js": 92,
		"./cg-fitb-adapter.js": 95,
		"./cg-mc-adapter.js": 97,
		"./common-dropdown-adapter.js": 99,
		"./common-essay-adapter.js": 101,
		"./common-mc-adapter.js": 103,
		"./cxp-dropdown-adapter.js": 105,
		"./cxp-fitb-adapter.js": 107,
		"./cxp-mc-adapter.js": 109,
		"./dc-mc-adapter.js": 111,
		"./dc-survey-adapter.js": 113,
		"./sw-fitb-adapter.js": 115,
		"./text-entry-adapter.js": 117
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 87;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(3, function(require) {
		data = __webpack_require__(89);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 89 */,
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(4, function(require) {
		data = __webpack_require__(91);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 91 */,
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(5, function(require) {
		data = __webpack_require__(93);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 93 */,
/* 94 */,
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(6, function(require) {
		data = __webpack_require__(96);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 96 */,
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(7, function(require) {
		data = __webpack_require__(98);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 98 */,
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(8, function(require) {
		data = __webpack_require__(100);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 100 */,
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(9, function(require) {
		data = __webpack_require__(102);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 102 */,
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(10, function(require) {
		data = __webpack_require__(104);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 104 */,
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(11, function(require) {
		data = __webpack_require__(106);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 106 */,
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(12, function(require) {
		data = __webpack_require__(108);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 108 */,
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(13, function(require) {
		data = __webpack_require__(110);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 110 */,
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(14, function(require) {
		data = __webpack_require__(112);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 112 */,
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(15, function(require) {
		data = __webpack_require__(114);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 114 */,
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(16, function(require) {
		data = __webpack_require__(116);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 116 */,
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(17, function(require) {
		data = __webpack_require__(94);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _unit = __webpack_require__(86);

	var _unit2 = _interopRequireDefault(_unit);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TaskUnit = function (_Unit) {
	  _inherits(TaskUnit, _Unit);

	  /**
	   *
	   * @param {Element} domElement
	   * @constructor
	   */
	  function TaskUnit(domElement) {
	    _classCallCheck(this, TaskUnit);

	    var _this = _possibleConstructorReturn(this, (TaskUnit.__proto__ || Object.getPrototypeOf(TaskUnit)).call(this, domElement));

	    _this._taskSpeech = _controllerUtils2.default.getElementText(_this.domElement, true);
	    //todo: implement async
	    _this._initReady();
	    return _this;
	  }

	  _createClass(TaskUnit, [{
	    key: 'taskSpeech',
	    get: function get() {
	      return this._taskSpeech;
	    }
	  }]);

	  return TaskUnit;
	}(_unit2.default);

	exports.default = TaskUnit;
	;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./dc-mc-decorator.js": 120,
		"./dc-survey-decorator.js": 122,
		"./dropdown-decorator.js": 123,
		"./essay-decorator.js": 124,
		"./fitb-decorator.js": 126,
		"./fitb-essay-decorator.js": 125,
		"./mc-decorator.js": 127,
		"./mc-dropdown-decorator.js": 121,
		"./sw-fitb-decorator.js": 128
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 119;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _mcDropdownDecorator = __webpack_require__(121);

	var _mcDropdownDecorator2 = _interopRequireDefault(_mcDropdownDecorator);

	var _speechRecognitionService = __webpack_require__(70);

	var _speechRecognitionService2 = _interopRequireDefault(_speechRecognitionService);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var McDecorator = function (_McDropdownDecorator) {
	    _inherits(McDecorator, _McDropdownDecorator);

	    _createClass(McDecorator, null, [{
	        key: 'TYPE',
	        get: function get() {
	            return 'mc';
	        }
	    }]);

	    function McDecorator(domElement, settings, commandService) {
	        _classCallCheck(this, McDecorator);

	        //add ordinal numbers
	        var _this = _possibleConstructorReturn(this, (McDecorator.__proto__ || Object.getPrototypeOf(McDecorator)).call(this, domElement, settings, commandService));

	        _this.ready(function () {
	            var model = _this.getModel();
	            for (var i = 0; i < model.choices.length; i++) {
	                var choice = model.choices[i];
	                choice.alternatives = choice.alternatives || [];
	                choice.alternatives.push(_controllerUtils2.default.toWordsOrdinal(i + 1));
	                choice.alternatives.push(_strings2.default.ORDINAL_CHOICE_PREFIX_1 + ' ' + (i + 1));
	                choice.alternatives.push(_strings2.default.ORDINAL_CHOICE_PREFIX_2 + ' ' + (i + 1));
	            }
	        });
	        return _this;
	    }

	    /** @inheritdoc */


	    _createClass(McDecorator, [{
	        key: 'getStateToSpeech',


	        /** @inheritdoc */
	        value: function getStateToSpeech() {
	            var state = this.getState();
	            if (typeof state === 'string') {
	                state = [state];
	            }
	            var selected = [];
	            for (var i = 0; i < state.length; i++) {
	                var choiceValue = state[i];
	                var choice = this._getOptionByValue(choiceValue);
	                if (choice) {
	                    selected.push(choice);
	                }
	            }
	            return this._getOptionsToSpeech(selected);
	        }
	    }, {
	        key: 'isAnswerInputAvailable',
	        value: function isAnswerInputAvailable() {
	            return this.getModel().subtype === 'radio' ? _get(McDecorator.prototype.__proto__ || Object.getPrototypeOf(McDecorator.prototype), 'isAnswerEmpty', this).call(this) : true;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            var currentState = this.getState();
	            if (typeof state === 'undefined' || state.length === 0) {
	                // no changes
	                return currentState;
	            } else if (this.getModel().subtype === 'radio') {
	                // last answer
	                return state[state.length - 1];
	            } else {
	                for (var i = 0; i < state.length; i++) {
	                    var newVal = state[i];
	                    if (currentState.indexOf(newVal) == -1) {
	                        currentState.push(newVal);
	                    }
	                }
	                return currentState;
	            }
	        }
	    }, {
	        key: 'helpSpeech',
	        get: function get() {
	            return this.helpSpeechAdvanced + ' ' + _strings2.default.commands.LIST_OPTIONS_HINT;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'helpSpeechAdvanced',
	        get: function get() {
	            var isCheckbox = this.getModel().subtype === 'checkbox';
	            var speech = isCheckbox ? _strings2.default.messages.MC_HINT_MULTIPLE : _strings2.default.messages.MC_HINT_SINGLE;
	            return '' + speech;
	        }
	    }, {
	        key: 'typeSpeech',
	        get: function get() {
	            var isCheckbox = this.getModel().subtype === 'checkbox';
	            return isCheckbox ? 'Multiple Choice' : 'Single Choice';
	        }
	    }]);

	    return McDecorator;
	}(_mcDropdownDecorator2.default);

	exports.default = McDecorator;
	;
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _command = __webpack_require__(79);

	var _command2 = _interopRequireDefault(_command);

	var _field = __webpack_require__(85);

	var _field2 = _interopRequireDefault(_field);

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _speechRecognitionService = __webpack_require__(70);

	var _speechRecognitionService2 = _interopRequireDefault(_speechRecognitionService);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var McDropdownDecorator = function (_Field) {
	    _inherits(McDropdownDecorator, _Field);

	    function McDropdownDecorator() {
	        _classCallCheck(this, McDropdownDecorator);

	        return _possibleConstructorReturn(this, (McDropdownDecorator.__proto__ || Object.getPrototypeOf(McDropdownDecorator)).apply(this, arguments));
	    }

	    _createClass(McDropdownDecorator, [{
	        key: '_getMatchObjects',


	        /**
	         *
	         * @returns {Array.<MatchObject>}
	         * @private
	         */
	        value: function _getMatchObjects() {
	            if (this._matchObjects) return this._matchObjects;

	            var map = [];
	            var model = this.getModel();
	            var options = model.options || model.choices;

	            var _loop = function _loop(i) {
	                var option = options[i];
	                var withoutPunctuation = option.display.replace(/[\.,!\?;:]\s?/g, ' ').trim();

	                /*if (option.display) {
	                    map.push(new MatchObject(option.display, option, MatchObject.TYPES.ANSWER));
	                }*/
	                if (withoutPunctuation && option.display !== withoutPunctuation) {
	                    map.push(new _matchObject2.default(withoutPunctuation, option, _matchObject2.default.TYPES.ANSWER));
	                } else {
	                    map.push(new _matchObject2.default(option.display, option, _matchObject2.default.TYPES.ANSWER));
	                }
	                if (option.speech && option.speech !== option.display) {
	                    map.push(new _matchObject2.default(option.speech, option, _matchObject2.default.TYPES.ANSWER));
	                }
	                if (option.alternatives) {
	                    option.alternatives.forEach(function (a) {
	                        map.push(new _matchObject2.default(a, option, _matchObject2.default.TYPES.ANSWER));
	                    });
	                }
	            };

	            for (var i = 0; i < options.length; i++) {
	                _loop(i);
	            }
	            // sort by key length (from highest to lowest) to prefer lager collocation
	            map.sort(function (a, b) {
	                return b.key.length - a.key.length;
	            });

	            this._matchObjects = map;

	            return map;
	        }
	    }, {
	        key: '_getOptionByValue',
	        value: function _getOptionByValue(value) {
	            var model = this.getModel();
	            var options = model.options || model.choices;
	            for (var i = 0; i < options.length; i++) {
	                var _option = options[i];
	                if (_option.value == value) {
	                    return _option;
	                }
	            }
	        }
	    }, {
	        key: '_getOptionsToSpeech',
	        value: function _getOptionsToSpeech() {
	            var choices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getModel().options || this.getModel().choices;

	            return choices.map(function (v) {
	                return v.speech || v.display;
	            }).join(', ') + '.';
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getAnswerAlternatives',
	        value: function getAnswerAlternatives() {
	            if (this._answerAlternatives) return this._answerAlternatives;

	            var alternatives = [];
	            var matchObjects = this._getMatchObjects();
	            for (var i = 0; i < matchObjects.length; i++) {
	                alternatives.push(matchObjects[i].key);
	            }

	            this._answerAlternatives = alternatives;
	            return alternatives;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getCommands',
	        value: function getCommands() {
	            var self = this;
	            if (!this._commands) {
	                this._commands = [new _command2.default([_strings2.default.commands.LIST_OPTIONS, _strings2.default.commands.LIST_OPTIONS_ALT_1, _strings2.default.commands.LIST_OPTIONS_ALT_2], function () {
	                    self.commandService.execute(_strings2.default.commands.SAY, self._getOptionsToSpeech());
	                })];
	            }
	            return this._commands;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getStateByRecognized',
	        value: function getStateByRecognized(recognized) {
	            var state = [];
	            for (var i = 0; i < recognized.length; i++) {
	                if (recognized[i].type === _matchObject2.default.TYPES.ANSWER) {
	                    state.push(recognized[i].value);
	                }
	            }

	            return state.map(function (v) {
	                return v.value;
	            });
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'isAnswerEmpty',
	        value: function isAnswerEmpty() {
	            var state = this.getState();
	            return typeof state === 'undefined' || state.length === 0;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'matchRecognized',
	        value: function matchRecognized(recognized) {
	            return _speechRecognitionService2.default.matchRecognition(recognized, this._getMatchObjects());
	        }
	    }]);

	    return McDropdownDecorator;
	}(_field2.default);

	exports.default = McDropdownDecorator;
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _mcDropdownDecorator = __webpack_require__(121);

	var _mcDropdownDecorator2 = _interopRequireDefault(_mcDropdownDecorator);

	var _speechRecognitionService = __webpack_require__(70);

	var _speechRecognitionService2 = _interopRequireDefault(_speechRecognitionService);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var McDecorator = function (_McDropdownDecorator) {
	    _inherits(McDecorator, _McDropdownDecorator);

	    _createClass(McDecorator, null, [{
	        key: 'TYPE',
	        get: function get() {
	            return 'mc';
	        }
	    }]);

	    function McDecorator(domElement, settings, commandService) {
	        _classCallCheck(this, McDecorator);

	        //add ordinal numbers
	        var _this = _possibleConstructorReturn(this, (McDecorator.__proto__ || Object.getPrototypeOf(McDecorator)).call(this, domElement, settings, commandService));

	        _this.ready(function () {
	            var model = _this.getModel();
	            for (var i = 0; i < model.choices.length; i++) {
	                var choice = model.choices[i];
	                choice.alternatives = choice.alternatives || [];
	                choice.alternatives.push(_controllerUtils2.default.toWordsOrdinal(i + 1));
	                choice.alternatives.push(_strings2.default.ORDINAL_CHOICE_PREFIX_1 + ' ' + (i + 1));
	                choice.alternatives.push(_strings2.default.ORDINAL_CHOICE_PREFIX_2 + ' ' + (i + 1));
	            }
	        });
	        return _this;
	    }

	    /** @inheritdoc */


	    _createClass(McDecorator, [{
	        key: 'getStateToSpeech',


	        /** @inheritdoc */
	        value: function getStateToSpeech() {
	            var state = this.getState();
	            if (typeof state === 'string') {
	                state = [state];
	            }
	            var selected = [];
	            for (var i = 0; i < state.length; i++) {
	                var choiceValue = state[i];
	                var choice = this._getOptionByValue(choiceValue);
	                if (choice) {
	                    selected.push(choice);
	                }
	            }
	            return this._getOptionsToSpeech(selected);
	        }
	    }, {
	        key: 'isAnswerInputAvailable',
	        value: function isAnswerInputAvailable() {
	            return this.getModel().subtype === 'radio' ? _get(McDecorator.prototype.__proto__ || Object.getPrototypeOf(McDecorator.prototype), 'isAnswerEmpty', this).call(this) : true;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            var currentState = this.getState();
	            if (typeof state === 'undefined' || state.length === 0) {
	                // no changes
	                return currentState;
	            } else if (this.getModel().subtype === 'radio') {
	                // last answer
	                return state[state.length - 1];
	            } else {
	                for (var i = 0; i < state.length; i++) {
	                    var newVal = state[i];
	                    if (currentState.indexOf(newVal) == -1) {
	                        currentState.push(newVal);
	                    }
	                }
	                return currentState;
	            }
	        }
	    }, {
	        key: 'helpSpeech',
	        get: function get() {
	            return this.helpSpeechAdvanced + ' ' + _strings2.default.commands.LIST_OPTIONS_HINT;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'helpSpeechAdvanced',
	        get: function get() {
	            var isCheckbox = this.getModel().subtype === 'checkbox';
	            var speech = isCheckbox ? _strings2.default.messages.MC_HINT_MULTIPLE : _strings2.default.messages.MC_HINT_SINGLE;
	            return '' + speech;
	        }
	    }, {
	        key: 'typeSpeech',
	        get: function get() {
	            var isCheckbox = this.getModel().subtype === 'checkbox';
	            return isCheckbox ? 'Multiple Choice' : 'Single Choice';
	        }
	    }]);

	    return McDecorator;
	}(_mcDropdownDecorator2.default);

	exports.default = McDecorator;
	;
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _command = __webpack_require__(79);

	var _command2 = _interopRequireDefault(_command);

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _mcDropdownDecorator = __webpack_require__(121);

	var _mcDropdownDecorator2 = _interopRequireDefault(_mcDropdownDecorator);

	var _speechRecognitionService = __webpack_require__(70);

	var _speechRecognitionService2 = _interopRequireDefault(_speechRecognitionService);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NEXT_COMMAND = 'Next field';
	var PREV_COMMAND = 'Previous field';

	var DropdownDecorator = function (_McDropdownDecorator) {
	    _inherits(DropdownDecorator, _McDropdownDecorator);

	    _createClass(DropdownDecorator, null, [{
	        key: 'DEFAULT_SPEECH',
	        get: function get() {
	            return 'Dropdown field';
	        }
	    }, {
	        key: 'TYPE',
	        get: function get() {
	            return 'dropdown';
	        }
	    }]);

	    function DropdownDecorator(domElement, settings, commandService) {
	        _classCallCheck(this, DropdownDecorator);

	        //add ordinal numbers
	        var _this = _possibleConstructorReturn(this, (DropdownDecorator.__proto__ || Object.getPrototypeOf(DropdownDecorator)).call(this, domElement, settings, commandService));

	        _this.ready(function () {
	            var model = _this.getModel();
	            for (var i = 0; i < model.options.length; i++) {
	                var option = model.options[i];
	                option.alternatives = option.alternatives || [];
	                option.alternatives.push(_controllerUtils2.default.toWordsOrdinal(i + 1));
	                option.alternatives.push(_strings2.default.ORDINAL_CHOICE_PREFIX_1 + ' ' + (i + 1));
	                option.alternatives.push(_strings2.default.ORDINAL_CHOICE_PREFIX_2 + ' ' + (i + 1));
	            }
	        });
	        return _this;
	    }

	    /** @inheritdoc */


	    _createClass(DropdownDecorator, [{
	        key: 'getStateByRecognized',


	        /** @inheritdoc */
	        value: function getStateByRecognized(recognized) {
	            var state = _get(DropdownDecorator.prototype.__proto__ || Object.getPrototypeOf(DropdownDecorator.prototype), 'getStateByRecognized', this).call(this, recognized);
	            return state[state.length - 1];
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getStateToSpeech',
	        value: function getStateToSpeech() {
	            var state = this.getState();
	            var option = this._getOptionByValue(state);
	            return option.speech;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            var currentState = this.getState();
	            if (!state) {
	                return currentState;
	            } else {
	                return state;
	            }
	        }
	    }, {
	        key: 'helpSpeech',
	        get: function get() {
	            return this.helpSpeechAdvanced + ' ' + _strings2.default.commands.HELP_HINT;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'helpSpeechAdvanced',
	        get: function get() {
	            var speech = '' + _strings2.default.messages.MC_HINT_SINGLE;
	            return speech + ' ' + _strings2.default.commands.LIST_OPTIONS_HINT;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'typeSpeech',
	        get: function get() {
	            return 'Dropdown';
	        }
	    }]);

	    return DropdownDecorator;
	}(_mcDropdownDecorator2.default);

	exports.default = DropdownDecorator;
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _fitbEssayDecorator = __webpack_require__(125);

	var _fitbEssayDecorator2 = _interopRequireDefault(_fitbEssayDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EssayDecorator = function (_FitbEssayDecorator) {
	    _inherits(EssayDecorator, _FitbEssayDecorator);

	    function EssayDecorator() {
	        _classCallCheck(this, EssayDecorator);

	        return _possibleConstructorReturn(this, (EssayDecorator.__proto__ || Object.getPrototypeOf(EssayDecorator)).apply(this, arguments));
	    }

	    _createClass(EssayDecorator, [{
	        key: 'isAnswerInputAvailable',
	        value: function isAnswerInputAvailable() {
	            return true;
	        }
	    }, {
	        key: 'typeSpeech',
	        get: function get() {
	            return 'Open-ended';
	        }
	    }], [{
	        key: 'TYPE',
	        get: function get() {
	            return 'essay';
	        }
	    }]);

	    return EssayDecorator;
	}(_fitbEssayDecorator2.default);

	exports.default = EssayDecorator;
	;
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _field = __webpack_require__(85);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FitbEssayDecorator = function (_Field) {
	    _inherits(FitbEssayDecorator, _Field);

	    function FitbEssayDecorator() {
	        _classCallCheck(this, FitbEssayDecorator);

	        return _possibleConstructorReturn(this, (FitbEssayDecorator.__proto__ || Object.getPrototypeOf(FitbEssayDecorator)).apply(this, arguments));
	    }

	    _createClass(FitbEssayDecorator, [{
	        key: 'getStateByRecognized',


	        /** @inheritdoc */
	        value: function getStateByRecognized(recognized) {
	            var state = [];
	            for (var i = 0; i < recognized.length; i++) {
	                var r = recognized[i];
	                if (r instanceof _matchObject2.default && r.type != _matchObject2.default.TYPES.COMMAND) {
	                    state.push(r.value);
	                }
	            }
	            return state.join(' ');
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getStateToSpeech',
	        value: function getStateToSpeech() {
	            return this.getState();
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'isAnswerEmpty',
	        value: function isAnswerEmpty() {
	            var state = this.getState();
	            return typeof state === 'undefined' || state.length === 0;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            var currentState = this.getState();
	            if (state) {
	                // if string does not begin with a punctuation mark, whitespace should be added
	                state = state.trim().search(/[\.,!?:;]/) == 0 ? state : ' ' + state;
	                currentState = currentState.trim() + state;
	            }
	            return currentState;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'matchRecognized',
	        value: function matchRecognized(recognized) {
	            _controllerUtils2.default.joinNeighboringStrings(recognized);
	            for (var i = 0; i < recognized.length; i++) {
	                if (typeof recognized[i] === 'string') {
	                    recognized[i] = new _matchObject2.default(recognized[i], recognized[i]);
	                } else if (recognized[i] instanceof _matchObject2.default && recognized[i].type == _matchObject2.default.TYPES.COMMAND) {
	                    break;
	                }
	            }
	            return recognized;
	        }
	    }]);

	    return FitbEssayDecorator;
	}(_field2.default);

	exports.default = FitbEssayDecorator;
	;
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _fitbEssayDecorator = __webpack_require__(125);

	var _fitbEssayDecorator2 = _interopRequireDefault(_fitbEssayDecorator);

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _commonUtils = __webpack_require__(22);

	var _commonUtils2 = _interopRequireDefault(_commonUtils);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	var _cgMet = __webpack_require__(23);

	var _cgMet2 = _interopRequireDefault(_cgMet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 *
	 * @param {string} mathML
	 * @returns {boolean}
	 */
	function isEmptyMathML(mathML) {
	    //todo: refactor this
	    return !mathML || mathML == '<math><mrow></mrow></math>' || mathML == '<math><mrow><mo>&#160;</mo></mrow></math>';
	}

	/**
	 *
	 * @param {string} mathML
	 * @returns {string}
	 */
	function getContentMathML(mathML) {
	    var mathMLRegexp = /(<math[^>]*>)([\s\S]*)(<\/math>)/ig;
	    return isEmptyMathML(mathML) ? '' : mathML.replace(mathMLRegexp, '$2');
	}

	var FitbDecorator = function (_FitbEssayDecorator) {
	    _inherits(FitbDecorator, _FitbEssayDecorator);

	    function FitbDecorator() {
	        _classCallCheck(this, FitbDecorator);

	        return _possibleConstructorReturn(this, (FitbDecorator.__proto__ || Object.getPrototypeOf(FitbDecorator)).apply(this, arguments));
	    }

	    _createClass(FitbDecorator, [{
	        key: 'getStateToSpeech',


	        /** @inheritdoc */
	        value: function getStateToSpeech() {
	            var speech;
	            switch (this.getModel().subtype) {
	                case 'math':
	                    /*var mml = this.getState();
	                    speech = commonUtils.getSpeechByMathML(mml);*/
	                    var latex = this.getState();
	                    speech = _commonUtils2.default.getSpeechByLatex(latex);
	                    break;
	                default:
	                    speech = _get(FitbDecorator.prototype.__proto__ || Object.getPrototypeOf(FitbDecorator.prototype), 'getStateToSpeech', this).call(this);
	            }
	            return speech;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'isAnswerEmpty',
	        value: function isAnswerEmpty() {
	            switch (this.getModel().subtype) {
	                case 'math':
	                    /*var mml = this.getState();
	                    return isEmptyMathML(mml);*/
	                    return this.getState() == '';
	                    break;
	                default:
	                    return _get(FitbDecorator.prototype.__proto__ || Object.getPrototypeOf(FitbDecorator.prototype), 'isAnswerEmpty', this).call(this);
	            }
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            var currentState = this.getState();
	            switch (this.getModel().subtype) {
	                case 'math':
	                    /*var currentPart = getContentMathML(currentState);
	                    var addingPart = getContentMathML(state);*/
	                    return '' + currentState + state;
	                    break;
	                default:
	                    return _get(FitbDecorator.prototype.__proto__ || Object.getPrototypeOf(FitbDecorator.prototype), 'joinState', this).call(this, state);
	            }
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getStateByRecognized',
	        value: function getStateByRecognized(recognized) {
	            var state = '';
	            switch (this.getModel().subtype) {
	                case 'math':
	                    for (var i = recognized.length - 1; i >= 0; i--) {
	                        if (recognized[i].type != _matchObject2.default.TYPES.COMMAND) {
	                            state = recognized[i].value;
	                            break;
	                        }
	                    }
	                    /*var mml = text2exp.mathml(state);
	                    delete mml.attributes.title;
	                    state = mml.toString();*/
	                    var state = (0, _cgMet2.default)(state, { output: 'latex', lang: this.settings.lang.substr(0, 2) });
	                    break;
	                default:
	                    state = _get(FitbDecorator.prototype.__proto__ || Object.getPrototypeOf(FitbDecorator.prototype), 'getStateByRecognized', this).call(this, recognized);
	            }
	            return state;
	        }
	    }, {
	        key: 'typeSpeech',
	        get: function get() {
	            return 'Fill in the blank';
	        }
	    }, {
	        key: 'lang',
	        set: function set(language) {
	            this.settings.lang = language;
	        }
	    }], [{
	        key: 'DEFAULT_SPEECH',
	        get: function get() {
	            return 'Fill in the blank field';
	        }
	    }, {
	        key: 'TYPE',
	        get: function get() {
	            return 'fitb';
	        }
	    }]);

	    return FitbDecorator;
	}(_fitbEssayDecorator2.default);

	exports.default = FitbDecorator;
	;
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _mcDropdownDecorator = __webpack_require__(121);

	var _mcDropdownDecorator2 = _interopRequireDefault(_mcDropdownDecorator);

	var _speechRecognitionService = __webpack_require__(70);

	var _speechRecognitionService2 = _interopRequireDefault(_speechRecognitionService);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var McDecorator = function (_McDropdownDecorator) {
	    _inherits(McDecorator, _McDropdownDecorator);

	    _createClass(McDecorator, null, [{
	        key: 'TYPE',
	        get: function get() {
	            return 'mc';
	        }
	    }]);

	    function McDecorator(domElement, settings, commandService) {
	        _classCallCheck(this, McDecorator);

	        //add ordinal numbers
	        var _this = _possibleConstructorReturn(this, (McDecorator.__proto__ || Object.getPrototypeOf(McDecorator)).call(this, domElement, settings, commandService));

	        _this.ready(function () {
	            var model = _this.getModel();
	            for (var i = 0; i < model.choices.length; i++) {
	                var choice = model.choices[i];
	                choice.alternatives = choice.alternatives || [];
	                choice.alternatives.push(_controllerUtils2.default.toWordsOrdinal(i + 1));
	                choice.alternatives.push(_strings2.default.ORDINAL_CHOICE_PREFIX_1 + ' ' + (i + 1));
	                choice.alternatives.push(_strings2.default.ORDINAL_CHOICE_PREFIX_2 + ' ' + (i + 1));
	            }
	        });
	        return _this;
	    }

	    /** @inheritdoc */


	    _createClass(McDecorator, [{
	        key: 'getStateToSpeech',


	        /** @inheritdoc */
	        value: function getStateToSpeech() {
	            var state = this.getState();
	            if (typeof state === 'string') {
	                state = [state];
	            }
	            var selected = [];
	            for (var i = 0; i < state.length; i++) {
	                var choiceValue = state[i];
	                var choice = this._getOptionByValue(choiceValue);
	                if (choice) {
	                    selected.push(choice);
	                }
	            }
	            return this._getOptionsToSpeech(selected);
	        }
	    }, {
	        key: 'isAnswerInputAvailable',
	        value: function isAnswerInputAvailable() {
	            return this.getModel().subtype === 'radio' ? _get(McDecorator.prototype.__proto__ || Object.getPrototypeOf(McDecorator.prototype), 'isAnswerEmpty', this).call(this) : true;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            var currentState = this.getState();
	            if (typeof state === 'undefined' || state.length === 0) {
	                // no changes
	                return currentState;
	            } else if (this.getModel().subtype === 'radio') {
	                // last answer
	                return state[state.length - 1];
	            } else {
	                for (var i = 0; i < state.length; i++) {
	                    var newVal = state[i];
	                    if (currentState.indexOf(newVal) == -1) {
	                        currentState.push(newVal);
	                    }
	                }
	                return currentState;
	            }
	        }
	    }, {
	        key: 'helpSpeech',
	        get: function get() {
	            return this.helpSpeechAdvanced + ' ' + _strings2.default.commands.HELP_HINT;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'helpSpeechAdvanced',
	        get: function get() {
	            var isCheckbox = this.getModel().subtype === 'checkbox';
	            var speech = isCheckbox ? _strings2.default.messages.MC_HINT_MULTIPLE : _strings2.default.messages.MC_HINT_SINGLE;
	            return speech + ' ' + _strings2.default.commands.LIST_OPTIONS_HINT;
	        }
	    }, {
	        key: 'typeSpeech',
	        get: function get() {
	            var isCheckbox = this.getModel().subtype === 'checkbox';
	            return isCheckbox ? 'Multiple Choice' : 'Single Choice';
	        }
	    }]);

	    return McDecorator;
	}(_mcDropdownDecorator2.default);

	exports.default = McDecorator;
	;
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _fitbEssayDecorator = __webpack_require__(125);

	var _fitbEssayDecorator2 = _interopRequireDefault(_fitbEssayDecorator);

	var _matchObject = __webpack_require__(80);

	var _matchObject2 = _interopRequireDefault(_matchObject);

	var _commonUtils = __webpack_require__(22);

	var _commonUtils2 = _interopRequireDefault(_commonUtils);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	var _cgMet = __webpack_require__(23);

	var _cgMet2 = _interopRequireDefault(_cgMet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 *
	 * @param {string} mathML
	 * @returns {boolean}
	 */
	function isEmptyMathML(mathML) {
	    //todo: refactor this
	    return !mathML || mathML == '<math><mrow></mrow></math>' || mathML == '<math><mrow><mo>&#160;</mo></mrow></math>';
	}

	/**
	 *
	 * @param {string} mathML
	 * @returns {string}
	 */
	function getContentMathML(mathML) {
	    var mathMLRegexp = /(<math[^>]*>)([\s\S]*)(<\/math>)/ig;
	    return isEmptyMathML(mathML) ? '' : mathML.replace(mathMLRegexp, '$2');
	}

	var FitbDecorator = function (_FitbEssayDecorator) {
	    _inherits(FitbDecorator, _FitbEssayDecorator);

	    function FitbDecorator() {
	        _classCallCheck(this, FitbDecorator);

	        return _possibleConstructorReturn(this, (FitbDecorator.__proto__ || Object.getPrototypeOf(FitbDecorator)).apply(this, arguments));
	    }

	    _createClass(FitbDecorator, [{
	        key: 'getStateToSpeech',


	        /** @inheritdoc */
	        value: function getStateToSpeech() {
	            var speech;
	            var mml = this.getState();
	            speech = _commonUtils2.default.getSpeechByMathML(mml);
	            return speech;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'isAnswerEmpty',
	        value: function isAnswerEmpty() {
	            var mml = this.getState();
	            return isEmptyMathML(mml);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            return _get(FitbDecorator.prototype.__proto__ || Object.getPrototypeOf(FitbDecorator.prototype), 'joinState', this).call(this, state);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getStateByRecognized',
	        value: function getStateByRecognized(recognized) {
	            var state = '';
	            for (var i = recognized.length - 1; i >= 0; i--) {
	                if (recognized[i].type != _matchObject2.default.TYPES.COMMAND) {
	                    state = recognized[i].value;
	                    break;
	                }
	            }
	            /*var mml = text2exp.mathml(state);
	             delete mml.attributes.title;
	             state = mml.toString();*/
	            var state = (0, _cgMet2.default)(state, { output: 'ascii', lang: this.settings.lang.substr(0, 2) });
	            return state;
	        }
	    }, {
	        key: 'typeSpeech',
	        get: function get() {
	            return 'Fill in the blank';
	        }
	    }, {
	        key: 'lang',
	        set: function set(language) {
	            this.settings.lang = language;
	        }
	    }], [{
	        key: 'DEFAULT_SPEECH',
	        get: function get() {
	            return 'Fill in the blank field';
	        }
	    }, {
	        key: 'TYPE',
	        get: function get() {
	            return 'fitb';
	        }
	    }]);

	    return FitbDecorator;
	}(_fitbEssayDecorator2.default);

	exports.default = FitbDecorator;
	;
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(130);

	var _cgDialog = __webpack_require__(133);

	var _cgDialog2 = _interopRequireDefault(_cgDialog);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	var _cgSlider = __webpack_require__(139);

	var _cgSlider2 = _interopRequireDefault(_cgSlider);

	var _shortid = __webpack_require__(11);

	var _shortid2 = _interopRequireDefault(_shortid);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	var _speechSynthesisService = __webpack_require__(66);

	var _speechSynthesisService2 = _interopRequireDefault(_speechSynthesisService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PREFIX = 'cg-voice';
	var SETTINGS_FORM_CLASS = PREFIX + '-sf';

	var DIALOG_CLASS = SETTINGS_FORM_CLASS + '-dialog';
	var ADVANCED_MODE_CLASS = SETTINGS_FORM_CLASS + '-advanced-mode';
	var ROW_CLASS = SETTINGS_FORM_CLASS + '-row';
	var LABEL_TEXT_CLASS = SETTINGS_FORM_CLASS + '-label-text';
	var SLIDER_CONTAINER_CLASS = SETTINGS_FORM_CLASS + '-slider-container';
	var DESCRIPTION_CLASS = SETTINGS_FORM_CLASS + '-description';
	var SPEECH_SPEED_CLASS = SETTINGS_FORM_CLASS + '-speech-speed';
	var CHECK_SPEECH_SPEED_CLASS = SETTINGS_FORM_CLASS + '-speech-speed-check';
	var USER_RESPONSE_TIMEOUT_CLASS = SETTINGS_FORM_CLASS + '-no-speech';
	var USE_BROWSER_CLASS = SETTINGS_FORM_CLASS + '-use-browser';
	var LANG_CLASS = SETTINGS_FORM_CLASS + '-lang';
	var LANG_SELECT_CLASS = SETTINGS_FORM_CLASS + '-lang_select';
	var ALLOW_COMMANDS_WITHOUT_PREFIX_CLASS = SETTINGS_FORM_CLASS + '-allow-without-prefix';
	var PAUSE_INTERVAL_CLASS = SETTINGS_FORM_CLASS + '-pause-interval';
	var RESET_DEFAULTS_CLASS = SETTINGS_FORM_CLASS + '-reset-defaults';

	var SettingsDialog = function () {
	    _createClass(SettingsDialog, null, [{
	        key: 'DEFAULT_OPTIONS',
	        get: function get() {
	            return {
	                defaultSettings: {
	                    advancedMode: false,
	                    allowCommandsWithoutPrefix: false,
	                    userResponseTimeout: 5,
	                    pauseInterval: 2,
	                    speechSpeed: 1,
	                    lang: _strings2.default.consts.langs.en
	                },
	                minSpeechSpeed: 0.5,
	                maxSpeechSpeed: 2,
	                speechSpeedStep: 0.1,
	                minUserResponseTimeout: 2,
	                maxUserResponseTimeout: 10,
	                minPauseInterval: 1,
	                maxPauseInterval: 5,
	                timeStep: 1,
	                onopen: function onopen() {},
	                onclose: function onclose() {}
	            };
	        }
	    }]);

	    function SettingsDialog(options) {
	        var _this = this;

	        _classCallCheck(this, SettingsDialog);

	        this.options = _merge2.default.recursive(this.constructor.DEFAULT_OPTIONS, options);
	        this.form = this._render();
	        this.dialog = new _cgDialog2.default({
	            content: this.form,
	            classes: DIALOG_CLASS,
	            title: _strings2.default.sf.labels.DIALOG_TITLE,
	            type: _cgDialog2.default.TYPES.OK,
	            onopen: this.options.onopen,
	            onclose: this.options.onclose
	        });

	        this.advancedModeCB = this.form.querySelector('.' + ADVANCED_MODE_CLASS + ' input');

	        this.speechSpeedSlider = new _cgSlider2.default({
	            min: this.options.minSpeechSpeed,
	            max: this.options.maxSpeechSpeed,
	            step: this.options.speechSpeedStep,
	            ariaLabel: _strings2.default.sf.labels.SPEECH_SPEED,
	            enableTooltips: true,
	            withTicks: false,
	            tooltipFormatter: function tooltipFormatter(value) {
	                return '\xD7' + value;
	            }
	        }, this.form.querySelector('.' + SPEECH_SPEED_CLASS + ' .' + SLIDER_CONTAINER_CLASS));
	        this.userResponseTimeoutSlider = new _cgSlider2.default({
	            min: this.options.minUserResponseTimeout,
	            max: this.options.maxUserResponseTimeout,
	            step: this.options.timeStep,
	            ariaLabel: _strings2.default.sf.labels.USER_RESPONSE_TIMEOUT,
	            enableTooltips: true,
	            tooltipFormatter: function tooltipFormatter(value) {
	                return value + ' ' + _strings2.default.sf.TIME_SUFFIX;
	            }
	        }, this.form.querySelector('.' + USER_RESPONSE_TIMEOUT_CLASS + ' .' + SLIDER_CONTAINER_CLASS));
	        this.pauseIntervalSlider = new _cgSlider2.default({
	            min: this.options.minPauseInterval,
	            max: this.options.maxPauseInterval,
	            step: this.options.timeStep,
	            ariaLabel: _strings2.default.sf.labels.PAUSE_INTERVAL,
	            enableTooltips: true,
	            tooltipFormatter: function tooltipFormatter(value) {
	                return value + ' ' + _strings2.default.sf.TIME_SUFFIX;
	            }
	        }, this.form.querySelector('.' + PAUSE_INTERVAL_CLASS + ' .' + SLIDER_CONTAINER_CLASS));

	        this.checkSpeedButton = this.form.querySelector('.' + CHECK_SPEECH_SPEED_CLASS);
	        this.checkSpeedButton.addEventListener('click', function (e) {
	            _speechSynthesisService2.default.synthesize(_strings2.default.sf.CHECK_PHRASE, { rate: _this.settings.speechSpeed });
	            e.preventDefault();
	        });

	        this.allowCommandsWithoutPrefixCB = this.form.querySelector('.' + ALLOW_COMMANDS_WITHOUT_PREFIX_CLASS + ' input');
	        this.languageSelect = this.form.querySelector('.' + LANG_SELECT_CLASS);

	        this.resetButton = this.form.querySelector('.' + RESET_DEFAULTS_CLASS);
	        this.resetButton.addEventListener('click', function (e) {
	            _this.settings = _this.options.defaultSettings;
	            e.preventDefault();
	        });

	        this.settings = this.options.defaultSettings;
	    }

	    _createClass(SettingsDialog, [{
	        key: '_render',


	        /**
	         * Returns form element.
	         * @returns {Element|Node}
	         * @private
	         */
	        value: function _render() {
	            var id = 'sf_' + _shortid2.default.generate();
	            var langOptions = '';
	            for (var lang in _strings2.default.sf.langs) {
	                langOptions += '<option value="' + lang + '" ' + (lang === this.options.defaultSettings.lang ? 'selected' : '') + '>' + _strings2.default.sf.langs[lang] + '</option>';
	            }
	            var elementHTML = '\n            <form id="' + id + '" class="' + SETTINGS_FORM_CLASS + '">\n                <div class="' + ROW_CLASS + ' ' + SPEECH_SPEED_CLASS + '">\n                    <div>\n                        <label>\n                            <span class="' + LABEL_TEXT_CLASS + '">' + _strings2.default.sf.labels.SPEECH_SPEED + ':</span>\n                        </label><!--\n                     --><div class="' + SLIDER_CONTAINER_CLASS + '"></div><!--\n                     --><button class="' + CHECK_SPEECH_SPEED_CLASS + '" title="' + _strings2.default.sf.descriptions.CHECK_SPEECH_SPEED + '"></button>\n                    </div>\n                    <div class="' + DESCRIPTION_CLASS + '">\n                        ' + _strings2.default.sf.descriptions.SPEECH_SPEED + '\n                    </div>\n                </div>\n                <div class="' + ROW_CLASS + ' ' + ADVANCED_MODE_CLASS + '">\n                    <div>\n                        <label>\n                            <span class="' + LABEL_TEXT_CLASS + '">' + _strings2.default.sf.labels.ADVANCED_MODE + ':</span>\n                        </label><!--\n                     --><input class="cg-toggle" type="checkbox" aria-labelledby="' + id + '_advanced_mode_aria">\n                    </div>\n                    <div class="' + DESCRIPTION_CLASS + '">\n                        ' + _strings2.default.sf.descriptions.ADVANCED_MODE + '\n                    </div>\n                </div>\n                <div class="' + ROW_CLASS + ' ' + USER_RESPONSE_TIMEOUT_CLASS + '">\n                    <div>\n                        <label>\n                            <span class="' + LABEL_TEXT_CLASS + '">' + _strings2.default.sf.labels.USER_RESPONSE_TIMEOUT + ':</span>\n                        </label><!--\n                     --><div class="' + SLIDER_CONTAINER_CLASS + '"></div>\n                    </div>\n                    <div class="' + DESCRIPTION_CLASS + '">\n                        ' + _strings2.default.sf.descriptions.USER_RESPONSE_TIMEOUT + '\n                    </div>\n                </div>\n                <div class="' + ROW_CLASS + ' ' + PAUSE_INTERVAL_CLASS + '">\n                    <div>\n                        <label>\n                            <span class="' + LABEL_TEXT_CLASS + '">' + _strings2.default.sf.labels.PAUSE_INTERVAL + ':</span>\n                        </label><!--\n                     --><div class="' + SLIDER_CONTAINER_CLASS + '"></div>\n                    </div>\n                    <div class="' + DESCRIPTION_CLASS + '">\n                        ' + _strings2.default.sf.descriptions.PAUSE_INTERVAL + '\n                    </div>\n                </div>\n                <div class="' + ROW_CLASS + ' ' + LANG_CLASS + '">\n                    <div>\n                        <label id="' + id + '_lang_aria">\n                            <span class="' + LABEL_TEXT_CLASS + '">' + _strings2.default.sf.labels.LANG + ':</span>\n                        </label><!--\n                     --><select class="' + LANG_SELECT_CLASS + '" aria-labelledby="' + id + '_lang_aria">\n                            ' + langOptions + '\n                        </select>\n                    </div>\n                </div>\n                <div class="' + ROW_CLASS + ' ' + ALLOW_COMMANDS_WITHOUT_PREFIX_CLASS + '">\n                    <div>\n                        <label id="' + id + '_allow_without_prefix_aria">\n                            <span class="' + LABEL_TEXT_CLASS + '">' + _strings2.default.sf.labels.ALLOW_COMMANDS_WITHOUT_PREFIX + ':</span>\n                        </label><!--\n                     --><input class="cg-toggle" type="checkbox" aria-labelledby="' + id + '_allow_without_prefix_aria">\n                    </div>\n                </div>\n                <div class="' + ROW_CLASS + '">\n                    <div>\n                        <label>\n                            <span class="' + LABEL_TEXT_CLASS + '">' + _strings2.default.sf.labels.RESET_DEFAULTS + ':</span>\n                        </label><!--\n                     --><button class="' + RESET_DEFAULTS_CLASS + '" title="' + _strings2.default.sf.descriptions.RESET_DEFAULTS + '">' + _strings2.default.sf.RESET_DEFAULTS_BUTTON_LABEL + '</button>\n                    </div>\n\n                </div>\n\n                <div class="cg-screen-readers-only">\n                    <label id="' + id + '_speech_speed_aria">' + _strings2.default.sf.labels.SPEECH_SPEED + '. ' + _strings2.default.sf.descriptions.SPEECH_SPEED + '</label>\n                    <label id="' + id + '_advanced_mode_aria">' + _strings2.default.sf.labels.ADVANCED_MODE + '. ' + _strings2.default.sf.descriptions.ADVANCED_MODE + '</label>\n                    <label id="' + id + '_user_response_timeout_aria">' + _strings2.default.sf.labels.USER_RESPONSE_TIMEOUT + '. ' + _strings2.default.sf.descriptions.USER_RESPONSE_TIMEOUT + '</label>\n                    <label id="' + id + '_pause_interval_aria">' + _strings2.default.sf.labels.PAUSE_INTERVAL + '. ' + _strings2.default.sf.descriptions.PAUSE_INTERVAL + '</label>\n                </div>\n            </form>\n        ';
	            return _controllerUtils2.default.createHTML(elementHTML);
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.dialog.close();
	        }
	    }, {
	        key: 'open',
	        value: function open() {
	            this.dialog.open();
	        }
	    }, {
	        key: 'settings',
	        get: function get() {
	            return {
	                advancedMode: this.advancedModeCB.checked,
	                allowCommandsWithoutPrefix: this.allowCommandsWithoutPrefixCB.checked,
	                speechSpeed: this.speechSpeedSlider.value,
	                userResponseTimeout: this.userResponseTimeoutSlider.value,
	                pauseInterval: this.pauseIntervalSlider.value,
	                lang: this.languageSelect.querySelector('option:checked').value
	            };
	        },
	        set: function set(settings) {
	            this.advancedModeCB.checked = settings.advancedMode;
	            this.allowCommandsWithoutPrefixCB.checked = settings.allowCommandsWithoutPrefix;
	            this.speechSpeedSlider.value = settings.speechSpeed;
	            this.userResponseTimeoutSlider.value = settings.userResponseTimeout;
	            this.pauseIntervalSlider.value = settings.pauseInterval;
	            var option = this.languageSelect.querySelector('option[value=' + settings.lang + ']');
	            if (option) option.setAttribute('selected', 'selected');
	        }
	    }]);

	    return SettingsDialog;
	}();

	exports.default = SettingsDialog;
	;
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./settings-dialog.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./settings-dialog.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n.cg-screen-readers-only {\n  position: absolute;\n  clip: rect(1px 1px 1px 1px);\n  /* for Internet Explorer */\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  left: -9999px;\n}\n.cg-voice-sf-dialog * {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.cg-voice-sf-dialog .cg-dialog-content button,\n.cg-voice-sf-dialog .cg-dialog-buttons button {\n  position: relative;\n  border: none;\n  background-color: #2196F3;\n  color: #fff;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n}\n.cg-voice-sf-dialog .cg-dialog-content button:focus,\n.cg-voice-sf-dialog .cg-dialog-buttons button:focus {\n  outline: none;\n}\n.cg-voice-sf-dialog .cg-dialog-content button:focus:not(.is-mouse-focused):after,\n.cg-voice-sf-dialog .cg-dialog-buttons button:focus:not(.is-mouse-focused):after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border: #fff dotted 1px;\n  top: 2px;\n  bottom: 2px;\n  left: 2px;\n  right: 2px;\n}\n.cg-voice-sf-dialog .cg-dialog-content button:hover,\n.cg-voice-sf-dialog .cg-dialog-buttons button:hover {\n  background-color: #0c7cd5;\n}\n.cg-voice-sf-dialog .cg-dialog-content button:active,\n.cg-voice-sf-dialog .cg-dialog-buttons button:active {\n  background-color: #0960a5;\n}\n.cg-voice-sf-dialog .cg-dialog-buttons button {\n  text-transform: uppercase;\n  padding: 5px 15px;\n}\n.cg-voice-sf-dialog button.cg-voice-sf-reset-defaults {\n  padding: 3px 15px;\n  float: right;\n  background-color: #f64d4a;\n}\n.cg-voice-sf-dialog button.cg-voice-sf-reset-defaults:hover {\n  background-color: #f41d19;\n}\n.cg-voice-sf-dialog button.cg-voice-sf-reset-defaults:active {\n  background-color: #d00e0a;\n}\n.cg-voice-sf input.cg-toggle {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  user-select: none;\n  width: 50px;\n  height: 25px;\n  background-color: #dddddd;\n  border-radius: 25px;\n  margin: 0;\n  vertical-align: middle;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.cg-voice-sf input.cg-toggle:focus:not(.is-mouse-focused) {\n  outline: dotted black 1px;\n  outline-offset: 2px;\n}\n.cg-voice-sf input.cg-toggle:before,\n.cg-voice-sf input.cg-toggle:after {\n  display: block;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  bottom: 1px;\n  content: \"\";\n  width: auto;\n  height: auto;\n  -moz-transform: none;\n  -ms-transform: none;\n  -webkit-transform: none;\n  -o-transform: none;\n  transform: none;\n  border: none;\n  margin: 0;\n}\n.cg-voice-sf input.cg-toggle:before {\n  right: 1px;\n  background-color: #f1f1f1;\n  border-radius: 25px;\n  transition: background 0.4s;\n}\n.cg-voice-sf input.cg-toggle:after {\n  width: 23px;\n  background-color: #fff;\n  border-radius: 100%;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n  transition: margin 0.4s;\n}\n.cg-voice-sf input.cg-toggle:checked:before {\n  background-color: #8ce196;\n}\n.cg-voice-sf input.cg-toggle:checked:after {\n  margin-left: 25px;\n}\n.cg-voice-sf .cg-slider-progress,\n.cg-voice-sf .cg-slider-handle,\n.cg-voice-sf .cg-slider-handle:hover:after,\n.cg-voice-sf .cg-slider-handle-tooltip {\n  background-color: #2196F3;\n}\n.cg-voice-sf .cg-slider-handle:focus:after {\n  background-color: rgba(33, 150, 243, 0.3);\n}\n.cg-voice-sf .cg-slider-handle-tooltip:after {\n  border-top-color: #2196F3;\n}\n.cg-voice-sf-speech-speed input {\n  width: 50px;\n  text-align: center;\n}\n.cg-voice-sf-row {\n  margin: 10px 0;\n  width: 340px;\n}\n.cg-voice-sf-row * {\n  vertical-align: middle;\n}\n.cg-voice-sf-row label {\n  display: inline-block;\n  margin: 0;\n  width: calc(100% - 140px);\n}\n.cg-voice-sf-row .cg-voice-sf-lang_select {\n  width: 140px;\n}\n.cg-voice-sf-row .cg-voice-sf-label-text {\n  display: inline-block;\n  font-size: 18px;\n}\n.cg-voice-sf-row .cg-voice-sf-description {\n  text-align: justify;\n}\n.cg-voice-sf-row .cg-voice-sf-slider-container {\n  display: inline-block;\n  width: 140px;\n}\n.cg-voice-sf-speech-speed .cg-voice-sf-speech-speed-check {\n  width: 30px;\n  height: 30px;\n  margin-left: 10px;\n  border-radius: 50%;\n  background: url(" + __webpack_require__(132) + ") no-repeat center;\n  background-size: 20px;\n}\n.cg-voice-sf-speech-speed .cg-voice-sf-speech-speed-check:focus:not(.is-mouse-focused):after {\n  border-radius: 50%;\n}\n.cg-voice-sf-speech-speed label {\n  width: calc(100% - 180px);\n}\n.cg-voice-sf-use-browser label,\n.cg-voice-sf-allow-without-prefix label,\n.cg-voice-sf-advanced-mode label {\n  width: calc(100% - 50px);\n}\n", ""]);

	// exports


/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNCwzLjIzVjUuMjlDMTYuODksNi4xNSAxOSw4LjgzIDE5LDEyQzE5LDE1LjE3IDE2Ljg5LDE3Ljg0IDE0LDE4LjdWMjAuNzdDMTgsMTkuODYgMjEsMTYuMjggMjEsMTJDMjEsNy43MiAxOCw0LjE0IDE0LDMuMjNNMTYuNSwxMkMxNi41LDEwLjIzIDE1LjUsOC43MSAxNCw3Ljk3VjE2QzE1LjUsMTUuMjkgMTYuNSwxMy43NiAxNi41LDEyTTMsOVYxNUg3TDEyLDIwVjRMNyw5SDNaIiAvPjwvc3ZnPg=="

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(134);
	__webpack_require__(3);

	var EventEmitter = __webpack_require__(10);
	var inherits = __webpack_require__(137);
	var merge = __webpack_require__(64);
	var utils = __webpack_require__(138);

	var DIALOG_CLASS = 'cg-dialog';
	var BEFORE_DIALOG_CLASS = DIALOG_CLASS + '-before';
	var CONTAINER_CLASS = DIALOG_CLASS + '-wrap';
	var TITLE_CLASS = DIALOG_CLASS + '-title';
	var CONTENT_CLASS = DIALOG_CLASS + '-content';
	var BUTTONS_CLASS = DIALOG_CLASS + '-buttons';
	var BUTTON_CLASS = DIALOG_CLASS + '-button';
	var CLOSE_BUTTON_CLASS = DIALOG_CLASS + '-button-close';
	var OK_BUTTON_CLASS = DIALOG_CLASS + '-button-ok';
	var CANCEL_BUTTON_CLASS = DIALOG_CLASS + '-button-cancel';
	var FORCE_FOCUSED_CLASS = 'is-force-focused';

	var CLOSE_BUTTON_ARIA_LABEL = 'Close dialog';

	/**
	 * Dialog's customizing settings
	 * @typedef {Object} DialogSettings
	 * @property {string} title - Dialog's title.
	 * @property {string | Element} content - Content which will be added to dialog's DOM element.
	 * @property {Function} onclose - Function which will be called when dialog closes right before CLOSE event will be emitted. Result (boolean) will be passed as function argument.
	 * @property {Function} onopen - Function which will be called when dialog opens right before OPEN event will be emitted.
	 * @property {string} type - Type of dialog. Can be on of the {@link CgDialog.TYPES}
	 * @property {boolean} isModal - If it is true dialog can be closed using OK or CANCEL buttons only.
	 * @property {Array.<string>} classes - Array of classes which will be added to dialog's DOM element.
	 * @property {{ok: string, cancel: string}} buttonTexts - Throw this property OK and CANCEL buttons texts can be redefined.
	 */

	/**
	 *
	 * @param {DialogSettings} settings - Dialog's settings, all undefined settings will be taken from {@link CgDialog.DEFAULT_SETTINGS}
	 * @constructor
	 */
	function CgDialog(settings) {
	    EventEmitter.call(this);
	    this._applySettings(settings);
	    this._render();
	    this._addListeners();
	    this.close(false, false);
	}
	inherits(CgDialog, EventEmitter);

	CgDialog.TYPES = {
	    OK: 'ok',
	    OK_CANCEL: 'ok_cancel'
	};

	/**
	 *
	 * @type DialogSettings
	 */
	CgDialog.DEFAULT_SETTINGS = {
	    title: '',
	    content: '',
	    onclose: function () {
	    },
	    onopen: function () {
	    },
	    type: CgDialog.TYPES.OK,
	    isModal: false,
	    classes: [],
	    buttonTexts: {
	        ok: 'Ok',
	        cancel: 'Cancel'
	    }
	};

	CgDialog.EVENTS = {
	    OPEN: 'open',
	    CLOSE: 'close'
	};

	CgDialog.prototype._addListeners = function _addListeners() {
	    var self = this;
	    var isMouseDownOnWrap = false;
	    this.domElement.addEventListener('blur', function () {
	        utils.removeClass(self.domElement, FORCE_FOCUSED_CLASS);
	    });

	    this.okButton.addEventListener('click', function () {
	        self.close(true);
	    });

	    this.cancelButton.addEventListener('click', function () {
	        self.close(false);
	    });

	    if (!this.settings.isModal) {
	        this.closeButton.addEventListener('click', function () {
	            self.close(true);
	        });
	        this.wrapElement.addEventListener('mousedown', onWrapMouseDown);
	        this.wrapElement.addEventListener('touchstart', onWrapMouseDown);
	        this.wrapElement.addEventListener('click', function (e) {
	            if (e.target == self.wrapElement && isMouseDownOnWrap) {
	                self.close(false);
	            }
	        });
	        this.domElement.addEventListener('click', function (e) {
	            e.stopPropagation();
	        });
	        document.addEventListener('keydown', function (e) {
	            // close when escape is pressed
	            if (self.isOpen && e.keyCode == 27) {
	                self.close(false);
	            }
	        });
	    }

	    // trapping focus when dialog is opened
	    document.addEventListener('focus', function (event) {
	        if (self.isOpen && !self.domElement.contains(event.target)) {
	            event.stopPropagation();
	            self.domElement.focus();
	        }
	    }, true);

	    function onWrapMouseDown(e) {
	        if (this != e.target)
	            return;
	        isMouseDownOnWrap = true;
	        document.addEventListener('mouseup', onWrapMouseUp);
	        document.addEventListener('touchend', onWrapMouseUp);
	    }

	    function onWrapMouseUp() {
	        document.removeEventListener('mouseup', onWrapMouseUp);
	        document.removeEventListener('touchend', onWrapMouseUp);
	        // wait while wrap click handler will executed
	        setTimeout(function () {
	            isMouseDownOnWrap = false;
	        }, 0)
	    }
	};

	CgDialog.prototype._applySettings = function (settings) {
	    /**
	     * @type DialogSettings
	     */
	    this.settings = merge({}, this.constructor.DEFAULT_SETTINGS, settings);
	    this.settings.isModal = typeof settings.isModal !== 'undefined' ? settings.isModal : this.settings.type != this.constructor.TYPES.OK;
	    if (!Array.isArray(this.settings.classes)) {
	        this.settings.classes = [this.settings.classes];
	    }
	};

	CgDialog.prototype._render = function () {
	    var dialogClasses = DIALOG_CLASS + ' ' + this.settings.classes.join(' ');
	    var elementHTML =
	        '<div class="' + CONTAINER_CLASS + '">' +
	        '<div class="' + BEFORE_DIALOG_CLASS + '"></div>' +
	        '    <div class="' + dialogClasses.trim() + '" role="dialog" aria-label="' + this.settings.title + '" tabindex="-1">' +
	        '        <div class="' + TITLE_CLASS + '">' + this.settings.title + '</div>' +
	        '        <button class="' + CLOSE_BUTTON_CLASS + '" aria-label="' + CLOSE_BUTTON_ARIA_LABEL + '"></button>' +
	        '        <div class="' + CONTENT_CLASS + '"></div>' +
	        '        <div class="' + BUTTONS_CLASS + '">' +
	        '            <button class="' + BUTTON_CLASS + ' ' + OK_BUTTON_CLASS + '">' + this.settings.buttonTexts.ok + '</button>' +
	        '            <button class="' + BUTTON_CLASS + ' ' + CANCEL_BUTTON_CLASS + '">' + this.settings.buttonTexts.cancel + '</button>' +
	        '        </div>' +
	        '    </div>' +
	        '</div>';

	    this.wrapElement = utils.createHTML(elementHTML);
	    document.body.appendChild(this.wrapElement);

	    this.domElement = this.wrapElement.querySelector('.' + DIALOG_CLASS);
	    this.titleElement = this.domElement.querySelector('.' + TITLE_CLASS);
	    this.contentElement = this.domElement.querySelector('.' + CONTENT_CLASS);
	    this.closeButton = this.domElement.querySelector('.' + CLOSE_BUTTON_CLASS);
	    this.okButton = this.domElement.querySelector('.' + OK_BUTTON_CLASS);
	    this.cancelButton = this.domElement.querySelector('.' + CANCEL_BUTTON_CLASS);

	    if (this.settings.isModal) {
	        utils.removeNode(this.closeButton);
	    }
	    if (this.settings.type == this.constructor.TYPES.OK) {
	        utils.removeNode(this.cancelButton);
	    }

	    if (typeof this.settings.content === 'string') {
	        this.contentElement.setAttribute('tabindex', '0');
	        this.contentElement.innerHTML = this.settings.content;
	    }
	    else if (this.settings.content instanceof Element) {
	        this.contentElement.appendChild(this.settings.content);
	    }
	};

	/**
	 * Close dialog.
	 * @param {boolean} [result = false]
	 * @param {boolean} [emitEvent=true] - if true, dialog instance will emit CLOSE event with result argument
	 */
	CgDialog.prototype.close = function (result, emitEvent) {
	    if (typeof result === 'undefined')
	        result = false;
	    if (typeof emitEvent === 'undefined')
	        emitEvent = true;

	    this.isOpen = false;
	    this.wrapElement.style.display = 'none';
	    utils.removeClass(document.body, 'cg-dialog-is-open');
	    if (emitEvent) {
	        this.settings.onclose(result);
	        this.emit(this.constructor.EVENTS.CLOSE, result);
	    }
	};

	/**
	 * Open dialog.
	 * @param {boolean} [emitEvent = true] - if true, dialog instance will emit OPEN event
	 */
	CgDialog.prototype.open = function (emitEvent) {
	    if (typeof emitEvent === 'undefined')
	        emitEvent = true;

	    utils.addClass(document.body, 'cg-dialog-is-open');
	    this.wrapElement.style.display = '';
	    this.domElement.focus();
	    this.isOpen = true;
	    utils.addClass(this.domElement, FORCE_FOCUSED_CLASS);
	    if (emitEvent) {
	        this.settings.onopen();
	        this.emit(this.constructor.EVENTS.OPEN);
	    }
	};


	if (typeof jQuery !== 'undefined') {
	    //todo: add plugin
	}

	module.exports = CgDialog;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(135);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../less-loader/index.js!./common.less", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../less-loader/index.js!./common.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".cg-dialog-wrap {\n  position: fixed;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  text-align: center;\n  z-index: 9999;\n  background-color: rgba(11, 11, 11, 0.8);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.cg-dialog-wrap .is-mouse-focused:focus {\n  outline: none;\n}\n.cg-wrap-cell {\n  width: 100%;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n.cg-dialog-before {\n  height: 100%;\n}\n.cg-dialog-before,\n.cg-dialog {\n  display: inline-block;\n  vertical-align: middle;\n}\n.cg-dialog-is-open {\n  overflow: hidden;\n}\n.cg-dialog {\n  padding: 20px 30px;\n  text-align: left;\n  max-width: 460px;\n  position: relative;\n  background-color: white;\n  z-index: 1001;\n  box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.cg-dialog:focus {\n  outline: 1px dotted white;\n  outline-offset: 2px;\n}\n.cg-dialog.is-mouse-focused:focus,\n.cg-dialog.is-force-focused:focus {\n  outline: none;\n}\n.cg-dialog button {\n  cursor: pointer;\n}\n.cg-dialog-title {\n  font-weight: 400;\n  font-size: 2em;\n  margin-bottom: 10px;\n}\n.cg-dialog-button-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  border: none;\n  opacity: .5;\n  background: url(" + __webpack_require__(136) + ") center no-repeat;\n}\n.cg-dialog-button-close:hover {\n  opacity: 0.7;\n}\n.cg-dialog-button-close:active {\n  opacity: 0.9;\n}\n.cg-dialog-button-close:focus {\n  outline: none;\n}\n.cg-dialog-button-close:focus:not(.is-mouse-focused):before {\n  content: \"\";\n  position: absolute;\n  z-index: 1000;\n  top: 3px;\n  bottom: 3px;\n  left: 3px;\n  right: 3px;\n  border: 1px dotted black;\n}\n.cg-dialog-content:focus {\n  outline: 1px dotted black;\n  outline-offset: 2px;\n}\n.cg-dialog-buttons {\n  margin-top: 10px;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.cg-dialog-buttons button + button {\n  margin-left: 1em;\n}\n", ""]);

	// exports


/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iDQogICAgICAgICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCINCiAgICAgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICA8cGF0aCBkPSJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaIi8+DQo8L3N2Zz4="

/***/ },
/* 137 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 138 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    /**
	     *
	     * @param {Element} element
	     * @param {string} className
	     */
	    addClass: function addClass(element, className) {
	        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
	        if (re.test(element.className)) return;
	        element.className = (element.className + " " + className).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
	    },

	    /**
	     *
	     * @param {Element} element
	     * @param {string} className
	     */
	    removeClass: function removeClass(element, className) {
	        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
	        element.className = element.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
	    },

	    /**
	     * Removes current node from tree.
	     * @param {Node} node
	     */
	    removeNode: function removeNode(node) {
	        if (node.parentNode)
	            node.parentNode.removeChild(node);
	    },

	    /**
	     *
	     * @param {string} html
	     * @returns {Node}
	     */
	    createHTML: function createHTML(html) {
	        var div = document.createElement('div');
	        div.innerHTML = html.trim();
	        return div.firstChild;
	    }
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(140);
	__webpack_require__(141);

	var EventEmitter = __webpack_require__(10);
	var inherits = __webpack_require__(137);
	var Keycode = __webpack_require__(143);
	var merge = __webpack_require__(64);
	var utils = __webpack_require__(144);

	var PREFIX = 'cl';
	var SLIDER_CLASS = PREFIX + '-slider';
	var RANGE_CLASS = PREFIX + '-slider-ranged';
	var VERTICAL_CLASS = SLIDER_CLASS + '-vertical';
	var WITH_LABELS_CLASS_PREFIX = SLIDER_CLASS + '-with-labels-';
	var CONTROL_BAR_CLASS = SLIDER_CLASS + '-control-bar';
	var ALIGNMENT_TABLE_CLASS = SLIDER_CLASS + '-alignment-table';
	var ALIGNMENT_CELL_CLASS = SLIDER_CLASS + '-alignment-cell';
	var BG_CLASS = SLIDER_CLASS + '-bg';
	var PROGRESS_CLASS = SLIDER_CLASS + '-progress';
	var HANDLE_CLASS = SLIDER_CLASS + '-handle';
	var HANDLE_LEFT_CLASS = SLIDER_CLASS + '-handle-left';
	var HANDLE_RIGHT_CLASS = SLIDER_CLASS + '-handle-right';
	var HANDLE_TOOLTIP_CLASS = SLIDER_CLASS + '-handle-tooltip';
	var HANDLE_TOOLTIP_LEFT_CLASS = SLIDER_CLASS + '-handle-tooltip-left';
	var HANDLE_TOOLTIP_RIGHT_CLASS = SLIDER_CLASS + '-handle-tooltip-right';
	var TICK_CLASS = SLIDER_CLASS + '-tick';
	var TICK_LABEL_CLASS = SLIDER_CLASS + '-tick-label';
	var DISABLE_CLASS = PREFIX + '-disable';
	var DISABLED_CLASS = SLIDER_CLASS + '-disabled';

	/**
	 * @typedef {Object} SliderSettings
	 * @property {number} min
	 * @property {number} max
	 * @property {number} step
	 * @property {Array.<number[]>} disabledSegments
	 * @property {boolean} discreteDrag
	 * @property {boolean} enableAnimation
	 * @property {boolean} enableTooltips
	 * @property {number} minAnimationDistance
	 * @property {number | number[]} initialValue
	 * @property {number} pixelMax
	 * @property {string} ariaLabel
	 * @property {boolean} enable
	 * @property {boolean} isRange
	 * @property {boolean} isVertical
	 * @property {number|number[]} tabindex
	 * @property {Function} tooltipFormatter
	 * @property {Function} onChange
	 * @property {Function} onStartChange
	 * @property {Function} onStopChange
	 * @property {boolean} withProgress
	 * @property {boolean} withTicks
	 *
	 * @property {Object} ticks
	 * @property {string} ticks.position
	 * @property {boolean} ticks.withLabels
	 * @property {Function} ticks.labelFormatter
	 * @property {number} ticks.step
	 * @property {number} ticks.maxTicksCount
	 */

	/**
	 *
	 * @param {SliderSettings} settings
	 * @param {Element} [element]
	 * @constructor
	 */
	function ClSlider(settings, element) {
	    EventEmitter.call(this);
	    this.constructor._fixSettings(settings);

	    /**
	     * @type {SliderSettings}
	     */
	    this._settings = merge.recursive(true, this.constructor.DEFAULT_SETTINGS, settings);
	    this.constructor._fixTicksPosition(this._settings);
	    this._value = [0, 0];

	    if (typeof element === 'string') {
	        element = document.getElementById(element);
	    }
	    this.domElement = element || document.createElement('div');
	    this._render();
	    this._setAnimationEnable(this._settings.enableAnimation);
	    this._addListeners();
	    // execute enable set method
	    this.enable = this.enable;
	    this.setValue(this._settings.initialValue, false, true);
	}
	inherits(ClSlider, EventEmitter);

	/**
	 * Collection of available ticks positions.
	 * @type {{TOP: string, BOTTOM: string, LEFT: string, RIGHT: string}}
	 */
	ClSlider.TICKS_POSITION = {
	    TOP: 'top',
	    BOTTOM: 'bottom',
	    LEFT: 'left',
	    RIGHT: 'right'
	};

	/**
	 *
	 * @type {SliderSettings}
	 */
	ClSlider.DEFAULT_SETTINGS = {
	    min: 0,
	    max: 10,
	    step: 1,
	    disabledSegments: [],
	    discreteDrag: false,
	    enableAnimation: true,
	    enableTooltips: false,
	    minAnimationDistance: 15,
	    initialValue: 0,
	    pixelMax: 100,
	    ariaLabel: '',
	    enable: true,
	    isRange: false,
	    isVertical: false,
	    tabindex: [0, 0],
	    tooltipFormatter: function (value) {
	        return value;
	    },
	    onChange: function () {
	    },
	    onStartChange: function () {
	    },
	    onStopChange: function () {
	    },
	    withProgress: true,
	    withTicks: false,
	    ticks: {
	        position: ClSlider.TICKS_POSITION.BOTTOM,
	        withLabels: false,
	        labelFormatter: function (value) {
	            return value;
	        },
	        step: 1,
	        maxTicksCount: 100 //if calculated ticks count will be more than this value, ticks will not be drawn to prevent browser freezes
	    }
	};

	/**
	 * Array of possible events which slider can emit.
	 * @type {{CHANGE: string, START_CHANGE: string, STOP_CHANGE: string}}
	 */
	ClSlider.EVENTS = {
	    CHANGE: 'change',
	    START_CHANGE: 'start_change',
	    STOP_CHANGE: 'stop_change'
	};

	/**
	 * Specifies the increment value of the slider thumb
	 * as the user moves the thumb.
	 * For example, if <code>snapInterval</code> is 2,
	 * the <code>minimum</code> value is 0,
	 * and the <code>maximum</code> value is 10,
	 * the thumb snaps to the values 0, 2, 4, 6, 8, and 10
	 * as the user move the thumb.
	 * A value of 0, means that the slider moves continuously
	 * between the <code>minimum</code> and <code>maximum</code> values.
	 *
	 * @param {number} step
	 * @returns {number}
	 */
	ClSlider._calculateSnapIntervalPrecision = function _calculateSnapIntervalPrecision(step) {
	    var snapIntervalPrecision = -1;

	    // 1+value for '1e' number format
	    //var parts = ((1 + step) + '').split('.'); it doesnt work because for example (1 + 3.14) = 4.140000000000001
	    /*if (parts.length == 2) {
	        snapIntervalPrecision = parts[1].length;
	    }*/

	    var e = 1;
	    var p = 0;
	    while (Math.round(step * e) / e !== step) {
	        e *= 10;
	        p++;
	    }
	    if(p > 0)
	        snapIntervalPrecision = p;


	    return snapIntervalPrecision;
	};

	ClSlider._fixSettings = function _fixSettings(settings) {
	    if (typeof settings.step != 'undefined' && (typeof settings.ticks == 'undefined' || typeof settings.ticks.step == 'undefined' || settings.ticks.step < settings.step)) {
	        if (typeof settings.ticks == 'undefined') {
	            settings.ticks = {};
	        }
	        settings.ticks.step = settings.step;
	    }
	    // save backward capability with deprecated property 'disabled' which was renamed to 'disabledSegments'
	    if (typeof settings.disabled != 'undefined' && typeof settings.disabledSegments == 'undefined') {
	        settings.disabledSegments = settings.disabled;
	        delete settings.disabled;
	    }
	    if (typeof settings.tabindex === 'number') {
	        settings.tabindex = [settings.tabindex, settings.tabindex];
	    }
	    else if (Array.isArray(settings.tabindex) && settings.tabindex.length < 2) {
	        settings.tabindex[0] = settings.tabindex[0] || this.constructor.DEFAULT_SETTINGS.tabindex[0];
	        settings.tabindex[1] = settings.tabindex[0];
	    }
	    return settings;
	};

	/**
	 * Allows only correct ticks position: right and left for vertical mode, top and bottom for horizontal.
	 * @param {Object} settings
	 * @private
	 */
	ClSlider._fixTicksPosition = function _fixTicksPosition(settings) {
	    if (settings.isVertical) {
	        if (settings.ticks.position != ClSlider.TICKS_POSITION.LEFT
	            && settings.ticks.position != ClSlider.TICKS_POSITION.RIGHT) {
	            settings.ticks.position = ClSlider.TICKS_POSITION.LEFT;
	        }
	    }
	    else {
	        if (settings.ticks.position != ClSlider.TICKS_POSITION.BOTTOM
	            && settings.ticks.position != ClSlider.TICKS_POSITION.TOP) {
	            settings.ticks.position = ClSlider.TICKS_POSITION.BOTTOM;
	        }
	    }
	    return settings;
	};

	var _ = ClSlider.prototype;

	// ---------------------------------------------------------------------------------------------------------------------
	// prototypes private methods

	_._addListeners = function _addListeners() {
	    var throttleUpdate = utils.throttle(this._updateSliderPosition.bind(this), 30);
	    var throttleSegmentsUpdate = utils.throttle(this._updateDisabledPosition.bind(this), 30);
	    window.addEventListener('resize', function () {
	        throttleUpdate();
	        throttleSegmentsUpdate();
	    });

	    this.on(this.constructor.EVENTS.START_CHANGE, this._settings.onStartChange);
	    this.on(this.constructor.EVENTS.CHANGE, this._settings.onChange);
	    this.on(this.constructor.EVENTS.STOP_CHANGE, this._settings.onStopChange);

	    this.rightHandle.addEventListener('mousedown', this._onMouseDown.bind(this));
	    this.rightHandle.addEventListener('touchstart', this._onMouseDown.bind(this));
	    this.rightHandle.addEventListener('keydown', this._onKeydown.bind(this));

	    if (this._settings.isRange) {
	        this.leftHandle.addEventListener('mousedown', this._onMouseDown.bind(this));
	        this.leftHandle.addEventListener('touchstart', this._onMouseDown.bind(this));
	        this.leftHandle.addEventListener('keydown', this._onKeydown.bind(this));
	    }

	    this._clickArea.addEventListener('click', this._onSliderClick.bind(this));
	};

	_._checkIsDisabled = function _checkIsDisabled(val) {
	    var self = this;
	    var containingSegmentIndex = -1;
	    this._settings.disabledSegments.some(function (segment, index) {
	        if (((val > segment[0]) && (val < segment[1])) || ((val === segment[0]) && (segment[0] === self._settings.min)) || (((val === segment[1]) && (segment[1] === self._settings.max)))) {
	            containingSegmentIndex = index;
	            return true;
	        } else {
	            return false;
	        }
	    });
	    return containingSegmentIndex;
	};

	_._correctionToDisabled = function _correctionToDisabled(val, isRight) {
	    var currentSide = isRight ? 1 : 0,
	        oppositeSide = isRight ? 0 : 1,
	        direction = isRight ? 1 : -1;
	    var edges = [this._settings.min, this._settings.max];
	    var value = val[currentSide];
	    var stepped = val[oppositeSide] + direction * this._settings.step;
	    var index = this._checkIsDisabled(stepped);
	    if (index > -1)
	        stepped = this._settings.disabledSegments[index][currentSide];
	    index = this._checkIsDisabled(value);
	    if (index > -1) {
	        if (this._settings.disabledSegments[index][currentSide] === edges[currentSide])
	            value = this._settings.disabledSegments[index][oppositeSide];
	        else {
	            if ((this._value[currentSide] > value) && (this._settings.disabledSegments[index][oppositeSide] !== edges[oppositeSide]))
	                value = this._settings.disabledSegments[index][oppositeSide];
	            else
	                value = this._settings.disabledSegments[index][currentSide];
	        }
	    }
	    if (!this._settings.isRange)
	        return value;
	    return isRight ? Math.max(value, stepped) : Math.min(value, stepped);
	};

	_._destroyTicks = function _destroyTicks() {
	    if (!this._renderedTicks)
	        return;

	    this._renderedTicks.forEach(function (tick) {
	        utils.removeNode(tick.domElement);
	    });
	    this._renderedTicks.length = 0;
	};

	_._drawTicks = function _drawTicks() {
	    var settings = this._settings;
	    if (!settings.withTicks || (settings.max - settings.min) / settings.ticks.step > settings.ticks.maxTicksCount)
	        return;
	    this._renderedTicks = [];

	    // all values multiplies by the multiplier to avoid result like 0.1 + 0.2 = 0.30000000000000004
	    var step = settings.ticks.step;
	    var multiplier = 1;
	    while (step != parseInt(step)) {
	        multiplier *= 10;
	        step *= 10;
	    }

	    var value = settings.min * multiplier;
	    do {
	        var tick = {
	            domElement: utils.createHTML('<div aria-hidden="true" class="' + TICK_CLASS + ' ' + TICK_CLASS + '-' + settings.ticks.position + '"></div>')
	        };
	        this._staticElement.insertBefore(tick.domElement, this._staticElement.firstChild);

	        if (settings.isVertical) {
	            tick.domElement.style.bottom = this._valueToPercent(value / multiplier) + '%';
	        }
	        else {
	            tick.domElement.style.left = this._valueToPercent(value / multiplier) + '%';
	        }
	        if (settings.ticks.withLabels) {
	            tick.labelElement = utils.createHTML('<div class="' + TICK_LABEL_CLASS + '">' + settings.ticks.labelFormatter(value / multiplier) + '</div>');
	            tick.domElement.appendChild(tick.labelElement);
	        }
	        this._renderedTicks.push(tick);
	        value += step;
	    }
	    while (value <= settings.max * multiplier);

	    if (settings.ticks.withLabels) {
	        utils.addClass(this._rootElement, WITH_LABELS_CLASS_PREFIX + settings.ticks.position);
	    }
	};

	_._getSteppedValue = function _getSteppedValue(value) {
	    var settings = this._settings;
	    value = Math.max(Math.min(settings.max, value), settings.min);
	    var snapIntervalPrecision = this.constructor._calculateSnapIntervalPrecision(settings.step);
	    value = Math.round(value / settings.step) * settings.step;
	    // we need to do the round of (to remove the floating point error)
	    // if the stepSize had a fractional value
	    if (snapIntervalPrecision != -1) {
	        var scale = Math.pow(10, snapIntervalPrecision);
	        value = Math.round(value * scale) / scale;
	    }
	    return value;
	};

	_._onKeydown = function _onKeydown(event) {
	    if (!this.enable)
	        return;
	    var isRight = event.target.matches('.' + HANDLE_RIGHT_CLASS);

	    var newVal;

	    switch (event.keyCode) {
	        case Keycode.HOME:
	        case Keycode.PAGEDOWN:
	            if (isRight) {
	                newVal = this._settings.min;

	            }
	            else {
	                newVal = [this._settings.min, this._value[1]];
	            }
	            break;
	        case Keycode.END:
	        case Keycode.PAGEUP:
	            if (isRight) {
	                newVal = this._settings.max;
	            }
	            else {
	                newVal = [this._settings.max, this._value[1]];
	            }
	            break;
	        case Keycode.UP:
	        case Keycode.RIGHT:
	            if (isRight) {
	                newVal = this._value[1] + this._settings.step;
	            }
	            else {
	                newVal = [this._value[0] + this._settings.step, this._value[1]];
	            }
	            break;
	        case Keycode.DOWN:
	        case Keycode.LEFT:
	            if (isRight) {
	                newVal = this._value[1] - this._settings.step;
	            }
	            else {
	                newVal = [this._value[0] - this._settings.step, this._value[1]];
	            }
	            break;
	    }
	    if (typeof newVal != 'undefined' && (!isNaN(newVal) || !isNaN(newVal[0]) && !isNaN(newVal[1]))) {
	        if (!this._changedOnDrag) {
	            this._changedOnDrag = true;
	            this._onKeyUpHandler = this._onKeyUp.bind(this);
	            this.emit(this.constructor.EVENTS.START_CHANGE);
	            event.target.addEventListener('keyup', this._onKeyUpHandler);
	        }
	        this.setValue(newVal);
	        event.preventDefault();
	    }
	};

	_._onKeyUp = function _onKeyUp(event) {
	    if (this._changedOnDrag) {
	        this.emit(this.constructor.EVENTS.STOP_CHANGE, this.getValue());
	        this._changedOnDrag = false;
	    }
	    //todo: remove listener when key is still down, and other window was selected.
	    event.target.removeEventListener('keyup', this._onKeyUpHandler);
	    delete this._onKeyUpHandler;
	};

	_._onMouseDown = function _onMouseDown(event) {
	    if (!this.enable)
	        return;

	    event.preventDefault();

	    utils.fixEventObject(event);

	    this._setAnimationEnable(false);
	    this._updateSize();

	    var clientX = event.cx;
	    var clientY = event.cy;
	    var isRight = event.target.matches('.' + HANDLE_RIGHT_CLASS);

	    this._activeHandle = isRight ? this.rightHandle : this.leftHandle;
	    this._activeHandle.focus();

	    if (this._settings.isVertical) {
	        this._startClientY = clientY;
	        this._startElemY = this._percentToPixel(parseFloat(this._activeHandle.style.bottom) || 0);
	    }
	    else {
	        this._startClientX = clientX;
	        this._startElemX = this._percentToPixel(parseFloat(this._activeHandle.style.left) || 0);
	    }

	    this._startDragValue = this.getValue();

	    // save handlers links to be able to remove them
	    this._onMouseMoveHandler = this._onMouseMoveHandler || this._onMouseMove.bind(this);
	    this._onMouseUpHandler = this._onMouseUpHandler || this._onMouseUp.bind(this);

	    document.addEventListener('mousemove', this._onMouseMoveHandler);
	    document.addEventListener('touchmove', this._onMouseMoveHandler);
	    document.addEventListener('mouseup', this._onMouseUpHandler);
	    document.addEventListener('touchend', this._onMouseUpHandler);
	};

	_._onMouseMove = function _onMouseMove(event) {
	    utils.fixEventObject(event);
	    var isRight = this._activeHandle == this.rightHandle;

	    var clientX = event.cx;
	    var clientY = event.cy;

	    this._onDrag = true;
	    var position = this._settings.isVertical ? (this._startElemY - clientY + this._startClientY) : (this._startElemX + clientX - this._startClientX);

	    // otherwise slider position will be changed in setValue method
	    if (!this._settings.discreteDrag) {
	        var percentPos = this._pixelToPercent(position);
	        if (isRight) {
	            this._updateSliderPosition(undefined, percentPos);
	        }
	        else {
	            this._updateSliderPosition(percentPos);
	        }
	    }

	    var value = this._pixelToValue(position);

	    var index = this._checkIsDisabled(value);
	    if (index > -1)
	        return false;

	    if (isRight) {
	        this.setValue(this._pixelToValue(position), false);
	    }
	    else {
	        this.setValue([this._pixelToValue(position), this._value[1]], false);
	    }

	    if (!this._changedOnDrag && JSON.stringify(this._startDragValue) != JSON.stringify(this.getValue())) {
	        this._changedOnDrag = true;
	        this.emit(this.constructor.EVENTS.START_CHANGE);
	    }

	    return false;
	};

	_._onMouseUp = function _onMouseUp(event) {
	    document.removeEventListener('mousemove', this._onMouseMoveHandler);
	    document.removeEventListener('touchmove', this._onMouseMoveHandler);
	    document.removeEventListener('mouseup', this._onMouseUpHandler);
	    document.removeEventListener('touchend', this._onMouseUpHandler);

	    if (this._startDragValue || this._startDragValue === 0) {
	        if (this._changedOnDrag) {
	            this.emit(this.constructor.EVENTS.STOP_CHANGE, this.getValue());
	        }
	        this._onDrag = false;
	        this._changedOnDrag = false;
	        this._startDragValue = null;
	    }
	    this._updateSliderPosition();
	    this._setAnimationEnable(true);
	};

	_._onDisabledClick = function _onDisabledClick(val) {
	    var value = val;
	    if (this._settings.disabledSegments.length > 0) {
	        var index = this._checkIsDisabled(value);
	        if (index > -1) {
	            var segment = this._settings.disabledSegments[index];
	            var middle = (segment[0] + segment[1]) / 2;
	            if ((segment[0] === this._settings.min) || (value >= middle))
	                value = segment[1];
	            if ((segment[1] === this._settings.max) || (value < middle))
	                value = segment[0];
	        }
	    }
	    return value;
	};

	_._onSliderClick = function _onSliderClick(event) {
	    if (!this.enable)
	        return;
	    utils.fixEventObject(event);
	    var clientX = event.cx;
	    var clientY = event.cy;
	    var boundingRect = this._clickArea.getBoundingClientRect();

	    this.emit(this.constructor.EVENTS.START_CHANGE);
	    this._updateSize();
	    var value = this._settings.isVertical ?
	        this._pixelToValue(this._settings.pixelMax - clientY + boundingRect.top) :
	        this._pixelToValue(clientX - boundingRect.left);

	    value = this._onDisabledClick(value);

	    if (this._settings.isRange) {
	        if (value > this._value[1]) {
	            this.setValue([this._value[0], value]);
	        }
	        else if (value < this._value[0]) {
	            this.setValue([value, this._value[1]]);
	        }
	        else if (Math.abs(value - this._value[0]) > Math.abs(value - this._value[1])) {
	            this.setValue([this._value[0], value]);
	        }
	        else {
	            this.setValue([value, this._value[1]]);
	        }
	    }
	    else {
	        this.setValue(value);
	    }

	    this.emit(this.constructor.EVENTS.STOP_CHANGE, this.getValue());
	};

	_._percentToPixel = function _percentToPixel(value) {
	    var settings = this._settings;
	    return value * settings.pixelMax / 100;
	};

	_._pixelToPercent = function _pixelToPercent(value) {
	    var settings = this._settings;
	    return Math.max(Math.min(value / settings.pixelMax * 100, 100), 0);
	};

	_._pixelToValue = function _pixelToValue(value) {
	    var settings = this._settings;
	    return settings.min + ((settings.max - settings.min) / settings.pixelMax) * value;
	};

	_._valueToPixel = function _valueToPixel(value) {
	    var settings = this._settings;
	    return Math.round((value - settings.min) * (settings.pixelMax / (settings.max - settings.min)));
	};

	_._valueToPercent = function _valueToPercent(value) {
	    var settings = this._settings;
	    return (value - settings.min) * 100 / (settings.max - settings.min);
	};

	_._render = function _render() {
	    utils.addClass(this.domElement, SLIDER_CLASS);
	    if (this._settings.isVertical) {
	        utils.addClass(this.domElement, VERTICAL_CLASS);
	    }
	    if (this._settings.isRange) {
	        utils.addClass(this.domElement, RANGE_CLASS);
	    }

	    // in vertical mode the left handle is used as a bottom, right - as a top
	    var elementHTML =
	        '<div class="' + CONTROL_BAR_CLASS + '">' +
	        '    <div class="' + ALIGNMENT_TABLE_CLASS + '">' +
	        '        <div class="' + ALIGNMENT_CELL_CLASS + '">' +
	        '            <div class="' + BG_CLASS + '">' +
	        '                <div class="' + PROGRESS_CLASS + '"></div>' +
	        '            </div>' +
	        '        </div>' +
	        '    </div>' +
	        '    <div class="' + HANDLE_CLASS + ' ' + HANDLE_LEFT_CLASS + '" role="slider" aria-label="" aria-valuenow="0" aria-valuetext="0" aria-orientation=""></div>' +
	        '    <div class="' + HANDLE_CLASS + ' ' + HANDLE_RIGHT_CLASS + '" role="slider" aria-label="" aria-valuenow="0" aria-valuetext="0" aria-orientation=""></div>' +
	        '</div>';

	    this._rootElement = utils.createHTML(elementHTML);
	    this.domElement.appendChild(this._rootElement);

	    this.leftHandle = this._rootElement.querySelector('.' + HANDLE_LEFT_CLASS);
	    this.rightHandle = this._rootElement.querySelector('.' + HANDLE_RIGHT_CLASS);
	    this._progressElement = this._rootElement.querySelector('.' + PROGRESS_CLASS);
	    this._staticElement = this._rootElement.querySelector('.' + BG_CLASS);
	    this._clickArea = this._rootElement.querySelector('.' + ALIGNMENT_TABLE_CLASS);


	    if (this._settings.enableTooltips) {
	        this._leftHandleTooltip = utils.createHTML('<div class="' + HANDLE_TOOLTIP_CLASS + ' ' + HANDLE_TOOLTIP_LEFT_CLASS + '"></div>');
	        utils.insertAfter(this._rootElement, this._leftHandleTooltip, this.leftHandle);
	        this._rightHandleTooltip = utils.createHTML('<div class="' + HANDLE_TOOLTIP_CLASS + ' ' + HANDLE_TOOLTIP_RIGHT_CLASS + '"></div>');
	        utils.insertAfter(this._rootElement, this._rightHandleTooltip, this.rightHandle);
	    }

	    this._updateSize();
	    this._updateDisabledPosition();
	    this._drawTicks();
	    this._updateAriaLabels();
	    this._updateProgressVisibility();
	};

	_._setAnimationEnable = function _setAnimationEnable(enable) {
	    //todo: find better way to fix problem
	    var isIE = false || !!document.documentMode;
	    var isFF = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	    if (!(isIE || isFF)) {
	        if (enable && this._settings.enableAnimation && !this._animationEnable) {
	            this._animationEnable = true;
	            this.domElement.setAttribute('animation', 'on');
	        }
	        else if (this._animationEnable) {
	            this._animationEnable = false;
	            this.domElement.removeAttribute('animation');
	        }
	    }
	};

	_._updateAriaLabels = function _updateAriaLabels() {
	    if (this._settings.isRange) {
	        this.leftHandle.setAttribute('aria-label', this._settings.ariaLabel + ' minimum');
	        this.rightHandle.setAttribute('aria-label', this._settings.ariaLabel + ' maximum');
	    }
	    else {
	        this.rightHandle.setAttribute('aria-label', this._settings.ariaLabel);
	        this.leftHandle.setAttribute('aria-hidden', 'true');
	    }
	    this.leftHandle.setAttribute('aria-orientation', this._settings.isVertical? 'vertical':'horizontal');
	    this.rightHandle.setAttribute('aria-orientation', this._settings.isVertical? 'vertical':'horizontal');
	};

	_._updateDisabledPosition = function _updateDisabledPosition() {
	    var self = this;
	    this._disabledElements = this._disabledElements || [];
	    if (this._disabledElements.length > 0) {
	        this._disabledElements.forEach(function (el) {
	            utils.removeNode(el);
	        });
	        this._disabledElements.length = 0;
	    }

	    this._settings.disabledSegments.forEach(function (segment, index) {
	        var disabledElement = utils.createHTML('<div class="' + DISABLED_CLASS + '"></div>');
	        self._disabledElements.push(disabledElement);
	        self._staticElement.appendChild(disabledElement);
	        var disabledLeftPercentValue = self._valueToPercent(segment[0]);
	        var disabledRightPercentValue = self._valueToPercent(segment[1]);
	        if (self._settings.isVertical) {
	            disabledElement.style.bottom = disabledLeftPercentValue + '%';
	            disabledElement.style.height = (disabledRightPercentValue - disabledLeftPercentValue) + '%';
	        } else {
	            disabledElement.style.left = disabledLeftPercentValue + '%';
	            disabledElement.style.width = (disabledRightPercentValue - disabledLeftPercentValue) + '%';
	        }
	    });
	};

	_._updateEnable = function _updateEnable() {
	    if (this._settings.enable) {
	        this.leftHandle.setAttribute('tabindex', this._settings.tabindex[0]);
	        this.rightHandle.setAttribute('tabindex', this._settings.tabindex[1]);
	        utils.removeClass(this.leftHandle, DISABLE_CLASS);
	        utils.removeClass(this.rightHandle, DISABLE_CLASS);
	        utils.removeClass(this._staticElement, DISABLE_CLASS);
	    } else {
	        this.leftHandle.removeAttribute('tabindex');
	        this.rightHandle.removeAttribute('tabindex');
	        utils.addClass(this.leftHandle, DISABLE_CLASS);
	        utils.addClass(this.rightHandle, DISABLE_CLASS);
	        utils.addClass(this._staticElement, DISABLE_CLASS);
	    }
	};

	_._updateProgressVisibility = function _updateProgressVisibility() {
	    if (this._settings.withProgress) {
	        this.domElement.setAttribute('with-progress', 'true');
	    }
	    else {
	        this.domElement.setAttribute('with-progress', 'false');
	    }
	};

	_._updateSize = function _updateSize() {
	    var boundingRect = this._staticElement.getBoundingClientRect();
	    if (typeof boundingRect.width === 'undefined'
	        || typeof boundingRect.height === 'undefined') {
	        boundingRect.width = boundingRect.right - boundingRect.left;
	        boundingRect.height = boundingRect.bottom - boundingRect.top;
	    }

	    this._settings.pixelMax = this._settings.isVertical ? boundingRect.height : boundingRect.width;
	};

	/**
	 *
	 * @param {number} [leftPercentValue] - if is not defined will be calculated from current slider's value
	 * @param {number} [rightPercentValue] - if is not defined will be calculated from current slider's value
	 * @private
	 */
	_._updateSliderPosition = function _updateSliderPosition(leftPercentValue, rightPercentValue) {
	    this._updateSize();
	    if (typeof leftPercentValue === 'undefined') {
	        leftPercentValue = this._valueToPercent(this._value[0]);
	    }
	    if (typeof rightPercentValue === 'undefined') {
	        rightPercentValue = this._valueToPercent(this._value[1]);
	    }
	    if (this._settings.isVertical) {
	        this.leftHandle.style.bottom = leftPercentValue + '%';
	        this.rightHandle.style.bottom = rightPercentValue + '%';

	        if (this._settings.enableTooltips) {
	            this._leftHandleTooltip.style.bottom = leftPercentValue + '%';
	            this._rightHandleTooltip.style.bottom = rightPercentValue + '%';
	        }
	        this._progressElement.style.bottom = leftPercentValue + '%';
	        this._progressElement.style.height = (rightPercentValue - leftPercentValue) + '%';
	    }
	    else {
	        this.leftHandle.style.left = leftPercentValue + '%';
	        this.rightHandle.style.left = rightPercentValue + '%';

	        if (this._settings.enableTooltips) {
	            this._leftHandleTooltip.style.left = leftPercentValue + '%';
	            this._rightHandleTooltip.style.left = rightPercentValue + '%';
	        }
	        this._progressElement.style.left = leftPercentValue + '%';
	        this._progressElement.style.width = (rightPercentValue - leftPercentValue) + '%';
	    }
	};

	_._updateTooltipValues = function _updateTooltipValues() {
	    if (!this._settings.enableTooltips)
	        return;

	    this._leftHandleTooltip.innerHTML = this._settings.tooltipFormatter(this._value[0]);
	    this._rightHandleTooltip.innerHTML = this._settings.tooltipFormatter(this._value[1]);
	};

	_._setSetting = function _setSetting(settingName, value) {
	    if (!this._settings.hasOwnProperty(settingName))
	        return;
	    switch (settingName) {
	        case 'enable':
	            if (typeof value != 'boolean')
	                return;
	            this._settings.enable = value;
	            this._updateEnable();
	            break;
	        case 'max':
	        case 'min':
	        case 'step':
	            value = parseFloat(value);
	            if (!isNaN(value)) {
	                this._settings[settingName] = value;
	                this.setValue(this.getValue(), undefined, true);
	            }
	            this._destroyTicks();
	            this._drawTicks();
	            this._updateDisabledPosition();
	            break;
	        case 'withTicks':
	            if (typeof value != 'boolean' || this._settings.withTicks == value)
	                return;
	            this._settings.withTicks = value;
	            this._destroyTicks();
	            this._drawTicks();
	            break;
	        case 'ticks':
	            if (typeof value != 'object')
	                return;
	            var ticks = merge.recursive(true, this._settings.ticks, value);
	            this._settings.ticks = ticks;
	            this._destroyTicks();
	            this._drawTicks();
	            break;
	        case 'ariaLabel':
	            this._settings.ariaLabel = value;
	            this._updateAriaLabels();
	            break;
	        case 'disabledSegments':
	            this._settings.disabledSegments = value;
	            this._updateDisabledPosition();
	            break;
	        case 'withProgress':
	            this._settings.withProgress = value;
	            this._updateProgressVisibility();
	            break;
	        default:
	            if (console && console.error) {
	                console.error('Slider error: setting "' + settingName + '" can\'t be changed or not implemented yet.');
	            }
	    }
	};

	// ---------------------------------------------------------------------------------------------------------------------
	// prototype's getters/setters

	Object.defineProperty(_, 'ariaLabel', {
	    /**
	     * @returns {string}
	     */
	    get: function () {
	        return this._settings.ariaLabel;
	    },
	    /**
	     * @param {string} val
	     */
	    set: function (val) {
	        this._setSetting('ariaLabel', val);
	    }
	});

	Object.defineProperty(_, 'enable', {
	    /**
	     * @returns {boolean}
	     */
	    get: function () {
	        return this._settings.enable;
	    },
	    /**
	     * @param {boolean} enable
	     */
	    set: function (enable) {
	        this._setSetting('enable', enable);
	    }
	});

	Object.defineProperty(_, 'disabledSegments', {
	    /**
	     * @returns {Array.<number[]>}
	     */
	    get: function () {
	        return this._settings.disabledSegments;
	    },
	    /**
	     * @param {Array.<number[]>} val
	     */
	    set: function (val) {
	        this._setSetting('disabledSegments', val);
	    }
	});

	Object.defineProperty(_, 'min', {
	    /**
	     * @returns {number}
	     */
	    get: function () {
	        return this._settings.min;
	    },
	    /**
	     * @param {number} val
	     */
	    set: function (val) {
	        this._setSetting('min', val);
	    }
	});

	Object.defineProperty(_, 'max', {
	    /**
	     * @returns {number}
	     */
	    get: function () {
	        return this._settings.max;
	    },
	    /**
	     * @param {number} val
	     */
	    set: function (val) {
	        this._setSetting('max', val);
	    }
	});

	Object.defineProperty(_, 'step', {
	    /**
	     * @returns {number}
	     */
	    get: function () {
	        return this._settings.step;
	    },
	    /**
	     * @param {number} val
	     */
	    set: function (val) {
	        this._setSetting('step', val);
	    }
	});

	Object.defineProperty(_, 'ticks', {
	    /**
	     * @returns {Object}
	     */
	    get: function () {
	        return this._settings.ticks;
	    },
	    /**
	     * @param {Object} val
	     */
	    set: function (val) {
	        this._setSetting('ticks', val);
	    }
	});

	Object.defineProperty(_, 'value', {
	    /**
	     * @returns {number|number[]}
	     */
	    get: function () {
	        return this.getValue();
	    },
	    /**
	     * @param {number|number[]} val
	     */
	    set: function (val) {
	        this.setValue(val);
	    }
	});

	Object.defineProperty(_, 'withProgress', {
	    /**
	     * @returns {boolean}
	     */
	    get: function () {
	        return this._settings.withProgress;
	    },
	    /**
	     * @param {boolean} val
	     */
	    set: function (val) {
	        this._setSetting('withProgress', val);
	    }
	});

	Object.defineProperty(_, 'withTicks', {
	    /**
	     * @returns {boolean}
	     */
	    get: function () {
	        return this._settings.withTicks;
	    },
	    /**
	     * @param {boolean} val
	     */
	    set: function (val) {
	        this._setSetting('withTicks', val);
	    }
	});

	// ---------------------------------------------------------------------------------------------------------------------
	// prototypes public methods

	/**
	 * Returns current slider value. Number for simple mode or Array of two numbers for range mode.
	 * @returns {number | number[]}
	 */
	_.getValue = function getValue() {
	    if (this._settings.isRange) {
	        return [this._value[0], this._value[1]]
	    }
	    return this._value[1];
	};

	/**
	 *
	 * @param {number[] | number} newValue - New slider value. Number for simple mode or Array of two numbers for range mode.
	 * @param {boolean} [animate = true] - If 'true' handles will be moved with animation.
	 * @param {boolean} [forceRedraw = false] - Redraw slider even if value has not changed.
	 */
	_.setValue = function setValue(newValue, animate, forceRedraw) {

	    if (typeof animate === 'undefined')
	        animate = true;
	    if (typeof forceRedraw === 'undefined')
	        forceRedraw = false;

	    if (!Array.isArray(newValue)) {
	        newValue = [this._value[0], newValue];
	    }

	    // check animation
	    var animationRemoved = false;
	    if (this._settings.enableAnimation && this._animationEnable) {
	        var distance = Math.max(
	            Math.abs(this._valueToPixel(newValue[0], this._settings) - this._valueToPixel(this._value[0], this._settings)),
	            Math.abs(this._valueToPixel(newValue[1], this._settings) - this._valueToPixel(this._value[1], this._settings))
	        );
	        if (animate === false || distance < this._settings.minAnimationDistance) {
	            this._setAnimationEnable(false);
	            animationRemoved = true;
	        }
	    }

	    newValue[0] = this._getSteppedValue(newValue[0]);
	    newValue[1] = this._getSteppedValue(newValue[1]);

	    if (this._settings.isRange) {
	        if (newValue[0] == this._value[0]) {
	            newValue[1] = this._correctionToDisabled(newValue, true);
	        }
	        else {
	            newValue[0] = this._correctionToDisabled(newValue, false);
	        }
	    }
	    else {
	        newValue[1] = this._correctionToDisabled(newValue, true);
	        newValue[0] = this._settings.min;
	    }

	    if (JSON.stringify(this._value) != JSON.stringify(newValue) || forceRedraw) {
	        this._value = newValue;
	        this._updateTooltipValues();
	        if (!this._onDrag || this._settings.discreteDrag) {
	            this._updateSliderPosition();
	        }
	        this.leftHandle.setAttribute('aria-valuenow', newValue[0]);
	        this.rightHandle.setAttribute('aria-valuenow', newValue[1]);
	        this.leftHandle.setAttribute('aria-valuetext', (newValue[0] >= 0)? newValue[0] : ("minus"  + Math.abs(newValue[0])));
	        this.rightHandle.setAttribute('aria-valuetext', (newValue[1] >= 0)? newValue[1] : ("minus"  + Math.abs(newValue[1])));

	        this.emit(this.constructor.EVENTS.CHANGE, this.getValue());
	    }
	    // set animation enable to initial state
	    if (animationRemoved) {
	        this._setAnimationEnable(true);
	    }
	};

	module.exports = ClSlider;

/***/ },
/* 140 */
/***/ function(module, exports) {

	(function () {
	  'use strict';

	  var ElementPrototype = Element.prototype;

	  /**
	   * Detect full support
	   */

	  var nativeMatches = ElementPrototype.matches = ElementPrototype.matches ||
	      ElementPrototype.mozMatchesSelector ||
	      ElementPrototype.msMatchesSelector ||
	      ElementPrototype.oMatchesSelector ||
	      ElementPrototype.webkitMatchesSelector;

	  // determine if the browser supports matching orphan elements. IE 9's
	  // vendor-specific implementation doesn't work with orphans.
	  var isSupported = ('matches' in ElementPrototype) ?
	      nativeMatches.call(document.createElement('a'), 'a') : false;

	  if (isSupported) { return; }

	  /**
	   * Apply shim
	   */

	  ElementPrototype.matches = function (selector) {
	    var indexOf = Array.prototype.indexOf;
	    var parentElement = this.parentNode;

	    // create a parent for orphans
	    if (!parentElement) {
	      parentElement = document.createDocumentFragment();
	      parentElement.appendChild(this);
	    }

	    if (nativeMatches) {
	      return nativeMatches.call(this, selector);
	    } else {
	      return indexOf.call(parentElement.querySelectorAll(selector), this) > -1;
	    }
	  };
	}());


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(142);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../less-loader/index.js!./common.less", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../less-loader/index.js!./common.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".cl-slider {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.cl-slider-control-bar {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  height: 28px;\n}\n.cl-slider-vertical .cl-slider-control-bar {\n  height: 100%;\n  width: 28px;\n}\n.cl-slider-alignment-table {\n  display: table;\n  height: 100%;\n  width: 100%;\n  vertical-align: middle;\n  table-layout: fixed;\n}\n.cl-slider-alignment-cell {\n  display: table-cell;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n}\n.cl-slider-bg {\n  width: 100%;\n  height: 4px;\n  box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  border: none;\n  background: #aaaaaa;\n  position: relative;\n  margin: auto;\n}\n.cl-slider-vertical .cl-slider-bg {\n  width: 4px;\n  height: 100%;\n}\n.cl-slider-progress,\n.cl-slider-disabled {\n  position: absolute;\n  height: 100%;\n}\n.cl-slider-disabled {\n  background: #faa;\n}\n.cl-slider-progress {\n  display: none;\n  background: #2196F3;\n}\n.cl-slider-vertical .cl-slider-progress,\n.cl-slider-vertical .cl-slider-disabled {\n  width: 100%;\n  height: auto;\n}\n.cl-slider-vertical .cl-slider-progress {\n  width: 100%;\n  height: auto;\n}\n.cl-slider-handle {\n  position: absolute;\n  cursor: pointer;\n  left: 0;\n  top: 50%;\n  margin: -6px;\n  width: 12px;\n  height: 12px;\n  background-color: #2196F3;\n  border-radius: 50%;\n  z-index: 101;\n}\n.cl-slider-handle:after {\n  content: \"\";\n  position: absolute;\n  left: -4px;\n  right: -4px;\n  bottom: -4px;\n  top: -4px;\n  border-radius: 50%;\n}\n.cl-slider-handle:focus {\n  outline: none;\n}\n.cl-slider-handle:focus:after {\n  background-color: rgba(33, 150, 243, 0.3);\n}\n.cl-slider-handle:hover:after,\n.cl-slider-handle:active:after {\n  background-color: #2196F3;\n}\n.cl-slider-handle.cl-disable,\n.cl-slider-handle.cl-disable:hover,\n.cl-slider-handle.cl-disable:active {\n  cursor: default;\n  background-color: #9acffa;\n}\n.cl-slider-handle.cl-disable:hover:after,\n.cl-slider-handle.cl-disable:active:after {\n  display: none;\n}\n.cl-slider-vertical .cl-slider-handle {\n  left: 50%;\n  bottom: 0;\n  top: auto;\n}\n.cl-slider-handle-tooltip {\n  display: none;\n  position: absolute;\n  color: #ffffff;\n  cursor: default;\n  z-index: 100;\n  font-size: 12px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  white-space: nowrap;\n  line-height: 22px;\n  height: 22px;\n  min-width: 16px;\n  top: -24px;\n  background-color: #2196F3;\n  border-radius: 10px;\n  -ms-transform: translate(-50%);\n  transform: translate(-50%);\n  box-sizing: content-box;\n  -ms-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n}\n.cl-slider-handle-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: 50%;\n  bottom: -5px;\n  margin-left: -7px;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: #2196F3 8px solid;\n}\n.cl-slider-vertical .cl-slider-handle-tooltip {\n  top: auto;\n  margin-bottom: -10px;\n  margin-left: 17px;\n  left: 50%;\n  -ms-transform: none;\n  transform: none;\n}\n.cl-slider-vertical .cl-slider-handle-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  left: -5px;\n  margin-top: -7px;\n  border-right: #2196F3 8px solid;\n  border-bottom: 7px solid transparent;\n  border-top: 7px solid transparent;\n}\n.cl-slider-handle-left {\n  display: none;\n}\n.cl-slider-ranged .cl-slider-handle-left {\n  display: block;\n}\n.cl-slider-ranged .cl-slider-handle-left:focus + .cl-slider-handle-tooltip-left,\n.cl-slider-ranged .cl-slider-handle-left:hover:not(.cl-disable) + .cl-slider-handle-tooltip-left {\n  display: block;\n}\n.cl-slider-handle-right:focus + .cl-slider-handle-tooltip-right,\n.cl-slider-handle-right:hover:not(.cl-disable) + .cl-slider-handle-tooltip-right {\n  display: block;\n}\n.cl-slider[with-progress=true] .cl-slider-progress {\n  display: block;\n}\n/*==================ANIMATION BLOCK========================================*/\n.cl-slider[animation=on] .cl-slider-progress {\n  -webkit-transition: left 0.5s ease-in-out, width 0.5s ease-in-out;\n  -moz-transition: left 0.5s ease-in-out, width 0.5s ease-in-out;\n  -o-transition: left 0.5s ease-in-out, width 0.5s ease-in-out;\n  transition: left 0.5s ease-in-out, width 0.5s ease-in-out;\n}\n.cl-slider.cl-slider-vertical[animation=on] .cl-slider-progress {\n  -webkit-transition: bottom 0.5s ease-in-out, height 0.5s ease-in-out;\n  -moz-transition: bottom 0.5s ease-in-out, height 0.5s ease-in-out;\n  -o-transition: bottom 0.5s ease-in-out, height 0.5s ease-in-out;\n  transition: bottom 0.5s ease-in-out, height 0.5s ease-in-out;\n}\n.cl-slider[animation=on] .cl-slider-handle,\n.cl-slider[animation=on] .cl-slider-handle-tooltip {\n  -webkit-transition: left 0.5s ease-in-out;\n  -moz-transition: left 0.5s ease-in-out;\n  -o-transition: left 0.5s ease-in-out;\n  transition: left 0.5s ease-in-out;\n}\n.cl-slider.cl-slider-vertical[animation=on] .cl-slider-handle,\n.cl-slider.cl-slider-vertical[animation=on] .cl-slider-handle-tooltip {\n  -webkit-transition: bottom 0.5s ease-in-out;\n  -moz-transition: bottom 0.5s ease-in-out;\n  -o-transition: bottom 0.5s ease-in-out;\n  transition: bottom 0.5s ease-in-out;\n}\n/*==========================================================================*/\n.cl-slider-bg.cl-disable,\n.cl-slider-bg.cl-disable:hover,\n.cl-slider-bg.cl-disable:active {\n  cursor: default;\n  opacity: 0.3;\n}\n.cl-slider-tick {\n  position: absolute;\n  width: 2px;\n  margin-left: -1px;\n  height: 10px;\n  background-color: #aaaaaa;\n}\n.cl-slider-vertical .cl-slider-tick {\n  margin-left: 0;\n  margin-bottom: -1px;\n  width: 10px;\n  height: 2px;\n}\n.cl-slider-tick-bottom {\n  top: 0;\n}\n.cl-slider-tick-top {\n  bottom: 0;\n}\n.cl-slider-tick-left {\n  right: 0;\n}\n.cl-slider-tick-right {\n  left: 0;\n}\n.cl-slider-tick-label {\n  position: absolute;\n  font-size: 12px;\n}\n.cl-slider-tick-bottom .cl-slider-tick-label,\n.cl-slider-tick-top .cl-slider-tick-label {\n  -ms-transform: translate(-50%);\n  transform: translate(-50%);\n  text-align: center;\n}\n.cl-slider-tick-bottom .cl-slider-tick-label {\n  top: 12px;\n}\n.cl-slider-tick-top .cl-slider-tick-label {\n  bottom: 12px;\n}\n.cl-slider-tick-left .cl-slider-tick-label,\n.cl-slider-tick-right .cl-slider-tick-label {\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.cl-slider-tick-left .cl-slider-tick-label {\n  right: 12px;\n}\n.cl-slider-tick-right .cl-slider-tick-label {\n  left: 12px;\n}\n.cl-slider-with-labels-bottom {\n  margin-bottom: 15px;\n}\n.cl-slider-with-labels-top {\n  margin-top: 15px;\n}\n.cl-slider-with-labels-left {\n  margin-left: 40px;\n}\n.cl-slider-with-labels-right {\n  margin-right: 40px;\n}\n", ""]);

	// exports


/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = {
	  BACKSPACE: 8,
	  TAB: 9,
	  ENTER: 13,
	  SHIFT: 16,
	  CTRL: 17,
	  ALT: 18,
	  PAUSE: 19,
	  CAPSLOCK: 20,
	  ESCAPE: 27,
	  SPACE: 32,

	  PAGEUP: 33,
	  PAGEDOWN: 34,
	  END: 35,
	  HOME: 36,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  INSERT: 45,
	  DELETE: 46,

	  // numbers
	  KEY_0: 48,
	  KEY_1: 49,
	  KEY_2: 50,
	  KEY_3: 51,
	  KEY_4: 52,
	  KEY_5: 53,
	  KEY_6: 54,
	  KEY_7: 55,
	  KEY_8: 56,
	  KEY_9: 57,

	  // alphabet
	  A: 65,
	  B: 66,
	  C: 67,
	  D: 68,
	  E: 69,
	  F: 70,
	  G: 71,
	  H: 72,
	  I: 73,
	  J: 74,
	  K: 75,
	  L: 76,
	  M: 77,
	  N: 78,
	  O: 79,
	  P: 80,
	  Q: 81,
	  R: 82,
	  S: 83,
	  T: 84,
	  U: 85,
	  V: 86,
	  W: 87,
	  X: 88,
	  Y: 89,
	  Z: 90,

	  SELECT: 93,

	  NUMPAD_0: 96,
	  NUMPAD_1: 97,
	  NUMPAD_2: 98,
	  NUMPAD_3: 99,
	  NUMPAD_4: 100,
	  NUMPAD_5: 101,
	  NUMPAD_6: 102,
	  NUMPAD_7: 103,
	  NUMPAD_8: 104,
	  NUMPAD_9: 105,

	  MULTIPLY: 106,
	  ADD: 107,
	  SUBTRACT: 109,
	  DECIMALPOINT: 110,
	  DIVIDE: 111,

	  // F1~F2
	  F1: 112,
	  F2: 113,
	  F3: 114,
	  F4: 115,
	  F5: 116,
	  F6: 117,
	  F7: 118,
	  F8: 119,
	  F9: 120,
	  F10: 121,
	  F11: 122,
	  F12: 123,

	  // etc / accents
	  NUMLOCK: 144,
	  SCROLLLOCK: 145,
	  SEMICOLON: 186,
	  EQUALSIGN: 187,
	  COMMA: 188,
	  DASH: 189,
	  PERIOD: 190,
	  FORWARDSLASH: 191,
	  GRAVEACCENT: 192,
	  OPENBRACKET: 219,
	  BACKSLASH: 220,
	  CLOSEBRAKET: 221,
	  SINGLEQUOTE: 222
	}


/***/ },
/* 144 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    fixEventObject: function fixEventObject(event) {
	        if (event.touches && event.touches[0]) {
	            event.cx = event.touches[0].clientX;
	            event.cy = event.touches[0].clientY;
	            event.px = event.touches[0].pageX;
	            event.py = event.touches[0].pageY;
	        }
	        else if (event.changedTouches && event.changedTouches[0]) {
	            event.cx = event.changedTouches[0].clientX;
	            event.cy = event.changedTouches[0].clientY;
	            event.px = event.changedTouches[0].pageX;
	            event.py = event.changedTouches[0].pageY;
	        }
	        else {
	            event.cx = event.clientX;
	            event.cy = event.clientY;
	            event.px = event.pageX;
	            event.py = event.pageY;
	        }
	    },

	    /**
	     *
	     * @param {Element} element
	     * @param {string} className
	     */
	    addClass: function addClass(element, className) {
	        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
	        if (re.test(element.className)) return;
	        element.className = (element.className + " " + className).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
	    },

	    /**
	     *
	     * @param {Element} element
	     * @param {string} className
	     */
	    removeClass: function removeClass(element, className) {
	        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
	        element.className = element.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
	    },

	    /**
	     *
	     * @param {Node} parent
	     * @param {Node} node
	     * @param {Node} referenceNode
	     */
	    insertAfter: function insertAfter(parent, node, referenceNode) {
	        parent.insertBefore(node, referenceNode.nextSibling);
	    },


	    /**
	     *
	     * @param {string} html
	     * @returns {Node}
	     */
	    createHTML: function createHTML(html) {
	        var div = document.createElement('div');
	        div.innerHTML = html.trim();
	        return div.firstChild;
	    },

	    /**
	     * Removes current node from tree.
	     * @param {Node} node
	     */
	    removeNode: function removeNode(node) {
	        if (node.parentNode)
	            node.parentNode.removeChild(node);
	    },

	    /**
	     *
	     * @param {Function} func
	     * @param {number} ms - time in ms
	     * @returns {Function}
	     */
	    throttle: function throttle(func, ms) {

	        var isThrottled = false,
	            savedArgs,
	            savedThis;

	        function wrapper() {

	            if (isThrottled) {
	                savedArgs = arguments;
	                savedThis = this;
	                return;
	            }

	            func.apply(this, arguments);

	            isThrottled = true;

	            setTimeout(function () {
	                isThrottled = false;
	                if (savedArgs) {
	                    wrapper.apply(savedThis, savedArgs);
	                    savedArgs = savedThis = null;
	                }
	            }, ms);
	        }

	        return wrapper;
	    }
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ControlPanelEvent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(146);

	var _events = __webpack_require__(10);

	var _events2 = _interopRequireDefault(_events);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PREFIX = 'cg-voice';
	var CONTROL_PANEL_CLASS = PREFIX + '-cp';

	var BUTTONS_CONTAINER_CLASS = CONTROL_PANEL_CLASS + '-buttons';
	var INDICATOR_BUTTON_CLASS = CONTROL_PANEL_CLASS + '-indicator-button';
	var SIDE_BUTTON_CLASS = CONTROL_PANEL_CLASS + '-side-button';
	var SIDE_TOP_BUTTON_CLASS = 'top-side';
	var SIDE_LEFT_BUTTON_CLASS = 'left-side';
	var SIDE_BOTTOM_BUTTON_CLASS = 'bottom-side';
	var SIDE_RIGHT_BUTTON_CLASS = 'right-side';
	var POWER_BUTTON_CLASS = CONTROL_PANEL_CLASS + '-power-button';
	var HELP_BUTTON_CLASS = CONTROL_PANEL_CLASS + '-help-button';
	var SETTINGS_BUTTON_CLASS = CONTROL_PANEL_CLASS + '-settings-button';
	var SKIP_BUTTON_CLASS = CONTROL_PANEL_CLASS + '-skip-button';

	var MESSAGE_CONTAINER_CLASS = CONTROL_PANEL_CLASS + '-messages';
	var NOTIFICATION_CONTAINER_CLASS = CONTROL_PANEL_CLASS + '-notifications';
	var NOTIFICATION_CLASS = CONTROL_PANEL_CLASS + '-notification';
	var TEMPORARY_CONTAINER_CLASS = CONTROL_PANEL_CLASS + '-temporary';

	var HIDDEN_CLASS = CONTROL_PANEL_CLASS + '-hidden';

	var DEFAULT_SETTINGS = {
	    notificationFadeoutDelay: 3000,
	    mode: 0
	};

	var ControlPanelEvent = exports.ControlPanelEvent = {
	    TURN_ON: 'turn_on',
	    TURN_OFF: 'turn_off',
	    SKIP: 'skip',
	    HELP: 'help',
	    SETTINGS: 'settings'
	};

	var ControlPanel = function (_EventEmitter) {
	    _inherits(ControlPanel, _EventEmitter);

	    _createClass(ControlPanel, null, [{
	        key: 'STATES',
	        get: function get() {
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
	    }]);

	    function ControlPanel(element, settings) {
	        _classCallCheck(this, ControlPanel);

	        var _this = _possibleConstructorReturn(this, (ControlPanel.__proto__ || Object.getPrototypeOf(ControlPanel)).call(this));

	        _this.settings = (0, _merge2.default)(true, {}, DEFAULT_SETTINGS, settings);
	        _this.rootElement = element;

	        _this._render();
	        _this._addListeners();
	        _this.state = _this.constructor.STATES.QUIESCENCE;
	        return _this;
	    }

	    /**
	     *
	     * @returns {boolean}
	     * @private
	     */


	    _createClass(ControlPanel, [{
	        key: '_addListeners',
	        value: function _addListeners() {
	            var _this2 = this;

	            if (this.settings.mode === 0) {
	                this.indicatorButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.TURN_ON));
	                this.offButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.TURN_OFF));
	            } else {
	                (function () {
	                    var self = _this2;
	                    _this2.offButton.addEventListener('click', function () {
	                        if (self.state === self.constructor.STATES.QUIESCENCE) {
	                            self.emit(ControlPanelEvent.TURN_ON);
	                        } else {
	                            self.emit(ControlPanelEvent.TURN_OFF);
	                        }
	                    });
	                })();
	            }
	            this.helpButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.HELP));
	            this.settingsButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.SETTINGS));
	            this.skipButton.addEventListener('click', this.emit.bind(this, ControlPanelEvent.SKIP));
	        }
	    }, {
	        key: '_render',
	        value: function _render() {
	            var elementHTML = '\n            <div class="' + CONTROL_PANEL_CLASS + '">\n                <div class="' + BUTTONS_CONTAINER_CLASS + '">\n                    <button aria-label="' + _strings2.default.cp.ariaLabels.TURN_ON_BUTTON + '" class="' + INDICATOR_BUTTON_CLASS + '"></button>\n                    <button class="' + SIDE_BUTTON_CLASS + ' ' + SIDE_TOP_BUTTON_CLASS + ' ' + POWER_BUTTON_CLASS + '"></button>\n                    <button class="' + SIDE_BUTTON_CLASS + ' ' + SIDE_LEFT_BUTTON_CLASS + ' ' + HELP_BUTTON_CLASS + '" title="' + _strings2.default.cp.titles.HELP_BUTTON + '"></button>\n                    <button class="' + SIDE_BUTTON_CLASS + ' ' + SIDE_BOTTOM_BUTTON_CLASS + ' ' + SETTINGS_BUTTON_CLASS + '" title="' + _strings2.default.cp.titles.SETTINGS_BUTTON + '"></button>\n                    <button class="' + SIDE_BUTTON_CLASS + ' ' + SIDE_RIGHT_BUTTON_CLASS + ' ' + SKIP_BUTTON_CLASS + '" title="' + _strings2.default.cp.titles.SKIP_BUTTON + '"></button>\n                </div>\n                <div class="' + MESSAGE_CONTAINER_CLASS + ' ' + HIDDEN_CLASS + '">\n                    <span class="' + NOTIFICATION_CONTAINER_CLASS + '"></span>\n                    <span class="' + TEMPORARY_CONTAINER_CLASS + '"></span>\n                </div>\n            </div>\n        ';
	            this.domElement = _controllerUtils2.default.createHTML(elementHTML);
	            this.rootElement.insertBefore(this.domElement, this.rootElement.firstChild);

	            this.buttonsContainer = this.domElement.querySelector('.' + BUTTONS_CONTAINER_CLASS);
	            this.indicatorButton = this.buttonsContainer.querySelector('.' + INDICATOR_BUTTON_CLASS);
	            this.offButton = this.buttonsContainer.querySelector('.' + POWER_BUTTON_CLASS);
	            this.helpButton = this.buttonsContainer.querySelector('.' + HELP_BUTTON_CLASS);
	            this.settingsButton = this.buttonsContainer.querySelector('.' + SETTINGS_BUTTON_CLASS);
	            this.skipButton = this.buttonsContainer.querySelector('.' + SKIP_BUTTON_CLASS);

	            this.messageContainer = this.domElement.querySelector('.' + MESSAGE_CONTAINER_CLASS);
	            this.notificationContainer = this.messageContainer.querySelector('.' + NOTIFICATION_CONTAINER_CLASS);
	            this.tempContainer = this.messageContainer.querySelector('.' + TEMPORARY_CONTAINER_CLASS);
	        }
	    }, {
	        key: 'clearNotifications',
	        value: function clearNotifications() {
	            this.notificationContainer.innerHTML = '';
	            if (!this.notificationContainer.hasChildNodes()) {
	                _controllerUtils2.default.addClass(this.messageContainer, HIDDEN_CLASS);
	            }
	        }
	    }, {
	        key: 'clearTemporary',
	        value: function clearTemporary() {
	            var temp = this.tempContainer.innerHTML;
	            this.tempContainer.innerHTML = '';
	            if (!this.notificationContainer.hasChildNodes()) {
	                _controllerUtils2.default.addClass(this.messageContainer, HIDDEN_CLASS);
	            }
	            return temp;
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            _controllerUtils2.default.removeNode(this.domElement);
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.domElement.style.display = 'none';
	        }

	        /**
	         *
	         * @param {string} text
	         * @param {string} [type] - can be one of the following strings: 'error' or 'command' or 'answer'.
	         */

	    }, {
	        key: 'pushNotification',
	        value: function pushNotification(text, type) {
	            var self = this;
	            var nodeRemoved = false;
	            if (text.length > 0) {
	                _controllerUtils2.default.removeClass(self.messageContainer, HIDDEN_CLASS);
	                var notificationElement = document.createElement('span');
	                notificationElement.className = NOTIFICATION_CLASS;
	                notificationElement.innerHTML = text;
	                if (typeof type === 'string') {
	                    notificationElement.setAttribute('type', type);
	                }
	                this.notificationContainer.appendChild(notificationElement);

	                notificationElement.addEventListener('transitionend', function () {
	                    if (!nodeRemoved) {
	                        nodeRemoved = true;
	                        _controllerUtils2.default.removeNode(notificationElement);
	                    }
	                    if (!self.notificationContainer.hasChildNodes()) {
	                        _controllerUtils2.default.addClass(self.messageContainer, HIDDEN_CLASS);
	                    }
	                });
	                setTimeout(function () {
	                    // opacity styled with transition, when it will end element should be removed
	                    notificationElement.style.opacity = 0;
	                    setTimeout(function () {
	                        if (!nodeRemoved) {
	                            nodeRemoved = true;
	                            _controllerUtils2.default.removeNode(notificationElement);
	                        }
	                        if (!self.notificationContainer.hasChildNodes()) {
	                            _controllerUtils2.default.addClass(self.messageContainer, HIDDEN_CLASS);
	                        }
	                    }, 3000);
	                }, this.settings.notificationFadeoutDelay);
	            }
	        }
	    }, {
	        key: 'pushTemporary',
	        value: function pushTemporary(message) {
	            if (message.length > 0) {
	                _controllerUtils2.default.removeClass(this.messageContainer, HIDDEN_CLASS);
	                this.tempContainer.innerHTML = this.tempContainer.innerHTML + ' ' + message;
	            }
	        }
	    }, {
	        key: 'show',
	        value: function show() {
	            this.domElement.style.display = '';
	        }
	    }, {
	        key: '_turnOnEnabled',
	        get: function get() {
	            return !this.indicatorButton.disabled;
	        }

	        /**
	         *
	         * @param {boolean} enabled
	         * @private
	         */
	        ,
	        set: function set(enabled) {
	            this.indicatorButton.disabled = !enabled;
	            this.offButton.disabled = enabled;
	            if (enabled) {
	                this.indicatorButton.setAttribute('title', _strings2.default.cp.titles.TURN_ON_BUTTON);
	                this.offButton.removeAttribute('title');
	            } else {
	                this.indicatorButton.removeAttribute('title');
	                this.offButton.setAttribute('title', _strings2.default.cp.titles.TURN_OFF_BUTTON);
	            }
	        }

	        /**
	         *
	         * @param {boolean} enabled
	         * @private
	         */

	    }, {
	        key: '_turnOnEnabled1',
	        set: function set(enabled) {
	            this.indicatorButton.disabled = true;
	            this.offButton.disabled = false;
	            if (enabled) {
	                this.offButton.setAttribute('title', _strings2.default.cp.titles.TURN_ON_BUTTON);
	            } else {
	                this.offButton.setAttribute('title', _strings2.default.cp.titles.TURN_OFF_BUTTON);
	            }
	        }
	    }, {
	        key: 'isActive',
	        get: function get() {
	            if (typeof this._isActive === 'undefined') this._isActive = false;
	            return this._isActive;
	        },
	        set: function set(val) {
	            this._isActive = val;
	            if (this._isActive) {
	                this.domElement.setAttribute('active', 'active');
	                this.settingsButton.disabled = true;
	                this.skipButton.disabled = false;
	            } else {
	                this.domElement.removeAttribute('active');
	                this.settingsButton.disabled = false;
	                this.skipButton.disabled = true;
	            }
	        }
	    }, {
	        key: 'state',
	        get: function get() {
	            if (!this._state) this._state = this.constructor.STATES.QUIESCENCE;
	            return this._state;
	        },
	        set: function set(val) {
	            this._state = val;
	            this.domElement.setAttribute('state', val);
	            if (this.settings.mode === 0) switch (this._state) {
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
	            } else {
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
	    }, {
	        key: 'temporary',
	        get: function get() {
	            return this.tempContainer.innerHTML;
	        }
	    }]);

	    return ControlPanel;
	}(_events2.default);

	exports.default = ControlPanel;
	;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(147);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./control-panel.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./control-panel.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n.cg-voice-cp {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 1000;\n  text-align: right;\n  overflow: hidden;\n}\n.cg-voice-cp .cg-voice-cp-buttons {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 80px;\n  height: 80px;\n  padding: 20px;\n}\n.cg-voice-cp .cg-voice-cp-indicator-button {\n  position: relative;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  border: none;\n  border-radius: 50%;\n  cursor: default;\n  background-color: #ff7c76;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-color 0.5s;\n}\n.cg-voice-cp .cg-voice-cp-indicator-button:hover {\n  box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0.2);\n}\n.cg-voice-cp .cg-voice-cp-indicator-button:active {\n  box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.2);\n}\n.cg-voice-cp .cg-voice-cp-indicator-button:focus {\n  outline: none;\n}\n.cg-voice-cp .cg-voice-cp-indicator-button:focus:not(.is-mouse-focused) {\n  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.2);\n}\n.cg-voice-cp .cg-voice-cp-indicator-button:focus:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 3px;\n  bottom: 3px;\n  left: 3px;\n  right: 3px;\n  border-radius: 50%;\n  border: 1px dotted #ffffff;\n}\n.cg-voice-cp .cg-voice-cp-indicator-button.is-mouse-focused:focus:after {\n  border: none;\n}\n.cg-voice-cp .cg-voice-cp-side-button {\n  position: absolute;\n  top: 40px;\n  left: 40px;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border-bottom-right-radius: 100%;\n  border: 1px rgba(83, 180, 255, 0.3) solid;\n  background-color: rgba(83, 180, 255, 0.1);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  -o-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  transition: background-color 0.5s;\n}\n.cg-voice-cp .cg-voice-cp-side-button:after {\n  content: '';\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 45%;\n  opacity: 0.5;\n  transition: opacity 0.5s;\n}\n.cg-voice-cp .cg-voice-cp-side-button:hover:not(:disabled) {\n  cursor: pointer;\n  background-color: rgba(83, 180, 255, 0.2);\n}\n.cg-voice-cp .cg-voice-cp-side-button:hover:not(:disabled):after {\n  opacity: 0.8;\n}\n.cg-voice-cp .cg-voice-cp-side-button:active:not(:disabled) {\n  background-color: rgba(83, 180, 255, 0.4);\n}\n.cg-voice-cp .cg-voice-cp-side-button:focus {\n  outline: none;\n}\n.cg-voice-cp .cg-voice-cp-side-button:focus:not(.is-mouse-focused) {\n  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);\n}\n.cg-voice-cp .cg-voice-cp-side-button:disabled:after {\n  opacity: 0.3;\n}\n.cg-voice-cp .cg-voice-cp-side-button.right-side {\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.cg-voice-cp .cg-voice-cp-side-button.right-side:after {\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.cg-voice-cp .cg-voice-cp-side-button.bottom-side {\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.cg-voice-cp .cg-voice-cp-side-button.bottom-side:after {\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.cg-voice-cp .cg-voice-cp-side-button.left-side {\n  -moz-transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n  -o-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n.cg-voice-cp .cg-voice-cp-side-button.left-side:after {\n  -moz-transform: rotate(-135deg);\n  -ms-transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n  -o-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n.cg-voice-cp .cg-voice-cp-side-button.top-side {\n  -moz-transform: rotate(225deg);\n  -ms-transform: rotate(225deg);\n  -webkit-transform: rotate(225deg);\n  -o-transform: rotate(225deg);\n  transform: rotate(225deg);\n}\n.cg-voice-cp .cg-voice-cp-side-button.top-side:after {\n  -moz-transform: rotate(-225deg);\n  -ms-transform: rotate(-225deg);\n  -webkit-transform: rotate(-225deg);\n  -o-transform: rotate(-225deg);\n  transform: rotate(-225deg);\n}\n.cg-voice-cp .cg-voice-cp-power-button:after {\n  background-image: url(" + __webpack_require__(148) + ");\n}\n.cg-voice-cp .cg-voice-cp-help-button:after {\n  background-image: url(" + __webpack_require__(149) + ");\n}\n.cg-voice-cp .cg-voice-cp-settings-button:after {\n  background-image: url(" + __webpack_require__(150) + ");\n}\n.cg-voice-cp .cg-voice-cp-skip-button:after {\n  background-image: url(" + __webpack_require__(151) + ");\n}\n.cg-voice-cp[state=quiescence] .cg-voice-cp-indicator-button {\n  cursor: pointer;\n  background-image: url(" + __webpack_require__(152) + ");\n}\n.cg-voice-cp[state=quiescence] .cg-voice-cp-indicator-button:hover {\n  background-color: #ff4b43;\n}\n.cg-voice-cp[state=quiescence] .cg-voice-cp-indicator-button:active {\n  background-color: #a90700;\n}\n.cg-voice-cp[state=quiescence] .cg-voice-cp-side-button {\n  background-color: rgba(255, 124, 118, 0.1);\n  border-color: rgba(255, 124, 118, 0.3);\n}\n.cg-voice-cp[state=quiescence] .cg-voice-cp-side-button:hover:not(:disabled) {\n  background-color: rgba(255, 124, 118, 0.2);\n}\n.cg-voice-cp[state=quiescence] .cg-voice-cp-side-button:active:not(:disabled) {\n  background-color: rgba(255, 124, 118, 0.4);\n}\n.cg-voice-cp[state=quiescence] .cg-voice-cp-power-button:after {\n  display: none;\n}\n.cg-voice-cp[state=pending] .cg-voice-cp-indicator-button {\n  background-color: #B2DBFB;\n  background-image: url(" + __webpack_require__(153) + ");\n}\n.cg-voice-cp[state=pending] .cg-voice-cp-side-button {\n  background-color: rgba(178, 219, 251, 0.1);\n  border-color: rgba(178, 219, 251, 0.3);\n}\n.cg-voice-cp[state=pending] .cg-voice-cp-side-button:hover:not(:disabled) {\n  background-color: rgba(178, 219, 251, 0.2);\n}\n.cg-voice-cp[state=pending] .cg-voice-cp-side-button:active:not(:disabled) {\n  background-color: rgba(178, 219, 251, 0.4);\n}\n.cg-voice-cp[state=speaking] .cg-voice-cp-indicator-button {\n  background-color: #53b4ff;\n  background-image: url(" + __webpack_require__(154) + ");\n}\n.cg-voice-cp[state=speaking] .cg-voice-cp-side-button {\n  background-color: rgba(83, 180, 255, 0.1);\n  border-color: rgba(83, 180, 255, 0.3);\n}\n.cg-voice-cp[state=speaking] .cg-voice-cp-side-button:hover:not(:disabled) {\n  background-color: rgba(83, 180, 255, 0.2);\n}\n.cg-voice-cp[state=speaking] .cg-voice-cp-side-button:active:not(:disabled) {\n  background-color: rgba(83, 180, 255, 0.4);\n}\n.cg-voice-cp[state=listening] .cg-voice-cp-indicator-button {\n  background-color: #f64d4a;\n  background-image: url(" + __webpack_require__(155) + ");\n}\n.cg-voice-cp[state=listening] .cg-voice-cp-side-button {\n  background-color: rgba(246, 77, 74, 0.1);\n  border-color: rgba(246, 77, 74, 0.3);\n}\n.cg-voice-cp[state=listening] .cg-voice-cp-side-button:hover:not(:disabled) {\n  background-color: rgba(246, 77, 74, 0.2);\n}\n.cg-voice-cp[state=listening] .cg-voice-cp-side-button:active:not(:disabled) {\n  background-color: rgba(246, 77, 74, 0.4);\n}\n.cg-voice-cp[active=active] .cg-voice-cp-indicator-button {\n  animation: growing 1s linear infinite alternate;\n}\n.cg-voice-cp[active=active][state=speaking] .cg-voice-cp-indicator-button {\n  animation: growing-speaking 1s linear infinite alternate;\n}\n.cg-voice-cp[active=active][state=listening] .cg-voice-cp-indicator-button {\n  animation: growing-listening 1s linear infinite alternate;\n}\n.cg-voice-cp .cg-voice-cp-messages {\n  top: calc(100% + 20px);\n  margin-top: 20px;\n  right: 0;\n  width: 300px;\n}\n.cg-voice-cp .cg-voice-cp-messages.cg-voice-cp-hidden {\n  display: none;\n}\n.cg-voice-cp .cg-voice-cp-messages .cg-voice-cp-notification {\n  transition: opacity 3s;\n}\n.cg-voice-cp .cg-voice-cp-messages .cg-voice-cp-notification:not(:last-child) {\n  margin-right: 5px;\n}\n.cg-voice-cp .cg-voice-cp-messages .cg-voice-cp-notification[type=error] {\n  animation: notification-glowing-error 0.7s cubic-bezier(0.25, 2, 0.75, 2) both;\n}\n.cg-voice-cp .cg-voice-cp-messages .cg-voice-cp-notification[type=answer] {\n  animation: notification-glowing-answer 0.7s cubic-bezier(0.25, 2, 0.75, 2) both;\n}\n.cg-voice-cp .cg-voice-cp-messages .cg-voice-cp-notification[type=command] {\n  animation: notification-glowing-command 0.7s cubic-bezier(0.25, 2, 0.75, 2) both;\n}\n@-moz-keyframes growing {\n  0% {\n    box-shadow: rgba(255, 124, 118, 0.3) 0 0 0 0;\n  }\n  100% {\n    box-shadow: rgba(255, 124, 118, 0.3) 0 0 0 20px;\n  }\n}\n@-webkit-keyframes growing {\n  0% {\n    box-shadow: rgba(255, 124, 118, 0.3) 0 0 0 0;\n  }\n  100% {\n    box-shadow: rgba(255, 124, 118, 0.3) 0 0 0 20px;\n  }\n}\n@keyframes growing {\n  0% {\n    box-shadow: rgba(255, 124, 118, 0.3) 0 0 0 0;\n  }\n  100% {\n    box-shadow: rgba(255, 124, 118, 0.3) 0 0 0 20px;\n  }\n}\n@-moz-keyframes growing-speaking {\n  0% {\n    box-shadow: rgba(83, 180, 255, 0.3) 0 0 0 0;\n  }\n  100% {\n    box-shadow: rgba(83, 180, 255, 0.3) 0 0 0 20px;\n  }\n}\n@-webkit-keyframes growing-speaking {\n  0% {\n    box-shadow: rgba(83, 180, 255, 0.3) 0 0 0 0;\n  }\n  100% {\n    box-shadow: rgba(83, 180, 255, 0.3) 0 0 0 20px;\n  }\n}\n@keyframes growing-speaking {\n  0% {\n    box-shadow: rgba(83, 180, 255, 0.3) 0 0 0 0;\n  }\n  100% {\n    box-shadow: rgba(83, 180, 255, 0.3) 0 0 0 20px;\n  }\n}\n@-moz-keyframes growing-listening {\n  0% {\n    box-shadow: rgba(246, 77, 74, 0.3) 0 0 0 0;\n  }\n  100% {\n    box-shadow: rgba(246, 77, 74, 0.3) 0 0 0 20px;\n  }\n}\n@-webkit-keyframes growing-listening {\n  0% {\n    box-shadow: rgba(246, 77, 74, 0.3) 0 0 0 0;\n  }\n  100% {\n    box-shadow: rgba(246, 77, 74, 0.3) 0 0 0 20px;\n  }\n}\n@keyframes growing-listening {\n  0% {\n    box-shadow: rgba(246, 77, 74, 0.3) 0 0 0 0;\n  }\n  100% {\n    box-shadow: rgba(246, 77, 74, 0.3) 0 0 0 20px;\n  }\n}\n@-moz-keyframes notification-glowing-answer {\n  0% {\n    color: inherit;\n    text-shadow: inherit;\n  }\n  100% {\n    color: #006700;\n    text-shadow: green 0 0 2px;\n  }\n}\n@-webkit-keyframes notification-glowing-answer {\n  0% {\n    color: inherit;\n    text-shadow: inherit;\n  }\n  100% {\n    color: #006700;\n    text-shadow: green 0 0 2px;\n  }\n}\n@keyframes notification-glowing-answer {\n  0% {\n    color: inherit;\n    text-shadow: inherit;\n  }\n  100% {\n    color: #006700;\n    text-shadow: green 0 0 2px;\n  }\n}\n@-moz-keyframes notification-glowing-command {\n  0% {\n    color: inherit;\n    text-shadow: inherit;\n  }\n  100% {\n    color: #e60000;\n    text-shadow: red 0 0 2px;\n  }\n}\n@-webkit-keyframes notification-glowing-command {\n  0% {\n    color: inherit;\n    text-shadow: inherit;\n  }\n  100% {\n    color: #e60000;\n    text-shadow: red 0 0 2px;\n  }\n}\n@keyframes notification-glowing-command {\n  0% {\n    color: inherit;\n    text-shadow: inherit;\n  }\n  100% {\n    color: #e60000;\n    text-shadow: red 0 0 2px;\n  }\n}\n@-moz-keyframes notification-glowing-error {\n  0% {\n    color: inherit;\n    text-shadow: inherit;\n  }\n  100% {\n    color: #e60000;\n    text-shadow: red 0 0 2px;\n  }\n}\n@-webkit-keyframes notification-glowing-error {\n  0% {\n    color: inherit;\n    text-shadow: inherit;\n  }\n  100% {\n    color: #e60000;\n    text-shadow: red 0 0 2px;\n  }\n}\n@keyframes notification-glowing-error {\n  0% {\n    color: inherit;\n    text-shadow: inherit;\n  }\n  100% {\n    color: #e60000;\n    text-shadow: red 0 0 2px;\n  }\n}\n@-moz-keyframes notification-fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes notification-fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes notification-fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0icmVkIiBkPSJNMTYuNTYsNS40NEwxNS4xMSw2Ljg5QzE2Ljg0LDcuOTQgMTgsOS44MyAxOCwxMkE2LDYgMCAwLDEgMTIsMThBNiw2IDAgMCwxIDYsMTJDNiw5LjgzIDcuMTYsNy45NCA4Ljg4LDYuODhMNy40NCw1LjQ0QzUuMzYsNi44OCA0LDkuMjggNCwxMkE4LDggMCAwLDAgMTIsMjBBOCw4IDAgMCwwIDIwLDEyQzIwLDkuMjggMTguNjQsNi44OCAxNi41Niw1LjQ0TTEzLDNIMTFWMTNIMTMiIC8+PC9zdmc+"

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLDE5SDEzVjIySDEwVjE5TTEyLDJDMTcuMzUsMi4yMiAxOS42OCw3LjYyIDE2LjUsMTEuNjdDMTUuNjcsMTIuNjcgMTQuMzMsMTMuMzMgMTMuNjcsMTQuMTdDMTMsMTUgMTMsMTYgMTMsMTdIMTBDMTAsMTUuMzMgMTAsMTMuOTIgMTAuNjcsMTIuOTJDMTEuMzMsMTEuOTIgMTIuNjcsMTEuMzMgMTMuNSwxMC42N0MxNS45Miw4LjQzIDE1LjMyLDUuMjYgMTIsNUEzLDMgMCAwLDAgOSw4SDZBNiw2IDAgMCwxIDEyLDJaIiAvPjwvc3ZnPg=="

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDE1LjVBMy41LDMuNSAwIDAsMSA4LjUsMTJBMy41LDMuNSAwIDAsMSAxMiw4LjVBMy41LDMuNSAwIDAsMSAxNS41LDEyQTMuNSwzLjUgMCAwLDEgMTIsMTUuNU0xOS40MywxMi45N0MxOS40NywxMi42NSAxOS41LDEyLjMzIDE5LjUsMTJDMTkuNSwxMS42NyAxOS40NywxMS4zNCAxOS40MywxMUwyMS41NCw5LjM3QzIxLjczLDkuMjIgMjEuNzgsOC45NSAyMS42Niw4LjczTDE5LjY2LDUuMjdDMTkuNTQsNS4wNSAxOS4yNyw0Ljk2IDE5LjA1LDUuMDVMMTYuNTYsNi4wNUMxNi4wNCw1LjY2IDE1LjUsNS4zMiAxNC44Nyw1LjA3TDE0LjUsMi40MkMxNC40NiwyLjE4IDE0LjI1LDIgMTQsMkgxMEM5Ljc1LDIgOS41NCwyLjE4IDkuNSwyLjQyTDkuMTMsNS4wN0M4LjUsNS4zMiA3Ljk2LDUuNjYgNy40NCw2LjA1TDQuOTUsNS4wNUM0LjczLDQuOTYgNC40Niw1LjA1IDQuMzQsNS4yN0wyLjM0LDguNzNDMi4yMSw4Ljk1IDIuMjcsOS4yMiAyLjQ2LDkuMzdMNC41NywxMUM0LjUzLDExLjM0IDQuNSwxMS42NyA0LjUsMTJDNC41LDEyLjMzIDQuNTMsMTIuNjUgNC41NywxMi45N0wyLjQ2LDE0LjYzQzIuMjcsMTQuNzggMi4yMSwxNS4wNSAyLjM0LDE1LjI3TDQuMzQsMTguNzNDNC40NiwxOC45NSA0LjczLDE5LjAzIDQuOTUsMTguOTVMNy40NCwxNy45NEM3Ljk2LDE4LjM0IDguNSwxOC42OCA5LjEzLDE4LjkzTDkuNSwyMS41OEM5LjU0LDIxLjgyIDkuNzUsMjIgMTAsMjJIMTRDMTQuMjUsMjIgMTQuNDYsMjEuODIgMTQuNSwyMS41OEwxNC44NywxOC45M0MxNS41LDE4LjY3IDE2LjA0LDE4LjM0IDE2LjU2LDE3Ljk0TDE5LjA1LDE4Ljk1QzE5LjI3LDE5LjAzIDE5LjU0LDE4Ljk1IDE5LjY2LDE4LjczTDIxLjY2LDE1LjI3QzIxLjc4LDE1LjA1IDIxLjczLDE0Ljc4IDIxLjU0LDE0LjYzTDE5LjQzLDEyLjk3WiIgLz48L3N2Zz4="

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTQsNVYxOUwxMSwxMk0xOCw1VjE5SDIwVjVNMTEsNVYxOUwxOCwxMiIgLz48L3N2Zz4="

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNi41Niw1LjQ0TDE1LjExLDYuODlDMTYuODQsNy45NCAxOCw5LjgzIDE4LDEyQTYsNiAwIDAsMSAxMiwxOEE2LDYgMCAwLDEgNiwxMkM2LDkuODMgNy4xNiw3Ljk0IDguODgsNi44OEw3LjQ0LDUuNDRDNS4zNiw2Ljg4IDQsOS4yOCA0LDEyQTgsOCAwIDAsMCAxMiwyMEE4LDggMCAwLDAgMjAsMTJDMjAsOS4yOCAxOC42NCw2Ljg4IDE2LjU2LDUuNDRNMTMsM0gxMVYxM0gxMyIgLz48L3N2Zz4="

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNiwxMkEyLDIgMCAwLDEgMTgsMTBBMiwyIDAgMCwxIDIwLDEyQTIsMiAwIDAsMSAxOCwxNEEyLDIgMCAwLDEgMTYsMTJNMTAsMTJBMiwyIDAgMCwxIDEyLDEwQTIsMiAwIDAsMSAxNCwxMkEyLDIgMCAwLDEgMTIsMTRBMiwyIDAgMCwxIDEwLDEyTTQsMTJBMiwyIDAgMCwxIDYsMTBBMiwyIDAgMCwxIDgsMTJBMiwyIDAgMCwxIDYsMTRBMiwyIDAgMCwxIDQsMTJaIiAvPjwvc3ZnPg=="

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNCwzLjIzVjUuMjlDMTYuODksNi4xNSAxOSw4LjgzIDE5LDEyQzE5LDE1LjE3IDE2Ljg5LDE3Ljg0IDE0LDE4LjdWMjAuNzdDMTgsMTkuODYgMjEsMTYuMjggMjEsMTJDMjEsNy43MiAxOCw0LjE0IDE0LDMuMjNNMTYuNSwxMkMxNi41LDEwLjIzIDE1LjUsOC43MSAxNCw3Ljk3VjE2QzE1LjUsMTUuMjkgMTYuNSwxMy43NiAxNi41LDEyTTMsOVYxNUg3TDEyLDIwVjRMNyw5SDNaIiAvPjwvc3ZnPg=="

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiwyQTMsMyAwIDAsMSAxNSw1VjExQTMsMyAwIDAsMSAxMiwxNEEzLDMgMCAwLDEgOSwxMVY1QTMsMyAwIDAsMSAxMiwyTTE5LDExQzE5LDE0LjUzIDE2LjM5LDE3LjQ0IDEzLDE3LjkzVjIxSDExVjE3LjkzQzcuNjEsMTcuNDQgNSwxNC41MyA1LDExSDdBNSw1IDAgMCwwIDEyLDE2QTUsNSAwIDAsMCAxNywxMUgxOVoiIC8+PC9zdmc+"

/***/ },
/* 156 */
/***/ function(module, exports) {

	'use strict';

	function ensureAnArray(arr) {
	    if (Object.prototype.toString.call(arr) === '[object Array]') {
	        return arr;
	    } else if (arr === null || arr === void 0) {
	        return [];
	    } else {
	        return [arr];
	    }
	}

	var Simulator = {
	    type: 'touch',

	    /**
	     * set type
	     * @param type
	     */
	    setType: function setType(type) {
	        if (!Simulator.events[type]) {
	            throw new Error(type + " is not a valid event type.");
	        }
	        return this.type = type;
	    }
	};

	// simple easing methods
	// found at the source of velocity.js
	Simulator.easings = {
	    linear: function linear(p) {
	        return p;
	    },
	    swing: function swing(p) {
	        return 0.5 - Math.cos(p * Math.PI) / 2;
	    },
	    quad: function quad(p) {
	        return Math.pow(p, 2);
	    },
	    cubic: function cubic(p) {
	        return Math.pow(p, 3);
	    },
	    quart: function quart(p) {
	        return Math.pow(p, 4);
	    },
	    quint: function quint(p) {
	        return Math.pow(p, 5);
	    },
	    expo: function expo(p) {
	        return Math.pow(p, 6);
	    }
	};

	Simulator.events = {
	    /**
	     * pointer events
	     */
	    pointer: {
	        fakeSupport: function fakeSupport() {
	            if (!("PointerEvent" in window)) {
	                navigator.maxTouchPoints = 10;
	                window.PointerEvent = function () {};
	            }
	        },

	        typeMap: {
	            start: 'pointerdown',
	            move: 'pointermove',
	            end: 'pointerup',
	            cancel: 'pointercancel'
	        },

	        trigger: function trigger(touches, element, type) {
	            touches.forEach(function (touch, i) {
	                var x = Math.round(touch.x),
	                    y = Math.round(touch.y);

	                var eventType = this.typeMap[type];
	                // ie10 style events
	                var msEventType = window.MSPointerEvent && eventType.replace(/pointer([a-z])/, function (_, a) {
	                    return 'MSPointer' + a.toUpperCase();
	                });

	                var event = document.createEvent('Event');
	                event.initEvent(msEventType || eventType, true, true);

	                event.getCurrentPoint = function () {
	                    return touch;
	                };
	                event.setPointerCapture = event.releasePointerCapture = function () {};

	                event.pointerId = i;
	                event.buttons = 1;
	                event.pageX = x;
	                event.pageY = y;
	                event.clientX = x;
	                event.clientY = y;
	                event.screenX = x;
	                event.screenY = y;
	                //noinspection JSAnnotator
	                //event.target = element;
	                event.pointerType = 'touch';
	                event.identifier = i;

	                element.dispatchEvent(event);
	            }, this);

	            renderTouches(touches, element);
	        }
	    },

	    /**
	     * touch events
	     */
	    touch: {
	        fakeSupport: function fakeSupport() {
	            if (!("ontouchstart" in window)) {
	                window.ontouchstart = function () {};
	            }
	        },

	        emptyTouchList: function emptyTouchList() {
	            var touchList = [];
	            touchList.identifiedTouch = touchList.item = function (index) {
	                return this[index] || {};
	            };
	            return touchList;
	        },

	        trigger: function trigger(touches, element, type) {
	            var touchList = this.emptyTouchList();
	            touches.forEach(function (touch, i) {
	                var x = Math.round(touch.x),
	                    y = Math.round(touch.y);

	                touchList.push({
	                    pageX: x,
	                    pageY: y,
	                    clientX: x,
	                    clientY: y,
	                    screenX: x,
	                    screenY: y,
	                    target: touch.target,
	                    identifier: i
	                });
	            });

	            var event = document.createEvent('Event');
	            event.initEvent('touch' + type, true, true);

	            if (type !== 'end') {
	                var targetTouches = touchList.filter(function (touch) {
	                    return touch.target === element;
	                });

	                event.changedTouches = targetTouches;
	            } else {
	                // assume that last touch is released touch. Pop it out from list of touches
	                event.changedTouches = [touchList.pop()];

	                var targetTouches = touchList.filter(function (touch) {
	                    return touch.target === element;
	                });
	            }

	            event.touches = touchList;
	            event.targetTouches = targetTouches;
	            element.dispatchEvent(event);

	            renderTouches(touches, element);
	        }
	    }
	};

	/**
	 * merge objects
	 * @param dest
	 * @param src
	 * @returns dest
	 */
	function merge(dest, src) {
	    dest = dest || {};
	    src = src || {};
	    for (var key in src) {
	        if (src.hasOwnProperty(key) && dest[key] === undefined) {
	            dest[key] = src[key];
	        }
	    }
	    return dest;
	}

	/**
	 * generate a list of x/y around the center
	 * @param center
	 * @param countTouches
	 * @param [radius=100]
	 * @param [rotation=0]
	 */
	function getTouches(center, elements, countTouches, radius, rotation) {
	    var cx = center[0],
	        cy = center[1],
	        touches = [],
	        slice,
	        i,
	        angle;

	    elements = ensureAnArray(elements);

	    // just one touch, at the center
	    if (countTouches === 1) {
	        if (elements.length) {
	            return [{ x: cx, y: cy, target: elements[0] }];
	        } else {
	            return [{ x: cx, y: cy }];
	        }
	    }

	    radius = radius || 100;
	    rotation = rotation * Math.PI / 180 || 0;
	    slice = 2 * Math.PI / countTouches;

	    for (i = 0; i < countTouches; i++) {
	        angle = slice * i + rotation;
	        touches.push({
	            x: cx + radius * Math.cos(angle),
	            y: cy + radius * Math.sin(angle),
	            target: elements[i % elements.length]
	        });
	    }

	    return touches;
	}

	/**
	 * render the touches
	 * @param touches
	 * @param element
	 * @param type
	 */
	function renderTouches(touches, element) {
	    touches.forEach(function (touch) {
	        var el = document.createElement('div');
	        el.style.width = '20px';
	        el.style.height = '20px';
	        el.style.background = 'red';
	        el.style.position = 'fixed';
	        el.style.top = touch.y + 'px';
	        el.style.left = touch.x + 'px';
	        el.style.borderRadius = '100%';
	        el.style.border = 'solid 2px #000';
	        el.style.zIndex = 6000;

	        element.appendChild(el);
	        setTimeout(function () {
	            el && el.parentNode && el.parentNode.removeChild(el);
	            el = null;
	        }, 100);
	    });
	}

	/**
	 * trigger the touch events
	 * @param touches
	 * @param element
	 * @param type
	 * @returns {*}
	 */
	function trigger(touches, element, type) {
	    return Simulator.events[Simulator.type].trigger(touches, element, type);
	}

	/**
	 * trigger a gesture
	 * @param elements
	 * @param startTouches
	 * @param options
	 * @param done
	 */
	function triggerGesture(elements, startTouches, options, done) {
	    var interval = 10,
	        loops = Math.ceil(options.duration / interval),
	        loop = 1;

	    elements = ensureAnArray(elements);

	    options = merge(options, {
	        pos: [10, 10],
	        duration: 250,
	        touches: 1,
	        deltaX: 0,
	        deltaY: 0,
	        radius: 100,
	        scale: 1,
	        rotation: 0,
	        easing: 'swing'
	    });

	    function gestureLoop() {
	        // calculate the radius
	        // this is for scaling and multiple touches
	        var radius = options.radius;
	        if (options.scale !== 1) {
	            radius = options.radius - options.radius * (1 - options.scale) * (1 / loops * loop);
	        }

	        // calculate new position/rotation
	        var easing = Simulator.easings[options.easing](1 / loops * loop),
	            posX = options.pos[0] + options.deltaX / loops * loop * easing,
	            posY = options.pos[1] + options.deltaY / loops * loop * easing,
	            rotation = options.rotation / loops * loop,
	            touches = getTouches([posX, posY], elements, startTouches.length, radius, rotation),
	            isFirst = loop == 1,
	            isLast = loop == loops;

	        for (var t = touches.length - 1; t >= 0; t--) {
	            if (isFirst) {
	                trigger(touches, touches[t].target, 'start');
	            } else if (isLast) {
	                trigger(touches, touches[t].target, 'end');

	                // Remove processed touch
	                touches.pop();

	                if (touches.length === 0) {
	                    return done();
	                }
	            } else {
	                trigger(touches, touches[t].target, 'move');
	            }
	        }

	        setTimeout(gestureLoop, interval);
	        loop++;
	    }
	    gestureLoop();
	}

	Simulator.gestures = {
	    /**
	     * press
	     * @param element
	     * @param options
	     * @param done
	     */
	    press: function press(element, options, done) {
	        options = merge(options, {
	            pos: [10, 10],
	            duration: 500,
	            touches: 1
	        });

	        var touches = getTouches(options.pos, element, 1);

	        trigger(touches, element, 'start');
	        setTimeout(function () {
	            trigger(touches, element, 'end');
	            done && setTimeout(done, 25);
	        }, options.duration);
	    },

	    /**
	     * tap
	     * @param element
	     * @param options
	     * @param done
	     */
	    tap: function tap(element, options, done) {
	        options = merge(options, {
	            pos: [10, 10],
	            duration: 100,
	            touches: 1
	        });

	        var touches = getTouches(options.pos, element, 1);
	        trigger(touches, element, 'start');
	        setTimeout(function () {
	            trigger(touches, element, 'end');
	            done && setTimeout(done, 25);
	        }, options.duration);
	    },

	    /**
	     * double tap
	     * @param element
	     * @param options
	     * @param done
	     */
	    doubleTap: function doubleTap(element, options, done) {
	        options = merge(options, {
	            pos: [10, 10],
	            pos2: [11, 11],
	            duration: 100,
	            interval: 200,
	            touches: 1
	        });

	        Simulator.gestures.tap(element, options, function () {
	            setTimeout(function () {
	                options.pos = options.pos2;
	                Simulator.gestures.tap(element, options, done);
	            }, options.interval);
	        });
	    },

	    /**
	     * pan
	     * @param element
	     * @param options
	     * @param done
	     */
	    pan: function pan(element, options, done) {
	        options = merge(options, {
	            pos: [10, 10],
	            deltaX: 300,
	            deltaY: 150,
	            duration: 250,
	            touches: 1
	        });

	        var touches = getTouches(options.pos, element, options.touches);
	        triggerGesture(element, touches, options, function () {
	            done && setTimeout(done, 25);
	        });
	    },

	    /**
	     * swipe
	     * @param element
	     * @param options
	     * @param done
	     */
	    swipe: function swipe(element, options, done) {
	        options = merge(options, {
	            pos: [10, 10],
	            deltaX: 300,
	            deltaY: 150,
	            duration: 250,
	            touches: 1,
	            easing: 'cubic'
	        });

	        var touches = getTouches(options.pos, element, options.touches);
	        triggerGesture(element, touches, options, function () {
	            done && setTimeout(done, 25);
	        });
	    },

	    /**
	     * pinch
	     * @param {HTMLElement|Array} elements
	     * @param options
	     * @param done
	     */
	    pinch: function pinch(elements, options, done) {
	        elements = ensureAnArray(elements);
	        options = merge(options, {
	            pos: [300, 300],
	            scale: 2,
	            duration: 250,
	            radius: 100,
	            touches: 2
	        });

	        var touches = getTouches(options.pos, elements, options.touches);
	        triggerGesture(elements, touches, options, function () {
	            done && setTimeout(done, 25);
	        });
	    },

	    /**
	     * rotate
	     * @param {HTMLElement|Array} elements
	     * @param options
	     * @param done
	     */
	    rotate: function rotate(elements, options, done) {
	        elements = ensureAnArray(elements);
	        options = merge(options, {
	            pos: [300, 300],
	            rotation: 180,
	            duration: 250,
	            touches: 2
	        });

	        var touches = getTouches(options.pos, elements, options.touches);
	        triggerGesture(elements, touches, options, function () {
	            done && setTimeout(done, 25);
	        });
	    },

	    /**
	     * combination of pinch and rotate
	     * @param {HTMLElement|Array} elements
	     * @param options
	     * @param done
	     */
	    pinchRotate: function pinchRotate(elements, options, done) {
	        elements = ensureAnArray(elements);
	        options = merge(options, {
	            pos: [300, 300],
	            rotation: 180,
	            radius: 100,
	            scale: .5,
	            duration: 250,
	            touches: 2
	        });

	        var touches = getTouches(options.pos, elements, options.touches);
	        triggerGesture(elements, touches, options, function () {
	            done && setTimeout(done, 25);
	        });
	    }
	};

	// initial
	if (window.PointerEvent || window.MSPointerEvent) {
	    Simulator.setType('pointer');
	} else {
	    Simulator.setType('touch');
	    Simulator.events.touch.fakeSupport();
	}

	module.exports = Simulator;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cg-item.js": 158,
		"./common-item.js": 159,
		"./cxp-item.js": 160,
		"./dc-item.js": 161,
		"./dc-survey-item.js": 162
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 157;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _item = __webpack_require__(81);

	var _item2 = _interopRequireDefault(_item);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ITEM_CLASS = 'cg-item';
	var FIELD_CLASS = 'pt-widget';
	var SECTION_CLASS = ITEM_CLASS + '-section';

	var GRADE_PANEL_SELECTOR = '.' + ITEM_CLASS + '-grade-panel';
	var SUBMIT_BUTTON_SELECTOR = '.' + ITEM_CLASS + '-submit-btn';

	var CgItem = function (_Item) {
	    _inherits(CgItem, _Item);

	    function CgItem() {
	        _classCallCheck(this, CgItem);

	        return _possibleConstructorReturn(this, (CgItem.__proto__ || Object.getPrototypeOf(CgItem)).apply(this, arguments));
	    }

	    _createClass(CgItem, [{
	        key: '_addEventsEmission',


	        /** @inheritdoc */
	        value: function _addEventsEmission() {
	            var _this2 = this;

	            this.submitButton.addEventListener('click', function () {
	                _this2.emit(_itemEvent2.default.SUBMIT);
	            });
	            //todo: MutationObserver works only in modern browsers - need support older versions.
	            var submitObserver = new MutationObserver(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    if (mutation.type === 'attributes' && mutation.attributeName === 'status') {
	                        var status = _this2.gradePanel.getAttribute('status');
	                        if (status === 'response-received') {
	                            var response = {
	                                score: parseFloat(_this2.gradePanel.getAttribute('score')),
	                                feedback: _this2.gradePanel.getAttribute('feedback')
	                            };
	                            _this2.emit(_itemEvent2.default.RESPONSE_RECEIVED, response);
	                        }
	                    }
	                });
	            });
	            submitObserver.observe(this.gradePanel, { attributes: true });
	        }

	        /** @inheritdoc */

	    }, {
	        key: '_initHook',
	        value: function _initHook() {
	            _get(CgItem.prototype.__proto__ || Object.getPrototypeOf(CgItem.prototype), '_initHook', this).call(this);

	            this.gradePanel = this.domElement.querySelector(GRADE_PANEL_SELECTOR);
	            this.submitButton = this.gradePanel.querySelector(SUBMIT_BUTTON_SELECTOR);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'isSubmitted',
	        value: function isSubmitted() {
	            return this.gradePanel.getAttribute('is-submitted') == 'true';
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'submit',
	        value: function submit() {
	            var clickEvent = document.createEvent('MouseEvents');
	            clickEvent.initEvent('click', true, true);
	            this.submitButton.dispatchEvent(clickEvent);
	        }
	    }], [{
	        key: 'determineFieldType',


	        /** @inheritdoc */
	        value: function determineFieldType(domElement) {
	            var widgetElement = this.isField(domElement) ? domElement : domElement.querySelector('.' + FIELD_CLASS);
	            var pt = widgetElement.getAttribute('widget-type');
	            if (!pt) {
	                throw new Error(this.name + '.determineFieldType: item-type attribute is undefined.');
	            }
	            return pt;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'findItemElement',
	        value: function findItemElement(domElement) {
	            return domElement.matches('.' + ITEM_CLASS) ? domElement : domElement.querySelector('.' + ITEM_CLASS);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getSectionElements',
	        value: function getSectionElements(domElement) {
	            return domElement.querySelectorAll('.' + SECTION_CLASS);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'isField',
	        value: function isField(domElement) {
	            return domElement.matches('.' + FIELD_CLASS);
	        }
	    }, {
	        key: 'CONTEXT',
	        get: function get() {
	            return 'cg';
	        }
	    }]);

	    return CgItem;
	}(_item2.default);

	exports.default = CgItem;
	;
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 Copyright 2016
	 Ilnaz Shayakhmetov

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _asyncInitialized = __webpack_require__(82);

	var _asyncInitialized2 = _interopRequireDefault(_asyncInitialized);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	var _command = __webpack_require__(79);

	var _command2 = _interopRequireDefault(_command);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*const DECORATORS = {
	    mc: require('../field-decorators/mc-decorator'),
	    dropdown: require('../field-decorators/dropdown-decorator'),
	    essay: require('../field-decorators/essay-decorator'),
	};*/
	/*strings.types.forEach(type => {
	    DECORATORS[type] = require(`../field-decorators/${type}-decorator`);
	});*/

	var FIELD_CLASS = _strings2.default.selectors.NAMESPACE + '-' + _strings2.default.selectors.FIELD;

	var Item = function (_AsyncInitialized) {
	    _inherits(Item, _AsyncInitialized);

	    function Item(domElement, settings, commandService) {
	        _classCallCheck(this, Item);

	        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

	        _this.settings = (0, _merge2.default)(true, {}, _this.constructor.DEFAULT_SETTINGS, settings);
	        _this.commandService = commandService;
	        _this.domElement = domElement;
	        _this.hasInitialAlreadyRead = false;
	        _this._initHook();
	        _this._addListeners();
	        return _this;
	    }

	    _createClass(Item, [{
	        key: 'isSubmitted',
	        value: function isSubmitted() {
	            return false;
	        }
	    }, {
	        key: 'isAnswerEmpty',
	        value: function isAnswerEmpty() {
	            return this.currentField.isAnswerEmpty();
	        }
	    }, {
	        key: 'isAnswerInputAvailable',
	        value: function isAnswerInputAvailable() {
	            return this.currentField.isAnswerEmpty();
	        }
	    }, {
	        key: 'getAnswerAlternatives',
	        value: function getAnswerAlternatives() {
	            return this.currentField.getAnswerAlternatives();
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {}
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.currentField.setState('');
	        }
	    }, {
	        key: 'setStateByRecognized',
	        value: function setStateByRecognized(recognised) {
	            this.currentField.setStateByRecognized(recognised);
	        }

	        /** @inheritdoc */

	    }, {
	        key: '_initHook',
	        value: function _initHook() {
	            var _this2 = this;

	            this._fieldElements = Array.prototype.slice.call(this.domElement.querySelectorAll('.' + FIELD_CLASS));
	            this._fields = [];
	            this._index = 0;
	            this._fieldElements.forEach(function (el, index) {
	                var field = _this2._initField(el);
	                if (field) _this2._fields.push(field);
	            });
	            this._registerCommands();
	        }
	    }, {
	        key: '_addListeners',
	        value: function _addListeners() {
	            var _this3 = this;

	            this._fields.forEach(function (field, index) {
	                field.on(_itemEvent2.default.FIELD_FOCUSED, function () {
	                    _this3.emit(_itemEvent2.default.STOP, true);
	                    _this3._unregisterCommands();
	                    _this3._index = index;
	                    _this3._registerCommands();
	                    _this3.readTask();
	                });
	            });
	        }
	    }, {
	        key: '_initField',
	        value: function _initField(el) {
	            var fieldType = '';
	            _strings2.default.types.some(function (type) {
	                var selector = '.' + _strings2.default.selectors.NAMESPACE + '-' + type;
	                if (el.matches(selector) || el.querySelector(selector) != null) {
	                    fieldType = type;
	                    return true;
	                } else {
	                    return false;
	                }
	            });
	            if (fieldType.length === 0) {
	                console.error('There are no available fields or fields not specified');
	                return;
	            }
	            var FieldDecorator = __webpack_require__(119)("./" + fieldType + '-decorator.js');
	            var field = new FieldDecorator(el, {
	                context: this.constructor.CONTEXT,
	                lang: this.settings.lang
	            }, this.commandService);
	            return field;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'submit',
	        value: function submit() {
	            this.emit(_itemEvent2.default.SUBMIT);
	        }
	    }, {
	        key: '_getReady',
	        value: function _getReady() {
	            if (this._ready) return this._ready;

	            // resolve ready promise when all fields will be ready
	            return Promise.all(this._fields.map(function (field) {
	                return field._getReady();
	            })).then(this.settings.ready).catch(function (error) {
	                console.error(error);
	            });
	        }
	    }, {
	        key: '_unregisterCommands',
	        value: function _unregisterCommands() {
	            var _this4 = this;

	            var commands = this.getCommands();
	            commands.forEach(function (command) {
	                _this4.commandService.unregister(command);
	            });
	        }
	    }, {
	        key: '_registerCommands',
	        value: function _registerCommands() {
	            var _this5 = this;

	            var commands = this.getCommands();
	            commands.forEach(function (command) {
	                _this5.commandService.register(command);
	            });
	        }
	        //redefined methods

	    }, {
	        key: 'getCommands',
	        value: function getCommands() {
	            var _this6 = this;

	            var currentFieldCommands = this.currentField.getCommands();
	            var navigationCommands = [];
	            var nextFieldCommand = new _command2.default(_strings2.default.commands.NEXT_FIELD, function () {
	                var currentFieldIndex = _this6.fields.indexOf(_this6.currentField);
	                currentFieldIndex++;
	                if (currentFieldIndex >= _this6.fields.length) {
	                    currentFieldIndex = 0;
	                }
	                _this6.moveToField(currentFieldIndex);
	            }, _strings2.default.commands.FIELD_NAVIGATION_HINT, 100),
	                prevFieldCommand = new _command2.default(_strings2.default.commands.PREV_FIELD, function () {
	                var currentFieldIndex = _this6.fields.indexOf(_this6.currentField);
	                currentFieldIndex--;
	                if (currentFieldIndex < 0) {
	                    currentFieldIndex = _this6.fields.length - 1;
	                }
	                _this6.moveToField(currentFieldIndex);
	            });
	            if (this._fields.length > 0) {
	                if (this._index === 0) {
	                    navigationCommands.push(nextFieldCommand);
	                } else if (this._index === this._fields.length - 1) {
	                    navigationCommands.push(prevFieldCommand);
	                } else {
	                    navigationCommands.push(nextFieldCommand);
	                    navigationCommands.push(prevFieldCommand);
	                }
	            }
	            return currentFieldCommands.concat(navigationCommands);
	        }
	    }, {
	        key: 'getStateToSpeech',
	        value: function getStateToSpeech() {
	            return this.currentField.getStateToSpeech();
	        }
	        /**
	         *
	         * @returns {string}
	         */

	    }, {
	        key: 'taskSpeech',
	        value: function taskSpeech() {
	            var navigation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            var fieldHelp = this.settings.isAdvancedMode() ? this.currentField.helpSpeechAdvanced : this.currentField.helpSpeech;
	            var isMultipleFields = this._fields.length > 1;
	            var itemHint = isMultipleFields && navigation && !this.settings.isAdvancedMode() ? _strings2.default.commands.FIELD_NAVIGATION_HINT : '';
	            return (this.currentField.taskSpeech + ' ' + fieldHelp + ' ' + itemHint).trim();
	        }
	    }, {
	        key: 'readTask',
	        value: function readTask() {
	            var preSpeech = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	            var postSpeech = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	            if (!this.hasInitialAlreadyRead) {
	                preSpeech += ' ' + this.initialSpeech;
	            }
	            this.commandService.execute(_strings2.default.commands.SAY, preSpeech + this.taskSpeech() + this.getStateToSpeech() + _strings2.default.messages.SPEAK);
	            this.hasInitialAlreadyRead = true;
	        }
	    }, {
	        key: 'currentAnswerSpeech',
	        get: function get() {
	            var _this7 = this;

	            if (this.isAnswerEmpty()) {
	                return _strings2.default.messages.EMPTY_ANSWER;
	            } else {
	                var answerSpeech = _strings2.default.messages.ANSWER_IS + ' ' + this.getStateToSpeech();
	                if (!this.settings.isAdvancedMode()) {
	                    answerSpeech = answerSpeech + ' ' + (this._fields.length > 1 ? _strings2.default.commands.FIELD_NAVIGATION_HINT : '') + ' ' + _strings2.default.messages.SUBMIT_HINT;
	                } else {
	                    (function () {
	                        var fieldCommands = '';
	                        _this7.currentField.getCommands().forEach(function (command) {
	                            return fieldCommands = fieldCommands + ' ' + command.helpSpeech;
	                        });
	                        answerSpeech = answerSpeech + ' ' + fieldCommands;
	                    })();
	                }
	                return answerSpeech;
	            }
	        }
	    }, {
	        key: 'initialSpeech',
	        get: function get() {
	            return _controllerUtils2.default.getElementSpeech(this.domElement) || _controllerUtils2.default.getElementDisplayText(this.domElement, _strings2.default.selectors.NAMESPACE);
	        }
	    }, {
	        key: 'currentField',
	        get: function get() {
	            return this._fields[this._index];
	        }
	    }], [{
	        key: 'CONTEXT',
	        get: function get() {
	            return 'common';
	        }
	    }]);

	    return Item;
	}(_asyncInitialized2.default);

	exports.default = Item;
	;
	module.exports = exports['default'];

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _item = __webpack_require__(81);

	var _item2 = _interopRequireDefault(_item);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ITEM_CLASS = 'covalent-item';
	var ITEM_CLASS_PREFIX = ITEM_CLASS + '-';

	var FIELD_SELECTOR = '.ci-input';
	var FITB_MC_CHECKBOX_SELECTOR = '.ci-checkbox-group';
	var FITB_MC_RADIO_SELECTOR = '.ci-radio-group';
	var FITB_DD_SELECTOR = 'select' + FIELD_SELECTOR;
	var FITB_TEXT_SELECTOR = '.ci-text, ' + FIELD_SELECTOR + '[type="text"], .ci-mathml-mathml';

	var GRADE_ELEMENT_SELECTOR = '.ci-grade';
	var SUBMIT_BUTTON_SELECTOR = '.ci-submit input';

	var FIELD_MARK_CLASS = 'cg-vc-marked-field-container';

	var handlers = {
	    FITB_HANDLER: 'fitb',
	    PLUGIN_HANDLER: 'plugin'
	};

	/**
	 *
	 * @param {Array.<Node>} elements
	 * @returns {Node}
	 */
	function findOverallParent(elements) {
	    elements = elements.map(function (element) {
	        var parents = [];
	        do {
	            var _parent = parents.length ? parents[0].parentNode : element.parentNode;
	            parents.unshift(_parent);
	        } while (parents[0].parentNode);
	        return {
	            element: element,
	            parents: parents
	        };
	    });

	    var commonParent;
	    for (var i = 0; i < elements[0].parents.length; i++) {
	        var parent = elements[0].parents[i];
	        var everyHasThisParent = elements.every(function (a) {
	            return a.parents[i] === parent;
	        });
	        if (everyHasThisParent) {
	            commonParent = parent;
	        } else {
	            break;
	        }
	    }
	    return commonParent;
	}

	var CxpItem = function (_Item) {
	    _inherits(CxpItem, _Item);

	    function CxpItem() {
	        _classCallCheck(this, CxpItem);

	        return _possibleConstructorReturn(this, (CxpItem.__proto__ || Object.getPrototypeOf(CxpItem)).apply(this, arguments));
	    }

	    _createClass(CxpItem, [{
	        key: '_addEventsEmission',


	        /** @inheritdoc */
	        value: function _addEventsEmission() {
	            var _this2 = this;

	            this.submitButton.addEventListener('click', function () {
	                _this2.emit(_itemEvent2.default.SUBMIT);
	            });
	            //todo: MutationObserver works only in modern browsers - need support older versions.
	            var submitObserver = new MutationObserver(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    // emit after receiving grading result
	                    if (mutation.type === 'attributes' && mutation.attributeName === 'value' && _this2.gradeElement.getAttribute('value') != null) {
	                        var response = JSON.parse(_this2.gradeElement.getAttribute('value'));
	                        if (typeof response.score != 'undefined') {
	                            _this2.emit(_itemEvent2.default.RESPONSE_RECEIVED, response);
	                        }
	                        //todo: emit Submit
	                    }
	                });
	            });
	            submitObserver.observe(this.gradeElement, { attributes: true });
	        }

	        /** @inheritdoc */

	    }, {
	        key: '_initHook',
	        value: function _initHook() {
	            _get(CxpItem.prototype.__proto__ || Object.getPrototypeOf(CxpItem.prototype), '_initHook', this).call(this);

	            this.gradeElement = this.domElement.querySelector(GRADE_ELEMENT_SELECTOR);
	            this.submitButton = this.domElement.querySelector(SUBMIT_BUTTON_SELECTOR);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'isSubmitted',
	        value: function isSubmitted() {
	            var grade = JSON.parse(this.gradeElement.getAttribute('value'));
	            return typeof grade.properties.submitted !== 'undefined' && grade.properties.submitted[0] === 'true';
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'submit',
	        value: function submit() {
	            var clickEvent = document.createEvent('MouseEvents');
	            clickEvent.initEvent('click', true, true);
	            this.submitButton.dispatchEvent(clickEvent);
	        }
	    }], [{
	        key: '_getHandler',


	        /**
	         *
	         * @param {Element} domElement
	         * @returns {string}
	         * @private
	         */
	        value: function _getHandler(domElement) {
	            if (domElement.matches('.' + ITEM_CLASS_PREFIX + handlers.FITB_HANDLER + ', .' + ITEM_CLASS_PREFIX + handlers.FITB_HANDLER + ' *')) {
	                return handlers.FITB_HANDLER;
	            } else if (domElement.matches('.' + ITEM_CLASS_PREFIX + handlers.PLUGIN_HANDLER + ', .' + ITEM_CLASS_PREFIX + handlers.PLUGIN_HANDLER + ' *')) {
	                return handlers.PLUGIN_HANDLER;
	            } else {
	                throw new Error(this.name + '._getHandler: unsupported item handler.');
	            }
	        }

	        /**
	         * @param {Element} domElement
	         * @returns {number}
	         * @private
	         */

	    }, {
	        key: '_getNumberOfFields',
	        value: function _getNumberOfFields(domElement) {
	            return this._getFieldsMap(domElement).size;
	        }

	        /**
	         *
	         * @param {Element} domElement
	         * @returns {Map.<Element | Array.<Element>>}
	         * @private
	         */

	    }, {
	        key: '_getFieldsMap',
	        value: function _getFieldsMap(domElement) {
	            var fields = new Map();
	            if (!(domElement instanceof Element)) return fields;
	            var inputs = domElement.querySelectorAll(FIELD_SELECTOR + '[name]');
	            for (var i = 0; i < inputs.length; i++) {
	                var name = inputs[i].getAttribute('name');
	                if (fields.get(name)) {
	                    var field = fields.get(name);
	                    if (!Array.isArray(field)) {
	                        field = [field];
	                        fields.set(name, field);
	                    }
	                    field.push(inputs[i]);
	                } else {
	                    fields.set(name, inputs[i]);
	                }
	            }

	            return fields;
	        }

	        /**
	         *
	         * @param {Node} node
	         * @returns {boolean}
	         * @private
	         */

	    }, {
	        key: '_isUnit',
	        value: function _isUnit(node) {
	            return node.nodeName === '#text' && node.textContent.trim() || node instanceof Element && !node.matches('.ci-rejoinder-detail-wrapper, br, hr, script');
	        }
	    }, {
	        key: '_unwrapUntilFieldLevel',
	        value: function _unwrapUntilFieldLevel(element) {
	            var elements = [];
	            for (var i = 0; i < element.childNodes.length; i++) {
	                var childNode = element.childNodes[i];
	                if (this.isField(childNode)) {
	                    elements.push(childNode);
	                } else if (this._getNumberOfFields(childNode)) {
	                    elements.splice.apply(elements, [elements.length, 0].concat(_toConsumableArray(this._unwrapUntilFieldLevel(childNode))));
	                    if (_controllerUtils2.default.breaksLine(childNode)) {
	                        // add line break to do not lost it when sections will be split
	                        elements.push(document.createElement('br'));
	                    }
	                } else {
	                    elements.push(childNode);
	                }
	            }
	            return elements;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'determineFieldType',
	        value: function determineFieldType(domElement) {
	            if (domElement.matches(FITB_MC_RADIO_SELECTOR) || domElement.matches(FITB_MC_CHECKBOX_SELECTOR) || domElement.querySelector('input[type="radio"], input[type="checkbox"]')) {
	                return 'mc';
	            } else if (domElement.matches(FITB_DD_SELECTOR)) {
	                return 'dropdown';
	            } else if (domElement.matches(FITB_TEXT_SELECTOR) || domElement.querySelector(FITB_TEXT_SELECTOR)) {
	                return 'fitb';
	            }

	            throw new Error(this.name + '.determineFieldType: unknown item type.');
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'findItemElement',
	        value: function findItemElement(domElement) {
	            return domElement.matches('.' + ITEM_CLASS) ? domElement : domElement.querySelector('.' + ITEM_CLASS);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getSectionElements',
	        value: function getSectionElements(domElement) {
	            var _this3 = this;

	            var contentElement;
	            var itemHandler = this._getHandler(domElement);
	            switch (itemHandler) {
	                case handlers.FITB_HANDLER:
	                    contentElement = domElement.querySelector('.ci-question');
	                    break;
	                case handlers.PLUGIN_HANDLER:
	                    contentElement = domElement.querySelector('.ci-item.mtqengine');
	                    var fieldsMap = this._getFieldsMap(domElement);
	                    fieldsMap.forEach(function (field) {
	                        if (Array.isArray(field)) {
	                            // mark overall container (which contains inputs with the same name) as field
	                            var fieldContainer = findOverallParent(field);
	                            fieldContainer.classList.add(FIELD_MARK_CLASS);
	                        } else if (field.matches('.mtqengine-symbolic')) {
	                            field.parentNode.classList.add(FIELD_MARK_CLASS);
	                        }
	                        //todo: add for other fields
	                    });
	                    break;
	                default:
	                    throw new Error(this.name + '.getSectionElements: unsupported item handler type "' + itemHandler + '".');
	            }

	            var units = this._unwrapUntilFieldLevel(contentElement);
	            var isMultipleFields = this._getNumberOfFields(contentElement) > 1;

	            var sections = [];
	            var section = [];
	            sections.push(section);
	            var hasField = false;
	            for (var i = 0; i < units.length; i++) {
	                var unitElement = units[i];
	                section.push(unitElement);
	                if (isMultipleFields) {
	                    if (this.isField(unitElement)) {
	                        hasField = true;
	                    }

	                    if (_controllerUtils2.default.breaksLine(unitElement) && hasField) {
	                        section = [];
	                        sections.push(section);
	                        hasField = false;
	                    }
	                }
	            }
	            //if last section has not field, all units should be moved to penultimate
	            if (sections.length > 1 && !hasField) {
	                var _sections;

	                (_sections = sections[sections.length - 2]).splice.apply(_sections, [sections[sections.length - 2].length, 0].concat(_toConsumableArray(sections[sections.length - 1])));
	                sections.splice(-1);
	            }
	            // remove not unit elements
	            sections.forEach(function (section) {
	                for (var i = section.length - 1; i >= 0; i--) {
	                    if (!_this3._isUnit(section[i])) {
	                        section.splice(i, 1);
	                    }
	                }
	            });

	            return sections;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'isField',
	        value: function isField(domElement) {
	            if (!(domElement instanceof Element)) return false;

	            return domElement.matches(FIELD_SELECTOR + '[name]') || domElement.matches('.' + FIELD_MARK_CLASS) || domElement.matches(FITB_MC_RADIO_SELECTOR) || domElement.matches(FITB_MC_CHECKBOX_SELECTOR);
	        }
	    }, {
	        key: 'CONTEXT',
	        get: function get() {
	            return 'cxp';
	        }
	    }]);

	    return CxpItem;
	}(_item2.default);

	exports.default = CxpItem;
	;
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _asyncInitialized = __webpack_require__(82);

	var _asyncInitialized2 = _interopRequireDefault(_asyncInitialized);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	var _command = __webpack_require__(79);

	var _command2 = _interopRequireDefault(_command);

	var _commonUtils = __webpack_require__(22);

	var _commonUtils2 = _interopRequireDefault(_commonUtils);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _cgMet = __webpack_require__(23);

	var _cgMet2 = _interopRequireDefault(_cgMet);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ITEM_CLASS = 'testDeliveryContent';
	var MATH_CLASS = 'MathJax';
	var MATH_ATTR = 'data-mathml';
	var STEPS_ID = 'past-steps';
	var FIELD_CLASS = 'field';
	var TITLE_SELECTOR = '.formquestion';
	var SUBMIT_BUTTON_SELECTOR = '#nextQuestionButton';
	var CHOICE_SELECTOR = 'tr';

	function isEmptyMathML(mathML) {
	  //todo: refactor this
	  return !mathML || mathML == '<math xmlns="http://www.w3.org/1998/Math/MathML" />' || '<math xmlns="http://www.w3.org/1998/Math/MathML" />';
	}

	var SwItem = function (_AsyncInitialized) {
	  _inherits(SwItem, _AsyncInitialized);

	  function SwItem(domElement, settings, commandService) {
	    _classCallCheck(this, SwItem);

	    var _this = _possibleConstructorReturn(this, (SwItem.__proto__ || Object.getPrototypeOf(SwItem)).call(this));

	    _this.settings = (0, _merge2.default)(true, {}, _this.constructor.DEFAULT_SETTINGS, settings);
	    _this.commandService = commandService;
	    _this.domElement = _this.constructor.findItemElement(domElement);
	    _this.fieldElement = _this.domElement.querySelector('.' + FIELD_CLASS);
	    _this.hasInitialAlreadyRead = false;
	    _this._initHook();
	    _this.buildModel();
	    return _this;
	  }

	  _createClass(SwItem, [{
	    key: 'isSubmitted',
	    value: function isSubmitted() {
	      return false;
	    }
	  }, {
	    key: 'isAnswerEmpty',
	    value: function isAnswerEmpty() {
	      var answerEmpty = true;
	      var choices = this._model.choices;
	      for (var i = 0; i < choices.length; i++) {
	        var choice = choices[i];
	        if (choice.element.checked) answerEmpty = false;
	      }
	      return answerEmpty;
	    }
	  }, {
	    key: 'isAnswerInputAvailable',
	    value: function isAnswerInputAvailable() {
	      return this.isAnswerEmpty();
	    }
	  }, {
	    key: 'getAnswerAlternatives',
	    value: function getAnswerAlternatives() {
	      return [];
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {}
	  }, {
	    key: 'clear',
	    value: function clear() {
	      for (var i = 0; i < choices.length; i++) {
	        var choice = choices[i];
	        choice.element.checke = false;
	      }
	    }
	  }, {
	    key: 'setStateByRecognized',
	    value: function setStateByRecognized(recognised) {
	      console.log(recognised);
	      var choices = this._model.choices;
	      for (var i = 0; i < choices.length; i++) {
	        var choice = choices[i];
	        console.log(recognised, choice.valueString);
	        choice.element.checked = recognised.indexOf(choice.valueString) != -1;
	      }
	    }

	    /** @inheritdoc */

	  }, {
	    key: '_initHook',
	    value: function _initHook() {
	      var _this2 = this;

	      this.submitButton = this.domElement.querySelector(SUBMIT_BUTTON_SELECTOR);
	      console.log();
	      this.submitButton.addEventListener('click', function () {
	        _this2.emit(_itemEvent2.default.SUBMIT);
	      });
	    }

	    /** @inheritdoc */

	  }, {
	    key: 'submit',
	    value: function submit() {
	      this.submitButton.click();
	      this.emit(_itemEvent2.default.SUBMIT);
	    }
	  }, {
	    key: 'buildModel',
	    value: function buildModel() {
	      if (this._model) {
	        return this._model;
	      }

	      var domElement = this.domElement;
	      var model = {
	        subtype: 'mc',
	        choices: []
	      };

	      var cElements = this.domElement.querySelectorAll(CHOICE_SELECTOR);
	      for (var i = 0; i < cElements.length; i++) {
	        var labelElement = cElements[i].querySelector('.inputLabel');
	        var inputElement = cElements[i].querySelector('.checkbox');
	        var choice = {
	          display: _controllerUtils2.default.getElementText(labelElement),
	          value: inputElement.value,
	          valueString: inputElement.getAttribute('valueString'),
	          element: inputElement
	        };
	        choice.speech = inputElement.getAttribute('speech') || choice.display;
	        var alts = inputElement.getAttribute('alternatives');
	        choice.alternatives = alts ? alts.split(',') : [];
	        model.choices.push(choice);
	      }

	      console.log(model);
	      this._model = model;
	      return this._model;
	    }
	  }, {
	    key: 'readWhenStateChange',
	    value: function readWhenStateChange() {
	      var self = this;
	      var resultIconSelector = '.message-box > .message-icon-box > .message-icon:not(.ng-hide)';
	      processAnswer();
	      function processAnswer() {
	        var result = self.domElement.querySelector(resultIconSelector);
	        if (result != null) {
	          var resultClass = self.gradePanel.querySelector(resultIconSelector + ' > div').className;
	          var score = 0,
	              _result = '';
	          switch (resultClass) {
	            case 'step-info-valid-icon':
	              score = 0.5;
	              _result = self.getFeedbackSpeech() + self.getQuestionSpeech() + self.getStepsSpeech();
	              break;
	            case 'step-info-hint-icon':
	              score = 0.5;
	              _result = self.getFeedbackSpeech();
	              break;
	            case 'step-info-invalid-icon':
	              score = 0;
	              _result = self.getFeedbackSpeech() + self.getQuestionSpeech();
	              break;
	            case 'step-info-success-icon':
	              score = 0;
	              _result = self.getFeedbackSpeech();
	              break;
	          }
	          self.emit(_itemEvent2.default.RESPONSE_RECEIVED, {
	            score: score,
	            feedback: _result
	          });
	        } else {
	          setTimeout(processAnswer, 100);
	        }
	      }
	    }
	  }, {
	    key: '_getReady',
	    value: function _getReady() {
	      return Promise.resolve();
	    }
	  }, {
	    key: '_registerCommands',
	    value: function _registerCommands() {
	      var _this3 = this;

	      var commands = this.getCommands();
	      commands.forEach(function (command) {
	        _this3.commandService.register(command);
	      });
	    }
	    //redefined methods

	  }, {
	    key: 'getCommands',
	    value: function getCommands() {
	      var _this4 = this;

	      if (!this._commands) {
	        this._commands = [];

	        this._commands.push(new _command2.default("show hint", function () {
	          var hintBtn = _this4.gradePanel.querySelector('.getHintButton').querySelector('.step-gethint-box');
	          if (window.Simulator) Simulator.gestures.tap(hintBtn);
	        }, 'to show hint say "Vicki show hint"', 100));
	      }
	      return this._commands;
	    }
	  }, {
	    key: 'getFeedbackSpeech',
	    value: function getFeedbackSpeech() {
	      return '';
	      //return this.domElement.querySelector('.message-box').querySelector('.message-text > span').innerHTML;
	    }
	  }, {
	    key: 'getQuestionSpeech',
	    value: function getQuestionSpeech() {
	      var titleSpeech = '';
	      var pars = this.domElement.querySelectorAll(TITLE_SELECTOR);
	      titleSpeech = pars[0].innerHTML + ' ';
	      return titleSpeech;
	    }
	  }, {
	    key: 'readTask',
	    value: function readTask() {
	      var preSpeech = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var postSpeech = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	      if (!this.hasInitialAlreadyRead) {
	        preSpeech += ' ' + this.initialSpeech;
	      }
	      this.commandService.execute(_strings2.default.commands.SAY, preSpeech + this.getQuestionSpeech() + this.getFeedbackSpeech() + this.currentAnswerSpeech);
	      this.hasInitialAlreadyRead = true;
	    }
	  }, {
	    key: 'getStateToSpeech',
	    value: function getStateToSpeech() {
	      return '';
	    }
	  }, {
	    key: 'currentAnswerSpeech',
	    get: function get() {
	      if (this.isAnswerEmpty()) {
	        return _strings2.default.messages.EMPTY_ANSWER;
	      } else {
	        var answerSpeech = _strings2.default.messages.ANSWER_IS + ' ' + this.getStateToSpeech();
	        if (this.settings.isAdvancedMode()) {
	          answerSpeech = answerSpeech + ' ' + _strings2.default.messages.CLEAR_HINT_SHORT;
	        } else {
	          answerSpeech = answerSpeech + ' ' + _strings2.default.messages.SUBMIT_HINT + ' ' + _strings2.default.messages.CLEAR_HINT;
	        }
	        console.log(this);
	        return answerSpeech;
	      }
	    }
	  }, {
	    key: 'initialSpeech',
	    get: function get() {
	      return 'There is multiple-choice question ';
	    }
	  }], [{
	    key: 'findItemElement',
	    value: function findItemElement(domElement) {
	      return domElement.matches('.' + ITEM_CLASS) ? domElement : domElement.querySelector('.' + ITEM_CLASS);
	    }
	  }, {
	    key: 'CONTEXT',
	    get: function get() {
	      return 'dc';
	    }
	  }]);

	  return SwItem;
	}(_asyncInitialized2.default);

	exports.default = SwItem;
	;
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _asyncInitialized = __webpack_require__(82);

	var _asyncInitialized2 = _interopRequireDefault(_asyncInitialized);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	var _command = __webpack_require__(79);

	var _command2 = _interopRequireDefault(_command);

	var _commonUtils = __webpack_require__(22);

	var _commonUtils2 = _interopRequireDefault(_commonUtils);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _cgMet = __webpack_require__(23);

	var _cgMet2 = _interopRequireDefault(_cgMet);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ITEM_CLASS = 'container';
	var MATH_CLASS = 'MathJax';
	var MATH_ATTR = 'data-mathml';
	var STEPS_ID = 'past-steps';
	var FIELD_CLASS = 'field';
	var TITLE_SELECTOR = '.formquestion';
	var SUBMIT_BUTTON_SELECTOR = '.btn-success';
	var CHOICE_SELECTOR = 'tr';

	function isEmptyMathML(mathML) {
	  //todo: refactor this
	  return !mathML || mathML == '<math xmlns="http://www.w3.org/1998/Math/MathML" />' || '<math xmlns="http://www.w3.org/1998/Math/MathML" />';
	}

	var SwItem = function (_AsyncInitialized) {
	  _inherits(SwItem, _AsyncInitialized);

	  function SwItem(domElement, settings, commandService) {
	    _classCallCheck(this, SwItem);

	    var _this = _possibleConstructorReturn(this, (SwItem.__proto__ || Object.getPrototypeOf(SwItem)).call(this));

	    _this.settings = (0, _merge2.default)(true, {}, _this.constructor.DEFAULT_SETTINGS, settings);
	    _this.commandService = commandService;
	    _this.domElement = _this.constructor.findItemElement(domElement);
	    //this.fieldElement = this.domElement.querySelector(`.${FIELD_CLASS}`);
	    _this.hasInitialAlreadyRead = false;
	    _this._initHook();
	    _this.buildModel();
	    return _this;
	  }

	  _createClass(SwItem, [{
	    key: 'isSubmitted',
	    value: function isSubmitted() {
	      return false;
	    }
	  }, {
	    key: 'isAnswerEmpty',
	    value: function isAnswerEmpty() {
	      var answerEmpty = true;
	      var choices = this._model.choices;
	      for (var i = 0; i < choices.length; i++) {
	        var choice = choices[i];
	        if (choice.element.checked) answerEmpty = false;
	      }
	      return answerEmpty;
	    }
	  }, {
	    key: 'isAnswerInputAvailable',
	    value: function isAnswerInputAvailable() {
	      return this.isAnswerEmpty();
	    }
	  }, {
	    key: 'getAnswerAlternatives',
	    value: function getAnswerAlternatives() {
	      return [];
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {}
	  }, {
	    key: 'clear',
	    value: function clear() {
	      for (var i = 0; i < choices.length; i++) {
	        var choice = choices[i];
	        choice.element.checke = false;
	      }
	    }
	  }, {
	    key: 'setStateByRecognized',
	    value: function setStateByRecognized(recognised) {
	      console.log(recognised);
	      var choices = this._model.choices;
	      for (var i = 0; i < choices.length; i++) {
	        var choice = choices[i];
	        console.log(recognised, choice.valueString);
	        choice.element.checked = recognised.indexOf(choice.valueString) != -1;
	      }
	    }

	    /** @inheritdoc */

	  }, {
	    key: '_initHook',
	    value: function _initHook() {
	      var _this2 = this;

	      this.submitButton = this.domElement.querySelector(SUBMIT_BUTTON_SELECTOR);
	      console.log();
	      this.submitButton.addEventListener('click', function () {
	        _this2.emit(_itemEvent2.default.SUBMIT);
	      });
	    }

	    /** @inheritdoc */

	  }, {
	    key: 'submit',
	    value: function submit() {
	      this.submitButton.click();
	      this.emit(_itemEvent2.default.SUBMIT);
	    }
	  }, {
	    key: 'buildModel',
	    value: function buildModel() {
	      if (this._model) {
	        return this._model;
	      }

	      var domElement = this.domElement;
	      var model = {
	        subtype: 'mc',
	        choices: []
	      };

	      var cElements = this.domElement.querySelectorAll(CHOICE_SELECTOR);
	      for (var i = 0; i < cElements.length; i++) {
	        var labelElement = cElements[i].querySelector('.inputLabel');
	        var inputElement = cElements[i].querySelector('.checkbox');
	        var choice = {
	          display: _controllerUtils2.default.getElementText(labelElement),
	          value: inputElement.value,
	          valueString: inputElement.getAttribute('valueString'),
	          element: inputElement
	        };
	        choice.speech = inputElement.getAttribute('speech') || choice.display;
	        var alts = inputElement.getAttribute('alternatives');
	        choice.alternatives = alts ? alts.split(',') : [];
	        model.choices.push(choice);
	      }

	      console.log(model);
	      this._model = model;
	      return this._model;
	    }
	  }, {
	    key: 'readWhenStateChange',
	    value: function readWhenStateChange() {
	      var self = this;
	      var resultIconSelector = '.message-box > .message-icon-box > .message-icon:not(.ng-hide)';
	      processAnswer();
	      function processAnswer() {
	        var result = self.domElement.querySelector(resultIconSelector);
	        if (result != null) {
	          var resultClass = self.gradePanel.querySelector(resultIconSelector + ' > div').className;
	          var score = 0,
	              _result = '';
	          switch (resultClass) {
	            case 'step-info-valid-icon':
	              score = 0.5;
	              _result = self.getFeedbackSpeech() + self.getQuestionSpeech() + self.getStepsSpeech();
	              break;
	            case 'step-info-hint-icon':
	              score = 0.5;
	              _result = self.getFeedbackSpeech();
	              break;
	            case 'step-info-invalid-icon':
	              score = 0;
	              _result = self.getFeedbackSpeech() + self.getQuestionSpeech();
	              break;
	            case 'step-info-success-icon':
	              score = 0;
	              _result = self.getFeedbackSpeech();
	              break;
	          }
	          self.emit(_itemEvent2.default.RESPONSE_RECEIVED, {
	            score: score,
	            feedback: _result
	          });
	        } else {
	          setTimeout(processAnswer, 100);
	        }
	      }
	    }
	  }, {
	    key: '_getReady',
	    value: function _getReady() {
	      return Promise.resolve();
	    }
	  }, {
	    key: '_registerCommands',
	    value: function _registerCommands() {
	      var _this3 = this;

	      var commands = this.getCommands();
	      commands.forEach(function (command) {
	        _this3.commandService.register(command);
	      });
	    }
	    //redefined methods

	  }, {
	    key: 'getCommands',
	    value: function getCommands() {
	      var _this4 = this;

	      if (!this._commands) {
	        this._commands = [];

	        this._commands.push(new _command2.default("show hint", function () {
	          var hintBtn = _this4.gradePanel.querySelector('.getHintButton').querySelector('.step-gethint-box');
	          if (window.Simulator) Simulator.gestures.tap(hintBtn);
	        }, 'to show hint say "Vicki show hint"', 100));
	      }
	      return this._commands;
	    }
	  }, {
	    key: 'getFeedbackSpeech',
	    value: function getFeedbackSpeech() {
	      return '';
	      //return this.domElement.querySelector('.message-box').querySelector('.message-text > span').innerHTML;
	    }
	  }, {
	    key: 'getQuestionSpeech',
	    value: function getQuestionSpeech() {
	      var titleSpeech = '';
	      var pars = this.domElement.querySelectorAll(TITLE_SELECTOR);
	      titleSpeech = pars[0].innerHTML + ' ';
	      return titleSpeech;
	    }
	  }, {
	    key: 'readTask',
	    value: function readTask() {
	      var preSpeech = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var postSpeech = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	      if (!this.hasInitialAlreadyRead) {
	        preSpeech += ' ' + this.initialSpeech;
	      }
	      this.commandService.execute(_strings2.default.commands.SAY, preSpeech + this.getQuestionSpeech() + this.getFeedbackSpeech() + this.currentAnswerSpeech);
	      this.hasInitialAlreadyRead = true;
	    }
	  }, {
	    key: 'getStateToSpeech',
	    value: function getStateToSpeech() {
	      return '';
	    }
	  }, {
	    key: 'currentAnswerSpeech',
	    get: function get() {
	      if (this.isAnswerEmpty()) {
	        return _strings2.default.messages.EMPTY_ANSWER;
	      } else {
	        var answerSpeech = _strings2.default.messages.ANSWER_IS + ' ' + this.getStateToSpeech();
	        if (this.settings.isAdvancedMode()) {
	          answerSpeech = answerSpeech + ' ' + _strings2.default.messages.CLEAR_HINT_SHORT;
	        } else {
	          answerSpeech = answerSpeech + ' ' + _strings2.default.messages.SUBMIT_HINT + ' ' + _strings2.default.messages.CLEAR_HINT;
	        }
	        console.log(this);
	        return answerSpeech;
	      }
	    }
	  }, {
	    key: 'initialSpeech',
	    get: function get() {
	      return 'There is multiple-choice question ';
	    }
	  }], [{
	    key: 'findItemElement',
	    value: function findItemElement(domElement) {
	      return domElement.matches('.' + ITEM_CLASS) ? domElement : domElement.querySelector('.' + ITEM_CLASS);
	    }
	  }, {
	    key: 'CONTEXT',
	    get: function get() {
	      return 'dc';
	    }
	  }]);

	  return SwItem;
	}(_asyncInitialized2.default);

	exports.default = SwItem;
	;
	module.exports = exports['default'];

/***/ }
])
});
;
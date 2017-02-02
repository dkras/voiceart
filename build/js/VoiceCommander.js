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
		exports["VoiceCommander"] = factory();
	else
		root["VoiceArt"] = root["VoiceArt"] || {}, root["VoiceArt"]["VoiceCommander"] = factory();
})(this, function() {
return webpackJsonpVoiceArt__name_([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(61);


/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(3);

	__webpack_require__(62);

	__webpack_require__(63);

	var _events = __webpack_require__(10);

	var _events2 = _interopRequireDefault(_events);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	var _speechSynthesisService = __webpack_require__(66);

	var _speechSynthesisService2 = _interopRequireDefault(_speechSynthesisService);

	var _speechRecognitionService = __webpack_require__(70);

	var _speechRecognitionService2 = _interopRequireDefault(_speechRecognitionService);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _doubleMetaphone = __webpack_require__(76);

	var _doubleMetaphone2 = _interopRequireDefault(_doubleMetaphone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	window.dm = _doubleMetaphone2.default;

	var SETTINGS_KEY = 'cg-vc-settings';

	var VoiceCommander = function (_EventEmitter) {
	    _inherits(VoiceCommander, _EventEmitter);

	    _createClass(VoiceCommander, null, [{
	        key: 'DEFAULT_SETTINGS',


	        /**
	         * @typedef {Object} CommanderSettings - Voice-controller settings
	         * @property {function} ready=noop - Defines Voice-controller ready callback
	         * @property {number} speechSpeed=1 - Defines the Voice Controller speech speed
	         * @property {string} lang='en' - Recognition language
	         * @property {alternative[]} alternatives - recognition phrase alternatives array
	         */

	        get: function get() {
	            return {
	                alternatives: [],
	                ready: function ready() {},
	                speechSpeed: 1,
	                useBrowser: true,
	                lang: 'en-US'
	            };
	        }

	        /**
	         * States
	         * @returns {Object}
	         * @property {string} DISABLED
	         * @property {string} PENDING
	         * @property {string} LISTENING
	         * @property {string} SPEAKING
	         */

	    }, {
	        key: 'STATES',
	        get: function get() {
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

	    }]);

	    function VoiceCommander(settings) {
	        _classCallCheck(this, VoiceCommander);

	        var _this = _possibleConstructorReturn(this, (VoiceCommander.__proto__ || Object.getPrototypeOf(VoiceCommander)).call(this));

	        _this.settings = (0, _merge2.default)(true, _this.constructor.DEFAULT_SETTINGS, settings);
	        //this.settings = merge(true, this.defaultSettings, this._getSettingsFromStore());
	        _this._initGlobalListener();
	        return _this;
	    }

	    /**
	     *
	     * Accessors to the Voice-Controller state
	     * @type {string}
	     */


	    _createClass(VoiceCommander, [{
	        key: '_getReady',
	        value: function _getReady() {
	            if (this._ready) return this._ready;

	            return Promise.all([this.item._getReady()]);
	        }

	        /**
	         *
	         * Method for destroy Voice-Controller
	         */

	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            //todo:
	            this.stop();
	            this.destroyed = true;
	        }

	        /**
	         * Help
	         */

	    }, {
	        key: 'help',
	        value: function help() {}

	        /**
	         * Skip current speech
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
	         * Start read task
	         */

	    }, {
	        key: 'start',
	        value: function start() {}

	        /**
	         * Stops current recognition and speech and change state according [pending] argument.
	         * @param {boolean} [pending=false] - If true, [state] property will be set to PENDING, else to DISABLED
	         */

	    }, {
	        key: 'stop',
	        value: function stop() {
	            var pending = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            this.state = this.constructor.STATES.DISABLED;
	            _speechRecognitionService2.default.stop();
	            _speechSynthesisService2.default.stop();
	        }

	        /**
	         * Speak [text] argument.
	         * @param {boolean} text - Text
	         */

	    }, {
	        key: 'speak',
	        value: function speak(text) {
	            var _this2 = this;

	            this.state = this.constructor.STATES.SPEAKING;
	            return _speechSynthesisService2.default.synthesize(text, { rate: this.settings.speechSpeed }).then(function () {
	                _this2.state = _this2.constructor.STATES.LISTENING;
	            });
	        }
	    }, {
	        key: '_initGlobalListener',
	        value: function _initGlobalListener() {
	            var self = this;
	            this._grammars = [];
	            var commandGrammar = _speechRecognitionService2.default.createGrammar('command', self.settings.customCommands);
	            this._grammars.push(commandGrammar);
	            this.listen();
	        }
	        /**
	         * Start command listen for subsequent recognition and execution if possible
	         */

	    }, {
	        key: 'listen',
	        value: function listen() {
	            var self = this;
	            self.state = self.constructor.STATES.LISTENING;
	            _speechRecognitionService2.default.listen({

	                useBrowser: self.settings.useBrowser,
	                grammars: self._grammars,
	                lang: self.settings.lang,

	                onresult: function onresult(event) {
	                    var results = event.results[event.results.length - 1];
	                    var words = results[0].transcript;
	                    if (results.isFinal) {
	                        // replace predefined phrases from settings
	                        for (var j = 0; j < self.settings.alternatives.length; j++) {
	                            var phrase = self.settings.alternatives[j].phrase;
	                            var altRegExp = new RegExp('\\b(' + self.settings.alternatives[j].alts.join('|') + ')\\b', 'ig');
	                            words = words.replace(altRegExp, phrase);
	                        }
	                        console.log('onresult: ', words);
	                        self.settings.customCommands.some(function (cmd) {
	                            return (0, _doubleMetaphone2.default)(words).some(function (word) {
	                                if (new RegExp('(' + (0, _doubleMetaphone2.default)(cmd).join('|') + ')', 'ig').test(word)) {
	                                    self.emit('command', cmd);
	                                    return true;
	                                } else return false;
	                            });
	                        });
	                    }
	                },
	                onend: function onend() {
	                    if (self.state === self.constructor.STATES.LISTENING) {
	                        self.listen();
	                    }
	                }
	            });
	        }

	        /**
	         * Reset controller to initial state.
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
	        key: 'state',
	        get: function get() {
	            if (!this._state) this._state = this.constructor.STATES.DISABLED;
	            return this._state;
	        }

	        //noinspection JSAnnotator
	        ,
	        set: function set(val) {
	            this._state = val;
	            if (!this.controlPanel) return;
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
	            } else {
	                this.ariaHidden = true;
	            }
	        }
	    }]);

	    return VoiceCommander;
	}(_events2.default);

	exports.default = VoiceCommander;
	module.exports = exports['default'];

/***/ }

})
});
;
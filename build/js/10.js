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
webpackJsonpVoiceArt__name_([10,3],{

/***/ 89:
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
	 * Base Adapter class from which other Adapters must be inherited.
	 */
	var AbstractFieldAdapter = function (_EventEmitter) {
	    _inherits(AbstractFieldAdapter, _EventEmitter);

	    function AbstractFieldAdapter(domElement) {
	        _classCallCheck(this, AbstractFieldAdapter);

	        var _this = _possibleConstructorReturn(this, (AbstractFieldAdapter.__proto__ || Object.getPrototypeOf(AbstractFieldAdapter)).call(this));

	        _this.domElement = domElement;
	        _this._initHook();
	        _this.model = _this.buildModel();
	        _this.addFocusEmission();
	        return _this;
	    }

	    /**
	     * This method is called in constructor and can be used to define additional properties in descendant classes.
	     * @private
	     */


	    _createClass(AbstractFieldAdapter, [{
	        key: '_initHook',
	        value: function _initHook() {}

	        /**
	         * In this method ItemEvent.FIELD_FOCUSED event should be emitted when it occurred.
	         * Must be implemented for each adapter.
	         */

	    }, {
	        key: 'addFocusEmission',
	        value: function addFocusEmission() {
	            throw new Error(this.constructor.name + '.addFocusEmission: method is not defined.');
	        }

	        /**
	         * Returns field's model.
	         */

	    }, {
	        key: 'buildModel',
	        value: function buildModel() {
	            throw new Error(this.constructor.name + '.buildModel: method is not defined.');
	        }

	        /**
	         * Clears current state.
	         */

	    }, {
	        key: 'clear',
	        value: function clear() {
	            throw new Error(this.constructor.name + '.clear: method is not defined.');
	        }

	        /**
	         * Sets focus to field's element.
	         */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            throw new Error(this.constructor.name + '.focus: method is not defined.');
	        }

	        /**
	         * Returns current field's state.
	         * @returns {*}
	         */

	    }, {
	        key: 'getState',
	        value: function getState() {
	            throw new Error(this.constructor.name + '.getState: method is not defined.');
	        }

	        /**
	         * Sets current field's state.
	         * @param {*} state
	         */

	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            throw new Error(this.constructor.name + '.setState: method is not defined.');
	        }
	    }]);

	    return AbstractFieldAdapter;
	}(_events2.default);

	exports.default = AbstractFieldAdapter;
	;
	module.exports = exports['default'];

/***/ },

/***/ 104:
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

	var _abstractFieldAdapter = __webpack_require__(89);

	var _abstractFieldAdapter2 = _interopRequireDefault(_abstractFieldAdapter);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CHOICE_CLASS = _strings2.default.selectors.NAMESPACE + '-' + _strings2.default.selectors.CHOICE;

	var CommonMcAdapter = function (_AbstractFieldAdapter) {
	    _inherits(CommonMcAdapter, _AbstractFieldAdapter);

	    function CommonMcAdapter() {
	        _classCallCheck(this, CommonMcAdapter);

	        return _possibleConstructorReturn(this, (CommonMcAdapter.__proto__ || Object.getPrototypeOf(CommonMcAdapter)).apply(this, arguments));
	    }

	    _createClass(CommonMcAdapter, [{
	        key: 'addFocusEmission',
	        value: function addFocusEmission() {
	            var _this2 = this;

	            this.model.choices.forEach(function (choice) {
	                choice.element.addEventListener('focus', function () {
	                    _this2.emit(_itemEvent2.default.FIELD_FOCUSED);
	                });
	            });
	        }
	    }, {
	        key: 'buildModel',
	        value: function buildModel() {
	            if (this._model) {
	                return this._model;
	            }

	            var domElement = this.domElement;
	            var subtype = domElement.matches('.' + _strings2.default.selectors.NAMESPACE + '-' + _strings2.default.selectors.MC + '-radio') ? 'radio' : 'checkbox';
	            var model = {
	                subtype: subtype,
	                choices: []
	            };

	            var cElements = domElement.querySelectorAll('.' + CHOICE_CLASS);
	            for (var i = 0; i < cElements.length; i++) {
	                var cElement = cElements[i];
	                var inputElement = cElement.querySelector('input') || cElement;
	                var choice = {
	                    display: _controllerUtils2.default.getElementDisplayText(cElement, CHOICE_CLASS),
	                    value: inputElement.value,
	                    element: inputElement
	                };
	                choice.speech = _controllerUtils2.default.getElementSpeech(cElement) || _controllerUtils2.default.getElementSpeech(choice.element) || choice.display;
	                var alts = cElement.getAttribute('alternatives') || choice.element.getAttribute('alternatives');
	                choice.alternatives = alts ? alts.split(',') : [];

	                model.choices.push(choice);
	            }

	            this._model = model;
	            return this._model;
	        }
	    }, {
	        key: 'focus',
	        value: function focus() {
	            if (this.model.choices.length) {
	                this.model.choices[0].element.focus();
	            }
	        }
	    }, {
	        key: 'getState',
	        value: function getState() {
	            var choices = this.model.choices;
	            var state = [];
	            for (var i = 0; i < choices.length; i++) {
	                var choice = choices[i];
	                if (choice.element.checked) {
	                    state.push(choice.value);
	                }
	            }
	            return this.model.subtype === 'radio' ? state[0] || '' : state;
	        }

	        /**
	         *
	         * @param {Array.<string>|string} state
	         */

	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            if (typeof state === 'string') {
	                state = [state];
	            }

	            var choices = this.model.choices;
	            for (var i = 0; i < choices.length; i++) {
	                var choice = choices[i];
	                choice.element.checked = state.indexOf(choice.value) != -1;
	            }
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            var choices = this.model.choices;
	            for (var i = 0; i < choices.length; i++) {
	                choices[i].element.checked = false;
	            }
	        }
	    }]);

	    return CommonMcAdapter;
	}(_abstractFieldAdapter2.default);

	exports.default = CommonMcAdapter;
	;
	module.exports = exports['default'];

/***/ }

});
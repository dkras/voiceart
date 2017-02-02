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
webpackJsonpVoiceArt__name_([11,3],{

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

/***/ 106:
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

	var _abstractFieldAdapter = __webpack_require__(89);

	var _abstractFieldAdapter2 = _interopRequireDefault(_abstractFieldAdapter);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SELECT_SELECTOR = 'select';
	var OPTION_SELECTOR = SELECT_SELECTOR + ' option[value]:not([value=""])';

	var CxpDropdownAdapter = function (_AbstractFieldAdapter) {
	    _inherits(CxpDropdownAdapter, _AbstractFieldAdapter);

	    function CxpDropdownAdapter() {
	        _classCallCheck(this, CxpDropdownAdapter);

	        return _possibleConstructorReturn(this, (CxpDropdownAdapter.__proto__ || Object.getPrototypeOf(CxpDropdownAdapter)).apply(this, arguments));
	    }

	    _createClass(CxpDropdownAdapter, [{
	        key: '_initHook',


	        /** @inheritdoc */
	        value: function _initHook() {
	            _get(CxpDropdownAdapter.prototype.__proto__ || Object.getPrototypeOf(CxpDropdownAdapter.prototype), '_initHook', this).call(this);
	            this.selectElement = this.domElement.matches(SELECT_SELECTOR) ? this.domElement : this.domElement.querySelector(SELECT_SELECTOR);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'addFocusEmission',
	        value: function addFocusEmission() {
	            var _this2 = this;

	            this.selectElement.addEventListener('focus', function () {
	                _this2.emit(_itemEvent2.default.FIELD_FOCUSED);
	            });
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'buildModel',
	        value: function buildModel() {
	            var model = {
	                options: []
	            };

	            var oElements = this.domElement.querySelectorAll(OPTION_SELECTOR);
	            for (var i = 0; i < oElements.length; i++) {
	                var oElement = oElements[i];
	                var option = {
	                    display: _controllerUtils2.default.getElementText(oElement),
	                    value: oElement.value
	                };
	                option.speech = oElement.getAttribute('speech') || option.display;

	                model.options.push(option);
	            }

	            return model;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.selectElement.value = '';
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            this.selectElement.focus();
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getState',
	        value: function getState() {
	            return this.selectElement.selectedIndex == -1 ? '' : this.selectElement.options[this.selectElement.selectedIndex].getAttribute('value') || '';
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            this.selectElement.value = state;
	        }
	    }]);

	    return CxpDropdownAdapter;
	}(_abstractFieldAdapter2.default);

	exports.default = CxpDropdownAdapter;
	;
	module.exports = exports['default'];

/***/ }

});
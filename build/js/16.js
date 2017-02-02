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
webpackJsonpVoiceArt__name_([16,3,17],{

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

/***/ 94:
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextEntryAdapter = function (_AbstractFieldAdapter) {
	    _inherits(TextEntryAdapter, _AbstractFieldAdapter);

	    function TextEntryAdapter() {
	        _classCallCheck(this, TextEntryAdapter);

	        return _possibleConstructorReturn(this, (TextEntryAdapter.__proto__ || Object.getPrototypeOf(TextEntryAdapter)).apply(this, arguments));
	    }

	    _createClass(TextEntryAdapter, [{
	        key: '_initHook',


	        /** @inheritdoc */
	        value: function _initHook() {
	            _get(TextEntryAdapter.prototype.__proto__ || Object.getPrototypeOf(TextEntryAdapter.prototype), '_initHook', this).call(this);
	            this.fieldElement = this.domElement.matches(this._getFieldSelector()) ? this.domElement : this.domElement.querySelector(this._getFieldSelector());
	        }
	    }, {
	        key: '_getFieldSelector',
	        value: function _getFieldSelector() {
	            throw new Error(this.constructor.name + '._getFieldSelector: method is not defined.');
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'addFocusEmission',
	        value: function addFocusEmission() {
	            var _this2 = this;

	            this.fieldElement.addEventListener('focus', function () {
	                _this2.emit(_itemEvent2.default.FIELD_FOCUSED);
	            });
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'buildModel',
	        value: function buildModel() {
	            if (!this._model) {
	                this._model = {};
	            }
	            return this._model;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.setState('');
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            this.fieldElement.focus();
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getState',
	        value: function getState() {
	            return this.fieldElement.value;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            this.fieldElement.value = state;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            this.fieldElement.value = this.fieldElement.value + state;
	        }
	    }]);

	    return TextEntryAdapter;
	}(_abstractFieldAdapter2.default);

	exports.default = TextEntryAdapter;
	;
	module.exports = exports['default'];

/***/ },

/***/ 116:
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

	var _textEntryAdapter = __webpack_require__(94);

	var _textEntryAdapter2 = _interopRequireDefault(_textEntryAdapter);

	var _itemEvent = __webpack_require__(83);

	var _itemEvent2 = _interopRequireDefault(_itemEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TYPE = 'fitb';
	var FIELD_SELECTOR = '#hardKeyboardInput';

	var CgFitbAdapter = function (_TextEntryAdapter) {
	    _inherits(CgFitbAdapter, _TextEntryAdapter);

	    function CgFitbAdapter() {
	        _classCallCheck(this, CgFitbAdapter);

	        return _possibleConstructorReturn(this, (CgFitbAdapter.__proto__ || Object.getPrototypeOf(CgFitbAdapter)).apply(this, arguments));
	    }

	    _createClass(CgFitbAdapter, [{
	        key: '_getFieldSelector',
	        value: function _getFieldSelector() {
	            return FIELD_SELECTOR;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'addFocusEmission',
	        value: function addFocusEmission() {
	            _get(CgFitbAdapter.prototype.__proto__ || Object.getPrototypeOf(CgFitbAdapter.prototype), 'addFocusEmission', this).call(this);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'buildModel',
	        value: function buildModel() {
	            if (!this._model) {
	                this._model = {};
	            }
	            return this._model;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            _get(CgFitbAdapter.prototype.__proto__ || Object.getPrototypeOf(CgFitbAdapter.prototype), 'focus', this).call(this);
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'getState',
	        value: function getState() {
	            var state = this.domElement.querySelector('.hardkeyboard > .asciiPreview .MathJax').getAttribute('data-mathml');
	            return state;
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            this.fieldElement.value = state;
	            this.domElement.querySelector('.hard-keyboard-container .qq-key-number').click();
	            this.domElement.querySelector('.hard-keyboard-container .qq-key-button.q-dkgray-bkgd').click();
	        }

	        /** @inheritdoc */

	    }, {
	        key: 'joinState',
	        value: function joinState(state) {
	            this.fieldElement.value = this.fieldElement.value + state;
	        }
	    }]);

	    return CgFitbAdapter;
	}(_textEntryAdapter2.default);

	exports.default = CgFitbAdapter;
	;
	module.exports = exports['default'];

/***/ }

});
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
		exports["ItemRenderer"] = factory();
	else
		root["VoiceArt"] = root["VoiceArt"] || {}, root["VoiceArt"]["ItemRenderer"] = factory();
})(this, function() {
return webpackJsonpVoiceArt__name_([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
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

	__webpack_require__(3);

	__webpack_require__(5);

	var _item = __webpack_require__(9);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _item2.default;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./layout.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./layout.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\nhr {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n.cg-item-rejoinder {\n  margin-left: 1em;\n  display: inline-block;\n}\n.cg-item-rejoinder:focus {\n  outline: 1px dotted black;\n}\n.is-mouse-focused:focus {\n  outline: none;\n}\n.cg-item-submit-btn {\n  position: relative;\n}\n.cg-item-submit-btn:focus {\n  outline: none;\n}\n.cg-item-submit-btn:focus:not(.is-mouse-focused):after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border: #fff dotted 1px;\n  top: 4px;\n  bottom: 4px;\n  left: 4px;\n  right: 4px;\n}\n.cg-item-section {\n  margin-top: 1em;\n}\n.cg-item-section:first-child {\n  margin-top: 0;\n}\n.cg-item-section:not(.is-mouse-focused):focus,\n.cg-item-section .cg-item-content-unit:not(.is-mouse-focused):focus {\n  outline: 1px dotted black;\n}\n", ""]);

	// exports


/***/ },
/* 7 */,
/* 8 */,
/* 9 */
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

	var _shortid = __webpack_require__(11);

	var _shortid2 = _interopRequireDefault(_shortid);

	var _constants = __webpack_require__(20);

	var _constants2 = _interopRequireDefault(_constants);

	var _contentUnit = __webpack_require__(21);

	var _contentUnit2 = _interopRequireDefault(_contentUnit);

	var _gradePanel = __webpack_require__(51);

	var _gradePanel2 = _interopRequireDefault(_gradePanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ITEM_CLASS = _constants2.default.ITEM_CLASS;
	var CONTENT_CLASS = ITEM_CLASS + '-content';
	var SECTION_CLASS = ITEM_CLASS + '-section';
	var FOOTER_CLASS = ITEM_CLASS + '-footer';

	var DEFAULT_SETTINGS = {
	    gradable: true
	};

	var Item = function (_EventEmitter) {
	    _inherits(Item, _EventEmitter);

	    _createClass(Item, null, [{
	        key: 'EVENTS',


	        /**
	         *
	         * @returns {Object} EVENTS
	         * @property SUBMIT {string} - Fire when item submit
	         * @property RESPONSE_RECEIVED {string} - Fire when response from grade service received
	         */
	        get: function get() {
	            if (!this._EVENTS) {
	                this._EVENTS = {
	                    SUBMIT: 'submit',
	                    RESPONSE_RECEIVED: 'response_received'
	                };
	            }
	            return this._EVENTS;
	        }

	        /**
	         * @alias ItemRenderer
	         * @param {Element} element - Container element
	         * @param {Config} config - Item configuration sample
	         * @param {Object} - Task configuration
	         * @param {boolean} settings.gradable=true - If TRUE, ItemRenderer will perform grading after the user has submitted the answer.
	         */

	    }]);

	    function Item(element, config, settings) {
	        _classCallCheck(this, Item);

	        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

	        _this.$rootElement = $(element);
	        _this.applyConfig(config);
	        _this.settings = $.extend(true, {}, DEFAULT_SETTINGS, settings);

	        _this.id = 'item_' + _shortid2.default.generate();

	        _this.$domElement = $('<div></div>').attr({
	            'id': _this.id
	        }).addClass(ITEM_CLASS).appendTo(_this.$rootElement);

	        _this.$content = $('<div></div>').attr('id', _this.id + '_content').addClass(CONTENT_CLASS).appendTo(_this.$domElement);

	        _this.$footer = $('<div></div>').addClass(FOOTER_CLASS).appendTo(_this.$domElement);

	        _this.widgets = [];
	        _this.sections = [];

	        _this.config.sections.forEach(function (sectionConfig, index) {
	            var section = {
	                $domElement: $('<div></div>').attr('id', _this.id + '_section_' + index).addClass(SECTION_CLASS).appendTo(_this.$content),
	                units: []
	            };
	            // if section speech is defined it should be added to aria-label and element should be tabbable
	            if (sectionConfig.speech) {
	                section.$domElement.attr({
	                    'speech': sectionConfig.speech,
	                    'aria-label': sectionConfig.speech,
	                    'tabindex': 0
	                });
	            }
	            sectionConfig.units.forEach(function (cuConfig) {
	                if (cuConfig.type == _contentUnit2.default.CONTENT_TYPES.WIDGET) {
	                    cuConfig.value.id = _this.id + '_widget_' + _this.widgets.length;
	                }
	                var withAriaLabel = !sectionConfig.speech;
	                var contentUnit = new _contentUnit2.default(cuConfig, withAriaLabel, 0);
	                section.$domElement.append(contentUnit.$domElement);
	                section.units.push(contentUnit);
	                if (cuConfig.type == _contentUnit2.default.CONTENT_TYPES.WIDGET) {
	                    _this.widgets.push(contentUnit.widget);
	                }
	            });
	            _this.sections.push(section);
	        });

	        _this.$content.append('<hr>');

	        if (_this.settings.gradable) {
	            _this.gradePanel = new _gradePanel2.default(_this.$footer, {
	                widgets: _this.widgets

	            });
	            _this.gradePanel.on(_gradePanel2.default.EVENTS.SUBMIT, function (answer) {
	                _this.emit(_this.constructor.EVENTS.SUBMIT, answer);
	            });
	            _this.gradePanel.on(_gradePanel2.default.EVENTS.RESPONSE_RECEIVED, function (response) {
	                _this.emit(_this.constructor.EVENTS.RESPONSE_RECEIVED, response);
	            });

	            //todo: remove this, when server grading will be implemented
	            _this.gradePanel.correct = _this.config.correct;
	            _this.gradePanel.feedbacks = _this.config.feedbacks;
	        }

	        return _this;
	    }

	    _createClass(Item, [{
	        key: 'applyConfig',
	        value: function applyConfig(config) {
	            // adduction to the required format
	            if (!Array.isArray(config.sections)) {
	                config.sections = [config.sections];
	            }
	            this.config = config;
	        }
	    }]);

	    return Item;
	}(_events2.default);

	;

	exports.default = Item;
	module.exports = exports['default'];

/***/ },
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
/* 20 */
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
	exports.default = {
	  //todo: rename class
	  ITEM_CLASS: 'cg-item'
	};
	module.exports = exports['default'];

/***/ },
/* 21 */
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

	var _constants = __webpack_require__(20);

	var _constants2 = _interopRequireDefault(_constants);

	var _commonUtils = __webpack_require__(22);

	var _commonUtils2 = _interopRequireDefault(_commonUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MathQuill = __webpack_require__(24);

	var MATH_JAX_URL = '//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML';

	var _CONTENT_TYPES = {
	    HTML: 'html',
	    IMAGE: 'image',
	    MATHML: 'mathml',
	    LATEX: 'latex',
	    MULTI: 'multi',
	    TEXT: 'text',
	    WIDGET: 'widget'
	};

	var UNIT_CLASS = _constants2.default.ITEM_CLASS + '-content-unit';

	var _DEFAULT_CONFIG = {
	    type: _CONTENT_TYPES.TEXT,
	    value: ''
	};

	var ContentUnit = function () {
	    _createClass(ContentUnit, null, [{
	        key: 'createMathMLFormula',


	        /**
	         *
	         * @param {string} mathML
	         * @returns {*|jQuery|HTMLElement}
	         */
	        value: function createMathMLFormula(mathML) {
	            var thisClass = this;
	            var $formula = $('<span>' + mathML + '</span>');
	            // render with MathJax
	            if (window.MathJax) {
	                // timeout because this element is not added to the page yet
	                setTimeout(function () {
	                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
	                }, 0);
	            } else if (!thisClass.mathJaxStartLoad) {
	                thisClass.mathJaxStartLoad = true;
	                $.ajax({
	                    url: MATH_JAX_URL,
	                    dataType: "script"
	                });
	            }
	            return $formula;
	        }

	        /**
	         * Create static element with latex formula
	         * @param {string} latex
	         * @returns {*|jQuery|HTMLElement}
	         */

	    }, {
	        key: 'createLatexFormula',
	        value: function createLatexFormula(latex) {
	            var thisClass = this;
	            var MQ = MathQuill.getInterface(2);
	            var $formula = $('<span>' + latex + '</span>');

	            MQ.StaticMath($formula[0]);
	            return $formula;
	        }

	        /**
	         *
	         * @param {object} widgetConfig
	         * @returns {Widget}
	         */

	    }, {
	        key: 'createWidget',
	        value: function createWidget(widgetConfig) {
	            var Widget = __webpack_require__(35)("./" + widgetConfig.type + '-widget/index.js');
	            return new Widget(widgetConfig);
	        }

	        /**
	         *
	         * @param {object} imageConfig
	         * @returns {*|jQuery|HTMLElement}
	         */

	    }, {
	        key: 'createImage',
	        value: function createImage(imageConfig) {
	            if (typeof imageConfig === 'string') {
	                imageConfig = {
	                    link: imageConfig
	                };
	            }

	            var $image = $('<img src="' + imageConfig.link + '">');

	            if (imageConfig.align) {
	                $image.css('display', 'block');
	                switch (imageConfig.align) {
	                    case "left":
	                        $image.css({
	                            'margin-right': 'auto'
	                        });
	                        break;
	                    case "right":
	                        $image.css({
	                            'margin-left': 'auto'
	                        });
	                        break;
	                    case "center":
	                        $image.css({
	                            'margin-left': 'auto',
	                            'margin-right': 'auto'
	                        });
	                        break;
	                    default:
	                        throw new Error(this.name + '.createImage: unknown image align ' + imageConfig.align);
	                }
	            }
	            return $image;
	        }

	        /**
	         *
	         * @param {string | {type: string, value: *} | Array.<string|{type: string, value: *}>} config
	         * @param {boolean} [withAriaLabel = false] - If true aria-label attribute will be added.
	         * @param {number | undefined} [tabindex = undefined] - tabindex of created element. Will be add if only withAriaLabel parameter is true.
	         */

	    }, {
	        key: 'CONTENT_TYPES',
	        get: function get() {
	            return _CONTENT_TYPES;
	        }
	    }, {
	        key: 'DEFAULT_CONFIG',
	        get: function get() {
	            return _DEFAULT_CONFIG;
	        }
	    }]);

	    function ContentUnit(config) {
	        var withAriaLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	        var tabindex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

	        _classCallCheck(this, ContentUnit);

	        this.withAriaLabel = withAriaLabel;
	        this.tabindex = tabindex;
	        this.applyConfig(config);
	        this.render();
	    }

	    _createClass(ContentUnit, [{
	        key: 'applyConfig',
	        value: function applyConfig(config) {
	            // adduction to the required format
	            if (Array.isArray(config)) {
	                config = {
	                    type: this.constructor.CONTENT_TYPES.MULTI,
	                    value: config
	                };
	            } else if (typeof config === 'string') {
	                config = {
	                    value: config
	                };
	            }
	            $.extend(true, this, this.constructor.DEFAULT_CONFIG, config);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            switch (this.type) {

	                case this.constructor.CONTENT_TYPES.HTML:
	                case this.constructor.CONTENT_TYPES.TEXT:
	                    this.$domElement = $('<span>' + this.value + '</span>');
	                    break;

	                case this.constructor.CONTENT_TYPES.IMAGE:
	                    this.$domElement = this.constructor.createImage(this.value);
	                    break;

	                case this.constructor.CONTENT_TYPES.MATHML:
	                    this.$domElement = this.constructor.createMathMLFormula(this.value);
	                    break;

	                case this.constructor.CONTENT_TYPES.LATEX:
	                    this.$domElement = this.constructor.createLatexFormula(this.value);
	                    break;

	                case this.constructor.CONTENT_TYPES.MULTI:
	                    this.$domElement = $('<span></span>');
	                    this.subUnits = [];
	                    this.value.forEach(function (config) {
	                        var subUnit = new ContentUnit(config, _this.withAriaLabel && !_this.speech, _this.tabindex);
	                        _this.subUnits.push(subUnit);
	                        _this.$domElement.append(subUnit.$domElement);
	                    });
	                    break;

	                case this.constructor.CONTENT_TYPES.WIDGET:
	                    this.widget = this.constructor.createWidget(this.value);
	                    this.$domElement = this.widget.$domElement;
	                    break;

	                default:
	                    throw new Error(this.constructor.name + '.render: unknown content type ' + this.type);
	            }

	            this.$domElement.attr('type', this.type).addClass(UNIT_CLASS);
	            if (this.speech) {
	                this.$domElement.attr('speech', this.speech);
	            }

	            if (!this.withAriaLabel) return;

	            if (this.speech) {
	                this.$domElement.attr('aria-label', this.speech);
	            } else if (this.type == this.constructor.CONTENT_TYPES.MATHML) {
	                _commonUtils2.default.getSpeechByMathML(this.value, true).then(function (speech) {
	                    _this.$domElement.attr('aria-label', speech);
	                });
	            } else if (this.type == this.constructor.CONTENT_TYPES.LATEX) {
	                this.$domElement.attr('aria-label', _commonUtils2.default.getSpeechByLatex(this.value));
	            }

	            if (typeof this.tabindex !== 'undefined' && this.type != this.constructor.CONTENT_TYPES.WIDGET) {
	                this.$domElement.attr('tabindex', this.tabindex);
	            }
	        }
	    }]);

	    return ContentUnit;
	}();

	exports.default = ContentUnit;
	;
	module.exports = exports['default'];

/***/ },
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by 96664_000 on 25.11.2016.
	 */

	__webpack_require__(25);
	var MathQuill = __webpack_require__(33);
	var mq = MathQuill.noConflict();
	module.exports = mq;

	delete window.MathQuill;
	//delete window.jQuery;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./mathquill.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./mathquill.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*\n * MathQuill v0.10.1               http://mathquill.com\n * by Han, Jeanine, and Mary  maintainers@mathquill.com\n *\n * This Source Code Form is subject to the terms of the\n * Mozilla Public License, v. 2.0. If a copy of the MPL\n * was not distributed with this file, You can obtain\n * one at http://mozilla.org/MPL/2.0/.\n */\n@font-face {\n  font-family: Symbola;\n  src: url(" + __webpack_require__(27) + ");\n  src: local(\"Symbola Regular\"), local(\"Symbola\"), url(" + __webpack_require__(28) + ") format(\"woff2\"), url(" + __webpack_require__(29) + ") format(\"woff\"), url(" + __webpack_require__(30) + ") format(\"truetype\"), url(" + __webpack_require__(31) + ") format(\"opentype\"), url(" + __webpack_require__(32) + "#Symbola) format(\"svg\");\n}\n.mq-editable-field {\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-editable-field .mq-cursor {\n  border-left: 1px solid black;\n  margin-left: -1px;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-editable-field .mq-cursor.mq-blink {\n  visibility: hidden;\n}\n.mq-editable-field,\n.mq-math-mode .mq-editable-field {\n  border: 1px solid gray;\n}\n.mq-editable-field.mq-focused,\n.mq-math-mode .mq-editable-field.mq-focused {\n  -webkit-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  -moz-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  border-color: #709AC0;\n  border-radius: 1px;\n}\n.mq-math-mode .mq-editable-field {\n  margin: 1px;\n}\n.mq-editable-field .mq-latex-command-input {\n  color: inherit;\n  font-family: \"Courier New\", monospace;\n  border: 1px solid gray;\n  padding-right: 1px;\n  margin-right: 1px;\n  margin-left: 2px;\n}\n.mq-editable-field .mq-latex-command-input.mq-empty {\n  background: transparent;\n}\n.mq-editable-field .mq-latex-command-input.mq-hasCursor {\n  border-color: ActiveBorder;\n}\n.mq-editable-field.mq-empty:after,\n.mq-editable-field.mq-text-mode:after,\n.mq-math-mode .mq-empty:after {\n  visibility: hidden;\n  content: 'c';\n}\n.mq-editable-field .mq-cursor:only-child:after,\n.mq-editable-field .mq-textarea + .mq-cursor:last-child:after {\n  visibility: hidden;\n  content: 'c';\n}\n.mq-editable-field .mq-text-mode .mq-cursor:only-child:after {\n  content: '';\n}\n.mq-editable-field.mq-text-mode {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.mq-root-block,\n.mq-math-mode .mq-root-block {\n  display: -moz-inline-box;\n  display: inline-block;\n  width: 100%;\n  padding: 2px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle;\n}\n.mq-math-mode {\n  font-variant: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 115%;\n  line-height: 1;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-non-leaf,\n.mq-math-mode .mq-scaled {\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode var,\n.mq-math-mode .mq-text-mode,\n.mq-math-mode .mq-nonSymbola {\n  font-family: \"Times New Roman\", Symbola, serif;\n  line-height: .9;\n}\n.mq-math-mode * {\n  font-size: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  border-color: black;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n.mq-math-mode .mq-empty {\n  background: #ccc;\n}\n.mq-math-mode .mq-empty.mq-root-block {\n  background: transparent;\n}\n.mq-math-mode.mq-empty {\n  background: transparent;\n}\n.mq-math-mode .mq-text-mode {\n  display: inline-block;\n}\n.mq-math-mode .mq-text-mode.mq-hasCursor {\n  box-shadow: inset darkgray 0 .1em .2em;\n  padding: 0 .1em;\n  margin: 0 -0.1em;\n  min-width: 1ex;\n}\n.mq-math-mode .mq-font {\n  font: 1em \"Times New Roman\", Symbola, serif;\n}\n.mq-math-mode .mq-font * {\n  font-family: inherit;\n  font-style: inherit;\n}\n.mq-math-mode b,\n.mq-math-mode b.mq-font {\n  font-weight: bolder;\n}\n.mq-math-mode var,\n.mq-math-mode i,\n.mq-math-mode i.mq-font {\n  font-style: italic;\n}\n.mq-math-mode var.mq-f {\n  margin-right: 0.2em;\n  margin-left: 0.1em;\n}\n.mq-math-mode .mq-roman var.mq-f {\n  margin: 0;\n}\n.mq-math-mode big {\n  font-size: 200%;\n}\n.mq-math-mode .mq-int > big {\n  display: inline-block;\n  -webkit-transform: scaleX(0.7);\n  -moz-transform: scaleX(0.7);\n  -ms-transform: scaleX(0.7);\n  -o-transform: scaleX(0.7);\n  transform: scaleX(0.7);\n  vertical-align: -0.16em;\n}\n.mq-math-mode .mq-int > .mq-supsub {\n  font-size: 80%;\n  vertical-align: -1.1em;\n  padding-right: .2em;\n}\n.mq-math-mode .mq-int > .mq-supsub > .mq-sup > .mq-sup-inner {\n  vertical-align: 1.3em;\n}\n.mq-math-mode .mq-int > .mq-supsub > .mq-sub {\n  margin-left: -0.35em;\n}\n.mq-math-mode .mq-roman {\n  font-style: normal;\n}\n.mq-math-mode .mq-sans-serif {\n  font-family: sans-serif, Symbola, serif;\n}\n.mq-math-mode .mq-monospace {\n  font-family: monospace, Symbola, serif;\n}\n.mq-math-mode .mq-overline {\n  border-top: 1px solid black;\n  margin-top: 1px;\n}\n.mq-math-mode .mq-underline {\n  border-bottom: 1px solid black;\n  margin-bottom: 1px;\n}\n.mq-math-mode .mq-binary-operator {\n  padding: 0 0.2em;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-supsub {\n  text-align: left;\n  font-size: 90%;\n  vertical-align: -0.5em;\n}\n.mq-math-mode .mq-supsub.mq-sup-only {\n  vertical-align: .5em;\n}\n.mq-math-mode .mq-supsub.mq-sup-only .mq-sup {\n  display: inline-block;\n  vertical-align: text-bottom;\n}\n.mq-math-mode .mq-supsub .mq-sup {\n  display: block;\n}\n.mq-math-mode .mq-supsub .mq-sub {\n  display: block;\n  float: left;\n}\n.mq-math-mode .mq-supsub .mq-binary-operator {\n  padding: 0 .1em;\n}\n.mq-math-mode .mq-supsub .mq-fraction {\n  font-size: 70%;\n}\n.mq-math-mode sup.mq-nthroot {\n  font-size: 80%;\n  vertical-align: 0.8em;\n  margin-right: -0.6em;\n  margin-left: .2em;\n  min-width: .5em;\n}\n.mq-math-mode .mq-paren {\n  padding: 0 .1em;\n  vertical-align: top;\n  -webkit-transform-origin: center .06em;\n  -moz-transform-origin: center .06em;\n  -ms-transform-origin: center .06em;\n  -o-transform-origin: center .06em;\n  transform-origin: center .06em;\n}\n.mq-math-mode .mq-paren.mq-ghost {\n  color: silver;\n}\n.mq-math-mode .mq-paren + span {\n  margin-top: .1em;\n  margin-bottom: .1em;\n}\n.mq-math-mode .mq-array {\n  vertical-align: middle;\n  text-align: center;\n}\n.mq-math-mode .mq-array > span {\n  display: block;\n}\n.mq-math-mode .mq-operator-name {\n  font-family: Symbola, \"Times New Roman\", serif;\n  line-height: .9;\n  font-style: normal;\n}\n.mq-math-mode var.mq-operator-name.mq-first {\n  padding-left: .2em;\n}\n.mq-math-mode var.mq-operator-name.mq-last,\n.mq-math-mode .mq-supsub.mq-after-operator-name {\n  padding-right: .2em;\n}\n.mq-math-mode .mq-fraction {\n  font-size: 90%;\n  text-align: center;\n  vertical-align: -0.4em;\n  padding: 0 .2em;\n}\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link {\n  display: -moz-groupbox;\n}\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link,\n.mq-math-mode x:default {\n  display: inline-block;\n}\n.mq-math-mode .mq-numerator,\n.mq-math-mode .mq-denominator {\n  display: block;\n}\n.mq-math-mode .mq-numerator {\n  padding: 0 0.1em;\n}\n.mq-math-mode .mq-denominator {\n  border-top: 1px solid;\n  float: right;\n  width: 100%;\n  padding: 0.1em;\n}\n.mq-math-mode .mq-sqrt-prefix {\n  padding-top: 0;\n  position: relative;\n  top: 0.1em;\n  vertical-align: top;\n  -webkit-transform-origin: top;\n  -moz-transform-origin: top;\n  -ms-transform-origin: top;\n  -o-transform-origin: top;\n  transform-origin: top;\n}\n.mq-math-mode .mq-sqrt-stem {\n  border-top: 1px solid;\n  margin-top: 1px;\n  padding-left: .15em;\n  padding-right: .2em;\n  margin-right: .1em;\n  padding-top: 1px;\n}\n.mq-math-mode .mq-vector-prefix {\n  display: block;\n  text-align: center;\n  line-height: .25em;\n  margin-bottom: -0.1em;\n  font-size: 0.75em;\n}\n.mq-math-mode .mq-vector-stem {\n  display: block;\n}\n.mq-math-mode .mq-large-operator {\n  vertical-align: -0.2em;\n  padding: .2em;\n  text-align: center;\n}\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator big,\n.mq-math-mode .mq-large-operator .mq-to {\n  display: block;\n}\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator .mq-to {\n  font-size: 80%;\n}\n.mq-math-mode .mq-large-operator .mq-from {\n  float: right;\n  /* take out of normal flow to manipulate baseline */\n  width: 100%;\n}\n.mq-math-mode,\n.mq-math-mode .mq-editable-field {\n  cursor: text;\n  font-family: Symbola, \"Times New Roman\", serif;\n}\n.mq-math-mode .mq-overarrow {\n  border-top: 1px solid black;\n  margin-top: 1px;\n  padding-top: 0.2em;\n}\n.mq-math-mode .mq-overarrow:before {\n  display: block;\n  position: relative;\n  top: -0.34em;\n  font-size: 0.5em;\n  line-height: 0em;\n  content: '\\27A4';\n  text-align: right;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-left:before {\n  -moz-transform: scaleX(-1);\n  -o-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.mq-math-mode .mq-selection,\n.mq-editable-field .mq-selection,\n.mq-math-mode .mq-selection .mq-non-leaf,\n.mq-editable-field .mq-selection .mq-non-leaf,\n.mq-math-mode .mq-selection .mq-scaled,\n.mq-editable-field .mq-selection .mq-scaled {\n  background: #B4D5FE !important;\n  background: Highlight !important;\n  color: HighlightText;\n  border-color: HighlightText;\n}\n.mq-math-mode .mq-selection .mq-matrixed,\n.mq-editable-field .mq-selection .mq-matrixed {\n  background: #39F !important;\n}\n.mq-math-mode .mq-selection .mq-matrixed-container,\n.mq-editable-field .mq-selection .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important;\n}\n.mq-math-mode .mq-selection.mq-blur,\n.mq-editable-field .mq-selection.mq-blur,\n.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,\n.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,\n.mq-math-mode .mq-selection.mq-blur .mq-scaled,\n.mq-editable-field .mq-selection.mq-blur .mq-scaled,\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed {\n  background: #D4D4D4 !important;\n  color: black;\n  border-color: black;\n}\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important;\n}\n.mq-editable-field .mq-textarea,\n.mq-math-mode .mq-textarea {\n  position: relative;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n.mq-editable-field .mq-textarea *,\n.mq-math-mode .mq-textarea *,\n.mq-editable-field .mq-selectable,\n.mq-math-mode .mq-selectable {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n  position: absolute;\n  clip: rect(1em 1em 1em 1em);\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0);\n  resize: none;\n  width: 1px;\n  height: 1px;\n}\n.mq-math-mode .mq-matrixed {\n  background: white;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='white');\n  margin-top: -0.1em;\n}\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "res/e4ae9ff7ac2476ae421fc4278e5d3806.eot";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "res/cb8d804a242b86175fdd6cb8e11b1a35.woff2";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "res/b1445a46ceac48f13cec0860ab1acf5f.woff";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "res/52a6aac18ae26b6ecbd4f3a0d9579c9f.ttf";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "res/4621fcfd9def63c694914f7ec5add610.otf";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "res/20db57ba32a046dfea3c30519898b278.svg";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(34);
	var $ = __webpack_require__(34);
	(function() {

	/**
	 * MathQuill v0.10.1               http://mathquill.com
	 * by Han, Jeanine, and Mary  maintainers@mathquill.com
	 *
	 * This Source Code Form is subject to the terms of the
	 * Mozilla Public License, v. 2.0. If a copy of the MPL
	 * was not distributed with this file, You can obtain
	 * one at http://mozilla.org/MPL/2.0/.
	 */

	(function() {

	var jQuery = window.jQuery,
	  undefined,
	  mqCmdId = 'mathquill-command-id',
	  mqBlockId = 'mathquill-block-id',
	  min = Math.min,
	  max = Math.max;

	function noop() {}

	/**
	 * A utility higher-order function that makes defining variadic
	 * functions more convenient by letting you essentially define functions
	 * with the last argument as a splat, i.e. the last argument "gathers up"
	 * remaining arguments to the function:
	 *   var doStuff = variadic(function(first, rest) { return rest; });
	 *   doStuff(1, 2, 3); // => [2, 3]
	 */
	var __slice = [].slice;
	function variadic(fn) {
	  var numFixedArgs = fn.length - 1;
	  return function() {
	    var args = __slice.call(arguments, 0, numFixedArgs);
	    var varArg = __slice.call(arguments, numFixedArgs);
	    return fn.apply(this, args.concat([ varArg ]));
	  };
	}

	/**
	 * A utility higher-order function that makes combining object-oriented
	 * programming and functional programming techniques more convenient:
	 * given a method name and any number of arguments to be bound, returns
	 * a function that calls it's first argument's method of that name (if
	 * it exists) with the bound arguments and any additional arguments that
	 * are passed:
	 *   var sendMethod = send('method', 1, 2);
	 *   var obj = { method: function() { return Array.apply(this, arguments); } };
	 *   sendMethod(obj, 3, 4); // => [1, 2, 3, 4]
	 *   // or more specifically,
	 *   var obj2 = { method: function(one, two, three) { return one*two + three; } };
	 *   sendMethod(obj2, 3); // => 5
	 *   sendMethod(obj2, 4); // => 6
	 */
	var send = variadic(function(method, args) {
	  return variadic(function(obj, moreArgs) {
	    if (method in obj) return obj[method].apply(obj, args.concat(moreArgs));
	  });
	});

	/**
	 * A utility higher-order function that creates "implicit iterators"
	 * from "generators": given a function that takes in a sole argument,
	 * a "yield_" function, that calls "yield_" repeatedly with an object as
	 * a sole argument (presumably objects being iterated over), returns
	 * a function that calls it's first argument on each of those objects
	 * (if the first argument is a function, it is called repeatedly with
	 * each object as the first argument, otherwise it is stringified and
	 * the method of that name is called on each object (if such a method
	 * exists)), passing along all additional arguments:
	 *   var a = [
	 *     { method: function(list) { list.push(1); } },
	 *     { method: function(list) { list.push(2); } },
	 *     { method: function(list) { list.push(3); } }
	 *   ];
	 *   a.each = iterator(function(yield_) {
	 *     for (var i in this) yield_(this[i]);
	 *   });
	 *   var list = [];
	 *   a.each('method', list);
	 *   list; // => [1, 2, 3]
	 *   // Note that the for-in loop will yield 'each', but 'each' maps to
	 *   // the function object created by iterator() which does not have a
	 *   // .method() method, so that just fails silently.
	 */
	function iterator(generator) {
	  return variadic(function(fn, args) {
	    if (typeof fn !== 'function') fn = send(fn);
	    var yield_ = function(obj) { return fn.apply(obj, [ obj ].concat(args)); };
	    return generator.call(this, yield_);
	  });
	}

	/**
	 * sugar to make defining lots of commands easier.
	 * TODO: rethink this.
	 */
	function bind(cons /*, args... */) {
	  var args = __slice.call(arguments, 1);
	  return function() {
	    return cons.apply(this, args);
	  };
	}

	/**
	 * a development-only debug method.  This definition and all
	 * calls to `pray` will be stripped from the minified
	 * build of mathquill.
	 *
	 * This function must be called by name to be removed
	 * at compile time.  Do not define another function
	 * with the same name, and only call this function by
	 * name.
	 */
	function pray(message, cond) {
	  if (!cond) throw new Error('prayer failed: '+message);
	}
	var P = (function(prototype, ownProperty, undefined) {
	  // helper functions that also help minification
	  function isObject(o) { return typeof o === 'object'; }
	  function isFunction(f) { return typeof f === 'function'; }

	  // used to extend the prototypes of superclasses (which might not
	  // have `.Bare`s)
	  function SuperclassBare() {}

	  return function P(_superclass /* = Object */, definition) {
	    // handle the case where no superclass is given
	    if (definition === undefined) {
	      definition = _superclass;
	      _superclass = Object;
	    }

	    // C is the class to be returned.
	    //
	    // It delegates to instantiating an instance of `Bare`, so that it
	    // will always return a new instance regardless of the calling
	    // context.
	    //
	    //  TODO: the Chrome inspector shows all created objects as `C`
	    //        rather than `Object`.  Setting the .name property seems to
	    //        have no effect.  Is there a way to override this behavior?
	    function C() {
	      var self = new Bare;
	      if (isFunction(self.init)) self.init.apply(self, arguments);
	      return self;
	    }

	    // C.Bare is a class with a noop constructor.  Its prototype is the
	    // same as C, so that instances of C.Bare are also instances of C.
	    // New objects can be allocated without initialization by calling
	    // `new MyClass.Bare`.
	    function Bare() {}
	    C.Bare = Bare;

	    // Set up the prototype of the new class.
	    var _super = SuperclassBare[prototype] = _superclass[prototype];
	    var proto = Bare[prototype] = C[prototype] = C.p = new SuperclassBare;

	    // other variables, as a minifier optimization
	    var extensions;


	    // set the constructor property on the prototype, for convenience
	    proto.constructor = C;

	    C.extend = function(def) { return P(C, def); }

	    return (C.open = function(def) {
	      extensions = {};

	      if (isFunction(def)) {
	        // call the defining function with all the arguments you need
	        // extensions captures the return value.
	        extensions = def.call(C, proto, _super, C, _superclass);
	      }
	      else if (isObject(def)) {
	        // if you passed an object instead, we'll take it
	        extensions = def;
	      }

	      // ...and extend it
	      if (isObject(extensions)) {
	        for (var ext in extensions) {
	          if (ownProperty.call(extensions, ext)) {
	            proto[ext] = extensions[ext];
	          }
	        }
	      }

	      // if there's no init, we assume we're inheriting a non-pjs class, so
	      // we default to applying the superclass's constructor.
	      if (!isFunction(proto.init)) {
	        proto.init = _superclass;
	      }

	      return C;
	    })(definition);
	  }

	  // as a minifier optimization, we've closured in a few helper functions
	  // and the string 'prototype' (C[p] is much shorter than C.prototype)
	})('prototype', ({}).hasOwnProperty);
	/*************************************************
	 * Base classes of edit tree-related objects
	 *
	 * Only doing tree node manipulation via these
	 * adopt/ disown methods guarantees well-formedness
	 * of the tree.
	 ************************************************/

	// L = 'left'
	// R = 'right'
	//
	// the contract is that they can be used as object properties
	// and (-L) === R, and (-R) === L.
	var L = -1;
	var R = 1;

	function prayDirection(dir) {
	  pray('a direction was passed', dir === L || dir === R);
	}

	/**
	 * Tiny extension of jQuery adding directionalized DOM manipulation methods.
	 *
	 * Funny how Pjs v3 almost just works with `jQuery.fn.init`.
	 *
	 * jQuery features that don't work on $:
	 *   - jQuery.*, like jQuery.ajax, obviously (Pjs doesn't and shouldn't
	 *                                            copy constructor properties)
	 *
	 *   - jQuery(function), the shortcut for `jQuery(document).ready(function)`,
	 *     because `jQuery.fn.init` is idiosyncratic and Pjs doing, essentially,
	 *     `jQuery.fn.init.apply(this, arguments)` isn't quite right, you need:
	 *
	 *       _.init = function(s, c) { jQuery.fn.init.call(this, s, c, $(document)); };
	 *
	 *     if you actually give a shit (really, don't bother),
	 *     see https://github.com/jquery/jquery/blob/1.7.2/src/core.js#L889
	 *
	 *   - jQuery(selector), because jQuery translates that to
	 *     `jQuery(document).find(selector)`, but Pjs doesn't (should it?) let
	 *     you override the result of a constructor call
	 *       + note that because of the jQuery(document) shortcut-ness, there's also
	 *         the 3rd-argument-needs-to-be-`$(document)` thing above, but the fix
	 *         for that (as can be seen above) is really easy. This problem requires
	 *         a way more intrusive fix
	 *
	 * And that's it! Everything else just magically works because jQuery internally
	 * uses `this.constructor()` everywhere (hence calling `$`), but never ever does
	 * `this.constructor.find` or anything like that, always doing `jQuery.find`.
	 */
	var $ = P(jQuery, function(_) {
	  _.insDirOf = function(dir, el) {
	    return dir === L ?
	      this.insertBefore(el.first()) : this.insertAfter(el.last());
	  };
	  _.insAtDirEnd = function(dir, el) {
	    return dir === L ? this.prependTo(el) : this.appendTo(el);
	  };
	});

	var Point = P(function(_) {
	  _.parent = 0;
	  _[L] = 0;
	  _[R] = 0;

	  _.init = function(parent, leftward, rightward) {
	    this.parent = parent;
	    this[L] = leftward;
	    this[R] = rightward;
	  };

	  this.copy = function(pt) {
	    return Point(pt.parent, pt[L], pt[R]);
	  };
	});

	/**
	 * MathQuill virtual-DOM tree-node abstract base class
	 */
	var Node = P(function(_) {
	  _[L] = 0;
	  _[R] = 0
	  _.parent = 0;

	  var id = 0;
	  function uniqueNodeId() { return id += 1; }
	  this.byId = {};

	  _.init = function() {
	    this.id = uniqueNodeId();
	    Node.byId[this.id] = this;

	    this.ends = {};
	    this.ends[L] = 0;
	    this.ends[R] = 0;
	  };

	  _.dispose = function() { delete Node.byId[this.id]; };

	  _.toString = function() { return '{{ MathQuill Node #'+this.id+' }}'; };

	  _.jQ = $();
	  _.jQadd = function(jQ) { return this.jQ = this.jQ.add(jQ); };
	  _.jQize = function(jQ) {
	    // jQuery-ifies this.html() and links up the .jQ of all corresponding Nodes
	    var jQ = $(jQ || this.html());

	    function jQadd(el) {
	      if (el.getAttribute) {
	        var cmdId = el.getAttribute('mathquill-command-id');
	        var blockId = el.getAttribute('mathquill-block-id');
	        if (cmdId) Node.byId[cmdId].jQadd(el);
	        if (blockId) Node.byId[blockId].jQadd(el);
	      }
	      for (el = el.firstChild; el; el = el.nextSibling) {
	        jQadd(el);
	      }
	    }

	    for (var i = 0; i < jQ.length; i += 1) jQadd(jQ[i]);
	    return jQ;
	  };

	  _.createDir = function(dir, cursor) {
	    prayDirection(dir);
	    var node = this;
	    node.jQize();
	    node.jQ.insDirOf(dir, cursor.jQ);
	    cursor[dir] = node.adopt(cursor.parent, cursor[L], cursor[R]);
	    return node;
	  };
	  _.createLeftOf = function(el) { return this.createDir(L, el); };

	  _.selectChildren = function(leftEnd, rightEnd) {
	    return Selection(leftEnd, rightEnd);
	  };

	  _.bubble = iterator(function(yield_) {
	    for (var ancestor = this; ancestor; ancestor = ancestor.parent) {
	      var result = yield_(ancestor);
	      if (result === false) break;
	    }

	    return this;
	  });

	  _.postOrder = iterator(function(yield_) {
	    (function recurse(descendant) {
	      descendant.eachChild(recurse);
	      yield_(descendant);
	    })(this);

	    return this;
	  });

	  _.isEmpty = function() {
	    return this.ends[L] === 0 && this.ends[R] === 0;
	  };

	  _.children = function() {
	    return Fragment(this.ends[L], this.ends[R]);
	  };

	  _.eachChild = function() {
	    var children = this.children();
	    children.each.apply(children, arguments);
	    return this;
	  };

	  _.foldChildren = function(fold, fn) {
	    return this.children().fold(fold, fn);
	  };

	  _.withDirAdopt = function(dir, parent, withDir, oppDir) {
	    Fragment(this, this).withDirAdopt(dir, parent, withDir, oppDir);
	    return this;
	  };

	  _.adopt = function(parent, leftward, rightward) {
	    Fragment(this, this).adopt(parent, leftward, rightward);
	    return this;
	  };

	  _.disown = function() {
	    Fragment(this, this).disown();
	    return this;
	  };

	  _.remove = function() {
	    this.jQ.remove();
	    this.postOrder('dispose');
	    return this.disown();
	  };
	});

	function prayWellFormed(parent, leftward, rightward) {
	  pray('a parent is always present', parent);
	  pray('leftward is properly set up', (function() {
	    // either it's empty and `rightward` is the left end child (possibly empty)
	    if (!leftward) return parent.ends[L] === rightward;

	    // or it's there and its [R] and .parent are properly set up
	    return leftward[R] === rightward && leftward.parent === parent;
	  })());

	  pray('rightward is properly set up', (function() {
	    // either it's empty and `leftward` is the right end child (possibly empty)
	    if (!rightward) return parent.ends[R] === leftward;

	    // or it's there and its [L] and .parent are properly set up
	    return rightward[L] === leftward && rightward.parent === parent;
	  })());
	}


	/**
	 * An entity outside the virtual tree with one-way pointers (so it's only a
	 * "view" of part of the tree, not an actual node/entity in the tree) that
	 * delimits a doubly-linked list of sibling nodes.
	 * It's like a fanfic love-child between HTML DOM DocumentFragment and the Range
	 * classes: like DocumentFragment, its contents must be sibling nodes
	 * (unlike Range, whose contents are arbitrary contiguous pieces of subtrees),
	 * but like Range, it has only one-way pointers to its contents, its contents
	 * have no reference to it and in fact may still be in the visible tree (unlike
	 * DocumentFragment, whose contents must be detached from the visible tree
	 * and have their 'parent' pointers set to the DocumentFragment).
	 */
	var Fragment = P(function(_) {
	  _.init = function(withDir, oppDir, dir) {
	    if (dir === undefined) dir = L;
	    prayDirection(dir);

	    pray('no half-empty fragments', !withDir === !oppDir);

	    this.ends = {};

	    if (!withDir) return;

	    pray('withDir is passed to Fragment', withDir instanceof Node);
	    pray('oppDir is passed to Fragment', oppDir instanceof Node);
	    pray('withDir and oppDir have the same parent',
	         withDir.parent === oppDir.parent);

	    this.ends[dir] = withDir;
	    this.ends[-dir] = oppDir;

	    // To build the jquery collection for a fragment, accumulate elements
	    // into an array and then call jQ.add once on the result. jQ.add sorts the
	    // collection according to document order each time it is called, so
	    // building a collection by folding jQ.add directly takes more than
	    // quadratic time in the number of elements.
	    //
	    // https://github.com/jquery/jquery/blob/2.1.4/src/traversing.js#L112
	    var accum = this.fold([], function (accum, el) {
	      accum.push.apply(accum, el.jQ.get());
	      return accum;
	    });

	    this.jQ = this.jQ.add(accum);
	  };
	  _.jQ = $();

	  // like Cursor::withDirInsertAt(dir, parent, withDir, oppDir)
	  _.withDirAdopt = function(dir, parent, withDir, oppDir) {
	    return (dir === L ? this.adopt(parent, withDir, oppDir)
	                      : this.adopt(parent, oppDir, withDir));
	  };
	  _.adopt = function(parent, leftward, rightward) {
	    prayWellFormed(parent, leftward, rightward);

	    var self = this;
	    self.disowned = false;

	    var leftEnd = self.ends[L];
	    if (!leftEnd) return this;

	    var rightEnd = self.ends[R];

	    if (leftward) {
	      // NB: this is handled in the ::each() block
	      // leftward[R] = leftEnd
	    } else {
	      parent.ends[L] = leftEnd;
	    }

	    if (rightward) {
	      rightward[L] = rightEnd;
	    } else {
	      parent.ends[R] = rightEnd;
	    }

	    self.ends[R][R] = rightward;

	    self.each(function(el) {
	      el[L] = leftward;
	      el.parent = parent;
	      if (leftward) leftward[R] = el;

	      leftward = el;
	    });

	    return self;
	  };

	  _.disown = function() {
	    var self = this;
	    var leftEnd = self.ends[L];

	    // guard for empty and already-disowned fragments
	    if (!leftEnd || self.disowned) return self;

	    self.disowned = true;

	    var rightEnd = self.ends[R]
	    var parent = leftEnd.parent;

	    prayWellFormed(parent, leftEnd[L], leftEnd);
	    prayWellFormed(parent, rightEnd, rightEnd[R]);

	    if (leftEnd[L]) {
	      leftEnd[L][R] = rightEnd[R];
	    } else {
	      parent.ends[L] = rightEnd[R];
	    }

	    if (rightEnd[R]) {
	      rightEnd[R][L] = leftEnd[L];
	    } else {
	      parent.ends[R] = leftEnd[L];
	    }

	    return self;
	  };

	  _.remove = function() {
	    this.jQ.remove();
	    this.each('postOrder', 'dispose');
	    return this.disown();
	  };

	  _.each = iterator(function(yield_) {
	    var self = this;
	    var el = self.ends[L];
	    if (!el) return self;

	    for (; el !== self.ends[R][R]; el = el[R]) {
	      var result = yield_(el);
	      if (result === false) break;
	    }

	    return self;
	  });

	  _.fold = function(fold, fn) {
	    this.each(function(el) {
	      fold = fn.call(this, fold, el);
	    });

	    return fold;
	  };
	});


	/**
	 * Registry of LaTeX commands and commands created when typing
	 * a single character.
	 *
	 * (Commands are all subclasses of Node.)
	 */
	var LatexCmds = {}, CharCmds = {};
	/********************************************
	 * Cursor and Selection "singleton" classes
	 *******************************************/

	/* The main thing that manipulates the Math DOM. Makes sure to manipulate the
	HTML DOM to match. */

	/* Sort of singletons, since there should only be one per editable math
	textbox, but any one HTML document can contain many such textboxes, so any one
	JS environment could actually contain many instances. */

	//A fake cursor in the fake textbox that the math is rendered in.
	var Cursor = P(Point, function(_) {
	  _.init = function(initParent, options) {
	    this.parent = initParent;
	    this.options = options;

	    var jQ = this.jQ = this._jQ = $('<span class="mq-cursor">&#8203;</span>');
	    //closured for setInterval
	    this.blink = function(){ jQ.toggleClass('mq-blink'); };

	    this.upDownCache = {};
	  };

	  _.show = function() {
	    this.jQ = this._jQ.removeClass('mq-blink');
	    if ('intervalId' in this) //already was shown, just restart interval
	      clearInterval(this.intervalId);
	    else { //was hidden and detached, insert this.jQ back into HTML DOM
	      if (this[R]) {
	        if (this.selection && this.selection.ends[L][L] === this[L])
	          this.jQ.insertBefore(this.selection.jQ);
	        else
	          this.jQ.insertBefore(this[R].jQ.first());
	      }
	      else
	        this.jQ.appendTo(this.parent.jQ);
	      this.parent.focus();
	    }
	    this.intervalId = setInterval(this.blink, 500);
	    return this;
	  };
	  _.hide = function() {
	    if ('intervalId' in this)
	      clearInterval(this.intervalId);
	    delete this.intervalId;
	    this.jQ.detach();
	    this.jQ = $();
	    return this;
	  };

	  _.withDirInsertAt = function(dir, parent, withDir, oppDir) {
	    var oldParent = this.parent;
	    this.parent = parent;
	    this[dir] = withDir;
	    this[-dir] = oppDir;
	    // by contract, .blur() is called after all has been said and done
	    // and the cursor has actually been moved
	    // FIXME pass cursor to .blur() so text can fix cursor pointers when removing itself
	    if (oldParent !== parent && oldParent.blur) oldParent.blur(this);
	  };
	  _.insDirOf = function(dir, el) {
	    prayDirection(dir);
	    this.jQ.insDirOf(dir, el.jQ);
	    this.withDirInsertAt(dir, el.parent, el[dir], el);
	    this.parent.jQ.addClass('mq-hasCursor');
	    return this;
	  };
	  _.insLeftOf = function(el) { return this.insDirOf(L, el); };
	  _.insRightOf = function(el) { return this.insDirOf(R, el); };

	  _.insAtDirEnd = function(dir, el) {
	    prayDirection(dir);
	    this.jQ.insAtDirEnd(dir, el.jQ);
	    this.withDirInsertAt(dir, el, 0, el.ends[dir]);
	    el.focus();
	    return this;
	  };
	  _.insAtLeftEnd = function(el) { return this.insAtDirEnd(L, el); };
	  _.insAtRightEnd = function(el) { return this.insAtDirEnd(R, el); };

	  /**
	   * jump up or down from one block Node to another:
	   * - cache the current Point in the node we're jumping from
	   * - check if there's a Point in it cached for the node we're jumping to
	   *   + if so put the cursor there,
	   *   + if not seek a position in the node that is horizontally closest to
	   *     the cursor's current position
	   */
	  _.jumpUpDown = function(from, to) {
	    var self = this;
	    self.upDownCache[from.id] = Point.copy(self);
	    var cached = self.upDownCache[to.id];
	    if (cached) {
	      cached[R] ? self.insLeftOf(cached[R]) : self.insAtRightEnd(cached.parent);
	    }
	    else {
	      var pageX = self.offset().left;
	      to.seek(pageX, self);
	    }
	  };
	  _.offset = function() {
	    //in Opera 11.62, .getBoundingClientRect() and hence jQuery::offset()
	    //returns all 0's on inline elements with negative margin-right (like
	    //the cursor) at the end of their parent, so temporarily remove the
	    //negative margin-right when calling jQuery::offset()
	    //Opera bug DSK-360043
	    //http://bugs.jquery.com/ticket/11523
	    //https://github.com/jquery/jquery/pull/717
	    var self = this, offset = self.jQ.removeClass('mq-cursor').offset();
	    self.jQ.addClass('mq-cursor');
	    return offset;
	  }
	  _.unwrapGramp = function() {
	    var gramp = this.parent.parent;
	    var greatgramp = gramp.parent;
	    var rightward = gramp[R];
	    var cursor = this;

	    var leftward = gramp[L];
	    gramp.disown().eachChild(function(uncle) {
	      if (uncle.isEmpty()) return;

	      uncle.children()
	        .adopt(greatgramp, leftward, rightward)
	        .each(function(cousin) {
	          cousin.jQ.insertBefore(gramp.jQ.first());
	        })
	      ;

	      leftward = uncle.ends[R];
	    });

	    if (!this[R]) { //then find something to be rightward to insLeftOf
	      if (this[L])
	        this[R] = this[L][R];
	      else {
	        while (!this[R]) {
	          this.parent = this.parent[R];
	          if (this.parent)
	            this[R] = this.parent.ends[L];
	          else {
	            this[R] = gramp[R];
	            this.parent = greatgramp;
	            break;
	          }
	        }
	      }
	    }
	    if (this[R])
	      this.insLeftOf(this[R]);
	    else
	      this.insAtRightEnd(greatgramp);

	    gramp.jQ.remove();

	    if (gramp[L].siblingDeleted) gramp[L].siblingDeleted(cursor.options, R);
	    if (gramp[R].siblingDeleted) gramp[R].siblingDeleted(cursor.options, L);
	  };
	  _.startSelection = function() {
	    var anticursor = this.anticursor = Point.copy(this);
	    var ancestors = anticursor.ancestors = {}; // a map from each ancestor of
	      // the anticursor, to its child that is also an ancestor; in other words,
	      // the anticursor's ancestor chain in reverse order
	    for (var ancestor = anticursor; ancestor.parent; ancestor = ancestor.parent) {
	      ancestors[ancestor.parent.id] = ancestor;
	    }
	  };
	  _.endSelection = function() {
	    delete this.anticursor;
	  };
	  _.select = function() {
	    var anticursor = this.anticursor;
	    if (this[L] === anticursor[L] && this.parent === anticursor.parent) return false;

	    // Find the lowest common ancestor (`lca`), and the ancestor of the cursor
	    // whose parent is the LCA (which'll be an end of the selection fragment).
	    for (var ancestor = this; ancestor.parent; ancestor = ancestor.parent) {
	      if (ancestor.parent.id in anticursor.ancestors) {
	        var lca = ancestor.parent;
	        break;
	      }
	    }
	    pray('cursor and anticursor in the same tree', lca);
	    // The cursor and the anticursor should be in the same tree, because the
	    // mousemove handler attached to the document, unlike the one attached to
	    // the root HTML DOM element, doesn't try to get the math tree node of the
	    // mousemove target, and Cursor::seek() based solely on coordinates stays
	    // within the tree of `this` cursor's root.

	    // The other end of the selection fragment, the ancestor of the anticursor
	    // whose parent is the LCA.
	    var antiAncestor = anticursor.ancestors[lca.id];

	    // Now we have two either Nodes or Points, guaranteed to have a common
	    // parent and guaranteed that if both are Points, they are not the same,
	    // and we have to figure out which is the left end and which the right end
	    // of the selection.
	    var leftEnd, rightEnd, dir = R;

	    // This is an extremely subtle algorithm.
	    // As a special case, `ancestor` could be a Point and `antiAncestor` a Node
	    // immediately to `ancestor`'s left.
	    // In all other cases,
	    // - both Nodes
	    // - `ancestor` a Point and `antiAncestor` a Node
	    // - `ancestor` a Node and `antiAncestor` a Point
	    // `antiAncestor[R] === rightward[R]` for some `rightward` that is
	    // `ancestor` or to its right, if and only if `antiAncestor` is to
	    // the right of `ancestor`.
	    if (ancestor[L] !== antiAncestor) {
	      for (var rightward = ancestor; rightward; rightward = rightward[R]) {
	        if (rightward[R] === antiAncestor[R]) {
	          dir = L;
	          leftEnd = ancestor;
	          rightEnd = antiAncestor;
	          break;
	        }
	      }
	    }
	    if (dir === R) {
	      leftEnd = antiAncestor;
	      rightEnd = ancestor;
	    }

	    // only want to select Nodes up to Points, can't select Points themselves
	    if (leftEnd instanceof Point) leftEnd = leftEnd[R];
	    if (rightEnd instanceof Point) rightEnd = rightEnd[L];

	    this.hide().selection = lca.selectChildren(leftEnd, rightEnd);
	    this.insDirOf(dir, this.selection.ends[dir]);
	    this.selectionChanged();
	    return true;
	  };

	  _.clearSelection = function() {
	    if (this.selection) {
	      this.selection.clear();
	      delete this.selection;
	      this.selectionChanged();
	    }
	    return this;
	  };
	  _.deleteSelection = function() {
	    if (!this.selection) return;

	    this[L] = this.selection.ends[L][L];
	    this[R] = this.selection.ends[R][R];
	    this.selection.remove();
	    this.selectionChanged();
	    delete this.selection;
	  };
	  _.replaceSelection = function() {
	    var seln = this.selection;
	    if (seln) {
	      this[L] = seln.ends[L][L];
	      this[R] = seln.ends[R][R];
	      delete this.selection;
	    }
	    return seln;
	  };
	});

	var Selection = P(Fragment, function(_, super_) {
	  _.init = function() {
	    super_.init.apply(this, arguments);
	    this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent();
	      //can't do wrapAll(this.jQ = $(...)) because wrapAll will clone it
	  };
	  _.adopt = function() {
	    this.jQ.replaceWith(this.jQ = this.jQ.children());
	    return super_.adopt.apply(this, arguments);
	  };
	  _.clear = function() {
	    // using the browser's native .childNodes property so that we
	    // don't discard text nodes.
	    this.jQ.replaceWith(this.jQ[0].childNodes);
	    return this;
	  };
	  _.join = function(methodName) {
	    return this.fold('', function(fold, child) {
	      return fold + child[methodName]();
	    });
	  };
	});
	/*********************************************
	 * Controller for a MathQuill instance,
	 * on which services are registered with
	 *
	 *   Controller.open(function(_) { ... });
	 *
	 ********************************************/

	var Controller = P(function(_) {
	  _.init = function(root, container, options) {
	    this.id = root.id;
	    this.data = {};

	    this.root = root;
	    this.container = container;
	    this.options = options;

	    root.controller = this;

	    this.cursor = root.cursor = Cursor(root, options);
	    // TODO: stop depending on root.cursor, and rm it
	  };

	  _.handle = function(name, dir) {
	    var handlers = this.options.handlers;
	    if (handlers && handlers.fns[name]) {
	      var mq = handlers.APIClasses[this.KIND_OF_MQ](this);
	      if (dir === L || dir === R) handlers.fns[name](dir, mq);
	      else handlers.fns[name](mq);
	    }
	  };

	  var notifyees = [];
	  this.onNotify = function(f) { notifyees.push(f); };
	  _.notify = function() {
	    for (var i = 0; i < notifyees.length; i += 1) {
	      notifyees[i].apply(this.cursor, arguments);
	    }
	    return this;
	  };
	});
	/*********************************************************
	 * The publicly exposed MathQuill API.
	 ********************************************************/

	var API = {}, Options = P(), optionProcessors = {}, Progenote = P(), EMBEDS = {};

	/**
	 * Interface Versioning (#459, #495) to allow us to virtually guarantee
	 * backcompat. v0.10.x introduces it, so for now, don't completely break the
	 * API for people who don't know about it, just complain with console.warn().
	 *
	 * The methods are shimmed in outro.js so that MQ.MathField.prototype etc can
	 * be accessed.
	 */
	function insistOnInterVer() {
	  if (window.console) console.warn(
	    'You are using the MathQuill API without specifying an interface version, ' +
	    'which will fail in v1.0.0. Easiest fix is to do the following before ' +
	    'doing anything else:\n' +
	    '\n' +
	    '    MathQuill = MathQuill.getInterface(1);\n' +
	    '    // now MathQuill.MathField() works like it used to\n' +
	    '\n' +
	    'See also the "`dev` branch (2014\u20132015) \u2192 v0.10.0 Migration Guide" at\n' +
	    '  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide'
	  );
	}
	// globally exported API object
	function MathQuill(el) {
	  insistOnInterVer();
	  return MQ1(el);
	};
	MathQuill.prototype = Progenote.p;
	MathQuill.interfaceVersion = function(v) {
	  // shim for #459-era interface versioning (ended with #495)
	  if (v !== 1) throw 'Only interface version 1 supported. You specified: ' + v;
	  insistOnInterVer = function() {
	    if (window.console) console.warn(
	      'You called MathQuill.interfaceVersion(1); to specify the interface ' +
	      'version, which will fail in v1.0.0. You can fix this easily by doing ' +
	      'this before doing anything else:\n' +
	      '\n' +
	      '    MathQuill = MathQuill.getInterface(1);\n' +
	      '    // now MathQuill.MathField() works like it used to\n' +
	      '\n' +
	      'See also the "`dev` branch (2014\u20132015) \u2192 v0.10.0 Migration Guide" at\n' +
	      '  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide'
	    );
	  };
	  insistOnInterVer();
	  return MathQuill;
	};
	MathQuill.getInterface = getInterface;

	var MIN = getInterface.MIN = 1, MAX = getInterface.MAX = 2;
	function getInterface(v) {
	  if (!(MIN <= v && v <= MAX)) throw 'Only interface versions between ' +
	    MIN + ' and ' + MAX + ' supported. You specified: ' + v;

	  /**
	   * Function that takes an HTML element and, if it's the root HTML element of a
	   * static math or math or text field, returns an API object for it (else, null).
	   *
	   *   var mathfield = MQ.MathField(mathFieldSpan);
	   *   assert(MQ(mathFieldSpan).id === mathfield.id);
	   *   assert(MQ(mathFieldSpan).id === MQ(mathFieldSpan).id);
	   *
	   */
	  function MQ(el) {
	    if (!el || !el.nodeType) return null; // check that `el` is a HTML element, using the
	      // same technique as jQuery: https://github.com/jquery/jquery/blob/679536ee4b7a92ae64a5f58d90e9cc38c001e807/src/core/init.js#L92
	    var blockId = $(el).children('.mq-root-block').attr(mqBlockId);
	    var ctrlr = blockId && Node.byId[blockId].controller;
	    return ctrlr ? APIClasses[ctrlr.KIND_OF_MQ](ctrlr) : null;
	  };
	  var APIClasses = {};

	  MQ.L = L;
	  MQ.R = R;

	  function config(currentOptions, newOptions) {
	    if (newOptions && newOptions.handlers) {
	      newOptions.handlers = { fns: newOptions.handlers, APIClasses: APIClasses };
	    }
	    for (var name in newOptions) if (newOptions.hasOwnProperty(name)) {
	      var value = newOptions[name], processor = optionProcessors[name];
	      currentOptions[name] = (processor ? processor(value) : value);
	    }
	  }
	  MQ.config = function(opts) { config(Options.p, opts); return this; };
	  MQ.registerEmbed = function(name, options) {
	    if (!/^[a-z][a-z0-9]*$/i.test(name)) {
	      throw 'Embed name must start with letter and be only letters and digits';
	    }
	    EMBEDS[name] = options;
	  };

	  var AbstractMathQuill = APIClasses.AbstractMathQuill = P(Progenote, function(_) {
	    _.init = function(ctrlr) {
	      this.__controller = ctrlr;
	      this.__options = ctrlr.options;
	      this.id = ctrlr.id;
	      this.data = ctrlr.data;
	    };
	    _.__mathquillify = function(classNames) {
	      var ctrlr = this.__controller, root = ctrlr.root, el = ctrlr.container;
	      ctrlr.createTextarea();

	      var contents = el.addClass(classNames).contents().detach();
	      root.jQ =
	        $('<span class="mq-root-block"/>').attr(mqBlockId, root.id).appendTo(el);
	      this.latex(contents.text());

	      this.revert = function() {
	        return el.empty().unbind('.mathquill')
	        .removeClass('mq-editable-field mq-math-mode mq-text-mode')
	        .append(contents);
	      };
	    };
	    _.config = function(opts) { config(this.__options, opts); return this; };
	    _.el = function() { return this.__controller.container[0]; };
	    _.text = function() { return this.__controller.exportText(); };
	    _.latex = function(latex) {
	      if (arguments.length > 0) {
	        this.__controller.renderLatexMath(latex);
	        if (this.__controller.blurred) this.__controller.cursor.hide().parent.blur();
	        return this;
	      }
	      return this.__controller.exportLatex();
	    };
	    _.html = function() {
	      return this.__controller.root.jQ.html()
	        .replace(/ mathquill-(?:command|block)-id="?\d+"?/g, '')
	        .replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, '')
	        .replace(/ mq-hasCursor|mq-hasCursor ?/, '')
	        .replace(/ class=(""|(?= |>))/g, '');
	    };
	    _.reflow = function() {
	      this.__controller.root.postOrder('reflow');
	      return this;
	    };
	  });
	  MQ.prototype = AbstractMathQuill.prototype;

	  APIClasses.EditableField = P(AbstractMathQuill, function(_, super_) {
	    _.__mathquillify = function() {
	      super_.__mathquillify.apply(this, arguments);
	      this.__controller.editable = true;
	      this.__controller.delegateMouseEvents();
	      this.__controller.editablesTextareaEvents();
	      return this;
	    };
	    _.focus = function() { this.__controller.textarea.focus(); return this; };
	    _.blur = function() { this.__controller.textarea.blur(); return this; };
	    _.write = function(latex) {
	      this.__controller.writeLatex(latex);
	      this.__controller.scrollHoriz();
	      if (this.__controller.blurred) this.__controller.cursor.hide().parent.blur();
	      return this;
	    };
	    _.cmd = function(cmd) {
	      var ctrlr = this.__controller.notify(), cursor = ctrlr.cursor;
	      if (/^\\[a-z]+$/i.test(cmd)) {
	        cmd = cmd.slice(1);
	        var klass = LatexCmds[cmd];
	        if (klass) {
	          cmd = klass(cmd);
	          if (cursor.selection) cmd.replaces(cursor.replaceSelection());
	          cmd.createLeftOf(cursor.show());
	          this.__controller.scrollHoriz();
	        }
	        else /* TODO: API needs better error reporting */;
	      }
	      else cursor.parent.write(cursor, cmd);
	      if (ctrlr.blurred) cursor.hide().parent.blur();
	      return this;
	    };
	    _.select = function() {
	      var ctrlr = this.__controller;
	      ctrlr.notify('move').cursor.insAtRightEnd(ctrlr.root);
	      while (ctrlr.cursor[L]) ctrlr.selectLeft();
	      return this;
	    };
	    _.clearSelection = function() {
	      this.__controller.cursor.clearSelection();
	      return this;
	    };

	    _.moveToDirEnd = function(dir) {
	      this.__controller.notify('move').cursor.insAtDirEnd(dir, this.__controller.root);
	      return this;
	    };
	    _.moveToLeftEnd = function() { return this.moveToDirEnd(L); };
	    _.moveToRightEnd = function() { return this.moveToDirEnd(R); };

	    _.keystroke = function(keys) {
	      var keys = keys.replace(/^\s+|\s+$/g, '').split(/\s+/);
	      for (var i = 0; i < keys.length; i += 1) {
	        this.__controller.keystroke(keys[i], { preventDefault: noop });
	      }
	      return this;
	    };
	    _.typedText = function(text) {
	      for (var i = 0; i < text.length; i += 1) this.__controller.typedText(text.charAt(i));
	      return this;
	    };
	    _.dropEmbedded = function(pageX, pageY, options) {
	      var clientX = pageX - $(window).scrollLeft();
	      var clientY = pageY - $(window).scrollTop();

	      var el = document.elementFromPoint(clientX, clientY);
	      this.__controller.seek($(el), pageX, pageY);
	      var cmd = Embed().setOptions(options);
	      cmd.createLeftOf(this.__controller.cursor);
	    };
	    _.clickAt = function(clientX, clientY, target) {
	      target = target || document.elementFromPoint(clientX, clientY);

	      var ctrlr = this.__controller, root = ctrlr.root;
	      if (!jQuery.contains(root.jQ[0], target)) target = root.jQ[0];
	      ctrlr.seek($(target), clientX + pageXOffset, clientY + pageYOffset);
	      if (ctrlr.blurred) this.focus();
	      return this;
	    };
	    _.ignoreNextMousedown = function(fn) {
	      this.__controller.cursor.options.ignoreNextMousedown = fn;
	      return this;
	    };
	  });
	  MQ.EditableField = function() { throw "wtf don't call me, I'm 'abstract'"; };
	  MQ.EditableField.prototype = APIClasses.EditableField.prototype;

	  /**
	   * Export the API functions that MathQuill-ify an HTML element into API objects
	   * of each class. If the element had already been MathQuill-ified but into a
	   * different kind (or it's not an HTML element), return null.
	   */
	  for (var kind in API) (function(kind, defAPIClass) {
	    var APIClass = APIClasses[kind] = defAPIClass(APIClasses);
	    MQ[kind] = function(el, opts) {
	      var mq = MQ(el);
	      if (mq instanceof APIClass || !el || !el.nodeType) return mq;
	      var ctrlr = Controller(APIClass.RootBlock(), $(el), Options());
	      ctrlr.KIND_OF_MQ = kind;
	      return APIClass(ctrlr).__mathquillify(opts, v);
	    };
	    MQ[kind].prototype = APIClass.prototype;
	  }(kind, API[kind]));

	  return MQ;
	}

	MathQuill.noConflict = function() {
	  window.MathQuill = origMathQuill;
	  return MathQuill;
	};
	var origMathQuill = window.MathQuill;
	window.MathQuill = MathQuill;

	function RootBlockMixin(_) {
	  var names = 'moveOutOf deleteOutOf selectOutOf upOutOf downOutOf'.split(' ');
	  for (var i = 0; i < names.length; i += 1) (function(name) {
	    _[name] = function(dir) { this.controller.handle(name, dir); };
	  }(names[i]));
	  _.reflow = function() {
	    this.controller.handle('reflow');
	    this.controller.handle('edited');
	    this.controller.handle('edit');
	  };
	}
	var Parser = P(function(_, super_, Parser) {
	  // The Parser object is a wrapper for a parser function.
	  // Externally, you use one to parse a string by calling
	  //   var result = SomeParser.parse('Me Me Me! Parse Me!');
	  // You should never call the constructor, rather you should
	  // construct your Parser from the base parsers and the
	  // parser combinator methods.

	  function parseError(stream, message) {
	    if (stream) {
	      stream = "'"+stream+"'";
	    }
	    else {
	      stream = 'EOF';
	    }

	    throw 'Parse Error: '+message+' at '+stream;
	  }

	  _.init = function(body) { this._ = body; };

	  _.parse = function(stream) {
	    return this.skip(eof)._(''+stream, success, parseError);

	    function success(stream, result) { return result; }
	  };

	  // -*- primitive combinators -*- //
	  _.or = function(alternative) {
	    pray('or is passed a parser', alternative instanceof Parser);

	    var self = this;

	    return Parser(function(stream, onSuccess, onFailure) {
	      return self._(stream, onSuccess, failure);

	      function failure(newStream) {
	        return alternative._(stream, onSuccess, onFailure);
	      }
	    });
	  };

	  _.then = function(next) {
	    var self = this;

	    return Parser(function(stream, onSuccess, onFailure) {
	      return self._(stream, success, onFailure);

	      function success(newStream, result) {
	        var nextParser = (next instanceof Parser ? next : next(result));
	        pray('a parser is returned', nextParser instanceof Parser);
	        return nextParser._(newStream, onSuccess, onFailure);
	      }
	    });
	  };

	  // -*- optimized iterative combinators -*- //
	  _.many = function() {
	    var self = this;

	    return Parser(function(stream, onSuccess, onFailure) {
	      var xs = [];
	      while (self._(stream, success, failure));
	      return onSuccess(stream, xs);

	      function success(newStream, x) {
	        stream = newStream;
	        xs.push(x);
	        return true;
	      }

	      function failure() {
	        return false;
	      }
	    });
	  };

	  _.times = function(min, max) {
	    if (arguments.length < 2) max = min;
	    var self = this;

	    return Parser(function(stream, onSuccess, onFailure) {
	      var xs = [];
	      var result = true;
	      var failure;

	      for (var i = 0; i < min; i += 1) {
	        result = self._(stream, success, firstFailure);
	        if (!result) return onFailure(stream, failure);
	      }

	      for (; i < max && result; i += 1) {
	        result = self._(stream, success, secondFailure);
	      }

	      return onSuccess(stream, xs);

	      function success(newStream, x) {
	        xs.push(x);
	        stream = newStream;
	        return true;
	      }

	      function firstFailure(newStream, msg) {
	        failure = msg;
	        stream = newStream;
	        return false;
	      }

	      function secondFailure(newStream, msg) {
	        return false;
	      }
	    });
	  };

	  // -*- higher-level combinators -*- //
	  _.result = function(res) { return this.then(succeed(res)); };
	  _.atMost = function(n) { return this.times(0, n); };
	  _.atLeast = function(n) {
	    var self = this;
	    return self.times(n).then(function(start) {
	      return self.many().map(function(end) {
	        return start.concat(end);
	      });
	    });
	  };

	  _.map = function(fn) {
	    return this.then(function(result) { return succeed(fn(result)); });
	  };

	  _.skip = function(two) {
	    return this.then(function(result) { return two.result(result); });
	  };

	  // -*- primitive parsers -*- //
	  var string = this.string = function(str) {
	    var len = str.length;
	    var expected = "expected '"+str+"'";

	    return Parser(function(stream, onSuccess, onFailure) {
	      var head = stream.slice(0, len);

	      if (head === str) {
	        return onSuccess(stream.slice(len), head);
	      }
	      else {
	        return onFailure(stream, expected);
	      }
	    });
	  };

	  var regex = this.regex = function(re) {
	    pray('regexp parser is anchored', re.toString().charAt(1) === '^');

	    var expected = 'expected '+re;

	    return Parser(function(stream, onSuccess, onFailure) {
	      var match = re.exec(stream);

	      if (match) {
	        var result = match[0];
	        return onSuccess(stream.slice(result.length), result);
	      }
	      else {
	        return onFailure(stream, expected);
	      }
	    });
	  };

	  var succeed = Parser.succeed = function(result) {
	    return Parser(function(stream, onSuccess) {
	      return onSuccess(stream, result);
	    });
	  };

	  var fail = Parser.fail = function(msg) {
	    return Parser(function(stream, _, onFailure) {
	      return onFailure(stream, msg);
	    });
	  };

	  var letter = Parser.letter = regex(/^[a-z]/i);
	  var letters = Parser.letters = regex(/^[a-z]*/i);
	  var digit = Parser.digit = regex(/^[0-9]/);
	  var digits = Parser.digits = regex(/^[0-9]*/);
	  var whitespace = Parser.whitespace = regex(/^\s+/);
	  var optWhitespace = Parser.optWhitespace = regex(/^\s*/);

	  var any = Parser.any = Parser(function(stream, onSuccess, onFailure) {
	    if (!stream) return onFailure(stream, 'expected any character');

	    return onSuccess(stream.slice(1), stream.charAt(0));
	  });

	  var all = Parser.all = Parser(function(stream, onSuccess, onFailure) {
	    return onSuccess('', stream);
	  });

	  var eof = Parser.eof = Parser(function(stream, onSuccess, onFailure) {
	    if (stream) return onFailure(stream, 'expected EOF');

	    return onSuccess(stream, stream);
	  });
	});
	/*************************************************
	 * Sane Keyboard Events Shim
	 *
	 * An abstraction layer wrapping the textarea in
	 * an object with methods to manipulate and listen
	 * to events on, that hides all the nasty cross-
	 * browser incompatibilities behind a uniform API.
	 *
	 * Design goal: This is a *HARD* internal
	 * abstraction barrier. Cross-browser
	 * inconsistencies are not allowed to leak through
	 * and be dealt with by event handlers. All future
	 * cross-browser issues that arise must be dealt
	 * with here, and if necessary, the API updated.
	 *
	 * Organization:
	 * - key values map and stringify()
	 * - saneKeyboardEvents()
	 *    + defer() and flush()
	 *    + event handler logic
	 *    + attach event handlers and export methods
	 ************************************************/

	var saneKeyboardEvents = (function() {
	  // The following [key values][1] map was compiled from the
	  // [DOM3 Events appendix section on key codes][2] and
	  // [a widely cited report on cross-browser tests of key codes][3],
	  // except for 10: 'Enter', which I've empirically observed in Safari on iOS
	  // and doesn't appear to conflict with any other known key codes.
	  //
	  // [1]: http://www.w3.org/TR/2012/WD-DOM-Level-3-Events-20120614/#keys-keyvalues
	  // [2]: http://www.w3.org/TR/2012/WD-DOM-Level-3-Events-20120614/#fixed-virtual-key-codes
	  // [3]: http://unixpapa.com/js/key.html
	  var KEY_VALUES = {
	    8: 'Backspace',
	    9: 'Tab',

	    10: 'Enter', // for Safari on iOS

	    13: 'Enter',

	    16: 'Shift',
	    17: 'Control',
	    18: 'Alt',
	    20: 'CapsLock',

	    27: 'Esc',

	    32: 'Spacebar',

	    33: 'PageUp',
	    34: 'PageDown',
	    35: 'End',
	    36: 'Home',

	    37: 'Left',
	    38: 'Up',
	    39: 'Right',
	    40: 'Down',

	    45: 'Insert',

	    46: 'Del',

	    144: 'NumLock'
	  };

	  // To the extent possible, create a normalized string representation
	  // of the key combo (i.e., key code and modifier keys).
	  function stringify(evt) {
	    var which = evt.which || evt.keyCode;
	    var keyVal = KEY_VALUES[which];
	    var key;
	    var modifiers = [];

	    if (evt.ctrlKey) modifiers.push('Ctrl');
	    if (evt.originalEvent && evt.originalEvent.metaKey) modifiers.push('Meta');
	    if (evt.altKey) modifiers.push('Alt');
	    if (evt.shiftKey) modifiers.push('Shift');

	    key = keyVal || String.fromCharCode(which);

	    if (!modifiers.length && !keyVal) return key;

	    modifiers.push(key);
	    return modifiers.join('-');
	  }

	  // create a keyboard events shim that calls callbacks at useful times
	  // and exports useful public methods
	  return function saneKeyboardEvents(el, handlers) {
	    var keydown = null;
	    var keypress = null;

	    var textarea = jQuery(el);
	    var target = jQuery(handlers.container || textarea);

	    // checkTextareaFor() is called after keypress or paste events to
	    // say "Hey, I think something was just typed" or "pasted" (resp.),
	    // so that at all subsequent opportune times (next event or timeout),
	    // will check for expected typed or pasted text.
	    // Need to check repeatedly because #135: in Safari 5.1 (at least),
	    // after selecting something and then typing, the textarea is
	    // incorrectly reported as selected during the input event (but not
	    // subsequently).
	    var checkTextarea = noop, timeoutId;
	    function checkTextareaFor(checker) {
	      checkTextarea = checker;
	      clearTimeout(timeoutId);
	      timeoutId = setTimeout(checker);
	    }
	    target.bind('keydown keypress input keyup focusout paste', function(e) { checkTextarea(e); });


	    // -*- public methods -*- //
	    function select(text) {
	      // check textarea at least once/one last time before munging (so
	      // no race condition if selection happens after keypress/paste but
	      // before checkTextarea), then never again ('cos it's been munged)
	      checkTextarea();
	      checkTextarea = noop;
	      clearTimeout(timeoutId);

	      textarea.val(text);
	      if (text && textarea[0].select) textarea[0].select();
	      shouldBeSelected = !!text;
	    }
	    var shouldBeSelected = false;

	    // -*- helper subroutines -*- //

	    // Determine whether there's a selection in the textarea.
	    // This will always return false in IE < 9, which don't support
	    // HTMLTextareaElement::selection{Start,End}.
	    function hasSelection() {
	      var dom = textarea[0];

	      if (!('selectionStart' in dom)) return false;
	      return dom.selectionStart !== dom.selectionEnd;
	    }

	    function handleKey() {
	      handlers.keystroke(stringify(keydown), keydown);
	    }

	    // -*- event handlers -*- //
	    function onKeydown(e) {
	      keydown = e;
	      keypress = null;

	      if (shouldBeSelected) checkTextareaFor(function(e) {
	        if (!(e && e.type === 'focusout') && textarea[0].select) {
	          textarea[0].select(); // re-select textarea in case it's an unrecognized
	        }
	        checkTextarea = noop; // key that clears the selection, then never
	        clearTimeout(timeoutId); // again, 'cos next thing might be blur
	      });

	      handleKey();
	    }

	    function onKeypress(e) {
	      // call the key handler for repeated keypresses.
	      // This excludes keypresses that happen directly
	      // after keydown.  In that case, there will be
	      // no previous keypress, so we skip it here
	      if (keydown && keypress) handleKey();

	      keypress = e;

	      checkTextareaFor(typedText);
	    }
	    function typedText() {
	      // If there is a selection, the contents of the textarea couldn't
	      // possibly have just been typed in.
	      // This happens in browsers like Firefox and Opera that fire
	      // keypress for keystrokes that are not text entry and leave the
	      // selection in the textarea alone, such as Ctrl-C.
	      // Note: we assume that browsers that don't support hasSelection()
	      // also never fire keypress on keystrokes that are not text entry.
	      // This seems reasonably safe because:
	      // - all modern browsers including IE 9+ support hasSelection(),
	      //   making it extremely unlikely any browser besides IE < 9 won't
	      // - as far as we know IE < 9 never fires keypress on keystrokes
	      //   that aren't text entry, which is only as reliable as our
	      //   tests are comprehensive, but the IE < 9 way to do
	      //   hasSelection() is poorly documented and is also only as
	      //   reliable as our tests are comprehensive
	      // If anything like #40 or #71 is reported in IE < 9, see
	      // b1318e5349160b665003e36d4eedd64101ceacd8
	      if (hasSelection()) return;

	      var text = textarea.val();
	      if (text.length === 1) {
	        textarea.val('');
	        handlers.typedText(text);
	      } // in Firefox, keys that don't type text, just clear seln, fire keypress
	      // https://github.com/mathquill/mathquill/issues/293#issuecomment-40997668
	      else if (text && textarea[0].select) textarea[0].select(); // re-select if that's why we're here
	    }

	    function onBlur() { keydown = keypress = null; }

	    function onPaste(e) {
	      // browsers are dumb.
	      //
	      // In Linux, middle-click pasting causes onPaste to be called,
	      // when the textarea is not necessarily focused.  We focus it
	      // here to ensure that the pasted text actually ends up in the
	      // textarea.
	      //
	      // It's pretty nifty that by changing focus in this handler,
	      // we can change the target of the default action.  (This works
	      // on keydown too, FWIW).
	      //
	      // And by nifty, we mean dumb (but useful sometimes).
	      textarea.focus();

	      checkTextareaFor(pastedText);
	    }
	    function pastedText() {
	      var text = textarea.val();
	      textarea.val('');
	      if (text) handlers.paste(text);
	    }

	    // -*- attach event handlers -*- //
	    target.bind({
	      keydown: onKeydown,
	      keypress: onKeypress,
	      focusout: onBlur,
	      paste: onPaste
	    });

	    // -*- export public methods -*- //
	    return {
	      select: select
	    };
	  };
	}());
	/***********************************************
	 * Export math in a human-readable text format
	 * As you can see, only half-baked so far.
	 **********************************************/

	Controller.open(function(_, super_) {
	  _.exportText = function() {
	    return this.root.foldChildren('', function(text, child) {
	      return text + child.text();
	    });
	  };
	});
	Controller.open(function(_) {
	  _.focusBlurEvents = function() {
	    var ctrlr = this, root = ctrlr.root, cursor = ctrlr.cursor;
	    var blurTimeout;
	    ctrlr.textarea.focus(function() {
	      ctrlr.blurred = false;
	      clearTimeout(blurTimeout);
	      ctrlr.container.addClass('mq-focused');
	      if (!cursor.parent)
	        cursor.insAtRightEnd(root);
	      if (cursor.selection) {
	        cursor.selection.jQ.removeClass('mq-blur');
	        ctrlr.selectionChanged(); //re-select textarea contents after tabbing away and back
	      }
	      else
	        cursor.show();
	    }).blur(function() {
	      ctrlr.blurred = true;
	      blurTimeout = setTimeout(function() { // wait for blur on window; if
	        root.postOrder('intentionalBlur'); // none, intentional blur: #264
	        cursor.clearSelection().endSelection();
	        blur();
	      });
	      $(window).on('blur', windowBlur);
	    });
	    function windowBlur() { // blur event also fired on window, just switching
	      clearTimeout(blurTimeout); // tabs/windows, not intentional blur
	      if (cursor.selection) cursor.selection.jQ.addClass('mq-blur');
	      blur();
	    }
	    function blur() { // not directly in the textarea blur handler so as to be
	      cursor.hide().parent.blur(); // synchronous with/in the same frame as
	      ctrlr.container.removeClass('mq-focused'); // clearing/blurring selection
	      $(window).off('blur', windowBlur);
	    }
	    ctrlr.blurred = true;
	    cursor.hide().parent.blur();
	  };
	});

	/**
	 * TODO: I wanted to move MathBlock::focus and blur here, it would clean
	 * up lots of stuff like, TextBlock::focus is set to MathBlock::focus
	 * and TextBlock::blur calls MathBlock::blur, when instead they could
	 * use inheritance and super_.
	 *
	 * Problem is, there's lots of calls to .focus()/.blur() on nodes
	 * outside Controller::focusBlurEvents(), such as .postOrder('blur') on
	 * insertion, which if MathBlock::blur becomes Node::blur, would add the
	 * 'blur' CSS class to all Symbol's (because .isEmpty() is true for all
	 * of them).
	 *
	 * I'm not even sure there aren't other troublesome calls to .focus() or
	 * .blur(), so this is TODO for now.
	 */
	/*****************************************
	 * Deals with the browser DOM events from
	 * interaction with the typist.
	 ****************************************/

	Controller.open(function(_) {
	  _.keystroke = function(key, evt) {
	    this.cursor.parent.keystroke(key, evt, this);
	  };
	});

	Node.open(function(_) {
	  _.keystroke = function(key, e, ctrlr) {
	    var cursor = ctrlr.cursor;

	    switch (key) {
	    case 'Ctrl-Shift-Backspace':
	    case 'Ctrl-Backspace':
	      ctrlr.ctrlDeleteDir(L);
	      break;

	    case 'Shift-Backspace':
	    case 'Backspace':
	      ctrlr.backspace();
	      break;

	    // Tab or Esc -> go one block right if it exists, else escape right.
	    case 'Esc':
	    case 'Tab':
	      ctrlr.escapeDir(R, key, e);
	      return;

	    // Shift-Tab -> go one block left if it exists, else escape left.
	    case 'Shift-Tab':
	    case 'Shift-Esc':
	      ctrlr.escapeDir(L, key, e);
	      return;

	    // End -> move to the end of the current block.
	    case 'End':
	      ctrlr.notify('move').cursor.insAtRightEnd(cursor.parent);
	      break;

	    // Ctrl-End -> move all the way to the end of the root block.
	    case 'Ctrl-End':
	      ctrlr.notify('move').cursor.insAtRightEnd(ctrlr.root);
	      break;

	    // Shift-End -> select to the end of the current block.
	    case 'Shift-End':
	      while (cursor[R]) {
	        ctrlr.selectRight();
	      }
	      break;

	    // Ctrl-Shift-End -> select to the end of the root block.
	    case 'Ctrl-Shift-End':
	      while (cursor[R] || cursor.parent !== ctrlr.root) {
	        ctrlr.selectRight();
	      }
	      break;

	    // Home -> move to the start of the root block or the current block.
	    case 'Home':
	      ctrlr.notify('move').cursor.insAtLeftEnd(cursor.parent);
	      break;

	    // Ctrl-Home -> move to the start of the current block.
	    case 'Ctrl-Home':
	      ctrlr.notify('move').cursor.insAtLeftEnd(ctrlr.root);
	      break;

	    // Shift-Home -> select to the start of the current block.
	    case 'Shift-Home':
	      while (cursor[L]) {
	        ctrlr.selectLeft();
	      }
	      break;

	    // Ctrl-Shift-Home -> move to the start of the root block.
	    case 'Ctrl-Shift-Home':
	      while (cursor[L] || cursor.parent !== ctrlr.root) {
	        ctrlr.selectLeft();
	      }
	      break;

	    case 'Left': ctrlr.moveLeft(); break;
	    case 'Shift-Left': ctrlr.selectLeft(); break;
	    case 'Ctrl-Left': break;

	    case 'Right': ctrlr.moveRight(); break;
	    case 'Shift-Right': ctrlr.selectRight(); break;
	    case 'Ctrl-Right': break;

	    case 'Up': ctrlr.moveUp(); break;
	    case 'Down': ctrlr.moveDown(); break;

	    case 'Shift-Up':
	      if (cursor[L]) {
	        while (cursor[L]) ctrlr.selectLeft();
	      } else {
	        ctrlr.selectLeft();
	      }

	    case 'Shift-Down':
	      if (cursor[R]) {
	        while (cursor[R]) ctrlr.selectRight();
	      }
	      else {
	        ctrlr.selectRight();
	      }

	    case 'Ctrl-Up': break;
	    case 'Ctrl-Down': break;

	    case 'Ctrl-Shift-Del':
	    case 'Ctrl-Del':
	      ctrlr.ctrlDeleteDir(R);
	      break;

	    case 'Shift-Del':
	    case 'Del':
	      ctrlr.deleteForward();
	      break;

	    case 'Meta-A':
	    case 'Ctrl-A':
	      ctrlr.notify('move').cursor.insAtRightEnd(ctrlr.root);
	      while (cursor[L]) ctrlr.selectLeft();
	      break;

	    default:
	      return;
	    }
	    e.preventDefault();
	    ctrlr.scrollHoriz();
	  };

	  _.moveOutOf = // called by Controller::escapeDir, moveDir
	  _.moveTowards = // called by Controller::moveDir
	  _.deleteOutOf = // called by Controller::deleteDir
	  _.deleteTowards = // called by Controller::deleteDir
	  _.unselectInto = // called by Controller::selectDir
	  _.selectOutOf = // called by Controller::selectDir
	  _.selectTowards = // called by Controller::selectDir
	    function() { pray('overridden or never called on this node'); };
	});

	Controller.open(function(_) {
	  this.onNotify(function(e) {
	    if (e === 'move' || e === 'upDown') this.show().clearSelection();
	  });
	  _.escapeDir = function(dir, key, e) {
	    prayDirection(dir);
	    var cursor = this.cursor;

	    // only prevent default of Tab if not in the root editable
	    if (cursor.parent !== this.root) e.preventDefault();

	    // want to be a noop if in the root editable (in fact, Tab has an unrelated
	    // default browser action if so)
	    if (cursor.parent === this.root) return;

	    cursor.parent.moveOutOf(dir, cursor);
	    return this.notify('move');
	  };

	  optionProcessors.leftRightIntoCmdGoes = function(updown) {
	    if (updown && updown !== 'up' && updown !== 'down') {
	      throw '"up" or "down" required for leftRightIntoCmdGoes option, '
	            + 'got "'+updown+'"';
	    }
	    return updown;
	  };
	  _.moveDir = function(dir) {
	    prayDirection(dir);
	    var cursor = this.cursor, updown = cursor.options.leftRightIntoCmdGoes;

	    if (cursor.selection) {
	      cursor.insDirOf(dir, cursor.selection.ends[dir]);
	    }
	    else if (cursor[dir]) cursor[dir].moveTowards(dir, cursor, updown);
	    else cursor.parent.moveOutOf(dir, cursor, updown);

	    return this.notify('move');
	  };
	  _.moveLeft = function() { return this.moveDir(L); };
	  _.moveRight = function() { return this.moveDir(R); };

	  /**
	   * moveUp and moveDown have almost identical algorithms:
	   * - first check left and right, if so insAtLeft/RightEnd of them
	   * - else check the parent's 'upOutOf'/'downOutOf' property:
	   *   + if it's a function, call it with the cursor as the sole argument and
	   *     use the return value as if it were the value of the property
	   *   + if it's a Node, jump up or down into it:
	   *     - if there is a cached Point in the block, insert there
	   *     - else, seekHoriz within the block to the current x-coordinate (to be
	   *       as close to directly above/below the current position as possible)
	   *   + unless it's exactly `true`, stop bubbling
	   */
	  _.moveUp = function() { return moveUpDown(this, 'up'); };
	  _.moveDown = function() { return moveUpDown(this, 'down'); };
	  function moveUpDown(self, dir) {
	    var cursor = self.notify('upDown').cursor;
	    var dirInto = dir+'Into', dirOutOf = dir+'OutOf';
	    if (cursor[R][dirInto]) cursor.insAtLeftEnd(cursor[R][dirInto]);
	    else if (cursor[L][dirInto]) cursor.insAtRightEnd(cursor[L][dirInto]);
	    else {
	      cursor.parent.bubble(function(ancestor) {
	        var prop = ancestor[dirOutOf];
	        if (prop) {
	          if (typeof prop === 'function') prop = ancestor[dirOutOf](cursor);
	          if (prop instanceof Node) cursor.jumpUpDown(ancestor, prop);
	          if (prop !== true) return false;
	        }
	      });
	    }
	    return self;
	  }
	  this.onNotify(function(e) { if (e !== 'upDown') this.upDownCache = {}; });

	  this.onNotify(function(e) { if (e === 'edit') this.show().deleteSelection(); });
	  _.deleteDir = function(dir) {
	    prayDirection(dir);
	    var cursor = this.cursor;

	    var hadSelection = cursor.selection;
	    this.notify('edit'); // deletes selection if present
	    if (!hadSelection) {
	      if (cursor[dir]) cursor[dir].deleteTowards(dir, cursor);
	      else cursor.parent.deleteOutOf(dir, cursor);
	    }

	    if (cursor[L].siblingDeleted) cursor[L].siblingDeleted(cursor.options, R);
	    if (cursor[R].siblingDeleted) cursor[R].siblingDeleted(cursor.options, L);
	    cursor.parent.bubble('reflow');

	    return this;
	  };
	  _.ctrlDeleteDir = function(dir) {
	    prayDirection(dir);
	    var cursor = this.cursor;
	    if (!cursor[L] || cursor.selection) return ctrlr.deleteDir();

	    this.notify('edit');
	    Fragment(cursor.parent.ends[L], cursor[L]).remove();
	    cursor.insAtDirEnd(L, cursor.parent);

	    if (cursor[L].siblingDeleted) cursor[L].siblingDeleted(cursor.options, R);
	    if (cursor[R].siblingDeleted) cursor[R].siblingDeleted(cursor.options, L);
	    cursor.parent.bubble('reflow');

	    return this;
	  };
	  _.backspace = function() { return this.deleteDir(L); };
	  _.deleteForward = function() { return this.deleteDir(R); };

	  this.onNotify(function(e) { if (e !== 'select') this.endSelection(); });
	  _.selectDir = function(dir) {
	    var cursor = this.notify('select').cursor, seln = cursor.selection;
	    prayDirection(dir);

	    if (!cursor.anticursor) cursor.startSelection();

	    var node = cursor[dir];
	    if (node) {
	      // "if node we're selecting towards is inside selection (hence retracting)
	      // and is on the *far side* of the selection (hence is only node selected)
	      // and the anticursor is *inside* that node, not just on the other side"
	      if (seln && seln.ends[dir] === node && cursor.anticursor[-dir] !== node) {
	        node.unselectInto(dir, cursor);
	      }
	      else node.selectTowards(dir, cursor);
	    }
	    else cursor.parent.selectOutOf(dir, cursor);

	    cursor.clearSelection();
	    cursor.select() || cursor.show();
	  };
	  _.selectLeft = function() { return this.selectDir(L); };
	  _.selectRight = function() { return this.selectDir(R); };
	});
	// Parser MathBlock
	var latexMathParser = (function() {
	  function commandToBlock(cmd) { // can also take in a Fragment
	    var block = MathBlock();
	    cmd.adopt(block, 0, 0);
	    return block;
	  }
	  function joinBlocks(blocks) {
	    var firstBlock = blocks[0] || MathBlock();

	    for (var i = 1; i < blocks.length; i += 1) {
	      blocks[i].children().adopt(firstBlock, firstBlock.ends[R], 0);
	    }

	    return firstBlock;
	  }

	  var string = Parser.string;
	  var regex = Parser.regex;
	  var letter = Parser.letter;
	  var any = Parser.any;
	  var optWhitespace = Parser.optWhitespace;
	  var succeed = Parser.succeed;
	  var fail = Parser.fail;

	  // Parsers yielding either MathCommands, or Fragments of MathCommands
	  //   (either way, something that can be adopted by a MathBlock)
	  var variable = letter.map(function(c) { return Letter(c); });
	  var symbol = regex(/^[^${}\\_^]/).map(function(c) { return VanillaSymbol(c); });

	  var controlSequence =
	    regex(/^[^\\a-eg-zA-Z]/) // hotfix #164; match MathBlock::write
	    .or(string('\\').then(
	      regex(/^[a-z]+/i)
	      .or(regex(/^\s+/).result(' '))
	      .or(any)
	    )).then(function(ctrlSeq) {
	      var cmdKlass = LatexCmds[ctrlSeq];

	      if (cmdKlass) {
	        return cmdKlass(ctrlSeq).parser();
	      }
	      else {
	        return fail('unknown command: \\'+ctrlSeq);
	      }
	    })
	  ;

	  var command =
	    controlSequence
	    .or(variable)
	    .or(symbol)
	  ;

	  // Parsers yielding MathBlocks
	  var mathGroup = string('{').then(function() { return mathSequence; }).skip(string('}'));
	  var mathBlock = optWhitespace.then(mathGroup.or(command.map(commandToBlock)));
	  var mathSequence = mathBlock.many().map(joinBlocks).skip(optWhitespace);

	  var optMathBlock =
	    string('[').then(
	      mathBlock.then(function(block) {
	        return block.join('latex') !== ']' ? succeed(block) : fail();
	      })
	      .many().map(joinBlocks).skip(optWhitespace)
	    ).skip(string(']'))
	  ;

	  var latexMath = mathSequence;

	  latexMath.block = mathBlock;
	  latexMath.optBlock = optMathBlock;
	  return latexMath;
	})();

	Controller.open(function(_, super_) {
	  _.exportLatex = function() {
	    return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/ig,'$1');
	  };
	  _.writeLatex = function(latex) {
	    var cursor = this.notify('edit').cursor;

	    var all = Parser.all;
	    var eof = Parser.eof;

	    var block = latexMathParser.skip(eof).or(all.result(false)).parse(latex);

	    if (block && !block.isEmpty()) {
	      block.children().adopt(cursor.parent, cursor[L], cursor[R]);
	      var jQ = block.jQize();
	      jQ.insertBefore(cursor.jQ);
	      cursor[L] = block.ends[R];
	      block.finalizeInsert(cursor.options, cursor);
	      if (block.ends[R][R].siblingCreated) block.ends[R][R].siblingCreated(cursor.options, L);
	      if (block.ends[L][L].siblingCreated) block.ends[L][L].siblingCreated(cursor.options, R);
	      cursor.parent.bubble('reflow');
	    }

	    return this;
	  };
	  _.renderLatexMath = function(latex) {
	    var root = this.root, cursor = this.cursor;

	    var all = Parser.all;
	    var eof = Parser.eof;

	    var block = latexMathParser.skip(eof).or(all.result(false)).parse(latex);

	    root.eachChild('postOrder', 'dispose');
	    root.ends[L] = root.ends[R] = 0;

	    if (block) {
	      block.children().adopt(root, 0, 0);
	    }

	    var jQ = root.jQ;

	    if (block) {
	      var html = block.join('html');
	      jQ.html(html);
	      root.jQize(jQ.children());
	      root.finalizeInsert(cursor.options);
	    }
	    else {
	      jQ.empty();
	    }

	    delete cursor.selection;
	    cursor.insAtRightEnd(root);
	  };
	  _.renderLatexText = function(latex) {
	    var root = this.root, cursor = this.cursor;

	    root.jQ.children().slice(1).remove();
	    root.eachChild('postOrder', 'dispose');
	    root.ends[L] = root.ends[R] = 0;
	    delete cursor.selection;
	    cursor.show().insAtRightEnd(root);

	    var regex = Parser.regex;
	    var string = Parser.string;
	    var eof = Parser.eof;
	    var all = Parser.all;

	    // Parser RootMathCommand
	    var mathMode = string('$').then(latexMathParser)
	      // because TeX is insane, math mode doesn't necessarily
	      // have to end.  So we allow for the case that math mode
	      // continues to the end of the stream.
	      .skip(string('$').or(eof))
	      .map(function(block) {
	        // HACK FIXME: this shouldn't have to have access to cursor
	        var rootMathCommand = RootMathCommand(cursor);

	        rootMathCommand.createBlocks();
	        var rootMathBlock = rootMathCommand.ends[L];
	        block.children().adopt(rootMathBlock, 0, 0);

	        return rootMathCommand;
	      })
	    ;

	    var escapedDollar = string('\\$').result('$');
	    var textChar = escapedDollar.or(regex(/^[^$]/)).map(VanillaSymbol);
	    var latexText = mathMode.or(textChar).many();
	    var commands = latexText.skip(eof).or(all.result(false)).parse(latex);

	    if (commands) {
	      for (var i = 0; i < commands.length; i += 1) {
	        commands[i].adopt(root, root.ends[R], 0);
	      }

	      root.jQize().appendTo(root.jQ);

	      root.finalizeInsert(cursor.options);
	    }
	  };
	});
	/********************************************************
	 * Deals with mouse events for clicking, drag-to-select
	 *******************************************************/

	Controller.open(function(_) {
	  Options.p.ignoreNextMousedown = noop;
	  _.delegateMouseEvents = function() {
	    var ultimateRootjQ = this.root.jQ;
	    //drag-to-select event handling
	    this.container.bind('mousedown.mathquill', function(e) {
	      var rootjQ = $(e.target).closest('.mq-root-block');
	      var root = Node.byId[rootjQ.attr(mqBlockId) || ultimateRootjQ.attr(mqBlockId)];
	      var ctrlr = root.controller, cursor = ctrlr.cursor, blink = cursor.blink;
	      var textareaSpan = ctrlr.textareaSpan, textarea = ctrlr.textarea;

	      e.preventDefault(); // doesn't work in IE\u22648, but it's a one-line fix:
	      e.target.unselectable = true; // http://jsbin.com/yagekiji/1

	      if (cursor.options.ignoreNextMousedown(e)) return;
	      else cursor.options.ignoreNextMousedown = noop;

	      var target;
	      function mousemove(e) { target = $(e.target); }
	      function docmousemove(e) {
	        if (!cursor.anticursor) cursor.startSelection();
	        ctrlr.seek(target, e.pageX, e.pageY).cursor.select();
	        target = undefined;
	      }
	      // outside rootjQ, the MathQuill node corresponding to the target (if any)
	      // won't be inside this root, so don't mislead Controller::seek with it

	      function mouseup(e) {
	        cursor.blink = blink;
	        if (!cursor.selection) {
	          if (ctrlr.editable) {
	            cursor.show();
	          }
	          else {
	            textareaSpan.detach();
	          }
	        }

	        // delete the mouse handlers now that we're not dragging anymore
	        rootjQ.unbind('mousemove', mousemove);
	        $(e.target.ownerDocument).unbind('mousemove', docmousemove).unbind('mouseup', mouseup);
	      }

	      if (ctrlr.blurred) {
	        if (!ctrlr.editable) rootjQ.prepend(textareaSpan);
	        textarea.focus();
	      }

	      cursor.blink = noop;
	      ctrlr.seek($(e.target), e.pageX, e.pageY).cursor.startSelection();

	      rootjQ.mousemove(mousemove);
	      $(e.target.ownerDocument).mousemove(docmousemove).mouseup(mouseup);
	      // listen on document not just body to not only hear about mousemove and
	      // mouseup on page outside field, but even outside page, except iframes: https://github.com/mathquill/mathquill/commit/8c50028afcffcace655d8ae2049f6e02482346c5#commitcomment-6175800
	    });
	  }
	});

	Controller.open(function(_) {
	  _.seek = function(target, pageX, pageY) {
	    var cursor = this.notify('select').cursor;

	    if (target) {
	      var nodeId = target.attr(mqBlockId) || target.attr(mqCmdId);
	      if (!nodeId) {
	        var targetParent = target.parent();
	        nodeId = targetParent.attr(mqBlockId) || targetParent.attr(mqCmdId);
	      }
	    }
	    var node = nodeId ? Node.byId[nodeId] : this.root;
	    pray('nodeId is the id of some Node that exists', node);

	    // don't clear selection until after getting node from target, in case
	    // target was selection span, otherwise target will have no parent and will
	    // seek from root, which is less accurate (e.g. fraction)
	    cursor.clearSelection().show();

	    node.seek(pageX, cursor);
	    this.scrollHoriz(); // before .selectFrom when mouse-selecting, so
	                        // always hits no-selection case in scrollHoriz and scrolls slower
	    return this;
	  };
	});
	/***********************************************
	 * Horizontal panning for editable fields that
	 * overflow their width
	 **********************************************/

	Controller.open(function(_) {
	  _.scrollHoriz = function() {
	    var cursor = this.cursor, seln = cursor.selection;
	    var rootRect = this.root.jQ[0].getBoundingClientRect();
	    if (!seln) {
	      var x = cursor.jQ[0].getBoundingClientRect().left;
	      if (x > rootRect.right - 20) var scrollBy = x - (rootRect.right - 20);
	      else if (x < rootRect.left + 20) var scrollBy = x - (rootRect.left + 20);
	      else return;
	    }
	    else {
	      var rect = seln.jQ[0].getBoundingClientRect();
	      var overLeft = rect.left - (rootRect.left + 20);
	      var overRight = rect.right - (rootRect.right - 20);
	      if (seln.ends[L] === cursor[R]) {
	        if (overLeft < 0) var scrollBy = overLeft;
	        else if (overRight > 0) {
	          if (rect.left - overRight < rootRect.left + 20) var scrollBy = overLeft;
	          else var scrollBy = overRight;
	        }
	        else return;
	      }
	      else {
	        if (overRight > 0) var scrollBy = overRight;
	        else if (overLeft < 0) {
	          if (rect.right - overLeft > rootRect.right - 20) var scrollBy = overRight;
	          else var scrollBy = overLeft;
	        }
	        else return;
	      }
	    }
	    this.root.jQ.stop().animate({ scrollLeft: '+=' + scrollBy}, 100);
	  };
	});
	/*********************************************
	 * Manage the MathQuill instance's textarea
	 * (as owned by the Controller)
	 ********************************************/

	Controller.open(function(_) {
	  Options.p.substituteTextarea = function() {
	    return $('<textarea autocapitalize=off autocomplete=off autocorrect=off ' +
	               'spellcheck=false x-palm-disable-ste-all=true />')[0];
	  };
	  _.createTextarea = function() {
	    var textareaSpan = this.textareaSpan = $('<span class="mq-textarea"></span>'),
	      textarea = this.options.substituteTextarea();
	    if (!textarea.nodeType) {
	      throw 'substituteTextarea() must return a DOM element, got ' + textarea;
	    }
	    textarea = this.textarea = $(textarea).appendTo(textareaSpan);

	    var ctrlr = this;
	    ctrlr.cursor.selectionChanged = function() { ctrlr.selectionChanged(); };
	    ctrlr.container.bind('copy', function() { ctrlr.setTextareaSelection(); });
	  };
	  _.selectionChanged = function() {
	    var ctrlr = this;
	    forceIERedraw(ctrlr.container[0]);

	    // throttle calls to setTextareaSelection(), because setting textarea.value
	    // and/or calling textarea.select() can have anomalously bad performance:
	    // https://github.com/mathquill/mathquill/issues/43#issuecomment-1399080
	    if (ctrlr.textareaSelectionTimeout === undefined) {
	      ctrlr.textareaSelectionTimeout = setTimeout(function() {
	        ctrlr.setTextareaSelection();
	      });
	    }
	  };
	  _.setTextareaSelection = function() {
	    this.textareaSelectionTimeout = undefined;
	    var latex = '';
	    if (this.cursor.selection) {
	      latex = this.cursor.selection.join('latex');
	      if (this.options.statelessClipboard) {
	        // FIXME: like paste, only this works for math fields; should ask parent
	        latex = '$' + latex + '$';
	      }
	    }
	    this.selectFn(latex);
	  };
	  _.staticMathTextareaEvents = function() {
	    var ctrlr = this, root = ctrlr.root, cursor = ctrlr.cursor,
	      textarea = ctrlr.textarea, textareaSpan = ctrlr.textareaSpan;

	    this.container.prepend('<span class="mq-selectable">$'+ctrlr.exportLatex()+'$</span>');
	    ctrlr.blurred = true;
	    textarea.bind('cut paste', false)
	    .focus(function() { ctrlr.blurred = false; }).blur(function() {
	      if (cursor.selection) cursor.selection.clear();
	      setTimeout(detach); //detaching during blur explodes in WebKit
	    });
	    function detach() {
	      textareaSpan.detach();
	      ctrlr.blurred = true;
	    }

	    ctrlr.selectFn = function(text) {
	      textarea.val(text);
	      if (text) textarea.select();
	    };
	  };
	  _.editablesTextareaEvents = function() {
	    var ctrlr = this, root = ctrlr.root, cursor = ctrlr.cursor,
	      textarea = ctrlr.textarea, textareaSpan = ctrlr.textareaSpan;

	    var keyboardEventsShim = saneKeyboardEvents(textarea, this);
	    this.selectFn = function(text) { keyboardEventsShim.select(text); };

	    this.container.prepend(textareaSpan)
	    .on('cut', function(e) {
	      if (cursor.selection) {
	        setTimeout(function() {
	          ctrlr.notify('edit'); // deletes selection if present
	          cursor.parent.bubble('reflow');
	        });
	      }
	    });

	    this.focusBlurEvents();
	  };
	  _.typedText = function(ch) {
	    if (ch === '\n') return this.handle('enter');
	    var cursor = this.notify().cursor;
	    cursor.parent.write(cursor, ch);
	    this.scrollHoriz();
	  };
	  _.paste = function(text) {
	    // TODO: document `statelessClipboard` config option in README, after
	    // making it work like it should, that is, in both text and math mode
	    // (currently only works in math fields, so worse than pointless, it
	    //  only gets in the way by \text{}-ifying pasted stuff and $-ifying
	    //  cut/copied LaTeX)
	    if (this.options.statelessClipboard) {
	      if (text.slice(0,1) === '$' && text.slice(-1) === '$') {
	        text = text.slice(1, -1);
	      }
	      else {
	        text = '\\text{'+text+'}';
	      }
	    }
	    // FIXME: this always inserts math or a TextBlock, even in a RootTextBlock
	    this.writeLatex(text).cursor.show();
	  };
	});
	/*************************************************
	 * Abstract classes of math blocks and commands.
	 ************************************************/

	/**
	 * Math tree node base class.
	 * Some math-tree-specific extensions to Node.
	 * Both MathBlock's and MathCommand's descend from it.
	 */
	var MathElement = P(Node, function(_, super_) {
	  _.finalizeInsert = function(options, cursor) { // `cursor` param is only for
	      // SupSub::contactWeld, and is deliberately only passed in by writeLatex,
	      // see ea7307eb4fac77c149a11ffdf9a831df85247693
	    var self = this;
	    self.postOrder('finalizeTree', options);
	    self.postOrder('contactWeld', cursor);

	    // note: this order is important.
	    // empty elements need the empty box provided by blur to
	    // be present in order for their dimensions to be measured
	    // correctly by 'reflow' handlers.
	    self.postOrder('blur');

	    self.postOrder('reflow');
	    if (self[R].siblingCreated) self[R].siblingCreated(options, L);
	    if (self[L].siblingCreated) self[L].siblingCreated(options, R);
	    self.bubble('reflow');
	  };
	});

	/**
	 * Commands and operators, like subscripts, exponents, or fractions.
	 * Descendant commands are organized into blocks.
	 */
	var MathCommand = P(MathElement, function(_, super_) {
	  _.init = function(ctrlSeq, htmlTemplate, textTemplate) {
	    var cmd = this;
	    super_.init.call(cmd);

	    if (!cmd.ctrlSeq) cmd.ctrlSeq = ctrlSeq;
	    if (htmlTemplate) cmd.htmlTemplate = htmlTemplate;
	    if (textTemplate) cmd.textTemplate = textTemplate;
	  };

	  // obvious methods
	  _.replaces = function(replacedFragment) {
	    replacedFragment.disown();
	    this.replacedFragment = replacedFragment;
	  };
	  _.isEmpty = function() {
	    return this.foldChildren(true, function(isEmpty, child) {
	      return isEmpty && child.isEmpty();
	    });
	  };

	  _.parser = function() {
	    var block = latexMathParser.block;
	    var self = this;

	    return block.times(self.numBlocks()).map(function(blocks) {
	      self.blocks = blocks;

	      for (var i = 0; i < blocks.length; i += 1) {
	        blocks[i].adopt(self, self.ends[R], 0);
	      }

	      return self;
	    });
	  };

	  // createLeftOf(cursor) and the methods it calls
	  _.createLeftOf = function(cursor) {
	    var cmd = this;
	    var replacedFragment = cmd.replacedFragment;

	    cmd.createBlocks();
	    super_.createLeftOf.call(cmd, cursor);
	    if (replacedFragment) {
	      replacedFragment.adopt(cmd.ends[L], 0, 0);
	      replacedFragment.jQ.appendTo(cmd.ends[L].jQ);
	    }
	    cmd.finalizeInsert(cursor.options);
	    cmd.placeCursor(cursor);
	  };
	  _.createBlocks = function() {
	    var cmd = this,
	      numBlocks = cmd.numBlocks(),
	      blocks = cmd.blocks = Array(numBlocks);

	    for (var i = 0; i < numBlocks; i += 1) {
	      var newBlock = blocks[i] = MathBlock();
	      newBlock.adopt(cmd, cmd.ends[R], 0);
	    }
	  };
	  _.placeCursor = function(cursor) {
	    //insert the cursor at the right end of the first empty child, searching
	    //left-to-right, or if none empty, the right end child
	    cursor.insAtRightEnd(this.foldChildren(this.ends[L], function(leftward, child) {
	      return leftward.isEmpty() ? leftward : child;
	    }));
	  };

	  // editability methods: called by the cursor for editing, cursor movements,
	  // and selection of the MathQuill tree, these all take in a direction and
	  // the cursor
	  _.moveTowards = function(dir, cursor, updown) {
	    var updownInto = updown && this[updown+'Into'];
	    cursor.insAtDirEnd(-dir, updownInto || this.ends[-dir]);
	  };
	  _.deleteTowards = function(dir, cursor) {
	    if (this.isEmpty()) cursor[dir] = this.remove()[dir];
	    else this.moveTowards(dir, cursor, null);
	  };
	  _.selectTowards = function(dir, cursor) {
	    cursor[-dir] = this;
	    cursor[dir] = this[dir];
	  };
	  _.selectChildren = function() {
	    return Selection(this, this);
	  };
	  _.unselectInto = function(dir, cursor) {
	    cursor.insAtDirEnd(-dir, cursor.anticursor.ancestors[this.id]);
	  };
	  _.seek = function(pageX, cursor) {
	    function getBounds(node) {
	      var bounds = {}
	      bounds[L] = node.jQ.offset().left;
	      bounds[R] = bounds[L] + node.jQ.outerWidth();
	      return bounds;
	    }

	    var cmd = this;
	    var cmdBounds = getBounds(cmd);

	    if (pageX < cmdBounds[L]) return cursor.insLeftOf(cmd);
	    if (pageX > cmdBounds[R]) return cursor.insRightOf(cmd);

	    var leftLeftBound = cmdBounds[L];
	    cmd.eachChild(function(block) {
	      var blockBounds = getBounds(block);
	      if (pageX < blockBounds[L]) {
	        // closer to this block's left bound, or the bound left of that?
	        if (pageX - leftLeftBound < blockBounds[L] - pageX) {
	          if (block[L]) cursor.insAtRightEnd(block[L]);
	          else cursor.insLeftOf(cmd);
	        }
	        else cursor.insAtLeftEnd(block);
	        return false;
	      }
	      else if (pageX > blockBounds[R]) {
	        if (block[R]) leftLeftBound = blockBounds[R]; // continue to next block
	        else { // last (rightmost) block
	          // closer to this block's right bound, or the cmd's right bound?
	          if (cmdBounds[R] - pageX < pageX - blockBounds[R]) {
	            cursor.insRightOf(cmd);
	          }
	          else cursor.insAtRightEnd(block);
	        }
	      }
	      else {
	        block.seek(pageX, cursor);
	        return false;
	      }
	    });
	  }

	  // methods involved in creating and cross-linking with HTML DOM nodes
	  /*
	    They all expect an .htmlTemplate like
	      '<span>&0</span>'
	    or
	      '<span><span>&0</span><span>&1</span></span>'

	    See html.test.js for more examples.

	    Requirements:
	    - For each block of the command, there must be exactly one "block content
	      marker" of the form '&<number>' where <number> is the 0-based index of the
	      block. (Like the LaTeX \newcommand syntax, but with a 0-based rather than
	      1-based index, because JavaScript because C because Dijkstra.)
	    - The block content marker must be the sole contents of the containing
	      element, there can't even be surrounding whitespace, or else we can't
	      guarantee sticking to within the bounds of the block content marker when
	      mucking with the HTML DOM.
	    - The HTML not only must be well-formed HTML (of course), but also must
	      conform to the XHTML requirements on tags, specifically all tags must
	      either be self-closing (like '<br/>') or come in matching pairs.
	      Close tags are never optional.

	    Note that &<number> isn't well-formed HTML; if you wanted a literal '&123',
	    your HTML template would have to have '&amp;123'.
	  */
	  _.numBlocks = function() {
	    var matches = this.htmlTemplate.match(/&\d+/g);
	    return matches ? matches.length : 0;
	  };
	  _.html = function() {
	    // Render the entire math subtree rooted at this command, as HTML.
	    // Expects .createBlocks() to have been called already, since it uses the
	    // .blocks array of child blocks.
	    //
	    // See html.test.js for example templates and intended outputs.
	    //
	    // Given an .htmlTemplate as described above,
	    // - insert the mathquill-command-id attribute into all top-level tags,
	    //   which will be used to set this.jQ in .jQize().
	    //   This is straightforward:
	    //     * tokenize into tags and non-tags
	    //     * loop through top-level tokens:
	    //         * add #cmdId attribute macro to top-level self-closing tags
	    //         * else add #cmdId attribute macro to top-level open tags
	    //             * skip the matching top-level close tag and all tag pairs
	    //               in between
	    // - for each block content marker,
	    //     + replace it with the contents of the corresponding block,
	    //       rendered as HTML
	    //     + insert the mathquill-block-id attribute into the containing tag
	    //   This is even easier, a quick regex replace, since block tags cannot
	    //   contain anything besides the block content marker.
	    //
	    // Two notes:
	    // - The outermost loop through top-level tokens should never encounter any
	    //   top-level close tags, because we should have first encountered a
	    //   matching top-level open tag, all inner tags should have appeared in
	    //   matching pairs and been skipped, and then we should have skipped the
	    //   close tag in question.
	    // - All open tags should have matching close tags, which means our inner
	    //   loop should always encounter a close tag and drop nesting to 0. If
	    //   a close tag is missing, the loop will continue until i >= tokens.length
	    //   and token becomes undefined. This will not infinite loop, even in
	    //   production without pray(), because it will then TypeError on .slice().

	    var cmd = this;
	    var blocks = cmd.blocks;
	    var cmdId = ' mathquill-command-id=' + cmd.id;
	    var tokens = cmd.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);

	    pray('no unmatched angle brackets', tokens.join('') === this.htmlTemplate);

	    // add cmdId to all top-level tags
	    for (var i = 0, token = tokens[0]; token; i += 1, token = tokens[i]) {
	      // top-level self-closing tags
	      if (token.slice(-2) === '/>') {
	        tokens[i] = token.slice(0,-2) + cmdId + '/>';
	      }
	      // top-level open tags
	      else if (token.charAt(0) === '<') {
	        pray('not an unmatched top-level close tag', token.charAt(1) !== '/');

	        tokens[i] = token.slice(0,-1) + cmdId + '>';

	        // skip matching top-level close tag and all tag pairs in between
	        var nesting = 1;
	        do {
	          i += 1, token = tokens[i];
	          pray('no missing close tags', token);
	          // close tags
	          if (token.slice(0,2) === '</') {
	            nesting -= 1;
	          }
	          // non-self-closing open tags
	          else if (token.charAt(0) === '<' && token.slice(-2) !== '/>') {
	            nesting += 1;
	          }
	        } while (nesting > 0);
	      }
	    }
	    return tokens.join('').replace(/>&(\d+)/g, function($0, $1) {
	      return ' mathquill-block-id=' + blocks[$1].id + '>' + blocks[$1].join('html');
	    });
	  };

	  // methods to export a string representation of the math tree
	  _.latex = function() {
	    return this.foldChildren(this.ctrlSeq, function(latex, child) {
	      return latex + '{' + (child.latex() || ' ') + '}';
	    });
	  };
	  _.textTemplate = [''];
	  _.text = function() {
	    var cmd = this, i = 0;
	    return cmd.foldChildren(cmd.textTemplate[i], function(text, child) {
	      i += 1;
	      var child_text = child.text();
	      if (text && cmd.textTemplate[i] === '('
	          && child_text[0] === '(' && child_text.slice(-1) === ')')
	        return text + child_text.slice(1, -1) + cmd.textTemplate[i];
	      return text + child.text() + (cmd.textTemplate[i] || '');
	    });
	  };
	});

	/**
	 * Lightweight command without blocks or children.
	 */
	var Symbol = P(MathCommand, function(_, super_) {
	  _.init = function(ctrlSeq, html, text) {
	    if (!text) text = ctrlSeq && ctrlSeq.length > 1 ? ctrlSeq.slice(1) : ctrlSeq;

	    super_.init.call(this, ctrlSeq, html, [ text ]);
	  };

	  _.parser = function() { return Parser.succeed(this); };
	  _.numBlocks = function() { return 0; };

	  _.replaces = function(replacedFragment) {
	    replacedFragment.remove();
	  };
	  _.createBlocks = noop;

	  _.moveTowards = function(dir, cursor) {
	    cursor.jQ.insDirOf(dir, this.jQ);
	    cursor[-dir] = this;
	    cursor[dir] = this[dir];
	  };
	  _.deleteTowards = function(dir, cursor) {
	    cursor[dir] = this.remove()[dir];
	  };
	  _.seek = function(pageX, cursor) {
	    // insert at whichever side the click was closer to
	    if (pageX - this.jQ.offset().left < this.jQ.outerWidth()/2)
	      cursor.insLeftOf(this);
	    else
	      cursor.insRightOf(this);
	  };

	  _.latex = function(){ return this.ctrlSeq; };
	  _.text = function(){ return this.textTemplate; };
	  _.placeCursor = noop;
	  _.isEmpty = function(){ return true; };
	});
	var VanillaSymbol = P(Symbol, function(_, super_) {
	  _.init = function(ch, html) {
	    super_.init.call(this, ch, '<span>'+(html || ch)+'</span>');
	  };
	});
	var BinaryOperator = P(Symbol, function(_, super_) {
	  _.init = function(ctrlSeq, html, text) {
	    super_.init.call(this,
	      ctrlSeq, '<span class="mq-binary-operator">'+html+'</span>', text
	    );
	  };
	});

	/**
	 * Children and parent of MathCommand's. Basically partitions all the
	 * symbols and operators that descend (in the Math DOM tree) from
	 * ancestor operators.
	 */
	var MathBlock = P(MathElement, function(_, super_) {
	  _.join = function(methodName) {
	    return this.foldChildren('', function(fold, child) {
	      return fold + child[methodName]();
	    });
	  };
	  _.html = function() { return this.join('html'); };
	  _.latex = function() { return this.join('latex'); };
	  _.text = function() {
	    return (this.ends[L] === this.ends[R] && this.ends[L] !== 0) ?
	      this.ends[L].text() :
	      this.join('text')
	    ;
	  };

	  _.keystroke = function(key, e, ctrlr) {
	    if (ctrlr.options.spaceBehavesLikeTab
	        && (key === 'Spacebar' || key === 'Shift-Spacebar')) {
	      e.preventDefault();
	      ctrlr.escapeDir(key === 'Shift-Spacebar' ? L : R, key, e);
	      return;
	    }
	    return super_.keystroke.apply(this, arguments);
	  };

	  // editability methods: called by the cursor for editing, cursor movements,
	  // and selection of the MathQuill tree, these all take in a direction and
	  // the cursor
	  _.moveOutOf = function(dir, cursor, updown) {
	    var updownInto = updown && this.parent[updown+'Into'];
	    if (!updownInto && this[dir]) cursor.insAtDirEnd(-dir, this[dir]);
	    else cursor.insDirOf(dir, this.parent);
	  };
	  _.selectOutOf = function(dir, cursor) {
	    cursor.insDirOf(dir, this.parent);
	  };
	  _.deleteOutOf = function(dir, cursor) {
	    cursor.unwrapGramp();
	  };
	  _.seek = function(pageX, cursor) {
	    var node = this.ends[R];
	    if (!node || node.jQ.offset().left + node.jQ.outerWidth() < pageX) {
	      return cursor.insAtRightEnd(this);
	    }
	    if (pageX < this.ends[L].jQ.offset().left) return cursor.insAtLeftEnd(this);
	    while (pageX < node.jQ.offset().left) node = node[L];
	    return node.seek(pageX, cursor);
	  };
	  _.chToCmd = function(ch) {
	    var cons;
	    // exclude f because it gets a dedicated command with more spacing
	    if (ch.match(/^[a-eg-zA-Z]$/))
	      return Letter(ch);
	    else if (/^\d$/.test(ch))
	      return Digit(ch);
	    else if (cons = CharCmds[ch] || LatexCmds[ch])
	      return cons(ch);
	    else
	      return VanillaSymbol(ch);
	  };
	  _.write = function(cursor, ch) {
	    var cmd = this.chToCmd(ch);
	    if (cursor.selection) cmd.replaces(cursor.replaceSelection());
	    cmd.createLeftOf(cursor.show());
	  };

	  _.focus = function() {
	    this.jQ.addClass('mq-hasCursor');
	    this.jQ.removeClass('mq-empty');

	    return this;
	  };
	  _.blur = function() {
	    this.jQ.removeClass('mq-hasCursor');
	    if (this.isEmpty())
	      this.jQ.addClass('mq-empty');

	    return this;
	  };
	});

	API.StaticMath = function(APIClasses) {
	  return P(APIClasses.AbstractMathQuill, function(_, super_) {
	    this.RootBlock = MathBlock;
	    _.__mathquillify = function() {
	      super_.__mathquillify.call(this, 'mq-math-mode');
	      this.__controller.delegateMouseEvents();
	      this.__controller.staticMathTextareaEvents();
	      return this;
	    };
	    _.init = function() {
	      super_.init.apply(this, arguments);
	      this.__controller.root.postOrder(
	        'registerInnerField', this.innerFields = [], APIClasses.MathField);
	    };
	    _.latex = function() {
	      var returned = super_.latex.apply(this, arguments);
	      if (arguments.length > 0) {
	        this.__controller.root.postOrder(
	          'registerInnerField', this.innerFields = [], APIClasses.MathField);
	      }
	      return returned;
	    };
	  });
	};

	var RootMathBlock = P(MathBlock, RootBlockMixin);
	API.MathField = function(APIClasses) {
	  return P(APIClasses.EditableField, function(_, super_) {
	    this.RootBlock = RootMathBlock;
	    _.__mathquillify = function(opts, interfaceVersion) {
	      this.config(opts);
	      if (interfaceVersion > 1) this.__controller.root.reflow = noop;
	      super_.__mathquillify.call(this, 'mq-editable-field mq-math-mode');
	      delete this.__controller.root.reflow;
	      return this;
	    };
	  });
	};
	/*************************************************
	 * Abstract classes of text blocks
	 ************************************************/

	/**
	 * Blocks of plain text, with one or two TextPiece's as children.
	 * Represents flat strings of typically serif-font Roman characters, as
	 * opposed to hierchical, nested, tree-structured math.
	 * Wraps a single HTMLSpanElement.
	 */
	var TextBlock = P(Node, function(_, super_) {
	  _.ctrlSeq = '\\text';

	  _.replaces = function(replacedText) {
	    if (replacedText instanceof Fragment)
	      this.replacedText = replacedText.remove().jQ.text();
	    else if (typeof replacedText === 'string')
	      this.replacedText = replacedText;
	  };

	  _.jQadd = function(jQ) {
	    super_.jQadd.call(this, jQ);
	    if (this.ends[L]) this.ends[L].jQadd(this.jQ[0].firstChild);
	  };

	  _.createLeftOf = function(cursor) {
	    var textBlock = this;
	    super_.createLeftOf.call(this, cursor);

	    if (textBlock[R].siblingCreated) textBlock[R].siblingCreated(cursor.options, L);
	    if (textBlock[L].siblingCreated) textBlock[L].siblingCreated(cursor.options, R);
	    textBlock.bubble('reflow');

	    cursor.insAtRightEnd(textBlock);

	    if (textBlock.replacedText)
	      for (var i = 0; i < textBlock.replacedText.length; i += 1)
	        textBlock.write(cursor, textBlock.replacedText.charAt(i));
	  };

	  _.parser = function() {
	    var textBlock = this;

	    // TODO: correctly parse text mode
	    var string = Parser.string;
	    var regex = Parser.regex;
	    var optWhitespace = Parser.optWhitespace;
	    return optWhitespace
	      .then(string('{')).then(regex(/^[^}]*/)).skip(string('}'))
	      .map(function(text) {
	        if (text.length === 0) return Fragment();

	        TextPiece(text).adopt(textBlock, 0, 0);
	        return textBlock;
	      })
	    ;
	  };

	  _.textContents = function() {
	    return this.foldChildren('', function(text, child) {
	      return text + child.text;
	    });
	  };
	  _.text = function() { return '"' + this.textContents() + '"'; };
	  _.latex = function() {
	    var contents = this.textContents();
	    if (contents.length === 0) return '';
	    return '\\text{' + contents + '}';
	  };
	  _.html = function() {
	    return (
	        '<span class="mq-text-mode" mathquill-command-id='+this.id+'>'
	      +   this.textContents()
	      + '</span>'
	    );
	  };

	  // editability methods: called by the cursor for editing, cursor movements,
	  // and selection of the MathQuill tree, these all take in a direction and
	  // the cursor
	  _.moveTowards = function(dir, cursor) { cursor.insAtDirEnd(-dir, this); };
	  _.moveOutOf = function(dir, cursor) { cursor.insDirOf(dir, this); };
	  _.unselectInto = _.moveTowards;

	  // TODO: make these methods part of a shared mixin or something.
	  _.selectTowards = MathCommand.prototype.selectTowards;
	  _.deleteTowards = MathCommand.prototype.deleteTowards;

	  _.selectOutOf = function(dir, cursor) {
	    cursor.insDirOf(dir, this);
	  };
	  _.deleteOutOf = function(dir, cursor) {
	    // backspace and delete at ends of block don't unwrap
	    if (this.isEmpty()) cursor.insRightOf(this);
	  };
	  _.write = function(cursor, ch) {
	    cursor.show().deleteSelection();

	    if (ch !== '$') {
	      if (!cursor[L]) TextPiece(ch).createLeftOf(cursor);
	      else cursor[L].appendText(ch);
	    }
	    else if (this.isEmpty()) {
	      cursor.insRightOf(this);
	      VanillaSymbol('\\$','$').createLeftOf(cursor);
	    }
	    else if (!cursor[R]) cursor.insRightOf(this);
	    else if (!cursor[L]) cursor.insLeftOf(this);
	    else { // split apart
	      var leftBlock = TextBlock();
	      var leftPc = this.ends[L];
	      leftPc.disown().jQ.detach();
	      leftPc.adopt(leftBlock, 0, 0);

	      cursor.insLeftOf(this);
	      super_.createLeftOf.call(leftBlock, cursor);
	    }
	  };

	  _.seek = function(pageX, cursor) {
	    cursor.hide();
	    var textPc = fuseChildren(this);

	    // insert cursor at approx position in DOMTextNode
	    var avgChWidth = this.jQ.width()/this.text.length;
	    var approxPosition = Math.round((pageX - this.jQ.offset().left)/avgChWidth);
	    if (approxPosition <= 0) cursor.insAtLeftEnd(this);
	    else if (approxPosition >= textPc.text.length) cursor.insAtRightEnd(this);
	    else cursor.insLeftOf(textPc.splitRight(approxPosition));

	    // move towards mousedown (pageX)
	    var displ = pageX - cursor.show().offset().left; // displacement
	    var dir = displ && displ < 0 ? L : R;
	    var prevDispl = dir;
	    // displ * prevDispl > 0 iff displacement direction === previous direction
	    while (cursor[dir] && displ * prevDispl > 0) {
	      cursor[dir].moveTowards(dir, cursor);
	      prevDispl = displ;
	      displ = pageX - cursor.offset().left;
	    }
	    if (dir*displ < -dir*prevDispl) cursor[-dir].moveTowards(-dir, cursor);

	    if (!cursor.anticursor) {
	      // about to start mouse-selecting, the anticursor is gonna get put here
	      this.anticursorPosition = cursor[L] && cursor[L].text.length;
	      // ^ get it? 'cos if there's no cursor[L], it's 0... I'm a terrible person.
	    }
	    else if (cursor.anticursor.parent === this) {
	      // mouse-selecting within this TextBlock, re-insert the anticursor
	      var cursorPosition = cursor[L] && cursor[L].text.length;;
	      if (this.anticursorPosition === cursorPosition) {
	        cursor.anticursor = Point.copy(cursor);
	      }
	      else {
	        if (this.anticursorPosition < cursorPosition) {
	          var newTextPc = cursor[L].splitRight(this.anticursorPosition);
	          cursor[L] = newTextPc;
	        }
	        else {
	          var newTextPc = cursor[R].splitRight(this.anticursorPosition - cursorPosition);
	        }
	        cursor.anticursor = Point(this, newTextPc[L], newTextPc);
	      }
	    }
	  };

	  _.blur = function(cursor) {
	    MathBlock.prototype.blur.call(this);
	    if (!cursor) return;
	    if (this.textContents() === '') {
	      this.remove();
	      if (cursor[L] === this) cursor[L] = this[L];
	      else if (cursor[R] === this) cursor[R] = this[R];
	    }
	    else fuseChildren(this);
	  };

	  function fuseChildren(self) {
	    self.jQ[0].normalize();

	    var textPcDom = self.jQ[0].firstChild;
	    if (!textPcDom) return;
	    pray('only node in TextBlock span is Text node', textPcDom.nodeType === 3);
	    // nodeType === 3 has meant a Text node since ancient times:
	    //   http://reference.sitepoint.com/javascript/Node/nodeType

	    var textPc = TextPiece(textPcDom.data);
	    textPc.jQadd(textPcDom);

	    self.children().disown();
	    return textPc.adopt(self, 0, 0);
	  }

	  _.focus = MathBlock.prototype.focus;
	});

	/**
	 * Piece of plain text, with a TextBlock as a parent and no children.
	 * Wraps a single DOMTextNode.
	 * For convenience, has a .text property that's just a JavaScript string
	 * mirroring the text contents of the DOMTextNode.
	 * Text contents must always be nonempty.
	 */
	var TextPiece = P(Node, function(_, super_) {
	  _.init = function(text) {
	    super_.init.call(this);
	    this.text = text;
	  };
	  _.jQadd = function(dom) { this.dom = dom; this.jQ = $(dom); };
	  _.jQize = function() {
	    return this.jQadd(document.createTextNode(this.text));
	  };
	  _.appendText = function(text) {
	    this.text += text;
	    this.dom.appendData(text);
	  };
	  _.prependText = function(text) {
	    this.text = text + this.text;
	    this.dom.insertData(0, text);
	  };
	  _.insTextAtDirEnd = function(text, dir) {
	    prayDirection(dir);
	    if (dir === R) this.appendText(text);
	    else this.prependText(text);
	  };
	  _.splitRight = function(i) {
	    var newPc = TextPiece(this.text.slice(i)).adopt(this.parent, this, this[R]);
	    newPc.jQadd(this.dom.splitText(i));
	    this.text = this.text.slice(0, i);
	    return newPc;
	  };

	  function endChar(dir, text) {
	    return text.charAt(dir === L ? 0 : -1 + text.length);
	  }

	  _.moveTowards = function(dir, cursor) {
	    prayDirection(dir);

	    var ch = endChar(-dir, this.text)

	    var from = this[-dir];
	    if (from) from.insTextAtDirEnd(ch, dir);
	    else TextPiece(ch).createDir(-dir, cursor);

	    return this.deleteTowards(dir, cursor);
	  };

	  _.latex = function() { return this.text; };

	  _.deleteTowards = function(dir, cursor) {
	    if (this.text.length > 1) {
	      if (dir === R) {
	        this.dom.deleteData(0, 1);
	        this.text = this.text.slice(1);
	      }
	      else {
	        // note that the order of these 2 lines is annoyingly important
	        // (the second line mutates this.text.length)
	        this.dom.deleteData(-1 + this.text.length, 1);
	        this.text = this.text.slice(0, -1);
	      }
	    }
	    else {
	      this.remove();
	      this.jQ.remove();
	      cursor[dir] = this[dir];
	    }
	  };

	  _.selectTowards = function(dir, cursor) {
	    prayDirection(dir);
	    var anticursor = cursor.anticursor;

	    var ch = endChar(-dir, this.text)

	    if (anticursor[dir] === this) {
	      var newPc = TextPiece(ch).createDir(dir, cursor);
	      anticursor[dir] = newPc;
	      cursor.insDirOf(dir, newPc);
	    }
	    else {
	      var from = this[-dir];
	      if (from) from.insTextAtDirEnd(ch, dir);
	      else {
	        var newPc = TextPiece(ch).createDir(-dir, cursor);
	        newPc.jQ.insDirOf(-dir, cursor.selection.jQ);
	      }

	      if (this.text.length === 1 && anticursor[-dir] === this) {
	        anticursor[-dir] = this[-dir]; // `this` will be removed in deleteTowards
	      }
	    }

	    return this.deleteTowards(dir, cursor);
	  };
	});

	CharCmds.$ =
	LatexCmds.text =
	LatexCmds.textnormal =
	LatexCmds.textrm =
	LatexCmds.textup =
	LatexCmds.textmd = TextBlock;

	function makeTextBlock(latex, tagName, attrs) {
	  return P(TextBlock, {
	    ctrlSeq: latex,
	    htmlTemplate: '<'+tagName+' '+attrs+'>&0</'+tagName+'>'
	  });
	}

	LatexCmds.em = LatexCmds.italic = LatexCmds.italics =
	LatexCmds.emph = LatexCmds.textit = LatexCmds.textsl =
	  makeTextBlock('\\textit', 'i', 'class="mq-text-mode"');
	LatexCmds.strong = LatexCmds.bold = LatexCmds.textbf =
	  makeTextBlock('\\textbf', 'b', 'class="mq-text-mode"');
	LatexCmds.sf = LatexCmds.textsf =
	  makeTextBlock('\\textsf', 'span', 'class="mq-sans-serif mq-text-mode"');
	LatexCmds.tt = LatexCmds.texttt =
	  makeTextBlock('\\texttt', 'span', 'class="mq-monospace mq-text-mode"');
	LatexCmds.textsc =
	  makeTextBlock('\\textsc', 'span', 'style="font-variant:small-caps" class="mq-text-mode"');
	LatexCmds.uppercase =
	  makeTextBlock('\\uppercase', 'span', 'style="text-transform:uppercase" class="mq-text-mode"');
	LatexCmds.lowercase =
	  makeTextBlock('\\lowercase', 'span', 'style="text-transform:lowercase" class="mq-text-mode"');


	var RootMathCommand = P(MathCommand, function(_, super_) {
	  _.init = function(cursor) {
	    super_.init.call(this, '$');
	    this.cursor = cursor;
	  };
	  _.htmlTemplate = '<span class="mq-math-mode">&0</span>';
	  _.createBlocks = function() {
	    super_.createBlocks.call(this);

	    this.ends[L].cursor = this.cursor;
	    this.ends[L].write = function(cursor, ch) {
	      if (ch !== '$')
	        MathBlock.prototype.write.call(this, cursor, ch);
	      else if (this.isEmpty()) {
	        cursor.insRightOf(this.parent);
	        this.parent.deleteTowards(dir, cursor);
	        VanillaSymbol('\\$','$').createLeftOf(cursor.show());
	      }
	      else if (!cursor[R])
	        cursor.insRightOf(this.parent);
	      else if (!cursor[L])
	        cursor.insLeftOf(this.parent);
	      else
	        MathBlock.prototype.write.call(this, cursor, ch);
	    };
	  };
	  _.latex = function() {
	    return '$' + this.ends[L].latex() + '$';
	  };
	});

	var RootTextBlock = P(RootMathBlock, function(_, super_) {
	  _.keystroke = function(key) {
	    if (key === 'Spacebar' || key === 'Shift-Spacebar') return;
	    return super_.keystroke.apply(this, arguments);
	  };
	  _.write = function(cursor, ch) {
	    cursor.show().deleteSelection();
	    if (ch === '$')
	      RootMathCommand(cursor).createLeftOf(cursor);
	    else {
	      var html;
	      if (ch === '<') html = '&lt;';
	      else if (ch === '>') html = '&gt;';
	      VanillaSymbol(ch, html).createLeftOf(cursor);
	    }
	  };
	});
	API.TextField = function(APIClasses) {
	  return P(APIClasses.EditableField, function(_, super_) {
	    this.RootBlock = RootTextBlock;
	    _.__mathquillify = function() {
	      return super_.__mathquillify.call(this, 'mq-editable-field mq-text-mode');
	    };
	    _.latex = function(latex) {
	      if (arguments.length > 0) {
	        this.__controller.renderLatexText(latex);
	        if (this.__controller.blurred) this.__controller.cursor.hide().parent.blur();
	        return this;
	      }
	      return this.__controller.exportLatex();
	    };
	  });
	};
	/************************************
	 * Symbols for Advanced Mathematics
	 ***********************************/

	LatexCmds.notin =
	LatexCmds.cong =
	LatexCmds.equiv =
	LatexCmds.oplus =
	LatexCmds.otimes = P(BinaryOperator, function(_, super_) {
	  _.init = function(latex) {
	    super_.init.call(this, '\\'+latex+' ', '&'+latex+';');
	  };
	});

	LatexCmds['\u2260'] = LatexCmds.ne = LatexCmds.neq = bind(BinaryOperator,'\\ne ','&ne;');

	LatexCmds.ast = LatexCmds.star = LatexCmds.loast = LatexCmds.lowast =
	  bind(BinaryOperator,'\\ast ','&lowast;');
	  //case 'there4 = // a special exception for this one, perhaps?
	LatexCmds.therefor = LatexCmds.therefore =
	  bind(BinaryOperator,'\\therefore ','&there4;');

	LatexCmds.cuz = // l33t
	LatexCmds.because = bind(BinaryOperator,'\\because ','&#8757;');

	LatexCmds.prop = LatexCmds.propto = bind(BinaryOperator,'\\propto ','&prop;');

	LatexCmds['\u2248'] = LatexCmds.asymp = LatexCmds.approx = bind(BinaryOperator,'\\approx ','&asymp;');

	LatexCmds.isin = LatexCmds['in'] = bind(BinaryOperator,'\\in ','&isin;');

	LatexCmds.ni = LatexCmds.contains = bind(BinaryOperator,'\\ni ','&ni;');

	LatexCmds.notni = LatexCmds.niton = LatexCmds.notcontains = LatexCmds.doesnotcontain =
	  bind(BinaryOperator,'\\not\\ni ','&#8716;');

	LatexCmds.sub = LatexCmds.subset = bind(BinaryOperator,'\\subset ','&sub;');

	LatexCmds.sup = LatexCmds.supset = LatexCmds.superset =
	  bind(BinaryOperator,'\\supset ','&sup;');

	LatexCmds.nsub = LatexCmds.notsub =
	LatexCmds.nsubset = LatexCmds.notsubset =
	  bind(BinaryOperator,'\\not\\subset ','&#8836;');

	LatexCmds.nsup = LatexCmds.notsup =
	LatexCmds.nsupset = LatexCmds.notsupset =
	LatexCmds.nsuperset = LatexCmds.notsuperset =
	  bind(BinaryOperator,'\\not\\supset ','&#8837;');

	LatexCmds.sube = LatexCmds.subeq = LatexCmds.subsete = LatexCmds.subseteq =
	  bind(BinaryOperator,'\\subseteq ','&sube;');

	LatexCmds.supe = LatexCmds.supeq =
	LatexCmds.supsete = LatexCmds.supseteq =
	LatexCmds.supersete = LatexCmds.superseteq =
	  bind(BinaryOperator,'\\supseteq ','&supe;');

	LatexCmds.nsube = LatexCmds.nsubeq =
	LatexCmds.notsube = LatexCmds.notsubeq =
	LatexCmds.nsubsete = LatexCmds.nsubseteq =
	LatexCmds.notsubsete = LatexCmds.notsubseteq =
	  bind(BinaryOperator,'\\not\\subseteq ','&#8840;');

	LatexCmds.nsupe = LatexCmds.nsupeq =
	LatexCmds.notsupe = LatexCmds.notsupeq =
	LatexCmds.nsupsete = LatexCmds.nsupseteq =
	LatexCmds.notsupsete = LatexCmds.notsupseteq =
	LatexCmds.nsupersete = LatexCmds.nsuperseteq =
	LatexCmds.notsupersete = LatexCmds.notsuperseteq =
	  bind(BinaryOperator,'\\not\\supseteq ','&#8841;');


	//the canonical sets of numbers
	LatexCmds.N = LatexCmds.naturals = LatexCmds.Naturals =
	  bind(VanillaSymbol,'\\mathbb{N}','&#8469;');

	LatexCmds.P =
	LatexCmds.primes = LatexCmds.Primes =
	LatexCmds.projective = LatexCmds.Projective =
	LatexCmds.probability = LatexCmds.Probability =
	  bind(VanillaSymbol,'\\mathbb{P}','&#8473;');

	LatexCmds.Z = LatexCmds.integers = LatexCmds.Integers =
	  bind(VanillaSymbol,'\\mathbb{Z}','&#8484;');

	LatexCmds.Q = LatexCmds.rationals = LatexCmds.Rationals =
	  bind(VanillaSymbol,'\\mathbb{Q}','&#8474;');

	LatexCmds.R = LatexCmds.reals = LatexCmds.Reals =
	  bind(VanillaSymbol,'\\mathbb{R}','&#8477;');

	LatexCmds.C =
	LatexCmds.complex = LatexCmds.Complex =
	LatexCmds.complexes = LatexCmds.Complexes =
	LatexCmds.complexplane = LatexCmds.Complexplane = LatexCmds.ComplexPlane =
	  bind(VanillaSymbol,'\\mathbb{C}','&#8450;');

	LatexCmds.H = LatexCmds.Hamiltonian = LatexCmds.quaternions = LatexCmds.Quaternions =
	  bind(VanillaSymbol,'\\mathbb{H}','&#8461;');

	//spacing
	LatexCmds.quad = LatexCmds.emsp = bind(VanillaSymbol,'\\quad ','    ');
	LatexCmds.qquad = bind(VanillaSymbol,'\\qquad ','        ');
	/* spacing special characters, gonna have to implement this in LatexCommandInput::onText somehow
	case ',':
	  return VanillaSymbol('\\, ',' ');
	case ':':
	  return VanillaSymbol('\\: ','  ');
	case ';':
	  return VanillaSymbol('\\; ','   ');
	case '!':
	  return Symbol('\\! ','<span style="margin-right:-.2em"></span>');
	*/

	//binary operators
	LatexCmds.diamond = bind(VanillaSymbol, '\\diamond ', '&#9671;');
	LatexCmds.bigtriangleup = bind(VanillaSymbol, '\\bigtriangleup ', '&#9651;');
	LatexCmds.ominus = bind(VanillaSymbol, '\\ominus ', '&#8854;');
	LatexCmds.uplus = bind(VanillaSymbol, '\\uplus ', '&#8846;');
	LatexCmds.bigtriangledown = bind(VanillaSymbol, '\\bigtriangledown ', '&#9661;');
	LatexCmds.sqcap = bind(VanillaSymbol, '\\sqcap ', '&#8851;');
	LatexCmds.triangleleft = bind(VanillaSymbol, '\\triangleleft ', '&#8882;');
	LatexCmds.sqcup = bind(VanillaSymbol, '\\sqcup ', '&#8852;');
	LatexCmds.triangleright = bind(VanillaSymbol, '\\triangleright ', '&#8883;');
	//circledot is not a not real LaTex command see https://github.com/mathquill/mathquill/pull/552 for more details
	LatexCmds.odot = LatexCmds.circledot = bind(VanillaSymbol, '\\odot ', '&#8857;');
	LatexCmds.bigcirc = bind(VanillaSymbol, '\\bigcirc ', '&#9711;');
	LatexCmds.dagger = bind(VanillaSymbol, '\\dagger ', '&#0134;');
	LatexCmds.ddagger = bind(VanillaSymbol, '\\ddagger ', '&#135;');
	LatexCmds.wr = bind(VanillaSymbol, '\\wr ', '&#8768;');
	LatexCmds.amalg = bind(VanillaSymbol, '\\amalg ', '&#8720;');

	//relationship symbols
	LatexCmds.models = bind(VanillaSymbol, '\\models ', '&#8872;');
	LatexCmds.prec = bind(VanillaSymbol, '\\prec ', '&#8826;');
	LatexCmds.succ = bind(VanillaSymbol, '\\succ ', '&#8827;');
	LatexCmds.preceq = bind(VanillaSymbol, '\\preceq ', '&#8828;');
	LatexCmds.succeq = bind(VanillaSymbol, '\\succeq ', '&#8829;');
	LatexCmds.simeq = bind(VanillaSymbol, '\\simeq ', '&#8771;');
	LatexCmds.mid = bind(VanillaSymbol, '\\mid ', '&#8739;');
	LatexCmds.ll = bind(VanillaSymbol, '\\ll ', '&#8810;');
	LatexCmds.gg = bind(VanillaSymbol, '\\gg ', '&#8811;');
	LatexCmds.parallel = bind(VanillaSymbol, '\\parallel ', '&#8741;');
	LatexCmds.nparallel = bind(VanillaSymbol, '\\nparallel ', '&#8742;');
	LatexCmds.bowtie = bind(VanillaSymbol, '\\bowtie ', '&#8904;');
	LatexCmds.sqsubset = bind(VanillaSymbol, '\\sqsubset ', '&#8847;');
	LatexCmds.sqsupset = bind(VanillaSymbol, '\\sqsupset ', '&#8848;');
	LatexCmds.smile = bind(VanillaSymbol, '\\smile ', '&#8995;');
	LatexCmds.sqsubseteq = bind(VanillaSymbol, '\\sqsubseteq ', '&#8849;');
	LatexCmds.sqsupseteq = bind(VanillaSymbol, '\\sqsupseteq ', '&#8850;');
	LatexCmds.doteq = bind(VanillaSymbol, '\\doteq ', '&#8784;');
	LatexCmds.frown = bind(VanillaSymbol, '\\frown ', '&#8994;');
	LatexCmds.vdash = bind(VanillaSymbol, '\\vdash ', '&#8870;');
	LatexCmds.dashv = bind(VanillaSymbol, '\\dashv ', '&#8867;');
	LatexCmds.nless = bind(VanillaSymbol, '\\nless ', '&#8814;');
	LatexCmds.ngtr = bind(VanillaSymbol, '\\ngtr ', '&#8815;');

	//arrows
	LatexCmds.longleftarrow = bind(VanillaSymbol, '\\longleftarrow ', '&#8592;');
	LatexCmds.longrightarrow = bind(VanillaSymbol, '\\longrightarrow ', '&#8594;');
	LatexCmds.Longleftarrow = bind(VanillaSymbol, '\\Longleftarrow ', '&#8656;');
	LatexCmds.Longrightarrow = bind(VanillaSymbol, '\\Longrightarrow ', '&#8658;');
	LatexCmds.longleftrightarrow = bind(VanillaSymbol, '\\longleftrightarrow ', '&#8596;');
	LatexCmds.updownarrow = bind(VanillaSymbol, '\\updownarrow ', '&#8597;');
	LatexCmds.Longleftrightarrow = bind(VanillaSymbol, '\\Longleftrightarrow ', '&#8660;');
	LatexCmds.Updownarrow = bind(VanillaSymbol, '\\Updownarrow ', '&#8661;');
	LatexCmds.mapsto = bind(VanillaSymbol, '\\mapsto ', '&#8614;');
	LatexCmds.nearrow = bind(VanillaSymbol, '\\nearrow ', '&#8599;');
	LatexCmds.hookleftarrow = bind(VanillaSymbol, '\\hookleftarrow ', '&#8617;');
	LatexCmds.hookrightarrow = bind(VanillaSymbol, '\\hookrightarrow ', '&#8618;');
	LatexCmds.searrow = bind(VanillaSymbol, '\\searrow ', '&#8600;');
	LatexCmds.leftharpoonup = bind(VanillaSymbol, '\\leftharpoonup ', '&#8636;');
	LatexCmds.rightharpoonup = bind(VanillaSymbol, '\\rightharpoonup ', '&#8640;');
	LatexCmds.swarrow = bind(VanillaSymbol, '\\swarrow ', '&#8601;');
	LatexCmds.leftharpoondown = bind(VanillaSymbol, '\\leftharpoondown ', '&#8637;');
	LatexCmds.rightharpoondown = bind(VanillaSymbol, '\\rightharpoondown ', '&#8641;');
	LatexCmds.nwarrow = bind(VanillaSymbol, '\\nwarrow ', '&#8598;');

	//Misc
	LatexCmds.ldots = bind(VanillaSymbol, '\\ldots ', '&#8230;');
	LatexCmds.cdots = bind(VanillaSymbol, '\\cdots ', '&#8943;');
	LatexCmds.vdots = bind(VanillaSymbol, '\\vdots ', '&#8942;');
	LatexCmds.ddots = bind(VanillaSymbol, '\\ddots ', '&#8945;');
	LatexCmds.surd = bind(VanillaSymbol, '\\surd ', '&#8730;');
	LatexCmds.triangle = bind(VanillaSymbol, '\\triangle ', '&#9651;');
	LatexCmds.ell = bind(VanillaSymbol, '\\ell ', '&#8467;');
	LatexCmds.top = bind(VanillaSymbol, '\\top ', '&#8868;');
	LatexCmds.flat = bind(VanillaSymbol, '\\flat ', '&#9837;');
	LatexCmds.natural = bind(VanillaSymbol, '\\natural ', '&#9838;');
	LatexCmds.sharp = bind(VanillaSymbol, '\\sharp ', '&#9839;');
	LatexCmds.wp = bind(VanillaSymbol, '\\wp ', '&#8472;');
	LatexCmds.bot = bind(VanillaSymbol, '\\bot ', '&#8869;');
	LatexCmds.clubsuit = bind(VanillaSymbol, '\\clubsuit ', '&#9827;');
	LatexCmds.diamondsuit = bind(VanillaSymbol, '\\diamondsuit ', '&#9826;');
	LatexCmds.heartsuit = bind(VanillaSymbol, '\\heartsuit ', '&#9825;');
	LatexCmds.spadesuit = bind(VanillaSymbol, '\\spadesuit ', '&#9824;');
	//not real LaTex command see https://github.com/mathquill/mathquill/pull/552 for more details
	LatexCmds.parallelogram = bind(VanillaSymbol, '\\parallelogram ', '&#9649;');
	LatexCmds.square = bind(VanillaSymbol, '\\square ', '&#11036;');

	//variable-sized
	LatexCmds.oint = bind(VanillaSymbol, '\\oint ', '&#8750;');
	LatexCmds.bigcap = bind(VanillaSymbol, '\\bigcap ', '&#8745;');
	LatexCmds.bigcup = bind(VanillaSymbol, '\\bigcup ', '&#8746;');
	LatexCmds.bigsqcup = bind(VanillaSymbol, '\\bigsqcup ', '&#8852;');
	LatexCmds.bigvee = bind(VanillaSymbol, '\\bigvee ', '&#8744;');
	LatexCmds.bigwedge = bind(VanillaSymbol, '\\bigwedge ', '&#8743;');
	LatexCmds.bigodot = bind(VanillaSymbol, '\\bigodot ', '&#8857;');
	LatexCmds.bigotimes = bind(VanillaSymbol, '\\bigotimes ', '&#8855;');
	LatexCmds.bigoplus = bind(VanillaSymbol, '\\bigoplus ', '&#8853;');
	LatexCmds.biguplus = bind(VanillaSymbol, '\\biguplus ', '&#8846;');

	//delimiters
	LatexCmds.lfloor = bind(VanillaSymbol, '\\lfloor ', '&#8970;');
	LatexCmds.rfloor = bind(VanillaSymbol, '\\rfloor ', '&#8971;');
	LatexCmds.lceil = bind(VanillaSymbol, '\\lceil ', '&#8968;');
	LatexCmds.rceil = bind(VanillaSymbol, '\\rceil ', '&#8969;');
	LatexCmds.opencurlybrace = LatexCmds.lbrace = bind(VanillaSymbol, '\\lbrace ', '{');
	LatexCmds.closecurlybrace = LatexCmds.rbrace = bind(VanillaSymbol, '\\rbrace ', '}');
	LatexCmds.lbrack = bind(VanillaSymbol, '[');
	LatexCmds.rbrack = bind(VanillaSymbol, ']');

	//various symbols
	LatexCmds.slash = bind(VanillaSymbol, '/');
	LatexCmds.vert = bind(VanillaSymbol,'|');
	LatexCmds.perp = LatexCmds.perpendicular = bind(VanillaSymbol,'\\perp ','&perp;');
	LatexCmds.nabla = LatexCmds.del = bind(VanillaSymbol,'\\nabla ','&nabla;');
	LatexCmds.hbar = bind(VanillaSymbol,'\\hbar ','&#8463;');

	LatexCmds.AA = LatexCmds.Angstrom = LatexCmds.angstrom =
	  bind(VanillaSymbol,'\\text\\AA ','&#8491;');

	LatexCmds.ring = LatexCmds.circ = LatexCmds.circle =
	  bind(VanillaSymbol,'\\circ ','&#8728;');

	LatexCmds.bull = LatexCmds.bullet = bind(VanillaSymbol,'\\bullet ','&bull;');

	LatexCmds.setminus = LatexCmds.smallsetminus =
	  bind(VanillaSymbol,'\\setminus ','&#8726;');

	LatexCmds.not = //bind(Symbol,'\\not ','<span class="not">/</span>');
	LatexCmds['\u00ac'] = LatexCmds.neg = bind(VanillaSymbol,'\\neg ','&not;');

	LatexCmds['\u2026'] = LatexCmds.dots = LatexCmds.ellip = LatexCmds.hellip =
	LatexCmds.ellipsis = LatexCmds.hellipsis =
	  bind(VanillaSymbol,'\\dots ','&hellip;');

	LatexCmds.converges =
	LatexCmds.darr = LatexCmds.dnarr = LatexCmds.dnarrow = LatexCmds.downarrow =
	  bind(VanillaSymbol,'\\downarrow ','&darr;');

	LatexCmds.dArr = LatexCmds.dnArr = LatexCmds.dnArrow = LatexCmds.Downarrow =
	  bind(VanillaSymbol,'\\Downarrow ','&dArr;');

	LatexCmds.diverges = LatexCmds.uarr = LatexCmds.uparrow =
	  bind(VanillaSymbol,'\\uparrow ','&uarr;');

	LatexCmds.uArr = LatexCmds.Uparrow = bind(VanillaSymbol,'\\Uparrow ','&uArr;');

	LatexCmds.to = bind(BinaryOperator,'\\to ','&rarr;');

	LatexCmds.rarr = LatexCmds.rightarrow = bind(VanillaSymbol,'\\rightarrow ','&rarr;');

	LatexCmds.implies = bind(BinaryOperator,'\\Rightarrow ','&rArr;');

	LatexCmds.rArr = LatexCmds.Rightarrow = bind(VanillaSymbol,'\\Rightarrow ','&rArr;');

	LatexCmds.gets = bind(BinaryOperator,'\\gets ','&larr;');

	LatexCmds.larr = LatexCmds.leftarrow = bind(VanillaSymbol,'\\leftarrow ','&larr;');

	LatexCmds.impliedby = bind(BinaryOperator,'\\Leftarrow ','&lArr;');

	LatexCmds.lArr = LatexCmds.Leftarrow = bind(VanillaSymbol,'\\Leftarrow ','&lArr;');

	LatexCmds.harr = LatexCmds.lrarr = LatexCmds.leftrightarrow =
	  bind(VanillaSymbol,'\\leftrightarrow ','&harr;');

	LatexCmds.iff = bind(BinaryOperator,'\\Leftrightarrow ','&hArr;');

	LatexCmds.hArr = LatexCmds.lrArr = LatexCmds.Leftrightarrow =
	  bind(VanillaSymbol,'\\Leftrightarrow ','&hArr;');

	LatexCmds.Re = LatexCmds.Real = LatexCmds.real = bind(VanillaSymbol,'\\Re ','&real;');

	LatexCmds.Im = LatexCmds.imag =
	LatexCmds.image = LatexCmds.imagin = LatexCmds.imaginary = LatexCmds.Imaginary =
	  bind(VanillaSymbol,'\\Im ','&image;');

	LatexCmds.part = LatexCmds.partial = bind(VanillaSymbol,'\\partial ','&part;');

	LatexCmds.infty = LatexCmds.infin = LatexCmds.infinity =
	  bind(VanillaSymbol,'\\infty ','&infin;');

	LatexCmds.alef = LatexCmds.alefsym = LatexCmds.aleph = LatexCmds.alephsym =
	  bind(VanillaSymbol,'\\aleph ','&alefsym;');

	LatexCmds.xist = //LOL
	LatexCmds.xists = LatexCmds.exist = LatexCmds.exists =
	  bind(VanillaSymbol,'\\exists ','&exist;');
	  
	LatexCmds.nexists = LatexCmds.nexist =
	      bind(VanillaSymbol, '\\nexists ', '&#8708;');

	LatexCmds.and = LatexCmds.land = LatexCmds.wedge =
	  bind(VanillaSymbol,'\\wedge ','&and;');

	LatexCmds.or = LatexCmds.lor = LatexCmds.vee = bind(VanillaSymbol,'\\vee ','&or;');

	LatexCmds.o = LatexCmds.O =
	LatexCmds.empty = LatexCmds.emptyset =
	LatexCmds.oslash = LatexCmds.Oslash =
	LatexCmds.nothing = LatexCmds.varnothing =
	  bind(BinaryOperator,'\\varnothing ','&empty;');

	LatexCmds.cup = LatexCmds.union = bind(BinaryOperator,'\\cup ','&cup;');

	LatexCmds.cap = LatexCmds.intersect = LatexCmds.intersection =
	  bind(BinaryOperator,'\\cap ','&cap;');

	// FIXME: the correct LaTeX would be ^\circ but we can't parse that
	LatexCmds.deg = LatexCmds.degree = bind(VanillaSymbol,'\\degree ','&deg;');

	LatexCmds.ang = LatexCmds.angle = bind(VanillaSymbol,'\\angle ','&ang;');
	LatexCmds.measuredangle = bind(VanillaSymbol,'\\measuredangle ','&#8737;');
	/*********************************
	 * Symbols for Basic Mathematics
	 ********************************/

	var Digit = P(VanillaSymbol, function(_, super_) {
	  _.createLeftOf = function(cursor) {
	    if (cursor.options.autoSubscriptNumerals
	        && cursor.parent !== cursor.parent.parent.sub
	        && ((cursor[L] instanceof Variable && cursor[L].isItalic !== false)
	            || (cursor[L] instanceof SupSub
	                && cursor[L][L] instanceof Variable
	                && cursor[L][L].isItalic !== false))) {
	      LatexCmds._().createLeftOf(cursor);
	      super_.createLeftOf.call(this, cursor);
	      cursor.insRightOf(cursor.parent.parent);
	    }
	    else super_.createLeftOf.call(this, cursor);
	  };
	});

	var Variable = P(Symbol, function(_, super_) {
	  _.init = function(ch, html) {
	    super_.init.call(this, ch, '<var>'+(html || ch)+'</var>');
	  };
	  _.text = function() {
	    var text = this.ctrlSeq;
	    if (this[L] && !(this[L] instanceof Variable)
	        && !(this[L] instanceof BinaryOperator)
	        && this[L].ctrlSeq !== "\\ ")
	      text = '*' + text;
	    if (this[R] && !(this[R] instanceof BinaryOperator)
	        && !(this[R] instanceof SupSub))
	      text += '*';
	    return text;
	  };
	});

	Options.p.autoCommands = { _maxLength: 0 };
	optionProcessors.autoCommands = function(cmds) {
	  if (!/^[a-z]+(?: [a-z]+)*$/i.test(cmds)) {
	    throw '"'+cmds+'" not a space-delimited list of only letters';
	  }
	  var list = cmds.split(' '), dict = {}, maxLength = 0;
	  for (var i = 0; i < list.length; i += 1) {
	    var cmd = list[i];
	    if (cmd.length < 2) {
	      throw 'autocommand "'+cmd+'" not minimum length of 2';
	    }
	    if (LatexCmds[cmd] === OperatorName) {
	      throw '"' + cmd + '" is a built-in operator name';
	    }
	    dict[cmd] = 1;
	    maxLength = max(maxLength, cmd.length);
	  }
	  dict._maxLength = maxLength;
	  return dict;
	};

	var Letter = P(Variable, function(_, super_) {
	  _.init = function(ch) { return super_.init.call(this, this.letter = ch); };
	  _.createLeftOf = function(cursor) {
	    super_.createLeftOf.apply(this, arguments);
	    var autoCmds = cursor.options.autoCommands, maxLength = autoCmds._maxLength;
	    if (maxLength > 0) {
	      // want longest possible autocommand, so join together longest
	      // sequence of letters
	      var str = '', l = this, i = 0;
	      // FIXME: l.ctrlSeq === l.letter checks if first or last in an operator name
	      while (l instanceof Letter && l.ctrlSeq === l.letter && i < maxLength) {
	        str = l.letter + str, l = l[L], i += 1;
	      }
	      // check for an autocommand, going thru substrings longest to shortest
	      while (str.length) {
	        if (autoCmds.hasOwnProperty(str)) {
	          for (var i = 1, l = this; i < str.length; i += 1, l = l[L]);
	          Fragment(l, this).remove();
	          cursor[L] = l[L];
	          return LatexCmds[str](str).createLeftOf(cursor);
	        }
	        str = str.slice(1);
	      }
	    }
	  };
	  _.italicize = function(bool) {
	    this.isItalic = bool;
	    this.jQ.toggleClass('mq-operator-name', !bool);
	    return this;
	  };
	  _.finalizeTree = _.siblingDeleted = _.siblingCreated = function(opts, dir) {
	    // don't auto-un-italicize if the sibling to my right changed (dir === R or
	    // undefined) and it's now a Letter, it will un-italicize everyone
	    if (dir !== L && this[R] instanceof Letter) return;
	    this.autoUnItalicize(opts);
	  };
	  _.autoUnItalicize = function(opts) {
	    var autoOps = opts.autoOperatorNames;
	    if (autoOps._maxLength === 0) return;
	    // want longest possible operator names, so join together entire contiguous
	    // sequence of letters
	    var str = this.letter;
	    for (var l = this[L]; l instanceof Letter; l = l[L]) str = l.letter + str;
	    for (var r = this[R]; r instanceof Letter; r = r[R]) str += r.letter;

	    // removeClass and delete flags from all letters before figuring out
	    // which, if any, are part of an operator name
	    Fragment(l[R] || this.parent.ends[L], r[L] || this.parent.ends[R]).each(function(el) {
	      el.italicize(true).jQ.removeClass('mq-first mq-last mq-followed-by-supsub');
	      el.ctrlSeq = el.letter;
	    });

	    // check for operator names: at each position from left to right, check
	    // substrings from longest to shortest
	    outer: for (var i = 0, first = l[R] || this.parent.ends[L]; i < str.length; i += 1, first = first[R]) {
	      for (var len = min(autoOps._maxLength, str.length - i); len > 0; len -= 1) {
	        var word = str.slice(i, i + len);
	        if (autoOps.hasOwnProperty(word)) {
	          for (var j = 0, letter = first; j < len; j += 1, letter = letter[R]) {
	            letter.italicize(false);
	            var last = letter;
	          }

	          var isBuiltIn = BuiltInOpNames.hasOwnProperty(word);
	          first.ctrlSeq = (isBuiltIn ? '\\' : '\\operatorname{') + first.ctrlSeq;
	          last.ctrlSeq += (isBuiltIn ? ' ' : '}');
	          if (TwoWordOpNames.hasOwnProperty(word)) last[L][L][L].jQ.addClass('mq-last');
	          if (!shouldOmitPadding(first[L])) first.jQ.addClass('mq-first');
	          if (!shouldOmitPadding(last[R])) {
	            if (last[R] instanceof SupSub) {
	              var supsub = last[R]; // XXX monkey-patching, but what's the right thing here?
	              // Have operatorname-specific code in SupSub? A CSS-like language to style the
	              // math tree, but which ignores cursor and selection (which CSS can't)?
	              var respace = supsub.siblingCreated = supsub.siblingDeleted = function() {
	                supsub.jQ.toggleClass('mq-after-operator-name', !(supsub[R] instanceof Bracket));
	              };
	              respace();
	            }
	            else {
	              last.jQ.toggleClass('mq-last', !(last[R] instanceof Bracket));
	            }
	          }

	          i += len - 1;
	          first = last;
	          continue outer;
	        }
	      }
	    }
	  };
	  function shouldOmitPadding(node) {
	    // omit padding if no node, or if node already has padding (to avoid double-padding)
	    return !node || (node instanceof BinaryOperator) || (node instanceof SummationNotation);
	  }
	});
	var BuiltInOpNames = {}; // the set of operator names like \sin, \cos, etc that
	  // are built-into LaTeX, see Section 3.17 of the Short Math Guide: http://tinyurl.com/jm9okjc
	  // MathQuill auto-unitalicizes some operator names not in that set, like 'hcf'
	  // and 'arsinh', which must be exported as \operatorname{hcf} and
	  // \operatorname{arsinh}. Note: over/under line/arrow \lim variants like
	  // \varlimsup are not supported
	var AutoOpNames = Options.p.autoOperatorNames = { _maxLength: 9 }; // the set
	  // of operator names that MathQuill auto-unitalicizes by default; overridable
	var TwoWordOpNames = { limsup: 1, liminf: 1, projlim: 1, injlim: 1 };
	(function() {
	  var mostOps = ('arg deg det dim exp gcd hom inf ker lg lim ln log max min sup'
	                 + ' limsup liminf injlim projlim Pr').split(' ');
	  for (var i = 0; i < mostOps.length; i += 1) {
	    BuiltInOpNames[mostOps[i]] = AutoOpNames[mostOps[i]] = 1;
	  }

	  var builtInTrigs = // why coth but not sech and csch, LaTeX?
	    'sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth'.split(' ');
	  for (var i = 0; i < builtInTrigs.length; i += 1) {
	    BuiltInOpNames[builtInTrigs[i]] = 1;
	  }

	  var autoTrigs = 'sin cos tan sec cosec csc cotan cot ctg'.split(' ');
	  for (var i = 0; i < autoTrigs.length; i += 1) {
	    AutoOpNames[autoTrigs[i]] =
	    AutoOpNames['arc'+autoTrigs[i]] =
	    AutoOpNames[autoTrigs[i]+'h'] =
	    AutoOpNames['ar'+autoTrigs[i]+'h'] =
	    AutoOpNames['arc'+autoTrigs[i]+'h'] = 1;
	  }

	  // compat with some of the nonstandard LaTeX exported by MathQuill
	  // before #247. None of these are real LaTeX commands so, seems safe
	  var moreNonstandardOps = 'gcf hcf lcm proj span'.split(' ');
	  for (var i = 0; i < moreNonstandardOps.length; i += 1) {
	    AutoOpNames[moreNonstandardOps[i]] = 1;
	  }
	}());
	optionProcessors.autoOperatorNames = function(cmds) {
	  if (!/^[a-z]+(?: [a-z]+)*$/i.test(cmds)) {
	    throw '"'+cmds+'" not a space-delimited list of only letters';
	  }
	  var list = cmds.split(' '), dict = {}, maxLength = 0;
	  for (var i = 0; i < list.length; i += 1) {
	    var cmd = list[i];
	    if (cmd.length < 2) {
	      throw '"'+cmd+'" not minimum length of 2';
	    }
	    dict[cmd] = 1;
	    maxLength = max(maxLength, cmd.length);
	  }
	  dict._maxLength = maxLength;
	  return dict;
	};
	var OperatorName = P(Symbol, function(_, super_) {
	  _.init = function(fn) { this.ctrlSeq = fn; };
	  _.createLeftOf = function(cursor) {
	    var fn = this.ctrlSeq;
	    for (var i = 0; i < fn.length; i += 1) {
	      Letter(fn.charAt(i)).createLeftOf(cursor);
	    }
	  };
	  _.parser = function() {
	    var fn = this.ctrlSeq;
	    var block = MathBlock();
	    for (var i = 0; i < fn.length; i += 1) {
	      Letter(fn.charAt(i)).adopt(block, block.ends[R], 0);
	    }
	    return Parser.succeed(block.children());
	  };
	});
	for (var fn in AutoOpNames) if (AutoOpNames.hasOwnProperty(fn)) {
	  LatexCmds[fn] = OperatorName;
	}
	LatexCmds.operatorname = P(MathCommand, function(_) {
	  _.createLeftOf = noop;
	  _.numBlocks = function() { return 1; };
	  _.parser = function() {
	    return latexMathParser.block.map(function(b) { return b.children(); });
	  };
	});

	LatexCmds.f = P(Letter, function(_, super_) {
	  _.init = function() {
	    Symbol.p.init.call(this, this.letter = 'f', '<var class="mq-f">f</var>');
	  };
	  _.italicize = function(bool) {
	    this.jQ.html('f').toggleClass('mq-f', bool);
	    return super_.italicize.apply(this, arguments);
	  };
	});

	// VanillaSymbol's
	LatexCmds[' '] = LatexCmds.space = bind(VanillaSymbol, '\\ ', '&nbsp;');

	LatexCmds["'"] = LatexCmds.prime = bind(VanillaSymbol, "'", '&prime;');

	LatexCmds.backslash = bind(VanillaSymbol,'\\backslash ','\\');
	if (!CharCmds['\\']) CharCmds['\\'] = LatexCmds.backslash;

	LatexCmds.$ = bind(VanillaSymbol, '\\$', '$');

	// does not use Symbola font
	var NonSymbolaSymbol = P(Symbol, function(_, super_) {
	  _.init = function(ch, html) {
	    super_.init.call(this, ch, '<span class="mq-nonSymbola">'+(html || ch)+'</span>');
	  };
	});

	LatexCmds['@'] = NonSymbolaSymbol;
	LatexCmds['&'] = bind(NonSymbolaSymbol, '\\&', '&amp;');
	LatexCmds['%'] = bind(NonSymbolaSymbol, '\\%', '%');

	//the following are all Greek to me, but this helped a lot: http://www.ams.org/STIX/ion/stixsig03.html

	//lowercase Greek letter variables
	LatexCmds.alpha =
	LatexCmds.beta =
	LatexCmds.gamma =
	LatexCmds.delta =
	LatexCmds.zeta =
	LatexCmds.eta =
	LatexCmds.theta =
	LatexCmds.iota =
	LatexCmds.kappa =
	LatexCmds.mu =
	LatexCmds.nu =
	LatexCmds.xi =
	LatexCmds.rho =
	LatexCmds.sigma =
	LatexCmds.tau =
	LatexCmds.chi =
	LatexCmds.psi =
	LatexCmds.omega = P(Variable, function(_, super_) {
	  _.init = function(latex) {
	    super_.init.call(this,'\\'+latex+' ','&'+latex+';');
	  };
	});

	//why can't anybody FUCKING agree on these
	LatexCmds.phi = //W3C or Unicode?
	  bind(Variable,'\\phi ','&#981;');

	LatexCmds.phiv = //Elsevier and 9573-13
	LatexCmds.varphi = //AMS and LaTeX
	  bind(Variable,'\\varphi ','&phi;');

	LatexCmds.epsilon = //W3C or Unicode?
	  bind(Variable,'\\epsilon ','&#1013;');

	LatexCmds.epsiv = //Elsevier and 9573-13
	LatexCmds.varepsilon = //AMS and LaTeX
	  bind(Variable,'\\varepsilon ','&epsilon;');

	LatexCmds.piv = //W3C/Unicode and Elsevier and 9573-13
	LatexCmds.varpi = //AMS and LaTeX
	  bind(Variable,'\\varpi ','&piv;');

	LatexCmds.sigmaf = //W3C/Unicode
	LatexCmds.sigmav = //Elsevier
	LatexCmds.varsigma = //LaTeX
	  bind(Variable,'\\varsigma ','&sigmaf;');

	LatexCmds.thetav = //Elsevier and 9573-13
	LatexCmds.vartheta = //AMS and LaTeX
	LatexCmds.thetasym = //W3C/Unicode
	  bind(Variable,'\\vartheta ','&thetasym;');

	LatexCmds.upsilon = //AMS and LaTeX and W3C/Unicode
	LatexCmds.upsi = //Elsevier and 9573-13
	  bind(Variable,'\\upsilon ','&upsilon;');

	//these aren't even mentioned in the HTML character entity references
	LatexCmds.gammad = //Elsevier
	LatexCmds.Gammad = //9573-13 -- WTF, right? I dunno if this was a typo in the reference (see above)
	LatexCmds.digamma = //LaTeX
	  bind(Variable,'\\digamma ','&#989;');

	LatexCmds.kappav = //Elsevier
	LatexCmds.varkappa = //AMS and LaTeX
	  bind(Variable,'\\varkappa ','&#1008;');

	LatexCmds.rhov = //Elsevier and 9573-13
	LatexCmds.varrho = //AMS and LaTeX
	  bind(Variable,'\\varrho ','&#1009;');

	//Greek constants, look best in non-italicized Times New Roman
	LatexCmds.pi = LatexCmds['\u03c0'] = bind(NonSymbolaSymbol,'\\pi ','&pi;');
	LatexCmds.lambda = bind(NonSymbolaSymbol,'\\lambda ','&lambda;');

	//uppercase greek letters

	LatexCmds.Upsilon = //LaTeX
	LatexCmds.Upsi = //Elsevier and 9573-13
	LatexCmds.upsih = //W3C/Unicode "upsilon with hook"
	LatexCmds.Upsih = //'cos it makes sense to me
	  bind(Symbol,'\\Upsilon ','<var style="font-family: serif">&upsih;</var>'); //Symbola's 'upsilon with a hook' is a capital Y without hooks :(

	//other symbols with the same LaTeX command and HTML character entity reference
	LatexCmds.Gamma =
	LatexCmds.Delta =
	LatexCmds.Theta =
	LatexCmds.Lambda =
	LatexCmds.Xi =
	LatexCmds.Pi =
	LatexCmds.Sigma =
	LatexCmds.Phi =
	LatexCmds.Psi =
	LatexCmds.Omega =
	LatexCmds.forall = P(VanillaSymbol, function(_, super_) {
	  _.init = function(latex) {
	    super_.init.call(this,'\\'+latex+' ','&'+latex+';');
	  };
	});

	// symbols that aren't a single MathCommand, but are instead a whole
	// Fragment. Creates the Fragment from a LaTeX string
	var LatexFragment = P(MathCommand, function(_) {
	  _.init = function(latex) { this.latex = latex; };
	  _.createLeftOf = function(cursor) {
	    var block = latexMathParser.parse(this.latex);
	    block.children().adopt(cursor.parent, cursor[L], cursor[R]);
	    cursor[L] = block.ends[R];
	    block.jQize().insertBefore(cursor.jQ);
	    block.finalizeInsert(cursor.options, cursor);
	    if (block.ends[R][R].siblingCreated) block.ends[R][R].siblingCreated(cursor.options, L);
	    if (block.ends[L][L].siblingCreated) block.ends[L][L].siblingCreated(cursor.options, R);
	    cursor.parent.bubble('reflow');
	  };
	  _.parser = function() {
	    var frag = latexMathParser.parse(this.latex).children();
	    return Parser.succeed(frag);
	  };
	});

	// for what seems to me like [stupid reasons][1], Unicode provides
	// subscripted and superscripted versions of all ten Arabic numerals,
	// as well as [so-called "vulgar fractions"][2].
	// Nobody really cares about most of them, but some of them actually
	// predate Unicode, dating back to [ISO-8859-1][3], apparently also
	// known as "Latin-1", which among other things [Windows-1252][4]
	// largely coincides with, so Microsoft Word sometimes inserts them
	// and they get copy-pasted into MathQuill.
	//
	// (Irrelevant but funny story: though not a superset of Latin-1 aka
	// ISO-8859-1, Windows-1252 **is** a strict superset of the "closely
	// related but distinct"[3] "ISO 8859-1" -- see the lack of a dash
	// after "ISO"? Completely different character set, like elephants vs
	// elephant seals, or "Zombies" vs "Zombie Redneck Torture Family".
	// What kind of idiot would get them confused.
	// People in fact got them confused so much, it was so common to
	// mislabel Windows-1252 text as ISO-8859-1, that most modern web
	// browsers and email clients treat the MIME charset of ISO-8859-1
	// as actually Windows-1252, behavior now standard in the HTML5 spec.)
	//
	// [1]: http://en.wikipedia.org/wiki/Unicode_subscripts_andsuper_scripts
	// [2]: http://en.wikipedia.org/wiki/Number_Forms
	// [3]: http://en.wikipedia.org/wiki/ISO/IEC_8859-1
	// [4]: http://en.wikipedia.org/wiki/Windows-1252
	LatexCmds['\u00b9'] = bind(LatexFragment, '^1');
	LatexCmds['\u00b2'] = bind(LatexFragment, '^2');
	LatexCmds['\u00b3'] = bind(LatexFragment, '^3');
	LatexCmds['\u00bc'] = bind(LatexFragment, '\\frac14');
	LatexCmds['\u00bd'] = bind(LatexFragment, '\\frac12');
	LatexCmds['\u00be'] = bind(LatexFragment, '\\frac34');

	var PlusMinus = P(BinaryOperator, function(_) {
	  _.init = VanillaSymbol.prototype.init;

	  _.contactWeld = _.siblingCreated = _.siblingDeleted = function(opts, dir) {
	    if (dir === R) return; // ignore if sibling only changed on the right
	    // If the left sibling is a binary operator or a separator (comma, semicolon, colon)
	    // or an open bracket (open parenthesis, open square bracket)
	    // consider the operator to be unary, otherwise binary
	    this.jQ[0].className =
	      (!this[L] || this[L] instanceof BinaryOperator || /^[,;:\(\[]$/.test(this[L].ctrlSeq) ? '' : 'mq-binary-operator');
	    return this;
	  };
	});

	LatexCmds['+'] = bind(PlusMinus, '+', '+');
	//yes, these are different dashes, I think one is an en dash and the other is a hyphen
	LatexCmds['\u2013'] = LatexCmds['-'] = bind(PlusMinus, '-', '&minus;');
	LatexCmds['\u00b1'] = LatexCmds.pm = LatexCmds.plusmn = LatexCmds.plusminus =
	  bind(PlusMinus,'\\pm ','&plusmn;');
	LatexCmds.mp = LatexCmds.mnplus = LatexCmds.minusplus =
	  bind(PlusMinus,'\\mp ','&#8723;');

	CharCmds['*'] = LatexCmds.sdot = LatexCmds.cdot =
	  bind(BinaryOperator, '\\cdot ', '&middot;', '*');
	//semantically should be &sdot;, but &middot; looks better

	var Inequality = P(BinaryOperator, function(_, super_) {
	  _.init = function(data, strict) {
	    this.data = data;
	    this.strict = strict;
	    var strictness = (strict ? 'Strict' : '');
	    super_.init.call(this, data['ctrlSeq'+strictness], data['html'+strictness],
	                     data['text'+strictness]);
	  };
	  _.swap = function(strict) {
	    this.strict = strict;
	    var strictness = (strict ? 'Strict' : '');
	    this.ctrlSeq = this.data['ctrlSeq'+strictness];
	    this.jQ.html(this.data['html'+strictness]);
	    this.textTemplate = [ this.data['text'+strictness] ];
	  };
	  _.deleteTowards = function(dir, cursor) {
	    if (dir === L && !this.strict) {
	      this.swap(true);
	      this.bubble('reflow');
	      return;
	    }
	    super_.deleteTowards.apply(this, arguments);
	  };
	});

	var less = { ctrlSeq: '\\le ', html: '&le;', text: '\u2264',
	             ctrlSeqStrict: '<', htmlStrict: '&lt;', textStrict: '<' };
	var greater = { ctrlSeq: '\\ge ', html: '&ge;', text: '\u2265',
	                ctrlSeqStrict: '>', htmlStrict: '&gt;', textStrict: '>' };

	LatexCmds['<'] = LatexCmds.lt = bind(Inequality, less, true);
	LatexCmds['>'] = LatexCmds.gt = bind(Inequality, greater, true);
	LatexCmds['\u2264'] = LatexCmds.le = LatexCmds.leq = bind(Inequality, less, false);
	LatexCmds['\u2265'] = LatexCmds.ge = LatexCmds.geq = bind(Inequality, greater, false);

	var Equality = P(BinaryOperator, function(_, super_) {
	  _.init = function() {
	    super_.init.call(this, '=', '=');
	  };
	  _.createLeftOf = function(cursor) {
	    if (cursor[L] instanceof Inequality && cursor[L].strict) {
	      cursor[L].swap(false);
	      cursor[L].bubble('reflow');
	      return;
	    }
	    super_.createLeftOf.apply(this, arguments);
	  };
	});
	LatexCmds['='] = Equality;

	LatexCmds['\u00d7'] = LatexCmds.times = bind(BinaryOperator, '\\times ', '&times;', '[x]');

	LatexCmds['\u00f7'] = LatexCmds.div = LatexCmds.divide = LatexCmds.divides =
	  bind(BinaryOperator,'\\div ','&divide;', '[/]');

	CharCmds['~'] = LatexCmds.sim = bind(BinaryOperator, '\\sim ', '~', '~');
	/***************************
	 * Commands and Operators.
	 **************************/

	var scale, // = function(jQ, x, y) { ... }
	//will use a CSS 2D transform to scale the jQuery-wrapped HTML elements,
	//or the filter matrix transform fallback for IE 5.5-8, or gracefully degrade to
	//increasing the fontSize to match the vertical Y scaling factor.

	//ideas from http://github.com/louisremi/jquery.transform.js
	//see also http://msdn.microsoft.com/en-us/library/ms533014(v=vs.85).aspx

	  forceIERedraw = noop,
	  div = document.createElement('div'),
	  div_style = div.style,
	  transformPropNames = {
	    transform:1,
	    WebkitTransform:1,
	    MozTransform:1,
	    OTransform:1,
	    msTransform:1
	  },
	  transformPropName;

	for (var prop in transformPropNames) {
	  if (prop in div_style) {
	    transformPropName = prop;
	    break;
	  }
	}

	if (transformPropName) {
	  scale = function(jQ, x, y) {
	    jQ.css(transformPropName, 'scale('+x+','+y+')');
	  };
	}
	else if ('filter' in div_style) { //IE 6, 7, & 8 fallback, see https://github.com/laughinghan/mathquill/wiki/Transforms
	  forceIERedraw = function(el){ el.className = el.className; };
	  scale = function(jQ, x, y) { //NOTE: assumes y > x
	    x /= (1+(y-1)/2);
	    jQ.css('fontSize', y + 'em');
	    if (!jQ.hasClass('mq-matrixed-container')) {
	      jQ.addClass('mq-matrixed-container')
	      .wrapInner('<span class="mq-matrixed"></span>');
	    }
	    var innerjQ = jQ.children()
	    .css('filter', 'progid:DXImageTransform.Microsoft'
	        + '.Matrix(M11=' + x + ",SizingMethod='auto expand')"
	    );
	    function calculateMarginRight() {
	      jQ.css('marginRight', (innerjQ.width()-1)*(x-1)/x + 'px');
	    }
	    calculateMarginRight();
	    var intervalId = setInterval(calculateMarginRight);
	    $(window).load(function() {
	      clearTimeout(intervalId);
	      calculateMarginRight();
	    });
	  };
	}
	else {
	  scale = function(jQ, x, y) {
	    jQ.css('fontSize', y + 'em');
	  };
	}

	var Style = P(MathCommand, function(_, super_) {
	  _.init = function(ctrlSeq, tagName, attrs) {
	    super_.init.call(this, ctrlSeq, '<'+tagName+' '+attrs+'>&0</'+tagName+'>');
	  };
	});

	//fonts
	LatexCmds.mathrm = bind(Style, '\\mathrm', 'span', 'class="mq-roman mq-font"');
	LatexCmds.mathit = bind(Style, '\\mathit', 'i', 'class="mq-font"');
	LatexCmds.mathbf = bind(Style, '\\mathbf', 'b', 'class="mq-font"');
	LatexCmds.mathsf = bind(Style, '\\mathsf', 'span', 'class="mq-sans-serif mq-font"');
	LatexCmds.mathtt = bind(Style, '\\mathtt', 'span', 'class="mq-monospace mq-font"');
	//text-decoration
	LatexCmds.underline = bind(Style, '\\underline', 'span', 'class="mq-non-leaf mq-underline"');
	LatexCmds.overline = LatexCmds.bar = bind(Style, '\\overline', 'span', 'class="mq-non-leaf mq-overline"');
	LatexCmds.overrightarrow = bind(Style, '\\overrightarrow', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-right"');
	LatexCmds.overleftarrow = bind(Style, '\\overleftarrow', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-left"');

	// `\textcolor{color}{math}` will apply a color to the given math content, where
	// `color` is any valid CSS Color Value (see [SitePoint docs][] (recommended),
	// [Mozilla docs][], or [W3C spec][]).
	//
	// [SitePoint docs]: http://reference.sitepoint.com/css/colorvalues
	// [Mozilla docs]: https://developer.mozilla.org/en-US/docs/CSS/color_value#Values
	// [W3C spec]: http://dev.w3.org/csswg/css3-color/#colorunits
	var TextColor = LatexCmds.textcolor = P(MathCommand, function(_, super_) {
	  _.setColor = function(color) {
	    this.color = color;
	    this.htmlTemplate =
	      '<span class="mq-textcolor" style="color:' + color + '">&0</span>';
	  };
	  _.latex = function() {
	    return '\\textcolor{' + this.color + '}{' + this.blocks[0].latex() + '}';
	  };
	  _.parser = function() {
	    var self = this;
	    var optWhitespace = Parser.optWhitespace;
	    var string = Parser.string;
	    var regex = Parser.regex;

	    return optWhitespace
	      .then(string('{'))
	      .then(regex(/^[#\w\s.,()%-]*/))
	      .skip(string('}'))
	      .then(function(color) {
	        self.setColor(color);
	        return super_.parser.call(self);
	      })
	    ;
	  };
	});

	// Very similar to the \textcolor command, but will add the given CSS class.
	// Usage: \class{classname}{math}
	// Note regex that whitelists valid CSS classname characters:
	// https://github.com/mathquill/mathquill/pull/191#discussion_r4327442
	var Class = LatexCmds['class'] = P(MathCommand, function(_, super_) {
	  _.parser = function() {
	    var self = this, string = Parser.string, regex = Parser.regex;
	    return Parser.optWhitespace
	      .then(string('{'))
	      .then(regex(/^[-\w\s\\\xA0-\xFF]*/))
	      .skip(string('}'))
	      .then(function(cls) {
	        self.htmlTemplate = '<span class="mq-class '+cls+'">&0</span>';
	        return super_.parser.call(self);
	      })
	    ;
	  };
	});

	var SupSub = P(MathCommand, function(_, super_) {
	  _.ctrlSeq = '_{...}^{...}';
	  _.createLeftOf = function(cursor) {
	    if (!cursor[L] && cursor.options.supSubsRequireOperand) return;
	    return super_.createLeftOf.apply(this, arguments);
	  };
	  _.contactWeld = function(cursor) {
	    // Look on either side for a SupSub, if one is found compare my
	    // .sub, .sup with its .sub, .sup. If I have one that it doesn't,
	    // then call .addBlock() on it with my block; if I have one that
	    // it also has, then insert my block's children into its block,
	    // unless my block has none, in which case insert the cursor into
	    // its block (and not mine, I'm about to remove myself) in the case
	    // I was just typed.
	    // TODO: simplify

	    // equiv. to [L, R].forEach(function(dir) { ... });
	    for (var dir = L; dir; dir = (dir === L ? R : false)) {
	      if (this[dir] instanceof SupSub) {
	        // equiv. to 'sub sup'.split(' ').forEach(function(supsub) { ... });
	        for (var supsub = 'sub'; supsub; supsub = (supsub === 'sub' ? 'sup' : false)) {
	          var src = this[supsub], dest = this[dir][supsub];
	          if (!src) continue;
	          if (!dest) this[dir].addBlock(src.disown());
	          else if (!src.isEmpty()) { // ins src children at -dir end of dest
	            src.jQ.children().insAtDirEnd(-dir, dest.jQ);
	            var children = src.children().disown();
	            var pt = Point(dest, children.ends[R], dest.ends[L]);
	            if (dir === L) children.adopt(dest, dest.ends[R], 0);
	            else children.adopt(dest, 0, dest.ends[L]);
	          }
	          else var pt = Point(dest, 0, dest.ends[L]);
	          this.placeCursor = (function(dest, src) { // TODO: don't monkey-patch
	            return function(cursor) { cursor.insAtDirEnd(-dir, dest || src); };
	          }(dest, src));
	        }
	        this.remove();
	        if (cursor && cursor[L] === this) {
	          if (dir === R && pt) {
	            pt[L] ? cursor.insRightOf(pt[L]) : cursor.insAtLeftEnd(pt.parent);
	          }
	          else cursor.insRightOf(this[dir]);
	        }
	        break;
	      }
	    }
	  };
	  Options.p.charsThatBreakOutOfSupSub = '';
	  _.finalizeTree = function() {
	    this.ends[L].write = function(cursor, ch) {
	      if (cursor.options.autoSubscriptNumerals && this === this.parent.sub) {
	        if (ch === '_') return;
	        var cmd = this.chToCmd(ch);
	        if (cmd instanceof Symbol) cursor.deleteSelection();
	        else cursor.clearSelection().insRightOf(this.parent);
	        return cmd.createLeftOf(cursor.show());
	      }
	      if (cursor[L] && !cursor[R] && !cursor.selection
	          && cursor.options.charsThatBreakOutOfSupSub.indexOf(ch) > -1) {
	        cursor.insRightOf(this.parent);
	      }
	      MathBlock.p.write.apply(this, arguments);
	    };
	  };
	  _.moveTowards = function(dir, cursor, updown) {
	    if (cursor.options.autoSubscriptNumerals && !this.sup) {
	      cursor.insDirOf(dir, this);
	    }
	    else super_.moveTowards.apply(this, arguments);
	  };
	  _.deleteTowards = function(dir, cursor) {
	    if (cursor.options.autoSubscriptNumerals && this.sub) {
	      var cmd = this.sub.ends[-dir];
	      if (cmd instanceof Symbol) cmd.remove();
	      else if (cmd) cmd.deleteTowards(dir, cursor.insAtDirEnd(-dir, this.sub));

	      // TODO: factor out a .removeBlock() or something
	      if (this.sub.isEmpty()) {
	        this.sub.deleteOutOf(L, cursor.insAtLeftEnd(this.sub));
	        if (this.sup) cursor.insDirOf(-dir, this);
	        // Note `-dir` because in e.g. x_1^2| want backspacing (leftward)
	        // to delete the 1 but to end up rightward of x^2; with non-negated
	        // `dir` (try it), the cursor appears to have gone "through" the ^2.
	      }
	    }
	    else super_.deleteTowards.apply(this, arguments);
	  };
	  _.latex = function() {
	    function latex(prefix, block) {
	      var l = block && block.latex();
	      return block ? prefix + (l.length === 1 ? l : '{' + (l || ' ') + '}') : '';
	    }
	    return latex('_', this.sub) + latex('^', this.sup);
	  };
	  _.addBlock = function(block) {
	    if (this.supsub === 'sub') {
	      this.sup = this.upInto = this.sub.upOutOf = block;
	      block.adopt(this, this.sub, 0).downOutOf = this.sub;
	      block.jQ = $('<span class="mq-sup"/>').append(block.jQ.children())
	        .attr(mqBlockId, block.id).prependTo(this.jQ);
	    }
	    else {
	      this.sub = this.downInto = this.sup.downOutOf = block;
	      block.adopt(this, 0, this.sup).upOutOf = this.sup;
	      block.jQ = $('<span class="mq-sub"></span>').append(block.jQ.children())
	        .attr(mqBlockId, block.id).appendTo(this.jQ.removeClass('mq-sup-only'));
	      this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>');
	    }
	    // like 'sub sup'.split(' ').forEach(function(supsub) { ... });
	    for (var i = 0; i < 2; i += 1) (function(cmd, supsub, oppositeSupsub, updown) {
	      cmd[supsub].deleteOutOf = function(dir, cursor) {
	        cursor.insDirOf((this[dir] ? -dir : dir), this.parent);
	        if (!this.isEmpty()) {
	          var end = this.ends[dir];
	          this.children().disown()
	            .withDirAdopt(dir, cursor.parent, cursor[dir], cursor[-dir])
	            .jQ.insDirOf(-dir, cursor.jQ);
	          cursor[-dir] = end;
	        }
	        cmd.supsub = oppositeSupsub;
	        delete cmd[supsub];
	        delete cmd[updown+'Into'];
	        cmd[oppositeSupsub][updown+'OutOf'] = insLeftOfMeUnlessAtEnd;
	        delete cmd[oppositeSupsub].deleteOutOf;
	        if (supsub === 'sub') $(cmd.jQ.addClass('mq-sup-only')[0].lastChild).remove();
	        this.remove();
	      };
	    }(this, 'sub sup'.split(' ')[i], 'sup sub'.split(' ')[i], 'down up'.split(' ')[i]));
	  };
	});

	function insLeftOfMeUnlessAtEnd(cursor) {
	  // cursor.insLeftOf(cmd), unless cursor at the end of block, and every
	  // ancestor cmd is at the end of every ancestor block
	  var cmd = this.parent, ancestorCmd = cursor;
	  do {
	    if (ancestorCmd[R]) return cursor.insLeftOf(cmd);
	    ancestorCmd = ancestorCmd.parent.parent;
	  } while (ancestorCmd !== cmd);
	  cursor.insRightOf(cmd);
	}

	LatexCmds.subscript =
	LatexCmds._ = P(SupSub, function(_, super_) {
	  _.supsub = 'sub';
	  _.htmlTemplate =
	      '<span class="mq-supsub mq-non-leaf">'
	    +   '<span class="mq-sub">&0</span>'
	    +   '<span style="display:inline-block;width:0">&#8203;</span>'
	    + '</span>'
	  ;
	  _.textTemplate = [ '_' ];
	  _.finalizeTree = function() {
	    this.downInto = this.sub = this.ends[L];
	    this.sub.upOutOf = insLeftOfMeUnlessAtEnd;
	    super_.finalizeTree.call(this);
	  };
	});

	LatexCmds.superscript =
	LatexCmds.supscript =
	LatexCmds['^'] = P(SupSub, function(_, super_) {
	  _.supsub = 'sup';
	  _.htmlTemplate =
	      '<span class="mq-supsub mq-non-leaf mq-sup-only">'
	    +   '<span class="mq-sup">&0</span>'
	    + '</span>'
	  ;
	  _.textTemplate = [ '^' ];
	  _.finalizeTree = function() {
	    this.upInto = this.sup = this.ends[R];
	    this.sup.downOutOf = insLeftOfMeUnlessAtEnd;
	    super_.finalizeTree.call(this);
	  };
	});

	var SummationNotation = P(MathCommand, function(_, super_) {
	  _.init = function(ch, html) {
	    var htmlTemplate =
	      '<span class="mq-large-operator mq-non-leaf">'
	    +   '<span class="mq-to"><span>&1</span></span>'
	    +   '<big>'+html+'</big>'
	    +   '<span class="mq-from"><span>&0</span></span>'
	    + '</span>'
	    ;
	    Symbol.prototype.init.call(this, ch, htmlTemplate);
	  };
	  _.createLeftOf = function(cursor) {
	    super_.createLeftOf.apply(this, arguments);
	    if (cursor.options.sumStartsWithNEquals) {
	      Letter('n').createLeftOf(cursor);
	      Equality().createLeftOf(cursor);
	    }
	  };
	  _.latex = function() {
	    function simplify(latex) {
	      return latex.length === 1 ? latex : '{' + (latex || ' ') + '}';
	    }
	    return this.ctrlSeq + '_' + simplify(this.ends[L].latex()) +
	      '^' + simplify(this.ends[R].latex());
	  };
	  _.parser = function() {
	    var string = Parser.string;
	    var optWhitespace = Parser.optWhitespace;
	    var succeed = Parser.succeed;
	    var block = latexMathParser.block;

	    var self = this;
	    var blocks = self.blocks = [ MathBlock(), MathBlock() ];
	    for (var i = 0; i < blocks.length; i += 1) {
	      blocks[i].adopt(self, self.ends[R], 0);
	    }

	    return optWhitespace.then(string('_').or(string('^'))).then(function(supOrSub) {
	      var child = blocks[supOrSub === '_' ? 0 : 1];
	      return block.then(function(block) {
	        block.children().adopt(child, child.ends[R], 0);
	        return succeed(self);
	      });
	    }).many().result(self);
	  };
	  _.finalizeTree = function() {
	    this.downInto = this.ends[L];
	    this.upInto = this.ends[R];
	    this.ends[L].upOutOf = this.ends[R];
	    this.ends[R].downOutOf = this.ends[L];
	  };
	});

	LatexCmds['\u2211'] =
	LatexCmds.sum =
	LatexCmds.summation = bind(SummationNotation,'\\sum ','&sum;');

	LatexCmds['\u220f'] =
	LatexCmds.prod =
	LatexCmds.product = bind(SummationNotation,'\\prod ','&prod;');

	LatexCmds.coprod =
	LatexCmds.coproduct = bind(SummationNotation,'\\coprod ','&#8720;');

	LatexCmds['\u222b'] =
	LatexCmds['int'] =
	LatexCmds.integral = P(SummationNotation, function(_, super_) {
	  _.init = function() {
	    var htmlTemplate =
	      '<span class="mq-int mq-non-leaf">'
	    +   '<big>&int;</big>'
	    +   '<span class="mq-supsub mq-non-leaf">'
	    +     '<span class="mq-sup"><span class="mq-sup-inner">&1</span></span>'
	    +     '<span class="mq-sub">&0</span>'
	    +     '<span style="display:inline-block;width:0">&#8203</span>'
	    +   '</span>'
	    + '</span>'
	    ;
	    Symbol.prototype.init.call(this, '\\int ', htmlTemplate);
	  };
	  // FIXME: refactor rather than overriding
	  _.createLeftOf = MathCommand.p.createLeftOf;
	});

	var Fraction =
	LatexCmds.frac =
	LatexCmds.dfrac =
	LatexCmds.cfrac =
	LatexCmds.fraction = P(MathCommand, function(_, super_) {
	  _.ctrlSeq = '\\frac';
	  _.htmlTemplate =
	      '<span class="mq-fraction mq-non-leaf">'
	    +   '<span class="mq-numerator">&0</span>'
	    +   '<span class="mq-denominator">&1</span>'
	    +   '<span style="display:inline-block;width:0">&#8203;</span>'
	    + '</span>'
	  ;
	  _.textTemplate = ['(', ')/(', ')'];
	  _.finalizeTree = function() {
	    this.upInto = this.ends[R].upOutOf = this.ends[L];
	    this.downInto = this.ends[L].downOutOf = this.ends[R];
	  };
	});

	var LiveFraction =
	LatexCmds.over =
	CharCmds['/'] = P(Fraction, function(_, super_) {
	  _.createLeftOf = function(cursor) {
	    if (!this.replacedFragment) {
	      var leftward = cursor[L];
	      while (leftward &&
	        !(
	          leftward instanceof BinaryOperator ||
	          leftward instanceof (LatexCmds.text || noop) ||
	          leftward instanceof SummationNotation ||
	          leftward.ctrlSeq === '\\ ' ||
	          /^[,;:]$/.test(leftward.ctrlSeq)
	        ) //lookbehind for operator
	      ) leftward = leftward[L];

	      if (leftward instanceof SummationNotation && leftward[R] instanceof SupSub) {
	        leftward = leftward[R];
	        if (leftward[R] instanceof SupSub && leftward[R].ctrlSeq != leftward.ctrlSeq)
	          leftward = leftward[R];
	      }

	      if (leftward !== cursor[L]) {
	        this.replaces(Fragment(leftward[R] || cursor.parent.ends[L], cursor[L]));
	        cursor[L] = leftward;
	      }
	    }
	    super_.createLeftOf.call(this, cursor);
	  };
	});

	var SquareRoot =
	LatexCmds.sqrt =
	LatexCmds['\u221a'] = P(MathCommand, function(_, super_) {
	  _.ctrlSeq = '\\sqrt';
	  _.htmlTemplate =
	      '<span class="mq-non-leaf">'
	    +   '<span class="mq-scaled mq-sqrt-prefix">&radic;</span>'
	    +   '<span class="mq-non-leaf mq-sqrt-stem">&0</span>'
	    + '</span>'
	  ;
	  _.textTemplate = ['sqrt(', ')'];
	  _.parser = function() {
	    return latexMathParser.optBlock.then(function(optBlock) {
	      return latexMathParser.block.map(function(block) {
	        var nthroot = NthRoot();
	        nthroot.blocks = [ optBlock, block ];
	        optBlock.adopt(nthroot, 0, 0);
	        block.adopt(nthroot, optBlock, 0);
	        return nthroot;
	      });
	    }).or(super_.parser.call(this));
	  };
	  _.reflow = function() {
	    var block = this.ends[R].jQ;
	    scale(block.prev(), 1, block.innerHeight()/+block.css('fontSize').slice(0,-2) - .1);
	  };
	});

	var Vec = LatexCmds.vec = P(MathCommand, function(_, super_) {
	  _.ctrlSeq = '\\vec';
	  _.htmlTemplate =
	      '<span class="mq-non-leaf">'
	    +   '<span class="mq-vector-prefix">&rarr;</span>'
	    +   '<span class="mq-vector-stem">&0</span>'
	    + '</span>'
	  ;
	  _.textTemplate = ['vec(', ')'];
	});

	var NthRoot =
	LatexCmds.nthroot = P(SquareRoot, function(_, super_) {
	  _.htmlTemplate =
	      '<sup class="mq-nthroot mq-non-leaf">&0</sup>'
	    + '<span class="mq-scaled">'
	    +   '<span class="mq-sqrt-prefix mq-scaled">&radic;</span>'
	    +   '<span class="mq-sqrt-stem mq-non-leaf">&1</span>'
	    + '</span>'
	  ;
	  _.textTemplate = ['sqrt[', '](', ')'];
	  _.latex = function() {
	    return '\\sqrt['+this.ends[L].latex()+']{'+this.ends[R].latex()+'}';
	  };
	});

	function DelimsMixin(_, super_) {
	  _.jQadd = function() {
	    super_.jQadd.apply(this, arguments);
	    this.delimjQs = this.jQ.children(':first').add(this.jQ.children(':last'));
	    this.contentjQ = this.jQ.children(':eq(1)');
	  };
	  _.reflow = function() {
	    var height = this.contentjQ.outerHeight()
	                 / parseFloat(this.contentjQ.css('fontSize'));
	    scale(this.delimjQs, min(1 + .2*(height - 1), 1.2), 1.2*height);
	  };
	}

	// Round/Square/Curly/Angle Brackets (aka Parens/Brackets/Braces)
	//   first typed as one-sided bracket with matching "ghost" bracket at
	//   far end of current block, until you type an opposing one
	var Bracket = P(P(MathCommand, DelimsMixin), function(_, super_) {
	  _.init = function(side, open, close, ctrlSeq, end) {
	    super_.init.call(this, '\\left'+ctrlSeq, undefined, [open, close]);
	    this.side = side;
	    this.sides = {};
	    this.sides[L] = { ch: open, ctrlSeq: ctrlSeq };
	    this.sides[R] = { ch: close, ctrlSeq: end };
	  };
	  _.numBlocks = function() { return 1; };
	  _.html = function() { // wait until now so that .side may
	    this.htmlTemplate = // be set by createLeftOf or parser
	        '<span class="mq-non-leaf">'
	      +   '<span class="mq-scaled mq-paren'+(this.side === R ? ' mq-ghost' : '')+'">'
	      +     this.sides[L].ch
	      +   '</span>'
	      +   '<span class="mq-non-leaf">&0</span>'
	      +   '<span class="mq-scaled mq-paren'+(this.side === L ? ' mq-ghost' : '')+'">'
	      +     this.sides[R].ch
	      +   '</span>'
	      + '</span>'
	    ;
	    return super_.html.call(this);
	  };
	  _.latex = function() {
	    return '\\left'+this.sides[L].ctrlSeq+this.ends[L].latex()+'\\right'+this.sides[R].ctrlSeq;
	  };
	  _.oppBrack = function(opts, node, expectedSide) {
	    // return node iff it's a 1-sided bracket of expected side (if any, may be
	    // undefined), and of opposite side from me if I'm not a pipe
	    return node instanceof Bracket && node.side && node.side !== -expectedSide
	      && (this.sides[this.side].ch === '|' || node.side === -this.side)
	      && (!opts.restrictMismatchedBrackets
	        || OPP_BRACKS[this.sides[this.side].ch] === node.sides[node.side].ch
	        || { '(': ']', '[': ')' }[this.sides[L].ch] === node.sides[R].ch) && node;
	  };
	  _.closeOpposing = function(brack) {
	    brack.side = 0;
	    brack.sides[this.side] = this.sides[this.side]; // copy over my info (may be
	    brack.delimjQs.eq(this.side === L ? 0 : 1) // mismatched, like [a, b))
	      .removeClass('mq-ghost').html(this.sides[this.side].ch);
	  };
	  _.createLeftOf = function(cursor) {
	    if (!this.replacedFragment) { // unless wrapping seln in brackets,
	        // check if next to or inside an opposing one-sided bracket
	        // (must check both sides 'cos I might be a pipe)
	      var opts = cursor.options;
	      var brack = this.oppBrack(opts, cursor[L], L)
	                  || this.oppBrack(opts, cursor[R], R)
	                  || this.oppBrack(opts, cursor.parent.parent);
	    }
	    if (brack) {
	      var side = this.side = -brack.side; // may be pipe with .side not yet set
	      this.closeOpposing(brack);
	      if (brack === cursor.parent.parent && cursor[side]) { // move the stuff between
	        Fragment(cursor[side], cursor.parent.ends[side], -side) // me and ghost outside
	          .disown().withDirAdopt(-side, brack.parent, brack, brack[side])
	          .jQ.insDirOf(side, brack.jQ);
	        brack.bubble('reflow');
	      }
	    }
	    else {
	      brack = this, side = brack.side;
	      if (brack.replacedFragment) brack.side = 0; // wrapping seln, don't be one-sided
	      else if (cursor[-side]) { // elsewise, auto-expand so ghost is at far end
	        brack.replaces(Fragment(cursor[-side], cursor.parent.ends[-side], side));
	        cursor[-side] = 0;
	      }
	      super_.createLeftOf.call(brack, cursor);
	    }
	    if (side === L) cursor.insAtLeftEnd(brack.ends[L]);
	    else cursor.insRightOf(brack);
	  };
	  _.placeCursor = noop;
	  _.unwrap = function() {
	    this.ends[L].children().disown().adopt(this.parent, this, this[R])
	      .jQ.insertAfter(this.jQ);
	    this.remove();
	  };
	  _.deleteSide = function(side, outward, cursor) {
	    var parent = this.parent, sib = this[side], farEnd = parent.ends[side];

	    if (side === this.side) { // deleting non-ghost of one-sided bracket, unwrap
	      this.unwrap();
	      sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
	      return;
	    }

	    var opts = cursor.options, wasSolid = !this.side;
	    this.side = -side;
	    // if deleting like, outer close-brace of [(1+2)+3} where inner open-paren
	    if (this.oppBrack(opts, this.ends[L].ends[this.side], side)) { // is ghost,
	      this.closeOpposing(this.ends[L].ends[this.side]); // then become [1+2)+3
	      var origEnd = this.ends[L].ends[side];
	      this.unwrap();
	      if (origEnd.siblingCreated) origEnd.siblingCreated(cursor.options, side);
	      sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
	    }
	    else { // if deleting like, inner close-brace of ([1+2}+3) where outer
	      if (this.oppBrack(opts, this.parent.parent, side)) { // open-paren is
	        this.parent.parent.closeOpposing(this); // ghost, then become [1+2+3)
	        this.parent.parent.unwrap();
	      } // else if deleting outward from a solid pair, unwrap
	      else if (outward && wasSolid) {
	        this.unwrap();
	        sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
	        return;
	      }
	      else { // else deleting just one of a pair of brackets, become one-sided
	        this.sides[side] = { ch: OPP_BRACKS[this.sides[this.side].ch],
	                             ctrlSeq: OPP_BRACKS[this.sides[this.side].ctrlSeq] };
	        this.delimjQs.removeClass('mq-ghost')
	          .eq(side === L ? 0 : 1).addClass('mq-ghost').html(this.sides[side].ch);
	      }
	      if (sib) { // auto-expand so ghost is at far end
	        var origEnd = this.ends[L].ends[side];
	        Fragment(sib, farEnd, -side).disown()
	          .withDirAdopt(-side, this.ends[L], origEnd, 0)
	          .jQ.insAtDirEnd(side, this.ends[L].jQ.removeClass('mq-empty'));
	        if (origEnd.siblingCreated) origEnd.siblingCreated(cursor.options, side);
	        cursor.insDirOf(-side, sib);
	      } // didn't auto-expand, cursor goes just outside or just inside parens
	      else (outward ? cursor.insDirOf(side, this)
	                    : cursor.insAtDirEnd(side, this.ends[L]));
	    }
	  };
	  _.deleteTowards = function(dir, cursor) {
	    this.deleteSide(-dir, false, cursor);
	  };
	  _.finalizeTree = function() {
	    this.ends[L].deleteOutOf = function(dir, cursor) {
	      this.parent.deleteSide(dir, true, cursor);
	    };
	    // FIXME HACK: after initial creation/insertion, finalizeTree would only be
	    // called if the paren is selected and replaced, e.g. by LiveFraction
	    this.finalizeTree = this.intentionalBlur = function() {
	      this.delimjQs.eq(this.side === L ? 1 : 0).removeClass('mq-ghost');
	      this.side = 0;
	    };
	  };
	  _.siblingCreated = function(opts, dir) { // if something typed between ghost and far
	    if (dir === -this.side) this.finalizeTree(); // end of its block, solidify
	  };
	});

	var OPP_BRACKS = {
	  '(': ')',
	  ')': '(',
	  '[': ']',
	  ']': '[',
	  '{': '}',
	  '}': '{',
	  '\\{': '\\}',
	  '\\}': '\\{',
	  '&lang;': '&rang;',
	  '&rang;': '&lang;',
	  '\\langle ': '\\rangle ',
	  '\\rangle ': '\\langle ',
	  '|': '|'
	};

	function bindCharBracketPair(open, ctrlSeq) {
	  var ctrlSeq = ctrlSeq || open, close = OPP_BRACKS[open], end = OPP_BRACKS[ctrlSeq];
	  CharCmds[open] = bind(Bracket, L, open, close, ctrlSeq, end);
	  CharCmds[close] = bind(Bracket, R, open, close, ctrlSeq, end);
	}
	bindCharBracketPair('(');
	bindCharBracketPair('[');
	bindCharBracketPair('{', '\\{');
	LatexCmds.langle = bind(Bracket, L, '&lang;', '&rang;', '\\langle ', '\\rangle ');
	LatexCmds.rangle = bind(Bracket, R, '&lang;', '&rang;', '\\langle ', '\\rangle ');
	CharCmds['|'] = bind(Bracket, L, '|', '|', '|', '|');

	LatexCmds.left = P(MathCommand, function(_) {
	  _.parser = function() {
	    var regex = Parser.regex;
	    var string = Parser.string;
	    var succeed = Parser.succeed;
	    var optWhitespace = Parser.optWhitespace;

	    return optWhitespace.then(regex(/^(?:[([|]|\\\{)/))
	      .then(function(ctrlSeq) { // TODO: \langle, \rangle
	        var open = (ctrlSeq.charAt(0) === '\\' ? ctrlSeq.slice(1) : ctrlSeq);
	        return latexMathParser.then(function (block) {
	          return string('\\right').skip(optWhitespace)
	            .then(regex(/^(?:[\])|]|\\\})/)).map(function(end) {
	              var close = (end.charAt(0) === '\\' ? end.slice(1) : end);
	              var cmd = Bracket(0, open, close, ctrlSeq, end);
	              cmd.blocks = [ block ];
	              block.adopt(cmd, 0, 0);
	              return cmd;
	            })
	          ;
	        });
	      })
	    ;
	  };
	});

	LatexCmds.right = P(MathCommand, function(_) {
	  _.parser = function() {
	    return Parser.fail('unmatched \\right');
	  };
	});

	var Binomial =
	LatexCmds.binom =
	LatexCmds.binomial = P(P(MathCommand, DelimsMixin), function(_, super_) {
	  _.ctrlSeq = '\\binom';
	  _.htmlTemplate =
	      '<span class="mq-non-leaf">'
	    +   '<span class="mq-paren mq-scaled">(</span>'
	    +   '<span class="mq-non-leaf">'
	    +     '<span class="mq-array mq-non-leaf">'
	    +       '<span>&0</span>'
	    +       '<span>&1</span>'
	    +     '</span>'
	    +   '</span>'
	    +   '<span class="mq-paren mq-scaled">)</span>'
	    + '</span>'
	  ;
	  _.textTemplate = ['choose(',',',')'];
	});

	var Choose =
	LatexCmds.choose = P(Binomial, function(_) {
	  _.createLeftOf = LiveFraction.prototype.createLeftOf;
	});

	LatexCmds.editable = // backcompat with before cfd3620 on #233
	LatexCmds.MathQuillMathField = P(MathCommand, function(_, super_) {
	  _.ctrlSeq = '\\MathQuillMathField';
	  _.htmlTemplate =
	      '<span class="mq-editable-field">'
	    +   '<span class="mq-root-block">&0</span>'
	    + '</span>'
	  ;
	  _.parser = function() {
	    var self = this,
	      string = Parser.string, regex = Parser.regex, succeed = Parser.succeed;
	    return string('[').then(regex(/^[a-z][a-z0-9]*/i)).skip(string(']'))
	      .map(function(name) { self.name = name; }).or(succeed())
	      .then(super_.parser.call(self));
	  };
	  _.finalizeTree = function() {
	    var ctrlr = Controller(this.ends[L], this.jQ, Options());
	    ctrlr.KIND_OF_MQ = 'MathField';
	    ctrlr.editable = true;
	    ctrlr.createTextarea();
	    ctrlr.editablesTextareaEvents();
	    ctrlr.cursor.insAtRightEnd(ctrlr.root);
	    RootBlockMixin(ctrlr.root);
	  };
	  _.registerInnerField = function(innerFields, MathField) {
	    innerFields.push(innerFields[this.name] = MathField(this.ends[L].controller));
	  };
	  _.latex = function(){ return this.ends[L].latex(); };
	  _.text = function(){ return this.ends[L].text(); };
	});

	// Embed arbitrary things
	// Probably the closest DOM analogue would be an iframe?
	// From MathQuill's perspective, it's a Symbol, it can be
	// anywhere and the cursor can go around it but never in it.
	// Create by calling public API method .dropEmbedded(),
	// or by calling the global public API method .registerEmbed()
	// and rendering LaTeX like \embed{registeredName} (see test).
	var Embed = LatexCmds.embed = P(Symbol, function(_, super_) {
	  _.setOptions = function(options) {
	    function noop () { return ""; }
	    this.text = options.text || noop;
	    this.htmlTemplate = options.htmlString || "";
	    this.latex = options.latex || noop;
	    return this;
	  };
	  _.parser = function() {
	    var self = this;
	      string = Parser.string, regex = Parser.regex, succeed = Parser.succeed;
	    return string('{').then(regex(/^[a-z][a-z0-9]*/i)).skip(string('}'))
	      .then(function(name) {
	        // the chars allowed in the optional data block are arbitrary other than
	        // excluding curly braces and square brackets (which'd be too confusing)
	        return string('[').then(regex(/^[-\w\s]*/)).skip(string(']'))
	          .or(succeed()).map(function(data) {
	            return self.setOptions(EMBEDS[name](data));
	          })
	        ;
	      })
	    ;
	  };
	});
	/****************************************
	 * Input box to type backslash commands
	 ***************************************/

	var LatexCommandInput =
	CharCmds['\\'] = P(MathCommand, function(_, super_) {
	  _.ctrlSeq = '\\';
	  _.replaces = function(replacedFragment) {
	    this._replacedFragment = replacedFragment.disown();
	    this.isEmpty = function() { return false; };
	  };
	  _.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>';
	  _.textTemplate = ['\\'];
	  _.createBlocks = function() {
	    super_.createBlocks.call(this);
	    this.ends[L].focus = function() {
	      this.parent.jQ.addClass('mq-hasCursor');
	      if (this.isEmpty())
	        this.parent.jQ.removeClass('mq-empty');

	      return this;
	    };
	    this.ends[L].blur = function() {
	      this.parent.jQ.removeClass('mq-hasCursor');
	      if (this.isEmpty())
	        this.parent.jQ.addClass('mq-empty');

	      return this;
	    };
	    this.ends[L].write = function(cursor, ch) {
	      cursor.show().deleteSelection();

	      if (ch.match(/[a-z]/i)) VanillaSymbol(ch).createLeftOf(cursor);
	      else {
	        this.parent.renderCommand(cursor);
	        if (ch !== '\\' || !this.isEmpty()) this.parent.parent.write(cursor, ch);
	      }
	    };
	    this.ends[L].keystroke = function(key, e, ctrlr) {
	      if (key === 'Tab' || key === 'Enter' || key === 'Spacebar') {
	        this.parent.renderCommand(ctrlr.cursor);
	        e.preventDefault();
	        return;
	      }
	      return super_.keystroke.apply(this, arguments);
	    };
	  };
	  _.createLeftOf = function(cursor) {
	    super_.createLeftOf.call(this, cursor);

	    if (this._replacedFragment) {
	      var el = this.jQ[0];
	      this.jQ =
	        this._replacedFragment.jQ.addClass('mq-blur').bind(
	          'mousedown mousemove', //FIXME: is monkey-patching the mousedown and mousemove handlers the right way to do this?
	          function(e) {
	            $(e.target = el).trigger(e);
	            return false;
	          }
	        ).insertBefore(this.jQ).add(this.jQ);
	    }
	  };
	  _.latex = function() {
	    return '\\' + this.ends[L].latex() + ' ';
	  };
	  _.renderCommand = function(cursor) {
	    this.jQ = this.jQ.last();
	    this.remove();
	    if (this[R]) {
	      cursor.insLeftOf(this[R]);
	    } else {
	      cursor.insAtRightEnd(this.parent);
	    }

	    var latex = this.ends[L].latex();
	    if (!latex) latex = ' ';
	    var cmd = LatexCmds[latex];
	    if (cmd) {
	      cmd = cmd(latex);
	      if (this._replacedFragment) cmd.replaces(this._replacedFragment);
	      cmd.createLeftOf(cursor);
	    }
	    else {
	      cmd = TextBlock();
	      cmd.replaces(latex);
	      cmd.createLeftOf(cursor);
	      cursor.insRightOf(cmd);
	      if (this._replacedFragment)
	        this._replacedFragment.remove();
	    }
	  };
	});

	var MQ1 = getInterface(1);
	for (var key in MQ1) (function(key, val) {
	  if (typeof val === 'function') {
	    MathQuill[key] = function() {
	      insistOnInterVer();
	      return val.apply(this, arguments);
	    };
	    MathQuill[key].prototype = val.prototype;
	  }
	  else MathQuill[key] = val;
	}(key, MQ1[key]));

	}());


	/*** EXPORTS FROM exports-loader ***/
	module.exports = MathQuill;
	}.call(window));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.12.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:17Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var deletedIds = [];

	var document = window.document;

	var slice = deletedIds.slice;

	var concat = deletedIds.concat;

	var push = deletedIds.push;

	var indexOf = deletedIds.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "1.12.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray || function( obj ) {
			return jQuery.type( obj ) === "array";
		},

		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		isPlainObject: function( obj ) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			try {

				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
					return false;
				}
			} catch ( e ) {

				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( !support.ownFirst ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {

				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
				} )( data );
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1, IE<9
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			var len;

			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

				for ( ; i < len; i++ ) {

					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}

			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[ j ] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: function() {
			return +( new Date() );
		},

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt( 0 ) === "<" &&
					selector.charAt( selector.length - 1 ) === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {

							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[ 2 ] ) {
								return rootjQuery.find( selector );
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof root.ready !== "undefined" ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;

			return this.filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[ 0 ], jQuery( elem ) );
			}

			// Locate the position of the desired element
			return jQuery.inArray(

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem, this );
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );

		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.uniqueSort( ret );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}

			return this.pushStack( ret );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = true;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );

						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed );
			window.removeEventListener( "load", completed );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener ||
			window.event.type === "load" ||
			document.readyState === "complete" ) {

			detach();
			jQuery.ready();
		}
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE6-10
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );

			// If IE event model is used
			} else {

				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );

				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch ( e ) {}

				if ( top && top.doScroll ) {
					( function doScrollCheck() {
						if ( !jQuery.isReady ) {

							try {

								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll( "left" );
							} catch ( e ) {
								return window.setTimeout( doScrollCheck, 50 );
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					} )();
				}
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownFirst = i === "0";

	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;

	// Execute ASAP in case we need to set body.style.zoom
	jQuery( function() {

		// Minified: var a,b,c,d
		var val, div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Return for frameset docs that don't have a body
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		if ( typeof div.style.zoom !== "undefined" ) {

			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if ( val ) {

				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );
	} );


	( function() {
		var div = document.createElement( "div" );

		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch ( e ) {
			support.deleteExpando = false;
		}

		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	var acceptData = function( elem ) {
		var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
			nodeType = +elem.nodeType || 1;

		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :

			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
	};




	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {

			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );

			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {

			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}

		return true;
	}

	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !acceptData( elem ) ) {
			return;
		}

		var ret, thisCache,
			internalKey = jQuery.expando,

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
			data === undefined && typeof name === "string" ) {
			return;
		}

		if ( !id ) {

			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {

			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData( elem, name, pvt ) {
		if ( !acceptData( elem ) ) {
			return;
		}

		var thisCache, i,
			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				} else {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}

				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[ i ] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}

		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );

		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];

		// When all else fails, undefined
		} else {
			cache[ id ] = undefined;
		}
	}

	jQuery.extend( {
		cache: {},

		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,

			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},

		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},

		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},

		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},

		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );

					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					jQuery.data( this, key );
				} );
			}

			return arguments.length > 1 ?

				// Sets one value
				this.each( function() {
					jQuery.data( this, key, value );
				} ) :

				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},

		removeData: function( key ) {
			return this.each( function() {
				jQuery.removeData( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object,
		// or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );


	( function() {
		var shrinkWrapBlocksVal;

		support.shrinkWrapBlocks = function() {
			if ( shrinkWrapBlocksVal != null ) {
				return shrinkWrapBlocksVal;
			}

			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;

			// Minified: var b,c,d
			var div, body, container;

			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {

				// Test fired too early or in an unsupported environment, exit.
				return;
			}

			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ( typeof div.style.zoom !== "undefined" ) {

				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =

					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild( document.createElement( "div" ) ).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}

			body.removeChild( container );

			return shrinkWrapBlocksVal;
		};

	} )();
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn(
						elems[ i ],
						key,
						raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );

	var rleadingWhitespace = ( /^\s+/ );

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
			"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
			"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();

		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}


	( function() {
		var div = document.createElement( "div" ),
			fragment = document.createDocumentFragment(),
			input = document.createElement( "input" );

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;

		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );

		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input = document.createElement( "input" );
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<9
		// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
		support.noCloneEvent = !!div.addEventListener;

		// Support: IE<9
		// Since attributes and properties are the same in IE,
		// cleanData must set properties to undefined rather than use removeAttribute
		div[ jQuery.expando ] = 1;
		support.attributes = !div.getAttribute( jQuery.expando );
	} )();


	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],

		// Support: IE8
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
	};

	// Support: IE8-IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
					undefined;

		if ( !found ) {
			for ( found = [], elems = context.childNodes || context;
				( elem = elems[ i ] ) != null;
				i++
			) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			jQuery._data(
				elem,
				"globalEval",
				!refElements || jQuery._data( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/,
		rtbody = /<tbody/i;

	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
								!tbody.childNodes.length ) {

								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}

				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	}


	( function() {
		var i, eventName,
			div = document.createElement( "div" );

		// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
		for ( i in { submit: true, change: true, focusin: true } ) {
			eventName = "on" + i;

			if ( !( support[ i ] = eventName in window ) ) {

				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i ] = div.attributes[ eventName ].expando === false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	} )();


	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" &&
						( !e || jQuery.event.triggered !== e.type ) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};

				// Add elem as a property of the handle fn to prevent a memory leak
				// with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );

						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
					jQuery._data( cur, "handle" );

				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if (
					( !special._default ||
					 special._default.apply( eventPath.pop(), data ) === false
					) && acceptData( elem )
				) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {

							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Safari 6-8+
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
				"pageX pageY screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ?
						original.toElement :
						fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {

							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// Guard for simulated events was moved to jQuery.event.stopPropagation function
					// since `originalEvent` should point to the original event for the
					// constancy with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {

			// This "if" is needed for plain objects
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;

			if ( elem.detachEvent ) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event,
				// to properly expose it to GC
				if ( typeof elem[ name ] === "undefined" ) {
					elem[ name ] = null;
				}

				elem.detachEvent( name, handle );
			}
		};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: IE < 9, Android < 4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();

			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( !e || this.isSimulated ) {
				return;
			}

			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	// IE submit delegation
	if ( !support.submit ) {

		jQuery.event.special.submit = {
			setup: function() {

				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

							// Support: IE <=8
							// We use jQuery.prop instead of elem.form
							// to allow fixing the IE8 delegated submit issue (gh-2332)
							// by 3rd party polyfills/workarounds.
							jQuery.prop( elem, "form" ) :
							undefined;

					if ( form && !jQuery._data( form, "submit" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submitBubble = true;
						} );
						jQuery._data( form, "submit", true );
					}
				} );

				// return undefined since we don't need an event listener
			},

			postDispatch: function( event ) {

				// If form was submitted by the user, bubble the event up the tree
				if ( event._submitBubble ) {
					delete event._submitBubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event );
					}
				}
			},

			teardown: function() {

				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if ( !support.change ) {

		jQuery.event.special.change = {

			setup: function() {

				if ( rformElems.test( this.nodeName ) ) {

					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._justChanged = true;
							}
						} );
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._justChanged && !event.isTrigger ) {
								this._justChanged = false;
							}

							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event );
						} );
					}
					return false;
				}

				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;

					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event );
							}
						} );
						jQuery._data( elem, "change", true );
					}
				} );
			},

			handle: function( event ) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger ||
					( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

					return event.handleObj.handler.apply( this, arguments );
				}
			},

			teardown: function() {
				jQuery.event.remove( this, "._change" );

				return !rformElems.test( this.nodeName );
			}
		};
	}

	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		} );
	}

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		},

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}

		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;

		if ( events ) {
			delete curData.handle;
			curData.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}

		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}

	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );

			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );

		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
				dest.innerHTML = src.innerHTML;
			}

		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}

		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;

		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval(
									( node.text || node.textContent || node.innerHTML || "" )
										.replace( rcleanScript, "" )
								);
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			elems = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = elems[ i ] ) != null; i++ ) {

			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );

			if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
				!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

				clone = elem.cloneNode( true );

			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}

			if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
					( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				// Fix all IE cloning issues
				for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[ i ] ) {
						fixCloneNodeIssues( node, destElements[ i ] );
					}
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
						cloneCopyEvent( node, destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems, /* internal */ forceAcceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				attributes = support.attributes,
				special = jQuery.event.special;

			for ( ; ( elem = elems[ i ] ) != null; i++ ) {
				if ( forceAcceptData || acceptData( elem ) ) {

					id = elem[ internalKey ];
					data = id && cache[ id ];

					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {

							delete cache[ id ];

							// Support: IE<9
							// IE does not allow us to delete expando properties from nodes
							// IE creates expando attributes along with the property
							// IE does not have a removeAttribute function on Document nodes
							if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
								elem.removeAttribute( internalKey );

							// Webkit & Blink performance suffers when deleting properties
							// from DOM nodes, so set to undefined instead
							// https://code.google.com/p/chromium/issues/detail?id=378607
							} else {
								elem[ internalKey ] = undefined;
							}

							deletedIds.push( id );
						}
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append(
						( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
					);
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {

				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}

				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {

							// Remove element nodes and prevent memory leaks
							elem = this[ i ] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		div.style.cssText = "float:left;opacity:.5";

		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = div.style.opacity === "0.5";

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!div.style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container = document.createElement( "div" );
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		div.innerHTML = "";
		container.appendChild( div );

		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
			div.style.WebkitBoxSizing === "";

		jQuery.extend( support, {
			reliableHiddenOffsets: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},

			boxSizingReliable: function() {

				// We're checking for pixelPositionVal here instead of boxSizingReliableVal
				// since that compresses better and they're computed together anyway.
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},

			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},

			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},

			reliableMarginRight: function() {

				// Support: Android 2.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			},

			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			}
		} );

		function computeStyleTests() {
			var contents, divStyle,
				documentElement = document.documentElement;

			// Setup
			documentElement.appendChild( container );

			div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";

			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
			pixelMarginRightVal = reliableMarginRightVal = true;

			// Check for getComputedStyle so that this code is not run in IE<9.
			if ( window.getComputedStyle ) {
				divStyle = window.getComputedStyle( div );
				pixelPositionVal = ( divStyle || {} ).top !== "1%";
				reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
				boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

				// Support: Android 2.3 only
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";

				reliableMarginRightVal =
					!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

				div.removeChild( contents );
			}

			// Support: IE6-8
			// First check that getClientRects works as expected
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.style.display = "none";
			reliableHiddenOffsetsVal = div.getClientRects().length === 0;
			if ( reliableHiddenOffsetsVal ) {
				div.style.display = "";
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				div.childNodes[ 0 ].style.borderCollapse = "separate";
				contents = div.getElementsByTagName( "td" );
				contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				if ( reliableHiddenOffsetsVal ) {
					contents[ 0 ].style.display = "";
					contents[ 1 ].style.display = "none";
					reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				}
			}

			// Teardown
			documentElement.removeChild( container );
		}

	} )();


	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;

	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;

			computed = computed || getStyles( elem );

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

			// Support: Opera 12.1x only
			// Fall back to style even without computed
			// computed is undefined for elems on document fragments
			if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			if ( computed ) {

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value"
				// instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values,
				// but width seems to be reliably pixels
				// this is against the CSSOM draft spec:
				// http://dev.w3.org/csswg/cssom/#resolved-values
				if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};

		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;

			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are
			// proportional to the parent element instead
			// and we can't measure the parent instead because it
			// might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}




	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/i,

		// swappable if display is none or starts with table except
		// "table", "table-cell", or "table-caption"
		// see here for display values:
		// https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;


	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] =
						jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {

			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight
				// (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[ name ] = value;
					} catch ( e ) {}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing &&
							jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	} );

	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {

				// IE uses filters for opacity
				return ropacity.test( ( computed && elem.currentStyle ?
					elem.currentStyle.filter :
					elem.style.filter ) || "" ) ?
						( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
						computed ? "1" : "";
			},

			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist -
				// attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );

					// if there is no filter style applied in a css rule
					// or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}

	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return (
					parseFloat( curCSS( elem, "marginLeft" ) ) ||

					// Support: IE<=11+
					// Running getBoundingClientRect on a disconnected node in IE throws an error
					// Support: IE8 only
					// getClientRects() errors on disconnected elems
					( jQuery.contains( elem.ownerDocument, elem ) ?
						elem.getBoundingClientRect().left -
							swap( elem, { marginLeft: 0 }, function() {
								return elem.getBoundingClientRect().left;
							} ) :
						0
					)
				) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// we're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );

		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always( function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				} );
			}
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var a,
			input = document.createElement( "input" ),
			div = document.createElement( "div" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		// Setup
		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];

		// Support: Windows Web Apps (WWA)
		// `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "checkbox" );
		div.appendChild( input );

		a = div.getElementsByTagName( "a" )[ 0 ];

		// First batch of tests.
		a.style.cssText = "top:1px";

		// Test setAttribute on camelCase class.
		// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute( "style" ) );

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute( "href" ) === "/a";

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement( "form" ).enctype;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	} )();


	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if (
						hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// handle most common string cases
						ret.replace( rreturn, "" ) :

						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled :
									option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;

							} catch ( _ ) {

								// Will be executed only in IE6
								option.scrollHeight;
							}

						} else {
							option.selected = false;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}

					return options;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {

						// Setting the type on a radio button after the value resets the value in IE8-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;

						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}

					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}

					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

			} else {

				// Support: IE<9
				// Use defaultChecked and defaultSelected for oldIE
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			attrHandle[ name ] = function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {

					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			};
		} else {
			attrHandle[ name ] = function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
		}
	} );

	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {

					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {

					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {

				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						( ret = elem.ownerDocument.createAttribute( name ) )
					);
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};

		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
						ret.value :
						null;
				}
			};

		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each( [ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		} );
	}

	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {

				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case sensitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}




	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each( function() {

				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch ( e ) {}
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {

		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each( [ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		} );
	}

	// Support: Safari, IE9+
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;

				if ( parent ) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );

	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return jQuery.attr( elem, "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// store className if set
						jQuery._data( this, "__className__", className );
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					jQuery.attr( this, "class",
						className || value === false ?
						"" :
						jQuery._data( this, "__className__" ) || ""
					);
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	// Return jQuery for attributes-only inclusion


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );


	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

	jQuery.parseJSON = function( data ) {

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {

			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}

		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );

		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}

			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}

			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;

			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;

			// Remove this token
			return "";
		} ) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new window.DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch ( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,

		// IE leaves an \r character at EOL
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var

				// Cross-domain detection vars
				parts,

				// Loop variable
				i,

				// URL without anti-cache param
				cacheURL,

				// Response headers as string
				responseHeadersString,

				// timeout handle
				timeoutTimer,

				// To know if global events are to be dispatched
				fireGlobals,

				transport,

				// Response headers
				responseHeaders,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" )
				.replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	function getDisplay( elem ) {
		return elem.style && elem.style.display || jQuery.css( elem, "display" );
	}

	function filterHidden( elem ) {

		// Disconnected elements are considered hidden
		if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
			return true;
		}
		while ( elem && elem.nodeType === 1 ) {
			if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
				return true;
			}
			elem = elem.parentNode;
		}
		return false;
	}

	jQuery.expr.filters.hidden = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return support.reliableHiddenOffsets() ?
			( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
				!elem.getClientRects().length ) :
				filterHidden( elem );
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

		// Support: IE6-IE8
		function() {

			// XHR cannot access local files, always use ActiveX for that case
			if ( this.isLocal ) {
				return createActiveXHR();
			}

			// Support: IE 9-11
			// IE seems to error on cross-domain PATCH requests when ActiveX XHR
			// is used. In IE 9+ always use the native XHR.
			// Note: this condition won't catch Edge as it doesn't define
			// document.documentMode but it also doesn't support ActiveX so it won't
			// reach this code.
			if ( document.documentMode > 8 ) {
				return createStandardXHR();
			}

			// Support: IE<9
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
				createStandardXHR() || createActiveXHR();
		} :

		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		} );
	}

	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {

		jQuery.ajaxTransport( function( options ) {

			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {

				var callback;

				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;

						// Open the socket
						xhr.open(
							options.type,
							options.url,
							options.async,
							options.username,
							options.password
						);

						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}

						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
							headers[ "X-Requested-With" ] = "XMLHttpRequest";
						}

						// Set headers
						for ( i in headers ) {

							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );

						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;

								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;

									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch ( e ) {

										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;

									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}

							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};

						// Do send the request
						// `xhr.send` may raise an exception, but it will be
						// handled in jQuery.ajax (so no try/catch here)
						if ( !options.async ) {

							// If we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {

							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							window.setTimeout( callback );
						} else {

							// Register the callback, but delay it in case `xhr.send` throws
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},

					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		} );
	}

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch ( e ) {}
	}




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {

			var script,
				head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

			return {

				send: function( _, callback ) {

					script = document.createElement( "script" );

					script.async = true;

					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {

						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},

				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off, url.length ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};





	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

			// need to be able to calculate position if either top or left
			// is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== "undefined" ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? ( prop in win ) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only,
						// but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./dropdown-widget/index.js": 36,
		"./essay-widget/index.js": 42,
		"./fitb-widget/index.js": 45,
		"./mc-widget/index.js": 48
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
	webpackContext.id = 35;


/***/ },
/* 36 */
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

	__webpack_require__(37);

	var _abstractWidget = __webpack_require__(39);

	var _abstractWidget2 = _interopRequireDefault(_abstractWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PT_PREFIX = 'dropdown-';
	var FIELD_CLASS = PT_PREFIX + 'field';
	var OPTION_CLASS = PT_PREFIX + 'option';

	var _DEFAULT_CONFIG = {
	    options: []
	};

	function generateOption(props) {
	    var attributes;
	    if (props.value) {
	        attributes = {
	            value: props.value
	        };
	    } else {
	        attributes = {
	            disabled: 'disabled',
	            selected: 'selected'
	        };
	    }

	    if (props.speech) {
	        attributes.speech = props.speech;
	    }
	    if (Array.isArray(props.alternatives)) {
	        attributes.alternatives = props.alternatives.join();
	    }

	    return $('<option>' + props.display + '</option>').attr(attributes).addClass(OPTION_CLASS);
	}

	var DropdownWidget = function (_AbstractWidget) {
	    _inherits(DropdownWidget, _AbstractWidget);

	    _createClass(DropdownWidget, null, [{
	        key: 'DEFAULT_CONFIG',
	        get: function get() {
	            return _DEFAULT_CONFIG;
	        }
	    }]);

	    function DropdownWidget(config) {
	        _classCallCheck(this, DropdownWidget);

	        var _this = _possibleConstructorReturn(this, (DropdownWidget.__proto__ || Object.getPrototypeOf(DropdownWidget)).call(this, config));

	        var inputName = _this.config.id + '_input';
	        _this.$dropdown = $('<select></select>').attr('input-name', inputName).addClass(FIELD_CLASS).appendTo(_this.$domElement);

	        _this.options = [];

	        for (var i = 0; i < _this.config.options.length; i++) {
	            var optionProps = _this.config.options[i];
	            var $choice = generateOption(optionProps).appendTo(_this.$dropdown);

	            var option = $.extend({}, optionProps, {
	                element: $choice
	            });

	            _this.options.push(option);
	        }
	        return _this;
	    }

	    _createClass(DropdownWidget, [{
	        key: 'configHook',
	        value: function configHook() {
	            _get(DropdownWidget.prototype.__proto__ || Object.getPrototypeOf(DropdownWidget.prototype), 'configHook', this).call(this);
	            // add empty option
	            this.config.options.unshift({
	                'value': '',
	                'display': ''
	            });
	        }

	        /**
	         *
	         * @returns {string}
	         */

	    }, {
	        key: 'getState',
	        value: function getState() {
	            return this.$dropdown.val();
	        }

	        /**
	         *
	         * @param {string} state
	         */

	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            this.$dropdown.val(state);
	        }
	    }]);

	    return DropdownWidget;
	}(_abstractWidget2.default);

	exports.default = DropdownWidget;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./dropdown.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./dropdown.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n.dropdown-widget {\n  display: inline-block;\n}\n.dropdown-field {\n  padding-right: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 39 */
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

	__webpack_require__(40);

	var _shortid = __webpack_require__(11);

	var _shortid2 = _interopRequireDefault(_shortid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AbstractWidget = function () {
	    _createClass(AbstractWidget, null, [{
	        key: 'DEFAULT_CONFIG',
	        get: function get() {
	            if (!this._DEFAULT_CONFIG) {
	                this._DEFAULT_CONFIG = {};
	            }
	            return this._DEFAULT_CONFIG;
	        }

	        /**
	         *
	         * @param config
	         */

	    }]);

	    function AbstractWidget(config) {
	        _classCallCheck(this, AbstractWidget);

	        this.config = $.extend(true, {}, this.constructor.DEFAULT_CONFIG, config);

	        this.configHook();

	        var classes = ['pt-widget', this.config.type + '-widget'];

	        this.$domElement = $('<div></div>').attr({
	            'widget-type': this.config.type,
	            'id': '' + this.config.id
	        }).addClass(classes.join(' '));
	    }

	    /**
	     * This method is called in constructor to prepare config object for rendering.
	     * Super method must be called from the overridden
	     */


	    _createClass(AbstractWidget, [{
	        key: 'configHook',
	        value: function configHook() {
	            if (!this.config.id) {
	                this.config.id = _shortid2.default.generate() + '_widget';
	            }
	        }
	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            throw new Error(this.name + '.setState: method is not defined.');
	        }
	    }, {
	        key: 'getState',
	        value: function getState() {
	            throw new Error(this.name + '.getState: method is not defined.');
	        }
	    }]);

	    return AbstractWidget;
	}();

	exports.default = AbstractWidget;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./widgets.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./widgets.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n", ""]);

	// exports


/***/ },
/* 42 */
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

	__webpack_require__(43);

	var _abstractWidget = __webpack_require__(39);

	var _abstractWidget2 = _interopRequireDefault(_abstractWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PT_PREFIX = 'essay-';
	var FIELD_CLASS = PT_PREFIX + 'field';

	var PLACEHOLDER_TEXT = 'Type answer here';

	var EssayWidget = function (_AbstractWidget) {
	  _inherits(EssayWidget, _AbstractWidget);

	  function EssayWidget(config) {
	    _classCallCheck(this, EssayWidget);

	    var _this = _possibleConstructorReturn(this, (EssayWidget.__proto__ || Object.getPrototypeOf(EssayWidget)).call(this, config));

	    _this.$field = $('<textarea></textarea>').addClass(FIELD_CLASS).attr('placeholder', PLACEHOLDER_TEXT).appendTo(_this.$domElement);
	    return _this;
	  }

	  /**
	   *
	   * @returns {string}
	   */


	  _createClass(EssayWidget, [{
	    key: 'getState',
	    value: function getState() {
	      return this.$field.val();
	    }

	    /**
	     *
	     * @param {string} state
	     */

	  }, {
	    key: 'setState',
	    value: function setState(state) {
	      this.$field.val(state);
	    }
	  }]);

	  return EssayWidget;
	}(_abstractWidget2.default);

	exports.default = EssayWidget;
	;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./essay.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./essay.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n.essay-field {\n  width: 100%;\n  min-height: 150px;\n}\n", ""]);

	// exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 Copyright 2016
	 Pilyugin Alexey
	 Shayakhmetov Ilnaz

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

	__webpack_require__(46);

	var _abstractWidget = __webpack_require__(39);

	var _abstractWidget2 = _interopRequireDefault(_abstractWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MathQuill = __webpack_require__(24);

	var PT_PREFIX = 'fitb-';
	var FIELD_CLASS = PT_PREFIX + 'field';

	var FitbWidget = function (_AbstractWidget) {
	    _inherits(FitbWidget, _AbstractWidget);

	    _createClass(FitbWidget, null, [{
	        key: 'DEFAULT_CONFIG',
	        get: function get() {
	            if (!this._DEFAULT_CONFIG) {
	                this._DEFAULT_CONFIG = {
	                    align: 'left',
	                    width: '140px',
	                    placeholder: 'Type answer here',
	                    subtype: 'text'
	                };
	            }
	            return this._DEFAULT_CONFIG;
	        }
	    }]);

	    function FitbWidget(config) {
	        _classCallCheck(this, FitbWidget);

	        var _this = _possibleConstructorReturn(this, (FitbWidget.__proto__ || Object.getPrototypeOf(FitbWidget)).call(this, config));

	        _this.$domElement.attr('widget-subtype', _this.config.subtype);

	        if (_this.config.subtype === 'text') {
	            _this.$field = $('<input type="text"/>').addClass(FIELD_CLASS).attr('placeholder', _this.config.placeholder).css({
	                'text-align': _this.config.align,
	                'width': _this.config.width
	            }).appendTo(_this.$domElement);
	        } else if (_this.config.subtype === 'math') {
	            var $field = $('<span/>').addClass(FIELD_CLASS).addClass('js-paletteField').attr('placeholder', _this.config.placeholder).css({
	                'text-align': _this.config.align,
	                'width': _this.config.width
	            }).appendTo(_this.$domElement);
	            var MQ = MathQuill.getInterface(2); // for backcompat
	            _this.$field = MQ.MathField($field[0], 'mathquill' in _this.config ? _this.config.mathquill : {});
	            if (_this.isTouchDevice()) _this.$field.el().querySelector('textarea').setAttribute('readonly', true);
	            //this.$field.palette({notEditable: false, config: {skin: 'black-small', hidden: (('palette' in this.config) && !this.config.palette)}});
	        }
	        return _this;
	    }

	    /**
	     *
	     * @returns {string}
	     */


	    _createClass(FitbWidget, [{
	        key: 'getState',
	        value: function getState() {
	            if (this.config.subtype === 'text') {
	                return this.$field.val();
	            } else if (this.config.subtype === 'math') {
	                return this.$field.latex();
	            }
	        }

	        /**
	         *
	         * @param {string} state
	         */

	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            if (this.config.subtype === 'text') {
	                return this.$field.val(state);
	            } else if (this.config.subtype === 'math') {
	                return this.$field.latex(state);
	            }
	        }
	    }, {
	        key: 'isTouchDevice',
	        value: function isTouchDevice() {
	            return 'ontouchstart' in window // works on most browsers
	            || 'onmsgesturechange' in window; // works on IE10 with some false positives
	        }
	    }]);

	    return FitbWidget;
	}(_abstractWidget2.default);

	exports.default = FitbWidget;
	;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./fitb.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./fitb.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n.fitb-widget {\n  display: inline-block;\n}\n.fitb-widget .fitb-field:focus {\n  outline: none;\n}\n", ""]);

	// exports


/***/ },
/* 48 */
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

	__webpack_require__(49);

	var _abstractWidget = __webpack_require__(39);

	var _abstractWidget2 = _interopRequireDefault(_abstractWidget);

	var _contentUnit = __webpack_require__(21);

	var _contentUnit2 = _interopRequireDefault(_contentUnit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PT_PREFIX = 'mc-';
	var CHOICE_HOLDER_CLASS = PT_PREFIX + 'choices';
	var CHOICE_CLASS = PT_PREFIX + 'choice';
	var HORIZONTAL_CLASS = PT_PREFIX + 'horizontal';

	var SUBTYPES = {
	    RADIO: 'radio',
	    CHECKBOX: 'checkbox'
	};

	function generateChoice(props, type, name, id) {
	    var $choice = $('<div class="' + CHOICE_CLASS + '"></div>');

	    var $input = $('<input id="' + id + '" name="' + name + '" type="' + type + '" value="' + props.value + '">').on('focus', function () {
	        var $thisInput = $(this);
	        // wait while mouse-focusing had checked
	        setTimeout(function () {
	            if ($thisInput.is(':focus') && !$thisInput.hasClass('is-mouse-focused')) {
	                $choice.addClass('focused');
	            }
	        }, 0);
	    }).on('blur', function () {
	        $choice.removeClass('focused');
	    }).appendTo($choice);
	    var $label = $('<label for="' + id + '"></label>').appendTo($choice);

	    if (props.speech) {
	        $input.attr('speech', props.speech);
	    }
	    if (Array.isArray(props.alternatives)) {
	        $input.attr('alternatives', props.alternatives.join());
	    }

	    // add aria-labels to input label
	    if (props.speech) {
	        if (typeof props.display == 'string') {
	            props.display = $.extend(true, {}, _contentUnit2.default.DEFAULT_CONFIG, { value: props.display });
	        } else if (Array.isArray(props.display)) {
	            props.display = $.extend(true, {}, _contentUnit2.default.DEFAULT_CONFIG, {
	                type: _contentUnit2.default.CONTENT_TYPES.MULTI,
	                value: props.display
	            });
	        }
	        // save defined value if it exists
	        props.display.speech = props.display.speech || props.speech;
	    }
	    var contentUnit = new _contentUnit2.default(props.display, true);
	    contentUnit.$domElement.removeAttr('speech');
	    $label.append(contentUnit.$domElement);
	    return $choice;
	}

	function shuffle(array) {
	    var randomIndex, randomElement;
	    var tempArr = array.splice(0, array.length);

	    while (tempArr.length) {
	        randomIndex = Math.floor(Math.random() * tempArr.length);
	        randomElement = tempArr.splice(randomIndex, 1)[0];
	        array.push(randomElement);
	    }
	    return array;
	}

	var McWidget = function (_AbstractWidget) {
	    _inherits(McWidget, _AbstractWidget);

	    _createClass(McWidget, null, [{
	        key: 'DEFAULT_CONFIG',
	        get: function get() {
	            if (!this._DEFAULT_CONFIG) {
	                this._DEFAULT_CONFIG = {
	                    subtype: SUBTYPES.RADIO,
	                    randomOrder: true,
	                    choices: []
	                };
	            }
	            return this._DEFAULT_CONFIG;
	        }
	    }]);

	    function McWidget(config) {
	        _classCallCheck(this, McWidget);

	        var _this = _possibleConstructorReturn(this, (McWidget.__proto__ || Object.getPrototypeOf(McWidget)).call(this, config));

	        _this.$domElement.attr('widget-subtype', _this.config.subtype);

	        _this.$domElement.append('<hr>');

	        var inputName = _this.config.id + '_input';
	        _this.$choices = $('<div></div>').attr('input-name', inputName).addClass(CHOICE_HOLDER_CLASS).appendTo(_this.$domElement);

	        if (!!_this.config.horizontal) _this.$choices.addClass(HORIZONTAL_CLASS);

	        _this.choices = [];

	        for (var i = 0; i < _this.config.choices.length; i++) {
	            var choiceProps = _this.config.choices[i];
	            var $choice = generateChoice(choiceProps, _this.config.subtype, inputName, inputName + '_' + i).appendTo(_this.$choices);

	            var choice = $.extend({}, choiceProps, {
	                element: $choice.find('input')[0]
	            });

	            _this.choices.push(choice);
	        }
	        return _this;
	    }

	    _createClass(McWidget, [{
	        key: 'configHook',
	        value: function configHook() {
	            _get(McWidget.prototype.__proto__ || Object.getPrototypeOf(McWidget.prototype), 'configHook', this).call(this);
	            var config = this.config;

	            if (config.randomOrder) {
	                shuffle(config.choices);
	            }
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
	            for (var i = 0; i < this.choices.length; i++) {
	                var choice = this.choices[i];
	                choice.element.checked = state.indexOf(choice.value) != -1;
	            }
	        }

	        /**
	         *
	         * @returns {Array.<string>|string}
	         */

	    }, {
	        key: 'getState',
	        value: function getState() {
	            var state = [];
	            for (var i = 0; i < this.choices.length; i++) {
	                var choice = this.choices[i];
	                if (choice.element.checked) {
	                    state.push(choice.value);
	                }
	            }
	            return this.config.subtype === SUBTYPES.RADIO ? state[0] || '' : state;
	        }
	    }]);

	    return McWidget;
	}(_abstractWidget2.default);

	exports.default = McWidget;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./mc.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./mc.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n/*\n Copyright 2016\n Pilyugin Alexey\n\n This file is part of Voice ART.\n\n Voice ART is free software: you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation, either version 3 of the License, or\n (at your option) any later version.\n\n Voice ART is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.\n */\n.mc-choices {\n  padding-left: 1em;\n  padding-right: 1em;\n  /*\n    input[type=\"radio\"],\n    input[type=\"checkbox\"] {\n      margin: 0;\n      margin-right: 4px;\n      position: relative;\n      vertical-align: middle;\n      -webkit-appearance: none;\n      appearance: none;\n      cursor: pointer;\n      border: none;\n\n      &:after,\n      &:before {\n        content: \"\";\n        position: relative;\n        left: 0;\n        top: 0;\n        display: block;\n        width: 18px;\n        height: 18px;\n        //border-radius: 50%;\n        -webkit-transition: 240ms;\n        -o-transition: 240ms;\n        transition: 240ms;\n      }\n\n      &:after {\n        border: 2px solid #666666;\n      }\n    }\n\n    input[type=\"checkbox\"] {\n\n    }\n\n    input[type=\"radio\"] {\n\n      &:after,\n      &:before {\n        border-radius: 50%;\n      }\n\n      &:after {\n        border: 2px solid #666666;\n      }\n      &:before {\n        position: absolute;\n        background-color: #2196f3;\n        -webkit-transform: scale(0);\n        -ms-transform: scale(0);\n        -o-transform: scale(0);\n        transform: scale(0);\n      }\n\n      &:checked:before {\n        -webkit-transform: scale(.5);\n        -ms-transform: scale(.5);\n        -o-transform: scale(.5);\n        transform: scale(.5);\n      }\n\n      &:checked:after {\n        border-color: #2196f3;\n      }\n\n      &:focus {\n        outline: none;\n      }\n\n    }\n  */\n}\n.mc-choices *:before,\n.mc-choices *:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.mc-choices input[type=\"radio\"],\n.mc-choices input[type=\"checkbox\"] {\n  margin: 0 4px 0 0;\n  vertical-align: middle;\n}\n.mc-choices input[type=\"radio\"]:focus,\n.mc-choices input[type=\"checkbox\"]:focus {\n  outline: none;\n}\n.mc-choices input[type=\"radio\"]:after,\n.mc-choices input[type=\"checkbox\"]:after,\n.mc-choices input[type=\"radio\"]:before,\n.mc-choices input[type=\"checkbox\"]:before {\n  left: 0;\n  top: 0;\n}\n.mc-choices input[type=\"checkbox\"]:before {\n  left: 6px;\n}\n.mc-choices label {\n  margin: 0;\n  vertical-align: middle;\n}\n.mc-choices .mc-choice {\n  margin-bottom: 4px;\n}\n.mc-choices .mc-choice.focused {\n  outline: 1px dotted black;\n}\n.mc-choices .mc-choice label {\n  display: inline;\n}\n.mc-choices.mc-horizontal {\n  display: flex;\n  flex-direction: row;\n}\n.mc-choices.mc-horizontal label {\n  margin: 0;\n  vertical-align: middle;\n}\n.mc-choices.mc-horizontal .mc-choice {\n  display: inline-block;\n  text-align: center;\n  flex-grow: 1;\n  margin-bottom: 4px;\n}\n.mc-choices.mc-horizontal .mc-choice.focused {\n  outline: 1px dotted black;\n}\n.mc-choices.mc-horizontal .mc-choice label {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 51 */
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

	var _constants = __webpack_require__(20);

	var _constants2 = _interopRequireDefault(_constants);

	var _mathComparison = __webpack_require__(52);

	var _mathComparison2 = _interopRequireDefault(_mathComparison);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PANEL_CLASS = _constants2.default.ITEM_CLASS + '-grade-panel';
	var FEEDBACK_CLASS = _constants2.default.ITEM_CLASS + '-feedback';
	var SUBMIT_CLASS = _constants2.default.ITEM_CLASS + '-submit-btn btn btn-primary';
	var REJOINDER_CLASS = _constants2.default.ITEM_CLASS + '-rejoinder';

	var PENDING_STATUS_CLASS = _constants2.default.ITEM_CLASS + '-pending';
	var CORRECT_STATUS_CLASS = _constants2.default.ITEM_CLASS + '-correct';
	var INCORRECT_STATUS_CLASS = _constants2.default.ITEM_CLASS + '-incorrect';
	var PARTIALLY_CORRECT_STATUS_CLASS = _constants2.default.ITEM_CLASS + '-partially-correct';

	var States = {
	    EMPTY: {
	        statusAttr: '',
	        cssClass: '',
	        feedback: ''
	    },
	    CORRECT: {
	        statusAttr: 'response-received',
	        cssClass: 'text-success ' + CORRECT_STATUS_CLASS,
	        feedback: ''
	    },
	    INCORRECT: {
	        statusAttr: 'response-received',
	        cssClass: 'text-danger ' + INCORRECT_STATUS_CLASS,
	        feedback: ''
	    },
	    PARTIALLY_CORRECT: {
	        statusAttr: 'response-received',
	        cssClass: 'text-warning ' + PARTIALLY_CORRECT_STATUS_CLASS,
	        feedback: ''
	    },
	    PENDING: {
	        statusAttr: 'pending',
	        cssClass: 'text-warning ' + PENDING_STATUS_CLASS,
	        feedback: 'Sending answer...'
	    }
	};

	var DEFAULT_SETTINGS = {
	    canSubmit: true
	};

	var GradePanel = function (_EventEmitter) {
	    _inherits(GradePanel, _EventEmitter);

	    _createClass(GradePanel, null, [{
	        key: 'EVENTS',
	        get: function get() {
	            if (!this._EVENTS) {
	                this._EVENTS = {
	                    SUBMIT: 'submit',
	                    RESPONSE_RECEIVED: 'response_received'
	                };
	            }
	            return this._EVENTS;
	        }
	    }]);

	    function GradePanel(element, settings) {
	        _classCallCheck(this, GradePanel);

	        var _this = _possibleConstructorReturn(this, (GradePanel.__proto__ || Object.getPrototypeOf(GradePanel)).call(this));

	        _this.settings = $.extend(true, {}, DEFAULT_SETTINGS, settings);
	        _this.$rootElement = $(element);

	        _this.$feedbackElement = $('<div></div>').addClass(FEEDBACK_CLASS).appendTo(_this.$rootElement);
	        _this.$domElement = $('<div></div>').addClass(PANEL_CLASS).appendTo(_this.$rootElement);

	        _this.$submitButton = $('<button>Submit</button>').addClass(SUBMIT_CLASS).on('click', function () {
	            // Rejoinder element should be focused after submit button was clicked to improve ADA experience
	            // except cases when this click-event was generated by voice controller
	            // or if submit button was clicked by mouse
	            var needRefocus = _this.$submitButton.is(':focus') && !_this.$submitButton.is('.is-mouse-focused');
	            _this.submit();
	            if (needRefocus) {
	                _this.$rejoinder.focus();
	            }
	        }).appendTo(_this.$domElement);

	        _this.$rejoinder = $('<div></div>').addClass(REJOINDER_CLASS).appendTo(_this.$domElement);

	        _this.canSubmit = _this.settings.canSubmit;
	        return _this;
	    }

	    /**
	     *
	     * @returns {boolean}
	     */


	    _createClass(GradePanel, [{
	        key: 'setRejoinderText',
	        value: function setRejoinderText(text) {
	            if (!this.$rejoinder) return;
	            this.$rejoinder.html(text);
	            if (text) {
	                this.$rejoinder.attr('tabindex', '0');
	            } else {
	                this.$rejoinder.removeAttr('tabindex');
	            }
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var widgets = this.settings.widgets;
	            this.canSubmit = false;
	            this.state = States.PENDING;
	            this.$domElement.removeAttr('score');
	            this.$domElement.attr('is-submitted', true);

	            if (!widgets.length) {
	                throw new Error(this.constructor.name + '.submit: settings.widgets property is empty.');
	            }

	            var answers = [];
	            for (var i = 0; i < widgets.length; i++) {
	                var widget = widgets[i];
	                answers.push(widget.getState());
	            }
	            this.emit(this.constructor.EVENTS.SUBMIT, answers);

	            //todo: send to grade service

	            //todo: remove this temp code, when server grading will be implemented
	            var grading = new Promise(function (resolve, reject) {
	                setTimeout(function () {
	                    var correct = _this2.correct;
	                    if (!!correct && !Array.isArray(correct)) {
	                        correct = [correct];
	                    }
	                    var score = 0;
	                    var correctAnswer = void 0;

	                    var _loop = function _loop(_i) {
	                        var answer = answers[_i];
	                        if (!!correct) {
	                            correctAnswer = correct[_i];
	                            if (typeof answer === 'string') {
	                                answer = answer.trim();
	                            }

	                            if (correctAnswer.method === 'array') {
	                                correctAnswer.value.sort();
	                                if (typeof answer === 'string') {
	                                    answer = [answer];
	                                }
	                                answer.sort();
	                            }
	                        }
	                        //console.log(answer);
	                        if (!!_this2.settings.widgets[_i].config.noGrade) {
	                            if (answer.length > 0) score++;
	                        } else if (correctAnswer.method === 'string' && Array.isArray(correctAnswer.value)) {
	                            if (correctAnswer.value.some(function (a) {
	                                return a.toLowerCase().trim() == answer.toLowerCase();
	                            })) {
	                                score++;
	                            }
	                        } else if (correctAnswer.method === 'latex') {
	                            if (correctAnswer.value.some(function (a) {
	                                var result = _mathComparison2.default.compare(a, answer, _mathComparison2.default.types['RATIONAL_IRRATIONAL']);
	                                return typeof result === "boolean" && result;
	                            })) {
	                                score++;
	                            }
	                        } else if (JSON.stringify(answer).toLowerCase() === JSON.stringify(correctAnswer.value).toLowerCase()) {
	                            score++;
	                        } else if (correctAnswer.method === 'array' && Array.isArray(correctAnswer.value)) {
	                            isIncorrect = false;

	                            if (answer.some(function (a) {
	                                return correctAnswer.value.indexOf(a) === -1;
	                            })) isIncorrect = true;
	                            if (answer.length > 0 && !isIncorrect) score = score + 0.5;
	                        }
	                    };

	                    for (var _i = 0; _i < widgets.length; _i++) {
	                        var isIncorrect;

	                        _loop(_i);
	                    }
	                    score = score / widgets.length;

	                    var feedback;
	                    var allNonGradable = _this2.settings.widgets.every(function (widget) {
	                        return !!widget.config.noGrade;
	                    });
	                    if (score == 1) {
	                        feedback = allNonGradable ? 'Your answers has been recorded' : 'That\'s correct!';
	                    } else if (score > 0) {
	                        feedback = allNonGradable ? 'You did not answer all questions' : 'That\'s partially correct. Please try again!';
	                    } else {
	                        feedback = allNonGradable ? 'You have not answered any question' : 'That\'s incorrect. Please try again!';
	                    }

	                    resolve({
	                        answers: answers,
	                        score: score,
	                        feedback: feedback
	                    });
	                }, 2000);
	            });

	            grading.then(function (response) {
	                if (response.score == 1) {
	                    _this2.state = States.CORRECT;
	                } else if (response.score > 0) {
	                    _this2.state = States.PARTIALLY_CORRECT;
	                } else {
	                    _this2.state = States.INCORRECT;
	                }
	                if (_this2.feedbacks && response.score in _this2.feedbacks) _this2.$feedbackElement.html(_this2.feedbacks[response.score] + '<hr>');else _this2.$feedbackElement.html('');
	                _this2.$domElement.attr('score', response.score);
	                _this2.$domElement.attr('feedback', response.feedback);

	                _this2.setRejoinderText(response.feedback);
	                _this2.canSubmit = true;
	                _this2.emit(_this2.constructor.EVENTS.RESPONSE_RECEIVED, response);
	            });
	        }
	    }, {
	        key: 'canSubmit',
	        get: function get() {
	            return this._canSubmit;
	        }

	        /**
	         *
	         * @param {boolean} val
	         */
	        ,
	        set: function set(val) {
	            this._canSubmit = val;
	            if (this._canSubmit) {
	                this.$submitButton.removeAttr('disabled');
	            } else {
	                this.$submitButton.attr('disabled', 'disabled');
	            }
	        }
	    }, {
	        key: 'state',
	        get: function get() {
	            if (typeof this._state === 'undefined') this._state = States.EMPTY;
	            return this._state;
	        },
	        set: function set(val) {
	            this._state = val;

	            this.$domElement.attr('status', this._state.statusAttr);
	            var classes = [];
	            for (var key in States) {
	                if (States.hasOwnProperty(key)) classes.push(States[key].cssClass);
	            }
	            classes.join(' ');
	            this.$rejoinder.removeClass(classes.join(' ')).addClass(this._state.cssClass);
	            this.setRejoinderText(this._state.feedback);
	        }
	    }]);

	    return GradePanel;
	}(_events2.default);

	exports.default = GradePanel;
	;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 96664_000 on 15.11.2016.
	 */


	var comparator = __webpack_require__(53);
	var types = __webpack_require__(60);

	module.exports = {
	    types: types,
	    compare: function(answer1, answer2, type){
	        return comparator[type](answer1, answer2);
	    }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Shayakhmetov on 17.11.2016.
	 */

	var KAS = __webpack_require__(54);
	var types = __webpack_require__(60);

	module.exports = {
	    [types.RATIONAL_IRRATIONAL]: function(ans1, ans2){
	        if(KAS.parse(ans1).parsed && KAS.parse(ans2).parsed)
	            return KAS.compare(KAS.parse(ans1).expr, KAS.parse(ans2).expr).equal;
	        else{
	            return [KAS.parse(ans1), KAS.parse(ans2)]
	        }
	    },
	    [types.SYSTEMS]: function(ans1, ans2){
	        let expressions1 = getExpressions(ans1),
	            expressions2 = getExpressions(ans2);

	        let isCorrect = true;
	        expressions1.forEach(exp1 => {
	            if(!expressions2.some(exp2 => KAS.compare(KAS.parse(exp1).expr, KAS.parse(exp2).expr).equal))
	                isCorrect = false;
	        });
	        return isCorrect && (expressions2.length === expressions1.length);
	    }
	};


	function getExpressions(system){
	    let exps = [];
	    if(/\\begin\{cases\}.+?\\end\{cases\}/.test(system)){
	        let lines = system.replace(/\\begin\{cases\}/, '').replace(/\\end\{cases\}/, '').split('\\\\');
	        lines.forEach(line => {
	            exps = exps.concat(getExpressions(line));
	        });
	    } else if(/\\in/.test(system)){
	        let val = system.match(/(.+?)\\in/)[1];
	        let ranges = system.match(/(?:\[|\{|\()\s*?.+?\s*?,\s*?.+?\s*?(?:\]|\}|\))/g);
	        ranges.forEach(segment => {
	            let from = segment.match(/\((.+?),/)[1], to = segment.match(/,(.+?)\)/)[1];
	            if(/\(\s*?-\s*?\\infty\s*?,/.test(segment)){
	                if(/,\s*?\+?\s*?\\infty\s*?\)/.test(segment)) {
	                    exps.push(val);
	                } else if(/,.+?\)/.test(segment)){
	                    exps.push((`${val} \\lt ${to}`));
	                } else if(/,.+?\]/.test(segment)){
	                    exps.push((`${val} \\le ${to}`));
	                }
	            } else {
	                if(/\(\s*?.+?\s*?,/.test(segment)){
	                    if(/,\s*?\+?\s*?\\infty\s*?\)/.test(segment)) {
	                        exps.push((`${val} \\gt ${from}`));
	                    } else if(/,.+?\)/.test(segment)){
	                        exps.push((`${val} \\gt ${from}`));
	                        exps.push((`${val} \\lt ${to}`));
	                    } else if(/,.+?\]/.test(segment)){
	                        exps.push((`${val} \\gt ${from}`));
	                        exps.push((`${val} \\le ${to}`));
	                    }
	                } else if(/\[\s*?.+?\s*?,/.test(segment)){
	                    if(/,\s*?\+?\s*?\\infty\s*?\)/.test(segment)) {
	                        exps.push((`${val} \\ge ${from}`));
	                    } else if(/,.+?\)/.test(segment)){
	                        exps.push((`${val} \\ge ${from}`));
	                        exps.push((`${val} \\lt ${to}`));
	                    } else if(/,.+?\]/.test(segment)){
	                        exps.push((`${val} \\ge ${from}`));
	                        exps.push((`${val} \\le ${to}`));
	                    }
	                }
	            }
	        });
	    } else if(/\s*?\|.+?\|\s*?(:?=|\\gt|\\ge|\\lt|\\le)\s*/.test(system)){
	        let absVal = system.match(/\|(.+?)\|/)[1];
	        let rel = system.match(/=|\\gt|\\ge|\\lt|\\le/)[0];
	        let val = system.match(/(?:=|\\gt|\\ge|\\lt|\\le)(.+)/)[1];
	        let negRel, posRel;
	        switch(rel){
	            case '=':
	                negRel = '=';
	                posRel = '=';
	                break;
	            case '\\gt':
	                negRel = '\\lt';
	                posRel = '\\gt';
	                break;
	            case '\\lt':
	                negRel = '\\gt';
	                posRel = '\\lt';
	                break;
	            case '\\ge':
	                negRel = '\\le';
	                posRel = '\\ge';
	                break;
	            case '\\le':
	                negRel = '\\ge';
	                posRel = '\\le';
	                break;
	        }
	        exps.push(`(${absVal}) ${negRel} -(${val})`);
	        exps.push(`(${absVal}) ${posRel} (${val})`);
	    } else {
	        exps.push(system);
	    }
	    return exps;
	}

	/*
	function convertRelation (rel){
	    let relation = rel.match(/=|\\gt|\\ge|\\lt|\\le/)[0];
	    return Simplifier.latex(rel.replace(relation, '=')).replace('=', relation);
	}*/


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Shayakhmetov on 18.11.2016.
	 */
	var KAS = {};
	__webpack_require__(55)(KAS);
	__webpack_require__(56)(KAS);
	__webpack_require__(57)(KAS);
	__webpack_require__(59)(KAS);

	module.exports = KAS;

/***/ },
/* 55 */
/***/ function(module, exports) {

	// This is a @generated file
	module.exports = function(KAS) {

	/* parser generated by jison 0.4.17 */
	/*
	  Returns a Parser object of the following structure:

	  Parser: {
	    yy: {}
	  }

	  Parser.prototype: {
	    yy: {},
	    trace: function(),
	    symbols_: {associative list: name ==> number},
	    terminals_: {associative list: number ==> name},
	    productions_: [...],
	    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
	    table: [...],
	    defaultActions: {...},
	    parseError: function(str, hash),
	    parse: function(input),

	    lexer: {
	        EOF: 1,
	        parseError: function(str, hash),
	        setInput: function(input),
	        input: function(),
	        unput: function(str),
	        more: function(),
	        less: function(n),
	        pastInput: function(),
	        upcomingInput: function(),
	        showPosition: function(),
	        test_match: function(regex_match_array, rule_index),
	        next: function(),
	        lex: function(),
	        begin: function(condition),
	        popState: function(),
	        _currentRules: function(),
	        topState: function(),
	        pushState: function(condition),

	        options: {
	            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
	            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
	            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
	        },

	        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
	        rules: [...],
	        conditions: {associative list: name ==> set},
	    }
	  }


	  token location info (@$, _$, etc.): {
	    first_line: n,
	    last_line: n,
	    first_column: n,
	    last_column: n,
	    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
	  }


	  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
	    text:        (matched text)
	    token:       (the produced terminal token, if any)
	    line:        (yylineno)
	  }
	  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
	    loc:         (yylloc)
	    expected:    (string describing the set of expected tokens)
	    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
	  }
	*/
	var parser = (function(){
	var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,21],$V2=[1,17],$V3=[1,18],$V4=[1,19],$V5=[1,34],$V6=[1,25],$V7=[1,26],$V8=[1,27],$V9=[1,28],$Va=[1,35],$Vb=[1,29],$Vc=[1,30],$Vd=[1,31],$Ve=[1,32],$Vf=[1,9],$Vg=[1,8],$Vh=[5,6],$Vi=[1,38],$Vj=[1,39],$Vk=[1,41],$Vl=[1,42],$Vm=[1,45],$Vn=[1,46],$Vo=[1,47],$Vp=[1,48],$Vq=[1,49],$Vr=[1,53],$Vs=[1,54],$Vt=[1,55],$Vu=[5,6,10,12,34,36,42,44,46],$Vv=[1,59],$Vw=[1,60],$Vx=[5,6,10,12,14,16,18,20,21,23,24,30,31,32,33,34,35,36,38,40,42,43,44,45,46,47,48],$Vy=[5,6,10,12,14,16,18,21,23,24,30,31,32,33,34,35,36,38,40,42,43,44,45,46,47,48],$Vz=[12,18,21,23,24,30,31,32,33,35,38,40,43,44,45,47,48];
	var parser = {trace: function trace() { },
	yy: {},
	symbols_: {"error":2,"equation":3,"expression":4,"SIGN":5,"EOF":6,"additive":7,"integer":8,"rational":9,"+":10,"multiplicative":11,"-":12,"triglog":13,"*":14,"negative":15,"/":16,"trig":17,"TRIG":18,"trigfunc":19,"^":20,"TRIGINV":21,"logbase":22,"ln":23,"log":24,"_":25,"subscriptable":26,"power":27,"primitive":28,"variable":29,"VAR":30,"CONST":31,"FLOAT":32,"{":33,"}":34,"(":35,")":36,"function":37,"FUNC":38,"invocation":39,"sqrt":40,"[":41,"]":42,"abs":43,"|":44,"LEFT|":45,"RIGHT|":46,"FRAC":47,"INT":48,"$accept":0,"$end":1},
	terminals_: {2:"error",5:"SIGN",6:"EOF",10:"+",12:"-",14:"*",16:"/",18:"TRIG",20:"^",21:"TRIGINV",23:"ln",24:"log",25:"_",30:"VAR",31:"CONST",32:"FLOAT",33:"{",34:"}",35:"(",36:")",38:"FUNC",40:"sqrt",41:"[",42:"]",43:"abs",44:"|",45:"LEFT|",46:"RIGHT|",47:"FRAC",48:"INT"},
	productions_: [0,[3,4],[3,2],[3,1],[4,1],[4,1],[4,1],[7,2],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,1],[11,2],[11,2],[11,2],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,2],[11,2],[11,2],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,2],[11,2],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,1],[15,2],[15,2],[15,2],[15,1],[17,1],[19,1],[19,3],[19,3],[19,3],[19,1],[22,1],[22,1],[22,3],[22,3],[13,2],[13,2],[13,2],[13,2],[13,2],[13,2],[13,1],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,1],[29,1],[26,3],[26,3],[26,1],[26,1],[26,1],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[37,1],[39,4],[39,4],[39,7],[39,4],[39,3],[39,3],[39,4],[39,4],[39,4],[39,7],[39,7],[39,7],[39,4],[39,3],[39,4],[39,4],[39,4],[39,7],[39,7],[39,7],[39,4],[39,3],[39,4],[28,1],[28,1],[28,7],[28,7],[28,7],[28,7],[28,7],[28,7],[28,7],[28,7],[8,1],[9,7]],
	performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
	/* this == yyval */

	var $0 = $$.length - 1;
	switch (yystate) {
	case 1:
	return new yy.Eq($$[$0-3], $$[$0-2], $$[$0-1]);
	break;
	case 2:
	return $$[$0-1];
	break;
	case 3:
	return new yy.Add([]);
	break;
	case 4: case 5: case 6: case 26: case 53: case 57: case 59: case 66: case 67: case 74: case 84: case 121: case 122:
	this.$ = $$[$0];
	break;
	case 7:
	this.$ = yy.Add.createOrAppend($$[$0-1], $$[$0]);
	break;
	case 8: case 9: case 10: case 14: case 15: case 16: case 20: case 21: case 22:
	this.$ = yy.Add.createOrAppend($$[$0-2], $$[$0]);
	break;
	case 11: case 12: case 13: case 17: case 18: case 19: case 23: case 24: case 25:
	this.$ = yy.Add.createOrAppend($$[$0-2], yy.Mul.handleNegative($$[$0], "subtract"));
	break;
	case 27: case 28: case 29: case 36: case 37: case 38: case 45: case 46:
	this.$ = yy.Mul.fold(yy.Mul.createOrAppend($$[$0-1], $$[$0]));
	break;
	case 30: case 32: case 34: case 39: case 41: case 43: case 47: case 49: case 51:
	this.$ = yy.Mul.fold(yy.Mul.createOrAppend($$[$0-2], $$[$0]));
	break;
	case 31: case 33: case 35: case 40: case 42: case 44: case 48: case 50: case 52:
	this.$ = yy.Mul.fold(yy.Mul.handleDivide($$[$0-2], $$[$0]));
	break;
	case 54: case 55: case 56:
	this.$ = yy.Mul.handleNegative($$[$0]);
	break;
	case 58: case 63:
	this.$ = [yytext];
	break;
	case 60: case 61: case 62:
	this.$ = $$[$0-2].concat($$[$0]);
	break;
	case 64:
	this.$ = yy.Log.natural();
	break;
	case 65:
	this.$ = yy.Log.common();
	break;
	case 68: case 70: case 72:
	this.$ = yy.Trig.create($$[$0-1], $$[$0]);
	break;
	case 69: case 71: case 73:
	this.$ = yy.Log.create($$[$0-1], $$[$0]);
	break;
	case 75: case 76: case 77: case 78: case 79: case 80: case 81: case 82: case 83:
	this.$ = new yy.Pow($$[$0-2], $$[$0]);
	break;
	case 85: case 97:
	this.$ = yytext;
	break;
	case 86: case 87:
	this.$ = new yy.Var($$[$0-2], $$[$0]);
	break;
	case 88:
	this.$ = new yy.Var($$[$0]);
	break;
	case 89:
	this.$ = new yy.Const(yytext.toLowerCase());
	break;
	case 90:
	this.$ = yy.Float.create(Number(yytext));
	break;
	case 91: case 93: case 95:
	this.$ = $$[$0-1].completeParse();
	break;
	case 92: case 94: case 96:
	this.$ = $$[$0-1].completeParse().addHint('parens');
	break;
	case 98: case 99: case 105: case 106: case 113: case 114:
	this.$ = yy.Pow.sqrt($$[$0-1]);
	break;
	case 100: case 107: case 108: case 109: case 115: case 116: case 117:
	this.$ = new yy.Pow.nthroot($$[$0-1], $$[$0-4]);
	break;
	case 101: case 102: case 103: case 110: case 111: case 118: case 119:
	this.$ = new yy.Abs($$[$0-1]);
	break;
	case 104: case 112: case 120:
	this.$ = new yy.Func($$[$0-3], $$[$0-1]);
	break;
	case 123: case 124: case 125: case 126: case 127: case 128: case 129: case 130: case 132:
	this.$ = yy.Mul.handleDivide($$[$0-4], $$[$0-1]);
	break;
	case 131:
	this.$ = yy.Int.create(Number(yytext));
	break;
	}
	},
	table: [{3:1,4:2,6:[1,3],7:4,8:5,9:6,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{1:[3]},{5:[1,36],6:[1,37]},{1:[2,3]},o($Vh,[2,4],{10:$Vi,12:$Vj}),o($Vh,[2,5],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,9:40,13:43,8:44,10:$Vk,12:$Vl,14:$Vm,16:$Vn,18:$V1,20:$Vo,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg}),o($Vh,[2,6],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:50,9:51,8:52,10:$Vp,12:$Vq,14:$Vr,16:$Vs,18:$V1,20:$Vt,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,26],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:56,9:57,8:58,14:$Vv,16:$Vw,18:$V1,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vx,[2,131]),{33:[1,61]},o($Vy,[2,53]),{8:64,9:63,12:$V0,13:12,15:62,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vy,[2,57]),{8:66,9:67,12:$V0,13:12,15:65,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:69,9:70,12:$V0,13:12,15:68,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vy,[2,74]),o($Vz,[2,59],{20:[1,71]}),o($Vz,[2,63]),o($Vz,[2,64]),o($Vz,[2,65],{25:[1,72]}),o($Vy,[2,84],{20:[1,73]}),o([12,18,20,21,23,24,30,31,32,33,35,38,40,43,44,45,47,48],[2,58]),o($Vx,[2,121]),o($Vx,[2,122]),o($Vx,[2,88],{25:[1,74]}),o($Vx,[2,89]),o($Vx,[2,90]),{7:75,8:76,9:77,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:78,8:79,9:80,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{33:[1,82],35:[1,81],41:[1,83]},{35:[1,84]},{7:85,8:86,9:87,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:88,8:89,9:90,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{35:[1,91]},o([5,6,10,12,14,16,18,20,21,23,24,25,30,31,32,33,34,35,36,38,40,42,43,44,45,46,47,48],[2,85]),{35:[2,97]},{4:92,7:4,8:5,9:6,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{1:[2,2]},{8:94,9:95,11:93,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:97,9:98,11:96,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vu,[2,7],{20:$Vt}),{8:100,9:101,11:99,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:103,9:104,11:102,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vy,[2,45]),o($Vy,[2,46],{20:$Vo}),{8:107,9:106,12:$V0,13:12,15:105,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:110,9:109,12:$V0,13:12,15:108,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:113,9:112,12:$V0,13:12,15:111,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:115,9:116,11:114,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:118,9:119,11:117,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vy,[2,36]),o($Vy,[2,37],{20:$Vt}),o($Vy,[2,38],{20:$Vo}),{8:122,9:121,12:$V0,13:12,15:120,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:125,9:124,12:$V0,13:12,15:123,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:128,9:127,12:$V0,13:12,15:126,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vy,[2,27]),o($Vy,[2,28],{20:$Vt}),o($Vy,[2,29],{20:$Vo}),{8:131,9:130,12:$V0,13:12,15:129,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:134,9:133,12:$V0,13:12,15:132,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:136,8:135,9:137,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vy,[2,54]),o($Vy,[2,55],{20:$Vt}),o($Vy,[2,56],{20:$Vo}),o($Vy,[2,68]),o($Vy,[2,70],{20:$Vo}),o($Vy,[2,72],{20:$Vt}),o($Vy,[2,69]),o($Vy,[2,71],{20:$Vo}),o($Vy,[2,73],{20:$Vt}),{8:139,9:140,12:$V0,13:12,15:138,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:142,26:141,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,48:$Vg},{8:145,9:144,12:$V0,13:12,15:143,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:147,26:146,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,48:$Vg},{10:$Vi,12:$Vj,34:[1,148]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,149],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,150],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,36:[1,151]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,36:[1,152],37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,36:[1,153],37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:154,8:155,9:156,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:157,8:158,9:159,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:160,8:161,9:162,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:163,8:164,9:165,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,44:[1,166]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,46:[1,167]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,46:[1,168],47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,46:[1,169],47:$Vf,48:$Vg},{7:170,8:171,9:172,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{6:[1,173]},o($Vu,[2,8],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:56,9:57,8:58,14:$Vv,16:$Vw,18:$V1,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,9],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:43,8:44,9:174,14:$Vm,16:$Vn,18:$V1,20:$Vo,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,10],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:50,9:51,8:52,14:$Vr,16:$Vs,18:$V1,20:$Vt,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,11],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:56,9:57,8:58,14:$Vv,16:$Vw,18:$V1,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,12],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:43,8:44,9:174,14:$Vm,16:$Vn,18:$V1,20:$Vo,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,13],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:50,9:51,8:52,14:$Vr,16:$Vs,18:$V1,20:$Vt,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,14],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:56,9:57,8:58,14:$Vv,16:$Vw,18:$V1,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,15],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:43,8:44,9:174,14:$Vm,16:$Vn,18:$V1,20:$Vo,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,16],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:50,9:51,8:52,14:$Vr,16:$Vs,18:$V1,20:$Vt,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,17],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:56,9:57,8:58,14:$Vv,16:$Vw,18:$V1,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,18],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:43,8:44,9:174,14:$Vm,16:$Vn,18:$V1,20:$Vo,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,19],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:50,9:51,8:52,14:$Vr,16:$Vs,18:$V1,20:$Vt,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vy,[2,47]),o($Vy,[2,49],{20:$Vt}),o($Vy,[2,51],{20:$Vo}),o($Vy,[2,48]),o($Vy,[2,50],{20:$Vt}),o($Vy,[2,52],{20:$Vo}),o($Vy,[2,77]),o($Vy,[2,80],{20:$Vt}),o($Vy,[2,83],{20:$Vo}),o($Vu,[2,20],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:56,9:57,8:58,14:$Vv,16:$Vw,18:$V1,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,21],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:43,8:44,9:174,14:$Vm,16:$Vn,18:$V1,20:$Vo,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,22],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:50,9:51,8:52,14:$Vr,16:$Vs,18:$V1,20:$Vt,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,23],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:56,9:57,8:58,14:$Vv,16:$Vw,18:$V1,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,24],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:43,8:44,9:174,14:$Vm,16:$Vn,18:$V1,20:$Vo,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vu,[2,25],{19:13,22:14,27:15,17:16,28:20,26:22,39:23,29:24,37:33,13:50,9:51,8:52,14:$Vr,16:$Vs,18:$V1,20:$Vt,21:$V2,23:$V3,24:$V4,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,38:$Va,40:$Vb,43:$Vc,45:$Ve,47:$Vf,48:$Vg}),o($Vy,[2,39]),o($Vy,[2,41],{20:$Vt}),o($Vy,[2,43],{20:$Vo}),o($Vy,[2,40]),o($Vy,[2,42],{20:$Vt}),o($Vy,[2,44],{20:$Vo}),o($Vy,[2,76]),o($Vy,[2,79],{20:$Vt}),o($Vy,[2,82],{20:$Vo}),o($Vy,[2,30]),o($Vy,[2,32],{20:$Vt}),o($Vy,[2,34],{20:$Vo}),o($Vy,[2,31]),o($Vy,[2,33],{20:$Vt}),o($Vy,[2,35],{20:$Vo}),{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,175],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,34:[1,176]},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,177],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vz,[2,60]),o($Vz,[2,61],{20:$Vo}),o($Vz,[2,62],{20:$Vt}),o($Vz,[2,66]),o($Vz,[2,67]),o($Vy,[2,75]),o($Vy,[2,78],{20:$Vt}),o($Vy,[2,81],{20:$Vo}),o($Vx,[2,86]),o($Vx,[2,87]),o($Vx,[2,91]),o($Vx,[2,93]),o($Vx,[2,95]),o($Vx,[2,92]),o($Vx,[2,94]),o($Vx,[2,96]),{10:$Vi,12:$Vj,36:[1,178]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,36:[1,179],37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,36:[1,180],37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,34:[1,181]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,182],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,183],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,42:[1,184]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,42:[1,185],43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,42:[1,186],43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,36:[1,187]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,36:[1,188],37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,36:[1,189],37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vx,[2,102]),o($Vx,[2,103]),o($Vx,[2,111]),o($Vx,[2,119]),{10:$Vi,12:$Vj,36:[1,190]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,36:[1,191],37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,36:[1,192],37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{1:[2,1]},{20:$Vt},{33:[1,193]},{33:[1,194]},{33:[1,195]},o($Vx,[2,98]),o($Vx,[2,105]),o($Vx,[2,113]),o($Vx,[2,99]),o($Vx,[2,106]),o($Vx,[2,114]),{33:[1,196]},{33:[1,197]},{33:[1,198]},o($Vx,[2,101]),o($Vx,[2,110]),o($Vx,[2,118]),o($Vx,[2,104]),o($Vx,[2,112]),o($Vx,[2,120]),{7:200,8:199,9:201,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:202,8:204,9:203,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:205,8:207,9:206,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:208,8:209,9:210,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:211,8:212,9:87,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{7:213,8:86,9:214,11:7,12:$V0,13:12,15:10,17:16,18:$V1,19:13,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,215],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,34:[1,216]},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,217],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,34:[1,218]},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,219],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,220],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,34:[1,221]},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,222],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,223],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,34:[1,224]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,225],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,226],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,34:[1,227]},{8:44,9:40,10:$Vk,12:$Vl,13:43,14:$Vm,16:$Vn,17:16,18:$V1,19:13,20:$Vo,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,228],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},{10:$Vi,12:$Vj,34:[1,229]},{8:52,9:51,10:$Vp,12:$Vq,13:50,14:$Vr,16:$Vs,17:16,18:$V1,19:13,20:$Vt,21:$V2,22:14,23:$V3,24:$V4,26:22,27:15,28:20,29:24,30:$V5,31:$V6,32:$V7,33:$V8,34:[1,230],35:$V9,37:33,38:$Va,39:23,40:$Vb,43:$Vc,44:$Vd,45:$Ve,47:$Vf,48:$Vg},o($Vx,[2,132]),o($Vx,[2,124]),o($Vx,[2,129]),o($Vx,[2,123]),o($Vx,[2,125]),o($Vx,[2,127]),o($Vx,[2,126]),o($Vx,[2,128]),o($Vx,[2,130]),o($Vx,[2,100]),o($Vx,[2,108]),o($Vx,[2,116]),o($Vx,[2,107]),o($Vx,[2,109]),o($Vx,[2,115]),o($Vx,[2,117])],
	defaultActions: {3:[2,3],35:[2,97],37:[2,2],173:[2,1]},
	parseError: function parseError(str, hash) {
	    if (hash.recoverable) {
	        this.trace(str);
	    } else {
	        function _parseError (msg, hash) {
	            this.message = msg;
	            this.hash = hash;
	        }
	        _parseError.prototype = Error;

	        throw new _parseError(str, hash);
	    }
	},
	parse: function parse(input) {
	    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
	    var args = lstack.slice.call(arguments, 1);
	    var lexer = Object.create(this.lexer);
	    var sharedState = { yy: {} };
	    for (var k in this.yy) {
	        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
	            sharedState.yy[k] = this.yy[k];
	        }
	    }
	    lexer.setInput(input, sharedState.yy);
	    sharedState.yy.lexer = lexer;
	    sharedState.yy.parser = this;
	    if (typeof lexer.yylloc == 'undefined') {
	        lexer.yylloc = {};
	    }
	    var yyloc = lexer.yylloc;
	    lstack.push(yyloc);
	    var ranges = lexer.options && lexer.options.ranges;
	    if (typeof sharedState.yy.parseError === 'function') {
	        this.parseError = sharedState.yy.parseError;
	    } else {
	        this.parseError = Object.getPrototypeOf(this).parseError;
	    }
	    function popStack(n) {
	        stack.length = stack.length - 2 * n;
	        vstack.length = vstack.length - n;
	        lstack.length = lstack.length - n;
	    }
	    function lex() {
	        var token;
	        token = lexer.lex() || EOF;
	        if (typeof token !== 'number') {
	            token = self.symbols_[token] || token;
	        }
	        return token;
	    }
	    _token_stack:lex
	    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
	    while (true) {
	        state = stack[stack.length - 1];
	        if (this.defaultActions[state]) {
	            action = this.defaultActions[state];
	        } else {
	            if (symbol === null || typeof symbol == 'undefined') {
	                symbol = lex();
	            }
	            action = table[state] && table[state][symbol];
	        }
	                    if (typeof action === 'undefined' || !action.length || !action[0]) {
	                var errStr = '';
	                expected = [];
	                for (p in table[state]) {
	                    if (this.terminals_[p] && p > TERROR) {
	                        expected.push('\'' + this.terminals_[p] + '\'');
	                    }
	                }
	                if (lexer.showPosition) {
	                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
	                } else {
	                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
	                }
	                this.parseError(errStr, {
	                    text: lexer.match,
	                    token: this.terminals_[symbol] || symbol,
	                    line: lexer.yylineno,
	                    loc: yyloc,
	                    expected: expected
	                });
	            }
	        if (action[0] instanceof Array && action.length > 1) {
	            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
	        }
	        switch (action[0]) {
	        case 1:
	            stack.push(symbol);
	            vstack.push(lexer.yytext);
	            lstack.push(lexer.yylloc);
	            stack.push(action[1]);
	            symbol = null;
	            if (!preErrorSymbol) {
	                yyleng = lexer.yyleng;
	                yytext = lexer.yytext;
	                yylineno = lexer.yylineno;
	                yyloc = lexer.yylloc;
	                if (recovering > 0) {
	                    recovering--;
	                }
	            } else {
	                symbol = preErrorSymbol;
	                preErrorSymbol = null;
	            }
	            break;
	        case 2:
	            len = this.productions_[action[1]][1];
	            yyval.$ = vstack[vstack.length - len];
	            yyval._$ = {
	                first_line: lstack[lstack.length - (len || 1)].first_line,
	                last_line: lstack[lstack.length - 1].last_line,
	                first_column: lstack[lstack.length - (len || 1)].first_column,
	                last_column: lstack[lstack.length - 1].last_column
	            };
	            if (ranges) {
	                yyval._$.range = [
	                    lstack[lstack.length - (len || 1)].range[0],
	                    lstack[lstack.length - 1].range[1]
	                ];
	            }
	            r = this.performAction.apply(yyval, [
	                yytext,
	                yyleng,
	                yylineno,
	                sharedState.yy,
	                action[1],
	                vstack,
	                lstack
	            ].concat(args));
	            if (typeof r !== 'undefined') {
	                return r;
	            }
	            if (len) {
	                stack = stack.slice(0, -1 * len * 2);
	                vstack = vstack.slice(0, -1 * len);
	                lstack = lstack.slice(0, -1 * len);
	            }
	            stack.push(this.productions_[action[1]][0]);
	            vstack.push(yyval.$);
	            lstack.push(yyval._$);
	            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	            stack.push(newState);
	            break;
	        case 3:
	            return true;
	        }
	    }
	    return true;
	}};
	/* generated by jison-lex 0.3.4 */
	var lexer = (function(){
	var lexer = ({

	EOF:1,

	parseError:function parseError(str, hash) {
	        if (this.yy.parser) {
	            this.yy.parser.parseError(str, hash);
	        } else {
	            throw new Error(str);
	        }
	    },

	// resets the lexer, sets new input
	setInput:function (input, yy) {
	        this.yy = yy || this.yy || {};
	        this._input = input;
	        this._more = this._backtrack = this.done = false;
	        this.yylineno = this.yyleng = 0;
	        this.yytext = this.matched = this.match = '';
	        this.conditionStack = ['INITIAL'];
	        this.yylloc = {
	            first_line: 1,
	            first_column: 0,
	            last_line: 1,
	            last_column: 0
	        };
	        if (this.options.ranges) {
	            this.yylloc.range = [0,0];
	        }
	        this.offset = 0;
	        return this;
	    },

	// consumes and returns one char from the input
	input:function () {
	        var ch = this._input[0];
	        this.yytext += ch;
	        this.yyleng++;
	        this.offset++;
	        this.match += ch;
	        this.matched += ch;
	        var lines = ch.match(/(?:\r\n?|\n).*/g);
	        if (lines) {
	            this.yylineno++;
	            this.yylloc.last_line++;
	        } else {
	            this.yylloc.last_column++;
	        }
	        if (this.options.ranges) {
	            this.yylloc.range[1]++;
	        }

	        this._input = this._input.slice(1);
	        return ch;
	    },

	// unshifts one char (or a string) into the input
	unput:function (ch) {
	        var len = ch.length;
	        var lines = ch.split(/(?:\r\n?|\n)/g);

	        this._input = ch + this._input;
	        this.yytext = this.yytext.substr(0, this.yytext.length - len);
	        //this.yyleng -= len;
	        this.offset -= len;
	        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	        this.match = this.match.substr(0, this.match.length - 1);
	        this.matched = this.matched.substr(0, this.matched.length - 1);

	        if (lines.length - 1) {
	            this.yylineno -= lines.length - 1;
	        }
	        var r = this.yylloc.range;

	        this.yylloc = {
	            first_line: this.yylloc.first_line,
	            last_line: this.yylineno + 1,
	            first_column: this.yylloc.first_column,
	            last_column: lines ?
	                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
	                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
	              this.yylloc.first_column - len
	        };

	        if (this.options.ranges) {
	            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	        }
	        this.yyleng = this.yytext.length;
	        return this;
	    },

	// When called from action, caches matched text and appends it on next action
	more:function () {
	        this._more = true;
	        return this;
	    },

	// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
	reject:function () {
	        if (this.options.backtrack_lexer) {
	            this._backtrack = true;
	        } else {
	            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
	                text: "",
	                token: null,
	                line: this.yylineno
	            });

	        }
	        return this;
	    },

	// retain first n characters of the match
	less:function (n) {
	        this.unput(this.match.slice(n));
	    },

	// displays already matched input, i.e. for error messages
	pastInput:function () {
	        var past = this.matched.substr(0, this.matched.length - this.match.length);
	        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
	    },

	// displays upcoming input, i.e. for error messages
	upcomingInput:function () {
	        var next = this.match;
	        if (next.length < 20) {
	            next += this._input.substr(0, 20-next.length);
	        }
	        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	    },

	// displays the character position where the lexing error occurred, i.e. for error messages
	showPosition:function () {
	        var pre = this.pastInput();
	        var c = new Array(pre.length + 1).join("-");
	        return pre + this.upcomingInput() + "\n" + c + "^";
	    },

	// test the lexed token: return FALSE when not a match, otherwise return token
	test_match:function (match, indexed_rule) {
	        var token,
	            lines,
	            backup;

	        if (this.options.backtrack_lexer) {
	            // save context
	            backup = {
	                yylineno: this.yylineno,
	                yylloc: {
	                    first_line: this.yylloc.first_line,
	                    last_line: this.last_line,
	                    first_column: this.yylloc.first_column,
	                    last_column: this.yylloc.last_column
	                },
	                yytext: this.yytext,
	                match: this.match,
	                matches: this.matches,
	                matched: this.matched,
	                yyleng: this.yyleng,
	                offset: this.offset,
	                _more: this._more,
	                _input: this._input,
	                yy: this.yy,
	                conditionStack: this.conditionStack.slice(0),
	                done: this.done
	            };
	            if (this.options.ranges) {
	                backup.yylloc.range = this.yylloc.range.slice(0);
	            }
	        }

	        lines = match[0].match(/(?:\r\n?|\n).*/g);
	        if (lines) {
	            this.yylineno += lines.length;
	        }
	        this.yylloc = {
	            first_line: this.yylloc.last_line,
	            last_line: this.yylineno + 1,
	            first_column: this.yylloc.last_column,
	            last_column: lines ?
	                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
	                         this.yylloc.last_column + match[0].length
	        };
	        this.yytext += match[0];
	        this.match += match[0];
	        this.matches = match;
	        this.yyleng = this.yytext.length;
	        if (this.options.ranges) {
	            this.yylloc.range = [this.offset, this.offset += this.yyleng];
	        }
	        this._more = false;
	        this._backtrack = false;
	        this._input = this._input.slice(match[0].length);
	        this.matched += match[0];
	        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
	        if (this.done && this._input) {
	            this.done = false;
	        }
	        if (token) {
	            return token;
	        } else if (this._backtrack) {
	            // recover context
	            for (var k in backup) {
	                this[k] = backup[k];
	            }
	            return false; // rule action called reject() implying the next rule should be tested instead.
	        }
	        return false;
	    },

	// return next match in input
	next:function () {
	        if (this.done) {
	            return this.EOF;
	        }
	        if (!this._input) {
	            this.done = true;
	        }

	        var token,
	            match,
	            tempMatch,
	            index;
	        if (!this._more) {
	            this.yytext = '';
	            this.match = '';
	        }
	        var rules = this._currentRules();
	        for (var i = 0; i < rules.length; i++) {
	            tempMatch = this._input.match(this.rules[rules[i]]);
	            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                match = tempMatch;
	                index = i;
	                if (this.options.backtrack_lexer) {
	                    token = this.test_match(tempMatch, rules[i]);
	                    if (token !== false) {
	                        return token;
	                    } else if (this._backtrack) {
	                        match = false;
	                        continue; // rule action called reject() implying a rule MISmatch.
	                    } else {
	                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	                        return false;
	                    }
	                } else if (!this.options.flex) {
	                    break;
	                }
	            }
	        }
	        if (match) {
	            token = this.test_match(match, rules[index]);
	            if (token !== false) {
	                return token;
	            }
	            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	            return false;
	        }
	        if (this._input === "") {
	            return this.EOF;
	        } else {
	            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
	                text: "",
	                token: null,
	                line: this.yylineno
	            });
	        }
	    },

	// return next match that has a token
	lex:function lex() {
	        var r = this.next();
	        if (r) {
	            return r;
	        } else {
	            return this.lex();
	        }
	    },

	// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
	begin:function begin(condition) {
	        this.conditionStack.push(condition);
	    },

	// pop the previously active lexer condition state off the condition stack
	popState:function popState() {
	        var n = this.conditionStack.length - 1;
	        if (n > 0) {
	            return this.conditionStack.pop();
	        } else {
	            return this.conditionStack[0];
	        }
	    },

	// produce the lexer rule set which is active for the currently active lexer condition state
	_currentRules:function _currentRules() {
	        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
	            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	        } else {
	            return this.conditions["INITIAL"].rules;
	        }
	    },

	// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
	topState:function topState(n) {
	        n = this.conditionStack.length - 1 - Math.abs(n || 0);
	        if (n >= 0) {
	            return this.conditionStack[n];
	        } else {
	            return "INITIAL";
	        }
	    },

	// alias for begin(condition)
	pushState:function pushState(condition) {
	        this.begin(condition);
	    },

	// return the number of states currently on the stack
	stateStackSize:function stateStackSize() {
	        return this.conditionStack.length;
	    },
	options: {"flex":true},
	performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
	var YYSTATE=YY_START;
	switch($avoiding_name_collisions) {
	case 0:/* skip whitespace */
	break;
	case 1:/* skip \space */
	break;
	case 2:/* skip '\ ' */
	break;
	case 3:return "INT"
	break;
	case 4:return "FLOAT"
	break;
	case 5:return "^"
	break;
	case 6:return "*"
	break;
	case 7:return "*"
	break;
	case 8:return "*"
	break;
	case 9:return "*"
	break;
	case 10:return "/"
	break;
	case 11:return "/"
	break;
	case 12:return "-"
	break;
	case 13:return "-"
	break;
	case 14:return "+"
	break;
	case 15:return "^"
	break;
	case 16:return "("
	break;
	case 17:return ")"
	break;
	case 18:return "("
	break;
	case 19:return ")"
	break;
	case 20:return "["
	break;
	case 21:return "]"
	break;
	case 22:return "{"
	break;
	case 23:return "}"
	break;
	case 24:return "{"
	break;
	case 25:return "}"
	break;
	case 26:return "_"
	break;
	case 27:return "|"
	break;
	case 28:return "LEFT|"
	break;
	case 29:return "RIGHT|"
	break;
	case 30:return "!"
	break;
	case 31:return "SIGN"
	break;
	case 32:yy_.yytext = "<"; return "SIGN"
	break;
	case 33:yy_.yytext = ">"; return "SIGN"
	break;
	case 34:yy_.yytext = "<="; return "SIGN"
	break;
	case 35:yy_.yytext = ">="; return "SIGN"
	break;
	case 36:yy_.yytext = "<="; return "SIGN"
	break;
	case 37:yy_.yytext = ">="; return "SIGN"
	break;
	case 38:yy_.yytext = "<>"; return "SIGN"
	break;
	case 39:yy_.yytext = "<>"; return "SIGN"
	break;
	case 40:yy_.yytext = "<>"; return "SIGN"
	break;
	case 41:yy_.yytext = "<>"; return "SIGN"
	break;
	case 42:yy_.yytext = "<="; return "SIGN"
	break;
	case 43:yy_.yytext = ">="; return "SIGN"
	break;
	case 44:return "FRAC"
	break;
	case 45:return "FRAC"
	break;
	case 46:return "sqrt"
	break;
	case 47:return "abs"
	break;
	case 48:return "ln"
	break;
	case 49:return "log"
	break;
	case 50:return "TRIG"
	break;
	case 51:return "TRIG"
	break;
	case 52:return "TRIG"
	break;
	case 53:return "TRIG"
	break;
	case 54:yy_.yytext = "sin"; return "TRIG"
	break;
	case 55:yy_.yytext = "cos"; return "TRIG"
	break;
	case 56:yy_.yytext = "tan"; return "TRIG"
	break;
	case 57:yy_.yytext = "csc"; return "TRIG"
	break;
	case 58:yy_.yytext = "sec"; return "TRIG"
	break;
	case 59:yy_.yytext = "cot"; return "TRIG"
	break;
	case 60:yy_.yytext = "arcsin"; return "TRIG"
	break;
	case 61:yy_.yytext = "arccos"; return "TRIG"
	break;
	case 62:yy_.yytext = "arctan"; return "TRIG"
	break;
	case 63:yy_.yytext = "arccsc"; return "TRIG"
	break;
	case 64:yy_.yytext = "arcsec"; return "TRIG"
	break;
	case 65:yy_.yytext = "arccot"; return "TRIG"
	break;
	case 66:return "TRIGINV"
	break;
	case 67:return "TRIGINV"
	break;
	case 68:yy_.yytext = "sinh"; return "TRIG"
	break;
	case 69:yy_.yytext = "cosh"; return "TRIG"
	break;
	case 70:yy_.yytext = "tanh"; return "TRIG"
	break;
	case 71:yy_.yytext = "csch"; return "TRIG"
	break;
	case 72:yy_.yytext = "sech"; return "TRIG"
	break;
	case 73:yy_.yytext = "tanh"; return "TRIG"
	break;
	case 74:return "CONST"
	break;
	case 75:yy_.yytext = "pi"; return "CONST"
	break;
	case 76:yy_.yytext = "pi"; return "CONST"
	break;
	case 77:return "VAR"
	break;
	case 78:yy_.yytext = "theta"; return "VAR"
	break;
	case 79:yy_.yytext = "theta"; return "VAR"
	break;
	case 80:return "VAR"
	break;
	case 81:yy_.yytext = "phi"; return "VAR"
	break;
	case 82:yy_.yytext = "phi"; return "VAR"
	break;
	case 83:return yy.symbolLexer(yy_.yytext)
	break;
	case 84:return "EOF"
	break;
	case 85:return "INVALID"
	break;
	case 86:console.log(yy_.yytext);
	break;
	}
	},
	rules: [/^(?:\s+)/,/^(?:\\space)/,/^(?:\\ )/,/^(?:[0-9]+\.?)/,/^(?:([0-9]+)?\.[0-9]+)/,/^(?:\*\*)/,/^(?:\*)/,/^(?:\\cdot|·)/,/^(?:\\times|×)/,/^(?:\\ast)/,/^(?:\/)/,/^(?:\\div|÷)/,/^(?:-)/,/^(?:−)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:\\left\()/,/^(?:\\right\))/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:\\left\{)/,/^(?:\\right\})/,/^(?:_)/,/^(?:\|)/,/^(?:\\left\|)/,/^(?:\\right\|)/,/^(?:\!)/,/^(?:<=|>=|<>|<|>|=)/,/^(?:\\lt)/,/^(?:\\gt)/,/^(?:\\le)/,/^(?:\\ge)/,/^(?:\\leq)/,/^(?:\\geq)/,/^(?:=\/=)/,/^(?:\\ne)/,/^(?:\\neq)/,/^(?:≠)/,/^(?:≤)/,/^(?:≥)/,/^(?:\\frac)/,/^(?:\\dfrac)/,/^(?:sqrt|\\sqrt)/,/^(?:abs|\\abs)/,/^(?:ln|\\ln)/,/^(?:log|\\log)/,/^(?:sin|cos|tan)/,/^(?:csc|sec|cot)/,/^(?:sinh|cosh|tanh)/,/^(?:csch|sech|coth)/,/^(?:\\sin)/,/^(?:\\cos)/,/^(?:\\tan)/,/^(?:\\csc)/,/^(?:\\sec)/,/^(?:\\cot)/,/^(?:\\arcsin)/,/^(?:\\arccos)/,/^(?:\\arctan)/,/^(?:\\arccsc)/,/^(?:\\arcsec)/,/^(?:\\arccot)/,/^(?:arcsin|arccos|arctan)/,/^(?:arccsc|arcsec|arccot)/,/^(?:\\sinh)/,/^(?:\\cosh)/,/^(?:\\tanh)/,/^(?:\\csch)/,/^(?:\\sech)/,/^(?:\\coth)/,/^(?:pi)/,/^(?:π)/,/^(?:\\pi)/,/^(?:theta)/,/^(?:θ)/,/^(?:\\theta)/,/^(?:phi)/,/^(?:φ)/,/^(?:\\phi)/,/^(?:[a-zA-Z])/,/^(?:$)/,/^(?:.)/,/^(?:.)/],
	conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86],"inclusive":true}}
	});
	return lexer;
	})();
	parser.lexer = lexer;
	function Parser () {
	  this.yy = {};
	}
	Parser.prototype = parser;parser.Parser = Parser;
	return new Parser;
	})();

	KAS.parser = parser;
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	// this is a @generated file
	module.exports = function(KAS) {

	/* parser generated by jison 0.4.17 */
	/*
	  Returns a Parser object of the following structure:

	  Parser: {
	    yy: {}
	  }

	  Parser.prototype: {
	    yy: {},
	    trace: function(),
	    symbols_: {associative list: name ==> number},
	    terminals_: {associative list: number ==> name},
	    productions_: [...],
	    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
	    table: [...],
	    defaultActions: {...},
	    parseError: function(str, hash),
	    parse: function(input),

	    lexer: {
	        EOF: 1,
	        parseError: function(str, hash),
	        setInput: function(input),
	        input: function(),
	        unput: function(str),
	        more: function(),
	        less: function(n),
	        pastInput: function(),
	        upcomingInput: function(),
	        showPosition: function(),
	        test_match: function(regex_match_array, rule_index),
	        next: function(),
	        lex: function(),
	        begin: function(condition),
	        popState: function(),
	        _currentRules: function(),
	        topState: function(),
	        pushState: function(condition),

	        options: {
	            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
	            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
	            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
	        },

	        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
	        rules: [...],
	        conditions: {associative list: name ==> set},
	    }
	  }


	  token location info (@$, _$, etc.): {
	    first_line: n,
	    last_line: n,
	    first_column: n,
	    last_column: n,
	    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
	  }


	  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
	    text:        (matched text)
	    token:       (the produced terminal token, if any)
	    line:        (yylineno)
	  }
	  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
	    loc:         (yylloc)
	    expected:    (string describing the set of expected tokens)
	    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
	  }
	*/
	var parser = (function(){
	var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,9],$V2=[8,17],$V3=[6,11],$V4=[6,11,13,17];
	var parser = {trace: function trace() { },
	yy: {},
	symbols_: {"error":2,"unitvalue":3,"magnitude":4,"unit":5,"EOF":6,"float":7,"POW":8,"int":9,"multatoms":10,"DIV":11,"expatom":12,"MUL":13,"atom":14,"^":15,"nat":16,"ATOM":17,"FLOAT":18,"NAT":19,"NEG":20,"$accept":0,"$end":1},
	terminals_: {2:"error",6:"EOF",8:"POW",11:"DIV",13:"MUL",15:"^",17:"ATOM",18:"FLOAT",19:"NAT",20:"NEG"},
	productions_: [0,[3,3],[3,2],[4,3],[4,1],[5,3],[5,1],[10,3],[10,2],[10,1],[12,3],[12,1],[14,1],[7,1],[7,1],[16,1],[9,2],[9,1]],
	performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
	/* this == yyval */

	var $0 = $$.length - 1;
	switch (yystate) {
	case 1:

	            return {
	                type: "unitMagnitude",
	                magnitude: $$[$0-2],
	                unit: $$[$0-1],
	            };
	        
	break;
	case 2:

	            return {
	                type: "unitStandalone",
	                unit: $$[$0-1],
	            }
	        
	break;
	case 3:

	            this.$ = $$[$0-2] + "e" + $$[$0];
	        
	break;
	case 4: case 13: case 14: case 15: case 17:
	 this.$ = $$[$0]; 
	break;
	case 5:

	            this.$ = {
	                num: $$[$0-2],
	                denom: $$[$0],
	            };
	        
	break;
	case 6:

	            this.$ = {
	                num: $$[$0],
	                denom: null,
	            };
	        
	break;
	case 7:
	 this.$ = [$$[$0-2]].concat($$[$0]); 
	break;
	case 8:
	 this.$ = [$$[$0-1]].concat($$[$0]); 
	break;
	case 9:
	 this.$ = [$$[$0]]; 
	break;
	case 10:

	            this.$ = {
	                name: $$[$0-2],
	                pow: $$[$0],
	            };
	        
	break;
	case 11:

	            this.$ = {
	                name: $$[$0],
	                pow: 1,
	            };
	        
	break;
	case 12:
	 this.$ = yytext; 
	break;
	case 16:
	 this.$ = "-" + $$[$0]; 
	break;
	}
	},
	table: [{3:1,4:2,5:3,7:4,10:5,12:8,14:10,16:7,17:$V0,18:[1,6],19:$V1},{1:[3]},{5:12,10:5,12:8,14:10,17:$V0},{6:[1,13]},{8:[1,14],17:[2,4]},{6:[2,6],11:[1,15]},o($V2,[2,13]),o($V2,[2,14]),o($V3,[2,9],{12:8,14:10,10:17,13:[1,16],17:$V0}),o([6,8,11,13,17],[2,15]),o($V4,[2,11],{15:[1,18]}),o([6,11,13,15,17],[2,12]),{6:[1,19]},{1:[2,2]},{9:20,19:[1,22],20:[1,21]},{10:23,12:8,14:10,17:$V0},{10:24,12:8,14:10,17:$V0},o($V3,[2,8]),{16:25,19:$V1},{1:[2,1]},{17:[2,3]},{19:[1,26]},{17:[2,17]},{6:[2,5]},o($V3,[2,7]),o($V4,[2,10]),{17:[2,16]}],
	defaultActions: {13:[2,2],19:[2,1],20:[2,3],22:[2,17],23:[2,5],26:[2,16]},
	parseError: function parseError(str, hash) {
	    if (hash.recoverable) {
	        this.trace(str);
	    } else {
	        function _parseError (msg, hash) {
	            this.message = msg;
	            this.hash = hash;
	        }
	        _parseError.prototype = Error;

	        throw new _parseError(str, hash);
	    }
	},
	parse: function parse(input) {
	    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
	    var args = lstack.slice.call(arguments, 1);
	    var lexer = Object.create(this.lexer);
	    var sharedState = { yy: {} };
	    for (var k in this.yy) {
	        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
	            sharedState.yy[k] = this.yy[k];
	        }
	    }
	    lexer.setInput(input, sharedState.yy);
	    sharedState.yy.lexer = lexer;
	    sharedState.yy.parser = this;
	    if (typeof lexer.yylloc == 'undefined') {
	        lexer.yylloc = {};
	    }
	    var yyloc = lexer.yylloc;
	    lstack.push(yyloc);
	    var ranges = lexer.options && lexer.options.ranges;
	    if (typeof sharedState.yy.parseError === 'function') {
	        this.parseError = sharedState.yy.parseError;
	    } else {
	        this.parseError = Object.getPrototypeOf(this).parseError;
	    }
	    function popStack(n) {
	        stack.length = stack.length - 2 * n;
	        vstack.length = vstack.length - n;
	        lstack.length = lstack.length - n;
	    }
	    function lex() {
	        var token;
	        token = lexer.lex() || EOF;
	        if (typeof token !== 'number') {
	            token = self.symbols_[token] || token;
	        }
	        return token;
	    }
	    _token_stack:lex
	    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
	    while (true) {
	        state = stack[stack.length - 1];
	        if (this.defaultActions[state]) {
	            action = this.defaultActions[state];
	        } else {
	            if (symbol === null || typeof symbol == 'undefined') {
	                symbol = lex();
	            }
	            action = table[state] && table[state][symbol];
	        }
	                    if (typeof action === 'undefined' || !action.length || !action[0]) {
	                var errStr = '';
	                expected = [];
	                for (p in table[state]) {
	                    if (this.terminals_[p] && p > TERROR) {
	                        expected.push('\'' + this.terminals_[p] + '\'');
	                    }
	                }
	                if (lexer.showPosition) {
	                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
	                } else {
	                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
	                }
	                this.parseError(errStr, {
	                    text: lexer.match,
	                    token: this.terminals_[symbol] || symbol,
	                    line: lexer.yylineno,
	                    loc: yyloc,
	                    expected: expected
	                });
	            }
	        if (action[0] instanceof Array && action.length > 1) {
	            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
	        }
	        switch (action[0]) {
	        case 1:
	            stack.push(symbol);
	            vstack.push(lexer.yytext);
	            lstack.push(lexer.yylloc);
	            stack.push(action[1]);
	            symbol = null;
	            if (!preErrorSymbol) {
	                yyleng = lexer.yyleng;
	                yytext = lexer.yytext;
	                yylineno = lexer.yylineno;
	                yyloc = lexer.yylloc;
	                if (recovering > 0) {
	                    recovering--;
	                }
	            } else {
	                symbol = preErrorSymbol;
	                preErrorSymbol = null;
	            }
	            break;
	        case 2:
	            len = this.productions_[action[1]][1];
	            yyval.$ = vstack[vstack.length - len];
	            yyval._$ = {
	                first_line: lstack[lstack.length - (len || 1)].first_line,
	                last_line: lstack[lstack.length - 1].last_line,
	                first_column: lstack[lstack.length - (len || 1)].first_column,
	                last_column: lstack[lstack.length - 1].last_column
	            };
	            if (ranges) {
	                yyval._$.range = [
	                    lstack[lstack.length - (len || 1)].range[0],
	                    lstack[lstack.length - 1].range[1]
	                ];
	            }
	            r = this.performAction.apply(yyval, [
	                yytext,
	                yyleng,
	                yylineno,
	                sharedState.yy,
	                action[1],
	                vstack,
	                lstack
	            ].concat(args));
	            if (typeof r !== 'undefined') {
	                return r;
	            }
	            if (len) {
	                stack = stack.slice(0, -1 * len * 2);
	                vstack = vstack.slice(0, -1 * len);
	                lstack = lstack.slice(0, -1 * len);
	            }
	            stack.push(this.productions_[action[1]][0]);
	            vstack.push(yyval.$);
	            lstack.push(yyval._$);
	            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	            stack.push(newState);
	            break;
	        case 3:
	            return true;
	        }
	    }
	    return true;
	}};
	/* generated by jison-lex 0.3.4 */
	var lexer = (function(){
	var lexer = ({

	EOF:1,

	parseError:function parseError(str, hash) {
	        if (this.yy.parser) {
	            this.yy.parser.parseError(str, hash);
	        } else {
	            throw new Error(str);
	        }
	    },

	// resets the lexer, sets new input
	setInput:function (input, yy) {
	        this.yy = yy || this.yy || {};
	        this._input = input;
	        this._more = this._backtrack = this.done = false;
	        this.yylineno = this.yyleng = 0;
	        this.yytext = this.matched = this.match = '';
	        this.conditionStack = ['INITIAL'];
	        this.yylloc = {
	            first_line: 1,
	            first_column: 0,
	            last_line: 1,
	            last_column: 0
	        };
	        if (this.options.ranges) {
	            this.yylloc.range = [0,0];
	        }
	        this.offset = 0;
	        return this;
	    },

	// consumes and returns one char from the input
	input:function () {
	        var ch = this._input[0];
	        this.yytext += ch;
	        this.yyleng++;
	        this.offset++;
	        this.match += ch;
	        this.matched += ch;
	        var lines = ch.match(/(?:\r\n?|\n).*/g);
	        if (lines) {
	            this.yylineno++;
	            this.yylloc.last_line++;
	        } else {
	            this.yylloc.last_column++;
	        }
	        if (this.options.ranges) {
	            this.yylloc.range[1]++;
	        }

	        this._input = this._input.slice(1);
	        return ch;
	    },

	// unshifts one char (or a string) into the input
	unput:function (ch) {
	        var len = ch.length;
	        var lines = ch.split(/(?:\r\n?|\n)/g);

	        this._input = ch + this._input;
	        this.yytext = this.yytext.substr(0, this.yytext.length - len);
	        //this.yyleng -= len;
	        this.offset -= len;
	        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	        this.match = this.match.substr(0, this.match.length - 1);
	        this.matched = this.matched.substr(0, this.matched.length - 1);

	        if (lines.length - 1) {
	            this.yylineno -= lines.length - 1;
	        }
	        var r = this.yylloc.range;

	        this.yylloc = {
	            first_line: this.yylloc.first_line,
	            last_line: this.yylineno + 1,
	            first_column: this.yylloc.first_column,
	            last_column: lines ?
	                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
	                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
	              this.yylloc.first_column - len
	        };

	        if (this.options.ranges) {
	            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	        }
	        this.yyleng = this.yytext.length;
	        return this;
	    },

	// When called from action, caches matched text and appends it on next action
	more:function () {
	        this._more = true;
	        return this;
	    },

	// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
	reject:function () {
	        if (this.options.backtrack_lexer) {
	            this._backtrack = true;
	        } else {
	            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
	                text: "",
	                token: null,
	                line: this.yylineno
	            });

	        }
	        return this;
	    },

	// retain first n characters of the match
	less:function (n) {
	        this.unput(this.match.slice(n));
	    },

	// displays already matched input, i.e. for error messages
	pastInput:function () {
	        var past = this.matched.substr(0, this.matched.length - this.match.length);
	        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
	    },

	// displays upcoming input, i.e. for error messages
	upcomingInput:function () {
	        var next = this.match;
	        if (next.length < 20) {
	            next += this._input.substr(0, 20-next.length);
	        }
	        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	    },

	// displays the character position where the lexing error occurred, i.e. for error messages
	showPosition:function () {
	        var pre = this.pastInput();
	        var c = new Array(pre.length + 1).join("-");
	        return pre + this.upcomingInput() + "\n" + c + "^";
	    },

	// test the lexed token: return FALSE when not a match, otherwise return token
	test_match:function (match, indexed_rule) {
	        var token,
	            lines,
	            backup;

	        if (this.options.backtrack_lexer) {
	            // save context
	            backup = {
	                yylineno: this.yylineno,
	                yylloc: {
	                    first_line: this.yylloc.first_line,
	                    last_line: this.last_line,
	                    first_column: this.yylloc.first_column,
	                    last_column: this.yylloc.last_column
	                },
	                yytext: this.yytext,
	                match: this.match,
	                matches: this.matches,
	                matched: this.matched,
	                yyleng: this.yyleng,
	                offset: this.offset,
	                _more: this._more,
	                _input: this._input,
	                yy: this.yy,
	                conditionStack: this.conditionStack.slice(0),
	                done: this.done
	            };
	            if (this.options.ranges) {
	                backup.yylloc.range = this.yylloc.range.slice(0);
	            }
	        }

	        lines = match[0].match(/(?:\r\n?|\n).*/g);
	        if (lines) {
	            this.yylineno += lines.length;
	        }
	        this.yylloc = {
	            first_line: this.yylloc.last_line,
	            last_line: this.yylineno + 1,
	            first_column: this.yylloc.last_column,
	            last_column: lines ?
	                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
	                         this.yylloc.last_column + match[0].length
	        };
	        this.yytext += match[0];
	        this.match += match[0];
	        this.matches = match;
	        this.yyleng = this.yytext.length;
	        if (this.options.ranges) {
	            this.yylloc.range = [this.offset, this.offset += this.yyleng];
	        }
	        this._more = false;
	        this._backtrack = false;
	        this._input = this._input.slice(match[0].length);
	        this.matched += match[0];
	        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
	        if (this.done && this._input) {
	            this.done = false;
	        }
	        if (token) {
	            return token;
	        } else if (this._backtrack) {
	            // recover context
	            for (var k in backup) {
	                this[k] = backup[k];
	            }
	            return false; // rule action called reject() implying the next rule should be tested instead.
	        }
	        return false;
	    },

	// return next match in input
	next:function () {
	        if (this.done) {
	            return this.EOF;
	        }
	        if (!this._input) {
	            this.done = true;
	        }

	        var token,
	            match,
	            tempMatch,
	            index;
	        if (!this._more) {
	            this.yytext = '';
	            this.match = '';
	        }
	        var rules = this._currentRules();
	        for (var i = 0; i < rules.length; i++) {
	            tempMatch = this._input.match(this.rules[rules[i]]);
	            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                match = tempMatch;
	                index = i;
	                if (this.options.backtrack_lexer) {
	                    token = this.test_match(tempMatch, rules[i]);
	                    if (token !== false) {
	                        return token;
	                    } else if (this._backtrack) {
	                        match = false;
	                        continue; // rule action called reject() implying a rule MISmatch.
	                    } else {
	                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	                        return false;
	                    }
	                } else if (!this.options.flex) {
	                    break;
	                }
	            }
	        }
	        if (match) {
	            token = this.test_match(match, rules[index]);
	            if (token !== false) {
	                return token;
	            }
	            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	            return false;
	        }
	        if (this._input === "") {
	            return this.EOF;
	        } else {
	            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
	                text: "",
	                token: null,
	                line: this.yylineno
	            });
	        }
	    },

	// return next match that has a token
	lex:function lex() {
	        var r = this.next();
	        if (r) {
	            return r;
	        } else {
	            return this.lex();
	        }
	    },

	// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
	begin:function begin(condition) {
	        this.conditionStack.push(condition);
	    },

	// pop the previously active lexer condition state off the condition stack
	popState:function popState() {
	        var n = this.conditionStack.length - 1;
	        if (n > 0) {
	            return this.conditionStack.pop();
	        } else {
	            return this.conditionStack[0];
	        }
	    },

	// produce the lexer rule set which is active for the currently active lexer condition state
	_currentRules:function _currentRules() {
	        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
	            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	        } else {
	            return this.conditions["INITIAL"].rules;
	        }
	    },

	// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
	topState:function topState(n) {
	        n = this.conditionStack.length - 1 - Math.abs(n || 0);
	        if (n >= 0) {
	            return this.conditionStack[n];
	        } else {
	            return "INITIAL";
	        }
	    },

	// alias for begin(condition)
	pushState:function pushState(condition) {
	        this.begin(condition);
	    },

	// return the number of states currently on the stack
	stateStackSize:function stateStackSize() {
	        return this.conditionStack.length;
	    },
	options: {},
	performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
	var YYSTATE=YY_START;
	switch($avoiding_name_collisions) {
	case 0:return 11;
	break;
	case 1:return '(';
	break;
	case 2:return ')';
	break;
	case 3:return 8;
	break;
	case 4:return 15;
	break;
	case 5:return 13;
	break;
	case 6:return 18;
	break;
	case 7:return 19;
	break;
	case 8:return 20;
	break;
	case 9:return 17;
	break;
	case 10:return 17;
	break;
	case 11:return 17;
	break;
	case 12:/* skip whitespace */
	break;
	case 13:return 6;
	break;
	}
	},
	rules: [/^(?:\/)/,/^(?:\()/,/^(?:\))/,/^(?:(\*|x|\u00d7|\u2219|\u22c5|\u00b7)\s*10\s*\^)/,/^(?:\^)/,/^(?:\*)/,/^(?:[0-9]+\.[0-9]+)/,/^(?:[0-9]+)/,/^(?:-)/,/^(?:\u00b0( ?)[cCfF])/,/^(?:fl\.? oz\.?)/,/^(?:[\u00b5]?([A-Za-z-]+|[\u2103\u2109\u212b]))/,/^(?:\s+)/,/^(?:$)/],
	conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}}
	});
	return lexer;
	})();
	parser.lexer = lexer;
	function Parser () {
	  this.yy = {};
	}
	Parser.prototype = parser;parser.Parser = Parser;
	return new Parser;
	})();

	KAS.unitParser = parser;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* TODO(charlie): fix these lint errors (http://eslint.org/docs/rules): */

	var _ = __webpack_require__(58);
	module.exports = function(KAS) {

	/*  The node hierarcy is as follows:

	    (Expr)
	        (Seq)           2+ children
	            Add
	            Mul
	        Pow             2 children
	        Log             2 children
	        Eq              2 children
	        Trig            1 child
	        Abs             1 child
	        (Symbol)
	            Func        1 child     e.g. f(x)
	            Var         leaf node   e.g. x, x_n
	            Const       leaf node   e.g. pi, e, <i>
	            Unit        leaf node   e.g. kg
	        (Num)           leaf node
	            Rational                e.g. 2/3
	                Int
	            Float

	    (abstract, not meant to be instantiated)

	    == Key design concepts ==
	    Functional: All methods return new nodes - nodes are never mutated.
	    Ignore commutativity: Commutative inputs should be parsed equivalently.
	    Exploit commutativity: Output should take advantage of ordering.
	*/

	/* non user-facing functions */

	// assert that all abstract methods have been overridden
	var abstract = function() {
	    // Try to give people a bit of information when this happens
	    throw new Error("Abstract method - must override for expr: " +
	            this.print());
	};

	// throw an error that is meant to be caught by the test suite (not user facing)
	var error = function(message) { throw new Error(message); };

	// reliably detect NaN
	var isNaN = function(object) { return object !== object; };

	// return a random float between min (inclusive) and max (exclusive),
	// not that inclusivity means much, probabilistically, on floats
	var randomFloat = function(min, max) {
	    var extent = max - min;
	    return Math.random() * extent + min;
	};

	/* constants */
	var ITERATIONS = 12;
	var TOLERANCE = 9; // decimal places


	/* abstract base expression node */
	function Expr() {}

	_.extend(Expr.prototype, {

	    // this node's immediate constructor
	    func: abstract,

	    // an array of the arguments to this node's immediate constructor
	    args: abstract,

	    // make a new node with the given arguments
	    construct: function(args) {
	        var instance = new this.func();
	        this.func.apply(instance, args);
	        return instance;
	    },

	    // an abstraction for chainable, bottom-up recursion
	    recurse: function(method) {
	        var passed = Array.prototype.slice.call(arguments, 1);
	        var args = _.map(this.args(), function(arg) {
	            return _.isString(arg) ? arg : arg[method].apply(arg, passed);
	        });
	        return this.construct(args);
	    },

	    // evaluate numerically with given variable mapping
	    eval: abstract,

	    codegen: abstract,

	    compile: function() {
	        var code = this.codegen();
	        try {
	            return new Function("vars", "return " + code + ";");
	        } catch (e) {
	            throw new Error("Function did not compile: " + code);
	        }
	    },

	    // returns a string unambiguously representing the expression
	    // should be valid as input
	    // e.g. this.equals(parse(this.print())) === true
	    print: abstract,

	    // returns a TeX string representing the expression
	    tex: abstract,

	    // returns a TeX string, modified by the given options
	    asTex: function(options) {

	        options = options || {};
	        _.defaults(options, {
	            display: true,
	            dynamic: true,
	            times: false
	        });

	        var tex = this.tex();

	        if (options.display) {
	            tex = "\\displaystyle " + tex;
	        }
	        if (options.dynamic) {
	            tex = tex.replace(/\(/g, "\\left(");
	            tex = tex.replace(/\)/g, "\\right)");
	        }
	        if (options.times) {
	            tex = tex.replace(/\\cdot/g, "\\times");
	        }

	        return tex;
	    },

	    // returns the name of this expression's constructor as a string
	    // only used for testing and debugging (the ugly regex is for IE8)
	    name: function() {
	        if (this.func.name) {
	            return this.func.name;
	        } else {
	            return this.func.toString().match(/^function\s*([^\s(]+)/)[1];
	        }
	    },

	    // returns a string representing current node structure
	    repr: function() {
	        return this.name() + "(" + _.map(this.args(), function(arg) {
	            return _.isString(arg) ? arg : arg.repr();
	        }).join(",") + ")";
	    },

	    // removes all negative signs
	    strip: function() { return this.recurse("strip"); },

	    // canonically reorders all commutative elements
	    normalize: function() { return this.recurse("normalize"); },

	    // expands the expression
	    expand: function() { return this.recurse("expand"); },

	    // naively factors out like terms
	    factor: function(options) { return this.recurse("factor", options); },

	    // collect all like terms
	    collect: function(options) { return this.recurse("collect", options); },

	    // strict syntactic equality check
	    equals: function(other) {
	        return this.normalize().print() === other.normalize().print();
	    },

	    // expand and collect until the expression no longer changes
	    simplify: function(options) {
	        options = _.extend({
	            once: false
	        }, options);

	        // Attempt to factor and collect
	        var step1 = this.factor(options);
	        var step2 = step1.collect(options);

	        // Rollback if collect didn't do anything
	        if (step1.equals(step2)) {
	            step2 = this.collect(options);
	        }

	        // Attempt to expand and collect
	        var step3 = step2.expand(options);
	        var step4 = step3.collect(options);

	        // Rollback if collect didn't do anything
	        if (step3.equals(step4)) {
	            step4 = step2.collect(options);
	        }

	        // One round of simplification complete
	        var simplified = step4;

	        if (options.once || this.equals(simplified)) {
	            return simplified;
	        } else {
	            return simplified.simplify(options);
	        }
	    },

	    // check whether this expression is simplified
	    isSimplified: function() {
	        return this.equals(this.simplify());
	    },

	    // return the child nodes of this node
	    exprArgs: function() {
	        return _.filter(this.args(), function(arg) {
	            return arg instanceof Expr;
	        });
	    },

	    // return the variables (function and non) within the expression
	    getVars: function(excludeFunc) {
	        return _.uniq(_.flatten(_.invoke(this.exprArgs(), "getVars", excludeFunc))).sort();
	    },

	    getConsts: function() {
	        return _.uniq(_.flatten(_.invoke(this.exprArgs(), "getConsts"))).sort();
	    },

	    getUnits: function() {
	        return _.flatten(_.invoke(this.exprArgs(), "getUnits"));
	    },

	    // check whether this expression node is of a particular type
	    is: function(func) {
	        return this instanceof func;
	    },

	    // check whether this expression has a particular node type
	    has: function(func) {
	        if (this instanceof func) {
	            return true;
	        }
	        return _.any(this.exprArgs(), function(arg) { return arg.has(func); });
	    },

	    // raise this expression to a given exponent
	    // most useful for eventually implementing i^3 = -i, etc.
	    raiseToThe: function(exp) {
	        return new Pow(this, exp);
	    },

	    // does this expression have a specific rendering hint?
	    // rendering hints are picked up while parsing, but are lost during transformations
	    isSubtract: function() { return false; },
	    isDivide:  function() { return false; },
	    isRoot:  function() { return false; },

	    // whether this node needs an explicit multiplication sign if following a Num
	    needsExplicitMul: function() {
	        return this.args()[0].needsExplicitMul();
	    },

	    // check that the variables in both expressions are the same
	    sameVars: function(other) {
	        var vars1 = this.getVars();
	        var vars2 = other.getVars();

	        // the other Expr can have more variables than this one
	        // this lets you multiply equations by other variables
	        var same = function(array1, array2) {
	            return !_.difference(array1, array2).length;
	        };

	        var lower = function(array) {
	            return _.uniq(_.invoke(array, "toLowerCase")).sort();
	        };

	        var equal = same(vars1, vars2);
	        var equalIgnoringCase = same(lower(vars1), lower(vars2));

	        return {equal: equal, equalIgnoringCase: equalIgnoringCase};
	    },

	    // semantic equality check, call after sameVars() to avoid potential false positives
	    // plug in random numbers for the variables in both expressions
	    // if they both consistently evaluate the same, then they're the same
	    compare: function(other) {
	        // equation comparisons are handled by Eq.compare()
	        if (other instanceof Eq) {
	            return false;
	        }

	        var varList = _.union(
	            this.getVars(/* excludeFunc */ true),
	            other.getVars(/* excludeFunc */ true));

	        // If the numbers are large we would like to do a relative comparison
	        // rather than an absolute one, but if they're small enough then an
	        // absolute comparison makes more sense
	        var getDelta = function(num1, num2) {
	            if (Math.abs(num1) < 1 || Math.abs(num2) < 1) {
	                return Math.abs(num1 - num2);
	            } else {
	                return Math.abs(1 - num1 / num2);
	            }
	        };

	        var equalNumbers = function(num1, num2) {
	            var delta = getDelta(num1, num2);
	            return ((num1 === num2) || /* needed if either is +/- Infinity */
	                    (isNaN(num1) && isNaN(num2)) ||
	                    (delta < Math.pow(10, -TOLERANCE)));
	        };

	        // if no variables, only need to evaluate once
	        if (!varList.length && !this.has(Unit) && !other.has(Unit)) {
	            return equalNumbers(this.eval(), other.eval());
	        }

	        // collect here to avoid sometimes dividing by zero, and sometimes not
	        // it is better to be deterministic, e.g. x/x -> 1
	        // TODO(alex): may want to keep track of assumptions as they're made
	        var expr1 = this.collect();
	        var expr2 = other.collect();

	        var unitList1 = this.getUnits();
	        var unitList2 = other.getUnits();
	        if (!_.isEqual(unitList1, unitList2)) {
	            return false;
	        }

	        // Compare at a set number (currently 12) of points to determine
	        // equality.
	        //
	        // `range` (and `vars`) is the only variable that varies through the
	        // iterations. For each of range = 10, 100, and 1000, each random
	        // variable is picked from (-range, range).
	        //
	        // Note that because there are 12 iterations and three ranges, each
	        // range is checked four times.
	        for (var i = 0; i < ITERATIONS; i++) {

	            var vars = {};

	            // One third total iterations each with range 10, 100, and 1000
	            var range = Math.pow(10, 1 + Math.floor(3 * i / ITERATIONS));

	            // Half of the iterations should only use integer values.
	            // This is because expressions like (-2)^x are common but result
	            // in NaN when evaluated in JS with non-integer values of x.
	            // Without this, (-2)^x and (-2)^(x+1) both end up always being NaN
	            // and thus equivalent. With this, the most common failure case is
	            // avoided. However, less common cases such as (-2)^(x+0.1) and
	            // (-2)^(x+1.1) will still both evaluate to NaN and result in a
	            // false positive.
	            //
	            // Note that the above is only true in vanilla JS Number-land,
	            // which has no concept of complex numbers. The solution is simple:
	            // Integrate a library for handling complex numbers.
	            //
	            // TODO(alex): Add support for complex numbers, then remove this.
	            var useFloats = i % 2 === 0;

	            _.each(varList, function(v) {
	                vars[v] = useFloats ? randomFloat(-range, range)
	                                    : _.random(-range, range);
	            });

	            var equal;
	            if (expr1.has(Func) || expr2.has(Func) ||
	                    expr1.has(Unit) || expr2.has(Unit)) {

	                var result1 = expr1.partialEval(vars);
	                var result2 = expr2.partialEval(vars);

	                equal = result1.simplify().equals(result2.simplify());
	            } else {
	                var result1 = expr1.eval(vars);
	                var result2 = expr2.eval(vars);

	                equal = equalNumbers(result1, result2);
	            }

	            if (!equal) {
	                return false;
	            }
	        }

	        return true;
	    },

	    // evaluate as much of the expression as possible
	    partialEval: function(vars) {
	        if (this instanceof Unit) {
	            return this;
	        } else if (!this.has(Func)) {
	            return new Float(this.eval(vars).toFixed(TOLERANCE)).collect();
	        } else if (this instanceof Func) {
	            return new Func(this.symbol, this.arg.partialEval(vars));
	        } else {
	            return this.recurse("partialEval", vars);
	        }
	    },

	    // check that the structure of both expressions is the same
	    // all negative signs are stripped and the expressions are converted to
	    // a canonical commutative form
	    // should only be done after compare() returns true to avoid false positives
	    sameForm: function(other) {
	        return this.strip().equals(other.strip());
	    },

	    // returns the GCD of this expression and the given factor
	    findGCD: function(factor) {
	        return this.equals(factor) ? factor : Num.One;
	    },

	    // return this expression's denominator
	    getDenominator: function() {
	        return Num.One;
	    },

	    // return this expression as a Mul
	    asMul: function() {
	        return new Mul(Num.One, this);
	    },

	    // TODO(alex): rename to isDefinitePositive or similar?
	    // return whether this expression is 100% positive
	    isPositive: abstract,

	    // TODO(alex): rename to hasNegativeSign or similar?
	    // return whether this expression has a negative sign
	    isNegative: function() { return false; },

	    // return a factor of this expression that is 100% positive
	    asPositiveFactor: function() {
	        return this.isPositive() ? this : Num.One;
	    },

	    // return a copy of the expression with a new hint set (preserves hints)
	    addHint: function(hint) {
	        if (!hint) {
	            return this;
	        }

	        var expr = this.construct(this.args());
	        expr.hints = _.clone(this.hints);
	        expr.hints[hint] = true;
	        return expr;
	    },

	    hints: {
	        parens: false
	    },

	    // currently unused!
	    asExpr: function() { return this; },

	    // complete parse by performing a few necessary transformations
	    completeParse: function() { return this.recurse("completeParse"); },

	    abs: abstract,

	    negate: function() {
	        return new Mul(Num.Neg, this);
	    }
	});


	/* abstract sequence node */
	function Seq() {}
	Seq.prototype = new Expr();

	_.extend(Seq.prototype, {
	    args: function() { return this.terms; },

	    normalize: function() {
	        var terms = _.sortBy(_.invoke(this.terms, "normalize"), function(term) {
	            return term.print();
	        });

	        return new this.func(terms);
	    },

	    expand: function() {
	        return this.recurse("expand").flatten();
	    },

	    // partition the sequence into its numeric and non-numeric parts
	    // makes no guarantees about the validity of either part!
	    partition: function() {
	        var terms = _.groupBy(this.terms, function(term) {
	            return term instanceof Num;
	        });

	        // XXX using a boolean as a key just converts it to a string. I don't
	        // think this code was written with that in mind. Probably doesn't
	        // matter except for readability.
	        var numbers = terms[true] || [];
	        var others = terms[false] || [];

	        return [new this.func(numbers), new this.func(others)];
	    },

	    // ensure that sequences have 2+ terms and no nested sequences of the same type
	    // this is a shallow flattening and will return a non-Seq if terms.length <= 1
	    flatten: function() {
	        var type = this;
	        var terms = _.reject(this.terms, function(term) {
	            return term.equals(type.identity);
	        });

	        if (terms.length === 0) {
	            return type.identity;
	        }
	        if (terms.length === 1) {
	            return terms[0];
	        }

	        var grouped = _.groupBy(terms, function(term) {
	            return term instanceof type.func;
	        });

	        // same contains the children which are Seqs of the same type as this Seq
	        var same = grouped[true] || [];
	        var others = grouped[false] || [];

	        var flattened = others.concat(_.flatten(_.pluck(same, "terms"), /* shallow: */ true));
	        return new type.func(flattened);
	    },

	    // the identity associated with the sequence
	    identity: undefined,

	    // reduce a numeric sequence to a Num
	    reduce: abstract,

	    isPositive: function() {
	        var terms = _.invoke(this.terms, "collect");
	        return _.all(_.invoke(terms, "isPositive"));
	    },

	    // return a new Seq with a given term replaced by a different term
	    // (or array of terms). given term can be passed directly, or by index
	    // if no new term is provided, the old one is simply removed
	    replace: function(oldTerm, newTerm) {
	        var index;

	        if (oldTerm instanceof Expr) {
	            index = _.indexOf(this.terms, oldTerm);
	        } else {
	            index = oldTerm;
	        }

	        var newTerms = [];
	        if (_.isArray(newTerm)) {
	            newTerms = newTerm;
	        } else if (newTerm) {
	            newTerms = [newTerm];
	        }

	        var terms = this.terms.slice(0, index)
	                    .concat(newTerms)
	                    .concat(this.terms.slice(index + 1));

	        return new this.func(terms);
	    },

	    // syntactic sugar for replace()
	    remove: function(term) {
	        return this.replace(term);
	    },

	    getDenominator: function() {
	        // TODO(alex): find and return LCM
	        return new Mul(_.invoke(this.terms, "getDenominator")).flatten();
	    }
	});


	/* sequence of additive terms */
	function Add() {
	    if (arguments.length === 1) {
	        this.terms = arguments[0];
	    } else {
	        this.terms = _.toArray(arguments);
	    }
	}
	Add.prototype = new Seq();

	_.extend(Add.prototype, {
	    func: Add,

	    eval: function(vars, options) {
	        return _.reduce(this.terms, function(memo, term) { return memo + term.eval(vars, options); }, 0);
	    },

	    codegen: function() {
	        return _.map(this.terms, function(term) {
	            return "(" + term.codegen() + ")";
	        }).join(" + ") || "0";
	    },

	    print: function() {
	        return _.invoke(this.terms, "print").join("+");
	    },

	    tex: function() {
	        var tex = "";

	        _.each(this.terms, function(term) {
	            if (!tex || term.isSubtract()) {
	                tex += term.tex();
	            } else {
	                tex += "+" + term.tex();
	            }
	        });

	        return tex;
	    },

	    collect: function(options) {
	        var terms = _.invoke(this.terms, "collect", options);

	        // [Expr expr, Num coefficient]
	        var pairs = [];

	        _.each(terms, function(term) {
	            if (term instanceof Mul) {
	                var muls = term.partition();
	                pairs.push([muls[1].flatten(), muls[0].reduce(options)]);
	            } else if (term instanceof Num) {
	                pairs.push([Num.One, term]);
	            } else {
	                pairs.push([term, Num.One]);
	            }
	        });

	        // { (Expr expr).print(): [[Expr expr, Num coefficient]] }
	        var grouped = _.groupBy(pairs, function(pair) {
	            return pair[0].normalize().print();
	        });

	        var collected = _.compact(_.map(grouped, function(pairs) {
	            var expr = pairs[0][0];
	            var sum = new Add(_.zip.apply(_, pairs)[1]);
	            var coefficient = sum.reduce(options);
	            return new Mul(coefficient, expr).collect(options);
	        }));

	        // TODO(alex): use the Pythagorean identity here
	        // e.g. x*sin^2(y) + x*cos^2(y) -> x

	        return new Add(collected).flatten();
	    },

	    // naively factor out anything that is common to all terms
	    // if options.keepNegative is specified, won't factor out a common -1
	    factor: function(options) {
	        options = _.extend({
	            keepNegative: false
	        }, options);

	        var terms = _.invoke(this.terms, "collect");
	        var factors;

	        if (terms[0] instanceof Mul) {
	            factors = terms[0].terms;
	        } else {
	            factors = [terms[0]];
	        }

	        _.each(_.rest(this.terms), function(term) {
	            factors = _.map(factors, function(factor) {
	                return term.findGCD(factor);
	            });
	        });

	        if (!options.keepNegative && this.isNegative()) {
	            factors.push(Num.Neg);
	        }

	        factors = new Mul(factors).flatten().collect();

	        var remainder = _.map(terms, function(term) {
	            return Mul.handleDivide(term, factors).simplify();
	        });
	        remainder = new Add(remainder).flatten();

	        return Mul.createOrAppend(factors, remainder).flatten();
	    },

	    reduce: function(options) {
	        return _.reduce(this.terms, function(memo, term) {
	            return memo.add(term, options);
	        }, this.identity);
	    },

	    needsExplicitMul: function() { return false; },

	    isNegative: function() {
	        var terms = _.invoke(this.terms, "collect");
	        return _.all(_.invoke(terms, "isNegative"));
	    },

	    negate: function() {
	        return new Add(_.invoke(this.terms, "negate"));
	    }
	});


	/* sequence of multiplicative terms */
	function Mul() {
	    if (arguments.length === 1) {
	        this.terms = arguments[0];
	    } else {
	        this.terms = _.toArray(arguments);
	    }
	}
	Mul.prototype = new Seq();

	_.extend(Mul.prototype, {
	    func: Mul,

	    eval: function(vars, options) {
	        return _.reduce(this.terms, function(memo, term) { return memo * term.eval(vars, options); }, 1);
	    },

	    codegen: function() {
	        return _.map(this.terms, function(term) {
	            return "(" + term.codegen() + ")";
	        }).join(" * ") || "0";
	    },

	    print: function() {
	        return _.map(this.terms, function(term) {
	            return (term instanceof Add) ? "(" + term.print() + ")" : term.print();
	        }).join("*");
	    },

	    getUnits: function() {
	        var tmUnits = _(this.terms)
	            .chain()
	            .map(function(term) {
	                return term.getUnits();
	            })
	            .flatten()
	            .value();

	        tmUnits.sort(function(a, b) {
	            return a.unit < b.unit;
	        });

	        return tmUnits;
	    },

	    // since we don't care about commutativity, we can render a Mul any way we choose
	    // so we follow convention: first any negatives, then any numbers, then everything else
	    tex: function() {
	        var cdot = " \\cdot ";

	        var terms = _.groupBy(this.terms, function(term) {
	            if (term.isDivide()) {
	                return "inverse";
	            } else if (term instanceof Num) {
	                return "number";
	            } else {
	                return "other";
	            }
	        });

	        var inverses = terms.inverse || [];
	        var numbers = terms.number || [];
	        var others = terms.other || [];

	        var negatives = "";
	        var numerator;

	        // check all the numbers to see if there is a rational we can extract,
	        // since we would like 1/2x/y to come out as \frac{1}{2}\frac{x}{y},
	        // and not \frac{1x}{2y}.
	        for (var i = 0; i < numbers.length; i++) {
	            var isRational = numbers[i] instanceof Rational &&
	                                !(numbers[i] instanceof Int);
	            if (isRational && others.length > 0 && inverses.length > 0) {
	                var withThisRemoved = numbers.slice();
	                withThisRemoved.splice(i, 1);
	                var newTerms = withThisRemoved.concat(inverses).concat(others);
	                return numbers[i].tex() + new Mul(newTerms).tex();
	            }
	        }

	        numbers = _.compact(_.map(numbers, function(term) {
	            var hasDenom = (term instanceof Rational) && !(term instanceof Int);
	            var shouldPushDown = !term.hints.fraction || inverses.length > 0;
	            if (hasDenom && shouldPushDown) {
	                // e.g. 3x/4 -> 3/4*x (internally) -> 3x/4 (rendered)
	                inverses.push(new Pow(new Int(term.d), Num.Div));
	                var number = new Int(term.n);
	                number.hints = term.hints;
	                return _.any(term.hints) ? number : null;
	            } else {
	                return term;
	            }
	        }));

	        if (numbers.length === 0 && others.length === 1) {
	            // e.g. (x+y)/z -> \frac{x+y}{z}
	            numerator = others[0].tex();
	        } else {
	            var tex = "";

	            _.each(numbers, function(term) {
	                if (term.hints.subtract && term.hints.entered) {
	                    negatives += "-";
	                    tex += (tex ? cdot : "") + term.abs().tex();
	                } else if ((term instanceof Int) && (term.n === -1) &&
	                    (term.hints.negate || term.hints.subtract)) {
	                    // e.g. -1*-1 -> --1
	                    // e.g. -1*x -> -x
	                    negatives += "-";
	                } else {
	                    // e.g. 2*3 -> 2(dot)3
	                    tex += (tex ? cdot : "") + term.tex();
	                }
	            });

	            _.each(others, function(term) {
	                if (term.needsExplicitMul()) {
	                    // e.g. 2*2^3 -> 2(dot)2^3
	                    tex += (tex ? cdot : "") + term.tex();
	                } else if (term instanceof Add) {
	                    // e.g. (a+b)*c -> (a+b)c
	                    tex += "(" + term.tex() + ")";
	                } else {
	                    // e.g. a*b*c -> abc
	                    tex += term.tex();
	                }
	            });

	            numerator = tex ? tex : "1";
	        }

	        if (!inverses.length) {
	            return negatives + numerator;
	        } else {
	            var denominator = new Mul(_.invoke(inverses, "asDivide")).flatten().tex();
	            return negatives + "\\frac{" + numerator + "}{" + denominator + "}";
	        }
	    },

	    strip: function() {
	        var terms = _.map(this.terms, function(term) {
	            return term instanceof Num ? term.abs() : term.strip();
	        });
	        return new Mul(terms).flatten();
	    },

	    // expand numerator and denominator separately
	    expand: function() {

	        var isAdd = function(term) {
	            return term instanceof Add;
	        };

	        var isInverse = function(term) {
	            return term instanceof Pow && term.exp.isNegative();
	        };

	        var isInverseAdd = function(term) {
	            return isInverse(term) && isAdd(term.base);
	        };

	        var mul = this.recurse("expand").flatten();

	        var hasAdd = _.any(mul.terms, isAdd);
	        var hasInverseAdd = _.any(mul.terms, isInverseAdd);

	        if (!(hasAdd || hasInverseAdd)) {
	            return mul;
	        }

	        var terms = _.groupBy(mul.terms, isInverse);
	        var normals = terms[false] || [];
	        var inverses = terms[true] || [];

	        if (hasAdd) {
	            var grouped = _.groupBy(normals, isAdd);
	            var adds = grouped[true] || [];
	            var others = grouped[false] || [];

	            // loop over each additive sequence
	            var expanded = _.reduce(adds, function(expanded, add) {
	                // loop over each expanded array of terms
	                return _.reduce(expanded, function(temp, array) {
	                    // loop over each additive sequence's terms
	                    return temp.concat(_.map(add.terms, function(term) {
	                        return array.concat(term);
	                    }));
	                }, []);
	            }, [[]]);

	            // join each fully expanded array of factors with remaining multiplicative factors
	            var muls = _.map(expanded, function(array) {
	                return new Mul(others.concat(array)).flatten();
	            });

	            normals = [new Add(muls)];
	        }

	        if (hasInverseAdd) {
	            var denominator = new Mul(_.invoke(inverses, "getDenominator")).flatten();
	            inverses = [new Pow(denominator.expand(), Num.Div)];
	        }

	        return new Mul(normals.concat(inverses)).flatten();
	    },

	    factor: function(options) {
	        var factored = this.recurse("factor", options).flatten();
	        if (! (factored instanceof Mul)) {
	            return factored;
	        }

	        // Combine any factored out Rationals into one, but don't collect
	        var grouped = _.groupBy(factored.terms, function(term) {
	            return term instanceof Rational;
	        });

	        // Could also accomplish this by passing a new option
	        // e.g. return  memo.mul(term, {autocollect: false});
	        // TODO(alex): Decide whether this is a good use of options or not
	        var rational = _.reduce(grouped[true], function(memo, term) {
	            return {n: memo.n * term.n, d: memo.d * term.d};
	        }, {n: 1, d: 1});

	        if (rational.d === 1) {
	            rational = new Int(rational.n);
	        } else {
	            rational = new Rational(rational.n, rational.d);
	        }

	        return new Mul((grouped[false] || []).concat(rational)).flatten();
	    },

	    collect: function(options) {
	        var partitioned = this.recurse("collect", options).partition();
	        var number = partitioned[0].reduce(options);

	        // e.g. 0*x -> 0
	        if (number.eval() === 0) {
	            return Num.Zero;
	        }

	        var others = partitioned[1].flatten();

	        // e.g. 2*2 -> 4
	        // e.g. 2*2*x -> 4*x
	        if (!(others instanceof Mul)) {
	            return new Mul(number, others).flatten();
	        }

	        others = others.terms;

	        // [Expr base, Expr exp]
	        var pairs = [];

	        _.each(others, function(term) {
	            if (term instanceof Pow) {
	                pairs.push([term.base, term.exp]);
	            } else {
	                pairs.push([term, Num.One]);
	            }
	        });

	        // {(Expr base).print(): [[Expr base, Expr exp]]}
	        var grouped = _.groupBy(pairs, function(pair) {
	            return pair[0].normalize().print();
	        });

	        // [[Expr base, Expr exp]]
	        var summed = _.compact(_.map(grouped, function(pairs) {
	            var base = pairs[0][0];
	            var sum = new Add(_.zip.apply(_, pairs)[1]);
	            var exp = sum.collect(options);

	            if (exp instanceof Num && exp.eval() === 0) {
	                return null;
	            } else {
	                return [base, exp];
	            }
	        }));

	        // XXX `pairs` is shadowed four or five times in this function
	        var pairs = _.groupBy(summed, function(pair) {
	            if (pair[0] instanceof Trig && pair[0].isBasic()) {
	                return "trig";
	            } else if (pair[0] instanceof Log) {
	                return "log";
	            } else {
	                return "expr";
	            }
	        });
	        var trigs = pairs.trig || [];
	        var logs = pairs.log || [];
	        var exprs = pairs.expr || [];

	        if (trigs.length > 1) {
	            // combine sines and cosines into other trig functions

	            // {Trig.arg.print(): [[Trig base, Expr exp]]}
	            var byArg = _.groupBy(trigs, function(pair) {
	                return pair[0].arg.normalize().print();
	            });

	            trigs = [];
	            _.each(byArg, function(pairs) {
	                var arg = pairs[0][0].arg;

	                // {Trig.type: Expr exp}
	                var funcs = {sin: Num.Zero, cos: Num.Zero};
	                _.each(pairs, function(pair) {
	                    funcs[pair[0].type] = pair[1];
	                });

	                if (Mul.handleNegative(funcs.sin).collect(options).equals(funcs.cos)) {
	                    // e.g. sin^x(y)/cos^x(y) -> tan^x(y)
	                    if (funcs.cos.isNegative()) {
	                        funcs = {tan: funcs.sin};
	                    } else {
	                        funcs = {cot: funcs.cos};
	                    }
	                }

	                // TODO(alex): combine even if exponents not a perfect match
	                // TODO(alex): transform 1/sin and 1/cos into csc and sec

	                _.each(funcs, function(exp, type) {
	                    trigs.push([new Trig(type, arg), exp]);
	                });
	            });
	        }

	        if (logs.length > 1) {
	            // combine logs with the same base

	            // {Log.base.print(): [[Log base, Expr exp]]}
	            var byBase = _.groupBy(logs, function(pair) {
	                return pair[0].base.normalize().print();
	            });

	            logs = [];

	            _.each(byBase, function(pairs) {
	                // only combine two logs of the same base, otherwise commutative
	                // differences result in different equally valid output
	                // e.g. ln(x)/ln(z)*ln(y) -> log_z(x)*ln(y)
	                // e.g. ln(x)*ln(y)/ln(z) -> ln(x)*log_z(y)
	                if (pairs.length === 2 &&
	                    Mul.handleNegative(pairs[0][1]).collect(options).equals(pairs[1][1])) {
	                    // e.g. ln(x)^y/ln(b)^y -> log_b(x)^y
	                    if (pairs[0][1].isNegative()) {
	                        logs.push([new Log(pairs[0][0].power, pairs[1][0].power), pairs[1][1]]);
	                    } else {
	                        logs.push([new Log(pairs[1][0].power, pairs[0][0].power), pairs[0][1]]);
	                    }
	                } else {
	                    logs = logs.concat(pairs);
	                }
	            });

	            // TODO(alex): combine if all inverses are the same e.g. ln(y)*ln(z)/ln(x)/ln(x)
	        }

	        pairs = trigs.concat(logs).concat(exprs);

	        var collected = _.map(pairs, function(pair) {
	            return new Pow(pair[0], pair[1]).collect(options);
	        });

	        return new Mul([number].concat(collected)).flatten();
	    },

	    isSubtract: function() {
	        return _.any(this.terms, function(term) {
	            return term instanceof Num && term.hints.subtract;
	        });
	    },

	    // factor a single -1 in to the Mul
	    // combine with a Num if all Nums are positive, else add as a term
	    factorIn: function(hint) {
	        var partitioned = this.partition();
	        var numbers = partitioned[0].terms;
	        var fold = numbers.length && _.all(numbers, function(num) {
	            return num.n > 0;
	        });

	        if (fold) {
	            // e.g. - x*2*3 -> x*-2*3
	            var num = numbers[0].negate();
	            num.hints = numbers[0].hints;
	            return this.replace(numbers[0], num.addHint(hint));
	        } else {
	            // e.g. - x*y -> -1*x*y
	            // e.g. - x*-2 -> -1*x*-2
	            return new Mul([Num.negativeOne(hint)].concat(this.terms));
	        }
	    },

	    // factor out a single hinted -1 (assume it is the division hint)
	    // TODO(alex): make more general or rename to be more specific
	    factorOut: function() {
	        var factored = false;
	        var terms = _.compact(_.map(this.terms, function(term, i, list) {
	            if (!factored && term instanceof Num && term.hints.divide) {
	                factored = true;
	                return term.n !== -1 ? term.negate() : null;
	            } else {
	                return term;
	            }
	        }));

	        if (terms.length === 1) {
	            return terms[0];
	        } else {
	            return new Mul(terms);
	        }
	    },

	    reduce: function(options) {
	        return _.reduce(this.terms, function(memo, term) {
	            return memo.mul(term, options);
	        }, this.identity);
	    },

	    findGCD: function(factor) {
	        return new Mul(_.invoke(this.terms, "findGCD", factor)).flatten();
	    },

	    asMul: function() {
	        return this;
	    },

	    asPositiveFactor: function() {
	        if (this.isPositive()) {
	            return this;
	        } else {
	            var terms = _.invoke(this.collect().terms, "asPositiveFactor");
	            return new Mul(terms).flatten();
	        }
	    },

	    isNegative: function() {
	        return _.any(_.invoke(this.collect().terms, "isNegative"));
	    },

	    fold: function() {
	        return Mul.fold(this);
	    },

	    negate: function() {
	        var isNum = function(expr) { return expr instanceof Num; };
	        if (_.any(this.terms, isNum)) {
	            var num = _.find(this.terms, isNum);
	            return this.replace(num, num.negate());
	        } else {
	            return new Mul([Num.Neg].concat(this.terms));
	        }
	    }
	});

	// static methods for the sequence types
	_.each([Add, Mul], function(type) {
	    _.extend(type, {
	        // create a new sequence unless left is already one (returns a copy)
	        createOrAppend: function(left, right) {
	            if (left instanceof type) {
	                return new type(left.terms.concat(right));
	            } else {
	                return new type(left, right);
	            }
	        }
	    });
	});

	_.extend(Mul, {
	    // negative signs should be folded into numbers whenever possible
	    // never fold into a Num that's already negative or a Mul that has a negative Num
	    // an optional hint is kept track of to properly render user input
	    // an empty hint means negation
	    handleNegative: function(expr, hint) {
	        if (expr instanceof Num && expr.n > 0) {
	            // e.g. - 2 -> -2
	            var negated = expr.negate();
	            // TODO(alex): rework hint system so that this isn't necessary
	            negated.hints = expr.hints;
	            return negated.addHint(hint);
	        } else if (expr instanceof Mul) {
	            // e.g. - x*2*3 -> x*-2*3
	            // e.g. - x*y -> -1*x*y
	            // e.g. - x*-2 -> -1*x*-2
	            return expr.factorIn(hint);
	        } else {
	            // e.g. - x -> -1*x
	            return new Mul(Num.negativeOne(hint), expr);
	        }
	    },

	    // division can create either a Rational or a Mul
	    handleDivide: function(left, right) {

	        // dividing by a Mul is the same as repeated division by its terms
	        if (right instanceof Mul) {
	            var first = Mul.handleDivide(left, right.terms[0]);
	            var rest = new Mul(_.rest(right.terms)).flatten();
	            return Mul.handleDivide(first, rest);
	        }

	        var isInt = function(expr) { return expr instanceof Int; };
	        var isRational = function(expr) { return expr instanceof Rational; };

	        // for simplification purposes, fold Ints into Rationals if possible
	        // e.g. 3x / 4 -> 3/4 * x (will still render as 3x/4)
	        if (isInt(right) && left instanceof Mul && _.any(left.terms, isInt)) {

	            // search from the right
	            var reversed = left.terms.slice().reverse();
	            var num = _.find(reversed, isRational);

	            if (!isInt(num)) {
	                return new Mul(left.terms.concat([new Rational(1, right.n).addHint("fraction")]));
	            }

	            var rational = new Rational(num.n, right.n);
	            rational.hints = num.hints;

	            // in the case of something like 1/3 * 6/8, we want the
	            // 6/8 to be considered a fraction, not just a division
	            if (num === reversed[0]) {
	                rational = rational.addHint("fraction");
	            }

	            var result;
	            if (num.n < 0 && right.n < 0) {
	                rational.d = -rational.d;
	                return left.replace(num, [Num.Neg, rational]);
	            } else {
	                return left.replace(num, rational);
	            }
	        }

	        var divide = function(a, b) {
	            if (b instanceof Int) {
	                if (a instanceof Int) {
	                    if (a.n < 0 && b.n < 0) {
	                        // e.g. -2 / -3 -> -1*-2/3
	                        return [Num.Neg, new Rational(a.n, -b.n).addHint("fraction")];
	                    } else {
	                        // e.g. 2 / 3 -> 2/3
	                        // e.g. -2 / 3 -> -2/3
	                        // e.g. 2 / -3 -> -2/3
	                        return [new Rational(a.n, b.n).addHint("fraction")];
	                    }
	                } else {
	                    // e.g. x / 3 -> x*1/3
	                    // e.g. x / -3 -> x*-1/3
	                    var inverse = new Rational(1, b.eval());
	                    if (b.eval() < 0) {
	                        return [a, inverse.addHint("negate")];
	                    } else {
	                        return [a, inverse];
	                    }
	                }
	            } else {
	                var pow;

	                if (b instanceof Trig && b.exp) {
	                    // e.g. sin^2(x) -> sin(x)^2
	                    var exp = b.exp;
	                    b.exp = undefined;
	                    b = new Pow(b, exp);
	                }

	                if (b instanceof Pow) {
	                    // e.g. (x^2) ^ -1 -> x^-2
	                    // e.g. (x^y) ^ -1 -> x^(-1*y)
	                    // e.g. (x^(yz)) ^ -1 -> x^(-1*y*z)
	                    pow = new Pow(b.base, Mul.handleNegative(b.exp, "divide"));
	                } else {
	                    // e.g. x ^ -1 -> x^-1
	                    pow = new Pow(b, Num.Div);
	                }

	                if (a instanceof Int && a.n === 1) {
	                    // e.g. 1 / x -> x^-1
	                    return [pow];
	                } else {
	                    // e.g. 2 / x -> 2*x^-1
	                    return [a, pow];
	                }
	            }
	        };

	        if (left instanceof Mul) {
	            var divided = divide(_.last(left.terms), right);
	            return new Mul(_.initial(left.terms).concat(divided));
	        } else {
	            var divided = divide(left, right);
	            return new Mul(divided).flatten();
	        }
	    },

	    // fold negative signs into numbers if possible
	    // negative signs are not the same as multiplying by negative one!
	    // e.g. -x      ->  -1*x    simplified
	    // e.g. -2*x    ->  -2*x    simplified
	    // e.g. -x*2    ->  -1*x*2  not simplified -> x*-2 simplified
	    // e.g. -1*x*2  ->  -1*x*2  not simplified

	    // also fold multiplicative terms into open Trig and Log nodes
	    // e.g. (sin x)*x -> sin(x)*x
	    // e.g. sin(x)*x -> sin(x)*x
	    // e.g. sin(x)*(x) -> sin(x)*x
	    // e.g. sin(x)*sin(y) -> sin(x)*sin(y)
	    fold: function(expr) {
	        if (expr instanceof Mul) {
	            // assuming that this will be second to last
	            var trigLog = _.find(_.initial(expr.terms), function(term) {
	                return (term instanceof Trig || term instanceof Log) && term.hints.open;
	            });
	            var index = _.indexOf(expr.terms, trigLog);

	            if (trigLog) {
	                var last = _.last(expr.terms);
	                if (trigLog.hints.parens || last.hints.parens ||
	                          last.has(Trig) || last.has(Log)) {
	                    trigLog.hints.open = false;
	                } else {
	                    var newTrigLog;
	                    if (trigLog instanceof Trig) {
	                        newTrigLog = Trig.create([trigLog.type, trigLog.exp], Mul.createOrAppend(trigLog.arg, last).fold());
	                    } else {
	                        newTrigLog = Log.create(trigLog.base, Mul.createOrAppend(trigLog.power, last).fold());
	                    }

	                    if (index === 0) {
	                        return newTrigLog;
	                    } else {
	                        return new Mul(expr.terms.slice(0, index).concat(newTrigLog)).fold();
	                    }
	                }
	            }

	            var partitioned = expr.partition();
	            var numbers = partitioned[0].terms;

	            var pos = function(num) { return num.n > 0; };
	            var neg = function(num) { return num.n === -1 && num.hints.negate; };
	            var posOrNeg = function(num) { return pos(num) || neg(num); };

	            if (numbers.length > 1 &&
	                _.some(numbers, neg) &&
	                _.some(numbers, pos) &&
	                _.every(numbers, posOrNeg)) {

	                var firstNeg = _.indexOf(expr.terms, _.find(expr.terms, neg));
	                var firstNum = _.indexOf(expr.terms, _.find(expr.terms, pos));

	                // e.g. -x*2 -> x*-2
	                if (firstNeg < firstNum) {
	                    return expr.replace(firstNum,
	                                        expr.terms[firstNum].negate())
	                               .remove(firstNeg);
	                }
	            }
	        }

	        // in all other cases, make no change
	        return expr;
	    }
	});


	/* exponentiation */
	function Pow(base, exp) { this.base = base; this.exp = exp; }
	Pow.prototype = new Expr();

	_.extend(Pow.prototype, {
	    func: Pow,
	    args: function() { return [this.base, this.exp]; },

	    eval: function(vars, options) {
	        var evaledBase = this.base.eval(vars, options);
	        var evaledExp = this.exp.eval(vars, options);

	        // Math.pow unequivocally returns NaN when provided with both a
	        // negative base and a fractional exponent. However, in some cases, we
	        // know that our exponent is actually valid for use with negative
	        // bases (e.g., (-5)^(1/3)).
	        //
	        // Here, we explicitly check for such cases. We really only handle a
	        // limited subset (by requiring that the exponent is rational with an
	        // odd denominator), but it's still useful.
	        //   See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
	        if (evaledBase < 0) {
	            var simplifiedExp = this.exp.simplify();

	            // If Float, convert to a Rational to enable the logic below
	            if (simplifiedExp instanceof Float) {
	                var num = simplifiedExp.n;
	                var decimals = (num - num.toFixed()).toString().length - 2;
	                var denominator = Math.pow(10, decimals);
	                var rationalExp = new Rational(num * denominator, denominator);
	                simplifiedExp = rationalExp.simplify();
	            }
	            if (simplifiedExp instanceof Rational) {
	                var oddDenominator = Math.abs(simplifiedExp.d) % 2 === 1;
	                if (oddDenominator) {
	                    var oddNumerator = Math.abs(simplifiedExp.n) % 2 === 1;
	                    var sign = (oddNumerator) ? -1 : 1;
	                    return sign * Math.pow(-1 * evaledBase, evaledExp);
	                }
	            }
	        }
	        return Math.pow(evaledBase, evaledExp);
	    },

	    getUnits: function() {
	        return this.base.getUnits().map(function(unit) {
	            return {
	                unit: unit.unit,
	                pow: unit.pow * this.exp.n
	            };
	        }.bind(this));
	    },

	    codegen: function() {
	        return "Math.pow(" + this.base.codegen() +
	            ", " + this.exp.codegen() + ")";
	    },

	    print: function() {
	        var base = this.base.print();
	        if (this.base instanceof Seq || this.base instanceof Pow) {
	            base = "(" + base + ")";
	        }
	        return base + "^(" + this.exp.print() + ")";
	    },

	    tex: function() {
	        if (this.isDivide()) {

	            // e.g. x ^ -1 w/hint -> 1/x
	            return "\\frac{1}{" + this.asDivide().tex() + "}";

	        } else if (this.isRoot()) {

	            if (this.exp.n !== 1) {
	                error("Node marked with hint 'root' does not have exponent " +
	                      "of form 1/x.");
	            }

	            if (this.exp.d === 2) {
	                // e.g. x ^ 1/2 w/hint -> sqrt{x}
	                return "\\sqrt{" + this.base.tex() + "}";
	            } else {
	                // e.g. x ^ 1/y w/hint -> sqrt[y]{x}
	                return "\\sqrt[" + this.exp.d + "]{" + this.base.tex() + "}";
	            }

	        } else if (this.base instanceof Trig && !this.base.isInverse() &&
	            this.exp instanceof Num && this.exp.isSimple() &&
	            this.exp.eval() >= 0) {

	            // e.g sin(x) ^ 2 -> sin^2(x)
	            var split = this.base.tex({split: true});
	            return split[0] + "^{" + this.exp.tex() + "}" + split[1];

	        } else {

	            // e.g. x ^ y -> x^y
	            var base = this.base.tex();
	            if (this.base instanceof Seq || this.base instanceof Pow ||
	                (this.base instanceof Num && !this.base.isSimple())) {
	                // e.g. a+b ^ c -> (a+b)^c
	                base = "(" + base + ")";
	            } else if (this.base instanceof Trig || this.base instanceof Log) {
	                // e.g. ln(x) ^ 2 -> [ln(x)]^2
	                base = "[" + base + "]";
	            }
	            return base + "^{" + this.exp.tex() + "}";
	        }
	    },

	    needsExplicitMul: function() {
	        return this.isRoot() ? false : this.base.needsExplicitMul();
	    },

	    expand: function() {
	        var pow = this.recurse("expand");

	        if (pow.base instanceof Mul) {
	            // e.g. (ab)^c -> a^c*b^c

	            var terms = _.map(pow.base.terms, function(term) {
	                return new Pow(term, pow.exp);
	            });

	            return new Mul(terms).expand();

	        } else if (pow.base instanceof Add && pow.exp instanceof Int && pow.exp.abs().eval() > 1) {
	            // e.g. (a+b)^2 -> a*a+a*b+a*b+b*b
	            // e.g. (a+b)^-2 -> (a*a+a*b+a*b+b*b)^-1

	            var positive = pow.exp.eval() > 0;
	            var n = pow.exp.abs().eval();

	            var signed = function(mul) {
	                return positive ? mul : new Pow(mul, Num.Div);
	            };

	            // compute and cache powers of 2 up to n
	            var cache = { 1: pow.base };
	            for (var i = 2; i <= n; i *= 2) {
	                var mul = new Mul(cache[i / 2], cache[i / 2]);
	                cache[i] = mul.expand().collect();
	            }

	            // if n is a power of 2, you're done!
	            if (_.has(cache, n)) {
	                return signed(cache[n]);
	            }

	            // otherwise decompose n into powers of 2 ...
	            var indices = _.map(n.toString(2).split(""), function(str, i, list) {
	                return Number(str) * Math.pow(2, list.length - i - 1);
	            });
	            indices = _.without(indices, 0);

	            // ... then combine
	            var mul = new Mul(_.pick(cache, indices)).expand().collect();
	            return signed(mul);

	        } else if (pow.exp instanceof Add) { // DEFINITELY want behind super-simplify() flag
	            // e.g. x^(a+b) -> x^a*x^b

	            var terms = _.map(pow.exp.terms, function(term) {
	                return new Pow(pow.base, term).expand();
	            });

	            return new Mul(terms).expand();
	        } else {
	            return pow;
	        }
	    },

	    factor: function() {
	        var pow = this.recurse("factor");
	        if (pow.base instanceof Mul) {
	            var terms = _.map(pow.base.terms, function(term) {
	                if (term instanceof Int && pow.exp.equals(Num.Div)) {
	                    // Anything that can be a Rational should be a Rational
	                    // e.g. 2^(-1) -> 1/2
	                    return new Rational(1, term.n);
	                } else {
	                    return new Pow(term, pow.exp);
	                }
	            });
	            return new Mul(terms);
	        } else {
	            return pow;
	        }
	    },

	    collect: function(options) {

	        if (this.base instanceof Pow) {
	            // collect this first to avoid having to deal with float precision
	            // e.g. sqrt(2)^2 -> 2, not 2.0000000000000004
	            // e.g. (x^y)^z -> x^(yz)
	            var base = this.base.base;
	            var exp = Mul.createOrAppend(this.base.exp, this.exp);
	            return new Pow(base, exp).collect(options);
	        }

	        var pow = this.recurse("collect", options);

	        var isSimilarLog = function(term) {
	            return term instanceof Log && term.base.equals(pow.base);
	        };

	        if (pow.exp instanceof Num &&
	            pow.exp.eval() === 0) {

	            // e.g. x^0 -> 1
	            return Num.One;

	        } else if (pow.exp instanceof Num &&
	            pow.exp.eval() === 1) {

	            // e.g. x^1 -> x
	            return pow.base;

	        } else if (isSimilarLog(pow.exp)) {

	            // e.g. b^(log_b(x)) -> x
	            return pow.exp.power;

	        } else if (pow.exp instanceof Mul &&
	            _.any(pow.exp.terms, isSimilarLog)) {

	            // e.g. b^(2*y*log_b(x)) -> x^(2*y)
	            var log = _.find(pow.exp.terms, isSimilarLog);
	            var base = log.power;
	            var exp = pow.exp.remove(log).flatten();
	            return new Pow(base, exp).collect(options);

	        } else if (pow.base instanceof Num &&
	            pow.exp instanceof Num) {

	            // TODO(alex): Consider encapsualting this logic (and similar logic
	            // elsewhere) into a separate Decimal class for user-entered floats
	            if (options && options.preciseFloats) {
	                // Avoid creating an imprecise float
	                // e.g. 23^1.5 -> 12167^0.5, not ~110.304

	                // If you take the root as specified by the denominator and
	                // end up with more digits after the decimal point,
	                // the result is imprecise. This works for rationals as well
	                // as floats, but ideally rationals should be pre-processed
	                // e.g. (1/27)^(1/3) -> 1/3 to avoid most cases.
	                // TODO(alex): Catch such cases and avoid converting to floats.
	                var exp = pow.exp.asRational();
	                var decimalsInBase = pow.base.getDecimalPlaces();
	                var root = new Pow(pow.base, new Rational(1, exp.d));
	                var decimalsInRoot = root.collect().getDecimalPlaces();

	                if (decimalsInRoot > decimalsInBase) {
	                    // Collecting over this denominator would result in an
	                    // imprecise float, so avoid doing so.
	                    var newBase = new Pow(pow.base, new Int(exp.n)).collect();
	                    return new Pow(newBase, new Rational(1, exp.d));
	                }
	            }

	            // e.g. 4^1.5 -> 8
	            return pow.base.raiseToThe(pow.exp, options);
	        } else {
	            return pow;
	        }
	    },

	    // checks whether this Pow represents user-entered division
	    isDivide: function() {
	        var isDiv = function(arg) { return arg instanceof Num && arg.hints.divide; };
	        return isDiv(this.exp) || (this.exp instanceof Mul && _.any(this.exp.terms, isDiv));
	    },

	    // assuming this Pow represents user-entered division, returns the denominator
	    asDivide: function() {
	        if (this.exp instanceof Num) {
	            if (this.exp.eval() === -1) {
	                return this.base;
	            } else {
	                var negated = this.exp.negate();
	                negated.hints = _.clone(this.exp.hints);
	                negated.hints.divide = false;
	                return new Pow(this.base, negated);
	            }
	        } else if (this.exp instanceof Mul) {
	            return new Pow(this.base, this.exp.factorOut());
	        } else {
	            error("called asDivide() on an Expr that wasn't a Num or Mul");
	        }
	    },

	    isRoot: function() {
	        return this.exp instanceof Rational && this.exp.hints.root;
	    },

	    isSquaredTrig: function() {
	        return this.base instanceof Trig && !this.base.isInverse() &&
	            this.exp instanceof Num && this.exp.eval() === 2;
	    },

	    // extract whatever denominator makes sense, ignoring hints
	    // if negative exponent, will recursively include the base's denominator as well
	    getDenominator: function() {
	        if (this.exp instanceof Num && this.exp.eval() === -1) {
	            return Mul.createOrAppend(this.base, this.base.getDenominator()).flatten();
	        } else if (this.exp.isNegative()) {
	            var pow = new Pow(this.base, Mul.handleNegative(this.exp).collect());
	            return Mul.createOrAppend(pow, pow.collect().getDenominator()).flatten();
	        } else if (this.base instanceof Num) {
	            return new Pow(this.base.getDenominator(), this.exp).collect();
	        } else {
	            return Num.One;
	        }
	    },

	    findGCD: function(factor) {
	        var base, exp;
	        if (factor instanceof Pow) {
	            base = factor.base;
	            exp = factor.exp;
	        } else {
	            base = factor;
	            exp = Num.One;
	        }

	        // GCD is only relevant if same base
	        if (this.base.equals(base)) {
	            if (this.exp.equals(exp)) {
	                // exact match
	                // e.g. GCD(x^y^z, x^y^z) -> x^y^z
	                return this;
	            } else if (this.exp instanceof Num && exp instanceof Num) {
	                // two numerical exponents
	                // e.g. GCD(x^3, x^2) -> x^2
	                return new Pow(this.base, Num.min(this.exp, exp)).collect();
	            } else if (this.exp instanceof Num || exp instanceof Num) {
	                // one numerical exponent
	                // e.g. GCD(x^2, x^y) -> 1
	                return Num.One;
	            }

	            var expA = this.exp.asMul().partition();
	            var expB = exp.asMul().partition();

	            if (expA[1].equals(expB[1])) {
	                // exponents match except for coefficient
	                // e.g. GCD(x^3y, x^y) -> x^y
	                var coefficient = Num.min(expA[0].reduce(), expB[0].reduce());
	                var mul = new Mul(coefficient, expA[1].flatten()).flatten();
	                return new Pow(base, mul).collect();
	            }
	        }

	        return Num.One;
	    },

	    isPositive: function() {
	        if (this.base.isPositive()) {
	            return true;
	        }

	        var exp = this.exp.simplify();
	        return exp instanceof Int && exp.eval() % 2 === 0;
	    },

	    asPositiveFactor: function() {
	        if (this.isPositive()) {
	            return this;
	        } else {
	            var exp = this.exp.simplify();
	            if (exp instanceof Int) {
	                var n = exp.eval();
	                if (n > 2) {
	                    // e.g. x^3 -> x^2
	                    return new Pow(this.base, new Int(n-1));
	                } else if (n < -2) {
	                    // e.g. x^-3 -> x^-2
	                    return new Pow(this.base, new Int(n+1));
	                }
	            }
	            return Num.One;
	        }
	    }
	});

	_.extend(Pow, {
	    sqrt: function(arg) {
	        return new Pow(arg, Num.Sqrt);
	    },

	    nthroot: function(radicand, degree) {
	        var exp = Mul.fold(Mul.handleDivide(new Int(1), degree));

	        // FIXME(johnsullivan): If oneOverDegree ends up being a pow object,
	        //     this "root" hint is lost between here and when tex() is called.
	        return new Pow(radicand, exp.addHint("root"));
	    },
	});


	/* logarithm */
	function Log(base, power) { this.base = base; this.power = power; }
	Log.prototype = new Expr();

	_.extend(Log.prototype, {
	    func: Log,
	    args: function() { return [this.base, this.power]; },

	    eval: function(vars, options) {
	        return Math.log(this.power.eval(vars, options)) / Math.log(this.base.eval(vars, options));
	    },

	    codegen: function() {
	        return "(Math.log(" + this.power.codegen() +
	            ") / Math.log(" + this.base.codegen() + "))";
	    },

	    print: function() {
	        var power = "(" + this.power.print() + ")";
	        if (this.isNatural()) {
	            return "ln" + power;
	        } else {
	            return "log_(" + this.base.print() + ") " + power;
	        }
	    },

	    tex: function() {
	        var power = "(" + this.power.tex() + ")";
	        if (this.isNatural()) {
	            return "\\ln" + power;
	        } else {
	            return "\\log_{" + this.base.tex() + "}" + power;
	        }
	    },

	    collect: function(options) {
	        var log = this.recurse("collect", options);

	        if (log.power instanceof Num && log.power.eval() === 1) {

	            // e.g. ln(1) -> 0
	            return Num.Zero;

	        } else if (log.base.equals(log.power)) {

	            // e.g. log_b(b) -> 1
	            return Num.One;

	        } else if (log.power instanceof Pow &&
	            log.power.base.equals(log.base)) {

	            // e.g. log_b(b^x) -> x
	            return log.power.exp;
	        } else {
	            return log;
	        }
	    },

	    expand: function() {
	        var log = this.recurse("expand");

	        if (log.power instanceof Mul) {  // might want behind super-simplify() flag
	            // e.g. ln(xy) -> ln(x) + ln(y)

	            var terms = _.map(log.power.terms, function(term) {
	                // need to expand again in case new log powers are Pows
	                return new Log(log.base, term).expand();
	            });

	            return new Add(terms);

	        } else if (log.power instanceof Pow) {
	            // e.g. ln(x^y) -> y*ln(x)

	            return new Mul(log.power.exp, new Log(log.base, log.power.base).expand()).flatten();
	        } else if (!log.isNatural()) {
	            // e.g. log_b(x) -> ln(x)/ln(b)

	            return Mul.handleDivide(new Log(Const.e, log.power), new Log(Const.e, log.base));
	        } else {
	            return log;
	        }
	    },

	    hints: _.extend(Log.prototype.hints, {
	        open: false
	    }),

	    isPositive: function() {
	        var log = this.collect();

	        if (log.base instanceof Num &&
	            log.power instanceof Num) {
	            return this.eval() > 0;
	        } else {
	            return false;
	        }
	    },

	    needsExplicitMul: function() { return false; },

	    isNatural: function() { return this.base.equals(Const.e); }
	});

	_.extend(Log, {
	    natural: function() { return Const.e; },
	    common: function() { return Num.Ten; },

	    create: function(base, power) {
	        var log = new Log(base, power);
	        if (!power.hints.parens) {
	            log = log.addHint("open");
	        }
	        return log;
	    }
	});


	/* trigonometric functions */
	function Trig(type, arg) { this.type = type; this.arg = arg; }
	Trig.prototype = new Expr();

	_.extend(Trig.prototype, {
	    func: Trig,
	    args: function() { return [this.type, this.arg]; },

	    functions: {
	        sin: {
	            eval: Math.sin,
	            codegen: "Math.sin((",
	            tex: "\\sin",
	            expand: function() { return this; }
	        },
	        cos: {
	            eval: Math.cos,
	            codegen: "Math.cos((",
	            tex: "\\cos",
	            expand: function() { return this; }
	        },
	        tan: {
	            eval: Math.tan,
	            codegen: "Math.tan((",
	            tex: "\\tan",
	            expand: function() {
	                return Mul.handleDivide(Trig.sin(this.arg), Trig.cos(this.arg));
	            }
	        },
	        csc: {
	            eval: function(arg) { return 1 / Math.sin(arg); },
	            codegen: "(1/Math.sin(",
	            tex: "\\csc",
	            expand: function() {
	                return Mul.handleDivide(Num.One, Trig.sin(this.arg));
	            }
	        },
	        sec: {
	            eval: function(arg) { return 1 / Math.cos(arg); },
	            codegen: "(1/Math.cos(",
	            tex: "\\sec",
	            expand: function() {
	                return Mul.handleDivide(Num.One, Trig.cos(this.arg));
	            }
	        },
	        cot: {
	            eval: function(arg) { return 1 / Math.tan(arg); },
	            codegen: "(1/Math.tan(",
	            tex: "\\cot",
	            expand: function() {
	                return Mul.handleDivide(Trig.cos(this.arg), Trig.sin(this.arg));
	            }
	        },
	        arcsin: {
	            eval: Math.asin,
	            codegen: "Math.asin((",
	            tex: "\\arcsin"
	        },
	        arccos: {
	            eval: Math.acos,
	            codegen: "Math.acos((",
	            tex: "\\arccos"
	        },
	        arctan: {
	            eval: Math.atan,
	            codegen: "Math.atan((",
	            tex: "\\arctan"
	        },
	        arccsc: {
	            eval: function(arg) { return Math.asin(1 / arg); },
	            codegen: "Math.asin(1/(",
	            tex: "\\operatorname{arccsc}"
	        },
	        arcsec: {
	            eval: function(arg) { return Math.acos(1 / arg); },
	            codegen: "Math.acos(1/(",
	            tex: "\\operatorname{arcsec}"
	        },
	        arccot: {
	            eval: function(arg) { return Math.atan(1 / arg); },
	            codegen: "Math.atan(1/(",
	            tex: "\\operatorname{arccot}"
	        },
	        sinh: {
	            eval: function(arg) {
	                return (Math.exp(arg) - Math.exp(-arg)) / 2;
	            },
	            codegen: function(argStr) {
	                return "((Math.exp(" + argStr + ") - Math.exp(-(" + argStr + "))) / 2)";
	            },
	            tex: "\\sinh",
	            expand: function() { return this; }
	        },
	        cosh: {
	            eval: function(arg) {
	                return (Math.exp(arg) + Math.exp(-arg)) / 2;
	            },
	            codegen: function(argStr) {
	                return "((Math.exp(" + argStr + ") + Math.exp(-(" + argStr + "))) / 2)";
	            },
	            tex: "\\cosh",
	            expand: function() { return this; }
	        },
	        tanh: {
	            eval: function(arg) {
	                return (Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg));
	            },
	            codegen: function(argStr) {
	                return "(" +
	                    "(Math.exp(" + argStr + ") - Math.exp(-(" + argStr + ")))" +
	                    " / " +
	                    "(Math.exp(" + argStr + ") + Math.exp(-(" + argStr + ")))" +
	                    ")";
	            },
	            tex: "\\tanh",
	            expand: function() {
	                return Mul.handleDivide(Trig.sinh(this.arg), Trig.cosh(this.arg));
	            }
	        },
	        csch: {
	            eval: function(arg) { return 2 / (Math.exp(arg) - Math.exp(-arg)); },
	            codegen: function(argStr) {
	                return "(2 / (Math.exp(" + argStr + ") - Math.exp(-(" + argStr + "))))";
	            },
	            tex: "\\csch",
	            expand: function() {
	                return Mul.handleDivide(Num.One, Trig.sinh(this.arg));
	            }
	        },
	        sech: {
	            eval: function(arg) { return 2 / (Math.exp(arg) + Math.exp(-arg)); },
	            codegen: function(argStr) {
	                return "(2 / (Math.exp(" + argStr + ") + Math.exp(-(" + argStr + "))))";
	            },
	            tex: "\\sech",
	            expand: function() {
	                return Mul.handleDivide(Num.One, Trig.cosh(this.arg));
	            }
	        },
	        coth: {
	            eval: function(arg) {
	                return (Math.exp(arg) + Math.exp(-arg)) / (Math.exp(arg) - Math.exp(-arg));
	            },
	            codegen: function(argStr) {
	                return "(" +
	                    "(Math.exp(" + argStr + ") + Math.exp(-(" + argStr + ")))" +
	                    " / " +
	                    "(Math.exp(" + argStr + ") - Math.exp(-(" + argStr + ")))" +
	                    ")";
	            },
	            tex: "\\coth",
	            expand: function() {
	                return Mul.handleDivide(Trig.cosh(this.arg), Trig.sinh(this.arg));
	            }
	        },
	    },

	    isEven: function() {
	        return _.contains(["cos", "sec"], this.type);
	    },

	    isInverse: function() {
	        return this.type.indexOf("arc") === 0;
	    },

	    isBasic: function() {
	        return _.contains(["sin", "cos"], this.type);
	    },

	    eval: function(vars, options) {
	        var func = this.functions[this.type].eval;
	        var arg = this.arg.eval(vars, options);
	        return func(arg);
	    },

	    codegen: function() {
	        var func = this.functions[this.type].codegen;
	        if (typeof func === "function") {
	            return func(this.arg.codegen());
	        } else if (typeof func === "string") {
	            return func + this.arg.codegen() + "))";
	        } else {
	            throw new Error("codegen not implemented for " + this.type);
	        }
	    },

	    print: function() {
	        return this.type + "(" + this.arg.print() + ")";
	    },

	    tex: function(options) {
	        var func = this.functions[this.type].tex;
	        var arg = "(" + this.arg.tex() + ")";
	        return (options && options.split) ? [func, arg] : func + arg;
	    },

	    hints: _.extend(Trig.prototype.hints, {
	        open: false
	    }),

	    isPositive: function() {
	        var trig = this.collect();

	        if (trig.arg instanceof Num) {
	            return this.eval() > 0;
	        } else {
	            return false;
	        }
	    },

	    completeParse: function() {
	        if (this.exp) {
	            var pow = new Pow(this, this.exp);
	            this.exp = undefined;
	            return pow;
	        } else {
	            return this;
	        }
	    },

	    // TODO(alex): does every new node type need to redefine these?
	    needsExplicitMul: function() { return false; },

	    expand: function() {
	        var trig = this.recurse("expand");
	        if (!trig.isInverse()) {
	            // e.g. tan(x) -> sin(x)/cos(x)
	            var expand = trig.functions[trig.type].expand;
	            return _.bind(expand, trig)();
	        } else {
	            return trig;
	        }
	    },

	    collect: function(options) {
	        var trig = this.recurse("collect", options);
	        if (!trig.isInverse() && trig.arg.isNegative()) {
	            var arg;
	            if (trig.arg instanceof Num) {
	                arg = trig.arg.abs();
	            } else {
	                arg = Mul.handleDivide(trig.arg, Num.Neg).collect(options);
	            }

	            if (trig.isEven()) {
	                // e.g. cos(-x) -> cos(x)
	                return new Trig(trig.type, arg);

	            } else {
	                // e.g. sin(-x) -> -sin(x)
	                return new Mul(Num.Neg, new Trig(trig.type, arg));
	            }
	        } else {
	            return trig;
	        }
	    }
	});

	_.extend(Trig, {
	    create: function(pair, arg) {
	        var type = pair[0];
	        var exp = pair[1];

	        if (exp && exp.equals(Num.Neg)) {
	            // e.g. sin^-1(x) -> arcsin(x)
	            type = "arc" + type;
	            exp = undefined;
	        }

	        var trig = new Trig(type, arg);
	        if (!arg.hints.parens) {
	            trig = trig.addHint("open");
	        }

	        if (exp) {
	            trig.exp = exp;
	        }

	        return trig;
	    },

	    sin: function(arg) {
	        return new Trig("sin", arg);
	    },

	    cos: function(arg) {
	        return new Trig("cos", arg);
	    },

	    sinh: function(arg) {
	        return new Trig("sinh", arg);
	    },

	    cosh: function(arg) {
	        return new Trig("cosh", arg);
	    }
	});


	function Abs(arg) { this.arg = arg; }
	Abs.prototype = new Expr();

	_.extend(Abs.prototype, {
	    func: Abs,
	    args: function() { return [this.arg]; },
	    eval: function(vars, options) { return Math.abs(this.arg.eval(vars, options)); },
	    codegen: function() { return "Math.abs(" + this.arg.codegen() + ")"; },
	    print: function() { return "abs(" + this.arg.print() + ")"; },

	    tex: function() {
	        return "\\left|" + this.arg.tex() + "\\right|";
	    },

	    collect: function(options) {
	        var abs = this.recurse("collect", options);

	        if (abs.arg.isPositive()) {
	            // e.g. |2^x| -> 2^x
	            return abs.arg;
	        } else if (abs.arg instanceof Num) {
	            // e.g. |-2| -> 2
	            return abs.arg.abs();
	        } else if (abs.arg instanceof Mul) {
	            // e.g. |-2*pi*x| -> 2*pi*|x|
	            var terms = _.groupBy(abs.arg.terms, function(term) {
	                if (term.isPositive()) {
	                    return "positive";
	                } else if (term instanceof Num) {
	                    return "number";
	                } else {
	                    return "other";
	                }
	            });

	            var positives = terms.positive.concat(_.invoke(terms.number, "abs"));

	            if (terms.other.length) {
	                positives.push(new Abs(new Mul(terms.other).flatten()));
	            }

	            return new Mul(positives).flatten();
	        } else {
	            return abs;
	        }
	    },

	    // this should definitely be behind a super-simplify flag
	    expand: function() {
	        var abs = this.recurse("expand");

	        if (abs.arg instanceof Mul) {
	            // e.g. |xyz| -> |x|*|y|*|z|
	            var terms = _.map(abs.arg.terms, function(term) {
	                return new Abs(term);
	            });
	            return new Mul(terms);
	        } else {
	            return abs;
	        }
	    },

	    isPositive: function() { return true; }
	});


	/* equation */
	function Eq(left, type, right) {
	    this.left = left;
	    this.type = type;
	    this.right = right;
	}
	Eq.prototype = new Expr();

	_.extend(Eq.prototype, {
	    func: Eq,
	    args: function() { return [this.left, this.type, this.right]; },

	    needsExplicitMul: function() { return false; },

	    print: function() {
	        return this.left.print() + this.type + this.right.print();
	    },

	    signs: {
	        "=": " = ",
	        "<": " < ",
	        ">": " > ",
	        "<>": " \\ne ",
	        "<=": " \\le ",
	        ">=": " \\ge "
	    },

	    tex: function() {
	        return this.left.tex() + this.signs[this.type] + this.right.tex();
	    },

	    normalize: function() {
	        var eq = this.recurse("normalize");

	        if (_.contains([">", ">="], eq.type)) {
	            // inequalities should have the smaller side on the left
	            return new Eq(eq.right, eq.type.replace(">", "<"), eq.left);
	        } else {
	            return eq;
	        }
	    },

	    // convert this equation to an expression set to zero
	    // the expression is normalized to a canonical form
	    // e.g. y/2=x/4 -> y/2-x/4(=0) -> 2y-x(=0)
	    // unless unfactored is specified, will then divide through
	    asExpr: function(unfactored) {
	        var isZero = function(expr) {
	            return expr instanceof Num && expr.isSimple() && expr.eval() === 0;
	        };

	        // first convert to a sequence of additive terms
	        var terms = [];

	        if (this.left instanceof Add) {
	            terms = _.clone(this.left.terms);
	        } else if (!isZero(this.left)) {
	            terms = [this.left];
	        }

	        if (this.right instanceof Add) {
	            terms = terms.concat(this.right.negate().terms);
	        } else if (!isZero(this.right)) {
	            terms.push(this.right.negate());
	        }

	        var isInequality = !this.isEquality();

	        // Collect over each term individually to transform simple expressions
	        // into numbers that might have denominators, taking into account
	        // float precision. We have to be very careful to not introduce any
	        // irrational floats before asExpr() returns, because by definition
	        // they do not have exact denominators...
	        terms = _.invoke(terms, "collect", {preciseFloats: true});

	        // ...and we multiply through by every denominator.
	        for (var i = 0; i < terms.length; i++) {
	            var denominator = terms[i].getDenominator();

	            // Can't multiply inequalities by non 100% positive factors
	            if (isInequality && !denominator.isPositive()) {
	                denominator = denominator.asPositiveFactor();
	            }

	            if (!denominator.equals(Num.One)) {
	                terms = _.map(terms, function(term) {
	                    return Mul.createOrAppend(term, denominator).simplify({
	                        once: true,
	                        preciseFloats: true
	                    });
	                });
	            }
	        }

	        var add = new Add(terms).flatten();
	        return unfactored ? add : this.divideThrough(add);
	    },

	    // divide through by every common factor in the expression
	    // e.g. 2y-4x(=0) -> y-2x(=0)
	    // TODO(alex): Make it an option to only divide by variables/expressions
	    // guaranteed to be nonzero
	    divideThrough: function(expr) {
	        var isInequality = !this.isEquality();

	        var simplified = expr.simplify({once: true});
	        var factored = simplified.factor({keepNegative: isInequality});

	        if (!(factored instanceof Mul)) {
	            return expr;
	        }

	        var terms = factored.terms;

	        var isAdd = function(term) { return term instanceof Add; };
	        var hasVar = function(term) { return !!term.getVars().length; };
	        var isOne = function(term) { return term.equals(Num.One); };

	        var grouped = _.groupBy(terms, isAdd);
	        var adds = grouped[true] || [];
	        var others = grouped[false] || [];

	        if (adds.length && this.isEquality()) {
	            // keep only Adds
	            // e.g. 2xy(z+1)(=0) -> z+1(=0)
	            return new Mul(adds).flatten();
	        }

	        var denominator = others;

	        if (!adds.length) {
	            // if no Adds, keep all variable terms to preserve meaning
	            // e.g. 42xyz(=0) -> xyz(=0)
	            denominator = _.reject(denominator, hasVar);
	        }

	        if (isInequality) {
	            // can't divide inequalities by non 100% positive factors
	            // e.g. 42x^2y(z+1)(=0) -> y(z+1)(=0)
	            denominator = _.invoke(denominator, "asPositiveFactor");
	        }

	        // don't need to divide by one
	        denominator = _.reject(denominator, isOne);

	        denominator = _.map(denominator, function(term) {
	            return new Pow(term, Num.Div);
	        });

	        var dividedResult = new Mul(terms.concat(denominator)).collect();

	        // If the end result is the same as the original factoring,
	        // rollback the factoring and discard all intermediate steps.
	        if (dividedResult.equals(factored)) {
	            return simplified;
	        } else {
	            return dividedResult;
	        }
	    },

	    isEquality: function() {
	        return _.contains(["=", "<>"], this.type);
	    },

	    compare: function(other) {
	        // expression comparisons are handled by Expr.compare()
	        if (!(other instanceof Eq)) {
	            return false;
	        }

	        var eq1 = this.normalize();
	        var eq2 = other.normalize();

	        if (eq1.type !== eq2.type) {
	            return false;
	        }

	        // need to collect to properly factor out common factors
	        // e.g x+2x=6 -> 3x=6 -> 3x-6(=0) -> x-2(=0)
	        var expr1 = eq1.divideThrough(eq1.asExpr(/* unfactored */ true).collect());
	        var expr2 = eq2.divideThrough(eq2.asExpr(/* unfactored */ true).collect());

	        if (eq1.isEquality()) {
	            // equals and not-equals can be subtracted either way
	            return expr1.compare(expr2) ||
	                   expr1.compare(Mul.handleNegative(expr2));
	        } else {
	            return expr1.compare(expr2);
	        }
	    },

	    // should only be done after compare() returns true to avoid false positives
	    sameForm: function(other) {
	        var eq1 = this.normalize();
	        var eq2 = other.normalize();

	        var same = eq1.left.sameForm(eq2.left) && eq1.right.sameForm(eq2.right);

	        if (eq1.isEquality()) {
	            // equals and not-equals can be commutative with respect to the sign
	            return same || (eq1.left.sameForm(eq2.right) && eq1.right.sameForm(eq2.left));
	        } else {
	            return same;
	        }
	    },

	    // we don't want to override collect because it would turn y=x into y-x(=0)
	    // instead, we ask if the equation was in that form, would it be simplified?
	    isSimplified: function() {
	        var expr = this.asExpr(/* unfactored */ true);
	        var simplified = this.divideThrough(expr).simplify();
	        return expr.equals(simplified) &&
	               this.left.isSimplified() &&
	               this.right.isSimplified();
	    }
	});

	_.extend(Eq.prototype, {
	    // Assumptions: Expression is of the form a+bx, and we solve for x
	    solveLinearEquationForVariable: function(variable) {
	        var expr = this.asExpr();
	        if (!expr.is(Add) || expr.terms.length !== 2) {
	            throw new Error("Can only handle linear equations of the form " +
	                            "a + bx (= 0)");
	        }

	        var hasVar = function(term) {
	            return term.has(Var) && _.contains(term.getVars(), variable.symbol);
	        };

	        var a, b;

	        if (hasVar(expr.terms[0])) {
	            a = Mul.handleNegative(expr.terms[1]);
	            b = Mul.handleDivide(expr.terms[0], variable);
	        } else {
	            a = Mul.handleNegative(expr.terms[0]);
	            b = Mul.handleDivide(expr.terms[1], variable);
	        }

	        return Mul.handleDivide(a, b).simplify();
	    }
	});


	/* abstract symbol node */
	function Symbol() {}
	Symbol.prototype = new Expr();

	_.extend(Symbol.prototype, {

	    needsExplicitMul: function() { return false; },

	    findGCD: function(factor) {
	        if (factor instanceof Symbol || factor instanceof Num) {
	            return this.equals(factor) ? this : Num.One;
	        } else {
	            return factor.findGCD(this);
	        }
	    }
	});


	/* function variable */
	function Func(symbol, arg) {
	    this.symbol = symbol; this.arg = arg;
	}
	Func.prototype = new Symbol();

	_.extend(Func.prototype, {
	    func: Func,
	    args: function() { return [this.symbol, this.arg]; },

	    print: function() {
	        return this.symbol + "(" + this.arg.print() + ")";
	    },

	    tex: function() {
	        return this.symbol + "(" + this.arg.tex() + ")";
	    },

	    eval: function(vars, options) {
	        var arg = this.arg;
	        var func = vars[this.symbol];
	        var newVars = _.extend(_.clone(vars), {
	            x: arg.eval(vars, options)
	        });
	        var parsedFunc = KAS.parse(func, options);
	        if (parsedFunc.parsed) {
	            return parsedFunc.expr.eval(newVars, options);
	        }
	        // If parsedFunc isn't actually parsed, return its error
	        return parsedFunc;
	    },

	    codegen: function() {
	        return 'vars["' + this.symbol + '"](' +
	            this.arg.codegen() + ')';
	    },

	    getUnits: function() {
	        return this.arg.getUnits();
	    },

	    getVars: function(excludeFunc) {
	        if (excludeFunc) {
	            return this.arg.getVars();
	        } else {
	            return _.union(this.arg.getVars(), [this.symbol]).sort();
	        }
	    },

	    getConsts: function() {
	        return this.arg.getConsts();
	    },
	});


	/* variable */
	function Var(symbol, subscript) {
	    this.symbol = symbol;
	    this.subscript = subscript;
	}
	Var.prototype = new Symbol();

	_.extend(Var.prototype, {
	    func: Var,
	    args: function() { return [this.symbol, this.subscript]; },

	    exprArgs: function() { return []; },
	    recurse: function() { return this; },

	    print: function() {
	        var sub = "";
	        if (this.subscript) {
	            sub = "_(" + this.subscript.print() + ")";
	        }
	        return this.symbol + sub;
	    },

	    // Provide a way to easily evalate expressions with the common case,
	    // subscripts that consist of a single number or symbol e.g. x_a or x_42
	    prettyPrint: function() {
	        var sub = this.subscript;
	        if (sub && (sub instanceof Num || sub instanceof Symbol)) {
	            return this.symbol + "_" + sub.print();
	        } else {
	            return this.print();
	        }
	    },

	    tex: function() {
	        var sub = "";
	        if (this.subscript) {
	            sub = "_{" + this.subscript.tex() + "}";
	        }
	        var prefix = this.symbol.length > 1 ? "\\" : "";
	        return prefix + this.symbol + sub;
	    },

	    repr: function() { return "Var(" + this.print() + ")"; },

	    eval: function(vars, options) {
	        return vars[this.prettyPrint()];
	    },

	    codegen: function() {
	        return 'vars["' + this.prettyPrint() + '"]';
	    },

	    getVars: function() { return [this.prettyPrint()]; },

	    isPositive: function() { return false; }
	});


	/* constant */
	function Const(symbol) { this.symbol = symbol; }
	Const.prototype = new Symbol();

	_.extend(Const.prototype, {
	    func: Const,
	    args: function() { return [this.symbol]; },
	    recurse: function() { return this; },

	    eval: function(vars, options) {
	        if (this.symbol === "pi") {
	            return Math.PI;
	        } else if (this.symbol === "e") {
	            return Math.E;
	        }
	    },

	    codegen: function() {
	        if (this.symbol === "pi") {
	            return "Math.PI";
	        } else if (this.symbol === "e") {
	            return "Math.E";
	        }
	    },

	    print: function() { return this.symbol; },

	    tex: function() {
	        if (this.symbol === "pi") {
	            return "\\pi ";
	        } else if (this.symbol === "e") {
	            return "e";
	        }
	    },

	    isPositive: function() {
	        return this.eval() > 0;
	    },

	    abs: function() {
	        if (this.eval() > 0) {
	            return this;
	        } else {
	            return Mul.handleNegative(this);
	        }
	    },

	    getConsts: function() {
	        return [this.print()];
	    },
	});

	Const.e = new Const("e");
	Const.pi = new Const("pi");


	/* abstract number node */
	function Num() {}
	Num.prototype = new Expr();

	_.extend(Num.prototype, {
	    repr: function() { return this.print(); },
	    strip: function() { return this.abs(); },
	    recurse: function() { return this; },
	    codegen: function() { return this.print(); },

	    // takes another Num and returns a new Num
	    add: abstract,
	    mul: abstract,

	    // returns this Num's additive inverse
	    negate: abstract,

	    isSubtract: function() { return this.hints.subtract; },

	    // return the absolute value of the number
	    abs: abstract,

	    needsExplicitMul: function() { return true; },

	    findGCD: abstract,

	    isPositive: function() {
	        return this.eval() > 0;
	    },

	    isNegative: function() {
	        return this.eval() < 0;
	    },

	    asPositiveFactor: function() {
	        return this.isPositive() ? this : this.abs();
	    },

	    // hints for interpreting and rendering user input
	    hints: _.extend(Num.prototype.hints, {
	        negate: false,
	        subtract: false,
	        divide: false,
	        root: false,
	        fraction: false,
	        entered: false
	    }),

	    // whether a number is considered simple (one term)
	    // e.g. for reals, ints and floats are simple
	    isSimple: abstract,

	    // Based on http://stackoverflow.com/a/10454560/2571482
	    getDecimalPlaces: function() {
	        var match = ("" + this.n).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
	        if (match) {
	            return Math.max(
	                0,
	                // Number of digits right of decimal point
	                (match[1] ? match[1].length : 0) -
	                // Adjust for scientific notation
	                (match[2] ? +match[2] : 0)
	            );
	        } else {
	            return 0;
	        }
	    },

	    asRational: abstract
	});


	/* rational number (n: numerator, d: denominator) */
	function Rational(numerator, denominator) {
	    var n = numerator; var d = denominator;
	    if (d < 0) {
	        n = -n; d = -d;
	    }
	    this.n = n; this.d = d;
	}
	Rational.prototype = new Num();

	_.extend(Rational.prototype, {
	    func: Rational,
	    args: function() { return [this.n, this.d]; },
	    eval: function() { return this.n / this.d; },

	    print: function() {
	        return this.n.toString() + "/" + this.d.toString();
	    },

	    tex: function() {
	        var tex = "\\frac{" + Math.abs(this.n).toString() + "}{" + this.d.toString() + "}";
	        return this.n < 0 ? "-" + tex : tex;
	    },

	    add: function(num, options) {
	        if (num instanceof Rational) {
	            return new Rational(this.n * num.d + this.d * num.n, this.d * num.d).collect();
	        } else {
	            return num.add(this, options);
	        }
	    },

	    mul: function(num, options) {
	        if (num instanceof Rational) {
	            return new Rational(this.n * num.n, this.d * num.d).collect();
	        } else {
	            return num.mul(this, options);
	        }
	    },

	    collect: function() {
	        var gcd = Num.findGCD(this.n, this.d);

	        var n = this.n / gcd;
	        var d = this.d / gcd;

	        if (d === 1) {
	            return new Int(n);
	        } else {
	            return new Rational(n, d);
	        }
	    },

	    negate: function() {
	        return new Rational(-this.n, this.d);
	    },

	    abs: function() {
	        return new Rational(Math.abs(this.n), this.d);
	    },

	    findGCD: function(factor) {
	        // Attempt to factor out common numerators and denominators to return
	        // a Rational instead of a Float
	        if (factor instanceof Rational) {
	            // For more background, see
	            // http://math.stackexchange.com/questions/151081/gcd-of-rationals
	            var numerator = Num.findGCD(this.n * factor.d, factor.n * this.d);
	            var denominator = this.d * factor.d;
	            // Create the rational, then call .collect() to simplify it
	            return new Rational(numerator, denominator).collect();
	        } else if (factor instanceof Int) {
	            return new Rational(Num.findGCD(this.n, factor.n), this.d);
	        } else {
	            return factor.findGCD(this);
	        }
	    },

	    // for now, assuming that exp is a Num
	    raiseToThe: function(exp) {
	        if (exp instanceof Int) {
	            var positive = exp.eval() > 0;
	            var abs = exp.abs().eval();
	            var n = Math.pow(this.n, abs);
	            var d = Math.pow(this.d, abs);
	            if (positive) {
	                return new Rational(n, d).collect();
	            } else {
	                return new Rational(d, n).collect();
	            }
	        } else {
	            return new Float(this.eval()).raiseToThe(exp);
	        }
	    },

	    getDenominator: function() {
	        return new Int(this.d);
	    },

	    isSimple: function() { return false; },

	    asRational: function() { return this; }
	});


	/* integer (n: numerator/number) */
	function Int(number) { this.n = number; }
	Int.prototype = new Rational(0, 1);

	_.extend(Int.prototype, {
	    func: Int,
	    args: function() { return [this.n]; },
	    print: function() { return this.n.toString(); },
	    tex: function() { return this.n.toString(); },
	    negate: function() { return new Int(-this.n); },
	    abs: function() { return new Int(Math.abs(this.n)); },
	    isSimple: function() { return true; },
	    findGCD: function(factor) {
	        if (factor instanceof Int) {
	            return new Int(Num.findGCD(this.n, factor.n));
	        } else {
	            return factor.findGCD(this);
	        }
	    }
	});

	_.extend(Int, {
	    create: function(n) { return new Int(n).addHint("entered"); }
	});

	/* float (n: number) */
	function Float(number) { this.n = number; }
	Float.prototype = new Num();

	_.extend(Float.prototype, {
	    func: Float,
	    args: function() { return [this.n]; },
	    eval: function() { return this.n; },

	    // TODO(alex): when we internationalize number parsing/display
	    // we should make sure to use the appropriate decimal mark here
	    print: function() { return this.n.toString(); },
	    tex: function() { return this.n.toString(); },

	    add: function(num, options) {
	        if (options && options.preciseFloats) {
	            return Float.toDecimalPlaces(
	                this.n + num.eval(),
	                Math.max(this.getDecimalPlaces(), num.getDecimalPlaces())
	            );
	        } else {
	            return new Float(this.n + num.eval()).collect();
	        }
	    },

	    mul: function(num, options) {
	        if (options && options.preciseFloats) {
	            return Float.toDecimalPlaces(
	                this.n * num.eval(),
	                this.getDecimalPlaces() + num.getDecimalPlaces()
	            );
	        } else {
	            return new Float(this.n * num.eval()).collect();
	        }
	    },

	    collect: function() {
	        // We used to simplify Floats to Ints here whenever possible, but no
	        // longer do so in order to preserve significant figures.
	        return this;
	    },

	    negate: function() { return new Float(-this.n); },
	    abs: function() { return new Float(Math.abs(this.n)); },

	    findGCD: function(factor) {
	        if (factor instanceof Num) {
	            return new Float(Num.findGCD(this.eval(), factor.eval())).collect();
	        } else {
	            return factor.findGCD(this);
	        }
	    },

	    // for now, assuming that exp is a Num
	    raiseToThe: function(exp, options) {
	        if (options && options.preciseFloats &&
	                exp instanceof Int && exp.n > 1) {
	            return Float.toDecimalPlaces(
	                new Pow(this, exp).eval(),
	                this.getDecimalPlaces() * exp.n
	            );
	        } else {
	            return new Float(new Pow(this, exp).eval()).collect();
	        }
	    },

	    // only to be used on non-repeating decimals (e.g. user-provided)
	    asRational: function() {
	        var parts = this.n.toString().split(".");
	        if (parts.length === 1) {
	            return new Rational(this.n, 1);
	        } else {
	            var numerator = Number(parts.join(""));
	            var denominator = Math.pow(10, parts[1].length);
	            return new Rational(numerator, denominator).collect();
	        }
	    },

	    getDenominator: function() {
	        return this.asRational().getDenominator();
	    },

	    isSimple: function() { return true; }
	});

	_.extend(Float, {
	    create: function(n) { return new Float(n).addHint("entered"); },

	    // Account for floating point imprecision by explicitly controlling the
	    // number of decimal places in common operations (e.g. +, *, ^)
	    toDecimalPlaces: function(n, places) {
	        return new Float(+n.toFixed(Math.min(places, 20))).collect();
	    }
	});

	// static methods and fields that are best defined on Num
	_.extend(Num, {
	    negativeOne: function(hint) {
	        if (hint === "subtract") {
	            return Num.Sub;
	        } else if (hint === "divide") {
	            return Num.Div;
	        } else {
	            return Num.Neg;
	        }
	    },

	    // find the greatest common denominator
	    findGCD: function(a, b) {
	        var mod;

	        a = Math.abs(a);
	        b = Math.abs(b);

	        // Euclid's method doesn't handle non-integers very well. For now
	        // we just say we can't pull out a common factor. It might be
	        // reasonable to do better than this in the future.
	        if (a !== Math.floor(a) || b !== Math.floor(b)) {
	            return 1;
	        }

	        while (b) {
	            mod = a % b;
	            a = b;
	            b = mod;
	        }

	        return a;
	    },

	    min: function() {
	        return _.min(_.toArray(arguments), function(num) {
	            return num.eval();
	        });
	    },

	    max: function() {
	        return _.max(_.toArray(arguments), function(num) {
	            return num.eval();
	        });
	    }
	});

	Num.Neg = new Int(-1).addHint("negate");
	Num.Sub = new Int(-1).addHint("subtract");
	Num.Div = new Int(-1).addHint("divide");

	Num.Sqrt = new Rational(1, 2).addHint("root");

	Num.Zero = new Int(0);
	Num.One = new Int(1);
	Num.Ten = new Int(10);


	// set identities here
	Add.prototype.identity = Num.Zero;
	Mul.prototype.identity = Num.One;


	var parser = KAS.parser;

	var parseError = function(str, hash) {
	    // return int location of parsing error
	    throw new Error(hash.loc.first_column);
	};

	// expose concrete nodes to parser scope
	// see http://zaach.github.io/jison/docs/#sharing-scope
	parser.yy = {
	    Add: Add,
	    Mul: Mul,
	    Pow: Pow,
	    Log: Log,
	    Trig: Trig,
	    Eq: Eq,
	    Abs: Abs,
	    Func: Func,
	    Const: Const,
	    Var: Var,
	    Int: Int,
	    Float: Float,
	    parseError: parseError,

	    constants: ["e"],
	    symbolLexer: function(symbol) {
	        if (_.contains(parser.yy.constants, symbol)) {
	            return "CONST";
	        } else if (_.contains(parser.yy.functions, symbol)) {
	            return "FUNC";
	        } else {
	            return "VAR";
	        }
	    }
	};

	KAS.parse = function(input, options) {
	    try {
	        if (options && options.functions) {
	            // reserve the symbol "i" for complex numbers
	            parser.yy.functions = _.without(options.functions, "i");
	        } else {
	            parser.yy.functions = [];
	        }

	        // If ',' is the decimal dividor in your country, replace any ','s
	        // with '.'s.
	        // This isn't perfect, since the output will all still have '.'s.
	        // TODO(jack): Fix the output to have ','s in this case
	        if (options && options.decimal_separator) {
	            input = input.split(options.decimal_separator).join(".");
	        }

	        var expr = parser.parse(input).completeParse();
	        return { parsed: true, expr: expr };
	    } catch (e) {
	        return { parsed: false, error: e.message };
	    }
	};

	/* unit */
	function Unit(symbol) {
	    this.symbol = symbol;
	}
	Unit.prototype = new Symbol();

	// If possible, replace unit prefixes with a multiplication.
	//
	// "g" -> Unit("g")
	// "kg" -> 1000 * Unit("g")
	var unprefixify = function(symbol) {
	    if (_(baseUnits).has(symbol) || _(derivedUnits).has(symbol)) {
	        return new Unit(symbol);
	    }

	    // check for prefix
	    var prefix = _(_(siPrefixes).keys()).find(function(testPrefix) {
	        return new RegExp("^" + testPrefix).test(symbol);
	    });

	    if (prefix) {
	        var base = symbol.replace(new RegExp("^" + prefix), "");

	        // It's okay to be here if either:
	        // * `base` is a base unit (the seven units listed in baseUnits)
	        // * `base` is a derived unit which allows prefixes
	        //
	        // Otherwise, we're trying to parse a unit label which is not
	        // allowed (mwk, mBTU, etc).
	        if (_(baseUnits).has(base) ||
	            (derivedUnits[base] &&
	             derivedUnits[base].prefixes === hasPrefixes)) {

	            return new Mul(siPrefixes[prefix], new Unit(base));
	        } else {
	            throw new Error(base + " does not allow prefixes");
	        }
	    } else {
	        return new Unit(symbol);
	    }
	};

	KAS.unitParse = function(input) {
	    try {
	        var parseResult = KAS.unitParser.parse(input);

	        // parseResult looks like:
	        // {
	        //   magnitude: "5",
	        //   unit: {
	        //     num: [
	        //       { name: "s", pow: 2 }
	        //     ],
	        //     denom: [
	        //       { name: "kg", pow: 1 }
	        //     ]
	        //   }
	        // }
	        //
	        // denom is optionally null

	        var unitArray = [];

	        _(parseResult.unit.num).each(function(unitSpec) {
	            unitArray.push(
	                new Pow(unprefixify(unitSpec.name), new Int(unitSpec.pow))
	            );
	        });

	        _(parseResult.unit.denom).each(function(unitSpec) {
	            unitArray.push(
	                new Pow(unprefixify(unitSpec.name), new Int(-1 * unitSpec.pow))
	            );
	        });

	        var unit = new Mul(unitArray).flatten();

	        if (parseResult.type === "unitMagnitude") {
	            // in the first case we have a magnitude coefficient as well as the
	            // unit itself.
	            var coefArray =
	                [new Float(+parseResult.magnitude)].concat(unitArray);
	            var expr = new Mul(coefArray);
	            return {
	                parsed: true,
	                unit: unit,
	                expr: expr,
	                coefficient: parseResult.magnitude,
	                type: parseResult.type
	            };
	        } else {

	            // in the second case it's just the unit with no magnitude.
	            return {
	                parsed: true,
	                unit: unit,
	                type: parseResult.type,
	            };
	        }
	    } catch (e) {
	        return { parsed: false, error: e.message };
	    }
	};

	_.extend(Unit.prototype, {
	    func: Unit,
	    args: function() { return [this.symbol]; },
	    recurse: function() { return this; },

	    eval: function(vars, options) {
	        // This is called when comparing units. A unit doesn't affect the
	        // numerical value of its coefficient, so this needs to be 1.
	        //
	        // On the other hand, things must not evaluate to the same thing if
	        // they don't have the same type. I believe that's also true - form is
	        // checked before numerical equivalence. I do not know where, though.
	        // However, there are a couple tests checking this.
	        return 1;
	    },

	    getUnits: function() { return [{ unit: this.symbol, pow: 1 }]; },

	    codegen: function() { return "1"; },

	    print: function() { return this.symbol; },

	    tex: function() { return this.symbol; },

	    // Simplify units by replacing prefixes with multiplication
	    collect: function(options) {
	        if (_(baseUnits).has(this.symbol)) {
	            return this;
	        } else if (_(derivedUnits).has(this.symbol)) {
	            return derivedUnits[this.symbol].conversion;
	        } else {
	            throw new Error("could not understand unit: " + this.symbol);
	        }
	    },
	});

	var baseUnits = {
	    m: new Unit("m"),
	    // Note: kg is the SI base unit but we use g for consistency
	    g: new Unit("g"),
	    s: new Unit("s"),
	    A: new Unit("A"),
	    K: new Unit("K"),
	    mol: new Unit("mol"),
	    cd: new Unit("cd"),
	};

	var siPrefixes = {
	    a: new Pow(new Int(10), new Int(-18)),
	    f: new Pow(new Int(10), new Int(-15)),
	    p: new Pow(new Int(10), new Int(-12)),
	    n: new Pow(new Int(10), new Int(-9)),
	    u: new Pow(new Int(10), new Int(-6)),
	    m: new Pow(new Int(10), new Int(-3)),
	    c: new Pow(new Int(10), new Int(-2)),
	    d: new Pow(new Int(10), new Int(-1)),
	    da: new Int(10),
	    h: new Pow(new Int(10), new Int(2)),
	    k: new Pow(new Int(10), new Int(3)),
	    M: new Pow(new Int(10), new Int(6)),
	    G: new Pow(new Int(10), new Int(9)),
	    T: new Pow(new Int(10), new Int(12)),
	    P: new Pow(new Int(10), new Int(15)),
	    E: new Pow(new Int(10), new Int(18)),
	    // http://en.wikipedia.org/wiki/Metric_prefix#.22Hella.22_prefix_proposal
	    hella: new Pow(new Int(10), new Int(27)),
	};

	// Use these two values to mark a unit as either SI-prefixable or not.
	var hasPrefixes = {};
	var hasntPrefixes = {};

	var makeAlias = function(str, prefixes) {
	    var splits = str.split("|");
	    var coefficientStr = splits[0].trim();
	    var unitsStr = splits[1].trim();

	    var coefficient = Num.One;
	    if (coefficientStr !== "") {
	        coefficient = KAS.parse(coefficientStr).expr;
	    }

	    var numdenomStr = unitsStr.split("/");
	    var numdenom = [coefficient];

	    if (numdenomStr[0]) {
	        numdenomStr[0]
	            .split(" ")
	            .filter(function(x) {
	                return x !== "";
	            }).map(function(x) {
	                numdenom.push(new Unit(x));
	            });
	    }

	    if (numdenomStr[1]) {
	        numdenomStr[1]
	            .split(" ")
	            .filter(function(x) {
	                return x !== "";
	            }).map(function(x) {
	                numdenom.push(new Pow(new Unit(x), Num.Div));
	            });
	    }

	    return {
	        conversion: new Mul(numdenom),
	        prefixes: prefixes,
	    };
	};

	// This is a mapping of derived units (or different names for a unit) to their
	// definitions. For example, an inch is defined as 0.0254 m.
	//
	// Definitions don't need to be in terms of base units. For example, tsp is
	// defined in terms of tbsp (which is defined in terms of cup -> gal -> L ->
	// m^3). However, units must get simpler. I.e. there's no loop checking.
	//
	// makeAlias takes two parameters:
	// * a string specifying the simplification to perform
	//   - a required pipe separates the constant factor from the base units
	//   - the constant factor is parsed by KAS
	//   - the base units are in a simple format which disallows exponents and
	//     requires multiplicands to be space-separated ("m m" rather than "m^2)
	//     with an optional "/" separating numerator and denominator
	//   - prefixes are not allowed to be used in the converted to units
	//     (note that this restriction, the format of the string, and the choice to
	//     use a string in the first place are made out of laziness to minimize
	//     both typing and parsing)
	// * a boolean specifying whether or not it's acceptable to use SI units
	//
	// Where possible, these units are taken from "The International System of
	// Units (SI)" 8th edition (2006).
	var derivedUnits = {
	    // mass
	    // The atomic mass unit / dalton.
	    Da: makeAlias("1.6605388628 x 10^-24 | g", hasPrefixes),
	    u: makeAlias("| Da", hasntPrefixes),

	    // length
	    "meter": makeAlias("| m", hasntPrefixes),
	    "meters": makeAlias("| m", hasntPrefixes),
	    "in": makeAlias("254 / 10000 | m", hasntPrefixes),
	    "ft": makeAlias("3048  / 10000 | m", hasntPrefixes),
	    "yd": makeAlias("9144  / 10000 | m", hasntPrefixes),
	    "mi": makeAlias("1609344 / 1000 | m", hasntPrefixes),
	    "ly": makeAlias("9.4607 x 10^15 | m", hasntPrefixes),
	    "nmi": makeAlias("1852 | m", hasntPrefixes),
	    "Å": makeAlias("10^-10 | m", hasntPrefixes),
	    "pc": makeAlias("3.0857 x 10^16 | m", hasntPrefixes),

	    // time
	    "min": makeAlias("60 | s", hasntPrefixes),
	    "hr": makeAlias("3600 | s", hasntPrefixes),
	    "sec": makeAlias("| s", hasntPrefixes),
	    // TODO(joel) make day work
	    "day": makeAlias("86400 | s", hasntPrefixes),
	    "wk": makeAlias("604800 | s", hasntPrefixes),
	    "fortnight": makeAlias("14 | day", hasntPrefixes),
	    "shake": makeAlias("10^-8 | s", hasntPrefixes),
	    "olympiad": makeAlias("126200000 | s", hasntPrefixes),

	    // temperature
	    "°C": makeAlias("1 | K", hasntPrefixes),
	    "°F": makeAlias("5/9 | K", hasntPrefixes),
	    "°R": makeAlias("5/9 | K", hasntPrefixes),

	    // electric charge
	    "e": makeAlias("1.6021765314 x 10^-19 | C", hasntPrefixes),

	    // speed
	    "c": makeAlias("299792458 | m / s", hasntPrefixes),
	    "kn": makeAlias("514/1000 | m / s", hasntPrefixes),
	    "kt": makeAlias("| kn", hasntPrefixes),
	    "knot": makeAlias("| kn", hasntPrefixes),

	    // energy
	    "J": makeAlias("| N m", hasPrefixes),
	    "BTU": makeAlias("1060 | J", hasntPrefixes),
	    "cal": makeAlias("4184 / 1000 | J", hasPrefixes),
	    "eV": makeAlias("1.602176514 x 10^-19 | J", hasPrefixes),
	    "erg": makeAlias("10^−7 | J", hasPrefixes),

	    // power
	    "W": makeAlias("| J / s", hasPrefixes),
	    "H-e": makeAlias("80 | W", hasntPrefixes),

	    // force
	    "N": makeAlias("1000 | g m / s s", hasPrefixes),
	    // "lb": makeAlias("4448 / 1000 | N", hasntPrefixes),
	    // 4.4482216152605
	    "lb": makeAlias("4448221615 / 1000000000 | N", hasntPrefixes),
	    "dyn": makeAlias("10^-5 | N", hasntPrefixes),

	    // pressure
	    "Pa": makeAlias("1 | N / m m m", hasPrefixes),
	    "bar": makeAlias("10^5 | Pa", hasPrefixes),
	    "㏔": makeAlias("1/1000 | bar", hasntPrefixes),
	    "㍴": makeAlias("| bar", hasntPrefixes),
	    "atm": makeAlias("101325 | Pa", hasntPrefixes),
	    "Torr": makeAlias("1/760 | atm", hasntPrefixes),
	    "mmHg": makeAlias("| Torr", hasntPrefixes),

	    // area
	    "ha": makeAlias("10^4 | m m", hasntPrefixes),
	    "b": makeAlias("10^−28 | m m", hasPrefixes),
	    "barn": makeAlias("| b", hasPrefixes),
	    "acre": makeAlias("4046.87 | m m", hasntPrefixes),
	    "skilodge": makeAlias("10^-31 | m m", hasntPrefixes),
	    "outhouse": makeAlias("10^-34 | m m", hasntPrefixes),
	    "shed": makeAlias("10^-52 | m m", hasntPrefixes),

	    // volume
	    "L": makeAlias("1/1000 | m m m", hasPrefixes),
	    "gal": makeAlias("3785/1000 | L", hasPrefixes),
	    "cup": makeAlias("1/16 | gal", hasntPrefixes),
	    "qt": makeAlias("1/4 | gal", hasntPrefixes),
	    "quart": makeAlias("| qt", hasntPrefixes),
	    "p": makeAlias("1/8 | gal", hasntPrefixes),
	    "pt": makeAlias("| p", hasntPrefixes),
	    "pint": makeAlias("| p", hasntPrefixes),
	    "fl oz": makeAlias("1/8 | cup", hasntPrefixes),
	    "fl. oz.": makeAlias("1/8 | cup", hasntPrefixes),
	    "tbsp": makeAlias("1/16 | cup", hasntPrefixes),
	    "tsp": makeAlias("1/3 | tbsp", hasntPrefixes),

	    // rotational
	    // "rad":
	    "rev": makeAlias("2 pi | rad", hasntPrefixes),
	    "deg": makeAlias("180 pi | rad", hasntPrefixes),
	    "°": makeAlias("| deg", hasntPrefixes),
	    "arcminute": makeAlias("1/60 | deg", hasntPrefixes),
	    "arcsec": makeAlias("1/3600 | deg", hasntPrefixes),

	    // dimensionless
	    // "B": makeAlias("10 | dB", hasntPrefixes), // XXX danger - logarithmic
	    // "dB"
	    // "nP"
	    "Hu": makeAlias("1000 | dB", hasPrefixes),
	    "dozen": makeAlias("12 |", hasntPrefixes),
	    // XXX
	    "mol": makeAlias("6.0221412927 x 10^23 |", hasPrefixes),
	    "%": makeAlias("1/100 |", hasntPrefixes),
	    "percent": makeAlias("| %", hasntPrefixes),
	    "ppm": makeAlias("1/1000000 |", hasntPrefixes),

	    // electric / magnetic
	    "V": makeAlias("1000 | g m m / s s C", hasPrefixes),
	    "C": makeAlias("| A s", hasPrefixes),
	    "ampere": makeAlias("| A", hasntPrefixes),
	    "Ω": makeAlias("| V / A", hasPrefixes),
	    "ohm": makeAlias("| Ω", hasntPrefixes),
	    "F": makeAlias("| C / V", hasPrefixes),
	    "H": makeAlias("| ohm s", hasPrefixes),
	    "T": makeAlias("1000 | g / C s", hasPrefixes),
	    "Wb": makeAlias("1000 | g m m / C s", hasPrefixes),

	    // photometry
	    // TODO not sure this is right
	    "lm": makeAlias("pi x 10^4 | cd / m m", hasntPrefixes),
	    "lx": makeAlias("| lm / m m", hasntPrefixes),
	    "nit": makeAlias("| cd / m m", hasntPrefixes),
	    "sb": makeAlias("10^4 | cd / m m", hasntPrefixes),
	    "stilb": makeAlias("1 | sb", hasntPrefixes),
	    "apostilb": makeAlias("1 / pi x 10^(-4) | sb", hasntPrefixes),
	    "blondel": makeAlias("| apostilb", hasntPrefixes),
	    "asb": makeAlias("| apostilb", hasntPrefixes),
	    "la": makeAlias("| lm", hasntPrefixes),
	    "Lb": makeAlias("| lm", hasntPrefixes),
	    "sk": makeAlias("10^-7 | lm", hasntPrefixes),
	    "skot": makeAlias("| sk", hasntPrefixes),
	    "bril": makeAlias("10^-11 | lm", hasntPrefixes),

	    // other
	    "Hz": makeAlias("| / s", hasPrefixes),
	};

	KAS.Add = Add;
	KAS.Mul = Mul;
	KAS.Pow = Pow;
	KAS.Log = Log;
	KAS.Eq = Eq;
	KAS.Trig = Trig;
	KAS.Abs = Abs;
	KAS.Func = Func;
	KAS.Var = Var;
	KAS.Const = Const;
	KAS.Unit = Unit;
	KAS.Rational = Rational;
	KAS.Int = Int;
	KAS.Float = Float;
	KAS.Zero = Num.Zero;
	KAS.One = Num.One;

	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* TODO(charlie): fix these lint errors (http://eslint.org/docs/rules): */
	var _ = __webpack_require__(58);
	module.exports = function(KAS) {

	// assumes that both expressions have already been parsed
	// TODO(alex): be able to pass a random() function to compare()
	KAS.compare = function(expr1, expr2, options) {
	    var defaults = {
	        form: false,        // check that the two expressions have the same form
	        simplify: false     // check that the second expression is simplified
	    };

	    /* more possible options:
	        allow ratios e.g. 3/1 and 3 should both be accepted for something like slope
	        allow student to choose their own variables names
	    */

	    if (options !== undefined) {
	        options = _.extend(defaults, options);
	    } else {
	        options = defaults;
	    }

	    // variable check
	    var vars = expr1.sameVars(expr2);
	    if (!vars.equal) {
	        var message = null;
	        if (vars.equalIgnoringCase) {
	            message = "Some of your variables are in the wrong case (upper vs. lower).";
	            return {equal: false, message: message};
	        }
	    }

	    // semantic check
	    if (!expr1.compare(expr2)) {
	        return {equal: false, message: null};
	    }

	    // syntactic check
	    if (options.form && !expr1.sameForm(expr2)) {
	        return {equal: false, message: "Your answer is not in the correct form."};
	    }

	    // syntactic check
	    if (options.simplify && !expr1.isSimplified()) {
	        return {equal: false, message: "Your answer is not fully expanded and simplified."};
	    }

	    return {equal: true, message: null};
	};

	}


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Created by Shayakhmetov on 17.11.2016.
	 */
	module.exports = {
	    RATIONAL_IRRATIONAL: 'rie',
	    SYSTEMS: 'systems'
	};

/***/ }
])
});
;
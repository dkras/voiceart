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
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpVoiceArt__name_"];
/******/ 	window["webpackJsonpVoiceArt__name_"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		18:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "./js/" + chunkId + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	(function () {
	    var MOUSE_FOCUSED_CLASS = 'is-mouse-focused';

	    if (window.mouseFocusingInitialized)
	        return;

	    window.mouseFocusingInitialized = true;

	    if (document.readyState == "interactive") {
	        addListeners();
	    }
	    else {
	        document.addEventListener('DOMContentLoaded', addListeners);
	    }

	    function addListeners() {
	        var justBlured;
	        var wasMouseFocused;
	        document.body.addEventListener('mousedown', function (e) {
	            var el = e.target;
	            var labeledElement;

	            // collect clicked element with it's parents before body-element (except svg elements)
	            var els = [];
	            while (el && el.tagName.toLowerCase() != 'body') {
	                if (!el.namespaceURI || el.namespaceURI.toLowerCase().indexOf('svg') == -1) {
	                    els.push(el);
	                    el.addEventListener('focus', onFocus);

	                    // if label element is clicked, bound element can be focused
	                    if (el.tagName.toLowerCase() === 'label') {
	                        // save element bound to label
	                        if (el.getAttribute('for')) {
	                            labeledElement = document.getElementById(el.getAttribute('for'));
	                        }
	                        else {
	                            labeledElement = el.querySelector('input');
	                        }
	                        if (labeledElement) {
	                            labeledElement.addEventListener('focus', onFocus);
	                            document.addEventListener('mouseup', onMouseUp);
	                        }
	                    }
	                }
	                el = el.parentNode;
	            }

	            // if clicked element has already focused by keyboard
	            // wait for `document.activeElement` to change
	            setTimeout(function () {
	                // find focused element
	                onFocus.apply(document.activeElement);
	            }, 0);

	            function onMouseUp() {
	                document.removeEventListener('mouseup', onMouseUp);
	                if (labeledElement) {
	                    // wait while labeled element will be focused
	                    // then remove focus listener
	                    setTimeout(function () {
	                        labeledElement.removeEventListener('focus', onFocus);
	                        labeledElement = undefined;
	                    }, 0);
	                }
	            }

	            function onFocus() {
	                setMouseFocused(this);
	                removeFocusListeners();
	            }

	            function removeFocusListeners() {
	                for (var i = 0; i < els.length; i++) {
	                    el = els[i];
	                    el.removeEventListener('focus', onFocus);
	                }
	            }
	        });

	        window.addEventListener('blur', function (e) {
	            if (e.target != this)
	                return;

	            // save element to restore mouse-focused class when this tab will be focused again
	            if (justBlured) {
	                wasMouseFocused = justBlured;
	            }
	        }, true);

	        window.addEventListener('focus', function () {
	            // restore mouse-focused
	            if (wasMouseFocused) {
	                if (document.activeElement == wasMouseFocused) {
	                    setMouseFocused(wasMouseFocused);
	                }
	                wasMouseFocused = undefined;
	            }

	        });

	        function onBlur() {
	            // save element in case when element is blurred with current browser tab blur
	            // to restore mouse-focused class when this tab will be focused again
	            justBlured = this;
	            this.removeEventListener('blur', onBlur);
	            utils.removeClass(this, MOUSE_FOCUSED_CLASS);

	            // clear justBlured, if this tab was blurred, element should be saved in wasMouseFocused variable
	            setTimeout(function () {
	                justBlured = undefined;
	            }, 0);
	        }

	        function setMouseFocused(element) {
	            // if found and it's not body
	            if (element && element.tagName.toLowerCase() != 'body') {
	                // add special class, remove it after `blur`
	                utils.addClass(element, MOUSE_FOCUSED_CLASS);
	                element.addEventListener('blur', onBlur);
	            }
	        }
	    }

	})();

/***/ },
/* 4 */
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
	    }
	};

/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(12);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var alphabet = __webpack_require__(13);
	var encode = __webpack_require__(15);
	var decode = __webpack_require__(17);
	var isValid = __webpack_require__(18);

	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;

	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;

	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(19) || 0;

	// Counter is used when shortid is called multiple times in one second.
	var counter;

	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;

	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {

	    var str = '';

	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }

	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);

	    return str;
	}


	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}

	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}

	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }

	    return alphabet.shuffled();
	}


	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var randomFromSeed = __webpack_require__(14);

	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;

	var shuffled;

	function reset() {
	    shuffled = false;
	}

	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }

	    if (_alphabet_ === alphabet) {
	        return;
	    }

	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }

	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });

	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }

	    alphabet = _alphabet_;
	    reset();
	}

	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}

	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}

	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }

	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;

	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}

	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}

	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}

	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

	var seed = 1;

	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}

	function setSeed(_seed_) {
	    seed = _seed_;
	}

	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var randomByte = __webpack_require__(16);

	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;

	    var str = '';

	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}

	module.exports = encode;


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}

	module.exports = randomByte;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(13);

	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}

	module.exports = decode;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(13);

	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }

	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}

	module.exports = isShortId;


/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	module.exports = 0;


/***/ },
/* 20 */,
/* 21 */,
/* 22 */
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

	var _cgMet = __webpack_require__(23);

	var _cgMet2 = _interopRequireDefault(_cgMet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SPEECH_RULE_ENGINE_SERVICE_URL = 'https://devdemo3.competentum.com:444/mmltospeech';

	exports.default = {

	    /**
	     * Adds class to element.
	     * @param {Element} element
	     * @param {string} className
	     */
	    addClass: function addClass(element, className) {
	        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
	        if (re.test(element.className)) return;
	        element.className = (element.className + " " + className).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
	    },

	    /**
	     * Removes class from element.
	     * @param {Element} element
	     * @param {string} className
	     */
	    removeClass: function removeClass(element, className) {
	        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
	        element.className = element.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
	    },

	    /**
	     * Focus to element with saving 'is-mouse-focused' class.
	     * @param {Element} element
	     */
	    forcedFocus: function forcedFocus(element) {
	        var self = this;
	        if (document.activeElement && document.activeElement.matches('.is-mouse-focused')) {
	            this.addClass(element, 'is-mouse-focused');
	            element.addEventListener('blur', onBlur);
	        }
	        element.focus();

	        function onBlur() {
	            self.removeClass(element, 'is-mouse-focused');
	            element.removeEventListener('blur', onBlur);
	        }
	    },

	    /**
	     *
	     * @param {string} latex - LATEX which should be converted to speech.
	     * @returns {string}
	     */
	    getSpeechByLatex: function getSpeechByLatex(latex) {
	        return (0, _cgMet2.default)(latex, { output: 'text', lang: 'en' });
	    },

	    /**
	     *
	     * @param {string} mml - MathML which should be converted to speech.
	     * @param {boolean} [async = false]
	     * @returns {string|Promise}
	     */
	    getSpeechByMathML: function getSpeechByMathML(mml) {
	        var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        var speech = '';
	        var promise = new Promise(function (resolve, reject) {
	            var xhr = new XMLHttpRequest();
	            xhr.open('POST', SPEECH_RULE_ENGINE_SERVICE_URL, async);
	            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	            xhr.onreadystatechange = function () {
	                if (xhr.readyState == 4) {
	                    if (xhr.status == 200) {
	                        speech = xhr.responseText;
	                        resolve(speech);
	                    } else {
	                        reject(new Error('Error in getSpeechByMathML method: Can not convert MathML to speech: ' + mml));
	                    }
	                }
	            };
	            xhr.send('mml=' + encodeURIComponent(mml));
	        });
	        return async ? promise : speech;
	    }

	};
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["MET"] = factory();
		else
			root["MET"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(1);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Created by 96664_000 on 16.08.2016.
		 */
		'use strict';
		
		var merge = __webpack_require__(2);
		var processing = __webpack_require__(4);
		var asciiMath = __webpack_require__(49);
		
		var OPTIONS = {
		    output: 'mathml',
		    type: 'algebra',
		    lang: 'en',
		    callback: function(){}
		};
		
		module.exports = function(text, settings){
		    var settings = merge.recursive(OPTIONS, settings);
		    var result;
		    switch(settings.output){
		        case 'mathml':
		            settings.output = 'exp';
		            var exp = processing(text, settings);
		            result = asciiMath(exp);
		            break;
		        case 'ascii':
		            settings.output = 'exp';
		            result = processing(text, settings);
		            break;
		        case 'latex':
		            result = processing(text, settings);
		            break;
		        case 'text':
		            result = processing(text, settings);
		            break;
		    }
		    return result;
		};

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(module) {/*!
		 * @name JavaScript/NodeJS Merge v1.2.0
		 * @author yeikos
		 * @repository https://github.com/yeikos/js.merge
		
		 * Copyright 2014 yeikos - MIT license
		 * https://raw.github.com/yeikos/js.merge/master/LICENSE
		 */
		
		;(function(isNode) {
		
			/**
			 * Merge one or more objects 
			 * @param bool? clone
			 * @param mixed,... arguments
			 * @return object
			 */
		
			var Public = function(clone) {
		
				return merge(clone === true, false, arguments);
		
			}, publicName = 'merge';
		
			/**
			 * Merge two or more objects recursively 
			 * @param bool? clone
			 * @param mixed,... arguments
			 * @return object
			 */
		
			Public.recursive = function(clone) {
		
				return merge(clone === true, true, arguments);
		
			};
		
			/**
			 * Clone the input removing any reference
			 * @param mixed input
			 * @return mixed
			 */
		
			Public.clone = function(input) {
		
				var output = input,
					type = typeOf(input),
					index, size;
		
				if (type === 'array') {
		
					output = [];
					size = input.length;
		
					for (index=0;index<size;++index)
		
						output[index] = Public.clone(input[index]);
		
				} else if (type === 'object') {
		
					output = {};
		
					for (index in input)
		
						output[index] = Public.clone(input[index]);
		
				}
		
				return output;
		
			};
		
			/**
			 * Merge two objects recursively
			 * @param mixed input
			 * @param mixed extend
			 * @return mixed
			 */
		
			function merge_recursive(base, extend) {
		
				if (typeOf(base) !== 'object')
		
					return extend;
		
				for (var key in extend) {
		
					if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {
		
						base[key] = merge_recursive(base[key], extend[key]);
		
					} else {
		
						base[key] = extend[key];
		
					}
		
				}
		
				return base;
		
			}
		
			/**
			 * Merge two or more objects
			 * @param bool clone
			 * @param bool recursive
			 * @param array argv
			 * @return object
			 */
		
			function merge(clone, recursive, argv) {
		
				var result = argv[0],
					size = argv.length;
		
				if (clone || typeOf(result) !== 'object')
		
					result = {};
		
				for (var index=0;index<size;++index) {
		
					var item = argv[index],
		
						type = typeOf(item);
		
					if (type !== 'object') continue;
		
					for (var key in item) {
		
						var sitem = clone ? Public.clone(item[key]) : item[key];
		
						if (recursive) {
		
							result[key] = merge_recursive(result[key], sitem);
		
						} else {
		
							result[key] = sitem;
		
						}
		
					}
		
				}
		
				return result;
		
			}
		
			/**
			 * Get type of variable
			 * @param mixed input
			 * @return string
			 *
			 * @see http://jsperf.com/typeofvar
			 */
		
			function typeOf(input) {
		
				return ({}).toString.call(input).slice(8, -1).toLowerCase();
		
			}
		
			if (isNode) {
		
				module.exports = Public;
		
			} else {
		
				window[publicName] = Public;
		
			}
		
		})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}


	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Created by Shayakhmetov on 05.12.2016.
		 */
		
		var MATH = {
		    en: __webpack_require__(5),
		    es: __webpack_require__(21),
		    ru: __webpack_require__(29)
		};
		var TEXT = __webpack_require__(36);
		
		module.exports = function(text, settings){
		    var result;
		    switch(settings.output){
		        case 'text':
		            result = TEXT(text, settings);
		            break;
		        default:
		            result = MATH[settings.lang](text, settings);
		    }
		    return result.trim().replace(/\s{2,}/, ' ');
		}

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Created by Shayakhmetov on 23.08.2016.
		 */
		
		'use strict';
		
		var numbersProcessing = __webpack_require__(7);
		var symbols = __webpack_require__(8);
		var operators = __webpack_require__(9);
		var fractions = __webpack_require__(10);
		var sets = __webpack_require__(11);
		var logic = __webpack_require__(12);
		var calculus = __webpack_require__(13);
		var postprocessing = __webpack_require__(20);
		
		module.exports = function(text, options){
		    var exp;
		    switch(options.type){
		        case 'algebra':
		            var masks = [].concat(fractions, symbols, operators, calculus);
		            masks.sort(compare);
		            exp = process(numbersProcessing(text), masks, options.output);
		            break;
		        case 'set':
		            var masks = [].concat(fractions, sets);
		            masks.sort(compare);
		            exp = process(numbersProcessing(text), masks, options.output);
		            break;
		        case 'logic':
		            var masks = [].concat(fractions, logic, sets, operators);
		            masks.sort(compare);
		            exp = process(numbersProcessing(text), masks, options.output);
		            break;
		    };
		    return postprocessing(exp);
		};
		
		function process(text, masks, output){
		    var resultStr = text;
		    masks.forEach(function(sign){
		        var format = (output in sign)? output : 'latex';
		        resultStr = resultStr.replace(sign.mask, sign[format]);
		    });
		    return resultStr;
		}
		
		function compare(a,b){
		    if(!('priority' in a))
		        a.priority = 0;
		    if(!('priority' in b))
		        b.priority = 0;
		    if(a.priority < b.priority)
		        return 1;
		    if(a.priority > b.priority)
		        return -1;
		    return 0;
		}
		/*
		function numbersProcessing(text){
		    return text;
		}*/
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		// shim for using process in browser
		var process = module.exports = {};
		
		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.
		
		var cachedSetTimeout;
		var cachedClearTimeout;
		
		function defaultSetTimout() {
		    throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout () {
		    throw new Error('clearTimeout has not been defined');
		}
		(function () {
		    try {
		        if (typeof setTimeout === 'function') {
		            cachedSetTimeout = setTimeout;
		        } else {
		            cachedSetTimeout = defaultSetTimout;
		        }
		    } catch (e) {
		        cachedSetTimeout = defaultSetTimout;
		    }
		    try {
		        if (typeof clearTimeout === 'function') {
		            cachedClearTimeout = clearTimeout;
		        } else {
		            cachedClearTimeout = defaultClearTimeout;
		        }
		    } catch (e) {
		        cachedClearTimeout = defaultClearTimeout;
		    }
		} ())
		function runTimeout(fun) {
		    if (cachedSetTimeout === setTimeout) {
		        //normal enviroments in sane situations
		        return setTimeout(fun, 0);
		    }
		    // if setTimeout wasn't available but was latter defined
		    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
		        cachedSetTimeout = setTimeout;
		        return setTimeout(fun, 0);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedSetTimeout(fun, 0);
		    } catch(e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
		            return cachedSetTimeout.call(null, fun, 0);
		        } catch(e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
		            return cachedSetTimeout.call(this, fun, 0);
		        }
		    }
		
		
		}
		function runClearTimeout(marker) {
		    if (cachedClearTimeout === clearTimeout) {
		        //normal enviroments in sane situations
		        return clearTimeout(marker);
		    }
		    // if clearTimeout wasn't available but was latter defined
		    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
		        cachedClearTimeout = clearTimeout;
		        return clearTimeout(marker);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedClearTimeout(marker);
		    } catch (e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
		            return cachedClearTimeout.call(null, marker);
		        } catch (e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
		            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
		            return cachedClearTimeout.call(this, marker);
		        }
		    }
		
		
		
		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;
		
		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}
		
		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = runTimeout(cleanUpNextTick);
		    draining = true;
		
		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    runClearTimeout(timeout);
		}
		
		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        runTimeout(drainQueue);
		    }
		};
		
		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};
		
		function noop() {}
		
		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
		
		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};
		
		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Created by 96664_000 on 16.08.2016.
		 */
		'use strict';
		
		var small = {
		        'zero': 0,
		        'one': 1,
		        'two': 2,
		        'three': 3,
		        'four': 4,
		        'five': 5,
		        'six': 6,
		        'seven': 7,
		        'eight': 8,
		        'nine': 9,
		        'ten': 10,
		        'eleven': 11,
		        'twelve': 12,
		        'thirteen': 13,
		        'fourteen': 14,
		        'fifteen': 15,
		        'sixteen': 16,
		        'seventeen': 17,
		        'eighteen': 18,
		        'nineteen': 19
		    },
		    average = {
		        'twenty': 20,
		        'thirty': 30,
		        'forty': 40,
		        'fifty': 50,
		        'sixty': 60,
		        'seventy': 70,
		        'eighty': 80,
		        'ninety': 90
		    },
		    magnitudes = [
		        {text: 'hundred', order: 2},
		        {text: 'thousand', order: 3},
		        {text: 'million', order: 6},
		        {text: 'billion', order: 9},
		        {text: 'trillion', order: 12},
		        {text: 'quadrillion', order: 15},
		        {text: 'quintillion', order: 18},
		        {text: 'sextillion', order: 21},
		        {text: 'septillion', order: 24},
		        {text: 'octillion', order: 27},
		        {text: 'nonillion', order: 30},
		        {text: 'decillion', order: 33}
		    ],
		    ordinal = {
		    'naught': 0,
		    'first': 1,
		    'second': 2,
		    'third': 3,
		    'fourth': 4,
		    'fifth': 5,
		    'sixth': 6,
		    'seventh': 7,
		    'eighth': 8,
		    'ninth': 9,
		    'tenth': 10,
		    'eleventh': 11,
		    'twelfth': 12,
		    'thirteenth': 13,
		    'fourteenth': 14,
		    'fifteenth': 15,
		    'sixteenth': 16,
		    'seventeenth': 17,
		    'eighteenth': 18,
		    'nineteenth': 19,
		    'twentieth': 20,
		    'thirtieth': 30,
		    'fortieth': 40,
		    'fiftieth': 50,
		    'sixtieth': 60,
		    'seventieth': 70,
		    'eightieth': 80,
		    'ninetieth': 90,
		    'hundredth': 100,
		    'thousandth': 1000,
		    'millionth': 1000000,
		    'billionth': 1000000000,
		    'trillionth': 1000000000000,
		    'quadrillionth': 1000000000000000,
		    'quintillionth': 1000000000000000000,
		    'sextillionth': 1000000000000000000000,
		    'septillionth': 1000000000000000000000000,
		    'octillionth': 1000000000000000000000000000,
		    'nonillionth': 1000000000000000000000000000000,
		    'decillionth': 1000000000000000000000000000000000
		};
		    module.exports = process;
		
		
		function process(text){
		    /*for(var number in small){
		     while(arr.indexOf(number) > -1){
		     var index = arr.indexOf(number);
		     arr[index] = small[number];
		     }
		     }*/
		    var resultArr = text.replace(/oneplus/g, 'one plus').split(/\s+/);
		    var resultArr = resultArr.map(function(el, index){
		        if(el in small)
		            return small[el].toString();
		        if(el in ordinal)
		            return ordinal[el].toString() + '-th';
		        if(el in average){
		            if(index < resultArr.length - 1)
		                if(resultArr[index + 1] in small) {
		                    var nextVal = resultArr[index + 1];
		                    resultArr[index + 1] = '';
		                    return (average[el] / 10).toString() + small[nextVal].toString();
		                }
		            return average[el].toString();
		        }
		        return el;
		    });
		    magnitudes.forEach(function(magnitude){
		        while(resultArr.indexOf(magnitude.text) > -1){
		            var index = resultArr.indexOf(magnitude.text);
		            var currIndex = index + 1;
		            var order = 0;
		            resultArr[index] = '';
		            while ((currIndex < resultArr.length)&&(!isNaN(resultArr[currIndex]) || !isNaN(resultArr[currIndex].replace('-th', '')))) {
		                order += resultArr[currIndex].replace('-th', '').length;
		                resultArr[index] += resultArr[currIndex];
		                resultArr[currIndex] = '';
		                currIndex++;
		            }
		            if(!isNaN(resultArr[index - 1])) {
		                resultArr[index - 1] += zeros(magnitude.order - order) + resultArr[index];
		                resultArr[index] = '';
		            }
		            else
		                resultArr[index] = Math.pow(10, (magnitude.order - order > 0)? (magnitude.order - order) : 0).toString() + resultArr[index];
		        }
		    });
		    return resultArr.filter(function(v){return v!==''}).join(' ');
		}
		function zeros(n){
		    var resultStr = '';
		    if(n > 0)
		        for(var i = 0; i < n; i++){
		            resultStr += '0';
		        }
		    return resultStr;
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 23.08.2016.
		 */
		'use strict';
		
		var SIGNS = [
		    {mask: /infinity/g, latex: '\\infty', exp: 'infty', priority: -1},
		    {mask: /alpha/g, latex: '\\alpha', exp: 'alpha', priority: -1},
		    {mask: /beta/g, latex: '\\beta', exp: 'beta', priority: -1},
		    {mask: /chi/g, latex: '\\chi', exp: 'chi', priority: -1},
		    {mask: /delta/g, latex: '\\delta', exp: 'delta', priority: -1},
		    {mask: /epsilon/g, latex: '\\epsilon', exp: 'epsilon', priority: -1},
		    {mask: /varepsilon/g, latex: '\\varepsilon', exp: 'varepsilon', priority: -1},
		    {mask: /eta/g, latex: '\\eta', exp: 'eta', priority: -1},
		    {mask: /gamma/g, latex: '\\gamma', exp: 'gamma', priority: -1},
		    {mask: /iota/g, latex: '\\iota', exp: 'iota', priority: -1},
		    {mask: /kappa/g, latex: '\\kappa', exp: 'kappa', priority: -1},
		    {mask: /lambda/g, latex: '\\lambda', exp: 'lambda', priority: -1},
		    {mask: /mu/g, latex: '\\mu', exp: 'mu', priority: -1},
		    {mask: /nu/g, latex: '\\nu', exp: 'nu', priority: -1},
		    {mask: /omega/g, latex: '\\omega', exp: 'omega', priority: -1},
		    {mask: /phi/g, latex: '\\phi', exp: 'phi', priority: -1},
		    {mask: /varphi/g, latex: '\\varphi', exp: 'varphi', priority: -1},
		    {mask: /pi/g, latex: '\\pi', exp: 'pi', priority: -1},
		    {mask: /psi/g, latex: '\\psi', exp: 'psi', priority: -1},
		    {mask: /rho/g, latex: '\\rho', exp: 'rho', priority: -1},
		    {mask: /sigma/g, latex: '\\sigma', exp: 'sigma', priority: -1},
		    {mask: /tau/g, latex: '\\tau', exp: 'tau', priority: -1},
		    {mask: /theta/g, latex: '\\theta', exp: 'theta', priority: -1},
		    {mask: /vartheta/g, latex: '\\vartheta', exp: 'vartheta', priority: -1},
		    {mask: /upsilon/g, latex: '\\upsilon', exp: 'upsilon', priority: -1},
		    {mask: /xi/g, latex: '\\xi', exp: 'xi', priority: -1},
		    {mask: /zeta/g, latex: '\\zeta', exp: 'zeta', priority: -1}
		];
		
		module.exports = SIGNS;


	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		'use strict';
		
		var SIGNS = [
		    {mask: / point /g, latex: '.', priority: 1},
		
		    {mask: /\D point \d/g, latex: function(text){
		      return text.replace('point ', '0.');
		    }, priority: 2},
		
		    {mask: /[^\s]+ (plus|minus|times|over|divided by|by) .+ quantity/g, latex: function(text){
		        return '(' + text.replace(' quantity', ')');
		    }},
		
		    {mask: /plus/g, latex: '+'},
		    {mask: /sum of .+? and [^\s]+/g, latex: function(text){
		        return '(' + text.replace('sum of ', '').replace('and', '+') + ')';
		    }},
		
		    {mask: /\s?minus /g, latex: '-', priority: 1},
		    {mask: /(a )?positive /g, latex: ''},
		    {mask: /\s?negative /g, latex: '-', priority: 1},
		    {mask: /difference of .+? and [^\s]+/g, latex: function(text){
		        return '(' + text.replace('difference of ', '').replace('and', '-') + ')';
		    }},
		
		    {mask: /plus minus/g, latex: '\\pm', priority: 2},
		
		    {mask: /multiplied by/g, latex: '\\times', exp: 'times'},
		    {mask: /times/g, latex: '\\times', exp: 'times'},
		    {mask: /multiplication of .+? and [^\s]+/g, latex: function(text){
		        return '(' + text.replace('multiplication of ', '').replace('and', '\\times') + ')';
		    }, exp: function(text){
		        return '(' + text.replace('multiplication of ', '').replace('and', 'times') + ')';
		    }},
		    {mask: /product of .+? and [^\s]+/g, latex: function(text){
		        return '(' + text.replace('product of ', '').replace('and', '\\times') + ')';
		    }, exp: function(text){
		        return '(' + text.replace('product of ', '').replace('and', 'times') + ')';
		    }},
		    {mask: /multiplication/g, latex: '\\times', exp: 'times', priority: 0},
		
		    {mask: /divided by/g, latex: '/'},
		    {mask: / by /g, latex: '/', priority: -1},
		    {mask: /over/g, latex: '/'},
		    {mask: /ratio of [^\s]+ and [^\s]+/g, latex: function(text){
		        return '(' + text.replace('ratio of ', '').replace('and', '/') + ')';
		    }},
		
		    {mask: /equals/g, latex: '='},
		    {mask: /is equal to/g, latex: '='},
		    {mask: /is approximately equal to/g, latex: '\\approx', exp: '~~'},
		    {mask: /the identity sign/g, latex: '\\dashv', exp: '-='},
		    {mask: /is identically equal to/g, latex: '\\dashv', exp: '-='},
		    {mask: /is not equal to/g, latex: '\\neq', exp: '!='},
		    {mask: /is greater than/g, latex: '\\gt', exp: '>'},
		    {mask: /is less than/g, latex: '\\lt', exp: '<'},
		    {mask: /is greater than or equal to/g, latex: '\\geq', exp: '>='},
		    {mask: /is less than or equal to/g, latex: '\\leq', exp: '<='},
		
		    {mask: /absolute value of [^\s]+/g, latex: function(text){
		        return '|' + text.replace('absolute value of ', '') + '|';
		    }},
		    {mask: /magnitude of [^\s]+/g, latex: function(text){
		        return '|' + text.replace('magnitude of ', '') + '|';
		    }},
		
		  {mask: /left parenthesis/g, latex: '('},
		  {mask: /right parenthesis/g, latex: ')'},
		
		  //{mask: /(round )?bracket(s)? open(ed|ing)?/g, latex: '('},
		  //{mask: /(round )?bracket(s)? clos(e|ed|ing)?/g, latex: ')'},
		
		  {mask: /open(ed|ing)? (round )?bracket(s)?/g, latex: '('},
		  {mask: /clos(e|ed|ing)? (round )?bracket(s)?/g, latex: ')'},
		
		    {mask: /open parenthesis/g, latex: '('},
		    {mask: /close parenthesis/g, latex: ')'},
		
		    //hot fix
		    {mask: /open parentheses/g, latex: '('},
		    {mask: /close parentheses/g, latex: ')'},
		    {mask: /left parentheses/g, latex: '('},
		    {mask: /right parentheses/g, latex: ')'},
		
		    {mask: /open interval from .+? to [^\s]+/g, latex: function(text){
		        return '(' + text.replace('open interval from ', '').replace('to', ', ') + ')';
		    }},
		    {mask: /closed interval from .+? to [^\s]+/g, latex: function(text){
		        return '[' + text.replace('closed interval from ', '').replace('to', ', ') + ']';
		    }},
		    {mask: /open from the left interval from .+? to [^\s]+/g, latex: function(text){
		        return '(' + text.replace('open from the left interval from ', '').replace('to', ', ') + ']';
		    }},
		    {mask: /closed from the right interval from .+? to [^\s]+/g, latex: function(text){
		        return '(' + text.replace('closed from the right interval from ', '').replace('to', ', ') + ']';
		    }},
		    {mask: /open from the right interval from .+? to [^\s]+/g, latex: function(text){
		        return '[' + text.replace('open from the right interval from ', '').replace('to', ', ') + ')';
		    }},
		    {mask: /closed from the left interval from .+? to [^\s]+/g, latex: function(text){
		        return '[' + text.replace('closed from the left interval from ', '').replace('to', ', ') + ')';
		    }},
		
		    {mask: / raised to the [^\s]+ power/g, latex: function(text){
		        return '^{' + text.replace(' raised to the ', '').replace(' power', '').replace('-th', '') + '}';
		    }},
		    {mask: / x-rays of to the [^\s]+ power/g, latex: function(text){
		        return '^{' + text.replace(' x-rays of to the ', '').replace(' power', '').replace('-th', '') + '}';
		    }},
		    {mask: /the [^\s]+ power of [^\s]+/g, latex: function(text){
		        var params = text.split(/the | power of /);
		        return params[2] + '^' + params[1].replace('-th', '');
		    }},
		    {mask: / to the [^\s]+ power/g, latex: function(text){
		        return '^{' + text.replace(' to the ', '').replace(' power', '').replace('-th', '') + '}';
		    }},
		    {mask: / to the power of [^\s]+/g, latex: function(text){
		        return '^' + text.replace(' to the power of ', '{').replace('-th', '') + '}';
		    }},
		    {mask: / to the [^\s]+/g, latex: function(text){
		        return '^' + text.replace(' to the ', '{').replace('-th', '') + '}';
		    }},
		    {mask: / to [^\s]+/g, latex: function(text){
		        return '^' + text.replace(' to ', '{').replace('-th', '') + '}';
		    }},
		    {mask:  /\d+ \d(-th|nd)/g, latex: function(text){
		      var numbers = text.replace('nd', '').match(/\d+/g);
		      return '\\frac{' + numbers[0] + '}{' + numbers[1] + '}'}
		    },
		    {mask: / [^\s]+-th/g, latex: function(text){
		        return '_{' + text.replace('-th', '') + '}';
		    }},
		    {mask: /the square of [^\s]+/g, latex: function(text){
		        return text.replace('the square of ', '') + '^2';
		    }},
		    {mask: /squared/g, latex: '^2'},
		    {mask: /cubed/g, latex: '^3'},
		
		    {mask: / sub /g, latex: '_'},
		    {mask: / to /g, latex: '^', priority: -1},
		    {mask: / super /g, latex: '^'},
		    {mask: / factorial/g, latex: '!'},
		
		
		    {mask: / inverse/g, latex: function(text){
		        return text.replace(' inverse', '^{-1}');
		    }},
		    {mask: /the square root of [^\s]+/g, latex: function(text){
		        return text.replace('square root of', '\\sqrt');
		    }, exp: function(text){
		        return text.replace('square root of', 'sqrt');
		    }, priority: 1},
		    {mask: /square root of [^\s]+/g, latex: function(text){
		        return text.replace('square root of', '\\sqrt');
		    }, exp: function(text){
		        return text.replace('square root of', 'sqrt');
		    }},
		    {mask: /the cube root of [^\s]+/g, latex: function(text){
		        return text.replace('square root of ', '\\sqrt');
		    }, exp: function(text){
		        return text.replace('square root of ', 'root[3]');
		    }, priority: 1},
		    {mask: /cube root of [^\s]+/g, latex: function(text){
		        return text.replace('square root of ', '\\sqrt');
		    }, exp: function(text){
		        return text.replace('square root of ', 'root[3]');
		    }},
		    {mask: /the root of the power .+? of [^\s]+/g, latex: function(text){
		        return text.replace('the root of the power ', '\\sqrt[').replace(' of ', ']');
		    }, exp: function(text){
		        return text.replace('the root of the power ', 'root[').replace(' of ', ']');
		    }}
		];
		
		
		module.exports = SIGNS;


	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 02.11.2016.
		 */
		'use strict';
		
		var SIGNS = [
		    {mask: /the one half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 2},
		    {mask: /and 1 half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 1},
		    {mask: /1 half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 1},
		    {mask: /and a half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 1},
		    {mask: /half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 0}
		
		];
		
		
		module.exports = SIGNS;

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 23.08.2016.
		 */
		'use strict';
		
		var SETS = [
		    {mask: /union/g, latex: '\\cup', exp: 'uu'},
		    {mask: /union of [^\s]+? and [^\s]+?/g, latex: function(text){
		        return text.replace('union of ', '').replace('and', '\\cup');
		    }, exp: function(text){
		        return text.replace('union of ', '').replace('and', 'uu');
		    }},
		    {mask: /intersection/g, latex: '\\cap', exp: 'nn'},
		    {mask: /intersection of [^\s]+? and [^\s]+?/g, latex: function(text){
		        return text.replace('intersection of ', '').replace('and', '\\cap');
		    }, exp: function(text){
		        return text.replace('intersection of ', '').replace('and', 'nn');
		    }},
		    {mask: /minus/g, latex: '\\setminus', exp: '\\\\'},
		    {mask: /set difference of [^\s]+? and [^\s]+?/g, latex: function(text){
		        return text.replace('set difference of ', '').replace('and', '\\setminus');
		    }, exp: function(text){
		        return text.replace('set difference of ', '').replace('and', '\\\\');
		    }},
		    {mask: /symmetric difference of [^\s]+? and [^\s]+?/g, latex: function(text){
		        return text.replace('symmetric difference of ', '').replace('and', '\\Delta');
		    }, exp: function(text){
		        return text.replace('symmetric difference of ', '').replace('and', 'Delta');
		    }},
		    {mask: /compliment of/g, latex: '\\bar', exp: 'bar'},
		    {mask: /closure of/g, latex: '\\bar', exp: 'bar'},
		
		    {mask: /belongs to/g, latex: '\\in', exp: 'in'},
		    {mask: /is an element of/g, latex: '\\in', exp: 'in'},
		    {mask: /[^\s]+? contains [^\s]+?/g, latex: function(text){
		        var params = text.split(' contains ');
		        return params[1] + ' \\in ' + params[0];
		    }, exp: function(text){
		        var params = text.split(' contains ');
		        return params[1] + ' in ' + params[0];
		    }},
		    {mask: /does not belong to/g, latex: '\\notin', exp: '!in'},
		    {mask: /is a subset of/g, latex: '\\subset', exp: 'sub'},
		    {mask: /is not a subset of/g, latex: '\\subset', exp: 'sub'},
		    {mask: /the empty set/g, latex: '\\emptyset', exp: 'O/'},
		
		    {mask: /the set of natural numbers/g, latex: '\\mathbb{N}', exp: 'NN'},
		    {mask: /the set of integer numbers/g, latex: '\\mathbb{Z}', exp: 'ZZ'},
		    {mask: /the set of rational numbers/g, latex: '\\mathbb{Q}', exp: 'QQ'},
		    {mask: /the set of real numbers/g, latex: '\\mathbb{R}', exp: 'RR'},
		    {mask: /the set of irrational numbers/g, latex: '\\mathbb{R}\\setminus\\mathbb{Q}', exp: 'RR\\\\QQ'},
		    {mask: /the set of algebraic numbers/g, latex: '\\mathbb{A}', exp: 'bbb"A"'},
		    {mask: /the set of transcendental numbers/g, latex: '\\mathbb{R}\\setminus\\mathbb{A}', exp: 'RR\\\\bbb"A"'},
		    {mask: /the n-dimensional real space/g, latex: '\\mathbb{R}^\\varpropto', exp: 'RR^prop'},
		    {mask: /the set of complex numbers/g, latex: '\\mathbb{C}', exp: 'bbb"C"'},
		    {mask: /the n-dimensional complex space/g, latex: '\\mathbb{C}^\\varpropto', exp: 'bbb"C"^prop'},
		    {mask: /the n-dimensional projective space/g, latex: '\\mathbb{P}^\\varpropto', exp: 'bbb"P"^prop'},
		    {mask: /the power ser of A/g, latex: '2^A'},
		    {mask: /boundary of/g, latex: '2^A', exp: '2^A'},
		    {mask: /the power ser of A/g, latex: '2^A', exp: '2^A'},
		
		    {mask: /cross/g, latex: '\\times', exp: 'xx'},
		    {mask: /direct product of [^\s]+? and [^\s]+?/g, latex: function(text){
		        return text.replace('direct product of ', '').replace('and', '\\times');
		    }, exp: function(text){
		        return text.replace('direct product of ', '').replace('and', 'xx');
		    }},
		    {mask: /cartesian product of [^\s]+? and [^\s]+?/g, latex: function(text){
		        return text.replace('cartesian product of ', '').replace('and', '\\times');
		    }, exp: function(text){
		        return text.replace('cartesian product of ', '').replace('and', 'xx');
		    }},
		    {mask: /plus/g, latex: '\\oplus', exp: 'o+'},
		    {mask: /direct sum of [^\s]+? and [^\s]+?/g, latex: function(text){
		        return text.replace('direct sum of ', '').replace('and', '\\oplus');
		    }, exp: function(text){
		        return text.replace('direct sum of ', '').replace('and', 'o+');
		    }},
		    {mask: /wedge/g, latex: '\\wedge', exp: '^^'},
		    {mask: /wedge product of [^\s]+? and [^\s]+?/g, latex: function(text){
		        return text.replace('wedge product of ', '').replace('and', '\\wedge');
		    }, exp: function(text){
		        return text.replace('wedge product of ', '').replace('and', '^^');
		    }},
		    {mask: /interior product of [^\s]+? and [^\s]+?/g, latex: function(text){
		        return text.replace('interior product of ', '').replace('and', '\\wedge');
		    }, exp: function(text){
		        return text.replace('interior product of ', '').replace('and', '^^');
		    }},
		    {mask: /quotient space [^\s]+? over [^\s]+?/g, latex: function(text){
		        return text.replace('quotient space ', '').replace('over', '/');
		    }, exp: function(text){
		        return text.replace('quotient space ', '').replace('over', '//');
		    }},
		    {mask: /factor space [^\s]+? over [^\s]+?/g, latex: function(text){
		        return text.replace('factor space ', '').replace('over', '/');
		    }, exp: function(text){
		        return text.replace('factor space ', '').replace('over', '//');
		    }}
		];
		
		module.exports = SETS;


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 21.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: / or /g, latex: '\\lor', exp: 'vv'},
		    {mask: / and /g, latex: '\\wedge', exp: '^^', priority: -1},
		    {mask: / not /g, latex: '\\bar', exp: 'bar'},
		    {mask: / implies /g, latex: '\\Rightarrow', exp: 'rArr'},
		    {mask: / is equivalent to /g, latex: '\\sim', exp: '~'},
		    {mask: /for any/g, latex: '\\forall', exp: 'AA'},
		    {mask: /for all/g, latex: '\\forall', exp: 'AA'},
		    {mask: /there exists/g, latex: '\\exists', exp: 'EE'},
		    {mask: /such that/g, latex: ':'},
		    {mask: /real [^\s]+/g, latex: function(text){
		        return text.replace('real ', '') + '\\in\\mathbb{R}';
		    }, exp: function(text){
		        return text.replace('real ', '') + 'in RR';
		    }},
		    {mask: /integer [^\s]+/g, latex: function(text){
		        return text.replace('integer ', '') + '\\in\\mathbb{N}';
		    }, exp: function(text){
		        return text.replace('integer ', '') + 'in NN';
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		
		var derivatives = __webpack_require__(14);
		var functions = __webpack_require__(15);
		var integral = __webpack_require__(16);
		var limit = __webpack_require__(17);
		var series = __webpack_require__(18);
		var term = __webpack_require__(19);
		
		
		module.exports = [].concat(derivatives, functions, integral, limit, series, term);

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /d 2 [^\s]+ by d [^\s]+ squared/g, latex: function(text){
		        var params = text.replace('by d ', '').replace(' squared', '').replace(/^d 2 /, '').split(' ');
		        return '\\frac{d^2 ' + params[0] + '}{d ' + params[1] + '^2}';
		    }, exp: function(text){
		        var params = text.replace('by d ', '').replace(/^d /, '');
		        return 'frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }, priority: 1},
		    {mask: /\d+?-th derivative of [^\s]+ with respect to [^\s]+/g, latex: function(text){
		        var params = text.replace('-th derivative of ', ' ').replace('with respect to ', '').split(' ');
		        return '\\frac{d^' + params[0] + ' ' + params[1] + '}{d ' + params[2] + '^' + params[0] + '}';
		    }, exp: function(text){
		        var params = text.replace('-th derivative of ', '').replace('with respect to ', '').split(' ');
		        return '\\frac{d^' + params[0] + ' ' + params[1] + '}{d ' + params[2] + '^' + params[0] + '}';
		    }, priority: 1},
		
		    {mask: /partial d [^\s]+ by d [^\s]+/g, latex: function(text){
		        var params = text.replace('by d ', '').replace('partial d ', '').split(' ');
		        return '\\frac{\\partial ' + params[0] + '}{\\partial ' + params[1] + '}';
		    }, exp: function(text){
		        var params = text.replace('by d ', '').replace('partial d ', '').split(' ');
		        return 'frac{del ' + params[0] + '}{del ' + params[1] + '}';
		    }, priority: 1},
		    {mask: /\d+?-th partial derivative of [^\s]+ with respect to [^\s]+ and [^\s]+/g, latex: function(text){
		        var params = text.replace('-th partial derivative of ', ' ').replace('with respect to ', '').replace('and ', '').split(' ');
		        return '\\frac{\\partial ^' + params[0] + ' ' + params[1] + '}{\\partial ' + params[2] + '\\partial ' + params[3] + '}';
		    }, exp: function(text){
		        var params = text.replace('-th partial derivative of ', ' ').replace('with respect to ', '').replace('and ', '').split(' ');
		        return 'frac{del ^' + params[0] + ' ' + params[1] + '}{del ' + params[2] + 'del ' + params[3] + '}';
		    }},
		    {mask: /partial derivative of [^\s]+ with respect to [^\s]+/g, latex: function(text){
		        var params = text.replace('partial derivative of ', '').replace('with respect to ', '').split(' ');
		        return '\\frac{\\partial ' + params[0] + '}{\\partial ' + params[1] + '}';
		    }, exp: function(text){
		        var params = text.replace('partial derivative of ', '').replace('with respect to ', '').split(' ');
		        return 'frac{del ' + params[0] + '}{del ' + params[1] + '}';
		    }},
		
		    {mask: /d [^\s]+ by d [^\s]+/g, latex: function(text){
		        var params = text.replace('by d ', '').replace(/^d /, '').split(' ');
		        return '\\frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }, exp: function(text){
		        var params = text.replace('by d ', '').replace(/^d /, '').split(' ');
		        return 'frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }},
		    {mask: /derivative of [^\s]+ with respect to [^\s]+/g, latex: function(text){
		        var params = text.replace('derivative of ', '').replace('with respect to ', '').split(' ');
		        return '\\frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }, exp: function(text){
		        var params = text.replace('derivative of ', '').replace('with respect to ', '').split(' ');
		        return 'frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }},
		
		    {mask: /differential of/g, latex: 'd'},
		    {mask: /double prime/g, latex: '\\prime\\prime', exp: "''"},
		    {mask: /second derivative of [^\s]+/g, latex: function(text){
		        return text.replace('second derivative of ', '') + '\\prime\\prime';
		    }, exp: function(text){
		        return text.replace('second derivative of ', '') + "''";
		    }},
		    {mask: /triple prime/g, latex: '\\prime\\prime\\prime', exp: "'''"},
		    {mask: /third derivative of [^\s]+/g, latex: function(text){
		        return text.replace('third derivative of ', '') + '\\prime\\prime\\prime';
		    }, exp: function(text){
		        return text.replace('third derivative of ', '') + "'''";
		    }},
		    {mask: /prime/g, latex: '\\prime', exp: "'"},
		    {mask: /derivative of .+? of the order [^\s]+/g, latex: function(text){
		        return text.replace('derivative of ', '').replace(' of the order ', '^');
		    }},
		    {mask: /derivative of [^\s]+/g, latex: function(text){
		        return text.replace('derivative of ', '') + '\\prime';
		    }, exp: function(text){
		        return text.replace('derivative of ', '') + "'";
		    }},
		    {mask: /[^\s]+-th derivative of [^\s]+/g, latex: function(text){
		        var order = text.substring(0, text.indexOf('-th derivative of'));
		        var func = text.substring(text.lastIndexOf('-th derivative of')).replace('-th derivative of', '');
		        return func + '^{(' + order + ')}';
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 15 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: / of [^\s]+/g, latex: function(text){
		        return text.replace(' of ', '(') + ')';
		    }, priority: '-1'},
		    {mask: / is a function of [^\s]+/g, latex: function(text){
		        return text.replace(' is a function of ', '(') + ')';
		    }, priority: '-1'},
		    {mask: /domain of the function /g, latex: 'D_'},
		    {mask: /range of the function /g, latex: 'R_'},
		    {mask: /composition of the functions [^\s]+ and [^\s]+/g, latex: function(text){
		        return text.replace('composition of the functions ', '').replace(' and ', '\\circ');
		    }, exp: function(text){
		        return text.replace('composition of the functions ', '').replace(' and ', '@');
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /double integral (from .+? to [^\s]+)?/g, latex: function(text){
		        return text.replace('double integral ', '\\iint').replace('from ', '_{').replace(' to ', '}^{') + '}';
		    }, exp: function(text){
		        return text.replace('double integral ', 'intint').replace('from ', '_{').replace(' to ', '}^{') + '}';
		    }},
		    {mask: /triple integral (from .+? to [^\s]+)?/g, latex: function(text){
		        return text.replace('triple integral ', '\\iiint').replace('from ', '_{').replace(' to ', '}^{') + '}';
		    }, exp: function(text){
		        return text.replace('triple integral ', 'intintint').replace('from ', '_{').replace(' to ', '}^{') + '}';
		    }},
		    {mask: /integral (from .+? to [^\s]+)?/g, latex: function(text){
		        var close = (text.indexOf('from') > -1)? '}' : '';
		        return text.replace('integral ', '\\int').replace('from ', '_{').replace(' to ', '}^{') + close;
		    }, exp: function(text){
		        var close = (text.indexOf('from') > -1)? '}' : '';
		        return text.replace('integral ', 'int').replace('from ', '_{').replace(' to ', '}^{') + close;
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		/*var tmplStr = require('../../tmplStr');*/
		
		var RULES = [
		    {mask: /limit of [^\s]+ [^\s]+ as [^\s]+ tends to [^\s]+/g, latex: function(text){
		        var params = text.replace('limit of ', '').replace('as ', '').replace('tends to ', '').split(' ');
		        return /*tmplStr(params, '\\lim_{${2}\\to${3}}${0}_${1}');*/'\\lim_{' + params[2] + '\\to' + params[3] + '}' + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('limit of ', '').replace('as ', '').replace('tends to ', '').split(' ');
		        return 'lim_{' + params[2] + 'to' + params[3] + '}' + params[0] + '_' + params[1];
		    }},
		    {mask: /[^\s]+ [^\s]+ converges to [^\s]+ as [^\s]+ tends to [^\s]+/g, latex: function(text){
		        var params = text.replace('converges to ', '').replace('as ', '').replace('tends to ', '').split(' ');
		        return '\\lim_{' + params[3] + ' \\to ' + params[4] + '}' + params[0] + '_' + params[1] + '=' + params[2];
		    }, exp: function(text){
		        var params = text.replace('converges to ', '').replace('as ', '').replace('tends to ', '').split(' ');
		        return 'lim_{' + params[3] + ' to ' + params[4] + '}' + params[0] + '_' + params[1] + '=' + params[2];
		    }},
		    {mask: /[^\s]+ from the (left|right)/g, latex: function(text){
		        return '{' + text.replace('from the ', '').replace(' left', '-0').replace(' right', '+0') + '}';
		    }},
		    {mask: /limit of [^\s]+ of [^\s]+ as [^\s]+ approaches [^\s]+/g, latex: function(text){
		        var params = text.replace('limit of ', '').replace('of ', '').replace('as ', '').replace('approaches ', '').replace('from the ', '').split(' ');
		        return '\\lim_{' + params[2] + ' \\to ' + params[3] + '}' + params[0] + '(' + params[1] + ')';
		    }, exp: function(text){
		        var params = text.replace('limit of ', '').replace('of ', '').replace('as ', '').replace('approaches ', '').replace('from the ', '').split(' ');
		        return 'lim_{' + params[2] + ' to ' + params[3] + '}' + params[0] + '(' + params[1] + ')';
		    }},
		    {mask: / and /g, latex: '\\wedge', exp: '^^'},
		    {mask: / not /g, latex: '\\bar', exp: 'bar'},
		    {mask: / implies /g, latex: '\\Rightarrow', exp: 'rArr'},
		    {mask: / is equivalent to /g, latex: '\\sim', exp: '~'},
		    {mask: /for any/g, latex: '\\forall', exp: 'AA'},
		    {mask: /for all/g, latex: '\\forall', exp: 'AA'},
		    {mask: /there exists/g, latex: '\\exists', exp: 'EE'},
		    {mask: /such that/g, latex: ':'},
		    {mask: /real [^\s]+/g, latex: function(text){
		        return text.replace('real ', '') + '\\in\\mathbb{R}';
		    }, exp: function(text){
		        return text.replace('real ', '') + 'in RR';
		    }},
		    {mask: /integer [^\s]+/g, latex: function(text){
		        return text.replace('integer ', '') + '\\in\\mathbb{N}';
		    }, exp: function(text){
		        return text.replace('integer ', '') + 'in NN';
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 18 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /sequence [^\s]+ [^\s]+ as [^\s]+ goes from [^\s]+ to [^\s]+/g, latex: function(text){
		        var params = text.replace('sequence ', '').replace('as ', '').replace('goes from ', '').replace('to ', '').split(' ');
		        return '\\{' + params[0] + '_' + params[1] + '\\}_{' + params[2] + '=' + params[3] + '}^{' + params[4] + '}';
		    }, exp: function(text){
		        var params = text.replace('sequence ', '').replace('as ', '').replace('goes from ', '').replace('to ', '').split(' ');
		        return '{' + params[0] + '_' + params[1] + '}_{' + params[2] + '=' + params[3] + '}^{' + params[4] + '}';
		    }},
		    {mask: /sequence [^\s]+ [^\s]+/g, latex: function(text){
		        var params = text.replace('sequence ', '').split(' ');
		        return '\\{' + params[0] + '_' + params[1] + '\\}';
		    }},
		    {mask: /sum of [^\s]+ [^\s]+ as [^\s]+ goes from [^\s]+ to [^\s]+/g, latex: function(text){
		        var params = text.replace('sum of ', '').replace('as ', '').replace('goes from ', '').replace('to ', '').split(' ');
		        return '\\sum_{' + params[2] + '=' + params[3] + '}^{' + params[4] + '}' + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('sum of ', '').replace('as ', '').replace('goes from ', '').replace('to ', '').split(' ');
		        return 'sum_{' + params[2] + '=' + params[3] + '}^{' + params[4] + '}' + params[0] + '_' + params[1];
		    }},
		    {mask: /series [^\s]+ [^\s]+/g, latex: function(text){
		        var params = text.replace('series ', '').split(' ');
		        return '\\sum' + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('series ', '').split(' ');
		        return 'sum' + params[0] + '_' + params[1];
		    }, priority: -1},
		    {mask: /sequence [^\s]+ [^\s]+ converges to/g, latex: function(text){
		        var params = text.replace('sequence ', '').replace(' converges to', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to';
		    }, exp: function(text){
		        var params = text.replace('sequence ', '').replace(' converges to', '').split(' ');
		        return params[0] + '_' + params[1] + 'to';
		    }},
		    {mask: /[^\s]+ [^\s]+ converges to/g, latex: function(text){
		        var params = text.replace(' converges to', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to';
		    }, exp: function(text){
		        var params = text.replace(' converges to', '').split(' ');
		        return params[0] + '_' + params[1] + 'to';
		    }},
		    {mask: /[^\s]+ [^\s]+ diverges to infinity/g, latex: function(text){
		        var params = text.replace(' diverges to infinity', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to\\infty';
		    }, exp: function(text){
		        var params = text.replace(' diverges to infinity', '').split(' ');
		        return params[0] + '_' + params[1] + 'to infty';
		    }},
		    {mask: /series [^\s]+ [^\s]+ diverges/g, latex: function(text){
		        var params = text.replace(' diverges', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to\\infty';
		    }, exp: function(text){
		        var params = text.replace(' diverges', '').split(' ');
		        return params[0] + '_' + params[1] + 'to infty';
		    }},
		    {mask: /[^\s]+ [^\s]+ diverges/g, latex: function(text){
		        var params = text.replace(' diverges', '').split(' ');
		        return '\\sum' + params[0] + '_' + params[1] + '=\\infty';
		    }, exp: function(text){
		        var params = text.replace(' diverges', '').split(' ');
		        return 'sum' + params[0] + '_' + params[1] + '= infty';
		    }},
		    {mask: /[^\s]+ [^\s]+ goes to infinity/g, latex: function(text){
		        var params = text.replace(' goes to infinity', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to\\infty';
		    }, exp: function(text){
		        var params = text.replace(' goes to infinity', '').split(' ');
		        return params[0] + '_' + params[1] + 'to infty';
		    }},
		    {mask: /[^\s]+ [^\s]+ approaches infinity/g, latex: function(text){
		        var params = text.replace(' approaches infinity', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to\\infty';
		    }, exp: function(text){
		        var params = text.replace(' approaches infinity', '').split(' ');
		        return params[0] + '_' + params[1] + 'to infty';
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 19 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /the laplace operator of/g, latex: '\\Delta', exp: 'Delta'},
		    {mask: /the Laplacian of/g, latex: '\\Delta', exp: 'Delta'},
		    {mask: /nabla/g, latex: '\\nabla', exp: 'grad'},
		    {mask: /gradient of/g, latex: '\\nabla', exp: 'grad'},
		    {mask: /gradient/g, latex: '\\mathbf{grad}', exp: 'bb{g\\rad}'},
		    {mask: /divergence/g, latex: '\\mathbf{div}', exp: 'bb{d\iv}'},
		    {mask: /rotor/g, latex: '\\mathbf{rot}', exp: 'bb{rot}'},
		    {mask: /imaginary part of/g, latex: 'Im'},
		    {mask: /real part of/g, latex: 'Re'},
		    {mask: /as [^\s]+ goes from [^\s]+ to [^\s]+/g, latex: function(text){
		        return text.replace('as ', '_{').replace(' goes from ', '=').replace(' to ', '}^{') + '}';
		    }},
		    {mask: /as [^\s]+ runs over [^\s]+ to [^\s]+/g, latex: function(text){
		        return text.replace('as ', '_{').replace(' runs over ', '\\in').replace(' to ', '}^{') + '}';
		    }, exp: function(text){
		        return text.replace('as ', '_{').replace(' runs over ', 'in').replace(' to ', '}^{') + '}';
		    }},
		    {mask: /as [^\s]+ is positive/g, latex: function(text){
		        return text.replace('as ', '_{').replace(' is positive', '\\gt0}');
		    }, exp: function(text){
		        return text.replace('as ', '_{').replace(' is positive', '>0}');
		    }},
		    {mask: /as [^\s]+ is negative/g, latex: function(text){
		        return text.replace('as ', '_{').replace(' is negative', '\\lt0}');
		    }, exp: function(text){
		        return text.replace('as ', '_{').replace(' is negative', '<0}');
		    }},
		    {mask: /residue of [^\s]+ of [^\s]+ at [^\s]+ equals [^\s]+/g, latex: function(text){
		        var params = text.replace('residue of ', '').replace('of ', '').replace('at ', '').replace('equals ', '').split(' ');
		        return 'res ' + '_{' + params[2] + '=' + params[3] + '}' + params[0] + '(' + params[1] + ')';
		    }},
		    {mask: /minimum of [^\s]+ of [^\s]+ [^\s]+/g, latex: function(text){
		        var params = text.replace('minimum of ', '').replace('of ', '').split(' ');
		        return 'min ' + params[2] + params[0] + '(' + params[1] + ')';
		    }, exp: function(text){
		        var params = text.replace('minimum of ', '').replace('of ', '').split(' ');
		        return 'min ' + params[2] + params[0] + '(' + params[1] + ')';
		    }},
		    {mask: /maximum of [^\s]+ of [^\s]+ [^\s]+/g, latex: function(text){
		        var params = text.replace('maximum of ', '').replace('of ', '').split(' ');
		        return 'max ' + params[2] + params[0] + '(' + params[1] + ')';
		    }, exp: function(text){
		        var params = text.replace('maximum of ', '').replace('of ', '').split(' ');
		        return 'max ' + params[2] + params[0] + '(' + params[1] + ')';
		    }},
		    {mask: /sum of [^\s]+ [^\s]+ [^\s]+/g, latex: function(text){
		        var params = text.replace('sum of ', '').split(' ');
		        return '\\sum' + params[2] + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('sum of ', '').split(' ');
		        return 'sum' + params[2] + params[0] + '_' + params[1];
		    }},
		    {mask: /sum of [^\s]+ [^\s]+ [^\s]+/g, latex: function(text){
		        var params = text.replace('sum of ', '').split(' ');
		        return '\\sum' + params[2] + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('sum of ', '').split(' ');
		        return 'sum' + params[2] + params[0] + '_' + params[1];
		    }},
		    {mask: /product of [^\s]+ [^\s]+ [^\s]+/g, latex: function(text){
		        var params = text.replace('product of ', '').split(' ');
		        return '\\sum' + params[2] + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('product of ', '').split(' ');
		        return 'sum' + params[2] + params[0] + '_' + params[1];
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 21.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /( the |^the )/g, exp: ' '}
		];
		
		module.exports = function(text){
		    var exp = text;
		    RULES.forEach(function(rule){
		        exp = exp.replace(rule.mask, rule.exp);
		    });
		    return exp;
		};

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Created by Shayakhmetov on 23.08.2016.
		 */
		
		'use strict';
		
		var numbersProcessing = __webpack_require__(22);
		var symbols = __webpack_require__(23);
		var operators = __webpack_require__(24);
		var fractions = __webpack_require__(25);
		var letter = __webpack_require__(26);
		var logic = __webpack_require__(27);
		//var calculus = require('./calculus');
		var postprocessing = __webpack_require__(28);
		
		module.exports = function(text, options){
		    var exp;
		    switch(options.type){
		        case 'algebra':
		            var masks = [].concat(letter, fractions, symbols, operators);
		            masks.sort(compare);
		            exp = process(numbersProcessing(text), masks, options.output);
		            break;
		        case 'set':
		            var masks = [].concat(fractions, sets);
		            masks.sort(compare);
		            exp = process(numbersProcessing(text), masks, options.output);
		            break;
		        case 'logic':
		            var masks = [].concat(fractions, logic, sets, operators);
		            masks.sort(compare);
		            exp = process(numbersProcessing(text), masks, options.output);
		            break;
		    };
		    return postprocessing(exp);
		};
		
		function process(text, masks, output){
		    var resultStr = text;
		    console.log(text);
		    masks.forEach(function(sign){
		        var format = (output in sign)? output : 'latex';
		        resultStr = resultStr.replace(sign.mask, sign[format]);
		    });
		    return resultStr;
		}
		
		function compare(a,b){
		    if(!('priority' in a))
		        a.priority = 0;
		    if(!('priority' in b))
		        b.priority = 0;
		    if(a.priority < b.priority)
		        return 1;
		    if(a.priority > b.priority)
		        return -1;
		    return 0;
		}
		/*
		function numbersProcessing(text){
		    return text;
		}*/
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Created by 96664_000 on 16.08.2016.
		 */
		'use strict';
		
		var small = {
		        'cero': 0,
		        'uno': 1,
		        'dos': 2,
		        'tres': 3,
		        'cuatro': 4,
		        'cinco': 5,
		        'seis': 6,
		        'siete': 7,
		        'ocho': 8,
		        'nueve': 9,
		        'diez': 10,
		        'once': 11,
		        'doce': 12,
		        'trece': 13,
		        'catorce': 14,
		        'quince': 15,
		        'dieciseis': 16,
		        'diecisiete': 17,
		        'dieciocho': 18,
		        'diecinueve': 19
		    },
		    average = {
		        'veinte': 20,
		        'veinticuatro': 24,
		        'treinta': 30,
		        'cuarenta': 40,
		        'cincuenta': 50,
		        'sesenta': 60,
		        'setenta': 70,
		        'ochenta': 80,
		        'noventa': 90,
		        'cien': 100,
		        'doscientos': 200,
		        'trescientos': 300,
		        'cuatrocientos': 400,
		        'quinientos': 500,
		        'seiscientos': 600,
		        'setecientos': 700,
		        'ochocientos': 800,
		        'novecientos': 900
		    },
		    magnitudes = [
		        {text: 'cien', order: 2},
		        {text: 'mil', order: 3},
		        {text: 'millon', order: 6},
		        {text: 'mil millone', order: 9}
		    ],
		    ordinal = {
		    'nulo': 0,
		    'primero': 1,
		    'segundo': 2,
		    'tercero': 3,
		    'cuarto': 4,
		    'quinto': 5,
		    'sexto': 6,
		    'séptimo': 7,
		    'octavo': 8,
		    'noveno': 9,
		    'décimo': 10,
		    'undécimo':11
		};
		    module.exports = process;
		
		
		function process(text){
		    /*for(var number in small){
		     while(arr.indexOf(number) > -1){
		     var index = arr.indexOf(number);
		     arr[index] = small[number];
		     }
		     }*/
		    var resultArr = text.split(/\s+/);
		    var resultArr = resultArr.map(function(el, index){
		        if(el in small)
		            return small[el].toString();
		        if(el in ordinal)
		            return ordinal[el].toString() + '-th';
		        if(el in average){
		            if(index < resultArr.length - 1)
		                if(resultArr[index + 1] in small) {
		                    var nextVal = resultArr[index + 1];
		                    resultArr[index + 1] = '';
		                    return (average[el] / 10).toString() + small[nextVal].toString();
		                }
		            return average[el].toString();
		        }
		        return el;
		    });
		    magnitudes.forEach(function(magnitude){
		        while(resultArr.indexOf(magnitude.text) > -1){
		            var index = resultArr.indexOf(magnitude.text);
		            var currIndex = index + 1;
		            var order = 0;
		            resultArr[index] = '';
		            while ((currIndex < resultArr.length)&&(!isNaN(resultArr[currIndex]) || !isNaN(resultArr[currIndex].replace('-th', '')))) {
		                order += resultArr[currIndex].replace('-th', '').length;
		                resultArr[index] += resultArr[currIndex];
		                resultArr[currIndex] = '';
		                currIndex++;
		            }
		            if(!isNaN(resultArr[index - 1])) {
		                resultArr[index - 1] += zeros(magnitude.order - order) + resultArr[index];
		                resultArr[index] = '';
		            }
		            else
		                resultArr[index] = Math.pow(10, (magnitude.order - order > 0)? (magnitude.order - order) : 0).toString() + resultArr[index];
		        }
		    });
		    return resultArr.filter(function(v){return v!==''}).join(' ');
		}
		function zeros(n){
		    var resultStr = '';
		    if(n > 0)
		        for(var i = 0; i < n; i++){
		            resultStr += '0';
		        }
		    return resultStr;
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

	/***/ },
	/* 23 */
	/***/ function(module, exports) {

		
		var SIGNS = [
		    {mask: /infinito/g, latex: '\\infty', exp: 'infty', priority: -1},
		    {mask: /alfa/g, latex: '\\alpha', exp: 'alpha', priority: -1},
		    {mask: /beta/g, latex: '\\beta', exp: 'beta', priority: -1},
		    {mask: /chi/g, latex: '\\chi', exp: 'chi', priority: -1},
		    {mask: /delta/g, latex: '\\delta', exp: 'delta', priority: -1},
		    {mask: /epsilon/g, latex: '\\epsilon', exp: 'epsilon', priority: -1},
		    {mask: /varepsilon/g, latex: '\\varepsilon', exp: 'varepsilon', priority: -1},
		    {mask: /eta/g, latex: '\\eta', exp: 'eta', priority: -1},
		    {mask: /gama/g, latex: '\\gamma', exp: 'gamma', priority: -1},
		    {mask: /iota/g, latex: '\\iota', exp: 'iota', priority: -1},
		    {mask: /kappa/g, latex: '\\kappa', exp: 'kappa', priority: -1},
		    {mask: /lambda/g, latex: '\\lambda', exp: 'lambda', priority: -1},
		    {mask: /mu/g, latex: '\\mu', exp: 'mu', priority: -1},
		    {mask: /nu/g, latex: '\\nu', exp: 'nu', priority: -1},
		    {mask: /omega/g, latex: '\\omega', exp: 'omega', priority: -1},
		    {mask: /fi/g, latex: '\\phi', exp: 'phi', priority: -1},
		    {mask: /varphi/g, latex: '\\varphi', exp: 'varphi', priority: -1},
		    {mask: /pi/g, latex: '\\pi', exp: 'pi', priority: -1},
		    {mask: /psi/g, latex: '\\psi', exp: 'psi', priority: -1},
		    {mask: /rho/g, latex: '\\rho', exp: 'rho', priority: -1},
		    {mask: /sigma/g, latex: '\\sigma', exp: 'sigma', priority: -1},
		    {mask: /tau/g, latex: '\\tau', exp: 'tau', priority: -1},
		    {mask: /teta/g, latex: '\\theta', exp: 'theta', priority: -1},
		    {mask: /vartheta/g, latex: '\\vartheta', exp: 'vartheta', priority: -1},
		    {mask: /upsilon/g, latex: '\\upsilon', exp: 'upsilon', priority: -1},
		    {mask: /xi/g, latex: '\\xi', exp: 'xi', priority: -1},
		    {mask: /zeta/g, latex: '\\zeta', exp: 'zeta', priority: -1},
		
		  //for correct 'X' latin
		    {mask: /equis/g, latex: '\\x', exp: 'x'},
		    {mask: /me quieres/g, latex: '\\x', exp: 'x'}
		
		
		];
		
		module.exports = SIGNS;


	/***/ },
	/* 24 */
	/***/ function(module, exports) {

		'use strict';
		
		var SIGNS = [
		
		    {mask: /coma/g, latex: function(text){
		      return text.replace('coma ', '.');
		    }, priority: 2},
		  {mask: / punto /g, latex: function(text){
		      return text.replace(' punto ', '.');
		    }},
		
		    {mask: /más/g, latex: '+'},
		    {mask: /plus/g, latex: '+'},
		    {mask: /suma de .+? y [^\s]+/g, latex: function(text){
		        return '(' + text.replace('suma de ', '').replace('y', '+') + ')';
		    }},
		
		    {mask: / menos /g, latex: '-', priority: 1},
		    {mask: /(a )?positivo /g, latex: ''},
		    {mask: /\s?negativo /g, latex: '-', priority: 1},
		    {mask: /diferencia de .+? y [^\s]+/g, latex: function(text){
		        return '(' + text.replace('diferencia de ', '').replace('y', '-') + ')';
		    }},
		
		    {mask: /mas menos/g, latex: '\\pm', priority: 2},
		
		    {mask: /por/g, latex: '\\times', exp: 'times', priority: -1},
		    {mask: /multiplicado por/g, latex: '\\times', exp: 'times'},
		    {mask: /multiplicar/g, latex: '\\times', exp: 'times'},
		
		
		    {mask: /producto  de .+? y [^\s]+/g, latex: function(text){
		        return '(' + text.replace('producto  de ', '').replace('y', '\\times') + ')';
		    }, exp: function(text){
		        return '(' + text.replace('producto  de ', '').replace('y', 'times') + ')';
		    }},
		    {mask: /de dividir/g, latex: '/'},
		    {mask: /al dividir/g, latex: '/'},
		    {mask: /dividido (entre|por)/g, latex: '/', priority: 1},
		
		    {mask: /son/g, latex: '='},
		
		
		    {mask: /no es igual a/g, latex: '\\neq', exp: '!='},
		    {mask: /es mayor que/g, latex: '\\gt', exp: '>'},
		    {mask: /es menos que/g, latex: '\\lt', exp: '<'},
		    {mask: /es mayor o igual a/g, latex: '\\geq', exp: '>='},
		    {mask: /es menor o igual que/g, latex: '\\leq', exp: '<='},
		
		    {mask: /valor absoluto de  [^\s]+/g, latex: function(text){
		        return '|' + text.replace('valor absoluto de  ', '') + '|';
		    }},
		    {mask: /magnitud de [^\s]+/g, latex: function(text){
		        return '|' + text.replace('magnitud de ', '') + '|';
		    }},
		
		    {mask: /paréntesis (de apertura|abierto) /g, latex: '('},
		    {mask: /apertura de paréntesis /g, latex: '('},
		
		    {mask: /paréntesis de cierre/g, latex: ')'},
		    {mask: /(cierre de|cerrar) paréntesis/g, latex: ')'},
		
		    {mask: /intervalo abierto de .+? a [^\s]+/g, latex: function(text){
		        return '(' + text.replace('intervalo abierto de ', '').replace('a', ', ') + ')';
		    }},
		    {mask: /intervalo abierto de .+? hasta [^\s]+/g, latex: function(text){
		      return '(' + text.replace('intervalo abierto de ', '').replace('hasta', ', ') + ')';
		    }},
		
		
		    {mask: /intervalo cerrado  de .+? a [^\s]+/g, latex: function(text){
		      return '[' + text.replace('intervalo cerrado  de ', '').replace('a', ', ') + ']';
		    }},
		
		    {mask: /intervalo cerrado  de .+? - [^\s]+/g, latex: function(text){
		      return '[' + text.replace('intervalo cerrado  de ', '').replace('-', ', ') + ']';
		    }},
		
		  {mask: /el cuadrado   /g, latex: '^2'},
		  {mask: /el cubo /g, latex: '^3'},
		
		  {mask: /sub /g, latex: '_'},
		  {mask: /grado  /g, latex: '^'},
		  {mask: /factorial/g, latex: '!'},
		
		
		  {mask: /raiz/g, latex: '\\sqrt', priority: 2},
		
		
		
		  {mask: /raiz cuadrada de [^\s]+/g, latex: function(text){
		    return text.replace('raiz cuadrada de', '\\sqrt');
		  }, exp: function(text){
		    return text.replace('raiz cuadrada de', 'sqrt');
		  }},
		
		  {mask: /raiz cuadrada [^\s]+/g, latex: function(text){
		    return text.replace('raiz cuadrada', '\\sqrt');
		  }, exp: function(text){
		    return text.replace('raiz cuadrada', 'sqrt');
		  }},
		
		  {mask: /raiz cubica de [^\s]+/g, latex: function(text){
		    return text.replace('raiz cúbica de ', '\\sqrt');
		  }, exp: function(text){
		    return text.replace('raiz cúbica de ', 'root[3]');
		  }, priority: 1},
		
		  {mask: /elevado a la .+? potencia [^\s]+/g, latex: function(text){
		    return text.replace('elevado a la ', '\\sqrt[').replace(' potencia ', ']');
		  }, exp: function(text){
		    return text.replace('elevado a la ', 'root[').replace(' potencia ', ']');
		  }},
		
		
		
		
		
		
		
		
		  {mask: /open from the left interval from .+? to [^\s]+/g, latex: function(text){
		        return '(' + text.replace('open from the left interval from ', '').replace('to', ', ') + ']';
		    }},
		    {mask: /closed from the right interval from .+? to [^\s]+/g, latex: function(text){
		        return '(' + text.replace('closed from the right interval from ', '').replace('to', ', ') + ']';
		    }},
		    {mask: /open from the right interval from .+? to [^\s]+/g, latex: function(text){
		        return '[' + text.replace('open from the right interval from ', '').replace('to', ', ') + ')';
		    }},
		    {mask: /closed from the left interval from .+? to [^\s]+/g, latex: function(text){
		        return '[' + text.replace('closed from the left interval from ', '').replace('to', ', ') + ')';
		    }},
		
		    {mask: / raised to the [^\s]+ power/g, latex: function(text){
		        return '^{' + text.replace(' raised to the ', '').replace(' power', '').replace('-th', '') + '}';
		    }},
		    {mask: / x-rays of to the [^\s]+ power/g, latex: function(text){
		        return '^{' + text.replace(' x-rays of to the ', '').replace(' power', '').replace('-th', '') + '}';
		    }},
		    {mask: /the [^\s]+ power of [^\s]+/g, latex: function(text){
		        var params = text.split(/the | power of /);
		        return params[2] + '^' + params[1].replace('-th', '');
		    }},
		    {mask: / to the [^\s]+ power/g, latex: function(text){
		        return '^{' + text.replace(' to the ', '').replace(' power', '').replace('-th', '') + '}';
		    }},
		    {mask: / to the power of [^\s]+/g, latex: function(text){
		        return '^' + text.replace(' to the power of ', '{').replace('-th', '') + '}';
		    }},
		    {mask: / to the [^\s]+/g, latex: function(text){
		        return '^' + text.replace(' to the ', '{').replace('-th', '') + '}';
		    }},
		    {mask: / to [^\s]+/g, latex: function(text){
		        return '^' + text.replace(' to ', '{').replace('-th', '') + '}';
		    }},
		    {mask:  /\d+ \d(-th|nd)/g, latex: function(text){
		      var numbers = text.replace('nd', '').match(/\d+/g);
		      return '\\frac{' + numbers[0] + '}{' + numbers[1] + '}'}
		    },
		    {mask: / [^\s]+-th/g, latex: function(text){
		        return '_{' + text.replace('-th', '') + '}';
		    }},
		    {mask: /the square of [^\s]+/g, latex: function(text){
		        return text.replace('the square of ', '') + '^2';
		    }}
		];
		
		
		module.exports = SIGNS;


	/***/ },
	/* 25 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 02.11.2016.
		 */
		'use strict';
		
		var SIGNS = [
		    {mask: /the one half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 2},
		    {mask: /and 1 half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 1},
		    {mask: /y medio/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 1},
		    {mask: /and a half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 1},
		    {mask: /half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 0}
		];
		
		
		module.exports = SIGNS;

	/***/ },
	/* 26 */
	/***/ function(module, exports) {

		
		var LETTER = [
		  {mask: /í/g, latex: 'i'},
		  {mask: /á/g, latex: 'a'},
		  {mask: /ú/g, latex: 'u'},
		  {mask: /é/g, latex: 'e'},
		  {mask: /ñ/g, latex: 'n'}
		];
		
		module.exports = LETTER;


	/***/ },
	/* 27 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 21.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: / o /g, latex: '\\lor', exp: 'vv'},
		    {mask: / y /g, latex: '\\wedge', exp: '^^', priority: -1},
		    {mask: / no /g, latex: '\\bar', exp: 'bar'},
		    {mask: / implica /g, latex: '\\Rightarrow', exp: 'rArr'},
		    {mask: / es equivalente a /g, latex: '\\sim', exp: '~'},
		];
		
		module.exports = RULES;

	/***/ },
	/* 28 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 21.09.2016.
		 */
		'use strict';
		
		var RULES = [
		  {mask: /( de |^de )/g, exp: ''},
		  {mask: /( la |^la )/g, exp: ''}
		];
		
		module.exports = function(text){
		    var exp = text;
		    RULES.forEach(function(rule){
		        exp = exp.replace(rule.mask, rule.exp);
		    });
		    return exp;
		};

	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Created by Makarova on 09.12.2016.
		 */
		
		'use strict';
		var symbols = __webpack_require__(30);
		var operators = __webpack_require__(31);
		var fractions = __webpack_require__(32);
		var postprocessing = __webpack_require__(33);
		
		var Az = __webpack_require__(34);
		
		
		module.exports = function(text, options){
		
		  var exp;
		  switch(options.type){
		    case 'algebra':
		      var masks = [].concat(fractions, symbols, operators);
		      masks.sort(compare);
		      exp = process(numbersProcessing(text), masks, options.output);
		      break;
		    case 'set':
		      break;
		    case 'logic':
		      break;
		  };
		  return postprocessing(exp);
		};
		
		function process(text, masks, output){
		  var resultStr = text;
		  masks.forEach(function(sign){
		    var format = (output in sign)? output : 'latex';
		    resultStr = resultStr.replace(sign.mask, sign[format]);
		  });
		  return resultStr;
		}
		
		function compare(a,b){
		  if(!('priority' in a))
		    a.priority = 0;
		  if(!('priority' in b))
		    b.priority = 0;
		  if(a.priority < b.priority)
		    return 1;
		  if(a.priority > b.priority)
		    return -1;
		  return 0;
		}
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

	/***/ },
	/* 30 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 23.08.2016.
		 */
		'use strict';
		
		var SIGNS = [
		    {mask: /infinito/g, latex: '\\infty', exp: 'infty', priority: -1},
		    {mask: /alfa/g, latex: '\\alpha', exp: 'alpha', priority: -1},
		    {mask: /beta/g, latex: '\\beta', exp: 'beta', priority: -1},
		    {mask: /chi/g, latex: '\\chi', exp: 'chi', priority: -1},
		    {mask: /delta/g, latex: '\\delta', exp: 'delta', priority: -1},
		    {mask: /epsilon/g, latex: '\\epsilon', exp: 'epsilon', priority: -1},
		    {mask: /varepsilon/g, latex: '\\varepsilon', exp: 'varepsilon', priority: -1},
		    {mask: /eta/g, latex: '\\eta', exp: 'eta', priority: -1},
		    {mask: /gama/g, latex: '\\gamma', exp: 'gamma', priority: -1},
		    {mask: /iota/g, latex: '\\iota', exp: 'iota', priority: -1},
		    {mask: /kappa/g, latex: '\\kappa', exp: 'kappa', priority: -1},
		    {mask: /lambda/g, latex: '\\lambda', exp: 'lambda', priority: -1},
		    {mask: /mu/g, latex: '\\mu', exp: 'mu', priority: -1},
		    {mask: /nu/g, latex: '\\nu', exp: 'nu', priority: -1},
		    {mask: /omega/g, latex: '\\omega', exp: 'omega', priority: -1},
		    {mask: /fi/g, latex: '\\phi', exp: 'phi', priority: -1},
		    {mask: /varphi/g, latex: '\\varphi', exp: 'varphi', priority: -1},
		    {mask: /pi/g, latex: '\\pi', exp: 'pi', priority: -1},
		    {mask: /psi/g, latex: '\\psi', exp: 'psi', priority: -1},
		    {mask: /rho/g, latex: '\\rho', exp: 'rho', priority: -1},
		    {mask: /sigma/g, latex: '\\sigma', exp: 'sigma', priority: -1},
		    {mask: /tau/g, latex: '\\tau', exp: 'tau', priority: -1},
		    {mask: /teta/g, latex: '\\theta', exp: 'theta', priority: -1},
		    {mask: /vartheta/g, latex: '\\vartheta', exp: 'vartheta', priority: -1},
		    {mask: /upsilon/g, latex: '\\upsilon', exp: 'upsilon', priority: -1},
		    {mask: /xi/g, latex: '\\xi', exp: 'xi', priority: -1},
		    {mask: /zeta/g, latex: '\\zeta', exp: 'zeta', priority: -1}
		];
		
		module.exports = SIGNS;


	/***/ },
	/* 31 */
	/***/ function(module, exports) {

		'use strict';
		
		var SIGNS = [
		
		    {mask: /coma/g, latex: function(text){
		      return text.replace('coma ', '.');
		    }, priority: 2},
		
		    {mask: /mas/g, latex: '+'},
		    {mask: /plus/g, latex: '+'},
		    {mask: /suma de .+? y [^\s]+/g, latex: function(text){
		        return '(' + text.replace('suma de ', '').replace('y', '+') + ')';
		    }},
		
		    {mask: /\s?menos  /g, latex: '-', priority: 1},
		    {mask: /(a )?positivo /g, latex: ''},
		    {mask: /\s?negativo /g, latex: '-', priority: 1},
		    {mask: /diferencia de .+? y [^\s]+/g, latex: function(text){
		        return '(' + text.replace('diferencia de ', '').replace('y', '-') + ')';
		    }},
		
		    {mask: /mas menos/g, latex: '\\pm', priority: 2},
		
		    {mask: /por/g, latex: '\\times', exp: 'times'},
		    {mask: /multiplicado por/g, latex: '\\times', exp: 'times'},
		    {mask: /multiplicar/g, latex: '\\times', exp: 'times'},
		
		
		    {mask: /producto  de .+? y [^\s]+/g, latex: function(text){
		        return '(' + text.replace('producto  de ', '').replace('y', '\\times') + ')';
		    }, exp: function(text){
		        return '(' + text.replace('producto  de ', '').replace('y', 'times') + ')';
		    }},
		    {mask: /de dividir/g, latex: '/'},
		    {mask: /al dividir/g, latex: '/'},
		
		    {mask: /son/g, latex: '='},
		
		
		    {mask: /no es igual a/g, latex: '\\neq', exp: '!='},
		    {mask: /es mayor que/g, latex: '\\gt', exp: '>'},
		    {mask: /es menos que/g, latex: '\\lt', exp: '<'},
		    {mask: /es mayor o igual a/g, latex: '\\geq', exp: '>='},
		    {mask: /es menor o igual que/g, latex: '\\leq', exp: '<='},
		
		    {mask: /valor absoluto de  [^\s]+/g, latex: function(text){
		        return '|' + text.replace('valor absoluto de  ', '') + '|';
		    }},
		    {mask: /magnitud de [^\s]+/g, latex: function(text){
		        return '|' + text.replace('magnitud de ', '') + '|';
		    }},
		
		    {mask: /paréntesis (de apertura|abierto) /g, latex: '('},
		    {mask: /apertura de paréntesis /g, latex: '('},
		
		    {mask: /paréntesis de cierre/g, latex: ')'},
		    {mask: /(cierre de|cerrar) paréntesis/g, latex: ')'},
		
		    {mask: /intervalo abierto de .+? a [^\s]+/g, latex: function(text){
		        return '(' + text.replace('intervalo abierto de ', '').replace('a', ', ') + ')';
		    }},
		    {mask: /intervalo abierto de .+? hasta [^\s]+/g, latex: function(text){
		      return '(' + text.replace('intervalo abierto de ', '').replace('hasta', ', ') + ')';
		    }},
		
		
		    {mask: /intervalo cerrado  de .+? a [^\s]+/g, latex: function(text){
		      return '[' + text.replace('intervalo cerrado  de ', '').replace('a', ', ') + ']';
		    }},
		
		    {mask: /intervalo cerrado  de .+? - [^\s]+/g, latex: function(text){
		      return '[' + text.replace('intervalo cerrado  de ', '').replace('-', ', ') + ']';
		    }},
		
		  {mask: /el cuadrado   /g, latex: '^2'},
		  {mask: /el cubo /g, latex: '^3'},
		
		  {mask: / sub /g, latex: '_'},
		  {mask: / grado  /g, latex: '^'},
		  {mask: / factorial/g, latex: '!'},
		
		
		
		  {mask: / raiz cuadrada/g, latex: function(text){
		    return text.replace('raiz cuadrada', '\\sqrt');
		  }, exp: function(text){
		    return text.replace('raiz cuadrada', 'sqrt');
		  }, priority: 2},
		
		  {mask: /raiz cúbica de [^\s]+/g, latex: function(text){
		    return text.replace('raíz cúbica de ', '\\sqrt');
		  }, exp: function(text){
		    return text.replace('raíz cúbica de ', 'root[3]');
		  }, priority: 1},
		
		  {mask: /elevado a la .+? potencia [^\s]+/g, latex: function(text){
		    return text.replace('elevado a la ', '\\sqrt[').replace(' potencia ', ']');
		  }, exp: function(text){
		    return text.replace('elevado a la ', 'root[').replace(' potencia ', ']');
		  }},
		
		
		
		
		
		
		
		
		  {mask: /open from the left interval from .+? to [^\s]+/g, latex: function(text){
		        return '(' + text.replace('open from the left interval from ', '').replace('to', ', ') + ']';
		    }},
		    {mask: /closed from the right interval from .+? to [^\s]+/g, latex: function(text){
		        return '(' + text.replace('closed from the right interval from ', '').replace('to', ', ') + ']';
		    }},
		    {mask: /open from the right interval from .+? to [^\s]+/g, latex: function(text){
		        return '[' + text.replace('open from the right interval from ', '').replace('to', ', ') + ')';
		    }},
		    {mask: /closed from the left interval from .+? to [^\s]+/g, latex: function(text){
		        return '[' + text.replace('closed from the left interval from ', '').replace('to', ', ') + ')';
		    }},
		
		    {mask: / raised to the [^\s]+ power/g, latex: function(text){
		        return '^{' + text.replace(' raised to the ', '').replace(' power', '').replace('-th', '') + '}';
		    }},
		    {mask: / x-rays of to the [^\s]+ power/g, latex: function(text){
		        return '^{' + text.replace(' x-rays of to the ', '').replace(' power', '').replace('-th', '') + '}';
		    }},
		    {mask: /the [^\s]+ power of [^\s]+/g, latex: function(text){
		        var params = text.split(/the | power of /);
		        return params[2] + '^' + params[1].replace('-th', '');
		    }},
		    {mask: / to the [^\s]+ power/g, latex: function(text){
		        return '^{' + text.replace(' to the ', '').replace(' power', '').replace('-th', '') + '}';
		    }},
		    {mask: / to the power of [^\s]+/g, latex: function(text){
		        return '^' + text.replace(' to the power of ', '{').replace('-th', '') + '}';
		    }},
		    {mask: / to the [^\s]+/g, latex: function(text){
		        return '^' + text.replace(' to the ', '{').replace('-th', '') + '}';
		    }},
		    {mask: / to [^\s]+/g, latex: function(text){
		        return '^' + text.replace(' to ', '{').replace('-th', '') + '}';
		    }},
		    {mask:  /\d+ \d(-th|nd)/g, latex: function(text){
		      var numbers = text.replace('nd', '').match(/\d+/g);
		      return '\\frac{' + numbers[0] + '}{' + numbers[1] + '}'}
		    },
		    {mask: / [^\s]+-th/g, latex: function(text){
		        return '_{' + text.replace('-th', '') + '}';
		    }},
		    {mask: /the square of [^\s]+/g, latex: function(text){
		        return text.replace('the square of ', '') + '^2';
		    }}
		];
		
		
		module.exports = SIGNS;


	/***/ },
	/* 32 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 02.11.2016.
		 */
		'use strict';
		
		var SIGNS = [
		    {mask: /the one half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 2},
		    {mask: /and 1 half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 1},
		    {mask: /1 half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 1},
		    {mask: /and a half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 1},
		    {mask: /half/g, latex: '\\frac{1}{2}', exp: 'frac{1}{2}', priority: 0}
		
		];
		
		
		module.exports = SIGNS;

	/***/ },
	/* 33 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 21.09.2016.
		 */
		'use strict';
		
		var RULES = [
		  {mask: /( de |^de )/g, exp: ' '},
		  {mask: /( la |^la )/g, exp: ' '}
		];
		
		module.exports = function(text){
		    var exp = text;
		    RULES.forEach(function(rule){
		        exp = exp.replace(rule.mask, rule.exp);
		    });
		    return exp;
		};

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(__dirname) {;(function (global, factory) {
		   true ? module.exports = factory() :
		  typeof define === 'function' && define.amd ? define('Az', factory) :
		  global.Az = factory()
		}(this, function () { 'use strict';
		  /** @namespace Az **/
		  if (true) {
		    var fs = __webpack_require__(35);
		  }
		
		  var Az = {
		    load: function(url, responseType, callback) {
		      if (fs) {
		        fs.readFile(url, { encoding: responseType == 'json' ? 'utf8' : null }, function (err, data) {
		          if (err) {
		            callback(err);
		            return;
		          }
		
		          if (responseType == 'json') {
		            callback(null, JSON.parse(data));
		          } else
		          if (responseType == 'arraybuffer') {
		            if (data.buffer) {
		              callback(null, data.buffer);
		            } else {
		              var ab = new ArrayBuffer(data.length);
		              var view = new Uint8Array(ab);
		              for (var i = 0; i < data.length; ++i) {
		                  view[i] = data[i];
		              }
		              callback(null, ab);
		            }
		          } else {
		            callback(new Error('Unknown responseType'));
		          }
		        });
		        return;
		      }
		
		      var xhr = new XMLHttpRequest();
		      xhr.open('GET', url, true);
		      xhr.responseType = responseType;
		
		      xhr.onload = function (e) {
		        if (xhr.response) {
		          callback && callback(null, xhr.response);
		        }
		      };
		
		      xhr.send(null);
		    },
		    extend: function() {
		      var result = {};
		      for (var i = 0; i < arguments.length; i++) {
		        for (var key in arguments[i]) {
		          result[key] = arguments[i][key];
		        }
		      }
		      return result;
		    }
		  };
		
		  return Az;
		}));
		
		;(function (global, factory) {
		   true ? (module.exports = module.exports || {}) && (module.exports.DAWG = factory(module.exports)) :
		  typeof define === 'function' && define.amd ? define('Az.DAWG', ['Az'], factory) :
		  (global.Az = global.Az || {}) && (global.Az.DAWG = factory(global.Az))
		}(this, function (Az) { 'use strict';
		  var ROOT = 0,
		      MISSING = -1,
		      PRECISION_MASK = 0xFFFFFFFF,
		      HAS_LEAF_BIT = 1 << 8,
		      EXTENSION_BIT = 1 << 9,
		      OFFSET_MAX = 1 << 21,
		      IS_LEAF_BIT = 1 << 31;
		
		  var CP1251 = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16,
		    17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32,
		    33: 33, 34: 34, 35: 35, 36: 36, 37: 37, 38: 38, 39: 39, 40: 40, 41: 41, 42: 42, 43: 43, 44: 44, 45: 45, 46: 46, 47: 47, 48: 48,
		    49: 49, 50: 50, 51: 51, 52: 52, 53: 53, 54: 54, 55: 55, 56: 56, 57: 57, 58: 58, 59: 59, 60: 60, 61: 61, 62: 62, 63: 63, 64: 64,
		    65: 65, 66: 66, 67: 67, 68: 68, 69: 69, 70: 70, 71: 71, 72: 72, 73: 73, 74: 74, 75: 75, 76: 76, 77: 77, 78: 78, 79: 79, 80: 80,
		    81: 81, 82: 82, 83: 83, 84: 84, 85: 85, 86: 86, 87: 87, 88: 88, 89: 89, 90: 90, 91: 91, 92: 92, 93: 93, 94: 94, 95: 95, 96: 96,
		    97: 97, 98: 98, 99: 99, 100: 100, 101: 101, 102: 102, 103: 103, 104: 104, 105: 105, 106: 106, 107: 107, 108: 108, 109: 109, 110: 110, 111: 111, 112: 112,
		    113: 113, 114: 114, 115: 115, 116: 116, 117: 117, 118: 118, 119: 119, 120: 120, 121: 121, 122: 122, 123: 123, 124: 124, 125: 125, 126: 126, 127: 127,
		    1027: 129, 8225: 135, 1046: 198, 8222: 132, 1047: 199, 1168: 165, 1048: 200, 1113: 154, 1049: 201, 1045: 197, 1050: 202, 1028: 170, 160: 160, 1040: 192,
		    1051: 203, 164: 164, 166: 166, 167: 167, 169: 169, 171: 171, 172: 172, 173: 173, 174: 174, 1053: 205, 176: 176, 177: 177, 1114: 156, 181: 181, 182: 182,
		    183: 183, 8221: 148, 187: 187, 1029: 189, 1056: 208, 1057: 209, 1058: 210, 8364: 136, 1112: 188, 1115: 158, 1059: 211, 1060: 212, 1030: 178, 1061: 213,
		    1062: 214, 1063: 215, 1116: 157, 1064: 216, 1065: 217, 1031: 175, 1066: 218, 1067: 219, 1068: 220, 1069: 221, 1070: 222, 1032: 163, 8226: 149, 1071: 223,
		    1072: 224, 8482: 153, 1073: 225, 8240: 137, 1118: 162, 1074: 226, 1110: 179, 8230: 133, 1075: 227, 1033: 138, 1076: 228, 1077: 229, 8211: 150, 1078: 230,
		    1119: 159, 1079: 231, 1042: 194, 1080: 232, 1034: 140, 1025: 168, 1081: 233, 1082: 234, 8212: 151, 1083: 235, 1169: 180, 1084: 236, 1052: 204, 1085: 237,
		    1035: 142, 1086: 238, 1087: 239, 1088: 240, 1089: 241, 1090: 242, 1036: 141, 1041: 193, 1091: 243, 1092: 244, 8224: 134, 1093: 245, 8470: 185, 1094: 246,
		    1054: 206, 1095: 247, 1096: 248, 8249: 139, 1097: 249, 1098: 250, 1044: 196, 1099: 251, 1111: 191, 1055: 207, 1100: 252, 1038: 161, 8220: 147, 1101: 253,
		    8250: 155, 1102: 254, 8216: 145, 1103: 255, 1043: 195, 1105: 184, 1039: 143, 1026: 128, 1106: 144, 8218: 130, 1107: 131, 8217: 146, 1108: 186, 1109: 190};
		
		  var UCS2 = {};
		  for (var k in CP1251) {
		    UCS2[CP1251[k]] = String.fromCharCode(k);
		    delete UCS2[0];
		    delete UCS2[1];
		  }
		
		  // Based on all common ЙЦУКЕН-keyboards (both Windows and Apple variations)
		  var COMMON_TYPOS = {
		    'й': 'ёцыф', 'ц': 'йфыву', 'у': 'цывак', 'к': 'увапе', 'е': 'капрн', 'н': 'епрог', 'г': 'нролш', 'ш': 'голдщ', 'щ': 'шлджз', 'з': 'щджэх-', 'х': 'зжэъ-', 'ъ': 'хэ-ё',
		    'ф': 'йцычяё', 'ы': 'йцувсчяф', 'в': 'цукамсчы', 'а': 'укепимсв', 'п': 'кенртима', 'р': 'енгоьтип', 'о': 'нгшлбьтр', 'л': 'гшщдюбьо', 'д': 'шщзжюбл', 'ж': 'щзхэюд', 'э': 'зхъжё',
		    'ё': 'йфяъэ', 'я': 'ёфыч', 'ч': 'яфывс', 'с': 'чывам', 'м': 'свапи', 'и': 'мапрт', 'т': 'ипроь', 'ь': 'тролб', 'б': 'ьолдю', 'ю': 'блдж',
		    '1': 'ёйц', '2': 'йцу', '3': 'цук', '4': 'уке', '5': 'кен', '6': 'енг', '7': 'нгш', '8': 'гшщ', '9': 'шщз', '0': 'щзх-', '-': 'зхъ', '=': '-хъ', '\\': 'ъэ', '.': 'южэ'
		  };
		
		  function offset(base) {
		    return ((base >> 10) << ((base & EXTENSION_BIT) >> 6)) & PRECISION_MASK;
		  }
		
		  function label(base) {
		    return base & (IS_LEAF_BIT | 0xFF) & PRECISION_MASK;
		  }
		
		  function hasLeaf(base) {
		    return (base & HAS_LEAF_BIT & PRECISION_MASK) != 0;
		  }
		
		  function value(base) {
		    return base & ~IS_LEAF_BIT & PRECISION_MASK;
		  }
		
		  var DAWG = function(units, guide, format) {
		    this.units = units;
		    this.guide = guide;
		    this.format = format;
		  }
		
		  DAWG.fromArrayBuffer = function(data, format) {
		    var dv = new DataView(data),
		        unitsLength = dv.getUint32(0, true),
		        guideLength = dv.getUint32(unitsLength * 4 + 4, true);
		    return new DAWG(
		      new Uint32Array(data, 4, unitsLength),
		      new Uint8Array(data, unitsLength * 4 + 8, guideLength * 2),
		      format);
		  }
		
		  DAWG.load = function(url, format, callback) {
		    Az.load(url, 'arraybuffer', function(err, data) {
		      callback(err, err ? null : DAWG.fromArrayBuffer(data, format));
		    });
		  }
		
		  DAWG.prototype.followByte = function(c, index) {
		    var o = offset(this.units[index]);
		    var nextIndex = (index ^ o ^ (c & 0xFF)) & PRECISION_MASK;
		
		    if (label(this.units[nextIndex]) != (c & 0xFF)) {
		      return MISSING;
		    }
		
		    return nextIndex;
		  }
		
		  DAWG.prototype.followString = function(str, index) {
		    index = index || ROOT;
		    for (var i = 0; i < str.length; i++) {
		      var code = str.charCodeAt(i);
		      if (!(code in CP1251)) {
		        return MISSING;
		      }
		      index = this.followByte(CP1251[code], index);
		      if (index == MISSING) {
		        return MISSING;
		      }
		    }
		    return index;
		  }
		
		  DAWG.prototype.hasValue = function(index) {
		    return hasLeaf(this.units[index]);
		  }
		
		  DAWG.prototype.value = function(index) {
		    var o = offset(this.units[index]);
		    var valueIndex = (index ^ o) & PRECISION_MASK;
		    return value(this.units[valueIndex]);
		  }
		
		  DAWG.prototype.find = function(str) {
		    var index = this.followString(str);
		    if (index == MISSING) {
		        return MISSING;
		    }
		    if (!this.hasValue(index)) {
		        return MISSING;
		    }
		    return this.value(index);
		  }
		
		  DAWG.prototype.iterateAll = function(index) {
		    var results = [];
		    var stack = [index];
		    var key = [];
		    var last = ROOT;
		    var label;
		
		    while (true) {
		      index = stack[stack.length - 1];
		
		      if (last != ROOT) {
		        label = this.guide[index << 1];
		        if (label) {
		          index = this.followByte(label, index);
		          if (index == MISSING) {
		            return results;
		          }
		          key.push(label);
		          stack.push(index);
		        } else {
		          do {
		            label = this.guide[(index << 1) + 1];
		            key.pop();
		            stack.pop();
		            if (!stack.length) {
		              return results;
		            }
		            index = stack[stack.length - 1];
		            if (label) {
		              index = this.followByte(label, index);
		              if (index == MISSING) {
		                return results;
		              }
		              key.push(label);
		              stack.push(index);
		            }
		          } while (!label);
		        }
		      }
		
		      while (!this.hasValue(index)) {
		        var label = this.guide[index << 1];
		        index = this.followByte(label, index);
		        if (index == MISSING) {
		          return results;
		        }
		        key.push(label);
		        stack.push(index);
		      }
		
		      // Only three formats supported
		      if (this.format == 'words') {
		        results.push([
		          ((key[0] ^ 1) << 6) + (key[1] >> 1),
		          ((key[2] ^ 1) << 6) + (key[3] >> 1)
		        ]);
		      } else
		      if (this.format == 'probs') {
		        results.push([
		          ((key[0] ^ 1) << 6) + (key[1] >> 1),
		          ((key[2] ^ 1) << 6) + (key[3] >> 1),
		          ((key[4] ^ 1) << 6) + (key[5] >> 1)
		        ]);
		      } else {
		        // Raw bytes
		        results.push(key.slice());
		      }
		      last = index;
		    }
		  }
		
		  // Features:
		  //  replaces (е -> ё) (DONE)
		  //  stutter (ннет -> нет, гоол -> гол, д-да -> да)
		  //  typos (count-limited):
		  //    swaps (солво -> слово)
		  //    extra letters (свлово -> слово)
		  //    missing letters (сово -> слово)
		  //    wrong letters (сково -> слово)
		  DAWG.prototype.findAll = function(str, replaces, mstutter, mtypos) {
		    mtypos = mtypos || 0;
		    mstutter = mstutter || 0;
		    var results = [],
		        prefixes = [['', 0, 0, 0, ROOT]],
		        prefix, index, len, code, cur, typos, stutter;
		
		    while (prefixes.length) {
		      prefix = prefixes.pop();
		      index = prefix[4], stutter = prefix[3], typos = prefix[2], len = prefix[1], prefix = prefix[0];
		
		      // Done
		      if (len == str.length) {
		        if (typos < mtypos && !stutter) {
		          // Allow missing letter(s) at the very end
		          var label = this.guide[index << 1]; // First child
		          do {
		            cur = this.followByte(label, index);
		            if ((cur != MISSING) && (label in UCS2)) {
		              prefixes.push([ prefix + UCS2[label], len, typos + 1, stutter, cur ]);
		            }
		            label = this.guide[(cur << 1) + 1]; // Next child
		          } while (cur != MISSING);
		        }
		
		        if (this.format == 'int') {
		          if (this.hasValue(index)) {
		            results.push([prefix, this.value(index)]);
		          }
		          continue;
		        }
		        // Find all payloads
		        if (this.format == 'words' || this.format == 'probs') {
		          index = this.followByte(1, index); // separator
		          if (index == MISSING) {
		            continue;
		          }
		        }
		        results.push([prefix, this.iterateAll(index), stutter, typos]);
		        continue;
		      }
		
		      // Follow a replacement path
		      if (replaces && str[len] in replaces) {
		        code = replaces[str[len]].charCodeAt(0);
		        if (code in CP1251) {
		          cur = this.followByte(CP1251[code], index);
		          if (cur != MISSING) {
		            prefixes.push([ prefix + replaces[str[len]], len + 1, typos, stutter, cur ]);
		          }
		        }
		      }
		
		      // Follow typos path (if not over limit)
		      if (typos < mtypos && !stutter) {
		        // Skip a letter entirely (extra letter)
		        prefixes.push([ prefix, len + 1, typos + 1, stutter, index ]);
		
		        // Add a letter (missing)
		        // TODO: iterate all childs?
		        var label = this.guide[index << 1]; // First child
		        do {
		          cur = this.followByte(label, index);
		          if ((cur != MISSING) && (label in UCS2)) {
		            prefixes.push([ prefix + UCS2[label], len, typos + 1, stutter, cur ]);
		          }
		          label = this.guide[(cur << 1) + 1]; // Next child
		        } while (cur != MISSING);
		
		        // Replace a letter
		        // Now it checks only most probable typos (located near to each other on keyboards)
		        var possible = COMMON_TYPOS[str[len]];
		        if (possible) {
		          for (var i = 0; i < possible.length; i++) {
		            code = possible.charCodeAt(i);
		            if (code in CP1251) {
		              cur = this.followByte(CP1251[code], index);
		              if (cur != MISSING) {
		                // for missing letter we need to iterate all childs, not only COMMON_TYPOS
		                // prefixes.push([ prefix + possible[i], len, typos + 1, stutter, cur ]);
		                prefixes.push([ prefix + possible[i], len + 1, typos + 1, stutter, cur ]);
		              }
		            }
		          }
		        }
		
		        // Swapped two letters
		        // TODO: support for replacements?
		        if (len < str.length - 1) {
		          code = str.charCodeAt(len + 1);
		          if (code in CP1251) {
		            cur = this.followByte(CP1251[code], index);
		            if (cur != MISSING) {
		              code = str.charCodeAt(len);
		              if (code in CP1251) {
		                cur = this.followByte(CP1251[code], cur);
		                if (cur != MISSING) {
		                  prefixes.push([ prefix + str[len + 1] + str[len], len + 2, typos + 1, stutter, cur ]);
		                }
		              }
		            }
		          }
		        }
		      }
		
		      // Follow base path
		      code = str.charCodeAt(len);
		      if (code in CP1251) {
		        cur = this.followByte(CP1251[code], index);
		        if (cur != MISSING) {
		          prefixes.push([ prefix + str[len], len + 1, typos, stutter, cur ]);
		
		          while (stutter < mstutter && !typos && len < str.length - 1) {
		            // Follow a simple stutter path (merge two equal letters into one)
		            if (str[len] == str[len + 1]) {
		              prefixes.push([ prefix + str[len], len + 2, typos, stutter + 1, cur ]);
		              len++;
		            } else
		            // Follow a stutter with a dash (д-да)
		            if (len < str.length - 2 && str[len + 1] == '-' && str[len] == str[len + 2]) {
		              prefixes.push([ prefix + str[len], len + 3, typos, stutter + 1, cur ]);
		              len += 2;
		            } else {
		              break;
		            }
		            stutter++;
		          }
		        }
		      }
		    }
		    return results;
		  }
		
		  return DAWG;
		}));
		;(function (global, factory) {
		   true ? (module.exports = module.exports || {}) && (module.exports.Morph = factory(module.exports)) :
		  typeof define === 'function' && define.amd ? define('Az.Morph', ['Az', 'Az.DAWG'], factory) :
		  (global.Az = global.Az || {}) && (global.Az.Morph = factory(global.Az))
		}(this, function (Az) { 'use strict';
		  /** @namespace Az **/
		  var words,
		      probabilities,
		      predictionSuffixes = new Array(3),
		      prefixes = [ '', 'по', 'наи' ],
		      suffixes,
		      grammemes,
		      paradigms,
		      tags,
		      defaults = {
		        ignoreCase: false,
		        replacements: { 'е': 'ё' },
		        stutter: Infinity,
		        typos: 0,
		        parsers: [
		          // Словарные слова + инициалы
		          'Dictionary?', 'AbbrName?', 'AbbrPatronymic',
		          // Числа, пунктуация, латиница (по-хорошему, токенизатор не должен эту ерунду сюда пускать)
		          'IntNumber', 'RealNumber', 'Punctuation', 'RomanNumber?', 'Latin',
		          // Слова с дефисами
		          'HyphenParticle', 'HyphenAdverb', 'HyphenWords',
		          // Предсказатели по префиксам/суффиксам
		          'PrefixKnown', 'PrefixUnknown?', 'SuffixKnown?', 'Abbr'
		        ],
		        forceParse: false,
		        normalizeScore: true
		      },
		      initials = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ',
		      particles = ['-то', '-ка', '-таки', '-де', '-тко', '-тка', '-с', '-ста'],
		      knownPrefixes = [
		        'авиа', 'авто', 'аква', 'анти', 'анти-', 'антропо', 'архи', 'арт', 'арт-', 'астро', 'аудио', 'аэро',
		        'без', 'бес', 'био', 'вело', 'взаимо', 'вне', 'внутри', 'видео', 'вице-', 'вперед', 'впереди',
		        'гекто', 'гелио', 'гео', 'гетеро', 'гига', 'гигро', 'гипер', 'гипо', 'гомо',
		        'дву', 'двух', 'де', 'дез', 'дека', 'деци', 'дис', 'до', 'евро', 'за', 'зоо', 'интер', 'инфра',
		        'квази', 'квази-', 'кило', 'кино', 'контр', 'контр-', 'космо', 'космо-', 'крипто', 'лейб-', 'лже', 'лже-',
		        'макро', 'макси', 'макси-', 'мало', 'меж', 'медиа', 'медиа-', 'мега', 'мета', 'мета-', 'метео', 'метро', 'микро',
		        'милли', 'мини', 'мини-', 'моно', 'мото', 'много', 'мульти',
		        'нано', 'нарко', 'не', 'небез', 'недо', 'нейро', 'нео', 'низко', 'обер-', 'обще', 'одно', 'около', 'орто',
		        'палео', 'пан', 'пара', 'пента', 'пере', 'пиро', 'поли', 'полу', 'после', 'пост', 'пост-',
		        'порно', 'пра', 'пра-', 'пред', 'пресс-', 'противо', 'противо-', 'прото', 'псевдо', 'псевдо-',
		        'радио', 'разно', 'ре', 'ретро', 'ретро-', 'само', 'санти', 'сверх', 'сверх-', 'спец', 'суб', 'супер', 'супер-', 'супра',
		        'теле', 'тетра', 'топ-', 'транс', 'транс-', 'ультра', 'унтер-', 'штаб-',
		        'экзо', 'эко', 'эндо', 'эконом-', 'экс', 'экс-', 'экстра', 'экстра-', 'электро', 'энерго', 'этно'
		      ],
		      autoTypos = [4, 9],
		      UNKN,
		      __init = [],
		      initialized = false;
		
		  // Взято из https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
		  function deepFreeze(obj) {
		    if (!('freeze' in Object)) {
		      return;
		    }
		
		    var propNames = Object.getOwnPropertyNames(obj);
		    propNames.forEach(function(name) {
		      var prop = obj[name];
		
		      if (typeof prop == 'object' && prop !== null)
		        deepFreeze(prop);
		    });
		
		    return Object.freeze(obj);
		  }
		
		  /**
		   * Тег. Содержит в себе информацию о конкретной форме слова, но при этом
		   * к конкретному слову не привязан. Всевозможные значения тегов переиспользуются
		   * для всех разборов слов.
		   *
		   * Все граммемы навешаны на тег как поля. Если какая-то граммема содержит в себе
		   * дочерние граммемы, то значением поля является именно название дочерней
		   * граммемы (например, tag.GNdr == 'masc'). В то же время для дочерних граммем
		   * значением является просто true (т.е. условие можно писать и просто как
		   * if (tag.masc) ...).
		   *
		   * @property {string[]} stat Полный список неизменяемых граммем.
		   * @property {string[]} flex Полный список изменяемых граммем.
		   * @property {Tag} ext Копия тега с русскими обозначениями (по версии OpenCorpora).
		   */
		  var Tag = function(str) {
		    var par, pair = str.split(' ');
		    this.stat = pair[0].split(',');
		    this.flex = pair[1] ? pair[1].split(',') : [];
		    for (var j = 0; j < 2; j++) {
		      var grams = this[['stat', 'flex'][j]];
		      for (var i = 0; i < grams.length; i++) {
		        var gram = grams[i];
		        this[gram] = true;
		        // loc2 -> loct -> CAse
		        while (grammemes[gram] && (par = grammemes[gram].parent)) {
		          this[par] = gram;
		          gram = par;
		        }
		      }
		    }
		    if ('POST' in this) {
		      this.POS = this.POST;
		    }
		  }
		
		  /**
		   * Возвращает текстовое представление тега.
		   *
		   * @returns {string} Список неизменяемых граммем через запятую, пробел,
		   *  и список изменяемых граммем через запятую.
		   */
		  Tag.prototype.toString = function() {
		    return (this.stat.join(',') + ' ' + this.flex.join(',')).trim();
		  }
		
		  /**
		   * Проверяет согласованность с конкретными значениями граммем либо со списком
		   * граммем из другого тега (или слова).
		   *
		   * @param {Tag|Parse} [tag] Тег или разбор слова, с которым следует
		   *  проверить согласованность.
		   * @param {Array|Object} grammemes Граммемы, по которым нужно проверить
		   *  согласованность.
		   *
		   *  Если указан тег (или разбор), то grammemes должен быть массивом тех
		   *  граммем, которые у обоих тегов должны совпадать. Например:
		   *  tag.matches(otherTag, ['POS', 'GNdr'])
		   *
		   *  Если тег не указан, а указан массив граммем, то проверяется просто их
		   *  наличие. Например, аналог выражения (tag.NOUN && tag.masc):
		   *  tag.matches([ 'NOUN', 'masc' ])
		   *
		   *  Если тег не указан, а указан объект, то ключи в нем — названия граммем,
		   *  значения — дочерние граммемы, массивы граммем, либо true/false:
		   *  tag.matches({ 'POS' : 'NOUN', 'GNdr': ['masc', 'neut'] })
		   * @returns {boolean} Является ли текущий тег согласованным с указанным.
		   */
		  // TODO: научиться понимать, что некоторые граммемы можно считать эквивалентными при сравнении двух тегов (вариации падежей и т.п.)
		  Tag.prototype.matches = function(tag, grammemes) {
		    if (!grammemes) {
		      if (Object.prototype.toString.call(tag) === '[object Array]') {
		        for (var i = 0; i < tag.length; i++) {
		          if (!this[tag[i]]) {
		            return false;
		          }
		        }
		        return true;
		      } else
		      // Match to map
		      for (var k in tag) {
		        if (Object.prototype.toString.call(tag[k]) === '[object Array]') {
		          if (!tag[k].indexOf(this[k])) {
		            return false;
		          }
		        } else {
		          if (tag[k] != this[k]) {
		            return false;
		          }
		        }
		      }
		      return true;
		    }
		
		    if (tag instanceof Parse) {
		      tag = tag.tag;
		    }
		
		    // Match to another tag
		    for (var i = 0; i < grammemes.length; i++) {
		      if (tag[grammemes[i]] != this[grammemes[i]]) {
		        // Special case: tag.CAse
		        return false;
		      }
		    }
		    return true;
		  }
		
		  Tag.prototype.isProductive = function() {
		    return !(this.NUMR || this.NPRO || this.PRED || this.PREP ||
		      this.CONJ || this.PRCL || this.INTJ || this.Apro ||
		      this.NUMB || this.ROMN || this.LATN || this.PNCT ||
		      this.UNKN);
		  }
		
		  Tag.prototype.isCapitalized = function() {
		    return this.Name || this.Surn || this.Patr || this.Geox || this.Init;
		  }
		
		  function makeTag(tagInt, tagExt) {
		    var tag = new Tag(tagInt);
		    tag.ext = new Tag(tagExt);
		    return deepFreeze(tag);
		  }
		
		  /**
		   * Производит морфологический анализ слова. Возвращает возможные варианты
		   * разбора по убыванию их правдоподобности.
		   *
		   * @playground
		   * var Az = require('az');
		   * Az.Morph.init(function() {
		   *   console.log(Az.Morph('стали'));
		   * });
		   * @param {string} word Слово, которое следует разобрать.
		   * @param {Object} [config] Опции разбора.
		   * @param {boolean} [config.ignoreCase=False] Следует ли игнорировать
		   *  регистр слов (в основном это означает возможность написания имен собственных и
		   *  инициалов с маленькой буквы).
		   * @param {Object} [config.replacements={ 'е': 'ё' }] Допустимые замены букв
		   *  при поиске слов в словаре. Ключи объекта — заменяемые буквы в разбираемом
		   *  слове, соответствующие им значения — буквы в словарных словах, которым
		   *  допустимо встречаться вместо заменяемых. По умолчанию буква «е» может
		   *  соответствовать букве «ё» в словарных словах.
		   * @param {number} [config.stutter=Infinity] «Заикание». Устраняет повторения букв
		   *  (как с дефисом - «не-е-ет», так и без - «нееет»).
		   *
		   *  Infinity не ограничивает максимальное число повторений (суммарно во всем слове).
		   *
		   *  0 или false чтобы отключить.
		   * @param {number|'auto'} [config.typos=0] Опечатки. Максимальное количество
		   * опечаток в слове.
		   *
		   *  Опечаткой считается:
		   *  - лишняя буква в слове
		   *  - пропущенная буква в слове (TODO: самый медленный тип опечаток, стоит сделать опциональным)
		   *  - не та буква в слове (если правильная буква стоит рядом на клавиатуре)
		   *  - переставленные местами соседние буквы
		   *
		   *  0 или false чтобы отключить.
		   *
		   *  'auto':
		   *  - 0, если слово короче 5 букв
		   *  - 1, если слово короче 10 букв (но только если не нашлось варианта разбора без опечаток)
		   *  - 2 в противном случае (но только если не нашлось варианта разбора без опечаток или с 1 опечаткой)
		   * @param {string[]} [config.parsers] Список применяемых парсеров (см. поля
		   *  объекта Az.Morph.Parsers) в порядке применения (т.е. стоящие в начале
		   *  имеют наивысший приоритет).
		   *
		   *  Вопросительный знак означает, что данный парсер не терминальный, то есть
		   *  варианты собираются до первого терминального парсера. Иными словами, если
		   *  мы дошли до какого-то парсера, значит все стоящие перед ним терминальные
		   *  парсеры либо не дали результата совсем, либо дали только с опечатками.
		   *
		   *  (парсер в терминологии pymorphy2 — анализатор)
		   * @param {boolean} [config.forceParse=False] Всегда возвращать хотя бы один вариант
		   *  разбора (как это делает pymorphy2), даже если совсем ничего не получилось.
		   * @returns {Parse[]} Варианты разбора.
		   * @memberof Az
		   */
		  var Morph = function(word, config) {
		    if (!initialized) {
		      throw new Error('Please call Az.Morph.init() before using this module.');
		    }
		
		    config = config ? Az.extend(defaults, config) : defaults;
		
		    var parses = [];
		    var matched = false;
		    for (var i = 0; i < config.parsers.length; i++) {
		      var name = config.parsers[i];
		      var terminal = name[name.length - 1] != '?';
		      name = terminal ? name : name.slice(0, -1);
		      if (name in Morph.Parsers) {
		        var vars = Morph.Parsers[name](word, config);
		        for (var j = 0; j < vars.length; j++) {
		          vars[j].parser = name;
		          if (!vars[j].stutterCnt && !vars[j].typosCnt) {
		            matched = true;
		          }
		        }
		
		        parses = parses.concat(vars);
		        if (matched && terminal) {
		          break;
		        }
		      } else {
		        console.warn('Parser "' + name + '" is not found. Skipping');
		      }
		    }
		
		    if (!parses.length && config.forceParse) {
		      parses.push(new Parse(word.toLocaleLowerCase(), UNKN));
		    }
		
		    var total = 0;
		    for (var i = 0; i < parses.length; i++) {
		      if (parses[i].parser == 'Dictionary') {
		        var res = probabilities.findAll(parses[i] + ':' + parses[i].tag);
		        if (res && res[0]) {
		          parses[i].score = (res[0][1] / 1000000) * getDictionaryScore(parses[i].stutterCnt, parses[i].typosCnt);
		          total += parses[i].score;
		        }
		      }
		    }
		
		    // Normalize Dictionary & non-Dictionary scores separately
		    if (config.normalizeScore) {
		      if (total > 0) {
		        for (var i = 0; i < parses.length; i++) {
		          if (parses[i].parser == 'Dictionary') {
		            parses[i].score /= total;
		          }
		        }
		      }
		
		      total = 0;
		      for (var i = 0; i < parses.length; i++) {
		        if (parses[i].parser != 'Dictionary') {
		          total += parses[i].score;
		        }
		      }
		      if (total > 0) {
		        for (var i = 0; i < parses.length; i++) {
		          if (parses[i].parser != 'Dictionary') {
		            parses[i].score /= total;
		          }
		        }
		      }
		    }
		
		    parses.sort(function(e1, e2) {
		      return e2.score - e1.score;
		    });
		
		    return parses;
		  }
		
		  // TODO: вынести парсеры в отдельный файл(ы)?
		
		  Morph.Parsers = {}
		
		  /**
		   * Один из возможных вариантов морфологического разбора.
		   *
		   * @property {string} word Слово в текущей форме (с исправленными ошибками,
		   *  если они были)
		   * @property {Tag} tag Тег, описывающий текущую форму слова.
		   * @property {number} score Число от 0 до 1, соответствующее «уверенности»
		   *  в данном разборе (чем оно выше, тем вероятнее данный вариант).
		   * @property {number} stutterCnt Число «заиканий», исправленных в слове.
		   * @property {number} typosCnt Число опечаток, исправленных в слове.
		   */
		  var Parse = function(word, tag, score, stutterCnt, typosCnt) {
		    this.word = word;
		    this.tag = tag;
		    this.stutterCnt = stutterCnt || 0;
		    this.typosCnt = typosCnt || 0;
		    this.score = score || 0;
		  }
		
		  /**
		   * Приводит слово к его начальной форме.
		   *
		   * @param {boolean} keepPOS Не менять часть речи при нормализации (например,
		   *  не делать из причастия инфинитив).
		   * @returns {Parse} Разбор, соответствующий начальной форме или False,
		   *  если произвести нормализацию не удалось.
		   */
		  // TODO: некоторые смены частей речи, возможно, стоит делать в любом случае (т.к., например, компаративы, краткие формы причастий и прилагательных разделены, инфинитив отделен от глагола)
		  Parse.prototype.normalize = function(keepPOS) {
		    return this.inflect(keepPOS ? { POS: this.tag.POS } : 0);
		  }
		
		  /**
		   * Приводит слово к указанной форме.
		   *
		   * @param {Tag|Parse} [tag] Тег или другой разбор слова, с которым следует
		   *  согласовать данный.
		   * @param {Array|Object} grammemes Граммемы, по которым нужно согласовать слово.
		   * @returns {Parse|False} Разбор, соответствующий указанной форме или False,
		   *  если произвести согласование не удалось.
		   * @see Tag.matches
		   */
		  Parse.prototype.inflect = function(tag, grammemes) {
		    return this;
		  }
		
		  /**
		   * Приводит слово к форме, согласующейся с указанным числом.
		   * Вместо конкретного числа можно указать категорию (согласно http://www.unicode.org/cldr/charts/29/supplemental/language_plural_rules.html).
		   *
		   * @param {number|string} number Число, с которым нужно согласовать данное слово или категория, описывающая правило построения множественного числа.
		   * @returns {Parse|False} Разбор, соответствующий указанному числу или False,
		   *  если произвести согласование не удалось.
		   */
		  Parse.prototype.pluralize = function(number) {
		    if (!this.tag.NOUN && !this.tag.ADJF && !this.tag.PRTF) {
		      return this;
		    }
		
		    if (typeof number == 'number') {
		      number = number % 100;
		      if ((number % 10 == 0) || (number % 10 > 4) || (number > 4 && number < 21)) {
		        number = 'many';
		      } else
		      if (number % 10 == 1) {
		        number = 'one';
		      } else {
		        number = 'few';
		      }
		    }
		
		    if (this.tag.NOUN && !this.tag.nomn && !this.tag.accs) {
		      return this.inflect([number == 'one' ? 'sing' : 'plur', this.tag.CAse]);
		    } else
		    if (number == 'one') {
		      return this.inflect(['sing', this.tag.nomn ? 'nomn' : 'accs'])
		    } else
		    if (this.tag.NOUN && (number == 'few')) {
		      return this.inflect(['sing', 'gent']);
		    } else
		    if ((this.tag.ADJF || this.tag.PRTF) && this.tag.femn && (number == 'few')) {
		      return this.inflect(['plur', 'nomn']);
		    } else {
		      return this.inflect(['plur', 'gent']);
		    }
		  }
		
		  /**
		   * Проверяет, согласуется ли текущая форма слова с указанной.
		   *
		   * @param {Tag|Parse} [tag] Тег или другой разбор слова, с которым следует
		   *  проверить согласованность.
		   * @param {Array|Object} grammemes Граммемы, по которым нужно проверить
		   *  согласованность.
		   * @returns {boolean} Является ли текущая форма слова согласованной с указанной.
		   * @see Tag.matches
		   */
		  Parse.prototype.matches = function(tag, grammemes) {
		    return this.tag.matches(tag, grammemes);
		  }
		
		  /**
		   * Возвращает текущую форму слова.
		   *
		   * @returns {String} Текущая форма слова.
		   */
		  Parse.prototype.toString = function() {
		    return this.word;
		  }
		
		  // Выводит информацию о слове в консоль.
		  Parse.prototype.log = function() {
		    console.group(this.toString());
		    console.log('Stutter?', this.stutterCnt, 'Typos?', this.typosCnt);
		    console.log(this.tag.ext.toString());
		    console.groupEnd();
		  }
		
		  function lookup(dawg, word, config) {
		    var entries;
		    if (config.typos == 'auto') {
		      entries = dawg.findAll(word, config.replacements, config.stutter, 0);
		      for (var i = 0; i < autoTypos.length && !entries.length && word.length > autoTypos[i]; i++) {
		        entries = dawg.findAll(word, config.replacements, config.stutter, i + 1);
		      }
		    } else {
		      entries = dawg.findAll(word, config.replacements, config.stutter, config.typos);
		    }
		    return entries;
		  }
		
		  function getDictionaryScore(stutterCnt, typosCnt) {
		    // = 1.0 if no stutter/typos
		    // = 0.3 if any number of stutter or 1 typo
		    // = 0.09 if 2 typos
		    // = 0.027 if 3 typos
		    return Math.pow(0.3, Math.min(stutterCnt, 1) + typosCnt);
		  }
		
		  var DictionaryParse = function(word, paradigmIdx, formIdx, stutterCnt, typosCnt, prefix, suffix) {
		    this.word = word;
		    this.paradigmIdx = paradigmIdx;
		    this.paradigm = paradigms[paradigmIdx];
		    this.formIdx = formIdx;
		    this.formCnt = this.paradigm.length / 3;
		    this.tag = tags[this.paradigm[this.formCnt + formIdx]];
		    this.stutterCnt = stutterCnt || 0;
		    this.typosCnt = typosCnt || 0;
		    this.score = getDictionaryScore(this.stutterCnt, this.typosCnt);
		    this.prefix = prefix || '';
		    this.suffix = suffix || '';
		  }
		
		  DictionaryParse.prototype = Object.create(Parse.prototype);
		  DictionaryParse.prototype.constructor = DictionaryParse;
		
		  // Возвращает основу слова
		  DictionaryParse.prototype.base = function() {
		    if (this._base) {
		      return this._base;
		    }
		    return (this._base = this.word.substring(
		      prefixes[this.paradigm[(this.formCnt << 1) + this.formIdx]].length,
		      this.word.length - suffixes[this.paradigm[this.formIdx]].length)
		    );
		  }
		
		  // Склоняет/спрягает слово так, чтобы оно соответствовало граммемам другого слова, тега или просто конкретным граммемам (подробнее см. Tag.prototype.matches).
		  // Всегда выбирается первый подходящий вариант.
		  DictionaryParse.prototype.inflect = function(tag, grammemes) {
		    if (!grammemes && typeof tag === 'number') {
		      // Inflect to specific formIdx
		      return new DictionaryParse(
		          prefixes[this.paradigm[(this.formCnt << 1) + tag]] +
		          this.base() +
		          suffixes[this.paradigm[tag]],
		        this.paradigmIdx,
		        tag, 0, 0, this.prefix, this.suffix
		      );
		    }
		
		    for (var formIdx = 0; formIdx < this.formCnt; formIdx++) {
		      if (tags[this.paradigm[this.formCnt + formIdx]].matches(tag, grammemes)) {
		        return new DictionaryParse(
		            prefixes[this.paradigm[(this.formCnt << 1) + formIdx]] +
		            this.base() +
		            suffixes[this.paradigm[formIdx]],
		          this.paradigmIdx,
		          formIdx, 0, 0, this.prefix, this.suffix
		        );
		      }
		    }
		
		    return false;
		  }
		
		  DictionaryParse.prototype.log = function() {
		    console.group(this.toString());
		    console.log('Stutter?', this.stutterCnt, 'Typos?', this.typosCnt);
		    console.log(prefixes[this.paradigm[(this.formCnt << 1) + this.formIdx]] + '|' + this.base() + '|' + suffixes[this.paradigm[this.formIdx]]);
		    console.log(this.tag.ext.toString());
		    var norm = this.normalize();
		    console.log('=> ', norm + ' (' + norm.tag.ext.toString() + ')');
		    norm = this.normalize(true);
		    console.log('=> ', norm + ' (' + norm.tag.ext.toString() + ')');
		    console.groupCollapsed('Все формы: ' + this.formCnt);
		    for (var formIdx = 0; formIdx < this.formCnt; formIdx++) {
		      var form = this.inflect(formIdx);
		      console.log(form + ' (' + form.tag.ext.toString() + ')');
		    }
		    console.groupEnd();
		    console.groupEnd();
		  }
		
		  DictionaryParse.prototype.toString = function() {
		    if (this.prefix) {
		      var pref = prefixes[this.paradigm[(this.formCnt << 1) + this.formIdx]];
		      return pref + this.prefix + this.word.substr(pref.length) + this.suffix;
		    } else {
		      return this.word + this.suffix;
		    }
		  }
		
		  var CombinedParse = function(left, right) {
		    this.left = left;
		    this.right = right;
		    this.tag = right.tag;
		    this.score = left.score * right.score * 0.8;
		    this.stutterCnt = left.stutterCnt + right.stutterCnt;
		    this.typosCnt = left.typosCnt + right.typosCnt;
		    if ('formCnt' in right) {
		      this.formCnt = right.formCnt;
		    }
		  }
		
		  CombinedParse.prototype = Object.create(Parse.prototype);
		  CombinedParse.prototype.constructor = CombinedParse;
		
		  CombinedParse.prototype.inflect = function(tag, grammemes) {
		    var left, right;
		
		    var right = this.right.inflect(tag, grammemes);
		    if (!grammemes && typeof tag === 'number') {
		      left = this.left.inflect(right.tag, ['POST', 'NMbr', 'CAse', 'PErs', 'TEns']);
		    } else {
		      left = this.left.inflect(tag, grammemes);
		    }
		    if (left && right) {
		      return new CombinedParse(left, right);
		    } else {
		      return false;
		    }
		  }
		
		  CombinedParse.prototype.toString = function() {
		    return this.left.word + '-' + this.right.word;
		  }
		
		  __init.push(function() {
		    Morph.Parsers.Dictionary = function(word, config) {
		      var isCapitalized =
		        !config.ignoreCase && word.length &&
		        (word[0].toLocaleLowerCase() != word[0]) &&
		        (word.substr(1).toLocaleUpperCase() != word.substr(1));
		      word = word.toLocaleLowerCase();
		
		      var opts = lookup(words, word, config);
		
		      var vars = [];
		      for (var i = 0; i < opts.length; i++) {
		        for (var j = 0; j < opts[i][1].length; j++) {
		          var w = new DictionaryParse(
		            opts[i][0],
		            opts[i][1][j][0],
		            opts[i][1][j][1],
		            opts[i][2],
		            opts[i][3]);
		          if (config.ignoreCase || !w.tag.isCapitalized() || isCapitalized) {
		            vars.push(w);
		          }
		        }
		      }
		      return vars;
		    }
		
		    var abbrTags = [];
		    for (var i = 0; i <= 2; i++) {
		      for (var j = 0; j <= 5; j++) {
		        for (var k = 0; k <= 1; k++) {
		          abbrTags.push(makeTag(
		            'NOUN,inan,' + ['masc', 'femn', 'neut'][i] + ',Fixd,Abbr ' + ['sing', 'plur'][k] + ',' + ['nomn', 'gent', 'datv', 'accs', 'ablt', 'loct'][j],
		            'СУЩ,неод,' + ['мр', 'жр', 'ср'][i] + ',0,аббр ' + ['ед', 'мн'][k] + ',' + ['им', 'рд', 'дт', 'вн', 'тв', 'пр'][j]
		          ));
		        }
		      }
		    }
		
		    // Произвольные аббревиатуры (несклоняемые)
		    // ВК, ЖК, ССМО, ОАО, ЛенСпецСМУ
		    Morph.Parsers.Abbr = function(word, config) {
		      // Однобуквенные считаются инициалами и для них заведены отдельные парсеры
		      if (word.length < 2) {
		        return [];
		      }
		      // Дефисов в аббревиатуре быть не должно
		      if (word.indexOf('-') > -1) {
		        return [];
		      }
		      // Первая буква должна быть заглавной: сокращения с маленькой буквы (типа iOS) мало распространены
		      // Последняя буква должна быть заглавной: иначе сокращение, вероятно, склоняется
		      if ((initials.indexOf(word[0]) > -1) && (initials.indexOf(word[word.length - 1]) > -1)) {
		        var caps = 0;
		        for (var i = 0; i < word.length; i++) {
		          if (initials.indexOf(word[i]) > -1) {
		            caps++;
		          }
		        }
		        if (caps <= 5) {
		          var vars = [];
		          for (var i = 0; i < abbrTags.length; i++) {
		            var w = new Parse(word, abbrTags[i], 0.5);
		            vars.push(w);
		          }
		          return vars;
		        }
		      }
		      // При игнорировании регистра разбираем только короткие аббревиатуры
		      // (и требуем, чтобы каждая буква была «инициалом», т.е. без мягких/твердых знаков)
		      if (!config.ignoreCase || (word.length > 5)) {
		        return [];
		      }
		      word = word.toLocaleUpperCase();
		      for (var i = 0; i < word.length; i++) {
		        if (initials.indexOf(word[i]) == -1) {
		          return [];
		        }
		      }
		      var vars = [];
		      for (var i = 0; i < abbrTags.length; i++) {
		        var w = new Parse(word, abbrTags[i], 0.2);
		        vars.push(w);
		      }
		      return vars;
		    }
		
		    var InitialsParser = function(isPatronymic, score) {
		      var initialsTags = [];
		      for (var i = 0; i <= 1; i++) {
		        for (var j = 0; j <= 5; j++) {
		          initialsTags.push(makeTag(
		            'NOUN,anim,' + ['masc', 'femn'][i] + ',Sgtm,Name,Fixd,Abbr,Init sing,' + ['nomn', 'gent', 'datv', 'accs', 'ablt', 'loct'][j],
		            'СУЩ,од,' + ['мр', 'жр'][i] + ',sg,имя,0,аббр,иниц ед,' + ['им', 'рд', 'дт', 'вн', 'тв', 'пр'][j]
		          ));
		        }
		      }
		      return function(word, config) {
		        if (word.length != 1) {
		          return [];
		        }
		        if (config.ignoreCase) {
		          word = word.toLocaleUpperCase();
		        }
		        if (initials.indexOf(word) == -1) {
		          return [];
		        }
		        var vars = [];
		        for (var i = 0; i < initialsTags.length; i++) {
		          var w = new Parse(word, initialsTags[i], score);
		          vars.push(w);
		        }
		        return vars;
		      }
		    }
		
		    Morph.Parsers.AbbrName = InitialsParser(false, 0.1);
		    Morph.Parsers.AbbrPatronymic = InitialsParser(true, 0.1);
		
		    var RegexpParser = function(regexp, tag, score) {
		      return function(word, config) {
		        if (config.ignoreCase) {
		          word = word.toLocaleUpperCase();
		        }
		        if (word.length && word.match(regexp)) {
		          return [new Parse(word, tag)];
		        } else {
		          return [];
		        }
		      }
		    }
		
		    grammemes['NUMB'] = grammemes['ЧИСЛО'] =
		    grammemes['ROMN'] = grammemes['РИМ'] =
		    grammemes['LATN'] = grammemes['ЛАТ'] =
		    grammemes['PNCT'] = grammemes['ЗПР'] =
		    grammemes['UNKN'] = grammemes['НЕИЗВ'] =
		     { parent: 'POST' };
		
		    Morph.Parsers.IntNumber = RegexpParser(
		      /^[−-]?[0-9]+$/,
		      makeTag('NUMB,intg', 'ЧИСЛО,цел'), 0.9);
		
		    Morph.Parsers.RealNumber = RegexpParser(
		      /^[−-]?([0-9]*[.,][0-9]+)$/,
		      makeTag('NUMB,real', 'ЧИСЛО,вещ'), 0.9);
		
		    Morph.Parsers.Punctuation = RegexpParser(
		      /^[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+$/,
		      makeTag('PNCT', 'ЗПР'), 0.9);
		
		    Morph.Parsers.RomanNumber = RegexpParser(
		      /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,
		      makeTag('ROMN', 'РИМ'), 0.9);
		
		    Morph.Parsers.Latin = RegexpParser(
		      /[A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u024f]$/,
		      makeTag('LATN', 'ЛАТ'), 0.9);
		
		    // слово + частица
		    // смотри-ка
		    Morph.Parsers.HyphenParticle = function(word, config) {
		      word = word.toLocaleLowerCase();
		
		      var vars = [];
		      for (var k = 0; k < particles.length; k++) {
		        if (word.substr(word.length - particles[k].length) == particles[k]) {
		          var base = word.slice(0, -particles[k].length);
		          var opts = lookup(words, base, config);
		
		          //console.log(opts);
		          for (var i = 0; i < opts.length; i++) {
		            for (var j = 0; j < opts[i][1].length; j++) {
		              var w = new DictionaryParse(
		                opts[i][0],
		                opts[i][1][j][0],
		                opts[i][1][j][1],
		                opts[i][2],
		                opts[i][3],
		                '', particles[k]);
		              w.score *= 0.9;
		              vars.push(w);
		            }
		          }
		        }
		      }
		
		      return vars;
		    }
		
		    var ADVB = makeTag('ADVB', 'Н');
		
		    // 'по-' + прилагательное в дательном падеже
		    // по-западному
		    Morph.Parsers.HyphenAdverb = function(word, config) {
		      word = word.toLocaleLowerCase();
		
		      if ((word.length < 5) || (word.substr(0, 3) != 'по-')) {
		        return [];
		      }
		
		      var opts = lookup(words, word.substr(3), config);
		
		      var parses = [];
		      var used = {};
		
		      for (var i = 0; i < opts.length; i++) {
		        if (!used[opts[i][0]]) {
		          for (var j = 0; j < opts[i][1].length; j++) {
		            var parse = new DictionaryParse(opts[i][0], opts[i][1][j][0], opts[i][1][j][1], opts[i][2], opts[i][3]);
		            if (parse.matches(['ADJF', 'sing', 'datv'])) {
		              used[opts[i][0]] = true;
		
		              parse = new Parse('по-' + opts[i][0], ADVB, parse.score * 0.9, opts[i][2], opts[i][3]);
		              parses.push(parse);
		              break;
		            }
		          }
		        }
		      }
		      return parses;
		    }
		
		    // слово + '-' + слово
		    // интернет-магазин
		    // компания-производитель
		    Morph.Parsers.HyphenWords = function(word, config) {
		      word = word.toLocaleLowerCase();
		      for (var i = 0; i < knownPrefixes.length; i++) {
		        if (knownPrefixes[i][knownPrefixes[i].length - 1] == '-' &&
		            word.substr(0, knownPrefixes[i].length) == knownPrefixes[i]) {
		          return [];
		        }
		      }
		      var parses = [];
		      var parts = word.split('-');
		      if (parts.length != 2 || !parts[0].length || !parts[1].length) {
		        if (parts.length > 2) {
		          var end = parts[parts.length - 1];
		          var right = Morph.Parsers.Dictionary(end, config);
		          for (var j = 0; j < right.length; j++) {
		            if (right[j] instanceof DictionaryParse) {
		              right[j].score *= 0.2;
		              right[j].prefix = word.substr(0, word.length - end.length - 1) + '-';
		              parses.push(right[j]);
		            }
		          }
		        }
		        return parses;
		      }
		      var left = Morph.Parsers.Dictionary(parts[0], config);
		      var right = Morph.Parsers.Dictionary(parts[1], config);
		
		
		      // Variable
		      for (var i = 0; i < left.length; i++) {
		        if (left[i].tag.Abbr) {
		          continue;
		        }
		        for (var j = 0; j < right.length; j++) {
		          if (!left[i].matches(right[j], ['POST', 'NMbr', 'CAse', 'PErs', 'TEns'])) {
		            continue;
		          }
		          if (left[i].stutterCnt + right[j].stutterCnt > config.stutter ||
		              left[i].typosCnt + right[j].typosCnt > config.typos) {
		            continue;
		          }
		          parses.push(new CombinedParse(left[i], right[j]));
		        }
		      }
		      // Fixed
		      for (var j = 0; j < right.length; j++) {
		        if (right[j] instanceof DictionaryParse) {
		          right[j].score *= 0.3;
		          right[j].prefix = parts[0] + '-';
		          parses.push(right[j]);
		        }
		      }
		
		      return parses;
		    }
		
		
		    Morph.Parsers.PrefixKnown = function(word, config) {
		      var isCapitalized =
		        !config.ignoreCase && word.length &&
		        (word[0].toLocaleLowerCase() != word[0]) &&
		        (word.substr(1).toLocaleUpperCase() != word.substr(1));
		      word = word.toLocaleLowerCase();
		      var parses = [];
		      for (var i = 0; i < knownPrefixes.length; i++) {
		        if (word.length - knownPrefixes[i].length < 3) {
		          continue;
		        }
		
		        if (word.substr(0, knownPrefixes[i].length) == knownPrefixes[i]) {
		          var end = word.substr(knownPrefixes[i].length);
		          var right = Morph.Parsers.Dictionary(end, config);
		          for (var j = 0; j < right.length; j++) {
		            if (!right[j].tag.isProductive()) {
		              continue;
		            }
		            if (!config.ignoreCase && right[j].tag.isCapitalized() && !isCapitalized) {
		              continue;
		            }
		            right[j].score *= 0.7;
		            right[j].prefix = knownPrefixes[i];
		            parses.push(right[j]);
		          }
		        }
		      }
		      return parses;
		    }
		
		    Morph.Parsers.PrefixUnknown = function(word, config) {
		      var isCapitalized =
		        !config.ignoreCase && word.length &&
		        (word[0].toLocaleLowerCase() != word[0]) &&
		        (word.substr(1).toLocaleUpperCase() != word.substr(1));
		      word = word.toLocaleLowerCase();
		      var parses = [];
		      for (var len = 1; len <= 5; len++) {
		        if (word.length - len < 3) {
		          break;
		        }
		        var end = word.substr(len);
		        var right = Morph.Parsers.Dictionary(end, config);
		        for (var j = 0; j < right.length; j++) {
		          if (!right[j].tag.isProductive()) {
		            continue;
		          }
		          if (!config.ignoreCase && right[j].tag.isCapitalized() && !isCapitalized) {
		            continue;
		          }
		          right[j].score *= 0.3;
		          right[j].prefix = word.substr(0, len);
		          parses.push(right[j]);
		        }
		      }
		      return parses;
		    }
		
		    // Отличие от предсказателя по суффиксам в pymorphy2: найдя подходящий суффикс, проверяем ещё и тот, что на символ короче
		    Morph.Parsers.SuffixKnown = function(word, config) {
		      if (word.length < 4) {
		        return [];
		      }
		      var isCapitalized =
		        !config.ignoreCase && word.length &&
		        (word[0].toLocaleLowerCase() != word[0]) &&
		        (word.substr(1).toLocaleUpperCase() != word.substr(1));
		      word = word.toLocaleLowerCase();
		      var parses = [];
		      var minlen = 1;
		      var coeffs = [0, 0.2, 0.3, 0.4, 0.5, 0.6];
		      var used = {};
		      for (var i = 0; i < prefixes.length; i++) {
		        if (prefixes[i].length && (word.substr(0, prefixes[i].length) != prefixes[i])) {
		          continue;
		        }
		        var base = word.substr(prefixes[i].length);
		        for (var len = 5; len >= minlen; len--) {
		          if (len >= base.length) {
		            continue;
		          }
		          var left = base.substr(0, base.length - len);
		          var right = base.substr(base.length - len);
		          var entries = predictionSuffixes[i].findAll(right, config.replacements, 0, 0);
		          if (!entries) {
		            continue;
		          }
		
		          var p = [];
		          var max = 1;
		          for (var j = 0; j < entries.length; j++) {
		            var suffix = entries[j][0];
		            var stats = entries[j][1];
		
		            for (var k = 0; k < stats.length; k++) {
		              var parse = new DictionaryParse(
		                prefixes[i] + left + suffix,
		                stats[k][1],
		                stats[k][2]);
		              // Why there is even non-productive forms in suffix DAWGs?
		              if (!parse.tag.isProductive()) {
		                continue;
		              }
		              if (!config.ignoreCase && parse.tag.isCapitalized() && !isCapitalized) {
		                continue;
		              }
		              var key = parse.toString() + ':' + stats[k][1] + ':' + stats[k][2];
		              if (key in used) {
		                continue;
		              }
		              max = Math.max(max, stats[k][0]);
		              parse.score = stats[k][0] * coeffs[len];
		              p.push(parse);
		              used[key] = true;
		            }
		          }
		          if (p.length > 0) {
		            for (var j = 0; j < p.length; j++) {
		              p[j].score /= max;
		            }
		            parses = parses.concat(p);
		            // Check also suffixes 1 letter shorter
		            minlen = Math.max(len - 1, 1);
		          }
		        }
		      }
		      return parses;
		    }
		
		    UNKN = makeTag('UNKN', 'НЕИЗВ');
		  });
		
		  /**
		   * Задает опции морфологического анализатора по умолчанию.
		   *
		   * @param {Object} config Опции анализатора.
		   * @see Morph
		   */
		  Morph.setDefaults = function(config) {
		    defaults = config;
		  }
		
		  /**
		   * Инициализирует анализатор, загружая необходимые для работы словари из
		   * указанной директории. Эту функцию необходимо вызвать (и дождаться
		   * срабатывания коллбэка) до любых действий с модулем.
		   *
		   * @param {string} [path] Директория, содержащая файлы 'words.dawg',
		   * 'grammemes.json' и т.д. По умолчанию директория 'dicts' в данном модуле.
		   * @param {Function} callback Коллбэк, вызываемый после завершения загрузки
		   *  всех словарей.
		   */
		  Morph.init = function(path, callback) {
		    var loading = 0;
		    var tagsInt, tagsExt;
		    function loaded() {
		      if (!--loading) {
		        tags = Array(tagsInt.length);
		        for (var i = 0; i < tagsInt.length; i++) {
		          tags[i] = new Tag(tagsInt[i]);
		          tags[i].ext = new Tag(tagsExt[i]);
		        }
		        tags = deepFreeze(tags);
		        for (var i = 0; i < __init.length; i++) {
		          __init[i]();
		        }
		        initialized = true;
		        callback && callback(null, Morph);
		      }
		    }
		
		    if (!callback && typeof path == 'function') {
		      callback = path;
		      if (true) {
		        path = __dirname + '/../dicts';
		      } else {
		        path = 'dicts';
		      }
		    }
		
		    loading++;
		    Az.DAWG.load(path + '/words.dawg', 'words', function(err, dawg) {
		      if (err) {
		        callback(err);
		        return;
		      }
		      words = dawg;
		      loaded();
		    });
		
		    for (var prefix = 0; prefix < 3; prefix++) {
		      (function(prefix) {
		        loading++;
		        Az.DAWG.load(path + '/prediction-suffixes-' + prefix + '.dawg', 'probs', function(err, dawg) {
		          if (err) {
		            callback(err);
		            return;
		          }
		          predictionSuffixes[prefix] = dawg;
		          loaded();
		        });
		      })(prefix);
		    }
		
		    loading++;
		    Az.DAWG.load(path + '/p_t_given_w.intdawg', 'int', function(err, dawg) {
		      if (err) {
		        callback(err);
		        return;
		      }
		      probabilities = dawg;
		      loaded();
		    });
		
		    loading++;
		    Az.load(path + '/grammemes.json', 'json', function(err, json) {
		      if (err) {
		        callback(err);
		        return;
		      }
		      grammemes = {};
		      for (var i = 0; i < json.length; i++) {
		        grammemes[json[i][0]] = grammemes[json[i][2]] = {
		          parent: json[i][1],
		          internal: json[i][0],
		          external: json[i][2],
		          externalFull: json[i][3]
		        }
		      }
		      loaded();
		    });
		
		    loading++;
		    Az.load(path + '/gramtab-opencorpora-int.json', 'json', function(err, json) {
		      if (err) {
		        callback(err);
		        return;
		      }
		      tagsInt = json;
		      loaded();
		    });
		
		    loading++;
		    Az.load(path + '/gramtab-opencorpora-ext.json', 'json', function(err, json) {
		      if (err) {
		        callback(err);
		        return;
		      }
		      tagsExt = json;
		      loaded();
		    });
		
		    loading++;
		    Az.load(path + '/suffixes.json', 'json', function(err, json) {
		      if (err) {
		        callback(err);
		        return;
		      }
		      suffixes = json;
		      loaded();
		    });
		
		    loading++;
		    Az.load(path + '/paradigms.array', 'arraybuffer', function(err, data) {
		      if (err) {
		        callback(err);
		        return;
		      }
		      
		      var list = new Uint16Array(data),
		          count = list[0],
		          pos = 1;
		
		      paradigms = [];
		      for (var i = 0; i < count; i++) {
		        var size = list[pos++];
		        paradigms.push(list.subarray(pos, pos + size));
		        pos += size;
		      }
		      loaded();
		    });
		  }
		
		  return Morph;
		}));
		
		;(function (global, factory) {
		   true ? (module.exports = module.exports || {}) && (module.exports.Syntax = factory(module.exports)) :
		  typeof define === 'function' && define.amd ? define('Az.Syntax', ['Az'], factory) :
		  (global.Az = global.Az || {}) && (global.Az.Syntax = factory(global.Az))
		}(this, function (Az) { 'use strict';
		  // TBD: Syntax analyzer
		  var Syntax = function() {
		
		  }
		
		  return Syntax;
		}));
		;(function (global, factory) {
		   true ? (module.exports = module.exports || {}) && (module.exports.Tokens = factory()) :
		  typeof define === 'function' && define.amd ? define('Az.Tokens', ['Az'], factory) :
		  (global.Az = global.Az || {}) && (global.Az.Tokens = factory())
		}(this, function () { 'use strict';
		  /** @namespace Az **/
		  var TLDs = 'ac|ad|ae|aero|af|ag|ai|al|am|ao|aq|ar|arpa|as|asia|at|au|aw|ax|az|ba|bb|be|bf|bg|bh|bi|biz|bj|bm|bo|br|bs|bt|bv|bw|by|bz|ca|cat|cc|cd|cf|cg|ch|ci|cl|cm|cn|co|com|coop|cr|cu|cv|cw|cx|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|es|et|eu|fi|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|info|int|io|iq|ir|is|it|je|jo|jobs|jp|kg|ki|km|kn|kp|kr|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mn|mo|mobi|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|na|name|nc|ne|net|nf|ng|nl|no|nr|nu|nz|om|org|pa|pe|pf|ph|pk|pl|pm|pn|post|pr|pro|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tr|travel|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|yt|امارات|հայ|বাংলা|бел|中国|中國|الجزائر|مصر|ею|გე|ελ|香港|भारत|بھارت|భారత్|ભારત|ਭਾਰਤ|ভারত|இந்தியா|ایران|ايران|عراق|الاردن|한국|қаз|ලංකා|இலங்கை|المغرب|мкд|мон|澳門|澳门|مليسيا|عمان|پاکستان|پاكستان|فلسطين|срб|рф|قطر|السعودية|السعودیة|السعودیۃ|السعوديه|سودان|新加坡|சிங்கப்பூர்|سورية|سوريا|ไทย|تونس|台灣|台湾|臺灣|укр|اليمن|xxx|zm|aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|academy|accenture|accountant|accountants|aco|active|actor|adac|ads|adult|aeg|aetna|afamilycompany|afl|africa|africamagic|agakhan|agency|aig|aigo|airbus|airforce|airtel|akdn|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|aol|apartments|app|apple|aquarelle|arab|aramco|archi|army|art|arte|asda|associates|athleta|attorney|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aws|axa|azure|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bbc|bbt|bbva|bcg|bcn|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bharti|bible|bid|bike|bing|bingo|bio|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bms|bmw|bnl|bnpparibas|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|bradesco|bridgestone|broadway|broker|brother|brussels|budapest|bugatti|build|builders|business|buy|buzz|bzh|cab|cafe|cal|call|calvinklein|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|catering|catholic|cba|cbn|cbre|cbs|ceb|center|ceo|cern|cfa|cfd|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|coach|codes|coffee|college|cologne|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|corsica|country|coupon|coupons|courses|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cuisinella|cymru|cyou|dabur|dad|dance|date|dating|datsun|day|dclk|dds|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dnp|docs|dodge|dog|doha|domains|dot|download|drive|dstv|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dwg|earth|eat|edeka|education|email|emerck|emerson|energy|engineer|engineering|enterprises|epost|epson|equipment|ericsson|erni|esq|estate|esurance|etisalat|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|flickr|flights|flir|florist|flowers|flsmidth|fly|foo|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|gal|gallery|gallo|gallup|game|games|gap|garden|gbiz|gdn|gea|gent|genting|george|ggee|gift|gifts|gives|giving|glade|glass|gle|global|globo|gmail|gmbh|gmo|gmx|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gotv|grainger|graphics|gratis|green|gripe|group|guardian|gucci|guge|guide|guitars|guru|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hkt|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|host|hosting|hot|hoteles|hotmail|house|how|hsbc|htc|hughes|hyatt|hyundai|ibm|icbc|ice|icu|ieee|ifm|iinet|ikano|imamat|imdb|immo|immobilien|industries|infiniti|ing|ink|institute|insurance|insure|intel|international|intuit|investments|ipiranga|irish|iselect|ismaili|ist|istanbul|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|jeep|jetzt|jewelry|jio|jlc|jll|jmp|jnj|joburg|jot|joy|jpmorgan|jprs|juegos|juniper|kaufen|kddi|kerryhotels|kerrylogistics|kerryproperties|kfh|kia|kim|kinder|kindle|kitchen|kiwi|koeln|komatsu|kosher|kpmg|kpn|krd|kred|kuokgroup|kyknet|kyoto|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|ltd|ltda|lundbeck|lupin|luxe|luxury|macys|madrid|maif|maison|makeup|man|management|mango|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mcd|mcdonalds|mckinsey|med|media|meet|melbourne|meme|memorial|men|menu|meo|metlife|miami|microsoft|mini|mint|mit|mitsubishi|mlb|mls|mma|mnet|mobily|moda|moe|moi|mom|monash|money|monster|montblanc|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|msd|mtn|mtpc|mtr|multichoice|mutual|mutuelle|mzansimagic|nab|nadex|nagoya|naspers|nationwide|natura|navy|nba|nec|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nfl|ngo|nhk|nico|nike|nikon|ninja|nissan|nissay|nokia|northwesternmutual|norton|now|nowruz|nowtv|nra|nrw|ntt|nyc|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|organic|orientexpress|origins|osaka|otsuka|ott|ovh|page|pamperedchef|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|payu|pccw|pet|pfizer|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|place|play|playstation|plumbing|plus|pnc|pohl|poker|politie|porn|pramerica|praxi|press|prime|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|pub|pwc|qpon|quebec|quest|qvc|racing|raid|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|rocher|rocks|rodeo|rogers|room|rsvp|ruhr|run|rwe|ryukyu|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sbi|sbs|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shopping|shouji|show|showtime|shriram|silk|sina|singles|site|ski|skin|sky|skype|sling|smart|smile|sncf|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|srl|srt|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|sucks|supersport|supplies|supply|support|surf|surgery|suzuki|swatch|swiftcover|swiss|sydney|symantec|systems|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tci|tdk|team|tech|technology|telecity|telefonica|temasek|tennis|teva|thd|theater|theatre|theguardian|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tjmaxx|tjx|tkmaxx|tmall|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|trade|trading|training|travelchannel|travelers|travelersinsurance|trust|trv|tube|tui|tunes|tushu|tvs|ubank|ubs|uconnect|unicom|university|uno|uol|ups|vacations|vana|vanguard|vegas|ventures|verisign|versicherung|vet|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vodka|volkswagen|volvo|vote|voting|voto|voyage|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|कॉम|セール|佛山|慈善|集团|在线|大众汽车|点看|คอม|八卦|موقع|一号店|公益|公司|香格里拉|网站|移动|我爱你|москва|католик|онлайн|сайт|联通|קום|时尚|微博|淡马锡|ファッション|орг|नेट|ストア|삼성|商标|商店|商城|дети|ポイント|新闻|工行|家電|كوم|中文网|中信|娱乐|谷歌|電訊盈科|购物|クラウド|通販|网店|संगठन|餐厅|网络|ком|诺基亚|食品|飞利浦|手表|手机|ارامكو|العليان|اتصالات|بازار|موبايلي|ابوظبي|كاثوليك|همراه|닷컴|政府|شبكة|بيتك|عرب|机构|组织机构|健康|рус|珠宝|大拿|みんな|グーグル|世界|書籍|网址|닷넷|コム|天主教|游戏|vermögensberater|vermögensberatung|企业|信息|嘉里大酒店|嘉里|广东|政务|xperia|xyz|yachts|yahoo|yamaxun|yandex|yodobashi|yoga|yokohama|you|youtube|yun|zappos|zara|zero|zip|zippo|zone|zuerich'.split('|');
		  var defaults = {
		    html: false,
		    wiki: false,       // TODO: check all cases
		    markdown: false,   // TODO: check all cases
		    hashtags: true,
		    mentions: true,
		    emails: true,
		    links: {
		      protocols: true,
		      www: false,
		      tlds: {}
		    }
		  };
		  /* TODO: add more named HTML entities */
		  var HTML_ENTITIES = { nbsp: ' ', quot: '"', gt: '>', lt: '<', amp: '&', ndash: '–' };
		
		  for (var i = 0; i < TLDs.length; i++) {
		    defaults.links.tlds[TLDs[i]] = true;
		  }
		
		  /**
		   * Токен, соответствующий некоторой подстроке в представленном на вход тексте.
		   *
		   * @constructor
		   * @property {string} type Тип токена.
		   * @property {string} subType Подтип токена.
		   * @property {number} st Индекс первого символа, входящего в токен.
		   * @property {number} en Индекс последнего символа, входящего в токен.
		   * @property {number} length Длина токена.
		   * @property {boolean} firstUpper True, если первый символ токена является заглавной буквой.
		   * @property {boolean} allUpper True, если все символы в токене являются заглавными буквами.
		   */
		  var Token = function(source, st, length, index, firstUpper, allUpper, type, subType) {
		    this.source = source;
		    this.st = st;
		    this.length = length;
		    this.index = index;
		    this.firstUpper = firstUpper;
		    this.allUpper = allUpper;
		    this.type = type;
		    if (subType) {
		      this.subType = subType;
		    }
		  }
		  Token.prototype.toString = function() {
		    return (('_str' in this) && (this._str.length == this.length)) ? this._str : (this._str = this.source.substr(this.st, this.length));
		  }
		  Token.prototype.indexOf = function(str) {
		    if (str.length == 1) {
		      for (var i = 0; i < this.length; i++) {
		        if (this.source[this.st + i] == str) {
		          return i;
		        }
		      }
		      return -1;
		    }
		    return this.toString().indexOf(str);
		  }
		  Token.prototype.toLowerCase = function() {
		    return this.toString().toLocaleLowerCase();
		  }
		  Token.prototype.isCapitalized = function() {
		    return this.firstUpper && !this.allUpper;
		  }
		  Token.prototype.en = function() {
		    return this.st + this.length - 1;
		  }
		
		  /**
		   * Создает токенизатор текста с заданными опциями.
		   *
		   * @playground
		   * var Az = require('az');
		   * var tokens = Az.Tokens('Текст (от лат. textus — «ткань; сплетение, связь, паутина, сочетание») — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.');
		   * tokens.done();
		   * @constructor
		   * @param {string} [text] Строка для разбивки на токены.
		   * @param {Object} [config] Опции, применяемые при разбивке.
		   * @param {boolean} [config.html=False] Распознавать и выделять в отдельные
		   *  токены (типа TAG) HTML-теги. Кроме того, содержимое тегов &lt;style&gt;
		   *  и &lt;script&gt; будет размечено как единый токен типа CONTENT.
		   * @param {boolean} [config.wiki=False] Распознавать и выделять в отдельные
		   *  токены элементы вики-разметки.
		   * @param {boolean} [config.markdown=False] Распознавать и выделять в отдельные
		   *  токены элементы Markdown-разметки.
		   * @param {boolean} [config.hashtags=True] Распознавать и выделять в отдельные
		   *  токены хэштеги (строки, начинающиеся с символа «#»).
		   * @param {boolean} [config.mentions=True] Распознавать и выделять в отдельные
		   *  токены упоминания (строки, начинающиеся с символа «@»).
		   * @param {boolean} [config.emails=True] Распознавать и выделять в отдельные
		   *  токены е-мейлы (нет, распознавание всех корректных по RFC адресов не
		   *  гарантируется).
		   * @param {Object} [config.links] Настройки распознавания ссылок. False, чтобы
		   *  не распознавать ссылки совсем.
		   * @param {boolean} [config.links.protocols=True] Распознавать и выделять в отдельные
		   *  токены ссылки с указанным протоколом (http://, https:// и вообще любым другим).
		   * @param {boolean} [config.links.www=False] Распознавать и выделять в отдельные
		   *  токены ссылки, начинающиеся с «www.».
		   * @param {Object} [config.links.tlds] Объект, в котором ключами должны быть
		   *  домены верхнего уровня, в которых будут распознаваться ссылки. По умолчанию
		   *  текущий список всех таких доменов.
		   * @memberof Az
		   */
		  var Tokens = function(text, config) {
		    if (this instanceof Tokens) {
		      this.tokens = [];
		      this.source = '';
		      if (typeof text == 'string') {
		        this.config = config ? Az.extend(defaults, config) : defaults;
		        this.append(text);
		      } else {
		        this.config = text ? Az.extend(defaults, text) : defaults;
		      }
		      this.index = -1;
		    } else {
		      return new Tokens(text, config);
		    }
		  }
		
		  Tokens.WORD = new String('WORD');
		  Tokens.NUMBER = new String('NUMBER');
		  Tokens.OTHER = new String('OTHER');
		  Tokens.DIGIT = new String('DIGIT');
		  Tokens.CYRIL = new String('CYRIL');
		  Tokens.LATIN = new String('LATIN');
		  Tokens.MIXED = new String('MIXED');
		  Tokens.PUNCT = new String('PUNCT');
		  Tokens.SPACE = new String('SPACE');
		  Tokens.MARKUP = new String('MARKUP');
		  Tokens.NEWLINE = new String('NEWLINE');
		  Tokens.EMAIL = new String('EMAIL');
		  Tokens.LINK = new String('LINK');
		  Tokens.HASHTAG = new String('HASHTAG');
		  Tokens.MENTION = new String('MENTION');
		  Tokens.TAG = new String('TAG');
		  Tokens.CONTENT = new String('CONTENT');
		  Tokens.SCRIPT = new String('SCRIPT');
		  Tokens.STYLE = new String('STYLE');
		  Tokens.COMMENT = new String('COMMENT');
		  Tokens.CLOSING = new String('CLOSING');
		  Tokens.TEMPLATE = new String('TEMPLATE');
		  Tokens.RANGE = new String('RANGE');
		  Tokens.ENTITY = new String('ENTITY');
		
		  /**
		   * Отправляет ещё один кусок текста на токенизацию. Таким образом вполне
		   * допустимо обрабатывать большие документы частями, многократно вызывая этот
		   * метод. При этом токен может начаться в одной части и продолжиться в
		   * следующей (а закончиться в ещё одной).
		   *
		   * @param {string} text Строка для разбивки на токены.
		   * @param {Object} [config] Опции, применяемые при разбивке. Перекрывают
		   *  опции, заданные в конструкторе токенизатора.
		   * @see Tokens
		   */
		  Tokens.prototype.append = function(text, config) {
		    'use strict';
		    // Для производительности:
		    // - как можно меньше операций конкатенции/разбивки строк
		    // - вместо сравнения всего токена, проверяем соответствующий ему символ в исходной строке
		    // - типы токенов - константы в Tokens, формально это строки, но сравниваем через === (как объекты)
		    config = config ? Az.extend(this.config, config) : this.config;
		    if (config.links && (config.links.tlds === true)) {
		      config.links.tlds = defaults.links.tlds;
		    }
		
		    var offs = this.source.length;
		    this.source += text;
		    
		    var s = this.source, ts = this.tokens;
		    for (var i = offs; i < s.length; i++) {
		      var ch = s[i];
		      var code = s.charCodeAt(i);
		
		      var append = false;
		      var last = ts.length - 1;
		      var token = ts[last];
		      var st = i;
		
		      if (config.html && (ch == ';')) {
		        // &nbsp;
		        if ((last > 0) && 
		            (token.type === Tokens.WORD) && 
		            (ts[last - 1].length == 1) && 
		            (s[ts[last - 1].st] == '&')) {
		          var name = token.toLowerCase();
		          if (name in HTML_ENTITIES) {
		            ch = HTML_ENTITIES[name];
		            code = ch.charCodeAt(0);
		
		            last -= 2;
		            token = ts[last];
		            ts.length = last + 1;
		          }
		        } else
		        // &x123AF5;
		        // &1234;
		        if ((last > 1) && 
		            ((token.type === Tokens.NUMBER) || 
		             ((token.type === Tokens.WORD) &&
		              (s[token.st] == 'x'))) && 
		            (ts[last - 1].length == 1) &&
		            (s[ts[last - 1].st] == '#') && 
		            (ts[last - 1].length == 1) &&
		            (s[ts[last - 1].st] == '&')) {
		          if (s[token.st] == 'x') {
		            code = parseInt(token.toString().substr(1), 16);
		          } else {
		            code = parseInt(token.toString(), 10);
		          }
		          ch = String.fromCharCode(code);
		
		          last -= 3;
		          token = ts[last];
		          ts.length = last + 1;
		        }
		      }
		
		      var charType = Tokens.OTHER;
		      var charUpper = (ch.toLocaleLowerCase() != ch);
		      if (code >= 0x0400 && code <= 0x04FF) charType = Tokens.CYRIL;
		      if ((code >= 0x0041 && code <= 0x005A) || (code >= 0x0061 && code <= 0x007A) || (code >= 0x00C0 && code <= 0x024F)) charType = Tokens.LATIN;
		      if (code >= 0x0030 && code <= 0x0039) charType = Tokens.DIGIT;
		      if ((code <= 0x0020) || (code >= 0x0080 && code <= 0x00A0)) charType = Tokens.SPACE;
		      if ('‐-−‒–—―.…,:;?!¿¡()[]«»"\'’‘’“”/⁄'.indexOf(ch) > -1) charType = Tokens.PUNCT;
		
		      var tokenType = charType;
		      var tokenSubType = false;
		      if (charType === Tokens.CYRIL || charType === Tokens.LATIN) {
		        tokenType = Tokens.WORD;
		        tokenSubType = charType;
		      } else
		      if (charType === Tokens.DIGIT) {
		        tokenType = Tokens.NUMBER;
		      }
		
		      var lineStart = !token || (s[token.st + token.length - 1] == '\n');
		
		      if (config.wiki) {
		        if (lineStart) {
		          if (':;*#~|'.indexOf(ch) > -1) {
		            tokenType = Tokens.MARKUP;
		            tokenSubType = Tokens.NEWLINE;
		          }
		        }
		        if ('={[|]}'.indexOf(ch) > -1) {
		          tokenType = Tokens.MARKUP;
		        }
		      }
		
		      if (config.markdown) {
		        if (lineStart) {
		          if ('=-#>+-'.indexOf(ch) > -1) {
		            tokenType = Tokens.MARKUP;
		            tokenSubType = Tokens.NEWLINE;
		          }
		        }
		        if ('[]*~_`\\'.indexOf(ch) > -1) {
		          tokenType = Tokens.MARKUP;
		        }
		      }
		
		      if (token) {
		        if (config.wiki && 
		            (ch != "'") && 
		            (token.length == 1) &&
		            (s[token.st] == "'") &&
		            (last > 0) &&
		            (ts[last - 1].type === Tokens.WORD) &&
		            (ts[last - 1].subType === Tokens.LATIN)) {
		          ts[last - 1].length += token.length;
		
		          last -= 1;
		          ts.length = last + 1;
		          token = ts[last];
		        }
		
		        // Preprocess last token
		        if (config.links && 
		            config.links.tlds &&
		            ((charType === Tokens.PUNCT) || 
		             (charType === Tokens.SPACE)) &&
		            (ts.length > 2) &&
		            (ts[last - 2].type === Tokens.WORD) &&
		            (ts[last - 1].length == 1) &&
		            (s[ts[last - 1].st] == '.') &&
		            (ts[last].type === Tokens.WORD) &&
		            (token.toString() in config.links.tlds)) {
		
		          // Merge all subdomains
		          while ((last >= 2) &&
		                 (ts[last - 2].type === Tokens.WORD) &&
		                 (ts[last - 1].length == 1) &&
		                 ((s[ts[last - 1].st] == '.') || 
		                  (s[ts[last - 1].st] == '@') || 
		                  (s[ts[last - 1].st] == ':'))) {
		            last -= 2;
		            token = ts[last];
		            token.length += ts[last + 1].length + ts[last + 2].length;
		            token.allUpper = token.allUpper && ts[last + 1].allUpper && ts[last + 2].allUpper;
		          }
		
		          if (config.emails && 
		              (token.indexOf('@') > -1) && 
		              (token.indexOf(':') == -1)) {
		            // URL can contain a '@' but in that case it should be in form http://user@site.com or user:pass@site.com
		            // So if URL has a '@' but no ':' in it, we assume it's a email
		            token.type = Tokens.EMAIL;
		          } else {
		            token.type = Tokens.LINK;
		
		            if (ch == '/') {
		              append = true;
		            }
		          }
		          ts.length = last + 1;
		        } else
		
		        // Process next char (start new token or append to the previous one)
		        if (token.type === Tokens.LINK) {
		          if ((ch == ')') && 
		              (last >= 1) && 
		              (ts[last - 1].type === Tokens.MARKUP) &&
		              (ts[last - 1].length == 1) &&
		              (s[ts[last - 1].st] == '(')) {
		            tokenType = Tokens.MARKUP;
		          } else
		          if ((charType !== Tokens.SPACE) && (ch != ',') && (ch != '<')) {
		            append = true;
		          }
		        } else
		        if (token.type === Tokens.EMAIL) {
		          if ((charType === Tokens.CYRIL) || (charType === Tokens.LATIN) || (ch == '.')) {
		            append = true;
		          }
		        } else
		        if ((token.type === Tokens.HASHTAG) || (token.type === Tokens.MENTION)) {
		          if ((charType === Tokens.CYRIL) || 
		              (charType == Tokens.LATIN) || 
		              (charType == Tokens.DIGIT) || 
		              (ch == '_') || ((ch == '@') && (token.indexOf('@') == -1))) {
		            append = true;
		          }
		        } else
		        if ((token.type === Tokens.TAG) && (token.quote || (s[token.en()] != '>'))) {
		          append = true;
		          if (token.quote) {
		            if ((ch == token.quote) && (s[token.en()] != '\\')) {
		              delete token.quote;
		            }
		          } else
		          if ((ch == '"') || (ch == "'")) {
		            token.quote = ch;
		          }
		        } else
		        if (token.type === Tokens.CONTENT) {
		          append = true;
		          if (token.quote) {
		            if ((ch == token.quote) && (s[token.en()] != '\\')) {
		              delete token.quote;
		            }
		          } else
		          if ((ch == '"') || (ch == "'")) {
		            token.quote = ch;
		          } else
		          if (ch == '>') {
		            if ((token.length >= 8) && (token.toString().substr(-8) == '</script')) {
		              token.length -= 8;
		              st -= 8;
		
		              append = false;
		              tokenType = Tokens.TAG;
		              tokenSubType = Tokens.CLOSING;
		            } else 
		            if ((token.length >= 7) && (token.toString().substr(-7) == '</style')) {
		              token.length -= 7;
		              st -= 7;
		
		              append = false;
		              tokenType = Tokens.TAG;
		              tokenSubType = Tokens.CLOSING;
		            } 
		          }
		        } else
		        if ((token.type === Tokens.TAG) && 
		            (token.type !== Tokens.CLOSING) &&
		            (token.length >= 8) &&
		            (token.toLowerCase().substr(1, 6) == 'script')) {
		          tokenType = Tokens.CONTENT;
		          tokenSubType = Tokens.SCRIPT;
		        } else
		        if ((token.type === Tokens.TAG) && 
		            (token.type !== Tokens.CLOSING) &&
		            (token.length >= 7) && 
		            (token.toLowerCase().substr(1, 5) == 'style')) {
		          tokenType = Tokens.CONTENT;
		          tokenSubType = Tokens.STYLE;
		        } else
		        if (config.html && 
		            (token.length == 1) &&
		            (s[token.st] == '<') && 
		            ((charType === Tokens.LATIN) || (ch == '!') || (ch == '/'))) {
		          append = true;
		          token.type = Tokens.TAG;
		          if (ch == '!') {
		            token.subType = Tokens.COMMENT;
		          } else
		          if (ch == '/') {
		            token.subType = Tokens.CLOSING;
		          }
		        } else
		        if (token.type === Tokens.CONTENT) {
		          append = true;
		        } else
		        if ((token.type === Tokens.MARKUP) && 
		            (token.subType == Tokens.TEMPLATE) && 
		            ((s[token.en()] != '}') || 
		             (s[token.en() - 1] != '}'))) {
		          append = true;
		        } else
		        if ((token.type === Tokens.MARKUP) && 
		            (token.type === Tokens.LINK) && 
		            (s[token.en()] != ')')) {
		          append = true;
		        } else
		        if ((token.type === Tokens.MARKUP) && 
		            (s[token.st] == '`') && 
		            (token.subType === Tokens.NEWLINE) &&
		            (charType === Tokens.LATIN)) {
		          append = true;
		        } else
		        if ((charType === Tokens.CYRIL) || (charType === Tokens.LATIN)) {
		          if (token.type === Tokens.WORD) {
		            append = true;
		            token.subType = (token.subType == charType) ? token.subType : Tokens.MIXED;
		          } else
		          if (token.type === Tokens.NUMBER) { // Digits + ending
		            append = true;
		            token.subType = (token.subType && token.subType != charType) ? Tokens.MIXED : charType;
		          } else
		          if (config.hashtags && (token.length == 1) && (s[token.st] == '#')) { // Hashtags
		            append = true;
		            token.type = Tokens.HASHTAG;
		          } else
		          if (config.mentions && 
		              (token.length == 1) && 
		              (s[token.st] == '@') && 
		              ((last == 0) || (ts[last - 1].type === Tokens.SPACE))) { // Mentions
		            append = true;
		            token.type = Tokens.MENTION;
		          } else
		          if ((charType === Tokens.LATIN) && 
		              (token.length == 1) && 
		              ((s[token.st] == "'") || (s[token.st] == '’'))) {
		            append = true;
		            token.type = Tokens.WORD;
		            token.subType = Tokens.LATIN;
		          } else
		          if ((token.length == 1) && (s[token.st] == '-')) { // -цать (?), 3-й
		            append = true;
		
		            if ((last > 0) && (ts[last - 1].type === Tokens.NUMBER)) {
		              token = ts[last - 1];
		              token.length += ts[last].length;
		
		              ts.length -= 1;
		            }
		
		            token.type = Tokens.WORD;
		            token.subType = charType;
		          }
		        } else
		        if (charType === Tokens.DIGIT) {
		          if (token.type === Tokens.WORD) {
		            append = true;
		            token.subType = Tokens.MIXED;
		          } else
		          if (token.type === Tokens.NUMBER) {
		            append = true;
		          } else
		          if ((token.length == 1) &&
		              ((s[token.st] == '+') || (s[token.st] == '-'))) {
		            append = true;
		
		            if ((last > 0) && (ts[last - 1].type === Tokens.NUMBER)) {
		              token = ts[last - 1];
		              token.length += ts[last].length;
		              token.subType = Tokens.RANGE;
		
		              ts.length -= 1;
		            }
		
		            token.type = Tokens.NUMBER;
		          } else
		          if ((token.length == 1) &&
		              ((s[token.st] == ',') || (s[token.st] == '.')) && 
		              (ts.length > 1) && 
		              (ts[last - 1].type === Tokens.NUMBER)) {
		            append = true;
		
		            token = ts[last - 1];
		            token.length += ts[last].length;
		
		            ts.length -= 1;
		          }
		        } else
		        if (charType === Tokens.SPACE) {
		          if (token.type === Tokens.SPACE) {
		            append = true;
		          }
		        } else
		        if ((token.type === Tokens.MARKUP) && 
		            (s[token.st] == ch) &&
		            ('=-~:*#`\'>_'.indexOf(ch) > -1)) {
		          append = true;
		        } else
		        if (ch == '.') {
		          if (config.links && 
		              config.links.www && 
		              (token.length == 3) &&
		              (token.toLowerCase() == 'www')) { // Links without protocol but with www
		            append = true;
		            token.type = Tokens.LINK;
		          }
		        } else
		        if (config.wiki && (ch == "'") && (s[token.en()] == "'")) {
		          if (token.length > 1) {
		            token.length--;
		            st--;
		            tokenType = Tokens.MARKUP;
		          } else {
		            append = true;
		            token.type = Tokens.MARKUP;
		          }
		        } else
		        if ((ch == '-') || 
		            ((token.subType == Tokens.LATIN) && 
		             ((ch == '’') || (ch == "'")))) {
		          if (token.type === Tokens.WORD) {
		            append = true;
		          }
		        } else
		        if (ch == '/') {
		          if (config.links && 
		              config.links.protocols &&
		              (ts.length > 2) &&
		              (ts[last - 2].type === Tokens.WORD) &&
		              (ts[last - 2].subType == Tokens.LATIN) &&
		              (ts[last - 1].length == 1) &&
		              (s[ts[last - 1].st] == ':') &&
		              (ts[last].length == 1) &&
		              (s[ts[last].st] == '/')) { // Links (with protocols)
		            append = true;
		
		            token = ts[last - 2];
		            token.length += ts[last - 1].length + ts[last].length;
		            token.allUpper = token.allUpper && ts[last - 1].allUpper && ts[last].allUpper;
		            token.type = Tokens.LINK;
		
		            ts.length -= 2;
		          }
		        } else
		        if (config.html && ch == ';') {
		          if ((last > 0) && 
		              (token.type === Tokens.WORD) && 
		              (ts[last - 1].length == 1) &&
		              (s[ts[last - 1].st] == '&')) {
		            append = true;
		
		            token = ts[last - 1];
		            token.length += ts[last].length;
		            token.allUpper = token.allUpper && ts[last - 1].allUpper;
		            token.type = Tokens.ENTITY;
		
		            ts.length -= 1;
		          } else
		          if ((last > 1) && 
		              ((token.type === Tokens.WORD) || 
		               (token.type === Tokens.NUMBER)) && 
		              (ts[last - 1].length == 1) &&
		              (s[ts[last - 1].st] == '#') && 
		              (ts[last - 2].length == 1) &&
		              (s[ts[last - 2].st] == '&')) {
		            append = true;
		
		            token = ts[last - 2];
		            token.length += ts[last - 1].length + ts[last].length;
		            token.allUpper = token.allUpper && ts[last - 1].allUpper && ts[last].allUpper;
		            token.type = Tokens.ENTITY;
		
		            ts.length -= 2;
		          }
		        } else
		        if (config.markdown && 
		            (ch == '[') && 
		            (token.length == 1) &&
		            (s[token.st] == '!')) {
		          append = true;
		          token.type = Tokens.MARKUP;
		        } else
		        if (config.markdown && 
		            (ch == '(') &&
		            (token.length == 1) &&
		            (s[token.st] == ']')) {
		          tokenType = Tokens.MARKUP;
		          tokenSubType = Tokens.LINK;
		        } else
		        if (config.wiki && 
		            (ch == '{') &&
		            (token.length == 1) &&
		            (s[token.st] == '{')) {
		          append = true;
		          token.type = Tokens.MARKUP;
		          token.subType = Tokens.TEMPLATE;
		        } else
		        if (config.wiki && 
		            (ch == '[') && 
		            (token.length == 1) &&
		            (s[token.st] == '[')) {
		          append = true;
		        } else
		        if (config.wiki && 
		            (ch == ']') && 
		            (token.length == 1) &&
		            (s[token.st] == ']')) {
		          append = true;
		        } else
		        if (config.wiki && (ch == '|') && !lineStart) {
		          var found = -1;
		          for (var j = last - 1; j >= 0; j--) {
		            if ((ts[j].length == 2) && 
		                (s[ts[j].st] == '[') && 
		                (s[ts[j].st + 1] == '[')) {
		              found = j;
		              break;
		            }
		            if (((ts[j].length == 1) && 
		                 (s[ts[j].st] == '|')) || 
		                ts[j].indexOf('\n') > -1) {
		              break;
		            }
		          }
		          if (found > -1) {
		            append = true;
		            for (var j = last - 1; j >= found; j--) {
		              token = ts[j];
		              token.length += ts[j + 1].length;
		              token.allUpper = token.allUpper && ts[j + 1].allUpper;
		            }
		            last = found;
		            ts.length = last + 1;
		            token.subType = Tokens.LINK;
		          }
		        }
		      }
		
		      if (append) {
		        token.length++;
		        token.allUpper = token.allUpper && charUpper;
		      } else {
		        token = new Token(s, st, i + 1 - st, ts.length, charUpper, charUpper, tokenType, tokenSubType);
		        ts.push(token);
		      }
		    }
		    return this;
		  }
		
		  function alwaysTrue() {
		    return true;
		  }
		
		  function getMatcher(filter, exclude) {
		    if (!filter) {
		      return alwaysTrue();
		    }
		    if (typeof filter == 'function') {
		      return filter;
		    }
		    var types = filter;
		    var exclusive;
		    if ('length' in filter) {
		      exclusive = !exclude;
		      types = {};
		      for (var i = 0; i < filter.length; i++) {
		        types[filter[i]] = true;
		      }
		    } else {
		      exclusive = exclude;
		      exclude = false;
		    }
		    return function(token, index, array) {
		      if (token.subType) {
		        var sub = token.type + '.' + token.subType;
		        if (sub in types) {
		          return types[sub] != exclude;
		        }
		      }
		      if (token.type in types) {
		        return types[token.type] != exclude;
		      } else {
		        return !exclusive;
		      }
		    }
		  }
		
		  /**
		   * Завершает токенизацию, возвращая список токенов.
		   *
		   * Эта и другие функции принимают последними параметрами filter и флаг exclude. Они
		   * служат для фильтрации токенов (потому что часто удобнее получать не все токены, а
		   * только определенную часть из них).
		   *
		   * Если в filter передана функция, то параметр exclude игнорируется, а filter вызывается
		   * аналогично коллбэку в методе Array.prototype.filter: ей передаются параметры
		   * token, index, array (текущий токен, его индекс и общий список токенов). Будут
		   * возвращены только токены, для которых функция вернет истинное значение.
		   *
		   * Если в filter передан массив (или объект с полем length), то возвращаются токены, типы
		   * которых либо входят в этот массив (exclude=false), либо не входят в него (exclude=true).
		   * Вместо типов можно использовать строки вида 'WORD.LATIN' (тип, символ «точка» и подтип).
		   *
		   * Если в filter передать объект, то ключами в нём должны быть типы токенов, а значениями -
		   * true или false в зависимости от того, включать такие токены в ответ или нет. Как и в случае случае
		   * с массивом, в качестве ключей можно использовать строки вида 'WORD.LATIN'.
		   * Здесь параметр exclude означает, следует ли ограничить выдачу только теми типами, которые
		   * перечислены в filter.
		   * Значения с указанием подтипа имеют больший приоритет, чем просто типы. Благодаря этому можно
		   * делать такие странные вещи:
		   *
		   * ```
		   * t.done({ 'WORD': false, 'WORD.LATIN': true }, false);
		   * ```
		   * (то есть вернуть все теги, кроме тегов с типом WORD, но включить теги с подтипом LATIN)
		   *
		   * @param {Function|String[]|Object} [filter] Типы токенов, по которым нужно
		   *  отфильтровать результат (или функция для фильтрации).
		   * @param {boolean} [exclude=False] Инвертирует фильтр, т.е. возвращаются
		   *  токены со всеми типами, за исключением перечисленных в filter.
		   * @returns {Token[]} Список токенов после фильтрации.
		   */
		  Tokens.prototype.done = function(filter, exclude) {
		    // Finalize tokenizing, return list of tokens
		    // For now it just returns tokens, in the future there could be some additional work
		    if (!filter) {
		      return this.tokens;
		    }
		    var matcher = getMatcher(filter, exclude);
		    var list = [];
		    for (var i = 0; i < this.tokens.length; i++) {
		      if (matcher(this.tokens[i], i, this.tokens)) {
		        list.push(this.tokens[i]);
		      }
		    }
		    return list;
		  }
		
		  /**
		   * Подсчитывает текущее количество токенов.
		   *
		   * @param {Function|String[]|Object} [filter] См. описание метода done.
		   * @param {boolean} [exclude=False] См. описание метода done.
		   * @returns {Number} Число токенов после фильтрации.
		   */
		  Tokens.prototype.count = function(filter, exclude) {
		    if (!filter) {
		      return this.tokens.length;
		    }
		    var matcher = getMatcher(filter, exclude);
		    var count = 0;
		    for (var i = 0; i < this.tokens.length; i++) {
		      if (matcher(this.tokens[i], i, this.tokens)) {
		        count++;
		      }
		    }
		    return count;
		  }
		
		  /**
		   * Получает следующий токен относительно текущей позиции.
		   *
		   * @param {boolean} moveIndex Следует ли переместить указатель к
		   *  следующему токену (в противном случае следующий вызов nextToken вернет
		   *  тот же результат)
		   * @param {Function|String[]|Object} [filter] См. описание метода done.
		   * @param {boolean} [exclude=False] См. описание метода done.
		   * @returns {Token|null} Следующий токен или null, если подходящих токенов
		   *  впереди нет.
		   */
		  Tokens.prototype.nextToken = function(moveIndex, filter, exclude) {
		    var matcher = getMatcher(filter, exclude);
		    var index = this.index;
		    index++;
		    while (index < this.tokens.length && matcher(this.tokens[index], index, this.tokens)) {
		      index++;
		    }
		    if (index < this.tokens.length) {
		      if (moveIndex) {
		        this.index = index;
		      }
		      return this.tokens[index];
		    }
		    return null;
		  }
		
		  /**
		   * Проверяет, является ли следующий (за исключением пробелов) токен знаком
		   * препинания или нет.
		   *
		   * @returns {Token|False} False, если следующий токен не является знаком
		   *  препинания, либо сам токен в противном случае.
		   */
		  Tokens.prototype.punctAhead = function() {
		    var token = this.nextToken(false, ['SPACE'], true);
		    return token && token.type == 'PUNCT' && token;
		  }
		
		  /**
		   * Получает предыдущий токен относительно текущей позиции.
		   *
		   * @param {boolean} moveIndex Следует ли переместить указатель к
		   *  предыдущему токену (в противном случае следующий вызов prevToken вернет
		   *  тот же результат)
		   * @param {Function|String[]|Object} [filter] См. описание метода done.
		   * @param {boolean} [exclude=False] См. описание метода done.
		   * @returns {Token|null} Предыдущий токен или null, если подходящих токенов
		   *  позади нет.
		   */
		  Tokens.prototype.prevToken = function(moveIndex, filter, exclude) {
		    var matcher = getMatcher(filter, exclude);
		    var index = this.index;
		    index--;
		    while (index >= 0 && matcher(this.tokens[index], index, this.tokens)) {
		      index--;
		    }
		    if (index >= 0) {
		      if (moveIndex) {
		        this.index = index;
		      }
		      return this.tokens[index];
		    }
		    return null;
		  }
		
		  /**
		   * Проверяет, является ли предыдущий (за исключением пробелов) токен знаком
		   * препинания или нет.
		   *
		   * @returns {Token|False} False, если предыдущий токен не является знаком
		   *  препинания, либо сам токен в противном случае.
		   */
		  Tokens.prototype.punctBehind = function() {
		    var token = this.prevToken(false, ['SPACE'], true);
		    return token && token.type == 'PUNCT' && token;
		  }
		
		  /**
		   * Проверяет, есть ли впереди текущей позиции токены, удовлетворяющие фильтру.
		   *
		   * @param {Function|String[]|Object} [filter] См. описание метода done.
		   * @param {boolean} [exclude=False] См. описание метода done.
		   * @returns {boolean} True если впереди есть хотя бы один подходящий токен,
		   *  и False в противном случае.
		   */
		  Tokens.prototype.hasTokensAhead = function(filter, exclude) {
		    return this.nextToken(false, filter, exclude) != null;
		  }
		
		  /**
		   * Проверяет, есть ли позади текущей позиции токены, удовлетворяющие фильтру.
		   *
		   * @param {Function|String[]|Object} [filter] См. описание метода done.
		   * @param {boolean} [exclude=False] См. описание метода done.
		   * @returns {boolean} True если позади есть хотя бы один подходящий токен,
		   *  и False в противном случае.
		   */
		  Tokens.prototype.hasTokensBehind = function(filter, exclude) {
		    return this.prevToken(false, filter, exclude) != null;
		  }
		
		  return Tokens;
		}));
		
		/* WEBPACK VAR INJECTION */}.call(exports, "/"))

	/***/ },
	/* 35 */
	/***/ function(module, exports) {



	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Created by Shayakhmetov on 23.08.2016.
		 */
		
		'use strict';
		
		var symbols = __webpack_require__(37);
		var operators = __webpack_require__(38);
		var fractions = __webpack_require__(39);
		var sets = __webpack_require__(40);
		var logic = __webpack_require__(41);
		var calculus = __webpack_require__(42);
		
		module.exports = function(exp, options){
		    var text, masks;
		    switch(options.type){
		        case 'algebra':
		            masks = [].concat(fractions, symbols, operators);
		            break;
		        case 'set':
		            masks = [].concat(fractions, sets);
		            break;
		        case 'logic':
		            masks = [].concat(fractions, logic, sets, operators);
		            break;
		    };
		    masks.sort(compare);
		    //console.log(masks);
		    text = process(exp, masks, options.lang);
		    return text;
		};
		
		function process(exp, masks, lang){
		    var resultStr = exp;
		    masks.forEach(function(sign){
		        var lang = (lang in sign)? lang : 'en';
		        resultStr = resultStr.replace(sign.mask, sign[lang]);
		    });
		    return resultStr;
		}
		
		function compare(a,b){
		    if(!('priority' in a))
		        a.priority = 0;
		    if(!('priority' in b))
		        b.priority = 0;
		    if(a.priority < b.priority)
		        return 1;
		    if(a.priority > b.priority)
		        return -1;
		    return 0;
		}
		/*
		function numbersProcessing(text){
		    return text;
		}*/
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

	/***/ },
	/* 37 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 23.08.2016.
		 */
		'use strict';
		
		var SIGNS = [
		    {mask: /\\infty/g, en: 'infinity', ru: 'бесконечности', priority: -1},
		    {mask: /\\alpha/g, en: 'alpha', ru: 'альфа', priority: -1},
		    {mask: /\\beta/g, en: 'beta', ru: 'бета', priority: -1},
		    {mask: /\\chi/g, en: 'chi', ru: 'чи', priority: -1},
		    {mask: /\\delta/g, en: 'delta', ru: 'дельта', priority: -1},
		    {mask: /\\epsilon/g, en: 'epsilon', ru: 'эпсилон', priority: -1},
		    {mask: /\\varepsilon/g, en: 'varepsilon', ru: 'эпсилон', priority: -1},
		    {mask: /\\eta/g, en: 'eta', ru: 'эта', priority: -1},
		    {mask: /\\gamma/g, en: 'gamma', ru: 'гамма', priority: -1},
		    {mask: /\\iota/g, en: 'iota', ru: 'йота', priority: -1},
		    {mask: /\\kappa/g, en: 'kappa', ru: 'каппа', priority: -1},
		    {mask: /\\lambda/g, en: 'lambda', ru: 'лямбда', priority: -1},
		    {mask: /\\mu/g, en: 'mu', ru: 'мю', priority: -1},
		    {mask: /\\nu/g, en: 'nu', ru: 'ню', priority: -1},
		    {mask: /\\omega/g, en: 'omega', ru: 'омега', priority: -1},
		    {mask: /\\phi/g, en: 'phi', ru: 'фи', priority: -1},
		    {mask: /\\varphi/g, en: 'varphi', ru: 'фи', priority: -1},
		    {mask: /\\pi/g, en: 'pi', ru: 'пи', priority: -1},
		    {mask: /\\psi/g, en: 'psi', ru: 'пси', priority: -1},
		    {mask: /\\rho/g, en: 'rho', ru: 'ро', priority: -1},
		    {mask: /\\sigma/g, en: 'sigma', ru: 'сигма', priority: -1},
		    {mask: /\\tau/g, en: 'tau', ru: 'тау', priority: -1},
		    {mask: /\\theta/g, en: 'theta', ru: 'тета', priority: -1},
		    {mask: /\\vartheta/g, en: 'vartheta', ru: 'тета', priority: -1},
		    {mask: /\\upsilon/g, en: 'upsilon', ru: 'у', priority: -1},
		    {mask: /\\xi/g, en: 'xi', ru: 'хи ', priority: -1},
		    {mask: /\\zeta/g, en: 'zeta', ru: 'зета', priority: -1},
		    {mask: /(\s|^)[A-Z](\s|$)/g, en: function(text){
		        return ' cap ' + text.toLowerCase();
		    }, ru: function(text){
		        return text.toLowerCase() + ' большое ';
		    }, priority: -10}
		];
		
		module.exports = SIGNS;


	/***/ },
	/* 38 */
	/***/ function(module, exports) {

		'use strict';
		
		var SIGNS = [
		    {mask: /\./g, en: ' point ', priority: 1},
		
		    {mask: /[^\s]+ (plus|minus|times|over|divided by|by) .+ quantity/g, en: function(text){
		        return '(' + text.replace(' quantity', ')');
		    }},
		
		    {mask: /\+/g, en: ' plus '},
		
		    {mask: /-/g, en: ' minus ', priority: 1},
		
		    {mask: /\\pm/g, en: ' plus minus ', priority: 2},
		
		    {mask: /\\times/g, en: 'times', exp: ' times '},
		    {mask: /\*/g, en: ' multiplied by ', exp: ' times '},
		    {mask: /\\cdot/g, en: ' multiplied by ', exp: 'times', priority: 0},
		
		    {mask: /\//g, en: ' divided by '},
		    {mask: /\\frac{(.+?)}{(.+?)}/g, en: function(exp){
		        var params = exp.match(/{(.+?)}{(.+?)}/);
		        return ' ratio of ' + params[1] + ' and ' + params[2];
		    }},
		
		    {mask: /=/g, en: ' equals '},
		    {mask: /\\approx/g, en: ' is approximately equal to '},
		    {mask: /\\dashv/g, en: ' is identically equal to '},
		    {mask: /\\neq/g, en: ' is not equal to '},
		    {mask: /\\gt/g, en: ' is greater than '},
		    {mask: /\\lt/g, en: ' is less than '},
		    {mask: /\\geq/g, en: ' is greater than or equal to '},
		    {mask: /\\leq/g, en: ' is less than or equal to '},
		
		    {mask: /\|[^\|]+?\|/g, en: function(exp){
		        var val = exp.match(/|(.+?)|/)[1];
		        return 'absolute value of ' + val;
		    }},
		
		    {mask: /\(/g, en: ' round bracket opened '},
		    {mask: /\)/g, en: ' round bracket closed '},
		
		
		
		    {mask: /\^(\{.+?\})?/g, en: function(exp){
		        return exp.replace(/\^\{?/, ' to the ').replace(/\}/, '') + ' power ';
		    }},
		
		    {mask:  /\d+ \d(-th|nd)/g, en: function(text){
		      var numbers = text.replace('nd', '').match(/\d+/g);
		      return '\\frac{' + numbers[0] + '}{' + numbers[1] + '}'}
		    },
		
		    {mask: /\^\{?2\}?/g, en: ' squared ', priority: 2},
		    {mask: /\^\{?3\}?/g, en: 'cubed', priority: 2},
		    {mask: /\^\{-1\}/g, en: ' inverse ', priority: 2},
		
		    {mask: /_/g, en: ' sub '},
		    {mask: /!/g, en: ' factorial '},
		
		    {mask: /sqrt\{[^\{]+?\}/g, en: function(exp){
		        var val = exp.match(/\{(.+?)\}/)[1];
		        var text = exp.replace('\\sqrt', ' the square root of ');
		        if(val.indexOf(' ') > -1)
		            text = text.replace('{', '(').replace('}', ')');
		        else
		            text = text.replace('{', '').replace('}', '');
		        return text;
		    }, priority: 2},
		    {mask: /\\sqrt/g, en: function(exp){
		        return exp.replace('\\sqrt', ' the square root of ');
		    }, priority: 1},
		    {mask: /\\sqrt\[3\]\{.+?\}/g, en: function(exp){
		        return exp.replace(/\\sqrt[3]\{/, ' the cube root of ').replace(/\}$/, '');
		    }, priority: 2},
		    {mask: /\\sqrt\[.+?\]\{.+?\}/g, en: function(exp){
		        var val = exp.match(/\\sqrt[(.+?)]/)[1];
		        return exp.replace(/\\sqrt[.+?]\{/, 'the root of the power ' + val + ' of ').replace(/\}$/, '');
		    }, priority: 2},
		];
		
		
		module.exports = SIGNS;


	/***/ },
	/* 39 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 02.11.2016.
		 */
		'use strict';
		
		var SIGNS = [
		    {mask: /\\frac\{1\}\{2\}/g, en: ' the one half ', exp: 'frac{1}{2}', priority: 2}
		
		];
		
		
		module.exports = SIGNS;

	/***/ },
	/* 40 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 23.08.2016.
		 */
		'use strict';
		
		var SETS = [
		    {mask: /\\cup/g, en: ' union ', exp: 'uu'},
		
		    {mask: /\\cap/g, en: 'intersection', exp: 'nn'},
		    {mask: /intersection of [^\s]+? and [^\s]+?/g, en: function(text){
		        return text.replace('intersection of ', '').replace('and', '\\cap');
		    }, exp: function(text){
		        return text.replace('intersection of ', '').replace('and', 'nn');
		    }},
		    {mask: /minus/g, en: '\\setminus', exp: '\\\\'},
		    {mask: /set difference of [^\s]+? and [^\s]+?/g, en: function(text){
		        return text.replace('set difference of ', '').replace('and', '\\setminus');
		    }, exp: function(text){
		        return text.replace('set difference of ', '').replace('and', '\\\\');
		    }},
		    {mask: /symmetric difference of [^\s]+? and [^\s]+?/g, en: function(text){
		        return text.replace('symmetric difference of ', '').replace('and', '\\Delta');
		    }, exp: function(text){
		        return text.replace('symmetric difference of ', '').replace('and', 'Delta');
		    }},
		    {mask: /compliment of/g, en: '\\bar', exp: 'bar'},
		    {mask: /closure of/g, en: '\\bar', exp: 'bar'},
		
		    {mask: /belongs to/g, en: '\\in', exp: 'in'},
		    {mask: /is an element of/g, en: '\\in', exp: 'in'},
		    {mask: /[^\s]+? contains [^\s]+?/g, en: function(text){
		        var params = text.split(' contains ');
		        return params[1] + ' \\in ' + params[0];
		    }, exp: function(text){
		        var params = text.split(' contains ');
		        return params[1] + ' in ' + params[0];
		    }},
		    {mask: /does not belong to/g, en: '\\notin', exp: '!in'},
		    {mask: /is a subset of/g, en: '\\subset', exp: 'sub'},
		    {mask: /is not a subset of/g, en: '\\subset', exp: 'sub'},
		    {mask: /the empty set/g, en: '\\emptyset', exp: 'O/'},
		
		    {mask: /the set of natural numbers/g, en: '\\mathbb{N}', exp: 'NN'},
		    {mask: /the set of integer numbers/g, en: '\\mathbb{Z}', exp: 'ZZ'},
		    {mask: /the set of rational numbers/g, en: '\\mathbb{Q}', exp: 'QQ'},
		    {mask: /the set of real numbers/g, en: '\\mathbb{R}', exp: 'RR'},
		    {mask: /the set of irrational numbers/g, en: '\\mathbb{R}\\setminus\\mathbb{Q}', exp: 'RR\\\\QQ'},
		    {mask: /the set of algebraic numbers/g, en: '\\mathbb{A}', exp: 'bbb"A"'},
		    {mask: /the set of transcendental numbers/g, en: '\\mathbb{R}\\setminus\\mathbb{A}', exp: 'RR\\\\bbb"A"'},
		    {mask: /the n-dimensional real space/g, en: '\\mathbb{R}^\\varpropto', exp: 'RR^prop'},
		    {mask: /the set of complex numbers/g, en: '\\mathbb{C}', exp: 'bbb"C"'},
		    {mask: /the n-dimensional complex space/g, en: '\\mathbb{C}^\\varpropto', exp: 'bbb"C"^prop'},
		    {mask: /the n-dimensional projective space/g, en: '\\mathbb{P}^\\varpropto', exp: 'bbb"P"^prop'},
		    {mask: /the power ser of A/g, en: '2^A'},
		    {mask: /boundary of/g, en: '2^A', exp: '2^A'},
		    {mask: /the power ser of A/g, en: '2^A', exp: '2^A'},
		
		    {mask: /cross/g, en: '\\times', exp: 'xx'},
		    {mask: /direct product of [^\s]+? and [^\s]+?/g, en: function(text){
		        return text.replace('direct product of ', '').replace('and', '\\times');
		    }, exp: function(text){
		        return text.replace('direct product of ', '').replace('and', 'xx');
		    }},
		    {mask: /cartesian product of [^\s]+? and [^\s]+?/g, en: function(text){
		        return text.replace('cartesian product of ', '').replace('and', '\\times');
		    }, exp: function(text){
		        return text.replace('cartesian product of ', '').replace('and', 'xx');
		    }},
		    {mask: /plus/g, en: '\\oplus', exp: 'o+'},
		    {mask: /direct sum of [^\s]+? and [^\s]+?/g, en: function(text){
		        return text.replace('direct sum of ', '').replace('and', '\\oplus');
		    }, exp: function(text){
		        return text.replace('direct sum of ', '').replace('and', 'o+');
		    }},
		    {mask: /wedge/g, en: '\\wedge', exp: '^^'},
		    {mask: /wedge product of [^\s]+? and [^\s]+?/g, en: function(text){
		        return text.replace('wedge product of ', '').replace('and', '\\wedge');
		    }, exp: function(text){
		        return text.replace('wedge product of ', '').replace('and', '^^');
		    }},
		    {mask: /interior product of [^\s]+? and [^\s]+?/g, en: function(text){
		        return text.replace('interior product of ', '').replace('and', '\\wedge');
		    }, exp: function(text){
		        return text.replace('interior product of ', '').replace('and', '^^');
		    }},
		    {mask: /quotient space [^\s]+? over [^\s]+?/g, en: function(text){
		        return text.replace('quotient space ', '').replace('over', '/');
		    }, exp: function(text){
		        return text.replace('quotient space ', '').replace('over', '//');
		    }},
		    {mask: /factor space [^\s]+? over [^\s]+?/g, en: function(text){
		        return text.replace('factor space ', '').replace('over', '/');
		    }, exp: function(text){
		        return text.replace('factor space ', '').replace('over', '//');
		    }}
		];
		
		module.exports = SETS;


	/***/ },
	/* 41 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 21.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /\\lor/g, en: ' or ', ru: ' или '},
		    {mask: /\\wedge/g, en: ' and ', ru: ' и ', priority: -1},
		    {mask: /\\bar/g, en: ' not ', ru: ' не '},
		    {mask: /\\Rightarrow/g, en: ' implies ', ru: ' подразумевает '},
		    {mask: /\\sim/g, en: ' is equivalent to ', ru: ' эквивалентен '},
		    {mask: /\\forall/g, en: ' for any ', ru: ' для всех '},
		    {mask: /\\exists/g, en: ' there exists ', ru: ' существует '},
		    {mask: /:/g, en: ' such that ', ru: ' такой что '}
		];
		
		module.exports = RULES;

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		
		var derivatives = __webpack_require__(43);
		var functions = __webpack_require__(44);
		var integral = __webpack_require__(45);
		var limit = __webpack_require__(46);
		var series = __webpack_require__(47);
		var term = __webpack_require__(48);
		
		
		module.exports = [].concat(derivatives, functions, integral, limit, series, term);

	/***/ },
	/* 43 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /d 2 [^\s]+ by d [^\s]+ squared/g, latex: function(text){
		        var params = text.replace('by d ', '').replace(' squared', '').replace(/^d 2 /, '').split(' ');
		        return '\\frac{d^2 ' + params[0] + '}{d ' + params[1] + '^2}';
		    }, exp: function(text){
		        var params = text.replace('by d ', '').replace(/^d /, '');
		        return 'frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }, priority: 1},
		    {mask: /\d+?-th derivative of [^\s]+ with respect to [^\s]+/g, latex: function(text){
		        var params = text.replace('-th derivative of ', ' ').replace('with respect to ', '').split(' ');
		        return '\\frac{d^' + params[0] + ' ' + params[1] + '}{d ' + params[2] + '^' + params[0] + '}';
		    }, exp: function(text){
		        var params = text.replace('-th derivative of ', '').replace('with respect to ', '').split(' ');
		        return '\\frac{d^' + params[0] + ' ' + params[1] + '}{d ' + params[2] + '^' + params[0] + '}';
		    }, priority: 1},
		
		    {mask: /partial d [^\s]+ by d [^\s]+/g, latex: function(text){
		        var params = text.replace('by d ', '').replace('partial d ', '').split(' ');
		        return '\\frac{\\partial ' + params[0] + '}{\\partial ' + params[1] + '}';
		    }, exp: function(text){
		        var params = text.replace('by d ', '').replace('partial d ', '').split(' ');
		        return 'frac{del ' + params[0] + '}{del ' + params[1] + '}';
		    }, priority: 1},
		    {mask: /\d+?-th partial derivative of [^\s]+ with respect to [^\s]+ and [^\s]+/g, latex: function(text){
		        var params = text.replace('-th partial derivative of ', ' ').replace('with respect to ', '').replace('and ', '').split(' ');
		        return '\\frac{\\partial ^' + params[0] + ' ' + params[1] + '}{\\partial ' + params[2] + '\\partial ' + params[3] + '}';
		    }, exp: function(text){
		        var params = text.replace('-th partial derivative of ', ' ').replace('with respect to ', '').replace('and ', '').split(' ');
		        return 'frac{del ^' + params[0] + ' ' + params[1] + '}{del ' + params[2] + 'del ' + params[3] + '}';
		    }},
		    {mask: /partial derivative of [^\s]+ with respect to [^\s]+/g, latex: function(text){
		        var params = text.replace('partial derivative of ', '').replace('with respect to ', '').split(' ');
		        return '\\frac{\\partial ' + params[0] + '}{\\partial ' + params[1] + '}';
		    }, exp: function(text){
		        var params = text.replace('partial derivative of ', '').replace('with respect to ', '').split(' ');
		        return 'frac{del ' + params[0] + '}{del ' + params[1] + '}';
		    }},
		
		    {mask: /d [^\s]+ by d [^\s]+/g, latex: function(text){
		        var params = text.replace('by d ', '').replace(/^d /, '').split(' ');
		        return '\\frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }, exp: function(text){
		        var params = text.replace('by d ', '').replace(/^d /, '').split(' ');
		        return 'frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }},
		    {mask: /derivative of [^\s]+ with respect to [^\s]+/g, latex: function(text){
		        var params = text.replace('derivative of ', '').replace('with respect to ', '').split(' ');
		        return '\\frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }, exp: function(text){
		        var params = text.replace('derivative of ', '').replace('with respect to ', '').split(' ');
		        return 'frac{d ' + params[0] + '}{d ' + params[1] + '}';
		    }},
		
		    {mask: /differential of/g, latex: 'd'},
		    {mask: /double prime/g, latex: '\\prime\\prime', exp: "''"},
		    {mask: /second derivative of [^\s]+/g, latex: function(text){
		        return text.replace('second derivative of ', '') + '\\prime\\prime';
		    }, exp: function(text){
		        return text.replace('second derivative of ', '') + "''";
		    }},
		    {mask: /triple prime/g, latex: '\\prime\\prime\\prime', exp: "'''"},
		    {mask: /third derivative of [^\s]+/g, latex: function(text){
		        return text.replace('third derivative of ', '') + '\\prime\\prime\\prime';
		    }, exp: function(text){
		        return text.replace('third derivative of ', '') + "'''";
		    }},
		    {mask: /prime/g, latex: '\\prime', exp: "'"},
		    {mask: /derivative of .+? of the order [^\s]+/g, latex: function(text){
		        return text.replace('derivative of ', '').replace(' of the order ', '^');
		    }},
		    {mask: /derivative of [^\s]+/g, latex: function(text){
		        return text.replace('derivative of ', '') + '\\prime';
		    }, exp: function(text){
		        return text.replace('derivative of ', '') + "'";
		    }},
		    {mask: /[^\s]+-th derivative of [^\s]+/g, latex: function(text){
		        var order = text.substring(0, text.indexOf('-th derivative of'));
		        var func = text.substring(text.lastIndexOf('-th derivative of')).replace('-th derivative of', '');
		        return func + '^{(' + order + ')}';
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 44 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: / of [^\s]+/g, latex: function(text){
		        return text.replace(' of ', '(') + ')';
		    }, priority: '-1'},
		    {mask: / is a function of [^\s]+/g, latex: function(text){
		        return text.replace(' is a function of ', '(') + ')';
		    }, priority: '-1'},
		    {mask: /domain of the function /g, latex: 'D_'},
		    {mask: /range of the function /g, latex: 'R_'},
		    {mask: /composition of the functions [^\s]+ and [^\s]+/g, latex: function(text){
		        return text.replace('composition of the functions ', '').replace(' and ', '\\circ');
		    }, exp: function(text){
		        return text.replace('composition of the functions ', '').replace(' and ', '@');
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 45 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /double integral (from .+? to [^\s]+)?/g, latex: function(text){
		        return text.replace('double integral ', '\\iint').replace('from ', '_{').replace(' to ', '}^{') + '}';
		    }, exp: function(text){
		        return text.replace('double integral ', 'intint').replace('from ', '_{').replace(' to ', '}^{') + '}';
		    }},
		    {mask: /triple integral (from .+? to [^\s]+)?/g, latex: function(text){
		        return text.replace('triple integral ', '\\iiint').replace('from ', '_{').replace(' to ', '}^{') + '}';
		    }, exp: function(text){
		        return text.replace('triple integral ', 'intintint').replace('from ', '_{').replace(' to ', '}^{') + '}';
		    }},
		    {mask: /integral (from .+? to [^\s]+)?/g, latex: function(text){
		        var close = (text.indexOf('from') > -1)? '}' : '';
		        return text.replace('integral ', '\\int').replace('from ', '_{').replace(' to ', '}^{') + close;
		    }, exp: function(text){
		        var close = (text.indexOf('from') > -1)? '}' : '';
		        return text.replace('integral ', 'int').replace('from ', '_{').replace(' to ', '}^{') + close;
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 46 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		/*var tmplStr = require('../../tmplStr');*/
		
		var RULES = [
		    {mask: /limit of [^\s]+ [^\s]+ as [^\s]+ tends to [^\s]+/g, latex: function(text){
		        var params = text.replace('limit of ', '').replace('as ', '').replace('tends to ', '').split(' ');
		        return /*tmplStr(params, '\\lim_{${2}\\to${3}}${0}_${1}');*/'\\lim_{' + params[2] + '\\to' + params[3] + '}' + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('limit of ', '').replace('as ', '').replace('tends to ', '').split(' ');
		        return 'lim_{' + params[2] + 'to' + params[3] + '}' + params[0] + '_' + params[1];
		    }},
		    {mask: /[^\s]+ [^\s]+ converges to [^\s]+ as [^\s]+ tends to [^\s]+/g, latex: function(text){
		        var params = text.replace('converges to ', '').replace('as ', '').replace('tends to ', '').split(' ');
		        return '\\lim_{' + params[3] + ' \\to ' + params[4] + '}' + params[0] + '_' + params[1] + '=' + params[2];
		    }, exp: function(text){
		        var params = text.replace('converges to ', '').replace('as ', '').replace('tends to ', '').split(' ');
		        return 'lim_{' + params[3] + ' to ' + params[4] + '}' + params[0] + '_' + params[1] + '=' + params[2];
		    }},
		    {mask: /[^\s]+ from the (left|right)/g, latex: function(text){
		        return '{' + text.replace('from the ', '').replace(' left', '-0').replace(' right', '+0') + '}';
		    }},
		    {mask: /limit of [^\s]+ of [^\s]+ as [^\s]+ approaches [^\s]+/g, latex: function(text){
		        var params = text.replace('limit of ', '').replace('of ', '').replace('as ', '').replace('approaches ', '').replace('from the ', '').split(' ');
		        return '\\lim_{' + params[2] + ' \\to ' + params[3] + '}' + params[0] + '(' + params[1] + ')';
		    }, exp: function(text){
		        var params = text.replace('limit of ', '').replace('of ', '').replace('as ', '').replace('approaches ', '').replace('from the ', '').split(' ');
		        return 'lim_{' + params[2] + ' to ' + params[3] + '}' + params[0] + '(' + params[1] + ')';
		    }},
		    {mask: / and /g, latex: '\\wedge', exp: '^^'},
		    {mask: / not /g, latex: '\\bar', exp: 'bar'},
		    {mask: / implies /g, latex: '\\Rightarrow', exp: 'rArr'},
		    {mask: / is equivalent to /g, latex: '\\sim', exp: '~'},
		    {mask: /for any/g, latex: '\\forall', exp: 'AA'},
		    {mask: /for all/g, latex: '\\forall', exp: 'AA'},
		    {mask: /there exists/g, latex: '\\exists', exp: 'EE'},
		    {mask: /such that/g, latex: ':'},
		    {mask: /real [^\s]+/g, latex: function(text){
		        return text.replace('real ', '') + '\\in\\mathbb{R}';
		    }, exp: function(text){
		        return text.replace('real ', '') + 'in RR';
		    }},
		    {mask: /integer [^\s]+/g, latex: function(text){
		        return text.replace('integer ', '') + '\\in\\mathbb{N}';
		    }, exp: function(text){
		        return text.replace('integer ', '') + 'in NN';
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 47 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /sequence [^\s]+ [^\s]+ as [^\s]+ goes from [^\s]+ to [^\s]+/g, latex: function(text){
		        var params = text.replace('sequence ', '').replace('as ', '').replace('goes from ', '').replace('to ', '').split(' ');
		        return '\\{' + params[0] + '_' + params[1] + '\\}_{' + params[2] + '=' + params[3] + '}^{' + params[4] + '}';
		    }, exp: function(text){
		        var params = text.replace('sequence ', '').replace('as ', '').replace('goes from ', '').replace('to ', '').split(' ');
		        return '{' + params[0] + '_' + params[1] + '}_{' + params[2] + '=' + params[3] + '}^{' + params[4] + '}';
		    }},
		    {mask: /sequence [^\s]+ [^\s]+/g, latex: function(text){
		        var params = text.replace('sequence ', '').split(' ');
		        return '\\{' + params[0] + '_' + params[1] + '\\}';
		    }},
		    {mask: /sum of [^\s]+ [^\s]+ as [^\s]+ goes from [^\s]+ to [^\s]+/g, latex: function(text){
		        var params = text.replace('sum of ', '').replace('as ', '').replace('goes from ', '').replace('to ', '').split(' ');
		        return '\\sum_{' + params[2] + '=' + params[3] + '}^{' + params[4] + '}' + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('sum of ', '').replace('as ', '').replace('goes from ', '').replace('to ', '').split(' ');
		        return 'sum_{' + params[2] + '=' + params[3] + '}^{' + params[4] + '}' + params[0] + '_' + params[1];
		    }},
		    {mask: /series [^\s]+ [^\s]+/g, latex: function(text){
		        var params = text.replace('series ', '').split(' ');
		        return '\\sum' + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('series ', '').split(' ');
		        return 'sum' + params[0] + '_' + params[1];
		    }, priority: -1},
		    {mask: /sequence [^\s]+ [^\s]+ converges to/g, latex: function(text){
		        var params = text.replace('sequence ', '').replace(' converges to', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to';
		    }, exp: function(text){
		        var params = text.replace('sequence ', '').replace(' converges to', '').split(' ');
		        return params[0] + '_' + params[1] + 'to';
		    }},
		    {mask: /[^\s]+ [^\s]+ converges to/g, latex: function(text){
		        var params = text.replace(' converges to', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to';
		    }, exp: function(text){
		        var params = text.replace(' converges to', '').split(' ');
		        return params[0] + '_' + params[1] + 'to';
		    }},
		    {mask: /[^\s]+ [^\s]+ diverges to infinity/g, latex: function(text){
		        var params = text.replace(' diverges to infinity', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to\\infty';
		    }, exp: function(text){
		        var params = text.replace(' diverges to infinity', '').split(' ');
		        return params[0] + '_' + params[1] + 'to infty';
		    }},
		    {mask: /series [^\s]+ [^\s]+ diverges/g, latex: function(text){
		        var params = text.replace(' diverges', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to\\infty';
		    }, exp: function(text){
		        var params = text.replace(' diverges', '').split(' ');
		        return params[0] + '_' + params[1] + 'to infty';
		    }},
		    {mask: /[^\s]+ [^\s]+ diverges/g, latex: function(text){
		        var params = text.replace(' diverges', '').split(' ');
		        return '\\sum' + params[0] + '_' + params[1] + '=\\infty';
		    }, exp: function(text){
		        var params = text.replace(' diverges', '').split(' ');
		        return 'sum' + params[0] + '_' + params[1] + '= infty';
		    }},
		    {mask: /[^\s]+ [^\s]+ goes to infinity/g, latex: function(text){
		        var params = text.replace(' goes to infinity', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to\\infty';
		    }, exp: function(text){
		        var params = text.replace(' goes to infinity', '').split(' ');
		        return params[0] + '_' + params[1] + 'to infty';
		    }},
		    {mask: /[^\s]+ [^\s]+ approaches infinity/g, latex: function(text){
		        var params = text.replace(' approaches infinity', '').split(' ');
		        return params[0] + '_' + params[1] + '\\to\\infty';
		    }, exp: function(text){
		        var params = text.replace(' approaches infinity', '').split(' ');
		        return params[0] + '_' + params[1] + 'to infty';
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 48 */
	/***/ function(module, exports) {

		/**
		 * Created by Shayakhmetov on 22.09.2016.
		 */
		'use strict';
		
		var RULES = [
		    {mask: /\\Delta/g, en: 'the Laplacian of', exp: 'Delta'},
		    {mask: /\\nabla/g, en: 'gradient of', exp: 'grad'},
		    {mask: /\\mathbf\{grad\}/g, en: 'gradient', exp: 'bb{g\\rad}'},
		    {mask: /\\mathbf\{div\}/g, en: 'divergence', exp: 'bb{d\iv}'},
		    {mask: /\\mathbf\{rot\}/g, en: 'rotor', exp: 'bb{rot}'},
		    {mask: /Im/g, en: 'imaginary part of'},
		    {mask: /Re/g, en: 'real part of'},
		    {mask: /_\{[^\s]+?=\}/g, en: function(text){
		        return text.replace('as ', '_{').replace(' goes from ', '=').replace(' to ', '}^{') + '}';
		    }},
		    {mask: /as [^\s]+ runs over [^\s]+ to [^\s]+/g, en: function(text){
		        return text.replace('as ', '_{').replace(' runs over ', '\\in').replace(' to ', '}^{') + '}';
		    }, exp: function(text){
		        return text.replace('as ', '_{').replace(' runs over ', 'in').replace(' to ', '}^{') + '}';
		    }},
		    {mask: /as [^\s]+ is positive/g, en: function(text){
		        return text.replace('as ', '_{').replace(' is positive', '\\gt0}');
		    }, exp: function(text){
		        return text.replace('as ', '_{').replace(' is positive', '>0}');
		    }},
		    {mask: /as [^\s]+ is negative/g, en: function(text){
		        return text.replace('as ', '_{').replace(' is negative', '\\lt0}');
		    }, exp: function(text){
		        return text.replace('as ', '_{').replace(' is negative', '<0}');
		    }},
		    {mask: /residue of [^\s]+ of [^\s]+ at [^\s]+ equals [^\s]+/g, en: function(text){
		        var params = text.replace('residue of ', '').replace('of ', '').replace('at ', '').replace('equals ', '').split(' ');
		        return 'res ' + '_{' + params[2] + '=' + params[3] + '}' + params[0] + '(' + params[1] + ')';
		    }},
		    {mask: /minimum of [^\s]+ of [^\s]+ [^\s]+/g, en: function(text){
		        var params = text.replace('minimum of ', '').replace('of ', '').split(' ');
		        return 'min ' + params[2] + params[0] + '(' + params[1] + ')';
		    }, exp: function(text){
		        var params = text.replace('minimum of ', '').replace('of ', '').split(' ');
		        return 'min ' + params[2] + params[0] + '(' + params[1] + ')';
		    }},
		    {mask: /maximum of [^\s]+ of [^\s]+ [^\s]+/g, en: function(text){
		        var params = text.replace('maximum of ', '').replace('of ', '').split(' ');
		        return 'max ' + params[2] + params[0] + '(' + params[1] + ')';
		    }, exp: function(text){
		        var params = text.replace('maximum of ', '').replace('of ', '').split(' ');
		        return 'max ' + params[2] + params[0] + '(' + params[1] + ')';
		    }},
		    {mask: /sum of [^\s]+ [^\s]+ [^\s]+/g, en: function(text){
		        var params = text.replace('sum of ', '').split(' ');
		        return '\\sum' + params[2] + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('sum of ', '').split(' ');
		        return 'sum' + params[2] + params[0] + '_' + params[1];
		    }},
		    {mask: /sum of [^\s]+ [^\s]+ [^\s]+/g, en: function(text){
		        var params = text.replace('sum of ', '').split(' ');
		        return '\\sum' + params[2] + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('sum of ', '').split(' ');
		        return 'sum' + params[2] + params[0] + '_' + params[1];
		    }},
		    {mask: /product of [^\s]+ [^\s]+ [^\s]+/g, en: function(text){
		        var params = text.replace('product of ', '').split(' ');
		        return '\\sum' + params[2] + params[0] + '_' + params[1];
		    }, exp: function(text){
		        var params = text.replace('product of ', '').split(' ');
		        return 'sum' + params[2] + params[0] + '_' + params[1];
		    }}
		];
		
		module.exports = RULES;

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		var ml = __webpack_require__(50);
		
		var tokenTypes = __webpack_require__(52);
		var CONST = tokenTypes.CONST;
		var UNARY = tokenTypes.UNARY;
		var BINARY = tokenTypes.BINARY;
		var INFIX = tokenTypes.INFIX;
		var LEFTBRACKET = tokenTypes.LEFTBRACKET;
		var RIGHTBRACKET = tokenTypes.RIGHTBRACKET;
		var SPACE = tokenTypes.SPACE;
		var UNDEROVER = tokenTypes.UNDEROVER;
		var DEFINITION = tokenTypes.DEFINITION;
		var LEFTRIGHT = tokenTypes.LEFTRIGHT;
		var TEXT = tokenTypes.TEXT;
		
		var AMsymbols = __webpack_require__(53);
		var AMnames = AMsymbols.map(function (symbol) {
		  return symbol.input;
		}); //list of input symbols
		
		module.exports = parseMath;
		function parseMath(str) {
		  var frag, node;
		  AMnestingDepth = 0;
		  frag = AMparseExpr(str.replace(/^\s+/g, ""), false)[0];
		  node = createMmlNode("math", frag);
		  node.setAttribute("title", str.replace(/\s+/g, " "));
		  return node;
		}
		
		var useFakes = true;
		
		function createMmlNode(t, frag) {
		  var node = useFakes ? new ml.Node(t) : document.createElementNS("http://www.w3.org/1998/Math/MathML", t);
		  if (typeof frag === 'string') frag = useFakes ? new ml.Text(frag) : document.createTextNode(frag);
		  if (frag) node.appendChild(frag);
		  return node;
		}
		
		function createFragment() {
		  return useFakes ? new ml.Node('fragment') : document.createDocumentFragment();
		}
		
		var AMquote = {
		  input: "\"",
		  tag: "mtext",
		  output: "mbox",
		  tex: null,
		  ttype: TEXT
		};
		
		
		
		function AMremoveCharsAndBlanks(str, n) {
		  //remove n characters and any following blanks
		  var st;
		  if (str.charAt(n) == "\\" && str.charAt(n + 1) != "\\" && str.charAt(n + 1) != " ") st = str.slice(n + 1);
		  else st = str.slice(n);
		  for (var i = 0; i < st.length && st.charCodeAt(i) <= 32; i = i + 1);
		  return st.slice(i);
		}
		
		function position(arr, str, n) {
		  // return position >=n where str appears or would be inserted
		  // assumes arr is sorted
		  if (n == 0) {
		    var h, m;
		    n = -1;
		    h = arr.length;
		    while (n + 1 < h) {
		      m = (n + h) >> 1;
		      if (arr[m] < str) n = m;
		      else h = m;
		    }
		    return h;
		  } else {
		    for (var i = n; i < arr.length && arr[i] < str; i++);
		    return i; // i=arr.length || arr[i]>=str
		  }
		}
		
		function AMgetSymbol(str) {
		  //return maximal initial substring of str that appears in names
		  //return null if there is none
		  var k = 0; //new pos
		  var j = 0; //old pos
		  var mk; //match pos
		  var st;
		  var tagst;
		  var match = "";
		  var more = true;
		  for (var i = 1; i <= str.length && more; i++) {
		    st = str.slice(0, i); //initial substring of length i
		    j = k;
		    k = position(AMnames, st, j);
		    if (k < AMnames.length && str.slice(0, AMnames[k].length) == AMnames[k]) {
		      match = AMnames[k];
		      mk = k;
		      i = match.length;
		    }
		    more = k < AMnames.length && str.slice(0, AMnames[k].length) >= AMnames[k];
		  }
		  AMpreviousSymbol = AMcurrentSymbol;
		  if (match != "") {
		    AMcurrentSymbol = AMsymbols[mk].ttype;
		    return AMsymbols[mk];
		  }
		  // if str[0] is a digit or - return maxsubstring of digits.digits
		  AMcurrentSymbol = CONST;
		  k = 1;
		  st = str.slice(0, 1);
		  var integ = true;
		  while ("0" <= st && st <= "9" && k <= str.length) {
		    st = str.slice(k, k + 1);
		    k++;
		  }
		  if (st == '.') {
		    st = str.slice(k, k + 1);
		    if ("0" <= st && st <= "9") {
		      integ = false;
		      k++;
		      while ("0" <= st && st <= "9" && k <= str.length) {
		        st = str.slice(k, k + 1);
		        k++;
		      }
		    }
		  }
		  if ((integ && k > 1) || k > 2) {
		    st = str.slice(0, k - 1);
		    tagst = "mn";
		  } else {
		    k = 2;
		    st = str.slice(0, 1); //take 1 character
		    tagst = (("A" > st || st > "Z") && ("a" > st || st > "z") ? "mo" : "mi");
		  }
		  if (st == "-" && AMpreviousSymbol == INFIX) {
		    AMcurrentSymbol = INFIX; //trick "/" into recognizing "-" on second parse
		    return {
		      input: st,
		      tag: tagst,
		      output: st,
		      ttype: UNARY,
		      func: true
		    };
		  }
		  return {
		    input: st,
		    tag: tagst,
		    output: st,
		    ttype: CONST
		  };
		}
		
		function AMremoveBrackets(node) {
		  if (node.nodeName == "mrow") {
		    var start = node.firstChild.firstChild.nodeValue;
		    if (start == "(" || start == "[" || start == "{") node.removeChild(node.firstChild);
		    var end = node.lastChild.firstChild.nodeValue;
		    if (end == ")" || end == "]" || end == "}") node.removeChild(node.lastChild);
		  }
		}
		
		/*Parsing ASCII math expressions with the following grammar
		v ::= [A-Za-z] | greek letters | numbers | other constant symbols
		u ::= sqrt | text | bb | other unary symbols for font commands
		b ::= frac | root | stackrel         binary symbols
		l ::= ( | [ | { | (: | {:            left brackets
		r ::= ) | ] | } | :) | :}            right brackets
		S ::= v | lEr | uS | bSS             Simple expression
		I ::= S_S | S^S | S_S^S | S          Intermediate expression
		E ::= IE | I/I                       Expression
		Each terminal symbol is translated into a corresponding mathml node.*/
		
		var AMnestingDepth, AMpreviousSymbol, AMcurrentSymbol;
		
		function AMparseSexpr(str) { //parses str and returns [node,tailstr]
		  var symbol, node, result, i, st; // rightvert = false,
		  str = AMremoveCharsAndBlanks(str, 0);
		  symbol = AMgetSymbol(str); //either a token or a bracket or empty
		  if (symbol == null || symbol.ttype == RIGHTBRACKET && AMnestingDepth > 0) {
		    return [null, str];
		  }
		  if (symbol.ttype == DEFINITION) {
		    str = symbol.output + AMremoveCharsAndBlanks(str, symbol.input.length);
		    symbol = AMgetSymbol(str);
		  }
		  switch (symbol.ttype) {
		    case UNDEROVER:
		    case CONST:
		      str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      //its a constant
		      return [createMmlNode(symbol.tag, symbol.output), str];
		    case LEFTBRACKET:
		      //read (expr+)
		      AMnestingDepth++;
		      str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      result = AMparseExpr(str, true);
		      AMnestingDepth--;
		      if (typeof symbol.invisible == "boolean" && symbol.invisible) node = createMmlNode("mrow", result[0]);
		      else {
		        node = createMmlNode("mo", symbol.output);
		        node = createMmlNode("mrow", node);
		        node.appendChild(result[0]);
		      }
		      return [node, result[1]];
		    case TEXT:
		      var mRow = createMmlNode("mrow");
		      if (symbol != AMquote) str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      if (str.charAt(0) == "{") i = str.indexOf("}");
		      else if (str.charAt(0) == "(") i = str.indexOf(")");
		      else if (str.charAt(0) == "[") i = str.indexOf("]");
		      else if (symbol == AMquote) i = str.slice(1).indexOf("\"") + 1;
		      else i = 0;
		      if (i == -1) i = str.length;
		      st = str.slice(1, i);
		      if (st.charAt(0) == " ") {
		        node = createMmlNode("mspace");
		        node.setAttribute("width", "1ex");
		        mRow.appendChild(node);
		      }
		      mRow.appendChild(
		      createMmlNode(symbol.tag, st));
		      if (st.charAt(st.length - 1) == " ") {
		        node = createMmlNode("mspace");
		        node.setAttribute("width", "1ex");
		        mRow.appendChild(node);
		      }
		      str = AMremoveCharsAndBlanks(str, i + 1);
		      return [mRow, str];
		    case UNARY:
		      str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      result = AMparseSexpr(str);
		      if (result[0] == null) return [createMmlNode(symbol.tag, symbol.output), str];
		      if (typeof symbol.func == "boolean" && symbol.func) { // functions hack
		        st = str.charAt(0);
		        if (st == "^" || st == "_" || st == "/" || st == "|" || st == ",") {
		          return [createMmlNode(symbol.tag, symbol.output), str];
		        } else {
		          node = createMmlNode("mrow", createMmlNode(symbol.tag, symbol.output));
		          node.appendChild(result[0]);
		          return [node, result[1]];
		        }
		      }
		      AMremoveBrackets(result[0]);
		      if (symbol.input == "sqrt") { // sqrt
		        return [createMmlNode(symbol.tag, result[0]), result[1]];
		      } else if (typeof symbol.acc == "boolean" && symbol.acc) { // accent
		        node = createMmlNode(symbol.tag, result[0]);
		        node.appendChild(createMmlNode("mo", symbol.output));
		        return [node, result[1]];
		      } else { // font change command
		        if (typeof symbol.codes != "undefined") {
		          for (i = 0; i < result[0].childNodes.length; i++)
		          if (result[0].childNodes[i].nodeName == "mi" || result[0].nodeName == "mi") {
		            st = (result[0].nodeName == "mi" ? result[0].firstChild.nodeValue : result[0].childNodes[i].firstChild.nodeValue);
		            var newst = [];
		            for (var j = 0; j < st.length; j++)
		            if (st.charCodeAt(j) > 64 && st.charCodeAt(j) < 91) newst = newst + String.fromCharCode(symbol.codes[st.charCodeAt(j) - 65]);
		            else newst = newst + st.charAt(j);
		            if (result[0].nodeName == "mi") result[0] = createMmlNode("mo", newst);
		            else result[0].replaceChild(createMmlNode("mo", newst), result[0].childNodes[i]);
		          }
		        }
		        node = createMmlNode(symbol.tag, result[0]);
		        node.setAttribute(symbol.atname, symbol.atval);
		        return [node, result[1]];
		      }
		    case BINARY:
		      str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      result = AMparseSexpr(str);
		      if (result[0] == null) return [createMmlNode("mo", symbol.input), str];
		      AMremoveBrackets(result[0]);
		      var result2 = AMparseSexpr(result[1]);
		      if (result2[0] == null) return [createMmlNode("mo", symbol.input), str];
		      AMremoveBrackets(result2[0]);
		
		      var binaryTag = createMmlNode(symbol.tag);
		      if (symbol.input == "root" || symbol.input == "stackrel") binaryTag.appendChild(result2[0]);
		      binaryTag.appendChild(result[0]);
		      if (symbol.input == "frac") binaryTag.appendChild(result2[0]);
		      return [binaryTag, result2[1]];
		    case INFIX:
		      str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      return [createMmlNode("mo", symbol.output), str];
		    case SPACE:
		      var mRow = createMmlNode("mrow");
		      str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      node = createMmlNode("mspace");
		      node.setAttribute("width", "1ex");
		      mRow.appendChild(node);
		      mRow.appendChild(createMmlNode(symbol.tag, symbol.output));
		      node = createMmlNode("mspace");
		      node.setAttribute("width", "1ex");
		      mRow.appendChild(node);
		      return [mRow, str];
		    case LEFTRIGHT:
		      AMnestingDepth++;
		      str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      result = AMparseExpr(str, false);
		      AMnestingDepth--;
		      var st = "";
		      if (result[0].lastChild != null) st = result[0].lastChild.firstChild.nodeValue;
		      if (st == "|") { // its an absolute value subterm
		        node = createMmlNode("mo", symbol.output);
		        node = createMmlNode("mrow", node);
		        node.appendChild(result[0]);
		        return [node, result[1]];
		      } else { // the "|" is a \mid so use unicode 2223 (divides) for spacing
		        node = createMmlNode("mo", "\u2223");
		        node = createMmlNode("mrow", node);
		        return [node, str];
		      }
		    default:
		      str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      //symbol.tag is a constant
		      return [createMmlNode(symbol.tag, symbol.output), str];
		  }
		}
		
		function AMparseIexpr(str) {
		  var symbol, sym1, sym2, node, result, underover;
		  str = AMremoveCharsAndBlanks(str, 0);
		  sym1 = AMgetSymbol(str);
		  result = AMparseSexpr(str);
		  node = result[0];
		  str = result[1];
		  symbol = AMgetSymbol(str);
		  if (symbol.ttype == INFIX && symbol.input != "/") {
		    str = AMremoveCharsAndBlanks(str, symbol.input.length);
		    result = AMparseSexpr(str);
		    if (result[0] == null) // show box in place of missing argument
		    result[0] = createMmlNode("mo", "\u25A1");
		    else AMremoveBrackets(result[0]);
		    str = result[1];
		    if (symbol.input == "_") {
		      sym2 = AMgetSymbol(str);
		      underover = (sym1.ttype == UNDEROVER);
		      if (sym2.input == "^") {
		        str = AMremoveCharsAndBlanks(str, sym2.input.length);
		        var res2 = AMparseSexpr(str);
		        AMremoveBrackets(res2[0]);
		        str = res2[1];
		        node = createMmlNode((underover ? "munderover" : "msubsup"), node);
		        node.appendChild(result[0]);
		        node.appendChild(res2[0]);
		        node = createMmlNode("mrow", node); // so sum does not stretch
		      } else {
		        node = createMmlNode((underover ? "munder" : "msub"), node);
		        node.appendChild(result[0]);
		      }
		    } else {
		      node = createMmlNode(symbol.tag, node);
		      node.appendChild(result[0]);
		    }
		  }
		  return [node, str];
		}
		
		function AMparseExpr(str, rightbracket) {
		  var symbol, node, result, i,
		  newFrag = createFragment();
		  do {
		    str = AMremoveCharsAndBlanks(str, 0);
		    result = AMparseIexpr(str);
		    node = result[0];
		    str = result[1];
		    symbol = AMgetSymbol(str);
		    if (symbol.ttype == INFIX && symbol.input == "/") {
		      str = AMremoveCharsAndBlanks(str, symbol.input.length);
		      result = AMparseIexpr(str);
		      if (result[0] == null) // show box in place of missing argument
		      result[0] = createMmlNode("mo", "\u25A1");
		      else AMremoveBrackets(result[0]);
		      str = result[1];
		      AMremoveBrackets(node);
		      node = createMmlNode(symbol.tag, node);
		      node.appendChild(result[0]);
		      newFrag.appendChild(node);
		      symbol = AMgetSymbol(str);
		    } else if (node != undefined) newFrag.appendChild(node);
		  } while ((symbol.ttype != RIGHTBRACKET && (symbol.ttype != LEFTRIGHT || rightbracket) || AMnestingDepth == 0) && symbol != null && symbol.output != "");
		  if (symbol.ttype == RIGHTBRACKET || symbol.ttype == LEFTRIGHT) {
		    var len = newFrag.childNodes.length;
		    if (len > 0 && newFrag.childNodes[len - 1].nodeName == "mrow" && len > 1 && newFrag.childNodes[len - 2].nodeName == "mo" && newFrag.childNodes[len - 2].firstChild.nodeValue == ",") { //matrix
		      var right = newFrag.childNodes[len - 1].lastChild.firstChild.nodeValue;
		      if (right == ")" || right == "]") {
		        var left = newFrag.childNodes[len - 1].firstChild.firstChild.nodeValue;
		        if (left == "(" && right == ")" && symbol.output != "}" || left == "[" && right == "]") {
		          var pos = []; // positions of commas
		          var matrix = true;
		          var m = newFrag.childNodes.length;
		          for (i = 0; matrix && i < m; i = i + 2) {
		            pos[i] = [];
		            node = newFrag.childNodes[i];
		            if (matrix) matrix = node.nodeName == "mrow" && (i == m - 1 || node.nextSibling.nodeName == "mo" && node.nextSibling.firstChild.nodeValue == ",") && node.firstChild.firstChild.nodeValue == left && node.lastChild.firstChild.nodeValue == right;
		            if (matrix) {
		              for (var j = 0; j < node.childNodes.length; j++) {
		                if (node.childNodes[j].firstChild.nodeValue == ",") pos[i][pos[i].length] = j;
		              }
		            }
		            if (matrix && i > 1) matrix = pos[i].length == pos[i - 2].length;
		          }
		          if (matrix) {
		            var n, k, table = createMmlNode("mtable");
		            for (i = 0; i < m; i = i + 2) {
		              var row = createMmlNode("mtr");
		              var tableCell = createMmlNode("mtd");
		              node = newFrag.firstChild; // <mrow>(-,-,...,-,-)</mrow>
		              n = node.childNodes.length;
		              k = 0;
		              node.removeChild(node.firstChild); //remove (
		              for (j = 1; j < n - 1; j++) {
		                if (typeof pos[i][k] != "undefined" && j == pos[i][k]) {
		                  node.removeChild(node.firstChild); //remove ,
		                  row.appendChild(tableCell);
		                  tableCell = createMmlNode('mtd');
		                  k++;
		                } else tableCell.appendChild(node.firstChild);
		              }
		              row.appendChild(tableCell)
		              if (newFrag.childNodes.length > 2) {
		                newFrag.removeChild(newFrag.firstChild); //remove <mrow>)</mrow>
		                newFrag.removeChild(newFrag.firstChild); //remove <mo>,</mo>
		              }
		              table.appendChild(row);
		            }
		            node = table;
		            if (typeof symbol.invisible == "boolean" && symbol.invisible) node.setAttribute("columnalign", "left");
		            newFrag.replaceChild(node, newFrag.firstChild);
		          }
		        }
		      }
		    }
		    str = AMremoveCharsAndBlanks(str, symbol.input.length);
		    if (typeof symbol.invisible != "boolean" || !symbol.invisible) {
		      node = createMmlNode("mo", symbol.output);
		      newFrag.appendChild(node);
		    }
		  }
		  return [newFrag, str];
		}

	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		var escapeStr = __webpack_require__(51);
		
		exports.Node = Node;
		exports.Text = Text;
		
		function Node(type) {
		  this.firstChild = null;
		  this.lastChild = null;
		  this.nodeName = type;
		  this.childNodes = [];
		  this.attributes = {};
		}
		Node.prototype.toElement = function () {
		  var el = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.nodeName);
		  for (var i = 0; i < this.childNodes.length; i++) {
		    el.appendChild(this.childNodes[i].toElement());
		  }
		  var attributes = Object.keys(this.attributes);
		  for (var i = 0; i < attributes.length; i++) {
		    el.setAttribute(attributes[i], this.attributes[attributes[i]]);
		  }
		  return el;
		}
		
		Node.prototype.toString = function () {
		  var buf = [];
		  buf.push('<', this.nodeName);
		  var attributes = Object.keys(this.attributes);
		  for (var i = 0; i < attributes.length; i++) {
		    buf.push(' ', attributes[i], '="', this.attributes[attributes[i]], '"');
		  }
		  buf.push('>');
		  for (var i = 0; i < this.childNodes.length; i++) {
		    buf.push(this.childNodes[i].toString());
		  }
		
		  buf.push('</' + this.nodeName + '>');
		  return buf.join('');
		}
		
		Node.prototype.setAttribute = function (attr, val) {
		  this.attributes[attr] = val;
		};
		Node.prototype.appendChild = function (child) {
		  if (typeof child === 'string') {
		    this.appendChild(new Text(child), true);
		  } else if (child.nodeName === 'fragment') {
		    var len = child.childNodes.length;
		    for (var i = 0; i < len; i++) {
		      this.appendChild(child.childNodes[0], true);
		    }
		  } else {
		    if (child.parentNode) child.parentNode.removeChild(child);
		    child.parentNode = this;
		    this.childNodes.push(child);
		  }
		  this.updateChildNodes();
		  return child;
		};
		Node.prototype.removeChild = function (child) {
		  child.nextSibling = null;
		  var removed = false;
		  this.childNodes = this.childNodes.filter(function (c) {
		    if (!removed && c === child) {
		      removed = true;
		      return false;
		    } else {
		      return true;
		    }
		  });
		  child.parentNode = null;
		  this.updateChildNodes();
		  return child;
		}
		Node.prototype.replaceChild = function (newChild, oldChild) {
		  if (newChild.parentNode) newChild.parentNode.removeChild(child);
		  newChild.parentNode = this;
		  this.childNodes = this.childNodes.map(function (c) {
		    if (c === oldChild) return newChild;
		    else return c;
		  });
		  oldChild.parentNode = null;
		  this.updateChildNodes();
		  return oldChild;
		};
		Node.prototype.updateChildNodes = function () {
		  if (this.childNodes.length === 0) {
		    this.firstChild = null;
		    this.lastChild = null;
		  } else {
		    this.firstChild = this.childNodes[0];
		    this.lastChild = this.childNodes[this.childNodes.length - 1];
		  }
		  for (var i = 0; i < this.childNodes.length; i++) {
		    this.childNodes[i].nextSibling = this.childNodes[i+1] || null;
		  }
		};
		
		function Text(text) {
		  this.nodeValue = text;
		}
		Text.prototype.toElement = function () {
		  return document.createTextNode(this.nodeValue);
		};
		Text.prototype.toString = function () {
		  return escapeStr(this.nodeValue);
		};

	/***/ },
	/* 51 */
	/***/ function(module, exports) {

		/*
		
		Generated with the code:
		
		request('http://www.escapecodes.info', function (err, res, body) {
		  if (err) throw err;
		  body = body.toString();
		  var pattern = /<span class=\"tip\">\&amp;([^;]+);<br \/>\&amp;#([^;]+);/g;
		  var match;
		
		  var lookup = {};
		  while (match = pattern.exec(body)) {
		    lookup[match[2]] = match[1];
		  }
		  fs.writeFileSync(path.join(__dirname, 'escape-lookup.json'), JSON.stringify(lookup, null, 2));
		})
		
		*/
		
		var lookup = {
		  34: 'quot',
		  38: 'amp',
		  60: 'lt',
		  62: 'gt',
		  161: 'iexcl',
		  162: 'cent',
		  163: 'pound',
		  164: 'curren',
		  165: 'yen',
		  166: 'brvbar',
		  167: 'sect',
		  168: 'uml',
		  169: 'copy',
		  170: 'ordf',
		  171: 'laquo',
		  172: 'not',
		  173: 'shy',
		  174: 'reg',
		  175: 'macr',
		  176: 'deg',
		  177: 'plusmn',
		  178: 'sup2',
		  179: 'sup3',
		  180: 'acute',
		  181: 'micro',
		  182: 'para',
		  183: 'middot',
		  184: 'cedil',
		  185: 'sup1',
		  186: 'ordm',
		  187: 'raquo',
		  188: 'frac14',
		  189: 'frac12',
		  190: 'frac34',
		  191: 'iquest',
		  192: 'Agrave',
		  193: 'Aacute',
		  194: 'Acirc',
		  195: 'Atilde',
		  196: 'Auml',
		  197: 'Aring',
		  198: 'AElig',
		  199: 'Ccedil',
		  200: 'Egrave',
		  201: 'Eacute',
		  202: 'Ecirc',
		  203: 'Euml',
		  204: 'Igrave',
		  205: 'Iacute',
		  206: 'Icirc',
		  207: 'Iuml',
		  208: 'ETH',
		  209: 'Ntilde',
		  210: 'Ograve',
		  211: 'Oacute',
		  212: 'Ocirc',
		  213: 'Otilde',
		  214: 'Ouml',
		  215: 'times',
		  216: 'Oslash',
		  217: 'Ugrave',
		  218: 'Uacute',
		  219: 'Ucirc',
		  220: 'Uuml',
		  221: 'Yacute',
		  222: 'THORN',
		  223: 'szlig',
		  224: 'agrave',
		  225: 'aacute',
		  226: 'acirc',
		  227: 'atilde',
		  228: 'auml',
		  229: 'aring',
		  230: 'aelig',
		  231: 'ccedil',
		  232: 'egrave',
		  233: 'eacute',
		  234: 'ecirc',
		  235: 'euml',
		  236: 'igrave',
		  237: 'iacute',
		  238: 'icirc',
		  239: 'iuml',
		  240: 'eth',
		  241: 'ntilde',
		  242: 'ograve',
		  243: 'oacute',
		  244: 'ocirc',
		  245: 'otilde',
		  246: 'ouml',
		  247: 'divide',
		  248: 'oslash',
		  249: 'ugrave',
		  250: 'uacute',
		  251: 'ucirc',
		  252: 'uuml',
		  253: 'yacute',
		  255: 'yuml',
		  338: 'OElig',
		  339: 'oelig',
		  352: 'Scaron',
		  353: 'scaron',
		  376: 'Yuml',
		  402: 'fnof',
		  913: 'Alpha',
		  914: 'Beta',
		  915: 'Gamma',
		  916: 'Delta',
		  917: 'Epsilon',
		  918: 'Zeta',
		  919: 'Eta',
		  920: 'Theta',
		  921: 'Iota',
		  922: 'Kappa',
		  923: 'Lambda',
		  925: 'Nu',
		  926: 'Xi',
		  927: 'Omicron',
		  928: 'Pi',
		  929: 'Rho',
		  931: 'Sigma',
		  932: 'Tau',
		  933: 'Upsilon',
		  934: 'Phi',
		  935: 'Chi',
		  936: 'Psi',
		  937: 'Omega',
		  945: 'alpha',
		  946: 'beta',
		  947: 'gamma',
		  948: 'delta',
		  949: 'epsilon',
		  950: 'zeta',
		  951: 'eta',
		  952: 'theta',
		  953: 'iota',
		  954: 'kappa',
		  955: 'lambda',
		  956: 'mu',
		  957: 'nu',
		  958: 'xi',
		  959: 'omicron',
		  960: 'pi',
		  961: 'rho',
		  962: 'sigmaf',
		  963: 'sigma',
		  964: 'tau',
		  965: 'upsilon',
		  966: 'phi',
		  967: 'chi',
		  968: 'psi',
		  969: 'omega',
		  977: 'thetasym',
		  978: 'upsih',
		  982: 'piv',
		  8211: 'ndash',
		  8212: 'mdash',
		  8216: 'lsquo',
		  8217: 'rsquo',
		  8218: 'sbquo',
		  8220: 'ldquo',
		  8221: 'rdquo',
		  8222: 'bdquo',
		  8224: 'dagger',
		  8225: 'Dagger',
		  8240: 'permil',
		  8249: 'lsaquo',
		  8250: 'rsaquo',
		  8364: 'euro',
		  8465: 'image',
		  8472: 'weierp',
		  8476: 'real',
		  8482: 'trade',
		  8501: 'alefsym',
		  8592: 'larr',
		  8593: 'uarr',
		  8594: 'rarr',
		  8595: 'darr',
		  8596: 'harr',
		  8629: 'crarr',
		  8656: 'lArr',
		  8657: 'uArr',
		  8658: 'rArr',
		  8659: 'dArr',
		  8660: 'hArr',
		  8704: 'forall',
		  8706: 'part',
		  8707: 'exist',
		  8709: 'empty',
		  8711: 'nabla',
		  8712: 'isin',
		  8713: 'notin',
		  8715: 'ni',
		  8719: 'prod',
		  8721: 'sum',
		  8722: 'minus',
		  8727: 'lowast',
		  8730: 'radic',
		  8733: 'prop',
		  8734: 'infin',
		  8736: 'ang',
		  8743: 'and',
		  8744: 'or',
		  8745: 'cap',
		  8746: 'cup',
		  8747: 'int',
		  8756: 'there4',
		  8764: 'sim',
		  8773: 'cong',
		  8776: 'asymp',
		  8800: 'ne',
		  8801: 'equiv',
		  8804: 'le',
		  8805: 'ge',
		  8834: 'sub',
		  8835: 'sup',
		  8836: 'nsub',
		  8838: 'sube',
		  8839: 'supe',
		  8853: 'oplus',
		  8855: 'otimes',
		  8869: 'perp',
		  8901: 'sdot',
		  8968: 'lceil',
		  8969: 'rceil',
		  8970: 'lfloor',
		  8971: 'rfloor',
		  9001: 'lang',
		  9002: 'rang',
		  9674: 'loz',
		  9824: 'spades',
		  9827: 'clubs',
		  9829: 'hearts',
		  9830: 'diams'
		};
		
		module.exports = HTMLEncode;
		function HTMLEncode(str){
		  var i = str.length,
		      aRet = [];
		
		  while (i--) {
		    var iC = str.charCodeAt(i);
		    if (lookup[iC]) {
		      aRet[i] = '&' + lookup[iC] + ';';
		    } else if (iC > 127) { //See: http://en.wikipedia.org/wiki/List_of_Unicode_characters for list of unicode characters
		      aRet[i] = '&#' + iC + ';';
		    } else {
		      aRet[i] = str[i];
		    }
		   }
		  return aRet.join('');    
		}

	/***/ },
	/* 52 */
	/***/ function(module, exports) {

		exports.CONST = 0;
		exports.UNARY = 1;
		exports.BINARY = 2;
		exports.INFIX = 3;
		exports.LEFTBRACKET = 4;
		exports.RIGHTBRACKET = 5;
		exports.SPACE = 6;
		exports.UNDEROVER = 7;
		exports.DEFINITION = 8;
		exports.LEFTRIGHT = 9;
		exports.TEXT = 10;

	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		var tokenTypes = __webpack_require__(52);
		var CONST = tokenTypes.CONST;
		var UNARY = tokenTypes.UNARY;
		var BINARY = tokenTypes.BINARY;
		var INFIX = tokenTypes.INFIX;
		var LEFTBRACKET = tokenTypes.LEFTBRACKET;
		var RIGHTBRACKET = tokenTypes.RIGHTBRACKET;
		var SPACE = tokenTypes.SPACE;
		var UNDEROVER = tokenTypes.UNDEROVER;
		var DEFINITION = tokenTypes.DEFINITION;
		var LEFTRIGHT = tokenTypes.LEFTRIGHT;
		var TEXT = tokenTypes.TEXT;
		
		// character lists for Mozilla/Netscape fonts
		var AMcal = [0xEF35, 0x212C, 0xEF36, 0xEF37, 0x2130, 0x2131, 0xEF38, 0x210B, 0x2110, 0xEF39, 0xEF3A, 0x2112, 0x2133, 0xEF3B, 0xEF3C, 0xEF3D, 0xEF3E, 0x211B, 0xEF3F, 0xEF40, 0xEF41, 0xEF42, 0xEF43, 0xEF44, 0xEF45, 0xEF46];
		var AMfrk = [0xEF5D, 0xEF5E, 0x212D, 0xEF5F, 0xEF60, 0xEF61, 0xEF62, 0x210C, 0x2111, 0xEF63, 0xEF64, 0xEF65, 0xEF66, 0xEF67, 0xEF68, 0xEF69, 0xEF6A, 0x211C, 0xEF6B, 0xEF6C, 0xEF6D, 0xEF6E, 0xEF6F, 0xEF70, 0xEF71, 0x2128];
		var AMbbb = [0xEF8C, 0xEF8D, 0x2102, 0xEF8E, 0xEF8F, 0xEF90, 0xEF91, 0x210D, 0xEF92, 0xEF93, 0xEF94, 0xEF95, 0xEF96, 0x2115, 0xEF97, 0x2119, 0x211A, 0x211D, 0xEF98, 0xEF99, 0xEF9A, 0xEF9B, 0xEF9C, 0xEF9D, 0xEF9E, 0x2124];
		
		
		var symbols = [
		  //some greek symbols
		
		  {input: "alpha", tag: "mi", output: "\u03B1", tex: null, ttype: CONST}, 
		  {input: "beta", tag: "mi", output: "\u03B2", tex: null, ttype: CONST}, 
		  {input: "chi", tag: "mi", output: "\u03C7", tex: null, ttype: CONST}, 
		  {input: "delta", tag: "mi", output: "\u03B4", tex: null, ttype: CONST}, 
		  {input: "Delta", tag: "mo", output: "\u0394", tex: null, ttype: CONST}, 
		  {input: "epsi", tag: "mi", output: "\u03B5", tex: "epsilon", ttype: CONST}, 
		  {input: "varepsilon", tag: "mi", output: "\u025B", tex: null, ttype: CONST}, 
		  {input: "eta", tag: "mi", output: "\u03B7", tex: null, ttype: CONST}, 
		  {input: "gamma", tag: "mi", output: "\u03B3", tex: null, ttype: CONST}, 
		  {input: "Gamma", tag: "mo", output: "\u0393", tex: null, ttype: CONST}, 
		  {input: "iota", tag: "mi", output: "\u03B9", tex: null, ttype: CONST}, 
		  {input: "kappa", tag: "mi", output: "\u03BA", tex: null, ttype: CONST}, 
		  {input: "lambda", tag: "mi", output: "\u03BB", tex: null, ttype: CONST}, 
		  {input: "Lambda", tag: "mo", output: "\u039B", tex: null, ttype: CONST}, 
		  {input: "mu", tag: "mi", output: "\u03BC", tex: null, ttype: CONST}, 
		  {input: "nu", tag: "mi", output: "\u03BD", tex: null, ttype: CONST}, 
		  {input: "omega", tag: "mi", output: "\u03C9", tex: null, ttype: CONST}, 
		  {input: "Omega", tag: "mo", output: "\u03A9", tex: null, ttype: CONST}, 
		  {input: "phi", tag: "mi", output: "\u03C6", tex: null, ttype: CONST}, 
		  {input: "varphi", tag: "mi", output: "\u03D5", tex: null, ttype: CONST}, 
		  {input: "Phi", tag: "mo", output: "\u03A6", tex: null, ttype: CONST}, 
		  {input: "pi", tag: "mi", output: "\u03C0", tex: null, ttype: CONST}, 
		  {input: "Pi", tag: "mo", output: "\u03A0", tex: null, ttype: CONST}, 
		  {input: "psi", tag: "mi", output: "\u03C8", tex: null, ttype: CONST}, 
		  {input: "Psi", tag: "mi", output: "\u03A8", tex: null, ttype: CONST}, 
		  {input: "rho", tag: "mi", output: "\u03C1", tex: null, ttype: CONST}, 
		  {input: "sigma", tag: "mi", output: "\u03C3", tex: null, ttype: CONST}, 
		  {input: "Sigma", tag: "mo", output: "\u03A3", tex: null, ttype: CONST}, 
		  {input: "tau", tag: "mi", output: "\u03C4", tex: null, ttype: CONST}, 
		  {input: "theta", tag: "mi", output: "\u03B8", tex: null, ttype: CONST}, 
		  {input: "vartheta", tag: "mi", output: "\u03D1", tex: null, ttype: CONST}, 
		  {input: "Theta", tag: "mo", output: "\u0398", tex: null, ttype: CONST}, 
		  {input: "upsilon", tag: "mi", output: "\u03C5", tex: null, ttype: CONST}, 
		  {input: "xi", tag: "mi", output: "\u03BE", tex: null, ttype: CONST}, 
		  {input: "Xi", tag: "mo", output: "\u039E", tex: null, ttype: CONST}, 
		  {input: "zeta", tag: "mi", output: "\u03B6", tex: null, ttype: CONST},
		
		  //binary operation symbols
		  //{input:"-",  tag:"mo", output:"\u0096", tex:null, ttype:CONST},
		
		  {input: "*", tag: "mo", output: "\u22C5", tex: "cdot", ttype: CONST}, 
		  {input: "**", tag: "mo", output: "\u22C6", tex: "star", ttype: CONST}, 
		  {input: "//", tag: "mo", output: "/", tex: null, ttype: CONST}, 
		  {input: "\\\\", tag: "mo", output: "\\", tex: "backslash", ttype: CONST}, 
		  {input: "setminus", tag: "mo", output: "\\", tex: null, ttype: CONST}, 
		  {input: "xx", tag: "mo", output: "\u00D7", tex: "times", ttype: CONST}, 
		  {input: "-:", tag: "mo", output: "\u00F7", tex: "divide", ttype: CONST}, 
		  {input: "@", tag: "mo", output: "\u26AC", tex: "circ", ttype: CONST}, 
		  {input: "o+", tag: "mo", output: "\u2295", tex: "oplus", ttype: CONST}, 
		  {input: "ox", tag: "mo", output: "\u2297", tex: "otimes", ttype: CONST}, 
		  {input: "o.", tag: "mo", output: "\u2299", tex: "odot", ttype: CONST}, 
		  {input: "sum", tag: "mo", output: "\u2211", tex: null, ttype: UNDEROVER}, 
		  {input: "prod", tag: "mo", output: "\u220F", tex: null, ttype: UNDEROVER}, 
		  {input: "^^", tag: "mo", output: "\u2227", tex: "wedge", ttype: CONST}, 
		  {input: "^^^", tag: "mo", output: "\u22C0", tex: "bigwedge", ttype: UNDEROVER}, 
		  {input: "vv", tag: "mo", output: "\u2228", tex: "vee", ttype: CONST}, 
		  {input: "vvv", tag: "mo", output: "\u22C1", tex: "bigvee", ttype: UNDEROVER}, 
		  {input: "nn", tag: "mo", output: "\u2229", tex: "cap", ttype: CONST}, 
		  {input: "nnn", tag: "mo", output: "\u22C2", tex: "bigcap", ttype: UNDEROVER}, 
		  {input: "uu", tag: "mo", output: "\u222A", tex: "cup", ttype: CONST}, 
		  {input: "uuu", tag: "mo", output: "\u22C3", tex: "bigcup", ttype: UNDEROVER},
		
		  //binary relation symbols
		
		  {input: "!=", tag: "mo", output: "\u2260", tex: "ne", ttype: CONST}, 
		  {input: ":=", tag: "mo", output: ":=", tex: null, ttype: CONST}, 
		  {input: "lt", tag: "mo", output: "<", tex: null, ttype: CONST}, 
		  {input: "<=", tag: "mo", output: "\u2264", tex: "le", ttype: CONST}, 
		  {input: "lt=", tag: "mo", output: "\u2264", tex: "leq", ttype: CONST}, 
		  {input: ">=", tag: "mo", output: "\u2265", tex: "ge", ttype: CONST}, 
		  {input: "geq", tag: "mo", output: "\u2265", tex: null, ttype: CONST}, 
		  {input: "-<", tag: "mo", output: "\u227A", tex: "prec", ttype: CONST}, 
		  {input: "-lt", tag: "mo", output: "\u227A", tex: null, ttype: CONST}, 
		  {input: ">-", tag: "mo", output: "\u227B", tex: "succ", ttype: CONST}, 
		  {input: "-<=", tag: "mo", output: "\u2AAF", tex: "preceq", ttype: CONST}, 
		  {input: ">-=", tag: "mo", output: "\u2AB0", tex: "succeq", ttype: CONST}, 
		  {input: "in", tag: "mo", output: "\u2208", tex: null, ttype: CONST}, 
		  {input: "!in", tag: "mo", output: "\u2209", tex: "notin", ttype: CONST}, 
		  {input: "sub", tag: "mo", output: "\u2282", tex: "subset", ttype: CONST}, 
		  {input: "sup", tag: "mo", output: "\u2283", tex: "supset", ttype: CONST}, 
		  {input: "sube", tag: "mo", output: "\u2286", tex: "subseteq", ttype: CONST}, 
		  {input: "supe", tag: "mo", output: "\u2287", tex: "supseteq", ttype: CONST}, 
		  {input: "-=", tag: "mo", output: "\u2261", tex: "equiv", ttype: CONST}, 
		  {input: "~=", tag: "mo", output: "\u2245", tex: "cong", ttype: CONST}, 
		  {input: "~~", tag: "mo", output: "\u2248", tex: "approx", ttype: CONST}, 
		  {input: "prop", tag: "mo", output: "\u221D", tex: "propto", ttype: CONST},
		
		  //logical symbols
		
		  {input: "and", tag: "mtext", output: "and", tex: null, ttype: SPACE}, 
		  {input: "or", tag: "mtext", output: "or", tex: null, ttype: SPACE}, 
		  {input: "not", tag: "mo", output: "\u00AC", tex: "neg", ttype: CONST}, 
		  {input: "=>", tag: "mo", output: "\u21D2", tex: "implies", ttype: CONST}, 
		  {input: "if", tag: "mo", output: "if", tex: null, ttype: SPACE}, 
		  {input: "<=>", tag: "mo", output: "\u21D4", tex: "iff", ttype: CONST}, 
		  {input: "AA", tag: "mo", output: "\u2200", tex: "forall", ttype: CONST}, 
		  {input: "EE", tag: "mo", output: "\u2203", tex: "exists", ttype: CONST}, 
		  {input: "_|_", tag: "mo", output: "\u22A5", tex: "bot", ttype: CONST}, 
		  {input: "TT", tag: "mo", output: "\u22A4", tex: "top", ttype: CONST}, 
		  {input: "|--", tag: "mo", output: "\u22A2", tex: "vdash", ttype: CONST}, 
		  {input: "|==", tag: "mo", output: "\u22A8", tex: "models", ttype: CONST},
		
		  //grouping brackets
		
		  {input: "(", tag: "mo", output: "(", tex: null, ttype: LEFTBRACKET}, 
		  {input: ")", tag: "mo", output: ")", tex: null, ttype: RIGHTBRACKET}, 
		  {input: "[", tag: "mo", output: "[", tex: null, ttype: LEFTBRACKET}, 
		  {input: "]", tag: "mo", output: "]", tex: null, ttype: RIGHTBRACKET}, 
		  {input: "{", tag: "mo", output: "{", tex: null, ttype: LEFTBRACKET}, 
		  {input: "}", tag: "mo", output: "}", tex: null, ttype: RIGHTBRACKET}, 
		  {input: "|", tag: "mo", output: "|", tex: null, ttype: LEFTRIGHT},
		  //{input:"||", tag:"mo", output:"||", tex:null, ttype:LEFTRIGHT},
		
		  {input: "(:", tag: "mo", output: "\u2329", tex: "langle", ttype: LEFTBRACKET},
		  {input: ":)", tag: "mo", output: "\u232A", tex: "rangle", ttype: RIGHTBRACKET},
		  {input: "<<", tag: "mo", output: "\u2329", tex: null, ttype: LEFTBRACKET},
		  {input: ">>", tag: "mo", output: "\u232A", tex: null, ttype: RIGHTBRACKET},
		  {input: "{:", tag: "mo", output: "{:", tex: null, ttype: LEFTBRACKET, invisible: true},
		  {input: ":}", tag: "mo", output: ":}", tex: null, ttype: RIGHTBRACKET, invisible: true},
		
		  //miscellaneous symbols
		
		  {input: "int", tag: "mo", output: "\u222B", tex: null, ttype: CONST}, 
		  {input: "dx", tag: "mi", output: "{:d x:}", tex: null, ttype: DEFINITION}, 
		  {input: "dy", tag: "mi", output: "{:d y:}", tex: null, ttype: DEFINITION}, 
		  {input: "dz", tag: "mi", output: "{:d z:}", tex: null, ttype: DEFINITION}, 
		  {input: "dt", tag: "mi", output: "{:d t:}", tex: null, ttype: DEFINITION}, 
		  {input: "oint", tag: "mo", output: "\u222E", tex: null, ttype: CONST}, 
		  {input: "del", tag: "mo", output: "\u2202", tex: "partial", ttype: CONST}, 
		  {input: "grad", tag: "mo", output: "\u2207", tex: "nabla", ttype: CONST}, 
		  {input: "+-", tag: "mo", output: "\u00B1", tex: "pm", ttype: CONST}, 
		  {input: "O/", tag: "mo", output: "\u2205", tex: "emptyset", ttype: CONST}, 
		  {input: "oo", tag: "mo", output: "\u221E", tex: "infty", ttype: CONST}, 
		  {input: "aleph", tag: "mo", output: "\u2135", tex: null, ttype: CONST}, 
		  {input: "...", tag: "mo", output: "...", tex: "ldots", ttype: CONST}, 
		  {input: ":.", tag: "mo", output: "\u2234", tex: "therefore", ttype: CONST}, 
		  {input: "/_", tag: "mo", output: "\u2220", tex: "angle", ttype: CONST}, 
		  {input: "\\ ", tag: "mo", output: "\u00A0", tex: null, ttype: CONST}, 
		  {input: "quad", tag: "mo", output: "\u00A0\u00A0", tex: null, ttype: CONST}, 
		  {input: "qquad", tag: "mo", output: "\u00A0\u00A0\u00A0\u00A0", tex: null, ttype: CONST}, 
		  {input: "cdots", tag: "mo", output: "\u22EF", tex: null, ttype: CONST}, 
		  {input: "vdots", tag: "mo", output: "\u22EE", tex: null, ttype: CONST}, 
		  {input: "ddots", tag: "mo", output: "\u22F1", tex: null, ttype: CONST}, 
		  {input: "diamond", tag: "mo", output: "\u22C4", tex: null, ttype: CONST}, 
		  {input: "square", tag: "mo", output: "\u25A1", tex: null, ttype: CONST}, 
		  {input: "|__", tag: "mo", output: "\u230A", tex: "lfloor", ttype: CONST}, 
		  {input: "__|", tag: "mo", output: "\u230B", tex: "rfloor", ttype: CONST}, 
		  {input: "|~", tag: "mo", output: "\u2308", tex: "lceiling", ttype: CONST}, 
		  {input: "~|", tag: "mo", output: "\u2309", tex: "rceiling", ttype: CONST}, 
		  {input: "CC", tag: "mo", output: "\u2102", tex: null, ttype: CONST}, 
		  {input: "NN", tag: "mo", output: "\u2115", tex: null, ttype: CONST}, 
		  {input: "QQ", tag: "mo", output: "\u211A", tex: null, ttype: CONST}, 
		  {input: "RR", tag: "mo", output: "\u211D", tex: null, ttype: CONST}, 
		  {input: "ZZ", tag: "mo", output: "\u2124", tex: null, ttype: CONST},
		  {input: "f", tag: "mi", output: "f", tex: null, ttype: UNARY, func: true},
		  {input: "g", tag: "mi", output: "g", tex: null, ttype: UNARY, func: true},
		
		  //standard functions
		
		  {input: "lim", tag: "mo", output: "lim", tex: null, ttype: UNDEROVER}, 
		  {input: "Lim", tag: "mo", output: "Lim", tex: null, ttype: UNDEROVER},
		  {input: "sin", tag: "mo", output: "sin", tex: null, ttype: UNARY, func: true},
		  {input: "cos", tag: "mo", output: "cos", tex: null, ttype: UNARY, func: true},
		  {input: "tan", tag: "mo", output: "tan", tex: null, ttype: UNARY, func: true},
		  {input: "sinh", tag: "mo", output: "sinh", tex: null, ttype: UNARY, func: true},
		  {input: "cosh", tag: "mo", output: "cosh", tex: null, ttype: UNARY, func: true},
		  {input: "tanh", tag: "mo", output: "tanh", tex: null, ttype: UNARY, func: true},
		  {input: "cot", tag: "mo", output: "cot", tex: null, ttype: UNARY, func: true},
		  {input: "sec", tag: "mo", output: "sec", tex: null, ttype: UNARY, func: true},
		  {input: "csc", tag: "mo", output: "csc", tex: null, ttype: UNARY, func: true},
		  {input: "log", tag: "mo", output: "log", tex: null, ttype: UNARY, func: true},
		  {input: "ln", tag: "mo", output: "ln", tex: null, ttype: UNARY, func: true},
		  {input: "det", tag: "mo", output: "det", tex: null, ttype: UNARY, func: true}, 
		  {input: "dim", tag: "mo", output: "dim", tex: null, ttype: CONST}, 
		  {input: "mod", tag: "mo", output: "mod", tex: null, ttype: CONST},
		  {input: "gcd", tag: "mo", output: "gcd", tex: null, ttype: UNARY, func: true},
		  {input: "lcm", tag: "mo", output: "lcm", tex: null, ttype: UNARY, func: true}, 
		  {input: "lub", tag: "mo", output: "lub", tex: null, ttype: CONST}, 
		  {input: "glb", tag: "mo", output: "glb", tex: null, ttype: CONST}, 
		  {input: "min", tag: "mo", output: "min", tex: null, ttype: UNDEROVER}, 
		  {input: "max", tag: "mo", output: "max", tex: null, ttype: UNDEROVER},
		
		  //arrows
		
		  {input: "uarr", tag: "mo", output: "\u2191", tex: "uparrow", ttype: CONST}, 
		  {input: "darr", tag: "mo", output: "\u2193", tex: "downarrow", ttype: CONST}, 
		  {input: "rarr", tag: "mo", output: "\u2192", tex: "rightarrow", ttype: CONST}, 
		  {input: "->", tag: "mo", output: "\u2192", tex: "to", ttype: CONST}, 
		  {input: ">->", tag: "mo", output: "\u21A3", tex: "rightarrowtail", ttype: CONST}, 
		  {input: "->>", tag: "mo", output: "\u21A0", tex: "twoheadrightarrow", ttype: CONST}, 
		  {input: ">->>", tag: "mo", output: "\u2916", tex: "twoheadrightarrowtail", ttype: CONST}, 
		  {input: "|->", tag: "mo", output: "\u21A6", tex: "mapsto", ttype: CONST}, 
		  {input: "larr", tag: "mo", output: "\u2190", tex: "leftarrow", ttype: CONST}, 
		  {input: "harr", tag: "mo", output: "\u2194", tex: "leftrightarrow", ttype: CONST}, 
		  {input: "rArr", tag: "mo", output: "\u21D2", tex: "Rightarrow", ttype: CONST}, 
		  {input: "lArr", tag: "mo", output: "\u21D0", tex: "Leftarrow", ttype: CONST}, 
		  {input: "hArr", tag: "mo", output: "\u21D4", tex: "Leftrightarrow", ttype: CONST},
		  //commands with argument
		
		  {input: "sqrt", tag: "msqrt", output: "sqrt", tex: null, ttype: UNARY}, 
		  {input: "root", tag: "mroot", output: "root", tex: null, ttype: BINARY}, 
		  {input: "frac", tag: "mfrac", output: "/", tex: null, ttype: BINARY}, 
		  {input: "/", tag: "mfrac", output: "/", tex: null, ttype: INFIX}, 
		  {input: "stackrel", tag: "mover", output: "stackrel", tex: null, ttype: BINARY}, 
		  {input: "_", tag: "msub", output: "_", tex: null, ttype: INFIX}, 
		  {input: "^", tag: "msup", output: "^", tex: null, ttype: INFIX},
		  {input: "hat", tag: "mover", output: "^", tex: null, ttype: UNARY, acc: true},
		  {input: "bar", tag: "mover", output: "\u00AF", tex: "overline", ttype: UNARY, acc: true},
		  {input: "vec", tag: "mover", output: "\u2192", tex: null, ttype: UNARY, acc: true},
		  {input: "line", tag: "mover", output: "\u2194", tex: null, ttype: UNARY, acc: true},
		  {input: "dot", tag: "mover", output: ".", tex: null, ttype: UNARY, acc: true},
		  {input: "ddot", tag: "mover", output: "..", tex: null, ttype: UNARY, acc: true},
		  {input: "ul", tag: "munder", output: "\u0332", tex: "underline", ttype: UNARY, acc: true}, 
		  {input: "text", tag: "mtext", output: "text", tex: null, ttype: TEXT}, 
		  {input: "mbox", tag: "mtext", output: "mbox", tex: null, ttype: TEXT},
		  {input: "\"", tag: "mtext", output: "mbox", tex: null, ttype: TEXT},
		  {input: "bb", tag: "mstyle", atname: "fontweight", atval: "bold", output: "bb", tex: null, ttype: UNARY},
		  {input: "mathbf", tag: "mstyle", atname: "fontweight", atval: "bold", output: "mathbf", tex: null, ttype: UNARY},
		  {input: "sf", tag: "mstyle", atname: "fontfamily", atval: "sans-serif", output: "sf", tex: null, ttype: UNARY},
		  {input: "mathsf", tag: "mstyle", atname: "fontfamily", atval: "sans-serif", output: "mathsf", tex: null, ttype: UNARY},
		  {input: "bbb", tag: "mstyle", atname: "mathvariant", atval: "double-struck", output: "bbb", tex: null, ttype: UNARY, codes: AMbbb},
		  {input: "mathbb", tag: "mstyle", atname: "mathvariant", atval: "double-struck", output: "mathbb", tex: null, ttype: UNARY, codes: AMbbb},
		  {input: "cc", tag: "mstyle", atname: "mathvariant", atval: "script", output: "cc", tex: null, ttype: UNARY, codes: AMcal},
		  {input: "mathcal", tag: "mstyle", atname: "mathvariant", atval: "script", output: "mathcal", tex: null, ttype: UNARY, codes: AMcal},
		  {input: "tt", tag: "mstyle", atname: "fontfamily", atval: "monospace", output: "tt", tex: null, ttype: UNARY},
		  {input: "mathtt", tag: "mstyle", atname: "fontfamily", atval: "monospace", output: "mathtt", tex: null, ttype: UNARY},
		  {input: "fr", tag: "mstyle", atname: "mathvariant", atval: "fraktur", output: "fr", tex: null, ttype: UNARY, codes: AMfrk},
		  {input: "mathfrak", tag: "mstyle", atname: "mathvariant", atval: "fraktur", output: "mathfrak", tex: null, ttype: UNARY, codes: AMfrk}
		];
		
		var texsymbols = [];
		for (var i = 0; i < symbols.length; i++) {
		  if (symbols[i].tex) {
		    texsymbols.push({
		      input: symbols[i].tex,
		      tag: symbols[i].tag,
		      output: symbols[i].output,
		      ttype: symbols[i].ttype
		    });
		  }
		}
		symbols = symbols.concat(texsymbols);
		symbols.sort(compareNames);
		
		module.exports = symbols;
		
		function compareNames(s1, s2) {
		  if (s1.input > s2.input) return 1;
		  else return -1;
		}


	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=met.js.map

/***/ },
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
/* 62 */
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

	// Element.matches polyfill

	(function (e) {
	  e.matches || (e.matches = e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function (selector) {
	    var matches = document.querySelectorAll(selector),
	        th = this;
	    return Array.prototype.some.call(matches, function (e) {
	      return e === th;
	    });
	  });
	})(Element.prototype);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

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

	if (window.cgVoiceControllerPublicPath) __webpack_require__.p = window.cgVoiceControllerPublicPath;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * @name JavaScript/NodeJS Merge v1.2.0
	 * @author yeikos
	 * @repository https://github.com/yeikos/js.merge

	 * Copyright 2014 yeikos - MIT license
	 * https://raw.github.com/yeikos/js.merge/master/LICENSE
	 */

	;(function(isNode) {

		/**
		 * Merge one or more objects 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		var Public = function(clone) {

			return merge(clone === true, false, arguments);

		}, publicName = 'merge';

		/**
		 * Merge two or more objects recursively 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		Public.recursive = function(clone) {

			return merge(clone === true, true, arguments);

		};

		/**
		 * Clone the input removing any reference
		 * @param mixed input
		 * @return mixed
		 */

		Public.clone = function(input) {

			var output = input,
				type = typeOf(input),
				index, size;

			if (type === 'array') {

				output = [];
				size = input.length;

				for (index=0;index<size;++index)

					output[index] = Public.clone(input[index]);

			} else if (type === 'object') {

				output = {};

				for (index in input)

					output[index] = Public.clone(input[index]);

			}

			return output;

		};

		/**
		 * Merge two objects recursively
		 * @param mixed input
		 * @param mixed extend
		 * @return mixed
		 */

		function merge_recursive(base, extend) {

			if (typeOf(base) !== 'object')

				return extend;

			for (var key in extend) {

				if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

					base[key] = merge_recursive(base[key], extend[key]);

				} else {

					base[key] = extend[key];

				}

			}

			return base;

		}

		/**
		 * Merge two or more objects
		 * @param bool clone
		 * @param bool recursive
		 * @param array argv
		 * @return object
		 */

		function merge(clone, recursive, argv) {

			var result = argv[0],
				size = argv.length;

			if (clone || typeOf(result) !== 'object')

				result = {};

			for (var index=0;index<size;++index) {

				var item = argv[index],

					type = typeOf(item);

				if (type !== 'object') continue;

				for (var key in item) {

					var sitem = clone ? Public.clone(item[key]) : item[key];

					if (recursive) {

						result[key] = merge_recursive(result[key], sitem);

					} else {

						result[key] = sitem;

					}

				}

			}

			return result;

		}

		/**
		 * Get type of variable
		 * @param mixed input
		 * @return string
		 *
		 * @see http://jsperf.com/typeofvar
		 */

		function typeOf(input) {

			return ({}).toString.call(input).slice(8, -1).toLowerCase();

		}

		if (isNode) {

			module.exports = Public;

		} else {

			window[publicName] = Public;

		}

	})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(65)(module)))

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 66 */
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

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	var _events = __webpack_require__(10);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var isMobile = /android|iphone|ipod|ipad|windows phone/i.test(navigator.userAgent);

	var DEFAULT_SETTINGS = {
	    lang: 'en-US',
	    rate: 0.8, // 0.1 to 10
	    browserSpecific: {
	        volume: 1, // 0 to 1
	        voice: 2,
	        voiceURI: 'native'
	    }
	};

	var SpeechSynthesisService = function () {
	    function SpeechSynthesisService() {
	        _classCallCheck(this, SpeechSynthesisService);
	    }

	    _createClass(SpeechSynthesisService, null, [{
	        key: 'init',
	        value: function init() {
	            if (!this.isBrowserSupported()) return;
	            if ('addEventListener' in window.speechSynthesis) window.speechSynthesis.addEventListener('voiceschanged', function () {
	                var voices = window.speechSynthesis.getVoices();
	                if (voices.length > 0) {
	                    var voiceNumber = voices.indexOf(voices.filter(function (voice) {
	                        return voice.lang === 'en_US' || voice.lang === 'en-US';
	                    })[0]);
	                    if (voiceNumber > -1) {
	                        DEFAULT_SETTINGS.browserSpecific.voice = voiceNumber;
	                    } else {
	                        DEFAULT_SETTINGS.browserSpecific.voice = voices.indexOf(voices.filter(function (voice) {
	                            return voice.lang.indexOf('en') > -1;
	                        })[0]);
	                    }
	                }
	            });

	            // array to store utterance for workaround Chrome bug
	            this.utterances = [];

	            this._loadVoices = new Promise(function (resolve) {
	                function resolveVoicesLoading() {
	                    window.speechSynthesis.onvoiceschanged = null;
	                    var voices = window.speechSynthesis.getVoices();
	                    resolve(voices);
	                }

	                window.speechSynthesis.onvoiceschanged = resolveVoicesLoading;
	                if (window.speechSynthesis.getVoices().length) {
	                    resolveVoicesLoading();
	                }
	            });
	        }

	        //todo: remove this functionality when bug will be fixed in Chrome (See chromium bug tracker: https://code.google.com/p/chromium/issues/detail?id=509488)
	        /**
	         * Store utterance to avoid end event Chrome bug.
	         * @param {SpeechSynthesisUtterance} utterance
	         */

	    }, {
	        key: 'storeUtterance',
	        value: function storeUtterance(utterance) {
	            if (!this.utterances) this.utterances = [];
	            this.utterances.push(utterance);
	        }

	        /**
	         * Remove all utterances before current
	         * @param {SpeechSynthesisUtterance} utterance
	         */

	    }, {
	        key: 'removeUtterance',
	        value: function removeUtterance(utterance) {
	            if (!this.utterances) return;
	            // if is undefined -> remove all
	            if (typeof utterance === 'undefined' && this.utterances.length) {
	                utterance = this.utterances[this.utterances.length - 1];
	            }
	            for (var i = 0; i < this.utterances.length; i++) {
	                if (utterance == this.utterances[i]) {
	                    this.utterances.splice(0, i + 1);
	                }
	            }
	        }

	        /**
	         * Returns promise which pass voices list as the fulfillment value.
	         * This promise defines in a {@link SpeechSynthesisService#init|init()} method.
	         * @returns {Promise}
	         */

	    }, {
	        key: 'loadVoices',
	        value: function loadVoices() {
	            return this._loadVoices;
	        }

	        /**
	         * Returns true if Web Speech API is Supported
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isBrowserSupported',
	        value: function isBrowserSupported() {
	            return 'speechSynthesis' in window;
	        }

	        /**
	         * Synthesizes speech and sounds. Returns promise which resolves when the last part has completed.
	         * @param {string} text
	         * @param {object} [settings]
	         * @returns {Promise}
	         */

	    }, {
	        key: 'synthesize',
	        value: function synthesize(text, settings) {
	            var thisClass = this;
	            settings = (0, _merge2.default)(true, {}, DEFAULT_SETTINGS, settings);
	            var useBrowser = this.isBrowserSupported();

	            this.isPlaying = true;

	            thisClass.emit(thisClass.EVENTS.SPEAK, text);
	            if (useBrowser) {
	                return this.synthesizeWithBrowser(text, settings);
	            } else {
	                return this.synthesizeWithServer(text, settings);
	            }
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            var thisClass = this;
	            //todo: check browser or server speaking
	            window.speechSynthesis.cancel();
	            thisClass.isPlaying = false;
	            thisClass.emit(thisClass.EVENTS.STOP);
	        }
	    }, {
	        key: 'skip',
	        value: function skip() {
	            var thisClass = this;
	            //todo: check browser or server speaking
	            thisClass.isSkipped = true;
	            thisClass.emit(thisClass.EVENTS.SKIP);
	            thisClass.stop();
	        }
	    }, {
	        key: 'synthesizeWithBrowser',
	        value: function synthesizeWithBrowser(text, settings) {
	            var _this = this;

	            var thisClass = this;
	            // todo: remove this functionality when bug will be fixed in Chrome (See chromium bug tracker: https://code.google.com/p/chromium/issues/detail?id=335907 and https://code.google.com/p/chromium/issues/detail?id=369472)
	            // split text to fix long speech bug in Chrome
	            var parts = this.processSpeechText(text);
	            var voices;
	            var lastPromise = this.loadVoices().then(function (v) {
	                voices = v;
	            });
	            var promisesChain = [lastPromise];

	            for (var i = 0; i < parts.length; i++) {
	                var newChainElement = generateChainFunction(parts[i]);
	                addToChain(newChainElement);
	            }

	            addToChain(function () {
	                _this.isPlaying = false;
	                _this.isSkipped = false;
	            });

	            return lastPromise;

	            /**
	             *
	             * @param {Array.<string>} texts
	             * @returns {Function}
	             */
	            function generateSpeechChainFunction(texts) {
	                return function () {
	                    var remaningCount = texts.length;
	                    return new Promise(function (resolve, reject) {
	                        if (thisClass.isSkipped) {
	                            resolve();
	                            return;
	                        }
	                        window.speechSynthesis.cancel();

	                        for (var i = 0; i < texts.length; i++) {
	                            var utterance = new SpeechSynthesisUtterance();
	                            utterance.text = texts[i];
	                            utterance.voice = voices[settings.browserSpecific.voice];
	                            /*let enVoices = voices.filter(voice => voice.lang.indexOf('en') > -1);
	                            if(enVoices.length > 0){
	                                let enUSVoices = enVoices.filter(voice => voice.lang === 'en-US');
	                                if(enUSVoices.length > 0){
	                                    alert(enUSVoices[0].lang);
	                                    utterance.voice = enUSVoices[0];
	                                } else {
	                                    alert(enVoices[0].lang);
	                                    utterance.voice = enVoices[0];
	                                }
	                            } else {
	                                alert(`Unfortunately there is not available english voices in your browser. Available langs: ${voices.map(voice => voice.lang)}`);
	                            }*/

	                            utterance.lang = settings.lang;
	                            utterance.rate = settings.rate;

	                            utterance.volume = settings.browserSpecific.volume;
	                            utterance.voiceURI = settings.browserSpecific.voiceURI;
	                            utterance.addEventListener('end', function (e) {
	                                remaningCount--;

	                                // remove all utterance before current from array to clear memory
	                                thisClass.removeUtterance(e.utterance);
	                                if (thisClass.isPlaying && remaningCount <= 0 || thisClass.isSkipped) {
	                                    resolve();
	                                } else if (!thisClass.isPlaying) {
	                                    // when force stopped before end
	                                    reject(new Error('Speaking was stoped.'));
	                                }
	                            });
	                            //msg.pitch = 0; //0 to 2

	                            //todo: Utterance End event is not working without storing globally. See chromium bug tracker: https://code.google.com/p/chromium/issues/detail?id=509488
	                            //todo: make test for this and normal behavior to know when it will be fixed in Chrome
	                            thisClass.storeUtterance(utterance);
	                            // push utterance to speech stack
	                            window.speechSynthesis.speak(utterance);
	                        }
	                    });
	                };
	            }

	            /**
	             *
	             * @param {number|string} time - time of pause in seconds
	             * @returns {Function}
	             */
	            function generatePauseChainFunction(time) {
	                time = Math.round(parseFloat(time) * 1000);
	                return function () {
	                    return new Promise(function (resolve, reject) {
	                        if (thisClass.isSkipped || isNaN(time)) {
	                            resolve();
	                            return;
	                        }
	                        thisClass.on(thisClass.EVENTS.STOP, function () {
	                            if (thisClass.isSkipped) {
	                                resolve();
	                            } else {
	                                // when force stopped
	                                reject(new Error('Speaking was stoped.'));
	                            }
	                        });

	                        setTimeout(function () {
	                            resolve();
	                        }, time);
	                    });
	                };
	            }

	            /**
	             *
	             * @param {string} soundName - sound file name
	             * @returns {Function}
	             */
	            function generateSoundChainFunction(soundName) {
	                return function () {
	                    return new Promise(function (resolve, reject) {
	                        if (thisClass.isSkipped || !soundName || isMobile) {
	                            resolve();
	                            return;
	                        }
	                        try {
	                            var soundSrc = __webpack_require__(67)("./" + soundName + '.mp3');
	                            var sound = new Audio(soundSrc);
	                            thisClass.on(thisClass.EVENTS.STOP, function () {
	                                sound.pause();
	                                if (thisClass.isSkipped) {
	                                    resolve();
	                                } else {
	                                    // when force stopped
	                                    reject(new Error('Speaking was stoped.'));
	                                }
	                            });
	                            sound.addEventListener('ended', function () {
	                                resolve();
	                            });
	                            sound.play();
	                        }
	                        //can not find file
	                        catch (e) {
	                            if (console.warn) console.warn('Warning: Can not find sound: "' + soundName + '.mp3" or some other Error has occurred. It will not reproduced.');
	                            resolve();
	                        }
	                    });
	                };
	            }

	            /**
	             *
	             * @param {SynthesisPart} part
	             * @returns {Function}
	             */

	            function generateChainFunction(part) {
	                var chainFunc;
	                switch (part.type) {
	                    case thisClass.PART_TYPES.SPEECH:
	                        chainFunc = generateSpeechChainFunction(part.value);
	                        break;
	                    case thisClass.PART_TYPES.PAUSE:
	                        chainFunc = generatePauseChainFunction(part.value);
	                        break;
	                    case thisClass.PART_TYPES.SOUND:
	                        chainFunc = generateSoundChainFunction(part.value);
	                        break;
	                    default:
	                        if (console.warn) console.warn('Warning: Unknown speech part type: "' + part.type + '". It will not reproduced.');
	                        break;
	                }
	                return chainFunc;
	            }

	            function addToChain(element) {
	                if (!element) return;
	                lastPromise = lastPromise.then(element);
	                promisesChain.push(lastPromise);
	            }
	        }
	    }, {
	        key: 'synthesizeWithServer',
	        value: function synthesizeWithServer(text, settings) {
	            //todo:
	            console.log('Server Synthesizer have not realized yet...');
	        }

	        /**
	         * @typedef {Object} SynthesisPart
	         * @property {string} type - can be 'speech' or 'sound' or 'pause'
	         * @property {string|array.<string>} value - can be 'speech' or 'sound' or 'pause'
	         */

	        /**
	         * Replaces template expressions (example: `${pause 3}`) with objects and
	         * splits text to smaller texts no longer than maxLength argument.
	         * @param text
	         * @param maxLength
	         * @param splitCharacters
	         * @returns {Array.<SynthesisPart>}
	         */

	    }, {
	        key: 'processSpeechText',
	        value: function processSpeechText(text, maxLength, splitCharacters) {
	            var thisClass = this;
	            var injectionRegExp = /(\$\{[\w\. ]*\})/gi;
	            var processed = text.split(injectionRegExp);
	            processed = processed.map(function (a) {
	                a = a.trim();
	                if (injectionRegExp.test(a)) {
	                    a = a.substring(2, a.length - 1);
	                    a = a.split(' ');
	                    a = {
	                        type: a[0],
	                        value: a[1]
	                    };
	                }
	                return a;
	            });

	            for (var i = processed.length - 1; i >= 0; i--) {
	                var a = processed[i];
	                if (typeof a === 'string') {
	                    var splittedTexts = this.splitSpeech(a, maxLength, splitCharacters);

	                    if (splittedTexts.length) {
	                        var speechPart = {
	                            type: thisClass.PART_TYPES.SPEECH,
	                            value: splittedTexts
	                        };
	                        processed.splice(i, 1, speechPart);
	                    } else {
	                        processed.splice(i, 1);
	                    }
	                }
	            }

	            return processed;
	        }

	        /**
	         * Splits text to smaller texts no longer than maxLength argument.
	         * @param {string} text
	         * @param {number} maxLength
	         * @param {Array.<string>} splitCharacters
	         * @returns {Array.<string>}
	         */

	    }, {
	        key: 'splitSpeech',
	        value: function splitSpeech(text) {
	            var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 160;
	            var splitCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['.', '!', '?', ',', ';', ':', '-', ' '];

	            text = text.trim();

	            if (!text.length) return [];else if (text.length < maxLength) return [text];else {
	                var maxLengthSubstr = text.substring(0, maxLength);
	                for (var i = 0; i < splitCharacters.length; i++) {
	                    var char = splitCharacters[i];
	                    var charIndex = maxLengthSubstr.lastIndexOf(char);
	                    if (charIndex !== -1) {
	                        var beforeCharSubstr = text.substring(0, charIndex + 1).trim();
	                        var afterCharSubstr = text.substring(charIndex + 1);
	                        return [beforeCharSubstr].concat(this.splitSpeech(afterCharSubstr, maxLength, splitCharacters));
	                    }
	                }
	            }

	            //todo: handle when none of the split characters is not found. Throw error?
	        }
	    }, {
	        key: 'EVENTS',
	        get: function get() {
	            return {
	                SKIP: 'skip',
	                SPEAK: 'speak',
	                STOP: 'stop'
	            };
	        }
	    }, {
	        key: 'PART_TYPES',
	        get: function get() {
	            return {
	                SPEECH: 'speech',
	                PAUSE: 'pause',
	                SOUND: 'sound'
	            };
	        }
	    }, {
	        key: 'emitter',
	        get: function get() {
	            if (!this._emitter) {
	                this._emitter = new _events2.default();
	            }
	            return this._emitter;
	        }

	        /**
	         *
	         * @returns {function}
	         */

	    }, {
	        key: 'emit',
	        get: function get() {
	            var thisClass = this;
	            return thisClass.emitter.emit;
	        }

	        /**
	         *
	         * @returns {function}
	         */

	    }, {
	        key: 'on',
	        get: function get() {
	            var thisClass = this;
	            return thisClass.emitter.on;
	        }
	    }]);

	    return SpeechSynthesisService;
	}();

	SpeechSynthesisService.init();

	exports.default = SpeechSynthesisService;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./long_beep.mp3": 68,
		"./short_beep.mp3": 69
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
	webpackContext.id = 67;


/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "data:audio/mpeg;base64,SUQzAwAAAAAwSFRQRTEAAAA5AAAB//5TAG8AdQBuAGQASgBhAHkALgBjAG8AbQAgAFMAbwB1AG4AZAAgAEUAZgBmAGUAYwB0AHMAAABQUklWAAAP+wAAWE1QADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMi1jMDAzIDYxLjE0MTk4NywgMjAxMS8wMi8yMi0xMjowMzo1MSAgICAgICAgIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcERNPSJodHRwOi8vbnMuYWRvYmUuY29tL3htcC8xLjAvRHluYW1pY01lZGlhLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bXBETTphcnRpc3Q9IlNvdW5kSmF5LmNvbSBTb3VuZCBFZmZlY3RzIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDE2LTA1LTEzVDIwOjIyOjEzKzAzOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAxNi0wNS0xM1QyMDoyMjoxMyswMzowMCIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTk0QjczQjJGMTlFNjExOThCMEQ2OERCNTlGQzgzNSIKICAgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTk0QjczQjJGMTlFNjExOThCMEQ2OERCNTlGQzgzNSIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjI5OTRCNzNCMkYxOUU2MTE5OEIwRDY4REI1OUZDODM1IgogICBkYzpmb3JtYXQ9ImF1ZGlvL21wZWciPgogICA8eG1wRE06VHJhY2tzPgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaQogICAgICB4bXBETTp0cmFja05hbWU9IkN1ZVBvaW50IE1hcmtlcnMiCiAgICAgIHhtcERNOnRyYWNrVHlwZT0iQ3VlIgogICAgICB4bXBETTpmcmFtZVJhdGU9ImYyNTQwMTYwMDAwMDAiLz4KICAgIDwvcmRmOkJhZz4KICAgPC94bXBETTpUcmFja3M+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI5OTRCNzNCMkYxOUU2MTE5OEIwRDY4REI1OUZDODM1IgogICAgICBzdEV2dDp3aGVuPSIyMDE2LTA1LTEzVDIwOjIyOjEzKzAzOjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBdWRpdGlvbiA0LjAuMC4xODE1IChYTVBEb2NPcHNUZW1wb3JhbDoyMDA4LjExLjA1KSIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iL21ldGFkYXRhIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBOTRCNzNCMkYxOUU2MTE5OEIwRDY4REI1OUZDODM1IgogICAgICBzdEV2dDp3aGVuPSIyMDE2LTA1LTEzVDIwOjIyOjEzKzAzOjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBdWRpdGlvbiA0LjAuMC4xODE1IChYTVBEb2NPcHNUZW1wb3JhbDoyMDA4LjExLjA1KSIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDx4bXBNTTpEZXJpdmVkRnJvbQogICAgc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOTk0QjczQjJGMTlFNjExOThCMEQ2OERCNTlGQzgzNSIKICAgIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mjk5NEI3M0IyRjE5RTYxMTk4QjBENjhEQjU5RkM4MzUiCiAgICBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Mjk5NEI3M0IyRjE5RTYxMTk4QjBENjhEQjU5RkM4MzUiLz4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFRBRwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFNvdW5kSmF5LmNvbSBTb3VuZCBFZmZlY3RzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQwAAADNxM/SwkZwhDAaMQ9gwF6lVVVVrHpmJDFVA1N40wxxFQQEiYrJ0iBBZAxaMXAARQARQ7xEohI7QBEZHwGREdoREZHwGREfgjBk+B5kfhmHT4HmT8dh0+B0yPwyJ0+B0yfjtdfJ7p+OwzeIzMH4OHZvEZuH4OHNokkggCNgKWWFJTYvDtf6botASxAABnMgAA77wG+wASnD87am6P//qJBhMhAuVhPNnFhnDjjXpjKRSaddFUxKITrA2HtPtvGDQnBiFDYy5bUgYY4UOBCE5vIhwmRoigQAkDKE5AIAMwaNapNGVDhaehchjjK2np6GJDgoOzd0GIRFd7T24GBBgoG2drDqNzQlqxtwLZqDtPiD+P5Dky5bOJA+673XeBQBTSIqAKaO5LKTDDDD//////////////8MMMZW5EUj7O3fl+rF1/IcsXbeqSxuMSzmeeqSxuUSzmf4UljdJY5+8+6w1jnUpLG888MMP/////////////////DD869PnzWHN18+4SuN5pDLxw8PDxweAUwjsxNDMxEiFJOS1t//uQwIUAA4g7GwwVhsOAtKYysaABJpNtVyQDDYg0FoZkghwbPXBiqmxsEHv7thcpYuBnuegdhV4FayBbvhBgwNDhgDHw+BCDAMAg8fYuYh4zZ9gvgHFB+YngoFZJZX1COhTR1CthSKji1GbbGYWzAFBoNthJRwnwHB8HKIZcTgV0AywAceiPFtOml79fW/faxTIOQMXILnKZME250eDqDr5QGistdjEwMzFIzKI558k/egdKCJJnO1aA7TBjjI/00Uy4TBNlpfqqWbWY4dbautRauonVYs//8V3OqZUTBN+3pbhXS/tJASmZmZNWVr5inbTVGKLaSURA8xMNTLWTOENIeBV+O0UXl1yX/tr0++sMcuy/F9/ytUtNJbO5Flfv7rf9XurbxCEDGUAsmFL7WFA02v2/uJ487z8L923yvnyjs9m/kmH7y+DcefKnSMIgoiBOrlaGk74bnfsyqK465jjjjv//HLH//K7//9M21Nq47QyFk+ZbLqlRVNtJcoHMxxGqApdjZ/usOfr///3zD//9w93K/1hSg97CdxzavS8///uQwMyAGjGbV/magANBNGp/n8AEFO5UHctSR+p0aGVVQyE5IiySn5OD+FsHRbSB0T93lItycQEqrMNXSXaMOidOYAmHgNe7G/DtNnMfi2t/B5c7suxj+8YNvW5Rvs52DbXzWRjspgsGBvXopYgJEC6cGmbMW1mLUXWibInESZNDMnzRaBWHUSzqJ1hqn1FlQvQayxZ5gYlsrA0AMYE/QHPUXj2nvQY83WbvymPb0VBAIC1hZjQETIvHQ5TEhK6JhURhFDfrN29P1Esy2Yh4XHPoVD7GGiimohgWsn6ywLlaGREQiE3GSySkKI2VowhaYjYldMLnZOLpLK/fSVwcWnMOEIOhhXFgMbetL1MIlnPfp//1P9u5VJu3nS54f3XdVP/8z5mHwAmmKZkTqIvxmj5Mku5DFzDOFY3HlFZLJmxOqH0xKE5OG6y6S7OiQYDOIgcOKg/F0sg2+VTMPeTH0OcxZHmR6Ek8+yaqTLQZSMa5EqkUATDBQymgT8gIqRkIXRKIfAmR5F5womRts5Mm+et2UQfRNQ8ozxucsL80YUOX//uQwMGAGEmhV+f2jbMpNGq8/tG2HHKDpDbJQPYJwJt2ZVExTfFVxxvFuqOQ89ryBqvtPVzgYyo4RFkTiwEJgNLBn4ZogABrbtU6+H6p4z+35p8ZfqZj/Klr9bufhc7haov//w/90jbm43Yyn7URUhjJZ75JzPHf538e/q1qd59nG5Z/5/4Int1Lb6GvQkBL3TlEsCg1FBsOcuOZeiONereu2P+l5O4/vepD+7WTdXU3r+MyKzspj9ogUeDSM+M/7Qxb9Rbn/+qOSWvzx/v/z9wZz9WWYiwHJrmmN627PcYmqH93LdA9skcbJCkhUTboTXbseUdcLMU0EdKUbCWqBzks6UqAgNMU4I/Sgy+T+vNi1uBrVzlSJxeI40l6BOa7rWqDu7mWMEwj7v/f/9V3dMYgCD8Z5YzgaSeLKE+mtz8z11Ilg3nTyBYKrsfkpzg/gVSlFRMOfC/7HS6qdWifMU1nTfuX31zevOiotSRE3gwc5kXExKQ8koRdJh9OcJN5FTI05sWGo5rvQFwtuOgFBLGTxFSIrH0V0Q4ZbNFsiMuT//uQwMEAGQ2jTef3LaLwNKm0/lG6n7VAusciITjJQJUYm55FmXiMmHHqZmuhCfXLImwu1AyvTE4SE92jFCZPxbdXCvlZkcvp5ypKHHpWyTkTzu6muW9ZwXvG7/2f/dxowOPkJryxhrCd0C6SEwQSKGXakJyzuymLBUZyvLx6pi8BsEHBFQi5qeAgQeL3LjlB1mJbWRDokwrzmemA2VT6wapB4T4+6QNQilCdFLLNh1k8RQgyEc4+amlaJNo1WLGjODSdnNg/wgu5x2DOy0mkTSAdcO2RpXcwHJPvvY4yQpIVG23odCcJwPGOe0XqxxkP6GWFPiH7EPiABGJZWfdLyA91H7pG5uresbomK2Z6A8LMbi01RWKtetBOFDb5BNm9HXpalivgZ0iRJiqWkhRzRA9LBLIm+kyY05YJ5ywTklXJQzPHS8oj9ZmOQBjUwe4bFQwMgEjxAUl3eRZ0s69fUQ39qcsFpqCwhFhcVJaZ8bxPE6QViiHJjKqIabrWdZrldvky9VZo1psGnOp3DJQ+nUIKDLi4NyAcmLu5h1ExW7lZ//uQwMSAGF2lU6fybfL3NCn0/lGyJ1mLMrDOJ+0ndLtXupm/ZqJQwqBUMRkIApLpigaRAALGobqPu6socKxm53z8W1TvnIpic1BG4AbtYqwJUmaXCPvMdFMMaAEKiKmRfPnRRjMwPMZFWaUGTFnDSclCuZKJmUEh0DYLRiWlEqV51IfIC60gqjZiJAOBHx8Gr26a0PpF7/zj7LCJcPqkWFIDHSiLjMymJ8ItJQ2NGMz5vMxpIJ3UofCWuU7saiVitlmBeUGogoNJAXOTRAAxMVQ20+Zl8R8TOvv23hkMU37elmekAG6+NuCrDzwunUd6+VClrlNZWKWqMSOk+ERkDWtUuXaTGb58g1ZvblcPbtS3tvPKnwlFLyvY5VVLGkXA+cDNKzBEk1Ik4gpRoYFrqXLqVRes6ziBYIi8i6y6SVcngDkAaex4mUQbTHsbpKm61EwTjIHUehYnXQ9N2Y4Se0IR5PpOgZnjQqkeRdhcxxzxwyPnkknYtnjya02Iet1MZk9UpEogoAMUkDdEMowxpUMyQLo9oJmQ6SAAiHZFMiE///uQwMoAGYmjTef2jaMEtGq8/lG01hZOBHyUHaXNsZmmGrYKuhQsuHBEdflPswuFQ4aAsiAB78b8OxiOxjvz+qti7N6y5PdnO3Z3WVFqS7+hzqFAzGiBqxhXNTA1PjnmJvPJl9jutzp5CeZbXUcQRWm5QziZMARIDYVYsCyCJmTk0aF9RdamZa0VMkk9aZug7IlghU1swTJjSM6JuOWRYwWOeRUny4m7qSSOJHziSRkbUTM4g6lR41mwvBBE8ZoOTA5qjFA4McRAdpkiaGR/+m9uYhiMF36WTcbSqIYPWa7W3JeU5luCk4BXJBupB7PAqC5hZExwwYJeB/5inZDEIHl+OTQfjz29bLAuMzCrjSrNxvtTT85cscpXnEVJlAMJAHxRVF4i8jxOUzZRQZ2ToG5kalhZaMSPKzE6dNCIMkW5PFpM6odIGHYhvpwtH0AWBD0YGRkVCLVVl019VBXWpuUhhbODQyIHPKK6YtBPEoMYYkNEJCikY21PUaotqWXVUZwh9c2FqBYuVjE2PjWOsbJEaIzLRWeZjMDWyVlFuMlk//uQwMkAGCmjWcf2jbMltCm8/tG0g4EJhmbSMuHOycWHSkglqjE/L9FsjAAKTCmnjdE6QCADKYYut1ex/n5tYK6xgib98XkhtWaBs19ztSM3sLXxyc+ulI/ROhi8DtoRBxMkGLBKhtBdLJVRIES0vVEmSRSG2yQtkiRLrFJEgMeQjrGswocbKiHk4LnA4g0HKx4LQtI7wUUEOGqT5oQIcxaTf6RX9ZVetEsjCXZYNAYb2gX0kxEEkhANExETNnXXU3Uh9L5FuiR4dMmtSyUKxjpBIGLe65mLPX9TQqsqEQnJCWCU/JMrgzDU0uk3lHoDqJWl/TGdFrSpgMApiCZh1aHo8CTJcr1PK7kk5isWKdaFexkNl9ubjOcxGr3YTxskh+ZzDU4cgBkEhOplpzAgKimVGTzr2dAd08RE6TTnSNLQvR2VFGP7LRTIwB6QcCZkgXBAI0JVTybcf09P60kepauSpWeywvEFiaB0wUKSGgdIIo6TAt6CaKx9jofyfbzF/JFqBqOkN8RWjI4T+mgdTDPRnF6JBi2Av0tiRcsJZJXN//uQwMmAGZWjT6f2jbLyNGq8/tG2Q1V0P3Fk3FIylZTtU6NTUfeOdLaGH56nSokCQJtRp5xicXlEN8wZPO1YYzlD5QE8U5pTq3qU2a0v+mvfvfTMBBMABOYIGp0piapEySy2SoaZogN5jiZmRY/HyslSItJKPkrqYvDkgZV2CgE+PssFYBAM2RDYGKA5koj3KajpsqX7KpvLa6CiVKlTLFIhRWgcMEA9sYJ8WemcDIBEigfZAdhFmryprVMvcidSbjoBwk8dabh2lF8iEM7FA6zgo5JzRuMotxgIEHZe0eH4XvypvSncZ1A5lYnhC35QQkgUGCdXmtJ3BUBXkicYeGV0UYv5NBt6hnscp78Sg7Vzn0W9ZYx/P/0dAzG8B9cVzhXQG6QBSyWkZn9A1Mi7kWRKCSiMclT06nLhbZJAi4HZYaGTg+DEphZMbEYOlBIWGoekxusYjQdiQc2NZ5NZxpnH8OwtVISAHamRqoO+iwnhShHbEoVFmRn9iHNnq/WYZ82FOELpHWj7GFFDkisOqLelROCUEpo3WUFLCo23Utiq//uQwMqAGQ2jVaf2jbMGtGn0/s22EPKbbelqGah6uO5uNoaAFrzXRAAJgWFhihW54seBb2emdLIt/Pc9d1eaiepVAlvc7nuxdospjLUsn//S0zAZYBTSQiZsmahpjIFWWGXaZFdFJ1kygXaaDkqVZ00jUNlqOi8ArMFmF8ZcqE6AYFNykJq5ZIOUjjouyjHNnNWpWLVaTmgqKlUggCBQ0yaJ0W0aRdFllpxNjk0SKCiLK6yqWT1PMNlqGRrZR8KFj5iaRdiZoDmk+oZ0UZB1JDURt0kiIbkJRJS6MGMYI9CpTK3UvqWqLuuFIyFuzsuqrEYkFID3CLMLvdQ4NCu1e4yizuf5XgbVfmt6ryG9WwwaNczlDzHQTEvA3IMdxdJxYlgeqaFjTTOGFaRb66j9a50851BMaxaopDkgaFmCwlIdhkfAwIxRDFOajqL5xp9ajVq5u2pA3z0fBBUFOkEiQMFokrMQiEIAWRZBqgMueKpLM46UEHrNSy9HM96Qo6ViqIiI6TOlWNUO25KDvQD2Bc6LskXiIro3ISE4yUCCXMeo//uQwMuAGQGjTaf2jZMPtGp0/lG2yBgETMk58mclpjFP4eSa7+S+MBUAmKJAf4K4kAHLlltmDNrdTlSU8m57OjeSejNjKxT7vZ1/+Yw5ceWO4XwA1S4ZkpEIeFDASJpEobzhWSKDLMyXvVc2oHZZNZZVSLVNAh4GSLhtZoVi+mBgAJgamSZ8jTUoHpXKyiYvkwea6JeqRWLoYaVNwgFBp0wMkhtDROC4UDMiii6eyOcw1uz1ZhtWQDZEmQcENVno/iZx+N0A/w7HQsPsxsskYIUsKibawSWCbBP8CDtkc7H6kF2VAz1GZDFkviAGyrCwwWqHZhMeu3WLT+spNB87e3TsQbq+jTbFWrMapJRV3SNkvVYI/5v/zqLDkAT1sKdhnwRBj7m07OptKaTKYzYutSKElS0xKm0jzXWSgTSE0suomoNjTJJOgcc2PJpmiZJ61FFPzzT8pDFXWoIDgqSh9InAaiTEmg+6RoO8wICV8dZZMj1BAjEqTKL+9QytR8+JYFzKkS1F2GnR8GaBXEkJ5SKiqX/2oLK3GSF+EJEBKa1i//uQwMuAGFmjT6fyjbMkNKl0/tG61jpHfQ93Kc6tOtPp2XKYECAGYpkR/Usl+muy6yovI8qHlncjuzutP1elVnDC52V9/ud+drRz/qfvWbqGEwhb+RpC9EeIlnQZR3RPKsdSTZkT7FkqIo2GqbqY2IqBviGUPkWMikAd00J1aCRoxHoqksdIpasgxe6i/WqmKklRUEoEQWTZjFtGEYkOuREpE6QuTCzdrm5ePV0yIZjifnW5eEZAimXi6VEQ64Om5XOlMJnDwkURoinHf2pv1tjRcsJZJTMUhcQqybK82Weg/UcuUqp0SiAo+1p8x4ADEcRzskDigG3Nhc4g3E6li3KZZnnJdv7K23hchicbj2EQqZbuPrnO18z1mA4gAso8GZxRVDCqyNNVIGhqeecPKXKZsV2aSs6NCohEScJdB1EXAyiUFgZODkmbgBKhz0lLjPzE/UeUTvUSKPnNpmW10TgQFguxiZc6EQQ7yiJ9pESEJzAiy6bFZp0uEb6JJ5ysltmH2Fyk1HoloUDpposF4jtHPdk0zwCaSRpFuMlgFGgX//uQwMuAGImlT4fybfMftGq0/tG2MSA7DQeeFMxOfU0dNDQEafCW7gwLGIduf/WQKBbkO/SI7xuMS+9lCaC/Tc5SX4jB3ML/18Nc59/kz/2O/qbaKBke+d6QkRFOGiXjpo4+i7L2iUhcAw4+TU+5Ioko5GjmlosIylpLKQQoiBFUmmMwCgI7TZC1ST1NS6it/vOvUmoCpYKHFlIvFscY8kWHUYIh8BDj4+UTBjBFGWSIpP0SRfy+9bC9DbCq5rF6HLInCcLgeqOsTkyB0UOf6brrYUHdUo24Lmno4t4c49YsaQcSEHycZ+Kkkb20FKKgkw6GzG9bNSHgDCB/VjwUnAsI2Vp7sNNXWzB7WvxFv1yOqqdnjNGBv8y94IFd+SSB/5JDkQxzklJXv0iaB0GTzkRl33okz72ofoJynrXqetYhiy/81LInalF2WSutOw/alk3PvHKpZdl7wBYJcMszlbzrDQY6cufylhyvTSyvapLtunuSyvnSb7Uv2K9+k5H7m7ErfdJZFmgnZXlE8nYicfjFLnqfqdp7lXOpZpK8/Uxt//uQwMsAGKGlU6fyjfO5s+p0/mW01L1veeGEowxv134ZHrWH5ZXoMoaeJbm8r1URa/KA3kRIJNSzOKgAQIhOmBEeBcSV5imQRJOLbguQBA1SAl04FzOXNo9GxGpL1/2CulC1SvQzZlL+NdeKD3JiEDPrLIeiUnf2Yh6IzkPTcupcKa7ZrSqhwmo+10aANAVJgjF5BJKwnHLhkhqiqsJyVQZJ1JysPkqkybPWqHyVSdPCERiSdF1QJRdH0Gx2TSq4TkNSdLz1M4ZIak6fPUz5knUnT5zy1bCe4mJ12VrCk6Ox1KysxgjXXdajWwPLbnrT57BGtYdTKltPZYXn2wxPLWCchqjFIWjlYfMolqbzr9o8BCb///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwLcAH2GlV4ZljeAAACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwP+AMYABLgAAACAAACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwP+AMYABLgAAACAAACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwP+AMYABLgAAACAAACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwP+AMYABLgAAACAAACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwP+AMYABLgAAACAAACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwP+AMYABLgAAACAAACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwP+AMYABLgAAACAAACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwP+AMYABLgAAACAAACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQwP+AMYABLgAAACAAACXAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "data:audio/mpeg;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHMA//uSwAAAAAABLBQAAAL6QWkrN1ADDCBAACAQBAQECQD//2c7OmpoX/btmzIxt4R/7tmdKRqBVldEDICeA2szOT5E0ANLDoERvAwYDvXUwGPgUBhQVAiIAGFQb9toDBQAwSGwMLgECIPAUE/7v4YoAwyHQMSh8BgNl0r//5ofWmt///4swTaBg0CgSAgNoClQMSAwCgBAwiA//t9/GRFBlcXORYXAN8ZQggBgCACBH////4WYFjpmaRcLZcYggswUoBgEEgYPBf////////+VwfOBAwA7llUiIABQAAAgAAAEBgUARBzKEVmNPo26GUFGinz0RnZcAARtaVqlvTwGDx8BvHbgkEQMtcYIQgBjzkgaETYGFhuAEeRQ5m4ZcMEAsmKArYXE7qZFkXGOGkI5L4yqTIqRZNK45ociBkoKE6brSDUgMNi8mkJqHfAwaMBz11/t23+yEgox4FicKWLheWtJMWkAYIGpvvKwpgAQBJxVki+QFZOmhfJkQWCICACENuqdNB1Ba39WSI1wxkIsPSalHkFsZloPyHLBoEwssSa3Xf/7ksBnABz9nUn5qoACZTMov7FQAGsyLZRDwG7X+vJcfAjUzWVJMUz/DadX/DPVVPTwxgAAYggAShABbnnd5DQOPbj70zVpiaxayfheoOiDfgbrAYWXYHf90BlMZAYvDQUAYhKOIfxmTyebVJ71qsPaSBSPnR4NTPoOShOniyMyQEMSAScgXMjmnkkTJ71ob1q2rei1TUOy0Ss5w4QYIA0HbOG3Pf//3+j8i6LMiQ0CAFFXbU9Xf//+/mJHJOsyLwYXJ1mr16/1AJZ4ZlMAACAAADEFHpoLU2ytFsJ1sql3c1hG7r4LivRJ06AgAMwNgSDQUFJMGgAAOAXR8a+/8op8Ln/Z5+X/z+4/yc+vLe5V+QXz/52DO8uxhuYWBWA9SESgTZOJpmtaG2rbR2u29NqluNQrUjU4EoAfZG1SNfVX/928+3ccDzJEmgCCQc41Szj/V9S/r+o29Qn1qrhQY9Wg/rb/9fzku8RCoAABQAABKjQCK1VNcqoJHKmjjRanrzeKUiQHJyu63xb0wtDo+TRcFFkPAS68UpPuY2f+v/4/+///+5LAbIATtdU/7HqNwlm0aD2O0bDv9q3qS1nq12Z9yUSRRMBjQF4wHfMidi6aVlt2PVI7a6n11d7ashxpscCbQWBa2qP1tnq22q7VatDVj01aygAkcI0TXnHr1tX2/W+qrqmQ03rwUBNXnK7dvTeRh2VkYwAAKAAANmkNuUCQrNCopStlXHuCRUS6Xmb1FJdyyQKCxhEZZ3xiBiIE5ZJ45VZj9nK/39d7n/5////b0Sx1MW7zwd/89STW8J+EAoCwJcYM2OAvmjE5VzayGr+nvpash5arY4EJIBQOJrNaZL1tUtS9v9uqd08Zl2RSIaASHQ402MXko1etvr+632qPbKLI3F1YDQRecybarX+3qq+o+upVkRCAAAgAAAZGbDPFHmW35hRX4JfLKULFfuWuey1yVKB0FwsZRmlgZgIFCHdUjlw/BVq9h3Cxnzv4Y5659JYr7ortvLj4fn/eR6xq5K3oC4vgc9EKDIAQdSBMspPTXT3+m/tOp1oR0qQtBCwCiw3RPTpb+qvtV6mbzJqGMtZSBTAMIhsaBxUyNXV0GV0l//uSwJkAFGnXPex2rcKXuuf9jtG4L9f0z2nQFK1JqQAUDM681f7/Zf1e82WAioiGUwAAMAAAKBrafL7Ku+qidGFD4nVyacggTALkCEoYIANAGBgXCWBiVFyBp/PgBhGCEAMFAMVk+dH2TBoYrm9BHTe8nCjIANs3I8ixWIx9JAjDVNA6IXAeEUDDEBoBQCAuBTqPtesy39Nt61bVKrZRgnRMDwIQGA4EBFC0aIHUG/9/1P/pUBjTdzhgOgBwDBF1qQrb1Nv/v+tfWok07GBcC4En3VljsdIclUMYgIgAAAAAAAAAAAASAeJK1eXElURk3DcGCI9jsylQ8LhANGAxQ48DSKDgORA0gBiAYAwXjYCQG0TUCwHBzEUHUy2WsrkHMi4kpqDJuxmVE5bNC+GOAYPAailFSeFzgYZQCCf1rIiJtAwuASGAkyNqtKt9Zmmo0NE1npbEqCAAZga6aaQ5YDQMiJm+VzQqiugHAgLRxk7b6x6FDBZX75ZUM+BYBydBk7okIKFC+iTM9m1zp8pB4zfVX1uU2H2I2agtPQdZuiWhqv/7ksC6gBV1o0P1iwADaDro+x9gAEEdFvX///mZ/eT/6Dx8wAyYoAUAAAADAEAFAAAAAAPVTzyO6U2P8w8nM8P6bv+PBRjw07pfb/AciANoiwLBCM1LAysBAFCABgMGhMABswkysR0CIHAMAAMBiAo5JOE9XhikQ4LmBQgtKRMlgyJ74xQblBiMCQEEeCOyis1IcTRb/IEKMJ0FbiyRtCUCGmKBskYnP43B0i4xpidRkB2DlmSRsUTE8ZGTl3/juHAOeOaSQzA/ENHPGXE+oqeicUbFExb/5UKhAzhEiIEXIqViCEoQ0i46x2GSTooqeipSRii3//YliLmBPE4RcmSsQQjP//mQ0nLjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LAvgAcldNN2bqASAAAJYOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAA"

/***/ },
/* 70 */
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

	var _BROWSER_RECOGNITION_;

	var _strings = __webpack_require__(71);

	var _strings2 = _interopRequireDefault(_strings);

	var _merge = __webpack_require__(64);

	var _merge2 = _interopRequireDefault(_merge);

	var _controllerUtils = __webpack_require__(73);

	var _controllerUtils2 = _interopRequireDefault(_controllerUtils);

	var _word = __webpack_require__(75);

	var _word2 = _interopRequireDefault(_word);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var BROWSER_RECOGNITION_LANGS = (_BROWSER_RECOGNITION_ = {}, _defineProperty(_BROWSER_RECOGNITION_, _strings2.default.consts.langs.en, 'en-US'), _defineProperty(_BROWSER_RECOGNITION_, _strings2.default.consts.langs.es, 'es-US'), _defineProperty(_BROWSER_RECOGNITION_, _strings2.default.consts.langs.ru, 'ru-RU'), _BROWSER_RECOGNITION_);

	var RECOGNITION_WS_URL = 'wss://speechrecognition.competentum.com:4447/';

	var DEFAULT_SETTINGS = {
	    lang: 'en-US',
	    grammars: [],
	    maxAlternatives: 15,
	    onaudiostart: function onaudiostart() {
	        console.log('recognition: onaudiostart');
	    },
	    onsoundstart: function onsoundstart() {
	        console.log('recognition: onsoundstart');
	    },
	    onspeechstart: function onspeechstart() {
	        console.log('recognition: onspeechstart');
	    },
	    onspeechend: function onspeechend() {
	        console.log('recognition: onspeechend');
	    },
	    onsoundend: function onsoundend() {
	        console.log('recognition: onsoundend');
	    },
	    onaudioend: function onaudioend() {
	        console.log('recognition: onaudioend');
	    },
	    onresult: function onresult() {
	        console.log('recognition: onresult');
	    },
	    onnomatch: function onnomatch() {
	        console.log('recognition: onnomatch');
	    },
	    onerror: function onerror() {
	        console.log('recognition: onerror');
	    },
	    onstart: function onstart() {
	        console.log('recognition: onstart');
	    },
	    onend: function onend() {
	        console.log('recognition: onend');
	    }
	};

	var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
	var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

	var SpeechRecognitionService = function () {
	    function SpeechRecognitionService() {
	        _classCallCheck(this, SpeechRecognitionService);
	    }

	    _createClass(SpeechRecognitionService, null, [{
	        key: 'isBrowserSupported',


	        /**
	         * Returns true if Web Speech API is Supported
	         * @returns {boolean}
	         */
	        value: function isBrowserSupported() {
	            return typeof SpeechRecognition !== 'undefined';
	        }

	        /**
	         * Returns grammar in the JSpeech Grammar Format (JSGF).
	         * @param {string} name - grammar name
	         * @param {Array.<string>} alternatives
	         * @returns {string}
	         */

	    }, {
	        key: 'createGrammar',
	        value: function createGrammar(name, alternatives) {
	            return '#JSGF V1.0; grammar ' + name + '; public <' + name + '> = ' + alternatives.join(' | ') + ' ;';
	        }
	    }, {
	        key: 'listen',
	        value: function listen(settings) {
	            console.log('listening...');
	            settings = (0, _merge2.default)(true, {}, DEFAULT_SETTINGS, settings);
	            var useBrowser = this.isBrowserSupported();

	            if (useBrowser) {
	                this.listenWithBrowser(settings);
	            } else {
	                throw new Error("Your browser doesn't support browser speech recognition");
	            }
	        }
	    }, {
	        key: 'listenWithBrowser',
	        value: function listenWithBrowser(settings) {
	            this.stop();

	            this._recognition = new SpeechRecognition();

	            if (settings.grammars.length) {
	                var speechRecognitionList = new SpeechGrammarList();
	                for (var i = 0; i < settings.grammars.length; i++) {
	                    var grammar = settings.grammars[i];
	                    speechRecognitionList.addFromString(grammar, 1);
	                }
	                this._recognition.grammars = speechRecognitionList;
	            }
	            this._recognition.maxAlternatives = settings.maxAlternatives;
	            this._recognition.continuous = true;
	            this._recognition.interimResults = true;
	            this._recognition.lang = settings.lang;

	            this._recognition.onaudiostart = settings.onaudiostart;
	            this._recognition.onsoundstart = settings.onsoundstart;
	            this._recognition.onspeechstart = settings.onspeechstart;
	            this._recognition.onspeechend = settings.onspeechend;
	            this._recognition.onsoundend = settings.onsoundend;
	            this._recognition.onaudioend = settings.onaudioend;
	            this._recognition.onresult = settings.onresult;
	            this._recognition.onnomatch = settings.onnomatch;
	            this._recognition.onerror = settings.onerror;
	            this._recognition.onstart = settings.onstart;
	            this._recognition.onend = settings.onend;

	            this._recognition.start();
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            if (this._recognition) {
	                this._recognition.stop();
	            }
	            if (this._webSocket && this._webSocket.readyState < 2) {
	                var endMsg = { type: 'end' };
	                this._webSocket.send(JSON.stringify(endMsg));
	                this._webSocket.close();
	            }
	            if (this._recogniser) {
	                this._recogniser.stop();
	            }
	            if (this._stream) {
	                var track = this._stream.getTracks()[0];
	                track.stop();
	            }
	            console.log('stop listening...');
	        }

	        /**
	         * Returns string from the alternatives array which has the greatest number of matches with dictionary array.
	         * @param {Array.<string>} alternatives
	         * @param {Array.<string>} dictionary
	         * @returns {string}
	         */

	    }, {
	        key: 'getMoreRelevantWord',
	        value: function getMoreRelevantWord(alternatives, dictionary) {
	            alternatives = alternatives.map(function (a) {
	                return { text: a.toLowerCase(), count: 0 };
	            });
	            var defaultResent = alternatives[0];
	            for (var i = 0; i < alternatives.length; i++) {
	                var alternative = ' ' + alternatives[i].text + ' ';
	                for (var j = 0; j < dictionary.length; j++) {
	                    var word = dictionary[j];
	                    if (alternative.indexOf(' ' + word + ' ') !== -1) {
	                        alternatives[i].count++;
	                    }
	                }
	            }
	            alternatives.sort(function (a, b) {
	                return b.count - a.count;
	            });
	            if (alternatives[0] != defaultResent) {
	                console.log('>>>REPLACED "' + defaultResent.text + '" to "' + alternatives[0].text + '"');
	            }
	            return alternatives[0].count > defaultResent.count ? alternatives[0].text : defaultResent.text;
	        }

	        /**
	         * Returns range of searchPhrase in sourcePhrase. If sourcePhrase does not contain searchPhrase, Range with index = -1 will be returned.
	         * @param {string} sourcePhrase
	         * @param {string} searchPhrase
	         * @param {boolean} [phonetic = true] - use phonetic matching (default - true)
	         * @returns {{index: number, length: number}}
	         */

	    }, {
	        key: 'getRangeOf',
	        value: function getRangeOf(sourcePhrase, searchPhrase) {
	            var phonetic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	            var range = {
	                index: -1,
	                length: 0
	            };

	            if (phonetic) {
	                var matchedCount;
	                var firstWordIndex;
	                var matched;

	                (function () {
	                    var srcWords = sourcePhrase.trim().split(' ');
	                    // create Words array with phonetic alternatives for source phrase
	                    var srcWordObjects = [];
	                    srcWords.forEach(function (a, index) {
	                        // phonetic algorithm can work only with words, so all numbers should be convert to words
	                        // some words can be converted to several (21 -> 'twenty one'), so its should be splitted
	                        var fullWords = _controllerUtils2.default.convertToFullWords(a).split(' ');

	                        fullWords.forEach(function (w) {
	                            var wordObj = new _word2.default(w);
	                            // save index in srcWords array to be able restore it after matching
	                            wordObj.index = index;
	                            srcWordObjects.push(wordObj);
	                        });
	                    });

	                    // the same for search phrase
	                    var searchWords = searchPhrase.trim().split(' ');
	                    var searchWordObjects = [];
	                    searchWords.forEach(function (a) {
	                        var fullWords = _controllerUtils2.default.convertToFullWords(a).split(' ');
	                        fullWords.forEach(function (w) {
	                            searchWordObjects.push(new _word2.default(w));
	                        });
	                    });

	                    matchedCount = 0;
	                    firstWordIndex = -1;
	                    matched = false;

	                    for (var i = 0; i < srcWordObjects.length; i++) {
	                        var srcWord = srcWordObjects[i];
	                        var searchWord = searchWordObjects[matchedCount];
	                        if (srcWord.isEqual(searchWord)) {
	                            if (firstWordIndex == -1) {
	                                firstWordIndex = i;
	                            }
	                            matchedCount++;
	                        } else {
	                            firstWordIndex = -1;
	                            matchedCount = 0;
	                        }
	                        if (matchedCount == searchWordObjects.length) {
	                            matched = true;
	                            break;
	                        }
	                    }

	                    if (matched) {
	                        var firstMatchedWord = srcWordObjects[firstWordIndex];
	                        var lastMatchedWord = srcWordObjects[firstWordIndex + matchedCount - 1];
	                        var matchedPhase = srcWords.slice(firstMatchedWord.index, lastMatchedWord.index + 1).join(' ');
	                        // replace initial search phrase with matched
	                        searchPhrase = searchPhrase.replace(/( *).*\w( *)$/, '$1' + matchedPhase + '$2');
	                    }
	                })();
	            }

	            range.index = sourcePhrase.indexOf(searchPhrase);
	            range.length = searchPhrase.length;
	            return range;
	        }

	        /**
	         * Returns array of matched object from matchObjects array, which key is matched recognized words, and remaining (not matched) strings.
	         * IMPORTANT: The initial recognized array will be changed and returned array is the same instance as the initial.
	         * To best matching matchObjects should be sorted by key length (from highest to lowest) to prefer lager collocation.
	         * @param {Array.<string|MatchObject>} recognized - array of recognized words
	         * @param {Array.<MatchObject>} matchObjects
	         * @param {boolean} [phonetic = true] - use phonetic matching (default - true)
	         * @returns {Array.<string|MatchObject>}
	         */

	    }, {
	        key: 'matchRecognition',
	        value: function matchRecognition(recognized, matchObjects) {
	            var phonetic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


	            matchObjects.forEach(function (v) {
	                v.key = v.key.trim();
	            });

	            // join all neighboring strings to one
	            _controllerUtils2.default.joinNeighboringStrings(recognized);
	            recognized.forEach(function (currentValue, index) {
	                if (typeof currentValue === 'string') {
	                    // remove double whitespaces and add whitespaces in the beginning and the end of recognized and sought phrases to prevent part of word collisions
	                    recognized[index] = ' ' + currentValue.replace(/ +/, ' ').trim() + ' ';
	                }
	            });

	            for (var i = 0; i < matchObjects.length; i++) {
	                var alt = matchObjects[i];

	                for (var j = 0; j < recognized.length; j++) {
	                    var recognizedStr = recognized[j];
	                    if (typeof recognizedStr !== 'string') continue;
	                    var keyPhrase = ' ' + alt.key.toLowerCase() + ' ';
	                    var matchedRange = this.getRangeOf(recognizedStr, keyPhrase, phonetic);
	                    if (matchedRange.index != -1) {
	                        // cut matched string and replace recognizedStr with the remaining two
	                        var beforeStr = recognizedStr.substring(0, matchedRange.index).trim();
	                        var afterStr = recognizedStr.substring(matchedRange.index + matchedRange.length).trim();

	                        var matchedWithRemaining = [];
	                        if (beforeStr) matchedWithRemaining.push(' ' + beforeStr + ' ');
	                        matchedWithRemaining.push(alt);
	                        if (afterStr) matchedWithRemaining.push(' ' + afterStr + ' ');

	                        recognized.splice.apply(recognized, [j, 1].concat(matchedWithRemaining));

	                        break;
	                    }
	                }
	            }
	            //trim strings
	            recognized.forEach(function (currentValue, index) {
	                if (typeof currentValue === 'string') {
	                    recognized[index] = currentValue.trim();
	                }
	            });

	            return recognized;
	        }
	    }, {
	        key: 'lang',
	        set: function set(language) {
	            DEFAULT_SETTINGS.lang = language;
	        }
	    }]);

	    return SpeechRecognitionService;
	}();

	exports.default = SpeechRecognitionService;
	module.exports = exports['default'];

/***/ },
/* 71 */
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
	var merge = __webpack_require__(64);
	var alternatives = __webpack_require__(72);

	var strings = {};

	strings.SERVICE_NAME = 'Vicki';
	strings.SERVICE_NAME_ALTERNATIVES = ['vk', 'viki', 'wiki', 'vicky', 'vicki', 'ricky', 'ricki', 'rikki', 'avicii', 'nikki', 'nicki', 'we can', 'they can', 'richard'];

	strings.REPLACE_MAP = [{
	    phrase: strings.SERVICE_NAME,
	    alternatives: strings.SERVICE_NAME_ALTERNATIVES
	}, {
	    phrase: 'next field',
	    alternatives: ['next film', 'next week']
	}, {
	    phrase: 'previous field',
	    alternatives: 'previous film'
	}, {
	    phrase: 'list options',
	    alternatives: 'lease options'
	}, {
	    phrase: 'submit',
	    alternatives: ['suck me up', 'suck me', 'set me']
	}, {
	    phrase: 'vicki submit',
	    alternatives: 'they can submit'
	}].concat(alternatives);

	for (var i = 0; i < strings.REPLACE_MAP.length; i++) {
	    var replaceObj = strings.REPLACE_MAP[i];
	    replaceObj.alternativesRE = getAlternativesRegExp(replaceObj.alternatives);
	}

	strings.ORDINAL_CHOICE_PREFIX_1 = 'choice';
	strings.ORDINAL_CHOICE_PREFIX_2 = 'option';
	strings.consts = {
	    langs: {
	        en: 'en_US',
	        es: 'es_US',
	        ru: 'ru_RU'
	    }
	};
	strings.commands = {
	    CLEAR: 'Clear',
	    HELP: 'Help',
	    LIST_OPTIONS: 'List options',
	    LIST_OPTIONS_ALT_1: 'List of options',
	    LIST_OPTIONS_ALT_2: 'Options list',
	    NEXT_FIELD: 'Next field',
	    PREV_FIELD: 'Previous field',
	    REPEAT: 'Repeat',
	    SAY: 'Say it please',
	    STOP: 'Stop',
	    SUBMIT: 'Submit',
	    CONTINUE: 'Continue'
	};
	strings.commands.CLEAR_HINT = 'To clear current answer, say "' + strings.SERVICE_NAME + ' ' + strings.commands.CLEAR + '".';
	strings.commands.HELP_HINT = 'If you want to know available commands, say "' + strings.SERVICE_NAME + ' ' + strings.commands.HELP + '".';
	strings.commands.FIELD_NAVIGATION_HINT = 'To navigate between fields say ' + strings.SERVICE_NAME + ' ' + strings.commands.NEXT_FIELD + ' or ' + strings.SERVICE_NAME + ' ' + strings.commands.PREV_FIELD + '.';
	strings.commands.LIST_OPTIONS_HINT = 'To know available choices say ' + strings.SERVICE_NAME + ' ' + strings.commands.LIST_OPTIONS + '.';
	strings.commands.REPEAT_HINT = 'To repeat question say ' + strings.SERVICE_NAME + ' ' + strings.commands.REPEAT + '.';
	strings.commands.STOP_HINT = 'To turn off the voice controller say "' + strings.SERVICE_NAME + ' ' + strings.commands.STOP + '".';
	strings.commands.SUBMIT_HINT = 'To apply answer say "' + strings.SERVICE_NAME + ' ' + strings.commands.SUBMIT + '".';

	strings.messages = {
	    ANSWER_IS: 'Your answer is:',
	    CLEAR_HINT: 'To reenter, say "' + strings.SERVICE_NAME + ' ' + strings.commands.CLEAR + '" and your new answer.',
	    CLEAR_HINT_SHORT: 'To reenter, say "' + strings.SERVICE_NAME + ' ' + strings.commands.CLEAR + '".',
	    CLEARED_FEEDBACK: 'Answer was cleared. Now you can say another.',
	    CLEARED_FEEDBACK_SHORT: 'Answer was cleared.',
	    CORRECT_ANSWER: 'That\'s correct!',
	    EMPTY_ANSWER: 'Your answer is empty.',
	    FIELD_SELECTED_1: 'The',
	    FIELD_SELECTED_2: 'field is selected.',
	    INCORRECT_ANSWER: 'That\'s incorrect. Please try again! To reenter, say "' + strings.SERVICE_NAME + ' ' + strings.commands.CLEAR + '" and your new answer.',
	    INITIAL_SPEECH_MULTI_1: 'There are',
	    INITIAL_SPEECH_MULTI_2: 'fields that have to be filled with the correct answer.',
	    MC_HINT_MULTIPLE: 'You can choose one or more options.',
	    MC_HINT_SINGLE: 'You can choose only one option.',
	    NO_SPEECH_ERROR: 'Your voice is not recognized. Recognition will be stopped.',
	    NOT_ALLOWED_ERROR: 'Microphone is not plugged in or not allowed on this page. Please plug in your microphone and allow to access it on this page. Then try again.',
	    PARTIALLY_CORRECT_ANSWER: 'That\'s partially correct. Please try again! To reenter, say "' + strings.SERVICE_NAME + ' ' + strings.commands.CLEAR + '" and your new answer.',
	    SUBMIT_HINT: 'To apply it, please say "' + strings.SERVICE_NAME + ' ' + strings.commands.SUBMIT + '".',
	    TRY_AGAIN: 'Please try again.',
	    SPEAK: 'Please speak after the tone'
	};

	// Control Panel
	strings.cp = {
	    ariaLabels: {
	        TURN_ON_BUTTON: 'Turn on the Voice Controller'
	    },
	    titles: {
	        TURN_ON_BUTTON: 'To start the test click this button whenever you are ready.',
	        TURN_OFF_BUTTON: 'Turn off the Voice Controller',
	        HELP_BUTTON: 'Help',
	        SETTINGS_BUTTON: 'Settings',
	        SKIP_BUTTON: 'Skip'
	    }
	};

	// Settings Form
	strings.sf = {
	    CHECK_PHRASE: 'The quick brown fox jumps over the lazy dog.',
	    TIME_SUFFIX: 'sec',
	    RESET_DEFAULTS_BUTTON_LABEL: 'Reset',
	    labels: {
	        DIALOG_TITLE: 'Settings',
	        ADVANCED_MODE: 'Advanced Mode',
	        ALLOW_COMMANDS_WITHOUT_PREFIX: 'Allow Commands Without Prefix',
	        PAUSE_INTERVAL: 'Pause interval',
	        RESET_DEFAULTS: 'Reset to Defaults',
	        SPEECH_SPEED: 'Speech Speed',
	        USER_RESPONSE_TIMEOUT: 'User response timeout',
	        USE_BROWSER: 'Use Browser Recognition',
	        LANG: 'Language'
	    },
	    descriptions: {
	        ADVANCED_MODE: 'Recommended for the experienced users, the advanced playback mode includes shorter versions of the introductory phrases.',
	        PAUSE_INTERVAL: 'Defines the longest possible pause between the words inside a single voice command or the answer input.',
	        RESET_DEFAULTS: 'Reset all settings to defaults',
	        SPEECH_SPEED: 'Defines the Voice Controller speech speed.',
	        CHECK_SPEECH_SPEED: 'Check up speech speed',
	        USER_RESPONSE_TIMEOUT: 'Defines how long the system will wait for the user voice response in the recognition mode.'
	    },
	    langs: {
	        en_US: 'US English',
	        ru_RU: 'Русский',
	        es_US: 'US Español'
	    }
	};
	//selector class namespace
	strings.namespace = 'vart';
	strings.types = ['essay', 'dropdown', 'fitb', 'mc'];
	strings.selectors = {
	    NAMESPACE: 'vart',
	    FIELD: 'field',
	    SUBMIT: 'submit',
	    CHOICE: 'choice',
	    OPTION: 'option',
	    TITLE: 'title'
	};
	strings.types.forEach(function (type) {
	    strings.selectors[type.toUpperCase()] = type;
	});

	/**
	 * Returns RegExp for replacing passed alternatives
	 * @param {string|Array.<string>} alternatives
	 * @returns {RegExp}
	 */
	function getAlternativesRegExp(alternatives) {
	    if (typeof alternatives === 'string') {
	        alternatives = [alternatives];
	    }
	    return new RegExp('\\b(' + alternatives.join('|') + ')\\b', 'ig');
	}

	exports.default = strings;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by Shayakhmetov on 10.11.2016.
	 */
	module.exports = [{
	    phrase: 'one plus',
	    alternatives: ['oneplus']
	}, {
	    phrase: 'x',
	    alternatives: ['say']
	}];

/***/ },
/* 73 */
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

	var _commonUtils = __webpack_require__(22);

	var _commonUtils2 = _interopRequireDefault(_commonUtils);

	var _numberToWords = __webpack_require__(74);

	var _numberToWords2 = _interopRequireDefault(_numberToWords);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MATH_JAX_CLASS = 'MathJax';
	var SPEECH_RULE_ENGINE_SERVICE_URL = 'https://devdemo3.competentum.com:444/mmltospeech';

	exports.default = {

	    /**
	     * Returns true if element breaks line.
	     * @param {Element} element
	     * @returns {boolean}
	     */
	    breaksLine: function breaksLine(element) {
	        return element instanceof Element && (getComputedStyle(element).display === 'block' || getComputedStyle(element).display === 'table-row' || element.nodeName === 'BR');
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
	     * Returns passed array instance with joined neighboring strings.
	     * @example joinNeighboringStrings(['hello', 'world']) => ['hello world']
	     * @param {Array} arr - this array instance will be changed.
	     * @param {string} [separator = ' '] Optional. Specifies a string to separate neighboring strings of the array. If omitted, the array elements are separated with a whitespace.
	     * @returns {Array}
	     */
	    joinNeighboringStrings: function joinNeighboringStrings(arr) {
	        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

	        var i = 0;
	        while (i < arr.length) {
	            if (typeof arr[i] === 'string' && arr[i + 1] && typeof arr[i + 1] === 'string') {
	                arr[i] += separator + arr[i + 1];
	                arr.splice(i + 1, 1);
	            } else {
	                i++;
	            }
	        }
	        return arr;
	    },

	    /**
	     * Determine whether element are assigned is given class.
	     * @param {Element} element - DOM element where class will be searched.
	     * @param {string} className - the class name to search for.
	     * @returns {boolean}
	     */
	    hasClass: function hasClass(element, className) {
	        return element.matches('.' + className);
	    },

	    /**
	     *
	     * @param {Element} element
	     * @param {string} className
	     */
	    addClass: function addClass(element, className) {
	        var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
	        if (re.test(element.className)) return;
	        if (!(!!document.documentMode && element.tagName.toLowerCase() === 'svg')) element.className = (element.className + " " + className).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
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
	     * Converts a number into words.
	     * @example toWords(12) => 'twelve'
	     * @param {number} num
	     * @returns {string}
	     */
	    toWords: function toWords(num) {
	        return _numberToWords2.default.toWords(num).replace('-', ' ');
	    },

	    /**
	     * Converts a number into ordinal words.
	     * @example toWordsOrdinal(12) => 'twelfth'
	     * @param {number} num
	     * @returns {string}
	     */
	    toWordsOrdinal: function toWordsOrdinal(num) {
	        return _numberToWords2.default.toWordsOrdinal(num).replace('-', ' ');
	    },

	    /**
	     * Converts string with numbers to words.
	     * @example convertToFullWords('21st') => 'twenty first'
	     * @param {string} str
	     * @returns {string}
	     */
	    convertToFullWords: function convertToFullWords(str) {
	        var _this = this;

	        var NUMBER_REG_EXP = /\d+/g;
	        // examples: 1st, 1-st, 11-th
	        var ORDINAL_REG_EXP = /(\d*1-?st|\d*2-?nd|\d*3-?rd|\d*[04-9]-?th|\d*(11|12|13)-?th)(?!\w)/g;

	        // replace ordinal numbers, example: 1st -> first
	        str = str.replace(ORDINAL_REG_EXP, function (a) {
	            return ' ' + _this.toWordsOrdinal(a) + ' ';
	        });
	        // replace other numbers, example: 1 -> one
	        str = str.replace(NUMBER_REG_EXP, function (a) {
	            return ' ' + _this.toWords(a) + ' ';
	        });
	        // remove double whitespaces
	        str = str.replace(/ +/, ' ');

	        return str.trim();
	    },

	    //todo: implement async
	    /**
	     *
	     * @param {Element} element
	     * @param {boolean} [addDotsToLineBreak=false] - If 'true' dots will be added to each line break to make pause in speech.
	     * @returns {string}
	     */
	    getElementSpeech: function getElementSpeech(element) {
	        var addDotsToLineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        var text = '';
	        var label = element.getAttribute('aria-label');
	        var speech = element.getAttribute('speech');
	        var labelId = element.getAttribute('aria-labelledby');
	        var descId = element.getAttribute('aria-describedby');
	        if (!!label) {
	            text = label;
	        } else if (!!speech) {
	            text = speech;
	        } else if (!!labelId) {
	            text = document.querySelector('#' + labelId).textContent;
	        } else if (!!descId) {
	            text = document.querySelector('#' + descId).textContent;
	        }
	        return this.processText(text, element, addDotsToLineBreak);
	    },

	    /**
	     *
	     * @param {Element} element
	     * @param {string} className - className specifying element entity for looking for title at element with class ${className}-title
	     * @param {boolean} [addDotsToLineBreak=false] - If 'true' dots will be added to each line break to make pause in speech.
	     * @returns {string}
	     */
	    getElementDisplayText: function getElementDisplayText(element, className) {
	        var addDotsToLineBreak = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	        var text = '';
	        var titleEl = element.querySelector('.' + className + '-title');
	        var labelId = element.getAttribute('aria-labelledby');
	        var id = element.getAttribute('id');
	        if (element.querySelector('*') == null && element.textContent.length > 0) {
	            text = element.textContent;
	        } else if (!!titleEl) {
	            text = titleEl.textContent;
	        } else if (!!document.querySelector('label')) {
	            text = document.querySelector('label').textContent;
	        } else if (!!labelId) {
	            text = document.querySelector('#' + labelId).textContent;
	        }
	        return this.processText(text, element, addDotsToLineBreak);
	    },

	    /**
	     *
	     * @param {Element} element
	     * @param {boolean} [addDotsToLineBreak=false] - If 'true' dots will be added to each line break to make pause in speech.
	     * @returns {string}
	     */
	    getElementText: function getElementText(element) {
	        var addDotsToLineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        var text = '';

	        if (element.nodeName == '#text') {
	            text = element.textContent;
	        } else if (element.nodeName == '#comment') {
	            text = element.textContent;
	        } else if (element.getAttribute('speech')) {
	            text = element.getAttribute('speech');
	        }
	        //todo: implement context independently
	        else if (this.hasClass(element, 'cg-item-content-unit') && element.getAttribute('type') == 'latex') {
	                //todo: implement async
	                text = element.getAttribute('aria-label');
	            } else if (this.hasClass(element, 'cg-item-content-unit') && element.getAttribute('type') == 'mathml' || element.matches('math, .MathJax, .MathJax_SVG, .MathJax_CHTML,  .MathJax_PHTML')) {
	                //todo: implement async
	                text = this.getFormulaSpeech(element);
	            } else {
	                for (var i = 0; i < element.childNodes.length; i++) {
	                    var childNode = element.childNodes[i];
	                    text += this.getElementText(childNode);
	                }
	            }

	        return this.processText(text, element, addDotsToLineBreak);
	    },

	    processText: function processText(text, element, addDotsToLineBreak) {
	        // remove line breaks
	        text = text.replace(/[\r\n]/g, ' ');
	        // and multiple whitespaces
	        text = text.replace(/\s+/g, ' ');

	        if (addDotsToLineBreak) {
	            var hasWhitespaceOnBegin = text.match(/^\s/g);
	            var hasWhitespaceOnEnd = text.match(/\s$/g);

	            if (text.trim()) {
	                text = text.trim();
	                // add dot to make pause in speech if there is no punctuation mark
	                if (this.breaksLine(element) && !text.match(/[\.,\?!]$/)) {
	                    text += '.';
	                }
	                // return spaces as it was
	                text = hasWhitespaceOnBegin ? ' ' + text : text;
	                text = hasWhitespaceOnEnd ? text + ' ' : text;
	            }
	        }

	        return text;
	    },


	    /**
	     *
	     * @param {Element} element
	     * @param {boolean} [async = false]
	     * @returns {string|Promise}
	     */
	    getFormulaSpeech: function getFormulaSpeech(element) {
	        var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        var mml = '';
	        var mmlElement;

	        if (element.matches('script[type="math/mml"]') || element.matches('math')) {
	            mmlElement = element;
	        } else {
	            mmlElement = element.querySelector('script[type="math/mml"]') || element.querySelector('math');
	        }
	        if (!mmlElement) {
	            mmlElement = element.parentNode.querySelector('script[type="math/mml"]') || element.parentNode.querySelector('math');
	        }

	        if (mmlElement.tagName == 'math') {
	            mml = mmlElement.outerHTML;
	        } else {
	            // extract from MathJax script node
	            mml = mmlElement.innerHTML.trim();
	        }
	        return _commonUtils2.default.getSpeechByMathML(mml, async);
	    },

	    /**
	     * Removes current node from tree.
	     * @param {Node} node
	     */
	    removeNode: function removeNode(node) {
	        if (node.parentNode) node.parentNode.removeChild(node);
	    }

	};
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {!function(){"use strict";function e(e){return!("number"!=typeof e||e!==e||e===1/0||e===-(1/0))}function t(e){return h.test(e)||s.test(e)?e+"th":u.test(e)?e.replace(u,"ieth"):a.test(e)?e.replace(a,n):e}function n(e,t){return d[t]}function o(t){var n=parseInt(t,10);if(!e(n))throw new TypeError("Not a finite number: "+t+" ("+typeof t+")");var o=String(n),r=n%100,i=r>=11&&13>=r,f=o.charAt(o.length-1);return o+(i?"th":"1"===f?"st":"2"===f?"nd":"3"===f?"rd":"th")}function r(n,o){var r,f=parseInt(n,10);if(!e(f))throw new TypeError("Not a finite number: "+n+" ("+typeof n+")");return r=i(f),o?t(r):r}function i(e){var t,n,o=arguments[1];return 0===e?o?o.join(" ").replace(/,$/,""):"zero":(o||(o=[]),0>e&&(o.push("minus"),e=Math.abs(e)),20>e?(t=0,n=x[e]):p>e?(t=e%v,n=M[Math.floor(e/v)],t&&(n+="-"+x[t],t=0)):y>e?(t=e%p,n=i(Math.floor(e/p))+" hundred"):c>e?(t=e%y,n=i(Math.floor(e/y))+" thousand,"):b>e?(t=e%c,n=i(Math.floor(e/c))+" million,"):g>e?(t=e%b,n=i(Math.floor(e/b))+" billion,"):m>e?(t=e%g,n=i(Math.floor(e/g))+" trillion,"):w>=e&&(t=e%m,n=i(Math.floor(e/m))+" quadrillion,"),o.push(n),i(t,o))}function f(e){var n=r(e);return t(n)}var l="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,h=/(hundred|thousand|(m|b|tr|quadr)illion)$/,s=/teen$/,u=/y$/,a=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,d={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"},v=10,p=100,y=1e3,c=1e6,b=1e9,g=1e12,m=1e15,w=9007199254740992,x=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],M=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],z={toOrdinal:o,toWords:r,toWordsOrdinal:f}; true?("undefined"!=typeof module&&module.exports&&(exports=module.exports=z),exports.numberToWords=z):l.numberToWords=z}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 75 */
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

	var _doubleMetaphone = __webpack_require__(76);

	var _doubleMetaphone2 = _interopRequireDefault(_doubleMetaphone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Class for fuzzy (phonetic) words matching
	 */
	var Word = function () {
	  _createClass(Word, null, [{
	    key: 'getPhonetic',


	    /**
	     * Returns phonetic representation of word.
	     * @param {string} val
	     * @returns {Array.<string>}
	     */
	    value: function getPhonetic(val) {
	      return (0, _doubleMetaphone2.default)(val);
	    }

	    /**
	     * Return true if words are phonetically equivalent.
	     * @param {Word} word1
	     * @param {Word} word2
	     * @returns {boolean}
	     */

	  }, {
	    key: 'isEqual',
	    value: function isEqual(word1, word2) {
	      return word1.value === word2.value || word1.phonetic[0] === word2.phonetic[0] || word1.phonetic[1] === word2.phonetic[1];
	    }

	    /**
	     *
	     * @param {string} value
	     */

	  }]);

	  function Word(value) {
	    _classCallCheck(this, Word);

	    this.value = value;
	    this.phonetic = this.constructor.getPhonetic(this.value);
	  }

	  /**
	   * Return true if words are phonetically equivalent.
	   * @param {Word} word
	   * @returns {boolean}
	   */


	  _createClass(Word, [{
	    key: 'isEqual',
	    value: function isEqual(word) {
	      return this.constructor.isEqual(this, word);
	    }
	  }]);

	  return Word;
	}();

	exports.default = Word;
	;
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	var VOWELS,
	    SLAVO_GERMANIC,
	    GERMANIC,
	    INITIAL_EXCEPTIONS,
	    GREEK_INITIAL_CH,
	    GREEK_CH,
	    CH_FOR_KH,
	    G_FOR_F,
	    INITIAL_G_FOR_KJ,
	    INITIAL_ANGER_EXCEPTION,
	    G_FOR_KJ,
	    J_FOR_J_EXCEPTION,
	    ALLE,
	    H_FOR_S,
	    DUTCH_SCH;

	/*
	 * Match vowels (including `Y`).
	 */

	VOWELS = /[AEIOUY]/;

	/*
	 * Match few Slavo-Germanic values.
	 */

	SLAVO_GERMANIC = /W|K|CZ|WITZ/;

	/*
	 * Match few Germanic values.
	 */

	GERMANIC = /^(VAN |VON |SCH)/;

	/*
	 * Match initial values of which the first character
	 * should be skipped.
	 */

	INITIAL_EXCEPTIONS = /^(GN|KN|PN|WR|PS)/;

	/*
	 * Match initial Greek-like values of which the `CH`
	 * sounds like `K`.
	 */

	GREEK_INITIAL_CH = /^CH(IA|EM|OR([^E])|YM|ARAC|ARIS)/;

	/*
	 * Match Greek-like values of which the `CH` sounds
	 * like `K`.
	 */

	GREEK_CH = /ORCHES|ARCHIT|ORCHID/;

	/*
	 * Match values which when following `CH`, transform `CH`
	 * to sound like `K`.
	 */

	CH_FOR_KH = /[ BFHLMNRVW]/;

	/*
	 * Match values which when preceding a vowel and `UGH`,
	 * sound like `F`.
	 */

	G_FOR_F = /[CGLRT]/;

	/*
	 * Match initial values which sound like either `K` or `J`.
	 */

	INITIAL_G_FOR_KJ = /Y[\s\S]|E[BILPRSY]|I[BELN]/;

	/*
	 * Match initial values which sound like either `K` or `J`.
	 */

	INITIAL_ANGER_EXCEPTION = /^[DMR]ANGER/;

	/*
	 * Match values which when following `GY`, do not sound
	 * like `K` or `J`.
	 */

	G_FOR_KJ = /[EGIR]/;

	/*
	 * Match values which when following `J`, do not sound `J`.
	 */

	J_FOR_J_EXCEPTION = /[LTKSNMBZ]/;

	/*
	 * Match values which might sound like `L`.
	 */

	ALLE = /AS|OS/;

	/*
	 * Match Germanic values preceding `SH` which sound
	 * like `S`.
	 */

	H_FOR_S = /EIM|OEK|OLM|OLZ/;

	/*
	 * Match Dutch values following `SCH` which sound like
	 * either `X` and `SK`, or `SK`.
	 */

	DUTCH_SCH = /E[DMNR]|UY|OO/;

	/**
	 * Get the phonetics according to the Double Metaphone
	 * algorithm from a value.
	 *
	 * @param {string} value - value to detect phonetics for.
	 * @return {Array.<string>} - Two phonetics.
	 */
	function doubleMetaphone(value) {
	    var primary = '',
	        secondary = '',
	        index = 0,
	        length = value.length,
	        last = length - 1,
	        isSlavoGermanic, isGermanic, subvalue, next, prev, nextnext,
	        characters;

	    value = String(value).toUpperCase() + '     ';
	    isSlavoGermanic = SLAVO_GERMANIC.test(value);
	    isGermanic = GERMANIC.test(value);
	    characters = value.split('');

	    /*
	     * skip this at beginning of word.
	     */

	    if (INITIAL_EXCEPTIONS.test(value)) {
	        index++;
	    }

	    /*
	     * Initial X is pronounced Z, which maps to S. Such as `Xavier`
	     */

	    if (characters[0] === 'X') {
	        primary += 'S';
	        secondary += 'S';

	        index++;
	    }

	    while (index < length) {
	        prev = characters[index - 1];
	        next = characters[index + 1];
	        nextnext = characters[index + 2];

	        switch (characters[index]) {
	            case 'A':
	            case 'E':
	            case 'I':
	            case 'O':
	            case 'U':
	            case 'Y':
	            case 'À':
	            case 'Ê':
	            case 'É':
	            case 'É':
	                if (index === 0) {
	                    /*
	                     * All initial vowels now map to `A`.
	                     */

	                    primary += 'A';
	                    secondary += 'A';
	                }

	                index++;

	                break;
	            case 'B':
	                primary += 'P';
	                secondary += 'P';

	                if (next === 'B') {
	                    index++;
	                }

	                index++;

	                break;
	            case 'Ç':
	                primary += 'S';
	                secondary += 'S';
	                index++;

	                break;
	            case 'C':
	                /*
	                 * Various Germanic:
	                 */

	                if (prev === 'A' && next === 'H' && nextnext !== 'I' &&
	                    !VOWELS.test(characters[index - 2]) &&
	                    (
	                        nextnext !== 'E' || (
	                            subvalue = value.slice(index - 2, index + 4) &&
	                            (subvalue === 'BACHER' || subvalue === 'MACHER')
	                        )
	                    )
	                ) {
	                    primary += 'K';
	                    secondary += 'K';
	                    index += 2;

	                    break;
	                }

	                /*
	                 * Special case for `Caesar`.
	                 */

	                if (
	                    index === 0 &&
	                    value.slice(index + 1, index + 6) === 'AESAR'
	                ) {
	                    primary += 'S';
	                    secondary += 'S';
	                    index += 2;

	                    break;
	                }

	                /*
	                 * Italian `Chianti`.
	                 */

	                if (value.slice(index + 1, index + 4) === 'HIA') {
	                    primary += 'K';
	                    secondary += 'K';
	                    index += 2;

	                    break;
	                }

	                if (next === 'H') {
	                    /*
	                     * Find `Michael`.
	                     */

	                    if (
	                        index > 0 && nextnext === 'A' &&
	                        characters[index + 3] === 'E'
	                    ) {
	                        primary += 'K';
	                        secondary += 'X';
	                        index += 2;

	                        break;
	                    }

	                    /*
	                     * Greek roots such as `chemistry`, `chorus`.
	                     */

	                    if (index === 0 && GREEK_INITIAL_CH.test(value)) {
	                        primary += 'K';
	                        secondary += 'K';
	                        index += 2;

	                        break;
	                    }

	                    /*
	                     * Germanic, Greek, or otherwise `CH` for `KH` sound.
	                     */

	                    if (
	                        isGermanic ||
	                        /*
	                         * Such as 'architect' but not 'arch', orchestra',
	                         * 'orchid'.
	                         */
	                        GREEK_CH.test(value.slice(index - 2, index + 4)) ||
	                        (nextnext === 'T' || nextnext === 'S') ||
	                        (
	                            (
	                                index === 0 ||
	                                prev === 'A' || prev === 'E' ||
	                                prev === 'O' || prev === 'U'
	                            ) &&
	                            /*
	                             * Such as `wachtler`, `weschsler`, but not
	                             * `tichner`.
	                             */
	                            CH_FOR_KH.test(nextnext)
	                        )
	                    ) {
	                        primary += 'K';
	                        secondary += 'K';
	                    } else if (index === 0) {
	                        primary += 'X';
	                        secondary += 'X';
	                    /*
	                     * Such as 'McHugh'.
	                     */
	                    } else if (value.slice(0, 2) === 'MC') {
	                        /*
	                         * Bug? Why matching absolute? what about McHiccup?
	                         */

	                        primary += 'K';
	                        secondary += 'K';
	                    } else {
	                        primary += 'X';
	                        secondary += 'K';
	                    }

	                    index += 2;

	                    break;
	                }

	                /*
	                 * Such as `Czerny`.
	                 */

	                if (
	                    next === 'Z' &&
	                    value.slice(index - 2, index) !== 'WI'
	                ) {
	                    primary += 'S';
	                    secondary += 'X';
	                    index += 2;

	                    break;
	                }

	                /*
	                 * Such as `Focaccia`.
	                 */

	                if (value.slice(index + 1, index + 4) === 'CIA') {
	                    primary += 'X';
	                    secondary += 'X';
	                    index += 3;

	                    break;
	                }

	                /*
	                 * Double `C`, but not `McClellan`.
	                 */

	                if (
	                    next === 'C' &&
	                    !(index === 1 && characters[0] === 'M')
	                ) {
	                    /*
	                     * Such as `Bellocchio`, but not `Bacchus`.
	                     */

	                    if (
	                        (
	                            nextnext === 'I' ||
	                            nextnext === 'E' ||
	                            nextnext === 'H'
	                        ) &&
	                        value.slice(index + 2, index + 4) !== 'HU'
	                    ) {
	                        subvalue = value.slice(index - 1, index + 4);

	                        /*
	                         * Such as `Accident`, `Accede`, `Succeed`.
	                         */

	                        if (
	                            (index === 1 && prev === 'A') ||
	                            subvalue === 'UCCEE' || subvalue === 'UCCES'
	                        ) {
	                            primary += 'KS';
	                            secondary += 'KS';

	                        /*
	                         * Such as `Bacci`, `Bertucci`, other Italian.
	                         */
	                        } else {
	                            primary += 'X';
	                            secondary += 'X';
	                        }

	                        index += 3;

	                        break;
	                    } else {
	                        /*
	                         * Pierce's rule.
	                         */

	                        primary += 'K';
	                        secondary += 'K';
	                        index += 2;

	                        break;
	                    }
	                }

	                if (next === 'G' || next === 'K' || next === 'Q') {
	                    primary += 'K';
	                    secondary += 'K';
	                    index += 2;

	                    break;
	                }

	                /*
	                 * Italian.
	                 */

	                if (
	                    next === 'I' &&
	                    /*
	                     * Bug: The original algorithm also calls for A (as
	                     * in CIA), which is already taken care of above.
	                     */
	                    (nextnext === 'E' || nextnext === 'O')
	                ) {
	                    primary += 'S';
	                    secondary += 'X';
	                    index += 2;

	                    break;
	                }

	                if (next === 'I' || next === 'E' || next === 'Y') {
	                    primary += 'S';
	                    secondary += 'S';
	                    index += 2;

	                    break;
	                }

	                primary += 'K';
	                secondary += 'K';

	                /*
	                 * Skip two extra characters ahead in `Mac Caffrey`,
	                 * `Mac Gregor`.
	                 */

	                if (
	                    next === ' ' &&
	                    (
	                        nextnext === 'C' ||
	                        nextnext === 'G' ||
	                        nextnext === 'Q'
	                    )
	                ) {
	                    index += 3;
	                    break;
	                }

	                /*
	                 * Bug: Already covered above.
	                 *
	                 * if (
	                 *     next === 'K' ||
	                 *     next === 'Q' ||
	                 *     (
	                 *         next === 'C' &&
	                 *         nextnext !== 'E' &&
	                 *         nextnext !== 'I'
	                 *     )
	                 * ) {
	                 *     index++;
	                 * }
	                 */

	                index++;

	                break;
	            case 'D':
	                if (next === 'G') {
	                    /*
	                     * Such as `edge`.
	                     */

	                    if (
	                        nextnext === 'E' ||
	                        nextnext === 'I' ||
	                        nextnext === 'Y'
	                    ) {
	                        primary += 'J';
	                        secondary += 'J';
	                        index += 3;
	                    /*
	                     * Such as `Edgar`.
	                     */
	                    } else {
	                        primary += 'TK';
	                        secondary += 'TK';
	                        index += 2;
	                    }

	                    break;
	                }

	                if (next === 'T' || next === 'D') {
	                    primary += 'T';
	                    secondary += 'T';
	                    index += 2;

	                    break;
	                }

	                primary += 'T';
	                secondary += 'T';
	                index++;

	                break;
	            case 'F':
	                if (next === 'F') {
	                    index++;
	                }

	                index++;
	                primary += 'F';
	                secondary += 'F';

	                break;
	            case 'G':
	                if (next === 'H') {
	                    if (index > 0 && !VOWELS.test(prev)) {
	                        primary += 'K';
	                        secondary += 'K';
	                        index += 2;

	                        break;
	                    }

	                    /*
	                     * Such as `Ghislane`, `Ghiradelli`.
	                     */

	                    if (index === 0) {
	                        if (nextnext === 'I') {
	                            primary += 'J';
	                            secondary += 'J';
	                        } else {
	                            primary += 'K';
	                            secondary += 'K';
	                        }
	                        index += 2;
	                        break;
	                    }

	                    /*
	                     * Parker's rule (with some further refinements).
	                     */

	                    if (
	                        (
	                            /*
	                             * Such as `Hugh`
	                             *
	                             * The comma is not a bug.
	                             */

	                            subvalue = characters[index - 2],
	                            subvalue === 'B' ||
	                            subvalue === 'H' ||
	                            subvalue === 'D'
	                        ) ||
	                        (
	                            /*
	                             * Such as `bough`.
	                             *
	                             * The comma is not a bug.
	                             */

	                            subvalue = characters[index - 3],
	                            subvalue === 'B' ||
	                            subvalue === 'H' ||
	                            subvalue === 'D'
	                        ) ||
	                        (
	                            /*
	                             * Such as `Broughton`.
	                             *
	                             * The comma is not a bug.
	                             */

	                            subvalue = characters[index - 4],
	                            subvalue === 'B' ||
	                            subvalue === 'H'
	                        )
	                    ) {
	                        index += 2;

	                        break;
	                    }

	                    /*
	                     * Such as `laugh`, `McLaughlin`, `cough`, `gough`,
	                     * `rough`, `tough`.
	                     */

	                    if (
	                        index > 2 && prev === 'U' &&
	                        G_FOR_F.test(characters[index - 3])
	                    ) {
	                        primary += 'F';
	                        secondary += 'F';
	                    } else if (index > 0 && prev !== 'I') {
	                        primary += 'K';
	                        secondary += 'K';
	                    }

	                    index += 2;

	                    break;
	                }

	                if (next === 'N') {
	                    if (
	                        index === 1 &&
	                        VOWELS.test(characters[0]) &&
	                        !isSlavoGermanic
	                    ) {
	                        primary += 'KN';
	                        secondary += 'N';
	                    /*
	                     * Not like `Cagney`.
	                     */
	                    } else if (
	                        value.slice(index + 2, index + 4) !== 'EY' &&
	                        value.slice(index + 1) !== 'Y' &&
	                        !isSlavoGermanic
	                    ) {
	                        primary += 'N';
	                        secondary += 'KN';
	                    } else {
	                        primary += 'KN';
	                        secondary += 'KN';
	                    }

	                    index += 2;

	                    break;
	                }

	                /*
	                 * Such as `Tagliaro`.
	                 */

	                if (
	                    value.slice(index + 1, index + 3) === 'LI' &&
	                    !isSlavoGermanic
	                ) {
	                    primary += 'KL';
	                    secondary += 'L';
	                    index += 2;

	                    break;
	                }

	                /*
	                 * -ges-, -gep-, -gel- at beginning.
	                 */

	                if (
	                    index === 0 &&
	                    INITIAL_G_FOR_KJ.test(value.slice(1, 3))
	                ) {
	                    primary += 'K';
	                    secondary += 'J';
	                    index += 2;

	                    break;
	                }

	                /*
	                 * -ger-, -gy-.
	                 */

	                if (
	                    (
	                        value.slice(index + 1, index + 3) === 'ER' &&
	                        prev !== 'I' && prev !== 'E' &&
	                        !INITIAL_ANGER_EXCEPTION.test(value.slice(0, 6))
	                    ) ||
	                    (next === 'Y' && !G_FOR_KJ.test(prev))
	                ) {
	                    primary += 'K';
	                    secondary += 'J';
	                    index += 2;

	                    break;
	                }

	                /*
	                 * Italian such as `biaggi`.
	                 */

	                if (
	                    next === 'E' || next === 'I' || next === 'Y' ||
	                    (
	                        (prev === 'A' || prev === 'O') &&
	                        next === 'G' && nextnext === 'I'
	                    )
	                ) {
	                    /*
	                     * Obvious Germanic.
	                     */

	                    if (
	                        value.slice(index + 1, index + 3) === 'ET' ||
	                        isGermanic
	                    ) {
	                        primary += 'K';
	                        secondary += 'K';
	                    } else {
	                        /*
	                         * Always soft if French ending.
	                         */

	                        if (value.slice(index + 1, index + 5) === 'IER ') {
	                            primary += 'J';
	                            secondary += 'J';
	                        } else {
	                            primary += 'J';
	                            secondary += 'K';
	                        }
	                    }

	                    index += 2;

	                    break;
	                }

	                if (next === 'G') {
	                    index++;
	                }

	                index++;

	                primary += 'K';
	                secondary += 'K';

	                break;
	            case 'H':
	                /*
	                 * Only keep if first & before vowel or btw. 2 vowels.
	                 */

	                if (VOWELS.test(next) && (index === 0 || VOWELS.test(prev))) {
	                    primary += 'H';
	                    secondary += 'H';

	                    index++;
	                }

	                index++;

	                break;
	            case 'J':
	                /*
	                 * Obvious Spanish, `jose`, `San Jacinto`.
	                 */
	                if (
	                    value.slice(index, index + 4) === 'JOSE' ||
	                    value.slice(0, 4) === 'SAN '
	                ) {
	                    if (
	                        value.slice(0, 4) === 'SAN ' ||
	                        (
	                            index === 0 &&
	                            characters[index + 4] === ' '
	                        )
	                    ) {
	                        primary += 'H';
	                        secondary += 'H';
	                    } else {
	                        primary += 'J';
	                        secondary += 'H';
	                    }

	                    index++;

	                    break;
	                }

	                if (
	                    index === 0
	                    /*
	                     * Bug: unreachable (see previous statement).
	                     * && value.slice(index, index + 4) !== 'JOSE'.
	                     */
	                ) {
	                    primary += 'J';

	                    /*
	                     * Such as `Yankelovich` or `Jankelowicz`.
	                     */

	                    secondary += 'A';
	                /*
	                 * Spanish pron. of such as `bajador`.
	                 */
	                } else if (
	                    !isSlavoGermanic &&
	                    (next === 'A' || next === 'O') &&
	                    VOWELS.test(prev)
	                ) {
	                    primary += 'J';
	                    secondary += 'H';
	                } else if (index === last) {
	                    primary += 'J';
	                } else if (
	                    prev !== 'S' && prev !== 'K' && prev !== 'L' &&
	                    !J_FOR_J_EXCEPTION.test(next)
	                ) {
	                    primary += 'J';
	                    secondary += 'J';
	                /*
	                 * It could happen.
	                 */
	                } else if (next === 'J') {
	                    index++;
	                }

	                index++;

	                break;
	            case 'K':
	                if (next === 'K') {
	                    index++;
	                }

	                primary += 'K';
	                secondary += 'K';
	                index++;

	                break;
	            case 'L':
	                if (next === 'L') {
	                    /*
	                     * Spanish such as `cabrillo`, `gallegos`.
	                     */

	                    if (
	                        (
	                            index === length - 3 &&
	                            (
	                                (
	                                    prev === 'I' &&
	                                    (nextnext === 'O' || nextnext === 'A')
	                                ) ||
	                                (
	                                    prev === 'A' &&
	                                    nextnext === 'E'
	                                )
	                            )
	                        ) || (
	                            prev === 'A' && nextnext === 'E' &&
	                            (
	                                (
	                                    characters[last] === 'A' ||
	                                    characters[last] === 'O'
	                                ) ||
	                                ALLE.test(value.slice(last - 1, length))
	                            )
	                        )
	                    ) {
	                        primary += 'L';
	                        index += 2;

	                        break;
	                    }

	                    index++;
	                }

	                primary += 'L';
	                secondary += 'L';
	                index++;

	                break;
	            case 'M':
	                if (
	                    next === 'M' ||

	                    /*
	                     * Such as `dumb`, `thumb`.
	                     */

	                    (
	                        prev === 'U' && next === 'B' &&
	                        (
	                            index + 1 === last ||
	                            value.slice(index + 2, index + 4) === 'ER'
	                        )
	                    )
	                ) {
	                    index++;
	                }

	                index++;
	                primary += 'M';
	                secondary += 'M';

	                break;
	            case 'N':
	                if (next === 'N') {
	                    index++;
	                }

	                index++;
	                primary += 'N';
	                secondary += 'N';

	                break;
	            case 'Ñ':
	                index++;
	                primary += 'N';
	                secondary += 'N';

	                break;
	            case 'P':
	                if (next === 'H') {
	                    primary += 'F';
	                    secondary += 'F';
	                    index += 2;

	                    break;
	                }

	                /*
	                 * Also account for `campbell` and `raspberry`.
	                 */

	                subvalue = next;

	                if (subvalue === 'P' || subvalue === 'B') {
	                    index++;
	                }

	                index++;

	                primary += 'P';
	                secondary += 'P';

	                break;
	            case 'Q':
	                if (next === 'Q') {
	                    index++;
	                }

	                index++;
	                primary += 'K';
	                secondary += 'K';

	                break;
	            case 'R':
	                /*
	                 * French such as `Rogier`, but exclude `Hochmeier`.
	                 */

	                if (
	                    index === last &&
	                    !isSlavoGermanic &&
	                    prev === 'E' &&
	                    characters[index - 2] === 'I' &&
	                    characters[index - 4] !== 'M' &&
	                    (
	                        characters[index - 3] !== 'E' &&
	                        characters[index - 3] !== 'A'
	                    )
	                ) {
	                    secondary += 'R';
	                } else {
	                    primary += 'R';
	                    secondary += 'R';
	                }

	                if (next === 'R') {
	                    index++;
	                }

	                index++;

	                break;
	            case 'S':
	                /*
	                 * Special cases `island`, `isle`, `carlisle`, `carlysle`.
	                 */

	                if (next === 'L' && (prev === 'I' || prev === 'Y')) {
	                    index++;

	                    break;
	                }

	                /*
	                 * Special case `sugar-`.
	                 */

	                if (index === 0 && value.slice(1, 5) === 'UGAR') {
	                    primary += 'X';
	                    secondary += 'S';
	                    index++;

	                    break;
	                }

	                if (next === 'H') {
	                    /*
	                     * Germanic.
	                     */

	                    if (H_FOR_S.test(value.slice(index + 1, index + 5))) {
	                        primary += 'S';
	                        secondary += 'S';
	                    } else {
	                        primary += 'X';
	                        secondary += 'X';
	                    }

	                    index += 2;
	                    break;
	                }

	                if (
	                    next === 'I' && (nextnext === 'O' || nextnext === 'A')
	                    /*
	                     * Bug: Already covered by previous branch
	                     * || value.slice(index, index + 4) === 'SIAN'
	                     */
	                ) {
	                    if (!isSlavoGermanic) {
	                        primary += 'S';
	                        secondary += 'X';
	                    } else {
	                        primary += 'S';
	                        secondary += 'S';
	                    }

	                    index += 3;

	                    break;
	                }

	                /*
	                 * German & Anglicization's, such as `Smith` match `Schmidt`,
	                 * `snider` match `Schneider`. Also, -sz- in slavic language
	                 * although in hungarian it is pronounced `s`.
	                 */

	                if (
	                    next === 'Z' ||
	                    (
	                        index === 0 && (
	                            next === 'L' || next === 'M' ||
	                            next === 'N' || next === 'W'
	                        )
	                    )
	                ) {
	                    primary += 'S';
	                    secondary += 'X';

	                    if (next === 'Z') {
	                        index++;
	                    }

	                    index++;

	                    break;
	                }

	                if (next === 'C') {
	                    /*
	                     * Schlesinger's rule.
	                     */

	                    if (nextnext === 'H') {
	                        subvalue = value.slice(index + 3, index + 5);

	                        /*
	                         * Dutch origin, such as `school`, `schooner`.
	                         */

	                        if (DUTCH_SCH.test(subvalue)) {
	                            /*
	                             * Such as `schermerhorn`, `schenker`.
	                             */

	                            if (subvalue === 'ER' || subvalue === 'EN') {
	                                primary += 'X';
	                                secondary += 'SK';
	                            } else {
	                                primary += 'SK';
	                                secondary += 'SK';
	                            }

	                            index += 3;

	                            break;
	                        }

	                        if (
	                            index === 0 &&
	                            !VOWELS.test(characters[3]) &&
	                            characters[3] !== 'W'
	                        ) {
	                            primary += 'X';
	                            secondary += 'S';
	                        } else {
	                            primary += 'X';
	                            secondary += 'X';
	                        }

	                        index += 3;

	                        break;
	                    }

	                    if (
	                        nextnext === 'I' ||
	                        nextnext === 'E' ||
	                        nextnext === 'Y'
	                    ) {
	                        primary += 'S';
	                        secondary += 'S';
	                        index += 3;
	                        break;
	                    }

	                    primary += 'SK';
	                    secondary += 'SK';
	                    index += 3;

	                    break;
	                }

	                subvalue = value.slice(index - 2, index);

	                /*
	                 * French such as `resnais`, `artois`.
	                 */

	                if (
	                    index === last &&
	                    (
	                        subvalue === 'AI' ||
	                        subvalue === 'OI'
	                    )
	                ) {
	                    secondary += 'S';
	                } else {
	                    primary += 'S';
	                    secondary += 'S';
	                }

	                if (
	                    next === 'S'
	                    /*
	                     * Bug: already taken care of by `German &
	                     * Anglicization's` above:
	                     *
	                     * || next === 'Z'
	                     */
	                ) {
	                    index++;
	                }

	                index++;

	                break;
	            case 'T':
	                if (
	                    next === 'I' &&
	                    nextnext === 'O' &&
	                    characters[index + 3] === 'N'
	                ) {
	                    primary += 'X';
	                    secondary += 'X';
	                    index += 3;

	                    break;
	                }

	                subvalue = value.slice(index + 1, index + 3);

	                if (
	                    (
	                        next === 'I' &&
	                        nextnext === 'A'
	                    ) || (
	                        next === 'C' &&
	                        nextnext === 'H'
	                    )
	                ) {
	                    primary += 'X';
	                    secondary += 'X';
	                    index += 3;

	                    break;
	                }

	                if (next === 'H' || (next === 'T' && nextnext === 'H')) {
	                    /*
	                     * Special case `Thomas`, `Thames` or Germanic.
	                     */

	                    if (
	                        isGermanic ||
	                        (
	                            (nextnext === 'O' || nextnext === 'A') &&
	                            characters[index + 3] === 'M'
	                        )
	                    ) {
	                        primary += 'T';
	                        secondary += 'T';
	                    } else {
	                        primary += '0';
	                        secondary += 'T';
	                    }

	                    index += 2;

	                    break;
	                }

	                if (next === 'T' || next === 'D') {
	                    index++;
	                }

	                index++;
	                primary += 'T';
	                secondary += 'T';

	                break;
	            case 'V':
	                if (next === 'V') {
	                    index++;
	                }

	                primary += 'F';
	                secondary += 'F';
	                index++;

	                break;
	            case 'W':
	                /*
	                 * Can also be in middle of word (as already taken care of
	                 * for initial).
	                 */

	                if (next === 'R') {
	                    primary += 'R';
	                    secondary += 'R';
	                    index += 2;

	                    break;
	                }

	                if (index === 0) {
	                    /*
	                     * `Wasserman` should match `Vasserman`.
	                     */

	                    if (VOWELS.test(next)) {
	                        primary += 'A';
	                        secondary += 'F';
	                    } else if (next === 'H') {
	                        /*
	                         * Need `Uomo` to match `Womo`.
	                         */

	                        primary += 'A';
	                        secondary += 'A';
	                    }
	                }

	                /*
	                 * `Arnow` should match `Arnoff`.
	                 */

	                if (
	                    (
	                        (prev === 'E' || prev === 'O') &&
	                        next === 'S' && nextnext === 'K' &&
	                        (
	                            characters[index + 3] === 'I' ||
	                            characters[index + 3] === 'Y'
	                        )
	                    ) ||
	                    /*
	                     * Maybe a bug? Shouldn't this be general Germanic?
	                     */

	                    value.slice(0, 3) === 'SCH' ||
	                    (index === last && VOWELS.test(prev))
	                ) {
	                    secondary += 'F';
	                    index++;

	                    break;
	                }

	                /*
	                 * Polish such as `Filipowicz`.
	                 */

	                if (
	                    next === 'I' &&
	                    (nextnext === 'C' || nextnext === 'T') &&
	                    characters[index + 3] === 'Z'
	                ) {
	                    primary += 'TS';
	                    secondary += 'FX';
	                    index += 4;

	                    break;
	                }

	                index++;

	                break;
	            case 'X':
	                /*
	                 * French such as `breaux`.
	                 */

	                if (
	                    index === last ||
	                    (
	                        /*
	                         * Bug: IAU and EAU also match by AU
	                         * /IAU|EAU/.test(value.slice(index - 3, index)) ||
	                         */
	                        prev === 'U' &&
	                        (
	                            characters[index - 2] === 'A' ||
	                            characters[index - 2] === 'O'
	                        )
	                    )
	                ) {
	                    primary += 'KS';
	                    secondary += 'KS';
	                }

	                if (next === 'C' || next === 'X') {
	                    index++;
	                }

	                index++;

	                break;
	            case 'Z':
	                /*
	                 * Chinese pinyin such as `Zhao`.
	                 */

	                if (next === 'H') {
	                    primary += 'J';
	                    secondary += 'J';
	                    index += 2;

	                    break;
	                } else if (
	                    (
	                        next === 'Z' &&
	                        (
	                            nextnext === 'A' || nextnext === 'I' ||
	                            nextnext === 'O'
	                        )
	                    ) ||
	                    (isSlavoGermanic && index > 0 && prev !== 'T')
	                ) {
	                    primary += 'S';
	                    secondary += 'TS';
	                } else {
	                    primary += 'S';
	                    secondary += 'S';
	                }

	                if (next === 'Z') {
	                    index++;
	                }

	                index++;

	                break;
	            default:
	                index++;

	        }
	    }

	    return [primary, secondary];
	}

	/*
	 * Expose `doubleMetaphone`.
	 */

	module.exports = doubleMetaphone;


/***/ }
/******/ ]);
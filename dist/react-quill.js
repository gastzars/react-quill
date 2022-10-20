(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("prop-types"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "prop-types", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["ReactQuill"] = factory(require("react"), require("react-dom"), require("prop-types"), require("react-dom/server"));
	else
		root["ReactQuill"] = factory(root["React"], root["ReactDOM"], root["PropTypes"], root["ReactDOMServer"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_145__, __WEBPACK_EXTERNAL_MODULE_148__) {
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	/*
	React-Quill v1.0.0
	https://github.com/zenoamaro/react-quill
	*/
	var Quill = __webpack_require__(/*! quill */ 1);
	var Component = __webpack_require__(/*! ./component */ 2);
	
	module.exports = Component;
	module.exports.default = Component;
	module.exports.Quill = Quill;
	module.exports.Mixin = __webpack_require__(/*! ./mixin */ 13);
	module.exports.Toolbar = __webpack_require__(/*! ./toolbar */ 147);


/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./~/quill/dist/quill.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/*!
	 * Quill Editor v2.0.0-dev.4
	 * https://quilljs.com/
	 * Copyright (c) 2014, Jason Chen
	 * Copyright (c) 2013, salesforce.com
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(typeof exports === 'object' && typeof module === 'object')
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Quill"] = factory();
		else
			root["Quill"] = factory();
	})(window, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
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
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 0);
	/******/ })
	/************************************************************************/
	/******/ ({
	
	/***/ "./assets/icons/align-center.svg":
	/*!***************************************!*\
	  !*** ./assets/icons/align-center.svg ***!
	  \***************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-center.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/align-justify.svg":
	/*!****************************************!*\
	  !*** ./assets/icons/align-justify.svg ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-justify.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/align-left.svg":
	/*!*************************************!*\
	  !*** ./assets/icons/align-left.svg ***!
	  \*************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-left.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/align-right.svg":
	/*!**************************************!*\
	  !*** ./assets/icons/align-right.svg ***!
	  \**************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-right.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/background.svg":
	/*!*************************************!*\
	  !*** ./assets/icons/background.svg ***!
	  \*************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <g class=\\\"ql-fill ql-color-label\\\"> <polygon points=\\\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\\\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\\\"6.817 5 6 5 6 6 6.38 6 6.817 5\\\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\\\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\\\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\\\"4.63 10 4 10 4 11 4.192 11 4.63 10\\\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\\\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\\\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\\\"12 6.868 12 6 11.62 6 12 6.868\\\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\\\"12.933 9 13 9 13 8 12.495 8 12.933 9\\\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\\\"5.5 13 9 5 12.5 13\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/background.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/blockquote.svg":
	/*!*************************************!*\
	  !*** ./assets/icons/blockquote.svg ***!
	  \*************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=4 y=5></rect> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=11 y=5></rect> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M14,8c0,4.031-3,5-3,5></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/blockquote.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/bold.svg":
	/*!*******************************!*\
	  !*** ./assets/icons/bold.svg ***!
	  \*******************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/bold.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/clean.svg":
	/*!********************************!*\
	  !*** ./assets/icons/clean.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/clean.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/code.svg":
	/*!*******************************!*\
	  !*** ./assets/icons/code.svg ***!
	  \*******************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"5 7 3 9 5 11\\\"></polyline> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"13 7 15 9 13 11\\\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/code.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/color.svg":
	/*!********************************!*\
	  !*** ./assets/icons/color.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-color-label ql-stroke ql-transparent\\\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\\\"5.5 11 9 3 12.5 11\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/color.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/direction-ltr.svg":
	/*!****************************************!*\
	  !*** ./assets/icons/direction-ltr.svg ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"3 11 5 9 3 7 3 11\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-ltr.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/direction-rtl.svg":
	/*!****************************************!*\
	  !*** ./assets/icons/direction-rtl.svg ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"15 12 13 10 15 8 15 12\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-rtl.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/dropdown.svg":
	/*!***********************************!*\
	  !*** ./assets/icons/dropdown.svg ***!
	  \***********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=ql-stroke points=\\\"7 11 9 13 11 11 7 11\\\"></polygon> <polygon class=ql-stroke points=\\\"7 7 9 5 11 7 7 7\\\"></polygon> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/dropdown.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/formula.svg":
	/*!**********************************!*\
	  !*** ./assets/icons/formula.svg ***!
	  \**********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/formula.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/header-2.svg":
	/*!***********************************!*\
	  !*** ./assets/icons/header-2.svg ***!
	  \***********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/header-2.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/header.svg":
	/*!*********************************!*\
	  !*** ./assets/icons/header.svg ***!
	  \*********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/header.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/image.svg":
	/*!********************************!*\
	  !*** ./assets/icons/image.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\\\"ql-even ql-fill\\\" points=\\\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/image.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/indent.svg":
	/*!*********************************!*\
	  !*** ./assets/icons/indent.svg ***!
	  \*********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\\\"ql-fill ql-stroke\\\" points=\\\"3 7 3 11 5 9 3 7\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/indent.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/italic.svg":
	/*!*********************************!*\
	  !*** ./assets/icons/italic.svg ***!
	  \*********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/italic.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/link.svg":
	/*!*******************************!*\
	  !*** ./assets/icons/link.svg ***!
	  \*******************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\\\"ql-even ql-stroke\\\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\\\"ql-even ql-stroke\\\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/link.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/list-bullet.svg":
	/*!**************************************!*\
	  !*** ./assets/icons/list-bullet.svg ***!
	  \**************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-bullet.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/list-check.svg":
	/*!*************************************!*\
	  !*** ./assets/icons/list-check.svg ***!
	  \*************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\\\"3 4 4 5 6 3\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\\\"3 14 4 15 6 13\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"3 9 4 10 6 8\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-check.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/list-ordered.svg":
	/*!***************************************!*\
	  !*** ./assets/icons/list-ordered.svg ***!
	  \***************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\\\"ql-stroke ql-thin\\\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\\\"ql-stroke ql-thin\\\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\\\"ql-stroke ql-thin\\\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-ordered.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/outdent.svg":
	/*!**********************************!*\
	  !*** ./assets/icons/outdent.svg ***!
	  \**********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"5 7 5 11 3 9 5 7\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/outdent.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/strike.svg":
	/*!*********************************!*\
	  !*** ./assets/icons/strike.svg ***!
	  \*********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-stroke ql-thin\\\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/strike.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/subscript.svg":
	/*!************************************!*\
	  !*** ./assets/icons/subscript.svg ***!
	  \************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/subscript.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/superscript.svg":
	/*!**************************************!*\
	  !*** ./assets/icons/superscript.svg ***!
	  \**************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/superscript.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/table.svg":
	/*!********************************!*\
	  !*** ./assets/icons/table.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=2 width=3 x=5 y=5></rect> <rect class=ql-fill height=2 width=4 x=9 y=5></rect> <g class=\\\"ql-fill ql-transparent\\\"> <rect height=2 width=3 x=5 y=8></rect> <rect height=2 width=4 x=9 y=8></rect> <rect height=2 width=3 x=5 y=11></rect> <rect height=2 width=4 x=9 y=11></rect> </g> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/table.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/underline.svg":
	/*!************************************!*\
	  !*** ./assets/icons/underline.svg ***!
	  \************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/underline.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/video.svg":
	/*!********************************!*\
	  !*** ./assets/icons/video.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/video.svg?");
	
	/***/ }),
	
	/***/ "./blots/block.js":
	/*!************************!*\
	  !*** ./blots/block.js ***!
	  \************************/
	/*! exports provided: blockDelta, bubbleFormats, BlockEmbed, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockDelta\", function() { return blockDelta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubbleFormats\", function() { return bubbleFormats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlockEmbed\", function() { return BlockEmbed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline */ \"./blots/inline.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\n\n\nconst NEWLINE_LENGTH = 1;\nclass Block extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"BlockBlot\"] {\n  constructor() {\n    super(...arguments);\n    this.cache = {};\n  }\n  delta() {\n    if (this.cache.delta == null) {\n      this.cache.delta = blockDelta(this);\n    }\n    return this.cache.delta;\n  }\n  deleteAt(index, length) {\n    super.deleteAt(index, length);\n    this.cache = {};\n  }\n  formatAt(index, length, name, value) {\n    if (length <= 0) return;\n    if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK)) {\n      if (index + length === this.length()) {\n        this.format(name, value);\n      }\n    } else {\n      super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);\n    }\n    this.cache = {};\n  }\n  insertAt(index, value, def) {\n    if (def != null) {\n      super.insertAt(index, value, def);\n      this.cache = {};\n      return;\n    }\n    if (value.length === 0) return;\n    const lines = value.split('\\n');\n    const text = lines.shift();\n    if (text.length > 0) {\n      if (index < this.length() - 1 || this.children.tail == null) {\n        super.insertAt(Math.min(index, this.length() - 1), text);\n      } else {\n        this.children.tail.insertAt(this.children.tail.length(), text);\n      }\n      this.cache = {};\n    }\n    let block = this;\n    lines.reduce((lineIndex, line) => {\n      block = block.split(lineIndex, true);\n      block.insertAt(0, line);\n      return line.length;\n    }, index + text.length);\n  }\n  insertBefore(blot, ref) {\n    const {\n      head\n    } = this.children;\n    super.insertBefore(blot, ref);\n    if (head instanceof _break__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      head.remove();\n    }\n    this.cache = {};\n  }\n  length() {\n    if (this.cache.length == null) {\n      this.cache.length = super.length() + NEWLINE_LENGTH;\n    }\n    return this.cache.length;\n  }\n  moveChildren(target, ref) {\n    super.moveChildren(target, ref);\n    this.cache = {};\n  }\n  optimize(context) {\n    super.optimize(context);\n    this.cache = {};\n  }\n  path(index) {\n    return super.path(index, true);\n  }\n  removeChild(child) {\n    super.removeChild(child);\n    this.cache = {};\n  }\n  split(index) {\n    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {\n      const clone = this.clone();\n      if (index === 0) {\n        this.parent.insertBefore(clone, this);\n        return this;\n      }\n      this.parent.insertBefore(clone, this.next);\n      return clone;\n    }\n    const next = super.split(index, force);\n    this.cache = {};\n    return next;\n  }\n}\nBlock.blotName = 'block';\nBlock.tagName = 'P';\nBlock.defaultChild = _break__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nBlock.allowedChildren = [_break__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _inline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"], _text__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\nclass BlockEmbed extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  attach() {\n    super.attach();\n    this.attributes = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"AttributorStore\"](this.domNode);\n  }\n  delta() {\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(this.value(), Object.assign(Object.assign({}, this.formats()), this.attributes.values()));\n  }\n  format(name, value) {\n    const attribute = this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK_ATTRIBUTE);\n    if (attribute != null) {\n      // @ts-expect-error TODO: Scroll#query() should return Attributor when scope is attribute\n      this.attributes.attribute(attribute, value);\n    }\n  }\n  formatAt(index, length, name, value) {\n    this.format(name, value);\n  }\n  insertAt(index, value, def) {\n    if (typeof value === 'string' && value.endsWith('\\n')) {\n      const block = this.scroll.create(Block.blotName);\n      this.parent.insertBefore(block, index === 0 ? this : this.next);\n      block.insertAt(0, value.slice(0, -1));\n    } else {\n      super.insertAt(index, value, def);\n    }\n  }\n}\nBlockEmbed.scope = parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK_BLOT;\n// It is important for cursor behavior BlockEmbeds use tags that are block level elements\nfunction blockDelta(blot) {\n  let filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  return blot\n  // @ts-expect-error\n  .descendants(parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"]).reduce((delta, leaf) => {\n    if (leaf.length() === 0) {\n      return delta;\n    }\n    return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a()).insert('\\n', bubbleFormats(blot));\n}\nfunction bubbleFormats(blot) {\n  let formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  let filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  if (blot == null) return formats;\n  if (typeof blot.formats === 'function') {\n    formats = Object.assign(Object.assign({}, formats), blot.formats());\n    if (filter) {\n      // exclude syntax highlighting from deltas and getFormat()\n      delete formats['code-token'];\n    }\n  }\n  if (blot.parent == null || blot.parent.statics.blotName === 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {\n    return formats;\n  }\n  return bubbleFormats(blot.parent, formats, filter);\n}\n\n\n//# sourceURL=webpack://Quill/./blots/block.js?");
	
	/***/ }),
	
	/***/ "./blots/break.js":
	/*!************************!*\
	  !*** ./blots/break.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Break extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static value() {\n    return undefined;\n  }\n  optimize() {\n    if (this.prev || this.next) {\n      this.remove();\n    }\n  }\n  length() {\n    return 0;\n  }\n  value() {\n    return '';\n  }\n}\nBreak.blotName = 'break';\nBreak.tagName = 'BR';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Break);\n\n//# sourceURL=webpack://Quill/./blots/break.js?");
	
	/***/ }),
	
	/***/ "./blots/container.js":
	/*!****************************!*\
	  !*** ./blots/container.js ***!
	  \****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Container extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ContainerBlot\"] {}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\n//# sourceURL=webpack://Quill/./blots/container.js?");
	
	/***/ }),
	
	/***/ "./blots/cursor.js":
	/*!*************************!*\
	  !*** ./blots/cursor.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\nclass Cursor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  constructor(scroll, domNode, selection) {\n    super(scroll, domNode);\n    this.selection = selection;\n    this.textNode = document.createTextNode(Cursor.CONTENTS);\n    this.domNode.appendChild(this.textNode);\n    this.savedLength = 0;\n  }\n  static value() {\n    return undefined;\n  }\n  detach() {\n    // super.detach() will also clear domNode.__blot\n    if (this.parent != null) this.parent.removeChild(this);\n  }\n  format(name, value) {\n    if (this.savedLength !== 0) {\n      super.format(name, value);\n      return;\n    }\n    let target = this;\n    let index = 0;\n    while (target != null && target.statics.scope !== parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK_BLOT) {\n      index += target.offset(target.parent);\n      target = target.parent;\n    }\n    if (target != null) {\n      this.savedLength = Cursor.CONTENTS.length;\n      // @ts-expect-error TODO: allow empty context in Parchment\n      target.optimize();\n      target.formatAt(index, Cursor.CONTENTS.length, name, value);\n      this.savedLength = 0;\n    }\n  }\n  index(node, offset) {\n    if (node === this.textNode) return 0;\n    return super.index(node, offset);\n  }\n  length() {\n    return this.savedLength;\n  }\n  position() {\n    return [this.textNode, this.textNode.data.length];\n  }\n  remove() {\n    super.remove();\n    this.parent = null;\n  }\n  restore() {\n    if (this.selection.composing || this.parent == null) return null;\n    const range = this.selection.getNativeRange();\n    // Browser may push down styles/nodes inside the cursor blot.\n    // https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#push-down-values\n    while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {\n      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);\n    }\n    const prevTextBlot = this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ? this.prev : null;\n    const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;\n    const nextTextBlot = this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ? this.next : null;\n    // @ts-expect-error TODO: make TextBlot.text public\n    const nextText = nextTextBlot ? nextTextBlot.text : '';\n    const {\n      textNode\n    } = this;\n    // take text from inside this blot and reset it\n    const newText = textNode.data.split(Cursor.CONTENTS).join('');\n    textNode.data = Cursor.CONTENTS;\n    // proactively merge TextBlots around cursor so that optimization\n    // doesn't lose the cursor.  the reason we are here in cursor.restore\n    // could be that the user clicked in prevTextBlot or nextTextBlot, or\n    // the user typed something.\n    let mergedTextBlot;\n    if (prevTextBlot) {\n      mergedTextBlot = prevTextBlot;\n      if (newText || nextTextBlot) {\n        prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);\n        if (nextTextBlot) {\n          nextTextBlot.remove();\n        }\n      }\n    } else if (nextTextBlot) {\n      mergedTextBlot = nextTextBlot;\n      nextTextBlot.insertAt(0, newText);\n    } else {\n      const newTextNode = document.createTextNode(newText);\n      mergedTextBlot = this.scroll.create(newTextNode);\n      this.parent.insertBefore(mergedTextBlot, this);\n    }\n    this.remove();\n    if (range) {\n      // calculate selection to restore\n      const remapOffset = (node, offset) => {\n        if (prevTextBlot && node === prevTextBlot.domNode) {\n          return offset;\n        }\n        if (node === textNode) {\n          return prevTextLength + offset - 1;\n        }\n        if (nextTextBlot && node === nextTextBlot.domNode) {\n          return prevTextLength + newText.length + offset;\n        }\n        return null;\n      };\n      const start = remapOffset(range.start.node, range.start.offset);\n      const end = remapOffset(range.end.node, range.end.offset);\n      if (start !== null && end !== null) {\n        return {\n          startNode: mergedTextBlot.domNode,\n          startOffset: start,\n          endNode: mergedTextBlot.domNode,\n          endOffset: end\n        };\n      }\n    }\n    return null;\n  }\n  update(mutations, context) {\n    if (mutations.some(mutation => {\n      return mutation.type === 'characterData' && mutation.target === this.textNode;\n    })) {\n      const range = this.restore();\n      if (range) context.range = range;\n    }\n  }\n  // Avoid .ql-cursor being a descendant of `<a/>`.\n  // The reason is Safari pushes down `<a/>` on text insertion.\n  // That will cause DOM nodes not sync with the model.\n  //\n  // For example ({I} is the caret), given the markup:\n  //    <a><span class=\"ql-cursor\">\\uFEFF{I}</span></a>\n  // When typing a char \"x\", `<a/>` will be pushed down inside the `<span>` first:\n  //    <span class=\"ql-cursor\"><a>\\uFEFF{I}</a></span>\n  // And then \"x\" will be inserted after `<a/>`:\n  //    <span class=\"ql-cursor\"><a>\\uFEFF</a>d{I}</span>\n  optimize(context) {\n    super.optimize(context);\n    let {\n      parent\n    } = this;\n    while (parent) {\n      if (parent.domNode.tagName === 'A') {\n        this.savedLength = Cursor.CONTENTS.length;\n        // @ts-expect-error TODO: make isolate generic\n        parent.isolate(this.offset(parent), this.length()).unwrap();\n        this.savedLength = 0;\n        break;\n      }\n      parent = parent.parent;\n    }\n  }\n  value() {\n    return '';\n  }\n}\nCursor.blotName = 'cursor';\nCursor.className = 'ql-cursor';\nCursor.tagName = 'span';\nCursor.CONTENTS = '\\uFEFF'; // Zero width no break space\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\n\n//# sourceURL=webpack://Quill/./blots/cursor.js?");
	
	/***/ }),
	
	/***/ "./blots/embed.js":
	/*!************************!*\
	  !*** ./blots/embed.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\nconst GUARD_TEXT = '\\uFEFF';\nclass Embed extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  constructor(scroll, node) {\n    super(scroll, node);\n    this.contentNode = document.createElement('span');\n    this.contentNode.setAttribute('contenteditable', 'false');\n    Array.from(this.domNode.childNodes).forEach(childNode => {\n      this.contentNode.appendChild(childNode);\n    });\n    this.leftGuard = document.createTextNode(GUARD_TEXT);\n    this.rightGuard = document.createTextNode(GUARD_TEXT);\n    this.domNode.appendChild(this.leftGuard);\n    this.domNode.appendChild(this.contentNode);\n    this.domNode.appendChild(this.rightGuard);\n  }\n  index(node, offset) {\n    if (node === this.leftGuard) return 0;\n    if (node === this.rightGuard) return 1;\n    return super.index(node, offset);\n  }\n  restore(node) {\n    let range;\n    let textNode;\n    const text = node.data.split(GUARD_TEXT).join('');\n    if (node === this.leftGuard) {\n      if (this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        const prevLength = this.prev.length();\n        this.prev.insertAt(prevLength, text);\n        range = {\n          startNode: this.prev.domNode,\n          startOffset: prevLength + text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    } else if (node === this.rightGuard) {\n      if (this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this.next.insertAt(0, text);\n        range = {\n          startNode: this.next.domNode,\n          startOffset: text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this.next);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    }\n    node.data = GUARD_TEXT;\n    return range;\n  }\n  update(mutations, context) {\n    mutations.forEach(mutation => {\n      if (mutation.type === 'characterData' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {\n        const range = this.restore(mutation.target);\n        if (range) context.range = range;\n      }\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Embed);\n\n//# sourceURL=webpack://Quill/./blots/embed.js?");
	
	/***/ }),
	
	/***/ "./blots/inline.js":
	/*!*************************!*\
	  !*** ./blots/inline.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\nclass Inline extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"InlineBlot\"] {\n  static compare(self, other) {\n    const selfIndex = Inline.order.indexOf(self);\n    const otherIndex = Inline.order.indexOf(other);\n    if (selfIndex >= 0 || otherIndex >= 0) {\n      return selfIndex - otherIndex;\n    }\n    if (self === other) {\n      return 0;\n    }\n    if (self < other) {\n      return -1;\n    }\n    return 1;\n  }\n  formatAt(index, length, name, value) {\n    if (Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOT)) {\n      const blot = this.isolate(index, length);\n      if (value) {\n        blot.wrap(name, value);\n      }\n    } else {\n      super.formatAt(index, length, name, value);\n    }\n  }\n  optimize(context) {\n    super.optimize(context);\n    if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {\n      const parent = this.parent.isolate(this.offset(), this.length());\n      // @ts-expect-error TODO: make isolate generic\n      this.moveChildren(parent);\n      parent.wrap(this);\n    }\n  }\n}\nInline.allowedChildren = [Inline, _break__WEBPACK_IMPORTED_MODULE_1__[\"default\"], parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n// Lower index means deeper in the DOM tree, since not found (-1) is for embeds\nInline.order = ['cursor', 'inline', 'link', 'underline', 'strike', 'italic', 'bold', 'script', 'code' // Must be higher\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inline);\n\n//# sourceURL=webpack://Quill/./blots/inline.js?");
	
	/***/ }),
	
	/***/ "./blots/scroll.js":
	/*!*************************!*\
	  !*** ./blots/scroll.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ \"./blots/block.js\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./blots/container.js\");\n\n\n\n\n\nfunction isLine(blot) {\n  return blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"default\"] || blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"];\n}\nfunction isUpdatable(blot) {\n  return typeof blot.updateContent === 'function';\n}\nclass Scroll extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ScrollBlot\"] {\n  constructor(registry, domNode, _ref) {\n    let {\n      emitter\n    } = _ref;\n    super(registry, domNode);\n    this.emitter = emitter;\n    this.batch = false;\n    this.optimize();\n    this.enable();\n    this.domNode.addEventListener('dragstart', e => this.handleDragStart(e));\n  }\n  batchStart() {\n    if (!Array.isArray(this.batch)) {\n      this.batch = [];\n    }\n  }\n  batchEnd() {\n    if (!this.batch) return;\n    const mutations = this.batch;\n    this.batch = false;\n    this.update(mutations);\n  }\n  emitMount(blot) {\n    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BLOT_MOUNT, blot);\n  }\n  emitUnmount(blot) {\n    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BLOT_UNMOUNT, blot);\n  }\n  emitEmbedUpdate(blot, change) {\n    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_EMBED_UPDATE, blot, change);\n  }\n  deleteAt(index, length) {\n    const [first, offset] = this.line(index);\n    const [last] = this.line(index + length);\n    super.deleteAt(index, length);\n    if (last != null && first !== last && offset > 0) {\n      if (first instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"] || last instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"]) {\n        this.optimize();\n        return;\n      }\n      const ref = last.children.head instanceof _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"] ? null : last.children.head;\n      first.moveChildren(last, ref);\n      first.remove();\n    }\n    this.optimize();\n  }\n  enable() {\n    let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n    this.domNode.setAttribute('contenteditable', enabled ? 'true' : 'false');\n  }\n  formatAt(index, length, format, value) {\n    super.formatAt(index, length, format, value);\n    this.optimize();\n  }\n  handleDragStart(event) {\n    event.preventDefault();\n  }\n  insertAt(index, value, def) {\n    if (index >= this.length()) {\n      if (def == null || this.scroll.query(value, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK) == null) {\n        const blot = this.scroll.create(this.statics.defaultChild.blotName);\n        this.appendChild(blot);\n        if (def == null && value.endsWith('\\n')) {\n          blot.insertAt(0, value.slice(0, -1), def);\n        } else {\n          blot.insertAt(0, value, def);\n        }\n      } else {\n        const embed = this.scroll.create(value, def);\n        this.appendChild(embed);\n      }\n    } else {\n      super.insertAt(index, value, def);\n    }\n    this.optimize();\n  }\n  insertBefore(blot, ref) {\n    if (blot.statics.scope === parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE_BLOT) {\n      const wrapper = this.scroll.create(this.statics.defaultChild.blotName);\n      wrapper.appendChild(blot);\n      super.insertBefore(wrapper, ref);\n    } else {\n      super.insertBefore(blot, ref);\n    }\n  }\n  isEnabled() {\n    return this.domNode.getAttribute('contenteditable') === 'true';\n  }\n  leaf(index) {\n    const last = this.path(index).pop();\n    if (!last) {\n      return [null, -1];\n    }\n    const [blot, offset] = last;\n    return blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"] ? [blot, offset] : [null, -1];\n  }\n  line(index) {\n    if (index === this.length()) {\n      return this.line(index - 1);\n    }\n    // @ts-expect-error TODO: make descendant() generic\n    return this.descendant(isLine, index);\n  }\n  lines() {\n    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;\n    const getLines = (blot, blotIndex, blotLength) => {\n      let lines = [];\n      let lengthLeft = blotLength;\n      blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength) => {\n        if (isLine(child)) {\n          lines.push(child);\n        } else if (child instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"ContainerBlot\"]) {\n          lines = lines.concat(getLines(child, childIndex, lengthLeft));\n        }\n        lengthLeft -= childLength;\n      });\n      return lines;\n    };\n    return getLines(this, index, length);\n  }\n  optimize() {\n    let mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    if (this.batch) return;\n    super.optimize(mutations, context);\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, mutations, context);\n    }\n  }\n  path(index) {\n    return super.path(index).slice(1); // Exclude self\n  }\n\n  remove() {\n    // Never remove self\n  }\n  update(mutations) {\n    if (this.batch) {\n      if (Array.isArray(mutations)) {\n        this.batch = this.batch.concat(mutations);\n      }\n      return;\n    }\n    let source = _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER;\n    if (typeof mutations === 'string') {\n      source = mutations;\n    }\n    if (!Array.isArray(mutations)) {\n      mutations = this.observer.takeRecords();\n    }\n    mutations = mutations.filter(_ref2 => {\n      let {\n        target\n      } = _ref2;\n      const blot = this.find(target, true);\n      return blot && !isUpdatable(blot);\n    });\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BEFORE_UPDATE, source, mutations);\n    }\n    super.update(mutations.concat([])); // pass copy\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_UPDATE, source, mutations);\n    }\n  }\n  updateEmbedAt(index, key, change) {\n    // Currently it only supports top-level embeds (BlockEmbed).\n    // We can update `ParentBlot` in parchment to support inline embeds.\n    const [blot] = this.descendant(b => b instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"], index);\n    if (blot && blot.statics.blotName === key && isUpdatable(blot)) {\n      blot.updateContent(change);\n    }\n  }\n}\nScroll.blotName = 'scroll';\nScroll.className = 'ql-editor';\nScroll.tagName = 'DIV';\nScroll.defaultChild = _block__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nScroll.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"], _container__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scroll);\n\n//# sourceURL=webpack://Quill/./blots/scroll.js?");
	
	/***/ }),
	
	/***/ "./blots/text.js":
	/*!***********************!*\
	  !*** ./blots/text.js ***!
	  \***********************/
	/*! exports provided: default, escapeText */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeText\", function() { return escapeText; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Text extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"TextBlot\"] {}\nfunction escapeText(text) {\n  return text.replace(/[&<>\"']/g, s => {\n    // https://lodash.com/docs#escape\n    const entityMap = {\n      '&': '&amp;',\n      '<': '&lt;',\n      '>': '&gt;',\n      '\"': '&quot;',\n      \"'\": '&#39;'\n    };\n    return entityMap[s];\n  });\n}\n\n\n//# sourceURL=webpack://Quill/./blots/text.js?");
	
	/***/ }),
	
	/***/ "./core.js":
	/*!*****************!*\
	  !*** ./core.js ***!
	  \*****************/
	/*! exports provided: Delta, Op, OpIterator, AttributeMap, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/quill */ \"./core/quill.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blots/container */ \"./blots/container.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blots/embed */ \"./blots/embed.js\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _blots_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blots/scroll */ \"./blots/scroll.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blots/text */ \"./blots/text.js\");\n/* harmony import */ var _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/clipboard */ \"./modules/clipboard.js\");\n/* harmony import */ var _modules_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/history */ \"./modules/history.js\");\n/* harmony import */ var _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/keyboard */ \"./modules/keyboard.js\");\n/* harmony import */ var _modules_uploader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/uploader */ \"./modules/uploader.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Delta\", function() { return quill_delta__WEBPACK_IMPORTED_MODULE_13___default.a; });\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Op\", function() { return quill_delta__WEBPACK_IMPORTED_MODULE_13__[\"Op\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"OpIterator\", function() { return quill_delta__WEBPACK_IMPORTED_MODULE_13__[\"OpIterator\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AttributeMap\", function() { return quill_delta__WEBPACK_IMPORTED_MODULE_13__[\"AttributeMap\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_core_quill__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'blots/block': _blots_block__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'blots/block/embed': _blots_block__WEBPACK_IMPORTED_MODULE_1__[\"BlockEmbed\"],\n  'blots/break': _blots_break__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'blots/container': _blots_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'blots/cursor': _blots_cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  'blots/embed': _blots_embed__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'blots/inline': _blots_inline__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  'blots/scroll': _blots_scroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  'blots/text': _blots_text__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  'modules/clipboard': _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  'modules/history': _modules_history__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  'modules/keyboard': _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  'modules/uploader': _modules_uploader__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_core_quill__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Quill/./core.js?");
	
	/***/ }),
	
	/***/ "./core/editor.js":
	/*!************************!*\
	  !*** ./core/editor.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.clonedeep */ \"./node_modules/lodash.clonedeep/index.js\");\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.isequal */ \"./node_modules/lodash.isequal/index.js\");\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.merge */ \"./node_modules/lodash.merge/index.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n\n\n\n\n\n\n\n\n\n\nconst ASCII = /^[ -~]*$/;\nclass Editor {\n  constructor(scroll) {\n    this.scroll = scroll;\n    this.delta = this.getDelta();\n  }\n  applyDelta(delta) {\n    this.scroll.update();\n    let scrollLength = this.scroll.length();\n    this.scroll.batchStart();\n    const normalizedDelta = normalizeDelta(delta);\n    const deleteDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a();\n    normalizedDelta.reduce((index, op) => {\n      const length = quill_delta__WEBPACK_IMPORTED_MODULE_4__[\"Op\"].length(op);\n      let attributes = op.attributes || {};\n      let addedNewline = false;\n      if (op.insert != null) {\n        deleteDelta.retain(length);\n        if (typeof op.insert === 'string') {\n          const text = op.insert;\n          // @ts-expect-error TODO: Fix this the next time the file is edited.\n          addedNewline = !text.endsWith('\\n') && (scrollLength <= index ||\n          // @ts-expect-error\n          this.scroll.descendant(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"BlockEmbed\"], index)[0]);\n          this.scroll.insertAt(index, text);\n          const [line, offset] = this.scroll.line(index);\n          let formats = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"bubbleFormats\"])(line));\n          if (line instanceof _blots_block__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\n            // @ts-expect-error\n            const [leaf] = line.descendant(parchment__WEBPACK_IMPORTED_MODULE_3__[\"LeafBlot\"], offset);\n            formats = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(formats, Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"bubbleFormats\"])(leaf));\n          }\n          attributes = quill_delta__WEBPACK_IMPORTED_MODULE_4__[\"AttributeMap\"].diff(formats, attributes) || {};\n        } else if (typeof op.insert === 'object') {\n          const key = Object.keys(op.insert)[0]; // There should only be one key\n          if (key == null) return index;\n          // @ts-expect-error TODO: Fix this the next time the file is edited.\n          addedNewline = this.scroll.query(key, parchment__WEBPACK_IMPORTED_MODULE_3__[\"Scope\"].INLINE) != null && (scrollLength <= index ||\n          // @ts-expect-error\n          this.scroll.descendant(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"BlockEmbed\"], index)[0]);\n          this.scroll.insertAt(index, key, op.insert[key]);\n        }\n        scrollLength += length;\n      } else {\n        deleteDelta.push(op);\n        if (op.retain !== null && typeof op.retain === 'object') {\n          const key = Object.keys(op.retain)[0];\n          if (key == null) return index;\n          this.scroll.updateEmbedAt(index, key, op.retain[key]);\n        }\n      }\n      Object.keys(attributes).forEach(name => {\n        this.scroll.formatAt(index, length, name, attributes[name]);\n      });\n      const addedLength = addedNewline ? 1 : 0;\n      scrollLength += addedLength;\n      deleteDelta.delete(addedLength);\n      return index + length + addedLength;\n    }, 0);\n    deleteDelta.reduce((index, op) => {\n      if (typeof op.delete === 'number') {\n        this.scroll.deleteAt(index, op.delete);\n        return index;\n      }\n      return index + quill_delta__WEBPACK_IMPORTED_MODULE_4__[\"Op\"].length(op);\n    }, 0);\n    this.scroll.batchEnd();\n    this.scroll.optimize();\n    return this.update(normalizedDelta);\n  }\n  deleteText(index, length) {\n    this.scroll.deleteAt(index, length);\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().retain(index).delete(length));\n  }\n  formatLine(index, length) {\n    let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    this.scroll.update();\n    Object.keys(formats).forEach(format => {\n      this.scroll.lines(index, Math.max(length, 1)).forEach(line => {\n        line.format(format, formats[format]);\n      });\n    });\n    this.scroll.optimize();\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().retain(index).retain(length, lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(formats));\n    return this.update(delta);\n  }\n  formatText(index, length) {\n    let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, length, format, formats[format]);\n    });\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().retain(index).retain(length, lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(formats));\n    return this.update(delta);\n  }\n  getContents(index, length) {\n    return this.delta.slice(index, index + length);\n  }\n  getDelta() {\n    return this.scroll.lines().reduce((delta, line) => {\n      return delta.concat(line.delta());\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a());\n  }\n  getFormat(index) {\n    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    let lines = [];\n    let leaves = [];\n    if (length === 0) {\n      this.scroll.path(index).forEach(path => {\n        const [blot] = path;\n        if (blot instanceof _blots_block__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\n          lines.push(blot);\n        } else if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_3__[\"LeafBlot\"]) {\n          leaves.push(blot);\n        }\n      });\n    } else {\n      lines = this.scroll.lines(index, length);\n      // @ts-expect-error\n      leaves = this.scroll.descendants(parchment__WEBPACK_IMPORTED_MODULE_3__[\"LeafBlot\"], index, length);\n    }\n    [lines, leaves] = [lines, leaves].map(blots => {\n      if (blots.length === 0) return {};\n      let formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"bubbleFormats\"])(blots.shift());\n      while (Object.keys(formats).length > 0) {\n        const blot = blots.shift();\n        if (blot == null) return formats;\n        formats = combineFormats(Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"bubbleFormats\"])(blot), formats);\n      }\n      return formats;\n    });\n    return Object.assign(Object.assign({}, lines), leaves);\n  }\n  getHTML(index, length) {\n    const [line, lineOffset] = this.scroll.line(index);\n    if (line.length() >= lineOffset + length) {\n      return convertHTML(line, lineOffset, length, true);\n    }\n    return convertHTML(this.scroll, index, length, true);\n  }\n  getText(index, length) {\n    return this.getContents(index, length).filter(op => typeof op.insert === 'string').map(op => op.insert).join('');\n  }\n  insertEmbed(index, embed, value) {\n    this.scroll.insertAt(index, embed, value);\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().retain(index).insert({\n      [embed]: value\n    }));\n  }\n  insertText(index, text) {\n    let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    text = text.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n    this.scroll.insertAt(index, text);\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, text.length, format, formats[format]);\n    });\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().retain(index).insert(text, lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(formats)));\n  }\n  isBlank() {\n    if (this.scroll.children.length === 0) return true;\n    if (this.scroll.children.length > 1) return false;\n    const blot = this.scroll.children.head;\n    if (blot.statics.blotName !== _blots_block__WEBPACK_IMPORTED_MODULE_5__[\"default\"].blotName) return false;\n    const block = blot;\n    if (block.children.length > 1) return false;\n    return block.children.head instanceof _blots_break__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n  }\n  removeFormat(index, length) {\n    const text = this.getText(index, length);\n    const [line, offset] = this.scroll.line(index + length);\n    let suffixLength = 0;\n    let suffix = new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a();\n    if (line != null) {\n      suffixLength = line.length() - offset;\n      suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\\n');\n    }\n    const contents = this.getContents(index, length + suffixLength);\n    const diff = contents.diff(new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().insert(text).concat(suffix));\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().retain(index).concat(diff);\n    return this.applyDelta(delta);\n  }\n  update(change) {\n    let mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    let selectionInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    const oldDelta = this.delta;\n    if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {\n      // Optimization for character changes\n      const textBlot = this.scroll.find(mutations[0].target);\n      const formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"bubbleFormats\"])(textBlot);\n      const index = textBlot.offset(this.scroll);\n      const oldValue = mutations[0].oldValue.replace(_blots_cursor__WEBPACK_IMPORTED_MODULE_7__[\"default\"].CONTENTS, '');\n      const oldText = new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().insert(oldValue);\n      // @ts-expect-error\n      const newText = new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().insert(textBlot.value());\n      const relativeSelectionInfo = selectionInfo && {\n        oldRange: shiftRange(selectionInfo.oldRange, -index),\n        newRange: shiftRange(selectionInfo.newRange, -index)\n      };\n      const diffDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));\n      change = diffDelta.reduce((delta, op) => {\n        if (op.insert) {\n          return delta.insert(op.insert, formats);\n        }\n        return delta.push(op);\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a());\n      this.delta = oldDelta.compose(change);\n    } else {\n      this.delta = this.getDelta();\n      if (!change || !lodash_isequal__WEBPACK_IMPORTED_MODULE_1___default()(oldDelta.compose(change), this.delta)) {\n        change = oldDelta.diff(this.delta, selectionInfo);\n      }\n    }\n    return change;\n  }\n}\nfunction convertListHTML(items, lastIndent, types) {\n  if (items.length === 0) {\n    const [endTag] = getListType(types.pop());\n    if (lastIndent <= 0) {\n      return `</li></${endTag}>`;\n    }\n    return `</li></${endTag}>${convertListHTML([], lastIndent - 1, types)}`;\n  }\n  const [{\n    child,\n    offset,\n    length,\n    indent,\n    type\n  }, ...rest] = items;\n  const [tag, attribute] = getListType(type);\n  if (indent > lastIndent) {\n    types.push(type);\n    if (indent === lastIndent + 1) {\n      return `<${tag}><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;\n    }\n    return `<${tag}><li>${convertListHTML(items, lastIndent + 1, types)}`;\n  }\n  const previousType = types[types.length - 1];\n  if (indent === lastIndent && type === previousType) {\n    return `</li><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;\n  }\n  const [endTag] = getListType(types.pop());\n  return `</li></${endTag}>${convertListHTML(items, lastIndent - 1, types)}`;\n}\nfunction convertHTML(blot, index, length) {\n  let isRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  if (typeof blot.html === 'function') {\n    return blot.html(index, length);\n  }\n  if (blot instanceof _blots_text__WEBPACK_IMPORTED_MODULE_8__[\"default\"]) {\n    return Object(_blots_text__WEBPACK_IMPORTED_MODULE_8__[\"escapeText\"])(blot.value().slice(index, index + length));\n  }\n  if (blot.children) {\n    // TODO fix API\n    if (blot.statics.blotName === 'list-container') {\n      const items = [];\n      blot.children.forEachAt(index, length, (child, offset, childLength) => {\n        const formats = child.formats();\n        items.push({\n          child,\n          offset,\n          length: childLength,\n          indent: formats.indent || 0,\n          type: formats.list\n        });\n      });\n      return convertListHTML(items, -1, []);\n    }\n    const parts = [];\n    blot.children.forEachAt(index, length, (child, offset, childLength) => {\n      parts.push(convertHTML(child, offset, childLength));\n    });\n    if (isRoot || blot.statics.blotName === 'list') {\n      return parts.join('');\n    }\n    const {\n      outerHTML,\n      innerHTML\n    } = blot.domNode;\n    const [start, end] = outerHTML.split(`>${innerHTML}<`);\n    // TODO cleanup\n    if (start === '<table') {\n      return `<table style=\"border: 1px solid #000;\">${parts.join('')}<${end}`;\n    }\n    return `${start}>${parts.join('')}<${end}`;\n  }\n  return blot.domNode.outerHTML;\n}\nfunction combineFormats(formats, combined) {\n  return Object.keys(combined).reduce((merged, name) => {\n    if (formats[name] == null) return merged;\n    if (combined[name] === formats[name]) {\n      merged[name] = combined[name];\n    } else if (Array.isArray(combined[name])) {\n      if (combined[name].indexOf(formats[name]) < 0) {\n        merged[name] = combined[name].concat([formats[name]]);\n      } else {\n        // If style already exists, don't add to an array, but don't lose other styles\n        merged[name] = combined[name];\n      }\n    } else {\n      merged[name] = [combined[name], formats[name]];\n    }\n    return merged;\n  }, {});\n}\nfunction getListType(type) {\n  const tag = type === 'ordered' ? 'ol' : 'ul';\n  switch (type) {\n    case 'checked':\n      return [tag, ' data-list=\"checked\"'];\n    case 'unchecked':\n      return [tag, ' data-list=\"unchecked\"'];\n    default:\n      return [tag, ''];\n  }\n}\nfunction normalizeDelta(delta) {\n  return delta.reduce((normalizedDelta, op) => {\n    if (typeof op.insert === 'string') {\n      const text = op.insert.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n      return normalizedDelta.insert(text, op.attributes);\n    }\n    return normalizedDelta.push(op);\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_4___default.a());\n}\nfunction shiftRange(_ref, amount) {\n  let {\n    index,\n    length\n  } = _ref;\n  return new _selection__WEBPACK_IMPORTED_MODULE_9__[\"Range\"](index + amount, length);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\n\n//# sourceURL=webpack://Quill/./core/editor.js?");
	
	/***/ }),
	
	/***/ "./core/emitter.js":
	/*!*************************!*\
	  !*** ./core/emitter.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('quill:events');\nconst EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];\nEVENTS.forEach(eventName => {\n  document.addEventListener(eventName, function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    Array.from(document.querySelectorAll('.ql-container')).forEach(node => {\n      const quill = _instances__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(node);\n      if (quill && quill.emitter) {\n        quill.emitter.handleDOM(...args);\n      }\n    });\n  });\n});\nclass Emitter extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor() {\n    super();\n    this.listeners = {};\n    this.on('error', debug.error);\n  }\n  emit() {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n    debug.log.call(debug, ...args);\n    // @ts-expect-error\n    return super.emit(...args);\n  }\n  handleDOM(event) {\n    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {\n      args[_key3 - 1] = arguments[_key3];\n    }\n    (this.listeners[event.type] || []).forEach(_ref => {\n      let {\n        node,\n        handler\n      } = _ref;\n      if (event.target === node || node.contains(event.target)) {\n        handler(event, ...args);\n      }\n    });\n  }\n  listenDOM(eventName, node, handler) {\n    if (!this.listeners[eventName]) {\n      this.listeners[eventName] = [];\n    }\n    this.listeners[eventName].push({\n      node,\n      handler\n    });\n  }\n}\nEmitter.events = {\n  EDITOR_CHANGE: 'editor-change',\n  SCROLL_BEFORE_UPDATE: 'scroll-before-update',\n  SCROLL_BLOT_MOUNT: 'scroll-blot-mount',\n  SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',\n  SCROLL_OPTIMIZE: 'scroll-optimize',\n  SCROLL_UPDATE: 'scroll-update',\n  SCROLL_EMBED_UPDATE: 'scroll-embed-update',\n  SELECTION_CHANGE: 'selection-change',\n  TEXT_CHANGE: 'text-change'\n};\nEmitter.sources = {\n  API: 'api',\n  SILENT: 'silent',\n  USER: 'user'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Emitter);\n\n//# sourceURL=webpack://Quill/./core/emitter.js?");
	
	/***/ }),
	
	/***/ "./core/instances.js":
	/*!***************************!*\
	  !*** ./core/instances.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new WeakMap());\n\n//# sourceURL=webpack://Quill/./core/instances.js?");
	
	/***/ }),
	
	/***/ "./core/logger.js":
	/*!************************!*\
	  !*** ./core/logger.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nconst levels = ['error', 'warn', 'log', 'info'];\nlet level = 'warn';\nfunction debug(method) {\n  if (levels.indexOf(method) <= levels.indexOf(level)) {\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n    console[method](...args); // eslint-disable-line no-console\n  }\n}\n\nfunction namespace(ns) {\n  return levels.reduce((logger, method) => {\n    logger[method] = debug.bind(console, method, ns);\n    return logger;\n  }, {});\n}\nnamespace.level = newLevel => {\n  level = newLevel;\n};\ndebug.level = namespace.level;\n/* harmony default export */ __webpack_exports__[\"default\"] = (namespace);\n\n//# sourceURL=webpack://Quill/./core/logger.js?");
	
	/***/ }),
	
	/***/ "./core/module.js":
	/*!************************!*\
	  !*** ./core/module.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nclass Module {\n  constructor(quill) {\n    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    this.quill = quill;\n    this.options = options;\n  }\n}\nModule.DEFAULTS = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack://Quill/./core/module.js?");
	
	/***/ }),
	
	/***/ "./core/quill.js":
	/*!***********************!*\
	  !*** ./core/quill.js ***!
	  \***********************/
	/*! exports provided: globalRegistry, expandConfig, overload, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalRegistry\", function() { return globalRegistry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandConfig\", function() { return expandConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"overload\", function() { return overload; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quill; });\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.clonedeep */ \"./node_modules/lodash.clonedeep/index.js\");\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.merge */ \"./node_modules/lodash.merge/index.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor */ \"./core/editor.js\");\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module */ \"./core/module.js\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme */ \"./core/theme.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('quill');\nconst globalRegistry = new parchment__WEBPACK_IMPORTED_MODULE_2__[\"Registry\"]();\nparchment__WEBPACK_IMPORTED_MODULE_2__[\"ParentBlot\"].uiClass = 'ql-ui';\nclass Quill {\n  constructor(container) {\n    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    this.options = expandConfig(container, options);\n    this.container = this.options.container;\n    if (this.container == null) {\n      debug.error('Invalid Quill container', container);\n      return;\n    }\n    if (this.options.debug) {\n      Quill.debug(this.options.debug);\n    }\n    const html = this.container.innerHTML.trim();\n    this.container.classList.add('ql-container');\n    this.container.innerHTML = '';\n    _instances__WEBPACK_IMPORTED_MODULE_6__[\"default\"].set(this.container, this);\n    this.root = this.addContainer('ql-editor');\n    this.root.classList.add('ql-blank');\n    this.scrollingContainer = this.options.scrollingContainer || this.root;\n    this.emitter = new _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    // @ts-expect-error TODO: fix BlotConstructor\n    const ScrollBlot = this.options.registry.query(parchment__WEBPACK_IMPORTED_MODULE_2__[\"ScrollBlot\"].blotName);\n    this.scroll = new ScrollBlot(this.options.registry, this.root, {\n      emitter: this.emitter\n    });\n    this.editor = new _editor__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.scroll);\n    this.selection = new _selection__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this.scroll, this.emitter);\n    this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap\n    this.keyboard = this.theme.addModule('keyboard');\n    this.clipboard = this.theme.addModule('clipboard');\n    this.history = this.theme.addModule('history');\n    this.uploader = this.theme.addModule('uploader');\n    this.theme.init();\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].events.EDITOR_CHANGE, type => {\n      if (type === _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].events.TEXT_CHANGE) {\n        this.root.classList.toggle('ql-blank', this.editor.isBlank());\n      }\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].events.SCROLL_UPDATE, (source, mutations) => {\n      const oldRange = this.selection.lastRange;\n      const [newRange] = this.selection.getRange();\n      const selectionInfo = oldRange && newRange ? {\n        oldRange,\n        newRange\n      } : undefined;\n      modify.call(this, () => this.editor.update(null, mutations, selectionInfo), source);\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].events.SCROLL_EMBED_UPDATE, (blot, delta) => {\n      const oldRange = this.selection.lastRange;\n      const [newRange] = this.selection.getRange();\n      const selectionInfo = oldRange && newRange ? {\n        oldRange,\n        newRange\n      } : undefined;\n      modify.call(this, () => {\n        const change = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(blot.offset(this)).retain({\n          [blot.statics.blotName]: delta\n        });\n        return this.editor.update(change, [], selectionInfo);\n      }, Quill.sources.USER);\n    });\n    if (html) {\n      const contents = this.clipboard.convert({\n        html: `${html}<p><br></p>`,\n        text: '\\n'\n      });\n      this.setContents(contents);\n    }\n    this.history.clear();\n    if (this.options.placeholder) {\n      this.root.setAttribute('data-placeholder', this.options.placeholder);\n    }\n    if (this.options.readOnly) {\n      this.disable();\n    }\n    this.allowReadOnlyEdits = false;\n  }\n  static debug(limit) {\n    if (limit === true) {\n      limit = 'log';\n    }\n    _logger__WEBPACK_IMPORTED_MODULE_7__[\"default\"].level(limit);\n  }\n  static find(node) {\n    let bubble = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    return _instances__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(node) || globalRegistry.find(node, bubble);\n  }\n  static import(name) {\n    if (this.imports[name] == null) {\n      debug.error(`Cannot import ${name}. Are you sure it was registered?`);\n    }\n    return this.imports[name];\n  }\n  static register(path, target) {\n    let overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    if (typeof path !== 'string') {\n      const name = 'attrName' in path ? path.attrName : path.blotName;\n      if (typeof name === 'string') {\n        // register(Blot | Attributor, overwrite)\n        // @ts-expect-error\n        this.register(`formats/${name}`, path, target);\n      } else {\n        Object.keys(path).forEach(key => {\n          // @ts-expect-error\n          this.register(key, path[key], target);\n        });\n      }\n    } else {\n      if (this.imports[path] != null && !overwrite) {\n        debug.warn(`Overwriting ${path} with`, target);\n      }\n      this.imports[path] = target;\n      if ((path.startsWith('blots/') || path.startsWith('formats/')) &&\n      // @ts-expect-error\n      target.blotName !== 'abstract') {\n        globalRegistry.register(target);\n      }\n      // @ts-expect-error\n      if (typeof target.register === 'function') {\n        // @ts-expect-error\n        target.register(globalRegistry);\n      }\n    }\n  }\n  addContainer(container) {\n    let refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    if (typeof container === 'string') {\n      const className = container;\n      container = document.createElement('div');\n      container.classList.add(className);\n    }\n    this.container.insertBefore(container, refNode);\n    return container;\n  }\n  blur() {\n    this.selection.setRange(null);\n  }\n  deleteText(index, length, source) {\n    // @ts-expect-error\n    [index, length,, source] = overload(index, length, source);\n    return modify.call(this, () => {\n      // @ts-expect-error\n      return this.editor.deleteText(index, length);\n    }, source, index, -1 * length);\n  }\n  disable() {\n    this.enable(false);\n  }\n  editReadOnly(modifier) {\n    this.allowReadOnlyEdits = true;\n    const value = modifier();\n    this.allowReadOnlyEdits = false;\n    return value;\n  }\n  enable() {\n    let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n    this.scroll.enable(enabled);\n    this.container.classList.toggle('ql-disabled', !enabled);\n  }\n  focus() {\n    const {\n      scrollTop\n    } = this.scrollingContainer;\n    this.selection.focus();\n    this.scrollingContainer.scrollTop = scrollTop;\n    this.scrollIntoView();\n  }\n  format(name, value) {\n    let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.API;\n    return modify.call(this, () => {\n      const range = this.getSelection(true);\n      let change = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a();\n      if (range == null) return change;\n      if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK)) {\n        change = this.editor.formatLine(range.index, range.length, {\n          [name]: value\n        });\n      } else if (range.length === 0) {\n        this.selection.format(name, value);\n        return change;\n      } else {\n        change = this.editor.formatText(range.index, range.length, {\n          [name]: value\n        });\n      }\n      this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n      return change;\n    }, source);\n  }\n  formatLine(index, length, name, value, source) {\n    let formats;\n    // eslint-disable-next-line prefer-const\n    [index, length, formats, source] = overload(index, length,\n    // @ts-expect-error\n    name, value, source);\n    return modify.call(this, () => {\n      return this.editor.formatLine(index, length, formats);\n    }, source, index, 0);\n  }\n  formatText(index, length, name, value, source) {\n    let formats;\n    // eslint-disable-next-line prefer-const\n    [index, length, formats, source] = overload(\n    // @ts-expect-error\n    index, length, name, value, source);\n    return modify.call(this, () => {\n      // @ts-expect-error\n      return this.editor.formatText(index, length, formats);\n    }, source, index, 0);\n  }\n  getBounds(index) {\n    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    let bounds;\n    if (typeof index === 'number') {\n      bounds = this.selection.getBounds(index, length);\n    } else {\n      bounds = this.selection.getBounds(index.index, index.length);\n    }\n    if (!bounds) return null;\n    const containerBounds = this.container.getBoundingClientRect();\n    return {\n      bottom: bounds.bottom - containerBounds.top,\n      height: bounds.height,\n      left: bounds.left - containerBounds.left,\n      right: bounds.right - containerBounds.left,\n      top: bounds.top - containerBounds.top,\n      width: bounds.width\n    };\n  }\n  getContents() {\n    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;\n    [index, length] = overload(index, length);\n    return this.editor.getContents(index, length);\n  }\n  getFormat() {\n    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);\n    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    if (typeof index === 'number') {\n      return this.editor.getFormat(index, length);\n    }\n    return this.editor.getFormat(index.index, index.length);\n  }\n  getIndex(blot) {\n    return blot.offset(this.scroll);\n  }\n  getLength() {\n    return this.scroll.length();\n  }\n  getLeaf(index) {\n    return this.scroll.leaf(index);\n  }\n  getLine(index) {\n    return this.scroll.line(index);\n  }\n  getLines() {\n    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;\n    if (typeof index !== 'number') {\n      return this.scroll.lines(index.index, index.length);\n    }\n    return this.scroll.lines(index, length);\n  }\n  getModule(name) {\n    return this.theme.modules[name];\n  }\n  getSelection() {\n    let focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    if (focus) this.focus();\n    this.update(); // Make sure we access getRange with editor in consistent state\n    return this.selection.getRange()[0];\n  }\n  getSemanticHTML() {\n    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    let length = arguments.length > 1 ? arguments[1] : undefined;\n    if (typeof index === 'number') {\n      length = this.getLength() - index;\n    }\n    // @ts-expect-error\n    [index, length] = overload(index, length);\n    return this.editor.getHTML(index, length);\n  }\n  getText() {\n    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    let length = arguments.length > 1 ? arguments[1] : undefined;\n    if (typeof index === 'number') {\n      length = this.getLength() - index;\n    }\n    // @ts-expect-error\n    [index, length] = overload(index, length);\n    return this.editor.getText(index, length);\n  }\n  hasFocus() {\n    return this.selection.hasFocus();\n  }\n  insertEmbed(index, embed, value) {\n    let source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;\n    return modify.call(this, () => {\n      return this.editor.insertEmbed(index, embed, value);\n    }, source, index);\n  }\n  insertText(index, text, name, value, source) {\n    let formats;\n    // eslint-disable-next-line prefer-const\n    [index,, formats, source] = overload(index, 0, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.insertText(index, text, formats);\n    }, source, index, text.length);\n  }\n  isEnabled() {\n    return this.scroll.isEnabled();\n  }\n  off() {\n    return this.emitter.off(...arguments);\n  }\n  on() {\n    return this.emitter.on(...arguments);\n  }\n  once() {\n    return this.emitter.once(...arguments);\n  }\n  removeFormat() {\n    const [index, length,, source] = overload(...arguments);\n    return modify.call(this, () => {\n      return this.editor.removeFormat(index, length);\n    }, source, index);\n  }\n  scrollIntoView() {\n    this.selection.scrollIntoView(this.scrollingContainer);\n  }\n  setContents(delta) {\n    let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.API;\n    return modify.call(this, () => {\n      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a(delta);\n      const length = this.getLength();\n      // Quill will set empty editor to \\n\n      const delete1 = this.editor.deleteText(0, length);\n      // delta always applied before existing content\n      const applied = this.editor.applyDelta(delta);\n      // Remove extra \\n from empty editor initialization\n      const delete2 = this.editor.deleteText(this.getLength() - 1, 1);\n      return delete1.compose(applied).compose(delete2);\n    }, source);\n  }\n  setSelection(index, length, source) {\n    if (index == null) {\n      // @ts-expect-error https://github.com/microsoft/TypeScript/issues/22609\n      this.selection.setRange(null, length || Quill.sources.API);\n    } else {\n      // @ts-expect-error\n      [index, length,, source] = overload(index, length, source);\n      this.selection.setRange(new _selection__WEBPACK_IMPORTED_MODULE_9__[\"Range\"](Math.max(0, index), length), source);\n      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT) {\n        this.selection.scrollIntoView(this.scrollingContainer);\n      }\n    }\n  }\n  setText(text) {\n    let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.API;\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(text);\n    return this.setContents(delta, source);\n  }\n  update() {\n    let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER;\n    const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes\n    this.selection.update(source);\n    // TODO this is usually undefined\n    return change;\n  }\n  updateContents(delta) {\n    let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.API;\n    return modify.call(this, () => {\n      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a(delta);\n      return this.editor.applyDelta(delta);\n    }, source, true);\n  }\n}\nQuill.DEFAULTS = {\n  bounds: null,\n  modules: {},\n  placeholder: '',\n  readOnly: false,\n  registry: globalRegistry,\n  scrollingContainer: null,\n  theme: 'default'\n};\nQuill.events = _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].events;\nQuill.sources = _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources;\n// eslint-disable-next-line no-undef\n// @ts-expect-error defined in webpack\nQuill.version =  false ? undefined : \"2.0.0-dev.4\";\nQuill.imports = {\n  delta: quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a,\n  parchment: parchment__WEBPACK_IMPORTED_MODULE_2__,\n  'core/module': _module__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  'core/theme': _theme__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n};\nfunction expandConfig(container, userConfig) {\n  let expandedConfig = lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({\n    container,\n    modules: {\n      clipboard: true,\n      keyboard: true,\n      history: true,\n      uploader: true\n    }\n  }, userConfig);\n  if (!expandedConfig.theme || expandedConfig.theme === Quill.DEFAULTS.theme) {\n    expandedConfig.theme = _theme__WEBPACK_IMPORTED_MODULE_10__[\"default\"];\n  } else {\n    expandedConfig.theme = Quill.import(`themes/${expandedConfig.theme}`);\n    if (expandedConfig.theme == null) {\n      throw new Error(`Invalid theme ${expandedConfig.theme}. Did you register it?`);\n    }\n  }\n  const themeConfig = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(expandedConfig.theme.DEFAULTS);\n  [themeConfig, expandedConfig].forEach(config => {\n    config.modules = config.modules || {};\n    Object.keys(config.modules).forEach(module => {\n      if (config.modules[module] === true) {\n        config.modules[module] = {};\n      }\n    });\n  });\n  const moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(expandedConfig.modules));\n  const moduleConfig = moduleNames.reduce((config, name) => {\n    const moduleClass = Quill.import(`modules/${name}`);\n    if (moduleClass == null) {\n      debug.error(`Cannot load ${name} module. Are you sure you registered it?`);\n    } else {\n      // @ts-expect-error\n      config[name] = moduleClass.DEFAULTS || {};\n    }\n    return config;\n  }, {});\n  // Special case toolbar shorthand\n  if (expandedConfig.modules != null && expandedConfig.modules.toolbar && expandedConfig.modules.toolbar.constructor !== Object) {\n    expandedConfig.modules.toolbar = {\n      container: expandedConfig.modules.toolbar\n    };\n  }\n  expandedConfig = lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, Quill.DEFAULTS, {\n    modules: moduleConfig\n  }, themeConfig, expandedConfig);\n  ['bounds', 'container', 'scrollingContainer'].forEach(key => {\n    if (typeof expandedConfig[key] === 'string') {\n      expandedConfig[key] = document.querySelector(expandedConfig[key]);\n    }\n  });\n  expandedConfig.modules = Object.keys(expandedConfig.modules).reduce((config, name) => {\n    if (expandedConfig.modules[name]) {\n      config[name] = expandedConfig.modules[name];\n    }\n    return config;\n  }, {});\n  return expandedConfig;\n}\n// Handle selection preservation and TEXT_CHANGE emission\n// common to modification APIs\nfunction modify(modifier, source, index, shift) {\n  if (!this.isEnabled() && source === _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER && !this.allowReadOnlyEdits) {\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a();\n  }\n  let range = index == null ? null : this.getSelection();\n  const oldDelta = this.editor.delta;\n  const change = modifier();\n  if (range != null) {\n    if (index === true) {\n      index = range.index; // eslint-disable-line prefer-destructuring\n    }\n\n    if (shift == null) {\n      range = shiftRange(range, change, source);\n    } else if (shift !== 0) {\n      range = shiftRange(range, index, shift, source);\n    }\n    this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n  }\n  if (change.length() > 0) {\n    const args = [_emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].events.TEXT_CHANGE, change, oldDelta, source];\n    this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].events.EDITOR_CHANGE, ...args);\n    if (source !== _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT) {\n      this.emitter.emit(...args);\n    }\n  }\n  return change;\n}\nfunction overload(index, length, name, value, source) {\n  let formats = {};\n  // @ts-expect-error\n  if (typeof index.index === 'number' && typeof index.length === 'number') {\n    // Allow for throwaway end (used by insertText/insertEmbed)\n    if (typeof length !== 'number') {\n      // @ts-expect-error\n      source = value;\n      value = name;\n      name = length;\n      // @ts-expect-error\n      length = index.length; // eslint-disable-line prefer-destructuring\n      // @ts-expect-error\n      index = index.index; // eslint-disable-line prefer-destructuring\n    } else {\n      // @ts-expect-error\n      length = index.length; // eslint-disable-line prefer-destructuring\n      // @ts-expect-error\n      index = index.index; // eslint-disable-line prefer-destructuring\n    }\n  } else if (typeof length !== 'number') {\n    // @ts-expect-error\n    source = value;\n    value = name;\n    name = length;\n    length = 0;\n  }\n  // Handle format being object, two format name/value strings or excluded\n  if (typeof name === 'object') {\n    formats = name;\n    // @ts-expect-error\n    source = value;\n  } else if (typeof name === 'string') {\n    if (value != null) {\n      formats[name] = value;\n    } else {\n      // @ts-expect-error\n      source = name;\n    }\n  }\n  // Handle optional source\n  source = source || _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.API;\n  // @ts-expect-error\n  return [index, length, formats, source];\n}\nfunction shiftRange(range, index, length, source) {\n  if (range == null) return null;\n  let start;\n  let end;\n  if (index && typeof index.transformPosition === 'function') {\n    [start, end] = [range.index, range.index + range.length].map(pos => index.transformPosition(pos, source !== _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER));\n  } else {\n    [start, end] = [range.index, range.index + range.length].map(pos => {\n      if (pos < index || pos === index && source === _emitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER) return pos;\n      if (length >= 0) {\n        return pos + length;\n      }\n      return Math.max(index, pos + length);\n    });\n  }\n  return new _selection__WEBPACK_IMPORTED_MODULE_9__[\"Range\"](start, end - start);\n}\n\n\n//# sourceURL=webpack://Quill/./core/quill.js?");
	
	/***/ }),
	
	/***/ "./core/selection.js":
	/*!***************************!*\
	  !*** ./core/selection.js ***!
	  \***************************/
	/*! exports provided: Range, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Range\", function() { return Range; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Selection; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.clonedeep */ \"./node_modules/lodash.clonedeep/index.js\");\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.isequal */ \"./node_modules/lodash.isequal/index.js\");\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\n\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('quill:selection');\nclass Range {\n  constructor(index) {\n    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    this.index = index;\n    this.length = length;\n  }\n}\nclass Selection {\n  constructor(scroll, emitter) {\n    this.emitter = emitter;\n    this.scroll = scroll;\n    this.composing = false;\n    this.mouseDown = false;\n    this.root = this.scroll.domNode;\n    // @ts-expect-error\n    this.cursor = this.scroll.create('cursor', this);\n    // savedRange is last non-null range\n    this.savedRange = new Range(0, 0);\n    this.lastRange = this.savedRange;\n    this.lastNative = null;\n    this.handleComposition();\n    this.handleDragging();\n    this.emitter.listenDOM('selectionchange', document, () => {\n      if (!this.mouseDown && !this.composing) {\n        setTimeout(this.update.bind(this, _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER), 1);\n      }\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_BEFORE_UPDATE, () => {\n      if (!this.hasFocus()) return;\n      const native = this.getNativeRange();\n      if (native == null) return;\n      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle\n      this.emitter.once(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_UPDATE, (source, mutations) => {\n        try {\n          if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) {\n            this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);\n          }\n          const triggeredByTyping = mutations.some(mutation => mutation.type === 'characterData' || mutation.type === 'childList' || mutation.type === 'attributes' && mutation.target === this.root);\n          this.update(triggeredByTyping ? _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT : source);\n        } catch (ignored) {\n          // ignore\n        }\n      });\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_OPTIMIZE, (mutations, context) => {\n      if (context.range) {\n        const {\n          startNode,\n          startOffset,\n          endNode,\n          endOffset\n        } = context.range;\n        this.setNativeRange(startNode, startOffset, endNode, endOffset);\n        this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n      }\n    });\n    this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n  }\n  handleComposition() {\n    this.root.addEventListener('compositionstart', () => {\n      this.composing = true;\n      this.scroll.batchStart();\n    });\n    this.root.addEventListener('compositionend', () => {\n      this.scroll.batchEnd();\n      this.composing = false;\n      if (this.cursor.parent) {\n        const range = this.cursor.restore();\n        if (!range) return;\n        setTimeout(() => {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }, 1);\n      }\n    });\n  }\n  handleDragging() {\n    this.emitter.listenDOM('mousedown', document.body, () => {\n      this.mouseDown = true;\n    });\n    this.emitter.listenDOM('mouseup', document.body, () => {\n      this.mouseDown = false;\n      this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER);\n    });\n  }\n  focus() {\n    if (this.hasFocus()) return;\n    this.root.focus();\n    this.setRange(this.savedRange);\n  }\n  format(format, value) {\n    this.scroll.update();\n    const nativeRange = this.getNativeRange();\n    if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK)) return;\n    if (nativeRange.start.node !== this.cursor.textNode) {\n      const blot = this.scroll.find(nativeRange.start.node, false);\n      if (blot == null) return;\n      // TODO Give blot ability to not split\n      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"]) {\n        const after = blot.split(nativeRange.start.offset);\n        blot.parent.insertBefore(this.cursor, after);\n      } else {\n        // @ts-expect-error TODO: nativeRange.start.node doesn't seem to match function signature\n        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen\n      }\n\n      this.cursor.attach();\n    }\n    this.cursor.format(format, value);\n    this.scroll.optimize();\n    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);\n    this.update();\n  }\n  getBounds(index) {\n    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    const scrollLength = this.scroll.length();\n    index = Math.min(index, scrollLength - 1);\n    length = Math.min(index + length, scrollLength - 1) - index;\n    let node;\n    let [leaf, offset] = this.scroll.leaf(index);\n    if (leaf == null) return null;\n    [node, offset] = leaf.position(offset, true);\n    const range = document.createRange();\n    if (length > 0) {\n      range.setStart(node, offset);\n      [leaf, offset] = this.scroll.leaf(index + length);\n      if (leaf == null) return null;\n      [node, offset] = leaf.position(offset, true);\n      range.setEnd(node, offset);\n      return range.getBoundingClientRect();\n    }\n    let side = 'left';\n    let rect;\n    if (node instanceof Text) {\n      // Return null if the text node is empty because it is\n      // not able to get a useful client rect:\n      // https://github.com/w3c/csswg-drafts/issues/2514.\n      // Empty text nodes are most likely caused by TextBlot#optimize()\n      // not getting called when editor content changes.\n      if (!node.data.length) {\n        return null;\n      }\n      if (offset < node.data.length) {\n        range.setStart(node, offset);\n        range.setEnd(node, offset + 1);\n      } else {\n        range.setStart(node, offset - 1);\n        range.setEnd(node, offset);\n        side = 'right';\n      }\n      rect = range.getBoundingClientRect();\n    } else {\n      if (!(leaf.domNode instanceof Element)) return null;\n      rect = leaf.domNode.getBoundingClientRect();\n      if (offset > 0) side = 'right';\n    }\n    return {\n      bottom: rect.top + rect.height,\n      height: rect.height,\n      left: rect[side],\n      right: rect[side],\n      top: rect.top,\n      width: 0\n    };\n  }\n  getNativeRange() {\n    const selection = document.getSelection();\n    if (selection == null || selection.rangeCount <= 0) return null;\n    const nativeRange = selection.getRangeAt(0);\n    if (nativeRange == null) return null;\n    const range = this.normalizeNative(nativeRange);\n    debug.info('getNativeRange', range);\n    return range;\n  }\n  getRange() {\n    const root = this.scroll.domNode;\n    if ('isConnected' in root && !root.isConnected) {\n      // document.getSelection() forces layout on Blink, so we trend to\n      // not calling it.\n      return [null, null];\n    }\n    const normalized = this.getNativeRange();\n    if (normalized == null) return [null, null];\n    const range = this.normalizedToRange(normalized);\n    return [range, normalized];\n  }\n  hasFocus() {\n    return document.activeElement === this.root || contains(this.root, document.activeElement);\n  }\n  normalizedToRange(range) {\n    const positions = [[range.start.node, range.start.offset]];\n    if (!range.native.collapsed) {\n      positions.push([range.end.node, range.end.offset]);\n    }\n    const indexes = positions.map(position => {\n      const [node, offset] = position;\n      const blot = this.scroll.find(node, true);\n      const index = blot.offset(this.scroll);\n      if (offset === 0) {\n        return index;\n      }\n      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"]) {\n        return index + blot.index(node, offset);\n      }\n      return index + blot.length();\n    });\n    const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);\n    const start = Math.min(end, ...indexes);\n    return new Range(start, end - start);\n  }\n  normalizeNative(nativeRange) {\n    if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {\n      return null;\n    }\n    const range = {\n      start: {\n        node: nativeRange.startContainer,\n        offset: nativeRange.startOffset\n      },\n      end: {\n        node: nativeRange.endContainer,\n        offset: nativeRange.endOffset\n      },\n      native: nativeRange\n    };\n    [range.start, range.end].forEach(position => {\n      let {\n        node,\n        offset\n      } = position;\n      while (!(node instanceof Text) && node.childNodes.length > 0) {\n        if (node.childNodes.length > offset) {\n          node = node.childNodes[offset];\n          offset = 0;\n        } else if (node.childNodes.length === offset) {\n          node = node.lastChild;\n          if (node instanceof Text) {\n            offset = node.data.length;\n          } else if (node.childNodes.length > 0) {\n            // Container case\n            offset = node.childNodes.length;\n          } else {\n            // Embed case\n            offset = node.childNodes.length + 1;\n          }\n        } else {\n          break;\n        }\n      }\n      position.node = node;\n      position.offset = offset;\n    });\n    return range;\n  }\n  rangeToNative(range) {\n    const scrollLength = this.scroll.length();\n    const getPosition = (index, inclusive) => {\n      index = Math.min(scrollLength - 1, index);\n      const [leaf, leafOffset] = this.scroll.leaf(index);\n      return leaf ? leaf.position(leafOffset, inclusive) : [null, -1];\n    };\n    return [...getPosition(range.index, false), ...getPosition(range.index + range.length, true)];\n  }\n  scrollIntoView(scrollingContainer) {\n    const range = this.lastRange;\n    if (range == null) return;\n    const bounds = this.getBounds(range.index, range.length);\n    if (bounds == null) return;\n    const limit = this.scroll.length() - 1;\n    const [first] = this.scroll.line(Math.min(range.index, limit));\n    let last = first;\n    if (range.length > 0) {\n      [last] = this.scroll.line(Math.min(range.index + range.length, limit));\n    }\n    if (first == null || last == null) return;\n    const scrollBounds = scrollingContainer.getBoundingClientRect();\n    if (bounds.top < scrollBounds.top) {\n      scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;\n    } else if (bounds.bottom > scrollBounds.bottom) {\n      scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;\n    }\n  }\n  setNativeRange(startNode, startOffset) {\n    let endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;\n    let endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;\n    let force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n    debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);\n    if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {\n      return;\n    }\n    const selection = document.getSelection();\n    if (selection == null) return;\n    if (startNode != null) {\n      if (!this.hasFocus()) this.root.focus();\n      const {\n        native\n      } = this.getNativeRange() || {};\n      if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {\n        if (startNode instanceof Element && startNode.tagName === 'BR') {\n          startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);\n          startNode = startNode.parentNode;\n        }\n        if (endNode instanceof Element && endNode.tagName === 'BR') {\n          endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);\n          endNode = endNode.parentNode;\n        }\n        const range = document.createRange();\n        range.setStart(startNode, startOffset);\n        range.setEnd(endNode, endOffset);\n        selection.removeAllRanges();\n        selection.addRange(range);\n      }\n    } else {\n      selection.removeAllRanges();\n      this.root.blur();\n    }\n  }\n  setRange(range) {\n    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.API;\n    if (typeof force === 'string') {\n      source = force;\n      force = false;\n    }\n    debug.info('setRange', range);\n    if (range != null) {\n      const args = this.rangeToNative(range);\n      this.setNativeRange(...args, force);\n    } else {\n      this.setNativeRange(null);\n    }\n    this.update(source);\n  }\n  update() {\n    let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER;\n    const oldRange = this.lastRange;\n    const [lastRange, nativeRange] = this.getRange();\n    this.lastRange = lastRange;\n    this.lastNative = nativeRange;\n    if (this.lastRange != null) {\n      this.savedRange = this.lastRange;\n    }\n    if (!lodash_isequal__WEBPACK_IMPORTED_MODULE_2___default()(oldRange, this.lastRange)) {\n      if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {\n        const range = this.cursor.restore();\n        if (range) {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }\n      }\n      const args = [_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SELECTION_CHANGE, lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default()(this.lastRange), lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default()(oldRange), source];\n      this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.EDITOR_CHANGE, ...args);\n      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT) {\n        this.emitter.emit(...args);\n      }\n    }\n  }\n}\nfunction contains(parent, descendant) {\n  try {\n    // Firefox inserts inaccessible nodes around video elements\n    descendant.parentNode; // eslint-disable-line @typescript-eslint/no-unused-expressions\n  } catch (e) {\n    return false;\n  }\n  return parent.contains(descendant);\n}\n\n\n//# sourceURL=webpack://Quill/./core/selection.js?");
	
	/***/ }),
	
	/***/ "./core/theme.js":
	/*!***********************!*\
	  !*** ./core/theme.js ***!
	  \***********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nclass Theme {\n  constructor(quill, options) {\n    this.quill = quill;\n    this.options = options;\n    this.modules = {};\n  }\n  init() {\n    Object.keys(this.options.modules).forEach(name => {\n      if (this.modules[name] == null) {\n        this.addModule(name);\n      }\n    });\n  }\n  addModule(name) {\n    // @ts-expect-error\n    const ModuleClass = this.quill.constructor.import(`modules/${name}`);\n    this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});\n    return this.modules[name];\n  }\n}\nTheme.DEFAULTS = {\n  modules: {}\n};\nTheme.themes = {\n  default: Theme\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Theme);\n\n//# sourceURL=webpack://Quill/./core/theme.js?");
	
	/***/ }),
	
	/***/ "./formats/align.js":
	/*!**************************!*\
	  !*** ./formats/align.js ***!
	  \**************************/
	/*! exports provided: AlignAttribute, AlignClass, AlignStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignAttribute\", function() { return AlignAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignClass\", function() { return AlignClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignStyle\", function() { return AlignStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: ['right', 'center', 'justify']\n};\nconst AlignAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"Attributor\"]('align', 'align', config);\nconst AlignClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('align', 'ql-align', config);\nconst AlignStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('align', 'text-align', config);\n\n\n//# sourceURL=webpack://Quill/./formats/align.js?");
	
	/***/ }),
	
	/***/ "./formats/background.js":
	/*!*******************************!*\
	  !*** ./formats/background.js ***!
	  \*******************************/
	/*! exports provided: BackgroundClass, BackgroundStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundClass\", function() { return BackgroundClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundStyle\", function() { return BackgroundStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./formats/color.js\");\n\n\nconst BackgroundClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('background', 'ql-bg', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\nconst BackgroundStyle = new _color__WEBPACK_IMPORTED_MODULE_1__[\"ColorAttributor\"]('background', 'background-color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\n\n\n//# sourceURL=webpack://Quill/./formats/background.js?");
	
	/***/ }),
	
	/***/ "./formats/blockquote.js":
	/*!*******************************!*\
	  !*** ./formats/blockquote.js ***!
	  \*******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\nclass Blockquote extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\nBlockquote.blotName = 'blockquote';\nBlockquote.tagName = 'blockquote';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blockquote);\n\n//# sourceURL=webpack://Quill/./formats/blockquote.js?");
	
	/***/ }),
	
	/***/ "./formats/bold.js":
	/*!*************************!*\
	  !*** ./formats/bold.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n// @ts-expect-error TODO: Inline.tagName should be string[] | string\nclass Bold extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create() {\n    // @ts-expect-error\n    return super.create();\n  }\n  static formats() {\n    return true;\n  }\n  optimize(context) {\n    super.optimize(context);\n    if (this.domNode.tagName !== this.statics.tagName[0]) {\n      this.replaceWith(this.statics.blotName);\n    }\n  }\n}\nBold.blotName = 'bold';\nBold.tagName = ['STRONG', 'B'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bold);\n\n//# sourceURL=webpack://Quill/./formats/bold.js?");
	
	/***/ }),
	
	/***/ "./formats/code.js":
	/*!*************************!*\
	  !*** ./formats/code.js ***!
	  \*************************/
	/*! exports provided: Code, CodeBlockContainer, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Code\", function() { return Code; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeBlockContainer\", function() { return CodeBlockContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodeBlock; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\n\n\n\n\n\n\nclass CodeBlockContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"] {\n  static create(value) {\n    const domNode = super.create(value);\n    domNode.setAttribute('spellcheck', 'false');\n    return domNode;\n  }\n  code(index, length) {\n    return this.children\n    // @ts-expect-error\n    .map(child => child.length() <= 1 ? '' : child.domNode.innerText).join('\\n').slice(index, index + length);\n  }\n  html(index, length) {\n    // `\\n`s are needed in order to support empty lines at the beginning and the end.\n    // https://html.spec.whatwg.org/multipage/syntax.html#element-restrictions\n    return `<pre>\\n${Object(_blots_text__WEBPACK_IMPORTED_MODULE_4__[\"escapeText\"])(this.code(index, length))}\\n</pre>`;\n  }\n}\nclass CodeBlock extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_6__[\"default\"].register(CodeBlockContainer);\n  }\n}\nCodeBlock.TAB = '  ';\nclass Code extends _blots_inline__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {}\nCode.blotName = 'code';\nCode.tagName = 'CODE';\nCodeBlock.blotName = 'code-block';\nCodeBlock.className = 'ql-code-block';\nCodeBlock.tagName = 'DIV';\nCodeBlockContainer.blotName = 'code-block-container';\nCodeBlockContainer.className = 'ql-code-block-container';\nCodeBlockContainer.tagName = 'DIV';\nCodeBlockContainer.allowedChildren = [CodeBlock];\nCodeBlock.allowedChildren = [_blots_text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _blots_break__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _blots_cursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nCodeBlock.requiredContainer = CodeBlockContainer;\n\n\n//# sourceURL=webpack://Quill/./formats/code.js?");
	
	/***/ }),
	
	/***/ "./formats/color.js":
	/*!**************************!*\
	  !*** ./formats/color.js ***!
	  \**************************/
	/*! exports provided: ColorAttributor, ColorClass, ColorStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorAttributor\", function() { return ColorAttributor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorClass\", function() { return ColorClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorStyle\", function() { return ColorStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n\nclass ColorAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"] {\n  value(domNode) {\n    let value = super.value(domNode);\n    if (!value.startsWith('rgb(')) return value;\n    value = value.replace(/^[^\\d]+/, '').replace(/[^\\d]+$/, '');\n    const hex = value.split(',').map(component => `00${parseInt(component, 10).toString(16)}`.slice(-2)).join('');\n    return `#${hex}`;\n  }\n}\nconst ColorClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('color', 'ql-color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\nconst ColorStyle = new ColorAttributor('color', 'color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\n\n\n//# sourceURL=webpack://Quill/./formats/color.js?");
	
	/***/ }),
	
	/***/ "./formats/direction.js":
	/*!******************************!*\
	  !*** ./formats/direction.js ***!
	  \******************************/
	/*! exports provided: DirectionAttribute, DirectionClass, DirectionStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionAttribute\", function() { return DirectionAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionClass\", function() { return DirectionClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionStyle\", function() { return DirectionStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: ['rtl']\n};\nconst DirectionAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"Attributor\"]('direction', 'dir', config);\nconst DirectionClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('direction', 'ql-direction', config);\nconst DirectionStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('direction', 'direction', config);\n\n\n//# sourceURL=webpack://Quill/./formats/direction.js?");
	
	/***/ }),
	
	/***/ "./formats/font.js":
	/*!*************************!*\
	  !*** ./formats/font.js ***!
	  \*************************/
	/*! exports provided: FontStyle, FontClass */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontStyle\", function() { return FontStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontClass\", function() { return FontClass; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['serif', 'monospace']\n};\nconst FontClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('font', 'ql-font', config);\nclass FontStyleAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"] {\n  value(node) {\n    return super.value(node).replace(/[\"']/g, '');\n  }\n}\nconst FontStyle = new FontStyleAttributor('font', 'font-family', config);\n\n\n//# sourceURL=webpack://Quill/./formats/font.js?");
	
	/***/ }),
	
	/***/ "./formats/formula.js":
	/*!****************************!*\
	  !*** ./formats/formula.js ***!
	  \****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/embed */ \"./blots/embed.js\");\n\nclass Formula extends _blots_embed__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    // @ts-expect-error\n    if (window.katex == null) {\n      throw new Error('Formula module requires KaTeX.');\n    }\n    const node = super.create(value);\n    if (typeof value === 'string') {\n      // @ts-expect-error\n      window.katex.render(value, node, {\n        throwOnError: false,\n        errorColor: '#f00'\n      });\n      node.setAttribute('data-value', value);\n    }\n    return node;\n  }\n  static value(domNode) {\n    return domNode.getAttribute('data-value');\n  }\n  html() {\n    const {\n      formula\n    } = this.value();\n    return `<span>${formula}</span>`;\n  }\n}\nFormula.blotName = 'formula';\nFormula.className = 'ql-formula';\nFormula.tagName = 'SPAN';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formula);\n\n//# sourceURL=webpack://Quill/./formats/formula.js?");
	
	/***/ }),
	
	/***/ "./formats/header.js":
	/*!***************************!*\
	  !*** ./formats/header.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\n// @ts-expect-error TODO: BlockBlot.tagName should be string[] | string\nclass Header extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static formats(domNode) {\n    return this.tagName.indexOf(domNode.tagName) + 1;\n  }\n}\nHeader.blotName = 'header';\nHeader.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack://Quill/./formats/header.js?");
	
	/***/ }),
	
	/***/ "./formats/image.js":
	/*!**************************!*\
	  !*** ./formats/image.js ***!
	  \**************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\n\nconst ATTRIBUTES = ['alt', 'height', 'width'];\nclass Image extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static create(value) {\n    const node = super.create(value);\n    if (typeof value === 'string') {\n      node.setAttribute('src', this.sanitize(value));\n    }\n    return node;\n  }\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n      return formats;\n    }, {});\n  }\n  static match(url) {\n    return /\\.(jpe?g|gif|png)$/.test(url) || /^data:image\\/.+;base64/.test(url);\n  }\n  static register() {\n    if (/Firefox/i.test(navigator.userAgent)) {\n      setTimeout(() => {\n        // Disable image resizing in Firefox\n        // @ts-expect-error\n        document.execCommand('enableObjectResizing', false, false);\n      }, 1);\n    }\n  }\n  static sanitize(url) {\n    return Object(_link__WEBPACK_IMPORTED_MODULE_1__[\"sanitize\"])(url, ['http', 'https', 'data']) ? url : '//:0';\n  }\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n}\nImage.blotName = 'image';\nImage.tagName = 'IMG';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n//# sourceURL=webpack://Quill/./formats/image.js?");
	
	/***/ }),
	
	/***/ "./formats/indent.js":
	/*!***************************!*\
	  !*** ./formats/indent.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n\nclass IndentAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"] {\n  add(node, value) {\n    if (value === '+1' || value === '-1') {\n      const indent = this.value(node) || 0;\n      value = value === '+1' ? indent + 1 : indent - 1;\n    }\n    if (value === 0) {\n      this.remove(node);\n      return true;\n    }\n    return super.add(node, value);\n  }\n  canAdd(node, value) {\n    return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));\n  }\n  // @ts-expect-error TODO: ClassAttributor may support numbers\n  value(node) {\n    return parseInt(super.value(node), 10) || undefined; // Don't return NaN\n  }\n}\n\nconst IndentClass = new IndentAttributor('indent', 'ql-indent', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  // @ts-expect-error\n  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndentClass);\n\n//# sourceURL=webpack://Quill/./formats/indent.js?");
	
	/***/ }),
	
	/***/ "./formats/italic.js":
	/*!***************************!*\
	  !*** ./formats/italic.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ \"./formats/bold.js\");\n\nclass Italic extends _bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\nItalic.blotName = 'italic';\nItalic.tagName = ['EM', 'I'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Italic);\n\n//# sourceURL=webpack://Quill/./formats/italic.js?");
	
	/***/ }),
	
	/***/ "./formats/link.js":
	/*!*************************!*\
	  !*** ./formats/link.js ***!
	  \*************************/
	/*! exports provided: default, sanitize */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanitize\", function() { return sanitize; });\n/* harmony import */ var normalize_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-url */ \"./node_modules/normalize-url/index.js\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Link extends _blots_inline__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('href', Object(normalize_url__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.sanitize(value)));\n    node.setAttribute('rel', 'noopener ponekub noreferrer');\n    node.setAttribute('target', '_blank');\n    return node;\n  }\n  static formats(domNode) {\n    return domNode.getAttribute('href');\n  }\n  static sanitize(url) {\n    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;\n  }\n  format(name, value) {\n    if (name !== this.statics.blotName || !value) {\n      super.format(name, value);\n    } else {\n      // @ts-expect-error\n      this.domNode.setAttribute('href', this.constructor.sanitize(value));\n    }\n  }\n}\nLink.blotName = 'link';\nLink.tagName = 'A';\nLink.SANITIZED_URL = 'about:blank';\nLink.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];\nfunction sanitize(url, protocols) {\n  const anchor = document.createElement('a');\n  anchor.href = url;\n  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));\n  return protocols.indexOf(protocol) > -1;\n}\n\n\n//# sourceURL=webpack://Quill/./formats/link.js?");
	
	/***/ }),
	
	/***/ "./formats/list.js":
	/*!*************************!*\
	  !*** ./formats/list.js ***!
	  \*************************/
	/*! exports provided: ListContainer, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListContainer\", function() { return ListContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListItem; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\n\n\nclass ListContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {}\nListContainer.blotName = 'list-container';\nListContainer.tagName = 'OL';\nclass ListItem extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    // @ts-expect-error\n    const node = super.create();\n    node.setAttribute('data-list', value);\n    return node;\n  }\n  static formats(domNode) {\n    return domNode.getAttribute('data-list') || undefined;\n  }\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register(ListContainer);\n  }\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    const ui = domNode.ownerDocument.createElement('span');\n    const listEventHandler = e => {\n      if (!scroll.isEnabled()) return;\n      const format = this.statics.formats(domNode, scroll);\n      if (format === 'checked') {\n        this.format('list', 'unchecked');\n        e.preventDefault();\n      } else if (format === 'unchecked') {\n        this.format('list', 'checked');\n        e.preventDefault();\n      }\n    };\n    ui.addEventListener('mousedown', listEventHandler);\n    ui.addEventListener('touchstart', listEventHandler);\n    this.attachUI(ui);\n  }\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      this.domNode.setAttribute('data-list', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n}\nListItem.blotName = 'list';\nListItem.tagName = 'LI';\nListContainer.allowedChildren = [ListItem];\nListItem.requiredContainer = ListContainer;\n\n\n//# sourceURL=webpack://Quill/./formats/list.js?");
	
	/***/ }),
	
	/***/ "./formats/script.js":
	/*!***************************!*\
	  !*** ./formats/script.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n// @ts-expect-error TODO: Inline.tagName should be string[] | string\nclass Script extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    if (value === 'super') {\n      return document.createElement('sup');\n    }\n    if (value === 'sub') {\n      return document.createElement('sub');\n    }\n    return super.create(value);\n  }\n  static formats(domNode) {\n    if (domNode.tagName === 'SUB') return 'sub';\n    if (domNode.tagName === 'SUP') return 'super';\n    return undefined;\n  }\n}\nScript.blotName = 'script';\nScript.tagName = ['SUB', 'SUP'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Script);\n\n//# sourceURL=webpack://Quill/./formats/script.js?");
	
	/***/ }),
	
	/***/ "./formats/size.js":
	/*!*************************!*\
	  !*** ./formats/size.js ***!
	  \*************************/
	/*! exports provided: SizeClass, SizeStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeClass\", function() { return SizeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeStyle\", function() { return SizeStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SizeClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('size', 'ql-size', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['small', 'large', 'huge']\n});\nconst SizeStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('size', 'font-size', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['10px', '18px', '32px']\n});\n\n\n//# sourceURL=webpack://Quill/./formats/size.js?");
	
	/***/ }),
	
	/***/ "./formats/strike.js":
	/*!***************************!*\
	  !*** ./formats/strike.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ \"./formats/bold.js\");\n\nclass Strike extends _bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\nStrike.blotName = 'strike';\nStrike.tagName = ['S', 'STRIKE'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Strike);\n\n//# sourceURL=webpack://Quill/./formats/strike.js?");
	
	/***/ }),
	
	/***/ "./formats/table.js":
	/*!**************************!*\
	  !*** ./formats/table.js ***!
	  \**************************/
	/*! exports provided: TableCell, TableRow, TableBody, TableContainer, tableId */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableCell\", function() { return TableCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableRow\", function() { return TableRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableBody\", function() { return TableBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableContainer\", function() { return TableContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tableId\", function() { return tableId; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n\n\nclass TableCell extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    // @ts-expect-error\n    const node = super.create();\n    if (value) {\n      node.setAttribute('data-row', value);\n    } else {\n      node.setAttribute('data-row', tableId());\n    }\n    return node;\n  }\n  static formats(domNode) {\n    if (domNode.hasAttribute('data-row')) {\n      return domNode.getAttribute('data-row');\n    }\n    return undefined;\n  }\n  cellOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n    return -1;\n  }\n  format(name, value) {\n    if (name === TableCell.blotName && value) {\n      this.domNode.setAttribute('data-row', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n  row() {\n    return this.parent;\n  }\n  rowOffset() {\n    if (this.row()) {\n      return this.row().rowOffset();\n    }\n    return -1;\n  }\n  table() {\n    return this.row() && this.row().table();\n  }\n}\nTableCell.blotName = 'table';\nTableCell.tagName = 'TD';\nclass TableRow extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  checkMerge() {\n    if (super.checkMerge() && this.next.children.head != null) {\n      const thisHead = this.children.head.formats();\n      const thisTail = this.children.tail.formats();\n      const nextHead = this.next.children.head.formats();\n      const nextTail = this.next.children.tail.formats();\n      return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;\n    }\n    return false;\n  }\n  optimize() {\n    // @ts-expect-error\n    super.optimize(...arguments);\n    this.children.forEach(child => {\n      if (child.next == null) return;\n      const childFormats = child.formats();\n      const nextFormats = child.next.formats();\n      if (childFormats.table !== nextFormats.table) {\n        const next = this.splitAfter(child);\n        if (next) {\n          // @ts-expect-error TODO: parameters of optimize() should be a optional\n          next.optimize();\n        }\n        // We might be able to merge with prev now\n        if (this.prev) {\n          // @ts-expect-error TODO: parameters of optimize() should be a optional\n          this.prev.optimize();\n        }\n      }\n    });\n  }\n  rowOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n    return -1;\n  }\n  table() {\n    return this.parent && this.parent.parent;\n  }\n}\nTableRow.blotName = 'table-row';\nTableRow.tagName = 'TR';\nclass TableBody extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {}\nTableBody.blotName = 'table-body';\nTableBody.tagName = 'TBODY';\nclass TableContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  balanceCells() {\n    // @ts-expect-error TODO: fix signature of ParentBlot.descendants\n    const rows = this.descendants(TableRow);\n    const maxColumns = rows.reduce((max, row) => {\n      return Math.max(row.children.length, max);\n    }, 0);\n    rows.forEach(row => {\n      new Array(maxColumns - row.children.length).fill(0).forEach(() => {\n        let value;\n        if (row.children.head != null) {\n          value = TableCell.formats(row.children.head.domNode);\n        }\n        const blot = this.scroll.create(TableCell.blotName, value);\n        row.appendChild(blot);\n        // @ts-expect-error TODO: parameters of optimize() should be a optional\n        blot.optimize(); // Add break blot\n      });\n    });\n  }\n\n  cells(column) {\n    return this.rows().map(row => row.children.at(column));\n  }\n  deleteColumn(index) {\n    // @ts-expect-error\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const cell = row.children.at(index);\n      if (cell != null) {\n        cell.remove();\n      }\n    });\n  }\n  insertColumn(index) {\n    // @ts-expect-error\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const ref = row.children.at(index);\n      const value = TableCell.formats(row.children.head.domNode);\n      const cell = this.scroll.create(TableCell.blotName, value);\n      row.insertBefore(cell, ref);\n    });\n  }\n  insertRow(index) {\n    // @ts-expect-error\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    const id = tableId();\n    const row = this.scroll.create(TableRow.blotName);\n    body.children.head.children.forEach(() => {\n      const cell = this.scroll.create(TableCell.blotName, id);\n      row.appendChild(cell);\n    });\n    const ref = body.children.at(index);\n    body.insertBefore(row, ref);\n  }\n  rows() {\n    const body = this.children.head;\n    if (body == null) return [];\n    return body.children.map(row => row);\n  }\n}\nTableContainer.blotName = 'table-container';\nTableContainer.tagName = 'TABLE';\nTableContainer.allowedChildren = [TableBody];\nTableBody.requiredContainer = TableContainer;\nTableBody.allowedChildren = [TableRow];\nTableRow.requiredContainer = TableBody;\nTableRow.allowedChildren = [TableCell];\nTableCell.requiredContainer = TableRow;\nfunction tableId() {\n  const id = Math.random().toString(36).slice(2, 6);\n  return `row-${id}`;\n}\n\n\n//# sourceURL=webpack://Quill/./formats/table.js?");
	
	/***/ }),
	
	/***/ "./formats/underline.js":
	/*!******************************!*\
	  !*** ./formats/underline.js ***!
	  \******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\nclass Underline extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\nUnderline.blotName = 'underline';\nUnderline.tagName = 'U';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Underline);\n\n//# sourceURL=webpack://Quill/./formats/underline.js?");
	
	/***/ }),
	
	/***/ "./formats/video.js":
	/*!**************************!*\
	  !*** ./formats/video.js ***!
	  \**************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\n\nconst ATTRIBUTES = ['height', 'width'];\nclass Video extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"BlockEmbed\"] {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('frameborder', '0');\n    node.setAttribute('allowfullscreen', 'true');\n    node.setAttribute('src', this.sanitize(value));\n    return node;\n  }\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n      return formats;\n    }, {});\n  }\n  static sanitize(url) {\n    return _link__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sanitize(url);\n  }\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n  html() {\n    const {\n      video\n    } = this.value();\n    return `<a href=\"${video}\">${video}</a>`;\n  }\n}\nVideo.blotName = 'video';\nVideo.className = 'ql-video';\nVideo.tagName = 'IFRAME';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\n\n//# sourceURL=webpack://Quill/./formats/video.js?");
	
	/***/ }),
	
	/***/ "./modules/clipboard.js":
	/*!******************************!*\
	  !*** ./modules/clipboard.js ***!
	  \******************************/
	/*! exports provided: default, matchAttributor, matchBlot, matchNewline, matchText, traverse */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clipboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchAttributor\", function() { return matchAttributor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchBlot\", function() { return matchBlot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchNewline\", function() { return matchNewline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchText\", function() { return matchText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"traverse\", function() { return traverse; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../formats/align */ \"./formats/align.js\");\n/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../formats/background */ \"./formats/background.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../formats/code */ \"./formats/code.js\");\n/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/color */ \"./formats/color.js\");\n/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../formats/direction */ \"./formats/direction.js\");\n/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../formats/font */ \"./formats/font.js\");\n/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../formats/size */ \"./formats/size.js\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./keyboard */ \"./modules/keyboard.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('quill:clipboard');\nconst CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['ol, ul', matchList], ['pre', matchCodeBlock], ['tr', matchTable], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['strike', matchAlias.bind(matchAlias, 'strike')], ['style', matchIgnore]];\nconst ATTRIBUTE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_6__[\"AlignAttribute\"], _formats_direction__WEBPACK_IMPORTED_MODULE_10__[\"DirectionAttribute\"]].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\nconst STYLE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_6__[\"AlignStyle\"], _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundStyle\"], _formats_color__WEBPACK_IMPORTED_MODULE_9__[\"ColorStyle\"], _formats_direction__WEBPACK_IMPORTED_MODULE_10__[\"DirectionStyle\"], _formats_font__WEBPACK_IMPORTED_MODULE_11__[\"FontStyle\"], _formats_size__WEBPACK_IMPORTED_MODULE_12__[\"SizeStyle\"]].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\nclass Clipboard extends _core_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    this.quill.root.addEventListener('copy', e => this.onCaptureCopy(e, false));\n    this.quill.root.addEventListener('cut', e => this.onCaptureCopy(e, true));\n    this.quill.root.addEventListener('paste', this.onCapturePaste.bind(this));\n    this.matchers = [];\n    CLIPBOARD_CONFIG.concat(this.options.matchers).forEach(_ref => {\n      let [selector, matcher] = _ref;\n      this.addMatcher(selector, matcher);\n    });\n  }\n  addMatcher(selector, matcher) {\n    this.matchers.push([selector, matcher]);\n  }\n  convert(_ref2) {\n    let {\n      html,\n      text\n    } = _ref2;\n    let formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    if (formats[_formats_code__WEBPACK_IMPORTED_MODULE_8__[\"default\"].blotName]) {\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text, {\n        [_formats_code__WEBPACK_IMPORTED_MODULE_8__[\"default\"].blotName]: formats[_formats_code__WEBPACK_IMPORTED_MODULE_8__[\"default\"].blotName]\n      });\n    }\n    if (!html) {\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text || '');\n    }\n    const delta = this.convertHTML(html);\n    // Remove trailing newline\n    if (deltaEndsWith(delta, '\\n') && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) {\n      return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(delta.length() - 1).delete(1));\n    }\n    return delta;\n  }\n  convertHTML(html) {\n    const doc = new DOMParser().parseFromString(html, 'text/html');\n    const container = doc.body;\n    const nodeMatches = new WeakMap();\n    const [elementMatchers, textMatchers] = this.prepareMatching(container, nodeMatches);\n    return traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches);\n  }\n  dangerouslyPasteHTML(index, html) {\n    let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.API;\n    if (typeof index === 'string') {\n      const delta = this.convert({\n        html: index,\n        text: ''\n      });\n      // @ts-expect-error\n      this.quill.setContents(delta, html);\n      this.quill.setSelection(0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    } else {\n      const paste = this.convert({\n        html,\n        text: ''\n      });\n      this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(index).concat(paste), source);\n      this.quill.setSelection(index + paste.length(), _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    }\n  }\n  onCaptureCopy(e) {\n    let isCut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    if (e.defaultPrevented) return;\n    e.preventDefault();\n    const [range] = this.quill.selection.getRange();\n    if (range == null) return;\n    // @ts-expect-error\n    const {\n      html,\n      text\n    } = this.onCopy(range, isCut);\n    e.clipboardData.setData('text/plain', text);\n    e.clipboardData.setData('text/html', html);\n    if (isCut) {\n      Object(_keyboard__WEBPACK_IMPORTED_MODULE_13__[\"deleteRange\"])({\n        range,\n        quill: this.quill\n      });\n    }\n  }\n  onCapturePaste(e) {\n    if (e.defaultPrevented || !this.quill.isEnabled()) return;\n    e.preventDefault();\n    const range = this.quill.getSelection(true);\n    if (range == null) return;\n    const html = e.clipboardData.getData('text/html');\n    const text = e.clipboardData.getData('text/plain');\n    const files = Array.from(e.clipboardData.files || []);\n    if (!html && files.length > 0) {\n      this.quill.uploader.upload(range, files);\n      return;\n    }\n    if (html && files.length > 0) {\n      const doc = new DOMParser().parseFromString(html, 'text/html');\n      if (doc.body.childElementCount === 1 && doc.body.firstElementChild.tagName === 'IMG') {\n        this.quill.uploader.upload(range, files);\n        return;\n      }\n    }\n    this.onPaste(range, {\n      html,\n      text\n    });\n  }\n  onCopy(range) {\n    const text = this.quill.getText(range);\n    const html = this.quill.getSemanticHTML(range);\n    return {\n      html,\n      text\n    };\n  }\n  onPaste(range, _ref3) {\n    let {\n      text,\n      html\n    } = _ref3;\n    const formats = this.quill.getFormat(range.index);\n    const pastedDelta = this.convert({\n      text,\n      html\n    }, formats);\n    debug.log('onPaste', pastedDelta, {\n      text,\n      html\n    });\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(range.index).delete(range.length).concat(pastedDelta);\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    // range.length contributes to delta.length()\n    this.quill.setSelection(delta.length() - range.length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    this.quill.scrollIntoView();\n  }\n  prepareMatching(container, nodeMatches) {\n    const elementMatchers = [];\n    const textMatchers = [];\n    this.matchers.forEach(pair => {\n      const [selector, matcher] = pair;\n      switch (selector) {\n        case Node.TEXT_NODE:\n          textMatchers.push(matcher);\n          break;\n        case Node.ELEMENT_NODE:\n          elementMatchers.push(matcher);\n          break;\n        default:\n          // @ts-expect-error\n          Array.from(container.querySelectorAll(selector)).forEach(node => {\n            if (nodeMatches.has(node)) {\n              const matches = nodeMatches.get(node);\n              matches.push(matcher);\n            } else {\n              nodeMatches.set(node, [matcher]);\n            }\n          });\n          break;\n      }\n    });\n    return [elementMatchers, textMatchers];\n  }\n}\nClipboard.DEFAULTS = {\n  matchers: []\n};\nfunction applyFormat(delta, format, value) {\n  if (typeof format === 'object') {\n    return Object.keys(format).reduce((newDelta, key) => {\n      return applyFormat(newDelta, key, format[key]);\n    }, delta);\n  }\n  return delta.reduce((newDelta, op) => {\n    if (op.attributes && op.attributes[format]) {\n      return newDelta.push(op);\n    }\n    const formats = value ? {\n      [format]: value\n    } : {};\n    return newDelta.insert(op.insert, Object.assign(Object.assign({}, formats), op.attributes));\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n}\nfunction deltaEndsWith(delta, text) {\n  let endText = '';\n  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i // eslint-disable-line no-plusplus\n  ) {\n    const op = delta.ops[i];\n    if (typeof op.insert !== 'string') break;\n    endText = op.insert + endText;\n  }\n  return endText.slice(-1 * text.length) === text;\n}\nfunction isLine(node) {\n  if (node.childNodes.length === 0) return false; // Exclude embed blocks\n  return ['address', 'article', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'iframe', 'li', 'main', 'nav', 'ol', 'output', 'p', 'pre', 'section', 'table', 'td', 'tr', 'ul', 'video'].includes(node.tagName.toLowerCase());\n}\nconst preNodes = new WeakMap();\nfunction isPre(node) {\n  if (node == null) return false;\n  if (!preNodes.has(node)) {\n    // @ts-expect-error\n    if (node.tagName === 'PRE') {\n      preNodes.set(node, true);\n    } else {\n      preNodes.set(node, isPre(node.parentNode));\n    }\n  }\n  return preNodes.get(node);\n}\nfunction traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {\n  // Post-order\n  if (node.nodeType === node.TEXT_NODE) {\n    return textMatchers.reduce((delta, matcher) => {\n      return matcher(node, delta, scroll);\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n  }\n  if (node.nodeType === node.ELEMENT_NODE) {\n    return Array.from(node.childNodes || []).reduce((delta, childNode) => {\n      let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);\n      if (childNode.nodeType === node.ELEMENT_NODE) {\n        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n        childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n      }\n      return delta.concat(childrenDelta);\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n  }\n  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();\n}\nfunction matchAlias(format, node, delta) {\n  return applyFormat(delta, format, true);\n}\nfunction matchAttributor(node, delta, scroll) {\n  const attributes = parchment__WEBPACK_IMPORTED_MODULE_0__[\"Attributor\"].keys(node);\n  const classes = parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"].keys(node);\n  const styles = parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"].keys(node);\n  const formats = {};\n  attributes.concat(classes).concat(styles).forEach(name => {\n    let attr = scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].ATTRIBUTE);\n    if (attr != null) {\n      formats[attr.attrName] = attr.value(node);\n      if (formats[attr.attrName]) return;\n    }\n    attr = ATTRIBUTE_ATTRIBUTORS[name];\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n    attr = STYLE_ATTRIBUTORS[name];\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      attr = STYLE_ATTRIBUTORS[name];\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n  });\n  if (Object.keys(formats).length > 0) {\n    return applyFormat(delta, formats);\n  }\n  return delta;\n}\nfunction matchBlot(node, delta, scroll) {\n  const match = scroll.query(node);\n  if (match == null) return delta;\n  // @ts-expect-error\n  if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"]) {\n    const embed = {};\n    // @ts-expect-error\n    const value = match.value(node);\n    if (value != null) {\n      // @ts-expect-error\n      embed[match.blotName] = value;\n      // @ts-expect-error\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(embed, match.formats(node, scroll));\n    }\n  } else {\n    // @ts-expect-error\n    if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"BlockBlot\"] && !deltaEndsWith(delta, '\\n')) {\n      delta.insert('\\n');\n    }\n    // @ts-expect-error\n    if (typeof match.formats === 'function') {\n      // @ts-expect-error\n      return applyFormat(delta, match.blotName, match.formats(node, scroll));\n    }\n  }\n  return delta;\n}\nfunction matchBreak(node, delta) {\n  if (!deltaEndsWith(delta, '\\n')) {\n    delta.insert('\\n');\n  }\n  return delta;\n}\nfunction matchCodeBlock(node, delta, scroll) {\n  const match = scroll.query('code-block');\n  const language = match ? match.formats(node, scroll) : true;\n  return applyFormat(delta, 'code-block', language);\n}\nfunction matchIgnore() {\n  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();\n}\nfunction matchIndent(node, delta, scroll) {\n  const match = scroll.query(node);\n  if (match == null ||\n  // @ts-expect-error\n  match.blotName !== 'list' || !deltaEndsWith(delta, '\\n')) {\n    return delta;\n  }\n  let indent = -1;\n  let parent = node.parentNode;\n  while (parent != null) {\n    // @ts-expect-error\n    if (['OL', 'UL'].includes(parent.tagName)) {\n      indent += 1;\n    }\n    parent = parent.parentNode;\n  }\n  if (indent <= 0) return delta;\n  return delta.reduce((composed, op) => {\n    if (op.attributes && typeof op.attributes.indent === 'number') {\n      return composed.push(op);\n    }\n    return composed.insert(op.insert, Object.assign({\n      indent\n    }, op.attributes || {}));\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n}\nfunction matchList(node, delta) {\n  // @ts-expect-error\n  const list = node.tagName === 'OL' ? 'ordered' : 'bullet';\n  return applyFormat(delta, 'list', list);\n}\nfunction matchNewline(node, delta, scroll) {\n  if (!deltaEndsWith(delta, '\\n')) {\n    // @ts-expect-error\n    if (isLine(node)) {\n      return delta.insert('\\n');\n    }\n    if (delta.length() > 0 && node.nextSibling) {\n      let {\n        nextSibling\n      } = node;\n      while (nextSibling != null) {\n        // @ts-expect-error\n        if (isLine(nextSibling)) {\n          return delta.insert('\\n');\n        }\n        const match = scroll.query(nextSibling);\n        // @ts-expect-error\n        if (match && match.prototype instanceof _blots_block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"]) {\n          return delta.insert('\\n');\n        }\n        nextSibling = nextSibling.firstChild;\n      }\n    }\n  }\n  return delta;\n}\nfunction matchStyles(node, delta) {\n  const formats = {};\n  const style = node.style || {};\n  if (style.fontStyle === 'italic') {\n    formats.italic = true;\n  }\n  if (style.textDecoration === 'underline') {\n    formats.underline = true;\n  }\n  if (style.textDecoration === 'line-through') {\n    formats.strike = true;\n  }\n  if (style.fontWeight.startsWith('bold') || parseInt(style.fontWeight, 10) >= 700) {\n    formats.bold = true;\n  }\n  if (Object.keys(formats).length > 0) {\n    delta = applyFormat(delta, formats);\n  }\n  // @ts-expect-error\n  if (parseFloat(style.textIndent || 0) > 0) {\n    // Could be 0.5in\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert('\\t').concat(delta);\n  }\n  return delta;\n}\nfunction matchTable(node, delta) {\n  const table = node.parentNode.tagName === 'TABLE' ? node.parentNode : node.parentNode.parentNode;\n  const rows = Array.from(table.querySelectorAll('tr'));\n  const row = rows.indexOf(node) + 1;\n  return applyFormat(delta, 'table', row);\n}\nfunction matchText(node, delta) {\n  let text = node.data;\n  // Word represents empty line with <o:p>&nbsp;</o:p>\n  if (node.parentNode.tagName === 'O:P') {\n    return delta.insert(text.trim());\n  }\n  if (text.trim().length === 0 && text.includes('\\n')) {\n    return delta;\n  }\n  if (!isPre(node)) {\n    const replacer = (collapse, match) => {\n      const replaced = match.replace(/[^\\u00a0]/g, ''); // \\u00a0 is nbsp;\n      return replaced.length < 1 && collapse ? ' ' : replaced;\n    };\n    text = text.replace(/\\r\\n/g, ' ').replace(/\\n/g, ' ');\n    text = text.replace(/\\s\\s+/g, replacer.bind(replacer, true)); // collapse whitespace\n    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {\n      text = text.replace(/^\\s+/, replacer.bind(replacer, false));\n    }\n    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {\n      text = text.replace(/\\s+$/, replacer.bind(replacer, false));\n    }\n  }\n  return delta.insert(text);\n}\n\n\n//# sourceURL=webpack://Quill/./modules/clipboard.js?");
	
	/***/ }),
	
	/***/ "./modules/history.js":
	/*!****************************!*\
	  !*** ./modules/history.js ***!
	  \****************************/
	/*! exports provided: default, getLastChangeIndex */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return History; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastChangeIndex\", function() { return getLastChangeIndex; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\n\n\nclass History extends _core_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    this.lastRecorded = 0;\n    this.ignoreChange = false;\n    this.clear();\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.EDITOR_CHANGE, (eventName, delta, oldDelta, source) => {\n      if (eventName !== _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.TEXT_CHANGE || this.ignoreChange) return;\n      if (!this.options.userOnly || source === _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER) {\n        this.record(delta, oldDelta);\n      } else {\n        this.transform(delta);\n      }\n    });\n    this.quill.keyboard.addBinding({\n      key: 'z',\n      shortKey: true\n    }, this.undo.bind(this));\n    this.quill.keyboard.addBinding({\n      key: 'z',\n      shortKey: true,\n      shiftKey: true\n    }, this.redo.bind(this));\n    if (/Win/i.test(navigator.platform)) {\n      this.quill.keyboard.addBinding({\n        key: 'y',\n        shortKey: true\n      }, this.redo.bind(this));\n    }\n    this.quill.root.addEventListener('beforeinput', event => {\n      if (event.inputType === 'historyUndo') {\n        this.undo();\n        event.preventDefault();\n      } else if (event.inputType === 'historyRedo') {\n        this.redo();\n        event.preventDefault();\n      }\n    });\n  }\n  change(source, dest) {\n    if (this.stack[source].length === 0) return;\n    const delta = this.stack[source].pop();\n    const base = this.quill.getContents();\n    const inverseDelta = delta.invert(base);\n    this.stack[dest].push(inverseDelta);\n    this.lastRecorded = 0;\n    this.ignoreChange = true;\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n    this.ignoreChange = false;\n    const index = getLastChangeIndex(this.quill.scroll, delta);\n    this.quill.setSelection(index);\n  }\n  clear() {\n    this.stack = {\n      undo: [],\n      redo: []\n    };\n  }\n  cutoff() {\n    this.lastRecorded = 0;\n  }\n  record(changeDelta, oldDelta) {\n    if (changeDelta.ops.length === 0) return;\n    this.stack.redo = [];\n    let undoDelta = changeDelta.invert(oldDelta);\n    const timestamp = Date.now();\n    if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {\n      const delta = this.stack.undo.pop();\n      undoDelta = undoDelta.compose(delta);\n    } else {\n      this.lastRecorded = timestamp;\n    }\n    if (undoDelta.length() === 0) return;\n    this.stack.undo.push(undoDelta);\n    if (this.stack.undo.length > this.options.maxStack) {\n      this.stack.undo.shift();\n    }\n  }\n  redo() {\n    this.change('redo', 'undo');\n  }\n  transform(delta) {\n    transformStack(this.stack.undo, delta);\n    transformStack(this.stack.redo, delta);\n  }\n  undo() {\n    this.change('undo', 'redo');\n  }\n}\nHistory.DEFAULTS = {\n  delay: 1000,\n  maxStack: 100,\n  userOnly: false\n};\nfunction transformStack(stack, delta) {\n  let remoteDelta = delta;\n  for (let i = stack.length - 1; i >= 0; i -= 1) {\n    const oldDelta = stack[i];\n    stack[i] = remoteDelta.transform(oldDelta, true);\n    remoteDelta = oldDelta.transform(remoteDelta);\n    if (stack[i].length() === 0) {\n      stack.splice(i, 1);\n    }\n  }\n}\nfunction endsWithNewlineChange(scroll, delta) {\n  const lastOp = delta.ops[delta.ops.length - 1];\n  if (lastOp == null) return false;\n  if (lastOp.insert != null) {\n    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\\n');\n  }\n  if (lastOp.attributes != null) {\n    return Object.keys(lastOp.attributes).some(attr => {\n      return scroll.query(attr, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK) != null;\n    });\n  }\n  return false;\n}\nfunction getLastChangeIndex(scroll, delta) {\n  const deleteLength = delta.reduce((length, op) => {\n    return length + (op.delete || 0);\n  }, 0);\n  let changeIndex = delta.length() - deleteLength;\n  if (endsWithNewlineChange(scroll, delta)) {\n    changeIndex -= 1;\n  }\n  return changeIndex;\n}\n\n\n//# sourceURL=webpack://Quill/./modules/history.js?");
	
	/***/ }),
	
	/***/ "./modules/keyboard.js":
	/*!*****************************!*\
	  !*** ./modules/keyboard.js ***!
	  \*****************************/
	/*! exports provided: default, SHORTKEY, normalize, deleteRange */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHORTKEY\", function() { return SHORTKEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalize\", function() { return normalize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteRange\", function() { return deleteRange; });\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.clonedeep */ \"./node_modules/lodash.clonedeep/index.js\");\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.isequal */ \"./node_modules/lodash.isequal/index.js\");\n/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('quill:keyboard');\nconst SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';\nclass Keyboard extends _core_module__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    this.bindings = {};\n    Object.keys(this.options.bindings).forEach(name => {\n      if (this.options.bindings[name]) {\n        this.addBinding(this.options.bindings[name]);\n      }\n    });\n    this.addBinding({\n      key: 'Enter',\n      shiftKey: null\n    }, this.handleEnter);\n    this.addBinding({\n      key: 'Enter',\n      metaKey: null,\n      ctrlKey: null,\n      altKey: null\n    }, () => {});\n    if (/Firefox/i.test(navigator.userAgent)) {\n      // Need to handle delete and backspace for Firefox in the general case #1171\n      this.addBinding({\n        key: 'Backspace'\n      }, {\n        collapsed: true\n      }, this.handleBackspace);\n      this.addBinding({\n        key: 'Delete'\n      }, {\n        collapsed: true\n      }, this.handleDelete);\n    } else {\n      this.addBinding({\n        key: 'Backspace'\n      }, {\n        collapsed: true,\n        prefix: /^.?$/\n      }, this.handleBackspace);\n      this.addBinding({\n        key: 'Delete'\n      }, {\n        collapsed: true,\n        suffix: /^.?$/\n      }, this.handleDelete);\n    }\n    this.addBinding({\n      key: 'Backspace'\n    }, {\n      collapsed: false\n    }, this.handleDeleteRange);\n    this.addBinding({\n      key: 'Delete'\n    }, {\n      collapsed: false\n    }, this.handleDeleteRange);\n    this.addBinding({\n      key: 'Backspace',\n      altKey: null,\n      ctrlKey: null,\n      metaKey: null,\n      shiftKey: null\n    }, {\n      collapsed: true,\n      offset: 0\n    }, this.handleBackspace);\n    this.listen();\n  }\n  static match(evt, binding) {\n    if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(key => {\n      return !!binding[key] !== evt[key] && binding[key] !== null;\n    })) {\n      return false;\n    }\n    return binding.key === evt.key || binding.key === evt.which;\n  }\n  addBinding(keyBinding) {\n    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    let handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    const binding = normalize(keyBinding);\n    if (binding == null) {\n      debug.warn('Attempted to add invalid keyboard binding', binding);\n      return;\n    }\n    if (typeof context === 'function') {\n      context = {\n        handler: context\n      };\n    }\n    if (typeof handler === 'function') {\n      handler = {\n        handler\n      };\n    }\n    const keys = Array.isArray(binding.key) ? binding.key : [binding.key];\n    keys.forEach(key => {\n      const singleBinding = Object.assign(Object.assign(Object.assign(Object.assign({}, binding), {\n        key\n      }), context), handler);\n      this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];\n      this.bindings[singleBinding.key].push(singleBinding);\n    });\n  }\n  listen() {\n    this.quill.root.addEventListener('keydown', evt => {\n      if (evt.defaultPrevented || evt.isComposing) return;\n      const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);\n      const matches = bindings.filter(binding => Keyboard.match(evt, binding));\n      if (matches.length === 0) return;\n      // @ts-expect-error\n      const blot = _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find(evt.target, true);\n      if (blot && blot.scroll !== this.quill.scroll) return;\n      const range = this.quill.getSelection();\n      if (range == null || !this.quill.hasFocus()) return;\n      const [line, offset] = this.quill.getLine(range.index);\n      const [leafStart, offsetStart] = this.quill.getLeaf(range.index);\n      const [leafEnd, offsetEnd] = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length);\n      const prefixText = leafStart instanceof parchment__WEBPACK_IMPORTED_MODULE_3__[\"TextBlot\"] ? leafStart.value().slice(0, offsetStart) : '';\n      const suffixText = leafEnd instanceof parchment__WEBPACK_IMPORTED_MODULE_3__[\"TextBlot\"] ? leafEnd.value().slice(offsetEnd) : '';\n      const curContext = {\n        collapsed: range.length === 0,\n        empty: range.length === 0 && line.length() <= 1,\n        format: this.quill.getFormat(range),\n        line,\n        offset,\n        prefix: prefixText,\n        suffix: suffixText,\n        event: evt\n      };\n      const prevented = matches.some(binding => {\n        if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) {\n          return false;\n        }\n        if (binding.empty != null && binding.empty !== curContext.empty) {\n          return false;\n        }\n        if (binding.offset != null && binding.offset !== curContext.offset) {\n          return false;\n        }\n        if (Array.isArray(binding.format)) {\n          // any format is present\n          if (binding.format.every(name => curContext.format[name] == null)) {\n            return false;\n          }\n        } else if (typeof binding.format === 'object') {\n          // all formats must match\n          if (!Object.keys(binding.format).every(name => {\n            if (binding.format[name] === true) return curContext.format[name] != null;\n            if (binding.format[name] === false) return curContext.format[name] == null;\n            return lodash_isequal__WEBPACK_IMPORTED_MODULE_1___default()(binding.format[name], curContext.format[name]);\n          })) {\n            return false;\n          }\n        }\n        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {\n          return false;\n        }\n        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {\n          return false;\n        }\n        return binding.handler.call(this, range, curContext, binding) !== true;\n      });\n      if (prevented) {\n        evt.preventDefault();\n      }\n    });\n  }\n  handleBackspace(range, context) {\n    // Check for astral symbols\n    const length = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]$/.test(context.prefix) ? 2 : 1;\n    if (range.index === 0 || this.quill.getLength() <= 1) return;\n    let formats = {};\n    const [line] = this.quill.getLine(range.index);\n    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(range.index - length).delete(length);\n    if (context.offset === 0) {\n      // Always deleting newline here, length always 1\n      const [prev] = this.quill.getLine(range.index - 1);\n      if (prev) {\n        const isPrevLineEmpty = prev.statics.blotName === 'block' && prev.length() <= 1;\n        if (!isPrevLineEmpty) {\n          const curFormats = line.formats();\n          const prevFormats = this.quill.getFormat(range.index - 1, 1);\n          formats = quill_delta__WEBPACK_IMPORTED_MODULE_2__[\"AttributeMap\"].diff(curFormats, prevFormats) || {};\n          if (Object.keys(formats).length > 0) {\n            // line.length() - 1 targets \\n in line, another -1 for newline being deleted\n            const formatDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(range.index + line.length() - 2).retain(1, formats);\n            delta = delta.compose(formatDelta);\n          }\n        }\n      }\n    }\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n    this.quill.focus();\n  }\n  handleDelete(range, context) {\n    // Check for astral symbols\n    const length = /^[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/.test(context.suffix) ? 2 : 1;\n    if (range.index >= this.quill.getLength() - length) return;\n    let formats = {};\n    const [line] = this.quill.getLine(range.index);\n    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(range.index).delete(length);\n    if (context.offset >= line.length() - 1) {\n      const [next] = this.quill.getLine(range.index + 1);\n      if (next) {\n        const curFormats = line.formats();\n        const nextFormats = this.quill.getFormat(range.index, 1);\n        formats = quill_delta__WEBPACK_IMPORTED_MODULE_2__[\"AttributeMap\"].diff(curFormats, nextFormats) || {};\n        if (Object.keys(formats).length > 0) {\n          delta = delta.retain(next.length() - 1).retain(1, formats);\n        }\n      }\n    }\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n    this.quill.focus();\n  }\n  handleDeleteRange(range) {\n    deleteRange({\n      range,\n      quill: this.quill\n    });\n    this.quill.focus();\n  }\n  handleEnter(range, context) {\n    const lineFormats = Object.keys(context.format).reduce((formats, format) => {\n      if (this.quill.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_3__[\"Scope\"].BLOCK) && !Array.isArray(context.format[format])) {\n        formats[format] = context.format[format];\n      }\n      return formats;\n    }, {});\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(range.index).delete(range.length).insert('\\n', lineFormats);\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n    this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    this.quill.focus();\n  }\n}\nconst defaultOptions = {\n  bindings: {\n    bold: makeFormatHandler('bold'),\n    italic: makeFormatHandler('italic'),\n    underline: makeFormatHandler('underline'),\n    indent: {\n      // highlight tab or tab at beginning of list, indent or blockquote\n      key: 'Tab',\n      format: ['blockquote', 'indent', 'list'],\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format('indent', '+1', _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        return false;\n      }\n    },\n    outdent: {\n      key: 'Tab',\n      shiftKey: true,\n      format: ['blockquote', 'indent', 'list'],\n      // highlight tab or tab at beginning of list, indent or blockquote\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        return false;\n      }\n    },\n    'outdent backspace': {\n      key: 'Backspace',\n      collapsed: true,\n      shiftKey: null,\n      metaKey: null,\n      ctrlKey: null,\n      altKey: null,\n      format: ['indent', 'list'],\n      offset: 0,\n      handler(range, context) {\n        if (context.format.indent != null) {\n          this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        } else if (context.format.list != null) {\n          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        }\n      }\n    },\n    'indent code-block': makeCodeBlockHandler(true),\n    'outdent code-block': makeCodeBlockHandler(false),\n    'remove tab': {\n      key: 'Tab',\n      shiftKey: true,\n      collapsed: true,\n      prefix: /\\t$/,\n      handler(range) {\n        this.quill.deleteText(range.index - 1, 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n      }\n    },\n    tab: {\n      key: 'Tab',\n      handler(range, context) {\n        if (context.format.table) return true;\n        this.quill.history.cutoff();\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(range.index).delete(range.length).insert('\\t');\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n        return false;\n      }\n    },\n    'blockquote empty enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['blockquote'],\n      empty: true,\n      handler() {\n        this.quill.format('blockquote', false, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n      }\n    },\n    'list empty enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['list'],\n      empty: true,\n      handler(range, context) {\n        const formats = {\n          list: false\n        };\n        if (context.format.indent) {\n          formats.indent = false;\n        }\n        this.quill.formatLine(range.index, range.length, formats, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n      }\n    },\n    'checklist enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: {\n        list: 'checked'\n      },\n      handler(range) {\n        const [line, offset] = this.quill.getLine(range.index);\n        const formats = Object.assign(Object.assign({}, line.formats()), {\n          list: 'checked'\n        });\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(range.index).insert('\\n', formats).retain(line.length() - offset - 1).retain(1, {\n          list: 'unchecked'\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n    },\n    'header enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['header'],\n      suffix: /^$/,\n      handler(range, context) {\n        const [line, offset] = this.quill.getLine(range.index);\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(range.index).insert('\\n', context.format).retain(line.length() - offset - 1).retain(1, {\n          header: null\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n    },\n    'table backspace': {\n      key: 'Backspace',\n      format: ['table'],\n      collapsed: true,\n      offset: 0,\n      handler() {}\n    },\n    'table delete': {\n      key: 'Delete',\n      format: ['table'],\n      collapsed: true,\n      suffix: /^$/,\n      handler() {}\n    },\n    'table enter': {\n      key: 'Enter',\n      shiftKey: null,\n      format: ['table'],\n      handler(range) {\n        const module = this.quill.getModule('table');\n        if (module) {\n          // @ts-expect-error\n          const [table, row, cell, offset] = module.getTable(range);\n          const shift = tableSide(table, row, cell, offset);\n          if (shift == null) return;\n          let index = table.offset();\n          if (shift < 0) {\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(index).insert('\\n');\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n            this.quill.setSelection(range.index + 1, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n          } else if (shift > 0) {\n            index += table.length();\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(index).insert('\\n');\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n            this.quill.setSelection(index, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n          }\n        }\n      }\n    },\n    'table tab': {\n      key: 'Tab',\n      shiftKey: null,\n      format: ['table'],\n      handler(range, context) {\n        const {\n          event,\n          line: cell\n        } = context;\n        const offset = cell.offset(this.quill.scroll);\n        if (event.shiftKey) {\n          this.quill.setSelection(offset - 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        } else {\n          this.quill.setSelection(offset + cell.length(), _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        }\n      }\n    },\n    'list autofill': {\n      key: ' ',\n      shiftKey: null,\n      collapsed: true,\n      format: {\n        'code-block': false,\n        blockquote: false,\n        table: false\n      },\n      prefix: /^\\s*?(\\d+\\.|-|\\*|\\[ ?\\]|\\[x\\])$/,\n      handler(range, context) {\n        if (this.quill.scroll.query('list') == null) return true;\n        const {\n          length\n        } = context.prefix;\n        const [line, offset] = this.quill.getLine(range.index);\n        if (offset > length) return true;\n        let value;\n        switch (context.prefix.trim()) {\n          case '[]':\n          case '[ ]':\n            value = 'unchecked';\n            break;\n          case '[x]':\n            value = 'checked';\n            break;\n          case '-':\n          case '*':\n            value = 'bullet';\n            break;\n          default:\n            value = 'ordered';\n        }\n        this.quill.insertText(range.index, ' ', _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, {\n          list: value\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index - length, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n        return false;\n      }\n    },\n    'code exit': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['code-block'],\n      prefix: /^$/,\n      suffix: /^\\s*$/,\n      handler(range) {\n        const [line, offset] = this.quill.getLine(range.index);\n        let numLines = 2;\n        let cur = line;\n        while (cur != null && cur.length() <= 1 && cur.formats()['code-block']) {\n          // @ts-expect-error\n          cur = cur.prev;\n          numLines -= 1;\n          // Requisite prev lines are empty\n          if (numLines <= 0) {\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_2___default.a().retain(range.index + line.length() - offset - 2).retain(1, {\n              'code-block': null\n            }).delete(1);\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n            this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n            return false;\n          }\n        }\n        return true;\n      }\n    },\n    'embed left': makeEmbedArrowHandler('ArrowLeft', false),\n    'embed left shift': makeEmbedArrowHandler('ArrowLeft', true),\n    'embed right': makeEmbedArrowHandler('ArrowRight', false),\n    'embed right shift': makeEmbedArrowHandler('ArrowRight', true),\n    'table down': makeTableArrowHandler(false),\n    'table up': makeTableArrowHandler(true)\n  }\n};\nKeyboard.DEFAULTS = defaultOptions;\nfunction makeCodeBlockHandler(indent) {\n  return {\n    key: 'Tab',\n    shiftKey: !indent,\n    format: {\n      'code-block': true\n    },\n    handler(range, _ref) {\n      let {\n        event\n      } = _ref;\n      const CodeBlock = this.quill.scroll.query('code-block');\n      // @ts-expect-error\n      const {\n        TAB\n      } = CodeBlock;\n      if (range.length === 0 && !event.shiftKey) {\n        this.quill.insertText(range.index, TAB, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        this.quill.setSelection(range.index + TAB.length, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n        return;\n      }\n      const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);\n      let {\n        index,\n        length\n      } = range;\n      lines.forEach((line, i) => {\n        if (indent) {\n          line.insertAt(0, TAB);\n          if (i === 0) {\n            index += TAB.length;\n          } else {\n            length += TAB.length;\n          }\n        } else if (line.domNode.textContent.startsWith(TAB)) {\n          line.deleteAt(0, TAB.length);\n          if (i === 0) {\n            index -= TAB.length;\n          } else {\n            length -= TAB.length;\n          }\n        }\n      });\n      this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n      this.quill.setSelection(index, length, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    }\n  };\n}\nfunction makeEmbedArrowHandler(key, shiftKey) {\n  const where = key === 'ArrowLeft' ? 'prefix' : 'suffix';\n  return {\n    key,\n    shiftKey,\n    altKey: null,\n    [where]: /^$/,\n    handler(range) {\n      let {\n        index\n      } = range;\n      if (key === 'ArrowRight') {\n        index += range.length + 1;\n      }\n      const [leaf] = this.quill.getLeaf(index);\n      if (!(leaf instanceof parchment__WEBPACK_IMPORTED_MODULE_3__[\"EmbedBlot\"])) return true;\n      if (key === 'ArrowLeft') {\n        if (shiftKey) {\n          this.quill.setSelection(range.index - 1, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        } else {\n          this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        }\n      } else if (shiftKey) {\n        this.quill.setSelection(range.index, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n      } else {\n        this.quill.setSelection(range.index + range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n      }\n      return false;\n    }\n  };\n}\nfunction makeFormatHandler(format) {\n  return {\n    key: format[0],\n    shortKey: true,\n    handler(range, context) {\n      this.quill.format(format, !context.format[format], _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n    }\n  };\n}\nfunction makeTableArrowHandler(up) {\n  return {\n    key: up ? 'ArrowUp' : 'ArrowDown',\n    collapsed: true,\n    format: ['table'],\n    handler(range, context) {\n      // TODO move to table module\n      const key = up ? 'prev' : 'next';\n      const cell = context.line;\n      const targetRow = cell.parent[key];\n      if (targetRow != null) {\n        if (targetRow.statics.blotName === 'table-row') {\n          // @ts-expect-error\n          let targetCell = targetRow.children.head;\n          let cur = cell;\n          while (cur.prev != null) {\n            // @ts-expect-error\n            cur = cur.prev;\n            targetCell = targetCell.next;\n          }\n          const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);\n          this.quill.setSelection(index, 0, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n        }\n      } else {\n        // @ts-expect-error\n        const targetLine = cell.table()[key];\n        if (targetLine != null) {\n          if (up) {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n          } else {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n          }\n        }\n      }\n      return false;\n    }\n  };\n}\nfunction normalize(binding) {\n  if (typeof binding === 'string' || typeof binding === 'number') {\n    binding = {\n      key: binding\n    };\n  } else if (typeof binding === 'object') {\n    binding = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(binding);\n  } else {\n    return null;\n  }\n  // @ts-expect-error\n  if (binding.shortKey) {\n    // @ts-expect-error\n    binding[SHORTKEY] = binding.shortKey;\n    // @ts-expect-error\n    delete binding.shortKey;\n  }\n  // @ts-expect-error\n  return binding;\n}\n// TODO: Move into quill.ts or editor.ts\nfunction deleteRange(_ref2) {\n  let {\n    quill,\n    range\n  } = _ref2;\n  const lines = quill.getLines(range);\n  let formats = {};\n  if (lines.length > 1) {\n    const firstFormats = lines[0].formats();\n    const lastFormats = lines[lines.length - 1].formats();\n    formats = quill_delta__WEBPACK_IMPORTED_MODULE_2__[\"AttributeMap\"].diff(lastFormats, firstFormats) || {};\n  }\n  quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n  if (Object.keys(formats).length > 0) {\n    quill.formatLine(range.index, 1, formats, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n  }\n  quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n}\nfunction tableSide(table, row, cell, offset) {\n  if (row.prev == null && row.next == null) {\n    if (cell.prev == null && cell.next == null) {\n      return offset === 0 ? -1 : 1;\n    }\n    return cell.prev == null ? -1 : 1;\n  }\n  if (row.prev == null) {\n    return -1;\n  }\n  if (row.next == null) {\n    return 1;\n  }\n  return null;\n}\n\n\n//# sourceURL=webpack://Quill/./modules/keyboard.js?");
	
	/***/ }),
	
	/***/ "./modules/syntax.js":
	/*!***************************!*\
	  !*** ./modules/syntax.js ***!
	  \***************************/
	/*! exports provided: CodeBlock, CodeToken, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeBlock\", function() { return SyntaxCodeBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeToken\", function() { return CodeToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Syntax; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ \"./formats/code.js\");\n/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clipboard */ \"./modules/clipboard.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst TokenAttributor = new parchment__WEBPACK_IMPORTED_MODULE_1__[\"ClassAttributor\"]('code-token', 'hljs', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].INLINE\n});\nclass CodeToken extends _blots_inline__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  static formats(node, scroll) {\n    while (node != null && node !== scroll.domNode) {\n      if (node.classList && node.classList.contains(_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].className)) {\n        // @ts-expect-error\n        return super.formats(node, scroll);\n      }\n      // @ts-expect-error\n      node = node.parentNode;\n    }\n    return undefined;\n  }\n  constructor(scroll, domNode, value) {\n    // @ts-expect-error\n    super(scroll, domNode, value);\n    // @ts-expect-error\n    TokenAttributor.add(this.domNode, value);\n  }\n  format(format, value) {\n    if (format !== CodeToken.blotName) {\n      super.format(format, value);\n    } else if (value) {\n      // @ts-expect-error\n      TokenAttributor.add(this.domNode, value);\n    } else {\n      TokenAttributor.remove(this.domNode);\n      this.domNode.classList.remove(this.statics.className);\n    }\n  }\n  optimize() {\n    // @ts-expect-error\n    super.optimize(...arguments);\n    if (!TokenAttributor.value(this.domNode)) {\n      this.unwrap();\n    }\n  }\n}\nCodeToken.blotName = 'code-token';\nCodeToken.className = 'ql-token';\nclass SyntaxCodeBlock extends _formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"] {\n  static create(value) {\n    const domNode = super.create(value);\n    if (typeof value === 'string') {\n      // @ts-expect-error\n      domNode.setAttribute('data-language', value);\n    }\n    return domNode;\n  }\n  static formats(domNode) {\n    // @ts-expect-error\n    return domNode.getAttribute('data-language') || 'plain';\n  }\n  static register() {} // Syntax module will register\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      // @ts-expect-error\n      this.domNode.setAttribute('data-language', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n  replaceWith(name, value) {\n    this.formatAt(0, this.length(), CodeToken.blotName, false);\n    return super.replaceWith(name, value);\n  }\n}\nclass SyntaxCodeBlockContainer extends _formats_code__WEBPACK_IMPORTED_MODULE_9__[\"CodeBlockContainer\"] {\n  attach() {\n    super.attach();\n    this.forceNext = false;\n    // @ts-expect-error\n    this.scroll.emitMount(this);\n  }\n  format(name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n      this.children.forEach(child => {\n        // @ts-expect-error\n        child.format(name, value);\n      });\n    }\n  }\n  formatAt(index, length, name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n    }\n    super.formatAt(index, length, name, value);\n  }\n  highlight(highlight) {\n    let forced = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    if (this.children.head == null) return;\n    const nodes = Array.from(this.domNode.childNodes).filter(node => node !== this.uiNode);\n    const text = `${nodes.map(node => node.textContent).join('\\n')}\\n`;\n    const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n    if (forced || this.forceNext || this.cachedText !== text) {\n      if (text.trim().length > 0 || this.cachedText == null) {\n        const oldDelta = this.children.reduce((delta, child) => {\n          // @ts-expect-error\n          return delta.concat(Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"blockDelta\"])(child, false));\n        }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());\n        const delta = highlight(text, language);\n        oldDelta.diff(delta).reduce((index, _ref) => {\n          let {\n            retain,\n            attributes\n          } = _ref;\n          // Should be all retains\n          if (!retain) return index;\n          if (attributes) {\n            Object.keys(attributes).forEach(format => {\n              if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {\n                // @ts-expect-error\n                this.formatAt(index, retain, format, attributes[format]);\n              }\n            });\n          }\n          // @ts-expect-error\n          return index + retain;\n        }, 0);\n      }\n      this.cachedText = text;\n      this.forceNext = false;\n    }\n  }\n  html(index, length) {\n    const [codeBlock] = this.children.find(index);\n    const language = codeBlock ? SyntaxCodeBlock.formats(codeBlock.domNode) : 'plain';\n    return `<pre data-language=\"${language}\">\\n${Object(_blots_text__WEBPACK_IMPORTED_MODULE_8__[\"escapeText\"])(this.code(index, length))}\\n</pre>`;\n  }\n  optimize(context) {\n    super.optimize(context);\n    if (this.parent != null && this.children.head != null && this.uiNode != null) {\n      const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n      // @ts-expect-error\n      if (language !== this.uiNode.value) {\n        // @ts-expect-error\n        this.uiNode.value = language;\n      }\n    }\n  }\n}\n// @ts-expect-error\nSyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];\nSyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;\nSyntaxCodeBlock.allowedChildren = [CodeToken, _blots_cursor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _blots_text__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _blots_break__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\nclass Syntax extends _core_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    // @ts-expect-error\n    if (this.options.hljs == null) {\n      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');\n    }\n    this.languages = this.options.languages.reduce((memo, _ref2) => {\n      let {\n        key\n      } = _ref2;\n      memo[key] = true;\n      return memo;\n    }, {});\n    this.highlightBlot = this.highlightBlot.bind(this);\n    this.initListener();\n    this.initTimer();\n  }\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(CodeToken, true);\n    // @ts-expect-error\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(SyntaxCodeBlock, true);\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(SyntaxCodeBlockContainer, true);\n  }\n  initListener() {\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_BLOT_MOUNT, blot => {\n      if (!(blot instanceof SyntaxCodeBlockContainer)) return;\n      const select = this.quill.root.ownerDocument.createElement('select');\n      this.options.languages.forEach(_ref3 => {\n        let {\n          key,\n          label\n        } = _ref3;\n        const option = select.ownerDocument.createElement('option');\n        option.textContent = label;\n        option.setAttribute('value', key);\n        select.appendChild(option);\n      });\n      select.addEventListener('change', () => {\n        blot.format(SyntaxCodeBlock.blotName, select.value);\n        this.quill.root.focus(); // Prevent scrolling\n        this.highlight(blot, true);\n      });\n      if (blot.uiNode == null) {\n        blot.attachUI(select);\n        if (blot.children.head) {\n          select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);\n        }\n      }\n    });\n  }\n  initTimer() {\n    let timer = null;\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      clearTimeout(timer);\n      timer = setTimeout(() => {\n        this.highlight();\n        timer = null;\n      }, this.options.interval);\n    });\n  }\n  highlight() {\n    let blot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    if (this.quill.selection.composing) return;\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER);\n    const range = this.quill.getSelection();\n    const blots = blot == null ?\n    // @ts-expect-error\n    this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];\n    blots.forEach(container => {\n      container.highlight(this.highlightBlot, force);\n    });\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n    if (range != null) {\n      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n    }\n  }\n  highlightBlot(text) {\n    let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'plain';\n    language = this.languages[language] ? language : 'plain';\n    if (language === 'plain') {\n      return Object(_blots_text__WEBPACK_IMPORTED_MODULE_8__[\"escapeText\"])(text).split('\\n').reduce((delta, line, i) => {\n        if (i !== 0) {\n          delta.insert('\\n', {\n            [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: language\n          });\n        }\n        return delta.insert(line);\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());\n    }\n    const container = this.quill.root.ownerDocument.createElement('div');\n    container.classList.add(_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].className);\n    // @ts-expect-error\n    container.innerHTML = this.options.hljs.highlight(language, text).value;\n    return Object(_clipboard__WEBPACK_IMPORTED_MODULE_10__[\"traverse\"])(this.quill.scroll, container, [(node, delta) => {\n      // @ts-expect-error\n      const value = TokenAttributor.value(node);\n      if (value) {\n        return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(delta.length(), {\n          [CodeToken.blotName]: value\n        }));\n      }\n      return delta;\n    }], [(node, delta) => {\n      // @ts-expect-error\n      return node.data.split('\\n').reduce((memo, nodeText, i) => {\n        if (i !== 0) memo.insert('\\n', {\n          [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: language\n        });\n        return memo.insert(nodeText);\n      }, delta);\n    }], new WeakMap());\n  }\n}\nSyntax.DEFAULTS = {\n  hljs: (() => {\n    // @ts-expect-error\n    return window.hljs;\n  })(),\n  interval: 1000,\n  languages: [{\n    key: 'plain',\n    label: 'Plain'\n  }, {\n    key: 'bash',\n    label: 'Bash'\n  }, {\n    key: 'cpp',\n    label: 'C++'\n  }, {\n    key: 'cs',\n    label: 'C#'\n  }, {\n    key: 'css',\n    label: 'CSS'\n  }, {\n    key: 'diff',\n    label: 'Diff'\n  }, {\n    key: 'xml',\n    label: 'HTML/XML'\n  }, {\n    key: 'java',\n    label: 'Java'\n  }, {\n    key: 'javascript',\n    label: 'Javascript'\n  }, {\n    key: 'markdown',\n    label: 'Markdown'\n  }, {\n    key: 'php',\n    label: 'PHP'\n  }, {\n    key: 'python',\n    label: 'Python'\n  }, {\n    key: 'ruby',\n    label: 'Ruby'\n  }, {\n    key: 'sql',\n    label: 'SQL'\n  }]\n};\n\n\n//# sourceURL=webpack://Quill/./modules/syntax.js?");
	
	/***/ }),
	
	/***/ "./modules/table.js":
	/*!**************************!*\
	  !*** ./modules/table.js ***!
	  \**************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _formats_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/table */ \"./formats/table.js\");\n\n\n\n\nclass Table extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableCell\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableRow\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableBody\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableContainer\"]);\n  }\n  constructor() {\n    // @ts-expect-error\n    super(...arguments);\n    this.listenBalanceCells();\n  }\n  balanceTables() {\n    // @ts-expect-error\n    this.quill.scroll.descendants(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableContainer\"]).forEach(table => {\n      // @ts-expect-error\n      table.balanceCells();\n    });\n  }\n  deleteColumn() {\n    const [table,, cell] = this.getTable();\n    if (cell == null) return;\n    // @ts-expect-error\n    table.deleteColumn(cell.cellOffset());\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n  }\n  deleteRow() {\n    const [, row] = this.getTable();\n    if (row == null) return;\n    row.remove();\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n  }\n  deleteTable() {\n    const [table] = this.getTable();\n    if (table == null) return;\n    // @ts-expect-error\n    const offset = table.offset();\n    // @ts-expect-error\n    table.remove();\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.quill.setSelection(offset, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n  }\n  getTable() {\n    let range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.quill.getSelection();\n    if (range == null) return [null, null, null, -1];\n    const [cell, offset] = this.quill.getLine(range.index);\n    if (cell == null || cell.statics.blotName !== _formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableCell\"].blotName) {\n      return [null, null, null, -1];\n    }\n    const row = cell.parent;\n    const table = row.parent.parent;\n    // @ts-expect-error\n    return [table, row, cell, offset];\n  }\n  insertColumn(offset) {\n    const range = this.quill.getSelection();\n    const [table, row, cell] = this.getTable(range);\n    if (cell == null) return;\n    const column = cell.cellOffset();\n    table.insertColumn(column + offset);\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    let shift = row.rowOffset();\n    if (offset === 0) {\n      shift += 1;\n    }\n    this.quill.setSelection(range.index + shift, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n  }\n  insertColumnLeft() {\n    this.insertColumn(0);\n  }\n  insertColumnRight() {\n    this.insertColumn(1);\n  }\n  insertRow(offset) {\n    const range = this.quill.getSelection();\n    const [table, row, cell] = this.getTable(range);\n    if (cell == null) return;\n    const index = row.rowOffset();\n    table.insertRow(index + offset);\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    if (offset > 0) {\n      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    } else {\n      this.quill.setSelection(range.index + row.children.length, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    }\n  }\n  insertRowAbove() {\n    this.insertRow(0);\n  }\n  insertRowBelow() {\n    this.insertRow(1);\n  }\n  insertTable(rows, columns) {\n    const range = this.quill.getSelection();\n    if (range == null) return;\n    const delta = new Array(rows).fill(0).reduce(memo => {\n      const text = new Array(columns).fill('\\n').join('');\n      return memo.insert(text, {\n        table: Object(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"tableId\"])()\n      });\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index));\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    this.balanceTables();\n  }\n  listenBalanceCells() {\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, mutations => {\n      mutations.some(mutation => {\n        if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {\n          this.quill.once(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.TEXT_CHANGE, (delta, old, source) => {\n            if (source !== _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) return;\n            this.balanceTables();\n          });\n          return true;\n        }\n        return false;\n      });\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n//# sourceURL=webpack://Quill/./modules/table.js?");
	
	/***/ }),
	
	/***/ "./modules/toolbar.js":
	/*!****************************!*\
	  !*** ./modules/toolbar.js ***!
	  \****************************/
	/*! exports provided: default, addControls */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toolbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addControls\", function() { return addControls; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/dist/parchment.js\");\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('quill:toolbar');\nclass Toolbar extends _core_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    if (Array.isArray(this.options.container)) {\n      const container = document.createElement('div');\n      addControls(container, this.options.container);\n      quill.container.parentNode.insertBefore(container, quill.container);\n      this.container = container;\n    } else if (typeof this.options.container === 'string') {\n      this.container = document.querySelector(this.options.container);\n    } else {\n      this.container = this.options.container;\n    }\n    if (!(this.container instanceof HTMLElement)) {\n      debug.error('Container required for toolbar', this.options);\n      return;\n    }\n    this.container.classList.add('ql-toolbar');\n    this.controls = [];\n    this.handlers = {};\n    // @ts-expect-error\n    Object.keys(this.options.handlers).forEach(format => {\n      // @ts-expect-error\n      this.addHandler(format, this.options.handlers[format]);\n    });\n    Array.from(this.container.querySelectorAll('button, select')).forEach(input => {\n      // @ts-expect-error\n      this.attach(input);\n    });\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.EDITOR_CHANGE, (type, range) => {\n      if (type === _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.SELECTION_CHANGE) {\n        this.update(range);\n      }\n    });\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      const [range] = this.quill.selection.getRange(); // quill.getSelection triggers update\n      this.update(range);\n    });\n  }\n  addHandler(format, handler) {\n    this.handlers[format] = handler;\n  }\n  attach(input) {\n    let format = Array.from(input.classList).find(className => {\n      return className.indexOf('ql-') === 0;\n    });\n    if (!format) return;\n    format = format.slice('ql-'.length);\n    if (input.tagName === 'BUTTON') {\n      input.setAttribute('type', 'button');\n    }\n    if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {\n      debug.warn('ignoring attaching to nonexistent format', format, input);\n      return;\n    }\n    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';\n    input.addEventListener(eventName, e => {\n      let value;\n      if (input.tagName === 'SELECT') {\n        // @ts-expect-error\n        if (input.selectedIndex < 0) return;\n        // @ts-expect-error\n        const selected = input.options[input.selectedIndex];\n        if (selected.hasAttribute('selected')) {\n          value = false;\n        } else {\n          value = selected.value || false;\n        }\n      } else {\n        if (input.classList.contains('ql-active')) {\n          value = false;\n        } else {\n          // @ts-expect-error\n          value = input.value || !input.hasAttribute('value');\n        }\n        e.preventDefault();\n      }\n      this.quill.focus();\n      const [range] = this.quill.selection.getRange();\n      if (this.handlers[format] != null) {\n        this.handlers[format].call(this, value);\n      } else if (\n      // @ts-expect-error\n      this.quill.scroll.query(format).prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_1__[\"EmbedBlot\"]) {\n        value = prompt(`Enter ${format}`); // eslint-disable-line no-alert\n        if (!value) return;\n        this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length).insert({\n          [format]: value\n        }), _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      } else {\n        this.quill.format(format, value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n      this.update(range);\n    });\n    this.controls.push([format, input]);\n  }\n  update(range) {\n    const formats = range == null ? {} : this.quill.getFormat(range);\n    this.controls.forEach(pair => {\n      const [format, input] = pair;\n      if (input.tagName === 'SELECT') {\n        let option;\n        if (range == null) {\n          option = null;\n        } else if (formats[format] == null) {\n          option = input.querySelector('option[selected]');\n        } else if (!Array.isArray(formats[format])) {\n          let value = formats[format];\n          if (typeof value === 'string') {\n            value = value.replace(/\"/g, '\\\\\"');\n          }\n          option = input.querySelector(`option[value=\"${value}\"]`);\n        }\n        if (option == null) {\n          // @ts-expect-error\n          input.value = ''; // TODO make configurable?\n          // @ts-expect-error\n          input.selectedIndex = -1;\n        } else {\n          option.selected = true;\n        }\n      } else if (range == null) {\n        input.classList.remove('ql-active');\n      } else if (input.hasAttribute('value')) {\n        // both being null should match (default values)\n        // '1' should match with 1 (headers)\n        const isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');\n        input.classList.toggle('ql-active', isActive);\n      } else {\n        input.classList.toggle('ql-active', formats[format] != null);\n      }\n    });\n  }\n}\nToolbar.DEFAULTS = {};\nfunction addButton(container, format, value) {\n  const input = document.createElement('button');\n  input.setAttribute('type', 'button');\n  input.classList.add(`ql-${format}`);\n  if (value != null) {\n    // @ts-expect-error\n    input.value = value;\n  }\n  container.appendChild(input);\n}\nfunction addControls(container, groups) {\n  if (!Array.isArray(groups[0])) {\n    // @ts-expect-error\n    groups = [groups];\n  }\n  groups.forEach(controls => {\n    const group = document.createElement('span');\n    group.classList.add('ql-formats');\n    controls.forEach(control => {\n      if (typeof control === 'string') {\n        addButton(group, control);\n      } else {\n        const format = Object.keys(control)[0];\n        const value = control[format];\n        if (Array.isArray(value)) {\n          addSelect(group, format, value);\n        } else {\n          addButton(group, format, value);\n        }\n      }\n    });\n    container.appendChild(group);\n  });\n}\nfunction addSelect(container, format, values) {\n  const input = document.createElement('select');\n  input.classList.add(`ql-${format}`);\n  values.forEach(value => {\n    const option = document.createElement('option');\n    if (value !== false) {\n      option.setAttribute('value', value);\n    } else {\n      option.setAttribute('selected', 'selected');\n    }\n    input.appendChild(option);\n  });\n  container.appendChild(input);\n}\nToolbar.DEFAULTS = {\n  container: null,\n  handlers: {\n    clean() {\n      const range = this.quill.getSelection();\n      if (range == null) return;\n      if (range.length === 0) {\n        const formats = this.quill.getFormat();\n        Object.keys(formats).forEach(name => {\n          // Clean functionality in existing apps only clean inline formats\n          if (this.quill.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].INLINE) != null) {\n            this.quill.format(name, false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n          }\n        });\n      } else {\n        this.quill.removeFormat(range, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    },\n    direction(value) {\n      const {\n        align\n      } = this.quill.getFormat();\n      if (value === 'rtl' && align == null) {\n        this.quill.format('align', 'right', _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      } else if (!value && align === 'right') {\n        this.quill.format('align', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n      this.quill.format('direction', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n    },\n    indent(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n      const indent = parseInt(formats.indent || 0, 10);\n      if (value === '+1' || value === '-1') {\n        let modifier = value === '+1' ? 1 : -1;\n        if (formats.direction === 'rtl') modifier *= -1;\n        this.quill.format('indent', indent + modifier, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    },\n    link(value) {\n      if (value === true) {\n        value = prompt('Enter link URL:'); // eslint-disable-line no-alert\n      }\n\n      this.quill.format('link', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n    },\n    list(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n      if (value === 'check') {\n        if (formats.list === 'checked' || formats.list === 'unchecked') {\n          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n        } else {\n          this.quill.format('list', 'unchecked', _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n        }\n      } else {\n        this.quill.format('list', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack://Quill/./modules/toolbar.js?");
	
	/***/ }),
	
	/***/ "./modules/uploader.js":
	/*!*****************************!*\
	  !*** ./modules/uploader.js ***!
	  \*****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\nclass Uploader extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    quill.root.addEventListener('drop', e => {\n      e.preventDefault();\n      let native;\n      if (document.caretRangeFromPoint) {\n        native = document.caretRangeFromPoint(e.clientX, e.clientY);\n        // @ts-expect-error\n      } else if (document.caretPositionFromPoint) {\n        // @ts-expect-error\n        const position = document.caretPositionFromPoint(e.clientX, e.clientY);\n        native = document.createRange();\n        native.setStart(position.offsetNode, position.offset);\n        native.setEnd(position.offsetNode, position.offset);\n      } else {\n        return;\n      }\n      const normalized = quill.selection.normalizeNative(native);\n      const range = quill.selection.normalizedToRange(normalized);\n      this.upload(range, e.dataTransfer.files);\n    });\n  }\n  upload(range, files) {\n    const uploads = [];\n    Array.from(files).forEach(file => {\n      if (file && this.options.mimetypes.includes(file.type)) {\n        uploads.push(file);\n      }\n    });\n    if (uploads.length > 0) {\n      this.options.handler.call(this, range, uploads);\n    }\n  }\n}\nUploader.DEFAULTS = {\n  mimetypes: ['image/png', 'image/jpeg'],\n  handler(range, files) {\n    const promises = files.map(file => {\n      return new Promise(resolve => {\n        const reader = new FileReader();\n        reader.onload = e => {\n          resolve(e.target.result);\n        };\n        reader.readAsDataURL(file);\n      });\n    });\n    Promise.all(promises).then(images => {\n      const update = images.reduce((delta, image) => {\n        return delta.insert({\n          image\n        });\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length));\n      this.quill.updateContents(update, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n      this.quill.setSelection(range.index + images.length, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uploader);\n\n//# sourceURL=webpack://Quill/./modules/uploader.js?");
	
	/***/ }),
	
	/***/ "./node_modules/eventemitter3/index.js":
	/*!*********************************************!*\
	  !*** ./node_modules/eventemitter3/index.js ***!
	  \*********************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("'use strict';\n\nvar has = Object.prototype.hasOwnProperty\n  , prefix = '~';\n\n/**\n * Constructor to create a storage for our `EE` objects.\n * An `Events` instance is a plain object whose properties are event names.\n *\n * @constructor\n * @private\n */\nfunction Events() {}\n\n//\n// We try to not inherit from `Object.prototype`. In some engines creating an\n// instance in this way is faster than calling `Object.create(null)` directly.\n// If `Object.create(null)` is not supported we prefix the event names with a\n// character to make sure that the built-in object properties are not\n// overridden or used as an attack vector.\n//\nif (Object.create) {\n  Events.prototype = Object.create(null);\n\n  //\n  // This hack is needed because the `__proto__` property is still inherited in\n  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.\n  //\n  if (!new Events().__proto__) prefix = false;\n}\n\n/**\n * Representation of a single event listener.\n *\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} [once=false] Specify if the listener is a one-time listener.\n * @constructor\n * @private\n */\nfunction EE(fn, context, once) {\n  this.fn = fn;\n  this.context = context;\n  this.once = once || false;\n}\n\n/**\n * Add a listener for a given event.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} once Specify if the listener is a one-time listener.\n * @returns {EventEmitter}\n * @private\n */\nfunction addListener(emitter, event, fn, context, once) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('The listener must be a function');\n  }\n\n  var listener = new EE(fn, context || emitter, once)\n    , evt = prefix ? prefix + event : event;\n\n  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;\n  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);\n  else emitter._events[evt] = [emitter._events[evt], listener];\n\n  return emitter;\n}\n\n/**\n * Clear event by name.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} evt The Event name.\n * @private\n */\nfunction clearEvent(emitter, evt) {\n  if (--emitter._eventsCount === 0) emitter._events = new Events();\n  else delete emitter._events[evt];\n}\n\n/**\n * Minimal `EventEmitter` interface that is molded against the Node.js\n * `EventEmitter` interface.\n *\n * @constructor\n * @public\n */\nfunction EventEmitter() {\n  this._events = new Events();\n  this._eventsCount = 0;\n}\n\n/**\n * Return an array listing the events for which the emitter has registered\n * listeners.\n *\n * @returns {Array}\n * @public\n */\nEventEmitter.prototype.eventNames = function eventNames() {\n  var names = []\n    , events\n    , name;\n\n  if (this._eventsCount === 0) return names;\n\n  for (name in (events = this._events)) {\n    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);\n  }\n\n  if (Object.getOwnPropertySymbols) {\n    return names.concat(Object.getOwnPropertySymbols(events));\n  }\n\n  return names;\n};\n\n/**\n * Return the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Array} The registered listeners.\n * @public\n */\nEventEmitter.prototype.listeners = function listeners(event) {\n  var evt = prefix ? prefix + event : event\n    , handlers = this._events[evt];\n\n  if (!handlers) return [];\n  if (handlers.fn) return [handlers.fn];\n\n  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {\n    ee[i] = handlers[i].fn;\n  }\n\n  return ee;\n};\n\n/**\n * Return the number of listeners listening to a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Number} The number of listeners.\n * @public\n */\nEventEmitter.prototype.listenerCount = function listenerCount(event) {\n  var evt = prefix ? prefix + event : event\n    , listeners = this._events[evt];\n\n  if (!listeners) return 0;\n  if (listeners.fn) return 1;\n  return listeners.length;\n};\n\n/**\n * Calls each of the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Boolean} `true` if the event had listeners, else `false`.\n * @public\n */\nEventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return false;\n\n  var listeners = this._events[evt]\n    , len = arguments.length\n    , args\n    , i;\n\n  if (listeners.fn) {\n    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);\n\n    switch (len) {\n      case 1: return listeners.fn.call(listeners.context), true;\n      case 2: return listeners.fn.call(listeners.context, a1), true;\n      case 3: return listeners.fn.call(listeners.context, a1, a2), true;\n      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;\n      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;\n      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;\n    }\n\n    for (i = 1, args = new Array(len -1); i < len; i++) {\n      args[i - 1] = arguments[i];\n    }\n\n    listeners.fn.apply(listeners.context, args);\n  } else {\n    var length = listeners.length\n      , j;\n\n    for (i = 0; i < length; i++) {\n      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);\n\n      switch (len) {\n        case 1: listeners[i].fn.call(listeners[i].context); break;\n        case 2: listeners[i].fn.call(listeners[i].context, a1); break;\n        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;\n        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;\n        default:\n          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {\n            args[j - 1] = arguments[j];\n          }\n\n          listeners[i].fn.apply(listeners[i].context, args);\n      }\n    }\n  }\n\n  return true;\n};\n\n/**\n * Add a listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.on = function on(event, fn, context) {\n  return addListener(this, event, fn, context, false);\n};\n\n/**\n * Add a one-time listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.once = function once(event, fn, context) {\n  return addListener(this, event, fn, context, true);\n};\n\n/**\n * Remove the listeners of a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn Only remove the listeners that match this function.\n * @param {*} context Only remove the listeners that have this context.\n * @param {Boolean} once Only remove one-time listeners.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return this;\n  if (!fn) {\n    clearEvent(this, evt);\n    return this;\n  }\n\n  var listeners = this._events[evt];\n\n  if (listeners.fn) {\n    if (\n      listeners.fn === fn &&\n      (!once || listeners.once) &&\n      (!context || listeners.context === context)\n    ) {\n      clearEvent(this, evt);\n    }\n  } else {\n    for (var i = 0, events = [], length = listeners.length; i < length; i++) {\n      if (\n        listeners[i].fn !== fn ||\n        (once && !listeners[i].once) ||\n        (context && listeners[i].context !== context)\n      ) {\n        events.push(listeners[i]);\n      }\n    }\n\n    //\n    // Reset the array, or remove it completely if we have no more listeners.\n    //\n    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;\n    else clearEvent(this, evt);\n  }\n\n  return this;\n};\n\n/**\n * Remove all listeners, or those of the specified event.\n *\n * @param {(String|Symbol)} [event] The event name.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {\n  var evt;\n\n  if (event) {\n    evt = prefix ? prefix + event : event;\n    if (this._events[evt]) clearEvent(this, evt);\n  } else {\n    this._events = new Events();\n    this._eventsCount = 0;\n  }\n\n  return this;\n};\n\n//\n// Alias methods names because people roll like that.\n//\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n//\n// Expose the prefix.\n//\nEventEmitter.prefixed = prefix;\n\n//\n// Allow `EventEmitter` to be imported as module namespace.\n//\nEventEmitter.EventEmitter = EventEmitter;\n\n//\n// Expose the module.\n//\nif ('undefined' !== typeof module) {\n  module.exports = EventEmitter;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/eventemitter3/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/fast-diff/diff.js":
	/*!****************************************!*\
	  !*** ./node_modules/fast-diff/diff.js ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("/**\n * This library modifies the diff-patch-match library by Neil Fraser\n * by removing the patch and match functionality and certain advanced\n * options in the diff function. The original license is as follows:\n *\n * ===\n *\n * Diff Match and Patch\n *\n * Copyright 2006 Google Inc.\n * http://code.google.com/p/google-diff-match-patch/\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n/**\n * The data structure representing a diff is an array of tuples:\n * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]\n * which means: delete 'Hello', add 'Goodbye' and keep ' world.'\n */\nvar DIFF_DELETE = -1;\nvar DIFF_INSERT = 1;\nvar DIFF_EQUAL = 0;\n\n\n/**\n * Find the differences between two texts.  Simplifies the problem by stripping\n * any common prefix or suffix off the texts before diffing.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info\n * @return {Array} Array of diff tuples.\n */\nfunction diff_main(text1, text2, cursor_pos, _fix_unicode) {\n  // Check for equality\n  if (text1 === text2) {\n    if (text1) {\n      return [[DIFF_EQUAL, text1]];\n    }\n    return [];\n  }\n\n  if (cursor_pos != null) {\n    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);\n    if (editdiff) {\n      return editdiff;\n    }\n  }\n\n  // Trim off common prefix (speedup).\n  var commonlength = diff_commonPrefix(text1, text2);\n  var commonprefix = text1.substring(0, commonlength);\n  text1 = text1.substring(commonlength);\n  text2 = text2.substring(commonlength);\n\n  // Trim off common suffix (speedup).\n  commonlength = diff_commonSuffix(text1, text2);\n  var commonsuffix = text1.substring(text1.length - commonlength);\n  text1 = text1.substring(0, text1.length - commonlength);\n  text2 = text2.substring(0, text2.length - commonlength);\n\n  // Compute the diff on the middle block.\n  var diffs = diff_compute_(text1, text2);\n\n  // Restore the prefix and suffix.\n  if (commonprefix) {\n    diffs.unshift([DIFF_EQUAL, commonprefix]);\n  }\n  if (commonsuffix) {\n    diffs.push([DIFF_EQUAL, commonsuffix]);\n  }\n  diff_cleanupMerge(diffs, _fix_unicode);\n  return diffs;\n};\n\n\n/**\n * Find the differences between two texts.  Assumes that the texts do not\n * have any common prefix or suffix.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_compute_(text1, text2) {\n  var diffs;\n\n  if (!text1) {\n    // Just add some text (speedup).\n    return [[DIFF_INSERT, text2]];\n  }\n\n  if (!text2) {\n    // Just delete some text (speedup).\n    return [[DIFF_DELETE, text1]];\n  }\n\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  var i = longtext.indexOf(shorttext);\n  if (i !== -1) {\n    // Shorter text is inside the longer text (speedup).\n    diffs = [\n      [DIFF_INSERT, longtext.substring(0, i)],\n      [DIFF_EQUAL, shorttext],\n      [DIFF_INSERT, longtext.substring(i + shorttext.length)]\n    ];\n    // Swap insertions for deletions if diff is reversed.\n    if (text1.length > text2.length) {\n      diffs[0][0] = diffs[2][0] = DIFF_DELETE;\n    }\n    return diffs;\n  }\n\n  if (shorttext.length === 1) {\n    // Single character string.\n    // After the previous speedup, the character can't be an equality.\n    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n  }\n\n  // Check to see if the problem can be split in two.\n  var hm = diff_halfMatch_(text1, text2);\n  if (hm) {\n    // A half-match was found, sort out the return data.\n    var text1_a = hm[0];\n    var text1_b = hm[1];\n    var text2_a = hm[2];\n    var text2_b = hm[3];\n    var mid_common = hm[4];\n    // Send both pairs off for separate processing.\n    var diffs_a = diff_main(text1_a, text2_a);\n    var diffs_b = diff_main(text1_b, text2_b);\n    // Merge the results.\n    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);\n  }\n\n  return diff_bisect_(text1, text2);\n};\n\n\n/**\n * Find the 'middle snake' of a diff, split the problem in two\n * and return the recursively constructed diff.\n * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n * @private\n */\nfunction diff_bisect_(text1, text2) {\n  // Cache the text lengths to prevent multiple calls.\n  var text1_length = text1.length;\n  var text2_length = text2.length;\n  var max_d = Math.ceil((text1_length + text2_length) / 2);\n  var v_offset = max_d;\n  var v_length = 2 * max_d;\n  var v1 = new Array(v_length);\n  var v2 = new Array(v_length);\n  // Setting all elements to -1 is faster in Chrome & Firefox than mixing\n  // integers and undefined.\n  for (var x = 0; x < v_length; x++) {\n    v1[x] = -1;\n    v2[x] = -1;\n  }\n  v1[v_offset + 1] = 0;\n  v2[v_offset + 1] = 0;\n  var delta = text1_length - text2_length;\n  // If the total number of characters is odd, then the front path will collide\n  // with the reverse path.\n  var front = (delta % 2 !== 0);\n  // Offsets for start and end of k loop.\n  // Prevents mapping of space beyond the grid.\n  var k1start = 0;\n  var k1end = 0;\n  var k2start = 0;\n  var k2end = 0;\n  for (var d = 0; d < max_d; d++) {\n    // Walk the front path one step.\n    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {\n      var k1_offset = v_offset + k1;\n      var x1;\n      if (k1 === -d || (k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1])) {\n        x1 = v1[k1_offset + 1];\n      } else {\n        x1 = v1[k1_offset - 1] + 1;\n      }\n      var y1 = x1 - k1;\n      while (\n        x1 < text1_length && y1 < text2_length &&\n        text1.charAt(x1) === text2.charAt(y1)\n      ) {\n        x1++;\n        y1++;\n      }\n      v1[k1_offset] = x1;\n      if (x1 > text1_length) {\n        // Ran off the right of the graph.\n        k1end += 2;\n      } else if (y1 > text2_length) {\n        // Ran off the bottom of the graph.\n        k1start += 2;\n      } else if (front) {\n        var k2_offset = v_offset + delta - k1;\n        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {\n          // Mirror x2 onto top-left coordinate system.\n          var x2 = text1_length - v2[k2_offset];\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n\n    // Walk the reverse path one step.\n    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {\n      var k2_offset = v_offset + k2;\n      var x2;\n      if (k2 === -d || (k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1])) {\n        x2 = v2[k2_offset + 1];\n      } else {\n        x2 = v2[k2_offset - 1] + 1;\n      }\n      var y2 = x2 - k2;\n      while (\n        x2 < text1_length && y2 < text2_length &&\n        text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)\n      ) {\n        x2++;\n        y2++;\n      }\n      v2[k2_offset] = x2;\n      if (x2 > text1_length) {\n        // Ran off the left of the graph.\n        k2end += 2;\n      } else if (y2 > text2_length) {\n        // Ran off the top of the graph.\n        k2start += 2;\n      } else if (!front) {\n        var k1_offset = v_offset + delta - k2;\n        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {\n          var x1 = v1[k1_offset];\n          var y1 = v_offset + x1 - k1_offset;\n          // Mirror x2 onto top-left coordinate system.\n          x2 = text1_length - x2;\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n  }\n  // Diff took too long and hit the deadline or\n  // number of diffs equals number of characters, no commonality at all.\n  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n};\n\n\n/**\n * Given the location of the 'middle snake', split the diff in two parts\n * and recurse.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {number} x Index of split point in text1.\n * @param {number} y Index of split point in text2.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_bisectSplit_(text1, text2, x, y) {\n  var text1a = text1.substring(0, x);\n  var text2a = text2.substring(0, y);\n  var text1b = text1.substring(x);\n  var text2b = text2.substring(y);\n\n  // Compute both diffs serially.\n  var diffs = diff_main(text1a, text2a);\n  var diffsb = diff_main(text1b, text2b);\n\n  return diffs.concat(diffsb);\n};\n\n\n/**\n * Determine the common prefix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the start of each\n *     string.\n */\nfunction diff_commonPrefix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerstart = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(pointerstart, pointermid) ==\n      text2.substring(pointerstart, pointermid)\n    ) {\n      pointermin = pointermid;\n      pointerstart = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Determine the common suffix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the end of each string.\n */\nfunction diff_commonSuffix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerend = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(text1.length - pointermid, text1.length - pointerend) ==\n      text2.substring(text2.length - pointermid, text2.length - pointerend)\n    ) {\n      pointermin = pointermid;\n      pointerend = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Do the two texts share a substring which is at least half the length of the\n * longer text?\n * This speedup can produce non-minimal diffs.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {Array.<string>} Five element Array, containing the prefix of\n *     text1, the suffix of text1, the prefix of text2, the suffix of\n *     text2 and the common middle.  Or null if there was no match.\n */\nfunction diff_halfMatch_(text1, text2) {\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {\n    return null;  // Pointless.\n  }\n\n  /**\n   * Does a substring of shorttext exist within longtext such that the substring\n   * is at least half the length of longtext?\n   * Closure, but does not reference any external variables.\n   * @param {string} longtext Longer string.\n   * @param {string} shorttext Shorter string.\n   * @param {number} i Start index of quarter length substring within longtext.\n   * @return {Array.<string>} Five element Array, containing the prefix of\n   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix\n   *     of shorttext and the common middle.  Or null if there was no match.\n   * @private\n   */\n  function diff_halfMatchI_(longtext, shorttext, i) {\n    // Start with a 1/4 length substring at position i as a seed.\n    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));\n    var j = -1;\n    var best_common = '';\n    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;\n    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {\n      var prefixLength = diff_commonPrefix(\n        longtext.substring(i), shorttext.substring(j));\n      var suffixLength = diff_commonSuffix(\n        longtext.substring(0, i), shorttext.substring(0, j));\n      if (best_common.length < suffixLength + prefixLength) {\n        best_common = shorttext.substring(\n          j - suffixLength, j) + shorttext.substring(j, j + prefixLength);\n        best_longtext_a = longtext.substring(0, i - suffixLength);\n        best_longtext_b = longtext.substring(i + prefixLength);\n        best_shorttext_a = shorttext.substring(0, j - suffixLength);\n        best_shorttext_b = shorttext.substring(j + prefixLength);\n      }\n    }\n    if (best_common.length * 2 >= longtext.length) {\n      return [\n        best_longtext_a, best_longtext_b,\n        best_shorttext_a, best_shorttext_b, best_common\n      ];\n    } else {\n      return null;\n    }\n  }\n\n  // First check if the second quarter is the seed for a half-match.\n  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));\n  // Check again based on the third quarter.\n  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));\n  var hm;\n  if (!hm1 && !hm2) {\n    return null;\n  } else if (!hm2) {\n    hm = hm1;\n  } else if (!hm1) {\n    hm = hm2;\n  } else {\n    // Both matched.  Select the longest.\n    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;\n  }\n\n  // A half-match was found, sort out the return data.\n  var text1_a, text1_b, text2_a, text2_b;\n  if (text1.length > text2.length) {\n    text1_a = hm[0];\n    text1_b = hm[1];\n    text2_a = hm[2];\n    text2_b = hm[3];\n  } else {\n    text2_a = hm[0];\n    text2_b = hm[1];\n    text1_a = hm[2];\n    text1_b = hm[3];\n  }\n  var mid_common = hm[4];\n  return [text1_a, text1_b, text2_a, text2_b, mid_common];\n};\n\n\n/**\n * Reorder and merge like edit sections.  Merge equalities.\n * Any edit section can move as long as it doesn't cross an equality.\n * @param {Array} diffs Array of diff tuples.\n * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff\n */\nfunction diff_cleanupMerge(diffs, fix_unicode) {\n  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.\n  var pointer = 0;\n  var count_delete = 0;\n  var count_insert = 0;\n  var text_delete = '';\n  var text_insert = '';\n  var commonlength;\n  while (pointer < diffs.length) {\n    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n      diffs.splice(pointer, 1);\n      continue;\n    }\n    switch (diffs[pointer][0]) {\n      case DIFF_INSERT:\n\n        count_insert++;\n        text_insert += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_DELETE:\n        count_delete++;\n        text_delete += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_EQUAL:\n        var previous_equality = pointer - count_insert - count_delete - 1;\n        if (fix_unicode) {\n          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,\n          // we assume that the old and new text in the diff are complete and correct\n          // unicode-encoded JS strings, but the tuple boundaries may fall between\n          // surrogate pairs.  we fix this by shaving off stray surrogates from the end\n          // of the previous equality and the beginning of this equality.  this may create\n          // empty equalities or a common prefix or suffix.  for example, if AB and AC are\n          // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and\n          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this\n          // particular case, both equalities go away, we absorb any previous inequalities,\n          // and we keep scanning for the next equality before rewriting the tuples.\n          if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {\n            var stray = diffs[previous_equality][1].slice(-1);\n            diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);\n            text_delete = stray + text_delete;\n            text_insert = stray + text_insert;\n            if (!diffs[previous_equality][1]) {\n              // emptied out previous equality, so delete it and include previous delete/insert\n              diffs.splice(previous_equality, 1);\n              pointer--;\n              var k = previous_equality - 1;\n              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {\n                count_insert++;\n                text_insert = diffs[k][1] + text_insert;\n                k--;\n              }\n              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {\n                count_delete++;\n                text_delete = diffs[k][1] + text_delete;\n                k--;\n              }\n              previous_equality = k;\n            }\n          }\n          if (starts_with_pair_end(diffs[pointer][1])) {\n            var stray = diffs[pointer][1].charAt(0);\n            diffs[pointer][1] = diffs[pointer][1].slice(1);\n            text_delete += stray;\n            text_insert += stray;\n          }\n        }\n        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n          // for empty equality not at end, wait for next equality\n          diffs.splice(pointer, 1);\n          break;\n        }\n        if (text_delete.length > 0 || text_insert.length > 0) {\n          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware\n          if (text_delete.length > 0 && text_insert.length > 0) {\n            // Factor out any common prefixes.\n            commonlength = diff_commonPrefix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              if (previous_equality >= 0) {\n                diffs[previous_equality][1] += text_insert.substring(0, commonlength);\n              } else {\n                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);\n                pointer++;\n              }\n              text_insert = text_insert.substring(commonlength);\n              text_delete = text_delete.substring(commonlength);\n            }\n            // Factor out any common suffixes.\n            commonlength = diff_commonSuffix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              diffs[pointer][1] =\n                text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];\n              text_insert = text_insert.substring(0, text_insert.length - commonlength);\n              text_delete = text_delete.substring(0, text_delete.length - commonlength);\n            }\n          }\n          // Delete the offending records and add the merged ones.\n          var n = count_insert + count_delete;\n          if (text_delete.length === 0 && text_insert.length === 0) {\n            diffs.splice(pointer - n, n);\n            pointer = pointer - n;\n          } else if (text_delete.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 1;\n          } else if (text_insert.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);\n            pointer = pointer - n + 1;\n          } else {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 2;\n          }\n        }\n        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {\n          // Merge this equality with the previous one.\n          diffs[pointer - 1][1] += diffs[pointer][1];\n          diffs.splice(pointer, 1);\n        } else {\n          pointer++;\n        }\n        count_insert = 0;\n        count_delete = 0;\n        text_delete = '';\n        text_insert = '';\n        break;\n    }\n  }\n  if (diffs[diffs.length - 1][1] === '') {\n    diffs.pop();  // Remove the dummy entry at the end.\n  }\n\n  // Second pass: look for single edits surrounded on both sides by equalities\n  // which can be shifted sideways to eliminate an equality.\n  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC\n  var changes = false;\n  pointer = 1;\n  // Intentionally ignore the first and last element (don't need checking).\n  while (pointer < diffs.length - 1) {\n    if (diffs[pointer - 1][0] === DIFF_EQUAL &&\n      diffs[pointer + 1][0] === DIFF_EQUAL) {\n      // This is a single edit surrounded by equalities.\n      if (diffs[pointer][1].substring(diffs[pointer][1].length -\n        diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {\n        // Shift the edit over the previous equality.\n        diffs[pointer][1] = diffs[pointer - 1][1] +\n          diffs[pointer][1].substring(0, diffs[pointer][1].length -\n            diffs[pointer - 1][1].length);\n        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];\n        diffs.splice(pointer - 1, 1);\n        changes = true;\n      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==\n        diffs[pointer + 1][1]) {\n        // Shift the edit over the next equality.\n        diffs[pointer - 1][1] += diffs[pointer + 1][1];\n        diffs[pointer][1] =\n          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +\n          diffs[pointer + 1][1];\n        diffs.splice(pointer + 1, 1);\n        changes = true;\n      }\n    }\n    pointer++;\n  }\n  // If shifts were made, the diff needs reordering and another shift sweep.\n  if (changes) {\n    diff_cleanupMerge(diffs, fix_unicode);\n  }\n};\n\nfunction is_surrogate_pair_start(charCode) {\n  return charCode >= 0xD800 && charCode <= 0xDBFF;\n}\n\nfunction is_surrogate_pair_end(charCode) {\n  return charCode >= 0xDC00 && charCode <= 0xDFFF;\n}\n\nfunction starts_with_pair_end(str) {\n  return is_surrogate_pair_end(str.charCodeAt(0));\n}\n\nfunction ends_with_pair_start(str) {\n  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));\n}\n\nfunction remove_empty_tuples(tuples) {\n  var ret = [];\n  for (var i = 0; i < tuples.length; i++) {\n    if (tuples[i][1].length > 0) {\n      ret.push(tuples[i]);\n    }\n  }\n  return ret;\n}\n\nfunction make_edit_splice(before, oldMiddle, newMiddle, after) {\n  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {\n    return null;\n  }\n  return remove_empty_tuples([\n    [DIFF_EQUAL, before],\n    [DIFF_DELETE, oldMiddle],\n    [DIFF_INSERT, newMiddle],\n    [DIFF_EQUAL, after]\n  ]);\n}\n\nfunction find_cursor_edit_diff(oldText, newText, cursor_pos) {\n  // note: this runs after equality check has ruled out exact equality\n  var oldRange = typeof cursor_pos === 'number' ?\n    { index: cursor_pos, length: 0 } : cursor_pos.oldRange;\n  var newRange = typeof cursor_pos === 'number' ?\n    null : cursor_pos.newRange;\n  // take into account the old and new selection to generate the best diff\n  // possible for a text edit.  for example, a text change from \"xxx\" to \"xx\"\n  // could be a delete or forwards-delete of any one of the x's, or the\n  // result of selecting two of the x's and typing \"x\".\n  var oldLength = oldText.length;\n  var newLength = newText.length;\n  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {\n    // see if we have an insert or delete before or after cursor\n    var oldCursor = oldRange.index;\n    var oldBefore = oldText.slice(0, oldCursor);\n    var oldAfter = oldText.slice(oldCursor);\n    var maybeNewCursor = newRange ? newRange.index : null;\n    editBefore: {\n      // is this an insert or delete right before oldCursor?\n      var newCursor = oldCursor + newLength - oldLength;\n      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {\n        break editBefore;\n      }\n      if (newCursor < 0 || newCursor > newLength) {\n        break editBefore;\n      }\n      var newBefore = newText.slice(0, newCursor);\n      var newAfter = newText.slice(newCursor);\n      if (newAfter !== oldAfter) {\n        break editBefore;\n      }\n      var prefixLength = Math.min(oldCursor, newCursor);\n      var oldPrefix = oldBefore.slice(0, prefixLength);\n      var newPrefix = newBefore.slice(0, prefixLength);\n      if (oldPrefix !== newPrefix) {\n        break editBefore;\n      }\n      var oldMiddle = oldBefore.slice(prefixLength);\n      var newMiddle = newBefore.slice(prefixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);\n    }\n    editAfter: {\n      // is this an insert or delete right after oldCursor?\n      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {\n        break editAfter;\n      }\n      var cursor = oldCursor;\n      var newBefore = newText.slice(0, cursor);\n      var newAfter = newText.slice(cursor);\n      if (newBefore !== oldBefore) {\n        break editAfter;\n      }\n      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);\n      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);\n      var newSuffix = newAfter.slice(newAfter.length - suffixLength);\n      if (oldSuffix !== newSuffix) {\n        break editAfter;\n      }\n      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);\n      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);\n      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n  if (oldRange.length > 0 && newRange && newRange.length === 0) {\n    replaceRange: {\n      // see if diff could be a splice of the old selection range\n      var oldPrefix = oldText.slice(0, oldRange.index);\n      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);\n      var prefixLength = oldPrefix.length;\n      var suffixLength = oldSuffix.length;\n      if (newLength < prefixLength + suffixLength) {\n        break replaceRange;\n      }\n      var newPrefix = newText.slice(0, prefixLength);\n      var newSuffix = newText.slice(newLength - suffixLength);\n      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {\n        break replaceRange;\n      }\n      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);\n      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n\n  return null;\n}\n\nfunction diff(text1, text2, cursor_pos) {\n  // only pass fix_unicode=true at the top level, not when diff_main is\n  // recursively invoked\n  return diff_main(text1, text2, cursor_pos, true);\n}\n\ndiff.INSERT = DIFF_INSERT;\ndiff.DELETE = DIFF_DELETE;\ndiff.EQUAL = DIFF_EQUAL;\n\nmodule.exports = diff;\n\n\n//# sourceURL=webpack://Quill/./node_modules/fast-diff/diff.js?");
	
	/***/ }),
	
	/***/ "./node_modules/lodash.clonedeep/index.js":
	/*!************************************************!*\
	  !*** ./node_modules/lodash.clonedeep/index.js ***!
	  \************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	eval("/* WEBPACK VAR INJECTION */(function(global, module) {/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to match `RegExp` flags from their coerced string values. */\nvar reFlags = /\\w*$/;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/** Used to identify `toStringTag` values supported by `_.clone`. */\nvar cloneableTags = {};\ncloneableTags[argsTag] = cloneableTags[arrayTag] =\ncloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =\ncloneableTags[boolTag] = cloneableTags[dateTag] =\ncloneableTags[float32Tag] = cloneableTags[float64Tag] =\ncloneableTags[int8Tag] = cloneableTags[int16Tag] =\ncloneableTags[int32Tag] = cloneableTags[mapTag] =\ncloneableTags[numberTag] = cloneableTags[objectTag] =\ncloneableTags[regexpTag] = cloneableTags[setTag] =\ncloneableTags[stringTag] = cloneableTags[symbolTag] =\ncloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =\ncloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;\ncloneableTags[errorTag] = cloneableTags[funcTag] =\ncloneableTags[weakMapTag] = false;\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/**\n * Adds the key-value `pair` to `map`.\n *\n * @private\n * @param {Object} map The map to modify.\n * @param {Array} pair The key-value pair to add.\n * @returns {Object} Returns `map`.\n */\nfunction addMapEntry(map, pair) {\n  // Don't return `map.set` because it's not chainable in IE 11.\n  map.set(pair[0], pair[1]);\n  return map;\n}\n\n/**\n * Adds `value` to `set`.\n *\n * @private\n * @param {Object} set The set to modify.\n * @param {*} value The value to add.\n * @returns {Object} Returns `set`.\n */\nfunction addSetEntry(set, value) {\n  // Don't return `set.add` because it's not chainable in IE 11.\n  set.add(value);\n  return set;\n}\n\n/**\n * A specialized version of `_.forEach` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array ? array.length : 0;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\n/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\n/**\n * A specialized version of `_.reduce` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {*} [accumulator] The initial value.\n * @param {boolean} [initAccum] Specify using the first element of `array` as\n *  the initial value.\n * @returns {*} Returns the accumulated value.\n */\nfunction arrayReduce(array, iteratee, accumulator, initAccum) {\n  var index = -1,\n      length = array ? array.length : 0;\n\n  if (initAccum && length) {\n    accumulator = array[++index];\n  }\n  while (++index < length) {\n    accumulator = iteratee(accumulator, array[index], index, array);\n  }\n  return accumulator;\n}\n\n/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\n/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\n/**\n * Checks if `value` is a host object in IE < 9.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a host object, else `false`.\n */\nfunction isHostObject(value) {\n  // Many host objects are `Object` objects that can coerce to strings\n  // despite having improperly defined `toString` methods.\n  var result = false;\n  if (value != null && typeof value.toString != 'function') {\n    try {\n      result = !!(value + '');\n    } catch (e) {}\n  }\n  return result;\n}\n\n/**\n * Converts `map` to its key-value pairs.\n *\n * @private\n * @param {Object} map The map to convert.\n * @returns {Array} Returns the key-value pairs.\n */\nfunction mapToArray(map) {\n  var index = -1,\n      result = Array(map.size);\n\n  map.forEach(function(value, key) {\n    result[++index] = [key, value];\n  });\n  return result;\n}\n\n/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\n/**\n * Converts `set` to an array of its values.\n *\n * @private\n * @param {Object} set The set to convert.\n * @returns {Array} Returns the values.\n */\nfunction setToArray(set) {\n  var index = -1,\n      result = Array(set.size);\n\n  set.forEach(function(value) {\n    result[++index] = value;\n  });\n  return result;\n}\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype,\n    funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    Symbol = root.Symbol,\n    Uint8Array = root.Uint8Array,\n    getPrototype = overArg(Object.getPrototypeOf, Object),\n    objectCreate = Object.create,\n    propertyIsEnumerable = objectProto.propertyIsEnumerable,\n    splice = arrayProto.splice;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols,\n    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,\n    nativeKeys = overArg(Object.keys, Object);\n\n/* Built-in method references that are verified to be native. */\nvar DataView = getNative(root, 'DataView'),\n    Map = getNative(root, 'Map'),\n    Promise = getNative(root, 'Promise'),\n    Set = getNative(root, 'Set'),\n    WeakMap = getNative(root, 'WeakMap'),\n    nativeCreate = getNative(Object, 'create');\n\n/** Used to detect maps, sets, and weakmaps. */\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries ? entries.length : 0;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n}\n\n/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  return this.has(key) && delete this.__data__[key];\n}\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);\n}\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries ? entries.length : 0;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n}\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  return true;\n}\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries ? entries.length : 0;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  return getMapData(this, key)['delete'](key);\n}\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  getMapData(this, key).set(key, value);\n  return this;\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  this.__data__ = new ListCache(entries);\n}\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n}\n\n/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  return this.__data__['delete'](key);\n}\n\n/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\n/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var cache = this.__data__;\n  if (cache instanceof ListCache) {\n    var pairs = cache.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      return this;\n    }\n    cache = this.__data__ = new MapCache(pairs);\n  }\n  cache.set(key, value);\n  return this;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.\n  // Safari 9 makes `arguments.length` enumerable in strict mode.\n  var result = (isArray(value) || isArguments(value))\n    ? baseTimes(value.length, String)\n    : [];\n\n  var length = result.length,\n      skipIndexes = !!length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    object[key] = value;\n  }\n}\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `_.assign` without support for multiple sources\n * or `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssign(object, source) {\n  return object && copyObject(source, keys(source), object);\n}\n\n/**\n * The base implementation of `_.clone` and `_.cloneDeep` which tracks\n * traversed objects.\n *\n * @private\n * @param {*} value The value to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @param {boolean} [isFull] Specify a clone including symbols.\n * @param {Function} [customizer] The function to customize cloning.\n * @param {string} [key] The key of `value`.\n * @param {Object} [object] The parent object of `value`.\n * @param {Object} [stack] Tracks traversed objects and their clone counterparts.\n * @returns {*} Returns the cloned value.\n */\nfunction baseClone(value, isDeep, isFull, customizer, key, object, stack) {\n  var result;\n  if (customizer) {\n    result = object ? customizer(value, key, object, stack) : customizer(value);\n  }\n  if (result !== undefined) {\n    return result;\n  }\n  if (!isObject(value)) {\n    return value;\n  }\n  var isArr = isArray(value);\n  if (isArr) {\n    result = initCloneArray(value);\n    if (!isDeep) {\n      return copyArray(value, result);\n    }\n  } else {\n    var tag = getTag(value),\n        isFunc = tag == funcTag || tag == genTag;\n\n    if (isBuffer(value)) {\n      return cloneBuffer(value, isDeep);\n    }\n    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {\n      if (isHostObject(value)) {\n        return object ? value : {};\n      }\n      result = initCloneObject(isFunc ? {} : value);\n      if (!isDeep) {\n        return copySymbols(value, baseAssign(result, value));\n      }\n    } else {\n      if (!cloneableTags[tag]) {\n        return object ? value : {};\n      }\n      result = initCloneByTag(value, tag, baseClone, isDeep);\n    }\n  }\n  // Check for circular references and return its corresponding clone.\n  stack || (stack = new Stack);\n  var stacked = stack.get(value);\n  if (stacked) {\n    return stacked;\n  }\n  stack.set(value, result);\n\n  if (!isArr) {\n    var props = isFull ? getAllKeys(value) : keys(value);\n  }\n  arrayEach(props || value, function(subValue, key) {\n    if (props) {\n      key = subValue;\n      subValue = value[key];\n    }\n    // Recursively populate clone (susceptible to call stack limits).\n    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));\n  });\n  return result;\n}\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} prototype The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nfunction baseCreate(proto) {\n  return isObject(proto) ? objectCreate(proto) : {};\n}\n\n/**\n * The base implementation of `getAllKeys` and `getAllKeysIn` which uses\n * `keysFunc` and `symbolsFunc` to get the enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @param {Function} symbolsFunc The function to get the symbols of `object`.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction baseGetAllKeys(object, keysFunc, symbolsFunc) {\n  var result = keysFunc(object);\n  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));\n}\n\n/**\n * The base implementation of `getTag`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  return objectToString.call(value);\n}\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * Creates a clone of  `buffer`.\n *\n * @private\n * @param {Buffer} buffer The buffer to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Buffer} Returns the cloned buffer.\n */\nfunction cloneBuffer(buffer, isDeep) {\n  if (isDeep) {\n    return buffer.slice();\n  }\n  var result = new buffer.constructor(buffer.length);\n  buffer.copy(result);\n  return result;\n}\n\n/**\n * Creates a clone of `arrayBuffer`.\n *\n * @private\n * @param {ArrayBuffer} arrayBuffer The array buffer to clone.\n * @returns {ArrayBuffer} Returns the cloned array buffer.\n */\nfunction cloneArrayBuffer(arrayBuffer) {\n  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);\n  new Uint8Array(result).set(new Uint8Array(arrayBuffer));\n  return result;\n}\n\n/**\n * Creates a clone of `dataView`.\n *\n * @private\n * @param {Object} dataView The data view to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned data view.\n */\nfunction cloneDataView(dataView, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;\n  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);\n}\n\n/**\n * Creates a clone of `map`.\n *\n * @private\n * @param {Object} map The map to clone.\n * @param {Function} cloneFunc The function to clone values.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned map.\n */\nfunction cloneMap(map, isDeep, cloneFunc) {\n  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);\n  return arrayReduce(array, addMapEntry, new map.constructor);\n}\n\n/**\n * Creates a clone of `regexp`.\n *\n * @private\n * @param {Object} regexp The regexp to clone.\n * @returns {Object} Returns the cloned regexp.\n */\nfunction cloneRegExp(regexp) {\n  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));\n  result.lastIndex = regexp.lastIndex;\n  return result;\n}\n\n/**\n * Creates a clone of `set`.\n *\n * @private\n * @param {Object} set The set to clone.\n * @param {Function} cloneFunc The function to clone values.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned set.\n */\nfunction cloneSet(set, isDeep, cloneFunc) {\n  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);\n  return arrayReduce(array, addSetEntry, new set.constructor);\n}\n\n/**\n * Creates a clone of the `symbol` object.\n *\n * @private\n * @param {Object} symbol The symbol object to clone.\n * @returns {Object} Returns the cloned symbol object.\n */\nfunction cloneSymbol(symbol) {\n  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};\n}\n\n/**\n * Creates a clone of `typedArray`.\n *\n * @private\n * @param {Object} typedArray The typed array to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned typed array.\n */\nfunction cloneTypedArray(typedArray, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;\n  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);\n}\n\n/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property identifiers to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @param {Function} [customizer] The function to customize copied values.\n * @returns {Object} Returns `object`.\n */\nfunction copyObject(source, props, object, customizer) {\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n\n    var newValue = customizer\n      ? customizer(object[key], source[key], key, object, source)\n      : undefined;\n\n    assignValue(object, key, newValue === undefined ? source[key] : newValue);\n  }\n  return object;\n}\n\n/**\n * Copies own symbol properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy symbols from.\n * @param {Object} [object={}] The object to copy symbols to.\n * @returns {Object} Returns `object`.\n */\nfunction copySymbols(source, object) {\n  return copyObject(source, getSymbols(source), object);\n}\n\n/**\n * Creates an array of own enumerable property names and symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeys(object) {\n  return baseGetAllKeys(object, keys, getSymbols);\n}\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\n/**\n * Creates an array of the own enumerable symbol properties of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;\n\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nvar getTag = baseGetTag;\n\n// Fallback for data views, maps, sets, and weak maps in IE 11,\n// for data views in Edge < 14, and promises in Node.js.\nif ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||\n    (Map && getTag(new Map) != mapTag) ||\n    (Promise && getTag(Promise.resolve()) != promiseTag) ||\n    (Set && getTag(new Set) != setTag) ||\n    (WeakMap && getTag(new WeakMap) != weakMapTag)) {\n  getTag = function(value) {\n    var result = objectToString.call(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : undefined;\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString: return dataViewTag;\n        case mapCtorString: return mapTag;\n        case promiseCtorString: return promiseTag;\n        case setCtorString: return setTag;\n        case weakMapCtorString: return weakMapTag;\n      }\n    }\n    return result;\n  };\n}\n\n/**\n * Initializes an array clone.\n *\n * @private\n * @param {Array} array The array to clone.\n * @returns {Array} Returns the initialized clone.\n */\nfunction initCloneArray(array) {\n  var length = array.length,\n      result = array.constructor(length);\n\n  // Add properties assigned by `RegExp#exec`.\n  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {\n    result.index = array.index;\n    result.input = array.input;\n  }\n  return result;\n}\n\n/**\n * Initializes an object clone.\n *\n * @private\n * @param {Object} object The object to clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneObject(object) {\n  return (typeof object.constructor == 'function' && !isPrototype(object))\n    ? baseCreate(getPrototype(object))\n    : {};\n}\n\n/**\n * Initializes an object clone based on its `toStringTag`.\n *\n * **Note:** This function only supports cloning values with tags of\n * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.\n *\n * @private\n * @param {Object} object The object to clone.\n * @param {string} tag The `toStringTag` of the object to clone.\n * @param {Function} cloneFunc The function to clone values.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneByTag(object, tag, cloneFunc, isDeep) {\n  var Ctor = object.constructor;\n  switch (tag) {\n    case arrayBufferTag:\n      return cloneArrayBuffer(object);\n\n    case boolTag:\n    case dateTag:\n      return new Ctor(+object);\n\n    case dataViewTag:\n      return cloneDataView(object, isDeep);\n\n    case float32Tag: case float64Tag:\n    case int8Tag: case int16Tag: case int32Tag:\n    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:\n      return cloneTypedArray(object, isDeep);\n\n    case mapTag:\n      return cloneMap(object, isDeep, cloneFunc);\n\n    case numberTag:\n    case stringTag:\n      return new Ctor(object);\n\n    case regexpTag:\n      return cloneRegExp(object);\n\n    case setTag:\n      return cloneSet(object, isDeep, cloneFunc);\n\n    case symbolTag:\n      return cloneSymbol(object);\n  }\n}\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return !!length &&\n    (typeof value == 'number' || reIsUint.test(value)) &&\n    (value > -1 && value % 1 == 0 && value < length);\n}\n\n/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to process.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\n/**\n * This method is like `_.clone` except that it recursively clones `value`.\n *\n * @static\n * @memberOf _\n * @since 1.0.0\n * @category Lang\n * @param {*} value The value to recursively clone.\n * @returns {*} Returns the deep cloned value.\n * @see _.clone\n * @example\n *\n * var objects = [{ 'a': 1 }, { 'b': 2 }];\n *\n * var deep = _.cloneDeep(objects);\n * console.log(deep[0] === objects[0]);\n * // => false\n */\nfunction cloneDeep(value) {\n  return baseClone(value, true, true);\n}\n\n/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nfunction isArguments(value) {\n  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.\n  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&\n    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);\n}\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 8-9 which returns 'object' for typed array and other constructors.\n  var tag = isObject(value) ? objectToString.call(value) : '';\n  return tag == funcTag || tag == genTag;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\n/**\n * This method returns a new empty array.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {Array} Returns the new empty array.\n * @example\n *\n * var arrays = _.times(2, _.stubArray);\n *\n * console.log(arrays);\n * // => [[], []]\n *\n * console.log(arrays[0] === arrays[1]);\n * // => false\n */\nfunction stubArray() {\n  return [];\n}\n\n/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = cloneDeep;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://Quill/./node_modules/lodash.clonedeep/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/lodash.isequal/index.js":
	/*!**********************************************!*\
	  !*** ./node_modules/lodash.isequal/index.js ***!
	  \**********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	eval("/* WEBPACK VAR INJECTION */(function(global, module) {/**\n * Lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright JS Foundation and other contributors <https://js.foundation/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    asyncTag = '[object AsyncFunction]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    nullTag = '[object Null]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    proxyTag = '[object Proxy]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]',\n    undefinedTag = '[object Undefined]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * A specialized version of `_.filter` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {Array} Returns the new filtered array.\n */\nfunction arrayFilter(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      resIndex = 0,\n      result = [];\n\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result[resIndex++] = value;\n    }\n  }\n  return result;\n}\n\n/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\n/**\n * A specialized version of `_.some` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {boolean} Returns `true` if any element passes the predicate check,\n *  else `false`.\n */\nfunction arraySome(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (predicate(array[index], index, array)) {\n      return true;\n    }\n  }\n  return false;\n}\n\n/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\n/**\n * Checks if a `cache` value for `key` exists.\n *\n * @private\n * @param {Object} cache The cache to query.\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction cacheHas(cache, key) {\n  return cache.has(key);\n}\n\n/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\n/**\n * Converts `map` to its key-value pairs.\n *\n * @private\n * @param {Object} map The map to convert.\n * @returns {Array} Returns the key-value pairs.\n */\nfunction mapToArray(map) {\n  var index = -1,\n      result = Array(map.size);\n\n  map.forEach(function(value, key) {\n    result[++index] = [key, value];\n  });\n  return result;\n}\n\n/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\n/**\n * Converts `set` to an array of its values.\n *\n * @private\n * @param {Object} set The set to convert.\n * @returns {Array} Returns the values.\n */\nfunction setToArray(set) {\n  var index = -1,\n      result = Array(set.size);\n\n  set.forEach(function(value) {\n    result[++index] = value;\n  });\n  return result;\n}\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype,\n    funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    Symbol = root.Symbol,\n    Uint8Array = root.Uint8Array,\n    propertyIsEnumerable = objectProto.propertyIsEnumerable,\n    splice = arrayProto.splice,\n    symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols,\n    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,\n    nativeKeys = overArg(Object.keys, Object);\n\n/* Built-in method references that are verified to be native. */\nvar DataView = getNative(root, 'DataView'),\n    Map = getNative(root, 'Map'),\n    Promise = getNative(root, 'Promise'),\n    Set = getNative(root, 'Set'),\n    WeakMap = getNative(root, 'WeakMap'),\n    nativeCreate = getNative(Object, 'create');\n\n/** Used to detect maps, sets, and weakmaps. */\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\n/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\n/**\n *\n * Creates an array cache object to store unique values.\n *\n * @private\n * @constructor\n * @param {Array} [values] The values to cache.\n */\nfunction SetCache(values) {\n  var index = -1,\n      length = values == null ? 0 : values.length;\n\n  this.__data__ = new MapCache;\n  while (++index < length) {\n    this.add(values[index]);\n  }\n}\n\n/**\n * Adds `value` to the array cache.\n *\n * @private\n * @name add\n * @memberOf SetCache\n * @alias push\n * @param {*} value The value to cache.\n * @returns {Object} Returns the cache instance.\n */\nfunction setCacheAdd(value) {\n  this.__data__.set(value, HASH_UNDEFINED);\n  return this;\n}\n\n/**\n * Checks if `value` is in the array cache.\n *\n * @private\n * @name has\n * @memberOf SetCache\n * @param {*} value The value to search for.\n * @returns {number} Returns `true` if `value` is found, else `false`.\n */\nfunction setCacheHas(value) {\n  return this.__data__.has(value);\n}\n\n// Add methods to `SetCache`.\nSetCache.prototype.add = SetCache.prototype.push = setCacheAdd;\nSetCache.prototype.has = setCacheHas;\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\n/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\n/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\n/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `getAllKeys` and `getAllKeysIn` which uses\n * `keysFunc` and `symbolsFunc` to get the enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @param {Function} symbolsFunc The function to get the symbols of `object`.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction baseGetAllKeys(object, keysFunc, symbolsFunc) {\n  var result = keysFunc(object);\n  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));\n}\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\n/**\n * The base implementation of `_.isEqual` which supports partial comparisons\n * and tracks traversed objects.\n *\n * @private\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Unordered comparison\n *  2 - Partial comparison\n * @param {Function} [customizer] The function to customize comparisons.\n * @param {Object} [stack] Tracks traversed `value` and `other` objects.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n */\nfunction baseIsEqual(value, other, bitmask, customizer, stack) {\n  if (value === other) {\n    return true;\n  }\n  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {\n    return value !== value && other !== other;\n  }\n  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);\n}\n\n/**\n * A specialized version of `baseIsEqual` for arrays and objects which performs\n * deep comparisons and tracks traversed objects enabling objects with circular\n * references to be compared.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} [stack] Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {\n  var objIsArr = isArray(object),\n      othIsArr = isArray(other),\n      objTag = objIsArr ? arrayTag : getTag(object),\n      othTag = othIsArr ? arrayTag : getTag(other);\n\n  objTag = objTag == argsTag ? objectTag : objTag;\n  othTag = othTag == argsTag ? objectTag : othTag;\n\n  var objIsObj = objTag == objectTag,\n      othIsObj = othTag == objectTag,\n      isSameTag = objTag == othTag;\n\n  if (isSameTag && isBuffer(object)) {\n    if (!isBuffer(other)) {\n      return false;\n    }\n    objIsArr = true;\n    objIsObj = false;\n  }\n  if (isSameTag && !objIsObj) {\n    stack || (stack = new Stack);\n    return (objIsArr || isTypedArray(object))\n      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)\n      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);\n  }\n  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {\n    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),\n        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');\n\n    if (objIsWrapped || othIsWrapped) {\n      var objUnwrapped = objIsWrapped ? object.value() : object,\n          othUnwrapped = othIsWrapped ? other.value() : other;\n\n      stack || (stack = new Stack);\n      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);\n    }\n  }\n  if (!isSameTag) {\n    return false;\n  }\n  stack || (stack = new Stack);\n  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);\n}\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * A specialized version of `baseIsEqualDeep` for arrays with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Array} array The array to compare.\n * @param {Array} other The other array to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `array` and `other` objects.\n * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.\n */\nfunction equalArrays(array, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      arrLength = array.length,\n      othLength = other.length;\n\n  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {\n    return false;\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(array);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var index = -1,\n      result = true,\n      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;\n\n  stack.set(array, other);\n  stack.set(other, array);\n\n  // Ignore non-index properties.\n  while (++index < arrLength) {\n    var arrValue = array[index],\n        othValue = other[index];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, arrValue, index, other, array, stack)\n        : customizer(arrValue, othValue, index, array, other, stack);\n    }\n    if (compared !== undefined) {\n      if (compared) {\n        continue;\n      }\n      result = false;\n      break;\n    }\n    // Recursively compare arrays (susceptible to call stack limits).\n    if (seen) {\n      if (!arraySome(other, function(othValue, othIndex) {\n            if (!cacheHas(seen, othIndex) &&\n                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {\n              return seen.push(othIndex);\n            }\n          })) {\n        result = false;\n        break;\n      }\n    } else if (!(\n          arrValue === othValue ||\n            equalFunc(arrValue, othValue, bitmask, customizer, stack)\n        )) {\n      result = false;\n      break;\n    }\n  }\n  stack['delete'](array);\n  stack['delete'](other);\n  return result;\n}\n\n/**\n * A specialized version of `baseIsEqualDeep` for comparing objects of\n * the same `toStringTag`.\n *\n * **Note:** This function only supports comparing values with tags of\n * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {string} tag The `toStringTag` of the objects to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {\n  switch (tag) {\n    case dataViewTag:\n      if ((object.byteLength != other.byteLength) ||\n          (object.byteOffset != other.byteOffset)) {\n        return false;\n      }\n      object = object.buffer;\n      other = other.buffer;\n\n    case arrayBufferTag:\n      if ((object.byteLength != other.byteLength) ||\n          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {\n        return false;\n      }\n      return true;\n\n    case boolTag:\n    case dateTag:\n    case numberTag:\n      // Coerce booleans to `1` or `0` and dates to milliseconds.\n      // Invalid dates are coerced to `NaN`.\n      return eq(+object, +other);\n\n    case errorTag:\n      return object.name == other.name && object.message == other.message;\n\n    case regexpTag:\n    case stringTag:\n      // Coerce regexes to strings and treat strings, primitives and objects,\n      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring\n      // for more details.\n      return object == (other + '');\n\n    case mapTag:\n      var convert = mapToArray;\n\n    case setTag:\n      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;\n      convert || (convert = setToArray);\n\n      if (object.size != other.size && !isPartial) {\n        return false;\n      }\n      // Assume cyclic values are equal.\n      var stacked = stack.get(object);\n      if (stacked) {\n        return stacked == other;\n      }\n      bitmask |= COMPARE_UNORDERED_FLAG;\n\n      // Recursively compare objects (susceptible to call stack limits).\n      stack.set(object, other);\n      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);\n      stack['delete'](object);\n      return result;\n\n    case symbolTag:\n      if (symbolValueOf) {\n        return symbolValueOf.call(object) == symbolValueOf.call(other);\n      }\n  }\n  return false;\n}\n\n/**\n * A specialized version of `baseIsEqualDeep` for objects with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalObjects(object, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      objProps = getAllKeys(object),\n      objLength = objProps.length,\n      othProps = getAllKeys(other),\n      othLength = othProps.length;\n\n  if (objLength != othLength && !isPartial) {\n    return false;\n  }\n  var index = objLength;\n  while (index--) {\n    var key = objProps[index];\n    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {\n      return false;\n    }\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(object);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var result = true;\n  stack.set(object, other);\n  stack.set(other, object);\n\n  var skipCtor = isPartial;\n  while (++index < objLength) {\n    key = objProps[index];\n    var objValue = object[key],\n        othValue = other[key];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, objValue, key, other, object, stack)\n        : customizer(objValue, othValue, key, object, other, stack);\n    }\n    // Recursively compare objects (susceptible to call stack limits).\n    if (!(compared === undefined\n          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))\n          : compared\n        )) {\n      result = false;\n      break;\n    }\n    skipCtor || (skipCtor = key == 'constructor');\n  }\n  if (result && !skipCtor) {\n    var objCtor = object.constructor,\n        othCtor = other.constructor;\n\n    // Non `Object` object instances with different constructors are not equal.\n    if (objCtor != othCtor &&\n        ('constructor' in object && 'constructor' in other) &&\n        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&\n          typeof othCtor == 'function' && othCtor instanceof othCtor)) {\n      result = false;\n    }\n  }\n  stack['delete'](object);\n  stack['delete'](other);\n  return result;\n}\n\n/**\n * Creates an array of own enumerable property names and symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeys(object) {\n  return baseGetAllKeys(object, keys, getSymbols);\n}\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\n/**\n * Creates an array of the own enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbols = !nativeGetSymbols ? stubArray : function(object) {\n  if (object == null) {\n    return [];\n  }\n  object = Object(object);\n  return arrayFilter(nativeGetSymbols(object), function(symbol) {\n    return propertyIsEnumerable.call(object, symbol);\n  });\n};\n\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nvar getTag = baseGetTag;\n\n// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.\nif ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||\n    (Map && getTag(new Map) != mapTag) ||\n    (Promise && getTag(Promise.resolve()) != promiseTag) ||\n    (Set && getTag(new Set) != setTag) ||\n    (WeakMap && getTag(new WeakMap) != weakMapTag)) {\n  getTag = function(value) {\n    var result = baseGetTag(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : '';\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString: return dataViewTag;\n        case mapCtorString: return mapTag;\n        case promiseCtorString: return promiseTag;\n        case setCtorString: return setTag;\n        case weakMapCtorString: return weakMapTag;\n      }\n    }\n    return result;\n  };\n}\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return !!length &&\n    (typeof value == 'number' || reIsUint.test(value)) &&\n    (value > -1 && value % 1 == 0 && value < length);\n}\n\n/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\n/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\n/**\n * Performs a deep comparison between two values to determine if they are\n * equivalent.\n *\n * **Note:** This method supports comparing arrays, array buffers, booleans,\n * date objects, error objects, maps, numbers, `Object` objects, regexes,\n * sets, strings, symbols, and typed arrays. `Object` objects are compared\n * by their own, not inherited, enumerable properties. Functions and DOM\n * nodes are compared by strict equality, i.e. `===`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.isEqual(object, other);\n * // => true\n *\n * object === other;\n * // => false\n */\nfunction isEqual(value, other) {\n  return baseIsEqual(value, other);\n}\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\n/**\n * This method returns a new empty array.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {Array} Returns the new empty array.\n * @example\n *\n * var arrays = _.times(2, _.stubArray);\n *\n * console.log(arrays);\n * // => [[], []]\n *\n * console.log(arrays[0] === arrays[1]);\n * // => false\n */\nfunction stubArray() {\n  return [];\n}\n\n/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = isEqual;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://Quill/./node_modules/lodash.isequal/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/lodash.merge/index.js":
	/*!********************************************!*\
	  !*** ./node_modules/lodash.merge/index.js ***!
	  \********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	eval("/* WEBPACK VAR INJECTION */(function(global, module) {/**\n * Lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used to detect hot functions by number of calls within a span of milliseconds. */\nvar HOT_COUNT = 800,\n    HOT_SPAN = 16;\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    asyncTag = '[object AsyncFunction]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    nullTag = '[object Null]',\n    objectTag = '[object Object]',\n    proxyTag = '[object Proxy]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    undefinedTag = '[object Undefined]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * A faster alternative to `Function#apply`, this function invokes `func`\n * with the `this` binding of `thisArg` and the arguments of `args`.\n *\n * @private\n * @param {Function} func The function to invoke.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {Array} args The arguments to invoke `func` with.\n * @returns {*} Returns the result of `func`.\n */\nfunction apply(func, thisArg, args) {\n  switch (args.length) {\n    case 0: return func.call(thisArg);\n    case 1: return func.call(thisArg, args[0]);\n    case 2: return func.call(thisArg, args[0], args[1]);\n    case 3: return func.call(thisArg, args[0], args[1], args[2]);\n  }\n  return func.apply(thisArg, args);\n}\n\n/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\n/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\n/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype,\n    funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    Symbol = root.Symbol,\n    Uint8Array = root.Uint8Array,\n    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,\n    getPrototype = overArg(Object.getPrototypeOf, Object),\n    objectCreate = Object.create,\n    propertyIsEnumerable = objectProto.propertyIsEnumerable,\n    splice = arrayProto.splice,\n    symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\nvar defineProperty = (function() {\n  try {\n    var func = getNative(Object, 'defineProperty');\n    func({}, '', {});\n    return func;\n  } catch (e) {}\n}());\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,\n    nativeMax = Math.max,\n    nativeNow = Date.now;\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map'),\n    nativeCreate = getNative(Object, 'create');\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} proto The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nvar baseCreate = (function() {\n  function object() {}\n  return function(proto) {\n    if (!isObject(proto)) {\n      return {};\n    }\n    if (objectCreate) {\n      return objectCreate(proto);\n    }\n    object.prototype = proto;\n    var result = new object;\n    object.prototype = undefined;\n    return result;\n  };\n}());\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\n/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\n/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\n/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\n/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * This function is like `assignValue` except that it doesn't assign\n * `undefined` values.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignMergeValue(object, key, value) {\n  if ((value !== undefined && !eq(object[key], value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `assignValue` and `assignMergeValue` without\n * value checks.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction baseAssignValue(object, key, value) {\n  if (key == '__proto__' && defineProperty) {\n    defineProperty(object, key, {\n      'configurable': true,\n      'enumerable': true,\n      'value': value,\n      'writable': true\n    });\n  } else {\n    object[key] = value;\n  }\n}\n\n/**\n * The base implementation of `baseForOwn` which iterates over `object`\n * properties returned by `keysFunc` and invokes `iteratee` for each property.\n * Iteratee functions may exit iteration early by explicitly returning `false`.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @returns {Object} Returns `object`.\n */\nvar baseFor = createBaseFor();\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\n/**\n * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeysIn(object) {\n  if (!isObject(object)) {\n    return nativeKeysIn(object);\n  }\n  var isProto = isPrototype(object),\n      result = [];\n\n  for (var key in object) {\n    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.merge` without support for multiple sources.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} [customizer] The function to customize merged values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMerge(object, source, srcIndex, customizer, stack) {\n  if (object === source) {\n    return;\n  }\n  baseFor(source, function(srcValue, key) {\n    stack || (stack = new Stack);\n    if (isObject(srcValue)) {\n      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);\n    }\n    else {\n      var newValue = customizer\n        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)\n        : undefined;\n\n      if (newValue === undefined) {\n        newValue = srcValue;\n      }\n      assignMergeValue(object, key, newValue);\n    }\n  }, keysIn);\n}\n\n/**\n * A specialized version of `baseMerge` for arrays and objects which performs\n * deep merges and tracks traversed objects enabling objects with circular\n * references to be merged.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {string} key The key of the value to merge.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} mergeFunc The function to merge values.\n * @param {Function} [customizer] The function to customize assigned values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {\n  var objValue = safeGet(object, key),\n      srcValue = safeGet(source, key),\n      stacked = stack.get(srcValue);\n\n  if (stacked) {\n    assignMergeValue(object, key, stacked);\n    return;\n  }\n  var newValue = customizer\n    ? customizer(objValue, srcValue, (key + ''), object, source, stack)\n    : undefined;\n\n  var isCommon = newValue === undefined;\n\n  if (isCommon) {\n    var isArr = isArray(srcValue),\n        isBuff = !isArr && isBuffer(srcValue),\n        isTyped = !isArr && !isBuff && isTypedArray(srcValue);\n\n    newValue = srcValue;\n    if (isArr || isBuff || isTyped) {\n      if (isArray(objValue)) {\n        newValue = objValue;\n      }\n      else if (isArrayLikeObject(objValue)) {\n        newValue = copyArray(objValue);\n      }\n      else if (isBuff) {\n        isCommon = false;\n        newValue = cloneBuffer(srcValue, true);\n      }\n      else if (isTyped) {\n        isCommon = false;\n        newValue = cloneTypedArray(srcValue, true);\n      }\n      else {\n        newValue = [];\n      }\n    }\n    else if (isPlainObject(srcValue) || isArguments(srcValue)) {\n      newValue = objValue;\n      if (isArguments(objValue)) {\n        newValue = toPlainObject(objValue);\n      }\n      else if (!isObject(objValue) || isFunction(objValue)) {\n        newValue = initCloneObject(srcValue);\n      }\n    }\n    else {\n      isCommon = false;\n    }\n  }\n  if (isCommon) {\n    // Recursively merge objects and arrays (susceptible to call stack limits).\n    stack.set(srcValue, newValue);\n    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);\n    stack['delete'](srcValue);\n  }\n  assignMergeValue(object, key, newValue);\n}\n\n/**\n * The base implementation of `_.rest` which doesn't validate or coerce arguments.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @returns {Function} Returns the new function.\n */\nfunction baseRest(func, start) {\n  return setToString(overRest(func, start, identity), func + '');\n}\n\n/**\n * The base implementation of `setToString` without support for hot loop shorting.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar baseSetToString = !defineProperty ? identity : function(func, string) {\n  return defineProperty(func, 'toString', {\n    'configurable': true,\n    'enumerable': false,\n    'value': constant(string),\n    'writable': true\n  });\n};\n\n/**\n * Creates a clone of  `buffer`.\n *\n * @private\n * @param {Buffer} buffer The buffer to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Buffer} Returns the cloned buffer.\n */\nfunction cloneBuffer(buffer, isDeep) {\n  if (isDeep) {\n    return buffer.slice();\n  }\n  var length = buffer.length,\n      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);\n\n  buffer.copy(result);\n  return result;\n}\n\n/**\n * Creates a clone of `arrayBuffer`.\n *\n * @private\n * @param {ArrayBuffer} arrayBuffer The array buffer to clone.\n * @returns {ArrayBuffer} Returns the cloned array buffer.\n */\nfunction cloneArrayBuffer(arrayBuffer) {\n  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);\n  new Uint8Array(result).set(new Uint8Array(arrayBuffer));\n  return result;\n}\n\n/**\n * Creates a clone of `typedArray`.\n *\n * @private\n * @param {Object} typedArray The typed array to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned typed array.\n */\nfunction cloneTypedArray(typedArray, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;\n  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);\n}\n\n/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property identifiers to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @param {Function} [customizer] The function to customize copied values.\n * @returns {Object} Returns `object`.\n */\nfunction copyObject(source, props, object, customizer) {\n  var isNew = !object;\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n\n    var newValue = customizer\n      ? customizer(object[key], source[key], key, object, source)\n      : undefined;\n\n    if (newValue === undefined) {\n      newValue = source[key];\n    }\n    if (isNew) {\n      baseAssignValue(object, key, newValue);\n    } else {\n      assignValue(object, key, newValue);\n    }\n  }\n  return object;\n}\n\n/**\n * Creates a function like `_.assign`.\n *\n * @private\n * @param {Function} assigner The function to assign values.\n * @returns {Function} Returns the new assigner function.\n */\nfunction createAssigner(assigner) {\n  return baseRest(function(object, sources) {\n    var index = -1,\n        length = sources.length,\n        customizer = length > 1 ? sources[length - 1] : undefined,\n        guard = length > 2 ? sources[2] : undefined;\n\n    customizer = (assigner.length > 3 && typeof customizer == 'function')\n      ? (length--, customizer)\n      : undefined;\n\n    if (guard && isIterateeCall(sources[0], sources[1], guard)) {\n      customizer = length < 3 ? undefined : customizer;\n      length = 1;\n    }\n    object = Object(object);\n    while (++index < length) {\n      var source = sources[index];\n      if (source) {\n        assigner(object, source, index, customizer);\n      }\n    }\n    return object;\n  });\n}\n\n/**\n * Creates a base function for methods like `_.forIn` and `_.forOwn`.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseFor(fromRight) {\n  return function(object, iteratee, keysFunc) {\n    var index = -1,\n        iterable = Object(object),\n        props = keysFunc(object),\n        length = props.length;\n\n    while (length--) {\n      var key = props[fromRight ? length : ++index];\n      if (iteratee(iterable[key], key, iterable) === false) {\n        break;\n      }\n    }\n    return object;\n  };\n}\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\n/**\n * Initializes an object clone.\n *\n * @private\n * @param {Object} object The object to clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneObject(object) {\n  return (typeof object.constructor == 'function' && !isPrototype(object))\n    ? baseCreate(getPrototype(object))\n    : {};\n}\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\n/**\n * Checks if the given arguments are from an iteratee call.\n *\n * @private\n * @param {*} value The potential iteratee value argument.\n * @param {*} index The potential iteratee index or key argument.\n * @param {*} object The potential iteratee object argument.\n * @returns {boolean} Returns `true` if the arguments are from an iteratee call,\n *  else `false`.\n */\nfunction isIterateeCall(value, index, object) {\n  if (!isObject(object)) {\n    return false;\n  }\n  var type = typeof index;\n  if (type == 'number'\n        ? (isArrayLike(object) && isIndex(index, object.length))\n        : (type == 'string' && index in object)\n      ) {\n    return eq(object[index], value);\n  }\n  return false;\n}\n\n/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\n/**\n * This function is like\n * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * except that it includes inherited enumerable properties.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction nativeKeysIn(object) {\n  var result = [];\n  if (object != null) {\n    for (var key in Object(object)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\n/**\n * A specialized version of `baseRest` which transforms the rest array.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @param {Function} transform The rest array transform.\n * @returns {Function} Returns the new function.\n */\nfunction overRest(func, start, transform) {\n  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        array = Array(length);\n\n    while (++index < length) {\n      array[index] = args[start + index];\n    }\n    index = -1;\n    var otherArgs = Array(start + 1);\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = transform(array);\n    return apply(func, this, otherArgs);\n  };\n}\n\n/**\n * Gets the value at `key`, unless `key` is \"__proto__\" or \"constructor\".\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction safeGet(object, key) {\n  if (key === 'constructor' && typeof object[key] === 'function') {\n    return;\n  }\n\n  if (key == '__proto__') {\n    return;\n  }\n\n  return object[key];\n}\n\n/**\n * Sets the `toString` method of `func` to return `string`.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar setToString = shortOut(baseSetToString);\n\n/**\n * Creates a function that'll short out and invoke `identity` instead\n * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`\n * milliseconds.\n *\n * @private\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new shortable function.\n */\nfunction shortOut(func) {\n  var count = 0,\n      lastCalled = 0;\n\n  return function() {\n    var stamp = nativeNow(),\n        remaining = HOT_SPAN - (stamp - lastCalled);\n\n    lastCalled = stamp;\n    if (remaining > 0) {\n      if (++count >= HOT_COUNT) {\n        return arguments[0];\n      }\n    } else {\n      count = 0;\n    }\n    return func.apply(undefined, arguments);\n  };\n}\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\n/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return typeof Ctor == 'function' && Ctor instanceof Ctor &&\n    funcToString.call(Ctor) == objectCtorString;\n}\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\n/**\n * Converts `value` to a plain object flattening inherited enumerable string\n * keyed properties of `value` to own properties of the plain object.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {Object} Returns the converted plain object.\n * @example\n *\n * function Foo() {\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.assign({ 'a': 1 }, new Foo);\n * // => { 'a': 1, 'b': 2 }\n *\n * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));\n * // => { 'a': 1, 'b': 2, 'c': 3 }\n */\nfunction toPlainObject(value) {\n  return copyObject(value, keysIn(value));\n}\n\n/**\n * Creates an array of the own and inherited enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keysIn(new Foo);\n * // => ['a', 'b', 'c'] (iteration order is not guaranteed)\n */\nfunction keysIn(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);\n}\n\n/**\n * This method is like `_.assign` except that it recursively merges own and\n * inherited enumerable string keyed properties of source objects into the\n * destination object. Source properties that resolve to `undefined` are\n * skipped if a destination value exists. Array and plain object properties\n * are merged recursively. Other objects and value types are overridden by\n * assignment. Source objects are applied from left to right. Subsequent\n * sources overwrite property assignments of previous sources.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 0.5.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var object = {\n *   'a': [{ 'b': 2 }, { 'd': 4 }]\n * };\n *\n * var other = {\n *   'a': [{ 'c': 3 }, { 'e': 5 }]\n * };\n *\n * _.merge(object, other);\n * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }\n */\nvar merge = createAssigner(function(object, source, srcIndex) {\n  baseMerge(object, source, srcIndex);\n});\n\n/**\n * Creates a function that returns `value`.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {*} value The value to return from the new function.\n * @returns {Function} Returns the new constant function.\n * @example\n *\n * var objects = _.times(2, _.constant({ 'a': 1 }));\n *\n * console.log(objects);\n * // => [{ 'a': 1 }, { 'a': 1 }]\n *\n * console.log(objects[0] === objects[1]);\n * // => true\n */\nfunction constant(value) {\n  return function() {\n    return value;\n  };\n}\n\n/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\n/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = merge;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://Quill/./node_modules/lodash.merge/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/normalize-url/index.js":
	/*!*********************************************!*\
	  !*** ./node_modules/normalize-url/index.js ***!
	  \*********************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeUrl; });\n// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs\nconst DATA_URL_DEFAULT_MIME_TYPE = 'text/plain';\nconst DATA_URL_DEFAULT_CHARSET = 'us-ascii';\n\nconst testParameter = (name, filters) => filters.some(filter => filter instanceof RegExp ? filter.test(name) : filter === name);\n\nconst normalizeDataURL = (urlString, {stripHash}) => {\n\tconst match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);\n\n\tif (!match) {\n\t\tthrow new Error(`Invalid URL: ${urlString}`);\n\t}\n\n\tlet {type, data, hash} = match.groups;\n\tconst mediaType = type.split(';');\n\thash = stripHash ? '' : hash;\n\n\tlet isBase64 = false;\n\tif (mediaType[mediaType.length - 1] === 'base64') {\n\t\tmediaType.pop();\n\t\tisBase64 = true;\n\t}\n\n\t// Lowercase MIME type\n\tconst mimeType = (mediaType.shift() || '').toLowerCase();\n\tconst attributes = mediaType\n\t\t.map(attribute => {\n\t\t\tlet [key, value = ''] = attribute.split('=').map(string => string.trim());\n\n\t\t\t// Lowercase `charset`\n\t\t\tif (key === 'charset') {\n\t\t\t\tvalue = value.toLowerCase();\n\n\t\t\t\tif (value === DATA_URL_DEFAULT_CHARSET) {\n\t\t\t\t\treturn '';\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn `${key}${value ? `=${value}` : ''}`;\n\t\t})\n\t\t.filter(Boolean);\n\n\tconst normalizedMediaType = [\n\t\t...attributes,\n\t];\n\n\tif (isBase64) {\n\t\tnormalizedMediaType.push('base64');\n\t}\n\n\tif (normalizedMediaType.length > 0 || (mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE)) {\n\t\tnormalizedMediaType.unshift(mimeType);\n\t}\n\n\treturn `data:${normalizedMediaType.join(';')},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ''}`;\n};\n\nfunction normalizeUrl(urlString, options) {\n\toptions = {\n\t\tdefaultProtocol: 'http:',\n\t\tnormalizeProtocol: true,\n\t\tforceHttp: false,\n\t\tforceHttps: false,\n\t\tstripAuthentication: true,\n\t\tstripHash: false,\n\t\tstripTextFragment: true,\n\t\tstripWWW: true,\n\t\tremoveQueryParameters: [/^utm_\\w+/i],\n\t\tremoveTrailingSlash: true,\n\t\tremoveSingleSlash: true,\n\t\tremoveDirectoryIndex: false,\n\t\tremoveExplicitPort: false,\n\t\tsortQueryParameters: true,\n\t\t...options,\n\t};\n\n\turlString = urlString.trim();\n\n\t// Data URL\n\tif (/^data:/i.test(urlString)) {\n\t\treturn normalizeDataURL(urlString, options);\n\t}\n\n\tif (/^view-source:/i.test(urlString)) {\n\t\tthrow new Error('`view-source:` is not supported as it is a non-standard protocol');\n\t}\n\n\tconst hasRelativeProtocol = urlString.startsWith('//');\n\tconst isRelativeUrl = !hasRelativeProtocol && /^\\.*\\//.test(urlString);\n\n\t// Prepend protocol\n\tif (!isRelativeUrl) {\n\t\turlString = urlString.replace(/^(?!(?:\\w+:)?\\/\\/)|^\\/\\//, options.defaultProtocol);\n\t}\n\n\tconst urlObject = new URL(urlString);\n\n\tif (options.forceHttp && options.forceHttps) {\n\t\tthrow new Error('The `forceHttp` and `forceHttps` options cannot be used together');\n\t}\n\n\tif (options.forceHttp && urlObject.protocol === 'https:') {\n\t\turlObject.protocol = 'http:';\n\t}\n\n\tif (options.forceHttps && urlObject.protocol === 'http:') {\n\t\turlObject.protocol = 'https:';\n\t}\n\n\t// Remove auth\n\tif (options.stripAuthentication) {\n\t\turlObject.username = '';\n\t\turlObject.password = '';\n\t}\n\n\t// Remove hash\n\tif (options.stripHash) {\n\t\turlObject.hash = '';\n\t} else if (options.stripTextFragment) {\n\t\turlObject.hash = urlObject.hash.replace(/#?:~:text.*?$/i, '');\n\t}\n\n\t// Remove duplicate slashes if not preceded by a protocol\n\t// NOTE: This could be implemented using a single negative lookbehind\n\t// regex, but we avoid that to maintain compatibility with older js engines\n\t// which do not have support for that feature.\n\tif (urlObject.pathname) {\n\t\t// TODO: Replace everything below with `urlObject.pathname = urlObject.pathname.replace(/(?<!\\b[a-z][a-z\\d+\\-.]{1,50}:)\\/{2,}/g, '/');` when Safari supports negative lookbehind.\n\n\t\t// Split the string by occurrences of this protocol regex, and perform\n\t\t// duplicate-slash replacement on the strings between those occurrences\n\t\t// (if any).\n\t\tconst protocolRegex = /\\b[a-z][a-z\\d+\\-.]{1,50}:\\/\\//g;\n\n\t\tlet lastIndex = 0;\n\t\tlet result = '';\n\t\tfor (;;) {\n\t\t\tconst match = protocolRegex.exec(urlObject.pathname);\n\t\t\tif (!match) {\n\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tconst protocol = match[0];\n\t\t\tconst protocolAtIndex = match.index;\n\t\t\tconst intermediate = urlObject.pathname.slice(lastIndex, protocolAtIndex);\n\n\t\t\tresult += intermediate.replace(/\\/{2,}/g, '/');\n\t\t\tresult += protocol;\n\t\t\tlastIndex = protocolAtIndex + protocol.length;\n\t\t}\n\n\t\tconst remnant = urlObject.pathname.slice(lastIndex, urlObject.pathname.length);\n\t\tresult += remnant.replace(/\\/{2,}/g, '/');\n\n\t\turlObject.pathname = result;\n\t}\n\n\t// Decode URI octets\n\tif (urlObject.pathname) {\n\t\ttry {\n\t\t\turlObject.pathname = decodeURI(urlObject.pathname);\n\t\t} catch {}\n\t}\n\n\t// Remove directory index\n\tif (options.removeDirectoryIndex === true) {\n\t\toptions.removeDirectoryIndex = [/^index\\.[a-z]+$/];\n\t}\n\n\tif (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {\n\t\tlet pathComponents = urlObject.pathname.split('/');\n\t\tconst lastComponent = pathComponents[pathComponents.length - 1];\n\n\t\tif (testParameter(lastComponent, options.removeDirectoryIndex)) {\n\t\t\tpathComponents = pathComponents.slice(0, -1);\n\t\t\turlObject.pathname = pathComponents.slice(1).join('/') + '/';\n\t\t}\n\t}\n\n\tif (urlObject.hostname) {\n\t\t// Remove trailing dot\n\t\turlObject.hostname = urlObject.hostname.replace(/\\.$/, '');\n\n\t\t// Remove `www.`\n\t\tif (options.stripWWW && /^www\\.(?!www\\.)[a-z\\-\\d]{1,63}\\.[a-z.\\-\\d]{2,63}$/.test(urlObject.hostname)) {\n\t\t\t// Each label should be max 63 at length (min: 1).\n\t\t\t// Source: https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_host_names\n\t\t\t// Each TLD should be up to 63 characters long (min: 2).\n\t\t\t// It is technically possible to have a single character TLD, but none currently exist.\n\t\t\turlObject.hostname = urlObject.hostname.replace(/^www\\./, '');\n\t\t}\n\t}\n\n\t// Remove query unwanted parameters\n\tif (Array.isArray(options.removeQueryParameters)) {\n\t\t// eslint-disable-next-line unicorn/no-useless-spread -- We are intentionally spreading to get a copy.\n\t\tfor (const key of [...urlObject.searchParams.keys()]) {\n\t\t\tif (testParameter(key, options.removeQueryParameters)) {\n\t\t\t\turlObject.searchParams.delete(key);\n\t\t\t}\n\t\t}\n\t}\n\n\tif (!Array.isArray(options.keepQueryParameters) && options.removeQueryParameters === true) {\n\t\turlObject.search = '';\n\t}\n\n\t// Keep wanted query parameters\n\tif (Array.isArray(options.keepQueryParameters) && options.keepQueryParameters.length > 0) {\n\t\t// eslint-disable-next-line unicorn/no-useless-spread -- We are intentionally spreading to get a copy.\n\t\tfor (const key of [...urlObject.searchParams.keys()]) {\n\t\t\tif (!testParameter(key, options.keepQueryParameters)) {\n\t\t\t\turlObject.searchParams.delete(key);\n\t\t\t}\n\t\t}\n\t}\n\n\t// Sort query parameters\n\tif (options.sortQueryParameters) {\n\t\turlObject.searchParams.sort();\n\n\t\t// Calling `.sort()` encodes the search parameters, so we need to decode them again.\n\t\ttry {\n\t\t\turlObject.search = decodeURIComponent(urlObject.search);\n\t\t} catch {}\n\t}\n\n\tif (options.removeTrailingSlash) {\n\t\turlObject.pathname = urlObject.pathname.replace(/\\/$/, '');\n\t}\n\n\t// Remove an explicit port number, excluding a default port number, if applicable\n\tif (options.removeExplicitPort && urlObject.port) {\n\t\turlObject.port = '';\n\t}\n\n\tconst oldUrlString = urlString;\n\n\t// Take advantage of many of the Node `url` normalizations\n\turlString = urlObject.toString();\n\n\tif (!options.removeSingleSlash && urlObject.pathname === '/' && !oldUrlString.endsWith('/') && urlObject.hash === '') {\n\t\turlString = urlString.replace(/\\/$/, '');\n\t}\n\n\t// Remove ending `/` unless removeSingleSlash is false\n\tif ((options.removeTrailingSlash || urlObject.pathname === '/') && urlObject.hash === '' && options.removeSingleSlash) {\n\t\turlString = urlString.replace(/\\/$/, '');\n\t}\n\n\t// Restore relative protocol, if applicable\n\tif (hasRelativeProtocol && !options.normalizeProtocol) {\n\t\turlString = urlString.replace(/^http:\\/\\//, '//');\n\t}\n\n\t// Remove http/https\n\tif (options.stripProtocol) {\n\t\turlString = urlString.replace(/^(?:https?:)?\\/\\//, '');\n\t}\n\n\treturn urlString;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/normalize-url/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/dist/parchment.js":
	/*!**************************************************!*\
	  !*** ./node_modules/parchment/dist/parchment.js ***!
	  \**************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	eval("/* WEBPACK VAR INJECTION */(function(global) {!function(t,e){ true?module.exports=e():undefined}(\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:\"undefined\"!=typeof global?global:Function(\"return this\")(),(function(){return(()=>{\"use strict\";var t,e={d:(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})}},s={};e.r(s),e.d(s,{Attributor:()=>f,AttributorStore:()=>A,BlockBlot:()=>T,ClassAttributor:()=>b,ContainerBlot:()=>u,EmbedBlot:()=>B,InlineBlot:()=>E,LeafBlot:()=>p,ParentBlot:()=>c,Registry:()=>o,Scope:()=>i,ScrollBlot:()=>w,StyleAttributor:()=>y,TextBlot:()=>I}),function(t){t[t.TYPE=3]=\"TYPE\",t[t.LEVEL=12]=\"LEVEL\",t[t.ATTRIBUTE=13]=\"ATTRIBUTE\",t[t.BLOT=14]=\"BLOT\",t[t.INLINE=7]=\"INLINE\",t[t.BLOCK=11]=\"BLOCK\",t[t.BLOCK_BLOT=10]=\"BLOCK_BLOT\",t[t.INLINE_BLOT=6]=\"INLINE_BLOT\",t[t.BLOCK_ATTRIBUTE=9]=\"BLOCK_ATTRIBUTE\",t[t.INLINE_ATTRIBUTE=5]=\"INLINE_ATTRIBUTE\",t[t.ANY=15]=\"ANY\"}(t||(t={}));const i=t;class r extends Error{constructor(t){super(t=\"[Parchment] \"+t),this.message=t,this.name=this.constructor.name}}class o{constructor(){this.attributes={},this.classes={},this.tags={},this.types={}}static find(t,e=!1){if(null==t)return null;if(this.blots.has(t))return this.blots.get(t)||null;if(e){let s=null;try{s=t.parentNode}catch(t){return null}return this.find(s,e)}return null}create(t,e,s){const i=this.query(e);if(null==i)throw new r(`Unable to create ${e} blot`);const n=i,a=e instanceof Node||e.nodeType===Node.TEXT_NODE?e:n.create(s),l=new n(t,a,s);return o.blots.set(l.domNode,l),l}find(t,e=!1){return o.find(t,e)}query(t,e=i.ANY){let s;return\"string\"==typeof t?s=this.types[t]||this.attributes[t]:t instanceof Text||t.nodeType===Node.TEXT_NODE?s=this.types.text:\"number\"==typeof t?t&i.LEVEL&i.BLOCK?s=this.types.block:t&i.LEVEL&i.INLINE&&(s=this.types.inline):t instanceof Element&&((t.getAttribute(\"class\")||\"\").split(/\\s+/).some((t=>(s=this.classes[t],!!s))),s=s||this.tags[t.tagName]),null==s?null:e&i.LEVEL&s.scope&&e&i.TYPE&s.scope?s:null}register(...t){if(t.length>1)return t.map((t=>this.register(t)));const e=t[0];if(\"string\"!=typeof e.blotName&&\"string\"!=typeof e.attrName)throw new r(\"Invalid definition\");if(\"abstract\"===e.blotName)throw new r(\"Cannot register abstract class\");return this.types[e.blotName||e.attrName]=e,\"string\"==typeof e.keyName?this.attributes[e.keyName]=e:(null!=e.className&&(this.classes[e.className]=e),null!=e.tagName&&(Array.isArray(e.tagName)?e.tagName=e.tagName.map((t=>t.toUpperCase())):e.tagName=e.tagName.toUpperCase(),(Array.isArray(e.tagName)?e.tagName:[e.tagName]).forEach((t=>{null!=this.tags[t]&&null!=e.className||(this.tags[t]=e)})))),e}}o.blots=new WeakMap;class n{constructor(t,e){this.scroll=t,this.domNode=e,o.blots.set(e,this),this.prev=null,this.next=null}static create(t){if(null==this.tagName)throw new r(\"Blot definition missing tagName\");let e;return Array.isArray(this.tagName)?(\"string\"==typeof t&&(t=t.toUpperCase(),parseInt(t,10).toString()===t&&(t=parseInt(t,10))),e=\"number\"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e}get statics(){return this.constructor}attach(){}clone(){const t=this.domNode.cloneNode(!1);return this.scroll.create(t)}detach(){null!=this.parent&&this.parent.removeChild(this),o.blots.delete(this.domNode)}deleteAt(t,e){this.isolate(t,e).remove()}formatAt(t,e,s,r){const o=this.isolate(t,e);if(null!=this.scroll.query(s,i.BLOT)&&r)o.wrap(s,r);else if(null!=this.scroll.query(s,i.ATTRIBUTE)){const t=this.scroll.create(this.statics.scope);o.wrap(t),t.format(s,r)}}insertAt(t,e,s){const i=null==s?this.scroll.create(\"text\",e):this.scroll.create(e,s),r=this.split(t);this.parent.insertBefore(i,r||void 0)}isolate(t,e){const s=this.split(t);if(null==s)throw new Error(\"Attempt to isolate at end\");return s.split(e),s}length(){return 1}offset(t=this.parent){return null==this.parent||this===t?0:this.parent.children.offset(this)+this.parent.offset(t)}optimize(t){!this.statics.requiredContainer||this.parent instanceof this.statics.requiredContainer||this.wrap(this.statics.requiredContainer.blotName)}remove(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()}replaceWith(t,e){const s=\"string\"==typeof t?this.scroll.create(t,e):t;return null!=this.parent&&(this.parent.insertBefore(s,this.next||void 0),this.remove()),s}split(t,e){return 0===t?this:this.next}update(t,e){}wrap(t,e){const s=\"string\"==typeof t?this.scroll.create(t,e):t;if(null!=this.parent&&this.parent.insertBefore(s,this.next||void 0),\"function\"!=typeof s.appendChild)throw new r(`Cannot wrap ${t}`);return s.appendChild(this),s}}n.blotName=\"abstract\";const a=n;function l(t,e){let s=e.find(t);if(null==s)try{s=e.create(t)}catch(r){s=e.create(i.INLINE),Array.from(t.childNodes).forEach((t=>{s.domNode.appendChild(t)})),t.parentNode&&t.parentNode.replaceChild(s.domNode,t),s.attach()}return s}class h extends a{constructor(t,e){super(t,e),this.uiNode=null,this.build()}appendChild(t){this.insertBefore(t)}attach(){super.attach(),this.children.forEach((t=>{t.attach()}))}attachUI(t){null!=this.uiNode&&this.uiNode.remove(),this.uiNode=t,h.uiClass&&this.uiNode.classList.add(h.uiClass),this.uiNode.setAttribute(\"contenteditable\",\"false\"),this.domNode.insertBefore(this.uiNode,this.domNode.firstChild)}build(){this.children=new class{constructor(){this.head=null,this.tail=null,this.length=0}append(...t){if(this.insertBefore(t[0],null),t.length>1){const e=t.slice(1);this.append(...e)}}at(t){const e=this.iterator();let s=e();for(;s&&t>0;)t-=1,s=e();return s}contains(t){const e=this.iterator();let s=e();for(;s;){if(s===t)return!0;s=e()}return!1}indexOf(t){const e=this.iterator();let s=e(),i=0;for(;s;){if(s===t)return i;i+=1,s=e()}return-1}insertBefore(t,e){null!=t&&(this.remove(t),t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)}offset(t){let e=0,s=this.head;for(;null!=s;){if(s===t)return e;e+=s.length(),s=s.next}return-1}remove(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)}iterator(t=this.head){return()=>{const e=t;return null!=t&&(t=t.next),e}}find(t,e=!1){const s=this.iterator();let i=s();for(;i;){const r=i.length();if(t<r||e&&t===r&&(null==i.next||0!==i.next.length()))return[i,t];t-=r,i=s()}return[null,0]}forEach(t){const e=this.iterator();let s=e();for(;s;)t(s),s=e()}forEachAt(t,e,s){if(e<=0)return;const[i,r]=this.find(t);let o=t-r;const n=this.iterator(i);let a=n();for(;a&&o<t+e;){const i=a.length();t>o?s(a,t-o,Math.min(e,o+i-t)):s(a,0,Math.min(i,t+e-o)),o+=i,a=n()}}map(t){return this.reduce(((e,s)=>(e.push(t(s)),e)),[])}reduce(t,e){const s=this.iterator();let i=s();for(;i;)e=t(e,i),i=s();return e}},Array.from(this.domNode.childNodes).filter((t=>t!==this.uiNode)).reverse().forEach((t=>{try{const e=l(t,this.scroll);this.insertBefore(e,this.children.head||void 0)}catch(t){if(t instanceof r)return;throw t}}))}deleteAt(t,e){if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,((t,e,s)=>{t.deleteAt(e,s)}))}descendant(t,e=0){const[s,i]=this.children.find(e);return null==t.blotName&&t(s)||null!=t.blotName&&s instanceof t?[s,i]:s instanceof h?s.descendant(t,i):[null,-1]}descendants(t,e=0,s=Number.MAX_VALUE){let i=[],r=s;return this.children.forEachAt(e,s,((e,s,o)=>{(null==t.blotName&&t(e)||null!=t.blotName&&e instanceof t)&&i.push(e),e instanceof h&&(i=i.concat(e.descendants(t,s,r))),r-=o})),i}detach(){this.children.forEach((t=>{t.detach()})),super.detach()}enforceAllowedChildren(){let t=!1;this.children.forEach((e=>{t||this.statics.allowedChildren.some((t=>e instanceof t))||(e.statics.scope===i.BLOCK_BLOT?(null!=e.next&&this.splitAfter(e),null!=e.prev&&this.splitAfter(e.prev),e.parent.unwrap(),t=!0):e instanceof h?e.unwrap():e.remove())}))}formatAt(t,e,s,i){this.children.forEachAt(t,e,((t,e,r)=>{t.formatAt(e,r,s,i)}))}insertAt(t,e,s){const[i,r]=this.children.find(t);if(i)i.insertAt(r,e,s);else{const t=null==s?this.scroll.create(\"text\",e):this.scroll.create(e,s);this.appendChild(t)}}insertBefore(t,e){null!=t.parent&&t.parent.children.remove(t);let s=null;this.children.insertBefore(t,e||null),t.parent=this,null!=e&&(s=e.domNode),this.domNode.parentNode===t.domNode&&this.domNode.nextSibling===s||this.domNode.insertBefore(t.domNode,s),t.attach()}length(){return this.children.reduce(((t,e)=>t+e.length()),0)}moveChildren(t,e){this.children.forEach((s=>{t.insertBefore(s,e)}))}optimize(t){if(super.optimize(t),this.enforceAllowedChildren(),null!=this.uiNode&&this.uiNode!==this.domNode.firstChild&&this.domNode.insertBefore(this.uiNode,this.domNode.firstChild),0===this.children.length)if(null!=this.statics.defaultChild){const t=this.scroll.create(this.statics.defaultChild.blotName);this.appendChild(t)}else this.remove()}path(t,e=!1){const[s,i]=this.children.find(t,e),r=[[this,t]];return s instanceof h?r.concat(s.path(i,e)):(null!=s&&r.push([s,i]),r)}removeChild(t){this.children.remove(t)}replaceWith(t,e){const s=\"string\"==typeof t?this.scroll.create(t,e):t;return s instanceof h&&this.moveChildren(s),super.replaceWith(s)}split(t,e=!1){if(!e){if(0===t)return this;if(t===this.length())return this.next}const s=this.clone();return this.parent&&this.parent.insertBefore(s,this.next||void 0),this.children.forEachAt(t,this.length(),((t,i,r)=>{const o=t.split(i,e);null!=o&&s.appendChild(o)})),s}splitAfter(t){const e=this.clone();for(;null!=t.next;)e.appendChild(t.next);return this.parent&&this.parent.insertBefore(e,this.next||void 0),e}unwrap(){this.parent&&this.moveChildren(this.parent,this.next||void 0),this.remove()}update(t,e){const s=[],i=[];t.forEach((t=>{t.target===this.domNode&&\"childList\"===t.type&&(s.push(...t.addedNodes),i.push(...t.removedNodes))})),i.forEach((t=>{if(null!=t.parentNode&&\"IFRAME\"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)return;const e=this.scroll.find(t);null!=e&&(null!=e.domNode.parentNode&&e.domNode.parentNode!==this.domNode||e.detach())})),s.filter((t=>t.parentNode===this.domNode||t===this.uiNode)).sort(((t,e)=>t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1)).forEach((t=>{let e=null;null!=t.nextSibling&&(e=this.scroll.find(t.nextSibling));const s=l(t,this.scroll);s.next===e&&null!=s.next||(null!=s.parent&&s.parent.removeChild(this),this.insertBefore(s,e||void 0))})),this.enforceAllowedChildren()}}h.uiClass=\"\";const c=h;class d extends c{checkMerge(){return null!==this.next&&this.next.statics.blotName===this.statics.blotName}deleteAt(t,e){super.deleteAt(t,e),this.enforceAllowedChildren()}formatAt(t,e,s,i){super.formatAt(t,e,s,i),this.enforceAllowedChildren()}insertAt(t,e,s){super.insertAt(t,e,s),this.enforceAllowedChildren()}optimize(t){super.optimize(t),this.children.length>0&&null!=this.next&&this.checkMerge()&&(this.next.moveChildren(this),this.next.remove())}}d.blotName=\"container\",d.scope=i.BLOCK_BLOT;const u=d;class m extends a{static value(t){return!0}index(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1}position(t,e){let s=Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);return t>0&&(s+=1),[this.parent.domNode,s]}value(){return{[this.statics.blotName]:this.statics.value(this.domNode)||!0}}}m.scope=i.INLINE_BLOT;const p=m;class f{constructor(t,e,s={}){this.attrName=t,this.keyName=e;const r=i.TYPE&i.ATTRIBUTE;this.scope=null!=s.scope?s.scope&i.LEVEL|r:i.ATTRIBUTE,null!=s.whitelist&&(this.whitelist=s.whitelist)}static keys(t){return Array.from(t.attributes).map((t=>t.name))}add(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)}canAdd(t,e){return null==this.whitelist||(\"string\"==typeof e?this.whitelist.indexOf(e.replace(/[\"']/g,\"\"))>-1:this.whitelist.indexOf(e)>-1)}remove(t){t.removeAttribute(this.keyName)}value(t){const e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:\"\"}}function N(t,e){return(t.getAttribute(\"class\")||\"\").split(/\\s+/).filter((t=>0===t.indexOf(`${e}-`)))}const b=class extends f{static keys(t){return(t.getAttribute(\"class\")||\"\").split(/\\s+/).map((t=>t.split(\"-\").slice(0,-1).join(\"-\")))}add(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(`${this.keyName}-${e}`),!0)}remove(t){N(t,this.keyName).forEach((e=>{t.classList.remove(e)})),0===t.classList.length&&t.removeAttribute(\"class\")}value(t){const e=(N(t,this.keyName)[0]||\"\").slice(this.keyName.length+1);return this.canAdd(t,e)?e:\"\"}};function g(t){const e=t.split(\"-\"),s=e.slice(1).map((t=>t[0].toUpperCase()+t.slice(1))).join(\"\");return e[0]+s}const y=class extends f{static keys(t){return(t.getAttribute(\"style\")||\"\").split(\";\").map((t=>t.split(\":\")[0].trim()))}add(t,e){return!!this.canAdd(t,e)&&(t.style[g(this.keyName)]=e,!0)}remove(t){t.style[g(this.keyName)]=\"\",t.getAttribute(\"style\")||t.removeAttribute(\"style\")}value(t){const e=t.style[g(this.keyName)];return this.canAdd(t,e)?e:\"\"}},A=class{constructor(t){this.attributes={},this.domNode=t,this.build()}attribute(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])}build(){this.attributes={};const t=o.find(this.domNode);if(null==t)return;const e=f.keys(this.domNode),s=b.keys(this.domNode),r=y.keys(this.domNode);e.concat(s).concat(r).forEach((e=>{const s=t.scroll.query(e,i.ATTRIBUTE);s instanceof f&&(this.attributes[s.attrName]=s)}))}copy(t){Object.keys(this.attributes).forEach((e=>{const s=this.attributes[e].value(this.domNode);t.format(e,s)}))}move(t){this.copy(t),Object.keys(this.attributes).forEach((t=>{this.attributes[t].remove(this.domNode)})),this.attributes={}}values(){return Object.keys(this.attributes).reduce(((t,e)=>(t[e]=this.attributes[e].value(this.domNode),t)),{})}};class v extends c{constructor(t,e){super(t,e),this.attributes=new A(this.domNode)}static formats(t,e){const s=e.query(v.blotName);if(null==s||t.tagName!==s.tagName)return\"string\"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)}format(t,e){if(t!==this.statics.blotName||e){const s=this.scroll.query(t,i.INLINE);if(null==s)return;s instanceof f?this.attributes.attribute(s,e):!e||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e)}else this.children.forEach((t=>{t instanceof v||(t=t.wrap(v.blotName,!0)),this.attributes.copy(t)})),this.unwrap()}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return null!=e&&(t[this.statics.blotName]=e),t}formatAt(t,e,s,r){null!=this.formats()[s]||this.scroll.query(s,i.ATTRIBUTE)?this.isolate(t,e).format(s,r):super.formatAt(t,e,s,r)}optimize(t){super.optimize(t);const e=this.formats();if(0===Object.keys(e).length)return this.unwrap();const s=this.next;s instanceof v&&s.prev===this&&function(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(t[s]!==e[s])return!1;return!0}(e,s.formats())&&(s.moveChildren(this),s.remove())}replaceWith(t,e){const s=super.replaceWith(t,e);return this.attributes.copy(s),s}update(t,e){super.update(t,e),t.some((t=>t.target===this.domNode&&\"attributes\"===t.type))&&this.attributes.build()}wrap(t,e){const s=super.wrap(t,e);return s instanceof v&&this.attributes.move(s),s}}v.allowedChildren=[v,p],v.blotName=\"inline\",v.scope=i.INLINE_BLOT,v.tagName=\"SPAN\";const E=v;class x extends c{constructor(t,e){super(t,e),this.attributes=new A(this.domNode)}static formats(t,e){const s=e.query(x.blotName);if(null==s||t.tagName!==s.tagName)return\"string\"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)}format(t,e){const s=this.scroll.query(t,i.BLOCK);null!=s&&(s instanceof f?this.attributes.attribute(s,e):t!==this.statics.blotName||e?!e||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e):this.replaceWith(x.blotName))}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return null!=e&&(t[this.statics.blotName]=e),t}formatAt(t,e,s,r){null!=this.scroll.query(s,i.BLOCK)?this.format(s,r):super.formatAt(t,e,s,r)}insertAt(t,e,s){if(null==s||null!=this.scroll.query(e,i.INLINE))super.insertAt(t,e,s);else{const i=this.split(t);if(null==i)throw new Error(\"Attempt to insertAt after block boundaries\");{const t=this.scroll.create(e,s);i.parent.insertBefore(t,i)}}}replaceWith(t,e){const s=super.replaceWith(t,e);return this.attributes.copy(s),s}update(t,e){super.update(t,e),t.some((t=>t.target===this.domNode&&\"attributes\"===t.type))&&this.attributes.build()}}x.blotName=\"block\",x.scope=i.BLOCK_BLOT,x.tagName=\"P\",x.allowedChildren=[E,x,p];const T=x,B=class extends p{static formats(t,e){}format(t,e){super.formatAt(0,this.length(),t,e)}formatAt(t,e,s,i){0===t&&e===this.length()?this.format(s,i):super.formatAt(t,e,s,i)}formats(){return this.statics.formats(this.domNode,this.scroll)}},C={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0};class L extends c{constructor(t,e){super(null,e),this.registry=t,this.scroll=this,this.build(),this.observer=new MutationObserver((t=>{this.update(t)})),this.observer.observe(this.domNode,C),this.attach()}create(t,e){return this.registry.create(this,t,e)}find(t,e=!1){const s=this.registry.find(t,e);return s?s.scroll===this?s:e?this.find(s.scroll.domNode.parentNode,!0):null:null}query(t,e=i.ANY){return this.registry.query(t,e)}register(...t){return this.registry.register(...t)}build(){null!=this.scroll&&super.build()}detach(){super.detach(),this.observer.disconnect()}deleteAt(t,e){this.update(),0===t&&e===this.length()?this.children.forEach((t=>{t.remove()})):super.deleteAt(t,e)}formatAt(t,e,s,i){this.update(),super.formatAt(t,e,s,i)}insertAt(t,e,s){this.update(),super.insertAt(t,e,s)}optimize(t=[],e={}){super.optimize(e);const s=e.mutationsMap||new WeakMap;let i=Array.from(this.observer.takeRecords());for(;i.length>0;)t.push(i.pop());const r=(t,e=!0)=>{null!=t&&t!==this&&null!=t.domNode.parentNode&&(s.has(t.domNode)||s.set(t.domNode,[]),e&&r(t.parent))},o=t=>{s.has(t.domNode)&&(t instanceof c&&t.children.forEach(o),s.delete(t.domNode),t.optimize(e))};let n=t;for(let e=0;n.length>0;e+=1){if(e>=100)throw new Error(\"[Parchment] Maximum optimize iterations reached\");for(n.forEach((t=>{const e=this.find(t.target,!0);null!=e&&(e.domNode===t.target&&(\"childList\"===t.type?(r(this.find(t.previousSibling,!1)),Array.from(t.addedNodes).forEach((t=>{const e=this.find(t,!1);r(e,!1),e instanceof c&&e.children.forEach((t=>{r(t,!1)}))}))):\"attributes\"===t.type&&r(e.prev)),r(e))})),this.children.forEach(o),n=Array.from(this.observer.takeRecords()),i=n.slice();i.length>0;)t.push(i.pop())}}update(t,e={}){t=t||this.observer.takeRecords();const s=new WeakMap;t.map((t=>{const e=this.find(t.target,!0);return null==e?null:s.has(e.domNode)?(s.get(e.domNode).push(t),null):(s.set(e.domNode,[t]),e)})).forEach((t=>{null!=t&&t!==this&&s.has(t.domNode)&&t.update(s.get(t.domNode)||[],e)})),e.mutationsMap=s,s.has(this.domNode)&&super.update(s.get(this.domNode),e),this.optimize(t,e)}}L.blotName=\"scroll\",L.defaultChild=T,L.allowedChildren=[T,u],L.scope=i.BLOCK_BLOT,L.tagName=\"DIV\";const w=L;class O extends p{constructor(t,e){super(t,e),this.text=this.statics.value(this.domNode)}static create(t){return document.createTextNode(t)}static value(t){return t.data}deleteAt(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)}index(t,e){return this.domNode===t?e:-1}insertAt(t,e,s){null==s?(this.text=this.text.slice(0,t)+e+this.text.slice(t),this.domNode.data=this.text):super.insertAt(t,e,s)}length(){return this.text.length}optimize(t){super.optimize(t),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof O&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())}position(t,e=!1){return[this.domNode,t]}split(t,e=!1){if(!e){if(0===t)return this;if(t===this.length())return this.next}const s=this.scroll.create(this.domNode.splitText(t));return this.parent.insertBefore(s,this.next||void 0),this.text=this.statics.value(this.domNode),s}update(t,e){t.some((t=>\"characterData\"===t.type&&t.target===this.domNode))&&(this.text=this.statics.value(this.domNode))}value(){return this.text}}O.blotName=\"text\",O.scope=i.INLINE_BLOT;const I=O;return s})()}));\n//# sourceMappingURL=parchment.js.map\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/dist/parchment.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/dist/AttributeMap.js":
	/*!*******************************************************!*\
	  !*** ./node_modules/quill-delta/dist/AttributeMap.js ***!
	  \*******************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst cloneDeep = __webpack_require__(/*! lodash.clonedeep */ \"./node_modules/lodash.clonedeep/index.js\");\nconst isEqual = __webpack_require__(/*! lodash.isequal */ \"./node_modules/lodash.isequal/index.js\");\nvar AttributeMap;\n(function (AttributeMap) {\n    function compose(a = {}, b = {}, keepNull = false) {\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        let attributes = cloneDeep(b);\n        if (!keepNull) {\n            attributes = Object.keys(attributes).reduce((copy, key) => {\n                if (attributes[key] != null) {\n                    copy[key] = attributes[key];\n                }\n                return copy;\n            }, {});\n        }\n        for (const key in a) {\n            if (a[key] !== undefined && b[key] === undefined) {\n                attributes[key] = a[key];\n            }\n        }\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.compose = compose;\n    function diff(a = {}, b = {}) {\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        const attributes = Object.keys(a)\n            .concat(Object.keys(b))\n            .reduce((attrs, key) => {\n            if (!isEqual(a[key], b[key])) {\n                attrs[key] = b[key] === undefined ? null : b[key];\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.diff = diff;\n    function invert(attr = {}, base = {}) {\n        attr = attr || {};\n        const baseInverted = Object.keys(base).reduce((memo, key) => {\n            if (base[key] !== attr[key] && attr[key] !== undefined) {\n                memo[key] = base[key];\n            }\n            return memo;\n        }, {});\n        return Object.keys(attr).reduce((memo, key) => {\n            if (attr[key] !== base[key] && base[key] === undefined) {\n                memo[key] = null;\n            }\n            return memo;\n        }, baseInverted);\n    }\n    AttributeMap.invert = invert;\n    function transform(a, b, priority = false) {\n        if (typeof a !== 'object') {\n            return b;\n        }\n        if (typeof b !== 'object') {\n            return undefined;\n        }\n        if (!priority) {\n            return b; // b simply overwrites us without priority\n        }\n        const attributes = Object.keys(b).reduce((attrs, key) => {\n            if (a[key] === undefined) {\n                attrs[key] = b[key]; // null is a valid value\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.transform = transform;\n})(AttributeMap || (AttributeMap = {}));\nexports.default = AttributeMap;\n//# sourceMappingURL=AttributeMap.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/AttributeMap.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/dist/Delta.js":
	/*!************************************************!*\
	  !*** ./node_modules/quill-delta/dist/Delta.js ***!
	  \************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AttributeMap = exports.OpIterator = exports.Op = void 0;\nconst diff = __webpack_require__(/*! fast-diff */ \"./node_modules/fast-diff/diff.js\");\nconst cloneDeep = __webpack_require__(/*! lodash.clonedeep */ \"./node_modules/lodash.clonedeep/index.js\");\nconst isEqual = __webpack_require__(/*! lodash.isequal */ \"./node_modules/lodash.isequal/index.js\");\nconst AttributeMap_1 = __webpack_require__(/*! ./AttributeMap */ \"./node_modules/quill-delta/dist/AttributeMap.js\");\nexports.AttributeMap = AttributeMap_1.default;\nconst Op_1 = __webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\");\nexports.Op = Op_1.default;\nconst OpIterator_1 = __webpack_require__(/*! ./OpIterator */ \"./node_modules/quill-delta/dist/OpIterator.js\");\nexports.OpIterator = OpIterator_1.default;\nconst NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()\nconst getEmbedTypeAndData = (a, b) => {\n    if (typeof a !== 'object' || a === null) {\n        throw new Error(`cannot retain a ${typeof a}`);\n    }\n    if (typeof b !== 'object' || b === null) {\n        throw new Error(`cannot retain a ${typeof b}`);\n    }\n    const embedType = Object.keys(a)[0];\n    if (!embedType || embedType !== Object.keys(b)[0]) {\n        throw new Error(`embed types not matched: ${embedType} != ${Object.keys(b)[0]}`);\n    }\n    return [embedType, a[embedType], b[embedType]];\n};\nclass Delta {\n    constructor(ops) {\n        // Assume we are given a well formed ops\n        if (Array.isArray(ops)) {\n            this.ops = ops;\n        }\n        else if (ops != null && Array.isArray(ops.ops)) {\n            this.ops = ops.ops;\n        }\n        else {\n            this.ops = [];\n        }\n    }\n    static registerEmbed(embedType, handler) {\n        this.handlers[embedType] = handler;\n    }\n    static unregisterEmbed(embedType) {\n        delete this.handlers[embedType];\n    }\n    static getHandler(embedType) {\n        const handler = this.handlers[embedType];\n        if (!handler) {\n            throw new Error(`no handlers for embed type \"${embedType}\"`);\n        }\n        return handler;\n    }\n    insert(arg, attributes) {\n        const newOp = {};\n        if (typeof arg === 'string' && arg.length === 0) {\n            return this;\n        }\n        newOp.insert = arg;\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    }\n    delete(length) {\n        if (length <= 0) {\n            return this;\n        }\n        return this.push({ delete: length });\n    }\n    retain(length, attributes) {\n        if (typeof length === 'number' && length <= 0) {\n            return this;\n        }\n        const newOp = { retain: length };\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    }\n    push(newOp) {\n        let index = this.ops.length;\n        let lastOp = this.ops[index - 1];\n        newOp = cloneDeep(newOp);\n        if (typeof lastOp === 'object') {\n            if (typeof newOp.delete === 'number' &&\n                typeof lastOp.delete === 'number') {\n                this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };\n                return this;\n            }\n            // Since it does not matter if we insert before or after deleting at the same index,\n            // always prefer to insert first\n            if (typeof lastOp.delete === 'number' && newOp.insert != null) {\n                index -= 1;\n                lastOp = this.ops[index - 1];\n                if (typeof lastOp !== 'object') {\n                    this.ops.unshift(newOp);\n                    return this;\n                }\n            }\n            if (isEqual(newOp.attributes, lastOp.attributes)) {\n                if (typeof newOp.insert === 'string' &&\n                    typeof lastOp.insert === 'string') {\n                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n                else if (typeof newOp.retain === 'number' &&\n                    typeof lastOp.retain === 'number') {\n                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n            }\n        }\n        if (index === this.ops.length) {\n            this.ops.push(newOp);\n        }\n        else {\n            this.ops.splice(index, 0, newOp);\n        }\n        return this;\n    }\n    chop() {\n        const lastOp = this.ops[this.ops.length - 1];\n        if (lastOp && typeof lastOp.retain === 'number' && !lastOp.attributes) {\n            this.ops.pop();\n        }\n        return this;\n    }\n    filter(predicate) {\n        return this.ops.filter(predicate);\n    }\n    forEach(predicate) {\n        this.ops.forEach(predicate);\n    }\n    map(predicate) {\n        return this.ops.map(predicate);\n    }\n    partition(predicate) {\n        const passed = [];\n        const failed = [];\n        this.forEach((op) => {\n            const target = predicate(op) ? passed : failed;\n            target.push(op);\n        });\n        return [passed, failed];\n    }\n    reduce(predicate, initialValue) {\n        return this.ops.reduce(predicate, initialValue);\n    }\n    changeLength() {\n        return this.reduce((length, elem) => {\n            if (elem.insert) {\n                return length + Op_1.default.length(elem);\n            }\n            else if (elem.delete) {\n                return length - elem.delete;\n            }\n            return length;\n        }, 0);\n    }\n    length() {\n        return this.reduce((length, elem) => {\n            return length + Op_1.default.length(elem);\n        }, 0);\n    }\n    slice(start = 0, end = Infinity) {\n        const ops = [];\n        const iter = new OpIterator_1.default(this.ops);\n        let index = 0;\n        while (index < end && iter.hasNext()) {\n            let nextOp;\n            if (index < start) {\n                nextOp = iter.next(start - index);\n            }\n            else {\n                nextOp = iter.next(end - index);\n                ops.push(nextOp);\n            }\n            index += Op_1.default.length(nextOp);\n        }\n        return new Delta(ops);\n    }\n    compose(other) {\n        const thisIter = new OpIterator_1.default(this.ops);\n        const otherIter = new OpIterator_1.default(other.ops);\n        const ops = [];\n        const firstOther = otherIter.peek();\n        if (firstOther != null &&\n            typeof firstOther.retain === 'number' &&\n            firstOther.attributes == null) {\n            let firstLeft = firstOther.retain;\n            while (thisIter.peekType() === 'insert' &&\n                thisIter.peekLength() <= firstLeft) {\n                firstLeft -= thisIter.peekLength();\n                ops.push(thisIter.next());\n            }\n            if (firstOther.retain - firstLeft > 0) {\n                otherIter.next(firstOther.retain - firstLeft);\n            }\n        }\n        const delta = new Delta(ops);\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else if (thisIter.peekType() === 'delete') {\n                delta.push(thisIter.next());\n            }\n            else {\n                const length = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                const thisOp = thisIter.next(length);\n                const otherOp = otherIter.next(length);\n                if (otherOp.retain) {\n                    const newOp = {};\n                    if (typeof thisOp.retain === 'number') {\n                        newOp.retain =\n                            typeof otherOp.retain === 'number' ? length : otherOp.retain;\n                    }\n                    else {\n                        if (typeof otherOp.retain === 'number') {\n                            if (thisOp.retain == null) {\n                                newOp.insert = thisOp.insert;\n                            }\n                            else {\n                                newOp.retain = thisOp.retain;\n                            }\n                        }\n                        else {\n                            const action = thisOp.retain == null ? 'insert' : 'retain';\n                            const [embedType, thisData, otherData] = getEmbedTypeAndData(thisOp[action], otherOp.retain);\n                            const handler = Delta.getHandler(embedType);\n                            newOp[action] = {\n                                [embedType]: handler.compose(thisData, otherData, action === 'retain'),\n                            };\n                        }\n                    }\n                    // Preserve null when composing with a retain, otherwise remove it for inserts\n                    const attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');\n                    if (attributes) {\n                        newOp.attributes = attributes;\n                    }\n                    delta.push(newOp);\n                    // Optimization if rest of other is just retain\n                    if (!otherIter.hasNext() &&\n                        isEqual(delta.ops[delta.ops.length - 1], newOp)) {\n                        const rest = new Delta(thisIter.rest());\n                        return delta.concat(rest).chop();\n                    }\n                    // Other op should be delete, we could be an insert or retain\n                    // Insert + delete cancels out\n                }\n                else if (typeof otherOp.delete === 'number' &&\n                    (typeof thisOp.retain === 'number' ||\n                        (typeof thisOp.retain === 'object' && thisOp.retain !== null))) {\n                    delta.push(otherOp);\n                }\n            }\n        }\n        return delta.chop();\n    }\n    concat(other) {\n        const delta = new Delta(this.ops.slice());\n        if (other.ops.length > 0) {\n            delta.push(other.ops[0]);\n            delta.ops = delta.ops.concat(other.ops.slice(1));\n        }\n        return delta;\n    }\n    diff(other, cursor) {\n        if (this.ops === other.ops) {\n            return new Delta();\n        }\n        const strings = [this, other].map((delta) => {\n            return delta\n                .map((op) => {\n                if (op.insert != null) {\n                    return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;\n                }\n                const prep = delta === other ? 'on' : 'with';\n                throw new Error('diff() called ' + prep + ' non-document');\n            })\n                .join('');\n        });\n        const retDelta = new Delta();\n        const diffResult = diff(strings[0], strings[1], cursor);\n        const thisIter = new OpIterator_1.default(this.ops);\n        const otherIter = new OpIterator_1.default(other.ops);\n        diffResult.forEach((component) => {\n            let length = component[1].length;\n            while (length > 0) {\n                let opLength = 0;\n                switch (component[0]) {\n                    case diff.INSERT:\n                        opLength = Math.min(otherIter.peekLength(), length);\n                        retDelta.push(otherIter.next(opLength));\n                        break;\n                    case diff.DELETE:\n                        opLength = Math.min(length, thisIter.peekLength());\n                        thisIter.next(opLength);\n                        retDelta.delete(opLength);\n                        break;\n                    case diff.EQUAL:\n                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);\n                        const thisOp = thisIter.next(opLength);\n                        const otherOp = otherIter.next(opLength);\n                        if (isEqual(thisOp.insert, otherOp.insert)) {\n                            retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));\n                        }\n                        else {\n                            retDelta.push(otherOp).delete(opLength);\n                        }\n                        break;\n                }\n                length -= opLength;\n            }\n        });\n        return retDelta.chop();\n    }\n    eachLine(predicate, newline = '\\n') {\n        const iter = new OpIterator_1.default(this.ops);\n        let line = new Delta();\n        let i = 0;\n        while (iter.hasNext()) {\n            if (iter.peekType() !== 'insert') {\n                return;\n            }\n            const thisOp = iter.peek();\n            const start = Op_1.default.length(thisOp) - iter.peekLength();\n            const index = typeof thisOp.insert === 'string'\n                ? thisOp.insert.indexOf(newline, start) - start\n                : -1;\n            if (index < 0) {\n                line.push(iter.next());\n            }\n            else if (index > 0) {\n                line.push(iter.next(index));\n            }\n            else {\n                if (predicate(line, iter.next(1).attributes || {}, i) === false) {\n                    return;\n                }\n                i += 1;\n                line = new Delta();\n            }\n        }\n        if (line.length() > 0) {\n            predicate(line, {}, i);\n        }\n    }\n    invert(base) {\n        const inverted = new Delta();\n        this.reduce((baseIndex, op) => {\n            if (op.insert) {\n                inverted.delete(Op_1.default.length(op));\n            }\n            else if (typeof op.retain === 'number' && op.attributes == null) {\n                inverted.retain(op.retain);\n                return baseIndex + op.retain;\n            }\n            else if (op.delete || typeof op.retain === 'number') {\n                const length = (op.delete || op.retain);\n                const slice = base.slice(baseIndex, baseIndex + length);\n                slice.forEach((baseOp) => {\n                    if (op.delete) {\n                        inverted.push(baseOp);\n                    }\n                    else if (op.retain && op.attributes) {\n                        inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));\n                    }\n                });\n                return baseIndex + length;\n            }\n            else if (typeof op.retain === 'object' && op.retain !== null) {\n                const slice = base.slice(baseIndex, baseIndex + 1);\n                const baseOp = new OpIterator_1.default(slice.ops).next();\n                const [embedType, opData, baseOpData] = getEmbedTypeAndData(op.retain, baseOp.insert);\n                const handler = Delta.getHandler(embedType);\n                inverted.retain({ [embedType]: handler.invert(opData, baseOpData) }, AttributeMap_1.default.invert(op.attributes, baseOp.attributes));\n                return baseIndex + 1;\n            }\n            return baseIndex;\n        }, 0);\n        return inverted.chop();\n    }\n    transform(arg, priority = false) {\n        priority = !!priority;\n        if (typeof arg === 'number') {\n            return this.transformPosition(arg, priority);\n        }\n        const other = arg;\n        const thisIter = new OpIterator_1.default(this.ops);\n        const otherIter = new OpIterator_1.default(other.ops);\n        const delta = new Delta();\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (thisIter.peekType() === 'insert' &&\n                (priority || otherIter.peekType() !== 'insert')) {\n                delta.retain(Op_1.default.length(thisIter.next()));\n            }\n            else if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else {\n                const length = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                const thisOp = thisIter.next(length);\n                const otherOp = otherIter.next(length);\n                if (thisOp.delete) {\n                    // Our delete either makes their delete redundant or removes their retain\n                    continue;\n                }\n                else if (otherOp.delete) {\n                    delta.push(otherOp);\n                }\n                else {\n                    const thisData = thisOp.retain;\n                    const otherData = otherOp.retain;\n                    let transformedData = typeof otherData === 'object' && otherData !== null\n                        ? otherData\n                        : length;\n                    if (typeof thisData === 'object' &&\n                        thisData !== null &&\n                        typeof otherData === 'object' &&\n                        otherData !== null) {\n                        const embedType = Object.keys(thisData)[0];\n                        if (embedType === Object.keys(otherData)[0]) {\n                            const handler = Delta.getHandler(embedType);\n                            if (handler) {\n                                transformedData = {\n                                    [embedType]: handler.transform(thisData[embedType], otherData[embedType], priority),\n                                };\n                            }\n                        }\n                    }\n                    // We retain either their retain or insert\n                    delta.retain(transformedData, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));\n                }\n            }\n        }\n        return delta.chop();\n    }\n    transformPosition(index, priority = false) {\n        priority = !!priority;\n        const thisIter = new OpIterator_1.default(this.ops);\n        let offset = 0;\n        while (thisIter.hasNext() && offset <= index) {\n            const length = thisIter.peekLength();\n            const nextType = thisIter.peekType();\n            thisIter.next();\n            if (nextType === 'delete') {\n                index -= Math.min(length, index - offset);\n                continue;\n            }\n            else if (nextType === 'insert' && (offset < index || !priority)) {\n                index += length;\n            }\n            offset += length;\n        }\n        return index;\n    }\n}\nDelta.Op = Op_1.default;\nDelta.OpIterator = OpIterator_1.default;\nDelta.AttributeMap = AttributeMap_1.default;\nDelta.handlers = {};\nexports.default = Delta;\nif (true) {\n    module.exports = Delta;\n    module.exports.default = Delta;\n}\n//# sourceMappingURL=Delta.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Delta.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/dist/Op.js":
	/*!*********************************************!*\
	  !*** ./node_modules/quill-delta/dist/Op.js ***!
	  \*********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Op;\n(function (Op) {\n    function length(op) {\n        if (typeof op.delete === 'number') {\n            return op.delete;\n        }\n        else if (typeof op.retain === 'number') {\n            return op.retain;\n        }\n        else if (typeof op.retain === 'object' && op.retain !== null) {\n            return 1;\n        }\n        else {\n            return typeof op.insert === 'string' ? op.insert.length : 1;\n        }\n    }\n    Op.length = length;\n})(Op || (Op = {}));\nexports.default = Op;\n//# sourceMappingURL=Op.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Op.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/dist/OpIterator.js":
	/*!*****************************************************!*\
	  !*** ./node_modules/quill-delta/dist/OpIterator.js ***!
	  \*****************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Op_1 = __webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\");\nclass Iterator {\n    constructor(ops) {\n        this.ops = ops;\n        this.index = 0;\n        this.offset = 0;\n    }\n    hasNext() {\n        return this.peekLength() < Infinity;\n    }\n    next(length) {\n        if (!length) {\n            length = Infinity;\n        }\n        const nextOp = this.ops[this.index];\n        if (nextOp) {\n            const offset = this.offset;\n            const opLength = Op_1.default.length(nextOp);\n            if (length >= opLength - offset) {\n                length = opLength - offset;\n                this.index += 1;\n                this.offset = 0;\n            }\n            else {\n                this.offset += length;\n            }\n            if (typeof nextOp.delete === 'number') {\n                return { delete: length };\n            }\n            else {\n                const retOp = {};\n                if (nextOp.attributes) {\n                    retOp.attributes = nextOp.attributes;\n                }\n                if (typeof nextOp.retain === 'number') {\n                    retOp.retain = length;\n                }\n                else if (typeof nextOp.retain === 'object' &&\n                    nextOp.retain !== null) {\n                    // offset should === 0, length should === 1\n                    retOp.retain = nextOp.retain;\n                }\n                else if (typeof nextOp.insert === 'string') {\n                    retOp.insert = nextOp.insert.substr(offset, length);\n                }\n                else {\n                    // offset should === 0, length should === 1\n                    retOp.insert = nextOp.insert;\n                }\n                return retOp;\n            }\n        }\n        else {\n            return { retain: Infinity };\n        }\n    }\n    peek() {\n        return this.ops[this.index];\n    }\n    peekLength() {\n        if (this.ops[this.index]) {\n            // Should never return 0 if our index is being managed correctly\n            return Op_1.default.length(this.ops[this.index]) - this.offset;\n        }\n        else {\n            return Infinity;\n        }\n    }\n    peekType() {\n        const op = this.ops[this.index];\n        if (op) {\n            if (typeof op.delete === 'number') {\n                return 'delete';\n            }\n            else if (typeof op.retain === 'number' ||\n                (typeof op.retain === 'object' && op.retain !== null)) {\n                return 'retain';\n            }\n            else {\n                return 'insert';\n            }\n        }\n        return 'retain';\n    }\n    rest() {\n        if (!this.hasNext()) {\n            return [];\n        }\n        else if (this.offset === 0) {\n            return this.ops.slice(this.index);\n        }\n        else {\n            const offset = this.offset;\n            const index = this.index;\n            const next = this.next();\n            const rest = this.ops.slice(this.index);\n            this.offset = offset;\n            this.index = index;\n            return [next].concat(rest);\n        }\n    }\n}\nexports.default = Iterator;\n//# sourceMappingURL=OpIterator.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/OpIterator.js?");
	
	/***/ }),
	
	/***/ "./node_modules/webpack/buildin/global.js":
	/*!***********************************!*\
	  !*** (webpack)/buildin/global.js ***!
	  \***********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Quill/(webpack)/buildin/global.js?");
	
	/***/ }),
	
	/***/ "./node_modules/webpack/buildin/module.js":
	/*!***********************************!*\
	  !*** (webpack)/buildin/module.js ***!
	  \***********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://Quill/(webpack)/buildin/module.js?");
	
	/***/ }),
	
	/***/ "./quill.ts":
	/*!******************!*\
	  !*** ./quill.ts ***!
	  \******************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./core.js\");\n/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats/align */ \"./formats/align.js\");\n/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats/direction */ \"./formats/direction.js\");\n/* harmony import */ var _formats_indent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formats/indent */ \"./formats/indent.js\");\n/* harmony import */ var _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formats/blockquote */ \"./formats/blockquote.js\");\n/* harmony import */ var _formats_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formats/header */ \"./formats/header.js\");\n/* harmony import */ var _formats_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formats/list */ \"./formats/list.js\");\n/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formats/background */ \"./formats/background.js\");\n/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formats/color */ \"./formats/color.js\");\n/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formats/font */ \"./formats/font.js\");\n/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formats/size */ \"./formats/size.js\");\n/* harmony import */ var _formats_bold__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formats/bold */ \"./formats/bold.js\");\n/* harmony import */ var _formats_italic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formats/italic */ \"./formats/italic.js\");\n/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formats/link */ \"./formats/link.js\");\n/* harmony import */ var _formats_script__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formats/script */ \"./formats/script.js\");\n/* harmony import */ var _formats_strike__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formats/strike */ \"./formats/strike.js\");\n/* harmony import */ var _formats_underline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formats/underline */ \"./formats/underline.js\");\n/* harmony import */ var _formats_formula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formats/formula */ \"./formats/formula.js\");\n/* harmony import */ var _formats_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formats/image */ \"./formats/image.js\");\n/* harmony import */ var _formats_video__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formats/video */ \"./formats/video.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formats/code */ \"./formats/code.js\");\n/* harmony import */ var _modules_syntax__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/syntax */ \"./modules/syntax.js\");\n/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/table */ \"./modules/table.js\");\n/* harmony import */ var _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/toolbar */ \"./modules/toolbar.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/icons */ \"./ui/icons.js\");\n/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/picker */ \"./ui/picker.js\");\n/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/color-picker */ \"./ui/color-picker.js\");\n/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/icon-picker */ \"./ui/icon-picker.js\");\n/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/tooltip */ \"./ui/tooltip.js\");\n/* harmony import */ var _themes_bubble__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./themes/bubble */ \"./themes/bubble.js\");\n/* harmony import */ var _themes_snow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./themes/snow */ \"./themes/snow.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n    'attributors/attribute/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionAttribute\"],\n    'attributors/class/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignClass\"],\n    'attributors/class/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundClass\"],\n    'attributors/class/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorClass\"],\n    'attributors/class/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionClass\"],\n    'attributors/class/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontClass\"],\n    'attributors/class/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeClass\"],\n    'attributors/style/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignStyle\"],\n    'attributors/style/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundStyle\"],\n    'attributors/style/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorStyle\"],\n    'attributors/style/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionStyle\"],\n    'attributors/style/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontStyle\"],\n    'attributors/style/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeStyle\"],\n}, true);\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n    'formats/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignClass\"],\n    'formats/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionClass\"],\n    'formats/indent': _formats_indent__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    'formats/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundStyle\"],\n    'formats/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorStyle\"],\n    'formats/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontClass\"],\n    'formats/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeClass\"],\n    'formats/blockquote': _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    'formats/code-block': _formats_code__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n    'formats/header': _formats_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    'formats/list': _formats_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    'formats/bold': _formats_bold__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    'formats/code': _formats_code__WEBPACK_IMPORTED_MODULE_20__[\"Code\"],\n    'formats/italic': _formats_italic__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    'formats/link': _formats_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n    'formats/script': _formats_script__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n    'formats/strike': _formats_strike__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n    'formats/underline': _formats_underline__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n    'formats/formula': _formats_formula__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n    'formats/image': _formats_image__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n    'formats/video': _formats_video__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n    'modules/syntax': _modules_syntax__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n    'modules/table': _modules_table__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n    'modules/toolbar': _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n    'themes/bubble': _themes_bubble__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n    'themes/snow': _themes_snow__WEBPACK_IMPORTED_MODULE_30__[\"default\"],\n    'ui/icons': _ui_icons__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n    'ui/picker': _ui_picker__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n    'ui/icon-picker': _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n    'ui/color-picker': _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n    'ui/tooltip': _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__[\"default\"],\n}, true);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://Quill/./quill.ts?");
	
	/***/ }),
	
	/***/ "./themes/base.js":
	/*!************************!*\
	  !*** ./themes/base.js ***!
	  \************************/
	/*! exports provided: BaseTooltip, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseTooltip\", function() { return BaseTooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseTheme; });\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.merge */ \"./node_modules/lodash.merge/index.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _core_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/theme */ \"./core/theme.js\");\n/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/color-picker */ \"./ui/color-picker.js\");\n/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icon-picker */ \"./ui/icon-picker.js\");\n/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/picker */ \"./ui/picker.js\");\n/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/tooltip */ \"./ui/tooltip.js\");\n\n\n\n\n\n\n\nconst ALIGNS = [false, 'center', 'right', 'justify'];\nconst COLORS = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'];\nconst FONTS = [false, 'serif', 'monospace'];\nconst HEADERS = ['1', '2', '3', false];\nconst SIZES = ['small', false, 'large', 'huge'];\nclass BaseTheme extends _core_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    const listener = e => {\n      if (!document.body.contains(quill.root)) {\n        document.body.removeEventListener('click', listener);\n        return;\n      }\n      if (this.tooltip != null &&\n      // @ts-expect-error\n      !this.tooltip.root.contains(e.target) &&\n      // @ts-expect-error\n      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {\n        this.tooltip.hide();\n      }\n      if (this.pickers != null) {\n        this.pickers.forEach(picker => {\n          // @ts-expect-error\n          if (!picker.container.contains(e.target)) {\n            picker.close();\n          }\n        });\n      }\n    };\n    quill.emitter.listenDOM('click', document.body, listener);\n  }\n  // @ts-expect-error\n  addModule(name) {\n    const module = super.addModule(name);\n    if (name === 'toolbar') {\n      // @ts-expect-error\n      this.extendToolbar(module);\n    }\n    return module;\n  }\n  buildButtons(buttons, icons) {\n    Array.from(buttons).forEach(button => {\n      const className = button.getAttribute('class') || '';\n      className.split(/\\s+/).forEach(name => {\n        if (!name.startsWith('ql-')) return;\n        name = name.slice('ql-'.length);\n        if (icons[name] == null) return;\n        if (name === 'direction') {\n          button.innerHTML = icons[name][''] + icons[name].rtl;\n        } else if (typeof icons[name] === 'string') {\n          button.innerHTML = icons[name];\n        } else {\n          // @ts-expect-error\n          const value = button.value || '';\n          if (value != null && icons[name][value]) {\n            button.innerHTML = icons[name][value];\n          }\n        }\n      });\n    });\n  }\n  buildPickers(selects, icons) {\n    this.pickers = Array.from(selects).map(select => {\n      if (select.classList.contains('ql-align')) {\n        if (select.querySelector('option') == null) {\n          fillSelect(select, ALIGNS);\n        }\n        // @ts-expect-error\n        return new _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__[\"default\"](select, icons.align);\n      }\n      if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {\n        const format = select.classList.contains('ql-background') ? 'background' : 'color';\n        if (select.querySelector('option') == null) {\n          fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');\n        }\n        return new _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__[\"default\"](select, icons[format]);\n      }\n      if (select.querySelector('option') == null) {\n        if (select.classList.contains('ql-font')) {\n          fillSelect(select, FONTS);\n        } else if (select.classList.contains('ql-header')) {\n          fillSelect(select, HEADERS);\n        } else if (select.classList.contains('ql-size')) {\n          fillSelect(select, SIZES);\n        }\n      }\n      // @ts-expect-error\n      return new _ui_picker__WEBPACK_IMPORTED_MODULE_5__[\"default\"](select);\n    });\n    const update = () => {\n      this.pickers.forEach(picker => {\n        picker.update();\n      });\n    };\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, update);\n  }\n}\nBaseTheme.DEFAULTS = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, _core_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        formula() {\n          this.quill.theme.tooltip.edit('formula');\n        },\n        image() {\n          let fileInput = this.container.querySelector('input.ql-image[type=file]');\n          if (fileInput == null) {\n            fileInput = document.createElement('input');\n            fileInput.setAttribute('type', 'file');\n            fileInput.setAttribute('accept', this.quill.uploader.options.mimetypes.join(', '));\n            fileInput.classList.add('ql-image');\n            fileInput.addEventListener('change', () => {\n              const range = this.quill.getSelection(true);\n              this.quill.uploader.upload(range, fileInput.files);\n              fileInput.value = '';\n            });\n            this.container.appendChild(fileInput);\n          }\n          fileInput.click();\n        },\n        video() {\n          this.quill.theme.tooltip.edit('video');\n        }\n      }\n    }\n  }\n});\nclass BaseTooltip extends _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n  constructor(quill, boundsContainer) {\n    super(quill, boundsContainer);\n    this.textbox = this.root.querySelector('input[type=\"text\"]');\n    this.listen();\n  }\n  listen() {\n    this.textbox.addEventListener('keydown', event => {\n      if (event.key === 'Enter') {\n        this.save();\n        event.preventDefault();\n      } else if (event.key === 'Escape') {\n        this.cancel();\n        event.preventDefault();\n      }\n    });\n  }\n  cancel() {\n    this.hide();\n  }\n  edit() {\n    let mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';\n    let preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    this.root.classList.remove('ql-hidden');\n    this.root.classList.add('ql-editing');\n    if (preview != null) {\n      this.textbox.value = preview;\n    } else if (mode !== this.root.getAttribute('data-mode')) {\n      this.textbox.value = '';\n    }\n    this.position(this.quill.getBounds(this.quill.selection.savedRange));\n    this.textbox.select();\n    this.textbox.setAttribute('placeholder', this.textbox.getAttribute(`data-${mode}`) || '');\n    this.root.setAttribute('data-mode', mode);\n  }\n  restoreFocus() {\n    const {\n      scrollTop\n    } = this.quill.scrollingContainer;\n    this.quill.focus();\n    this.quill.scrollingContainer.scrollTop = scrollTop;\n  }\n  save() {\n    let {\n      value\n    } = this.textbox;\n    switch (this.root.getAttribute('data-mode')) {\n      case 'link':\n        {\n          const {\n            scrollTop\n          } = this.quill.root;\n          if (this.linkRange) {\n            this.quill.formatText(this.linkRange, 'link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n            delete this.linkRange;\n          } else {\n            this.restoreFocus();\n            this.quill.format('link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n          }\n          this.quill.root.scrollTop = scrollTop;\n          break;\n        }\n      case 'video':\n        {\n          value = extractVideoUrl(value);\n        }\n      // eslint-disable-next-line no-fallthrough\n      case 'formula':\n        {\n          if (!value) break;\n          const range = this.quill.getSelection(true);\n          if (range != null) {\n            const index = range.index + range.length;\n            this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n            if (this.root.getAttribute('data-mode') === 'formula') {\n              this.quill.insertText(index + 1, ' ', _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n            }\n            this.quill.setSelection(index + 2, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n          }\n          break;\n        }\n      default:\n    }\n    this.textbox.value = '';\n    this.hide();\n  }\n}\nfunction extractVideoUrl(url) {\n  let match = url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtube\\.com\\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtu\\.be\\/([a-zA-Z0-9_-]+)/);\n  if (match) {\n    return `${match[1] || 'https'}://www.youtube.com/embed/${match[2]}?showinfo=0`;\n  }\n  // eslint-disable-next-line no-cond-assign\n  if (match = url.match(/^(?:(https?):\\/\\/)?(?:www\\.)?vimeo\\.com\\/(\\d+)/)) {\n    return `${match[1] || 'https'}://player.vimeo.com/video/${match[2]}/`;\n  }\n  return url;\n}\nfunction fillSelect(select, values) {\n  let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  values.forEach(value => {\n    const option = document.createElement('option');\n    if (value === defaultValue) {\n      option.setAttribute('selected', 'selected');\n    } else {\n      option.setAttribute('value', value);\n    }\n    select.appendChild(option);\n  });\n}\n\n\n//# sourceURL=webpack://Quill/./themes/base.js?");
	
	/***/ }),
	
	/***/ "./themes/bubble.js":
	/*!**************************!*\
	  !*** ./themes/bubble.js ***!
	  \**************************/
	/*! exports provided: BubbleTooltip, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BubbleTooltip\", function() { return BubbleTooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BubbleTheme; });\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.merge */ \"./node_modules/lodash.merge/index.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\n\n\n\n\nconst TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{\n  header: 1\n}, {\n  header: 2\n}, 'blockquote']];\nclass BubbleTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__[\"BaseTooltip\"] {\n  constructor(quill, bounds) {\n    super(quill, bounds);\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, (type, range, oldRange, source) => {\n      if (type !== _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SELECTION_CHANGE) return;\n      if (range != null && range.length > 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        this.show();\n        // Lock our width so we will expand beyond our offsetParent boundaries\n        this.root.style.left = '0px';\n        this.root.style.width = '';\n        this.root.style.width = `${this.root.offsetWidth}px`;\n        const lines = this.quill.getLines(range.index, range.length);\n        if (lines.length === 1) {\n          this.position(this.quill.getBounds(range));\n        } else {\n          const lastLine = lines[lines.length - 1];\n          const index = this.quill.getIndex(lastLine);\n          const length = Math.min(lastLine.length() - 1, range.index + range.length - index);\n          const indexBounds = this.quill.getBounds(new _core_selection__WEBPACK_IMPORTED_MODULE_3__[\"Range\"](index, length));\n          this.position(indexBounds);\n        }\n      } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {\n        this.hide();\n      }\n    });\n  }\n  listen() {\n    super.listen();\n    this.root.querySelector('.ql-close').addEventListener('click', () => {\n      this.root.classList.remove('ql-editing');\n    });\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      // Let selection be restored by toolbar handlers before repositioning\n      setTimeout(() => {\n        if (this.root.classList.contains('ql-hidden')) return;\n        const range = this.quill.getSelection();\n        if (range != null) {\n          this.position(this.quill.getBounds(range));\n        }\n      }, 1);\n    });\n  }\n  cancel() {\n    this.show();\n  }\n  position(reference) {\n    const shift = super.position(reference);\n    const arrow = this.root.querySelector('.ql-tooltip-arrow');\n    // @ts-expect-error\n    arrow.style.marginLeft = '';\n    if (shift !== 0) {\n      // @ts-expect-error\n      arrow.style.marginLeft = `${-1 * shift - arrow.offsetWidth / 2}px`;\n    }\n    return shift;\n  }\n}\nBubbleTooltip.TEMPLATE = ['<span class=\"ql-tooltip-arrow\"></span>', '<div class=\"ql-tooltip-editor\">', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-close\"></a>', '</div>'].join('');\nclass BubbleTheme extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n    super(quill, options);\n    this.quill.container.classList.add('ql-bubble');\n  }\n  extendToolbar(toolbar) {\n    // @ts-expect-error\n    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);\n    this.tooltip.root.appendChild(toolbar.container);\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  }\n}\nBubbleTheme.DEFAULTS = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (!value) {\n            this.quill.format('link', false);\n          } else {\n            this.quill.theme.tooltip.edit();\n          }\n        }\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://Quill/./themes/bubble.js?");
	
	/***/ }),
	
	/***/ "./themes/snow.js":
	/*!************************!*\
	  !*** ./themes/snow.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.merge */ \"./node_modules/lodash.merge/index.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/link */ \"./formats/link.js\");\n/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\n\n\n\n\n\nconst TOOLBAR_CONFIG = [[{\n  header: ['1', '2', '3', false]\n}], ['bold', 'italic', 'underline', 'link'], [{\n  list: 'ordered'\n}, {\n  list: 'bullet'\n}], ['clean']];\nclass SnowTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__[\"BaseTooltip\"] {\n  constructor() {\n    super(...arguments);\n    this.preview = this.root.querySelector('a.ql-preview');\n  }\n  listen() {\n    super.listen();\n    this.root.querySelector('a.ql-action').addEventListener('click', event => {\n      if (this.root.classList.contains('ql-editing')) {\n        this.save();\n      } else {\n        this.edit('link', this.preview.textContent);\n      }\n      event.preventDefault();\n    });\n    this.root.querySelector('a.ql-remove').addEventListener('click', event => {\n      if (this.linkRange != null) {\n        const range = this.linkRange;\n        this.restoreFocus();\n        this.quill.formatText(range, 'link', false, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n        delete this.linkRange;\n      }\n      event.preventDefault();\n      this.hide();\n    });\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SELECTION_CHANGE, (range, oldRange, source) => {\n      if (range == null) return;\n      if (range.length === 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        const [link, offset] = this.quill.scroll.descendant(\n        // @ts-expect-error\n        _formats_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], range.index);\n        if (link != null) {\n          this.linkRange = new _core_selection__WEBPACK_IMPORTED_MODULE_4__[\"Range\"](range.index - offset, link.length());\n          const preview = _formats_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"].formats(link.domNode);\n          this.preview.textContent = preview;\n          this.preview.setAttribute('href', preview);\n          this.show();\n          this.position(this.quill.getBounds(this.linkRange));\n          return;\n        }\n      } else {\n        delete this.linkRange;\n      }\n      this.hide();\n    });\n  }\n  show() {\n    super.show();\n    this.root.removeAttribute('data-mode');\n  }\n}\nSnowTooltip.TEMPLATE = ['<a class=\"ql-preview\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"about:blank\"></a>', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-action\"></a>', '<a class=\"ql-remove\"></a>'].join('');\nclass SnowTheme extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n    super(quill, options);\n    this.quill.container.classList.add('ql-snow');\n  }\n  extendToolbar(toolbar) {\n    toolbar.container.classList.add('ql-snow');\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    // @ts-expect-error\n    this.tooltip = new SnowTooltip(this.quill, this.options.bounds);\n    if (toolbar.container.querySelector('.ql-link')) {\n      this.quill.keyboard.addBinding({\n        key: 'k',\n        shortKey: true\n      }, (range, context) => {\n        toolbar.handlers.link.call(toolbar, !context.format.link);\n      });\n    }\n  }\n}\nSnowTheme.DEFAULTS = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (value) {\n            const range = this.quill.getSelection();\n            if (range == null || range.length === 0) return;\n            let preview = this.quill.getText(range);\n            if (/^\\S+@\\S+\\.\\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {\n              preview = `mailto:${preview}`;\n            }\n            const {\n              tooltip\n            } = this.quill.theme;\n            tooltip.edit('link', preview);\n          } else {\n            this.quill.format('link', false);\n          }\n        }\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnowTheme);\n\n//# sourceURL=webpack://Quill/./themes/snow.js?");
	
	/***/ }),
	
	/***/ "./ui/color-picker.js":
	/*!****************************!*\
	  !*** ./ui/color-picker.js ***!
	  \****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\nclass ColorPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(select, label) {\n    super(select);\n    this.label.innerHTML = label;\n    this.container.classList.add('ql-color-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach(item => {\n      item.classList.add('ql-primary');\n    });\n  }\n  buildItem(option) {\n    const item = super.buildItem(option);\n    item.style.backgroundColor = option.getAttribute('value') || '';\n    return item;\n  }\n  selectItem(item, trigger) {\n    super.selectItem(item, trigger);\n    const colorLabel = this.label.querySelector('.ql-color-label');\n    const value = item ? item.getAttribute('data-value') || '' : '';\n    if (colorLabel) {\n      if (colorLabel.tagName === 'line') {\n        // @ts-expect-error\n        colorLabel.style.stroke = value;\n      } else {\n        // @ts-expect-error\n        colorLabel.style.fill = value;\n      }\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPicker);\n\n//# sourceURL=webpack://Quill/./ui/color-picker.js?");
	
	/***/ }),
	
	/***/ "./ui/icon-picker.js":
	/*!***************************!*\
	  !*** ./ui/icon-picker.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\nclass IconPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(select, icons) {\n    super(select);\n    this.container.classList.add('ql-icon-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(item => {\n      item.innerHTML = icons[item.getAttribute('data-value') || ''];\n    });\n    this.defaultItem = this.container.querySelector('.ql-selected');\n    // @ts-expect-error\n    this.selectItem(this.defaultItem);\n  }\n  selectItem(target, trigger) {\n    super.selectItem(target, trigger);\n    const item = target || this.defaultItem;\n    if (this.label.innerHTML === item.innerHTML) return;\n    this.label.innerHTML = item.innerHTML;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconPicker);\n\n//# sourceURL=webpack://Quill/./ui/icon-picker.js?");
	
	/***/ }),
	
	/***/ "./ui/icons.js":
	/*!*********************!*\
	  !*** ./ui/icons.js ***!
	  \*********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/align-left.svg */ \"./assets/icons/align-left.svg\");\n/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/align-center.svg */ \"./assets/icons/align-center.svg\");\n/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/align-right.svg */ \"./assets/icons/align-right.svg\");\n/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/align-justify.svg */ \"./assets/icons/align-justify.svg\");\n/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/background.svg */ \"./assets/icons/background.svg\");\n/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/blockquote.svg */ \"./assets/icons/blockquote.svg\");\n/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/bold.svg */ \"./assets/icons/bold.svg\");\n/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/clean.svg */ \"./assets/icons/clean.svg\");\n/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/code.svg */ \"./assets/icons/code.svg\");\n/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/color.svg */ \"./assets/icons/color.svg\");\n/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/direction-ltr.svg */ \"./assets/icons/direction-ltr.svg\");\n/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/direction-rtl.svg */ \"./assets/icons/direction-rtl.svg\");\n/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/formula.svg */ \"./assets/icons/formula.svg\");\n/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/header.svg */ \"./assets/icons/header.svg\");\n/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/icons/header-2.svg */ \"./assets/icons/header-2.svg\");\n/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icons/italic.svg */ \"./assets/icons/italic.svg\");\n/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icons/image.svg */ \"./assets/icons/image.svg\");\n/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icons/indent.svg */ \"./assets/icons/indent.svg\");\n/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/outdent.svg */ \"./assets/icons/outdent.svg\");\n/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/link.svg */ \"./assets/icons/link.svg\");\n/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/icons/list-bullet.svg */ \"./assets/icons/list-bullet.svg\");\n/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/list-check.svg */ \"./assets/icons/list-check.svg\");\n/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/icons/list-ordered.svg */ \"./assets/icons/list-ordered.svg\");\n/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/icons/subscript.svg */ \"./assets/icons/subscript.svg\");\n/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/icons/superscript.svg */ \"./assets/icons/superscript.svg\");\n/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/icons/strike.svg */ \"./assets/icons/strike.svg\");\n/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/icons/table.svg */ \"./assets/icons/table.svg\");\n/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/icons/underline.svg */ \"./assets/icons/underline.svg\");\n/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/icons/video.svg */ \"./assets/icons/video.svg\");\n/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__);\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n// @ts-expect-error\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  align: {\n    '': _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default.a,\n    center: _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n    right: _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    justify: _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default.a\n  },\n  background: _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  blockquote: _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  bold: _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n  clean: _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n  code: _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,\n  'code-block': _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,\n  color: _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default.a,\n  direction: {\n    '': _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default.a,\n    rtl: _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default.a\n  },\n  formula: _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default.a,\n  header: {\n    '1': _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default.a,\n    '2': _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default.a\n  },\n  italic: _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default.a,\n  image: _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default.a,\n  indent: {\n    '+1': _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default.a,\n    '-1': _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default.a\n  },\n  link: _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default.a,\n  list: {\n    bullet: _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default.a,\n    check: _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default.a,\n    ordered: _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default.a\n  },\n  script: {\n    sub: _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default.a,\n    super: _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default.a\n  },\n  strike: _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default.a,\n  table: _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default.a,\n  underline: _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default.a,\n  video: _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default.a\n});\n\n//# sourceURL=webpack://Quill/./ui/icons.js?");
	
	/***/ }),
	
	/***/ "./ui/picker.js":
	/*!**********************!*\
	  !*** ./ui/picker.js ***!
	  \**********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/dropdown.svg */ \"./assets/icons/dropdown.svg\");\n/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__);\n// @ts-expect-error\n\nlet optionsCounter = 0;\nfunction toggleAriaAttribute(element, attribute) {\n  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));\n}\nclass Picker {\n  constructor(select) {\n    this.select = select;\n    this.container = document.createElement('span');\n    this.buildPicker();\n    this.select.style.display = 'none';\n    this.select.parentNode.insertBefore(this.container, this.select);\n    this.label.addEventListener('mousedown', () => {\n      this.togglePicker();\n    });\n    this.label.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.togglePicker();\n          break;\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n        default:\n      }\n    });\n    this.select.addEventListener('change', this.update.bind(this));\n  }\n  togglePicker() {\n    this.container.classList.toggle('ql-expanded');\n    // Toggle aria-expanded and aria-hidden to make the picker accessible\n    toggleAriaAttribute(this.label, 'aria-expanded');\n    // @ts-expect-error\n    toggleAriaAttribute(this.options, 'aria-hidden');\n  }\n  buildItem(option) {\n    const item = document.createElement('span');\n    // @ts-expect-error\n    item.tabIndex = '0';\n    item.setAttribute('role', 'button');\n    item.classList.add('ql-picker-item');\n    if (option.hasAttribute('value')) {\n      item.setAttribute('data-value', option.getAttribute('value'));\n    }\n    if (option.textContent) {\n      item.setAttribute('data-label', option.textContent);\n    }\n    item.addEventListener('click', () => {\n      this.selectItem(item, true);\n    });\n    item.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.selectItem(item, true);\n          event.preventDefault();\n          break;\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n        default:\n      }\n    });\n    return item;\n  }\n  buildLabel() {\n    const label = document.createElement('span');\n    label.classList.add('ql-picker-label');\n    label.innerHTML = _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default.a;\n    // @ts-expect-error\n    label.tabIndex = '0';\n    label.setAttribute('role', 'button');\n    label.setAttribute('aria-expanded', 'false');\n    this.container.appendChild(label);\n    return label;\n  }\n  buildOptions() {\n    const options = document.createElement('span');\n    options.classList.add('ql-picker-options');\n    // Don't want screen readers to read this until options are visible\n    options.setAttribute('aria-hidden', 'true');\n    // @ts-expect-error\n    options.tabIndex = '-1';\n    // Need a unique id for aria-controls\n    options.id = `ql-picker-options-${optionsCounter}`;\n    optionsCounter += 1;\n    this.label.setAttribute('aria-controls', options.id);\n    // @ts-expect-error\n    this.options = options;\n    Array.from(this.select.options).forEach(option => {\n      const item = this.buildItem(option);\n      options.appendChild(item);\n      if (option.selected === true) {\n        this.selectItem(item);\n      }\n    });\n    this.container.appendChild(options);\n  }\n  buildPicker() {\n    Array.from(this.select.attributes).forEach(item => {\n      this.container.setAttribute(item.name, item.value);\n    });\n    this.container.classList.add('ql-picker');\n    this.label = this.buildLabel();\n    this.buildOptions();\n  }\n  escape() {\n    // Close menu and return focus to trigger label\n    this.close();\n    // Need setTimeout for accessibility to ensure that the browser executes\n    // focus on the next process thread and after any DOM content changes\n    setTimeout(() => this.label.focus(), 1);\n  }\n  close() {\n    this.container.classList.remove('ql-expanded');\n    this.label.setAttribute('aria-expanded', 'false');\n    // @ts-expect-error\n    this.options.setAttribute('aria-hidden', 'true');\n  }\n  selectItem(item) {\n    let trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    const selected = this.container.querySelector('.ql-selected');\n    if (item === selected) return;\n    if (selected != null) {\n      selected.classList.remove('ql-selected');\n    }\n    if (item == null) return;\n    item.classList.add('ql-selected');\n    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);\n    if (item.hasAttribute('data-value')) {\n      this.label.setAttribute('data-value', item.getAttribute('data-value'));\n    } else {\n      this.label.removeAttribute('data-value');\n    }\n    if (item.hasAttribute('data-label')) {\n      this.label.setAttribute('data-label', item.getAttribute('data-label'));\n    } else {\n      this.label.removeAttribute('data-label');\n    }\n    if (trigger) {\n      this.select.dispatchEvent(new Event('change'));\n      this.close();\n    }\n  }\n  update() {\n    let option;\n    if (this.select.selectedIndex > -1) {\n      const item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];\n      option = this.select.options[this.select.selectedIndex];\n      // @ts-expect-error\n      this.selectItem(item);\n    } else {\n      this.selectItem(null);\n    }\n    const isActive = option != null && option !== this.select.querySelector('option[selected]');\n    this.label.classList.toggle('ql-active', isActive);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Picker);\n\n//# sourceURL=webpack://Quill/./ui/picker.js?");
	
	/***/ }),
	
	/***/ "./ui/tooltip.js":
	/*!***********************!*\
	  !*** ./ui/tooltip.js ***!
	  \***********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nclass Tooltip {\n  constructor(quill, boundsContainer) {\n    this.quill = quill;\n    this.boundsContainer = boundsContainer || document.body;\n    this.root = quill.addContainer('ql-tooltip');\n    // @ts-expect-error\n    this.root.innerHTML = this.constructor.TEMPLATE;\n    if (this.quill.root === this.quill.scrollingContainer) {\n      this.quill.root.addEventListener('scroll', () => {\n        this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;\n      });\n    }\n    this.hide();\n  }\n  hide() {\n    this.root.classList.add('ql-hidden');\n  }\n  position(reference) {\n    const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;\n    // root.scrollTop should be 0 if scrollContainer !== root\n    const top = reference.bottom + this.quill.root.scrollTop;\n    this.root.style.left = `${left}px`;\n    this.root.style.top = `${top}px`;\n    this.root.classList.remove('ql-flip');\n    const containerBounds = this.boundsContainer.getBoundingClientRect();\n    const rootBounds = this.root.getBoundingClientRect();\n    let shift = 0;\n    if (rootBounds.right > containerBounds.right) {\n      shift = containerBounds.right - rootBounds.right;\n      this.root.style.left = `${left + shift}px`;\n    }\n    if (rootBounds.left < containerBounds.left) {\n      shift = containerBounds.left - rootBounds.left;\n      this.root.style.left = `${left + shift}px`;\n    }\n    if (rootBounds.bottom > containerBounds.bottom) {\n      const height = rootBounds.bottom - rootBounds.top;\n      const verticalShift = reference.bottom - reference.top + height;\n      this.root.style.top = `${top - verticalShift}px`;\n      this.root.classList.add('ql-flip');\n    }\n    return shift;\n  }\n  show() {\n    this.root.classList.remove('ql-editing');\n    this.root.classList.remove('ql-hidden');\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tooltip);\n\n//# sourceURL=webpack://Quill/./ui/tooltip.js?");
	
	/***/ }),
	
	/***/ 0:
	/*!************************!*\
	  !*** multi ./quill.ts ***!
	  \************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	eval("module.exports = __webpack_require__(/*! ./quill.ts */\"./quill.ts\");\n\n\n//# sourceURL=webpack://Quill/multi_./quill.ts?");
	
	/***/ })
	
	/******/ })["default"];
	});

/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(/*! react */ 3);
	var ReactDOM = __webpack_require__(/*! react-dom */ 4);
	var createClass = __webpack_require__(/*! create-react-class */ 5);
	var QuillMixin = __webpack_require__(/*! ./mixin */ 13);
	var find = __webpack_require__(/*! lodash/find */ 14);
	var some = __webpack_require__(/*! lodash/some */ 136);
	var isEqual = __webpack_require__(/*! lodash/isEqual */ 144);
	var T = __webpack_require__(/*! prop-types */ 145);
	var DOM = __webpack_require__(/*! react-dom-factories */ 146);
	
	var QuillComponent = createClass({
	
		displayName: 'Quill',
	
		mixins: [ QuillMixin ],
	
		propTypes: {
			id: T.string,
			className: T.string,
			theme: T.string,
			style: T.object,
			readOnly: T.bool,
			value: T.oneOfType([T.string, T.shape({ops: T.array})]),
			defaultValue: T.oneOfType([T.string, T.shape({ops: T.array})]),
			placeholder: T.string,
			tabIndex: T.number,
			bounds: T.oneOfType([T.string, T.element]),
			onChange: T.func,
			onChangeSelection: T.func,
			onFocus: T.func,
			onBlur: T.func,
			onKeyPress: T.func,
			onKeyDown: T.func,
			onKeyUp: T.func,
			preserveWhitespace: T.bool,
	
			modules: function(props) {
				var isNotObject = T.object.apply(this, arguments);
				if (isNotObject) return isNotObject;
	
				if (
					props.modules && 
					props.modules.toolbar &&
					props.modules.toolbar[0] &&
					props.modules.toolbar[0].type
				) return new Error(
					'Since v1.0.0, React Quill will not create a custom toolbar for you ' +
					'anymore. Create a toolbar explictly, or let Quill create one. ' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100'
				);
			},
	
			toolbar: function(props) {
				if ('toolbar' in props) return new Error(
					'The `toolbar` prop has been deprecated. Use `modules.toolbar` instead. ' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100'
				);
			},
	
			formats: function(props) {
				var isNotArrayOfString = T.arrayOf(T.string).apply(this, arguments);
	
				if (isNotArrayOfString) return new Error(
					'You cannot specify custom `formats` anymore. Use Parchment instead.  ' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.'
				);
			},
	
			styles: function(props) {
				if ('styles' in props) return new Error(
					'The `styles` prop has been deprecated. Use custom stylesheets instead. ' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.'
				);
			},
	
			pollInterval: function(props) {
				if ('pollInterval' in props) return new Error(
					'The `pollInterval` property does not have any effect anymore. ' +
					'You can safely remove it from your props.' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.'
				);
			},
	
			children: function(props) {
				// Validate that the editor has only one child element and it is not a <textarea>
				var isNotASingleElement = T.element.apply(this, arguments);
				if (isNotASingleElement) return new Error(
					'The Quill editing area can only be composed of a single React element.'
				);
	
				if (React.Children.count(props.children)) {
					var child = React.Children.only(props.children);
					if (child.type === 'textarea') return new Error(
						'Quill does not support editing on a <textarea>. Use a <div> instead.'
					);
				}
			}
		},
			
		/*
		Changing one of these props should cause a full re-render.
		*/
		dirtyProps: [
			'modules',
			'formats',
			'bounds',
			'theme',
			'children',
		],
	
		/*
		Changing one of these props should cause a regular update.
		*/
		cleanProps: [
			'id',
			'className',
			'style',
			'placeholder',
			'tabIndex',
			'onChange',
			'onChangeSelection',
			'onFocus',
			'onBlur',
			'onKeyPress',
			'onKeyDown',
			'onKeyUp',
		],
	
		getDefaultProps: function() {
			return {
				theme: 'snow',
				modules: {},
			};
		},
	
		/*
		We consider the component to be controlled if `value` is being sent in props.
		*/
		isControlled: function() {
			return 'value' in this.props;
		},
	
		getInitialState: function() {
			return {
				generation: 0,
				value: this.isControlled()
					? this.props.value
					: this.props.defaultValue
			};
		},
	
		componentWillReceiveProps: function(nextProps, nextState) {
			var editor = this.editor;
	
			// If the component is unmounted and mounted too quickly
			// an error is thrown in setEditorContents since editor is
			// still undefined. Must check if editor is undefined
			// before performing this call.
			if (!editor) return;
			
			// Update only if we've been passed a new `value`.
			// This leaves components using `defaultValue` alone.
			if ('value' in nextProps) {
				var currentContents = this.getEditorContents();
				var nextContents = nextProps.value;
	
				if (nextContents === this.lastDeltaChangeSet) throw new Error(
					'You are passing the `delta` object from the `onChange` event back ' +
					'as `value`. You most probably want `editor.getContents()` instead. ' +
					'See: https://github.com/zenoamaro/react-quill#using-deltas'
				);
	
				// NOTE: Seeing that Quill is missing a way to prevent
				//       edits, we have to settle for a hybrid between
				//       controlled and uncontrolled mode. We can't prevent
				//       the change, but we'll still override content
				//       whenever `value` differs from current state.
				// NOTE: Comparing an HTML string and a Quill Delta will always trigger 
				//       a change, regardless of whether they represent the same document.
				if (!this.isEqualValue(nextContents, currentContents)) {
					this.setEditorContents(editor, nextContents);
				}
			}
			
			// We can update readOnly state in-place.
			if ('readOnly' in nextProps) {
				if (nextProps.readOnly !== this.props.readOnly) {
					this.setEditorReadOnly(editor, nextProps.readOnly);
				}
			}
	
			// If we need to regenerate the component, we can avoid a detailed
			// in-place update step, and just let everything rerender.
			if (this.shouldComponentRegenerate(nextProps, nextState)) {
				return this.regenerate();
			}
		},
	
		componentDidMount: function() {
			this.editor = this.createEditor(
				this.getEditingArea(),
				this.getEditorConfig()
			);
			// Restore editor from Quill's native formats in regeneration scenario
			if (this.quillDelta) {
				this.editor.setContents(this.quillDelta);
				this.editor.setSelection(this.quillSelection);		
				this.editor.focus();
				this.quillDelta = this.quillSelection = null;
				return;
			}
			if (this.state.value) {
				this.setEditorContents(this.editor, this.state.value);
				return;
			}
		},
	
		componentWillUnmount: function() {
			var editor; if ((editor = this.getEditor())) {
				this.unhookEditor(editor);
				this.editor = null;
			}
		},
	
		shouldComponentUpdate: function(nextProps, nextState) {
			var self = this;
	
			// If the component has been regenerated, we already know we should update.
			if (this.state.generation !== nextState.generation) {
				return true;
			}
			
			// Compare props that require React updating the DOM.
			return some(this.cleanProps, function(prop) {
				// Note that `isEqual` compares deeply, making it safe to perform
				// non-immutable updates, at the cost of performance.
				return !isEqual(nextProps[prop], self.props[prop]);
			});
		},
	
		shouldComponentRegenerate: function(nextProps, nextState) {
			var self = this;
			// Whenever a `dirtyProp` changes, the editor needs reinstantiation.
			return some(this.dirtyProps, function(prop) {
				// Note that `isEqual` compares deeply, making it safe to perform
				// non-immutable updates, at the cost of performance.
				return !isEqual(nextProps[prop], self.props[prop]);
			});
		},
	
		/*
		If we could not update settings from the new props in-place, we have to tear
		down everything and re-render from scratch.
		*/
		componentWillUpdate: function(nextProps, nextState) {
			if (this.state.generation !== nextState.generation) {
				this.componentWillUnmount();
			}
		},
	
		componentDidUpdate: function(prevProps, prevState) {
			if (this.state.generation !== prevState.generation) {
				this.componentDidMount();
			}
		},
	
		getEditorConfig: function() {
			return {
				bounds:       this.props.bounds,
				formats:      this.props.formats,
				modules:      this.props.modules,
				placeholder:  this.props.placeholder,
				readOnly:     this.props.readOnly,
	      			scrollingContainer: this.props.scrollingContainer,
				tabIndex:     this.props.tabIndex,
				theme:        this.props.theme,
			};
		},
	
		getEditor: function() {
			return this.editor;
		},
	
		getEditingArea: function () {
			return ReactDOM.findDOMNode(this.editingArea);
		},
	
		getEditorContents: function() {
			return this.state.value;
		},
	
		getEditorSelection: function() {
			return this.state.selection;
		},
	
		/*
		True if the value is a Delta instance or a Delta look-alike.
		*/
		isDelta: function(value) {
			return value && value.ops;
		},
	
		/*
		Special comparison function that knows how to compare Deltas.
		*/
		isEqualValue: function(value, nextValue) {
			if (this.isDelta(value) && this.isDelta(nextValue)) {
				return isEqual(value.ops, nextValue.ops);
			} else {
				return isEqual(value, nextValue);
			}
		},
	
		/*
		Regenerating the editor will cause the whole tree, including the container,
		to be cleaned up and re-rendered from scratch.
		*/
		regenerate: function() {
			// Cache selection and contents in Quill's native format to be restored later
			this.quillDelta = this.editor.getContents();
			this.quillSelection = this.editor.getSelection();
			this.setState({
				generation: this.state.generation + 1,
			});
		},
	
		/*
		Renders an editor area, unless it has been provided one to clone.
		*/
		renderEditingArea: function() {
			var self = this;
			var children = this.props.children;
			var preserveWhitespace = this.props.preserveWhitespace;
	
			var properties = {
				key: this.state.generation,
				tabIndex: this.props.tabIndex,
				ref: function(element) { self.editingArea = element },
			};
	
			var customElement = React.Children.count(children)
				? React.Children.only(children)
				: null;
			var defaultElement = preserveWhitespace ? DOM.pre : DOM.div;
			var editingArea = customElement
				? React.cloneElement(customElement, properties)
				: defaultElement(properties);
	
			return editingArea;
		},
	
		render: function() {
			return DOM.div({
				id: this.props.id,
				style: this.props.style,
				key: this.state.generation,
				className: ['quill'].concat(this.props.className).join(' '),
				onKeyPress: this.props.onKeyPress,
				onKeyDown: this.props.onKeyDown,
				onKeyUp: this.props.onKeyUp },
				this.renderEditingArea()
			);
		},
	
		onEditorChangeText: function(value, delta, source, editor) {
			var currentContents = this.getEditorContents();
	
			// We keep storing the same type of value as what the user gives us,
			// so that value comparisons will be more stable and predictable.
			var nextContents = this.isDelta(currentContents)
				? editor.getContents()
				: editor.getHTML();
			
			if (!this.isEqualValue(nextContents, currentContents)) {
				// Taint this `delta` object, so we can recognize whether the user
				// is trying to send it back as `value`, preventing a likely loop.
				this.lastDeltaChangeSet = delta;
	
				this.setState({ value: nextContents });
	
				if (this.props.onChange) {
					this.props.onChange(value, delta, source, editor);
				}
			}
		},
	
		onEditorChangeSelection: function(nextSelection, source, editor) {
			var currentSelection = this.getEditorSelection();
			var hasGainedFocus = !currentSelection && nextSelection;
			var hasLostFocus = currentSelection && !nextSelection;
	
			if (isEqual(nextSelection, currentSelection)) {
				return;
			}
			
			this.setState({ selection: nextSelection });
			
			if (this.props.onChangeSelection) {
				this.props.onChangeSelection(nextSelection, source, editor);
			}
	
			if (hasGainedFocus && this.props.onFocus) {
				this.props.onFocus(nextSelection, source, editor);
			} else if (hasLostFocus && this.props.onBlur) {
				this.props.onBlur(currentSelection, source, editor);
			}
		},
	
		focus: function() {
			this.editor.focus();
		},
	
		blur: function() {
			this.setEditorSelection(this.editor, null);
		}
	
	});
	
	module.exports = QuillComponent;


/***/ }),
/* 3 */
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/*!*****************************************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom","root":"ReactDOM"} ***!
  \*****************************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/*!***************************************!*\
  !*** ./~/create-react-class/index.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(/*! react */ 3);
	var factory = __webpack_require__(/*! ./factory */ 6);
	
	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}
	
	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;
	
	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./~/create-react-class/factory.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(/*! object-assign */ 8);
	
	var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 9);
	var _invariant = __webpack_require__(/*! fbjs/lib/invariant */ 10);
	
	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(/*! fbjs/lib/warning */ 11);
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;
	
	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );
	
	        Constructor[name] = createMergedResultFunction(Constructor[name], property);
	
	        return;
	      }
	
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ 7)))

/***/ }),
/* 7 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ (function(module, exports) {

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
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 8 */
/*!**********************************!*\
  !*** ./~/object-assign/index.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 9 */
/*!***********************************!*\
  !*** ./~/fbjs/lib/emptyObject.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 7)))

/***/ }),
/* 10 */
/*!*********************************!*\
  !*** ./~/fbjs/lib/invariant.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 7)))

/***/ }),
/* 11 */
/*!*******************************!*\
  !*** ./~/fbjs/lib/warning.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 12);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 7)))

/***/ }),
/* 12 */
/*!*************************************!*\
  !*** ./~/fbjs/lib/emptyFunction.js ***!
  \*************************************/
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 13 */
/*!**********************!*\
  !*** ./src/mixin.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Quill = __webpack_require__(/*! quill */ 1);
	
	var QuillMixin = {
	
		/**
		Creates an editor on the given element. The editor will
		be passed the configuration, have its events bound,
		*/
		createEditor: function($el, config) {
			var editor = new Quill($el, config);
			if (config.tabIndex !== undefined) {
				this.setEditorTabIndex(editor, config.tabIndex);
			}
			this.hookEditor(editor);
			return editor;
		},
	
		hookEditor: function(editor) {
			// Expose the editor on change events via a weaker,
			// unprivileged proxy object that does not allow
			// accidentally modifying editor state.
			var unprivilegedEditor = this.makeUnprivilegedEditor(editor);
	
			this.handleTextChange = function(delta, oldDelta, source) {
				if (this.onEditorChangeText) {
					this.onEditorChangeText(
						editor.root.innerHTML, delta, source,
						unprivilegedEditor
					);
					this.onEditorChangeSelection(
						editor.getSelection(), source,
						unprivilegedEditor
					);
				}
			}.bind(this);
	
			this.handleSelectionChange = function(range, oldRange, source) {
				if (this.onEditorChangeSelection) {
					this.onEditorChangeSelection(
						range, source,
						unprivilegedEditor
					);
				}
			}.bind(this);
	
			editor.on('editor-change', function(eventType, rangeOrDelta, oldRangeOrOldDelta, source) {
				if (eventType === Quill.events.SELECTION_CHANGE) {
					this.handleSelectionChange(rangeOrDelta, oldRangeOrOldDelta, source);
				}
				
				if (eventType === Quill.events.TEXT_CHANGE) {
					this.handleTextChange(rangeOrDelta, oldRangeOrOldDelta, source);
				}
			}.bind(this));
		},
	
		unhookEditor: function(editor) {
			editor.off('selection-change');
			editor.off('text-change');
		},
	
		setEditorReadOnly: function(editor, value) {
			value? editor.disable()
			     : editor.enable();
		},
	
		/*
		Replace the contents of the editor, but keep
		the previous selection hanging around so that
		the cursor won't move.
		*/
		setEditorContents: function(editor, value) {
			var sel = editor.getSelection();
	
			if (typeof value === 'string') {
				editor.setContents(editor.clipboard.convert(value));
			} else {
				editor.setContents(value);
			}
	
			if (sel && editor.hasFocus()) this.setEditorSelection(editor, sel);
		},
	
		setEditorSelection: function(editor, range) {
			if (range) {
				// Validate bounds before applying.
				var length = editor.getLength();
				range.index = Math.max(0, Math.min(range.index, length-1));
				range.length = Math.max(0, Math.min(range.length, (length-1) - range.index));
			}
			editor.setSelection(range);
		},
	
		setEditorTabIndex: function(editor, tabIndex) {
			if (editor.editor && editor.editor.scroll && editor.editor.scroll.domNode) {
				editor.editor.scroll.domNode.tabIndex = tabIndex;
			}
		},
	
		/*
		Returns an weaker, unprivileged proxy object that only
		exposes read-only accessors found on the editor instance,
		without any state-modificating methods.
		*/
		makeUnprivilegedEditor: function(editor) {
			var e = editor;
			return {
				getLength:    function(){ return e.getLength.apply(e, arguments); },
				getText:      function(){ return e.getText.apply(e, arguments); },
				getHTML:      function(){ return e.root.innerHTML },
				getContents:  function(){ return e.getContents.apply(e, arguments); },
				getSelection: function(){ return e.getSelection.apply(e, arguments); },
				getBounds:    function(){ return e.getBounds.apply(e, arguments); },
			};
		}
	
	};
	
	module.exports = QuillMixin;


/***/ }),
/* 14 */
/*!**************************!*\
  !*** ./~/lodash/find.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var createFind = __webpack_require__(/*! ./_createFind */ 15),
	    findIndex = __webpack_require__(/*! ./findIndex */ 131);
	
	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);
	
	module.exports = find;


/***/ }),
/* 15 */
/*!*********************************!*\
  !*** ./~/lodash/_createFind.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 16),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 102),
	    keys = __webpack_require__(/*! ./keys */ 83);
	
	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}
	
	module.exports = createFind;


/***/ }),
/* 16 */
/*!***********************************!*\
  !*** ./~/lodash/_baseIteratee.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(/*! ./_baseMatches */ 17),
	    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ 111),
	    identity = __webpack_require__(/*! ./identity */ 127),
	    isArray = __webpack_require__(/*! ./isArray */ 79),
	    property = __webpack_require__(/*! ./property */ 128);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ }),
/* 17 */
/*!**********************************!*\
  !*** ./~/lodash/_baseMatches.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ 18),
	    getMatchData = __webpack_require__(/*! ./_getMatchData */ 108),
	    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 110);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ }),
/* 18 */
/*!**********************************!*\
  !*** ./~/lodash/_baseIsMatch.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(/*! ./_Stack */ 19),
	    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 63);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ }),
/* 19 */
/*!****************************!*\
  !*** ./~/lodash/_Stack.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 20),
	    stackClear = __webpack_require__(/*! ./_stackClear */ 28),
	    stackDelete = __webpack_require__(/*! ./_stackDelete */ 29),
	    stackGet = __webpack_require__(/*! ./_stackGet */ 30),
	    stackHas = __webpack_require__(/*! ./_stackHas */ 31),
	    stackSet = __webpack_require__(/*! ./_stackSet */ 32);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ }),
/* 20 */
/*!********************************!*\
  !*** ./~/lodash/_ListCache.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 21),
	    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 22),
	    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 25),
	    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 26),
	    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 27);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 21 */
/*!*************************************!*\
  !*** ./~/lodash/_listCacheClear.js ***!
  \*************************************/
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 22 */
/*!**************************************!*\
  !*** ./~/lodash/_listCacheDelete.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 23);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 23 */
/*!***********************************!*\
  !*** ./~/lodash/_assocIndexOf.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(/*! ./eq */ 24);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 24 */
/*!************************!*\
  !*** ./~/lodash/eq.js ***!
  \************************/
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 25 */
/*!***********************************!*\
  !*** ./~/lodash/_listCacheGet.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 23);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 26 */
/*!***********************************!*\
  !*** ./~/lodash/_listCacheHas.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 23);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 27 */
/*!***********************************!*\
  !*** ./~/lodash/_listCacheSet.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 23);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 28 */
/*!*********************************!*\
  !*** ./~/lodash/_stackClear.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 20);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ }),
/* 29 */
/*!**********************************!*\
  !*** ./~/lodash/_stackDelete.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ }),
/* 30 */
/*!*******************************!*\
  !*** ./~/lodash/_stackGet.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ }),
/* 31 */
/*!*******************************!*\
  !*** ./~/lodash/_stackHas.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ }),
/* 32 */
/*!*******************************!*\
  !*** ./~/lodash/_stackSet.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 20),
	    Map = __webpack_require__(/*! ./_Map */ 33),
	    MapCache = __webpack_require__(/*! ./_MapCache */ 48);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ }),
/* 33 */
/*!**************************!*\
  !*** ./~/lodash/_Map.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 34),
	    root = __webpack_require__(/*! ./_root */ 39);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 34 */
/*!********************************!*\
  !*** ./~/lodash/_getNative.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 35),
	    getValue = __webpack_require__(/*! ./_getValue */ 47);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 35 */
/*!***********************************!*\
  !*** ./~/lodash/_baseIsNative.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(/*! ./isFunction */ 36),
	    isMasked = __webpack_require__(/*! ./_isMasked */ 44),
	    isObject = __webpack_require__(/*! ./isObject */ 43),
	    toSource = __webpack_require__(/*! ./_toSource */ 46);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 36 */
/*!********************************!*\
  !*** ./~/lodash/isFunction.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 37),
	    isObject = __webpack_require__(/*! ./isObject */ 43);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 37 */
/*!*********************************!*\
  !*** ./~/lodash/_baseGetTag.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 38),
	    getRawTag = __webpack_require__(/*! ./_getRawTag */ 41),
	    objectToString = __webpack_require__(/*! ./_objectToString */ 42);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 38 */
/*!*****************************!*\
  !*** ./~/lodash/_Symbol.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 39);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 39 */
/*!***************************!*\
  !*** ./~/lodash/_root.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 40);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 40 */
/*!*********************************!*\
  !*** ./~/lodash/_freeGlobal.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 41 */
/*!********************************!*\
  !*** ./~/lodash/_getRawTag.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 38);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 42 */
/*!*************************************!*\
  !*** ./~/lodash/_objectToString.js ***!
  \*************************************/
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 43 */
/*!******************************!*\
  !*** ./~/lodash/isObject.js ***!
  \******************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 44 */
/*!*******************************!*\
  !*** ./~/lodash/_isMasked.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(/*! ./_coreJsData */ 45);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 45 */
/*!*********************************!*\
  !*** ./~/lodash/_coreJsData.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 39);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 46 */
/*!*******************************!*\
  !*** ./~/lodash/_toSource.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 47 */
/*!*******************************!*\
  !*** ./~/lodash/_getValue.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 48 */
/*!*******************************!*\
  !*** ./~/lodash/_MapCache.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 49),
	    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 57),
	    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 60),
	    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 61),
	    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 62);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 49 */
/*!************************************!*\
  !*** ./~/lodash/_mapCacheClear.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(/*! ./_Hash */ 50),
	    ListCache = __webpack_require__(/*! ./_ListCache */ 20),
	    Map = __webpack_require__(/*! ./_Map */ 33);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 50 */
/*!***************************!*\
  !*** ./~/lodash/_Hash.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(/*! ./_hashClear */ 51),
	    hashDelete = __webpack_require__(/*! ./_hashDelete */ 53),
	    hashGet = __webpack_require__(/*! ./_hashGet */ 54),
	    hashHas = __webpack_require__(/*! ./_hashHas */ 55),
	    hashSet = __webpack_require__(/*! ./_hashSet */ 56);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 51 */
/*!********************************!*\
  !*** ./~/lodash/_hashClear.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 52);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),
/* 52 */
/*!***********************************!*\
  !*** ./~/lodash/_nativeCreate.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 34);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 53 */
/*!*********************************!*\
  !*** ./~/lodash/_hashDelete.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),
/* 54 */
/*!******************************!*\
  !*** ./~/lodash/_hashGet.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 52);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 55 */
/*!******************************!*\
  !*** ./~/lodash/_hashHas.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 52);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 56 */
/*!******************************!*\
  !*** ./~/lodash/_hashSet.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 52);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 57 */
/*!*************************************!*\
  !*** ./~/lodash/_mapCacheDelete.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 58);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 58 */
/*!*********************************!*\
  !*** ./~/lodash/_getMapData.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(/*! ./_isKeyable */ 59);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 59 */
/*!********************************!*\
  !*** ./~/lodash/_isKeyable.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 60 */
/*!**********************************!*\
  !*** ./~/lodash/_mapCacheGet.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 58);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 61 */
/*!**********************************!*\
  !*** ./~/lodash/_mapCacheHas.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 58);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 62 */
/*!**********************************!*\
  !*** ./~/lodash/_mapCacheSet.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 58);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 63 */
/*!**********************************!*\
  !*** ./~/lodash/_baseIsEqual.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ 64),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 88);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ }),
/* 64 */
/*!**************************************!*\
  !*** ./~/lodash/_baseIsEqualDeep.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(/*! ./_Stack */ 19),
	    equalArrays = __webpack_require__(/*! ./_equalArrays */ 65),
	    equalByTag = __webpack_require__(/*! ./_equalByTag */ 71),
	    equalObjects = __webpack_require__(/*! ./_equalObjects */ 75),
	    getTag = __webpack_require__(/*! ./_getTag */ 103),
	    isArray = __webpack_require__(/*! ./isArray */ 79),
	    isBuffer = __webpack_require__(/*! ./isBuffer */ 89),
	    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 93);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ }),
/* 65 */
/*!**********************************!*\
  !*** ./~/lodash/_equalArrays.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(/*! ./_SetCache */ 66),
	    arraySome = __webpack_require__(/*! ./_arraySome */ 69),
	    cacheHas = __webpack_require__(/*! ./_cacheHas */ 70);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ }),
/* 66 */
/*!*******************************!*\
  !*** ./~/lodash/_SetCache.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(/*! ./_MapCache */ 48),
	    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ 67),
	    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ 68);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ }),
/* 67 */
/*!**********************************!*\
  !*** ./~/lodash/_setCacheAdd.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ }),
/* 68 */
/*!**********************************!*\
  !*** ./~/lodash/_setCacheHas.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ }),
/* 69 */
/*!********************************!*\
  !*** ./~/lodash/_arraySome.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ }),
/* 70 */
/*!*******************************!*\
  !*** ./~/lodash/_cacheHas.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ }),
/* 71 */
/*!*********************************!*\
  !*** ./~/lodash/_equalByTag.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 38),
	    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 72),
	    eq = __webpack_require__(/*! ./eq */ 24),
	    equalArrays = __webpack_require__(/*! ./_equalArrays */ 65),
	    mapToArray = __webpack_require__(/*! ./_mapToArray */ 73),
	    setToArray = __webpack_require__(/*! ./_setToArray */ 74);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ }),
/* 72 */
/*!*********************************!*\
  !*** ./~/lodash/_Uint8Array.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 39);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ }),
/* 73 */
/*!*********************************!*\
  !*** ./~/lodash/_mapToArray.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ }),
/* 74 */
/*!*********************************!*\
  !*** ./~/lodash/_setToArray.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ }),
/* 75 */
/*!***********************************!*\
  !*** ./~/lodash/_equalObjects.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 76);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ }),
/* 76 */
/*!*********************************!*\
  !*** ./~/lodash/_getAllKeys.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 77),
	    getSymbols = __webpack_require__(/*! ./_getSymbols */ 80),
	    keys = __webpack_require__(/*! ./keys */ 83);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ }),
/* 77 */
/*!*************************************!*\
  !*** ./~/lodash/_baseGetAllKeys.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(/*! ./_arrayPush */ 78),
	    isArray = __webpack_require__(/*! ./isArray */ 79);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ }),
/* 78 */
/*!********************************!*\
  !*** ./~/lodash/_arrayPush.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ }),
/* 79 */
/*!*****************************!*\
  !*** ./~/lodash/isArray.js ***!
  \*****************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),
/* 80 */
/*!*********************************!*\
  !*** ./~/lodash/_getSymbols.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ 81),
	    stubArray = __webpack_require__(/*! ./stubArray */ 82);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ }),
/* 81 */
/*!**********************************!*\
  !*** ./~/lodash/_arrayFilter.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ }),
/* 82 */
/*!*******************************!*\
  !*** ./~/lodash/stubArray.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ }),
/* 83 */
/*!**************************!*\
  !*** ./~/lodash/keys.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 84),
	    baseKeys = __webpack_require__(/*! ./_baseKeys */ 98),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 102);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ }),
/* 84 */
/*!************************************!*\
  !*** ./~/lodash/_arrayLikeKeys.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(/*! ./_baseTimes */ 85),
	    isArguments = __webpack_require__(/*! ./isArguments */ 86),
	    isArray = __webpack_require__(/*! ./isArray */ 79),
	    isBuffer = __webpack_require__(/*! ./isBuffer */ 89),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 92),
	    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 93);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ }),
/* 85 */
/*!********************************!*\
  !*** ./~/lodash/_baseTimes.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ }),
/* 86 */
/*!*********************************!*\
  !*** ./~/lodash/isArguments.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ 87),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 88);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ }),
/* 87 */
/*!**************************************!*\
  !*** ./~/lodash/_baseIsArguments.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 37),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 88);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ }),
/* 88 */
/*!**********************************!*\
  !*** ./~/lodash/isObjectLike.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 89 */
/*!******************************!*\
  !*** ./~/lodash/isBuffer.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ 39),
	    stubFalse = __webpack_require__(/*! ./stubFalse */ 91);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 90)(module)))

/***/ }),
/* 90 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports) {

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


/***/ }),
/* 91 */
/*!*******************************!*\
  !*** ./~/lodash/stubFalse.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ }),
/* 92 */
/*!******************************!*\
  !*** ./~/lodash/_isIndex.js ***!
  \******************************/
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	
	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ }),
/* 93 */
/*!**********************************!*\
  !*** ./~/lodash/isTypedArray.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ 94),
	    baseUnary = __webpack_require__(/*! ./_baseUnary */ 96),
	    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 97);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ }),
/* 94 */
/*!***************************************!*\
  !*** ./~/lodash/_baseIsTypedArray.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 37),
	    isLength = __webpack_require__(/*! ./isLength */ 95),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 88);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ }),
/* 95 */
/*!******************************!*\
  !*** ./~/lodash/isLength.js ***!
  \******************************/
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ }),
/* 96 */
/*!********************************!*\
  !*** ./~/lodash/_baseUnary.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ }),
/* 97 */
/*!*******************************!*\
  !*** ./~/lodash/_nodeUtil.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 40);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;
	
	    if (types) {
	      return types;
	    }
	
	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 90)(module)))

/***/ }),
/* 98 */
/*!*******************************!*\
  !*** ./~/lodash/_baseKeys.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(/*! ./_isPrototype */ 99),
	    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ 100);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ }),
/* 99 */
/*!**********************************!*\
  !*** ./~/lodash/_isPrototype.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ }),
/* 100 */
/*!*********************************!*\
  !*** ./~/lodash/_nativeKeys.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 101);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ }),
/* 101 */
/*!******************************!*\
  !*** ./~/lodash/_overArg.js ***!
  \******************************/
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 102 */
/*!*********************************!*\
  !*** ./~/lodash/isArrayLike.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(/*! ./isFunction */ 36),
	    isLength = __webpack_require__(/*! ./isLength */ 95);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ }),
/* 103 */
/*!*****************************!*\
  !*** ./~/lodash/_getTag.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(/*! ./_DataView */ 104),
	    Map = __webpack_require__(/*! ./_Map */ 33),
	    Promise = __webpack_require__(/*! ./_Promise */ 105),
	    Set = __webpack_require__(/*! ./_Set */ 106),
	    WeakMap = __webpack_require__(/*! ./_WeakMap */ 107),
	    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 37),
	    toSource = __webpack_require__(/*! ./_toSource */ 46);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ }),
/* 104 */
/*!*******************************!*\
  !*** ./~/lodash/_DataView.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 34),
	    root = __webpack_require__(/*! ./_root */ 39);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ }),
/* 105 */
/*!******************************!*\
  !*** ./~/lodash/_Promise.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 34),
	    root = __webpack_require__(/*! ./_root */ 39);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ }),
/* 106 */
/*!**************************!*\
  !*** ./~/lodash/_Set.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 34),
	    root = __webpack_require__(/*! ./_root */ 39);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ }),
/* 107 */
/*!******************************!*\
  !*** ./~/lodash/_WeakMap.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 34),
	    root = __webpack_require__(/*! ./_root */ 39);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ }),
/* 108 */
/*!***********************************!*\
  !*** ./~/lodash/_getMatchData.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 109),
	    keys = __webpack_require__(/*! ./keys */ 83);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ }),
/* 109 */
/*!*****************************************!*\
  !*** ./~/lodash/_isStrictComparable.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./isObject */ 43);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ }),
/* 110 */
/*!**********************************************!*\
  !*** ./~/lodash/_matchesStrictComparable.js ***!
  \**********************************************/
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ }),
/* 111 */
/*!******************************************!*\
  !*** ./~/lodash/_baseMatchesProperty.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 63),
	    get = __webpack_require__(/*! ./get */ 112),
	    hasIn = __webpack_require__(/*! ./hasIn */ 124),
	    isKey = __webpack_require__(/*! ./_isKey */ 115),
	    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 109),
	    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 110),
	    toKey = __webpack_require__(/*! ./_toKey */ 123);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ }),
/* 112 */
/*!*************************!*\
  !*** ./~/lodash/get.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(/*! ./_baseGet */ 113);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ }),
/* 113 */
/*!******************************!*\
  !*** ./~/lodash/_baseGet.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(/*! ./_castPath */ 114),
	    toKey = __webpack_require__(/*! ./_toKey */ 123);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ }),
/* 114 */
/*!*******************************!*\
  !*** ./~/lodash/_castPath.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(/*! ./isArray */ 79),
	    isKey = __webpack_require__(/*! ./_isKey */ 115),
	    stringToPath = __webpack_require__(/*! ./_stringToPath */ 117),
	    toString = __webpack_require__(/*! ./toString */ 120);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ }),
/* 115 */
/*!****************************!*\
  !*** ./~/lodash/_isKey.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(/*! ./isArray */ 79),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 116);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ }),
/* 116 */
/*!******************************!*\
  !*** ./~/lodash/isSymbol.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 37),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 88);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),
/* 117 */
/*!***********************************!*\
  !*** ./~/lodash/_stringToPath.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 118);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ }),
/* 118 */
/*!************************************!*\
  !*** ./~/lodash/_memoizeCapped.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(/*! ./memoize */ 119);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ }),
/* 119 */
/*!*****************************!*\
  !*** ./~/lodash/memoize.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(/*! ./_MapCache */ 48);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),
/* 120 */
/*!******************************!*\
  !*** ./~/lodash/toString.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(/*! ./_baseToString */ 121);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),
/* 121 */
/*!***********************************!*\
  !*** ./~/lodash/_baseToString.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 38),
	    arrayMap = __webpack_require__(/*! ./_arrayMap */ 122),
	    isArray = __webpack_require__(/*! ./isArray */ 79),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 116);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),
/* 122 */
/*!*******************************!*\
  !*** ./~/lodash/_arrayMap.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ }),
/* 123 */
/*!****************************!*\
  !*** ./~/lodash/_toKey.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(/*! ./isSymbol */ 116);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ }),
/* 124 */
/*!***************************!*\
  !*** ./~/lodash/hasIn.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ 125),
	    hasPath = __webpack_require__(/*! ./_hasPath */ 126);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ }),
/* 125 */
/*!********************************!*\
  !*** ./~/lodash/_baseHasIn.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ }),
/* 126 */
/*!******************************!*\
  !*** ./~/lodash/_hasPath.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(/*! ./_castPath */ 114),
	    isArguments = __webpack_require__(/*! ./isArguments */ 86),
	    isArray = __webpack_require__(/*! ./isArray */ 79),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 92),
	    isLength = __webpack_require__(/*! ./isLength */ 95),
	    toKey = __webpack_require__(/*! ./_toKey */ 123);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ }),
/* 127 */
/*!******************************!*\
  !*** ./~/lodash/identity.js ***!
  \******************************/
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ }),
/* 128 */
/*!******************************!*\
  !*** ./~/lodash/property.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(/*! ./_baseProperty */ 129),
	    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ 130),
	    isKey = __webpack_require__(/*! ./_isKey */ 115),
	    toKey = __webpack_require__(/*! ./_toKey */ 123);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ }),
/* 129 */
/*!***********************************!*\
  !*** ./~/lodash/_baseProperty.js ***!
  \***********************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ }),
/* 130 */
/*!***************************************!*\
  !*** ./~/lodash/_basePropertyDeep.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(/*! ./_baseGet */ 113);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ }),
/* 131 */
/*!*******************************!*\
  !*** ./~/lodash/findIndex.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ 132),
	    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 16),
	    toInteger = __webpack_require__(/*! ./toInteger */ 133);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}
	
	module.exports = findIndex;


/***/ }),
/* 132 */
/*!************************************!*\
  !*** ./~/lodash/_baseFindIndex.js ***!
  \************************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ }),
/* 133 */
/*!*******************************!*\
  !*** ./~/lodash/toInteger.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(/*! ./toFinite */ 134);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ }),
/* 134 */
/*!******************************!*\
  !*** ./~/lodash/toFinite.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(/*! ./toNumber */ 135);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ }),
/* 135 */
/*!******************************!*\
  !*** ./~/lodash/toNumber.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./isObject */ 43),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 116);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ }),
/* 136 */
/*!**************************!*\
  !*** ./~/lodash/some.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(/*! ./_arraySome */ 69),
	    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 16),
	    baseSome = __webpack_require__(/*! ./_baseSome */ 137),
	    isArray = __webpack_require__(/*! ./isArray */ 79),
	    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 143);
	
	/**
	 * Checks if `predicate` returns truthy for **any** element of `collection`.
	 * Iteration is stopped once `predicate` returns truthy. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.some([null, 0, 'yes', false], Boolean);
	 * // => true
	 *
	 * var users = [
	 *   { 'user': 'barney', 'active': true },
	 *   { 'user': 'fred',   'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.some(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.some(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.some(users, 'active');
	 * // => true
	 */
	function some(collection, predicate, guard) {
	  var func = isArray(collection) ? arraySome : baseSome;
	  if (guard && isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, baseIteratee(predicate, 3));
	}
	
	module.exports = some;


/***/ }),
/* 137 */
/*!*******************************!*\
  !*** ./~/lodash/_baseSome.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(/*! ./_baseEach */ 138);
	
	/**
	 * The base implementation of `_.some` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function baseSome(collection, predicate) {
	  var result;
	
	  baseEach(collection, function(value, index, collection) {
	    result = predicate(value, index, collection);
	    return !result;
	  });
	  return !!result;
	}
	
	module.exports = baseSome;


/***/ }),
/* 138 */
/*!*******************************!*\
  !*** ./~/lodash/_baseEach.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 139),
	    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ 142);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ }),
/* 139 */
/*!*********************************!*\
  !*** ./~/lodash/_baseForOwn.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(/*! ./_baseFor */ 140),
	    keys = __webpack_require__(/*! ./keys */ 83);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ }),
/* 140 */
/*!******************************!*\
  !*** ./~/lodash/_baseFor.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 141);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ }),
/* 141 */
/*!************************************!*\
  !*** ./~/lodash/_createBaseFor.js ***!
  \************************************/
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ }),
/* 142 */
/*!*************************************!*\
  !*** ./~/lodash/_createBaseEach.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 102);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ }),
/* 143 */
/*!*************************************!*\
  !*** ./~/lodash/_isIterateeCall.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(/*! ./eq */ 24),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 102),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 92),
	    isObject = __webpack_require__(/*! ./isObject */ 43);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ }),
/* 144 */
/*!*****************************!*\
  !*** ./~/lodash/isEqual.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 63);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	module.exports = isEqual;


/***/ }),
/* 145 */
/*!*********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types","root":"PropTypes"} ***!
  \*********************************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_145__;

/***/ }),
/* 146 */
/*!****************************************!*\
  !*** ./~/react-dom-factories/index.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	(function(f) {
	  if (true) {
	    module.exports = f(__webpack_require__(/*! react */ 3));
	    /* global define */
	  } else if (typeof define === 'function' && define.amd) {
	    define(['react'], f);
	  } else {
	    var g;
	    if (typeof window !== 'undefined') {
	      g = window;
	    } else if (typeof global !== 'undefined') {
	      g = global;
	    } else if (typeof self !== 'undefined') {
	      g = self;
	    } else {
	      g = this;
	    }
	
	    if (typeof g.React === 'undefined') {
	      throw Error('React module should be required before ReactDOMFactories');
	    }
	
	    g.ReactDOMFactories = f(g.React);
	  }
	})(function(React) {
	  /**
	   * Create a factory that creates HTML tag elements.
	   */
	  function createDOMFactory(type) {
	    var factory = React.createElement.bind(null, type);
	    // Expose the type on the factory and the prototype so that it can be
	    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	    // This should not be named `constructor` since this may not be the function
	    // that created the element, and it may not even be a constructor.
	    factory.type = type;
	    return factory;
	  };
	
	  /**
	   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	   */
	  var ReactDOMFactories = {
	    a: createDOMFactory('a'),
	    abbr: createDOMFactory('abbr'),
	    address: createDOMFactory('address'),
	    area: createDOMFactory('area'),
	    article: createDOMFactory('article'),
	    aside: createDOMFactory('aside'),
	    audio: createDOMFactory('audio'),
	    b: createDOMFactory('b'),
	    base: createDOMFactory('base'),
	    bdi: createDOMFactory('bdi'),
	    bdo: createDOMFactory('bdo'),
	    big: createDOMFactory('big'),
	    blockquote: createDOMFactory('blockquote'),
	    body: createDOMFactory('body'),
	    br: createDOMFactory('br'),
	    button: createDOMFactory('button'),
	    canvas: createDOMFactory('canvas'),
	    caption: createDOMFactory('caption'),
	    cite: createDOMFactory('cite'),
	    code: createDOMFactory('code'),
	    col: createDOMFactory('col'),
	    colgroup: createDOMFactory('colgroup'),
	    data: createDOMFactory('data'),
	    datalist: createDOMFactory('datalist'),
	    dd: createDOMFactory('dd'),
	    del: createDOMFactory('del'),
	    details: createDOMFactory('details'),
	    dfn: createDOMFactory('dfn'),
	    dialog: createDOMFactory('dialog'),
	    div: createDOMFactory('div'),
	    dl: createDOMFactory('dl'),
	    dt: createDOMFactory('dt'),
	    em: createDOMFactory('em'),
	    embed: createDOMFactory('embed'),
	    fieldset: createDOMFactory('fieldset'),
	    figcaption: createDOMFactory('figcaption'),
	    figure: createDOMFactory('figure'),
	    footer: createDOMFactory('footer'),
	    form: createDOMFactory('form'),
	    h1: createDOMFactory('h1'),
	    h2: createDOMFactory('h2'),
	    h3: createDOMFactory('h3'),
	    h4: createDOMFactory('h4'),
	    h5: createDOMFactory('h5'),
	    h6: createDOMFactory('h6'),
	    head: createDOMFactory('head'),
	    header: createDOMFactory('header'),
	    hgroup: createDOMFactory('hgroup'),
	    hr: createDOMFactory('hr'),
	    html: createDOMFactory('html'),
	    i: createDOMFactory('i'),
	    iframe: createDOMFactory('iframe'),
	    img: createDOMFactory('img'),
	    input: createDOMFactory('input'),
	    ins: createDOMFactory('ins'),
	    kbd: createDOMFactory('kbd'),
	    keygen: createDOMFactory('keygen'),
	    label: createDOMFactory('label'),
	    legend: createDOMFactory('legend'),
	    li: createDOMFactory('li'),
	    link: createDOMFactory('link'),
	    main: createDOMFactory('main'),
	    map: createDOMFactory('map'),
	    mark: createDOMFactory('mark'),
	    menu: createDOMFactory('menu'),
	    menuitem: createDOMFactory('menuitem'),
	    meta: createDOMFactory('meta'),
	    meter: createDOMFactory('meter'),
	    nav: createDOMFactory('nav'),
	    noscript: createDOMFactory('noscript'),
	    object: createDOMFactory('object'),
	    ol: createDOMFactory('ol'),
	    optgroup: createDOMFactory('optgroup'),
	    option: createDOMFactory('option'),
	    output: createDOMFactory('output'),
	    p: createDOMFactory('p'),
	    param: createDOMFactory('param'),
	    picture: createDOMFactory('picture'),
	    pre: createDOMFactory('pre'),
	    progress: createDOMFactory('progress'),
	    q: createDOMFactory('q'),
	    rp: createDOMFactory('rp'),
	    rt: createDOMFactory('rt'),
	    ruby: createDOMFactory('ruby'),
	    s: createDOMFactory('s'),
	    samp: createDOMFactory('samp'),
	    script: createDOMFactory('script'),
	    section: createDOMFactory('section'),
	    select: createDOMFactory('select'),
	    small: createDOMFactory('small'),
	    source: createDOMFactory('source'),
	    span: createDOMFactory('span'),
	    strong: createDOMFactory('strong'),
	    style: createDOMFactory('style'),
	    sub: createDOMFactory('sub'),
	    summary: createDOMFactory('summary'),
	    sup: createDOMFactory('sup'),
	    table: createDOMFactory('table'),
	    tbody: createDOMFactory('tbody'),
	    td: createDOMFactory('td'),
	    textarea: createDOMFactory('textarea'),
	    tfoot: createDOMFactory('tfoot'),
	    th: createDOMFactory('th'),
	    thead: createDOMFactory('thead'),
	    time: createDOMFactory('time'),
	    title: createDOMFactory('title'),
	    tr: createDOMFactory('tr'),
	    track: createDOMFactory('track'),
	    u: createDOMFactory('u'),
	    ul: createDOMFactory('ul'),
	    var: createDOMFactory('var'),
	    video: createDOMFactory('video'),
	    wbr: createDOMFactory('wbr'),
	
	    // SVG
	    circle: createDOMFactory('circle'),
	    clipPath: createDOMFactory('clipPath'),
	    defs: createDOMFactory('defs'),
	    ellipse: createDOMFactory('ellipse'),
	    g: createDOMFactory('g'),
	    image: createDOMFactory('image'),
	    line: createDOMFactory('line'),
	    linearGradient: createDOMFactory('linearGradient'),
	    mask: createDOMFactory('mask'),
	    path: createDOMFactory('path'),
	    pattern: createDOMFactory('pattern'),
	    polygon: createDOMFactory('polygon'),
	    polyline: createDOMFactory('polyline'),
	    radialGradient: createDOMFactory('radialGradient'),
	    rect: createDOMFactory('rect'),
	    stop: createDOMFactory('stop'),
	    svg: createDOMFactory('svg'),
	    text: createDOMFactory('text'),
	    tspan: createDOMFactory('tspan'),
	  };
	
	  // due to wrapper and conditionals at the top, this will either become
	  // `module.exports ReactDOMFactories` if that is available,
	  // otherwise it will be defined via `define(['react'], ReactDOMFactories)`
	  // if that is available,
	  // otherwise it will be defined as global variable.
	  return ReactDOMFactories;
	});
	


/***/ }),
/* 147 */
/*!************************!*\
  !*** ./src/toolbar.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	/*
	QuillToolbar is deprecated. Consider switching to the official Quill
	toolbar format, or providing your own toolbar instead. 
	See https://quilljs.com/docs/modules/toolbar
	*/
	
	'use strict';
	
	var React = __webpack_require__(/*! react */ 3);
	var ReactDOMServer = __webpack_require__(/*! react-dom/server */ 148);
	var createClass = __webpack_require__(/*! create-react-class */ 5);
	var find = __webpack_require__(/*! lodash/find */ 14);
	var isEqual = __webpack_require__(/*! lodash/isEqual */ 144);
	var T = __webpack_require__(/*! prop-types */ 145);
	var DOM = __webpack_require__(/*! react-dom-factories */ 146);
	
	var defaultColors = [
		'rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
		'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
		'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
		'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
		'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
		'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
		'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
		'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
		'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
		'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
		'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
		'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)',
	].map(function(color){ return { value: color } });
	
	var defaultItems = [
	
		{ label:'Formats', type:'group', items: [
			{ label:'Font', type:'font', items: [
				{ label:'Sans Serif',  value:'sans-serif', selected:true },
				{ label:'Serif',       value:'serif' },
				{ label:'Monospace',   value:'monospace' }
			]},
			{ label:'Size', type:'size', items: [
				{ label:'Small',  value:'10px' },
				{ label:'Normal', value:'13px', selected:true },
				{ label:'Large',  value:'18px' },
				{ label:'Huge',   value:'32px' }
			]},
			{ label:'Alignment', type:'align', items: [
				{ label:'', value:'', selected:true },
				{ label:'', value:'center' },
				{ label:'', value:'right' },
				{ label:'', value:'justify' }
			]}
		]},
	
		{ label:'Text', type:'group', items: [
			{ type:'bold', label:'Bold' },
			{ type:'italic', label:'Italic' },
			{ type:'strike', label:'Strike' },
			{ type:'underline', label:'Underline' },
			{ type:'color', label:'Color', items:defaultColors },
			{ type:'background', label:'Background color', items:defaultColors },
			{ type:'link', label:'Link' }
		]},
	
		{ label:'Blocks', type:'group', items: [
			{ type:'list', value:'bullet' },
			{ type:'list', value:'ordered' }
		]},
	
		{ label:'Blocks', type:'group', items: [
			{ type:'image', label:'Image' }
		]}
	
	];
	
	var QuillToolbar = createClass({
	
		displayName: 'Quill Toolbar',
	
		propTypes: {
			id:        T.string,
			className: T.string,
			style:     T.object,
			items:     T.array
		},
	
		getDefaultProps: function() {
			return {
				items: defaultItems
			};
		},
	
		componentDidMount: function() {
			console.warn(
				'QuillToolbar is deprecated. Consider switching to the official Quill ' +
				'toolbar format, or providing your own toolbar instead. ' +
				'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v1-0-0'
			);
		},
	
		shouldComponentUpdate: function(nextProps, nextState) {
			return !isEqual(nextProps, this.props);
		},
	
		renderGroup: function(item, key) {
			return DOM.span({
				key: item.label || key,
				className:'ql-formats' },
				item.items.map(this.renderItem)
			);
		},
	
		renderChoiceItem: function(item, key) {
			return DOM.option({
				key: item.label || item.value || key,
				value: item.value },
				item.label
			);
		},
	
		renderChoices: function(item, key) {
			var choiceItems = item.items.map(this.renderChoiceItem);
			var selectedItem = find(item.items, function(item){ return item.selected });
			var attrs = {
				key: item.label || key,
				title: item.label,
				className: 'ql-'+item.type,
				value: selectedItem.value,
			};
			return DOM.select(attrs, choiceItems);
		},
	
		renderButton: function(item, key) {
			return DOM.button({
				type: 'button',
				key: item.label || item.value || key,
				value: item.value,
				className: 'ql-'+item.type,
				title: item.label },
				item.children
			);
		},
	
		renderAction: function(item, key) {
			return DOM.button({
				key: item.label || item.value || key,
				className: 'ql-'+item.type,
				title: item.label },
				item.children
			);
		},
	
		/* jshint maxcomplexity: false */
		renderItem: function(item, key) {
			switch (item.type) {
				case 'group':
					return this.renderGroup(item, key);
				case 'font':
				case 'header':
				case 'align':
				case 'size':
				case 'color':
				case 'background':
					return this.renderChoices(item, key);
				case 'bold':
				case 'italic':
				case 'underline':
				case 'strike':
				case 'link':
				case 'list':
				case 'bullet':
				case 'ordered':
				case 'indent':
				case 'image':
				case 'video':
					return this.renderButton(item, key);
				default:
					return this.renderAction(item, key);
			}
		},
	
		getClassName: function() {
			return 'quill-toolbar ' + (this.props.className||'');
		},
	
		render: function() {
			var children = this.props.items.map(this.renderItem);
			var html = children.map(ReactDOMServer.renderToStaticMarkup).join('');
			return DOM.div({
				id: this.props.id,
				className: this.getClassName(),
				style: this.props.style,
				dangerouslySetInnerHTML: { __html:html }
			});
		},
	
	});
	
	module.exports = QuillToolbar;
	QuillToolbar.defaultItems = defaultItems;
	QuillToolbar.defaultColors = defaultColors;


/***/ }),
/* 148 */
/*!********************************************************************************************************************************!*\
  !*** external {"commonjs":"react-dom/server","commonjs2":"react-dom/server","amd":"react-dom/server","root":"ReactDOMServer"} ***!
  \********************************************************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_148__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=react-quill.js.map
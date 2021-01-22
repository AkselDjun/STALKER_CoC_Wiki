/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _urban_bot_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @urban-bot/core */ \"@urban-bot/core\");\n/* harmony import */ var _urban_bot_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_urban_bot_core__WEBPACK_IMPORTED_MODULE_1__);\n // import fs from 'fs';\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_urban_bot_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], null, \"\\u0414\\u043E\\u0431\\u0440\\u043E \\u043F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C \\u0432 Stalker wiki bot. \\u0426\\u0435\\u043B\\u044C \\u043F\\u0440\\u043E\\u0435\\u043A\\u0442\\u0430 \\u043F\\u043E\\u043C\\u043E\\u0447\\u044C \\u043D\\u0430\\u0447\\u0438\\u043D\\u0430\\u044E\\u0449\\u0438\\u043C  \\u0442\\u0430\\u043B\\u043A\\u0435\\u0440\\u0430\\u043C \\u0432 \\u043F\\u0440\\u043E\\u0445\\u043E\\u0436\\u0434\\u0435\\u043D\\u0438\\u0438 \\u044D\\u0442\\u043E\\u0439 \\u0437\\u0430\\u043C\\u0435\\u0447\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0439 \\u0438\\u0433\\u0440\\u044B. \\u0423\\u0434\\u0430\\u0447\\u043D\\u043E\\u0439 \\u043E\\u0445\\u043E\\u0442\\u044B \\u0441\\u0442\\u0430\\u043B\\u043A\\u0435\\u0440\\u044B!\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcz9iZTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IFRleHR9IGZyb20gJ0B1cmJhbi1ib3QvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRleHQ+0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjCDQsiBTdGFsa2VyIHdpa2kgYm90LiDQptC10LvRjCDQv9GA0L7QtdC60YLQsCDQv9C+0LzQvtGH0Ywg0L3QsNGH0LjQvdCw0Y7RidC40LwgINGC0LDQu9C60LXRgNCw0Lwg0LIg0L/RgNC+0YXQvtC20LTQtdC90LjQuCDRjdGC0L7QuSDQt9Cw0LzQtdGH0LDRgtC10LvRjNC90L7QuSDQuNCz0YDRiy4g0KPQtNCw0YfQvdC+0Lkg0L7RhdC+0YLRiyDRgdGC0LDQu9C60LXRgNGLITwvVGV4dD5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_telegram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render/telegram */ \"./src/render/telegram.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vcmVuZGVyL3RlbGVncmFtJztcclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/render/telegram.js":
/*!********************************!*\
  !*** ./src/render/telegram.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _urban_bot_telegram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @urban-bot/telegram */ \"@urban-bot/telegram\");\n/* harmony import */ var _urban_bot_telegram__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_urban_bot_telegram__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _urban_bot_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urban-bot/core */ \"@urban-bot/core\");\n/* harmony import */ var _urban_bot_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_urban_bot_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_3___default.a.config();\nconst {\n  TELEGRAM_TOKEN,\n  PORT\n} = process.env;\nconst isDevelopment = \"development\" === 'development';\n\nif (!TELEGRAM_TOKEN) {\n  throw new Error('Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather');\n}\n\nconst urbanBotTelegram = new _urban_bot_telegram__WEBPACK_IMPORTED_MODULE_1__[\"UrbanBotTelegram\"]({\n  token: TELEGRAM_TOKEN,\n  isPolling: isDevelopment\n});\nObject(_urban_bot_core__WEBPACK_IMPORTED_MODULE_2__[\"render\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_urban_bot_core__WEBPACK_IMPORTED_MODULE_2__[\"Root\"], {\n  bot: urbanBotTelegram,\n  port: PORT ? Number(PORT) : undefined\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__[\"App\"], null)), () => console.log('telegram bot has started'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVuZGVyL3RlbGVncmFtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci90ZWxlZ3JhbS5qcz9kMGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFVyYmFuQm90VGVsZWdyYW0gfSBmcm9tICdAdXJiYW4tYm90L3RlbGVncmFtJztcclxuaW1wb3J0IHsgcmVuZGVyLCBSb290IH0gZnJvbSAnQHVyYmFuLWJvdC9jb3JlJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuLi9BcHAnO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuY29uc3QgeyBURUxFR1JBTV9UT0tFTiwgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5jb25zdCBpc0RldmVsb3BtZW50ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcblxyXG5pZiAoIVRFTEVHUkFNX1RPS0VOKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3ZpZGUgVEVMRUdSQU1fVE9LRU4gdG8gLmVudiBodHRwczovL2NvcmUudGVsZWdyYW0ub3JnL2JvdHMjNi1ib3RmYXRoZXInKTtcclxufVxyXG5cclxuY29uc3QgdXJiYW5Cb3RUZWxlZ3JhbSA9IG5ldyBVcmJhbkJvdFRlbGVncmFtKHtcclxuICAgIHRva2VuOiBURUxFR1JBTV9UT0tFTixcclxuICAgIGlzUG9sbGluZzogaXNEZXZlbG9wbWVudCxcclxufSk7XHJcblxyXG5yZW5kZXIoXHJcbiAgICA8Um9vdCBib3Q9e3VyYmFuQm90VGVsZWdyYW19IHBvcnQ9e1BPUlQgPyBOdW1iZXIoUE9SVCkgOiB1bmRlZmluZWR9PlxyXG4gICAgICAgIDxBcHAgLz5cclxuICAgIDwvUm9vdD4sXHJcbiAgICAoKSA9PiBjb25zb2xlLmxvZygndGVsZWdyYW0gYm90IGhhcyBzdGFydGVkJyksXHJcbik7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/render/telegram.js\n");

/***/ }),

/***/ "@urban-bot/core":
/*!**********************************!*\
  !*** external "@urban-bot/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@urban-bot/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQHVyYmFuLWJvdC9jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHVyYmFuLWJvdC9jb3JlXCI/YzMyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdXJiYW4tYm90L2NvcmVcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@urban-bot/core\n");

/***/ }),

/***/ "@urban-bot/telegram":
/*!**************************************!*\
  !*** external "@urban-bot/telegram" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@urban-bot/telegram\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQHVyYmFuLWJvdC90ZWxlZ3JhbS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkB1cmJhbi1ib3QvdGVsZWdyYW1cIj8yMjVkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB1cmJhbi1ib3QvdGVsZWdyYW1cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@urban-bot/telegram\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90ZW52LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCI/ZTcwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
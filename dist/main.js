/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/any-base/index.js":
/*!****************************************!*\
  !*** ./node_modules/any-base/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Converter = __webpack_require__(/*! ./src/converter */ \"./node_modules/any-base/src/converter.js\");\n\n/**\n * Function get source and destination alphabet and return convert function\n *\n * @param {string|Array} srcAlphabet\n * @param {string|Array} dstAlphabet\n *\n * @returns {function(number|Array)}\n */\nfunction anyBase(srcAlphabet, dstAlphabet) {\n    var converter = new Converter(srcAlphabet, dstAlphabet);\n    /**\n     * Convert function\n     *\n     * @param {string|Array} number\n     *\n     * @return {string|Array} number\n     */\n    return function (number) {\n        return converter.convert(number);\n    }\n};\n\nanyBase.BIN = '01';\nanyBase.OCT = '01234567';\nanyBase.DEC = '0123456789';\nanyBase.HEX = '0123456789abcdef';\n\nmodule.exports = anyBase;\n\n//# sourceURL=webpack://todo/./node_modules/any-base/index.js?");

/***/ }),

/***/ "./node_modules/any-base/src/converter.js":
/*!************************************************!*\
  !*** ./node_modules/any-base/src/converter.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Converter\n *\n * @param {string|Array} srcAlphabet\n * @param {string|Array} dstAlphabet\n * @constructor\n */\nfunction Converter(srcAlphabet, dstAlphabet) {\n    if (!srcAlphabet || !dstAlphabet || !srcAlphabet.length || !dstAlphabet.length) {\n        throw new Error('Bad alphabet');\n    }\n    this.srcAlphabet = srcAlphabet;\n    this.dstAlphabet = dstAlphabet;\n}\n\n/**\n * Convert number from source alphabet to destination alphabet\n *\n * @param {string|Array} number - number represented as a string or array of points\n *\n * @returns {string|Array}\n */\nConverter.prototype.convert = function(number) {\n    var i, divide, newlen,\n    numberMap = {},\n    fromBase = this.srcAlphabet.length,\n    toBase = this.dstAlphabet.length,\n    length = number.length,\n    result = typeof number === 'string' ? '' : [];\n\n    if (!this.isValid(number)) {\n        throw new Error('Number \"' + number + '\" contains of non-alphabetic digits (' + this.srcAlphabet + ')');\n    }\n\n    if (this.srcAlphabet === this.dstAlphabet) {\n        return number;\n    }\n\n    for (i = 0; i < length; i++) {\n        numberMap[i] = this.srcAlphabet.indexOf(number[i]);\n    }\n    do {\n        divide = 0;\n        newlen = 0;\n        for (i = 0; i < length; i++) {\n            divide = divide * fromBase + numberMap[i];\n            if (divide >= toBase) {\n                numberMap[newlen++] = parseInt(divide / toBase, 10);\n                divide = divide % toBase;\n            } else if (newlen > 0) {\n                numberMap[newlen++] = 0;\n            }\n        }\n        length = newlen;\n        result = this.dstAlphabet.slice(divide, divide + 1).concat(result);\n    } while (newlen !== 0);\n\n    return result;\n};\n\n/**\n * Valid number with source alphabet\n *\n * @param {number} number\n *\n * @returns {boolean}\n */\nConverter.prototype.isValid = function(number) {\n    var i = 0;\n    for (; i < number.length; ++i) {\n        if (this.srcAlphabet.indexOf(number[i]) === -1) {\n            return false;\n        }\n    }\n    return true;\n};\n\nmodule.exports = Converter;\n\n//# sourceURL=webpack://todo/./node_modules/any-base/src/converter.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n:root{\\n  --todoBlue: hsl(220, 80%, 50%);\\n}\\n/* contentNode */\\n\\n#content{\\n  height: 100vh;\\n  display:grid;\\n  grid-template-columns: 20vw 1fr;\\n  grid-template-rows: 30px 1fr 30px;\\n  grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"projectList taskList\\\"\\n    \\\"footer footer\\\";\\n}\\n\\n/* header */\\n\\nheader{\\n  grid-area: header;\\n  padding: .5em;\\n  background-color: hsl(220, 80%, 50%);\\n  display: flex;\\n  flex-direction: row;\\n  align-items: flex-start;\\n}\\n\\n/* projects section  */\\n\\n#projectSection{\\n  grid-area: projectList;\\n  display: grid;\\n  grid-template-columns: 1fr 3fr 1fr;\\n  grid-template-rows: 30px 1fr;\\n  grid-template-areas: \\n  \\\". headerName addButton\\\"\\n  \\\". projectList .\\\";                      ;\\n  background-color: hsl(21, 32%, 82%);\\n}\\n\\n#projectsHeaderTitle{\\n  grid-area: headerName;\\n  justify-self: center;\\n  align-self: center;\\n}\\n\\n#newProjectButton{\\n  grid-area: addButton;\\n  background:none;\\n  border:none;\\n}\\n\\n#projectsContainer{\\n  grid-area: projectList;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: flex-start;\\n  height: 100%;\\n}\\n\\n.active{\\n  text-decoration: underline;\\n}\\n\\n\\n/* tasks section */\\n\\n#taskSection{\\n  grid-area: taskList;\\n  padding: 60px;\\n}\\n\\n#tasksHeader{\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n\\n#openProjectModal{\\n  background: none;\\n  border:none;\\n  margin-right: 10px;\\n}\\n\\n/* footer */\\n\\nfooter{\\n  grid-area: footer;\\n  background-color: hsl(220, 80%, 50%);\\n}\\n\\n\\n/* project modal */\\n\\n#projectModal{\\n  width: 300px;\\n  height: 200px;\\n  padding: 10px;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n#projectModal form{\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-template-rows: 1fr 1fr 1fr;\\n  grid-template-areas: \\n  \\\"title title title\\\"\\n  \\\"name name name\\\"\\n  \\\"accept close delete\\\";\\n  background-color: var(--todoBlue);\\n}\\n\\n#projectModalTitle{\\n  grid-area: title;\\n  justify-self: center;\\n  align-self: center;\\n\\n}\\n\\n#projectModalProjectName{\\n  grid-area: name;\\n  justify-self: center;\\n  align-self: center;\\n}\\n\\n/* task modal */\\n\\n#taskModal{\\n  width: 500px;\\n  height: 400px;\\n  padding: 10px;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: var(--todoBlue);\\n}\\n\\n#taskModal form{\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr 1fr 1fr;\\n  grid-template-areas: \\n  \\\"title title\\\"\\n  \\\"name name\\\"\\n  \\\"startDate startDate\\\"\\n  \\\"endDate endDate\\\"\\n  \\\"makeTask cancel\\\";\\n  \\n  align-items: center;\\n}\\n\\n#taskModalTitle{\\n  grid-area: title;\\n  justify-self: center;\\n  align-self: center;\\n  color: white;\\n}\\n#taskModalTaskName{\\n  grid-area: name;\\n  justify-self: center;\\n  align-self: center;\\n}\\n#taskModalStartDate{\\n  grid-area: startDate;\\n  justify-self: center;\\n  align-self: center;\\n\\n}\\n#taskModalEndDate{\\n  grid-area: endDate;\\n  justify-self: center;\\n  align-self: center;\\n\\n}\\n#taskModalSubmit{\\n  grid-area: makeTask;\\n  background: none;\\n  border:none;\\n  border: 1px solid white;\\n  color: white;\\n  width: 100px;\\n  justify-self: center;\\n  align-self: center;\\n}\\n#taskModalCancel{\\n  grid-area: cancel;\\n  background: none;\\n  border:1px solid white;\\n  color: white;\\n  width: 100px;\\n  justify-self: center;\\n  align-self: center;\\n\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/short-uuid/index.js":
/*!******************************************!*\
  !*** ./node_modules/short-uuid/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Created by Samuel on 6/4/2016.\n * Simple wrapper functions to produce shorter UUIDs for cookies, maybe everything?\n */\n\nconst { v4: uuidv4 } = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\nconst anyBase = __webpack_require__(/*! any-base */ \"./node_modules/any-base/index.js\");\n\nconst flickrBase58 = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';\nconst cookieBase90 = \"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~\";\n\nconst baseOptions = {\n  consistentLength: true,\n};\n\n// A default generator, instantiated only if used.\nlet toFlickr;\n\n/**\n * Takes a UUID, strips the dashes, and translates.\n * @param {string} longId\n * @param {function(string)} translator\n * @param {Object} [paddingParams]\n * @returns {string}\n */\nconst shortenUUID = (longId, translator, paddingParams) => {\n  const translated = translator(longId.toLowerCase().replace(/-/g, ''));\n\n  if (!paddingParams || !paddingParams.consistentLength) return translated;\n\n  return translated.padStart(\n    paddingParams.shortIdLength,\n    paddingParams.paddingChar,\n  );\n};\n\n/**\n * Translate back to hex and turn back into UUID format, with dashes\n * @param {string} shortId\n * @param {function(string)} translator\n * @returns {string}\n */\nconst enlargeUUID = (shortId, translator) => {\n  const uu1 = translator(shortId).padStart(32, '0');\n\n  // Join the zero padding and the UUID and then slice it up with match\n  const m = uu1.match(/(\\w{8})(\\w{4})(\\w{4})(\\w{4})(\\w{12})/);\n\n  // Accumulate the matches and join them.\n  return [m[1], m[2], m[3], m[4], m[5]].join('-');\n};\n\n// Calculate length for the shortened ID\nconst getShortIdLength = (alphabetLength) => (\n  Math.ceil(Math.log(2 ** 128) / Math.log(alphabetLength)));\n\nmodule.exports = (() => {\n  /**\n   * @param {string} toAlphabet - Defaults to flickrBase58 if not provided\n   * @param {Object} [options]\n   *\n   * @returns {{new: (function()),\n   *  uuid: (function()),\n   *  fromUUID: (function(string)),\n   *  toUUID: (function(string)),\n   *  alphabet: (string)}}\n   */\n  const makeConvertor = (toAlphabet, options) => {\n    // Default to Flickr 58\n    const useAlphabet = toAlphabet || flickrBase58;\n\n    // Default to baseOptions\n    const selectedOptions = { ...baseOptions, ...options };\n\n    // Check alphabet for duplicate entries\n    if ([...new Set(Array.from(useAlphabet))].length !== useAlphabet.length) {\n      throw new Error('The provided Alphabet has duplicate characters resulting in unreliable results');\n    }\n\n    const shortIdLength = getShortIdLength(useAlphabet.length);\n\n    // Padding Params\n    const paddingParams = {\n      shortIdLength,\n      consistentLength: selectedOptions.consistentLength,\n      paddingChar: useAlphabet[0],\n    };\n\n    // UUIDs are in hex, so we translate to and from.\n    const fromHex = anyBase(anyBase.HEX, useAlphabet);\n    const toHex = anyBase(useAlphabet, anyBase.HEX);\n    const generate = () => shortenUUID(uuidv4(), fromHex, paddingParams);\n\n    const translator = {\n      new: generate,\n      generate,\n      uuid: uuidv4,\n      fromUUID: (uuid) => shortenUUID(uuid, fromHex, paddingParams),\n      toUUID: (shortUuid) => enlargeUUID(shortUuid, toHex),\n      alphabet: useAlphabet,\n      maxLength: shortIdLength,\n    };\n\n    Object.freeze(translator);\n\n    return translator;\n  };\n\n  // Expose the constants for other purposes.\n  makeConvertor.constants = {\n    flickrBase58,\n    cookieBase90,\n  };\n\n  // Expose the generic v4 UUID generator for convenience\n  makeConvertor.uuid = uuidv4;\n\n  // Provide a generic generator\n  makeConvertor.generate = () => {\n    if (!toFlickr) {\n      // Generate on first use;\n      toFlickr = makeConvertor(flickrBase58).generate;\n    }\n    return toFlickr();\n  };\n\n  return makeConvertor;\n})();\n\n\n//# sourceURL=webpack://todo/./node_modules/short-uuid/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NIL\": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"parse\": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   \"stringify\": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"v1\": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"v3\": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"v4\": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"v5\": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"validate\": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"version\": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ \"./node_modules/uuid/dist/esm-browser/v1.js\");\n/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ \"./node_modules/uuid/dist/esm-browser/v3.js\");\n/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ \"./node_modules/uuid/dist/esm-browser/v5.js\");\n/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ \"./node_modules/uuid/dist/esm-browser/nil.js\");\n/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ \"./node_modules/uuid/dist/esm-browser/version.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-browser/parse.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n * Browser-compatible JavaScript MD5\n *\n * Modification of JavaScript MD5\n * https://github.com/blueimp/JavaScript-MD5\n *\n * Copyright 2011, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n *\n * Based on\n * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message\n * Digest Algorithm, as defined in RFC 1321.\n * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009\n * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet\n * Distributed under the BSD License\n * See http://pajhome.org.uk/crypt/md5 for more info.\n */\nfunction md5(bytes) {\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = new Uint8Array(msg.length);\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes[i] = msg.charCodeAt(i);\n    }\n  }\n\n  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));\n}\n/*\n * Convert an array of little-endian words to an array of bytes\n */\n\n\nfunction md5ToHexEncodedArray(input) {\n  var output = [];\n  var length32 = input.length * 32;\n  var hexTab = '0123456789abcdef';\n\n  for (var i = 0; i < length32; i += 8) {\n    var x = input[i >> 5] >>> i % 32 & 0xff;\n    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);\n    output.push(hex);\n  }\n\n  return output;\n}\n/**\n * Calculate output length with padding and bit length\n */\n\n\nfunction getOutputLength(inputLength8) {\n  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;\n}\n/*\n * Calculate the MD5 of an array of little-endian words, and a bit length.\n */\n\n\nfunction wordsToMd5(x, len) {\n  /* append padding */\n  x[len >> 5] |= 0x80 << len % 32;\n  x[getOutputLength(len) - 1] = len;\n  var a = 1732584193;\n  var b = -271733879;\n  var c = -1732584194;\n  var d = 271733878;\n\n  for (var i = 0; i < x.length; i += 16) {\n    var olda = a;\n    var oldb = b;\n    var oldc = c;\n    var oldd = d;\n    a = md5ff(a, b, c, d, x[i], 7, -680876936);\n    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);\n    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n    b = md5gg(b, c, d, a, x[i], 20, -373897302);\n    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);\n    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n    d = md5hh(d, a, b, c, x[i], 11, -358537222);\n    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n    a = md5ii(a, b, c, d, x[i], 6, -198630844);\n    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n    a = safeAdd(a, olda);\n    b = safeAdd(b, oldb);\n    c = safeAdd(c, oldc);\n    d = safeAdd(d, oldd);\n  }\n\n  return [a, b, c, d];\n}\n/*\n * Convert an array bytes to an array of little-endian words\n * Characters >255 have their high-byte silently ignored.\n */\n\n\nfunction bytesToWords(input) {\n  if (input.length === 0) {\n    return [];\n  }\n\n  var length8 = input.length * 8;\n  var output = new Uint32Array(getOutputLength(length8));\n\n  for (var i = 0; i < length8; i += 8) {\n    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;\n  }\n\n  return output;\n}\n/*\n * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n * to work around bugs in some JS interpreters.\n */\n\n\nfunction safeAdd(x, y) {\n  var lsw = (x & 0xffff) + (y & 0xffff);\n  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n  return msw << 16 | lsw & 0xffff;\n}\n/*\n * Bitwise rotate a 32-bit number to the left.\n */\n\n\nfunction bitRotateLeft(num, cnt) {\n  return num << cnt | num >>> 32 - cnt;\n}\n/*\n * These functions implement the four basic operations the algorithm uses.\n */\n\n\nfunction md5cmn(q, a, b, x, s, t) {\n  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);\n}\n\nfunction md5ff(a, b, c, d, x, s, t) {\n  return md5cmn(b & c | ~b & d, a, b, x, s, t);\n}\n\nfunction md5gg(a, b, c, d, x, s, t) {\n  return md5cmn(b & d | c & ~d, a, b, x, s, t);\n}\n\nfunction md5hh(a, b, c, d, x, s, t) {\n  return md5cmn(b ^ c ^ d, a, b, x, s, t);\n}\n\nfunction md5ii(a, b, c, d, x, s, t) {\n  return md5cmn(c ^ (b | ~d), a, b, x, s, t);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/md5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/nil.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\nfunction parse(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  var v;\n  var arr = new Uint8Array(16); // Parse ########-....-....-....-............\n\n  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;\n  arr[1] = v >>> 16 & 0xff;\n  arr[2] = v >>> 8 & 0xff;\n  arr[3] = v & 0xff; // Parse ........-####-....-....-............\n\n  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;\n  arr[5] = v & 0xff; // Parse ........-....-####-....-............\n\n  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;\n  arr[7] = v & 0xff; // Parse ........-....-....-####-............\n\n  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;\n  arr[9] = v & 0xff; // Parse ........-....-....-....-############\n  // (Use \"/\" to avoid 32-bit truncation when bit-shifting high-order bytes)\n\n  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;\n  arr[11] = v / 0x100000000 & 0xff;\n  arr[12] = v >>> 24 & 0xff;\n  arr[13] = v >>> 16 & 0xff;\n  arr[14] = v >>> 8 & 0xff;\n  arr[15] = v & 0xff;\n  return arr;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/parse.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Adapted from Chris Veness' SHA1 code at\n// http://www.movable-type.co.uk/scripts/sha1.html\nfunction f(s, x, y, z) {\n  switch (s) {\n    case 0:\n      return x & y ^ ~x & z;\n\n    case 1:\n      return x ^ y ^ z;\n\n    case 2:\n      return x & y ^ x & z ^ y & z;\n\n    case 3:\n      return x ^ y ^ z;\n  }\n}\n\nfunction ROTL(x, n) {\n  return x << n | x >>> 32 - n;\n}\n\nfunction sha1(bytes) {\n  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];\n  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];\n\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = [];\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes.push(msg.charCodeAt(i));\n    }\n  } else if (!Array.isArray(bytes)) {\n    // Convert Array-like to Array\n    bytes = Array.prototype.slice.call(bytes);\n  }\n\n  bytes.push(0x80);\n  var l = bytes.length / 4 + 2;\n  var N = Math.ceil(l / 16);\n  var M = new Array(N);\n\n  for (var _i = 0; _i < N; ++_i) {\n    var arr = new Uint32Array(16);\n\n    for (var j = 0; j < 16; ++j) {\n      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];\n    }\n\n    M[_i] = arr;\n  }\n\n  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);\n  M[N - 1][14] = Math.floor(M[N - 1][14]);\n  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;\n\n  for (var _i2 = 0; _i2 < N; ++_i2) {\n    var W = new Uint32Array(80);\n\n    for (var t = 0; t < 16; ++t) {\n      W[t] = M[_i2][t];\n    }\n\n    for (var _t = 16; _t < 80; ++_t) {\n      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);\n    }\n\n    var a = H[0];\n    var b = H[1];\n    var c = H[2];\n    var d = H[3];\n    var e = H[4];\n\n    for (var _t2 = 0; _t2 < 80; ++_t2) {\n      var s = Math.floor(_t2 / 20);\n      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;\n      e = d;\n      d = c;\n      c = ROTL(b, 30) >>> 0;\n      b = a;\n      a = T;\n    }\n\n    H[0] = H[0] + a >>> 0;\n    H[1] = H[1] + b >>> 0;\n    H[2] = H[2] + c >>> 0;\n    H[3] = H[3] + d >>> 0;\n    H[4] = H[4] + e >>> 0;\n  }\n\n  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/sha1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\n\nvar _clockseq; // Previous uuid creation time\n\n\nvar _lastMSecs = 0;\nvar _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || new Array(16);\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ \"./node_modules/uuid/dist/esm-browser/md5.js\");\n\n\nvar v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/v3.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DNS\": () => (/* binding */ DNS),\n/* harmony export */   \"URL\": () => (/* binding */ URL),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-browser/parse.js\");\n\n\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  var bytes = [];\n\n  for (var i = 0; i < str.length; ++i) {\n    bytes.push(str.charCodeAt(i));\n  }\n\n  return bytes;\n}\n\nvar DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nvar URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {\n  function generateUUID(value, namespace, buf, offset) {\n    if (typeof value === 'string') {\n      value = stringToBytes(value);\n    }\n\n    if (typeof namespace === 'string') {\n      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(namespace);\n    }\n\n    if (namespace.length !== 16) {\n      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');\n    } // Compute hash of namespace and value, Per 4.3\n    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =\n    // hashfunc([...namespace, ... value])`\n\n\n    var bytes = new Uint8Array(16 + value.length);\n    bytes.set(namespace);\n    bytes.set(value, namespace.length);\n    bytes = hashfunc(bytes);\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      offset = offset || 0;\n\n      for (var i = 0; i < 16; ++i) {\n        buf[offset + i] = bytes[i];\n      }\n\n      return buf;\n    }\n\n    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(bytes);\n  } // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name; // eslint-disable-next-line no-empty\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n}\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/v35.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ \"./node_modules/uuid/dist/esm-browser/sha1.js\");\n\n\nvar v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/v5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\nfunction version(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  return parseInt(uuid.substr(14, 1), 16);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/version.js?");

/***/ }),

/***/ "./src/Database.js":
/*!*************************!*\
  !*** ./src/Database.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Database {\n  projects;\n  #storageAgent;\n  constructor(storageAgent) {\n    this.#storageAgent = storageAgent\n    this.projects = this.readStorage();\n  }\n  addTask(task, project) {\n    this.projects[this.getProjectIndex(project)].addTask(task);\n    this.writeStorage()\n  }\n  deleteTask(task, project) {\n    this.projects[this.getProjectIndex(project)].removeTask(task);\n    this.writeStorage()\n  }\n  updateTask(task, project) {\n    this.projects[this.getProjectIndex(project)].updateTask(task);\n    this.writeStorage()\n  }\n  getProjectIndex(targetProject) {\n    return this.projects.findIndex(project => project.id === targetProject.id);\n  }\n  getProjectById(id) {\n    return this.projects.find(project => project.id === id)\n  }\n  addProject(targetProject) {\n    this.projects.push(targetProject);\n    this.writeStorage();\n  }\n  removeProject(targetProject) {\n    if (this.projects.length <= 1) {\n      this.projects = []\n    } else {\n      this.projects = this.projects.filter(project => project.id !== targetProject.id);\n    }\n    this.writeStorage();\n  }\n  updateProject(targetProject) {\n    this.projects[this.getProjectIndex(targetProject)].updateProject(targetProject);\n    this.writeStorage();\n  }\n  writeStorage() {\n    if (this.#storageAgent !== null) {\n      this.#storageAgent.store(this.projects);\n    }\n  }\n  readStorage() {\n    if (this.#storageAgent !== null) {\n      return this.#storageAgent.unstore();\n    } else\n      return []\n  }\n  get lastProject(){\n    return this.projects[this.projects.length -1];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Database);\n\n//# sourceURL=webpack://todo/./src/Database.js?");

/***/ }),

/***/ "./src/HeaderDOMManager.js":
/*!*********************************!*\
  !*** ./src/HeaderDOMManager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass HeaderDOMManager {\n  #parent\n  #targetElement\n  #bodyElement\n  #headerPlaceholder\n  #footerElement\n  #mainElement\n  #headerElement\n  constructor(headerElement) {\n    this.#headerElement = headerElement;\n    this.#headerPlaceholder = document.createDocumentFragment();\n\n  }\n  make() {\n    this.#headerPlaceholder.appendChild(document.createElement(\"div\"));\n    this.#headerElement.appendChild(this.#headerPlaceholder);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderDOMManager);\n\n//# sourceURL=webpack://todo/./src/HeaderDOMManager.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var short_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! short-uuid */ \"./node_modules/short-uuid/index.js\");\n/* harmony import */ var short_uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(short_uuid__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Project {\n  name;\n  tasks;\n  constructor(name = \"new project\"){\n    this.id = this.id = short_uuid__WEBPACK_IMPORTED_MODULE_0___default().generate();\n    this.name = name;\n    this.tasks = [];\n  }\n  addTask(task){\n    this.tasks.push(task);\n  }\n  removeTask(task){\n    this.tasks = this.tasks.filter(item=> item.id !== task.id)\n  }\n  updateTask(updatedTask) {\n    const updatedTaskID = updatedTask.id;\n    const taskID = this.tasks.findIndex(task => task.id === updatedTaskID);\n    this.tasks[taskID].updateTask(updatedTask);\n  }\n  updateProject(properties){\n    if (!properties) return\n    if (Object.prototype.hasOwnProperty.call(properties, \"id\")){\n      delete properties.id; // Any attempt to change the ID of a task is strictly forbidden. Just delete it out of the object.\n    }\n    Object.entries(properties).forEach(([key,value]) => this[key] = value);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo/./src/Project.js?");

/***/ }),

/***/ "./src/ProjectDOMManager.js":
/*!**********************************!*\
  !*** ./src/ProjectDOMManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProjectDOMManager {\n  #projectsElement;\n  #projectsPlaceholder;\n  #projectsContainer\n  constructor(projectElement) {\n    this.#projectsElement = projectElement;\n    this.#projectsPlaceholder = document.createDocumentFragment();\n  }\n  make() {\n    this.#projectsPlaceholder.appendChild(document.createElement(\"p\"));\n    this.#projectsPlaceholder.lastChild.id=\"projectsHeaderTitle\";\n    this.#projectsPlaceholder.lastChild.textContent = \"projects\";\n    this.#projectsPlaceholder.appendChild(document.createElement(\"button\"));\n    this.#projectsPlaceholder.lastChild.id = \"newProjectButton\";\n    this.#projectsPlaceholder.lastChild.textContent = \"add\";\n    this.#projectsPlaceholder.lastChild.classList.add(\"material-symbols-outlined\");\n    this.#projectsPlaceholder.appendChild(document.createElement(\"div\"));\n    this.#projectsContainer = this.#projectsPlaceholder.lastChild;\n    this.#projectsContainer.id = \"projectsContainer\";\n    this.#projectsElement.appendChild(this.#projectsPlaceholder);\n    \n  }\n  populateProjectsList(projectsList){\n    this.clearProjectsList()\n    projectsList.forEach(this.createProject.bind(this))\n  }\n  createProject(project){\n    this.#projectsContainer.appendChild(document.createElement(\"div\"));\n    const projectDiv = this.#projectsContainer.lastChild;\n    projectDiv.id = project.id;\n    projectDiv.appendChild(document.createElement(\"p\"));\n    projectDiv.lastChild.textContent = project.name;\n  }\n  updateProject(project){\n    const projectElement = document.getElementById(project.id);\n    projectElement.lastChild.remove();\n    projectElement.appendChild(document.createElement(\"p\"));\n    projectElement.lastChild.textContent = project.name;\n    projectElement.lastChild.classList.add(\"active\");\n  }\n\n  clearProjectsList(){\n    while (this.#projectsContainer.firstChild){\n      this.#projectsContainer.removeChild(this.#projectsContainer.firstChild);\n    }\n  }\n  get newProjectButton(){\n    return document.getElementById(\"newProjectButton\");\n  }\n  get projectsDivs(){\n    return document.querySelectorAll(\"#projectsContainer>div\");\n  }\n  get projectNames(){\n    return document.querySelectorAll(\"#projectsContainer p\");\n  }\n  get lastProject(){\n    return document.getElementById(\"projectsContainer\").lastChild;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDOMManager);\n\n//# sourceURL=webpack://todo/./src/ProjectDOMManager.js?");

/***/ }),

/***/ "./src/ProjectModalDOMManager.js":
/*!***************************************!*\
  !*** ./src/ProjectModalDOMManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProjectModalDOMManager {\n  #projectModalElement;\n  #projectModalPlaceholder;\n  targetProject;\n  constructor(projectModalElement) {\n    this.#projectModalElement = projectModalElement;\n    this.#projectModalPlaceholder = document.createDocumentFragment();\n  }\n  make(project) {\n    this.targetProject = project;\n    this.#projectModalPlaceholder.appendChild(document.createElement(\"form\"));\n    const projectModalForm = this.#projectModalPlaceholder.lastChild;\n    projectModalForm.id = \"projectModalForm\";\n    projectModalForm.setAttribute(\"method\", \"dialog\");\n    projectModalForm.appendChild(document.createElement(\"h1\"));\n    projectModalForm.lastChild.id=\"projectModalTitle\";\n    projectModalForm.lastChild.textContent = \"Project\";\n    projectModalForm.appendChild(document.createElement(\"input\"));\n    projectModalForm.lastChild.id = \"projectModalProjectName\";\n    projectModalForm.lastChild.value = project.name;\n    projectModalForm.lastChild.name = \"name\";\n    projectModalForm.appendChild(document.createElement(\"input\"));\n    projectModalForm.lastChild.id = \"projectModalAcceptButton\";\n    projectModalForm.lastChild.type = \"submit\";\n    projectModalForm.lastChild.value = \"accept\";\n    projectModalForm.appendChild(document.createElement(\"input\"));\n    projectModalForm.lastChild.id = \"projectModalCloseButton\";\n    projectModalForm.lastChild.type = \"button\";\n    projectModalForm.lastChild.value = \"close\";\n    projectModalForm.appendChild(document.createElement(\"input\"));\n    projectModalForm.lastChild.id = \"projectModalDeleteButton\";\n    projectModalForm.lastChild.type = \"button\";\n    projectModalForm.lastChild.value = \"delete\";\n    this.#projectModalElement.appendChild(this.#projectModalPlaceholder);\n  }\n  updateTargetProject(project){\n    this.targetProject = project;\n    document.querySelector(\"#projectModalProjectName\").value = project.name;\n    this.#projectModalElement.setAttribute(\"data-projectID\", project.id);\n  }\n  get acceptButton() {\n    return document.getElementById(\"projectModalAcceptButton\");\n  }\n  get closeButton() {\n    return document.getElementById(\"projectModalCloseButton\");\n  }\n  get deleteButton(){\n    return document.getElementById(\"projectModalDeleteButton\");\n  }\n  get form(){\n    return document.getElementById(\"projectModalForm\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectModalDOMManager);\n\n//# sourceURL=webpack://todo/./src/ProjectModalDOMManager.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var short_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! short-uuid */ \"./node_modules/short-uuid/index.js\");\n/* harmony import */ var short_uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(short_uuid__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Task {\n  id;\n  name;\n  startDate;\n  endDate;\n  description;\n  status;\n  priority;\n  parentProject;\n  constructor(properties){\n    this.id = short_uuid__WEBPACK_IMPORTED_MODULE_0___default().generate();\n    this.name = \"\";\n    this.startDate = \"\";\n    this.endDate = \"\";\n    this.description = \"\";\n    this.status = \"\";\n    this.priority = \"\";\n    this.updateTask(properties);\n  }\n  updateTask(properties){\n    if (!properties) return\n    if (Object.prototype.hasOwnProperty.call(properties, \"id\")){\n      delete properties.id; // Any attempt to change the ID of a task is strictly forbidden. Just delete it out of the object.\n    }\n    Object.entries(properties).forEach(([key,value]) => this[key] = value);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo/./src/Task.js?");

/***/ }),

/***/ "./src/TaskDOMManager.js":
/*!*******************************!*\
  !*** ./src/TaskDOMManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TaskDOMManager {\n  #tasksElement;\n  #tasksPlaceholder;\n  #tasksContainer\n  constructor(taskElement) {\n    this.#tasksElement = taskElement;\n    this.#tasksPlaceholder = document.createDocumentFragment();\n  }\n  make() {\n    this.#tasksPlaceholder.appendChild(document.createElement(\"div\"));\n    const tasksHeader = this.#tasksPlaceholder.lastChild;\n    tasksHeader.id = \"tasksHeader\";\n    tasksHeader.appendChild(document.createElement(\"button\"));\n    tasksHeader.lastChild.id = \"openProjectModal\";\n    tasksHeader.lastChild.textContent = \"info\";\n    tasksHeader.lastChild.classList.add(\"material-symbols-outlined\");\n    tasksHeader.appendChild(document.createElement(\"p\"));\n    tasksHeader.lastChild.textContent = \"temp\";\n    tasksHeader.lastChild.id=\"tasksHeaderTitle\";\n    this.#tasksPlaceholder.appendChild(document.createElement(\"div\"));\n    this.#tasksContainer = this.#tasksPlaceholder.lastChild;\n    this.#tasksContainer.id = \"tasksContainer\";\n    this.#tasksPlaceholder.appendChild(document.createElement(\"button\"));\n    this.#tasksPlaceholder.lastChild.id = \"newTaskButton\";\n    this.#tasksPlaceholder.lastChild.textContent = \"Create New Task\";\n    this.#tasksElement.appendChild(this.#tasksPlaceholder);\n  }\n  populateTasksList(project){\n    document.querySelector(\"#tasksHeaderTitle\").textContent = project.name;\n    this.clearTasksList()\n    project.tasks.forEach(this.createTask.bind(this))\n  }\n  createTask(task){\n    this.#tasksContainer.appendChild(document.createElement(\"div\"));\n    const TaskDiv = this.#tasksContainer.lastChild;\n    TaskDiv.id = task.id;\n    TaskDiv.appendChild(document.createElement(\"p\"));\n    TaskDiv.lastChild.textContent = task.name;\n  }\n  clearTasksList(){\n    while (this.#tasksContainer.firstChild){\n      this.#tasksContainer.removeChild(this.#tasksContainer.firstChild);\n    }\n  }\n  get openProjectModalButton(){\n    return document.getElementById(\"openProjectModal\");\n  }\n  get createTaskButton(){\n    return document.getElementById(\"newTaskButton\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskDOMManager);\n\n//# sourceURL=webpack://todo/./src/TaskDOMManager.js?");

/***/ }),

/***/ "./src/TaskModalDOMManager.js":
/*!************************************!*\
  !*** ./src/TaskModalDOMManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TaskModalDOMManager {\n  #taskModalElement;\n  #taskModalPlaceholder;\n  targetTask;\n  constructor(taskModalElement) {\n    this.#taskModalElement = taskModalElement;\n    this.#taskModalPlaceholder = document.createDocumentFragment();\n  }\n  make() {\n    this.#taskModalPlaceholder.appendChild(document.createElement(\"form\"));\n    const taskModalForm = this.#taskModalPlaceholder.lastChild;\n    taskModalForm.id = \"taskModalForm\";\n    taskModalForm.setAttribute(\"method\", \"dialog\");\n    taskModalForm.appendChild(document.createElement(\"h1\"));\n    taskModalForm.lastChild.id=\"taskModalTitle\";\n    taskModalForm.lastChild.textContent = \"New Task\";\n    taskModalForm.appendChild(document.createElement(\"input\"));\n    taskModalForm.lastChild.id = \"taskModalTaskName\";\n    taskModalForm.lastChild.value = \"Task Name\";\n    taskModalForm.lastChild.name = \"name\";\n    taskModalForm.appendChild(document.createElement(\"input\"));\n    taskModalForm.lastChild.id = \"taskModalStartDate\";\n    taskModalForm.lastChild.type = \"date\";\n    taskModalForm.lastChild.value = \"Start Date\";\n    taskModalForm.lastChild.name = \"startDate\";\n    taskModalForm.appendChild(document.createElement(\"input\"));\n    taskModalForm.lastChild.id = \"taskModalEndDate\";\n    taskModalForm.lastChild.type = \"date\";\n    taskModalForm.lastChild.value = \"End Date\";\n    taskModalForm.lastChild.name = \"endDate\";\n    taskModalForm.appendChild(document.createElement(\"input\"));\n    taskModalForm.lastChild.id = \"taskModalSubmit\";\n    taskModalForm.lastChild.type = \"submit\";\n    taskModalForm.lastChild.value = \"Make Task\";\n    taskModalForm.appendChild(document.createElement(\"input\"));\n    taskModalForm.lastChild.id = \"taskModalCancel\";\n    taskModalForm.lastChild.type = \"button\";\n    taskModalForm.lastChild.value = \"Cancel\";\n    this.#taskModalElement.appendChild(this.#taskModalPlaceholder);\n  }\n\n  get acceptButton() {\n    return document.getElementById(\"taskModalSubmit\");\n  }\n  get cancelButton() {\n    return document.getElementById(\"taskModalCancel\");\n  }\n  get form(){\n    return document.getElementById(\"taskModalForm\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskModalDOMManager);\n\n//# sourceURL=webpack://todo/./src/TaskModalDOMManager.js?");

/***/ }),

/***/ "./src/TaskProjectLocalStorageAgent.js":
/*!*********************************************!*\
  !*** ./src/TaskProjectLocalStorageAgent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass LocalStorageAgent {\n  constructor(taskTemplate, projectTemplate, key) {\n    this.taskTemplate = taskTemplate;\n    this.projectTemplate = projectTemplate;\n    this.key = key;\n  }\n  store(array) {\n    window.localStorage.setItem(this.key, JSON.stringify(array));\n  }\n  unstore() {\n    let projects = JSON.parse(window.localStorage.getItem(this.key));\n    if (projects === null) {\n      return [new this.projectTemplate()];\n    } else {\n      return projects.map(this.reassociateProjects.bind(this));\n    }\n  }\n  reassociateProjects(project){\n    const projectReassociated = Object.assign(new this.projectTemplate(), project);\n    projectReassociated.tasks.map(task=> Object.assign(new this.taskTemplate(), task));\n    return projectReassociated\n  }\n  clear() {\n    window.localStorage.removeItem(this.key);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorageAgent);\n\n//# sourceURL=webpack://todo/./src/TaskProjectLocalStorageAgent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _Database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Database.js */ \"./src/Database.js\");\n/* harmony import */ var _TaskProjectLocalStorageAgent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskProjectLocalStorageAgent.js */ \"./src/TaskProjectLocalStorageAgent.js\");\n/* harmony import */ var _ProjectDOMManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectDOMManager.js */ \"./src/ProjectDOMManager.js\");\n/* harmony import */ var _TaskDOMManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskDOMManager.js */ \"./src/TaskDOMManager.js\");\n/* harmony import */ var _HeaderDOMManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderDOMManager.js */ \"./src/HeaderDOMManager.js\");\n/* harmony import */ var _ProjectModalDOMManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectModalDOMManager.js */ \"./src/ProjectModalDOMManager.js\");\n/* harmony import */ var _TaskModalDOMManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TaskModalDOMManager.js */ \"./src/TaskModalDOMManager.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n\n\n\nconst contentElement = document.getElementById(\"content\");\ncontentElement.appendChild(document.createElement(\"header\"));\ncontentElement.lastChild.id = \"header\";\nconst headerElement = contentElement.lastChild;\ncontentElement.appendChild(document.createElement(\"div\"));\ncontentElement.lastChild.id = \"projectSection\";\nconst projectsElement = contentElement.lastChild;\ncontentElement.appendChild(document.createElement(\"div\"));\ncontentElement.lastChild.id = \"taskSection\";\nconst tasksElement = contentElement.lastChild;\ncontentElement.appendChild(document.createElement(\"footer\"));\ncontentElement.lastChild.id = \"footer\";\nconst footerElement = contentElement.lastChild;\ndocument.body.appendChild(document.createElement(\"dialog\"))\nconst projectModalElement = document.body.lastChild;\nprojectModalElement.id = \"projectModal\";\ndocument.body.appendChild(document.createElement(\"dialog\"))\nconst taskModalElement = document.body.lastChild;\ntaskModalElement.id = \"taskModal\";\n\n\n\nconst headerDOMManager = new _HeaderDOMManager_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](headerElement);\nconst projectDOMManager = new _ProjectDOMManager_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](projectsElement);\nconst taskDOMManager = new _TaskDOMManager_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](tasksElement);\nconst projectModalDOMManager = new _ProjectModalDOMManager_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](projectModalElement);\nconst taskModalDOMManager = new _TaskModalDOMManager_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](taskModalElement);\nconst localStorageAgent = new _TaskProjectLocalStorageAgent_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"todo\");\nconst database = new _Database_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localStorageAgent);\n\nheaderDOMManager.make()\n\nprojectDOMManager.make();\nprojectDOMManager.populateProjectsList(database.projects);\n\ntaskDOMManager.make(database.projects[0].name);\ntaskDOMManager.populateTasksList(database.projects[0]);\nprojectDOMManager.projectNames[0].classList.add(\"active\");\n\nprojectModalDOMManager.make(database.projects[0]);\nprojectModalDOMManager.updateTargetProject(database.projects[0]);\n\ntaskModalDOMManager.make();\n\n\nprojectDOMManager.newProjectButton.addEventListener(\"click\", addProject);\ndocument.querySelectorAll(\"#projectsContainer>div\").forEach(div=> div.addEventListener(\"click\", showProjectTasks))\n\nfunction addProject(){\n  database.addProject(new _Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n  projectDOMManager.createProject(database.lastProject);\n  projectDOMManager.lastProject.addEventListener(\"click\", showProjectTasks)\n}\n\nfunction showProjectTasks(e){\n  projectDOMManager.projectNames.forEach(name => name.classList.remove(\"active\"));\n  this.lastChild.classList.add(\"active\");\n  projectModalDOMManager.updateTargetProject(database.getProjectById(this.id))\n  taskDOMManager.populateTasksList(database.getProjectById(this.id))\n}\n\n\ntaskDOMManager.openProjectModalButton.addEventListener(\"click\", openProjectModal);\nprojectModalDOMManager.form.addEventListener(\"submit\", updateProject);\nprojectModalDOMManager.deleteButton.addEventListener(\"click\", deleteProject);\n\nfunction openProjectModal(event){\n  projectModalElement.showModal()\n}\n\nfunction updateProject(){\n  const formData = new FormData(projectModalDOMManager.form);\n  const changed = {\"id\":projectModalDOMManager.targetProject.id ,\"name\":formData.get(\"name\")}\n  database.updateProject(changed);\n  projectDOMManager.updateProject(database.getProjectById(projectModalDOMManager.targetProject.id));\n  taskDOMManager.populateTasksList(projectModalDOMManager.targetProject);\n  projectDOMManager.projectsDivs.forEach(div=> div.addEventListener(\"click\", showProjectTasks));\n}\n\nfunction deleteProject(){\n  if (database.projects.length === 1){\n    database.removeProject(projectModalDOMManager.targetProject);\n    database.addProject(new _Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]())\n  } else {  \n    database.removeProject(projectModalDOMManager.targetProject);\n  }\n  projectModalDOMManager.updateTargetProject(database.projects[0]);\n  projectDOMManager.populateProjectsList(database.projects);\n  taskDOMManager.populateTasksList(database.projects[0]);\n  projectDOMManager.projectsDivs.forEach(div=> div.addEventListener(\"click\", showProjectTasks));\n  projectModalElement.close()\n}\ntaskDOMManager.createTaskButton.addEventListener(\"click\", ()=>taskModalElement.showModal())\ntaskModalDOMManager.form.addEventListener(\"submit\", addTask);\n\nfunction addTask(e){\n  e.preventDefault();\n  const newTask = Object.fromEntries(new FormData(taskModalDOMManager.form));\n  database.addTask(newTask, projectModalDOMManager.targetProject);\n  taskDOMManager.createTask(newTask);\n  taskModalElement.close()\n  taskModalDOMManager.form.reset()\n}\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
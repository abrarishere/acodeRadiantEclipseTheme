/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin.json */ \"./plugin.json\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nconst settings=acode.require('settings');const{editor}=editorManager;/**\n * theme name Must not contain space and must be separated by (-)\n * e.g. vscode-dark\n * one-dark\n * monokai\n */ // only modify this name and nothing else \nconst themeName=\"radiant-eclipse\";// go to style.scss and change colors there\nace.define(\"ace/theme/\".concat(themeName,\".css\"),[\"require\",\"exports\",\"module\"],function(require,exports,module){module.exports=_style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"];}),ace.define(\"ace/theme/\".concat(themeName),[\"require\",\"exports\",\"module\",\"ace/theme/\".concat(themeName,\".css\"),\"ace/lib/dom\"],function(require,exports,module){exports.isDark=!0,exports.cssClass=\"ace-\".concat(themeName),exports.cssText=require(\"./\".concat(themeName,\".css\"));const dom=require(\"../lib/dom\");dom.importCssString(exports.cssText,exports.cssClass,!1);});(function(){window.require([\"ace/theme/\"+themeName],function(m){if( true&&typeof exports==\"object\"&&module){module.exports=m;}});})();class AcodePlugin{async init(){ace.require(\"ace/ext/themelist\").themes.push({caption:themeName.split(\"-\").map(name=>name[0].toUpperCase()+name.slice(1)).join(\" \"),theme:\"ace/theme/\"+themeName,isDark:true});const currentTheme=settings.get(\"editorTheme\");if(currentTheme===themeName)editor.setTheme(\"ace/theme/\"+themeName);settings.on(\"update\",this.onThemeChange);}async destroy(){settings.off(\"update\",this.onThemeChange);}onThemeChange(value){if(value===\"ace/theme/\"+themeName){editor.setTheme(\"ace/theme/\"+themeName);settings.update({editorTheme:themeName});}}}if(window.acode){const acodePlugin=new AcodePlugin();acode.setPluginInit(_plugin_json__WEBPACK_IMPORTED_MODULE_0__.id,(baseUrl,$page,_ref)=>{let{cacheFileUrl,cacheFile}=_ref;if(!baseUrl.endsWith('/')){baseUrl+='/';}acodePlugin.baseUrl=baseUrl;acodePlugin.init($page,cacheFile,cacheFileUrl);});acode.setPluginUnmount(_plugin_json__WEBPACK_IMPORTED_MODULE_0__.id,()=>{acodePlugin.destroy();});}\n\n//# sourceURL=webpack://acode-editorTheme-template/./src/main.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\".ace-radiant-eclipse {\\n  color: #fff; /* White text color */\\n  background-color: #0e0e0e; /* Full dark background color */\\n}\\n.ace-radiant-eclipse .ace_gutter {\\n  color: #ddd; /* Light gray for line numbers */\\n}\\n.ace-radiant-eclipse .ace_gutter-active-line {\\n  color: #fff; /* White for active line numbers */\\n}\\n.ace-radiant-eclipse .ace_print-margin {\\n  width: 1px;\\n  background: #0f0f0f; /* Dark color for print margin */\\n}\\n.ace-radiant-eclipse .ace_cursor {\\n  color: #00ff00; /* Neon green cursor */\\n}\\n.ace-radiant-eclipse .ace_marker-layer .ace_selection {\\n  background: rgba(99, 99, 99, 0.4823529412); /* Dark color for selection */\\n  border-radius: 0;\\n}\\n.ace-radiant-eclipse .ace_multiselect .ace_selection.ace_start {\\n  box-shadow: 0 0 3px #00ff00; /* Neon green shadow for multi-select */\\n}\\n.ace-radiant-eclipse .ace_marker-layer .ace_step {\\n  background: #0c0c0c; /* Dark color for step marker */\\n}\\n.ace-radiant-eclipse .ace_marker-layer .ace_bracket {\\n  margin: -1px 0 0 -1px;\\n  border: 1px solid #ff0000; /* Neon red border for brackets */\\n}\\n.ace-radiant-eclipse .ace_marker-layer .ace_active-line {\\n  border: 1px solid #3a424a; /* Dark border for active line */\\n  box-sizing: border-box;\\n}\\n.ace-radiant-eclipse .ace_marker-layer .ace_selected-word {\\n  background-color: rgba(255, 255, 0, 0.3); /* Neon yellow transparent background for selected word */\\n}\\n.ace-radiant-eclipse .ace_invisible {\\n  color: #52524d; /* Dark gray for invisible text */\\n}\\n.ace-radiant-eclipse .hljs-keyword,\\n.ace-radiant-eclipse .ace_keyword {\\n  color: #ff00ff; /* Neon magenta keywords */\\n}\\n.ace-radiant-eclipse .ace_keyword.ace_operator {\\n  color: #ddd; /* White for operators */\\n}\\n.ace-radiant-eclipse .ace_constant.ace_language {\\n  color: #bd93f9; /* Neon purple for language constants */\\n}\\n.ace-radiant-eclipse .ace_constant.ace_numeric {\\n  color: #00ffff; /* Neon cyan for numeric constants */\\n}\\n.ace-radiant-eclipse .ace_constant.ace_character {\\n  color: #bd93f9; /* Neon purple for character constants */\\n}\\n.ace-radiant-eclipse .ace_constant.ace_character.ace_escape {\\n  color: #ff79c6; /* Neon pink for escape characters */\\n}\\n.ace-radiant-eclipse .ace_constant.ace_other {\\n  color: #bd93f9; /* Neon purple for other constants */\\n}\\n.ace-radiant-eclipse .hljs-title,\\n.ace-radiant-eclipse .ace_identifier {\\n  color: #aef1ff; /* Neon light blue for titles and identifiers */\\n}\\n.ace-radiant-eclipse .ace_support.ace_function {\\n  color: #00ff00; /* Neon green for function support */\\n}\\n.ace-radiant-eclipse .ace_support.ace_function.ace_dom {\\n  color: #00ff00; /* Neon green for DOM functions */\\n}\\n.ace-radiant-eclipse .ace_support.ace_constant {\\n  color: #ce9178; /* Light orange for constant support */\\n}\\n.ace-radiant-eclipse .ace_class {\\n  color: #1edac1; /* Cyan for class names */\\n}\\n.ace-radiant-eclipse .ace_variable.ace_language {\\n  color: #aef1ff; /* Neon light blue for language variables */\\n}\\n.ace-radiant-eclipse .ace_support.ace_type {\\n  color: #aef1ff; /* Neon light blue for type support */\\n}\\n.ace-radiant-eclipse .ace_meta.ace_tag {\\n  color: #57afff; /* Neon blue for meta tags */\\n}\\n.ace-radiant-eclipse .ace_storage,\\n.ace-radiant-eclipse .ace_storage.ace_type {\\n  color: #57afff; /* Neon blue for storage and types */\\n}\\n.ace-radiant-eclipse .ace_invalid {\\n  color: #ff0000; /* Neon red for invalid text */\\n  background-color: #ff79c6; /* Light pink background for invalid text */\\n}\\n.ace-radiant-eclipse .ace_invalid.ace_deprecated {\\n  color: #ff0000; /* Neon red for deprecated text */\\n  background-color: #bd93f9; /* Light purple background for deprecated text */\\n}\\n.ace-radiant-eclipse .ace_string {\\n  color: #ce9178; /* Light orange for strings */\\n}\\n.ace-radiant-eclipse .ace_comment {\\n  color: #6A9955; /* Neon green for comments */\\n}\\n.ace-radiant-eclipse .ace_variable {\\n  color: #ffcc00; /* Neon yellow for variables */\\n  text-shadow: 0 0 10px #ffcc00; /* Neon light effect for variables */\\n}\\n.ace-radiant-eclipse .ace_constant {\\n  color: #ffcc00; /* Neon yellow for constants */\\n}\\n.ace-radiant-eclipse .hljs-params,\\n.ace-radiant-eclipse .ace_variable.ace_parameter {\\n  color: #aef1ff; /* Neon light blue for function parameters */\\n}\\n.ace-radiant-eclipse .ace_entity.ace_other.ace_attribute-name {\\n  color: #aef1ff; /* Neon light blue for attribute names */\\n}\\n.ace-radiant-eclipse .ace_xml-pe.ace_xml,\\n.ace-radiant-eclipse .ace_punctuation.ace_tag {\\n  color: #999; /* Gray for XML punctuation */\\n}\\n.ace-radiant-eclipse .ace_tag-name.ace_tag,\\n.ace-radiant-eclipse .ace_entity.ace_name.ace_tag {\\n  color: #57afff; /* Neon blue for tag names */\\n}\\n.ace-radiant-eclipse .ace_paren {\\n  color: #ffcc00; /* Neon yellow for parentheses */\\n}\\n.ace-radiant-eclipse .ace_indent-guide {\\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\\n}\\n.ace-radiant-eclipse .ace_indent-guide-active {\\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\\n}\\n.ace-radiant-eclipse .ace_support.ace_constant.ace_js {\\n  color: #ffcc00; /* Neon yellow for JS constants */\\n}\\n.ace-radiant-eclipse .ace_entity.ace_name.ace_function {\\n  color: #00ff00; /* Neon green for function names */\\n}\\n.ace-radiant-eclipse .ace_support.ace_constant.ace_css-in-js {\\n  color: #ffcc00; /* Neon yellow for CSS-in-JS constants */\\n}\");\n\n//# sourceURL=webpack://acode-editorTheme-template/./src/style.scss?");

/***/ }),

/***/ "./plugin.json":
/*!*********************!*\
  !*** ./plugin.json ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"id\":\"acode.plugin.editorTheme\",\"name\":\"Editor Theme\",\"main\":\"dist/main.js\",\"version\":\"1.0.0\",\"readme\":\"readme.md\",\"icon\":\"icon.png\",\"files\":[],\"author\":{\"name\":\"Legend Sabbir\",\"email\":\"sabbirhossain.trash@gmail.com\",\"github\":\"legendSabbir\"}}');\n\n//# sourceURL=webpack://acode-editorTheme-template/./plugin.json?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
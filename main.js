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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n\n\n\n\n\n\nconsole.log(\"Working\")\n\nconst content = document.getElementById(\"content\");\nconst header = document.createElement(\"h1\");\nheader.textContent = \"To Do List\";\n\ncontent.appendChild(header);\n\nconst mySidebar = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.Sidebar)();\n\n//const mytodo = Todo(\"First to do\", \"Check out my first description\", \"goal #1\", \"wednesday\", \"Top\");\n// console.log(mytodo.title);\n// console.log(mytodo.dueDate);\n\n//const myDomController = domController();\n\n\nconst myModalController = (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.ModalController)();\nconst addTaskBtn = document.querySelector('#addBtn');\n\naddTaskBtn.addEventListener('click', () =>\n{\n    myModalController.open();\n});\n\nconst todoForm = document.querySelector('#add-todo-form');\ntodoForm.addEventListener('submit', (e) =>{\n    e.preventDefault();\n\n    const title = document.querySelector('#title-input').value;\n    const description = document.querySelector('#description-input').value;\n    const dueDate = document.querySelector('#dueDate-input').value;\n    const priority = document.querySelector('#priority-input').value;\n    const notes = document.querySelector('#notes-input').value;\n\n    const mytodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo)(title, description, dueDate, priority, notes);\n    console.log(\"Created Todo Object:\", mytodo);\n\n    todoForm.reset();\n    //mytodo.completeToggle();\n    myModalController.close();\n});\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?\n}");

/***/ },

/***/ "./src/modal.js"
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalController: () => (/* binding */ ModalController)\n/* harmony export */ });\nconst ModalController = () => {\n  const overlay = document.getElementById('modal-overlay');\n  const closeBtn = document.getElementById('close-modal');\n\n  const open = () => {\n    overlay.classList.remove('hidden'); // Show the element\n    // Small timeout ensures the transition triggers after display:block\n    setTimeout(() => overlay.classList.add('active'), 10);\n  };\n\n  const close = () => {\n    overlay.classList.remove('active');\n    // Wait for animation to finish before hiding the element\n    setTimeout(() => overlay.classList.add('hidden'), 300);\n  };\n\n  // Close when clicking X or clicking the background\n  closeBtn.addEventListener('click', close);\n  overlay.addEventListener('click', (e) => {\n    if (e.target === overlay) close();\n  });\n\n  return { open, close };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modal.js?\n}");

/***/ },

/***/ "./src/sidebar.js"
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\nconst Sidebar = () => {\n  const menu = document.getElementById('side-menu');\n  const overlay = document.getElementById('menu-overlay');\n  const toggleBtn = document.getElementById('menu-toggle');\n  const closeBtn = document.getElementById('close-menu');\n\n  const toggle = () => {\n    menu.classList.toggle('active');\n    overlay.classList.toggle('hidden');\n  };\n\n  const close = () => {\n    menu.classList.remove('active');\n    overlay.classList.add('hidden');\n  };\n\n  // Event Listeners\n  toggleBtn.addEventListener('click', toggle);\n  closeBtn.addEventListener('click', close);\n  overlay.addEventListener('click', close);\n\n  return { toggle, close };\n};\n\n// Initialize the menu\n//xconst mySidebar = Sidebar();\n\n//# sourceURL=webpack://webpack-boilerplate/./src/sidebar.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nconst Todo = (title, description, dueDate, priority, notes) =>{\n\n    let completed = false;\n    const completeToggle = () => {\n        completed = ! completed;\n    } \n\n    const getStatus = () => {\n        return completed;\n    }\n\n    return {\n        title, description, dueDate, priority, notes, getStatus, completeToggle\n    }\n    \n} \n\n//# sourceURL=webpack://webpack-boilerplate/./src/todo.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
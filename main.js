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

/***/ "./src/domController.js"
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DomController: () => (/* binding */ DomController)\n/* harmony export */ });\nconst DomController = () => {\n    const todoArea = document.getElementById(\"todo-area\");\n    const projectArea = document.getElementById(\"project-area\");\n    const renderTodo = (taskList) => {\n        todoArea.innerHTML = ``;\n\n        taskList.forEach((todo, index) => {\n            const taskCard = document.createElement(\"div\");\n            taskCard.classList.add(\"task-card\");\n\n            taskCard.innerHTML = `\n            <h3>${todo.title}<h3>\n            <p>${todo.dueDate}</p>\n            <button class = \"deleteBtn\" data-index = ${index}>Del</button>\n            `;\n            todoArea.appendChild(taskCard);\n        });\n    };\n\n    const renderProjects = (projectList) =>{\n        projectArea.innerHTML = ``;\n\n        projectList.forEach((project, index) => {\n            const projectItem = document.createElement(\"li\");\n            //projectItem.classList.add(\"\");\n            projectItem.textContent = project.getName();\n            projectItem.classList.add(\"project-link\");\n            projectItem.dataset.index = index;\n            projectArea.appendChild(projectItem);\n        });\n    };\n\n    return { renderTodo, renderProjects };\n    \n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/domController.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _domController_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domController.js */ \"./src/domController.js\");\n\n\n\n\n\n\n\n\n\nconsole.log(\"Working\")\n\nconst content = document.getElementById(\"content\");\nconst projectHeading = document.createElement(\"h1\");\nconst headingDiv = document.createElement(\"div\");\nconst addBtn = document.createElement(\"button\");\naddBtn.id = \"addBtn\";\naddBtn.textContent = \"Add new task\";\nheadingDiv.classList.add(\"heading\");\nprojectHeading.textContent = \"Home\";\n\nheadingDiv.appendChild(projectHeading);\nheadingDiv.appendChild(addBtn);\ncontent.appendChild(headingDiv);\n\n\nconst mySidebar = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.Sidebar)();\nconst myProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_4__.Project)();\nconst myDomController = (0,_domController_js__WEBPACK_IMPORTED_MODULE_6__.DomController)();\nconst myProjectManager = (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_5__.ProjectManager)();\n\n\nconst TaskModalController = (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.ModalController)('modal-overlay', 'close-modal');\nconst ProjectModalController = (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.ModalController)(\"project-overlay\", \"close-project\");\nconst addTaskBtn = document.querySelector('#addBtn');\nconst addProject = document.querySelector('#addProjectBtn');\n\n// myDomController.renderProjects();\n// myDomController.renderTodo();\n\n\naddTaskBtn.addEventListener('click', () =>\n{\n    TaskModalController.open();\n});\n\naddProject.addEventListener('click', () =>\n{\n    ProjectModalController.open();\n    mySidebar.close();\n});\n\n// switch betweenn projects\nconst switchProjects = document.querySelector('#side-menu');\nswitchProjects.addEventListener('click', (e) =>{\n    if (e.target.classList.contains('project-link')) {\n        const projectIndex = e.target.dataset.index;\n        myProjectManager.setCurrentProject(projectIndex);\n        myDomController.renderTodo(myProjectManager.getCurrentProject().getAll());\n        projectHeading.textContent = myProjectManager.getCurrentProject().getName();\n        mySidebar.close();\n    }\n});\n\n\nconst projectForm = document.querySelector('#add-project-form');\nprojectForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const projectName = document.querySelector('#projectName').value;\n    myProjectManager.add(projectName);\n    \n    projectForm.reset();\n    ProjectModalController.close();\n    myDomController.renderProjects(myProjectManager.getAll());\n});\n\n\n\nconst todoForm = document.querySelector('#add-todo-form');\ntodoForm.addEventListener('submit', (e) =>{\n    e.preventDefault();\n\n    const title = document.querySelector('#title-input').value;\n    const description = document.querySelector('#description-input').value;\n    const dueDate = document.querySelector('#dueDate-input').value;\n    const priority = document.querySelector('#priority-input').value;\n    const notes = document.querySelector('#notes-input').value;\n\n    const mytodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo)(title, description, dueDate, priority, notes);\n    console.log(\"Created Todo Object:\", mytodo);\n\n    todoForm.reset();\n    //mytodo.completeToggle();\n    TaskModalController.close();\n    const activeProject = myProjectManager.getCurrentProject();\n    activeProject.add(mytodo);\n    myDomController.renderTodo(activeProject.getAll());\n});\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?\n}");

/***/ },

/***/ "./src/modal.js"
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalController: () => (/* binding */ ModalController)\n/* harmony export */ });\nconst ModalController = (overlayId, closeBtnId) => {\n  const overlay = document.getElementById(overlayId);\n  const closeBtn = document.getElementById(closeBtnId);\n\n  const open = () => {\n    overlay.classList.remove('hidden'); // Show the element\n    // Small timeout ensures the transition triggers after display:block\n    setTimeout(() => overlay.classList.add('active'), 10);\n  };\n\n  const close = () => {\n    overlay.classList.remove('active');\n    // Wait for animation to finish before hiding the element\n    setTimeout(() => overlay.classList.add('hidden'), 300);\n  };\n\n  // Close when clicking X or clicking the background\n  closeBtn.addEventListener('click', close);\n  overlay.addEventListener('click', (e) => {\n    if (e.target === overlay) close();\n  });\n\n  return { open, close };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modal.js?\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nconst Project = (projectName) => {\n    let _todoList = [];\n    //let currProject =  projectName;\n\n    const getName = () => projectName; \n\n    const add = (newtoDo) => {\n        _todoList.push(newtoDo);\n    };\n\n    const remove = (index) =>{\n        _todoList.splice(index, 1);\n    };\n\n    \n    const getAll = () =>{\n        return [..._todoList];\n    };\n\n    return { getName, add, remove, getAll };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./src/project.js?\n}");

/***/ },

/***/ "./src/projectManager.js"
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst ProjectManager = () =>{\n\n    let _projects = [(0,_project_js__WEBPACK_IMPORTED_MODULE_0__.Project)(\"Home\")];\n    let _currentProjectIndex = 0;\n\n    const add = (name) =>{\n        const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.Project)(name);\n        _projects.push(newProject);\n    };\n\n    const getCurrentProject = () => {\n        return _projects[_currentProjectIndex];\n    };\n\n    const getAll = ()=>{\n        return[..._projects];\n    };\n\n    const setCurrentProject = (index) => {\n        _currentProjectIndex = index;\n    };\n\n    return { add, getCurrentProject, setCurrentProject, getAll};\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/projectManager.js?\n}");

/***/ },

/***/ "./src/sidebar.js"
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\nconst Sidebar = () => {\n  const menu = document.getElementById('side-menu');\n  const overlay = document.getElementById('menu-overlay');\n  const toggleBtn = document.getElementById('menu-toggle');\n  const closeBtn = document.getElementById('close-menu');\n\n  const toggle = () => {\n    menu.classList.toggle('active');\n    overlay.classList.toggle('hidden');\n  };\n\n  const close = () => {\n    menu.classList.remove('active');\n    overlay.classList.add('hidden');\n  };\n\n\n  // Event Listeners\n  toggleBtn.addEventListener('click', toggle);\n  closeBtn.addEventListener('click', close);\n  overlay.addEventListener('click', close);\n\n  return { toggle, close };\n};\n\n// Initialize the menu\n//xconst mySidebar = Sidebar();\n\n//# sourceURL=webpack://webpack-boilerplate/./src/sidebar.js?\n}");

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
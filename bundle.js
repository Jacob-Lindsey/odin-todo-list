/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/ItemDetails.js":
/*!***********************************!*\
  !*** ./components/ItemDetails.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayItemDetails": () => (/* binding */ displayItemDetails)
/* harmony export */ });

function displayItemDetails(id,todos) {
    let task = '';
    const reference = window.localStorage.getItem('todos');
    if (reference) {
        todos = JSON.parse(reference);
        const taskDetails = todos.filter(function(e) {
            return (e.id == id);
        });
        task = taskDetails[0];
    }
    
    const hiddenID = document.getElementById('hidden-id');
    hiddenID.innerHTML = id;
    document.getElementById('modal-window').style.display = 'block';
    document.querySelector('.modal-card-title').textContent = task.title + ' - ' + task.project;
    document.querySelector('.modal-card-title').value = task.title;
    document.getElementById('modal-task-title').textContent = task.title;
    document.getElementById('modal-task-title').value = task.title;
    document.getElementById('modal-details').textContent = task.details;
    document.getElementById('modal-details').value = task.details;
    document.getElementById('priority-list').value = task.priority;
    document.getElementById('date-picker').value = task.deadline;
    document.getElementById('project-selector').value = task.project;
    
    for (let i = 0; i < 5; i++) {
        if (task.category[i] == true) {
            document.getElementById(`cat${i+1}`).checked = true;
        } else {
            document.getElementById(`cat${i+1}`).checked = false;
        }
    }
}

// Pulls a specific Todo object's data to populate the modal form when opened

/***/ }),

/***/ "./components/ListItem.js":
/*!********************************!*\
  !*** ./components/ListItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItemElement": () => (/* binding */ createItemElement)
/* harmony export */ });
/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.js */ "./src/index.js");
/* harmony import */ var _ItemDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemDetails.js */ "./components/ItemDetails.js");



//=========================Todo List Item=============================

function createItemElement(item,todos) {


    const card = document.createElement('div');
    const cardHeader = document.createElement('header');
    const cardHeaderTitle = document.createElement('p');
    const deleteButton = document.createElement('button');
    const iconSpan = document.createElement('span');
    const icon = document.createElement('i');
    const checkControl = document.createElement('div');
    const checkLabel = document.createElement('label');
    const checkbox = document.createElement('input');
    const controlIndicator = document.createElement('div');

    const taskDetails = document.getElementById('modal-details');

    card.classList.add('card','my-5');
    card.setAttribute('data-key', item.id);
    cardHeader.classList.add('card-header');
    cardHeaderTitle.classList.add('card-header-title');
    cardHeaderTitle.innerHTML = item.title;
    checkControl.classList.add('controlx','control--checkbox');
    checkLabel.classList.add('checkbox');
    checkbox.setAttribute('type','checkbox');
    controlIndicator.classList.add('control__indicator');
    deleteButton.classList.add('card-header-icon');
    deleteButton.setAttribute('aria-label','delete');
    iconSpan.classList.add('icon');
    icon.classList.add('fa','fa-trash','trash-hover');
    icon.setAttribute('aria-hidden','true');

    iconSpan.addEventListener('click', (event) => {
        const getId = event.target.closest('div');
        (0,_src_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(getId.getAttribute('data-key'));
    })

    cardHeaderTitle.addEventListener('click', (event) => {
        const getId = event.target.closest('div');
        (0,_ItemDetails_js__WEBPACK_IMPORTED_MODULE_1__.displayItemDetails)(getId.getAttribute('data-key'),todos);
        document.getElementById('modal-window').style.display = 'block';
        document.getElementById('modal-window').style.opacity = '1';
        document.body.classList.add('modal-open');

    })

    checkLabel.appendChild(checkbox);
    checkLabel.appendChild(controlIndicator);
    checkControl.appendChild(checkLabel);

    iconSpan.appendChild(icon);
    deleteButton.appendChild(checkControl);
    deleteButton.appendChild(iconSpan);
    
    cardHeader.appendChild(cardHeaderTitle);
    cardHeader.appendChild(deleteButton);
    card.appendChild(cardHeader);

    if (item.priority == 'Low') {
        card.classList.add('low-priority');
    } else if (item.priority == 'Medium') {
        card.classList.add('medium-priority');
    } else if (item.priority == 'High') {
        card.classList.add('high-priority');
    } else if (item.priority == 'Urgent') {
        card.classList.add('urgent-priority');
    }

    return (card)

} 

// Builds a Todo list item

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/bulma.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/bulma.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! bulma.io v0.9.3 | MIT License | github.com/jgthms/bulma */\n/* Bulma Utilities */\n.button, .input, .textarea, .select select, .file-cta,\n.file-name, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: calc(0.75em - 1px);\n  padding-right: calc(0.75em - 1px);\n  padding-top: calc(0.5em - 1px);\n  position: relative;\n  vertical-align: top; }\n\n.button:focus, .input:focus, .textarea:focus, .select select:focus, .file-cta:focus,\n.file-name:focus, .pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus,\n.pagination-ellipsis:focus, .is-focused.button, .is-focused.input, .is-focused.textarea, .select select.is-focused, .is-focused.file-cta,\n.is-focused.file-name, .is-focused.pagination-previous,\n.is-focused.pagination-next,\n.is-focused.pagination-link,\n.is-focused.pagination-ellipsis, .button:active, .input:active, .textarea:active, .select select:active, .file-cta:active,\n.file-name:active, .pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active,\n.pagination-ellipsis:active, .is-active.button, .is-active.input, .is-active.textarea, .select select.is-active, .is-active.file-cta,\n.is-active.file-name, .is-active.pagination-previous,\n.is-active.pagination-next,\n.is-active.pagination-link,\n.is-active.pagination-ellipsis {\n  outline: none; }\n\n.button[disabled], .input[disabled], .textarea[disabled], .select select[disabled], .file-cta[disabled],\n.file-name[disabled], .pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled],\n.pagination-ellipsis[disabled],\nfieldset[disabled] .button,\nfieldset[disabled] .input,\nfieldset[disabled] .textarea,\nfieldset[disabled] .select select,\n.select fieldset[disabled] select,\nfieldset[disabled] .file-cta,\nfieldset[disabled] .file-name,\nfieldset[disabled] .pagination-previous,\nfieldset[disabled] .pagination-next,\nfieldset[disabled] .pagination-link,\nfieldset[disabled] .pagination-ellipsis {\n  cursor: not-allowed; }\n\n.button, .file, .breadcrumb, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .tabs, .is-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em; }\n\n.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .block:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .message:not(:last-child), .pagination:not(:last-child), .tabs:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.delete, .modal-close {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 9999px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n  transition: all 200ms ease; }\n\n.delete::before, .modal-close::before, .delete::after, .modal-close::after {\n  background-color: white;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center; }\n\n.delete::before, .modal-close::before {\n  height: 2px;\n  width: 50%; }\n\n.delete::after, .modal-close::after {\n  height: 50%;\n  width: 2px; }\n\n.delete:hover, .modal-close:hover, .delete:focus, .modal-close:focus {\n  background-color: rgba(10, 10, 10, 0.3);\n  transform: scale(1.4); }\n\n.delete:active, .modal-close:active {\n  background-color: rgba(10, 10, 10, 0.4); }\n\n.is-small.delete, .is-small.modal-close {\n  height: 16px;\n  max-height: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  min-width: 16px;\n  width: 16px; }\n\n.is-medium.delete, .is-medium.modal-close {\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  width: 24px; }\n\n.is-large.delete, .is-large.modal-close {\n  height: 32px;\n  max-height: 32px;\n  max-width: 32px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px; }\n\n.button.is-loading::after, .loader, .select.is-loading::after, .control.is-loading::after {\n  -webkit-animation: spinAround 500ms infinite linear;\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em; }\n\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio, .modal, .modal-background, .is-overlay, .hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.navbar-burger {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0; }\n\n/* Bulma Base */\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal; }\n\nul {\n  list-style: none; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%; }\n\niframe {\n  border: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\ntd:not([align]),\nth:not([align]) {\n  text-align: inherit; }\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  text-size-adjust: 100%; }\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\n\nbody,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace; }\n\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5; }\n\na {\n  color: #485fc7;\n  cursor: pointer;\n  text-decoration: none; }\n\na strong {\n  color: currentColor; }\n\na:hover {\n  /* color: #363636; */\n  color: #111; }\n\ncode {\n  background-color: whitesmoke;\n  color: #da1039;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em; }\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0; }\n\nimg {\n  height: auto;\n  max-width: 100%; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\n\nsmall {\n  font-size: 0.875em; }\n\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\n\nstrong {\n  color: #363636;\n  font-weight: 700; }\n\nfieldset {\n  border: none; }\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal; }\n\npre code {\n  background-color: transparent;\n  color: currentColor;\n  font-size: 1em;\n  padding: 0; }\n\ntable td,\ntable th {\n  vertical-align: top; }\n\ntable td:not([align]),\ntable th:not([align]) {\n  text-align: inherit; }\n\ntable th {\n  color: #363636; }\n\n@-webkit-keyframes spinAround {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n/* Bulma Elements */\n.box {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem; }\n\na.box:hover, a.box:focus {\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #485fc7; }\n\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #485fc7; }\n\n.button {\n  /* background-color: white; */\n  background-color: #2cb3c5;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #111;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap; }\n\n.button strong {\n  color: inherit; }\n\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n  height: 1.5em;\n  width: 1.5em; }\n\n.button .icon:first-child:not(:last-child) {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: 0.25em; }\n\n.button .icon:last-child:not(:first-child) {\n  margin-left: 0.25em;\n  margin-right: calc(-0.5em - 1px); }\n\n.button .icon:first-child:last-child {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: calc(-0.5em - 1px); }\n\n.button:hover, .button.is-hovered {\n  background-color: #1dcbe2;\n  border-color: #b5b5b5;\n  color: #363636; }\n\n.button:focus, .button.is-focused {\n  border-color: #485fc7;\n  color: #363636; }\n\n.button:focus:not(:active), .button.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25); }\n\n.button:active, .button.is-active {\n  border-color: #4a4a4a;\n  color: #363636; }\n\n.button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  color: #4a4a4a;\n  text-decoration: underline; }\n\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n  background-color: whitesmoke;\n  color: #363636; }\n\n.button.is-text:active, .button.is-text.is-active {\n  background-color: #e8e8e8;\n  color: #363636; }\n\n.button.is-text[disabled],\nfieldset[disabled] .button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-ghost {\n  background: none;\n  border-color: transparent;\n  color: #485fc7;\n  text-decoration: none; }\n\n.button.is-ghost:hover, .button.is-ghost.is-hovered {\n  color: #485fc7;\n  text-decoration: underline; }\n\n.button.is-white {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a; }\n\n.button.is-white:hover, .button.is-white.is-hovered {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a; }\n\n.button.is-white:focus, .button.is-white.is-focused {\n  border-color: transparent;\n  color: #0a0a0a; }\n\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n\n.button.is-white:active, .button.is-white.is-active {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a; }\n\n.button.is-white[disabled],\nfieldset[disabled] .button.is-white {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  color: white; }\n\n.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n  background-color: black; }\n\n.button.is-white.is-inverted[disabled],\nfieldset[disabled] .button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n  color: white; }\n\n.button.is-white.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n\n.button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white; }\n\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a; }\n\n.button.is-white.is-outlined.is-loading::after {\n  border-color: transparent transparent white white !important; }\n\n.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n\n.button.is-white.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white; }\n\n.button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a; }\n\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  color: white; }\n\n.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important; }\n\n.button.is-white.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a; }\n\n.button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white; }\n\n.button.is-black:hover, .button.is-black.is-hovered {\n  background-color: #040404;\n  border-color: transparent;\n  color: white; }\n\n.button.is-black:focus, .button.is-black.is-focused {\n  border-color: transparent;\n  color: white; }\n\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n\n.button.is-black:active, .button.is-black.is-active {\n  background-color: black;\n  border-color: transparent;\n  color: white; }\n\n.button.is-black[disabled],\nfieldset[disabled] .button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-black.is-inverted {\n  background-color: white;\n  color: #0a0a0a; }\n\n.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n  background-color: #f2f2f2; }\n\n.button.is-black.is-inverted[disabled],\nfieldset[disabled] .button.is-black.is-inverted {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n  color: #0a0a0a; }\n\n.button.is-black.is-loading::after {\n  border-color: transparent transparent white white !important; }\n\n.button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a; }\n\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white; }\n\n.button.is-black.is-outlined.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n\n.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important; }\n\n.button.is-black.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a; }\n\n.button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white; }\n\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n  background-color: white;\n  color: #0a0a0a; }\n\n.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n\n.button.is-black.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white; }\n\n.button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-light:hover, .button.is-light.is-hovered {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-light:focus, .button.is-light.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n\n.button.is-light:active, .button.is-light.is-active {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-light[disabled],\nfieldset[disabled] .button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke; }\n\n.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.button.is-light.is-inverted[disabled],\nfieldset[disabled] .button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: whitesmoke; }\n\n.button.is-light.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n\n.button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke; }\n\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-light.is-outlined.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important; }\n\n.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n\n.button.is-light.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: whitesmoke; }\n\n.button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke; }\n\n.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important; }\n\n.button.is-light.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-dark:hover, .button.is-dark.is-hovered {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-dark:focus, .button.is-dark.is-focused {\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n\n.button.is-dark:active, .button.is-dark.is-active {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-dark[disabled],\nfieldset[disabled] .button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-dark.is-inverted {\n  background-color: #fff;\n  color: #363636; }\n\n.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n  background-color: #f2f2f2; }\n\n.button.is-dark.is-inverted[disabled],\nfieldset[disabled] .button.is-dark.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #363636; }\n\n.button.is-dark.is-loading::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636; }\n\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff; }\n\n.button.is-dark.is-outlined.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important; }\n\n.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-dark.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  box-shadow: none;\n  color: #363636; }\n\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff; }\n\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #363636; }\n\n.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #363636 #363636 !important; }\n\n.button.is-dark.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff; }\n\n.button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-primary:hover, .button.is-primary.is-hovered {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-primary:focus, .button.is-primary.is-focused {\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n\n.button.is-primary:active, .button.is-primary.is-active {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-primary[disabled],\nfieldset[disabled] .button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-primary.is-inverted {\n  background-color: #fff;\n  color: #00d1b2; }\n\n.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n  background-color: #f2f2f2; }\n\n.button.is-primary.is-inverted[disabled],\nfieldset[disabled] .button.is-primary.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #00d1b2; }\n\n.button.is-primary.is-loading::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  color: #00d1b2; }\n\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff; }\n\n.button.is-primary.is-outlined.is-loading::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important; }\n\n.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-primary.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  box-shadow: none;\n  color: #00d1b2; }\n\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff; }\n\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #00d1b2; }\n\n.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important; }\n\n.button.is-primary.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff; }\n\n.button.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e; }\n\n.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n  background-color: #defffa;\n  border-color: transparent;\n  color: #00947e; }\n\n.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n  background-color: #d1fff8;\n  border-color: transparent;\n  color: #00947e; }\n\n.button.is-link {\n  background-color: #485fc7;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-link:hover, .button.is-link.is-hovered {\n  background-color: #3e56c4;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-link:focus, .button.is-link.is-focused {\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25); }\n\n.button.is-link:active, .button.is-link.is-active {\n  background-color: #3a51bb;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-link[disabled],\nfieldset[disabled] .button.is-link {\n  background-color: #485fc7;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-link.is-inverted {\n  background-color: #fff;\n  color: #485fc7; }\n\n.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n  background-color: #f2f2f2; }\n\n.button.is-link.is-inverted[disabled],\nfieldset[disabled] .button.is-link.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #485fc7; }\n\n.button.is-link.is-loading::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #485fc7;\n  color: #485fc7; }\n\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff; }\n\n.button.is-link.is-outlined.is-loading::after {\n  border-color: transparent transparent #485fc7 #485fc7 !important; }\n\n.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-link.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #485fc7;\n  box-shadow: none;\n  color: #485fc7; }\n\n.button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff; }\n\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #485fc7; }\n\n.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #485fc7 #485fc7 !important; }\n\n.button.is-link.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff; }\n\n.button.is-link.is-light {\n  background-color: #eff1fa;\n  color: #3850b7; }\n\n.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {\n  background-color: #e6e9f7;\n  border-color: transparent;\n  color: #3850b7; }\n\n.button.is-link.is-light:active, .button.is-link.is-light.is-active {\n  background-color: #dce0f4;\n  border-color: transparent;\n  color: #3850b7; }\n\n.button.is-info {\n  /* background-color: #3e8ed0; */\n  background-color: #2cb3c5;\n  border-color: transparent;\n  color: #111;\n  /* color: #fff; */ }\n\n.button.is-info:hover, .button.is-info.is-hovered {\n  background-color: #1dcbe2;\n  /* background-color: #3488ce; */\n  border-color: transparent;\n  color: #111;\n  /* color: #fff; */ }\n\n.button.is-info:focus, .button.is-info.is-focused {\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25); }\n\n.button.is-info:active, .button.is-info.is-active {\n  background-color: #3082c5;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-info[disabled],\nfieldset[disabled] .button.is-info {\n  background-color: #3e8ed0;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-info.is-inverted {\n  background-color: #fff;\n  color: #3e8ed0; }\n\n.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n  background-color: #f2f2f2; }\n\n.button.is-info.is-inverted[disabled],\nfieldset[disabled] .button.is-info.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #3e8ed0; }\n\n.button.is-info.is-loading::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3e8ed0;\n  color: #3e8ed0; }\n\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n  background-color: #3e8ed0;\n  border-color: #3e8ed0;\n  color: #fff; }\n\n.button.is-info.is-outlined.is-loading::after {\n  border-color: transparent transparent #3e8ed0 #3e8ed0 !important; }\n\n.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-info.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3e8ed0;\n  box-shadow: none;\n  color: #3e8ed0; }\n\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff; }\n\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #3e8ed0; }\n\n.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #3e8ed0 #3e8ed0 !important; }\n\n.button.is-info.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff; }\n\n.button.is-info.is-light {\n  background-color: #eff5fb;\n  color: #296fa8; }\n\n.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {\n  background-color: #e4eff9;\n  border-color: transparent;\n  color: #296fa8; }\n\n.button.is-info.is-light:active, .button.is-info.is-light.is-active {\n  background-color: #dae9f6;\n  border-color: transparent;\n  color: #296fa8; }\n\n.button.is-success {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-success:hover, .button.is-success.is-hovered {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-success:focus, .button.is-success.is-focused {\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25); }\n\n.button.is-success:active, .button.is-success.is-active {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-success[disabled],\nfieldset[disabled] .button.is-success {\n  background-color: #48c78e;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-success.is-inverted {\n  background-color: #fff;\n  color: #48c78e; }\n\n.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n  background-color: #f2f2f2; }\n\n.button.is-success.is-inverted[disabled],\nfieldset[disabled] .button.is-success.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #48c78e; }\n\n.button.is-success.is-loading::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  color: #48c78e; }\n\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff; }\n\n.button.is-success.is-outlined.is-loading::after {\n  border-color: transparent transparent #48c78e #48c78e !important; }\n\n.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-success.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  box-shadow: none;\n  color: #48c78e; }\n\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff; }\n\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #48c78e; }\n\n.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #48c78e #48c78e !important; }\n\n.button.is-success.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff; }\n\n.button.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953; }\n\n.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n  background-color: #e6f7ef;\n  border-color: transparent;\n  color: #257953; }\n\n.button.is-success.is-light:active, .button.is-success.is-light.is-active {\n  background-color: #dcf4e9;\n  border-color: transparent;\n  color: #257953; }\n\n.button.is-warning {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-warning:hover, .button.is-warning.is-hovered {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-warning:focus, .button.is-warning.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25); }\n\n.button.is-warning:active, .button.is-warning.is-active {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-warning[disabled],\nfieldset[disabled] .button.is-warning {\n  background-color: #ffe08a;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a; }\n\n.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.button.is-warning.is-inverted[disabled],\nfieldset[disabled] .button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: #ffe08a; }\n\n.button.is-warning.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n\n.button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  color: #ffe08a; }\n\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-warning.is-outlined.is-loading::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important; }\n\n.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n\n.button.is-warning.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  box-shadow: none;\n  color: #ffe08a; }\n\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a; }\n\n.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important; }\n\n.button.is-warning.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7); }\n\n.button.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00; }\n\n.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n  background-color: #fff6de;\n  border-color: transparent;\n  color: #946c00; }\n\n.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n  background-color: #fff3d1;\n  border-color: transparent;\n  color: #946c00; }\n\n.button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-danger:hover, .button.is-danger.is-hovered {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-danger:focus, .button.is-danger.is-focused {\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25); }\n\n.button.is-danger:active, .button.is-danger.is-active {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff; }\n\n.button.is-danger[disabled],\nfieldset[disabled] .button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  box-shadow: none; }\n\n.button.is-danger.is-inverted {\n  background-color: #fff;\n  color: #f14668; }\n\n.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n  background-color: #f2f2f2; }\n\n.button.is-danger.is-inverted[disabled],\nfieldset[disabled] .button.is-danger.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #f14668; }\n\n.button.is-danger.is-loading::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  color: #f14668; }\n\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff; }\n\n.button.is-danger.is-outlined.is-loading::after {\n  border-color: transparent transparent #f14668 #f14668 !important; }\n\n.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important; }\n\n.button.is-danger.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  box-shadow: none;\n  color: #f14668; }\n\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff; }\n\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #f14668; }\n\n.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #f14668 #f14668 !important; }\n\n.button.is-danger.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff; }\n\n.button.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35; }\n\n.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n  background-color: #fde0e6;\n  border-color: transparent;\n  color: #cc0f35; }\n\n.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n  background-color: #fcd4dc;\n  border-color: transparent;\n  color: #cc0f35; }\n\n.button.is-small {\n  font-size: 0.75rem; }\n\n.button.is-small:not(.is-rounded) {\n  border-radius: 2px; }\n\n.button.is-normal {\n  font-size: 1rem; }\n\n.button.is-medium {\n  font-size: 1.25rem; }\n\n.button.is-large {\n  font-size: 1.5rem; }\n\n.button[disabled],\nfieldset[disabled] .button {\n  background-color: white;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  opacity: 0.5; }\n\n.button.is-fullwidth {\n  display: flex;\n  width: 100%; }\n\n.button.is-loading {\n  color: transparent !important;\n  pointer-events: none; }\n\n.button.is-loading::after {\n  position: absolute;\n  left: calc(50% - (1em * 0.5));\n  top: calc(50% - (1em * 0.5));\n  position: absolute !important; }\n\n.button.is-static {\n  background-color: whitesmoke;\n  border-color: #dbdbdb;\n  color: #7a7a7a;\n  box-shadow: none;\n  pointer-events: none; }\n\n.button.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(1em + 0.25em);\n  padding-right: calc(1em + 0.25em); }\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n\n.buttons .button {\n  margin-bottom: 0.5rem; }\n\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n  margin-right: 0.5rem; }\n\n.buttons:last-child {\n  margin-bottom: -0.5rem; }\n\n.buttons:not(:last-child) {\n  margin-bottom: 1rem; }\n\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n  font-size: 0.75rem; }\n\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {\n  border-radius: 2px; }\n\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n  font-size: 1.25rem; }\n\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n  font-size: 1.5rem; }\n\n.buttons.has-addons .button:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.buttons.has-addons .button:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px; }\n\n.buttons.has-addons .button:last-child {\n  margin-right: 0; }\n\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n  z-index: 2; }\n\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n  z-index: 3; }\n\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n  z-index: 4; }\n\n.buttons.has-addons .button.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1; }\n\n.buttons.is-centered {\n  justify-content: center; }\n\n.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem; }\n\n.buttons.is-right {\n  justify-content: flex-end; }\n\n.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem; }\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto; }\n\n.container.is-fluid {\n  max-width: none !important;\n  padding-left: 32px;\n  padding-right: 32px;\n  width: 100%; }\n\n@media screen and (min-width: 1024px) {\n  .container {\n    max-width: 960px; } }\n\n@media screen and (max-width: 1215px) {\n  .container.is-widescreen:not(.is-max-desktop) {\n    max-width: 1152px; } }\n\n@media screen and (max-width: 1407px) {\n  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px; } }\n\n@media screen and (min-width: 1216px) {\n  .container:not(.is-max-desktop) {\n    max-width: 1152px; } }\n\n@media screen and (min-width: 1408px) {\n  .container:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px; } }\n\n.content li + li {\n  margin-top: 0.25em; }\n\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em; }\n\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125; }\n\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em; }\n\n.content h1:not(:first-child) {\n  margin-top: 1em; }\n\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em; }\n\n.content h2:not(:first-child) {\n  margin-top: 1.1428em; }\n\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em; }\n\n.content h3:not(:first-child) {\n  margin-top: 1.3333em; }\n\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em; }\n\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em; }\n\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em; }\n\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em; }\n\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n\n.content ol:not([type]) {\n  list-style-type: decimal; }\n\n.content ol:not([type]).is-lower-alpha {\n  list-style-type: lower-alpha; }\n\n.content ol:not([type]).is-lower-roman {\n  list-style-type: lower-roman; }\n\n.content ol:not([type]).is-upper-alpha {\n  list-style-type: upper-alpha; }\n\n.content ol:not([type]).is-upper-roman {\n  list-style-type: upper-roman; }\n\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em; }\n\n.content ul ul ul {\n  list-style-type: square; }\n\n.content dd {\n  margin-left: 2em; }\n\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center; }\n\n.content figure:not(:first-child) {\n  margin-top: 2em; }\n\n.content figure:not(:last-child) {\n  margin-bottom: 2em; }\n\n.content figure img {\n  display: inline-block; }\n\n.content figure figcaption {\n  font-style: italic; }\n\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal; }\n\n.content sup,\n.content sub {\n  font-size: 75%; }\n\n.content table {\n  width: 100%; }\n\n.content table td,\n.content table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top; }\n\n.content table th {\n  color: #363636; }\n\n.content table th:not([align]) {\n  text-align: inherit; }\n\n.content table thead td,\n.content table thead th {\n  border-width: 0 0 2px;\n  color: #363636; }\n\n.content table tfoot td,\n.content table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636; }\n\n.content table tbody tr:last-child td,\n.content table tbody tr:last-child th {\n  border-bottom-width: 0; }\n\n.content .tabs li + li {\n  margin-top: 0; }\n\n.content.is-small {\n  font-size: 0.75rem; }\n\n.content.is-normal {\n  font-size: 1rem; }\n\n.content.is-medium {\n  font-size: 1.25rem; }\n\n.content.is-large {\n  font-size: 1.5rem; }\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem; }\n\n.icon.is-small {\n  height: 1rem;\n  width: 1rem; }\n\n.icon.is-medium {\n  height: 2rem;\n  width: 2rem; }\n\n.icon.is-large {\n  height: 3rem;\n  width: 3rem; }\n\n.icon-text {\n  align-items: flex-start;\n  color: inherit;\n  display: inline-flex;\n  flex-wrap: wrap;\n  line-height: 1.5rem;\n  vertical-align: top; }\n\n.icon-text .icon {\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.icon-text .icon:not(:last-child) {\n  margin-right: 0.25em; }\n\n.icon-text .icon:not(:first-child) {\n  margin-left: 0.25em; }\n\ndiv.icon-text {\n  display: flex; }\n\n.image {\n  display: block;\n  position: relative; }\n\n.image img {\n  display: block;\n  height: auto;\n  width: 100%; }\n\n.image img.is-rounded {\n  border-radius: 9999px; }\n\n.image.is-fullwidth {\n  width: 100%; }\n\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  height: 100%;\n  width: 100%; }\n\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%; }\n\n.image.is-5by4 {\n  padding-top: 80%; }\n\n.image.is-4by3 {\n  padding-top: 75%; }\n\n.image.is-3by2 {\n  padding-top: 66.6666%; }\n\n.image.is-5by3 {\n  padding-top: 60%; }\n\n.image.is-16by9 {\n  padding-top: 56.25%; }\n\n.image.is-2by1 {\n  padding-top: 50%; }\n\n.image.is-3by1 {\n  padding-top: 33.3333%; }\n\n.image.is-4by5 {\n  padding-top: 125%; }\n\n.image.is-3by4 {\n  padding-top: 133.3333%; }\n\n.image.is-2by3 {\n  padding-top: 150%; }\n\n.image.is-3by5 {\n  padding-top: 166.6666%; }\n\n.image.is-9by16 {\n  padding-top: 177.7777%; }\n\n.image.is-1by2 {\n  padding-top: 200%; }\n\n.image.is-1by3 {\n  padding-top: 300%; }\n\n.image.is-16x16 {\n  height: 16px;\n  width: 16px; }\n\n.image.is-24x24 {\n  height: 24px;\n  width: 24px; }\n\n.image.is-32x32 {\n  height: 32px;\n  width: 32px; }\n\n.image.is-48x48 {\n  height: 48px;\n  width: 48px; }\n\n.image.is-64x64 {\n  height: 64px;\n  width: 64px; }\n\n.image.is-96x96 {\n  height: 96px;\n  width: 96px; }\n\n.image.is-128x128 {\n  height: 128px;\n  width: 128px; }\n\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  position: relative;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem; }\n\n.notification a:not(.button):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline; }\n\n.notification strong {\n  color: currentColor; }\n\n.notification code,\n.notification pre {\n  background: white; }\n\n.notification pre code {\n  background: transparent; }\n\n.notification > .delete {\n  right: 0.5rem;\n  position: absolute;\n  top: 0.5rem; }\n\n.notification .title,\n.notification .subtitle,\n.notification .content {\n  color: currentColor; }\n\n.notification.is-white {\n  background-color: white;\n  color: #0a0a0a; }\n\n.notification.is-black {\n  background-color: #0a0a0a;\n  color: white; }\n\n.notification.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7); }\n\n.notification.is-dark {\n  background-color: #363636;\n  color: #fff; }\n\n.notification.is-primary {\n  background-color: #00d1b2;\n  color: #fff; }\n\n.notification.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e; }\n\n.notification.is-link {\n  background-color: #485fc7;\n  color: #fff; }\n\n.notification.is-link.is-light {\n  background-color: #eff1fa;\n  color: #3850b7; }\n\n.notification.is-info {\n  background-color: #3e8ed0;\n  color: #fff; }\n\n.notification.is-info.is-light {\n  background-color: #eff5fb;\n  color: #296fa8; }\n\n.notification.is-success {\n  background-color: #48c78e;\n  color: #fff; }\n\n.notification.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953; }\n\n.notification.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7); }\n\n.notification.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00; }\n\n.notification.is-danger {\n  background-color: #f14668;\n  color: #fff; }\n\n.notification.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35; }\n\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 9999px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%; }\n\n.progress::-webkit-progress-bar {\n  background-color: #ededed; }\n\n.progress::-webkit-progress-value {\n  background-color: #4a4a4a; }\n\n.progress::-moz-progress-bar {\n  background-color: #4a4a4a; }\n\n.progress::-ms-fill {\n  background-color: #4a4a4a;\n  border: none; }\n\n.progress.is-white::-webkit-progress-value {\n  background-color: white; }\n\n.progress.is-white::-moz-progress-bar {\n  background-color: white; }\n\n.progress.is-white::-ms-fill {\n  background-color: white; }\n\n.progress.is-white:indeterminate {\n  background-image: linear-gradient(to right, white 30%, #ededed 30%); }\n\n.progress.is-black::-webkit-progress-value {\n  background-color: #0a0a0a; }\n\n.progress.is-black::-moz-progress-bar {\n  background-color: #0a0a0a; }\n\n.progress.is-black::-ms-fill {\n  background-color: #0a0a0a; }\n\n.progress.is-black:indeterminate {\n  background-image: linear-gradient(to right, #0a0a0a 30%, #ededed 30%); }\n\n.progress.is-light::-webkit-progress-value {\n  background-color: whitesmoke; }\n\n.progress.is-light::-moz-progress-bar {\n  background-color: whitesmoke; }\n\n.progress.is-light::-ms-fill {\n  background-color: whitesmoke; }\n\n.progress.is-light:indeterminate {\n  background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%); }\n\n.progress.is-dark::-webkit-progress-value {\n  background-color: #363636; }\n\n.progress.is-dark::-moz-progress-bar {\n  background-color: #363636; }\n\n.progress.is-dark::-ms-fill {\n  background-color: #363636; }\n\n.progress.is-dark:indeterminate {\n  background-image: linear-gradient(to right, #363636 30%, #ededed 30%); }\n\n.progress.is-primary::-webkit-progress-value {\n  background-color: #00d1b2; }\n\n.progress.is-primary::-moz-progress-bar {\n  background-color: #00d1b2; }\n\n.progress.is-primary::-ms-fill {\n  background-color: #00d1b2; }\n\n.progress.is-primary:indeterminate {\n  background-image: linear-gradient(to right, #00d1b2 30%, #ededed 30%); }\n\n.progress.is-link::-webkit-progress-value {\n  background-color: #485fc7; }\n\n.progress.is-link::-moz-progress-bar {\n  background-color: #485fc7; }\n\n.progress.is-link::-ms-fill {\n  background-color: #485fc7; }\n\n.progress.is-link:indeterminate {\n  background-image: linear-gradient(to right, #485fc7 30%, #ededed 30%); }\n\n.progress.is-info::-webkit-progress-value {\n  background-color: #3e8ed0; }\n\n.progress.is-info::-moz-progress-bar {\n  background-color: #3e8ed0; }\n\n.progress.is-info::-ms-fill {\n  background-color: #3e8ed0; }\n\n.progress.is-info:indeterminate {\n  background-image: linear-gradient(to right, #3e8ed0 30%, #ededed 30%); }\n\n.progress.is-success::-webkit-progress-value {\n  background-color: #48c78e; }\n\n.progress.is-success::-moz-progress-bar {\n  background-color: #48c78e; }\n\n.progress.is-success::-ms-fill {\n  background-color: #48c78e; }\n\n.progress.is-success:indeterminate {\n  background-image: linear-gradient(to right, #48c78e 30%, #ededed 30%); }\n\n.progress.is-warning::-webkit-progress-value {\n  background-color: #ffe08a; }\n\n.progress.is-warning::-moz-progress-bar {\n  background-color: #ffe08a; }\n\n.progress.is-warning::-ms-fill {\n  background-color: #ffe08a; }\n\n.progress.is-warning:indeterminate {\n  background-image: linear-gradient(to right, #ffe08a 30%, #ededed 30%); }\n\n.progress.is-danger::-webkit-progress-value {\n  background-color: #f14668; }\n\n.progress.is-danger::-moz-progress-bar {\n  background-color: #f14668; }\n\n.progress.is-danger::-ms-fill {\n  background-color: #f14668; }\n\n.progress.is-danger:indeterminate {\n  background-image: linear-gradient(to right, #f14668 30%, #ededed 30%); }\n\n.progress:indeterminate {\n  -webkit-animation-duration: 1.5s;\n  animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: moveIndeterminate;\n  animation-name: moveIndeterminate;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  background-color: #ededed;\n  background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 150% 150%; }\n\n.progress:indeterminate::-webkit-progress-bar {\n  background-color: transparent; }\n\n.progress:indeterminate::-moz-progress-bar {\n  background-color: transparent; }\n\n.progress:indeterminate::-ms-fill {\n  animation-name: none; }\n\n.progress.is-small {\n  height: 0.75rem; }\n\n.progress.is-medium {\n  height: 1.25rem; }\n\n.progress.is-large {\n  height: 1.5rem; }\n\n@-webkit-keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0; }\n  to {\n    background-position: -200% 0; } }\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0; }\n  to {\n    background-position: -200% 0; } }\n\n.table {\n  background-color: white;\n  color: #363636; }\n\n.table td,\n.table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top; }\n\n.table td.is-white,\n.table th.is-white {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a; }\n\n.table td.is-black,\n.table th.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white; }\n\n.table td.is-light,\n.table th.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7); }\n\n.table td.is-dark,\n.table th.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff; }\n\n.table td.is-primary,\n.table th.is-primary {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff; }\n\n.table td.is-link,\n.table th.is-link {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff; }\n\n.table td.is-info,\n.table th.is-info {\n  background-color: #3e8ed0;\n  border-color: #3e8ed0;\n  color: #fff; }\n\n.table td.is-success,\n.table th.is-success {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff; }\n\n.table td.is-warning,\n.table th.is-warning {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7); }\n\n.table td.is-danger,\n.table th.is-danger {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff; }\n\n.table td.is-narrow,\n.table th.is-narrow {\n  white-space: nowrap;\n  width: 1%; }\n\n.table td.is-selected,\n.table th.is-selected {\n  background-color: #00d1b2;\n  color: #fff; }\n\n.table td.is-selected a,\n.table td.is-selected strong,\n.table th.is-selected a,\n.table th.is-selected strong {\n  color: currentColor; }\n\n.table td.is-vcentered,\n.table th.is-vcentered {\n  vertical-align: middle; }\n\n.table th {\n  color: #363636; }\n\n.table th:not([align]) {\n  text-align: inherit; }\n\n.table tr.is-selected {\n  background-color: #00d1b2;\n  color: #fff; }\n\n.table tr.is-selected a,\n.table tr.is-selected strong {\n  color: currentColor; }\n\n.table tr.is-selected td,\n.table tr.is-selected th {\n  border-color: #fff;\n  color: currentColor; }\n\n.table thead {\n  background-color: transparent; }\n\n.table thead td,\n.table thead th {\n  border-width: 0 0 2px;\n  color: #363636; }\n\n.table tfoot {\n  background-color: transparent; }\n\n.table tfoot td,\n.table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636; }\n\n.table tbody {\n  background-color: transparent; }\n\n.table tbody tr:last-child td,\n.table tbody tr:last-child th {\n  border-bottom-width: 0; }\n\n.table.is-bordered td,\n.table.is-bordered th {\n  border-width: 1px; }\n\n.table.is-bordered tr:last-child td,\n.table.is-bordered tr:last-child th {\n  border-bottom-width: 1px; }\n\n.table.is-fullwidth {\n  width: 100%; }\n\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n  background-color: #fafafa; }\n\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n  background-color: #fafafa; }\n\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n  background-color: whitesmoke; }\n\n.table.is-narrow td,\n.table.is-narrow th {\n  padding: 0.25em 0.5em; }\n\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n  background-color: #fafafa; }\n\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%; }\n\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n\n.tags .tag {\n  margin-bottom: 0.5rem; }\n\n.tags .tag:not(:last-child) {\n  margin-right: 0.5rem; }\n\n.tags:last-child {\n  margin-bottom: -0.5rem; }\n\n.tags:not(:last-child) {\n  margin-bottom: 1rem; }\n\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n  font-size: 1rem; }\n\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n  font-size: 1.25rem; }\n\n.tags.is-centered {\n  justify-content: center; }\n\n.tags.is-centered .tag {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem; }\n\n.tags.is-right {\n  justify-content: flex-end; }\n\n.tags.is-right .tag:not(:first-child) {\n  margin-left: 0.5rem; }\n\n.tags.is-right .tag:not(:last-child) {\n  margin-right: 0; }\n\n.tags.has-addons .tag {\n  margin-right: 0; }\n\n.tags.has-addons .tag:not(:first-child) {\n  margin-left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.tags.has-addons .tag:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap; }\n\n.tag:not(body) .delete {\n  margin-left: 0.25rem;\n  margin-right: -0.375rem; }\n\n.tag:not(body).is-white {\n  background-color: white;\n  color: #0a0a0a; }\n\n.tag:not(body).is-black {\n  background-color: #0a0a0a;\n  color: white; }\n\n.tag:not(body).is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7); }\n\n.tag:not(body).is-dark {\n  background-color: #363636;\n  color: #fff; }\n\n.tag:not(body).is-primary {\n  background-color: #00d1b2;\n  color: #fff; }\n\n.tag:not(body).is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e; }\n\n.tag:not(body).is-link {\n  background-color: #485fc7;\n  color: #fff; }\n\n.tag:not(body).is-link.is-light {\n  background-color: #eff1fa;\n  color: #3850b7; }\n\n.tag:not(body).is-info {\n  background-color: #3e8ed0;\n  color: #fff; }\n\n.tag:not(body).is-info.is-light {\n  background-color: #eff5fb;\n  color: #296fa8; }\n\n.tag:not(body).is-success {\n  background-color: #48c78e;\n  color: #fff; }\n\n.tag:not(body).is-success.is-light {\n  background-color: #effaf5;\n  color: #257953; }\n\n.tag:not(body).is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7); }\n\n.tag:not(body).is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00; }\n\n.tag:not(body).is-danger {\n  background-color: #f14668;\n  color: #fff; }\n\n.tag:not(body).is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35; }\n\n.tag:not(body).is-normal {\n  font-size: 0.75rem; }\n\n.tag:not(body).is-medium {\n  font-size: 1rem; }\n\n.tag:not(body).is-large {\n  font-size: 1.25rem; }\n\n.tag:not(body) .icon:first-child:not(:last-child) {\n  margin-left: -0.375em;\n  margin-right: 0.1875em; }\n\n.tag:not(body) .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: -0.375em; }\n\n.tag:not(body) .icon:first-child:last-child {\n  margin-left: -0.375em;\n  margin-right: -0.375em; }\n\n.tag:not(body).is-delete {\n  margin-left: 1px;\n  padding: 0;\n  position: relative;\n  width: 2em; }\n\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n  background-color: currentColor;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center; }\n\n.tag:not(body).is-delete::before {\n  height: 1px;\n  width: 50%; }\n\n.tag:not(body).is-delete::after {\n  height: 50%;\n  width: 1px; }\n\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n  background-color: #e8e8e8; }\n\n.tag:not(body).is-delete:active {\n  background-color: #dbdbdb; }\n\n.tag:not(body).is-rounded {\n  border-radius: 9999px; }\n\na.tag:hover {\n  text-decoration: underline; }\n\n.title,\n.subtitle {\n  word-break: break-word; }\n\n.title em,\n.title span,\n.subtitle em,\n.subtitle span {\n  font-weight: inherit; }\n\n.title sub,\n.subtitle sub {\n  font-size: 0.75em; }\n\n.title sup,\n.subtitle sup {\n  font-size: 0.75em; }\n\n.title .tag,\n.subtitle .tag {\n  vertical-align: middle; }\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125; }\n\n.title strong {\n  color: inherit;\n  font-weight: inherit; }\n\n.title:not(.is-spaced) + .subtitle {\n  margin-top: -1.25rem; }\n\n.title.is-1 {\n  font-size: 3rem; }\n\n.title.is-2 {\n  font-size: 2.5rem; }\n\n.title.is-3 {\n  font-size: 2rem; }\n\n.title.is-4 {\n  font-size: 1.5rem; }\n\n.title.is-5 {\n  font-size: 1.25rem; }\n\n.title.is-6 {\n  font-size: 1rem; }\n\n.title.is-7 {\n  font-size: 0.75rem; }\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25; }\n\n.subtitle strong {\n  color: #363636;\n  font-weight: 600; }\n\n.subtitle:not(.is-spaced) + .title {\n  margin-top: -1.25rem; }\n\n.subtitle.is-1 {\n  font-size: 3rem; }\n\n.subtitle.is-2 {\n  font-size: 2.5rem; }\n\n.subtitle.is-3 {\n  font-size: 2rem; }\n\n.subtitle.is-4 {\n  font-size: 1.5rem; }\n\n.subtitle.is-5 {\n  font-size: 1.25rem; }\n\n.subtitle.is-6 {\n  font-size: 1rem; }\n\n.subtitle.is-7 {\n  font-size: 0.75rem; }\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 9999px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top; }\n\n/* Bulma Form */\n.input, .textarea, .select select {\n  /* background-color: white; */\n  background-color: #1b2d53;\n  border-color: #2cb3c550;\n  border-radius: 4px;\n  /* color: #363636; */\n  color: #d9d9d9; }\n\n.input::-moz-placeholder, .textarea::-moz-placeholder, .select select::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3); }\n\n.input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .select select::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3); }\n\n.input:-moz-placeholder, .textarea:-moz-placeholder, .select select:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3); }\n\n.input:-ms-input-placeholder, .textarea:-ms-input-placeholder, .select select:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3); }\n\n.input:hover, .textarea:hover, .select select:hover, .is-hovered.input, .is-hovered.textarea, .select select.is-hovered {\n  border-color: #b5b5b5; }\n\n.input:focus, .textarea:focus, .select select:focus, .is-focused.input, .is-focused.textarea, .select select.is-focused, .input:active, .textarea:active, .select select:active, .is-active.input, .is-active.textarea, .select select.is-active {\n  border-color: #485fc7;\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25); }\n\n.input[disabled], .textarea[disabled], .select select[disabled],\nfieldset[disabled] .input,\nfieldset[disabled] .textarea,\nfieldset[disabled] .select select,\n.select fieldset[disabled] select {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: #7a7a7a; }\n\n.input[disabled]::-moz-placeholder, .textarea[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder,\nfieldset[disabled] .input::-moz-placeholder,\nfieldset[disabled] .textarea::-moz-placeholder,\nfieldset[disabled] .select select::-moz-placeholder,\n.select fieldset[disabled] select::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3); }\n\n.input[disabled]::-webkit-input-placeholder, .textarea[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder,\nfieldset[disabled] .input::-webkit-input-placeholder,\nfieldset[disabled] .textarea::-webkit-input-placeholder,\nfieldset[disabled] .select select::-webkit-input-placeholder,\n.select fieldset[disabled] select::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3); }\n\n.input[disabled]:-moz-placeholder, .textarea[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder,\nfieldset[disabled] .input:-moz-placeholder,\nfieldset[disabled] .textarea:-moz-placeholder,\nfieldset[disabled] .select select:-moz-placeholder,\n.select fieldset[disabled] select:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3); }\n\n.input[disabled]:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder,\nfieldset[disabled] .input:-ms-input-placeholder,\nfieldset[disabled] .textarea:-ms-input-placeholder,\nfieldset[disabled] .select select:-ms-input-placeholder,\n.select fieldset[disabled] select:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3); }\n\n.input, .textarea {\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n  max-width: 100%;\n  width: 100%; }\n\n.input[readonly], .textarea[readonly] {\n  box-shadow: none; }\n\n.is-white.input, .is-white.textarea {\n  border-color: white; }\n\n.is-white.input:focus, .is-white.textarea:focus, .is-white.is-focused.input, .is-white.is-focused.textarea, .is-white.input:active, .is-white.textarea:active, .is-white.is-active.input, .is-white.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n\n.is-black.input, .is-black.textarea {\n  border-color: #0a0a0a; }\n\n.is-black.input:focus, .is-black.textarea:focus, .is-black.is-focused.input, .is-black.is-focused.textarea, .is-black.input:active, .is-black.textarea:active, .is-black.is-active.input, .is-black.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n\n.is-light.input, .is-light.textarea {\n  border-color: whitesmoke; }\n\n.is-light.input:focus, .is-light.textarea:focus, .is-light.is-focused.input, .is-light.is-focused.textarea, .is-light.input:active, .is-light.textarea:active, .is-light.is-active.input, .is-light.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n\n.is-dark.input, .is-dark.textarea {\n  border-color: #363636; }\n\n.is-dark.input:focus, .is-dark.textarea:focus, .is-dark.is-focused.input, .is-dark.is-focused.textarea, .is-dark.input:active, .is-dark.textarea:active, .is-dark.is-active.input, .is-dark.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n\n.is-primary.input, .is-primary.textarea {\n  border-color: #00d1b2; }\n\n.is-primary.input:focus, .is-primary.textarea:focus, .is-primary.is-focused.input, .is-primary.is-focused.textarea, .is-primary.input:active, .is-primary.textarea:active, .is-primary.is-active.input, .is-primary.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n\n.is-link.input, .is-link.textarea {\n  border-color: #485fc7; }\n\n.is-link.input:focus, .is-link.textarea:focus, .is-link.is-focused.input, .is-link.is-focused.textarea, .is-link.input:active, .is-link.textarea:active, .is-link.is-active.input, .is-link.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25); }\n\n.is-info.input, .is-info.textarea {\n  border-color: #3e8ed0; }\n\n.is-info.input:focus, .is-info.textarea:focus, .is-info.is-focused.input, .is-info.is-focused.textarea, .is-info.input:active, .is-info.textarea:active, .is-info.is-active.input, .is-info.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25); }\n\n.is-success.input, .is-success.textarea {\n  border-color: #48c78e; }\n\n.is-success.input:focus, .is-success.textarea:focus, .is-success.is-focused.input, .is-success.is-focused.textarea, .is-success.input:active, .is-success.textarea:active, .is-success.is-active.input, .is-success.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25); }\n\n.is-warning.input, .is-warning.textarea {\n  border-color: #ffe08a; }\n\n.is-warning.input:focus, .is-warning.textarea:focus, .is-warning.is-focused.input, .is-warning.is-focused.textarea, .is-warning.input:active, .is-warning.textarea:active, .is-warning.is-active.input, .is-warning.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25); }\n\n.is-danger.input, .is-danger.textarea {\n  border-color: #f14668; }\n\n.is-danger.input:focus, .is-danger.textarea:focus, .is-danger.is-focused.input, .is-danger.is-focused.textarea, .is-danger.input:active, .is-danger.textarea:active, .is-danger.is-active.input, .is-danger.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25); }\n\n.is-small.input, .is-small.textarea {\n  border-radius: 2px;\n  font-size: 0.75rem; }\n\n.is-medium.input, .is-medium.textarea {\n  font-size: 1.25rem; }\n\n.is-large.input, .is-large.textarea {\n  font-size: 1.5rem; }\n\n.is-fullwidth.input, .is-fullwidth.textarea {\n  display: block;\n  width: 100%; }\n\n.is-inline.input, .is-inline.textarea {\n  display: inline;\n  width: auto; }\n\n.input.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(calc(0.75em - 1px) + 0.375em);\n  padding-right: calc(calc(0.75em - 1px) + 0.375em); }\n\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0; }\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: calc(0.75em - 1px);\n  resize: vertical; }\n\n.textarea:not([rows]) {\n  max-height: 40em;\n  min-height: 8em; }\n\n.textarea[rows] {\n  height: initial; }\n\n.textarea.has-fixed-size {\n  resize: none; }\n\n.checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative; }\n\n.checkbox input, .radio input {\n  cursor: pointer; }\n\n.checkbox:hover, .radio:hover {\n  color: #363636; }\n\n.checkbox[disabled], .radio[disabled],\nfieldset[disabled] .checkbox,\nfieldset[disabled] .radio,\n.checkbox input[disabled],\n.radio input[disabled] {\n  color: #7a7a7a;\n  cursor: not-allowed; }\n\n.radio + .radio {\n  margin-left: 0.5em; }\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top; }\n\n.select:not(.is-multiple) {\n  height: 2.5em; }\n\n.select:not(.is-multiple):not(.is-loading)::after {\n  border-color: #485fc7;\n  right: 1.125em;\n  z-index: 4; }\n\n.select.is-rounded select {\n  border-radius: 9999px;\n  padding-left: 1em; }\n\n.select select {\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  max-width: 100%;\n  outline: none; }\n\n.select select::-ms-expand {\n  display: none; }\n\n.select select[disabled]:hover,\nfieldset[disabled] .select select:hover {\n  border-color: whitesmoke; }\n\n.select select:not([multiple]) {\n  padding-right: 2.5em; }\n\n.select select[multiple] {\n  height: auto;\n  padding: 0; }\n\n.select select[multiple] option {\n  padding: 0.5em 1em; }\n\n.select:not(.is-multiple):not(.is-loading):hover::after {\n  border-color: #363636; }\n\n.select.is-white:not(:hover)::after {\n  border-color: white; }\n\n.select.is-white select {\n  border-color: white; }\n\n.select.is-white select:hover, .select.is-white select.is-hovered {\n  border-color: #f2f2f2; }\n\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n\n.select.is-black:not(:hover)::after {\n  border-color: #0a0a0a; }\n\n.select.is-black select {\n  border-color: #0a0a0a; }\n\n.select.is-black select:hover, .select.is-black select.is-hovered {\n  border-color: black; }\n\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n\n.select.is-light:not(:hover)::after {\n  border-color: whitesmoke; }\n\n.select.is-light select {\n  border-color: whitesmoke; }\n\n.select.is-light select:hover, .select.is-light select.is-hovered {\n  border-color: #e8e8e8; }\n\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n\n.select.is-dark:not(:hover)::after {\n  border-color: #363636; }\n\n.select.is-dark select {\n  border-color: #363636; }\n\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n  border-color: #292929; }\n\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n\n.select.is-primary:not(:hover)::after {\n  border-color: #00d1b2; }\n\n.select.is-primary select {\n  border-color: #00d1b2; }\n\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n  border-color: #00b89c; }\n\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n\n.select.is-link:not(:hover)::after {\n  border-color: #485fc7; }\n\n.select.is-link select {\n  border-color: #485fc7; }\n\n.select.is-link select:hover, .select.is-link select.is-hovered {\n  border-color: #3a51bb; }\n\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25); }\n\n.select.is-info:not(:hover)::after {\n  border-color: #3e8ed0; }\n\n.select.is-info select {\n  border-color: #3e8ed0; }\n\n.select.is-info select:hover, .select.is-info select.is-hovered {\n  border-color: #3082c5; }\n\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25); }\n\n.select.is-success:not(:hover)::after {\n  border-color: #48c78e; }\n\n.select.is-success select {\n  border-color: #48c78e; }\n\n.select.is-success select:hover, .select.is-success select.is-hovered {\n  border-color: #3abb81; }\n\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25); }\n\n.select.is-warning:not(:hover)::after {\n  border-color: #ffe08a; }\n\n.select.is-warning select {\n  border-color: #ffe08a; }\n\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n  border-color: #ffd970; }\n\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25); }\n\n.select.is-danger:not(:hover)::after {\n  border-color: #f14668; }\n\n.select.is-danger select {\n  border-color: #f14668; }\n\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n  border-color: #ef2e55; }\n\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25); }\n\n.select.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem; }\n\n.select.is-medium {\n  font-size: 1.25rem; }\n\n.select.is-large {\n  font-size: 1.5rem; }\n\n.select.is-disabled::after {\n  border-color: #7a7a7a; }\n\n.select.is-fullwidth {\n  width: 100%; }\n\n.select.is-fullwidth select {\n  width: 100%; }\n\n.select.is-loading::after {\n  margin-top: 0;\n  position: absolute;\n  right: 0.625em;\n  top: 0.625em;\n  transform: none; }\n\n.select.is-loading.is-small:after {\n  font-size: 0.75rem; }\n\n.select.is-loading.is-medium:after {\n  font-size: 1.25rem; }\n\n.select.is-loading.is-large:after {\n  font-size: 1.5rem; }\n\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative; }\n\n.file.is-white .file-cta {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a; }\n\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a; }\n\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n  color: #0a0a0a; }\n\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a; }\n\n.file.is-black .file-cta {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white; }\n\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n  background-color: #040404;\n  border-color: transparent;\n  color: white; }\n\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n  color: white; }\n\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n  background-color: black;\n  border-color: transparent;\n  color: white; }\n\n.file.is-light .file-cta {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n  color: rgba(0, 0, 0, 0.7); }\n\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.file.is-dark .file-cta {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n  color: #fff; }\n\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-primary .file-cta {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n  color: #fff; }\n\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-link .file-cta {\n  background-color: #485fc7;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n  background-color: #3e56c4;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(72, 95, 199, 0.25);\n  color: #fff; }\n\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n  background-color: #3a51bb;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-info .file-cta {\n  background-color: #3e8ed0;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n  background-color: #3488ce;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(62, 142, 208, 0.25);\n  color: #fff; }\n\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n  background-color: #3082c5;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-success .file-cta {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.25);\n  color: #fff; }\n\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-warning .file-cta {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.25);\n  color: rgba(0, 0, 0, 0.7); }\n\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7); }\n\n.file.is-danger .file-cta {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);\n  color: #fff; }\n\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff; }\n\n.file.is-small {\n  font-size: 0.75rem; }\n\n.file.is-normal {\n  font-size: 1rem; }\n\n.file.is-medium {\n  font-size: 1.25rem; }\n\n.file.is-medium .file-icon .fa {\n  font-size: 21px; }\n\n.file.is-large {\n  font-size: 1.5rem; }\n\n.file.is-large .file-icon .fa {\n  font-size: 28px; }\n\n.file.has-name .file-cta {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.file.has-name .file-name {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.file.has-name.is-empty .file-cta {\n  border-radius: 4px; }\n\n.file.has-name.is-empty .file-name {\n  display: none; }\n\n.file.is-boxed .file-label {\n  flex-direction: column; }\n\n.file.is-boxed .file-cta {\n  flex-direction: column;\n  height: auto;\n  padding: 1em 3em; }\n\n.file.is-boxed .file-name {\n  border-width: 0 1px 1px; }\n\n.file.is-boxed .file-icon {\n  height: 1.5em;\n  width: 1.5em; }\n\n.file.is-boxed .file-icon .fa {\n  font-size: 21px; }\n\n.file.is-boxed.is-small .file-icon .fa {\n  font-size: 14px; }\n\n.file.is-boxed.is-medium .file-icon .fa {\n  font-size: 28px; }\n\n.file.is-boxed.is-large .file-icon .fa {\n  font-size: 35px; }\n\n.file.is-boxed.has-name .file-cta {\n  border-radius: 4px 4px 0 0; }\n\n.file.is-boxed.has-name .file-name {\n  border-radius: 0 0 4px 4px;\n  border-width: 0 1px 1px; }\n\n.file.is-centered {\n  justify-content: center; }\n\n.file.is-fullwidth .file-label {\n  width: 100%; }\n\n.file.is-fullwidth .file-name {\n  flex-grow: 1;\n  max-width: none; }\n\n.file.is-right {\n  justify-content: flex-end; }\n\n.file.is-right .file-cta {\n  border-radius: 0 4px 4px 0; }\n\n.file.is-right .file-name {\n  border-radius: 4px 0 0 4px;\n  border-width: 1px 0 1px 1px;\n  order: -1; }\n\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative; }\n\n.file-label:hover .file-cta {\n  background-color: #eeeeee;\n  color: #363636; }\n\n.file-label:hover .file-name {\n  border-color: #d5d5d5; }\n\n.file-label:active .file-cta {\n  background-color: #e8e8e8;\n  color: #363636; }\n\n.file-label:active .file-name {\n  border-color: #cfcfcf; }\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap; }\n\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a; }\n\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: inherit;\n  text-overflow: ellipsis; }\n\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em; }\n\n.file-icon .fa {\n  font-size: 14px; }\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700; }\n\n.label:not(:last-child) {\n  margin-bottom: 0.5em; }\n\n.label.is-small {\n  font-size: 0.75rem; }\n\n.label.is-medium {\n  font-size: 1.25rem; }\n\n.label.is-large {\n  font-size: 1.5rem; }\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem; }\n\n.help.is-white {\n  color: white; }\n\n.help.is-black {\n  color: #0a0a0a; }\n\n.help.is-light {\n  color: whitesmoke; }\n\n.help.is-dark {\n  color: #363636; }\n\n.help.is-primary {\n  color: #00d1b2; }\n\n.help.is-link {\n  color: #485fc7; }\n\n.help.is-info {\n  color: #3e8ed0; }\n\n.help.is-success {\n  color: #48c78e; }\n\n.help.is-warning {\n  color: #ffe08a; }\n\n.help.is-danger {\n  color: #f14668; }\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem; }\n\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start; }\n\n.field.has-addons .control:not(:last-child) {\n  margin-right: -1px; }\n\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n.field.has-addons .control:not(:first-child):not(:last-child) .input,\n.field.has-addons .control:not(:first-child):not(:last-child) .select select {\n  border-radius: 0; }\n\n.field.has-addons .control:first-child:not(:only-child) .button,\n.field.has-addons .control:first-child:not(:only-child) .input,\n.field.has-addons .control:first-child:not(:only-child) .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 40px;\n  border-bottom-left-radius: 40px; }\n\n.field.has-addons .control:last-child:not(:only-child) .button,\n.field.has-addons .control:last-child:not(:only-child) .input,\n.field.has-addons .control:last-child:not(:only-child) .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 40px;\n  border-bottom-right-radius: 40px; }\n\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n.field.has-addons .control .input:not([disabled]):hover,\n.field.has-addons .control .input:not([disabled]).is-hovered,\n.field.has-addons .control .select select:not([disabled]):hover,\n.field.has-addons .control .select select:not([disabled]).is-hovered {\n  z-index: 2; }\n\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n.field.has-addons .control .input:not([disabled]):focus,\n.field.has-addons .control .input:not([disabled]).is-focused,\n.field.has-addons .control .input:not([disabled]):active,\n.field.has-addons .control .input:not([disabled]).is-active,\n.field.has-addons .control .select select:not([disabled]):focus,\n.field.has-addons .control .select select:not([disabled]).is-focused,\n.field.has-addons .control .select select:not([disabled]):active,\n.field.has-addons .control .select select:not([disabled]).is-active {\n  z-index: 3; }\n\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n.field.has-addons .control .input:not([disabled]):focus:hover,\n.field.has-addons .control .input:not([disabled]).is-focused:hover,\n.field.has-addons .control .input:not([disabled]):active:hover,\n.field.has-addons .control .input:not([disabled]).is-active:hover,\n.field.has-addons .control .select select:not([disabled]):focus:hover,\n.field.has-addons .control .select select:not([disabled]).is-focused:hover,\n.field.has-addons .control .select select:not([disabled]):active:hover,\n.field.has-addons .control .select select:not([disabled]).is-active:hover {\n  z-index: 4; }\n\n.field.has-addons .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1; }\n\n.field.has-addons.has-addons-centered {\n  justify-content: center; }\n\n.field.has-addons.has-addons-right {\n  justify-content: flex-end; }\n\n.field.has-addons.has-addons-fullwidth .control {\n  flex-grow: 1;\n  flex-shrink: 0; }\n\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start; }\n\n.field.is-grouped > .control {\n  flex-shrink: 0; }\n\n.field.is-grouped > .control:not(:last-child) {\n  margin-bottom: 0;\n  /* margin-right: 0.75rem; */ }\n\n.field.is-grouped > .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1; }\n\n.field.is-grouped.is-grouped-centered {\n  justify-content: center; }\n\n.field.is-grouped.is-grouped-right {\n  justify-content: flex-end; }\n\n.field.is-grouped.is-grouped-multiline {\n  flex-wrap: wrap; }\n\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n  margin-bottom: 0.75rem; }\n\n.field.is-grouped.is-grouped-multiline:last-child {\n  margin-bottom: -0.75rem; }\n\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n  margin-bottom: 0; }\n\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: flex; } }\n\n.field-label .label {\n  font-size: inherit; }\n\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem; } }\n\n@media screen and (min-width: 769px), print {\n  .field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right; }\n  .field-label.is-small {\n    font-size: 0.75rem;\n    padding-top: 0.375em; }\n  .field-label.is-normal {\n    padding-top: 0.375em; }\n  .field-label.is-medium {\n    font-size: 1.25rem;\n    padding-top: 0.375em; }\n  .field-label.is-large {\n    font-size: 1.5rem;\n    padding-top: 0.375em; } }\n\n.field-body .field .field {\n  margin-bottom: 0; }\n\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1; }\n  .field-body .field {\n    margin-bottom: 0; }\n  .field-body > .field {\n    flex-shrink: 1; }\n  .field-body > .field:not(.is-narrow) {\n    flex-grow: 1; }\n  .field-body > .field:not(:last-child) {\n    margin-right: 0.75rem; } }\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: inherit; }\n\n.control.has-icons-left .input:focus ~ .icon,\n.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n.control.has-icons-right .select:focus ~ .icon {\n  color: #4a4a4a; }\n\n.control.has-icons-left .input.is-small ~ .icon,\n.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n.control.has-icons-right .select.is-small ~ .icon {\n  font-size: 0.75rem; }\n\n.control.has-icons-left .input.is-medium ~ .icon,\n.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n.control.has-icons-right .select.is-medium ~ .icon {\n  font-size: 1.25rem; }\n\n.control.has-icons-left .input.is-large ~ .icon,\n.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n.control.has-icons-right .select.is-large ~ .icon {\n  font-size: 1.5rem; }\n\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n  color: #dbdbdb;\n  height: 2.5em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 2.5em;\n  z-index: 4; }\n\n.control.has-icons-left .input,\n.control.has-icons-left .select select {\n  padding-left: 2.5em; }\n\n.control.has-icons-left .icon.is-left {\n  left: 0; }\n\n.control.has-icons-right .input,\n.control.has-icons-right .select select {\n  padding-right: 2.5em; }\n\n.control.has-icons-right .icon.is-right {\n  right: 0; }\n\n.control.is-loading::after {\n  position: absolute !important;\n  right: 0.625em;\n  top: 0.625em;\n  z-index: 4; }\n\n.control.is-loading.is-small:after {\n  font-size: 0.75rem; }\n\n.control.is-loading.is-medium:after {\n  font-size: 1.25rem; }\n\n.control.is-loading.is-large:after {\n  font-size: 1.5rem; }\n\n/* Bulma Components */\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap; }\n\n.breadcrumb a {\n  align-items: center;\n  color: #485fc7;\n  display: flex;\n  justify-content: center;\n  padding: 0 0.75em; }\n\n.breadcrumb a:hover {\n  color: #363636; }\n\n.breadcrumb li {\n  align-items: center;\n  display: flex; }\n\n.breadcrumb li:first-child a {\n  padding-left: 0; }\n\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none; }\n\n.breadcrumb li + li::before {\n  color: #b5b5b5;\n  content: \"\\0002f\"; }\n\n.breadcrumb ul,\n.breadcrumb ol {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n\n.breadcrumb .icon:first-child {\n  margin-right: 0.5em; }\n\n.breadcrumb .icon:last-child {\n  margin-left: 0.5em; }\n\n.breadcrumb.is-centered ol,\n.breadcrumb.is-centered ul {\n  justify-content: center; }\n\n.breadcrumb.is-right ol,\n.breadcrumb.is-right ul {\n  justify-content: flex-end; }\n\n.breadcrumb.is-small {\n  font-size: 0.75rem; }\n\n.breadcrumb.is-medium {\n  font-size: 1.25rem; }\n\n.breadcrumb.is-large {\n  font-size: 1.5rem; }\n\n.breadcrumb.has-arrow-separator li + li::before {\n  content: \"\\02192\"; }\n\n.breadcrumb.has-bullet-separator li + li::before {\n  content: \"\\02022\"; }\n\n.breadcrumb.has-dot-separator li + li::before {\n  content: \"\\000b7\"; }\n\n.breadcrumb.has-succeeds-separator li + li::before {\n  content: \"\\0227B\"; }\n\n.card {\n  /* background-color: white; */\n  background-color: #1b2d53;\n  border-radius: 0.25rem;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  /* color: #4a4a4a; */\n  color: #d9d9d9;\n  max-width: 100%;\n  position: relative; }\n\n.card-header:first-child, .card-content:first-child, .card-footer:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem; }\n\n.card-header:last-child, .card-content:last-child, .card-footer:last-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.card-header {\n  background-color: transparent;\n  align-items: stretch;\n  box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);\n  display: flex; }\n\n.card-header-title {\n  align-items: center;\n  /* color: #363636; */\n  color: #d9d9d9;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem 1rem; }\n\n.card-header-title.is-centered {\n  justify-content: center; }\n\n.card-header-icon {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem 1rem; }\n\n.card-image {\n  display: block;\n  position: relative; }\n\n.card-image:first-child img {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem; }\n\n.card-image:last-child img {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem; }\n\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #ededed;\n  align-items: stretch;\n  display: flex; }\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem; }\n\n.card-footer-item:not(:last-child) {\n  border-right: 1px solid #ededed; }\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top; }\n\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n  display: block; }\n\n.dropdown.is-right .dropdown-menu {\n  left: auto;\n  right: 0; }\n\n.dropdown.is-up .dropdown-menu {\n  bottom: 100%;\n  padding-bottom: 4px;\n  padding-top: initial;\n  top: auto; }\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20; }\n\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem; }\n\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative; }\n\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: inherit;\n  white-space: nowrap;\n  width: 100%; }\n\na.dropdown-item:hover,\nbutton.dropdown-item:hover {\n  background-color: whitesmoke;\n  color: #0a0a0a; }\n\na.dropdown-item.is-active,\nbutton.dropdown-item.is-active {\n  background-color: #485fc7;\n  color: #fff; }\n\n.dropdown-divider {\n  background-color: #ededed;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0; }\n\n.level {\n  align-items: center;\n  justify-content: space-between; }\n\n.level code {\n  border-radius: 4px; }\n\n.level img {\n  display: inline-block;\n  vertical-align: top; }\n\n.level.is-mobile {\n  display: flex; }\n\n.level.is-mobile .level-left,\n.level.is-mobile .level-right {\n  display: flex; }\n\n.level.is-mobile .level-left + .level-right {\n  margin-top: 0; }\n\n.level.is-mobile .level-item:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem; }\n\n.level.is-mobile .level-item:not(.is-narrow) {\n  flex-grow: 1; }\n\n@media screen and (min-width: 769px), print {\n  .level {\n    display: flex; }\n  .level > .level-item:not(.is-narrow) {\n    flex-grow: 1; } }\n\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center; }\n\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0; }\n\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 0.75rem; } }\n\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  flex-grow: 1; }\n\n@media screen and (min-width: 769px), print {\n  .level-left .level-item:not(:last-child),\n  .level-right .level-item:not(:last-child) {\n    margin-right: 0.75rem; } }\n\n.level-left {\n  align-items: center;\n  justify-content: flex-start; }\n\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 1.5rem; } }\n\n@media screen and (min-width: 769px), print {\n  .level-left {\n    display: flex; } }\n\n.level-right {\n  align-items: center;\n  justify-content: flex-end; }\n\n@media screen and (min-width: 769px), print {\n  .level-right {\n    display: flex; } }\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: inherit; }\n\n.media .content:not(:last-child) {\n  margin-bottom: 0.75rem; }\n\n.media .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  display: flex;\n  padding-top: 0.75rem; }\n\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 0.5rem; }\n\n.media .media .media {\n  padding-top: 0.5rem; }\n\n.media .media .media + .media {\n  margin-top: 0.5rem; }\n\n.media + .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  margin-top: 1rem;\n  padding-top: 1rem; }\n\n.media.is-large + .media {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem; }\n\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.media-left {\n  margin-right: 1rem; }\n\n.media-right {\n  margin-left: 1rem; }\n\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: inherit; }\n\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto; } }\n\n.menu {\n  font-size: 1rem; }\n\n.menu.is-small {\n  font-size: 0.75rem; }\n\n.menu.is-medium {\n  font-size: 1.25rem; }\n\n.menu.is-large {\n  font-size: 1.5rem; }\n\n.menu-list {\n  line-height: 1.25; }\n\n.menu-list a {\n  border-radius: 2px;\n  color: #b3b3b3e3;\n  display: block;\n  padding: 0.5em 0.75em; }\n\n/* .menu-list a:hover {\n  background-color: whitesmoke;\n  color: #363636;\n} */\n.menu-list a.is-active {\n  background-color: #485fc7;\n  color: #fff; }\n\n.menu-list li ul {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em; }\n\n.menu-label {\n  color: #f0f0f0;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase; }\n\n.menu-label:not(:first-child) {\n  margin-top: 1em; }\n\n.menu-label:not(:last-child) {\n  margin-bottom: 1em; }\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem; }\n\n.message strong {\n  color: currentColor; }\n\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline; }\n\n.message.is-small {\n  font-size: 0.75rem; }\n\n.message.is-medium {\n  font-size: 1.25rem; }\n\n.message.is-large {\n  font-size: 1.5rem; }\n\n.message.is-white {\n  background-color: white; }\n\n.message.is-white .message-header {\n  background-color: white;\n  color: #0a0a0a; }\n\n.message.is-white .message-body {\n  border-color: white; }\n\n.message.is-black {\n  background-color: #fafafa; }\n\n.message.is-black .message-header {\n  background-color: #0a0a0a;\n  color: white; }\n\n.message.is-black .message-body {\n  border-color: #0a0a0a; }\n\n.message.is-light {\n  background-color: #fafafa; }\n\n.message.is-light .message-header {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7); }\n\n.message.is-light .message-body {\n  border-color: whitesmoke; }\n\n.message.is-dark {\n  background-color: #fafafa; }\n\n.message.is-dark .message-header {\n  background-color: #363636;\n  color: #fff; }\n\n.message.is-dark .message-body {\n  border-color: #363636; }\n\n.message.is-primary {\n  background-color: #ebfffc; }\n\n.message.is-primary .message-header {\n  background-color: #00d1b2;\n  color: #fff; }\n\n.message.is-primary .message-body {\n  border-color: #00d1b2;\n  color: #00947e; }\n\n.message.is-link {\n  background-color: #eff1fa; }\n\n.message.is-link .message-header {\n  background-color: #485fc7;\n  color: #fff; }\n\n.message.is-link .message-body {\n  border-color: #485fc7;\n  color: #3850b7; }\n\n.message.is-info {\n  background-color: #eff5fb; }\n\n.message.is-info .message-header {\n  background-color: #3e8ed0;\n  color: #fff; }\n\n.message.is-info .message-body {\n  border-color: #3e8ed0;\n  color: #296fa8; }\n\n.message.is-success {\n  background-color: #effaf5; }\n\n.message.is-success .message-header {\n  background-color: #48c78e;\n  color: #fff; }\n\n.message.is-success .message-body {\n  border-color: #48c78e;\n  color: #257953; }\n\n.message.is-warning {\n  background-color: #fffaeb; }\n\n.message.is-warning .message-header {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7); }\n\n.message.is-warning .message-body {\n  border-color: #ffe08a;\n  color: #946c00; }\n\n.message.is-danger {\n  background-color: #feecf0; }\n\n.message.is-danger .message-header {\n  background-color: #f14668;\n  color: #fff; }\n\n.message.is-danger .message-body {\n  border-color: #f14668;\n  color: #cc0f35; }\n\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative; }\n\n.message-header .delete {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: 0.75em; }\n\n.message-header + .message-body {\n  border-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em; }\n\n.message-body code,\n.message-body pre {\n  background-color: white; }\n\n.message-body pre code {\n  background-color: transparent; }\n\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40; }\n\n.modal.is-active {\n  display: flex; }\n\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86); }\n\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%; }\n\n@media screen and (min-width: 769px) {\n  .modal-content,\n  .modal-card {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px; } }\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px; }\n\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible; }\n\n.modal-card-head {\n  align-items: center;\n  /* background-color: whitesmoke; */\n  background-color: #13143c;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  /* padding: 20px; */\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 5px;\n  position: relative; }\n\n.modal-card-foot {\n  align-items: center;\n  /* background-color: whitesmoke; */\n  background-color: #13143c;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  /* padding: 20px; */\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 5px;\n  padding-right: 20px;\n  position: relative; }\n\n.modal-card-head {\n  /* border-bottom: 1px solid #dbdbdb; */\n  border-bottom: 1px solid #2cb3c5;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.modal-card-title {\n  /* color: #363636; */\n  color: #d9d9d9;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1; }\n\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #2cb3c5;\n  /* border-top: 1px solid #dbdbdb; */ }\n\n.modal-card-foot .button:not(:last-child) {\n  margin-right: 0.5em; }\n\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  /* background-color: white; */\n  background-color: #13143c;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px; }\n\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30; }\n\n.navbar.is-white {\n  background-color: white;\n  color: #0a0a0a; }\n\n.navbar.is-white .navbar-brand > .navbar-item,\n.navbar.is-white .navbar-brand .navbar-link {\n  color: #0a0a0a; }\n\n.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n.navbar.is-white .navbar-brand .navbar-link:focus,\n.navbar.is-white .navbar-brand .navbar-link:hover,\n.navbar.is-white .navbar-brand .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a; }\n\n.navbar.is-white .navbar-brand .navbar-link::after {\n  border-color: #0a0a0a; }\n\n.navbar.is-white .navbar-burger {\n  color: #0a0a0a; }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-white .navbar-start > .navbar-item,\n  .navbar.is-white .navbar-start .navbar-link,\n  .navbar.is-white .navbar-end > .navbar-item,\n  .navbar.is-white .navbar-end .navbar-link {\n    color: #0a0a0a; }\n  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n  .navbar.is-white .navbar-start .navbar-link:focus,\n  .navbar.is-white .navbar-start .navbar-link:hover,\n  .navbar.is-white .navbar-start .navbar-link.is-active,\n  .navbar.is-white .navbar-end > a.navbar-item:focus,\n  .navbar.is-white .navbar-end > a.navbar-item:hover,\n  .navbar.is-white .navbar-end > a.navbar-item.is-active,\n  .navbar.is-white .navbar-end .navbar-link:focus,\n  .navbar.is-white .navbar-end .navbar-link:hover,\n  .navbar.is-white .navbar-end .navbar-link.is-active {\n    background-color: #f2f2f2;\n    color: #0a0a0a; }\n  .navbar.is-white .navbar-start .navbar-link::after,\n  .navbar.is-white .navbar-end .navbar-link::after {\n    border-color: #0a0a0a; }\n  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #f2f2f2;\n    color: #0a0a0a; }\n  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n    background-color: white;\n    color: #0a0a0a; } }\n\n.navbar.is-black {\n  background-color: #0a0a0a;\n  color: white; }\n\n.navbar.is-black .navbar-brand > .navbar-item,\n.navbar.is-black .navbar-brand .navbar-link {\n  color: white; }\n\n.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n.navbar.is-black .navbar-brand .navbar-link:focus,\n.navbar.is-black .navbar-brand .navbar-link:hover,\n.navbar.is-black .navbar-brand .navbar-link.is-active {\n  background-color: black;\n  color: white; }\n\n.navbar.is-black .navbar-brand .navbar-link::after {\n  border-color: white; }\n\n.navbar.is-black .navbar-burger {\n  color: white; }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-black .navbar-start > .navbar-item,\n  .navbar.is-black .navbar-start .navbar-link,\n  .navbar.is-black .navbar-end > .navbar-item,\n  .navbar.is-black .navbar-end .navbar-link {\n    color: white; }\n  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n  .navbar.is-black .navbar-start .navbar-link:focus,\n  .navbar.is-black .navbar-start .navbar-link:hover,\n  .navbar.is-black .navbar-start .navbar-link.is-active,\n  .navbar.is-black .navbar-end > a.navbar-item:focus,\n  .navbar.is-black .navbar-end > a.navbar-item:hover,\n  .navbar.is-black .navbar-end > a.navbar-item.is-active,\n  .navbar.is-black .navbar-end .navbar-link:focus,\n  .navbar.is-black .navbar-end .navbar-link:hover,\n  .navbar.is-black .navbar-end .navbar-link.is-active {\n    background-color: black;\n    color: white; }\n  .navbar.is-black .navbar-start .navbar-link::after,\n  .navbar.is-black .navbar-end .navbar-link::after {\n    border-color: white; }\n  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: black;\n    color: white; }\n  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n    background-color: #0a0a0a;\n    color: white; } }\n\n.navbar.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7); }\n\n.navbar.is-light .navbar-brand > .navbar-item,\n.navbar.is-light .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7); }\n\n.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n.navbar.is-light .navbar-brand .navbar-link:focus,\n.navbar.is-light .navbar-brand .navbar-link:hover,\n.navbar.is-light .navbar-brand .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7); }\n\n.navbar.is-light .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.navbar.is-light .navbar-burger {\n  color: rgba(0, 0, 0, 0.7); }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-light .navbar-start > .navbar-item,\n  .navbar.is-light .navbar-start .navbar-link,\n  .navbar.is-light .navbar-end > .navbar-item,\n  .navbar.is-light .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n  .navbar.is-light .navbar-start .navbar-link:focus,\n  .navbar.is-light .navbar-start .navbar-link:hover,\n  .navbar.is-light .navbar-start .navbar-link.is-active,\n  .navbar.is-light .navbar-end > a.navbar-item:focus,\n  .navbar.is-light .navbar-end > a.navbar-item:hover,\n  .navbar.is-light .navbar-end > a.navbar-item.is-active,\n  .navbar.is-light .navbar-end .navbar-link:focus,\n  .navbar.is-light .navbar-end .navbar-link:hover,\n  .navbar.is-light .navbar-end .navbar-link.is-active {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar.is-light .navbar-start .navbar-link::after,\n  .navbar.is-light .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7); }\n  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: rgba(0, 0, 0, 0.7); } }\n\n.navbar.is-dark {\n  background-color: #363636;\n  color: #fff; }\n\n.navbar.is-dark .navbar-brand > .navbar-item,\n.navbar.is-dark .navbar-brand .navbar-link {\n  color: #fff; }\n\n.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n.navbar.is-dark .navbar-brand .navbar-link:focus,\n.navbar.is-dark .navbar-brand .navbar-link:hover,\n.navbar.is-dark .navbar-brand .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff; }\n\n.navbar.is-dark .navbar-brand .navbar-link::after {\n  border-color: #fff; }\n\n.navbar.is-dark .navbar-burger {\n  color: #fff; }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-dark .navbar-start > .navbar-item,\n  .navbar.is-dark .navbar-start .navbar-link,\n  .navbar.is-dark .navbar-end > .navbar-item,\n  .navbar.is-dark .navbar-end .navbar-link {\n    color: #fff; }\n  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-start .navbar-link:focus,\n  .navbar.is-dark .navbar-start .navbar-link:hover,\n  .navbar.is-dark .navbar-start .navbar-link.is-active,\n  .navbar.is-dark .navbar-end > a.navbar-item:focus,\n  .navbar.is-dark .navbar-end > a.navbar-item:hover,\n  .navbar.is-dark .navbar-end > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-end .navbar-link:focus,\n  .navbar.is-dark .navbar-end .navbar-link:hover,\n  .navbar.is-dark .navbar-end .navbar-link.is-active {\n    background-color: #292929;\n    color: #fff; }\n  .navbar.is-dark .navbar-start .navbar-link::after,\n  .navbar.is-dark .navbar-end .navbar-link::after {\n    border-color: #fff; }\n  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #292929;\n    color: #fff; }\n  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n    background-color: #363636;\n    color: #fff; } }\n\n.navbar.is-primary {\n  background-color: #00d1b2;\n  color: #fff; }\n\n.navbar.is-primary .navbar-brand > .navbar-item,\n.navbar.is-primary .navbar-brand .navbar-link {\n  color: #fff; }\n\n.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n.navbar.is-primary .navbar-brand .navbar-link:focus,\n.navbar.is-primary .navbar-brand .navbar-link:hover,\n.navbar.is-primary .navbar-brand .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff; }\n\n.navbar.is-primary .navbar-brand .navbar-link::after {\n  border-color: #fff; }\n\n.navbar.is-primary .navbar-burger {\n  color: #fff; }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-primary .navbar-start > .navbar-item,\n  .navbar.is-primary .navbar-start .navbar-link,\n  .navbar.is-primary .navbar-end > .navbar-item,\n  .navbar.is-primary .navbar-end .navbar-link {\n    color: #fff; }\n  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-start .navbar-link:focus,\n  .navbar.is-primary .navbar-start .navbar-link:hover,\n  .navbar.is-primary .navbar-start .navbar-link.is-active,\n  .navbar.is-primary .navbar-end > a.navbar-item:focus,\n  .navbar.is-primary .navbar-end > a.navbar-item:hover,\n  .navbar.is-primary .navbar-end > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-end .navbar-link:focus,\n  .navbar.is-primary .navbar-end .navbar-link:hover,\n  .navbar.is-primary .navbar-end .navbar-link.is-active {\n    background-color: #00b89c;\n    color: #fff; }\n  .navbar.is-primary .navbar-start .navbar-link::after,\n  .navbar.is-primary .navbar-end .navbar-link::after {\n    border-color: #fff; }\n  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #00b89c;\n    color: #fff; }\n  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n    background-color: #00d1b2;\n    color: #fff; } }\n\n.navbar.is-link {\n  background-color: #485fc7;\n  color: #fff; }\n\n.navbar.is-link .navbar-brand > .navbar-item,\n.navbar.is-link .navbar-brand .navbar-link {\n  color: #fff; }\n\n.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n.navbar.is-link .navbar-brand .navbar-link:focus,\n.navbar.is-link .navbar-brand .navbar-link:hover,\n.navbar.is-link .navbar-brand .navbar-link.is-active {\n  background-color: #3a51bb;\n  color: #fff; }\n\n.navbar.is-link .navbar-brand .navbar-link::after {\n  border-color: #fff; }\n\n.navbar.is-link .navbar-burger {\n  color: #fff; }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-link .navbar-start > .navbar-item,\n  .navbar.is-link .navbar-start .navbar-link,\n  .navbar.is-link .navbar-end > .navbar-item,\n  .navbar.is-link .navbar-end .navbar-link {\n    color: #fff; }\n  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n  .navbar.is-link .navbar-start .navbar-link:focus,\n  .navbar.is-link .navbar-start .navbar-link:hover,\n  .navbar.is-link .navbar-start .navbar-link.is-active,\n  .navbar.is-link .navbar-end > a.navbar-item:focus,\n  .navbar.is-link .navbar-end > a.navbar-item:hover,\n  .navbar.is-link .navbar-end > a.navbar-item.is-active,\n  .navbar.is-link .navbar-end .navbar-link:focus,\n  .navbar.is-link .navbar-end .navbar-link:hover,\n  .navbar.is-link .navbar-end .navbar-link.is-active {\n    background-color: #3a51bb;\n    color: #fff; }\n  .navbar.is-link .navbar-start .navbar-link::after,\n  .navbar.is-link .navbar-end .navbar-link::after {\n    border-color: #fff; }\n  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3a51bb;\n    color: #fff; }\n  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n    background-color: #485fc7;\n    color: #fff; } }\n\n.navbar.is-info {\n  background-color: #3e8ed0;\n  color: #fff; }\n\n.navbar.is-info .navbar-brand > .navbar-item,\n.navbar.is-info .navbar-brand .navbar-link {\n  color: #fff; }\n\n.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n.navbar.is-info .navbar-brand .navbar-link:focus,\n.navbar.is-info .navbar-brand .navbar-link:hover,\n.navbar.is-info .navbar-brand .navbar-link.is-active {\n  background-color: #3082c5;\n  color: #fff; }\n\n.navbar.is-info .navbar-brand .navbar-link::after {\n  border-color: #fff; }\n\n.navbar.is-info .navbar-burger {\n  color: #fff; }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-info .navbar-start > .navbar-item,\n  .navbar.is-info .navbar-start .navbar-link,\n  .navbar.is-info .navbar-end > .navbar-item,\n  .navbar.is-info .navbar-end .navbar-link {\n    color: #fff; }\n  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n  .navbar.is-info .navbar-start .navbar-link:focus,\n  .navbar.is-info .navbar-start .navbar-link:hover,\n  .navbar.is-info .navbar-start .navbar-link.is-active,\n  .navbar.is-info .navbar-end > a.navbar-item:focus,\n  .navbar.is-info .navbar-end > a.navbar-item:hover,\n  .navbar.is-info .navbar-end > a.navbar-item.is-active,\n  .navbar.is-info .navbar-end .navbar-link:focus,\n  .navbar.is-info .navbar-end .navbar-link:hover,\n  .navbar.is-info .navbar-end .navbar-link.is-active {\n    background-color: #3082c5;\n    color: #fff; }\n  .navbar.is-info .navbar-start .navbar-link::after,\n  .navbar.is-info .navbar-end .navbar-link::after {\n    border-color: #fff; }\n  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3082c5;\n    color: #fff; }\n  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n    background-color: #3e8ed0;\n    color: #fff; } }\n\n.navbar.is-success {\n  background-color: #48c78e;\n  color: #fff; }\n\n.navbar.is-success .navbar-brand > .navbar-item,\n.navbar.is-success .navbar-brand .navbar-link {\n  color: #fff; }\n\n.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n.navbar.is-success .navbar-brand .navbar-link:focus,\n.navbar.is-success .navbar-brand .navbar-link:hover,\n.navbar.is-success .navbar-brand .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff; }\n\n.navbar.is-success .navbar-brand .navbar-link::after {\n  border-color: #fff; }\n\n.navbar.is-success .navbar-burger {\n  color: #fff; }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-success .navbar-start > .navbar-item,\n  .navbar.is-success .navbar-start .navbar-link,\n  .navbar.is-success .navbar-end > .navbar-item,\n  .navbar.is-success .navbar-end .navbar-link {\n    color: #fff; }\n  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n  .navbar.is-success .navbar-start .navbar-link:focus,\n  .navbar.is-success .navbar-start .navbar-link:hover,\n  .navbar.is-success .navbar-start .navbar-link.is-active,\n  .navbar.is-success .navbar-end > a.navbar-item:focus,\n  .navbar.is-success .navbar-end > a.navbar-item:hover,\n  .navbar.is-success .navbar-end > a.navbar-item.is-active,\n  .navbar.is-success .navbar-end .navbar-link:focus,\n  .navbar.is-success .navbar-end .navbar-link:hover,\n  .navbar.is-success .navbar-end .navbar-link.is-active {\n    background-color: #3abb81;\n    color: #fff; }\n  .navbar.is-success .navbar-start .navbar-link::after,\n  .navbar.is-success .navbar-end .navbar-link::after {\n    border-color: #fff; }\n  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3abb81;\n    color: #fff; }\n  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n    background-color: #48c78e;\n    color: #fff; } }\n\n.navbar.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7); }\n\n.navbar.is-warning .navbar-brand > .navbar-item,\n.navbar.is-warning .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7); }\n\n.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n.navbar.is-warning .navbar-brand .navbar-link:focus,\n.navbar.is-warning .navbar-brand .navbar-link:hover,\n.navbar.is-warning .navbar-brand .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7); }\n\n.navbar.is-warning .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.navbar.is-warning .navbar-burger {\n  color: rgba(0, 0, 0, 0.7); }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-warning .navbar-start > .navbar-item,\n  .navbar.is-warning .navbar-start .navbar-link,\n  .navbar.is-warning .navbar-end > .navbar-item,\n  .navbar.is-warning .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-start .navbar-link:focus,\n  .navbar.is-warning .navbar-start .navbar-link:hover,\n  .navbar.is-warning .navbar-start .navbar-link.is-active,\n  .navbar.is-warning .navbar-end > a.navbar-item:focus,\n  .navbar.is-warning .navbar-end > a.navbar-item:hover,\n  .navbar.is-warning .navbar-end > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-end .navbar-link:focus,\n  .navbar.is-warning .navbar-end .navbar-link:hover,\n  .navbar.is-warning .navbar-end .navbar-link.is-active {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar.is-warning .navbar-start .navbar-link::after,\n  .navbar.is-warning .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7); }\n  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ffe08a;\n    color: rgba(0, 0, 0, 0.7); } }\n\n.navbar.is-danger {\n  background-color: #f14668;\n  color: #fff; }\n\n.navbar.is-danger .navbar-brand > .navbar-item,\n.navbar.is-danger .navbar-brand .navbar-link {\n  color: #fff; }\n\n.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n.navbar.is-danger .navbar-brand .navbar-link:focus,\n.navbar.is-danger .navbar-brand .navbar-link:hover,\n.navbar.is-danger .navbar-brand .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff; }\n\n.navbar.is-danger .navbar-brand .navbar-link::after {\n  border-color: #fff; }\n\n.navbar.is-danger .navbar-burger {\n  color: #fff; }\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-danger .navbar-start > .navbar-item,\n  .navbar.is-danger .navbar-start .navbar-link,\n  .navbar.is-danger .navbar-end > .navbar-item,\n  .navbar.is-danger .navbar-end .navbar-link {\n    color: #fff; }\n  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-start .navbar-link:focus,\n  .navbar.is-danger .navbar-start .navbar-link:hover,\n  .navbar.is-danger .navbar-start .navbar-link.is-active,\n  .navbar.is-danger .navbar-end > a.navbar-item:focus,\n  .navbar.is-danger .navbar-end > a.navbar-item:hover,\n  .navbar.is-danger .navbar-end > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-end .navbar-link:focus,\n  .navbar.is-danger .navbar-end .navbar-link:hover,\n  .navbar.is-danger .navbar-end .navbar-link.is-active {\n    background-color: #ef2e55;\n    color: #fff; }\n  .navbar.is-danger .navbar-start .navbar-link::after,\n  .navbar.is-danger .navbar-end .navbar-link::after {\n    border-color: #fff; }\n  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ef2e55;\n    color: #fff; }\n  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n    background-color: #f14668;\n    color: #fff; } }\n\n.navbar > .container {\n  align-items: stretch;\n  display: flex;\n  min-height: 3.25rem;\n  width: 100%; }\n\n.navbar.has-shadow {\n  box-shadow: 0 2px 0 0 whitesmoke; }\n\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 30; }\n\n.navbar.is-fixed-bottom {\n  bottom: 0; }\n\n.navbar.is-fixed-bottom.has-shadow {\n  box-shadow: 0 -2px 0 0 whitesmoke; }\n\n.navbar.is-fixed-top {\n  top: 0; }\n\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem; }\n\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem; }\n\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem; }\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent; }\n\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.navbar-burger {\n  color: #4a4a4a;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto; }\n\n.navbar-burger span {\n  background-color: currentColor;\n  display: block;\n  height: 1px;\n  left: calc(50% - 8px);\n  position: absolute;\n  transform-origin: center;\n  transition-duration: 86ms;\n  transition-property: background-color, opacity, transform;\n  transition-timing-function: ease-out;\n  width: 16px; }\n\n.navbar-burger span:nth-child(1) {\n  top: calc(50% - 6px); }\n\n.navbar-burger span:nth-child(2) {\n  top: calc(50% - 1px); }\n\n.navbar-burger span:nth-child(3) {\n  top: calc(50% + 4px); }\n\n.navbar-burger:hover {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.navbar-burger.is-active span:nth-child(1) {\n  transform: translateY(5px) rotate(45deg); }\n\n.navbar-burger.is-active span:nth-child(2) {\n  opacity: 0; }\n\n.navbar-burger.is-active span:nth-child(3) {\n  transform: translateY(-5px) rotate(-45deg); }\n\n.navbar-menu {\n  display: none; }\n\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative; }\n\n.navbar-item .icon:only-child,\n.navbar-link .icon:only-child {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem; }\n\na.navbar-item,\n.navbar-link {\n  cursor: pointer; }\n\na.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,\n.navbar-link:focus,\n.navbar-link:focus-within,\n.navbar-link:hover,\n.navbar-link.is-active {\n  background-color: #2cb3c5;\n  color: #111; }\n\n.navbar-item {\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.navbar-item img {\n  max-height: 1.75rem; }\n\n.navbar-item.has-dropdown {\n  padding: 0; }\n\n.navbar-item.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1; }\n\n.navbar-item.is-tab {\n  border-bottom: 1px solid transparent;\n  min-height: 3.25rem;\n  padding-bottom: calc(0.5rem - 1px); }\n\n.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {\n  background-color: transparent;\n  border-bottom-color: #485fc7; }\n\n.navbar-item.is-tab.is-active {\n  background-color: transparent;\n  border-bottom-color: #485fc7;\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  color: #485fc7;\n  padding-bottom: calc(0.5rem - 3px); }\n\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1; }\n\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em; }\n\n.navbar-link:not(.is-arrowless)::after {\n  border-color: #485fc7;\n  margin-top: -0.375em;\n  right: 1.125em; }\n\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem; }\n\n.navbar-dropdown .navbar-item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem; }\n\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0; }\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block; }\n  .navbar-brand .navbar-item,\n  .navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex; }\n  .navbar-link::after {\n    display: none; }\n  .navbar-menu {\n    /* background-color: white; */\n    background-color: #13143c;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0; }\n  .navbar-menu.is-active {\n    display: block;\n    position: absolute;\n    width: 100%;\n    z-index: 9999; }\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30; }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0; }\n  .navbar.is-fixed-bottom-touch.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1); }\n  .navbar.is-fixed-top-touch {\n    top: 0; }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto; }\n  html.has-navbar-fixed-top-touch,\n  body.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem; }\n  html.has-navbar-fixed-bottom-touch,\n  body.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem; } }\n\n@media screen and (min-width: 1024px) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex; }\n  .navbar {\n    min-height: 3.25rem; }\n  .navbar.is-spaced {\n    padding: 1rem 2rem; }\n  .navbar.is-spaced .navbar-start,\n  .navbar.is-spaced .navbar-end {\n    align-items: center; }\n  .navbar.is-spaced a.navbar-item,\n  .navbar.is-spaced .navbar-link {\n    border-radius: 4px; }\n  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n  .navbar.is-transparent .navbar-link:focus,\n  .navbar.is-transparent .navbar-link:hover,\n  .navbar.is-transparent .navbar-link.is-active {\n    background-color: transparent !important; }\n  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n    background-color: transparent !important; }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a; }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #485fc7; }\n  .navbar-burger {\n    display: none; }\n  .navbar-item,\n  .navbar-link {\n    align-items: center;\n    display: flex; }\n  .navbar-item.has-dropdown {\n    align-items: stretch; }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    transform: rotate(135deg) translate(0.25em, -0.25em); }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 2px solid #dbdbdb;\n    border-radius: 6px 6px 0 0;\n    border-top: none;\n    bottom: 100%;\n    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto; }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block; }\n  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0); }\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0; }\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto; }\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto; }\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20; }\n  .navbar-dropdown .navbar-item {\n    padding: 0.375rem 1rem;\n    white-space: nowrap; }\n  .navbar-dropdown a.navbar-item {\n    padding-right: 3rem; }\n  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a; }\n  .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #485fc7; }\n  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n    border-radius: 6px;\n    border-top: none;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    top: calc(100% + (-4px));\n    transform: translateY(-5px);\n    transition-duration: 86ms;\n    transition-property: opacity, transform; }\n  .navbar-dropdown.is-right {\n    left: auto;\n    right: 0; }\n  .navbar-divider {\n    display: block; }\n  .navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -0.75rem; }\n  .navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -0.75rem; }\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30; }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0; }\n  .navbar.is-fixed-bottom-desktop.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1); }\n  .navbar.is-fixed-top-desktop {\n    top: 0; }\n  html.has-navbar-fixed-top-desktop,\n  body.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem; }\n  html.has-navbar-fixed-bottom-desktop,\n  body.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem; }\n  html.has-spaced-navbar-fixed-top,\n  body.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem; }\n  html.has-spaced-navbar-fixed-bottom,\n  body.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem; }\n  a.navbar-item.is-active,\n  .navbar-link.is-active {\n    color: #0a0a0a; }\n  a.navbar-item.is-active:not(:focus):not(:hover),\n  .navbar-link.is-active:not(:focus):not(:hover) {\n    background-color: transparent; }\n  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa; } }\n\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem); }\n\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem; }\n\n.pagination.is-small {\n  font-size: 0.75rem; }\n\n.pagination.is-medium {\n  font-size: 1.25rem; }\n\n.pagination.is-large {\n  font-size: 1.5rem; }\n\n.pagination.is-rounded .pagination-previous,\n.pagination.is-rounded .pagination-next {\n  padding-left: 1em;\n  padding-right: 1em;\n  border-radius: 9999px; }\n\n.pagination.is-rounded .pagination-link {\n  border-radius: 9999px; }\n\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center; }\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  justify-content: center;\n  margin: 0.25rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  text-align: center; }\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.5em; }\n\n.pagination-previous:hover,\n.pagination-next:hover,\n.pagination-link:hover {\n  border-color: #b5b5b5;\n  color: #363636; }\n\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus {\n  border-color: #485fc7; }\n\n.pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2); }\n\n.pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled] {\n  background-color: #dbdbdb;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  color: #7a7a7a;\n  opacity: 0.5; }\n\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap; }\n\n.pagination-link.is-current {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff; }\n\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none; }\n\n.pagination-list {\n  flex-wrap: wrap; }\n\n.pagination-list li {\n  list-style: none; }\n\n@media screen and (max-width: 768px) {\n  .pagination {\n    flex-wrap: wrap; }\n  .pagination-previous,\n  .pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1; }\n  .pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1; } }\n\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1; }\n  .pagination-previous,\n  .pagination-next,\n  .pagination-link,\n  .pagination-ellipsis {\n    margin-bottom: 0;\n    margin-top: 0; }\n  .pagination-previous {\n    order: 2; }\n  .pagination-next {\n    order: 3; }\n  .pagination {\n    justify-content: space-between;\n    margin-bottom: 0;\n    margin-top: 0; }\n  .pagination.is-centered .pagination-previous {\n    order: 1; }\n  .pagination.is-centered .pagination-list {\n    justify-content: center;\n    order: 2; }\n  .pagination.is-centered .pagination-next {\n    order: 3; }\n  .pagination.is-right .pagination-previous {\n    order: 1; }\n  .pagination.is-right .pagination-next {\n    order: 2; }\n  .pagination.is-right .pagination-list {\n    justify-content: flex-end;\n    order: 3; } }\n\n.panel {\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  font-size: 1rem; }\n\n.panel:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.panel.is-white .panel-heading {\n  background-color: white;\n  color: #0a0a0a; }\n\n.panel.is-white .panel-tabs a.is-active {\n  border-bottom-color: white; }\n\n.panel.is-white .panel-block.is-active .panel-icon {\n  color: white; }\n\n.panel.is-black .panel-heading {\n  background-color: #0a0a0a;\n  color: white; }\n\n.panel.is-black .panel-tabs a.is-active {\n  border-bottom-color: #0a0a0a; }\n\n.panel.is-black .panel-block.is-active .panel-icon {\n  color: #0a0a0a; }\n\n.panel.is-light .panel-heading {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7); }\n\n.panel.is-light .panel-tabs a.is-active {\n  border-bottom-color: whitesmoke; }\n\n.panel.is-light .panel-block.is-active .panel-icon {\n  color: whitesmoke; }\n\n.panel.is-dark .panel-heading {\n  background-color: #363636;\n  color: #fff; }\n\n.panel.is-dark .panel-tabs a.is-active {\n  border-bottom-color: #363636; }\n\n.panel.is-dark .panel-block.is-active .panel-icon {\n  color: #363636; }\n\n.panel.is-primary .panel-heading {\n  background-color: #00d1b2;\n  color: #fff; }\n\n.panel.is-primary .panel-tabs a.is-active {\n  border-bottom-color: #00d1b2; }\n\n.panel.is-primary .panel-block.is-active .panel-icon {\n  color: #00d1b2; }\n\n.panel.is-link .panel-heading {\n  background-color: #485fc7;\n  color: #fff; }\n\n.panel.is-link .panel-tabs a.is-active {\n  border-bottom-color: #485fc7; }\n\n.panel.is-link .panel-block.is-active .panel-icon {\n  color: #485fc7; }\n\n.panel.is-info .panel-heading {\n  background-color: #3e8ed0;\n  color: #fff; }\n\n.panel.is-info .panel-tabs a.is-active {\n  border-bottom-color: #3e8ed0; }\n\n.panel.is-info .panel-block.is-active .panel-icon {\n  color: #3e8ed0; }\n\n.panel.is-success .panel-heading {\n  background-color: #48c78e;\n  color: #fff; }\n\n.panel.is-success .panel-tabs a.is-active {\n  border-bottom-color: #48c78e; }\n\n.panel.is-success .panel-block.is-active .panel-icon {\n  color: #48c78e; }\n\n.panel.is-warning .panel-heading {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7); }\n\n.panel.is-warning .panel-tabs a.is-active {\n  border-bottom-color: #ffe08a; }\n\n.panel.is-warning .panel-block.is-active .panel-icon {\n  color: #ffe08a; }\n\n.panel.is-danger .panel-heading {\n  background-color: #f14668;\n  color: #fff; }\n\n.panel.is-danger .panel-tabs a.is-active {\n  border-bottom-color: #f14668; }\n\n.panel.is-danger .panel-block.is-active .panel-icon {\n  color: #f14668; }\n\n.panel-tabs:not(:last-child),\n.panel-block:not(:last-child) {\n  border-bottom: 1px solid #ededed; }\n\n.panel-heading {\n  background-color: #ededed;\n  border-radius: 6px 6px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 700;\n  line-height: 1.25;\n  padding: 0.75em 1em; }\n\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center; }\n\n.panel-tabs a {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: -1px;\n  padding: 0.5em; }\n\n.panel-tabs a.is-active {\n  border-bottom-color: #4a4a4a;\n  color: #363636; }\n\n.panel-list a {\n  color: #4a4a4a; }\n\n.panel-list a:hover {\n  color: #485fc7; }\n\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em; }\n\n.panel-block input[type=\"checkbox\"] {\n  margin-right: 0.75em; }\n\n.panel-block > .control {\n  flex-grow: 1;\n  flex-shrink: 1;\n  width: 100%; }\n\n.panel-block.is-wrapped {\n  flex-wrap: wrap; }\n\n.panel-block.is-active {\n  border-left-color: #485fc7;\n  color: #363636; }\n\n.panel-block.is-active .panel-icon {\n  color: #485fc7; }\n\n.panel-block:last-child {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px; }\n\na.panel-block,\nlabel.panel-block {\n  cursor: pointer; }\n\na.panel-block:hover,\nlabel.panel-block:hover {\n  background-color: whitesmoke; }\n\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em; }\n\n.panel-icon .fa {\n  font-size: inherit;\n  line-height: inherit; }\n\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n\n.tabs a {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  /* color: #4a4a4a; */\n  color: #2cb3c5;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -1px;\n  padding: 0.5em 1em;\n  vertical-align: top; }\n\n.tabs a:hover {\n  border-bottom-color: #2cb3c5;\n  color: #2cb3c5; }\n\n.tabs li {\n  display: block; }\n\n.tabs li.is-active a {\n  border-bottom-color: #485fc7;\n  color: #485fc7; }\n\n.tabs ul {\n  align-items: center;\n  /* border-bottom-color: #474747; */\n  border-bottom-color: #742cd6;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: flex-start; }\n\n.tabs ul.is-left {\n  padding-right: 0.75em; }\n\n.tabs ul.is-center {\n  flex: none;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em; }\n\n.tabs ul.is-right {\n  justify-content: flex-end;\n  padding-left: 0.75em; }\n\n.tabs .icon:first-child {\n  margin-right: 0.5em; }\n\n.tabs .icon:last-child {\n  margin-left: 0.5em; }\n\n.tabs.is-centered ul {\n  justify-content: center; }\n\n.tabs.is-right ul {\n  justify-content: flex-end; }\n\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0; }\n\n.tabs.is-boxed a:hover {\n  background-color: #00ccae;\n  color: #111;\n  border-bottom-color: #00ccae; }\n\n.tabs.is-boxed li.is-active a {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-bottom-color: transparent !important; }\n\n.tabs.is-fullwidth li {\n  flex-grow: 1;\n  flex-shrink: 0; }\n\n.tabs.is-toggle a {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative; }\n\n.tabs.is-toggle a:hover {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n  z-index: 2; }\n\n.tabs.is-toggle li + li {\n  margin-left: -1px; }\n\n.tabs.is-toggle li:first-child a {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.tabs.is-toggle li:last-child a {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n.tabs.is-toggle li.is-active a {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff;\n  z-index: 1; }\n\n.tabs.is-toggle ul {\n  border-bottom: none; }\n\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n  border-bottom-left-radius: 9999px;\n  border-top-left-radius: 9999px;\n  padding-left: 1.25em; }\n\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n  border-bottom-right-radius: 9999px;\n  border-top-right-radius: 9999px;\n  padding-right: 1.25em; }\n\n.tabs.is-small {\n  font-size: 0.75rem; }\n\n.tabs.is-medium {\n  font-size: 1.25rem; }\n\n.tabs.is-large {\n  font-size: 1.5rem; }\n\n/* Bulma Grid */\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem; }\n\n.columns.is-mobile > .column.is-narrow {\n  flex: none;\n  width: unset; }\n\n.columns.is-mobile > .column.is-full {\n  flex: none;\n  width: 100%; }\n\n.columns.is-mobile > .column.is-three-quarters {\n  flex: none;\n  width: 75%; }\n\n.columns.is-mobile > .column.is-two-thirds {\n  flex: none;\n  width: 66.6666%; }\n\n.columns.is-mobile > .column.is-half {\n  flex: none;\n  width: 50%; }\n\n.columns.is-mobile > .column.is-one-third {\n  flex: none;\n  width: 33.3333%; }\n\n.columns.is-mobile > .column.is-one-quarter {\n  flex: none;\n  width: 25%; }\n\n.columns.is-mobile > .column.is-one-fifth {\n  flex: none;\n  width: 20%; }\n\n.columns.is-mobile > .column.is-two-fifths {\n  flex: none;\n  width: 40%; }\n\n.columns.is-mobile > .column.is-three-fifths {\n  flex: none;\n  width: 60%; }\n\n.columns.is-mobile > .column.is-four-fifths {\n  flex: none;\n  width: 80%; }\n\n.columns.is-mobile > .column.is-offset-three-quarters {\n  margin-left: 75%; }\n\n.columns.is-mobile > .column.is-offset-two-thirds {\n  margin-left: 66.6666%; }\n\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%; }\n\n.columns.is-mobile > .column.is-offset-one-third {\n  margin-left: 33.3333%; }\n\n.columns.is-mobile > .column.is-offset-one-quarter {\n  margin-left: 25%; }\n\n.columns.is-mobile > .column.is-offset-one-fifth {\n  margin-left: 20%; }\n\n.columns.is-mobile > .column.is-offset-two-fifths {\n  margin-left: 40%; }\n\n.columns.is-mobile > .column.is-offset-three-fifths {\n  margin-left: 60%; }\n\n.columns.is-mobile > .column.is-offset-four-fifths {\n  margin-left: 80%; }\n\n.columns.is-mobile > .column.is-0 {\n  flex: none;\n  width: 0%; }\n\n.columns.is-mobile > .column.is-offset-0 {\n  margin-left: 0%; }\n\n.columns.is-mobile > .column.is-1 {\n  flex: none;\n  width: 8.33333%; }\n\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333%; }\n\n.columns.is-mobile > .column.is-2 {\n  flex: none;\n  width: 16.66667%; }\n\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66667%; }\n\n.columns.is-mobile > .column.is-3 {\n  flex: none;\n  width: 25%; }\n\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%; }\n\n.columns.is-mobile > .column.is-4 {\n  flex: none;\n  width: 33.33333%; }\n\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333%; }\n\n.columns.is-mobile > .column.is-5 {\n  flex: none;\n  width: 41.66667%; }\n\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66667%; }\n\n.columns.is-mobile > .column.is-6 {\n  flex: none;\n  width: 50%; }\n\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%; }\n\n.columns.is-mobile > .column.is-7 {\n  flex: none;\n  width: 58.33333%; }\n\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333%; }\n\n.columns.is-mobile > .column.is-8 {\n  flex: none;\n  width: 66.66667%; }\n\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66667%; }\n\n.columns.is-mobile > .column.is-9 {\n  flex: none;\n  width: 75%; }\n\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%; }\n\n.columns.is-mobile > .column.is-10 {\n  flex: none;\n  width: 83.33333%; }\n\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333%; }\n\n.columns.is-mobile > .column.is-11 {\n  flex: none;\n  width: 91.66667%; }\n\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66667%; }\n\n.columns.is-mobile > .column.is-12 {\n  flex: none;\n  width: 100%; }\n\n.columns.is-mobile > .column.is-offset-12 {\n  margin-left: 100%; }\n\n@media screen and (max-width: 768px) {\n  .column.is-narrow-mobile {\n    flex: none;\n    width: unset; }\n  .column.is-full-mobile {\n    flex: none;\n    width: 100%; }\n  .column.is-three-quarters-mobile {\n    flex: none;\n    width: 75%; }\n  .column.is-two-thirds-mobile {\n    flex: none;\n    width: 66.6666%; }\n  .column.is-half-mobile {\n    flex: none;\n    width: 50%; }\n  .column.is-one-third-mobile {\n    flex: none;\n    width: 33.3333%; }\n  .column.is-one-quarter-mobile {\n    flex: none;\n    width: 25%; }\n  .column.is-one-fifth-mobile {\n    flex: none;\n    width: 20%; }\n  .column.is-two-fifths-mobile {\n    flex: none;\n    width: 40%; }\n  .column.is-three-fifths-mobile {\n    flex: none;\n    width: 60%; }\n  .column.is-four-fifths-mobile {\n    flex: none;\n    width: 80%; }\n  .column.is-offset-three-quarters-mobile {\n    margin-left: 75%; }\n  .column.is-offset-two-thirds-mobile {\n    margin-left: 66.6666%; }\n  .column.is-offset-half-mobile {\n    margin-left: 50%; }\n  .column.is-offset-one-third-mobile {\n    margin-left: 33.3333%; }\n  .column.is-offset-one-quarter-mobile {\n    margin-left: 25%; }\n  .column.is-offset-one-fifth-mobile {\n    margin-left: 20%; }\n  .column.is-offset-two-fifths-mobile {\n    margin-left: 40%; }\n  .column.is-offset-three-fifths-mobile {\n    margin-left: 60%; }\n  .column.is-offset-four-fifths-mobile {\n    margin-left: 80%; }\n  .column.is-0-mobile {\n    flex: none;\n    width: 0%; }\n  .column.is-offset-0-mobile {\n    margin-left: 0%; }\n  .column.is-1-mobile {\n    flex: none;\n    width: 8.33333%; }\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333%; }\n  .column.is-2-mobile {\n    flex: none;\n    width: 16.66667%; }\n  .column.is-offset-2-mobile {\n    margin-left: 16.66667%; }\n  .column.is-3-mobile {\n    flex: none;\n    width: 25%; }\n  .column.is-offset-3-mobile {\n    margin-left: 25%; }\n  .column.is-4-mobile {\n    flex: none;\n    width: 33.33333%; }\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333%; }\n  .column.is-5-mobile {\n    flex: none;\n    width: 41.66667%; }\n  .column.is-offset-5-mobile {\n    margin-left: 41.66667%; }\n  .column.is-6-mobile {\n    flex: none;\n    width: 50%; }\n  .column.is-offset-6-mobile {\n    margin-left: 50%; }\n  .column.is-7-mobile {\n    flex: none;\n    width: 58.33333%; }\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333%; }\n  .column.is-8-mobile {\n    flex: none;\n    width: 66.66667%; }\n  .column.is-offset-8-mobile {\n    margin-left: 66.66667%; }\n  .column.is-9-mobile {\n    flex: none;\n    width: 75%; }\n  .column.is-offset-9-mobile {\n    margin-left: 75%; }\n  .column.is-10-mobile {\n    flex: none;\n    width: 83.33333%; }\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333%; }\n  .column.is-11-mobile {\n    flex: none;\n    width: 91.66667%; }\n  .column.is-offset-11-mobile {\n    margin-left: 91.66667%; }\n  .column.is-12-mobile {\n    flex: none;\n    width: 100%; }\n  .column.is-offset-12-mobile {\n    margin-left: 100%; } }\n\n@media screen and (min-width: 769px), print {\n  .column.is-narrow, .column.is-narrow-tablet {\n    flex: none;\n    width: unset; }\n  .column.is-full, .column.is-full-tablet {\n    flex: none;\n    width: 100%; }\n  .column.is-three-quarters, .column.is-three-quarters-tablet {\n    flex: none;\n    width: 75%; }\n  .column.is-two-thirds, .column.is-two-thirds-tablet {\n    flex: none;\n    width: 66.6666%; }\n  .column.is-half, .column.is-half-tablet {\n    flex: none;\n    width: 50%; }\n  .column.is-one-third, .column.is-one-third-tablet {\n    flex: none;\n    width: 33.3333%; }\n  .column.is-one-quarter, .column.is-one-quarter-tablet {\n    flex: none;\n    width: 25%; }\n  .column.is-one-fifth, .column.is-one-fifth-tablet {\n    flex: none;\n    width: 20%; }\n  .column.is-two-fifths, .column.is-two-fifths-tablet {\n    flex: none;\n    width: 40%; }\n  .column.is-three-fifths, .column.is-three-fifths-tablet {\n    flex: none;\n    width: 60%; }\n  .column.is-four-fifths, .column.is-four-fifths-tablet {\n    flex: none;\n    width: 80%; }\n  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n    margin-left: 75%; }\n  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n    margin-left: 66.6666%; }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%; }\n  .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n    margin-left: 33.3333%; }\n  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n    margin-left: 25%; }\n  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n    margin-left: 20%; }\n  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n    margin-left: 40%; }\n  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n    margin-left: 60%; }\n  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n    margin-left: 80%; }\n  .column.is-0, .column.is-0-tablet {\n    flex: none;\n    width: 0%; }\n  .column.is-offset-0, .column.is-offset-0-tablet {\n    margin-left: 0%; }\n  .column.is-1, .column.is-1-tablet {\n    flex: none;\n    width: 8.33333%; }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.33333%; }\n  .column.is-2, .column.is-2-tablet {\n    flex: none;\n    width: 16.66667%; }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.66667%; }\n  .column.is-3, .column.is-3-tablet {\n    flex: none;\n    width: 25%; }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%; }\n  .column.is-4, .column.is-4-tablet {\n    flex: none;\n    width: 33.33333%; }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.33333%; }\n  .column.is-5, .column.is-5-tablet {\n    flex: none;\n    width: 41.66667%; }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.66667%; }\n  .column.is-6, .column.is-6-tablet {\n    flex: none;\n    width: 50%; }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%; }\n  .column.is-7, .column.is-7-tablet {\n    flex: none;\n    width: 58.33333%; }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.33333%; }\n  .column.is-8, .column.is-8-tablet {\n    flex: none;\n    width: 66.66667%; }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.66667%; }\n  .column.is-9, .column.is-9-tablet {\n    flex: none;\n    width: 75%; }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%; }\n  .column.is-10, .column.is-10-tablet {\n    flex: none;\n    width: 83.33333%; }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.33333%; }\n  .column.is-11, .column.is-11-tablet {\n    flex: none;\n    width: 91.66667%; }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.66667%; }\n  .column.is-12, .column.is-12-tablet {\n    flex: none;\n    width: 100%; }\n  .column.is-offset-12, .column.is-offset-12-tablet {\n    margin-left: 100%; } }\n\n@media screen and (max-width: 1023px) {\n  .column.is-narrow-touch {\n    flex: none;\n    width: unset; }\n  .column.is-full-touch {\n    flex: none;\n    width: 100%; }\n  .column.is-three-quarters-touch {\n    flex: none;\n    width: 75%; }\n  .column.is-two-thirds-touch {\n    flex: none;\n    width: 66.6666%; }\n  .column.is-half-touch {\n    flex: none;\n    width: 50%; }\n  .column.is-one-third-touch {\n    flex: none;\n    width: 33.3333%; }\n  .column.is-one-quarter-touch {\n    flex: none;\n    width: 25%; }\n  .column.is-one-fifth-touch {\n    flex: none;\n    width: 20%; }\n  .column.is-two-fifths-touch {\n    flex: none;\n    width: 40%; }\n  .column.is-three-fifths-touch {\n    flex: none;\n    width: 60%; }\n  .column.is-four-fifths-touch {\n    flex: none;\n    width: 80%; }\n  .column.is-offset-three-quarters-touch {\n    margin-left: 75%; }\n  .column.is-offset-two-thirds-touch {\n    margin-left: 66.6666%; }\n  .column.is-offset-half-touch {\n    margin-left: 50%; }\n  .column.is-offset-one-third-touch {\n    margin-left: 33.3333%; }\n  .column.is-offset-one-quarter-touch {\n    margin-left: 25%; }\n  .column.is-offset-one-fifth-touch {\n    margin-left: 20%; }\n  .column.is-offset-two-fifths-touch {\n    margin-left: 40%; }\n  .column.is-offset-three-fifths-touch {\n    margin-left: 60%; }\n  .column.is-offset-four-fifths-touch {\n    margin-left: 80%; }\n  .column.is-0-touch {\n    flex: none;\n    width: 0%; }\n  .column.is-offset-0-touch {\n    margin-left: 0%; }\n  .column.is-1-touch {\n    flex: none;\n    width: 8.33333%; }\n  .column.is-offset-1-touch {\n    margin-left: 8.33333%; }\n  .column.is-2-touch {\n    flex: none;\n    width: 16.66667%; }\n  .column.is-offset-2-touch {\n    margin-left: 16.66667%; }\n  .column.is-3-touch {\n    flex: none;\n    width: 25%; }\n  .column.is-offset-3-touch {\n    margin-left: 25%; }\n  .column.is-4-touch {\n    flex: none;\n    width: 33.33333%; }\n  .column.is-offset-4-touch {\n    margin-left: 33.33333%; }\n  .column.is-5-touch {\n    flex: none;\n    width: 41.66667%; }\n  .column.is-offset-5-touch {\n    margin-left: 41.66667%; }\n  .column.is-6-touch {\n    flex: none;\n    width: 50%; }\n  .column.is-offset-6-touch {\n    margin-left: 50%; }\n  .column.is-7-touch {\n    flex: none;\n    width: 58.33333%; }\n  .column.is-offset-7-touch {\n    margin-left: 58.33333%; }\n  .column.is-8-touch {\n    flex: none;\n    width: 66.66667%; }\n  .column.is-offset-8-touch {\n    margin-left: 66.66667%; }\n  .column.is-9-touch {\n    flex: none;\n    width: 75%; }\n  .column.is-offset-9-touch {\n    margin-left: 75%; }\n  .column.is-10-touch {\n    flex: none;\n    width: 83.33333%; }\n  .column.is-offset-10-touch {\n    margin-left: 83.33333%; }\n  .column.is-11-touch {\n    flex: none;\n    width: 91.66667%; }\n  .column.is-offset-11-touch {\n    margin-left: 91.66667%; }\n  .column.is-12-touch {\n    flex: none;\n    width: 100%; }\n  .column.is-offset-12-touch {\n    margin-left: 100%; } }\n\n@media screen and (min-width: 1024px) {\n  .column.is-narrow-desktop {\n    flex: none;\n    width: unset; }\n  .column.is-full-desktop {\n    flex: none;\n    width: 100%; }\n  .column.is-three-quarters-desktop {\n    flex: none;\n    width: 75%; }\n  .column.is-two-thirds-desktop {\n    flex: none;\n    width: 66.6666%; }\n  .column.is-half-desktop {\n    flex: none;\n    width: 50%; }\n  .column.is-one-third-desktop {\n    flex: none;\n    width: 33.3333%; }\n  .column.is-one-quarter-desktop {\n    flex: none;\n    width: 25%; }\n  .column.is-one-fifth-desktop {\n    flex: none;\n    width: 20%; }\n  .column.is-two-fifths-desktop {\n    flex: none;\n    width: 40%; }\n  .column.is-three-fifths-desktop {\n    flex: none;\n    width: 60%; }\n  .column.is-four-fifths-desktop {\n    flex: none;\n    width: 80%; }\n  .column.is-offset-three-quarters-desktop {\n    margin-left: 75%; }\n  .column.is-offset-two-thirds-desktop {\n    margin-left: 66.6666%; }\n  .column.is-offset-half-desktop {\n    margin-left: 50%; }\n  .column.is-offset-one-third-desktop {\n    margin-left: 33.3333%; }\n  .column.is-offset-one-quarter-desktop {\n    margin-left: 25%; }\n  .column.is-offset-one-fifth-desktop {\n    margin-left: 20%; }\n  .column.is-offset-two-fifths-desktop {\n    margin-left: 40%; }\n  .column.is-offset-three-fifths-desktop {\n    margin-left: 60%; }\n  .column.is-offset-four-fifths-desktop {\n    margin-left: 80%; }\n  .column.is-0-desktop {\n    flex: none;\n    width: 0%; }\n  .column.is-offset-0-desktop {\n    margin-left: 0%; }\n  .column.is-1-desktop {\n    flex: none;\n    width: 8.33333%; }\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333%; }\n  .column.is-2-desktop {\n    flex: none;\n    width: 16.66667%; }\n  .column.is-offset-2-desktop {\n    margin-left: 16.66667%; }\n  .column.is-3-desktop {\n    flex: none;\n    width: 25%; }\n  .column.is-offset-3-desktop {\n    margin-left: 25%; }\n  .column.is-4-desktop {\n    flex: none;\n    width: 33.33333%; }\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333%; }\n  .column.is-5-desktop {\n    flex: none;\n    width: 41.66667%; }\n  .column.is-offset-5-desktop {\n    margin-left: 41.66667%; }\n  .column.is-6-desktop {\n    flex: none;\n    width: 50%; }\n  .column.is-offset-6-desktop {\n    margin-left: 50%; }\n  .column.is-7-desktop {\n    flex: none;\n    width: 58.33333%; }\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333%; }\n  .column.is-8-desktop {\n    flex: none;\n    width: 66.66667%; }\n  .column.is-offset-8-desktop {\n    margin-left: 66.66667%; }\n  .column.is-9-desktop {\n    flex: none;\n    width: 75%; }\n  .column.is-offset-9-desktop {\n    margin-left: 75%; }\n  .column.is-10-desktop {\n    flex: none;\n    width: 83.33333%; }\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333%; }\n  .column.is-11-desktop {\n    flex: none;\n    width: 91.66667%; }\n  .column.is-offset-11-desktop {\n    margin-left: 91.66667%; }\n  .column.is-12-desktop {\n    flex: none;\n    width: 100%; }\n  .column.is-offset-12-desktop {\n    margin-left: 100%; } }\n\n@media screen and (min-width: 1216px) {\n  .column.is-narrow-widescreen {\n    flex: none;\n    width: unset; }\n  .column.is-full-widescreen {\n    flex: none;\n    width: 100%; }\n  .column.is-three-quarters-widescreen {\n    flex: none;\n    width: 75%; }\n  .column.is-two-thirds-widescreen {\n    flex: none;\n    width: 66.6666%; }\n  .column.is-half-widescreen {\n    flex: none;\n    width: 50%; }\n  .column.is-one-third-widescreen {\n    flex: none;\n    width: 33.3333%; }\n  .column.is-one-quarter-widescreen {\n    flex: none;\n    width: 25%; }\n  .column.is-one-fifth-widescreen {\n    flex: none;\n    width: 20%; }\n  .column.is-two-fifths-widescreen {\n    flex: none;\n    width: 40%; }\n  .column.is-three-fifths-widescreen {\n    flex: none;\n    width: 60%; }\n  .column.is-four-fifths-widescreen {\n    flex: none;\n    width: 80%; }\n  .column.is-offset-three-quarters-widescreen {\n    margin-left: 75%; }\n  .column.is-offset-two-thirds-widescreen {\n    margin-left: 66.6666%; }\n  .column.is-offset-half-widescreen {\n    margin-left: 50%; }\n  .column.is-offset-one-third-widescreen {\n    margin-left: 33.3333%; }\n  .column.is-offset-one-quarter-widescreen {\n    margin-left: 25%; }\n  .column.is-offset-one-fifth-widescreen {\n    margin-left: 20%; }\n  .column.is-offset-two-fifths-widescreen {\n    margin-left: 40%; }\n  .column.is-offset-three-fifths-widescreen {\n    margin-left: 60%; }\n  .column.is-offset-four-fifths-widescreen {\n    margin-left: 80%; }\n  .column.is-0-widescreen {\n    flex: none;\n    width: 0%; }\n  .column.is-offset-0-widescreen {\n    margin-left: 0%; }\n  .column.is-1-widescreen {\n    flex: none;\n    width: 8.33333%; }\n  .column.is-offset-1-widescreen {\n    margin-left: 8.33333%; }\n  .column.is-2-widescreen {\n    flex: none;\n    width: 16.66667%; }\n  .column.is-offset-2-widescreen {\n    margin-left: 16.66667%; }\n  .column.is-3-widescreen {\n    flex: none;\n    width: 25%; }\n  .column.is-offset-3-widescreen {\n    margin-left: 25%; }\n  .column.is-4-widescreen {\n    flex: none;\n    width: 33.33333%; }\n  .column.is-offset-4-widescreen {\n    margin-left: 33.33333%; }\n  .column.is-5-widescreen {\n    flex: none;\n    width: 41.66667%; }\n  .column.is-offset-5-widescreen {\n    margin-left: 41.66667%; }\n  .column.is-6-widescreen {\n    flex: none;\n    width: 50%; }\n  .column.is-offset-6-widescreen {\n    margin-left: 50%; }\n  .column.is-7-widescreen {\n    flex: none;\n    width: 58.33333%; }\n  .column.is-offset-7-widescreen {\n    margin-left: 58.33333%; }\n  .column.is-8-widescreen {\n    flex: none;\n    width: 66.66667%; }\n  .column.is-offset-8-widescreen {\n    margin-left: 66.66667%; }\n  .column.is-9-widescreen {\n    flex: none;\n    width: 75%; }\n  .column.is-offset-9-widescreen {\n    margin-left: 75%; }\n  .column.is-10-widescreen {\n    flex: none;\n    width: 83.33333%; }\n  .column.is-offset-10-widescreen {\n    margin-left: 83.33333%; }\n  .column.is-11-widescreen {\n    flex: none;\n    width: 91.66667%; }\n  .column.is-offset-11-widescreen {\n    margin-left: 91.66667%; }\n  .column.is-12-widescreen {\n    flex: none;\n    width: 100%; }\n  .column.is-offset-12-widescreen {\n    margin-left: 100%; } }\n\n@media screen and (min-width: 1408px) {\n  .column.is-narrow-fullhd {\n    flex: none;\n    width: unset; }\n  .column.is-full-fullhd {\n    flex: none;\n    width: 100%; }\n  .column.is-three-quarters-fullhd {\n    flex: none;\n    width: 75%; }\n  .column.is-two-thirds-fullhd {\n    flex: none;\n    width: 66.6666%; }\n  .column.is-half-fullhd {\n    flex: none;\n    width: 50%; }\n  .column.is-one-third-fullhd {\n    flex: none;\n    width: 33.3333%; }\n  .column.is-one-quarter-fullhd {\n    flex: none;\n    width: 25%; }\n  .column.is-one-fifth-fullhd {\n    flex: none;\n    width: 20%; }\n  .column.is-two-fifths-fullhd {\n    flex: none;\n    width: 40%; }\n  .column.is-three-fifths-fullhd {\n    flex: none;\n    width: 60%; }\n  .column.is-four-fifths-fullhd {\n    flex: none;\n    width: 80%; }\n  .column.is-offset-three-quarters-fullhd {\n    margin-left: 75%; }\n  .column.is-offset-two-thirds-fullhd {\n    margin-left: 66.6666%; }\n  .column.is-offset-half-fullhd {\n    margin-left: 50%; }\n  .column.is-offset-one-third-fullhd {\n    margin-left: 33.3333%; }\n  .column.is-offset-one-quarter-fullhd {\n    margin-left: 25%; }\n  .column.is-offset-one-fifth-fullhd {\n    margin-left: 20%; }\n  .column.is-offset-two-fifths-fullhd {\n    margin-left: 40%; }\n  .column.is-offset-three-fifths-fullhd {\n    margin-left: 60%; }\n  .column.is-offset-four-fifths-fullhd {\n    margin-left: 80%; }\n  .column.is-0-fullhd {\n    flex: none;\n    width: 0%; }\n  .column.is-offset-0-fullhd {\n    margin-left: 0%; }\n  .column.is-1-fullhd {\n    flex: none;\n    width: 8.33333%; }\n  .column.is-offset-1-fullhd {\n    margin-left: 8.33333%; }\n  .column.is-2-fullhd {\n    flex: none;\n    width: 16.66667%; }\n  .column.is-offset-2-fullhd {\n    margin-left: 16.66667%; }\n  .column.is-3-fullhd {\n    flex: none;\n    width: 25%; }\n  .column.is-offset-3-fullhd {\n    margin-left: 25%; }\n  .column.is-4-fullhd {\n    flex: none;\n    width: 33.33333%; }\n  .column.is-offset-4-fullhd {\n    margin-left: 33.33333%; }\n  .column.is-5-fullhd {\n    flex: none;\n    width: 41.66667%; }\n  .column.is-offset-5-fullhd {\n    margin-left: 41.66667%; }\n  .column.is-6-fullhd {\n    flex: none;\n    width: 50%; }\n  .column.is-offset-6-fullhd {\n    margin-left: 50%; }\n  .column.is-7-fullhd {\n    flex: none;\n    width: 58.33333%; }\n  .column.is-offset-7-fullhd {\n    margin-left: 58.33333%; }\n  .column.is-8-fullhd {\n    flex: none;\n    width: 66.66667%; }\n  .column.is-offset-8-fullhd {\n    margin-left: 66.66667%; }\n  .column.is-9-fullhd {\n    flex: none;\n    width: 75%; }\n  .column.is-offset-9-fullhd {\n    margin-left: 75%; }\n  .column.is-10-fullhd {\n    flex: none;\n    width: 83.33333%; }\n  .column.is-offset-10-fullhd {\n    margin-left: 83.33333%; }\n  .column.is-11-fullhd {\n    flex: none;\n    width: 91.66667%; }\n  .column.is-offset-11-fullhd {\n    margin-left: 91.66667%; }\n  .column.is-12-fullhd {\n    flex: none;\n    width: 100%; }\n  .column.is-offset-12-fullhd {\n    margin-left: 100%; } }\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem; }\n\n.columns:last-child {\n  margin-bottom: -0.75rem; }\n\n.columns:not(:last-child) {\n  margin-bottom: calc(1.5rem - 0.75rem); }\n\n.columns.is-centered {\n  justify-content: center; }\n\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0; }\n\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0 !important; }\n\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.columns.is-gapless:last-child {\n  margin-bottom: 0; }\n\n.columns.is-mobile {\n  display: flex; }\n\n.columns.is-multiline {\n  flex-wrap: wrap; }\n\n.columns.is-vcentered {\n  align-items: center; }\n\n@media screen and (min-width: 769px), print {\n  .columns:not(.is-desktop) {\n    display: flex; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-desktop {\n    display: flex; } }\n\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap)); }\n\n.columns.is-variable > .column {\n  padding-left: var(--columnGap);\n  padding-right: var(--columnGap); }\n\n.columns.is-variable.is-0 {\n  --columnGap: 0rem; }\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-0-mobile {\n    --columnGap: 0rem; } }\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-0-tablet {\n    --columnGap: 0rem; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-0-tablet-only {\n    --columnGap: 0rem; } }\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-0-touch {\n    --columnGap: 0rem; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-0-desktop {\n    --columnGap: 0rem; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-0-desktop-only {\n    --columnGap: 0rem; } }\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-0-widescreen {\n    --columnGap: 0rem; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-0-widescreen-only {\n    --columnGap: 0rem; } }\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-0-fullhd {\n    --columnGap: 0rem; } }\n\n.columns.is-variable.is-1 {\n  --columnGap: 0.25rem; }\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-1-mobile {\n    --columnGap: 0.25rem; } }\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-1-tablet {\n    --columnGap: 0.25rem; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-1-tablet-only {\n    --columnGap: 0.25rem; } }\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-1-touch {\n    --columnGap: 0.25rem; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-1-desktop {\n    --columnGap: 0.25rem; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-1-desktop-only {\n    --columnGap: 0.25rem; } }\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-1-widescreen {\n    --columnGap: 0.25rem; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-1-widescreen-only {\n    --columnGap: 0.25rem; } }\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-1-fullhd {\n    --columnGap: 0.25rem; } }\n\n.columns.is-variable.is-2 {\n  --columnGap: 0.5rem; }\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-2-mobile {\n    --columnGap: 0.5rem; } }\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-2-tablet {\n    --columnGap: 0.5rem; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-2-tablet-only {\n    --columnGap: 0.5rem; } }\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-2-touch {\n    --columnGap: 0.5rem; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-2-desktop {\n    --columnGap: 0.5rem; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-2-desktop-only {\n    --columnGap: 0.5rem; } }\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-2-widescreen {\n    --columnGap: 0.5rem; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-2-widescreen-only {\n    --columnGap: 0.5rem; } }\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-2-fullhd {\n    --columnGap: 0.5rem; } }\n\n.columns.is-variable.is-3 {\n  --columnGap: 0.75rem; }\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-3-mobile {\n    --columnGap: 0.75rem; } }\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-3-tablet {\n    --columnGap: 0.75rem; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-3-tablet-only {\n    --columnGap: 0.75rem; } }\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-3-touch {\n    --columnGap: 0.75rem; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-3-desktop {\n    --columnGap: 0.75rem; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-3-desktop-only {\n    --columnGap: 0.75rem; } }\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-3-widescreen {\n    --columnGap: 0.75rem; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-3-widescreen-only {\n    --columnGap: 0.75rem; } }\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-3-fullhd {\n    --columnGap: 0.75rem; } }\n\n.columns.is-variable.is-4 {\n  --columnGap: 1rem; }\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-4-mobile {\n    --columnGap: 1rem; } }\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-4-tablet {\n    --columnGap: 1rem; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-4-tablet-only {\n    --columnGap: 1rem; } }\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-4-touch {\n    --columnGap: 1rem; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-4-desktop {\n    --columnGap: 1rem; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-4-desktop-only {\n    --columnGap: 1rem; } }\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-4-widescreen {\n    --columnGap: 1rem; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-4-widescreen-only {\n    --columnGap: 1rem; } }\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-4-fullhd {\n    --columnGap: 1rem; } }\n\n.columns.is-variable.is-5 {\n  --columnGap: 1.25rem; }\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-5-mobile {\n    --columnGap: 1.25rem; } }\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-5-tablet {\n    --columnGap: 1.25rem; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-5-tablet-only {\n    --columnGap: 1.25rem; } }\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-5-touch {\n    --columnGap: 1.25rem; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-5-desktop {\n    --columnGap: 1.25rem; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-5-desktop-only {\n    --columnGap: 1.25rem; } }\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-5-widescreen {\n    --columnGap: 1.25rem; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-5-widescreen-only {\n    --columnGap: 1.25rem; } }\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-5-fullhd {\n    --columnGap: 1.25rem; } }\n\n.columns.is-variable.is-6 {\n  --columnGap: 1.5rem; }\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-6-mobile {\n    --columnGap: 1.5rem; } }\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-6-tablet {\n    --columnGap: 1.5rem; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-6-tablet-only {\n    --columnGap: 1.5rem; } }\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-6-touch {\n    --columnGap: 1.5rem; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-6-desktop {\n    --columnGap: 1.5rem; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-6-desktop-only {\n    --columnGap: 1.5rem; } }\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-6-widescreen {\n    --columnGap: 1.5rem; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-6-widescreen-only {\n    --columnGap: 1.5rem; } }\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-6-fullhd {\n    --columnGap: 1.5rem; } }\n\n.columns.is-variable.is-7 {\n  --columnGap: 1.75rem; }\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-7-mobile {\n    --columnGap: 1.75rem; } }\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-7-tablet {\n    --columnGap: 1.75rem; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-7-tablet-only {\n    --columnGap: 1.75rem; } }\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-7-touch {\n    --columnGap: 1.75rem; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-7-desktop {\n    --columnGap: 1.75rem; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-7-desktop-only {\n    --columnGap: 1.75rem; } }\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-7-widescreen {\n    --columnGap: 1.75rem; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-7-widescreen-only {\n    --columnGap: 1.75rem; } }\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-7-fullhd {\n    --columnGap: 1.75rem; } }\n\n.columns.is-variable.is-8 {\n  --columnGap: 2rem; }\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-8-mobile {\n    --columnGap: 2rem; } }\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-8-tablet {\n    --columnGap: 2rem; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-8-tablet-only {\n    --columnGap: 2rem; } }\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-8-touch {\n    --columnGap: 2rem; } }\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-8-desktop {\n    --columnGap: 2rem; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-8-desktop-only {\n    --columnGap: 2rem; } }\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-8-widescreen {\n    --columnGap: 2rem; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-8-widescreen-only {\n    --columnGap: 2rem; } }\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-8-fullhd {\n    --columnGap: 2rem; } }\n\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content; }\n\n.tile.is-ancestor {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem; }\n\n.tile.is-ancestor:last-child {\n  margin-bottom: -0.75rem; }\n\n.tile.is-ancestor:not(:last-child) {\n  margin-bottom: 0.75rem; }\n\n.tile.is-child {\n  margin: 0 !important; }\n\n.tile.is-parent {\n  padding: 0.75rem; }\n\n.tile.is-vertical {\n  flex-direction: column; }\n\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n  margin-bottom: 1.5rem !important; }\n\n@media screen and (min-width: 769px), print {\n  .tile:not(.is-child) {\n    display: flex; }\n  .tile.is-1 {\n    flex: none;\n    width: 8.33333%; }\n  .tile.is-2 {\n    flex: none;\n    width: 16.66667%; }\n  .tile.is-3 {\n    flex: none;\n    width: 25%; }\n  .tile.is-4 {\n    flex: none;\n    width: 33.33333%; }\n  .tile.is-5 {\n    flex: none;\n    width: 41.66667%; }\n  .tile.is-6 {\n    flex: none;\n    width: 50%; }\n  .tile.is-7 {\n    flex: none;\n    width: 58.33333%; }\n  .tile.is-8 {\n    flex: none;\n    width: 66.66667%; }\n  .tile.is-9 {\n    flex: none;\n    width: 75%; }\n  .tile.is-10 {\n    flex: none;\n    width: 83.33333%; }\n  .tile.is-11 {\n    flex: none;\n    width: 91.66667%; }\n  .tile.is-12 {\n    flex: none;\n    width: 100%; } }\n\n/* Bulma Helpers */\n.has-text-white {\n  color: white !important; }\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important; }\n\n.has-background-white {\n  background-color: white !important; }\n\n.has-text-black {\n  color: #0a0a0a !important; }\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important; }\n\n.has-background-black {\n  background-color: #0a0a0a !important; }\n\n.has-text-light {\n  color: whitesmoke !important; }\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important; }\n\n.has-background-light {\n  background-color: whitesmoke !important; }\n\n.has-text-dark {\n  color: #363636 !important; }\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important; }\n\n.has-background-dark {\n  background-color: #363636 !important; }\n\n.has-text-primary {\n  color: #2cb3c5 !important; }\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  /* color: #009e86 !important; */\n  color: #111 !important; }\n\n.has-background-primary {\n  background-color: #00d1b2 !important; }\n\n.has-text-primary-light {\n  color: #ebfffc !important; }\n\na.has-text-primary-light:hover, a.has-text-primary-light:focus {\n  color: #b8fff4 !important; }\n\n.has-background-primary-light {\n  background-color: #ebfffc !important; }\n\n.has-text-primary-dark {\n  color: #00947e !important; }\n\na.has-text-primary-dark:hover, a.has-text-primary-dark:focus {\n  color: #00c7a9 !important; }\n\n.has-background-primary-dark {\n  background-color: #00947e !important; }\n\n.has-text-link {\n  color: #485fc7 !important; }\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #3449a8 !important; }\n\n.has-background-link {\n  background-color: #485fc7 !important; }\n\n.has-text-link-light {\n  color: #eff1fa !important; }\n\na.has-text-link-light:hover, a.has-text-link-light:focus {\n  color: #c8cfee !important; }\n\n.has-background-link-light {\n  background-color: #eff1fa !important; }\n\n.has-text-link-dark {\n  color: #3850b7 !important; }\n\na.has-text-link-dark:hover, a.has-text-link-dark:focus {\n  color: #576dcb !important; }\n\n.has-background-link-dark {\n  background-color: #3850b7 !important; }\n\n.has-text-info {\n  color: #3e8ed0 !important; }\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #2b74b1 !important; }\n\n.has-background-info {\n  background-color: #3e8ed0 !important; }\n\n.has-text-info-light {\n  color: #eff5fb !important; }\n\na.has-text-info-light:hover, a.has-text-info-light:focus {\n  color: #c6ddf1 !important; }\n\n.has-background-info-light {\n  background-color: #eff5fb !important; }\n\n.has-text-info-dark {\n  color: #296fa8 !important; }\n\na.has-text-info-dark:hover, a.has-text-info-dark:focus {\n  color: #368ace !important; }\n\n.has-background-info-dark {\n  background-color: #296fa8 !important; }\n\n.has-text-success {\n  color: #48c78e !important; }\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #34a873 !important; }\n\n.has-background-success {\n  background-color: #48c78e !important; }\n\n.has-text-success-light {\n  color: #effaf5 !important; }\n\na.has-text-success-light:hover, a.has-text-success-light:focus {\n  color: #c8eedd !important; }\n\n.has-background-success-light {\n  background-color: #effaf5 !important; }\n\n.has-text-success-dark {\n  color: #257953 !important; }\n\na.has-text-success-dark:hover, a.has-text-success-dark:focus {\n  color: #31a06e !important; }\n\n.has-background-success-dark {\n  background-color: #257953 !important; }\n\n.has-text-warning {\n  color: #ffe08a !important; }\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd257 !important; }\n\n.has-background-warning {\n  background-color: #ffe08a !important; }\n\n.has-text-warning-light {\n  color: #fffaeb !important; }\n\na.has-text-warning-light:hover, a.has-text-warning-light:focus {\n  color: #ffecb8 !important; }\n\n.has-background-warning-light {\n  background-color: #fffaeb !important; }\n\n.has-text-warning-dark {\n  color: #946c00 !important; }\n\na.has-text-warning-dark:hover, a.has-text-warning-dark:focus {\n  color: #c79200 !important; }\n\n.has-background-warning-dark {\n  background-color: #946c00 !important; }\n\n.has-text-danger {\n  color: #f14668 !important; }\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ee1742 !important; }\n\n.has-background-danger {\n  background-color: #f14668 !important; }\n\n.has-text-danger-light {\n  color: #feecf0 !important; }\n\na.has-text-danger-light:hover, a.has-text-danger-light:focus {\n  color: #fabdc9 !important; }\n\n.has-background-danger-light {\n  background-color: #feecf0 !important; }\n\n.has-text-danger-dark {\n  color: #cc0f35 !important; }\n\na.has-text-danger-dark:hover, a.has-text-danger-dark:focus {\n  color: #ee2049 !important; }\n\n.has-background-danger-dark {\n  background-color: #cc0f35 !important; }\n\n.has-text-black-bis {\n  color: #121212 !important; }\n\n.has-background-black-bis {\n  background-color: #121212 !important; }\n\n.has-text-black-ter {\n  color: #242424 !important; }\n\n.has-background-black-ter {\n  background-color: #242424 !important; }\n\n.has-text-grey-darker {\n  color: #363636 !important; }\n\n.has-background-grey-darker {\n  background-color: #363636 !important; }\n\n.has-text-grey-dark {\n  color: #4a4a4a !important; }\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important; }\n\n.has-text-grey {\n  color: #7a7a7a !important; }\n\n.has-background-grey {\n  background-color: #7a7a7a !important; }\n\n.has-text-grey-light {\n  color: #b5b5b5 !important; }\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important; }\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important; }\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important; }\n\n.has-text-white-ter {\n  color: whitesmoke !important; }\n\n.has-background-white-ter {\n  background-color: whitesmoke !important; }\n\n.has-text-white-bis {\n  color: #fafafa !important; }\n\n.has-background-white-bis {\n  background-color: #fafafa !important; }\n\n.is-flex-direction-row {\n  flex-direction: row !important; }\n\n.is-flex-direction-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.is-flex-direction-column {\n  flex-direction: column !important; }\n\n.is-flex-direction-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.is-flex-wrap-nowrap {\n  flex-wrap: nowrap !important; }\n\n.is-flex-wrap-wrap {\n  flex-wrap: wrap !important; }\n\n.is-flex-wrap-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.is-justify-content-flex-start {\n  justify-content: flex-start !important; }\n\n.is-justify-content-flex-end {\n  justify-content: flex-end !important; }\n\n.is-justify-content-center {\n  justify-content: center !important; }\n\n.is-justify-content-space-between {\n  justify-content: space-between !important; }\n\n.is-justify-content-space-around {\n  justify-content: space-around !important; }\n\n.is-justify-content-space-evenly {\n  justify-content: space-evenly !important; }\n\n.is-justify-content-start {\n  justify-content: start !important; }\n\n.is-justify-content-end {\n  justify-content: end !important; }\n\n.is-justify-content-left {\n  justify-content: left !important; }\n\n.is-justify-content-right {\n  justify-content: right !important; }\n\n.is-align-content-flex-start {\n  align-content: flex-start !important; }\n\n.is-align-content-flex-end {\n  align-content: flex-end !important; }\n\n.is-align-content-center {\n  align-content: center !important; }\n\n.is-align-content-space-between {\n  align-content: space-between !important; }\n\n.is-align-content-space-around {\n  align-content: space-around !important; }\n\n.is-align-content-space-evenly {\n  align-content: space-evenly !important; }\n\n.is-align-content-stretch {\n  align-content: stretch !important; }\n\n.is-align-content-start {\n  align-content: start !important; }\n\n.is-align-content-end {\n  align-content: end !important; }\n\n.is-align-content-baseline {\n  align-content: baseline !important; }\n\n.is-align-items-stretch {\n  align-items: stretch !important; }\n\n.is-align-items-flex-start {\n  align-items: flex-start !important; }\n\n.is-align-items-flex-end {\n  align-items: flex-end !important; }\n\n.is-align-items-center {\n  align-items: center !important; }\n\n.is-align-items-baseline {\n  align-items: baseline !important; }\n\n.is-align-items-start {\n  align-items: start !important; }\n\n.is-align-items-end {\n  align-items: end !important; }\n\n.is-align-items-self-start {\n  align-items: self-start !important; }\n\n.is-align-items-self-end {\n  align-items: self-end !important; }\n\n.is-align-self-auto {\n  align-self: auto !important; }\n\n.is-align-self-flex-start {\n  align-self: flex-start !important; }\n\n.is-align-self-flex-end {\n  align-self: flex-end !important; }\n\n.is-align-self-center {\n  align-self: center !important; }\n\n.is-align-self-baseline {\n  align-self: baseline !important; }\n\n.is-align-self-stretch {\n  align-self: stretch !important; }\n\n.is-flex-grow-0 {\n  flex-grow: 0 !important; }\n\n.is-flex-grow-1 {\n  flex-grow: 1 !important; }\n\n.is-flex-grow-2 {\n  flex-grow: 2 !important; }\n\n.is-flex-grow-3 {\n  flex-grow: 3 !important; }\n\n.is-flex-grow-4 {\n  flex-grow: 4 !important; }\n\n.is-flex-grow-5 {\n  flex-grow: 5 !important; }\n\n.is-flex-shrink-0 {\n  flex-shrink: 0 !important; }\n\n.is-flex-shrink-1 {\n  flex-shrink: 1 !important; }\n\n.is-flex-shrink-2 {\n  flex-shrink: 2 !important; }\n\n.is-flex-shrink-3 {\n  flex-shrink: 3 !important; }\n\n.is-flex-shrink-4 {\n  flex-shrink: 4 !important; }\n\n.is-flex-shrink-5 {\n  flex-shrink: 5 !important; }\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table; }\n\n.is-pulled-left {\n  float: left !important; }\n\n.is-pulled-right {\n  float: right !important; }\n\n.is-radiusless {\n  border-radius: 0 !important; }\n\n.is-shadowless {\n  box-shadow: none !important; }\n\n.is-clickable {\n  cursor: pointer !important;\n  pointer-events: all !important; }\n\n.is-clipped {\n  overflow: hidden !important; }\n\n.is-relative {\n  position: relative !important; }\n\n.is-marginless {\n  margin: 0 !important; }\n\n.is-paddingless {\n  padding: 0 !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0 {\n  margin-top: 0 !important; }\n\n.mr-0 {\n  margin-right: 0 !important; }\n\n.mb-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0 {\n  margin-left: 0 !important; }\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1 {\n  margin-left: 0.25rem !important; }\n\n.mx-1 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important; }\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2 {\n  margin-left: 0.5rem !important; }\n\n.mx-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important; }\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important; }\n\n.m-3 {\n  margin: 0.75rem !important; }\n\n.mt-3 {\n  margin-top: 0.75rem !important; }\n\n.mr-3 {\n  margin-right: 0.75rem !important; }\n\n.mb-3 {\n  margin-bottom: 0.75rem !important; }\n\n.ml-3 {\n  margin-left: 0.75rem !important; }\n\n.mx-3 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important; }\n\n.my-3 {\n  margin-top: 0.75rem !important;\n  margin-bottom: 0.75rem !important; }\n\n.m-4 {\n  margin: 1rem !important; }\n\n.mt-4 {\n  margin-top: 1rem !important; }\n\n.mr-4 {\n  margin-right: 1rem !important; }\n\n.mb-4 {\n  margin-bottom: 1rem !important; }\n\n.ml-4 {\n  margin-left: 1rem !important; }\n\n.mx-4 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important; }\n\n.my-4 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important; }\n\n.m-5 {\n  margin: 1.5rem !important; }\n\n.mt-5 {\n  margin-top: 1.5rem !important; }\n\n.mr-5 {\n  margin-right: 1.5rem !important; }\n\n.mb-5 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-5 {\n  margin-left: 1.5rem !important; }\n\n.mx-5 {\n  margin-left: 1.5rem !important;\n  margin-right: 1.5rem !important; }\n\n.my-5 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important; }\n\n.m-6 {\n  margin: 3rem !important; }\n\n.mt-6 {\n  margin-top: 3rem !important; }\n\n.mr-6 {\n  margin-right: 3rem !important; }\n\n.mb-6 {\n  margin-bottom: 3rem !important; }\n\n.ml-6 {\n  margin-left: 3rem !important; }\n\n.mx-6 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important; }\n\n.my-6 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto {\n  margin-top: auto !important; }\n\n.mr-auto {\n  margin-right: auto !important; }\n\n.mb-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto {\n  margin-left: auto !important; }\n\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important; }\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0 {\n  padding-top: 0 !important; }\n\n.pr-0 {\n  padding-right: 0 !important; }\n\n.pb-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0 {\n  padding-left: 0 !important; }\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1 {\n  padding-left: 0.25rem !important; }\n\n.px-1 {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important; }\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2 {\n  padding-left: 0.5rem !important; }\n\n.px-2 {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important; }\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important; }\n\n.p-3 {\n  padding: 0.75rem !important; }\n\n.pt-3 {\n  padding-top: 0.75rem !important; }\n\n.pr-3 {\n  padding-right: 0.75rem !important; }\n\n.pb-3 {\n  padding-bottom: 0.75rem !important; }\n\n.pl-3 {\n  padding-left: 0.75rem !important; }\n\n.px-3 {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important; }\n\n.py-3 {\n  padding-top: 0.75rem !important;\n  padding-bottom: 0.75rem !important; }\n\n.p-4 {\n  padding: 1rem !important; }\n\n.pt-4 {\n  padding-top: 1rem !important; }\n\n.pr-4 {\n  padding-right: 1rem !important; }\n\n.pb-4 {\n  padding-bottom: 1rem !important; }\n\n.pl-4 {\n  padding-left: 1rem !important; }\n\n.px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important; }\n\n.py-4 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important; }\n\n.p-5 {\n  padding: 1.5rem !important; }\n\n.pt-5 {\n  padding-top: 1.5rem !important; }\n\n.pr-5 {\n  padding-right: 1.5rem !important; }\n\n.pb-5 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-5 {\n  padding-left: 1.5rem !important; }\n\n.px-5 {\n  padding-left: 1.5rem !important;\n  padding-right: 1.5rem !important; }\n\n.py-5 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important; }\n\n.p-6 {\n  padding: 3rem !important; }\n\n.pt-6 {\n  padding-top: 3rem !important; }\n\n.pr-6 {\n  padding-right: 3rem !important; }\n\n.pb-6 {\n  padding-bottom: 3rem !important; }\n\n.pl-6 {\n  padding-left: 3rem !important; }\n\n.px-6 {\n  padding-left: 3rem !important;\n  padding-right: 3rem !important; }\n\n.py-6 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important; }\n\n.p-auto {\n  padding: auto !important; }\n\n.pt-auto {\n  padding-top: auto !important; }\n\n.pr-auto {\n  padding-right: auto !important; }\n\n.pb-auto {\n  padding-bottom: auto !important; }\n\n.pl-auto {\n  padding-left: auto !important; }\n\n.px-auto {\n  padding-left: auto !important;\n  padding-right: auto !important; }\n\n.py-auto {\n  padding-top: auto !important;\n  padding-bottom: auto !important; }\n\n.is-size-1 {\n  font-size: 3rem !important; }\n\n.is-size-2 {\n  font-size: 2.5rem !important; }\n\n.is-size-3 {\n  font-size: 2rem !important; }\n\n.is-size-4 {\n  font-size: 1.5rem !important; }\n\n.is-size-5 {\n  font-size: 1.25rem !important; }\n\n.is-size-6 {\n  font-size: 1rem !important; }\n\n.is-size-7 {\n  font-size: 0.75rem !important; }\n\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important; }\n  .is-size-2-mobile {\n    font-size: 2.5rem !important; }\n  .is-size-3-mobile {\n    font-size: 2rem !important; }\n  .is-size-4-mobile {\n    font-size: 1.5rem !important; }\n  .is-size-5-mobile {\n    font-size: 1.25rem !important; }\n  .is-size-6-mobile {\n    font-size: 1rem !important; }\n  .is-size-7-mobile {\n    font-size: 0.75rem !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important; }\n  .is-size-2-tablet {\n    font-size: 2.5rem !important; }\n  .is-size-3-tablet {\n    font-size: 2rem !important; }\n  .is-size-4-tablet {\n    font-size: 1.5rem !important; }\n  .is-size-5-tablet {\n    font-size: 1.25rem !important; }\n  .is-size-6-tablet {\n    font-size: 1rem !important; }\n  .is-size-7-tablet {\n    font-size: 0.75rem !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important; }\n  .is-size-2-touch {\n    font-size: 2.5rem !important; }\n  .is-size-3-touch {\n    font-size: 2rem !important; }\n  .is-size-4-touch {\n    font-size: 1.5rem !important; }\n  .is-size-5-touch {\n    font-size: 1.25rem !important; }\n  .is-size-6-touch {\n    font-size: 1rem !important; }\n  .is-size-7-touch {\n    font-size: 0.75rem !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important; }\n  .is-size-2-desktop {\n    font-size: 2.5rem !important; }\n  .is-size-3-desktop {\n    font-size: 2rem !important; }\n  .is-size-4-desktop {\n    font-size: 1.5rem !important; }\n  .is-size-5-desktop {\n    font-size: 1.25rem !important; }\n  .is-size-6-desktop {\n    font-size: 1rem !important; }\n  .is-size-7-desktop {\n    font-size: 0.75rem !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important; }\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important; }\n  .is-size-3-widescreen {\n    font-size: 2rem !important; }\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important; }\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important; }\n  .is-size-6-widescreen {\n    font-size: 1rem !important; }\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important; }\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important; }\n  .is-size-3-fullhd {\n    font-size: 2rem !important; }\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important; }\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important; }\n  .is-size-6-fullhd {\n    font-size: 1rem !important; }\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important; } }\n\n.has-text-centered {\n  text-align: center !important; }\n\n.has-text-justified {\n  text-align: justify !important; }\n\n.has-text-left {\n  text-align: left !important; }\n\n.has-text-right {\n  text-align: right !important; }\n\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important; } }\n\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important; } }\n\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important; } }\n\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important; } }\n\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important; } }\n\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important; } }\n\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important; } }\n\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important; } }\n\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important; } }\n\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important; } }\n\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important; } }\n\n.is-capitalized {\n  text-transform: capitalize !important; }\n\n.is-lowercase {\n  text-transform: lowercase !important; }\n\n.is-uppercase {\n  text-transform: uppercase !important; }\n\n.is-italic {\n  font-style: italic !important; }\n\n.is-underlined {\n  text-decoration: underline !important; }\n\n.has-text-weight-light {\n  font-weight: 300 !important; }\n\n.has-text-weight-normal {\n  font-weight: 400 !important; }\n\n.has-text-weight-medium {\n  font-weight: 500 !important; }\n\n.has-text-weight-semibold {\n  font-weight: 600 !important; }\n\n.has-text-weight-bold {\n  font-weight: 700 !important; }\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n\n.is-family-monospace {\n  font-family: monospace !important; }\n\n.is-family-code {\n  font-family: monospace !important; }\n\n.is-block {\n  display: block !important; }\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important; } }\n\n.is-flex {\n  display: flex !important; }\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: flex !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: flex !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: flex !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: flex !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: flex !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: flex !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: flex !important; } }\n\n.is-inline {\n  display: inline !important; }\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important; } }\n\n.is-inline-block {\n  display: inline-block !important; }\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important; } }\n\n.is-inline-flex {\n  display: inline-flex !important; }\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: inline-flex !important; } }\n\n.is-hidden {\n  display: none !important; }\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important; }\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important; } }\n\n.is-invisible {\n  visibility: hidden !important; }\n\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important; } }\n\n/* Bulma Layout */\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.hero .navbar {\n  background: none; }\n\n.hero .tabs ul {\n  border-bottom: none; }\n\n.hero.is-white {\n  background-color: white;\n  color: #0a0a0a; }\n\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-white strong {\n  color: inherit; }\n\n.hero.is-white .title {\n  color: #0a0a0a; }\n\n.hero.is-white .subtitle {\n  color: rgba(10, 10, 10, 0.9); }\n\n.hero.is-white .subtitle a:not(.button),\n.hero.is-white .subtitle strong {\n  color: #0a0a0a; }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-white .navbar-menu {\n    background-color: white; } }\n\n.hero.is-white .navbar-item,\n.hero.is-white .navbar-link {\n  color: rgba(10, 10, 10, 0.7); }\n\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n.hero.is-white .navbar-link:hover,\n.hero.is-white .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a; }\n\n.hero.is-white .tabs a {\n  color: #0a0a0a;\n  opacity: 0.9; }\n\n.hero.is-white .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-white .tabs li.is-active a {\n  color: white !important;\n  opacity: 1; }\n\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n  color: #0a0a0a; }\n\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white; }\n\n.hero.is-white.is-bold {\n  background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-white.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%); } }\n\n.hero.is-black {\n  background-color: #0a0a0a;\n  color: white; }\n\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-black strong {\n  color: inherit; }\n\n.hero.is-black .title {\n  color: white; }\n\n.hero.is-black .subtitle {\n  color: rgba(255, 255, 255, 0.9); }\n\n.hero.is-black .subtitle a:not(.button),\n.hero.is-black .subtitle strong {\n  color: white; }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-black .navbar-menu {\n    background-color: #0a0a0a; } }\n\n.hero.is-black .navbar-item,\n.hero.is-black .navbar-link {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n.hero.is-black .navbar-link:hover,\n.hero.is-black .navbar-link.is-active {\n  background-color: black;\n  color: white; }\n\n.hero.is-black .tabs a {\n  color: white;\n  opacity: 0.9; }\n\n.hero.is-black .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-black .tabs li.is-active a {\n  color: #0a0a0a !important;\n  opacity: 1; }\n\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n  color: white; }\n\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a; }\n\n.hero.is-black.is-bold {\n  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-black.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%); } }\n\n.hero.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-light strong {\n  color: inherit; }\n\n.hero.is-light .title {\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-light .subtitle {\n  color: rgba(0, 0, 0, 0.9); }\n\n.hero.is-light .subtitle a:not(.button),\n.hero.is-light .subtitle strong {\n  color: rgba(0, 0, 0, 0.7); }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-light .navbar-menu {\n    background-color: whitesmoke; } }\n\n.hero.is-light .navbar-item,\n.hero.is-light .navbar-link {\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n.hero.is-light .navbar-link:hover,\n.hero.is-light .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-light .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9; }\n\n.hero.is-light .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-light .tabs li.is-active a {\n  color: whitesmoke !important;\n  opacity: 1; }\n\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke; }\n\n.hero.is-light.is-bold {\n  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-light.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%); } }\n\n.hero.is-dark {\n  background-color: #363636;\n  color: #fff; }\n\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-dark strong {\n  color: inherit; }\n\n.hero.is-dark .title {\n  color: #fff; }\n\n.hero.is-dark .subtitle {\n  color: rgba(255, 255, 255, 0.9); }\n\n.hero.is-dark .subtitle a:not(.button),\n.hero.is-dark .subtitle strong {\n  color: #fff; }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-dark .navbar-menu {\n    background-color: #363636; } }\n\n.hero.is-dark .navbar-item,\n.hero.is-dark .navbar-link {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n.hero.is-dark .navbar-link:hover,\n.hero.is-dark .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff; }\n\n.hero.is-dark .tabs a {\n  color: #fff;\n  opacity: 0.9; }\n\n.hero.is-dark .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-dark .tabs li.is-active a {\n  color: #363636 !important;\n  opacity: 1; }\n\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: #fff; }\n\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #363636; }\n\n.hero.is-dark.is-bold {\n  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-dark.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%); } }\n\n.hero.is-primary {\n  background-color: #00d1b2;\n  color: #fff; }\n\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-primary strong {\n  color: inherit; }\n\n.hero.is-primary .title {\n  color: #fff; }\n\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.9); }\n\n.hero.is-primary .subtitle a:not(.button),\n.hero.is-primary .subtitle strong {\n  color: #fff; }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-primary .navbar-menu {\n    background-color: #00d1b2; } }\n\n.hero.is-primary .navbar-item,\n.hero.is-primary .navbar-link {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n.hero.is-primary .navbar-link:hover,\n.hero.is-primary .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff; }\n\n.hero.is-primary .tabs a {\n  color: #fff;\n  opacity: 0.9; }\n\n.hero.is-primary .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-primary .tabs li.is-active a {\n  color: #00d1b2 !important;\n  opacity: 1; }\n\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: #fff; }\n\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #00d1b2; }\n\n.hero.is-primary.is-bold {\n  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-primary.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%); } }\n\n.hero.is-link {\n  background-color: #485fc7;\n  color: #fff; }\n\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-link strong {\n  color: inherit; }\n\n.hero.is-link .title {\n  color: #fff; }\n\n.hero.is-link .subtitle {\n  color: rgba(255, 255, 255, 0.9); }\n\n.hero.is-link .subtitle a:not(.button),\n.hero.is-link .subtitle strong {\n  color: #fff; }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-link .navbar-menu {\n    background-color: #485fc7; } }\n\n.hero.is-link .navbar-item,\n.hero.is-link .navbar-link {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n.hero.is-link .navbar-link:hover,\n.hero.is-link .navbar-link.is-active {\n  background-color: #3a51bb;\n  color: #fff; }\n\n.hero.is-link .tabs a {\n  color: #fff;\n  opacity: 0.9; }\n\n.hero.is-link .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-link .tabs li.is-active a {\n  color: #485fc7 !important;\n  opacity: 1; }\n\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n  color: #fff; }\n\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #485fc7; }\n\n.hero.is-link.is-bold {\n  background-image: linear-gradient(141deg, #2959b3 0%, #485fc7 71%, #5658d2 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-link.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #2959b3 0%, #485fc7 71%, #5658d2 100%); } }\n\n.hero.is-info {\n  background-color: #3e8ed0;\n  color: #fff; }\n\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-info strong {\n  color: inherit; }\n\n.hero.is-info .title {\n  color: #fff; }\n\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.9); }\n\n.hero.is-info .subtitle a:not(.button),\n.hero.is-info .subtitle strong {\n  color: #fff; }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-info .navbar-menu {\n    background-color: #3e8ed0; } }\n\n.hero.is-info .navbar-item,\n.hero.is-info .navbar-link {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n.hero.is-info .navbar-link:hover,\n.hero.is-info .navbar-link.is-active {\n  background-color: #3082c5;\n  color: #fff; }\n\n.hero.is-info .tabs a {\n  color: #fff;\n  opacity: 0.9; }\n\n.hero.is-info .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-info .tabs li.is-active a {\n  color: #3e8ed0 !important;\n  opacity: 1; }\n\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: #fff; }\n\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #3e8ed0; }\n\n.hero.is-info.is-bold {\n  background-image: linear-gradient(141deg, #208fbc 0%, #3e8ed0 71%, #4d83db 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-info.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #208fbc 0%, #3e8ed0 71%, #4d83db 100%); } }\n\n.hero.is-success {\n  background-color: #48c78e;\n  color: #fff; }\n\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-success strong {\n  color: inherit; }\n\n.hero.is-success .title {\n  color: #fff; }\n\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.9); }\n\n.hero.is-success .subtitle a:not(.button),\n.hero.is-success .subtitle strong {\n  color: #fff; }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-success .navbar-menu {\n    background-color: #48c78e; } }\n\n.hero.is-success .navbar-item,\n.hero.is-success .navbar-link {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n.hero.is-success .navbar-link:hover,\n.hero.is-success .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff; }\n\n.hero.is-success .tabs a {\n  color: #fff;\n  opacity: 0.9; }\n\n.hero.is-success .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-success .tabs li.is-active a {\n  color: #48c78e !important;\n  opacity: 1; }\n\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: #fff; }\n\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #48c78e; }\n\n.hero.is-success.is-bold {\n  background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-success.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%); } }\n\n.hero.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-warning strong {\n  color: inherit; }\n\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.9); }\n\n.hero.is-warning .subtitle a:not(.button),\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.7); }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-warning .navbar-menu {\n    background-color: #ffe08a; } }\n\n.hero.is-warning .navbar-item,\n.hero.is-warning .navbar-link {\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n.hero.is-warning .navbar-link:hover,\n.hero.is-warning .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9; }\n\n.hero.is-warning .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-warning .tabs li.is-active a {\n  color: #ffe08a !important;\n  opacity: 1; }\n\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a; }\n\n.hero.is-warning.is-bold {\n  background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-warning.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%); } }\n\n.hero.is-danger {\n  background-color: #f14668;\n  color: #fff; }\n\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-danger strong {\n  color: inherit; }\n\n.hero.is-danger .title {\n  color: #fff; }\n\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.9); }\n\n.hero.is-danger .subtitle a:not(.button),\n.hero.is-danger .subtitle strong {\n  color: #fff; }\n\n@media screen and (max-width: 1023px) {\n  .hero.is-danger .navbar-menu {\n    background-color: #f14668; } }\n\n.hero.is-danger .navbar-item,\n.hero.is-danger .navbar-link {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n.hero.is-danger .navbar-link:hover,\n.hero.is-danger .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff; }\n\n.hero.is-danger .tabs a {\n  color: #fff;\n  opacity: 0.9; }\n\n.hero.is-danger .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-danger .tabs li.is-active a {\n  color: #f14668 !important;\n  opacity: 1; }\n\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: #fff; }\n\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1); }\n\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #f14668; }\n\n.hero.is-danger.is-bold {\n  background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-danger.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%); } }\n\n.hero.is-small .hero-body {\n  padding: 1.5rem; }\n\n@media screen and (min-width: 769px), print {\n  .hero.is-medium .hero-body {\n    padding: 9rem 4.5rem; } }\n\n@media screen and (min-width: 769px), print {\n  .hero.is-large .hero-body {\n    padding: 18rem 6rem; } }\n\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n  align-items: center;\n  display: flex; }\n\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n  flex-grow: 1;\n  flex-shrink: 1; }\n\n.hero.is-halfheight {\n  min-height: 50vh; }\n\n.hero.is-fullheight {\n  min-height: 100vh; }\n\n.hero-video {\n  overflow: hidden; }\n\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0); }\n\n.hero-video.is-transparent {\n  opacity: 0.3; }\n\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none; } }\n\n.hero-buttons {\n  margin-top: 1.5rem; }\n\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: flex; }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 0.75rem; } }\n\n@media screen and (min-width: 769px), print {\n  .hero-buttons {\n    display: flex;\n    justify-content: center; }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 1.5rem; } }\n\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem; }\n\n@media screen and (min-width: 769px), print {\n  .hero-body {\n    padding: 3rem 3rem; } }\n\n.section {\n  padding: 3rem 1.5rem; }\n\n@media screen and (min-width: 1024px) {\n  .section {\n    padding: 3rem 3rem; }\n  .section.is-medium {\n    padding: 9rem 4.5rem; }\n  .section.is-large {\n    padding: 18rem 6rem; } }\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem; }\n\n/*# sourceMappingURL=bulma.css.map */\n", "",{"version":3,"sources":["webpack://./src/bulma.css"],"names":[],"mappings":"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,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE,mBAAY,EAAA;;AAGd;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE,oBAAY,EAAA;;AAGd;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE,iBAAY,EAAA;;AAGd;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE,oBAAY,EAAA;;AAGd;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE,mBAAY,EAAA;;AAGd;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE;IACE,mBAAY,EAAA,EACb;;AAGH;EACE,oBAAY,EAAA;;AAGd;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE;IACE,oBAAY,EAAA,EACb;;AAGH;EACE,iBAAY,EAAA;;AAGd;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE;IACE,iBAAY,EAAA,EACb;;AAGH;EACE,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,YAAY;EACZ,cAAc;EACd,+BAA+B;EAC/B,4BAA4B;EAC5B,uBAAuB,EAAA;;AAGzB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,oBAAoB,EAAA;;AAGtB;EACE,uBAAuB,EAAA;;AAGzB;EACE,sBAAsB,EAAA;;AAGxB;EACE,oBAAoB,EAAA;;AAGtB;EACE,gBAAgB,EAAA;;AAGlB;EACE,sBAAsB,EAAA;;AAGxB;EACE,gCAAgC,EAAA;;AAGlC;EACE;IACE,aAAa,EAAA;EAEf;IACE,UAAU;IACV,eAAe,EAAA;EAEjB;IACE,UAAU;IACV,gBAAgB,EAAA;EAElB;IACE,UAAU;IACV,UAAU,EAAA;EAEZ;IACE,UAAU;IACV,gBAAgB,EAAA;EAElB;IACE,UAAU;IACV,gBAAgB,EAAA;EAElB;IACE,UAAU;IACV,UAAU,EAAA;EAEZ;IACE,UAAU;IACV,gBAAgB,EAAA;EAElB;IACE,UAAU;IACV,gBAAgB,EAAA;EAElB;IACE,UAAU;IACV,UAAU,EAAA;EAEZ;IACE,UAAU;IACV,gBAAgB,EAAA;EAElB;IACE,UAAU;IACV,gBAAgB,EAAA;EAElB;IACE,UAAU;IACV,WAAW,EAAA,EACZ;;AAGH,kBAAA;AACA;EACE,uBAAuB,EAAA;;AAGzB;EACE,yBAAyB,EAAA;;AAG3B;EACE,kCAAkC,EAAA;;AAGpC;EACE,yBAAyB,EAAA;;AAG3B;EACE,uBAAuB,EAAA;;AAGzB;EACE,oCAAoC,EAAA;;AAGtC;EACE,4BAA4B,EAAA;;AAG9B;EACE,yBAAyB,EAAA;;AAG3B;EACE,uCAAuC,EAAA;;AAGzC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,+BAAA;EACA,sBAAsB,EAAA;;AAGxB;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,4BAA4B,EAAA;;AAG9B;EACE,uCAAuC,EAAA;;AAGzC;EACE,yBAAyB,EAAA;;AAG3B;EACE,oCAAoC,EAAA;;AAGtC;EACE,8BAA8B,EAAA;;AAGhC;EACE,sCAAsC,EAAA;;AAGxC;EACE,iCAAiC,EAAA;;AAGnC;EACE,yCAAyC,EAAA;;AAG3C;EACE,4BAA4B,EAAA;;AAG9B;EACE,0BAA0B,EAAA;;AAG5B;EACE,kCAAkC,EAAA;;AAGpC;EACE,sCAAsC,EAAA;;AAGxC;EACE,oCAAoC,EAAA;;AAGtC;EACE,kCAAkC,EAAA;;AAGpC;EACE,yCAAyC,EAAA;;AAG3C;EACE,wCAAwC,EAAA;;AAG1C;EACE,wCAAwC,EAAA;;AAG1C;EACE,iCAAiC,EAAA;;AAGnC;EACE,+BAA+B,EAAA;;AAGjC;EACE,gCAAgC,EAAA;;AAGlC;EACE,iCAAiC,EAAA;;AAGnC;EACE,oCAAoC,EAAA;;AAGtC;EACE,kCAAkC,EAAA;;AAGpC;EACE,gCAAgC,EAAA;;AAGlC;EACE,uCAAuC,EAAA;;AAGzC;EACE,sCAAsC,EAAA;;AAGxC;EACE,sCAAsC,EAAA;;AAGxC;EACE,iCAAiC,EAAA;;AAGnC;EACE,+BAA+B,EAAA;;AAGjC;EACE,6BAA6B,EAAA;;AAG/B;EACE,kCAAkC,EAAA;;AAGpC;EACE,+BAA+B,EAAA;;AAGjC;EACE,kCAAkC,EAAA;;AAGpC;EACE,gCAAgC,EAAA;;AAGlC;EACE,8BAA8B,EAAA;;AAGhC;EACE,gCAAgC,EAAA;;AAGlC;EACE,6BAA6B,EAAA;;AAG/B;EACE,2BAA2B,EAAA;;AAG7B;EACE,kCAAkC,EAAA;;AAGpC;EACE,gCAAgC,EAAA;;AAGlC;EACE,2BAA2B,EAAA;;AAG7B;EACE,iCAAiC,EAAA;;AAGnC;EACE,+BAA+B,EAAA;;AAGjC;EACE,6BAA6B,EAAA;;AAG/B;EACE,+BAA+B,EAAA;;AAGjC;EACE,8BAA8B,EAAA;;AAGhC;EACE,uBAAuB,EAAA;;AAGzB;EACE,uBAAuB,EAAA;;AAGzB;EACE,uBAAuB,EAAA;;AAGzB;EACE,uBAAuB,EAAA;;AAGzB;EACE,uBAAuB,EAAA;;AAGzB;EACE,uBAAuB,EAAA;;AAGzB;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;EACE,WAAW;EACX,YAAY;EACZ,cAAc,EAAA;;AAGhB;EACE,sBAAsB,EAAA;;AAGxB;EACE,uBAAuB,EAAA;;AAGzB;EACE,2BAA2B,EAAA;;AAG7B;EACE,2BAA2B,EAAA;;AAG7B;EACE,0BAA0B;EAC1B,8BAA8B,EAAA;;AAGhC;EACE,2BAA2B,EAAA;;AAG7B;EACE,6BAA6B,EAAA;;AAG/B;EACE,oBAAoB,EAAA;;AAGtB;EACE,qBAAqB,EAAA;;AAGvB;EACE,oBAAoB,EAAA;;AAGtB;EACE,wBAAwB,EAAA;;AAG1B;EACE,0BAA0B,EAAA;;AAG5B;EACE,2BAA2B,EAAA;;AAG7B;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB;EACzB,0BAA0B,EAAA;;AAG5B;EACE,wBAAwB;EACxB,2BAA2B,EAAA;;AAG7B;EACE,0BAA0B,EAAA;;AAG5B;EACE,8BAA8B,EAAA;;AAGhC;EACE,gCAAgC,EAAA;;AAGlC;EACE,iCAAiC,EAAA;;AAGnC;EACE,+BAA+B,EAAA;;AAGjC;EACE,+BAA+B;EAC/B,gCAAgC,EAAA;;AAGlC;EACE,8BAA8B;EAC9B,iCAAiC,EAAA;;AAGnC;EACE,yBAAyB,EAAA;;AAG3B;EACE,6BAA6B,EAAA;;AAG/B;EACE,+BAA+B,EAAA;;AAGjC;EACE,gCAAgC,EAAA;;AAGlC;EACE,8BAA8B,EAAA;;AAGhC;EACE,8BAA8B;EAC9B,+BAA+B,EAAA;;AAGjC;EACE,6BAA6B;EAC7B,gCAAgC,EAAA;;AAGlC;EACE,0BAA0B,EAAA;;AAG5B;EACE,8BAA8B,EAAA;;AAGhC;EACE,gCAAgC,EAAA;;AAGlC;EACE,iCAAiC,EAAA;;AAGnC;EACE,+BAA+B,EAAA;;AAGjC;EACE,+BAA+B;EAC/B,gCAAgC,EAAA;;AAGlC;EACE,8BAA8B;EAC9B,iCAAiC,EAAA;;AAGnC;EACE,uBAAuB,EAAA;;AAGzB;EACE,2BAA2B,EAAA;;AAG7B;EACE,6BAA6B,EAAA;;AAG/B;EACE,8BAA8B,EAAA;;AAGhC;EACE,4BAA4B,EAAA;;AAG9B;EACE,4BAA4B;EAC5B,6BAA6B,EAAA;;AAG/B;EACE,2BAA2B;EAC3B,8BAA8B,EAAA;;AAGhC;EACE,yBAAyB,EAAA;;AAG3B;EACE,6BAA6B,EAAA;;AAG/B;EACE,+BAA+B,EAAA;;AAGjC;EACE,gCAAgC,EAAA;;AAGlC;EACE,8BAA8B,EAAA;;AAGhC;EACE,8BAA8B;EAC9B,+BAA+B,EAAA;;AAGjC;EACE,6BAA6B;EAC7B,gCAAgC,EAAA;;AAGlC;EACE,uBAAuB,EAAA;;AAGzB;EACE,2BAA2B,EAAA;;AAG7B;EACE,6BAA6B,EAAA;;AAG/B;EACE,8BAA8B,EAAA;;AAGhC;EACE,4BAA4B,EAAA;;AAG9B;EACE,4BAA4B;EAC5B,6BAA6B,EAAA;;AAG/B;EACE,2BAA2B;EAC3B,8BAA8B,EAAA;;AAGhC;EACE,uBAAuB,EAAA;;AAGzB;EACE,2BAA2B,EAAA;;AAG7B;EACE,6BAA6B,EAAA;;AAG/B;EACE,8BAA8B,EAAA;;AAGhC;EACE,4BAA4B,EAAA;;AAG9B;EACE,4BAA4B;EAC5B,6BAA6B,EAAA;;AAG/B;EACE,2BAA2B;EAC3B,8BAA8B,EAAA;;AAGhC;EACE,qBAAqB,EAAA;;AAGvB;EACE,yBAAyB,EAAA;;AAG3B;EACE,2BAA2B,EAAA;;AAG7B;EACE,4BAA4B,EAAA;;AAG9B;EACE,0BAA0B,EAAA;;AAG5B;EACE,0BAA0B;EAC1B,2BAA2B,EAAA;;AAG7B;EACE,yBAAyB;EACzB,4BAA4B,EAAA;;AAG9B;EACE,2BAA2B,EAAA;;AAG7B;EACE,+BAA+B,EAAA;;AAGjC;EACE,iCAAiC,EAAA;;AAGnC;EACE,kCAAkC,EAAA;;AAGpC;EACE,gCAAgC,EAAA;;AAGlC;EACE,gCAAgC;EAChC,iCAAiC,EAAA;;AAGnC;EACE,+BAA+B;EAC/B,kCAAkC,EAAA;;AAGpC;EACE,0BAA0B,EAAA;;AAG5B;EACE,8BAA8B,EAAA;;AAGhC;EACE,gCAAgC,EAAA;;AAGlC;EACE,iCAAiC,EAAA;;AAGnC;EACE,+BAA+B,EAAA;;AAGjC;EACE,+BAA+B;EAC/B,gCAAgC,EAAA;;AAGlC;EACE,8BAA8B;EAC9B,iCAAiC,EAAA;;AAGnC;EACE,2BAA2B,EAAA;;AAG7B;EACE,+BAA+B,EAAA;;AAGjC;EACE,iCAAiC,EAAA;;AAGnC;EACE,kCAAkC,EAAA;;AAGpC;EACE,gCAAgC,EAAA;;AAGlC;EACE,gCAAgC;EAChC,iCAAiC,EAAA;;AAGnC;EACE,+BAA+B;EAC/B,kCAAkC,EAAA;;AAGpC;EACE,wBAAwB,EAAA;;AAG1B;EACE,4BAA4B,EAAA;;AAG9B;EACE,8BAA8B,EAAA;;AAGhC;EACE,+BAA+B,EAAA;;AAGjC;EACE,6BAA6B,EAAA;;AAG/B;EACE,6BAA6B;EAC7B,8BAA8B,EAAA;;AAGhC;EACE,4BAA4B;EAC5B,+BAA+B,EAAA;;AAGjC;EACE,0BAA0B,EAAA;;AAG5B;EACE,8BAA8B,EAAA;;AAGhC;EACE,gCAAgC,EAAA;;AAGlC;EACE,iCAAiC,EAAA;;AAGnC;EACE,+BAA+B,EAAA;;AAGjC;EACE,+BAA+B;EAC/B,gCAAgC,EAAA;;AAGlC;EACE,8BAA8B;EAC9B,iCAAiC,EAAA;;AAGnC;EACE,wBAAwB,EAAA;;AAG1B;EACE,4BAA4B,EAAA;;AAG9B;EACE,8BAA8B,EAAA;;AAGhC;EACE,+BAA+B,EAAA;;AAGjC;EACE,6BAA6B,EAAA;;AAG/B;EACE,6BAA6B;EAC7B,8BAA8B,EAAA;;AAGhC;EACE,4BAA4B;EAC5B,+BAA+B,EAAA;;AAGjC;EACE,wBAAwB,EAAA;;AAG1B;EACE,4BAA4B,EAAA;;AAG9B;EACE,8BAA8B,EAAA;;AAGhC;EACE,+BAA+B,EAAA;;AAGjC;EACE,6BAA6B,EAAA;;AAG/B;EACE,6BAA6B;EAC7B,8BAA8B,EAAA;;AAGhC;EACE,4BAA4B;EAC5B,+BAA+B,EAAA;;AAGjC;EACE,0BAA0B,EAAA;;AAG5B;EACE,4BAA4B,EAAA;;AAG9B;EACE,0BAA0B,EAAA;;AAG5B;EACE,4BAA4B,EAAA;;AAG9B;EACE,6BAA6B,EAAA;;AAG/B;EACE,0BAA0B,EAAA;;AAG5B;EACE,6BAA6B,EAAA;;AAG/B;EACE;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,6BAA6B,EAAA;EAE/B;IACE,0BAA0B,EAAA;EAE5B;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,6BAA6B,EAAA;EAE/B;IACE,0BAA0B,EAAA;EAE5B;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,6BAA6B,EAAA;EAE/B;IACE,0BAA0B,EAAA;EAE5B;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,6BAA6B,EAAA;EAE/B;IACE,0BAA0B,EAAA;EAE5B;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,6BAA6B,EAAA;EAE/B;IACE,0BAA0B,EAAA;EAE5B;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,0BAA0B,EAAA;EAE5B;IACE,4BAA4B,EAAA;EAE9B;IACE,6BAA6B,EAAA;EAE/B;IACE,0BAA0B,EAAA;EAE5B;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE,6BAA6B,EAAA;;AAG/B;EACE,8BAA8B,EAAA;;AAGhC;EACE,2BAA2B,EAAA;;AAG7B;EACE,4BAA4B,EAAA;;AAG9B;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,8BAA8B,EAAA,EAC/B;;AAGH;EACE;IACE,8BAA8B,EAAA,EAC/B;;AAGH;EACE;IACE,8BAA8B,EAAA,EAC/B;;AAGH;EACE;IACE,8BAA8B,EAAA,EAC/B;;AAGH;EACE;IACE,8BAA8B,EAAA,EAC/B;;AAGH;EACE;IACE,8BAA8B,EAAA,EAC/B;;AAGH;EACE;IACE,8BAA8B,EAAA,EAC/B;;AAGH;EACE;IACE,8BAA8B,EAAA,EAC/B;;AAGH;EACE;IACE,8BAA8B,EAAA,EAC/B;;AAGH;EACE;IACE,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IACE,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IACE,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IACE,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IACE,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IACE,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IACE,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IACE,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IACE,2BAA2B,EAAA,EAC5B;;AAGH;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;EACE,qCAAqC,EAAA;;AAGvC;EACE,oCAAoC,EAAA;;AAGtC;EACE,oCAAoC,EAAA;;AAGtC;EACE,6BAA6B,EAAA;;AAG/B;EACE,qCAAqC,EAAA;;AAGvC;EACE,2BAA2B,EAAA;;AAG7B;EACE,2BAA2B,EAAA;;AAG7B;EACE,2BAA2B,EAAA;;AAG7B;EACE,2BAA2B,EAAA;;AAG7B;EACE,2BAA2B,EAAA;;AAG7B;EACE,+LAA+L,EAAA;;AAGjM;EACE,+LAA+L,EAAA;;AAGjM;EACE,+LAA+L,EAAA;;AAGjM;EACE,iCAAiC,EAAA;;AAGnC;EACE,iCAAiC,EAAA;;AAGnC;EACE,yBAAyB,EAAA;;AAG3B;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE,wBAAwB,EAAA;;AAG1B;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE,0BAA0B,EAAA;;AAG5B;EACE;IACE,0BAA0B,EAAA,EAC3B;;AAGH;EACE;IACE,0BAA0B,EAAA,EAC3B;;AAGH;EACE;IACE,0BAA0B,EAAA,EAC3B;;AAGH;EACE;IACE,0BAA0B,EAAA,EAC3B;;AAGH;EACE;IACE,0BAA0B,EAAA,EAC3B;;AAGH;EACE;IACE,0BAA0B,EAAA,EAC3B;;AAGH;EACE;IACE,0BAA0B,EAAA,EAC3B;;AAGH;EACE;IACE,0BAA0B,EAAA,EAC3B;;AAGH;EACE;IACE,0BAA0B,EAAA,EAC3B;;AAGH;EACE,gCAAgC,EAAA;;AAGlC;EACE;IACE,gCAAgC,EAAA,EACjC;;AAGH;EACE;IACE,gCAAgC,EAAA,EACjC;;AAGH;EACE;IACE,gCAAgC,EAAA,EACjC;;AAGH;EACE;IACE,gCAAgC,EAAA,EACjC;;AAGH;EACE;IACE,gCAAgC,EAAA,EACjC;;AAGH;EACE;IACE,gCAAgC,EAAA,EACjC;;AAGH;EACE;IACE,gCAAgC,EAAA,EACjC;;AAGH;EACE;IACE,gCAAgC,EAAA,EACjC;;AAGH;EACE;IACE,gCAAgC,EAAA,EACjC;;AAGH;EACE,+BAA+B,EAAA;;AAGjC;EACE;IACE,+BAA+B,EAAA,EAChC;;AAGH;EACE;IACE,+BAA+B,EAAA,EAChC;;AAGH;EACE;IACE,+BAA+B,EAAA,EAChC;;AAGH;EACE;IACE,+BAA+B,EAAA,EAChC;;AAGH;EACE;IACE,+BAA+B,EAAA,EAChC;;AAGH;EACE;IACE,+BAA+B,EAAA,EAChC;;AAGH;EACE;IACE,+BAA+B,EAAA,EAChC;;AAGH;EACE;IACE,+BAA+B,EAAA,EAChC;;AAGH;EACE;IACE,+BAA+B,EAAA,EAChC;;AAGH;EACE,wBAAwB,EAAA;;AAG1B;EACE,uBAAuB;EACvB,iCAAiC;EACjC,yBAAyB;EACzB,2BAA2B;EAC3B,qBAAqB;EACrB,6BAA6B;EAC7B,8BAA8B;EAC9B,wBAAwB,EAAA;;AAG1B;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE;IACE,wBAAwB,EAAA,EACzB;;AAGH;EACE,6BAA6B,EAAA;;AAG/B;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH;EACE;IACE,6BAA6B,EAAA,EAC9B;;AAGH,iBAAA;AACA;EACE,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,8BAA8B,EAAA;;AAGhC;EACE,gBAAgB,EAAA;;AAGlB;EACE,mBAAmB,EAAA;;AAGrB;EACE,uBAAuB;EACvB,cAAc,EAAA;;AAGhB;;EAEE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,4BAA4B,EAAA;;AAG9B;;EAEE,cAAc,EAAA;;AAGhB;EACE;IACE,uBAAuB,EAAA,EACxB;;AAGH;;EAEE,4BAA4B,EAAA;;AAG9B;;;EAGE,yBAAyB;EACzB,cAAc,EAAA;;AAGhB;EACE,cAAc;EACd,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,uBAAuB;EACvB,UAAU,EAAA;;AAGZ;EACE,cAAc,EAAA;;AAGhB;EACE,uCAAuC,EAAA;;AAGzC;EACE,yBAAyB;EACzB,qBAAqB;EACrB,YAAY,EAAA;;AAGd;EACE,4EAA4E,EAAA;;AAG9E;EACE;IACE,4EAA4E,EAAA,EAC7E;;AAGH;EACE,yBAAyB;EACzB,YAAY,EAAA;;AAGd;;EAEE,cAAc,EAAA;;AAGhB;EACE,YAAY,EAAA;;AAGd;EACE,+BAA+B,EAAA;;AAGjC;;EAEE,YAAY,EAAA;;AAGd;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;;EAEE,+BAA+B,EAAA;;AAGjC;;;EAGE,uBAAuB;EACvB,YAAY,EAAA;;AAGd;EACE,YAAY;EACZ,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,yBAAyB;EACzB,UAAU,EAAA;;AAGZ;EACE,YAAY,EAAA;;AAGd;EACE,uCAAuC,EAAA;;AAGzC;EACE,uBAAuB;EACvB,mBAAmB;EACnB,cAAc,EAAA;;AAGhB;EACE,8EAA8E,EAAA;;AAGhF;EACE;IACE,8EAA8E,EAAA,EAC/E;;AAGH;EACE,4BAA4B;EAC5B,yBAAyB,EAAA;;AAG3B;;EAEE,cAAc,EAAA;;AAGhB;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;;EAEE,yBAAyB,EAAA;;AAG3B;EACE;IACE,4BAA4B,EAAA,EAC7B;;AAGH;;EAEE,yBAAyB,EAAA;;AAG3B;;;EAGE,yBAAyB;EACzB,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB;EACzB,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,4BAA4B;EAC5B,UAAU,EAAA;;AAGZ;EACE,yBAAyB,EAAA;;AAG3B;EACE,uCAAuC,EAAA;;AAGzC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,iBAAiB,EAAA;;AAGnB;EACE,iFAAiF,EAAA;;AAGnF;EACE;IACE,iFAAiF,EAAA,EAClF;;AAGH;EACE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;;EAEE,cAAc,EAAA;;AAGhB;EACE,WAAW,EAAA;;AAGb;EACE,+BAA+B,EAAA;;AAGjC;;EAEE,WAAW,EAAA;;AAGb;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;;EAEE,+BAA+B,EAAA;;AAGjC;;;EAGE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,yBAAyB;EACzB,UAAU,EAAA;;AAGZ;EACE,WAAW,EAAA;;AAGb;EACE,uCAAuC,EAAA;;AAGzC;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc,EAAA;;AAGhB;EACE,gFAAgF,EAAA;;AAGlF;EACE;IACE,gFAAgF,EAAA,EACjF;;AAGH;EACE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;;EAEE,cAAc,EAAA;;AAGhB;EACE,WAAW,EAAA;;AAGb;EACE,+BAA+B,EAAA;;AAGjC;;EAEE,WAAW,EAAA;;AAGb;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;;EAEE,+BAA+B,EAAA;;AAGjC;;;EAGE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,yBAAyB;EACzB,UAAU,EAAA;;AAGZ;EACE,WAAW,EAAA;;AAGb;EACE,uCAAuC,EAAA;;AAGzC;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc,EAAA;;AAGhB;EACE,gFAAgF,EAAA;;AAGlF;EACE;IACE,gFAAgF,EAAA,EACjF;;AAGH;EACE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;;EAEE,cAAc,EAAA;;AAGhB;EACE,WAAW,EAAA;;AAGb;EACE,+BAA+B,EAAA;;AAGjC;;EAEE,WAAW,EAAA;;AAGb;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;;EAEE,+BAA+B,EAAA;;AAGjC;;;EAGE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,yBAAyB;EACzB,UAAU,EAAA;;AAGZ;EACE,WAAW,EAAA;;AAGb;EACE,uCAAuC,EAAA;;AAGzC;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc,EAAA;;AAGhB;EACE,gFAAgF,EAAA;;AAGlF;EACE;IACE,gFAAgF,EAAA,EACjF;;AAGH;EACE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;;EAEE,cAAc,EAAA;;AAGhB;EACE,WAAW,EAAA;;AAGb;EACE,+BAA+B,EAAA;;AAGjC;;EAEE,WAAW,EAAA;;AAGb;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;;EAEE,+BAA+B,EAAA;;AAGjC;;;EAGE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,yBAAyB;EACzB,UAAU,EAAA;;AAGZ;EACE,WAAW,EAAA;;AAGb;EACE,uCAAuC,EAAA;;AAGzC;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc,EAAA;;AAGhB;EACE,gFAAgF,EAAA;;AAGlF;EACE;IACE,gFAAgF,EAAA,EACjF;;AAGH;EACE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;;EAEE,cAAc,EAAA;;AAGhB;EACE,WAAW,EAAA;;AAGb;EACE,+BAA+B,EAAA;;AAGjC;;EAEE,WAAW,EAAA;;AAGb;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;;EAEE,+BAA+B,EAAA;;AAGjC;;;EAGE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,yBAAyB;EACzB,UAAU,EAAA;;AAGZ;EACE,WAAW,EAAA;;AAGb;EACE,uCAAuC,EAAA;;AAGzC;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc,EAAA;;AAGhB;EACE,gFAAgF,EAAA;;AAGlF;EACE;IACE,gFAAgF,EAAA,EACjF;;AAGH;EACE,yBAAyB;EACzB,yBAAyB,EAAA;;AAG3B;;EAEE,cAAc,EAAA;;AAGhB;EACE,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB,EAAA;;AAG3B;;EAEE,yBAAyB,EAAA;;AAG3B;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;;EAEE,yBAAyB,EAAA;;AAG3B;;;EAGE,yBAAyB;EACzB,yBAAyB,EAAA;;AAG3B;EACE,yBAAyB;EACzB,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,yBAAyB;EACzB,UAAU,EAAA;;AAGZ;EACE,yBAAyB,EAAA;;AAG3B;EACE,uCAAuC,EAAA;;AAGzC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,cAAc,EAAA;;AAGhB;EACE,gFAAgF,EAAA;;AAGlF;EACE;IACE,gFAAgF,EAAA,EACjF;;AAGH;EACE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;;EAEE,cAAc,EAAA;;AAGhB;EACE,WAAW,EAAA;;AAGb;EACE,+BAA+B,EAAA;;AAGjC;;EAEE,WAAW,EAAA;;AAGb;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;;EAEE,+BAA+B,EAAA;;AAGjC;;;EAGE,yBAAyB;EACzB,WAAW,EAAA;;AAGb;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,UAAU,EAAA;;AAGZ;EACE,yBAAyB;EACzB,UAAU,EAAA;;AAGZ;EACE,WAAW,EAAA;;AAGb;EACE,uCAAuC,EAAA;;AAGzC;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc,EAAA;;AAGhB;EACE,gFAAgF,EAAA;;AAGlF;EACE;IACE,gFAAgF,EAAA,EACjF;;AAGH;EACE,eAAe,EAAA;;AAGjB;EACE;IACE,oBAAoB,EAAA,EACrB;;AAGH;EACE;IACE,mBAAmB,EAAA,EACpB;;AAGH;EACE,mBAAmB;EACnB,aAAa,EAAA;;AAGf;EACE,YAAY;EACZ,cAAc,EAAA;;AAGhB;EACE,gBAAgB,EAAA;;AAGlB;EACE,iBAAiB,EAAA;;AAGnB;EACE,gBAAgB,EAAA;;AAGlB;EACE,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,QAAQ;EACR,qCAAqC,EAAA;;AAGvC;EACE,YAAY,EAAA;;AAGd;EACE;IACE,aAAa,EAAA,EACd;;AAGH;EACE,kBAAkB,EAAA;;AAGpB;EACE;IACE,aAAa,EAAA;EAEf;IACE,sBAAsB,EAAA,EACvB;;AAGH;EACE;IACE,aAAa;IACb,uBAAuB,EAAA;EAEzB;IACE,oBAAoB,EAAA,EACrB;;AAGH;;EAEE,YAAY;EACZ,cAAc,EAAA;;AAGhB;EACE,YAAY;EACZ,cAAc;EACd,oBAAoB,EAAA;;AAGtB;EACE;IACE,kBAAkB,EAAA,EACnB;;AAGH;EACE,oBAAoB,EAAA;;AAGtB;EACE;IACE,kBAAkB,EAAA;EAEpB;IACE,oBAAoB,EAAA;EAEtB;IACE,mBAAmB,EAAA,EACpB;;AAGH;EACE,yBAAyB;EACzB,yBAAyB,EAAA;;AAE3B,oCAAA","sourcesContent":["/*! bulma.io v0.9.3 | MIT License | github.com/jgthms/bulma */\n/* Bulma Utilities */\n.button, .input, .textarea, .select select, .file-cta,\n.file-name, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: calc(0.75em - 1px);\n  padding-right: calc(0.75em - 1px);\n  padding-top: calc(0.5em - 1px);\n  position: relative;\n  vertical-align: top;\n}\n\n.button:focus, .input:focus, .textarea:focus, .select select:focus, .file-cta:focus,\n.file-name:focus, .pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus,\n.pagination-ellipsis:focus, .is-focused.button, .is-focused.input, .is-focused.textarea, .select select.is-focused, .is-focused.file-cta,\n.is-focused.file-name, .is-focused.pagination-previous,\n.is-focused.pagination-next,\n.is-focused.pagination-link,\n.is-focused.pagination-ellipsis, .button:active, .input:active, .textarea:active, .select select:active, .file-cta:active,\n.file-name:active, .pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active,\n.pagination-ellipsis:active, .is-active.button, .is-active.input, .is-active.textarea, .select select.is-active, .is-active.file-cta,\n.is-active.file-name, .is-active.pagination-previous,\n.is-active.pagination-next,\n.is-active.pagination-link,\n.is-active.pagination-ellipsis {\n  outline: none;\n}\n\n.button[disabled], .input[disabled], .textarea[disabled], .select select[disabled], .file-cta[disabled],\n.file-name[disabled], .pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled],\n.pagination-ellipsis[disabled],\nfieldset[disabled] .button,\nfieldset[disabled] .input,\nfieldset[disabled] .textarea,\nfieldset[disabled] .select select,\n.select fieldset[disabled] select,\nfieldset[disabled] .file-cta,\nfieldset[disabled] .file-name,\nfieldset[disabled] .pagination-previous,\nfieldset[disabled] .pagination-next,\nfieldset[disabled] .pagination-link,\nfieldset[disabled] .pagination-ellipsis {\n  cursor: not-allowed;\n}\n\n.button, .file, .breadcrumb, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .tabs, .is-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em;\n}\n\n.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .block:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .message:not(:last-child), .pagination:not(:last-child), .tabs:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.delete, .modal-close {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 9999px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n  transition: all 200ms ease;\n}\n\n.delete::before, .modal-close::before, .delete::after, .modal-close::after {\n  background-color: white;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n\n.delete::before, .modal-close::before {\n  height: 2px;\n  width: 50%;\n}\n\n.delete::after, .modal-close::after {\n  height: 50%;\n  width: 2px;\n}\n\n.delete:hover, .modal-close:hover, .delete:focus, .modal-close:focus {\n  background-color: rgba(10, 10, 10, 0.3);\n  transform: scale(1.4);\n}\n\n.delete:active, .modal-close:active {\n  background-color: rgba(10, 10, 10, 0.4);\n}\n\n.is-small.delete, .is-small.modal-close {\n  height: 16px;\n  max-height: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  min-width: 16px;\n  width: 16px;\n}\n\n.is-medium.delete, .is-medium.modal-close {\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  width: 24px;\n}\n\n.is-large.delete, .is-large.modal-close {\n  height: 32px;\n  max-height: 32px;\n  max-width: 32px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px;\n}\n\n.button.is-loading::after, .loader, .select.is-loading::after, .control.is-loading::after {\n  -webkit-animation: spinAround 500ms infinite linear;\n          animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio, .modal, .modal-background, .is-overlay, .hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.navbar-burger {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n}\n\n/* Bulma Base */\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\ntd:not([align]),\nth:not([align]) {\n  text-align: inherit;\n}\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\n\nbody,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\n\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\na {\n  color: #485fc7;\n  cursor: pointer;\n  text-decoration: none;\n}\n\na strong {\n  color: currentColor;\n}\n\na:hover {\n  /* color: #363636; */\n  color: #111;\n}\n\ncode {\n  background-color: whitesmoke;\n  color: #da1039;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0;\n}\n\nimg {\n  height: auto;\n  max-width: 100%;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline;\n}\n\nsmall {\n  font-size: 0.875em;\n}\n\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\n\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\n\nfieldset {\n  border: none;\n}\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\n\npre code {\n  background-color: transparent;\n  color: currentColor;\n  font-size: 1em;\n  padding: 0;\n}\n\ntable td,\ntable th {\n  vertical-align: top;\n}\n\ntable td:not([align]),\ntable th:not([align]) {\n  text-align: inherit;\n}\n\ntable th {\n  color: #363636;\n}\n\n@-webkit-keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n/* Bulma Elements */\n.box {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\n\na.box:hover, a.box:focus {\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #485fc7;\n}\n\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #485fc7;\n}\n\n.button {\n  /* background-color: white; */\n  background-color: #2cb3c5;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #111;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.button strong {\n  color: inherit;\n}\n\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.button .icon:first-child:not(:last-child) {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: 0.25em;\n}\n\n.button .icon:last-child:not(:first-child) {\n  margin-left: 0.25em;\n  margin-right: calc(-0.5em - 1px);\n}\n\n.button .icon:first-child:last-child {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: calc(-0.5em - 1px);\n}\n\n.button:hover, .button.is-hovered {\n  background-color: #1dcbe2;\n  border-color: #b5b5b5;\n  color: #363636;\n}\n\n.button:focus, .button.is-focused {\n  border-color: #485fc7;\n  color: #363636;\n}\n\n.button:focus:not(:active), .button.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n\n.button:active, .button.is-active {\n  border-color: #4a4a4a;\n  color: #363636;\n}\n\n.button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  color: #4a4a4a;\n  text-decoration: underline;\n}\n\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n  background-color: whitesmoke;\n  color: #363636;\n}\n\n.button.is-text:active, .button.is-text.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n\n.button.is-text[disabled],\nfieldset[disabled] .button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-ghost {\n  background: none;\n  border-color: transparent;\n  color: #485fc7;\n  text-decoration: none;\n}\n\n.button.is-ghost:hover, .button.is-ghost.is-hovered {\n  color: #485fc7;\n  text-decoration: underline;\n}\n\n.button.is-white {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white:hover, .button.is-white.is-hovered {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white:focus, .button.is-white.is-focused {\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n\n.button.is-white:active, .button.is-white.is-active {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white[disabled],\nfieldset[disabled] .button.is-white {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n  background-color: black;\n}\n\n.button.is-white.is-inverted[disabled],\nfieldset[disabled] .button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n  color: white;\n}\n\n.button.is-white.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n\n.button.is-white.is-outlined.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-white.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n\n.button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-white.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n\n.button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black:hover, .button.is-black.is-hovered {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black:focus, .button.is-black.is-focused {\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n\n.button.is-black:active, .button.is-black.is-active {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black[disabled],\nfieldset[disabled] .button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-black.is-inverted {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-black.is-inverted[disabled],\nfieldset[disabled] .button.is-black.is-inverted {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n\n.button.is-black.is-outlined.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-black.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-black.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n\n.button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light:hover, .button.is-light.is-hovered {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light:focus, .button.is-light.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n\n.button.is-light:active, .button.is-light.is-active {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light[disabled],\nfieldset[disabled] .button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n\n.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light.is-inverted[disabled],\nfieldset[disabled] .button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: whitesmoke;\n}\n\n.button.is-light.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light.is-outlined.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n\n.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-light.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: whitesmoke;\n}\n\n.button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n\n.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n\n.button.is-light.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark:hover, .button.is-dark.is-hovered {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark:focus, .button.is-dark.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n\n.button.is-dark:active, .button.is-dark.is-active {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark[disabled],\nfieldset[disabled] .button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-dark.is-inverted {\n  background-color: #fff;\n  color: #363636;\n}\n\n.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-dark.is-inverted[disabled],\nfieldset[disabled] .button.is-dark.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #363636;\n}\n\n.button.is-dark.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n\n.button.is-dark.is-outlined.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n\n.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-dark.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  box-shadow: none;\n  color: #363636;\n}\n\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #363636;\n}\n\n.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n\n.button.is-dark.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary:hover, .button.is-primary.is-hovered {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary:focus, .button.is-primary.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n\n.button.is-primary:active, .button.is-primary.is-active {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary[disabled],\nfieldset[disabled] .button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-primary.is-inverted {\n  background-color: #fff;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-primary.is-inverted[disabled],\nfieldset[disabled] .button.is-primary.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n\n.button.is-primary.is-outlined.is-loading::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n\n.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-primary.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  box-shadow: none;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n\n.button.is-primary.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n\n.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n  background-color: #defffa;\n  border-color: transparent;\n  color: #00947e;\n}\n\n.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n  background-color: #d1fff8;\n  border-color: transparent;\n  color: #00947e;\n}\n\n.button.is-link {\n  background-color: #485fc7;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link:hover, .button.is-link.is-hovered {\n  background-color: #3e56c4;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link:focus, .button.is-link.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n\n.button.is-link:active, .button.is-link.is-active {\n  background-color: #3a51bb;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link[disabled],\nfieldset[disabled] .button.is-link {\n  background-color: #485fc7;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-link.is-inverted {\n  background-color: #fff;\n  color: #485fc7;\n}\n\n.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-link.is-inverted[disabled],\nfieldset[disabled] .button.is-link.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #485fc7;\n}\n\n.button.is-link.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #485fc7;\n  color: #485fc7;\n}\n\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff;\n}\n\n.button.is-link.is-outlined.is-loading::after {\n  border-color: transparent transparent #485fc7 #485fc7 !important;\n}\n\n.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-link.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #485fc7;\n  box-shadow: none;\n  color: #485fc7;\n}\n\n.button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #485fc7;\n}\n\n.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #485fc7 #485fc7 !important;\n}\n\n.button.is-link.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-link.is-light {\n  background-color: #eff1fa;\n  color: #3850b7;\n}\n\n.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {\n  background-color: #e6e9f7;\n  border-color: transparent;\n  color: #3850b7;\n}\n\n.button.is-link.is-light:active, .button.is-link.is-light.is-active {\n  background-color: #dce0f4;\n  border-color: transparent;\n  color: #3850b7;\n}\n\n.button.is-info {\n  /* background-color: #3e8ed0; */\n  background-color: #2cb3c5;\n  border-color: transparent;\n  color: #111;\n  /* color: #fff; */\n}\n\n.button.is-info:hover, .button.is-info.is-hovered {\n  background-color: #1dcbe2;\n  /* background-color: #3488ce; */\n  border-color: transparent;\n  color: #111;\n  /* color: #fff; */\n}\n\n.button.is-info:focus, .button.is-info.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);\n}\n\n.button.is-info:active, .button.is-info.is-active {\n  background-color: #3082c5;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info[disabled],\nfieldset[disabled] .button.is-info {\n  background-color: #3e8ed0;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-info.is-inverted {\n  background-color: #fff;\n  color: #3e8ed0;\n}\n\n.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-info.is-inverted[disabled],\nfieldset[disabled] .button.is-info.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #3e8ed0;\n}\n\n.button.is-info.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3e8ed0;\n  color: #3e8ed0;\n}\n\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n  background-color: #3e8ed0;\n  border-color: #3e8ed0;\n  color: #fff;\n}\n\n.button.is-info.is-outlined.is-loading::after {\n  border-color: transparent transparent #3e8ed0 #3e8ed0 !important;\n}\n\n.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-info.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3e8ed0;\n  box-shadow: none;\n  color: #3e8ed0;\n}\n\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #3e8ed0;\n}\n\n.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #3e8ed0 #3e8ed0 !important;\n}\n\n.button.is-info.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-info.is-light {\n  background-color: #eff5fb;\n  color: #296fa8;\n}\n\n.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {\n  background-color: #e4eff9;\n  border-color: transparent;\n  color: #296fa8;\n}\n\n.button.is-info.is-light:active, .button.is-info.is-light.is-active {\n  background-color: #dae9f6;\n  border-color: transparent;\n  color: #296fa8;\n}\n\n.button.is-success {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success:hover, .button.is-success.is-hovered {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success:focus, .button.is-success.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n\n.button.is-success:active, .button.is-success.is-active {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success[disabled],\nfieldset[disabled] .button.is-success {\n  background-color: #48c78e;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-success.is-inverted {\n  background-color: #fff;\n  color: #48c78e;\n}\n\n.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-success.is-inverted[disabled],\nfieldset[disabled] .button.is-success.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #48c78e;\n}\n\n.button.is-success.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  color: #48c78e;\n}\n\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff;\n}\n\n.button.is-success.is-outlined.is-loading::after {\n  border-color: transparent transparent #48c78e #48c78e !important;\n}\n\n.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-success.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  box-shadow: none;\n  color: #48c78e;\n}\n\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #48c78e;\n}\n\n.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #48c78e #48c78e !important;\n}\n\n.button.is-success.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n\n.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n  background-color: #e6f7ef;\n  border-color: transparent;\n  color: #257953;\n}\n\n.button.is-success.is-light:active, .button.is-success.is-light.is-active {\n  background-color: #dcf4e9;\n  border-color: transparent;\n  color: #257953;\n}\n\n.button.is-warning {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning:hover, .button.is-warning.is-hovered {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning:focus, .button.is-warning.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n\n.button.is-warning:active, .button.is-warning.is-active {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning[disabled],\nfieldset[disabled] .button.is-warning {\n  background-color: #ffe08a;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n\n.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-inverted[disabled],\nfieldset[disabled] .button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: #ffe08a;\n}\n\n.button.is-warning.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  color: #ffe08a;\n}\n\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-outlined.is-loading::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important;\n}\n\n.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-warning.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  box-shadow: none;\n  color: #ffe08a;\n}\n\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n\n.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important;\n}\n\n.button.is-warning.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n\n.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n  background-color: #fff6de;\n  border-color: transparent;\n  color: #946c00;\n}\n\n.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n  background-color: #fff3d1;\n  border-color: transparent;\n  color: #946c00;\n}\n\n.button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger:hover, .button.is-danger.is-hovered {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger:focus, .button.is-danger.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n\n.button.is-danger:active, .button.is-danger.is-active {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger[disabled],\nfieldset[disabled] .button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-danger.is-inverted {\n  background-color: #fff;\n  color: #f14668;\n}\n\n.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-danger.is-inverted[disabled],\nfieldset[disabled] .button.is-danger.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #f14668;\n}\n\n.button.is-danger.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  color: #f14668;\n}\n\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n\n.button.is-danger.is-outlined.is-loading::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n\n.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-danger.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  box-shadow: none;\n  color: #f14668;\n}\n\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #f14668;\n}\n\n.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n\n.button.is-danger.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n  background-color: #fde0e6;\n  border-color: transparent;\n  color: #cc0f35;\n}\n\n.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n  background-color: #fcd4dc;\n  border-color: transparent;\n  color: #cc0f35;\n}\n\n.button.is-small {\n  font-size: 0.75rem;\n}\n\n.button.is-small:not(.is-rounded) {\n  border-radius: 2px;\n}\n\n.button.is-normal {\n  font-size: 1rem;\n}\n\n.button.is-medium {\n  font-size: 1.25rem;\n}\n\n.button.is-large {\n  font-size: 1.5rem;\n}\n\n.button[disabled],\nfieldset[disabled] .button {\n  background-color: white;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  opacity: 0.5;\n}\n\n.button.is-fullwidth {\n  display: flex;\n  width: 100%;\n}\n\n.button.is-loading {\n  color: transparent !important;\n  pointer-events: none;\n}\n\n.button.is-loading::after {\n  position: absolute;\n  left: calc(50% - (1em * 0.5));\n  top: calc(50% - (1em * 0.5));\n  position: absolute !important;\n}\n\n.button.is-static {\n  background-color: whitesmoke;\n  border-color: #dbdbdb;\n  color: #7a7a7a;\n  box-shadow: none;\n  pointer-events: none;\n}\n\n.button.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(1em + 0.25em);\n  padding-right: calc(1em + 0.25em);\n}\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.buttons .button {\n  margin-bottom: 0.5rem;\n}\n\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n  margin-right: 0.5rem;\n}\n\n.buttons:last-child {\n  margin-bottom: -0.5rem;\n}\n\n.buttons:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n  font-size: 0.75rem;\n}\n\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {\n  border-radius: 2px;\n}\n\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n  font-size: 1.25rem;\n}\n\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n  font-size: 1.5rem;\n}\n\n.buttons.has-addons .button:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.buttons.has-addons .button:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px;\n}\n\n.buttons.has-addons .button:last-child {\n  margin-right: 0;\n}\n\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n  z-index: 2;\n}\n\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n  z-index: 3;\n}\n\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n  z-index: 4;\n}\n\n.buttons.has-addons .button.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.buttons.is-centered {\n  justify-content: center;\n}\n\n.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.buttons.is-right {\n  justify-content: flex-end;\n}\n\n.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto;\n}\n\n.container.is-fluid {\n  max-width: none !important;\n  padding-left: 32px;\n  padding-right: 32px;\n  width: 100%;\n}\n\n@media screen and (min-width: 1024px) {\n  .container {\n    max-width: 960px;\n  }\n}\n\n@media screen and (max-width: 1215px) {\n  .container.is-widescreen:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n\n@media screen and (max-width: 1407px) {\n  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .container:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .container:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n\n.content li + li {\n  margin-top: 0.25em;\n}\n\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125;\n}\n\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n\n.content h1:not(:first-child) {\n  margin-top: 1em;\n}\n\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n\n.content h2:not(:first-child) {\n  margin-top: 1.1428em;\n}\n\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n\n.content h3:not(:first-child) {\n  margin-top: 1.3333em;\n}\n\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n\n.content ol:not([type]) {\n  list-style-type: decimal;\n}\n\n.content ol:not([type]).is-lower-alpha {\n  list-style-type: lower-alpha;\n}\n\n.content ol:not([type]).is-lower-roman {\n  list-style-type: lower-roman;\n}\n\n.content ol:not([type]).is-upper-alpha {\n  list-style-type: upper-alpha;\n}\n\n.content ol:not([type]).is-upper-roman {\n  list-style-type: upper-roman;\n}\n\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em;\n}\n\n.content ul ul ul {\n  list-style-type: square;\n}\n\n.content dd {\n  margin-left: 2em;\n}\n\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n\n.content figure:not(:first-child) {\n  margin-top: 2em;\n}\n\n.content figure:not(:last-child) {\n  margin-bottom: 2em;\n}\n\n.content figure img {\n  display: inline-block;\n}\n\n.content figure figcaption {\n  font-style: italic;\n}\n\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n\n.content table {\n  width: 100%;\n}\n\n.content table td,\n.content table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n\n.content table th {\n  color: #363636;\n}\n\n.content table th:not([align]) {\n  text-align: inherit;\n}\n\n.content table thead td,\n.content table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n\n.content table tfoot td,\n.content table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n\n.content table tbody tr:last-child td,\n.content table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n\n.content .tabs li + li {\n  margin-top: 0;\n}\n\n.content.is-small {\n  font-size: 0.75rem;\n}\n\n.content.is-normal {\n  font-size: 1rem;\n}\n\n.content.is-medium {\n  font-size: 1.25rem;\n}\n\n.content.is-large {\n  font-size: 1.5rem;\n}\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n.icon.is-small {\n  height: 1rem;\n  width: 1rem;\n}\n\n.icon.is-medium {\n  height: 2rem;\n  width: 2rem;\n}\n\n.icon.is-large {\n  height: 3rem;\n  width: 3rem;\n}\n\n.icon-text {\n  align-items: flex-start;\n  color: inherit;\n  display: inline-flex;\n  flex-wrap: wrap;\n  line-height: 1.5rem;\n  vertical-align: top;\n}\n\n.icon-text .icon {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.icon-text .icon:not(:last-child) {\n  margin-right: 0.25em;\n}\n\n.icon-text .icon:not(:first-child) {\n  margin-left: 0.25em;\n}\n\ndiv.icon-text {\n  display: flex;\n}\n\n.image {\n  display: block;\n  position: relative;\n}\n\n.image img {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n\n.image img.is-rounded {\n  border-radius: 9999px;\n}\n\n.image.is-fullwidth {\n  width: 100%;\n}\n\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  height: 100%;\n  width: 100%;\n}\n\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%;\n}\n\n.image.is-5by4 {\n  padding-top: 80%;\n}\n\n.image.is-4by3 {\n  padding-top: 75%;\n}\n\n.image.is-3by2 {\n  padding-top: 66.6666%;\n}\n\n.image.is-5by3 {\n  padding-top: 60%;\n}\n\n.image.is-16by9 {\n  padding-top: 56.25%;\n}\n\n.image.is-2by1 {\n  padding-top: 50%;\n}\n\n.image.is-3by1 {\n  padding-top: 33.3333%;\n}\n\n.image.is-4by5 {\n  padding-top: 125%;\n}\n\n.image.is-3by4 {\n  padding-top: 133.3333%;\n}\n\n.image.is-2by3 {\n  padding-top: 150%;\n}\n\n.image.is-3by5 {\n  padding-top: 166.6666%;\n}\n\n.image.is-9by16 {\n  padding-top: 177.7777%;\n}\n\n.image.is-1by2 {\n  padding-top: 200%;\n}\n\n.image.is-1by3 {\n  padding-top: 300%;\n}\n\n.image.is-16x16 {\n  height: 16px;\n  width: 16px;\n}\n\n.image.is-24x24 {\n  height: 24px;\n  width: 24px;\n}\n\n.image.is-32x32 {\n  height: 32px;\n  width: 32px;\n}\n\n.image.is-48x48 {\n  height: 48px;\n  width: 48px;\n}\n\n.image.is-64x64 {\n  height: 64px;\n  width: 64px;\n}\n\n.image.is-96x96 {\n  height: 96px;\n  width: 96px;\n}\n\n.image.is-128x128 {\n  height: 128px;\n  width: 128px;\n}\n\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  position: relative;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n}\n\n.notification a:not(.button):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n\n.notification strong {\n  color: currentColor;\n}\n\n.notification code,\n.notification pre {\n  background: white;\n}\n\n.notification pre code {\n  background: transparent;\n}\n\n.notification > .delete {\n  right: 0.5rem;\n  position: absolute;\n  top: 0.5rem;\n}\n\n.notification .title,\n.notification .subtitle,\n.notification .content {\n  color: currentColor;\n}\n\n.notification.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.notification.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.notification.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.notification.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.notification.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.notification.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n\n.notification.is-link {\n  background-color: #485fc7;\n  color: #fff;\n}\n\n.notification.is-link.is-light {\n  background-color: #eff1fa;\n  color: #3850b7;\n}\n\n.notification.is-info {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n\n.notification.is-info.is-light {\n  background-color: #eff5fb;\n  color: #296fa8;\n}\n\n.notification.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n\n.notification.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n\n.notification.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.notification.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n\n.notification.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.notification.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 9999px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n\n.progress::-webkit-progress-bar {\n  background-color: #ededed;\n}\n\n.progress::-webkit-progress-value {\n  background-color: #4a4a4a;\n}\n\n.progress::-moz-progress-bar {\n  background-color: #4a4a4a;\n}\n\n.progress::-ms-fill {\n  background-color: #4a4a4a;\n  border: none;\n}\n\n.progress.is-white::-webkit-progress-value {\n  background-color: white;\n}\n\n.progress.is-white::-moz-progress-bar {\n  background-color: white;\n}\n\n.progress.is-white::-ms-fill {\n  background-color: white;\n}\n\n.progress.is-white:indeterminate {\n  background-image: linear-gradient(to right, white 30%, #ededed 30%);\n}\n\n.progress.is-black::-webkit-progress-value {\n  background-color: #0a0a0a;\n}\n\n.progress.is-black::-moz-progress-bar {\n  background-color: #0a0a0a;\n}\n\n.progress.is-black::-ms-fill {\n  background-color: #0a0a0a;\n}\n\n.progress.is-black:indeterminate {\n  background-image: linear-gradient(to right, #0a0a0a 30%, #ededed 30%);\n}\n\n.progress.is-light::-webkit-progress-value {\n  background-color: whitesmoke;\n}\n\n.progress.is-light::-moz-progress-bar {\n  background-color: whitesmoke;\n}\n\n.progress.is-light::-ms-fill {\n  background-color: whitesmoke;\n}\n\n.progress.is-light:indeterminate {\n  background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%);\n}\n\n.progress.is-dark::-webkit-progress-value {\n  background-color: #363636;\n}\n\n.progress.is-dark::-moz-progress-bar {\n  background-color: #363636;\n}\n\n.progress.is-dark::-ms-fill {\n  background-color: #363636;\n}\n\n.progress.is-dark:indeterminate {\n  background-image: linear-gradient(to right, #363636 30%, #ededed 30%);\n}\n\n.progress.is-primary::-webkit-progress-value {\n  background-color: #00d1b2;\n}\n\n.progress.is-primary::-moz-progress-bar {\n  background-color: #00d1b2;\n}\n\n.progress.is-primary::-ms-fill {\n  background-color: #00d1b2;\n}\n\n.progress.is-primary:indeterminate {\n  background-image: linear-gradient(to right, #00d1b2 30%, #ededed 30%);\n}\n\n.progress.is-link::-webkit-progress-value {\n  background-color: #485fc7;\n}\n\n.progress.is-link::-moz-progress-bar {\n  background-color: #485fc7;\n}\n\n.progress.is-link::-ms-fill {\n  background-color: #485fc7;\n}\n\n.progress.is-link:indeterminate {\n  background-image: linear-gradient(to right, #485fc7 30%, #ededed 30%);\n}\n\n.progress.is-info::-webkit-progress-value {\n  background-color: #3e8ed0;\n}\n\n.progress.is-info::-moz-progress-bar {\n  background-color: #3e8ed0;\n}\n\n.progress.is-info::-ms-fill {\n  background-color: #3e8ed0;\n}\n\n.progress.is-info:indeterminate {\n  background-image: linear-gradient(to right, #3e8ed0 30%, #ededed 30%);\n}\n\n.progress.is-success::-webkit-progress-value {\n  background-color: #48c78e;\n}\n\n.progress.is-success::-moz-progress-bar {\n  background-color: #48c78e;\n}\n\n.progress.is-success::-ms-fill {\n  background-color: #48c78e;\n}\n\n.progress.is-success:indeterminate {\n  background-image: linear-gradient(to right, #48c78e 30%, #ededed 30%);\n}\n\n.progress.is-warning::-webkit-progress-value {\n  background-color: #ffe08a;\n}\n\n.progress.is-warning::-moz-progress-bar {\n  background-color: #ffe08a;\n}\n\n.progress.is-warning::-ms-fill {\n  background-color: #ffe08a;\n}\n\n.progress.is-warning:indeterminate {\n  background-image: linear-gradient(to right, #ffe08a 30%, #ededed 30%);\n}\n\n.progress.is-danger::-webkit-progress-value {\n  background-color: #f14668;\n}\n\n.progress.is-danger::-moz-progress-bar {\n  background-color: #f14668;\n}\n\n.progress.is-danger::-ms-fill {\n  background-color: #f14668;\n}\n\n.progress.is-danger:indeterminate {\n  background-image: linear-gradient(to right, #f14668 30%, #ededed 30%);\n}\n\n.progress:indeterminate {\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: moveIndeterminate;\n          animation-name: moveIndeterminate;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background-color: #ededed;\n  background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 150% 150%;\n}\n\n.progress:indeterminate::-webkit-progress-bar {\n  background-color: transparent;\n}\n\n.progress:indeterminate::-moz-progress-bar {\n  background-color: transparent;\n}\n\n.progress:indeterminate::-ms-fill {\n  animation-name: none;\n}\n\n.progress.is-small {\n  height: 0.75rem;\n}\n\n.progress.is-medium {\n  height: 1.25rem;\n}\n\n.progress.is-large {\n  height: 1.5rem;\n}\n\n@-webkit-keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n.table {\n  background-color: white;\n  color: #363636;\n}\n\n.table td,\n.table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n\n.table td.is-white,\n.table th.is-white {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n\n.table td.is-black,\n.table th.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n\n.table td.is-light,\n.table th.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.table td.is-dark,\n.table th.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n\n.table td.is-primary,\n.table th.is-primary {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n\n.table td.is-link,\n.table th.is-link {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff;\n}\n\n.table td.is-info,\n.table th.is-info {\n  background-color: #3e8ed0;\n  border-color: #3e8ed0;\n  color: #fff;\n}\n\n.table td.is-success,\n.table th.is-success {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff;\n}\n\n.table td.is-warning,\n.table th.is-warning {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.table td.is-danger,\n.table th.is-danger {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n\n.table td.is-narrow,\n.table th.is-narrow {\n  white-space: nowrap;\n  width: 1%;\n}\n\n.table td.is-selected,\n.table th.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.table td.is-selected a,\n.table td.is-selected strong,\n.table th.is-selected a,\n.table th.is-selected strong {\n  color: currentColor;\n}\n\n.table td.is-vcentered,\n.table th.is-vcentered {\n  vertical-align: middle;\n}\n\n.table th {\n  color: #363636;\n}\n\n.table th:not([align]) {\n  text-align: inherit;\n}\n\n.table tr.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.table tr.is-selected a,\n.table tr.is-selected strong {\n  color: currentColor;\n}\n\n.table tr.is-selected td,\n.table tr.is-selected th {\n  border-color: #fff;\n  color: currentColor;\n}\n\n.table thead {\n  background-color: transparent;\n}\n\n.table thead td,\n.table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n\n.table tfoot {\n  background-color: transparent;\n}\n\n.table tfoot td,\n.table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n\n.table tbody {\n  background-color: transparent;\n}\n\n.table tbody tr:last-child td,\n.table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n\n.table.is-bordered td,\n.table.is-bordered th {\n  border-width: 1px;\n}\n\n.table.is-bordered tr:last-child td,\n.table.is-bordered tr:last-child th {\n  border-bottom-width: 1px;\n}\n\n.table.is-fullwidth {\n  width: 100%;\n}\n\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n  background-color: whitesmoke;\n}\n\n.table.is-narrow td,\n.table.is-narrow th {\n  padding: 0.25em 0.5em;\n}\n\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n  background-color: #fafafa;\n}\n\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\n\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.tags .tag {\n  margin-bottom: 0.5rem;\n}\n\n.tags .tag:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.tags:last-child {\n  margin-bottom: -0.5rem;\n}\n\n.tags:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n  font-size: 1rem;\n}\n\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n  font-size: 1.25rem;\n}\n\n.tags.is-centered {\n  justify-content: center;\n}\n\n.tags.is-centered .tag {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n\n.tags.is-right {\n  justify-content: flex-end;\n}\n\n.tags.is-right .tag:not(:first-child) {\n  margin-left: 0.5rem;\n}\n\n.tags.is-right .tag:not(:last-child) {\n  margin-right: 0;\n}\n\n.tags.has-addons .tag {\n  margin-right: 0;\n}\n\n.tags.has-addons .tag:not(:first-child) {\n  margin-left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.tags.has-addons .tag:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.tag:not(body) .delete {\n  margin-left: 0.25rem;\n  margin-right: -0.375rem;\n}\n\n.tag:not(body).is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.tag:not(body).is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.tag:not(body).is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.tag:not(body).is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.tag:not(body).is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.tag:not(body).is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n\n.tag:not(body).is-link {\n  background-color: #485fc7;\n  color: #fff;\n}\n\n.tag:not(body).is-link.is-light {\n  background-color: #eff1fa;\n  color: #3850b7;\n}\n\n.tag:not(body).is-info {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n\n.tag:not(body).is-info.is-light {\n  background-color: #eff5fb;\n  color: #296fa8;\n}\n\n.tag:not(body).is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n\n.tag:not(body).is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n\n.tag:not(body).is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.tag:not(body).is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n\n.tag:not(body).is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.tag:not(body).is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.tag:not(body).is-normal {\n  font-size: 0.75rem;\n}\n\n.tag:not(body).is-medium {\n  font-size: 1rem;\n}\n\n.tag:not(body).is-large {\n  font-size: 1.25rem;\n}\n\n.tag:not(body) .icon:first-child:not(:last-child) {\n  margin-left: -0.375em;\n  margin-right: 0.1875em;\n}\n\n.tag:not(body) .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: -0.375em;\n}\n\n.tag:not(body) .icon:first-child:last-child {\n  margin-left: -0.375em;\n  margin-right: -0.375em;\n}\n\n.tag:not(body).is-delete {\n  margin-left: 1px;\n  padding: 0;\n  position: relative;\n  width: 2em;\n}\n\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n  background-color: currentColor;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n\n.tag:not(body).is-delete::before {\n  height: 1px;\n  width: 50%;\n}\n\n.tag:not(body).is-delete::after {\n  height: 50%;\n  width: 1px;\n}\n\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n  background-color: #e8e8e8;\n}\n\n.tag:not(body).is-delete:active {\n  background-color: #dbdbdb;\n}\n\n.tag:not(body).is-rounded {\n  border-radius: 9999px;\n}\n\na.tag:hover {\n  text-decoration: underline;\n}\n\n.title,\n.subtitle {\n  word-break: break-word;\n}\n\n.title em,\n.title span,\n.subtitle em,\n.subtitle span {\n  font-weight: inherit;\n}\n\n.title sub,\n.subtitle sub {\n  font-size: 0.75em;\n}\n\n.title sup,\n.subtitle sup {\n  font-size: 0.75em;\n}\n\n.title .tag,\n.subtitle .tag {\n  vertical-align: middle;\n}\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n\n.title strong {\n  color: inherit;\n  font-weight: inherit;\n}\n\n.title:not(.is-spaced) + .subtitle {\n  margin-top: -1.25rem;\n}\n\n.title.is-1 {\n  font-size: 3rem;\n}\n\n.title.is-2 {\n  font-size: 2.5rem;\n}\n\n.title.is-3 {\n  font-size: 2rem;\n}\n\n.title.is-4 {\n  font-size: 1.5rem;\n}\n\n.title.is-5 {\n  font-size: 1.25rem;\n}\n\n.title.is-6 {\n  font-size: 1rem;\n}\n\n.title.is-7 {\n  font-size: 0.75rem;\n}\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n\n.subtitle strong {\n  color: #363636;\n  font-weight: 600;\n}\n\n.subtitle:not(.is-spaced) + .title {\n  margin-top: -1.25rem;\n}\n\n.subtitle.is-1 {\n  font-size: 3rem;\n}\n\n.subtitle.is-2 {\n  font-size: 2.5rem;\n}\n\n.subtitle.is-3 {\n  font-size: 2rem;\n}\n\n.subtitle.is-4 {\n  font-size: 1.5rem;\n}\n\n.subtitle.is-5 {\n  font-size: 1.25rem;\n}\n\n.subtitle.is-6 {\n  font-size: 1rem;\n}\n\n.subtitle.is-7 {\n  font-size: 0.75rem;\n}\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 9999px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n\n/* Bulma Form */\n.input, .textarea, .select select {\n  /* background-color: white; */\n  background-color: #1b2d53;\n  border-color: #2cb3c550;\n  border-radius: 4px;\n  /* color: #363636; */\n  color: #d9d9d9;\n}\n\n.input::-moz-placeholder, .textarea::-moz-placeholder, .select select::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .select select::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input:-moz-placeholder, .textarea:-moz-placeholder, .select select:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input:-ms-input-placeholder, .textarea:-ms-input-placeholder, .select select:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input:hover, .textarea:hover, .select select:hover, .is-hovered.input, .is-hovered.textarea, .select select.is-hovered {\n  border-color: #b5b5b5;\n}\n\n.input:focus, .textarea:focus, .select select:focus, .is-focused.input, .is-focused.textarea, .select select.is-focused, .input:active, .textarea:active, .select select:active, .is-active.input, .is-active.textarea, .select select.is-active {\n  border-color: #485fc7;\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n\n.input[disabled], .textarea[disabled], .select select[disabled],\nfieldset[disabled] .input,\nfieldset[disabled] .textarea,\nfieldset[disabled] .select select,\n.select fieldset[disabled] select {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: #7a7a7a;\n}\n\n.input[disabled]::-moz-placeholder, .textarea[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder,\nfieldset[disabled] .input::-moz-placeholder,\nfieldset[disabled] .textarea::-moz-placeholder,\nfieldset[disabled] .select select::-moz-placeholder,\n.select fieldset[disabled] select::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input[disabled]::-webkit-input-placeholder, .textarea[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder,\nfieldset[disabled] .input::-webkit-input-placeholder,\nfieldset[disabled] .textarea::-webkit-input-placeholder,\nfieldset[disabled] .select select::-webkit-input-placeholder,\n.select fieldset[disabled] select::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input[disabled]:-moz-placeholder, .textarea[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder,\nfieldset[disabled] .input:-moz-placeholder,\nfieldset[disabled] .textarea:-moz-placeholder,\nfieldset[disabled] .select select:-moz-placeholder,\n.select fieldset[disabled] select:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input[disabled]:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder,\nfieldset[disabled] .input:-ms-input-placeholder,\nfieldset[disabled] .textarea:-ms-input-placeholder,\nfieldset[disabled] .select select:-ms-input-placeholder,\n.select fieldset[disabled] select:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input, .textarea {\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n  max-width: 100%;\n  width: 100%;\n}\n\n.input[readonly], .textarea[readonly] {\n  box-shadow: none;\n}\n\n.is-white.input, .is-white.textarea {\n  border-color: white;\n}\n\n.is-white.input:focus, .is-white.textarea:focus, .is-white.is-focused.input, .is-white.is-focused.textarea, .is-white.input:active, .is-white.textarea:active, .is-white.is-active.input, .is-white.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n\n.is-black.input, .is-black.textarea {\n  border-color: #0a0a0a;\n}\n\n.is-black.input:focus, .is-black.textarea:focus, .is-black.is-focused.input, .is-black.is-focused.textarea, .is-black.input:active, .is-black.textarea:active, .is-black.is-active.input, .is-black.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n\n.is-light.input, .is-light.textarea {\n  border-color: whitesmoke;\n}\n\n.is-light.input:focus, .is-light.textarea:focus, .is-light.is-focused.input, .is-light.is-focused.textarea, .is-light.input:active, .is-light.textarea:active, .is-light.is-active.input, .is-light.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n\n.is-dark.input, .is-dark.textarea {\n  border-color: #363636;\n}\n\n.is-dark.input:focus, .is-dark.textarea:focus, .is-dark.is-focused.input, .is-dark.is-focused.textarea, .is-dark.input:active, .is-dark.textarea:active, .is-dark.is-active.input, .is-dark.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n\n.is-primary.input, .is-primary.textarea {\n  border-color: #00d1b2;\n}\n\n.is-primary.input:focus, .is-primary.textarea:focus, .is-primary.is-focused.input, .is-primary.is-focused.textarea, .is-primary.input:active, .is-primary.textarea:active, .is-primary.is-active.input, .is-primary.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n\n.is-link.input, .is-link.textarea {\n  border-color: #485fc7;\n}\n\n.is-link.input:focus, .is-link.textarea:focus, .is-link.is-focused.input, .is-link.is-focused.textarea, .is-link.input:active, .is-link.textarea:active, .is-link.is-active.input, .is-link.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n\n.is-info.input, .is-info.textarea {\n  border-color: #3e8ed0;\n}\n\n.is-info.input:focus, .is-info.textarea:focus, .is-info.is-focused.input, .is-info.is-focused.textarea, .is-info.input:active, .is-info.textarea:active, .is-info.is-active.input, .is-info.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);\n}\n\n.is-success.input, .is-success.textarea {\n  border-color: #48c78e;\n}\n\n.is-success.input:focus, .is-success.textarea:focus, .is-success.is-focused.input, .is-success.is-focused.textarea, .is-success.input:active, .is-success.textarea:active, .is-success.is-active.input, .is-success.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n\n.is-warning.input, .is-warning.textarea {\n  border-color: #ffe08a;\n}\n\n.is-warning.input:focus, .is-warning.textarea:focus, .is-warning.is-focused.input, .is-warning.is-focused.textarea, .is-warning.input:active, .is-warning.textarea:active, .is-warning.is-active.input, .is-warning.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n\n.is-danger.input, .is-danger.textarea {\n  border-color: #f14668;\n}\n\n.is-danger.input:focus, .is-danger.textarea:focus, .is-danger.is-focused.input, .is-danger.is-focused.textarea, .is-danger.input:active, .is-danger.textarea:active, .is-danger.is-active.input, .is-danger.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n\n.is-small.input, .is-small.textarea {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n\n.is-medium.input, .is-medium.textarea {\n  font-size: 1.25rem;\n}\n\n.is-large.input, .is-large.textarea {\n  font-size: 1.5rem;\n}\n\n.is-fullwidth.input, .is-fullwidth.textarea {\n  display: block;\n  width: 100%;\n}\n\n.is-inline.input, .is-inline.textarea {\n  display: inline;\n  width: auto;\n}\n\n.input.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(calc(0.75em - 1px) + 0.375em);\n  padding-right: calc(calc(0.75em - 1px) + 0.375em);\n}\n\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: calc(0.75em - 1px);\n  resize: vertical;\n}\n\n.textarea:not([rows]) {\n  max-height: 40em;\n  min-height: 8em;\n}\n\n.textarea[rows] {\n  height: initial;\n}\n\n.textarea.has-fixed-size {\n  resize: none;\n}\n\n.checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n\n.checkbox input, .radio input {\n  cursor: pointer;\n}\n\n.checkbox:hover, .radio:hover {\n  color: #363636;\n}\n\n.checkbox[disabled], .radio[disabled],\nfieldset[disabled] .checkbox,\nfieldset[disabled] .radio,\n.checkbox input[disabled],\n.radio input[disabled] {\n  color: #7a7a7a;\n  cursor: not-allowed;\n}\n\n.radio + .radio {\n  margin-left: 0.5em;\n}\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n\n.select:not(.is-multiple) {\n  height: 2.5em;\n}\n\n.select:not(.is-multiple):not(.is-loading)::after {\n  border-color: #485fc7;\n  right: 1.125em;\n  z-index: 4;\n}\n\n.select.is-rounded select {\n  border-radius: 9999px;\n  padding-left: 1em;\n}\n\n.select select {\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  max-width: 100%;\n  outline: none;\n}\n\n.select select::-ms-expand {\n  display: none;\n}\n\n.select select[disabled]:hover,\nfieldset[disabled] .select select:hover {\n  border-color: whitesmoke;\n}\n\n.select select:not([multiple]) {\n  padding-right: 2.5em;\n}\n\n.select select[multiple] {\n  height: auto;\n  padding: 0;\n}\n\n.select select[multiple] option {\n  padding: 0.5em 1em;\n}\n\n.select:not(.is-multiple):not(.is-loading):hover::after {\n  border-color: #363636;\n}\n\n.select.is-white:not(:hover)::after {\n  border-color: white;\n}\n\n.select.is-white select {\n  border-color: white;\n}\n\n.select.is-white select:hover, .select.is-white select.is-hovered {\n  border-color: #f2f2f2;\n}\n\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n\n.select.is-black:not(:hover)::after {\n  border-color: #0a0a0a;\n}\n\n.select.is-black select {\n  border-color: #0a0a0a;\n}\n\n.select.is-black select:hover, .select.is-black select.is-hovered {\n  border-color: black;\n}\n\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n\n.select.is-light:not(:hover)::after {\n  border-color: whitesmoke;\n}\n\n.select.is-light select {\n  border-color: whitesmoke;\n}\n\n.select.is-light select:hover, .select.is-light select.is-hovered {\n  border-color: #e8e8e8;\n}\n\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n\n.select.is-dark:not(:hover)::after {\n  border-color: #363636;\n}\n\n.select.is-dark select {\n  border-color: #363636;\n}\n\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n  border-color: #292929;\n}\n\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n\n.select.is-primary:not(:hover)::after {\n  border-color: #00d1b2;\n}\n\n.select.is-primary select {\n  border-color: #00d1b2;\n}\n\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n  border-color: #00b89c;\n}\n\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n\n.select.is-link:not(:hover)::after {\n  border-color: #485fc7;\n}\n\n.select.is-link select {\n  border-color: #485fc7;\n}\n\n.select.is-link select:hover, .select.is-link select.is-hovered {\n  border-color: #3a51bb;\n}\n\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);\n}\n\n.select.is-info:not(:hover)::after {\n  border-color: #3e8ed0;\n}\n\n.select.is-info select {\n  border-color: #3e8ed0;\n}\n\n.select.is-info select:hover, .select.is-info select.is-hovered {\n  border-color: #3082c5;\n}\n\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);\n}\n\n.select.is-success:not(:hover)::after {\n  border-color: #48c78e;\n}\n\n.select.is-success select {\n  border-color: #48c78e;\n}\n\n.select.is-success select:hover, .select.is-success select.is-hovered {\n  border-color: #3abb81;\n}\n\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n\n.select.is-warning:not(:hover)::after {\n  border-color: #ffe08a;\n}\n\n.select.is-warning select {\n  border-color: #ffe08a;\n}\n\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n  border-color: #ffd970;\n}\n\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n\n.select.is-danger:not(:hover)::after {\n  border-color: #f14668;\n}\n\n.select.is-danger select {\n  border-color: #f14668;\n}\n\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n  border-color: #ef2e55;\n}\n\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n\n.select.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n\n.select.is-medium {\n  font-size: 1.25rem;\n}\n\n.select.is-large {\n  font-size: 1.5rem;\n}\n\n.select.is-disabled::after {\n  border-color: #7a7a7a;\n}\n\n.select.is-fullwidth {\n  width: 100%;\n}\n\n.select.is-fullwidth select {\n  width: 100%;\n}\n\n.select.is-loading::after {\n  margin-top: 0;\n  position: absolute;\n  right: 0.625em;\n  top: 0.625em;\n  transform: none;\n}\n\n.select.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n\n.select.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n\n.select.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n\n.file.is-white .file-cta {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n  color: #0a0a0a;\n}\n\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.file.is-black .file-cta {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n  color: white;\n}\n\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n\n.file.is-light .file-cta {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-dark .file-cta {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n  color: #fff;\n}\n\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-primary .file-cta {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n  color: #fff;\n}\n\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-link .file-cta {\n  background-color: #485fc7;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n  background-color: #3e56c4;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(72, 95, 199, 0.25);\n  color: #fff;\n}\n\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n  background-color: #3a51bb;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-info .file-cta {\n  background-color: #3e8ed0;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n  background-color: #3488ce;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(62, 142, 208, 0.25);\n  color: #fff;\n}\n\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n  background-color: #3082c5;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-success .file-cta {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.25);\n  color: #fff;\n}\n\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-warning .file-cta {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-danger .file-cta {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);\n  color: #fff;\n}\n\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-small {\n  font-size: 0.75rem;\n}\n\n.file.is-normal {\n  font-size: 1rem;\n}\n\n.file.is-medium {\n  font-size: 1.25rem;\n}\n\n.file.is-medium .file-icon .fa {\n  font-size: 21px;\n}\n\n.file.is-large {\n  font-size: 1.5rem;\n}\n\n.file.is-large .file-icon .fa {\n  font-size: 28px;\n}\n\n.file.has-name .file-cta {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.file.has-name .file-name {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.file.has-name.is-empty .file-cta {\n  border-radius: 4px;\n}\n\n.file.has-name.is-empty .file-name {\n  display: none;\n}\n\n.file.is-boxed .file-label {\n  flex-direction: column;\n}\n\n.file.is-boxed .file-cta {\n  flex-direction: column;\n  height: auto;\n  padding: 1em 3em;\n}\n\n.file.is-boxed .file-name {\n  border-width: 0 1px 1px;\n}\n\n.file.is-boxed .file-icon {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.file.is-boxed .file-icon .fa {\n  font-size: 21px;\n}\n\n.file.is-boxed.is-small .file-icon .fa {\n  font-size: 14px;\n}\n\n.file.is-boxed.is-medium .file-icon .fa {\n  font-size: 28px;\n}\n\n.file.is-boxed.is-large .file-icon .fa {\n  font-size: 35px;\n}\n\n.file.is-boxed.has-name .file-cta {\n  border-radius: 4px 4px 0 0;\n}\n\n.file.is-boxed.has-name .file-name {\n  border-radius: 0 0 4px 4px;\n  border-width: 0 1px 1px;\n}\n\n.file.is-centered {\n  justify-content: center;\n}\n\n.file.is-fullwidth .file-label {\n  width: 100%;\n}\n\n.file.is-fullwidth .file-name {\n  flex-grow: 1;\n  max-width: none;\n}\n\n.file.is-right {\n  justify-content: flex-end;\n}\n\n.file.is-right .file-cta {\n  border-radius: 0 4px 4px 0;\n}\n\n.file.is-right .file-name {\n  border-radius: 4px 0 0 4px;\n  border-width: 1px 0 1px 1px;\n  order: -1;\n}\n\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n\n.file-label:hover .file-cta {\n  background-color: #eeeeee;\n  color: #363636;\n}\n\n.file-label:hover .file-name {\n  border-color: #d5d5d5;\n}\n\n.file-label:active .file-cta {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n\n.file-label:active .file-name {\n  border-color: #cfcfcf;\n}\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: inherit;\n  text-overflow: ellipsis;\n}\n\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n\n.file-icon .fa {\n  font-size: 14px;\n}\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n.label:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n\n.label.is-small {\n  font-size: 0.75rem;\n}\n\n.label.is-medium {\n  font-size: 1.25rem;\n}\n\n.label.is-large {\n  font-size: 1.5rem;\n}\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n\n.help.is-white {\n  color: white;\n}\n\n.help.is-black {\n  color: #0a0a0a;\n}\n\n.help.is-light {\n  color: whitesmoke;\n}\n\n.help.is-dark {\n  color: #363636;\n}\n\n.help.is-primary {\n  color: #00d1b2;\n}\n\n.help.is-link {\n  color: #485fc7;\n}\n\n.help.is-info {\n  color: #3e8ed0;\n}\n\n.help.is-success {\n  color: #48c78e;\n}\n\n.help.is-warning {\n  color: #ffe08a;\n}\n\n.help.is-danger {\n  color: #f14668;\n}\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.field.has-addons .control:not(:last-child) {\n  margin-right: -1px;\n}\n\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n.field.has-addons .control:not(:first-child):not(:last-child) .input,\n.field.has-addons .control:not(:first-child):not(:last-child) .select select {\n  border-radius: 0;\n}\n\n.field.has-addons .control:first-child:not(:only-child) .button,\n.field.has-addons .control:first-child:not(:only-child) .input,\n.field.has-addons .control:first-child:not(:only-child) .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 40px;\n  border-bottom-left-radius: 40px;\n}\n\n.field.has-addons .control:last-child:not(:only-child) .button,\n.field.has-addons .control:last-child:not(:only-child) .input,\n.field.has-addons .control:last-child:not(:only-child) .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 40px;\n  border-bottom-right-radius: 40px;\n}\n\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n.field.has-addons .control .input:not([disabled]):hover,\n.field.has-addons .control .input:not([disabled]).is-hovered,\n.field.has-addons .control .select select:not([disabled]):hover,\n.field.has-addons .control .select select:not([disabled]).is-hovered {\n  z-index: 2;\n}\n\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n.field.has-addons .control .input:not([disabled]):focus,\n.field.has-addons .control .input:not([disabled]).is-focused,\n.field.has-addons .control .input:not([disabled]):active,\n.field.has-addons .control .input:not([disabled]).is-active,\n.field.has-addons .control .select select:not([disabled]):focus,\n.field.has-addons .control .select select:not([disabled]).is-focused,\n.field.has-addons .control .select select:not([disabled]):active,\n.field.has-addons .control .select select:not([disabled]).is-active {\n  z-index: 3;\n}\n\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n.field.has-addons .control .input:not([disabled]):focus:hover,\n.field.has-addons .control .input:not([disabled]).is-focused:hover,\n.field.has-addons .control .input:not([disabled]):active:hover,\n.field.has-addons .control .input:not([disabled]).is-active:hover,\n.field.has-addons .control .select select:not([disabled]):focus:hover,\n.field.has-addons .control .select select:not([disabled]).is-focused:hover,\n.field.has-addons .control .select select:not([disabled]):active:hover,\n.field.has-addons .control .select select:not([disabled]).is-active:hover {\n  z-index: 4;\n}\n\n.field.has-addons .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.field.has-addons.has-addons-centered {\n  justify-content: center;\n}\n\n.field.has-addons.has-addons-right {\n  justify-content: flex-end;\n}\n\n.field.has-addons.has-addons-fullwidth .control {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.field.is-grouped > .control {\n  flex-shrink: 0;\n}\n\n.field.is-grouped > .control:not(:last-child) {\n  margin-bottom: 0;\n  /* margin-right: 0.75rem; */\n}\n\n.field.is-grouped > .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.field.is-grouped.is-grouped-centered {\n  justify-content: center;\n}\n\n.field.is-grouped.is-grouped-right {\n  justify-content: flex-end;\n}\n\n.field.is-grouped.is-grouped-multiline {\n  flex-wrap: wrap;\n}\n\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.field.is-grouped.is-grouped-multiline:last-child {\n  margin-bottom: -0.75rem;\n}\n\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n  margin-bottom: 0;\n}\n\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: flex;\n  }\n}\n\n.field-label .label {\n  font-size: inherit;\n}\n\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n  }\n  .field-label.is-small {\n    font-size: 0.75rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-normal {\n    padding-top: 0.375em;\n  }\n  .field-label.is-medium {\n    font-size: 1.25rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-large {\n    font-size: 1.5rem;\n    padding-top: 0.375em;\n  }\n}\n\n.field-body .field .field {\n  margin-bottom: 0;\n}\n\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n  }\n  .field-body .field {\n    margin-bottom: 0;\n  }\n  .field-body > .field {\n    flex-shrink: 1;\n  }\n  .field-body > .field:not(.is-narrow) {\n    flex-grow: 1;\n  }\n  .field-body > .field:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: inherit;\n}\n\n.control.has-icons-left .input:focus ~ .icon,\n.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n.control.has-icons-right .select:focus ~ .icon {\n  color: #4a4a4a;\n}\n\n.control.has-icons-left .input.is-small ~ .icon,\n.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n.control.has-icons-right .select.is-small ~ .icon {\n  font-size: 0.75rem;\n}\n\n.control.has-icons-left .input.is-medium ~ .icon,\n.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n.control.has-icons-right .select.is-medium ~ .icon {\n  font-size: 1.25rem;\n}\n\n.control.has-icons-left .input.is-large ~ .icon,\n.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n.control.has-icons-right .select.is-large ~ .icon {\n  font-size: 1.5rem;\n}\n\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n  color: #dbdbdb;\n  height: 2.5em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 2.5em;\n  z-index: 4;\n}\n\n.control.has-icons-left .input,\n.control.has-icons-left .select select {\n  padding-left: 2.5em;\n}\n\n.control.has-icons-left .icon.is-left {\n  left: 0;\n}\n\n.control.has-icons-right .input,\n.control.has-icons-right .select select {\n  padding-right: 2.5em;\n}\n\n.control.has-icons-right .icon.is-right {\n  right: 0;\n}\n\n.control.is-loading::after {\n  position: absolute !important;\n  right: 0.625em;\n  top: 0.625em;\n  z-index: 4;\n}\n\n.control.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n\n.control.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n\n.control.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n/* Bulma Components */\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n\n.breadcrumb a {\n  align-items: center;\n  color: #485fc7;\n  display: flex;\n  justify-content: center;\n  padding: 0 0.75em;\n}\n\n.breadcrumb a:hover {\n  color: #363636;\n}\n\n.breadcrumb li {\n  align-items: center;\n  display: flex;\n}\n\n.breadcrumb li:first-child a {\n  padding-left: 0;\n}\n\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none;\n}\n\n.breadcrumb li + li::before {\n  color: #b5b5b5;\n  content: \"\\0002f\";\n}\n\n.breadcrumb ul,\n.breadcrumb ol {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.breadcrumb .icon:first-child {\n  margin-right: 0.5em;\n}\n\n.breadcrumb .icon:last-child {\n  margin-left: 0.5em;\n}\n\n.breadcrumb.is-centered ol,\n.breadcrumb.is-centered ul {\n  justify-content: center;\n}\n\n.breadcrumb.is-right ol,\n.breadcrumb.is-right ul {\n  justify-content: flex-end;\n}\n\n.breadcrumb.is-small {\n  font-size: 0.75rem;\n}\n\n.breadcrumb.is-medium {\n  font-size: 1.25rem;\n}\n\n.breadcrumb.is-large {\n  font-size: 1.5rem;\n}\n\n.breadcrumb.has-arrow-separator li + li::before {\n  content: \"\\02192\";\n}\n\n.breadcrumb.has-bullet-separator li + li::before {\n  content: \"\\02022\";\n}\n\n.breadcrumb.has-dot-separator li + li::before {\n  content: \"\\000b7\";\n}\n\n.breadcrumb.has-succeeds-separator li + li::before {\n  content: \"\\0227B\";\n}\n\n.card {\n  /* background-color: white; */\n  background-color: #1b2d53;\n  border-radius: 0.25rem;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  /* color: #4a4a4a; */\n  color: #d9d9d9;\n  max-width: 100%;\n  position: relative;\n}\n\n.card-header:first-child, .card-content:first-child, .card-footer:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.card-header:last-child, .card-content:last-child, .card-footer:last-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-header {\n  background-color: transparent;\n  align-items: stretch;\n  box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);\n  display: flex;\n}\n\n.card-header-title {\n  align-items: center;\n  /* color: #363636; */\n  color: #d9d9d9;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem 1rem;\n}\n\n.card-header-title.is-centered {\n  justify-content: center;\n}\n\n.card-header-icon {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem 1rem;\n}\n\n.card-image {\n  display: block;\n  position: relative;\n}\n\n.card-image:first-child img {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.card-image:last-child img {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #ededed;\n  align-items: stretch;\n  display: flex;\n}\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem;\n}\n\n.card-footer-item:not(:last-child) {\n  border-right: 1px solid #ededed;\n}\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n  display: block;\n}\n\n.dropdown.is-right .dropdown-menu {\n  left: auto;\n  right: 0;\n}\n\n.dropdown.is-up .dropdown-menu {\n  bottom: 100%;\n  padding-bottom: 4px;\n  padding-top: initial;\n  top: auto;\n}\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\n\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: inherit;\n  white-space: nowrap;\n  width: 100%;\n}\n\na.dropdown-item:hover,\nbutton.dropdown-item:hover {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n}\n\na.dropdown-item.is-active,\nbutton.dropdown-item.is-active {\n  background-color: #485fc7;\n  color: #fff;\n}\n\n.dropdown-divider {\n  background-color: #ededed;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n\n.level {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.level code {\n  border-radius: 4px;\n}\n\n.level img {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.level.is-mobile {\n  display: flex;\n}\n\n.level.is-mobile .level-left,\n.level.is-mobile .level-right {\n  display: flex;\n}\n\n.level.is-mobile .level-left + .level-right {\n  margin-top: 0;\n}\n\n.level.is-mobile .level-item:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n\n.level.is-mobile .level-item:not(.is-narrow) {\n  flex-grow: 1;\n}\n\n@media screen and (min-width: 769px), print {\n  .level {\n    display: flex;\n  }\n  .level > .level-item:not(.is-narrow) {\n    flex-grow: 1;\n  }\n}\n\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n}\n\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  flex-grow: 1;\n}\n\n@media screen and (min-width: 769px), print {\n  .level-left .level-item:not(:last-child),\n  .level-right .level-item:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.level-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .level-left {\n    display: flex;\n  }\n}\n\n.level-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n\n@media screen and (min-width: 769px), print {\n  .level-right {\n    display: flex;\n  }\n}\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: inherit;\n}\n\n.media .content:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.media .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  display: flex;\n  padding-top: 0.75rem;\n}\n\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n\n.media .media .media {\n  padding-top: 0.5rem;\n}\n\n.media .media .media + .media {\n  margin-top: 0.5rem;\n}\n\n.media + .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n\n.media.is-large + .media {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n}\n\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.media-left {\n  margin-right: 1rem;\n}\n\n.media-right {\n  margin-left: 1rem;\n}\n\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: inherit;\n}\n\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto;\n  }\n}\n\n.menu {\n  font-size: 1rem;\n}\n\n.menu.is-small {\n  font-size: 0.75rem;\n}\n\n.menu.is-medium {\n  font-size: 1.25rem;\n}\n\n.menu.is-large {\n  font-size: 1.5rem;\n}\n\n.menu-list {\n  line-height: 1.25;\n}\n\n.menu-list a {\n  border-radius: 2px;\n  color: #b3b3b3e3;\n  display: block;\n  padding: 0.5em 0.75em;\n}\n\n/* .menu-list a:hover {\n  background-color: whitesmoke;\n  color: #363636;\n} */\n\n.menu-list a.is-active {\n  background-color: #485fc7;\n  color: #fff;\n}\n\n.menu-list li ul {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n\n.menu-label {\n  color: #f0f0f0;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\n.menu-label:not(:first-child) {\n  margin-top: 1em;\n}\n\n.menu-label:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n.message strong {\n  color: currentColor;\n}\n\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n\n.message.is-small {\n  font-size: 0.75rem;\n}\n\n.message.is-medium {\n  font-size: 1.25rem;\n}\n\n.message.is-large {\n  font-size: 1.5rem;\n}\n\n.message.is-white {\n  background-color: white;\n}\n\n.message.is-white .message-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.message.is-white .message-body {\n  border-color: white;\n}\n\n.message.is-black {\n  background-color: #fafafa;\n}\n\n.message.is-black .message-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.message.is-black .message-body {\n  border-color: #0a0a0a;\n}\n\n.message.is-light {\n  background-color: #fafafa;\n}\n\n.message.is-light .message-header {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.message.is-light .message-body {\n  border-color: whitesmoke;\n}\n\n.message.is-dark {\n  background-color: #fafafa;\n}\n\n.message.is-dark .message-header {\n  background-color: #363636;\n  color: #fff;\n}\n\n.message.is-dark .message-body {\n  border-color: #363636;\n}\n\n.message.is-primary {\n  background-color: #ebfffc;\n}\n\n.message.is-primary .message-header {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.message.is-primary .message-body {\n  border-color: #00d1b2;\n  color: #00947e;\n}\n\n.message.is-link {\n  background-color: #eff1fa;\n}\n\n.message.is-link .message-header {\n  background-color: #485fc7;\n  color: #fff;\n}\n\n.message.is-link .message-body {\n  border-color: #485fc7;\n  color: #3850b7;\n}\n\n.message.is-info {\n  background-color: #eff5fb;\n}\n\n.message.is-info .message-header {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n\n.message.is-info .message-body {\n  border-color: #3e8ed0;\n  color: #296fa8;\n}\n\n.message.is-success {\n  background-color: #effaf5;\n}\n\n.message.is-success .message-header {\n  background-color: #48c78e;\n  color: #fff;\n}\n\n.message.is-success .message-body {\n  border-color: #48c78e;\n  color: #257953;\n}\n\n.message.is-warning {\n  background-color: #fffaeb;\n}\n\n.message.is-warning .message-header {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.message.is-warning .message-body {\n  border-color: #ffe08a;\n  color: #946c00;\n}\n\n.message.is-danger {\n  background-color: #feecf0;\n}\n\n.message.is-danger .message-header {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.message.is-danger .message-body {\n  border-color: #f14668;\n  color: #cc0f35;\n}\n\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative;\n}\n\n.message-header .delete {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: 0.75em;\n}\n\n.message-header + .message-body {\n  border-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em;\n}\n\n.message-body code,\n.message-body pre {\n  background-color: white;\n}\n\n.message-body pre code {\n  background-color: transparent;\n}\n\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n\n.modal.is-active {\n  display: flex;\n}\n\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86);\n}\n\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n\n@media screen and (min-width: 769px) {\n  .modal-content,\n  .modal-card {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px;\n  }\n}\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible;\n}\n\n.modal-card-head {\n  align-items: center;\n  /* background-color: whitesmoke; */\n  background-color: #13143c;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  /* padding: 20px; */\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 5px;\n  position: relative;\n}\n\n.modal-card-foot {\n  align-items: center;\n  /* background-color: whitesmoke; */\n  background-color: #13143c;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  /* padding: 20px; */\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 5px;\n  padding-right: 20px;\n  position: relative;\n}\n\n.modal-card-head {\n  /* border-bottom: 1px solid #dbdbdb; */\n  border-bottom: 1px solid #2cb3c5;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.modal-card-title {\n  /* color: #363636; */\n  color: #d9d9d9;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #2cb3c5;\n  /* border-top: 1px solid #dbdbdb; */\n}\n\n.modal-card-foot .button:not(:last-child) {\n  margin-right: 0.5em;\n}\n\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  /* background-color: white; */\n  background-color: #13143c;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30;\n}\n\n.navbar.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-brand > .navbar-item,\n.navbar.is-white .navbar-brand .navbar-link {\n  color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n.navbar.is-white .navbar-brand .navbar-link:focus,\n.navbar.is-white .navbar-brand .navbar-link:hover,\n.navbar.is-white .navbar-brand .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-brand .navbar-link::after {\n  border-color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-burger {\n  color: #0a0a0a;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-white .navbar-start > .navbar-item,\n  .navbar.is-white .navbar-start .navbar-link,\n  .navbar.is-white .navbar-end > .navbar-item,\n  .navbar.is-white .navbar-end .navbar-link {\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n  .navbar.is-white .navbar-start .navbar-link:focus,\n  .navbar.is-white .navbar-start .navbar-link:hover,\n  .navbar.is-white .navbar-start .navbar-link.is-active,\n  .navbar.is-white .navbar-end > a.navbar-item:focus,\n  .navbar.is-white .navbar-end > a.navbar-item:hover,\n  .navbar.is-white .navbar-end > a.navbar-item.is-active,\n  .navbar.is-white .navbar-end .navbar-link:focus,\n  .navbar.is-white .navbar-end .navbar-link:hover,\n  .navbar.is-white .navbar-end .navbar-link.is-active {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start .navbar-link::after,\n  .navbar.is-white .navbar-end .navbar-link::after {\n    border-color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n    background-color: white;\n    color: #0a0a0a;\n  }\n}\n\n.navbar.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.navbar.is-black .navbar-brand > .navbar-item,\n.navbar.is-black .navbar-brand .navbar-link {\n  color: white;\n}\n\n.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n.navbar.is-black .navbar-brand .navbar-link:focus,\n.navbar.is-black .navbar-brand .navbar-link:hover,\n.navbar.is-black .navbar-brand .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n\n.navbar.is-black .navbar-brand .navbar-link::after {\n  border-color: white;\n}\n\n.navbar.is-black .navbar-burger {\n  color: white;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-black .navbar-start > .navbar-item,\n  .navbar.is-black .navbar-start .navbar-link,\n  .navbar.is-black .navbar-end > .navbar-item,\n  .navbar.is-black .navbar-end .navbar-link {\n    color: white;\n  }\n  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n  .navbar.is-black .navbar-start .navbar-link:focus,\n  .navbar.is-black .navbar-start .navbar-link:hover,\n  .navbar.is-black .navbar-start .navbar-link.is-active,\n  .navbar.is-black .navbar-end > a.navbar-item:focus,\n  .navbar.is-black .navbar-end > a.navbar-item:hover,\n  .navbar.is-black .navbar-end > a.navbar-item.is-active,\n  .navbar.is-black .navbar-end .navbar-link:focus,\n  .navbar.is-black .navbar-end .navbar-link:hover,\n  .navbar.is-black .navbar-end .navbar-link.is-active {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-start .navbar-link::after,\n  .navbar.is-black .navbar-end .navbar-link::after {\n    border-color: white;\n  }\n  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n    background-color: #0a0a0a;\n    color: white;\n  }\n}\n\n.navbar.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-brand > .navbar-item,\n.navbar.is-light .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n.navbar.is-light .navbar-brand .navbar-link:focus,\n.navbar.is-light .navbar-brand .navbar-link:hover,\n.navbar.is-light .navbar-brand .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-light .navbar-start > .navbar-item,\n  .navbar.is-light .navbar-start .navbar-link,\n  .navbar.is-light .navbar-end > .navbar-item,\n  .navbar.is-light .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n  .navbar.is-light .navbar-start .navbar-link:focus,\n  .navbar.is-light .navbar-start .navbar-link:hover,\n  .navbar.is-light .navbar-start .navbar-link.is-active,\n  .navbar.is-light .navbar-end > a.navbar-item:focus,\n  .navbar.is-light .navbar-end > a.navbar-item:hover,\n  .navbar.is-light .navbar-end > a.navbar-item.is-active,\n  .navbar.is-light .navbar-end .navbar-link:focus,\n  .navbar.is-light .navbar-end .navbar-link:hover,\n  .navbar.is-light .navbar-end .navbar-link.is-active {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start .navbar-link::after,\n  .navbar.is-light .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n\n.navbar.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.navbar.is-dark .navbar-brand > .navbar-item,\n.navbar.is-dark .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n.navbar.is-dark .navbar-brand .navbar-link:focus,\n.navbar.is-dark .navbar-brand .navbar-link:hover,\n.navbar.is-dark .navbar-brand .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n\n.navbar.is-dark .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-dark .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-dark .navbar-start > .navbar-item,\n  .navbar.is-dark .navbar-start .navbar-link,\n  .navbar.is-dark .navbar-end > .navbar-item,\n  .navbar.is-dark .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-start .navbar-link:focus,\n  .navbar.is-dark .navbar-start .navbar-link:hover,\n  .navbar.is-dark .navbar-start .navbar-link.is-active,\n  .navbar.is-dark .navbar-end > a.navbar-item:focus,\n  .navbar.is-dark .navbar-end > a.navbar-item:hover,\n  .navbar.is-dark .navbar-end > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-end .navbar-link:focus,\n  .navbar.is-dark .navbar-end .navbar-link:hover,\n  .navbar.is-dark .navbar-end .navbar-link.is-active {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start .navbar-link::after,\n  .navbar.is-dark .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n    background-color: #363636;\n    color: #fff;\n  }\n}\n\n.navbar.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.navbar.is-primary .navbar-brand > .navbar-item,\n.navbar.is-primary .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n.navbar.is-primary .navbar-brand .navbar-link:focus,\n.navbar.is-primary .navbar-brand .navbar-link:hover,\n.navbar.is-primary .navbar-brand .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n\n.navbar.is-primary .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-primary .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-primary .navbar-start > .navbar-item,\n  .navbar.is-primary .navbar-start .navbar-link,\n  .navbar.is-primary .navbar-end > .navbar-item,\n  .navbar.is-primary .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-start .navbar-link:focus,\n  .navbar.is-primary .navbar-start .navbar-link:hover,\n  .navbar.is-primary .navbar-start .navbar-link.is-active,\n  .navbar.is-primary .navbar-end > a.navbar-item:focus,\n  .navbar.is-primary .navbar-end > a.navbar-item:hover,\n  .navbar.is-primary .navbar-end > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-end .navbar-link:focus,\n  .navbar.is-primary .navbar-end .navbar-link:hover,\n  .navbar.is-primary .navbar-end .navbar-link.is-active {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start .navbar-link::after,\n  .navbar.is-primary .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n    background-color: #00d1b2;\n    color: #fff;\n  }\n}\n\n.navbar.is-link {\n  background-color: #485fc7;\n  color: #fff;\n}\n\n.navbar.is-link .navbar-brand > .navbar-item,\n.navbar.is-link .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n.navbar.is-link .navbar-brand .navbar-link:focus,\n.navbar.is-link .navbar-brand .navbar-link:hover,\n.navbar.is-link .navbar-brand .navbar-link.is-active {\n  background-color: #3a51bb;\n  color: #fff;\n}\n\n.navbar.is-link .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-link .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-link .navbar-start > .navbar-item,\n  .navbar.is-link .navbar-start .navbar-link,\n  .navbar.is-link .navbar-end > .navbar-item,\n  .navbar.is-link .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n  .navbar.is-link .navbar-start .navbar-link:focus,\n  .navbar.is-link .navbar-start .navbar-link:hover,\n  .navbar.is-link .navbar-start .navbar-link.is-active,\n  .navbar.is-link .navbar-end > a.navbar-item:focus,\n  .navbar.is-link .navbar-end > a.navbar-item:hover,\n  .navbar.is-link .navbar-end > a.navbar-item.is-active,\n  .navbar.is-link .navbar-end .navbar-link:focus,\n  .navbar.is-link .navbar-end .navbar-link:hover,\n  .navbar.is-link .navbar-end .navbar-link.is-active {\n    background-color: #3a51bb;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start .navbar-link::after,\n  .navbar.is-link .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3a51bb;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n    background-color: #485fc7;\n    color: #fff;\n  }\n}\n\n.navbar.is-info {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n\n.navbar.is-info .navbar-brand > .navbar-item,\n.navbar.is-info .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n.navbar.is-info .navbar-brand .navbar-link:focus,\n.navbar.is-info .navbar-brand .navbar-link:hover,\n.navbar.is-info .navbar-brand .navbar-link.is-active {\n  background-color: #3082c5;\n  color: #fff;\n}\n\n.navbar.is-info .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-info .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-info .navbar-start > .navbar-item,\n  .navbar.is-info .navbar-start .navbar-link,\n  .navbar.is-info .navbar-end > .navbar-item,\n  .navbar.is-info .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n  .navbar.is-info .navbar-start .navbar-link:focus,\n  .navbar.is-info .navbar-start .navbar-link:hover,\n  .navbar.is-info .navbar-start .navbar-link.is-active,\n  .navbar.is-info .navbar-end > a.navbar-item:focus,\n  .navbar.is-info .navbar-end > a.navbar-item:hover,\n  .navbar.is-info .navbar-end > a.navbar-item.is-active,\n  .navbar.is-info .navbar-end .navbar-link:focus,\n  .navbar.is-info .navbar-end .navbar-link:hover,\n  .navbar.is-info .navbar-end .navbar-link.is-active {\n    background-color: #3082c5;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start .navbar-link::after,\n  .navbar.is-info .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3082c5;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n    background-color: #3e8ed0;\n    color: #fff;\n  }\n}\n\n.navbar.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n\n.navbar.is-success .navbar-brand > .navbar-item,\n.navbar.is-success .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n.navbar.is-success .navbar-brand .navbar-link:focus,\n.navbar.is-success .navbar-brand .navbar-link:hover,\n.navbar.is-success .navbar-brand .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff;\n}\n\n.navbar.is-success .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-success .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-success .navbar-start > .navbar-item,\n  .navbar.is-success .navbar-start .navbar-link,\n  .navbar.is-success .navbar-end > .navbar-item,\n  .navbar.is-success .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n  .navbar.is-success .navbar-start .navbar-link:focus,\n  .navbar.is-success .navbar-start .navbar-link:hover,\n  .navbar.is-success .navbar-start .navbar-link.is-active,\n  .navbar.is-success .navbar-end > a.navbar-item:focus,\n  .navbar.is-success .navbar-end > a.navbar-item:hover,\n  .navbar.is-success .navbar-end > a.navbar-item.is-active,\n  .navbar.is-success .navbar-end .navbar-link:focus,\n  .navbar.is-success .navbar-end .navbar-link:hover,\n  .navbar.is-success .navbar-end .navbar-link.is-active {\n    background-color: #3abb81;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start .navbar-link::after,\n  .navbar.is-success .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3abb81;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n    background-color: #48c78e;\n    color: #fff;\n  }\n}\n\n.navbar.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-brand > .navbar-item,\n.navbar.is-warning .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n.navbar.is-warning .navbar-brand .navbar-link:focus,\n.navbar.is-warning .navbar-brand .navbar-link:hover,\n.navbar.is-warning .navbar-brand .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-warning .navbar-start > .navbar-item,\n  .navbar.is-warning .navbar-start .navbar-link,\n  .navbar.is-warning .navbar-end > .navbar-item,\n  .navbar.is-warning .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-start .navbar-link:focus,\n  .navbar.is-warning .navbar-start .navbar-link:hover,\n  .navbar.is-warning .navbar-start .navbar-link.is-active,\n  .navbar.is-warning .navbar-end > a.navbar-item:focus,\n  .navbar.is-warning .navbar-end > a.navbar-item:hover,\n  .navbar.is-warning .navbar-end > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-end .navbar-link:focus,\n  .navbar.is-warning .navbar-end .navbar-link:hover,\n  .navbar.is-warning .navbar-end .navbar-link.is-active {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start .navbar-link::after,\n  .navbar.is-warning .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ffe08a;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n\n.navbar.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.navbar.is-danger .navbar-brand > .navbar-item,\n.navbar.is-danger .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n.navbar.is-danger .navbar-brand .navbar-link:focus,\n.navbar.is-danger .navbar-brand .navbar-link:hover,\n.navbar.is-danger .navbar-brand .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n\n.navbar.is-danger .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-danger .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-danger .navbar-start > .navbar-item,\n  .navbar.is-danger .navbar-start .navbar-link,\n  .navbar.is-danger .navbar-end > .navbar-item,\n  .navbar.is-danger .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-start .navbar-link:focus,\n  .navbar.is-danger .navbar-start .navbar-link:hover,\n  .navbar.is-danger .navbar-start .navbar-link.is-active,\n  .navbar.is-danger .navbar-end > a.navbar-item:focus,\n  .navbar.is-danger .navbar-end > a.navbar-item:hover,\n  .navbar.is-danger .navbar-end > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-end .navbar-link:focus,\n  .navbar.is-danger .navbar-end .navbar-link:hover,\n  .navbar.is-danger .navbar-end .navbar-link.is-active {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start .navbar-link::after,\n  .navbar.is-danger .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n    background-color: #f14668;\n    color: #fff;\n  }\n}\n\n.navbar > .container {\n  align-items: stretch;\n  display: flex;\n  min-height: 3.25rem;\n  width: 100%;\n}\n\n.navbar.has-shadow {\n  box-shadow: 0 2px 0 0 whitesmoke;\n}\n\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 30;\n}\n\n.navbar.is-fixed-bottom {\n  bottom: 0;\n}\n\n.navbar.is-fixed-bottom.has-shadow {\n  box-shadow: 0 -2px 0 0 whitesmoke;\n}\n\n.navbar.is-fixed-top {\n  top: 0;\n}\n\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\n\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem;\n}\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent;\n}\n\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.navbar-burger {\n  color: #4a4a4a;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n\n.navbar-burger span {\n  background-color: currentColor;\n  display: block;\n  height: 1px;\n  left: calc(50% - 8px);\n  position: absolute;\n  transform-origin: center;\n  transition-duration: 86ms;\n  transition-property: background-color, opacity, transform;\n  transition-timing-function: ease-out;\n  width: 16px;\n}\n\n.navbar-burger span:nth-child(1) {\n  top: calc(50% - 6px);\n}\n\n.navbar-burger span:nth-child(2) {\n  top: calc(50% - 1px);\n}\n\n.navbar-burger span:nth-child(3) {\n  top: calc(50% + 4px);\n}\n\n.navbar-burger:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.navbar-burger.is-active span:nth-child(1) {\n  transform: translateY(5px) rotate(45deg);\n}\n\n.navbar-burger.is-active span:nth-child(2) {\n  opacity: 0;\n}\n\n.navbar-burger.is-active span:nth-child(3) {\n  transform: translateY(-5px) rotate(-45deg);\n}\n\n.navbar-menu {\n  display: none;\n}\n\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n}\n\n.navbar-item .icon:only-child,\n.navbar-link .icon:only-child {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n}\n\na.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,\n.navbar-link:focus,\n.navbar-link:focus-within,\n.navbar-link:hover,\n.navbar-link.is-active {\n  background-color: #2cb3c5;\n  color: #111;\n}\n\n.navbar-item {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.navbar-item img {\n  max-height: 1.75rem;\n}\n\n.navbar-item.has-dropdown {\n  padding: 0;\n}\n\n.navbar-item.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.navbar-item.is-tab {\n  border-bottom: 1px solid transparent;\n  min-height: 3.25rem;\n  padding-bottom: calc(0.5rem - 1px);\n}\n\n.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {\n  background-color: transparent;\n  border-bottom-color: #485fc7;\n}\n\n.navbar-item.is-tab.is-active {\n  background-color: transparent;\n  border-bottom-color: #485fc7;\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  color: #485fc7;\n  padding-bottom: calc(0.5rem - 3px);\n}\n\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em;\n}\n\n.navbar-link:not(.is-arrowless)::after {\n  border-color: #485fc7;\n  margin-top: -0.375em;\n  right: 1.125em;\n}\n\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.navbar-dropdown .navbar-item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0;\n}\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block;\n  }\n  .navbar-brand .navbar-item,\n  .navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex;\n  }\n  .navbar-link::after {\n    display: none;\n  }\n  .navbar-menu {\n    /* background-color: white; */\n    background-color: #13143c;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0; \n  }\n  .navbar-menu.is-active {\n    display: block;\n    position: absolute;\n    width: 100%;\n    z-index: 9999;\n  }\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-touch.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-touch {\n    top: 0;\n  }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n  }\n  html.has-navbar-fixed-top-touch,\n  body.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-touch,\n  body.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex;\n  }\n  .navbar {\n    min-height: 3.25rem;\n  }\n  .navbar.is-spaced {\n    padding: 1rem 2rem;\n  }\n  .navbar.is-spaced .navbar-start,\n  .navbar.is-spaced .navbar-end {\n    align-items: center;\n  }\n  .navbar.is-spaced a.navbar-item,\n  .navbar.is-spaced .navbar-link {\n    border-radius: 4px;\n  }\n  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n  .navbar.is-transparent .navbar-link:focus,\n  .navbar.is-transparent .navbar-link:hover,\n  .navbar.is-transparent .navbar-link.is-active {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #485fc7;\n  }\n  .navbar-burger {\n    display: none;\n  }\n  .navbar-item,\n  .navbar-link {\n    align-items: center;\n    display: flex;\n  }\n  .navbar-item.has-dropdown {\n    align-items: stretch;\n  }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    transform: rotate(135deg) translate(0.25em, -0.25em);\n  }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 2px solid #dbdbdb;\n    border-radius: 6px 6px 0 0;\n    border-top: none;\n    bottom: 100%;\n    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto;\n  }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block;\n  }\n  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0;\n  }\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n  }\n  .navbar-dropdown .navbar-item {\n    padding: 0.375rem 1rem;\n    white-space: nowrap;\n  }\n  .navbar-dropdown a.navbar-item {\n    padding-right: 3rem;\n  }\n  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #485fc7;\n  }\n  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n    border-radius: 6px;\n    border-top: none;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    top: calc(100% + (-4px));\n    transform: translateY(-5px);\n    transition-duration: 86ms;\n    transition-property: opacity, transform;\n  }\n  .navbar-dropdown.is-right {\n    left: auto;\n    right: 0;\n  }\n  .navbar-divider {\n    display: block;\n  }\n  .navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -0.75rem;\n  }\n  .navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -0.75rem;\n  }\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-desktop.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-desktop {\n    top: 0;\n  }\n  html.has-navbar-fixed-top-desktop,\n  body.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-desktop,\n  body.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n  }\n  html.has-spaced-navbar-fixed-top,\n  body.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem;\n  }\n  html.has-spaced-navbar-fixed-bottom,\n  body.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem;\n  }\n  a.navbar-item.is-active,\n  .navbar-link.is-active {\n    color: #0a0a0a;\n  }\n  a.navbar-item.is-active:not(:focus):not(:hover),\n  .navbar-link.is-active:not(:focus):not(:hover) {\n    background-color: transparent;\n  }\n  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa;\n  }\n}\n\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem);\n}\n\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n\n.pagination.is-small {\n  font-size: 0.75rem;\n}\n\n.pagination.is-medium {\n  font-size: 1.25rem;\n}\n\n.pagination.is-large {\n  font-size: 1.5rem;\n}\n\n.pagination.is-rounded .pagination-previous,\n.pagination.is-rounded .pagination-next {\n  padding-left: 1em;\n  padding-right: 1em;\n  border-radius: 9999px;\n}\n\n.pagination.is-rounded .pagination-link {\n  border-radius: 9999px;\n}\n\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  justify-content: center;\n  margin: 0.25rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.5em;\n}\n\n.pagination-previous:hover,\n.pagination-next:hover,\n.pagination-link:hover {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus {\n  border-color: #485fc7;\n}\n\n.pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n\n.pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled] {\n  background-color: #dbdbdb;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  color: #7a7a7a;\n  opacity: 0.5;\n}\n\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.pagination-link.is-current {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff;\n}\n\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n\n.pagination-list {\n  flex-wrap: wrap;\n}\n\n.pagination-list li {\n  list-style: none;\n}\n\n@media screen and (max-width: 768px) {\n  .pagination {\n    flex-wrap: wrap;\n  }\n  .pagination-previous,\n  .pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n  .pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1;\n  }\n  .pagination-previous,\n  .pagination-next,\n  .pagination-link,\n  .pagination-ellipsis {\n    margin-bottom: 0;\n    margin-top: 0;\n  }\n  .pagination-previous {\n    order: 2;\n  }\n  .pagination-next {\n    order: 3;\n  }\n  .pagination {\n    justify-content: space-between;\n    margin-bottom: 0;\n    margin-top: 0;\n  }\n  .pagination.is-centered .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-centered .pagination-list {\n    justify-content: center;\n    order: 2;\n  }\n  .pagination.is-centered .pagination-next {\n    order: 3;\n  }\n  .pagination.is-right .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-right .pagination-next {\n    order: 2;\n  }\n  .pagination.is-right .pagination-list {\n    justify-content: flex-end;\n    order: 3;\n  }\n}\n\n.panel {\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  font-size: 1rem;\n}\n\n.panel:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.panel.is-white .panel-heading {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.panel.is-white .panel-tabs a.is-active {\n  border-bottom-color: white;\n}\n\n.panel.is-white .panel-block.is-active .panel-icon {\n  color: white;\n}\n\n.panel.is-black .panel-heading {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.panel.is-black .panel-tabs a.is-active {\n  border-bottom-color: #0a0a0a;\n}\n\n.panel.is-black .panel-block.is-active .panel-icon {\n  color: #0a0a0a;\n}\n\n.panel.is-light .panel-heading {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.panel.is-light .panel-tabs a.is-active {\n  border-bottom-color: whitesmoke;\n}\n\n.panel.is-light .panel-block.is-active .panel-icon {\n  color: whitesmoke;\n}\n\n.panel.is-dark .panel-heading {\n  background-color: #363636;\n  color: #fff;\n}\n\n.panel.is-dark .panel-tabs a.is-active {\n  border-bottom-color: #363636;\n}\n\n.panel.is-dark .panel-block.is-active .panel-icon {\n  color: #363636;\n}\n\n.panel.is-primary .panel-heading {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.panel.is-primary .panel-tabs a.is-active {\n  border-bottom-color: #00d1b2;\n}\n\n.panel.is-primary .panel-block.is-active .panel-icon {\n  color: #00d1b2;\n}\n\n.panel.is-link .panel-heading {\n  background-color: #485fc7;\n  color: #fff;\n}\n\n.panel.is-link .panel-tabs a.is-active {\n  border-bottom-color: #485fc7;\n}\n\n.panel.is-link .panel-block.is-active .panel-icon {\n  color: #485fc7;\n}\n\n.panel.is-info .panel-heading {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n\n.panel.is-info .panel-tabs a.is-active {\n  border-bottom-color: #3e8ed0;\n}\n\n.panel.is-info .panel-block.is-active .panel-icon {\n  color: #3e8ed0;\n}\n\n.panel.is-success .panel-heading {\n  background-color: #48c78e;\n  color: #fff;\n}\n\n.panel.is-success .panel-tabs a.is-active {\n  border-bottom-color: #48c78e;\n}\n\n.panel.is-success .panel-block.is-active .panel-icon {\n  color: #48c78e;\n}\n\n.panel.is-warning .panel-heading {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.panel.is-warning .panel-tabs a.is-active {\n  border-bottom-color: #ffe08a;\n}\n\n.panel.is-warning .panel-block.is-active .panel-icon {\n  color: #ffe08a;\n}\n\n.panel.is-danger .panel-heading {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.panel.is-danger .panel-tabs a.is-active {\n  border-bottom-color: #f14668;\n}\n\n.panel.is-danger .panel-block.is-active .panel-icon {\n  color: #f14668;\n}\n\n.panel-tabs:not(:last-child),\n.panel-block:not(:last-child) {\n  border-bottom: 1px solid #ededed;\n}\n\n.panel-heading {\n  background-color: #ededed;\n  border-radius: 6px 6px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 700;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n}\n\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center;\n}\n\n.panel-tabs a {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: -1px;\n  padding: 0.5em;\n}\n\n.panel-tabs a.is-active {\n  border-bottom-color: #4a4a4a;\n  color: #363636;\n}\n\n.panel-list a {\n  color: #4a4a4a;\n}\n\n.panel-list a:hover {\n  color: #485fc7;\n}\n\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n\n.panel-block input[type=\"checkbox\"] {\n  margin-right: 0.75em;\n}\n\n.panel-block > .control {\n  flex-grow: 1;\n  flex-shrink: 1;\n  width: 100%;\n}\n\n.panel-block.is-wrapped {\n  flex-wrap: wrap;\n}\n\n.panel-block.is-active {\n  border-left-color: #485fc7;\n  color: #363636;\n}\n\n.panel-block.is-active .panel-icon {\n  color: #485fc7;\n}\n\n.panel-block:last-child {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\n\na.panel-block:hover,\nlabel.panel-block:hover {\n  background-color: whitesmoke;\n}\n\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n\n.panel-icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n.tabs a {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  /* color: #4a4a4a; */\n  color: #2cb3c5;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -1px;\n  padding: 0.5em 1em;\n  vertical-align: top;\n}\n\n.tabs a:hover {\n  border-bottom-color: #2cb3c5;\n  color: #2cb3c5;\n}\n\n.tabs li {\n  display: block;\n}\n\n.tabs li.is-active a {\n  border-bottom-color: #485fc7;\n  color: #485fc7;\n}\n\n.tabs ul {\n  align-items: center;\n  /* border-bottom-color: #474747; */\n  border-bottom-color: #742cd6;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: flex-start;\n}\n\n.tabs ul.is-left {\n  padding-right: 0.75em;\n}\n\n.tabs ul.is-center {\n  flex: none;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n\n.tabs ul.is-right {\n  justify-content: flex-end;\n  padding-left: 0.75em;\n}\n\n.tabs .icon:first-child {\n  margin-right: 0.5em;\n}\n\n.tabs .icon:last-child {\n  margin-left: 0.5em;\n}\n\n.tabs.is-centered ul {\n  justify-content: center;\n}\n\n.tabs.is-right ul {\n  justify-content: flex-end;\n}\n\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.tabs.is-boxed a:hover {\n  background-color: #00ccae;\n  color: #111;\n  border-bottom-color: #00ccae;\n}\n\n.tabs.is-boxed li.is-active a {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-bottom-color: transparent !important;\n}\n\n.tabs.is-fullwidth li {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n\n.tabs.is-toggle a {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative;\n}\n\n.tabs.is-toggle a:hover {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n  z-index: 2;\n}\n\n.tabs.is-toggle li + li {\n  margin-left: -1px;\n}\n\n.tabs.is-toggle li:first-child a {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.tabs.is-toggle li:last-child a {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.tabs.is-toggle li.is-active a {\n  background-color: #485fc7;\n  border-color: #485fc7;\n  color: #fff;\n  z-index: 1;\n}\n\n.tabs.is-toggle ul {\n  border-bottom: none;\n}\n\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n  border-bottom-left-radius: 9999px;\n  border-top-left-radius: 9999px;\n  padding-left: 1.25em;\n}\n\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n  border-bottom-right-radius: 9999px;\n  border-top-right-radius: 9999px;\n  padding-right: 1.25em;\n}\n\n.tabs.is-small {\n  font-size: 0.75rem;\n}\n\n.tabs.is-medium {\n  font-size: 1.25rem;\n}\n\n.tabs.is-large {\n  font-size: 1.5rem;\n}\n\n/* Bulma Grid */\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem;\n}\n\n.columns.is-mobile > .column.is-narrow {\n  flex: none;\n  width: unset;\n}\n\n.columns.is-mobile > .column.is-full {\n  flex: none;\n  width: 100%;\n}\n\n.columns.is-mobile > .column.is-three-quarters {\n  flex: none;\n  width: 75%;\n}\n\n.columns.is-mobile > .column.is-two-thirds {\n  flex: none;\n  width: 66.6666%;\n}\n\n.columns.is-mobile > .column.is-half {\n  flex: none;\n  width: 50%;\n}\n\n.columns.is-mobile > .column.is-one-third {\n  flex: none;\n  width: 33.3333%;\n}\n\n.columns.is-mobile > .column.is-one-quarter {\n  flex: none;\n  width: 25%;\n}\n\n.columns.is-mobile > .column.is-one-fifth {\n  flex: none;\n  width: 20%;\n}\n\n.columns.is-mobile > .column.is-two-fifths {\n  flex: none;\n  width: 40%;\n}\n\n.columns.is-mobile > .column.is-three-fifths {\n  flex: none;\n  width: 60%;\n}\n\n.columns.is-mobile > .column.is-four-fifths {\n  flex: none;\n  width: 80%;\n}\n\n.columns.is-mobile > .column.is-offset-three-quarters {\n  margin-left: 75%;\n}\n\n.columns.is-mobile > .column.is-offset-two-thirds {\n  margin-left: 66.6666%;\n}\n\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%;\n}\n\n.columns.is-mobile > .column.is-offset-one-third {\n  margin-left: 33.3333%;\n}\n\n.columns.is-mobile > .column.is-offset-one-quarter {\n  margin-left: 25%;\n}\n\n.columns.is-mobile > .column.is-offset-one-fifth {\n  margin-left: 20%;\n}\n\n.columns.is-mobile > .column.is-offset-two-fifths {\n  margin-left: 40%;\n}\n\n.columns.is-mobile > .column.is-offset-three-fifths {\n  margin-left: 60%;\n}\n\n.columns.is-mobile > .column.is-offset-four-fifths {\n  margin-left: 80%;\n}\n\n.columns.is-mobile > .column.is-0 {\n  flex: none;\n  width: 0%;\n}\n\n.columns.is-mobile > .column.is-offset-0 {\n  margin-left: 0%;\n}\n\n.columns.is-mobile > .column.is-1 {\n  flex: none;\n  width: 8.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.columns.is-mobile > .column.is-2 {\n  flex: none;\n  width: 16.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.columns.is-mobile > .column.is-3 {\n  flex: none;\n  width: 25%;\n}\n\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%;\n}\n\n.columns.is-mobile > .column.is-4 {\n  flex: none;\n  width: 33.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.columns.is-mobile > .column.is-5 {\n  flex: none;\n  width: 41.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.columns.is-mobile > .column.is-6 {\n  flex: none;\n  width: 50%;\n}\n\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%;\n}\n\n.columns.is-mobile > .column.is-7 {\n  flex: none;\n  width: 58.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.columns.is-mobile > .column.is-8 {\n  flex: none;\n  width: 66.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.columns.is-mobile > .column.is-9 {\n  flex: none;\n  width: 75%;\n}\n\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%;\n}\n\n.columns.is-mobile > .column.is-10 {\n  flex: none;\n  width: 83.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.columns.is-mobile > .column.is-11 {\n  flex: none;\n  width: 91.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.columns.is-mobile > .column.is-12 {\n  flex: none;\n  width: 100%;\n}\n\n.columns.is-mobile > .column.is-offset-12 {\n  margin-left: 100%;\n}\n\n@media screen and (max-width: 768px) {\n  .column.is-narrow-mobile {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-mobile {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-mobile {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-mobile {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-mobile {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-mobile {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-mobile {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-mobile {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-mobile {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-mobile {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-mobile {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-mobile {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-mobile {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-mobile {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-mobile {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-mobile {\n    margin-left: 80%;\n  }\n  .column.is-0-mobile {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-mobile {\n    margin-left: 0%;\n  }\n  .column.is-1-mobile {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-mobile {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-mobile {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-mobile {\n    margin-left: 25%;\n  }\n  .column.is-4-mobile {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-mobile {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-mobile {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-mobile {\n    margin-left: 50%;\n  }\n  .column.is-7-mobile {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-mobile {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-mobile {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-mobile {\n    margin-left: 75%;\n  }\n  .column.is-10-mobile {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-mobile {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-mobile {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-mobile {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .column.is-narrow, .column.is-narrow-tablet {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full, .column.is-full-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters, .column.is-three-quarters-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds, .column.is-two-thirds-tablet {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half, .column.is-half-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third, .column.is-one-third-tablet {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter, .column.is-one-quarter-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth, .column.is-one-fifth-tablet {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths, .column.is-two-fifths-tablet {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths, .column.is-three-fifths-tablet {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths, .column.is-four-fifths-tablet {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n    margin-left: 80%;\n  }\n  .column.is-0, .column.is-0-tablet {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0, .column.is-offset-0-tablet {\n    margin-left: 0%;\n  }\n  .column.is-1, .column.is-1-tablet {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.33333%;\n  }\n  .column.is-2, .column.is-2-tablet {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.66667%;\n  }\n  .column.is-3, .column.is-3-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%;\n  }\n  .column.is-4, .column.is-4-tablet {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.33333%;\n  }\n  .column.is-5, .column.is-5-tablet {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.66667%;\n  }\n  .column.is-6, .column.is-6-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%;\n  }\n  .column.is-7, .column.is-7-tablet {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.33333%;\n  }\n  .column.is-8, .column.is-8-tablet {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.66667%;\n  }\n  .column.is-9, .column.is-9-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%;\n  }\n  .column.is-10, .column.is-10-tablet {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.33333%;\n  }\n  .column.is-11, .column.is-11-tablet {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.66667%;\n  }\n  .column.is-12, .column.is-12-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12, .column.is-offset-12-tablet {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .column.is-narrow-touch {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-touch {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-touch {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-touch {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-touch {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-touch {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-touch {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-touch {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-touch {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-touch {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-touch {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-touch {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-touch {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-touch {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-touch {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-touch {\n    margin-left: 80%;\n  }\n  .column.is-0-touch {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-touch {\n    margin-left: 0%;\n  }\n  .column.is-1-touch {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-touch {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-touch {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-touch {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-touch {\n    margin-left: 25%;\n  }\n  .column.is-4-touch {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-touch {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-touch {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-touch {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-touch {\n    margin-left: 50%;\n  }\n  .column.is-7-touch {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-touch {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-touch {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-touch {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-touch {\n    margin-left: 75%;\n  }\n  .column.is-10-touch {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-touch {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-touch {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-touch {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-touch {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .column.is-narrow-desktop {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-desktop {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-desktop {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-desktop {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-desktop {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-desktop {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-desktop {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-desktop {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-desktop {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-desktop {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-desktop {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-desktop {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-desktop {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-desktop {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-desktop {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-desktop {\n    margin-left: 80%;\n  }\n  .column.is-0-desktop {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-desktop {\n    margin-left: 0%;\n  }\n  .column.is-1-desktop {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-desktop {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-desktop {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-desktop {\n    margin-left: 25%;\n  }\n  .column.is-4-desktop {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-desktop {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-desktop {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-desktop {\n    margin-left: 50%;\n  }\n  .column.is-7-desktop {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-desktop {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-desktop {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-desktop {\n    margin-left: 75%;\n  }\n  .column.is-10-desktop {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-desktop {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-desktop {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-desktop {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .column.is-narrow-widescreen {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-widescreen {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-widescreen {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-widescreen {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-widescreen {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-widescreen {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-widescreen {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-widescreen {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-widescreen {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-widescreen {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-widescreen {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-widescreen {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-widescreen {\n    margin-left: 80%;\n  }\n  .column.is-0-widescreen {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-widescreen {\n    margin-left: 0%;\n  }\n  .column.is-1-widescreen {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-widescreen {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-widescreen {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-widescreen {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-4-widescreen {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-widescreen {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-widescreen {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-widescreen {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-7-widescreen {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-widescreen {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-widescreen {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-widescreen {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-10-widescreen {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-widescreen {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-widescreen {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-widescreen {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-widescreen {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .column.is-narrow-fullhd {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-fullhd {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-fullhd {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-fullhd {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-fullhd {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-fullhd {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-fullhd {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-fullhd {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-fullhd {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-fullhd {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-fullhd {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-fullhd {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-fullhd {\n    margin-left: 80%;\n  }\n  .column.is-0-fullhd {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-fullhd {\n    margin-left: 0%;\n  }\n  .column.is-1-fullhd {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-fullhd {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-fullhd {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-fullhd {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-4-fullhd {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-fullhd {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-fullhd {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-fullhd {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-7-fullhd {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-fullhd {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-fullhd {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-fullhd {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-10-fullhd {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-fullhd {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-fullhd {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-fullhd {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-fullhd {\n    margin-left: 100%;\n  }\n}\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n\n.columns:last-child {\n  margin-bottom: -0.75rem;\n}\n\n.columns:not(:last-child) {\n  margin-bottom: calc(1.5rem - 0.75rem);\n}\n\n.columns.is-centered {\n  justify-content: center;\n}\n\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0 !important;\n}\n\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.columns.is-gapless:last-child {\n  margin-bottom: 0;\n}\n\n.columns.is-mobile {\n  display: flex;\n}\n\n.columns.is-multiline {\n  flex-wrap: wrap;\n}\n\n.columns.is-vcentered {\n  align-items: center;\n}\n\n@media screen and (min-width: 769px), print {\n  .columns:not(.is-desktop) {\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-desktop {\n    display: flex;\n  }\n}\n\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n\n.columns.is-variable > .column {\n  padding-left: var(--columnGap);\n  padding-right: var(--columnGap);\n}\n\n.columns.is-variable.is-0 {\n  --columnGap: 0rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-0-mobile {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-0-tablet {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-0-tablet-only {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-0-touch {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-0-desktop {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-0-desktop-only {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-0-widescreen {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-0-widescreen-only {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-0-fullhd {\n    --columnGap: 0rem;\n  }\n}\n\n.columns.is-variable.is-1 {\n  --columnGap: 0.25rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-1-mobile {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-1-tablet {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-1-tablet-only {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-1-touch {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-1-desktop {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-1-desktop-only {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-1-widescreen {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-1-widescreen-only {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-1-fullhd {\n    --columnGap: 0.25rem;\n  }\n}\n\n.columns.is-variable.is-2 {\n  --columnGap: 0.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-2-mobile {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-2-tablet {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-2-tablet-only {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-2-touch {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-2-desktop {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-2-desktop-only {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-2-widescreen {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-2-widescreen-only {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-2-fullhd {\n    --columnGap: 0.5rem;\n  }\n}\n\n.columns.is-variable.is-3 {\n  --columnGap: 0.75rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-3-mobile {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-3-tablet {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-3-tablet-only {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-3-touch {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-3-desktop {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-3-desktop-only {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-3-widescreen {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-3-widescreen-only {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-3-fullhd {\n    --columnGap: 0.75rem;\n  }\n}\n\n.columns.is-variable.is-4 {\n  --columnGap: 1rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-4-mobile {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-4-tablet {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-4-tablet-only {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-4-touch {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-4-desktop {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-4-desktop-only {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-4-widescreen {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-4-widescreen-only {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-4-fullhd {\n    --columnGap: 1rem;\n  }\n}\n\n.columns.is-variable.is-5 {\n  --columnGap: 1.25rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-5-mobile {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-5-tablet {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-5-tablet-only {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-5-touch {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-5-desktop {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-5-desktop-only {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-5-widescreen {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-5-widescreen-only {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-5-fullhd {\n    --columnGap: 1.25rem;\n  }\n}\n\n.columns.is-variable.is-6 {\n  --columnGap: 1.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-6-mobile {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-6-tablet {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-6-tablet-only {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-6-touch {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-6-desktop {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-6-desktop-only {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-6-widescreen {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-6-widescreen-only {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-6-fullhd {\n    --columnGap: 1.5rem;\n  }\n}\n\n.columns.is-variable.is-7 {\n  --columnGap: 1.75rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-7-mobile {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-7-tablet {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-7-tablet-only {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-7-touch {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-7-desktop {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-7-desktop-only {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-7-widescreen {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-7-widescreen-only {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-7-fullhd {\n    --columnGap: 1.75rem;\n  }\n}\n\n.columns.is-variable.is-8 {\n  --columnGap: 2rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-8-mobile {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-8-tablet {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-8-tablet-only {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-8-touch {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-8-desktop {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-8-desktop-only {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-8-widescreen {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-8-widescreen-only {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-8-fullhd {\n    --columnGap: 2rem;\n  }\n}\n\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n}\n\n.tile.is-ancestor {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n\n.tile.is-ancestor:last-child {\n  margin-bottom: -0.75rem;\n}\n\n.tile.is-ancestor:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.tile.is-child {\n  margin: 0 !important;\n}\n\n.tile.is-parent {\n  padding: 0.75rem;\n}\n\n.tile.is-vertical {\n  flex-direction: column;\n}\n\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n  margin-bottom: 1.5rem !important;\n}\n\n@media screen and (min-width: 769px), print {\n  .tile:not(.is-child) {\n    display: flex;\n  }\n  .tile.is-1 {\n    flex: none;\n    width: 8.33333%;\n  }\n  .tile.is-2 {\n    flex: none;\n    width: 16.66667%;\n  }\n  .tile.is-3 {\n    flex: none;\n    width: 25%;\n  }\n  .tile.is-4 {\n    flex: none;\n    width: 33.33333%;\n  }\n  .tile.is-5 {\n    flex: none;\n    width: 41.66667%;\n  }\n  .tile.is-6 {\n    flex: none;\n    width: 50%;\n  }\n  .tile.is-7 {\n    flex: none;\n    width: 58.33333%;\n  }\n  .tile.is-8 {\n    flex: none;\n    width: 66.66667%;\n  }\n  .tile.is-9 {\n    flex: none;\n    width: 75%;\n  }\n  .tile.is-10 {\n    flex: none;\n    width: 83.33333%;\n  }\n  .tile.is-11 {\n    flex: none;\n    width: 91.66667%;\n  }\n  .tile.is-12 {\n    flex: none;\n    width: 100%;\n  }\n}\n\n/* Bulma Helpers */\n.has-text-white {\n  color: white !important;\n}\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n\n.has-background-white {\n  background-color: white !important;\n}\n\n.has-text-black {\n  color: #0a0a0a !important;\n}\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n\n.has-background-black {\n  background-color: #0a0a0a !important;\n}\n\n.has-text-light {\n  color: whitesmoke !important;\n}\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n\n.has-background-light {\n  background-color: whitesmoke !important;\n}\n\n.has-text-dark {\n  color: #363636 !important;\n}\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n\n.has-background-dark {\n  background-color: #363636 !important;\n}\n\n.has-text-primary {\n  color: #2cb3c5 !important;\n}\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  /* color: #009e86 !important; */\n  color: #111 !important;\n}\n\n.has-background-primary {\n  background-color: #00d1b2 !important;\n}\n\n.has-text-primary-light {\n  color: #ebfffc !important;\n}\n\na.has-text-primary-light:hover, a.has-text-primary-light:focus {\n  color: #b8fff4 !important;\n}\n\n.has-background-primary-light {\n  background-color: #ebfffc !important;\n}\n\n.has-text-primary-dark {\n  color: #00947e !important;\n}\n\na.has-text-primary-dark:hover, a.has-text-primary-dark:focus {\n  color: #00c7a9 !important;\n}\n\n.has-background-primary-dark {\n  background-color: #00947e !important;\n}\n\n.has-text-link {\n  color: #485fc7 !important;\n}\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #3449a8 !important;\n}\n\n.has-background-link {\n  background-color: #485fc7 !important;\n}\n\n.has-text-link-light {\n  color: #eff1fa !important;\n}\n\na.has-text-link-light:hover, a.has-text-link-light:focus {\n  color: #c8cfee !important;\n}\n\n.has-background-link-light {\n  background-color: #eff1fa !important;\n}\n\n.has-text-link-dark {\n  color: #3850b7 !important;\n}\n\na.has-text-link-dark:hover, a.has-text-link-dark:focus {\n  color: #576dcb !important;\n}\n\n.has-background-link-dark {\n  background-color: #3850b7 !important;\n}\n\n.has-text-info {\n  color: #3e8ed0 !important;\n}\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #2b74b1 !important;\n}\n\n.has-background-info {\n  background-color: #3e8ed0 !important;\n}\n\n.has-text-info-light {\n  color: #eff5fb !important;\n}\n\na.has-text-info-light:hover, a.has-text-info-light:focus {\n  color: #c6ddf1 !important;\n}\n\n.has-background-info-light {\n  background-color: #eff5fb !important;\n}\n\n.has-text-info-dark {\n  color: #296fa8 !important;\n}\n\na.has-text-info-dark:hover, a.has-text-info-dark:focus {\n  color: #368ace !important;\n}\n\n.has-background-info-dark {\n  background-color: #296fa8 !important;\n}\n\n.has-text-success {\n  color: #48c78e !important;\n}\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #34a873 !important;\n}\n\n.has-background-success {\n  background-color: #48c78e !important;\n}\n\n.has-text-success-light {\n  color: #effaf5 !important;\n}\n\na.has-text-success-light:hover, a.has-text-success-light:focus {\n  color: #c8eedd !important;\n}\n\n.has-background-success-light {\n  background-color: #effaf5 !important;\n}\n\n.has-text-success-dark {\n  color: #257953 !important;\n}\n\na.has-text-success-dark:hover, a.has-text-success-dark:focus {\n  color: #31a06e !important;\n}\n\n.has-background-success-dark {\n  background-color: #257953 !important;\n}\n\n.has-text-warning {\n  color: #ffe08a !important;\n}\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd257 !important;\n}\n\n.has-background-warning {\n  background-color: #ffe08a !important;\n}\n\n.has-text-warning-light {\n  color: #fffaeb !important;\n}\n\na.has-text-warning-light:hover, a.has-text-warning-light:focus {\n  color: #ffecb8 !important;\n}\n\n.has-background-warning-light {\n  background-color: #fffaeb !important;\n}\n\n.has-text-warning-dark {\n  color: #946c00 !important;\n}\n\na.has-text-warning-dark:hover, a.has-text-warning-dark:focus {\n  color: #c79200 !important;\n}\n\n.has-background-warning-dark {\n  background-color: #946c00 !important;\n}\n\n.has-text-danger {\n  color: #f14668 !important;\n}\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ee1742 !important;\n}\n\n.has-background-danger {\n  background-color: #f14668 !important;\n}\n\n.has-text-danger-light {\n  color: #feecf0 !important;\n}\n\na.has-text-danger-light:hover, a.has-text-danger-light:focus {\n  color: #fabdc9 !important;\n}\n\n.has-background-danger-light {\n  background-color: #feecf0 !important;\n}\n\n.has-text-danger-dark {\n  color: #cc0f35 !important;\n}\n\na.has-text-danger-dark:hover, a.has-text-danger-dark:focus {\n  color: #ee2049 !important;\n}\n\n.has-background-danger-dark {\n  background-color: #cc0f35 !important;\n}\n\n.has-text-black-bis {\n  color: #121212 !important;\n}\n\n.has-background-black-bis {\n  background-color: #121212 !important;\n}\n\n.has-text-black-ter {\n  color: #242424 !important;\n}\n\n.has-background-black-ter {\n  background-color: #242424 !important;\n}\n\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n\n.has-background-grey-darker {\n  background-color: #363636 !important;\n}\n\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important;\n}\n\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n\n.has-background-grey {\n  background-color: #7a7a7a !important;\n}\n\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important;\n}\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important;\n}\n\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n\n.has-background-white-ter {\n  background-color: whitesmoke !important;\n}\n\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n\n.has-background-white-bis {\n  background-color: #fafafa !important;\n}\n\n.is-flex-direction-row {\n  flex-direction: row !important;\n}\n\n.is-flex-direction-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.is-flex-direction-column {\n  flex-direction: column !important;\n}\n\n.is-flex-direction-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.is-flex-wrap-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.is-flex-wrap-wrap {\n  flex-wrap: wrap !important;\n}\n\n.is-flex-wrap-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.is-justify-content-flex-start {\n  justify-content: flex-start !important;\n}\n\n.is-justify-content-flex-end {\n  justify-content: flex-end !important;\n}\n\n.is-justify-content-center {\n  justify-content: center !important;\n}\n\n.is-justify-content-space-between {\n  justify-content: space-between !important;\n}\n\n.is-justify-content-space-around {\n  justify-content: space-around !important;\n}\n\n.is-justify-content-space-evenly {\n  justify-content: space-evenly !important;\n}\n\n.is-justify-content-start {\n  justify-content: start !important;\n}\n\n.is-justify-content-end {\n  justify-content: end !important;\n}\n\n.is-justify-content-left {\n  justify-content: left !important;\n}\n\n.is-justify-content-right {\n  justify-content: right !important;\n}\n\n.is-align-content-flex-start {\n  align-content: flex-start !important;\n}\n\n.is-align-content-flex-end {\n  align-content: flex-end !important;\n}\n\n.is-align-content-center {\n  align-content: center !important;\n}\n\n.is-align-content-space-between {\n  align-content: space-between !important;\n}\n\n.is-align-content-space-around {\n  align-content: space-around !important;\n}\n\n.is-align-content-space-evenly {\n  align-content: space-evenly !important;\n}\n\n.is-align-content-stretch {\n  align-content: stretch !important;\n}\n\n.is-align-content-start {\n  align-content: start !important;\n}\n\n.is-align-content-end {\n  align-content: end !important;\n}\n\n.is-align-content-baseline {\n  align-content: baseline !important;\n}\n\n.is-align-items-stretch {\n  align-items: stretch !important;\n}\n\n.is-align-items-flex-start {\n  align-items: flex-start !important;\n}\n\n.is-align-items-flex-end {\n  align-items: flex-end !important;\n}\n\n.is-align-items-center {\n  align-items: center !important;\n}\n\n.is-align-items-baseline {\n  align-items: baseline !important;\n}\n\n.is-align-items-start {\n  align-items: start !important;\n}\n\n.is-align-items-end {\n  align-items: end !important;\n}\n\n.is-align-items-self-start {\n  align-items: self-start !important;\n}\n\n.is-align-items-self-end {\n  align-items: self-end !important;\n}\n\n.is-align-self-auto {\n  align-self: auto !important;\n}\n\n.is-align-self-flex-start {\n  align-self: flex-start !important;\n}\n\n.is-align-self-flex-end {\n  align-self: flex-end !important;\n}\n\n.is-align-self-center {\n  align-self: center !important;\n}\n\n.is-align-self-baseline {\n  align-self: baseline !important;\n}\n\n.is-align-self-stretch {\n  align-self: stretch !important;\n}\n\n.is-flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.is-flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.is-flex-grow-2 {\n  flex-grow: 2 !important;\n}\n\n.is-flex-grow-3 {\n  flex-grow: 3 !important;\n}\n\n.is-flex-grow-4 {\n  flex-grow: 4 !important;\n}\n\n.is-flex-grow-5 {\n  flex-grow: 5 !important;\n}\n\n.is-flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.is-flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.is-flex-shrink-2 {\n  flex-shrink: 2 !important;\n}\n\n.is-flex-shrink-3 {\n  flex-shrink: 3 !important;\n}\n\n.is-flex-shrink-4 {\n  flex-shrink: 4 !important;\n}\n\n.is-flex-shrink-5 {\n  flex-shrink: 5 !important;\n}\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.is-pulled-left {\n  float: left !important;\n}\n\n.is-pulled-right {\n  float: right !important;\n}\n\n.is-radiusless {\n  border-radius: 0 !important;\n}\n\n.is-shadowless {\n  box-shadow: none !important;\n}\n\n.is-clickable {\n  cursor: pointer !important;\n  pointer-events: all !important;\n}\n\n.is-clipped {\n  overflow: hidden !important;\n}\n\n.is-relative {\n  position: relative !important;\n}\n\n.is-marginless {\n  margin: 0 !important;\n}\n\n.is-paddingless {\n  padding: 0 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0 {\n  margin-left: 0 !important;\n}\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1 {\n  margin-left: 0.25rem !important;\n}\n\n.mx-1 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2 {\n  margin-left: 0.5rem !important;\n}\n\n.mx-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 0.75rem !important;\n}\n\n.mt-3 {\n  margin-top: 0.75rem !important;\n}\n\n.mr-3 {\n  margin-right: 0.75rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n\n.ml-3 {\n  margin-left: 0.75rem !important;\n}\n\n.mx-3 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important;\n}\n\n.my-3 {\n  margin-top: 0.75rem !important;\n  margin-bottom: 0.75rem !important;\n}\n\n.m-4 {\n  margin: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1rem !important;\n}\n\n.mr-4 {\n  margin-right: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-4 {\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.m-5 {\n  margin: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-5 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-5 {\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-left: 1.5rem !important;\n  margin-right: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.m-6 {\n  margin: 3rem !important;\n}\n\n.mt-6 {\n  margin-top: 3rem !important;\n}\n\n.mr-6 {\n  margin-right: 3rem !important;\n}\n\n.mb-6 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-6 {\n  margin-left: 3rem !important;\n}\n\n.mx-6 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important;\n}\n\n.my-6 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1 {\n  padding-left: 0.25rem !important;\n}\n\n.px-1 {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2 {\n  padding-left: 0.5rem !important;\n}\n\n.px-2 {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 0.75rem !important;\n}\n\n.pt-3 {\n  padding-top: 0.75rem !important;\n}\n\n.pr-3 {\n  padding-right: 0.75rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem !important;\n}\n\n.pl-3 {\n  padding-left: 0.75rem !important;\n}\n\n.px-3 {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important;\n}\n\n.py-3 {\n  padding-top: 0.75rem !important;\n  padding-bottom: 0.75rem !important;\n}\n\n.p-4 {\n  padding: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1rem !important;\n}\n\n.pr-4 {\n  padding-right: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-4 {\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.p-5 {\n  padding: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-5 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-5 {\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-left: 1.5rem !important;\n  padding-right: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.p-6 {\n  padding: 3rem !important;\n}\n\n.pt-6 {\n  padding-top: 3rem !important;\n}\n\n.pr-6 {\n  padding-right: 3rem !important;\n}\n\n.pb-6 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-6 {\n  padding-left: 3rem !important;\n}\n\n.px-6 {\n  padding-left: 3rem !important;\n  padding-right: 3rem !important;\n}\n\n.py-6 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.p-auto {\n  padding: auto !important;\n}\n\n.pt-auto {\n  padding-top: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.pb-auto {\n  padding-bottom: auto !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.px-auto {\n  padding-left: auto !important;\n  padding-right: auto !important;\n}\n\n.py-auto {\n  padding-top: auto !important;\n  padding-bottom: auto !important;\n}\n\n.is-size-1 {\n  font-size: 3rem !important;\n}\n\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n\n.is-size-3 {\n  font-size: 2rem !important;\n}\n\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n\n.is-size-6 {\n  font-size: 1rem !important;\n}\n\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important;\n  }\n  .is-size-2-mobile {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-mobile {\n    font-size: 2rem !important;\n  }\n  .is-size-4-mobile {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-mobile {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-mobile {\n    font-size: 1rem !important;\n  }\n  .is-size-7-mobile {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important;\n  }\n  .is-size-2-tablet {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-tablet {\n    font-size: 2rem !important;\n  }\n  .is-size-4-tablet {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-tablet {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-tablet {\n    font-size: 1rem !important;\n  }\n  .is-size-7-tablet {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important;\n  }\n  .is-size-2-touch {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-touch {\n    font-size: 2rem !important;\n  }\n  .is-size-4-touch {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-touch {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-touch {\n    font-size: 1rem !important;\n  }\n  .is-size-7-touch {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important;\n  }\n  .is-size-2-desktop {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-desktop {\n    font-size: 2rem !important;\n  }\n  .is-size-4-desktop {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-desktop {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-desktop {\n    font-size: 1rem !important;\n  }\n  .is-size-7-desktop {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important;\n  }\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-widescreen {\n    font-size: 2rem !important;\n  }\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-widescreen {\n    font-size: 1rem !important;\n  }\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important;\n  }\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-fullhd {\n    font-size: 2rem !important;\n  }\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-fullhd {\n    font-size: 1rem !important;\n  }\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important;\n  }\n}\n\n.has-text-centered {\n  text-align: center !important;\n}\n\n.has-text-justified {\n  text-align: justify !important;\n}\n\n.has-text-left {\n  text-align: left !important;\n}\n\n.has-text-right {\n  text-align: right !important;\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important;\n  }\n}\n\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n\n.is-italic {\n  font-style: italic !important;\n}\n\n.is-underlined {\n  text-decoration: underline !important;\n}\n\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n\n.has-text-weight-medium {\n  font-weight: 500 !important;\n}\n\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-monospace {\n  font-family: monospace !important;\n}\n\n.is-family-code {\n  font-family: monospace !important;\n}\n\n.is-block {\n  display: block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important;\n  }\n}\n\n.is-flex {\n  display: flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: flex !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: flex !important;\n  }\n}\n\n.is-inline {\n  display: inline !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important;\n  }\n}\n\n.is-inline-block {\n  display: inline-block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important;\n  }\n}\n\n.is-inline-flex {\n  display: inline-flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: inline-flex !important;\n  }\n}\n\n.is-hidden {\n  display: none !important;\n}\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important;\n  }\n}\n\n.is-invisible {\n  visibility: hidden !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important;\n  }\n}\n\n/* Bulma Layout */\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.hero .navbar {\n  background: none;\n}\n\n.hero .tabs ul {\n  border-bottom: none;\n}\n\n.hero.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-white strong {\n  color: inherit;\n}\n\n.hero.is-white .title {\n  color: #0a0a0a;\n}\n\n.hero.is-white .subtitle {\n  color: rgba(10, 10, 10, 0.9);\n}\n\n.hero.is-white .subtitle a:not(.button),\n.hero.is-white .subtitle strong {\n  color: #0a0a0a;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-white .navbar-menu {\n    background-color: white;\n  }\n}\n\n.hero.is-white .navbar-item,\n.hero.is-white .navbar-link {\n  color: rgba(10, 10, 10, 0.7);\n}\n\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n.hero.is-white .navbar-link:hover,\n.hero.is-white .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n\n.hero.is-white .tabs a {\n  color: #0a0a0a;\n  opacity: 0.9;\n}\n\n.hero.is-white .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-white .tabs li.is-active a {\n  color: white !important;\n  opacity: 1;\n}\n\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n  color: #0a0a0a;\n}\n\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n\n.hero.is-white.is-bold {\n  background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-white.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n  }\n}\n\n.hero.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-black strong {\n  color: inherit;\n}\n\n.hero.is-black .title {\n  color: white;\n}\n\n.hero.is-black .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-black .subtitle a:not(.button),\n.hero.is-black .subtitle strong {\n  color: white;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-black .navbar-menu {\n    background-color: #0a0a0a;\n  }\n}\n\n.hero.is-black .navbar-item,\n.hero.is-black .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n.hero.is-black .navbar-link:hover,\n.hero.is-black .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n\n.hero.is-black .tabs a {\n  color: white;\n  opacity: 0.9;\n}\n\n.hero.is-black .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-black .tabs li.is-active a {\n  color: #0a0a0a !important;\n  opacity: 1;\n}\n\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n  color: white;\n}\n\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n\n.hero.is-black.is-bold {\n  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-black.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n  }\n}\n\n.hero.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-light strong {\n  color: inherit;\n}\n\n.hero.is-light .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.hero.is-light .subtitle a:not(.button),\n.hero.is-light .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-light .navbar-menu {\n    background-color: whitesmoke;\n  }\n}\n\n.hero.is-light .navbar-item,\n.hero.is-light .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n.hero.is-light .navbar-link:hover,\n.hero.is-light .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n\n.hero.is-light .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-light .tabs li.is-active a {\n  color: whitesmoke !important;\n  opacity: 1;\n}\n\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n\n.hero.is-light.is-bold {\n  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-light.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n  }\n}\n\n.hero.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-dark strong {\n  color: inherit;\n}\n\n.hero.is-dark .title {\n  color: #fff;\n}\n\n.hero.is-dark .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-dark .subtitle a:not(.button),\n.hero.is-dark .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-dark .navbar-menu {\n    background-color: #363636;\n  }\n}\n\n.hero.is-dark .navbar-item,\n.hero.is-dark .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n.hero.is-dark .navbar-link:hover,\n.hero.is-dark .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n\n.hero.is-dark .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-dark .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-dark .tabs li.is-active a {\n  color: #363636 !important;\n  opacity: 1;\n}\n\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #363636;\n}\n\n.hero.is-dark.is-bold {\n  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-dark.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n  }\n}\n\n.hero.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-primary strong {\n  color: inherit;\n}\n\n.hero.is-primary .title {\n  color: #fff;\n}\n\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-primary .subtitle a:not(.button),\n.hero.is-primary .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-primary .navbar-menu {\n    background-color: #00d1b2;\n  }\n}\n\n.hero.is-primary .navbar-item,\n.hero.is-primary .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n.hero.is-primary .navbar-link:hover,\n.hero.is-primary .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n\n.hero.is-primary .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-primary .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-primary .tabs li.is-active a {\n  color: #00d1b2 !important;\n  opacity: 1;\n}\n\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #00d1b2;\n}\n\n.hero.is-primary.is-bold {\n  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-primary.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n  }\n}\n\n.hero.is-link {\n  background-color: #485fc7;\n  color: #fff;\n}\n\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-link strong {\n  color: inherit;\n}\n\n.hero.is-link .title {\n  color: #fff;\n}\n\n.hero.is-link .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-link .subtitle a:not(.button),\n.hero.is-link .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-link .navbar-menu {\n    background-color: #485fc7;\n  }\n}\n\n.hero.is-link .navbar-item,\n.hero.is-link .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n.hero.is-link .navbar-link:hover,\n.hero.is-link .navbar-link.is-active {\n  background-color: #3a51bb;\n  color: #fff;\n}\n\n.hero.is-link .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-link .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-link .tabs li.is-active a {\n  color: #485fc7 !important;\n  opacity: 1;\n}\n\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #485fc7;\n}\n\n.hero.is-link.is-bold {\n  background-image: linear-gradient(141deg, #2959b3 0%, #485fc7 71%, #5658d2 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-link.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #2959b3 0%, #485fc7 71%, #5658d2 100%);\n  }\n}\n\n.hero.is-info {\n  background-color: #3e8ed0;\n  color: #fff;\n}\n\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-info strong {\n  color: inherit;\n}\n\n.hero.is-info .title {\n  color: #fff;\n}\n\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-info .subtitle a:not(.button),\n.hero.is-info .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-info .navbar-menu {\n    background-color: #3e8ed0;\n  }\n}\n\n.hero.is-info .navbar-item,\n.hero.is-info .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n.hero.is-info .navbar-link:hover,\n.hero.is-info .navbar-link.is-active {\n  background-color: #3082c5;\n  color: #fff;\n}\n\n.hero.is-info .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-info .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-info .tabs li.is-active a {\n  color: #3e8ed0 !important;\n  opacity: 1;\n}\n\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #3e8ed0;\n}\n\n.hero.is-info.is-bold {\n  background-image: linear-gradient(141deg, #208fbc 0%, #3e8ed0 71%, #4d83db 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-info.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #208fbc 0%, #3e8ed0 71%, #4d83db 100%);\n  }\n}\n\n.hero.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-success strong {\n  color: inherit;\n}\n\n.hero.is-success .title {\n  color: #fff;\n}\n\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-success .subtitle a:not(.button),\n.hero.is-success .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-success .navbar-menu {\n    background-color: #48c78e;\n  }\n}\n\n.hero.is-success .navbar-item,\n.hero.is-success .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n.hero.is-success .navbar-link:hover,\n.hero.is-success .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff;\n}\n\n.hero.is-success .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-success .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-success .tabs li.is-active a {\n  color: #48c78e !important;\n  opacity: 1;\n}\n\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #48c78e;\n}\n\n.hero.is-success.is-bold {\n  background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-success.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);\n  }\n}\n\n.hero.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-warning strong {\n  color: inherit;\n}\n\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.hero.is-warning .subtitle a:not(.button),\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-warning .navbar-menu {\n    background-color: #ffe08a;\n  }\n}\n\n.hero.is-warning .navbar-item,\n.hero.is-warning .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n.hero.is-warning .navbar-link:hover,\n.hero.is-warning .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n\n.hero.is-warning .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-warning .tabs li.is-active a {\n  color: #ffe08a !important;\n  opacity: 1;\n}\n\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n\n.hero.is-warning.is-bold {\n  background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-warning.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);\n  }\n}\n\n.hero.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-danger strong {\n  color: inherit;\n}\n\n.hero.is-danger .title {\n  color: #fff;\n}\n\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-danger .subtitle a:not(.button),\n.hero.is-danger .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-danger .navbar-menu {\n    background-color: #f14668;\n  }\n}\n\n.hero.is-danger .navbar-item,\n.hero.is-danger .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n.hero.is-danger .navbar-link:hover,\n.hero.is-danger .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n\n.hero.is-danger .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-danger .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-danger .tabs li.is-active a {\n  color: #f14668 !important;\n  opacity: 1;\n}\n\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #f14668;\n}\n\n.hero.is-danger.is-bold {\n  background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-danger.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n  }\n}\n\n.hero.is-small .hero-body {\n  padding: 1.5rem;\n}\n\n@media screen and (min-width: 769px), print {\n  .hero.is-medium .hero-body {\n    padding: 9rem 4.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .hero.is-large .hero-body {\n    padding: 18rem 6rem;\n  }\n}\n\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n  align-items: center;\n  display: flex;\n}\n\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.hero.is-halfheight {\n  min-height: 50vh;\n}\n\n.hero.is-fullheight {\n  min-height: 100vh;\n}\n\n.hero-video {\n  overflow: hidden;\n}\n\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n\n.hero-video.is-transparent {\n  opacity: 0.3;\n}\n\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none;\n  }\n}\n\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: flex;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .hero-buttons {\n    display: flex;\n    justify-content: center;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 1.5rem;\n  }\n}\n\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n\n@media screen and (min-width: 769px), print {\n  .hero-body {\n    padding: 3rem 3rem;\n  }\n}\n\n.section {\n  padding: 3rem 1.5rem;\n}\n\n@media screen and (min-width: 1024px) {\n  .section {\n    padding: 3rem 3rem;\n  }\n  .section.is-medium {\n    padding: 9rem 4.5rem;\n  }\n  .section.is-large {\n    padding: 18rem 6rem;\n  }\n}\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem;\n}\n/*# sourceMappingURL=bulma.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/normalize.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/normalize.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0; }\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block; }\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent; }\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%; }\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none; }\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline; }\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto; }\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block; }\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item; }\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none; }\n\n/**\n   * Add the correct display in IE 10.\n   */\n", "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAA+E;AAG/E;;;EACE;AAID;EACG,iBAAiB;EAAE,MAAA;EACnB,8BAA8B;EAAE,MAAA,EAAO;;AAGzC;iFAD+E;AAI/E;;IADE;AAKF;EACE,SAAS,EAAA;;AAGX;;IAHE;AAOF;EACE,cAAc,EAAA;;AAGhB;;;IAJE;AASF;EACE,cAAc;EACd,gBAAgB,EAAA;;AAGlB;iFAR+E;AAW/E;;;IAPE;AAYF;EACE,uBAAuB;EAAE,MAAA;EACzB,SAAS;EAAE,MAAA;EACX,iBAAiB;EAAE,MAAA,EAAO;;AAG5B;;;IANE;AAWF;EACE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;iFAR+E;AAW/E;;IARE;AAYF;EACE,6BAA6B,EAAA;;AAG/B;;;IATE;AAcF;EACE,mBAAmB;EAAE,MAAA;EACrB,0BAA0B;EAAE,MAAA;EAC5B,iCAAiC;EAAE,MAAA,EAAO;;AAG5C;;IATE;AAaF;;EAEE,mBAAmB,EAAA;;AAGrB;;;IAVE;AAeF;;;EAGE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;;IAXE;AAeF;EACE,cAAc,EAAA;;AAGhB;;;IAZE;AAiBF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB,EAAA;;AAG1B;EACE,eAAe,EAAA;;AAGjB;EACE,WAAW,EAAA;;AAGb;iFAlB+E;AAqB/E;;IAlBE;AAsBF;EACE,kBAAkB,EAAA;;AAGpB;iFArB+E;AAwB/E;;;IApBE;AAyBF;;;;;EAKE,oBAAoB;EAAE,MAAA;EACtB,eAAe;EAAE,MAAA;EACjB,iBAAiB;EAAE,MAAA;EACnB,SAAS;EAAE,MAAA,EAAO;;AAGpB;;;IAlBE;AAuBF;;EACQ,MAAA;EACN,iBAAiB,EAAA;;AAGnB;;;IAnBE;AAwBF;;EACS,MAAA;EACP,oBAAoB,EAAA;;AAGtB;;IArBE;AAyBF;;;;EAIE,0BAA0B,EAAA;;AAG5B;;IAvBE;AA2BF;;;;EAIE,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;;IAzBE;AA6BF;;;;EAIE,8BAA8B,EAAA;;AAGhC;;IA3BE;AA+BF;EACE,8BAA8B,EAAA;;AAGhC;;;;;IA1BE;AAiCF;EACE,sBAAsB;EAAE,MAAA;EACxB,cAAc;EAAE,MAAA;EAChB,cAAc;EAAE,MAAA;EAChB,eAAe;EAAE,MAAA;EACjB,UAAU;EAAE,MAAA;EACZ,mBAAmB;EAAE,MAAA,EAAO;;AAG9B;;IAzBE;AA6BF;EACE,wBAAwB,EAAA;;AAG1B;;IA3BE;AA+BF;EACE,cAAc,EAAA;;AAGhB;;;IA5BE;AACJ;;EAkCI,sBAAsB;EAAE,MAAA;EACxB,UAAU;EAAE,MAAA,EAAO;;AAGrB;;IA7BE;AACJ;;EAkCI,YAAY,EAAA;;AAGd;;;IA9BE;AACJ;EAmCI,6BAA6B;EAAE,MAAA;EAC/B,oBAAoB;EAAE,MAAA,EAAO;;AAG/B;;IA/BE;AACJ;EAmCI,wBAAwB,EAAA;;AAG1B;;;IAhCE;AAqCF;EACE,0BAA0B;EAAE,MAAA;EAC5B,aAAa;EAAE,MAAA,EAAO;;AAGxB;iFAlC+E;AAqC/E;;IAlCE;AAsCF;EACE,cAAc,EAAA;;AAGhB;;IApCE;AAwCF;EACE,kBAAkB,EAAA;;AAGpB;iFAvC+E;AA0C/E;;IAvCE;AA2CF;EACE,aAAa,EAAA;;AAGf;;IAzCE","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://use.fontawesome.com/releases/v5.13.0/css/all.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#hidden-id {\n  display: none; }\n\nbody {\n  min-height: 100vh;\n  background: #211644;\n  background: linear-gradient(0deg, #211644 0%, #13233c 100%);\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n#app {\n  min-height: 100%; }\n\n#nav-main {\n  background-color: #04051b; }\n\n#category-title {\n  font-size: 1.7rem;\n  color: #d9d9d9; }\n\nul li a:hover:not(.active-tab), ul a:hover {\n  background-color: transparent !important;\n  color: #2ee7ff !important; }\n\n::placeholder {\n  color: #d9d9d9 !important;\n  opacity: 0.35; }\n\ni {\n  margin-right: 0.5rem; }\n\n.active-tab {\n  background-color: #732cd66e;\n  color: white !important; }\n\n.spacer {\n  margin-top: 2%; }\n\n.card {\n  cursor: pointer; }\n\n.card-header {\n  transition: background-color 300ms ease; }\n\n.card-header:hover {\n  background-color: #2cb3c586; }\n\n.controlx {\n  display: block;\n  position: relative;\n  margin-right: 40px;\n  margin-bottom: 30px;\n  cursor: pointer;\n  font-size: 18px; }\n\n.controlx input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n\n.control__indicator {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background: #9fbdffce; }\n\n.control--radio .control__indicator {\n  border-radius: 50%; }\n\n.controlx:hover input ~ .control__indicator,\n.controlx input:focus ~ .control__indicator {\n  background: #ccc; }\n\n.controlx input:checked ~ .control__indicator {\n  background: #3e8ed0; }\n\n.controlx:hover input:not([disabled]):checked ~ .control__indicator,\n.controlx input:checked:focus ~ .control__indicator {\n  background: #26daf1; }\n\n.controlx input:disabled ~ .control__indicator {\n  background: #e6e6e6;\n  opacity: 0.6;\n  pointer-events: none; }\n\n.control__indicator:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n.controlx input:checked ~ .control__indicator:after {\n  display: block; }\n\n.control--checkbox .control__indicator:after {\n  left: 9px;\n  top: 3px;\n  width: 7px;\n  height: 15px;\n  border: solid #111;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.control--checkbox input:disabled ~ .control__indicator:after {\n  border-color: #7b7b7b; }\n\n.new-project-label-icon {\n  color: #30b830; }\n\n#new-project:hover {\n  color: #30b830 !important; }\n\n#default-project {\n  color: #b3b3b3e3; }\n\n#default-project {\n  text-indent: 1rem; }\n\n#project-link-list {\n  text-indent: 1rem; }\n\n#page-title {\n  color: #d9d9d9;\n  margin-bottom: 1rem; }\n\n#categories input[type=\"checkbox\"] {\n  opacity: 0;\n  position: fixed;\n  width: 0; }\n\n#categories label {\n  display: inline-block;\n  background-color: #13143c;\n  color: #c4c4c4;\n  padding: 10px 20px;\n  font-family: sans-serif, Arial;\n  font-size: 1rem;\n  border: 1px solid #742cd6;\n  border-radius: 6px;\n  transition: all 250ms ease; }\n\n#categories label:hover {\n  background-color: #7927ec;\n  color: white; }\n\n#categories input[type=\"checkbox\"]:checked + label {\n  background-color: #8b39ff;\n  color: white; }\n\n#deadline-label, #project-label {\n  font-size: 0.9rem;\n  color: #d9d9d9; }\n\n#cat-tags span {\n  height: 1rem; }\n\n#modal-title {\n  text-transform: uppercase; }\n\n#modal-window, #project-modal-window {\n  display: none;\n  z-index: 9999;\n  overflow: auto;\n  opacity: 0;\n  animation: fade-in 300ms; }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n#modal-header, #project-modal-header {\n  background-color: #13143c; }\n\n#modal-card, #project-modal-card {\n  width: 65%;\n  max-width: 860px; }\n\n#project-selector {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n#move-project {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px; }\n\n.is-flex {\n  display: flex; }\n\n@media screen and (max-width: 1023px) {\n  #modal-card, #project-modal-card {\n    width: 100%;\n    margin: 0; }\n  .modal-open {\n    overflow: hidden;\n    /* PREVENTS BODY FROM SCROLLING WHILE MODAL IS OPEN */\n    position: fixed; } }\n\n@media screen and (max-width: 1266px) {\n  #content-spacer-left, #content-spacer-right {\n    display: none; }\n  #content-right {\n    width: 80%; }\n  #mobile-column {\n    width: 100%;\n    margin: 0 auto; }\n  #modal-card, #project-modal-card {\n    width: 85%;\n    height: 50vh; }\n  .card {\n    width: 90%;\n    margin: 0 auto; } }\n\n.fwidth {\n  width: 100%; }\n\n#project-footer-elements, #footer-elements {\n  display: flex; }\n\n#footer-elements {\n  width: 100%; }\n\n#project-footer-elements {\n  margin-left: auto;\n  width: 50%; }\n\n#project-modal-save, #modal-save {\n  width: 100%; }\n\n#project-modal-cancel, #modal-cancel {\n  width: 50%;\n  background-color: transparent;\n  color: #d9d9d9; }\n\n.no-border-top {\n  border-top: none; }\n\n/* #footer-elements {\n  width: 100%;\n  justify-content: space-around;\n}\n */\n.low-priority {\n  border-right: 6px solid #2398f8 !important; }\n\n.medium-priority {\n  border-right: 6px solid #c4ec11 !important; }\n\n.high-priority {\n  border-right: 6px solid #e29c19 !important; }\n\n.urgent-priority {\n  border-right: 6px solid #b4231e !important; }\n\n#status-light {\n  flex: 1;\n  width: 5%;\n  color: red;\n  font-size: 1.5rem; }\n\n.trash-hover {\n  transition: all 200ms ease; }\n\n.trash-hover:hover {\n  transform: scale(1.3);\n  color: #7a0000 !important; }\n\n/* lightpurple - #2cb3c5  seafoam - #6743d0  darkpurple - #13143c  midpurple - #742cd6*/\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://use.fontawesome.com/releases/v5.13.0/css/all.css\");\n\n\n\n#hidden-id {\n  display: none;\n}\n\nbody {\n  min-height: 100vh;\n  background: rgb(33, 22, 68);\n  background: linear-gradient(\n    0deg,\n    rgba(33, 22, 68, 1) 0%,\n    rgba(19, 35, 60, 1) 100%\n  );\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n#app {\n  min-height: 100%;\n}\n\n#nav-main {\n  background-color: #04051b;\n}\n\n#category-title {\n  font-size: 1.7rem;\n  color: #d9d9d9;\n}\n\nul li a:hover:not(.active-tab), ul a:hover {\n  background-color: transparent !important;\n  color: #2ee7ff !important;\n}\n\n::placeholder {\n  color: #d9d9d9 !important;\n  opacity: 0.35;\n}\n\ni {\n  margin-right: 0.5rem;\n}\n\n.active-tab {\n  background-color: #732cd66e;\n  color: white !important;\n}\n\n.spacer {\n  margin-top: 2%;\n}\n\n.card {\n  cursor: pointer;\n}\n\n.card-header {\n  transition: background-color 300ms ease;\n}\n\n.card-header:hover {\n  background-color: #2cb3c586;\n}\n\n.controlx {\n  display: block;\n  position: relative;\n  margin-right: 40px;\n  margin-bottom: 30px;\n  cursor: pointer;\n  font-size: 18px;\n}\n.controlx input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n.control__indicator {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background: #9fbdffce;\n}\n.control--radio .control__indicator {\n  border-radius: 50%;\n}\n.controlx:hover input ~ .control__indicator,\n.controlx input:focus ~ .control__indicator {\n  background: #ccc;\n}\n.controlx input:checked ~ .control__indicator {\n  background: #3e8ed0;\n}\n.controlx:hover input:not([disabled]):checked ~ .control__indicator,\n.controlx input:checked:focus ~ .control__indicator {\n  background: #26daf1;\n}\n.controlx input:disabled ~ .control__indicator {\n  background: #e6e6e6;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.control__indicator:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.controlx input:checked ~ .control__indicator:after {\n  display: block;\n}\n.control--checkbox .control__indicator:after {\n  left: 9px;\n  top: 3px;\n  width: 7px;\n  height: 15px;\n  border: solid #111;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.control--checkbox input:disabled ~ .control__indicator:after {\n  border-color: #7b7b7b;\n}\n\n.new-project-label-icon {\n  color: rgb(48, 184, 48);\n}\n\n#new-project:hover {\n  color: rgb(48, 184, 48) !important;\n}\n\n#default-project {\n  color: #b3b3b3e3;\n}\n\n#default-project {\n  text-indent: 1rem;\n}\n\n#project-link-list {\n  text-indent: 1rem;\n}\n\n#page-title {\n  color: #d9d9d9;\n  margin-bottom: 1rem;\n}\n\n#categories input[type=\"checkbox\"] {\n  opacity: 0;\n  position: fixed;\n  width: 0;\n}\n\n#categories label {\n  display: inline-block;\n  background-color: #13143c;\n  color: #c4c4c4;\n  padding: 10px 20px;\n  font-family: sans-serif, Arial;\n  font-size: 1rem;\n  border: 1px solid #742cd6;\n  border-radius: 6px;\n  transition: all 250ms ease;\n}\n\n#categories label:hover {\n  background-color: #7927ec;\n  color: white;\n}\n\n#categories input[type=\"checkbox\"]:checked + label {\n  background-color: #8b39ff;\n  color: white;\n}\n\n#deadline-label, #project-label {\n  font-size: 0.9rem;\n  color: #d9d9d9;\n}\n\n#cat-tags span {\n  height: 1rem;\n}\n\n#modal-title {\n  text-transform: uppercase;\n}\n\n#modal-window, #project-modal-window {\n  display: none;\n  z-index: 9999;\n  overflow: auto;\n  opacity: 0;\n  animation: fade-in 300ms;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#modal-header, #project-modal-header {\n  background-color: #13143c;\n}\n\n#modal-card, #project-modal-card {\n  width: 65%;\n  max-width: 860px;\n}\n\n#project-selector {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n#move-project {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.is-flex {\n  display: flex;\n}\n\n@media screen and (max-width: 1023px) {\n  #modal-card, #project-modal-card {\n    width: 100%;\n    margin: 0;\n  }\n  .modal-open {\n    overflow: hidden;    /* PREVENTS BODY FROM SCROLLING WHILE MODAL IS OPEN */\n    position: fixed;\n  }\n}\n\n\n\n\n@media screen and (max-width: 1266px) {\n  #content-spacer-left, #content-spacer-right {\n    display: none;\n  }\n\n  #content-right {\n    width: 80%;\n  }\n\n  #mobile-column {\n    width: 100%;\n    margin: 0 auto;\n  }\n\n  #modal-card, #project-modal-card {\n    width: 85%;\n    height: 50vh;\n  }\n  .card {\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n\n.fwidth {\n  width: 100%;\n}\n\n#project-footer-elements, #footer-elements {\n  display: flex;\n  \n}\n\n#footer-elements {\n  width: 100%;\n}\n\n#deadline-countdown {\n  \n}\n\n#project-footer-elements {\n  margin-left: auto;\n  width: 50%;\n}\n\n#project-modal-save, #modal-save {\n  width: 100%;\n}\n\n#project-modal-cancel, #modal-cancel {\n  width: 50%;\n  background-color: transparent;\n  color: #d9d9d9;\n}\n\n.no-border-top {\n  border-top: none;\n}\n\n\n/* #footer-elements {\n  width: 100%;\n  justify-content: space-around;\n}\n */\n.low-priority {\n  border-right: 6px solid #2398f8 !important;\n}\n\n.medium-priority {\n  border-right: 6px solid #c4ec11 !important;\n}\n\n.high-priority {\n  border-right: 6px solid #e29c19 !important;\n}\n\n.urgent-priority {\n  border-right: 6px solid #b4231e !important;\n}\n\n#status-light {\n  flex: 1;\n  width: 5%;\n  color: red;\n  font-size: 1.5rem;\n}\n\n.trash-hover {\n  transition: all 200ms ease;\n}\n\n.trash-hover:hover {\n  transform: scale(1.3);\n  color: rgb(122, 0, 0) !important;\n}\n/* lightpurple - #2cb3c5  seafoam - #6743d0  darkpurple - #13143c  midpurple - #742cd6*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/bulma.css":
/*!***********************!*\
  !*** ./src/bulma.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bulma_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./bulma.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/bulma.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bulma_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bulma_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bulma_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bulma_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.1.2
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  const toArray = nodeList => Array.prototype.slice.call(nodeList);
  /**
   * Standardise console warnings
   * @param message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  const swalPrefix = 'swal2-';
  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };

  const getPopup = () => elementByClass(swalClasses.popup);
  const getIcon = () => elementByClass(swalClasses.icon);
  const getTitle = () => elementByClass(swalClasses.title);
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  const getImage = () => elementByClass(swalClasses.image);
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  const getActions = () => elementByClass(swalClasses.actions);
  const getFooter = () => elementByClass(swalClasses.footer);
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  const getFocusableElements = () => {
    const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  const isModal = () => {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  const isToast = () => {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  const setInnerHtml = (elem, html) => {
    // #1926
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  const removeCustomClasses = (elem, params) => {
    toArray(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  const getInput = (popup, inputType) => {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(popup, swalClasses[inputType]);

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(popup, swalClasses.input);
    }
  };
  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (target.forEach) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  const getChildByClass = (elem, className) => {
    for (let i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  const show = (elem, display = 'flex') => {
    elem.style.display = display;
  };
  const hide = elem => {
    elem.style.display = 'none';
  };
  const setStyle = (parent, selector, property, value) => {
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  const toggle = (elem, condition, display) => {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight); // borrowed from https://stackoverflow.com/a/46352119

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  const animateTimerProgressBar = (timer, reset = false) => {
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    if (Swal.isVisible()) {
      Swal.resetValidationMessage();
    }
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getChildByClass(popup, swalClasses.input);
    const file = getChildByClass(popup, swalClasses.file);
    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getChildByClass(popup, swalClasses.select);
    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      range.nextSibling.value = range.value;
    };
  };

  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (typeof param === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(inputType => {
      const inputClass = swalClasses[inputType];
      const inputContainer = getChildByClass(popup, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };

  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  const setAttributes = (inputType, inputAttributes) => {
    const input = getInput(getPopup(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  const getInputContainer = inputType => {
    const inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getPopup(), inputClass);
  };

  const renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof params.inputValue, "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = (textarea, params) => {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    setTimeout(() => {
      // #2291
      if ('MutationObserver' in window) {
        // #1699
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgoundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const setContent = (icon, params) => {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  function fire(...args) {
    const Swal = this;
    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const RESTORE_FOCUS_TIMEOUT = 100;

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    // TODO: replace with event.composedPath()
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  const addBottomPaddingForTallPopups = () => {
    const safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  const lockBodyScroll = () => {
    // #1246
    const container = getContainer();
    let preventTouchMove;

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };

  const isStylys = event => {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  const isZoom = event => {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    const popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  var defaultInputValidators = {
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  const getSwalParams = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      let value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  const getSwalButtons = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  const getSwalImage = templateContent => {
    const result = {};
    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  const getSwalIcon = templateContent => {
    const result = {};
    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  const getSwalInput = templateContent => {
    const result = {};
    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    const inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };

  const showWarningsForElements = template => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  const showWarningsForAttributes = (el, allowedAttributes) => {
    toArray(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  const handleConfirmOrDenyWithInput = (instance, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  const handleInputValidator = (instance, inputValue, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value
      });
    }
  };

  const succeedWith = (instance, value) => {
    instance.closePopup({
      isConfirmed: true,
      value
    });
  };

  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key); // ESC
    } else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  const handleEnter = (instance, e, innerParams) => {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    const buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams, mixinParams = {}) {
    showWarningsForParams(Object.assign({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();

      if (isModal()) {
        unsetAriaHidden();
      }
    }

    globalState.currentInstance = this;
    const innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    const domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise(resolve => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(param => {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }

  const disposeSwal = instance => {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods); // Unset currentInstance

    delete globalState.currentInstance;
  };

  const unsetWeakMaps = obj => {
    for (const i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  let currentInstance;

  class SweetAlert {
    constructor(...args) {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this;
      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      const promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  } // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function (...args) {
      if (currentInstance) {
        return currentInstance[key](...args);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.1.2';

  const Swal = SweetAlert;
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9;pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\" \"gap gap gap\";grid-template-rows:auto auto auto .625em;height:100%;padding:.625em .625em 0;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container::after{content:\"\";grid-column:1/4;grid-row:4;height:.625em}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bulma_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulma.css */ "./src/bulma.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");





 
// import { displayItemDetails } from '../components/ItemDetails';

//======================================================================
//======================================================================

//=============
let todos = [];
let projects = [];
//=============

//=======================================================================
//============================= UI Functions ============================

const displayElement = (function() {
    const tabAll = document.getElementById('All');
    const tabShopping = document.getElementById('Shopping');
    const tabWork = document.getElementById('Work');
    const tabSocial = document.getElementById('Social');
    const tabHousework = document.getElementById('Housework');
    const tabNotes = document.getElementById('Notes');
    const categoryTitle = document.getElementById('category-title');
    const contentRight = document.getElementById('content-right');
    const submitButton = document.getElementById('add-task');
    const inputField = document.getElementById('task-input');
    const list = document.getElementById('list');
    const pageTitle = document.getElementById('page-title');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');
    const modalTaskTitle = document.getElementById('modal-task-title');
    const modalSave = document.getElementById('modal-save');
    const priorityList = document.getElementById('priority-list');
    const category1 = document.getElementById('cat1');
    const category2 = document.getElementById('cat2');
    const category3 = document.getElementById('cat3');
    const category4 = document.getElementById('cat4');
    const category5 = document.getElementById('cat5');
    const datePicker = document.getElementById('date-picker');
    const projectLinkList = document.getElementById('project-link-list');
    const defaultProject = document.getElementById('default-project');
    const newProjectSidebar = document.getElementById('new-project');
    const newProjectTopNav = document.getElementById('new-project-top-nav');
    const projectSelector = document.getElementById('project-selector');
    const projectModalWindow = document.getElementById('project-modal-window');
    const projectModalTitle = document.getElementById('project-modal-title');
    const projectInput = document.getElementById('project-input');
    const projectModalDetails = document.getElementById('project-modal-details');
    const projectModalTaskTitle = document.getElementById('project-modal-task-title');
    const projectModalSave = document.getElementById('project-modal-save');

    const columns = document.createElement('div');
    const aColumn = document.createElement('div');
    
    columns.classList.add('columns','is-centered');
    aColumn.classList.add('column','is-three-fifths','is-offset-one-fifth','is-centered','mt-6');
    aColumn.setAttribute('id','mobile-column');

    list.appendChild(aColumn);

    return {
        tabAll,
        tabShopping,
        tabWork,
        tabSocial,
        tabHousework,
        tabNotes,
        categoryTitle,
        contentRight,
        inputField,
        pageTitle,
        submitButton,
        modalTitle,
        modalDetails,
        modalTaskTitle,
        modalSave,
        priorityList,
        category1,
        category2,
        category3,
        category4,
        category5,
        datePicker,
        projectLinkList,
        defaultProject,
        newProjectSidebar,
        newProjectTopNav,
        projectSelector,
        projectModalWindow,
        projectModalTitle,
        projectInput,
        projectModalDetails,
        projectModalTaskTitle,
        projectModalSave,
        columns,
        aColumn,
    };
})();

//==============================================================================
//===========================Todo Local Storage Functions===========================

const localStorageController = (function () {

    function getFromLocalStorage() {
        const reference = window.localStorage.getItem('todos');
        if (reference) {
            todos = JSON.parse(reference);
            todoController.renderTodos();
        }
    }
    function addToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
        todoController.renderTodos();
    }
    return {
        getFromLocalStorage,
        addToLocalStorage,
    };
})();

//==============================================================================
//===========================Project Local Storage Functions===========================

const projectLocalStorageController = (function () {

    function getFromLocalStorage() {
        const reference = window.localStorage.getItem('projects');
        if (reference) {
            projects = JSON.parse(reference);
            projectController.renderProjects();
        }
    }
    function addToLocalStorage() {
        localStorage.setItem('projects', JSON.stringify(projects));
        projectController.renderProjects();
    }
    return {
        getFromLocalStorage,
        addToLocalStorage,
    };
})();

//=============================================================================
//===========================Project Object Functions===========================

const projectController = (function () {

    function renderProjects() {
        displayElement.projectLinkList.innerHTML = '';
        projects.forEach(function(item) {
            const newItem = createNewProject(item.title);
            newItem.addEventListener('click', function() {
                displayElement.pageTitle.innerHTML = item.title;
                console.log(item.title)
                todoController.renderTodosByProject(item.title);
            })
            const projectSelectorOption = document.createElement('option');
            projectSelectorOption.setAttribute('value',item.title);
            projectSelectorOption.innerHTML = `${item.title}`;
            displayElement.projectSelector.appendChild(projectSelectorOption);
        })
    }
    
    function addProject(item) {
        if (item != '') {
            const project = {
                id: Date.now(),
                title: item,
                projects: [],
            };
            projects.push(project);
            projectLocalStorageController.addToLocalStorage();
            displayElement.projectInput.value = '';
        }
    }

    return {
        renderProjects,
        addProject,
    }
})();

//=============================================================================
//===========================Todo Object Functions===========================

const todoController = (function () {

    function renderTodosByProject(project) {
        displayElement.aColumn.innerHTML = '';
        todos.forEach(function(item) {
            if (item.project == project) {
                const newItem = (0,_components_ListItem__WEBPACK_IMPORTED_MODULE_4__.createItemElement)(item,todos);
                displayElement.aColumn.appendChild(newItem);
            }
        })
    }

    function renderTodos() {
        displayElement.aColumn.innerHTML = '';
        todos.forEach(function(item) {
            const newItem = (0,_components_ListItem__WEBPACK_IMPORTED_MODULE_4__.createItemElement)(item,todos);
            displayElement.aColumn.appendChild(newItem);
        })
    }
    
    function renderFilteredTodos(arr) {
        displayElement.aColumn.innerHTML = '';
        arr.forEach(function(item) {
            const newItem = (0,_components_ListItem__WEBPACK_IMPORTED_MODULE_4__.createItemElement)(item,arr);
            displayElement.aColumn.appendChild(newItem);
        })
    }
    
    function addTodo(item,project) {
        if (item != '') {
            const todo = {
                id: Date.now(),
                title: item,
                details: '',
                priority: '',
                deadline: '',
                project: project,
                category: [false,false,false,false,false],
                completed: false,
            };
            todos.push(todo);
            localStorageController.addToLocalStorage();
            displayElement.inputField.value = '';
        }
    }
    
    function editTodo() {
        let task = '';
        const taskID = document.getElementById('hidden-id').innerHTML;
    
        let reference = localStorage.getItem('todos');
        if (reference) {
            todos = JSON.parse(reference);
            const taskDetails = todos.filter(function(e) {
                return (e.id == taskID);
            });
            let taskIndex = todos.findIndex(x => x.id == taskID);
            todos[taskIndex].details = displayElement.modalDetails.value;
            task = taskDetails[0];
            task.details = '';
            task.title = '';
            task.details = displayElement.modalDetails.value;
            task.title = displayElement.modalTaskTitle.value;
            task.priority = displayElement.priorityList.value;
            task.deadline = displayElement.datePicker.value;
            task.project = displayElement.projectSelector.value;
    
            for (let i = 0; i < 5; i++) {
                if (document.getElementById(`cat${i+1}`).checked == true) {
                    task.category[i] = true;
                } else {
                    task.category[i] = false;
                }
            }
    
            localStorage.setItem('todos', JSON.stringify(todos));
            clearModalFields();
            renderTodosByProject(displayElement.projectSelector.value);
        }
    }

    return {
        renderTodosByProject,
        renderTodos,
        renderFilteredTodos,
        addTodo,
        editTodo,
    }
})();



function deleteTodo(id) {
    todos = todos.filter(function(item) {
        return item.id != id;
    });

    localStorageController.addToLocalStorage();
}

function createNewProject(title) {
    const projectItem = document.createElement('li');
    const projectLink = document.createElement('a');
    projectLink.innerHTML = title;
    projectItem.appendChild(projectLink);
    displayElement.projectLinkList.appendChild(projectItem);

    return(projectItem);
}

function clearModalFields() {
    displayElement.modalDetails.value = '';
    displayElement.modalTaskTitle.value = '';
    displayElement.category1.checked = false;
    displayElement.category2.checked = false;
    displayElement.category3.checked = false;
    displayElement.category4.checked = false;
    displayElement.category5.checked = false;
    displayElement.priorityList.value = 'Low';
    displayElement.datePicker.value = '';
}

localStorageController.getFromLocalStorage();
projectLocalStorageController.getFromLocalStorage();

//=======================================================================
//=========================== Event Listeners ===========================

const appEventListeners = (function () {

    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
            });
          });
        }
    });

// // //================================================================================
// // //=========================Highlights Active Sidebar Tab==========================

    displayElement.tabAll.addEventListener('click', (e) => {
        localStorageController.getFromLocalStorage();
        displayElement.pageTitle.innerHTML = 'All tasks';
        displayElement.tabAll.firstElementChild.classList.add('active-tab');
        displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
        displayElement.tabWork.firstElementChild.classList.remove('active-tab');
        displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
        displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
        displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
    });

    displayElement.tabShopping.addEventListener('click', (e) => { 
        let filteredTodos = [];
        const reference = window.localStorage.getItem('todos');
            if (reference) {
                let filterTodos = JSON.parse(reference);
                filterTodos.forEach(function(item) {
                    if (item.category[0] == true) {
                        filteredTodos.push(item);
                    }
                })
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.add('active-tab');
                displayElement.tabWork.firstElementChild.classList.remove('active-tab');
                displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
                displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
                displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
            }
        todoController.renderFilteredTodos(filteredTodos);
    });
    
    displayElement.tabWork.addEventListener('click', (e) => {
        let filteredTodos = [];
        const reference = window.localStorage.getItem('todos');
            if (reference) {
                let filterTodos = JSON.parse(reference);
                filterTodos.forEach(function(item) {
                    if (item.category[1] == true) {
                        filteredTodos.push(item);
                    }
                })
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
                displayElement.tabWork.firstElementChild.classList.add('active-tab');
                displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
                displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
                displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
            }
            todoController.renderFilteredTodos(filteredTodos);
    });
    
    displayElement.tabSocial.addEventListener('click', (e) => {
        let filteredTodos = [];
        const reference = window.localStorage.getItem('todos');
            if (reference) {
                let filterTodos = JSON.parse(reference);
                filterTodos.forEach(function(item) {
                    if (item.category[2] == true) {
                        filteredTodos.push(item);
                    }
                })
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
                displayElement.tabWork.firstElementChild.classList.remove('active-tab');
                displayElement.tabSocial.firstElementChild.classList.add('active-tab');
                displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
                displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
            }
            todoController.renderFilteredTodos(filteredTodos);
    });
    
    displayElement.tabHousework.addEventListener('click', (e) => {
        let filteredTodos = [];
        const reference = window.localStorage.getItem('todos');
            if (reference) {
                let filterTodos = JSON.parse(reference);
                filterTodos.forEach(function(item) {
                    if (item.category[3] == true) {
                        filteredTodos.push(item);
                    }
                })
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
                displayElement.tabWork.firstElementChild.classList.remove('active-tab');
                displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
                displayElement.tabHousework.firstElementChild.classList.add('active-tab');
                displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
            }
            todoController.renderFilteredTodos(filteredTodos);
    });
    
    displayElement.tabNotes.addEventListener('click', (e) => {
        let filteredTodos = [];
        const reference = window.localStorage.getItem('todos');
            if (reference) {
                let filterTodos = JSON.parse(reference);
                filterTodos.forEach(function(item) {
                    if (item.category[4] == true) {
                        filteredTodos.push(item);
                    }
                })
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
                displayElement.tabWork.firstElementChild.classList.remove('active-tab');
                displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
                displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
                displayElement.tabNotes.firstElementChild.classList.add('active-tab');
            }
            todoController.renderFilteredTodos(filteredTodos);
    });
    
// // //================================================================================
// // //======================Updates Todo Object's Project Value=======================

    displayElement.inputField.addEventListener('keydown', function(event) {
        if (displayElement.inputField.value && event.key == 'Enter') {
            let currentProject = document.getElementById('page-title').textContent;
            todoController.addTodo(displayElement.inputField.value,currentProject);
        }
    });
    
    displayElement.submitButton.addEventListener('click', function(event) {
        let currentProject = document.getElementById('page-title').textContent;
        todoController.addTodo(displayElement.inputField.value,currentProject);
    });
    
// // //================================================================================
// // //===========================Handling Modal Open/Close============================

    document.getElementById('modal-exit').addEventListener('click', function() {
        document.getElementById('modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    document.getElementById('modal-cancel').addEventListener('click', function() {
        document.getElementById('modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    document.addEventListener('click', function(event) {
        if (event.target.classList[0] == 'modal-background') {
        document.getElementById('modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
        }
    });

    document.getElementById('project-modal-exit').addEventListener('click', function() {
        document.getElementById('project-modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    document.getElementById('project-modal-cancel').addEventListener('click', function() {
        document.getElementById('project-modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    document.addEventListener('click', function(event) {
        if (event.target.classList[0] == 'modal-background') {
        document.getElementById('project-modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
        }
    });

    displayElement.newProjectSidebar.addEventListener('click', () => {
        displayElement.projectModalWindow.style.display = 'block';
        displayElement.projectModalWindow.style.opacity = '1';
        document.body.classList.add('modal-open');
    });

    displayElement.newProjectTopNav.addEventListener('click', () => {
        displayElement.projectModalWindow.style.display = 'block';
        displayElement.projectModalWindow.style.opacity = '1';
        document.body.classList.add('modal-open');
    });

    window.addEventListener('keydown', function(event) {
        if (event.key == 'n') {
            displayElement.projectModalWindow.style.display = 'block';
            displayElement.projectModalWindow.style.opacity = '1';
            document.body.classList.add('modal-open');
        }
    })

    window.addEventListener('keydown', function(event) {
        if (event.key == 'Escape') {
            document.getElementById('project-modal-window').style.display = 'none';
            document.getElementById('modal-window').style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    })

// // //================================================================================
// // //==============Event Listeners With Confimation Animations Attached==============

    document.getElementById('move-project').addEventListener('click', function(event) {
        todoController.editTodo();
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        position: 'center',
        icon: 'success',
        iconColor: '#02cc1d',
        title: '<b style="color:#d9d9d9;">Your task has been updated!</b>',
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,
        background: '#742cd6',
        
        })
        document.getElementById('modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    } )
    
    displayElement.modalSave.addEventListener('click', function(event) {
        todoController.editTodo();
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        position: 'center',
        icon: 'success',
        iconColor: '#02cc1d',
        title: '<b style="color:#d9d9d9;">Your task has been updated!</b>',
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,
        background: '#742cd6',
        
        })
        document.getElementById('modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    displayElement.modalSave.addEventListener('keydown', function(event) {
        if (event.key == 'Enter') {
            todoController.editTodo();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            position: 'center',
            icon: 'success',
            iconColor: '#02cc1d',
            title: '<b style="color:#d9d9d9;">Your task has been updated!</b>',
            showConfirmButton: false,
            timer: 1500,
            heightAuto: false,
            background: '#742cd6',
        
        })
        document.getElementById('modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
        }
    });

    displayElement.projectModalSave.addEventListener('click', function(event) {
        if (displayElement.projectInput.value) {
            projectController.addProject(displayElement.projectInput.value);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                position: 'center',
                icon: 'success',
                iconColor: '#02cc1d',
                title: '<b style="color:#d9d9d9;">Your project has been created!</b>',
                showConfirmButton: false,
                timer: 1500,
                heightAuto: false,
                background: '#742cd6',
                
            })
            displayElement.projectModalWindow.style.display = 'none';
            document.body.classList.remove('modal-open');
        } else {
            alert('Please enter a title for your project');
        }
        
    });
    
    displayElement.projectModalSave.addEventListener('keydown', function(event) {
        if (event.key == 'Enter') {
            createNewProject(displayElement.projectInput.value);
            projectController.addProject(displayElement.projectInput.value);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            position: 'center',
            icon: 'success',
            iconColor: '#02cc1d',
            title: '<b style="color:#d9d9d9;">Your project has been created!</b>',
            showConfirmButton: false,
            timer: 1500,
            heightAuto: false,
            background: '#742cd6',
        
        })
        displayElement.projectModalWindow.style.display = 'none';
        document.body.classList.remove('modal-open');
        }
    });

    displayElement.defaultProject.addEventListener('click', () => {
        displayElement.pageTitle.innerHTML = 'Default Project';
        todoController.renderTodosByProject('Default Project');
    })

    

})();


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
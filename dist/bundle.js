/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/contacts.css":
/*!*****************************!*\
  !*** ./styles/contacts.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://upqode/./styles/contacts.css?");

/***/ }),

/***/ "./styles/services.css":
/*!*****************************!*\
  !*** ./styles/services.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://upqode/./styles/services.css?");

/***/ }),

/***/ "./styles/slideshow.css":
/*!******************************!*\
  !*** ./styles/slideshow.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://upqode/./styles/slideshow.css?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://upqode/./styles/style.css?");

/***/ }),

/***/ "./styles/styleOfFootter.css":
/*!***********************************!*\
  !*** ./styles/styleOfFootter.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://upqode/./styles/styleOfFootter.css?");

/***/ }),

/***/ "./styles/styleOfHeader.css":
/*!**********************************!*\
  !*** ./styles/styleOfHeader.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://upqode/./styles/styleOfHeader.css?");

/***/ }),

/***/ "./styles/team.css":
/*!*************************!*\
  !*** ./styles/team.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://upqode/./styles/team.css?");

/***/ }),

/***/ "./scripts/burgerMenu.js":
/*!*******************************!*\
  !*** ./scripts/burgerMenu.js ***!
  \*******************************/
/***/ ((module) => {

eval("const burgerMenu = document.getElementById('burger__menu');\r\nconst navbar = document.getElementById('navbar');\r\nconst cross = document.getElementById('cross');\r\nconst header = document.getElementById('header');\r\nconst slidershow = document.getElementById('slidershow');\r\nburgerMenu.addEventListener('click', openMenu);\r\n\r\nfunction openMenu(){\r\n    navbar.style.display = 'block';\r\n    burgerMenu.style.display = 'none';\r\n    cross.style.display = 'block';\r\n    header.style.backgroundColor = \" #00A031\";\r\n    slidershow.style.marginTop = \"150px\"\r\n}\r\ncross.addEventListener('click', closeMenu)\r\nfunction closeMenu() {\r\n    navbar.style.display = 'none';\r\n    burgerMenu.style.display = 'flex';\r\n    cross.style.display = 'none';\r\n    header.style.backgroundColor = \"transparent\";\r\n    slidershow.style.marginTop = \"0px\"\r\n}\r\n\r\nfunction burgerMenuInit() {\r\n    cross.addEventListener('click', closeMenu)\r\n    burgerMenu.addEventListener('click', openMenu);\r\n}\r\nburgerMenuInit();\r\nmodule.exports = burgerMenu;\n\n//# sourceURL=webpack://upqode/./scripts/burgerMenu.js?");

/***/ }),

/***/ "./scripts/header.js":
/*!***************************!*\
  !*** ./scripts/header.js ***!
  \***************************/
/***/ ((module) => {

eval("const scroll = document.getElementById(\"header\");\r\n\r\nconst headerInit = () => {\r\n    window.onscroll = () => {\r\n    if (window.scrollY > document.documentElement.clientHeight ) {\r\n        scroll.classList.add('scroll')\r\n    } else {\r\n        scroll.classList.remove('scroll')\r\n    }\r\n}\r\n};\r\n\r\nlet slideIndex = 1;\r\n\r\nfunction showDivs(n) {\r\n  let i;\r\n  let x = document.getElementsByClassName(\"slideshow__image\");\r\n  let dots = document.getElementsByClassName(\"dot\");\r\n  if (n > x.length) {slideIndex = 1}\r\n  if (n < 1) {slideIndex = x.length}\r\n  for (i = 0; i < x.length; i++) {\r\n    x[i].style.display = \"none\";  \r\n  }\r\n  for (i = 0; i < dots.length; i++) {\r\n    dots[i].className = dots[i].className.replace(\"dot_green\", \"\");\r\n  }\r\n  x[slideIndex-1].style.display = \"block\";  \r\n  dots[slideIndex-1].className += \"dot_green\";\r\n}\r\n\r\nfunction plusDivs(n) {\r\n  showDivs(slideIndex += n);\r\n}\r\n\r\nfunction currentDiv(n) {\r\n  showDivs(slideIndex = n);\r\n}\r\n\r\n\r\n\r\nwindow.plusDivs = plusDivs;\r\nwindow.currentDiv = currentDiv;\r\nwindow.showDivs = showDivs;\r\nshowDivs(slideIndex);\r\nheaderInit();\r\nmodule.exports = header;\n\n//# sourceURL=webpack://upqode/./scripts/header.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_contacts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/contacts.css */ \"./styles/contacts.css\");\n/* harmony import */ var _styles_services_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/services.css */ \"./styles/services.css\");\n/* harmony import */ var _styles_slideshow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/slideshow.css */ \"./styles/slideshow.css\");\n/* harmony import */ var _styles_styleOfFootter_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styleOfFootter.css */ \"./styles/styleOfFootter.css\");\n/* harmony import */ var _styles_styleOfHeader_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styleOfHeader.css */ \"./styles/styleOfHeader.css\");\n/* harmony import */ var _styles_team_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/team.css */ \"./styles/team.css\");\n\r\nconst map = __webpack_require__(/*! ./map.js */ \"./scripts/map.js\");\r\nconst team = __webpack_require__(/*! ./team.js */ \"./scripts/team.js\");\r\nconst header = __webpack_require__(/*! ./header.js */ \"./scripts/header.js\");\r\nconst burger = __webpack_require__(/*! ./burgerMenu.js */ \"./scripts/burgerMenu.js\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://upqode/./scripts/index.js?");

/***/ }),

/***/ "./scripts/map.js":
/*!************************!*\
  !*** ./scripts/map.js ***!
  \************************/
/***/ ((module) => {

eval("const locations = [\r\n    {\r\n        city: 'Los Angeles',\r\n        locationX: 34.052231,\r\n        locationY: -118.243683\r\n    },\r\n    {\r\n        city: 'NewYork',\r\n        locationX: 40.714272,\r\n        locationY: -74.005966\r\n    },\r\n    {\r\n        city: 'Boston',\r\n        locationX: 42.3584300,\r\n        locationY: -71.0597700\r\n    },\r\n    {\r\n        city: 'Detroit',\r\n        locationX: 42.3314300,\r\n        locationY: -83.0457500\r\n    }\r\n]\r\n\r\nconst choosenCity = document.getElementById('choosenCity');\r\nlet locationIndex = 0;\r\n// let map;\r\nfunction showCity(n){\r\n    const city = locations[n];\r\n    const myLatLng = { lat: city.locationX, lng: city.locationY };\r\n    choosenCity.textContent = city.city;\r\n    const map = new google.maps.Map(document.getElementById(\"map\"), {\r\n        zoom: 8,\r\n        center: myLatLng,\r\n      });\r\n    new google.maps.Marker({\r\n      position: myLatLng,\r\n      map,\r\n      title: \"Hello World!\",\r\n    });\r\n}\r\n\r\nfunction initMap() {\r\n    showCity(1)\r\n    choosenCity.textContent = locations[1].city\r\n  }\r\n\r\n  window.addEventListener('load',function(){\r\n    initMap();\r\n  }, false);\r\n\r\nwindow.showCity = showCity;\r\nmodule.exports = map;\r\n  \n\n//# sourceURL=webpack://upqode/./scripts/map.js?");

/***/ }),

/***/ "./scripts/team.js":
/*!*************************!*\
  !*** ./scripts/team.js ***!
  \*************************/
/***/ ((module) => {

eval("const data = [\r\n    {\r\n        name: 'Nick Harrington',\r\n        position: 'ART DIRECTOR',\r\n        img: 'img/memberOfTeam1.png',\r\n        description: 'Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.'\r\n    },\r\n    {\r\n        name: 'Minnie Bell',\r\n        position: 'ART DIRECTOR2',\r\n        img: 'img/memberOfTeam2.png',\r\n        description: 'Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.'\r\n    },\r\n    {\r\n        name: 'Bill Smit',\r\n        position: 'ART DIRECTOR3',\r\n        img: 'img/memberOfTeam5.jpg',\r\n        description: 'When we are feeling so low and deep in the pits, this is when we need light to see our way through.'\r\n    },\r\n    {\r\n        name: 'Lily Jons',\r\n        position: 'ART DIRECTOR4',\r\n        img: 'img/memberOfTeam7.png',\r\n        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\r\n       },\r\n    {\r\n        name: 'Nicky Jons',\r\n        position: 'ART DIRECTOR5',\r\n        img: 'img/memberOfTeam8.png',\r\n        description: 'When we are feeling so low and deep in the pits, this is when we need light to see our way through.'\r\n    },\r\n    {\r\n        name: 'Alex Smit',\r\n        position: 'ART DIRECTOR6',\r\n        img: 'img/memberOfTeam6.jpg',\r\n        description: 'When we are feeling so low and deep in the pits, this is when we need light to see our way through.'\r\n    }];\r\n\r\nconst nameOfMember = document.getElementById('nameOfMember');\r\nconst positionOfMember = document.getElementById('positionOfMember');\r\nconst descriptionOfMember = document.getElementById('descriptionOfMember');\r\nconst teamPhotoNext = document.getElementById('teamPhotoNext');\r\nconst teamPhotoPrev = document.getElementById('teamPhotoPrev');\r\nconst teamPhotoCurrent = document.getElementById('teamPhotoCurrent');\r\nconst nameTeamNext = document.getElementById('nameTeamNext');\r\nconst nameTeamPrev = document.getElementById('nameTeamPrev')\r\n\r\nlet memberIndex = 0;\r\n\r\n\r\nfunction addIndex(n) {\r\n    showMember(memberIndex += n);\r\n}\r\n\r\nfunction showMember(n) {\r\n\r\n  if (n > data.length) {memberIndex = 0}\r\n  if (n < 0) {memberIndex = data.length - 1}\r\n  const member = data[memberIndex];\r\n  const prevMember = (memberIndex - 1 > -1) ? data[memberIndex - 1] : data[data.length - 1];\r\n  const nextMember = (memberIndex + 1 < data.length) ? data[memberIndex + 1] : data[0];\r\n  nameOfMember.textContent = member.name;\r\n  descriptionOfMember.textContent = member.description;\r\n  positionOfMember.textContent = member.position;\r\n  teamPhotoCurrent.src = member.img;\r\n  teamPhotoNext.src = nextMember.img;\r\n  teamPhotoPrev.src = prevMember.img;\r\n  nameTeamNext.textContent = nextMember.name;\r\n  nameTeamPrev.textContent = prevMember.name;\r\n}\r\nshowMember(memberIndex);\r\nwindow.addIndex = addIndex;\r\nwindow.showMember = showMember;\r\nmodule.exports = team;\n\n//# sourceURL=webpack://upqode/./scripts/team.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/click.js":
/*!**********************!*\
  !*** ./src/click.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handleClick; });\n//页面刚加载的时候，异步的代码根本就不会执行，但是我们却把它下载下来，实际上就会浪费页面执行性能，webpack 就希望像这样交互的功能，应该把它放到一个异步加载的模块去写\nfunction handleClick() {\n  const el = document.createElement('div')\n  el.innerHTML = '我被点击了'\n  document.body.appendChild(el)\n}\n\n//# sourceURL=webpack:///./src/click.js?");

/***/ })

}]);
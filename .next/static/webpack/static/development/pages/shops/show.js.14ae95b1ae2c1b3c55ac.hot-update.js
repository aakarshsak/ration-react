webpackHotUpdate("static/development/pages/shops/show.js",{

/***/ "./components/complaint.js":
/*!*********************************!*\
  !*** ./components/complaint.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CommentExampleComment = function CommentExampleComment(props) {
  var comments = props.list.map(function (item, index) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Author, {
      as: "a"
    }, "Matt"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Metadata, null, __jsx("div", null, "Today at 5:42PM")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Text, null, "How artistic!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Actions, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Action, null, "Reply"))));
  });
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Group, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    dividing: true
  }, "Complaints"), comments, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    reply: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    content: "Add Reply",
    labelPosition: "left",
    icon: "edit",
    primary: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentExampleComment);

/***/ })

})
//# sourceMappingURL=show.js.14ae95b1ae2c1b3c55ac.hot-update.js.map
webpackHotUpdate("static/development/pages/shops/show.js",{

/***/ "./components/complaint.js":
/*!*********************************!*\
  !*** ./components/complaint.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentExampleComment; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var CommentExampleComment = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CommentExampleComment, _Component);

  function CommentExampleComment() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentExampleComment);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommentExampleComment).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentExampleComment, [{
    key: "render",
    value: function render() {
      var comments = props.list.map(function (item, index) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"].Author, {
          as: "a"
        }, "Matt"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"].Metadata, null, __jsx("div", null, "Today at 5:42PM")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"].Text, null, "How artistic!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"].Actions, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"].Action, null, "Reply"))));
      });
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"].Group, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h3",
        dividing: true
      }, "Complaints"), comments, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        reply: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].TextArea, null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        content: "Add Reply",
        labelPosition: "left",
        icon: "edit",
        primary: true
      })));
    }
  }]);

  return CommentExampleComment;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=show.js.332954735422618effd5.hot-update.js.map
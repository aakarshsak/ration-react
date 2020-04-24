webpackHotUpdate("static/development/pages/user/success.js",{

/***/ "./pages/user/success.js":
/*!*******************************!*\
  !*** ./pages/user/success.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var onClick = function onClick() {
  _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute("/user/login");
};

var success = function success() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      minHeight: 700,
      padding: '1em 0em'
    },
    vertical: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    text: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    content: "Registration Successful",
    color: "blue",
    textAlign: "center",
    style: {
      fontSize: '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: '2em'
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h2",
    content: "Login again to access the account.",
    textAlign: "center",
    color: "grey",
    style: {
      fontSize: '1.7em',
      fontWeight: 'normal',
      marginTop: '.5em'
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClick,
    primary: true,
    size: "massive",
    textAlign: "center",
    style: {
      marginTop: '.5em'
    }
  }, "Login"))));
};

/* harmony default export */ __webpack_exports__["default"] = (success);

/***/ })

})
//# sourceMappingURL=success.js.0e72f95fa4845e169326.hot-update.js.map
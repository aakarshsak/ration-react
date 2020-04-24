webpackHotUpdate("static/development/pages/user/login.js",{

/***/ "./pages/user/login.js":
/*!*****************************!*\
  !*** ./pages/user/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout.js */ "./components/layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../localmodules/token_validate */ "./localmodules/token_validate.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../localmodules/express_post */ "./localmodules/express_post.js");
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_13__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var LoginForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LoginForm, _Component);

  function LoginForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      email: '',
      password: '',
      res: '',
      errorMessage: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "callAPI", function _callee() {
      var data, headers, _ref, text, status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                errorMessage: '',
                res: ''
              });

              data = {
                email: _this.state.email,
                password: _this.state.password
              };
              headers = {
                'Content-Type': 'application/json'
              };
              _context.prev = 3;
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_13___default()('/user/login', headers, data));

            case 6:
              _ref = _context.sent;
              text = _ref.text;
              status = _ref.status;

              if (status === 400) {
                _this.setState({
                  errorMessage: text,
                  email: '',
                  password: ''
                });
              } else if (status === 200) {
                _this.setState({
                  res: text
                });

                _routes__WEBPACK_IMPORTED_MODULE_11__["Router"].pushRoute("/".concat(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_12___default()(_this.state.res).headerToken));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 12]]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function _callee2(event) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();

              _this.callAPI();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "showError", function () {
      if (_this.state.errorMessage === '') {
        return null;
      }

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Message"], {
        error: true,
        header: _this.state.errorMessage
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LoginForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        textAlign: "center",
        style: {
          height: '100vh'
        },
        verticalAlign: "middle"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        style: {
          maxWidth: 450
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        as: "h2",
        color: "blue",
        textAlign: "center"
      }, "Log-in to your account"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        size: "large",
        onSubmit: this.onSubmit
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        stacked: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
        value: this.state.email,
        onChange: function onChange(event) {
          _this2.setState({
            email: event.target.value
          });
        },
        type: "email",
        fluid: true,
        icon: "user",
        iconPosition: "left",
        placeholder: "E-mail address"
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
        value: this.state.password,
        onChange: function onChange(event) {
          _this2.setState({
            password: event.target.value
          });
        },
        fluid: true,
        icon: "lock",
        iconPosition: "left",
        placeholder: "Password",
        type: "password"
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        color: "blue",
        fluid: true,
        size: "large"
      }, "Login"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Message"], null, "New to us? ", __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        route: "/user/register"
      }, __jsx("a", null, "Sign Up"))), this.showError())));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ })

})
//# sourceMappingURL=login.js.b523bb6e1b5c7a1d0467.hot-update.js.map
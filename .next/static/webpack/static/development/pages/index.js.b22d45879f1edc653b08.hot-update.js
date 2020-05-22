webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../localmodules/token_validate */ "./localmodules/token_validate.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _localmodules_express_get__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../localmodules/express_get */ "./localmodules/express_get.js");
/* harmony import */ var _localmodules_express_get__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_get__WEBPACK_IMPORTED_MODULE_12__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Navbar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      loggedIn: _this.props.loggedIn,
      user: {
        name: {
          first: '',
          middle: '',
          last: ''
        },
        address: {
          pin: '',
          state: '',
          house: '',
          phone: '',
          area: '',
          district: ''
        },
        _id: '',
        email: '',
        aadhar: ''
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      _this.getUserDetails(_this.props.headerToken);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "logOut", function (event) {
      _this.setState({
        loggedIn: false
      });

      _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute('/user/logout');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onProfileClick", function () {
      _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/user/details/".concat(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11___default()(_this.props.headerToken).headerToken));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "logInStatusRender", function () {
      if (_this.state.loggedIn) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Menu, {
          position: "right"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
          name: _this.state.user.name.first + " " + _this.state.user.name.last,
          onClick: _this.onProfileClick
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
          name: "Logout",
          onClick: _this.logOut
        }));
      }

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Menu, {
        position: "right"
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/user/register"
      }, __jsx("a", {
        className: "item"
      }, "Register")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/user/login"
      }, __jsx("a", {
        className: "item"
      }, "Login")));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getUserDetails", function _callee(token) {
      var headers, _ref, data, status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              headers = {
                'Content-Type': 'application/json',
                'x-auth-token': token
              };

              if (!_this.state.loggedIn) {
                _context.next = 8;
                break;
              }

              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_localmodules_express_get__WEBPACK_IMPORTED_MODULE_12___default()('/user/login/me', headers));

            case 4:
              _ref = _context.sent;
              data = _ref.data;
              status = _ref.status;

              _this.setState({
                user: data
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;
      var defaultToken;
      if (this.props.headerToken === '') defaultToken = "/";else {
        defaultToken = "/".concat(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11___default()(this.props.headerToken).headerToken);
      }
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"], {
        size: "massive",
        inverted: true,
        color: "blue"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: defaultToken
      }, __jsx("a", {
        className: "item"
      }, "eRation")), this.logInStatusRender()));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      return _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11___default()(props.headerToken);
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.b22d45879f1edc653b08.hot-update.js.map
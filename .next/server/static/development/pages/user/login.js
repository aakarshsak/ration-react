module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ "./components/navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
  })), __jsx(_navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loggedIn: props.loggedIn,
    headerToken: props.headerToken
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, props.children));
});

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localmodules/token_validate */ "./localmodules/token_validate.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _localmodules_express_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localmodules/express_get */ "./localmodules/express_get.js");
/* harmony import */ var _localmodules_express_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_get__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loggedIn: this.props.loggedIn,
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

    _defineProperty(this, "componentDidMount", () => {
      this.getUserDetails(this.props.headerToken);
    });

    _defineProperty(this, "logOut", event => {
      this.setState({
        loggedIn: false
      });
      _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/user/logout');
    });

    _defineProperty(this, "onProfileClick", () => {
      _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute(`/user/details/${_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_3___default()(this.props.headerToken).headerToken}`);
    });

    _defineProperty(this, "logInStatusRender", () => {
      if (this.state.loggedIn) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
          position: "right"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          name: this.state.user.name.first + " " + this.state.user.name.last,
          onClick: this.onProfileClick
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          name: "Logout",
          onClick: this.logOut
        }));
      }

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
        position: "right"
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/user/register"
      }, __jsx("a", {
        className: "item"
      }, "Register")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/user/login"
      }, __jsx("a", {
        className: "item"
      }, "Login")));
    });

    _defineProperty(this, "getUserDetails", async token => {
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
      };

      if (this.state.loggedIn) {
        const {
          data,
          status
        } = await _localmodules_express_get__WEBPACK_IMPORTED_MODULE_4___default()('/user/login/me', headers);
        this.setState({
          user: data
        });
      }
    });
  }

  static getInitialProps(props) {
    return _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_3___default()(props.headerToken);
  }

  render() {
    const {
      activeItem
    } = this.state;
    let defaultToken;
    if (this.props.headerToken === '') defaultToken = `/`;else {
      defaultToken = `/${_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_3___default()(this.props.headerToken).headerToken}`;
    }
    console.log(defaultToken);
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      size: "massive",
      inverted: true,
      color: "blue"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: defaultToken
    }, __jsx("a", {
      className: "item"
    }, "eR")), this.logInStatusRender()));
  }

}

/***/ }),

/***/ "./localmodules/express_get.js":
/*!*************************************!*\
  !*** ./localmodules/express_get.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _crossFetch = _interopRequireDefault(__webpack_require__(/*! cross-fetch */ "cross-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const get = async (url, headers) => {
  const options = {
    method: 'get',
    headers
  };
  const newUrl = 'http://localhost:7800' + url;
  const res = await (0, _crossFetch.default)(newUrl, options);
  const data = await res.json();
  const status = await res.status;
  return {
    data,
    status
  };
};

module.exports = get;

/***/ }),

/***/ "./localmodules/express_post.js":
/*!**************************************!*\
  !*** ./localmodules/express_post.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fetch = __webpack_require__(/*! cross-fetch */ "cross-fetch");

const post = async (url, headers, data) => {
  const options = {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  };
  const newUrl = 'http://localhost:7800' + url;
  const res = await fetch(newUrl, options);
  const text = await res.text();
  const status = await res.status;
  return {
    text,
    status
  };
};

module.exports = post;

/***/ }),

/***/ "./localmodules/token_validate.js":
/*!****************************************!*\
  !*** ./localmodules/token_validate.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const validate = token => {
  if (token !== undefined) {
    if (token.length === 148) {
      return {
        loggedIn: true,
        headerToken: token
      };
    }
  }

  return {
    loggedIn: false,
    headerToken: ''
  };
};

module.exports = validate;

/***/ }),

/***/ "./pages/user/login.js":
/*!*****************************!*\
  !*** ./pages/user/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout.js */ "./components/layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../localmodules/token_validate */ "./localmodules/token_validate.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../localmodules/express_post */ "./localmodules/express_post.js");
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class LoginForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      ration: '',
      password: '',
      res: '',
      errorMessage: ''
    });

    _defineProperty(this, "callAPI", async () => {
      this.setState({
        errorMessage: '',
        res: ''
      });
      const data = {
        ration: this.state.ration,
        password: this.state.password
      };
      const headers = {
        'Content-Type': 'application/json'
      };

      try {
        const {
          text,
          status
        } = await _localmodules_express_post__WEBPACK_IMPORTED_MODULE_5___default()('/user/login', headers, data);

        if (status === 400) {
          this.setState({
            errorMessage: text,
            ration: '',
            password: ''
          });
        } else if (status === 200) {
          this.setState({
            res: text
          });
          this.setState({
            errorMessage: "1"
          });
          _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute(`/${_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_4___default()(this.state.res).headerToken}`);
        }
      } catch (e) {
        console.log(e);
      }
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      this.callAPI();
    });

    _defineProperty(this, "showError", () => {
      if (this.state.errorMessage === '') {
        return null;
        ;
      } else if (this.state.errorMessage === "1") {
        return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
          positive: true
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"].Header, null, "Successfully Logged In.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
          icon: true
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          name: "circle notched",
          loading: true
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"].Header, null, "Wait few second"), "We are fetching content for you.")));
      }

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
        error: true,
        header: this.state.errorMessage
      });
    });
  }

  render() {
    return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      textAlign: "center",
      style: {
        height: '100vh'
      },
      verticalAlign: "middle"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      style: {
        maxWidth: 450
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h2",
      color: "blue",
      textAlign: "center"
    }, "Log-in to your account"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      size: "large",
      onSubmit: this.onSubmit
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      stacked: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      value: this.state.ration,
      onChange: event => {
        this.setState({
          ration: event.target.value
        });
      },
      fluid: true,
      icon: "user",
      iconPosition: "left",
      placeholder: "Ration Card Number"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      value: this.state.password,
      onChange: event => {
        this.setState({
          password: event.target.value
        });
      },
      fluid: true,
      icon: "lock",
      iconPosition: "left",
      placeholder: "Password",
      type: "password"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "blue",
      fluid: true,
      size: "large"
    }, "Login"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], null, "New to us? ", __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/user/register"
    }, __jsx("a", null, "Sign Up"))), this.showError())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes //.add('/update', '/update')
.add('/user/details/:headerToken', '/user/details').add('/:headerToken', '/').add('/:headerToken/shops/:address', '/shops/show').add('/:headerToken/shops/record/:address', '/shops/record'); // .add('/:headerToken/shops/:address/payment', '/shops/payment')

module.exports = routes;

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/user/login.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zoro/Documents/Programming/JS/ration/ration-react/pages/user/login.js */"./pages/user/login.js");


/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cross-fetch");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map
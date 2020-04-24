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
      activeItem: 'home',
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

    _defineProperty(this, "onClick", (event, {
      name
    }) => {
      this.setState({
        activeItem: name
      });
      console.log(name);
    });

    _defineProperty(this, "logOut", event => {
      this.setState({
        loggedIn: false
      });
      _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/user/login');
    });

    _defineProperty(this, "logInStatusRender", () => {
      if (this.state.loggedIn) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
          position: "right"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
          item: true,
          text: this.state.user.name.first + " " + this.state.user.name.last
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, null, "First"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, null, "Second"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, null, "Third"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, null, "Fourth"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
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
        console.log(status);
        console.log(data);
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
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      size: "massive",
      inverted: true,
      color: "blue"
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: `/${_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_3___default()(this.props.headerToken).headerToken}`
    }, __jsx("a", {
      className: "item"
    }, "eR")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: "home",
      active: activeItem === 'home',
      onClick: this.onClick
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: "something1",
      active: activeItem === 'something1',
      onClick: this.onClick
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: "something2",
      active: activeItem === 'something2',
      onClick: this.onClick
    })), this.logInStatusRender());
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

/***/ "./pages/user/register.js":
/*!********************************!*\
  !*** ./pages/user/register.js ***!
  \********************************/
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
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../localmodules/express_post */ "./localmodules/express_post.js");
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class RegisterForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      pin: '',
      house: '',
      area: '',
      district: '',
      state: '',
      phone: '',
      first: '',
      middle: '',
      last: '',
      password: '',
      confirm_pass: '',
      email: '',
      aadhar: ''
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        password,
        confirm_pass,
        email,
        pin,
        house,
        area,
        district,
        state,
        phone,
        first,
        middle,
        last,
        aadhar
      } = this.state;
      const data = {
        name: {
          first,
          middle,
          last
        },
        password,
        confirm_pass,
        email,
        address: {
          house,
          area,
          district,
          state,
          pin,
          phone
        },
        aadhar
      };
      if (this.state.middle === '') delete data.name.middle;
      const headers = {
        'Content-Type': 'application/json'
      };
      console.log(data);
      const {
        text,
        status
      } = await _localmodules_express_post__WEBPACK_IMPORTED_MODULE_4___default()('/user/register', headers, data);
      console.log("Status", status);
      console.log(text);

      if (status === 200) {
        console.log('Successfully posted...');
        _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute('/user/success');
      }
    });
  }

  render() {
    console.log(this.state.res);
    return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      verticalAlign: "middle"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 2
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 12
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h2",
      color: "blue",
      textAlign: "center",
      style: {
        margin: '35px 35px'
      }
    }, this.state.res), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.onSubmit
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, __jsx("label", null, "First Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "text",
      placeholder: "First Name",
      value: this.state.first,
      onChange: event => this.setState({
        first: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, __jsx("label", null, "Middle Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "text",
      placeholder: "Middle Name",
      value: this.state.middle,
      onChange: event => this.setState({
        middle: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, __jsx("label", null, "Last Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Last Name",
      type: "text",
      value: this.state.last,
      onChange: event => this.setState({
        last: event.target.value
      })
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      width: 8
    }, __jsx("label", null, "House"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "House",
      type: "text",
      value: this.state.house,
      onChange: event => this.setState({
        house: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      width: 8
    }, __jsx("label", null, "Area"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Area",
      type: "text",
      value: this.state.area,
      onChange: event => this.setState({
        area: event.target.value
      })
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      width: 6
    }, __jsx("label", null, "District"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "District",
      type: "text",
      value: this.state.district,
      onChange: event => this.setState({
        district: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      width: 6
    }, __jsx("label", null, "State"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "State",
      type: "text",
      value: this.state.state,
      onChange: event => this.setState({
        state: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      width: 4
    }, __jsx("label", null, "Pin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Pin",
      value: this.state.pin,
      onChange: event => this.setState({
        pin: event.target.value
      })
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, __jsx("label", null, "Email"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Email",
      type: "email",
      value: this.state.email,
      onChange: event => this.setState({
        email: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, __jsx("label", null, "Aadhar"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Aadhar",
      value: this.state.aadhar,
      onChange: event => this.setState({
        aadhar: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, __jsx("label", null, "Phone"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Phone",
      value: this.state.phone,
      onChange: event => this.setState({
        phone: event.target.value
      })
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, __jsx("label", null, "Password"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Password",
      type: "password",
      value: this.state.password,
      onChange: event => this.setState({
        password: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, __jsx("label", null, "Confirm Password"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Confirm Password",
      type: "password",
      value: this.state.confirm_pass,
      onChange: event => this.setState({
        confirm_pass: event.target.value
      })
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true
    }, "Submit"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 2
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/shops/:address', '/shops/show').add('/shops/:address/payment', '/shops/payment').add('/:headerToken', '/');
module.exports = routes;

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/user/register.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zoro/Documents/Programming/JS/ration/ration-react/pages/user/register.js */"./pages/user/register.js");


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
//# sourceMappingURL=register.js.map
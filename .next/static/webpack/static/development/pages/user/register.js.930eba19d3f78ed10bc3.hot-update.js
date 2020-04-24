webpackHotUpdate("static/development/pages/user/register.js",{

/***/ "./pages/user/register.js":
/*!********************************!*\
  !*** ./pages/user/register.js ***!
  \********************************/
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
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../localmodules/express_post */ "./localmodules/express_post.js");
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _localmodules_location_location_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../localmodules/location/location_dropdown */ "./localmodules/location/location_dropdown.js");
/* harmony import */ var _localmodules_location_location_dropdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_localmodules_location_location_dropdown__WEBPACK_IMPORTED_MODULE_13__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var RegisterForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RegisterForm, _Component);

  function RegisterForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RegisterForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RegisterForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function _callee(event) {
      var _this$state, password, confirm_pass, email, pin, house, area, district, state, phone, first, middle, last, aadhar, data, headers, _ref, text, status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _this$state = _this.state, password = _this$state.password, confirm_pass = _this$state.confirm_pass, email = _this$state.email, pin = _this$state.pin, house = _this$state.house, area = _this$state.area, district = _this$state.district, state = _this$state.state, phone = _this$state.phone, first = _this$state.first, middle = _this$state.middle, last = _this$state.last, aadhar = _this$state.aadhar;
              data = {
                name: {
                  first: first,
                  middle: middle,
                  last: last
                },
                password: password,
                confirm_pass: confirm_pass,
                email: email,
                address: {
                  house: house,
                  area: area,
                  district: district,
                  state: state,
                  pin: pin,
                  phone: phone
                },
                aadhar: aadhar
              };
              if (_this.state.middle === '') delete data.name.middle;
              headers = {
                'Content-Type': 'application/json'
              };
              console.log(data);
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_12___default()('/user/register', headers, data));

            case 8:
              _ref = _context.sent;
              text = _ref.text;
              status = _ref.status;
              console.log("Status", status);
              console.log(text);

              if (status === 200) {
                console.log('Successfully posted...');
                _routes__WEBPACK_IMPORTED_MODULE_11__["Router"].pushRoute('/user/success');
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RegisterForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        verticalAlign: "middle"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 2
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 12
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        as: "h2",
        color: "blue",
        textAlign: "center",
        style: {
          margin: '35px 35px'
        }
      }, this.state.res), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.onSubmit
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        widths: "equal"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "First Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "text",
        placeholder: "First Name",
        value: this.state.first,
        onChange: function onChange(event) {
          return _this2.setState({
            first: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "Middle Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "text",
        placeholder: "Middle Name",
        value: this.state.middle,
        onChange: function onChange(event) {
          return _this2.setState({
            middle: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "Last Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Last Name",
        type: "text",
        value: this.state.last,
        onChange: function onChange(event) {
          return _this2.setState({
            last: event.target.value
          });
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        widths: "equal"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "House"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "House",
        type: "text",
        value: this.state.house,
        onChange: function onChange(event) {
          return _this2.setState({
            house: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "Area"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        options: this.props.blockList,
        placeholder: "Area" //value={this.state.area}
        //onChange={event => this.setState({ area : event.target.value })}

      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        width: 6
      }, __jsx("label", null, "District"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "District",
        type: "text",
        value: this.state.district,
        onChange: function onChange(event) {
          return _this2.setState({
            district: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        width: 6
      }, __jsx("label", null, "State"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "State",
        type: "text",
        value: this.state.state,
        onChange: function onChange(event) {
          return _this2.setState({
            state: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        width: 4
      }, __jsx("label", null, "Pin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Pin",
        value: this.state.pin,
        onChange: function onChange(event) {
          return _this2.setState({
            pin: event.target.value
          });
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        widths: "equal"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "Email"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Email",
        type: "email",
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState({
            email: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "Aadhar"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Aadhar",
        value: this.state.aadhar,
        onChange: function onChange(event) {
          return _this2.setState({
            aadhar: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "Phone"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Phone",
        value: this.state.phone,
        onChange: function onChange(event) {
          return _this2.setState({
            phone: event.target.value
          });
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        widths: "equal"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "Password"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Password",
        type: "password",
        value: this.state.password,
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", null, "Confirm Password"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Confirm Password",
        type: "password",
        value: this.state.confirm_pass,
        onChange: function onChange(event) {
          return _this2.setState({
            confirm_pass: event.target.value
          });
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true
      }, "Submit"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 2
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var blockList = Object(_localmodules_location_location_dropdown__WEBPACK_IMPORTED_MODULE_13__["getBlocksList"])();
      console.log(blockList);
      return {
        blockList: blockList
      };
    }
  }]);

  return RegisterForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ })

})
//# sourceMappingURL=register.js.930eba19d3f78ed10bc3.hot-update.js.map
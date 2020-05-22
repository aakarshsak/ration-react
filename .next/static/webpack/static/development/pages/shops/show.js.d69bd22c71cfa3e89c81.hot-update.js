webpackHotUpdate("static/development/pages/shops/show.js",{

/***/ "./pages/shops/show.js":
/*!*****************************!*\
  !*** ./pages/shops/show.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _ethereum_shop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/shop */ "./ethereum/shop.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../localmodules/token_validate */ "./localmodules/token_validate.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _localmodules_express_get__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../localmodules/express_get */ "./localmodules/express_get.js");
/* harmony import */ var _localmodules_express_get__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_get__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ethereum_web3__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _localmodules_custom_error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../localmodules/custom_error */ "./localmodules/custom_error.js");
/* harmony import */ var _localmodules_custom_error__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_localmodules_custom_error__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../localmodules/express_post */ "./localmodules/express_post.js");
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_complaint__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/complaint */ "./components/complaint.js");
/* harmony import */ var _localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../localmodules/express_post_data */ "./localmodules/express_post_data.js");
/* harmony import */ var _localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_20__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;













var ShopShow = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ShopShow, _Component);

  function ShopShow() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ShopShow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ShopShow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      rice: '',
      wheat: '',
      arhad: '',
      kerosene: '',
      tableError: '',
      status: '',
      threeDigit: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getRation", function _callee() {
      var headers, _ref, data, status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              headers = {
                'Content-Type': 'application/json',
                'x-auth-token': _this.props.headerToken
              };
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_localmodules_express_get__WEBPACK_IMPORTED_MODULE_15___default()('/user/login/me', headers));

            case 3:
              _ref = _context.sent;
              data = _ref.data;
              status = _ref.status;
              return _context.abrupt("return", data.ration);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "verifyCurrent", function () {
      var qty = _this.state;
      var msg = '';
      var count = 0;

      if (qty.rice > 5) {
        msg = msg + "Rice";
        count++;
      }

      if (qty.wheat > 5) {
        msg = msg + ", Wheat";
        if (count === 0) msg = 'Wheat';
        count++;
      }

      if (qty.arhad > 5) {
        msg = msg + ", Arhad";
        if (count === 0) msg = 'Arhad';
        count++;
      }

      if (qty.kerosene > 5) {
        msg = msg + ", Kerosene";
        if (count === 0) msg = 'Kerosene';
        count++;
      }

      if (count > 0) {
        throw new _localmodules_custom_error__WEBPACK_IMPORTED_MODULE_17___default.a("Quantity of ".concat(msg, " exceeds the maximum quantity allowed per month."));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "verifyPrevious", function _callee2() {
      var dateIns, date, threeDigit, ration, data, headers, _ref2, text, status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dateIns = new Date();
              date = dateIns.toLocaleDateString() + '(' + dateIns.getHours() + ':' + dateIns.getMinutes() + ')';
              threeDigit = 'OD20M05' + _this.props.blockName.substring(0, 3) + Math.floor(Math.random() * Math.floor(1000));
              _context2.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_this.getRation());

            case 5:
              ration = _context2.sent;
              data = {
                rice: _this.state.rice,
                wheat: _this.state.wheat,
                arhad: _this.state.arhad,
                kerosene: _this.state.kerosene,
                ration: ration,
                date: date,
                orderid: threeDigit,
                fpdName: _this.props.fpdName
              };
              headers = {
                'Content-Type': 'application/json'
              };
              _context2.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_18___default()('/record/verify', headers, data));

            case 10:
              _ref2 = _context2.sent;
              text = _ref2.text;
              status = _ref2.status;
              console.log(status, "Func");

              if (!(status === 400)) {
                _context2.next = 17;
                break;
              }

              _this.setState({
                status: status
              });

              throw new _localmodules_custom_error__WEBPACK_IMPORTED_MODULE_17___default.a(text);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "saveToMongo", function _callee3() {
      var dateIns, date, threeDigit, ration, data, headers, _ref3, text, status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dateIns = new Date();
              date = dateIns.toLocaleDateString() + '(' + dateIns.getHours() + ':' + dateIns.getMinutes() + ')';
              threeDigit = 'OD20M05' + _this.props.blockName.substring(0, 3) + Math.floor(Math.random() * Math.floor(1000));

              _this.setState({
                threeDigit: threeDigit
              });

              _context3.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_this.getRation());

            case 6:
              ration = _context3.sent;
              data = {
                rice: _this.state.rice,
                wheat: _this.state.wheat,
                arhad: _this.state.arhad,
                kerosene: _this.state.kerosene,
                ration: ration,
                date: date,
                orderid: threeDigit,
                fpdName: _this.props.fpdName
              };
              headers = {
                'Content-Type': 'application/json'
              };
              _context3.next = 11;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_18___default()('/record', headers, data));

            case 11:
              _ref3 = _context3.sent;
              text = _ref3.text;
              status = _ref3.status;

              if (status !== 400) {
                _this.setState({
                  tableError: 'Success'
                });
              }

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onClick", function _callee4() {
      var dateIns, date, threeDigit, ration, accounts, s;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;

              _this.setState({
                tableError: ''
              });

              _this.verifyCurrent();

              _context4.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_this.verifyPrevious());

            case 5:
              console.log(_this.state.status);

              if (_this.state.status === 400) {
                _context4.next = 20;
                break;
              }

              dateIns = new Date();
              date = dateIns.toLocaleDateString() + '(' + dateIns.getHours() + ':' + dateIns.getMinutes() + ')';
              threeDigit = 'OD20M05' + _this.props.blockName.substring(0, 3) + Math.floor(Math.random() * Math.floor(1000));
              _context4.next = 12;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_this.getRation());

            case 12:
              ration = _context4.sent;
              _context4.next = 15;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_16___default.a.eth.getAccounts());

            case 15:
              accounts = _context4.sent;
              s = Object(_ethereum_shop__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.props.address);
              _context4.next = 19;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(s.methods.purchase(ration, threeDigit, date, _this.state.kerosene, _this.state.rice, _this.state.wheat, _this.state.arhad).send({
                from: accounts[0],
                value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_16___default.a.utils.toWei('72', 'wei')
              }));

            case 19:
              _this.saveToMongo();

            case 20:
              _context4.next = 25;
              break;

            case 22:
              _context4.prev = 22;
              _context4.t0 = _context4["catch"](0);

              _this.setState({
                tableError: _context4.t0.message
              });

            case 25:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 22]]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderComment", function () {
      var data = ['a', 'b', 'c'];

      var comments = _this.props.dataComplaint.map(function (item, index) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Comment"], {
          key: index
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Comment"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Comment"].Author, {
          as: "a"
        }, "Matt"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Comment"].Metadata, null, __jsx("div", null, "Today at 5:42PM")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Comment"].Text, null, "How artistic!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Comment"].Actions, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Comment"].Action, null, "Reply"))));
      });

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Comment"].Group, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h3",
        dividing: true
      }, "Complaints"), comments, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        reply: true,
        onSubmit: _this.postComplaint
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].TextArea, {
        value: _this.state.currentComment,
        onChange: function onChange(e) {
          return _this.setState({
            currentComment: e.target.value
          });
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        content: "Add Reply",
        labelPosition: "left",
        icon: "edit",
        primary: true
      })));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ShopShow, [{
    key: "renderTable",
    value: function renderTable() {
      var _this2 = this;

      var items = this.props.items;

      var tableRows = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Body, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[0].name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[0].quantity), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[0].price), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "5 Kg"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "number",
        placeholder: "Quantity",
        value: this.state.rice,
        onChange: function onChange(event) {
          return _this2.setState({
            rice: event.target.value
          });
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[1].name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[1].quantity), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[1].price), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "5 Kg"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "number",
        placeholder: "Quantity",
        value: this.state.wheat,
        onChange: function onChange(event) {
          return _this2.setState({
            wheat: event.target.value
          });
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[2].name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[2].quantity), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[2].price), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "5 Kg"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "number",
        placeholder: "Quantity",
        value: this.state.arhad,
        onChange: function onChange(event) {
          return _this2.setState({
            arhad: event.target.value
          });
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[3].name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[3].quantity), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, items[3].price), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "5 ltr"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "number",
        placeholder: "Quantity",
        value: this.state.kerosene,
        onChange: function onChange(event) {
          return _this2.setState({
            kerosene: event.target.value
          });
        }
      }))));

      return __jsx("div", null, __jsx("h3", null, __jsx("strong", null, "STOCK STATEMENT")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, null, "Item Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, null, "Stock"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, null, "Price(per KG)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, null, "Maximum Quantity Per Month"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, null, "Buying Quantity"))), tableRows), this.renderTableError());
    }
  }, {
    key: "renderCard",
    value: function renderCard() {
      var items = [{
        header: this.props.shopName,
        description: 'SHOP NAME',
        meta: 'This is the name of the shop.'
      }, {
        header: this.props.fpdName,
        description: 'FDP NUMBER',
        meta: 'This is the name of the shop.'
      }, {
        header: this.props.managerName,
        description: 'MANAGER NAME',
        meta: 'This is the name of the shop.'
      }];
      return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Group, {
        items: items,
        itemsPerRow: 3
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Group, {
        itemsPerRow: 2
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Header, null, this.props.addr), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Meta, null, "This is the name of the shop."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Description, null, "SHOP ADDRESS"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Header, null, this.props.blockName), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Meta, null, "This is the name of the block."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Description, null, "BLOCK NAME")))));
    }
  }, {
    key: "renderRecordButton",
    value: function renderRecordButton() {
      return __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "/".concat(this.props.headerToken, "/shops/record/").concat(this.props.currentAddress)
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "blue"
      }, "View Previous Record Details")));
    }
  }, {
    key: "renderTableError",
    value: function renderTableError() {
      if (this.state.tableError === '') return null;else if (this.state.tableError === 'Success') return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
        color: "green"
      }, "Payment Successful.   Total Amount Paid is Rs.".concat(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.rice) * 2 + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.wheat) * 4 + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.arhad) * 3 + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.kerosene) * 5, ".   Order ID : ").concat(this.state.threeDigit));
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
        color: "red"
      }, this.state.tableError);
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "blue",
        onClick: this.onClick
      }, "Make Payment");
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        headerToken: this.props.headerToken,
        loggedIn: this.props.loggedIn
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        style: {
          color: '#2185D0'
        },
        columns: 1
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, null, this.renderTable())), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, null, this.renderButton())), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, null, this.renderCard())), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, null, this.renderRecordButton()))), this.renderComment());
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var _validate, headerToken, loggedIn, headers, _ref4, data, status, address, s, details, dataInp, headersNew, dataComplaint;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInitialProps$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _validate = _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_14___default()(props.query.headerToken), headerToken = _validate.headerToken, loggedIn = _validate.loggedIn;
              headers = {
                'Content-Type': 'application/json',
                'x-auth-token': headerToken
              };
              _context5.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_localmodules_express_get__WEBPACK_IMPORTED_MODULE_15___default()('/user/login/me/blockName', headers));

            case 4:
              _ref4 = _context5.sent;
              data = _ref4.data;
              status = _ref4.status;
              address = props.query.address;
              s = Object(_ethereum_shop__WEBPACK_IMPORTED_MODULE_11__["default"])(address);
              _context5.next = 11;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(s.methods.getDetails().call());

            case 11:
              details = _context5.sent;
              console.log(details[5]);
              dataInp = {
                fpdName: details[5]
              };
              headersNew = {
                'Content-Type': 'application/json'
              };
              _context5.next = 17;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_20___default()('/complaints/list', headers, dataInp).data);

            case 17:
              dataComplaint = _context5.sent;
              console.log(dataComplaint.record, 'insidemethods'); // const dataComplaint = ['a', 'b', 'c'];

              console.log(dataComplaint);
              return _context5.abrupt("return", {
                managerName: details[0],
                items: [{
                  quantity: details[1],
                  name: 'Rice',
                  price: '2'
                }, {
                  quantity: details[2],
                  name: 'Wheat',
                  price: '4'
                }, {
                  quantity: details[3],
                  name: 'Arhad',
                  price: '3'
                }, {
                  quantity: details[4],
                  name: 'Kerosene',
                  price: '5'
                }],
                fpdName: details[5],
                shopName: details[6],
                manager: details[7],
                addr: details[8],
                currentAddress: address,
                headerToken: headerToken,
                loggedIn: loggedIn,
                blockName: data.area,
                address: address,
                dataComplaint: dataComplaint.record
              });

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return ShopShow;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShopShow);

/***/ })

})
//# sourceMappingURL=show.js.d69bd22c71cfa3e89c81.hot-update.js.map
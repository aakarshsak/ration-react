webpackHotUpdate("static/development/pages/shops/record.js",{

/***/ "./pages/shops/record.js":
/*!*******************************!*\
  !*** ./pages/shops/record.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreviousRecord; });
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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../localmodules/token_validate */ "./localmodules/token_validate.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _localmodules_express_get__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../localmodules/express_get */ "./localmodules/express_get.js");
/* harmony import */ var _localmodules_express_get__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_get__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ethereum_shop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/shop */ "./ethereum/shop.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var PreviousRecord = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PreviousRecord, _Component);

  function PreviousRecord() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PreviousRecord);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PreviousRecord)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getHolderName", function _callee(aadhar) {
      var headers, _ref, data, status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              headers = {
                'Content-Type': 'application/json',
                'body': aadhar
              };
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_localmodules_express_get__WEBPACK_IMPORTED_MODULE_12___default()('/user/login/me/name', headers));

            case 3:
              _ref = _context.sent;
              data = _ref.data;
              status = _ref.status;
              return _context.abrupt("return", data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PreviousRecord, [{
    key: "renderTable",
    value: function renderTable() {
      var tableRows = this.props.items.map(function (item, index) {
        return __jsx(Table.Row, {
          key: index
        }, __jsx(Table.Cell, null, item.name), __jsx(Table.Cell, null, item.quantity), __jsx(Table.Cell, null, 10));
      });
      return __jsx("div", null, __jsx("h3", null, __jsx("strong", null, "STOCK STATEMENT")), __jsx(Table, null, __jsx(Table.Header, null, __jsx(Table.Row, null, __jsx(Table.HeaderCell, null, "SLNO."), __jsx(Table.HeaderCell, null, "Holder Name"), __jsx(Table.HeaderCell, null, "Rice"), __jsx(Table.HeaderCell, null, "Wheat"), __jsx(Table.HeaderCell, null, "Arhad"), __jsx(Table.HeaderCell, null, "Kerosene"), __jsx(Table.HeaderCell, null, "Date(Time)"))), __jsx(Table.Body, null, tableRows)));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        loggedIn: this.props.loggedIn,
        headerToken: this.props.headerToken
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
        as: "h2",
        textAlign: "center",
        style: {
          color: '#2185d0'
        }
      }, "RECORD TIMESTAMP"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var _validate, headerToken, loggedIn, address, shop, recordLength;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _validate = _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_10___default()(props.query.headerToken), headerToken = _validate.headerToken, loggedIn = _validate.loggedIn;
              address = props.query.address;
              shop = Object(_ethereum_shop__WEBPACK_IMPORTED_MODULE_13__["default"])(address);
              _context2.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(shop.methods.recordCount().call());

            case 5:
              recordLength = _context2.sent;
              // const records = await Promise.all(
              //     Array(parseInt(recordLength))
              //       .fill()
              //       .map((element, index) => {
              //         return shop.methods.recordList(index).call();
              //       })
              //   );
              console.log(recordLength);
              return _context2.abrupt("return", {
                headerToken: headerToken,
                loggedIn: loggedIn,
                address: address
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return PreviousRecord;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=record.js.f7a6d53a1a02181d7cfa.hot-update.js.map
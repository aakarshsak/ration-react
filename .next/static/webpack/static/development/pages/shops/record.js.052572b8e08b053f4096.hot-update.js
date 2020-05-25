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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../localmodules/token_validate */ "./localmodules/token_validate.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../localmodules/express_post */ "./localmodules/express_post.js");
/* harmony import */ var _localmodules_express_post__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../localmodules/express_post_data */ "./localmodules/express_post_data.js");
/* harmony import */ var _localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ethereum_shop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/shop */ "./ethereum/shop.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








var PreviousRecord = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PreviousRecord, _Component);

  function PreviousRecord() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PreviousRecord);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PreviousRecord).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PreviousRecord, [{
    key: "renderTable",
    value: function renderTable() {
      var _this = this;

      var tableRows = this.props.records.map(function (item, index) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row, {
          key: index
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, _this.props.records.length - index), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, _this.props.nameList[index]), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, item.rice), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, item.wheat), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, item.arhad), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, item.kerosene), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, item.date.substring(0, item.date.indexOf('('))));
      });
      return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "SLNO."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "Holder Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "Rice"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "Wheat"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "Arhad"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "Sugar"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "Date"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Body, null, tableRows.reverse())));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        loggedIn: this.props.loggedIn,
        headerToken: this.props.headerToken
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        as: "h2",
        textAlign: "center",
        style: {
          color: '#2185d0'
        }
      }, "RECORD TIMESTAMP"), this.renderTable());
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var _validate, headerToken, loggedIn, address, shop, fpdNameValue, dataInp, headers, _ref, data, status, records, nameList, i, _data, _headers, _ref2, text, _status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _validate = _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_8___default()(props.query.headerToken), headerToken = _validate.headerToken, loggedIn = _validate.loggedIn;
              address = props.query.address;
              console.log(address);
              shop = Object(_ethereum_shop__WEBPACK_IMPORTED_MODULE_12__["default"])(address);
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(shop.methods.fpdName().call());

            case 6:
              fpdNameValue = _context.sent;
              dataInp = {
                fpdName: fpdNameValue
              };
              headers = {
                'Content-Type': 'application/json'
              };
              _context.next = 11;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_11___default()('/record/record_list', headers, dataInp));

            case 11:
              _ref = _context.sent;
              data = _ref.data;
              status = _ref.status;
              records = data['result'];
              nameList = [];
              i = 0;

            case 17:
              if (!(i < records.length)) {
                _context.next = 29;
                break;
              }

              _data = {
                ration: records[i].ration
              };
              _headers = {
                'Content-Type': 'application/json'
              };
              _context.next = 22;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_localmodules_express_post__WEBPACK_IMPORTED_MODULE_10___default()('/user/login/me/name', _headers, _data));

            case 22:
              _ref2 = _context.sent;
              text = _ref2.text;
              _status = _ref2.status;
              nameList[i] = text;

            case 26:
              i++;
              _context.next = 17;
              break;

            case 29:
              console.log(nameList);
              return _context.abrupt("return", {
                headerToken: headerToken,
                loggedIn: loggedIn,
                address: address,
                records: records,
                nameList: nameList
              });

            case 31:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return PreviousRecord;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); // const recordLength = await shop.methods.recordCount().call();
// const rice = await shop.methods.rice().call();
// const wheat = await shop.methods.wheat().call();
// const arhad = await shop.methods.arhad().call();
// const kerosene = await shop.methods.kerosene().call();
// console.log(rice, wheat, arhad, kerosene);
// const records = await Promise.all(
//     Array(parseInt(recordLength))
//       .fill()
//       .map((element, index) => {
//         return shop.methods.recordList(index).call();
//       })
//   );




/***/ })

})
//# sourceMappingURL=record.js.052572b8e08b053f4096.hot-update.js.map
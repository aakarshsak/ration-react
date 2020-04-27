webpackHotUpdate("static/development/pages/shops/show.js",{

/***/ "./pages/shops/show.js":
/*!*****************************!*\
  !*** ./pages/shops/show.js ***!
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _ethereum_shop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ethereum/shop */ "./ethereum/shop.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../localmodules/token_validate */ "./localmodules/token_validate.js");
/* harmony import */ var _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var ShopShow = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ShopShow, _Component);

  function ShopShow() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ShopShow);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ShopShow).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ShopShow, [{
    key: "renderTable",
    value: function renderTable() {
      var tableRows = this.props.items.map(function (item) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, item.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, item.quantity), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell, null, 10));
      });
      return __jsx("div", null, __jsx("h3", null, __jsx("strong", null, "STOCK STATEMENT")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "Item Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "Stock"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "Price(per KG)"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Body, null, tableRows)));
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
      var desc = [{
        header: this.props.blockName,
        description: 'BLOCK NAME',
        meta: 'This is the name of the block.'
      }, {
        header: this.props.addr,
        description: 'SHOP ADDRESS',
        meta: 'This is the name of the shop.',
        fluid: true
      }];
      return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: items,
        itemsPerRow: 3
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: desc
      }));
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      return __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/shops/".concat(this.props.currentAddress, "/payment")
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        color: "blue"
      }, "Make Payment")));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        headerToken: this.props.headerToken,
        loggedIn: this.props.loggedIn
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        style: {
          color: '#2185D0'
        },
        columns: 1
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, this.renderCard())), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, this.renderTable())), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, this.renderButton()))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var _validate, headerToken, loggedIn, address, s, details, blockName;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _validate = _localmodules_token_validate__WEBPACK_IMPORTED_MODULE_11___default()(props.query.headerToken), headerToken = _validate.headerToken, loggedIn = _validate.loggedIn;
              address = props.query.address;
              s = Object(_ethereum_shop__WEBPACK_IMPORTED_MODULE_8__["default"])(address);
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(s.methods.getDetails().call());

            case 5:
              details = _context.sent;
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(s.methods.blockName().call());

            case 8:
              blockName = _context.sent;
              return _context.abrupt("return", {
                managerName: details[0],
                items: [{
                  quantity: details[1],
                  name: 'Rice'
                }, {
                  quantity: details[2],
                  name: 'Wheat'
                }, {
                  quantity: details[3],
                  name: 'Arhad'
                }, {
                  quantity: details[4],
                  name: 'Kerosene'
                }],
                fpdName: details[5],
                shopName: details[6],
                manager: details[7],
                addr: details[8],
                currentAddress: address,
                headerToken: headerToken,
                loggedIn: loggedIn,
                blockName: blockName
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return ShopShow;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShopShow);

/***/ })

})
//# sourceMappingURL=show.js.9d6d0c0fb91cd53f08a8.hot-update.js.map
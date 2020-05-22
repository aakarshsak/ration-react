webpackHotUpdate("static/development/pages/shops/show.js",{

/***/ "./components/complaint.js":
/*!*********************************!*\
  !*** ./components/complaint.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentExampleComment; });
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
/* harmony import */ var _localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../localmodules/express_post_data */ "./localmodules/express_post_data.js");
/* harmony import */ var _localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_10__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var CommentExampleComment = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CommentExampleComment, _Component);

  function CommentExampleComment() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CommentExampleComment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CommentExampleComment)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      currentComment: '',
      data: null,
      status: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getInit", function _callee() {
      var dataInp, headers, _ref, data, status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(_this.props.fpdName);
              dataInp = {
                fpdName: _this.props.fpdName
              };
              headers = {
                'Content-Type': 'application/json'
              };
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_localmodules_express_post_data__WEBPACK_IMPORTED_MODULE_10___default()('/complaints/list', headers, dataInp));

            case 5:
              _ref = _context.sent;
              data = _ref.data;
              status = _ref.status;
              return _context.abrupt("return", {
                data: data['record'],
                status: status
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "postComplaint", function (event) {
      event.preventDefault();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CommentExampleComment, [{
    key: "componentDidMount",
    value: function componentDidMount(props) {
      var _ref2, data, status;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('name');
              _context2.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getInit());

            case 3:
              _ref2 = _context2.sent;
              data = _ref2.data;
              status = _ref2.status;
              console.log(data);
              this.setState({
                data: data,
                status: status
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    } // constructor(props){
    //     super(props);
    //     const { data, status } = this.getInit();
    //     console.log(data, 'insideconstructor');
    //     this.state = {
    //         currentComment : '',
    //         data,
    //         status
    //     }
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var d = ['a', 'b', 'c'];
      var data = this.state.data;
      console.log(data, d, 'inrender');
      var comments = data.map(function (item, index) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Comment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Comment"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Comment"].Author, {
          as: "a"
        }, "Matt"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Comment"].Metadata, null, __jsx("div", null, "Today at 5:42PM")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Comment"].Text, null, "How artistic!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Comment"].Actions, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Comment"].Action, null, "Reply"))));
      });
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Comment"].Group, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        as: "h3",
        dividing: true
      }, "Complaints"), comments, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        reply: true,
        onSubmit: this.postComplaint
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].TextArea, {
        value: this.state.currentComment,
        onChange: function onChange(e) {
          return _this2.setState({
            currentComment: e.target.value
          });
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        content: "Add Reply",
        labelPosition: "left",
        icon: "edit",
        primary: true
      })));
    }
  }]);

  return CommentExampleComment;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=show.js.acbe3751584c8ee39b2e.hot-update.js.map
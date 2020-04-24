webpackHotUpdate("static/development/pages/user/register.js",{

/***/ "./localmodules/express_post.js":
/*!**************************************!*\
  !*** ./localmodules/express_post.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var _JSON$stringify = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");

var fetch = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");

var post = function post(url, headers, data) {
  var options, newUrl, res, text, status;
  return _regeneratorRuntime.async(function post$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = {
            method: 'post',
            headers: headers,
            body: _JSON$stringify(data)
          };
          newUrl = 'http://localhost:7800' + url;
          _context.next = 4;
          return _regeneratorRuntime.awrap(fetch(newUrl, options));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return _regeneratorRuntime.awrap(res.text());

        case 7:
          text = _context.sent;
          _context.next = 10;
          return _regeneratorRuntime.awrap(res.status);

        case 10:
          status = _context.sent;
          return _context.abrupt("return", {
            text: text,
            status: status
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = post;

/***/ })

})
//# sourceMappingURL=register.js.930cf370a433366ba22a.hot-update.js.map
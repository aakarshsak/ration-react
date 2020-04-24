webpackHotUpdate("static/development/pages/user/register.js",{

/***/ "./localmodules/location/location_dropdown.js":
/*!****************************************************!*\
  !*** ./localmodules/location/location_dropdown.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Countries = __webpack_require__(/*! ./countries.json */ "./localmodules/location/countries.json")['countries'];

var States = __webpack_require__(/*! ./states.json */ "./localmodules/location/states.json")['states'];

var Cities = __webpack_require__(/*! ./citiesFixed.json */ "./localmodules/location/citiesFixed.json")['cities'];

var Blocks = __webpack_require__(/*! ./blocks.json */ "./localmodules/location/blocks.json")['blocks'];

var matchCountry = function matchCountry(name) {
  var matchedCountry = {
    id: null,
    phoneCode: null
  };

  var func = function func(item, index) {
    if (name === item['name']) {
      matchedCountry.id = item.id;
      matchedCountry.phoneCode = item.phoneCode;
    }
  };

  Countries.forEach(func);
  return matchedCountry;
};

var matchState = function matchState(name, id) {
  var matchedState = {
    id: null,
    name: null
  };

  var func = function func(item, index) {
    if (name === item['name'] && id === item['country_id']) {
      matchedState.id = item.id;
      matchedState.name = item.name;
    }
  };

  States.forEach(func);
  return matchedState;
};

var matchCity = function matchCity(name, id) {
  var matchedCity = {
    id: null,
    name: null
  };

  var func = function func(item, index) {
    if (name === item['name'] && item['state_id'] === id) {
      matchedCity.id = item.id;
      matchedCity.name = item.name;
    }
  };

  Cities.forEach(func);
  return matchedCity;
};

var getCountryList = function getCountryList() {
  var countryList = [];

  var func = function func(item, index) {
    countryList.push(item.name);
  };

  Countries.forEach(func);
  return {
    countryList: countryList
  };
};

var getStateList = function getStateList(id) {
  var stateList = [];

  var func = function func(item, index) {
    if (id === item.country_id) {
      stateList.push(item.name);
    }
  };

  States.forEach(func);
  return {
    stateList: stateList
  };
};

var getCityList = function getCityList(id) {
  var cityList = [];

  var func = function func(item) {
    if (id === item.state_id) {
      cityList.push(item.name);
    }
  };

  Cities.forEach(func);
  return {
    cityList: cityList
  };
};

var getBlocksList = function getBlocksList() {
  var blockList = [];

  var func = function func(item) {
    var obj = {
      key: '',
      value: '',
      text: '',
      shops: ''
    };
    obj.key = item.id;
    obj.value = item.name;
    obj.text = item.name;
    obj.shops = item.shops;
    blockList.push(obj);
  };

  Blocks.forEach(func);
  return {
    blockList: blockList
  };
};

module.exports = {
  getCountryList: getCountryList,
  getStateList: getStateList,
  getCityList: getCityList,
  getBlocksList: getBlocksList,
  matchCountry: matchCountry,
  matchState: matchState,
  matchCity: matchCity
};

/***/ })

})
//# sourceMappingURL=register.js.6a3a87ae60d9d518e054.hot-update.js.map
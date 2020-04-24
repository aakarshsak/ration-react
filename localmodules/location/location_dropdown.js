const Countries = require('./countries.json')['countries'];
const States = require('./states.json')['states'];
const Cities = require('./citiesFixed.json')['cities'];


const matchCountry = (name) => {
    let matchedCountry = {id : null, phoneCode : null};
    const func = (item, index) => {
        if(name === item['name']){
            matchedCountry.id = item.id;
            matchedCountry.phoneCode = item.phoneCode;

        }
    }

    Countries.forEach(func);
    return matchedCountry;
}

const matchState = (name, id) => {
    let matchedState = {id : null, name : null};
    const func = (item, index) => {
        if(name === item['name'] && id === item['country_id']){
            matchedState.id = item.id;
            matchedState.name = item.name;

        }
    }

    States.forEach(func);
    return matchedState;
}

const matchCity = (name, id) => {
    let matchedCity = {id : null, name : null};
    const func = (item, index) => {
        if(name === item['name'] && item['state_id'] === id){
            matchedCity.id = item.id;
            matchedCity.name = item.name;

        }
    }

    Cities.forEach(func);
    return matchedCity;
}

const getCountryList = () => {
    let countryList = [];
    const func = (item, index) => {
        countryList.push(item.name);
    }

    Countries.forEach(func);
    return { countryList };
}

const getStateList = (id) => {
    let stateList = [];
    const func = (item, index) => {
        if(id === item.country_id){
            stateList.push(item.name);
        }
    }

    States.forEach(func);
    return { stateList };
}

const getCityList = (id) => {
    let cityList = [];
    const func = (item, index) => {
        if(id === item.state_id && item.name[0] === 'T'){
            cityList.push(item.name);
        }
    }

    Cities.forEach(func);
    return { cityList };
}


module.exports = {
    getCountryList,
    getStateList,
    getCityList,
    matchCountry,
    matchState,
    matchCity
};
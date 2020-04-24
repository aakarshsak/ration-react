const Countries = require('./countries.json')['countries'];
const States = require('./states.json')['states'];
const Cities = require('./citiesFixed.json')['cities'];
const Blocks = require('./blocks.json')['blocks'];



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
        let obj = {
            key : '',
            value : '',
            text : '',
        }
        obj.key = item.id;
        obj.value = item.name;
        obj.text = item.name;
        countryList.push(obj);
    }

    Countries.forEach(func);
    return countryList;
}

const getStateList = (id) => {
    let stateList = [];
    const func = (item) => {
        if(id === item.country_id){
            let obj = {
                key : '',
                value : '',
                text : '',
            }
            obj.key = item.id;
            obj.value = item.name;
            obj.text = item.name;
            stateList.push(obj);
        }
    }
    States.forEach(func);
    return stateList;
}

const getCityList = (id) => {
    let cityList = [];
    const func = (item) => {
        if(id === item.state_id){
            let obj = {
                key : '',
                value : '',
                text : '',
            }
            obj.key = item.id;
            obj.value = item.name;
            obj.text = item.name;
            cityList.push(obj);
        }
    }

    Cities.forEach(func);
    return cityList;
}

const getBlocksList = () => {
    let blockList = [];
    
    const func = (item) => {
        let obj = {
            key : '',
            value : '',
            text : '',
            shops : ''
        }
        obj.key = item.id;
        obj.value = item.name;
        obj.text = item.name;
        obj.shops = item.shops;
        blockList.push(obj);
    }

    Blocks.forEach(func);
    return blockList;
}


module.exports = {
    getCountryList,
    getStateList,
    getCityList,
    getBlocksList,
    matchCountry,
    matchState,
    matchCity
};
import fetch from 'cross-fetch';

const get = async (url, headers) => {

    const options = {
        method : 'get',
        headers
    }

    const newUrl = 'http://localhost:7800' + url; 
    const res = await fetch(newUrl, options);
    const data = await res.json();
    const status = await res.status;

    return {
        data,
        status
    }
}

module.exports = get;
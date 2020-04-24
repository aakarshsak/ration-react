const fetch = require('cross-fetch');

const post = async (url, headers, data) => {

    const options = {
        method : 'post',
        headers,
        body : JSON.stringify(data)
    }

    const newUrl = 'http://localhost:7800' + url; 
    const res = await fetch(newUrl, options);
    const text = await res.text();
    const status = await res.status;

    return {
        text,
        status
    }
}

module.exports = post;
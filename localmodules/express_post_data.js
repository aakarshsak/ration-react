import fetch from 'cross-fetch';

const postWithData = async (url, headers, dataInp) => {

    const options = {
        method : 'post',
        headers,
        body : JSON.stringify(dataInp)
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

module.exports = postWithData;
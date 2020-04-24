const validate = (token) => {
    if(token !== undefined ){  
        if(token.length === 148){
            return { loggedIn : true, headerToken : token};
        }
    }
    return { loggedIn : false, headerToken : '' };
}

module.exports = validate;
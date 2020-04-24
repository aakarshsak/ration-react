import React, {Component} from 'react';


export default class UserDetails extends Component {


    static getInitialProps(){
        const options = {
            method : 'get',
            headers: { 
                'Content-Type':'application/json',
                'x-auth-token' : this.props.headerToken
            },
        };

        const res = await fetch('http://localhost:7800/user/login/me', options);
        const data = await res.json();
        const status = await res.status;
        console.log(data);
        console.log(status);
    }

    render(){
        return <div>This is detail.</div> 
    }



}
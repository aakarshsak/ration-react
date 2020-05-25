import React, { Component } from 'react';
import { Menu, Container, Segment, Dropdown } from 'semantic-ui-react';
import {Link, Router} from '../routes';
import validate from '../localmodules/token_validate';
import get from '../localmodules/express_get';

export default class Navbar extends Component {

    state = {
        loggedIn : this.props.loggedIn,
        user : {
            name : {first :'', middle:'', last : ''},
            address: {pin : '', state : '', house : '', phone : '', area:'', district:''},
            _id : '',
            email : '',
            aadhar : ''
        }
    }

    static getInitialProps(props) {
        return validate(props.headerToken);
    }

    componentDidMount = () => {  
        this.getUserDetails(this.props.headerToken);
    }


    logOut = (event) => {
        this.setState({ loggedIn : false });
        Router.pushRoute('/user/logout');
    }

    onProfileClick = () => {
        Router.pushRoute(`/user/details/${validate(this.props.headerToken).headerToken}`)
    }
    


    logInStatusRender = () => {

        if(this.state.loggedIn){
            return (
                <Menu.Menu position='right'>
                    <Menu.Item
                        name={this.state.user.name.first +" "+ this.state.user.name.last}
                        onClick={this.onProfileClick}                  
                    />

                    <Menu.Item 
                        name='Logout'
                        onClick={this.logOut}    
                    />
                </Menu.Menu>

            );
        }


        return (
            <Menu.Menu position="right">

                <Link route='/user/register'>
                    <a className='item'>Register</a>
                </Link>

                <Link route='/user/login'>
                    <a className='item'>Login</a>
                </Link>

            </Menu.Menu>
        );
    }

    getUserDetails = async (token) => {
        const headers = { 'Content-Type':'application/json', 'x-auth-token' : token};
        if(this.state.loggedIn){
            const {data, status} = await get('/user/login/me', headers);
            this.setState({user : data});
        }

    }




    render() {

        const { activeItem  } = this.state;
        let defaultToken;
        defaultToken = `/${validate(this.props.headerToken).headerToken}`;
        
        return (
            <Menu size='massive' inverted color='blue'>
                
                <Container>
                    <Link route={defaultToken}>
                        <a className='item'>eRation</a>
                    </Link>
                
                {this.logInStatusRender()}
                </Container>
            </Menu>
        );
    }
}
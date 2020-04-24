import React, { Component } from 'react';
import { Menu, Container, Segment, Dropdown } from 'semantic-ui-react';
import {Link, Router} from '../routes';
import validate from '../localmodules/token_validate';
import get from '../localmodules/express_get';

export default class Navbar extends Component {

    state = {
        activeItem : 'home',
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

    onClick = (event, { name })=> {
        this.setState({activeItem:name});
        console.log(name);
    }

    logOut = (event) => {
        this.setState({ loggedIn : false });
        Router.pushRoute('/user/login');
    }



    logInStatusRender = () => {
        if(this.state.loggedIn){
            return (
                <Menu.Menu position='right'>
                    <Dropdown item text={this.state.user.name.first +" "+ this.state.user.name.last}>
                        <Dropdown.Menu>
                            <Dropdown.Item>First</Dropdown.Item>
                            <Dropdown.Item>Second</Dropdown.Item>
                            <Dropdown.Item>Third</Dropdown.Item>
                            <Dropdown.Item>Fourth</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

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
            console.log(status);
            console.log(data);
            this.setState({user : data});
        }

    }




    render() {

        const { activeItem  } = this.state;
        return (
                <Menu size='massive' inverted color='blue'>
                    <Link route={`/${validate(this.props.headerToken).headerToken}`}>
                        <a className='item'>eR</a>
                    </Link>
                    <Container>
                        <Menu.Item 
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.onClick}
                        />

                        <Menu.Item 
                            name='something1'
                            active={activeItem === 'something1'}
                            onClick={this.onClick}
                        />

                        <Menu.Item 
                            name='something2'
                            active={activeItem === 'something2'}
                            onClick={this.onClick}
                        />
                    </Container>

                    {this.logInStatusRender()}
                </Menu>
        );
    }
}
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import Layout from '../../components/layout.js'
import { Router, Link } from '../../routes';
import validate from '../../localmodules/token_validate';
import post from '../../localmodules/express_post';

class LoginForm extends Component {

    state = {
        email : '',
        password : '',
        res : '',
        errorMessage : ''
    }

    callAPI = async () => {
        this.setState({errorMessage : '', res : ''});
        const data = {
            email : this.state.email,
            password : this.state.password
        };

        const headers = { 'Content-Type':'application/json' };

        try {
            const { text, status } = await post('/user/login', headers, data);
            if(status === 400){
                this.setState({ errorMessage : text, email : '', password : '' });
            }
            else if(status === 200) {
                this.setState({ res : text });
                Router.pushRoute(`/${validate(this.state.res).headerToken}`);
            }

        } catch (e) {
            console.log(e);
        }

    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.callAPI();
        // console.log ("In Submit : ", this.state.res);
        // const options = {
        //     method : 'get',
        //     headers: { 'Content-Type':'application/json', 'x-auth-token' : this.state.res },
        // };
        // const res = await fetch('http://localhost:7800/user/login/me', options);
        // const text = await JSON.stringify(res.text());
        // const status = await res.status;
        // console.log(text);
        // console.log(status);
    }


    showError = () => {
        if(this.state.errorMessage === ''){
            return null;
        }
        return <Message error header={this.state.errorMessage}></Message>;
    }

    render(){
        return (
            <Layout>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                         Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={this.onSubmit}>
                        <Segment stacked>
                        <Form.Input 
                            val = {this.state.email}
                            onChange = { event => {this.setState({email : event.target.value})}} 
                            type = 'email'
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='E-mail address' />
                        <Form.Input
                            val = {this.state.password}
                            onChange = { event => {this.setState({password : event.target.value})}} 
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Button color='blue' fluid size='large'>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Link route='/user/register'><a>Sign Up</a></Link>
                    </Message>   
                    {this.showError()}
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }

}

export default LoginForm
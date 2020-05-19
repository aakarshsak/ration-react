import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';
import Layout from '../../components/layout.js'
import { Router, Link } from '../../routes';
import validate from '../../localmodules/token_validate';
import post from '../../localmodules/express_post';

class LoginForm extends Component {

    state = {
        ration : '',
        password : '',
        res : '',
        errorMessage : ''
    }

    callAPI = async () => {
        this.setState({errorMessage : '', res : ''});
        const data = {
            ration : this.state.ration,
            password : this.state.password
        };

        const headers = { 'Content-Type':'application/json' };

        try {
            const { text, status } = await post('/user/login', headers, data);
            if(status === 400){
                this.setState({ errorMessage : text, ration : '', password : '' });
            }
            else if(status === 200) {
                this.setState({ res : text });
                this.setState({ errorMessage : "1"})
                Router.pushRoute(`/${validate(this.state.res).headerToken}`);
            }

        } catch (e) {
            console.log(e);
        }

    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.callAPI();
    }


    showError = () => {
        if(this.state.errorMessage === ''){
            return null;;
        }
        else if(this.state.errorMessage === "1"){
            return (
                <div>
                    <Message positive>
                        <Message.Header>Successfully Logged In.</Message.Header>
                    </Message>
                    <Message icon>
                        <Icon name='circle notched' loading/>
                        <Message.Content>
                        <Message.Header>Wait few second</Message.Header>
                        We are fetching content for you.
                        </Message.Content>
                    </Message>
                </div>
            );
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
                            value = {this.state.ration}
                            onChange = { event => {this.setState({ration : event.target.value})}} 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='Ration Card Number' />
                        <Form.Input
                            value = {this.state.password}
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
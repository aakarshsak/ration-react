import React, {Component} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Input, GridColumn } from 'semantic-ui-react';
import Layout from '../../components/layout.js'
import { Link, Router } from '../../routes';
import post from '../../localmodules/express_post'; 


class RegisterForm extends Component {

    state = {
            pin :'',
            house:'',
            area:'',
            district:'',
            state:'',
            phone:'',

            first : '',
            middle : '',
            last : '',


        password : '',
        confirm_pass:'',
        email : '',
        aadhar : '',
    };

    onSubmit = async (event) => {
        event.preventDefault();
        const {password, confirm_pass, email, pin, house, area, district, state, phone, first, middle, last, aadhar} = this.state;

        const data = {
            name : { first, middle, last }, 
            password, 
            confirm_pass, 
            email, 
            address : { house, area, district, state, pin, phone }, 
            aadhar
        };

        if(this.state.middle === '')
            delete data.name.middle;
        const headers = { 'Content-Type':'application/json' };
        console.log(data);
        const { text, status } = await post('/user/register', headers, data);
        console.log("Status", status);
        console.log(text);
        if(status === 200){
            console.log('Successfully posted...');
            Router.pushRoute('/user/success');
        }
    }


    render() {
        console.log(this.state.res);
        return (
            <Layout>
                <Grid verticalAlign='middle' >
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <Header as='h2' color='blue' textAlign='center' style={{margin : '35px 35px'}}>
                            {this.state.res}
                        </Header>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>First Name</label>
                                    <Input
                                        type='text'
                                        placeholder = 'First Name'
                                        value={this.state.first}
                                        onChange={event => this.setState({ first : event.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Middle Name</label>
                                    <Input
                                        type='text'
                                        placeholder = 'Middle Name'
                                        value={this.state.middle}
                                        onChange={event => this.setState({middle: event.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Last Name</label>
                                    <Input
                                        placeholder = 'Last Name'
                                        type='text'
                                        value={this.state.last}
                                        onChange={event => this.setState({last: event.target.value })}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field width={8}>
                                    <label>House</label>
                                    <Input
                                        placeholder = 'House'
                                        type='text'
                                        value={this.state.house}
                                        onChange={event => this.setState({house : event.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field width={8}>
                                    <label>Area</label>
                                    <Input
                                        placeholder = 'Area'
                                        type='text'
                                        value={this.state.area}
                                        onChange={event => this.setState({ area : event.target.value })}
                                    />
                                </Form.Field>
                                
                            </Form.Group>

                            <Form.Group>
                                <Form.Field width={6}>
                                    <label>District</label>
                                    <Input
                                        placeholder = 'District'
                                        type='text'
                                        value={this.state.district}
                                        onChange={event => this.setState({district : event.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field width={6}>
                                    <label>State</label>
                                    <Input
                                        placeholder = 'State'
                                        type='text'
                                        value={this.state.state}
                                        onChange={event => this.setState({state : event.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field width={4}>
                                    <label>Pin</label>
                                    <Input
                                        placeholder = 'Pin'
                                        value={this.state.pin}
                                        onChange={event => this.setState({ pin : event.target.value })}
                                    />
                                </Form.Field>
                            </Form.Group>

                            {/* <Form.Group>
                                <Form.Field width={8}>
                                    <label>House</label>
                                    <Input
                                        placeholder = 'House'
                                        value={this.state.address.house}
                                        onChange={event => this.setState({ address : { house : event.target.value }})}
                                    />
                                </Form.Field>
                                <Form.Field width={8}>
                                    <label>Area</label>
                                    <Input
                                        placeholder = 'Area'
                                        value={this.state.address.area}
                                        onChange={event => this.setState({ address : { area : event.target.value }})}
                                    />
                                </Form.Field>
                                
                            </Form.Group> */}

                            <Form.Group widths='equal'>
                                <Form.Field >
                                    <label>Email</label>
                                    <Input
                                        placeholder = 'Email'
                                        type = 'email'
                                        value={this.state.email}
                                        onChange={event => this.setState({ email : event.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Aadhar</label>
                                    <Input
                                        placeholder = 'Aadhar'
                                        value={this.state.aadhar}
                                        onChange={event => this.setState({ aadhar : event.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Phone</label>
                                    <Input
                                        placeholder = 'Phone'
                                        value={this.state.phone}
                                        onChange={event => this.setState({phone : event.target.value })}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field >
                                    <label>Password</label>
                                    <Input
                                        placeholder = 'Password'
                                        type = 'password'
                                        value={this.state.password}
                                        onChange={event => this.setState({ password : event.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Confirm Password</label>
                                    <Input
                                        placeholder = 'Confirm Password'
                                        type = 'password'
                                        value={this.state.confirm_pass}
                                        onChange={event => this.setState({ confirm_pass : event.target.value })}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Button primary>Submit</Button>
                            
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid>
            </Layout>
        );
    }
}

export default RegisterForm;
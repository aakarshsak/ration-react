import React, { Component } from 'react';
import Layout from '../../components/layout';
import Shop from '../../ethereum/shop';
import { Card, Table, Grid, Button, Input, Message, Form, Comment, Header } from 'semantic-ui-react';
import {  Link, Router } from '../../routes';
import validate from '../../localmodules/token_validate';
import get from '../../localmodules/express_get';
import web3 from '../../ethereum/web3';
import CustomError from '../../localmodules/custom_error';
import post from '../../localmodules/express_post';
import ComplaintComponent from '../../components/complaint';
import postWithData from '../../localmodules/express_post_data'


class ShopShow extends Component {

    state = { 
        rice : '',
        wheat : '',
        arhad : '',
        kerosene : '',
        tableError : '',
        status : '',
        threeDigit: ''
    };

    static async getInitialProps(props) {
        const { headerToken, loggedIn } = validate(props.query.headerToken);
        const headers = { 'Content-Type':'application/json', 'x-auth-token' : headerToken};
        const {data, status} = await get('/user/login/me/blockName', headers);
        const address = props.query.address;

        const s = Shop(address);
        const details = await s.methods.getDetails().call();




        console.log( details[5] );
        const dataInp = {
            fpdName : details[5] 
        }
        const headersNew = { 'Content-Type':'application/json'};
        const dataComplaint = await postWithData('/complaints/list', headers, dataInp);
        console.log(dataComplaint.data.record, 'insidemethods')
        // const dataComplaint = ['a', 'b', 'c'];
        console.log(dataComplaint.data.record);



        return { 
            managerName : details[0],
            items : [{quantity : details[1], name : 'Rice', price : '2'},
                    {quantity: details[2], name : 'Wheat', price : '4'},
                    {quantity : details[3], name : 'Arhad', price : '3'},
                    {quantity : details[4], name : 'Kerosene', price : '5'}],
            fpdName : details[5],
            shopName : details[6],
            manager : details[7],
            addr : details[8],
            currentAddress : address,
            headerToken,
            loggedIn,
            blockName : data.area,
            address,
            dataComplaint : dataComplaint.data.record
        };
    }

    

    renderTable() {
        const items = this.props.items;
        const tableRows = (
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{items[0].name}</Table.Cell>
                    <Table.Cell>{items[0].quantity}</Table.Cell>
                    <Table.Cell>{items[0].price}</Table.Cell>
                    <Table.Cell>5 Kg</Table.Cell>
                    <Table.Cell>
                        <Input
                            type='number'
                            placeholder = 'Quantity'
                            value={this.state.rice}
                            onChange={event => this.setState({ rice : event.target.value })}
                        />
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>{items[1].name}</Table.Cell>
                    <Table.Cell>{items[1].quantity}</Table.Cell>
                    <Table.Cell>{items[1].price}</Table.Cell>
                    <Table.Cell>5 Kg</Table.Cell>
                    <Table.Cell>
                        <Input
                            type='number'
                            placeholder = 'Quantity'
                            value={this.state.wheat}
                            onChange={event => this.setState({ wheat : event.target.value })}
                        />
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>{items[2].name}</Table.Cell>
                    <Table.Cell>{items[2].quantity}</Table.Cell>
                    <Table.Cell>{items[2].price}</Table.Cell>
                    <Table.Cell>5 Kg</Table.Cell>
                    <Table.Cell>
                        <Input
                            type='number'
                            placeholder = 'Quantity'
                            value={this.state.arhad}
                            onChange={event => this.setState({ arhad : event.target.value })}
                        />
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>{items[3].name}</Table.Cell>
                    <Table.Cell>{items[3].quantity}</Table.Cell>
                    <Table.Cell>{items[3].price}</Table.Cell>
                    <Table.Cell>5 ltr</Table.Cell>
                    <Table.Cell>
                        <Input
                            type='number'
                            placeholder = 'Quantity'
                            value={this.state.kerosene}
                            onChange={event => this.setState({ kerosene : event.target.value })}
                        />
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        );
        
        return (
            <div>
                <h3><strong>STOCK STATEMENT</strong></h3>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Item Name</Table.HeaderCell>
                            <Table.HeaderCell>Stock</Table.HeaderCell>
                            <Table.HeaderCell>Price(per KG)</Table.HeaderCell>
                            <Table.HeaderCell>Maximum Quantity Per Month</Table.HeaderCell>
                            <Table.HeaderCell>Buying Quantity</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {tableRows}
                
                </Table>
                {this.renderTableError()}
            </div>
        );
    }

    renderCard() {
        const items = [
            {
                header : this.props.shopName,
                description : 'SHOP NAME',
                meta : 'This is the name of the shop.'
            },
            {
                header : this.props.fpdName,
                description : 'FDP NUMBER',
                meta : 'This is the name of the shop.'
            },
            {
                header : this.props.managerName,
                description : 'MANAGER NAME',
                meta : 'This is the name of the shop.'
            },
        ];

        return (
            <div>
                <Card.Group items = {items} itemsPerRow = {3}/>
                    
                <Card.Group itemsPerRow={2}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{this.props.addr}</Card.Header>
                            <Card.Meta>This is the name of the shop.</Card.Meta>
                            <Card.Description>SHOP ADDRESS</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>{this.props.blockName}</Card.Header>
                            <Card.Meta>This is the name of the block.</Card.Meta>
                            <Card.Description>BLOCK NAME</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        );
    }

    renderRecordButton() {
        return (

            <Link route={`/${this.props.headerToken}/shops/record/${this.props.currentAddress}`}>
                <a>
                    <Button color='blue'>
                    View Previous Record Details
                    </Button>
                </a>
            </Link>

        );
    }

    getRation = async () => {
        const headers = { 'Content-Type':'application/json', 'x-auth-token' : this.props.headerToken};
        const {data, status} = await get('/user/login/me', headers);
        return data.ration;
    }

    verifyCurrent = () => {
        const qty = this.state;
        let msg = '';
        let count = 0;
        if(qty.rice > 5){
            msg = msg+"Rice";
            count++;
        }
        if(qty.wheat > 5){
            msg = msg+", Wheat";
            if(count ===0)
                msg = 'Wheat'
            count++;
        }
        if(qty.arhad > 5){
            msg = msg+", Arhad";
            if(count === 0)
                msg = 'Arhad'
            count++;
        }
        if(qty.kerosene > 5){
            msg = msg+", Kerosene";
            if(count === 0)
                msg = 'Kerosene'
            count++;
        }
        if( count > 0){
            throw new CustomError(`Quantity of ${msg} exceeds the maximum quantity allowed per month.`);
        }
    }
    renderTableError(){
        if(this.state.tableError === '')
            return null;
        else if(this.state.tableError === 'Success')
            return <Message color='green'>{`Payment Successful.   Total Amount Paid is Rs.${parseInt(this.state.rice) * 2 + parseInt(this.state.wheat)*4 + parseInt(this.state.arhad)*3 + parseInt(this.state.kerosene)*5}.   Order ID : ${this.state.threeDigit}`}</Message>;
        return <Message color='red'>{this.state.tableError}</Message>;
    }

    verifyPrevious = async () => {
        const dateIns = new Date;
        const date = dateIns.toLocaleDateString() + '(' +dateIns.getHours() +':'+ dateIns.getMinutes() + ')';
        const threeDigit = 'OD20M05' + this.props.blockName.substring(0,3) + Math.floor(Math.random() * Math.floor(1000));
        const ration = await this.getRation();
        const data = {
            rice : this.state.rice,
            wheat : this.state.wheat,
            arhad : this.state.arhad,
            kerosene : this.state.kerosene,
            ration : ration,
            date : date,
            orderid : threeDigit,
            fpdName : this.props.fpdName
        };

        const headers = { 'Content-Type':'application/json' };
        const {text, status} = await post('/record/verify', headers, data);
        console.log(status, "Func");
        if(status === 400){
            this.setState({status});
            throw new CustomError(text);
        }
        
    }

    saveToMongo = async() => {
        const dateIns = new Date;
        const date = dateIns.toLocaleDateString() + '(' +dateIns.getHours() +':'+ dateIns.getMinutes() + ')';
        const threeDigit = 'OD20M05' + this.props.blockName.substring(0,3) + Math.floor(Math.random() * Math.floor(1000));
        this.setState({threeDigit});
        const ration = await this.getRation();
        const data = {
            rice : this.state.rice,
            wheat : this.state.wheat,
            arhad : this.state.arhad,
            kerosene : this.state.kerosene,
            ration : ration,
            date : date,
            orderid : threeDigit,
            fpdName : this.props.fpdName
        };
        const headers = { 'Content-Type':'application/json' };
        const {text, status} = await post('/record', headers, data);
        if(status !== 400){
            this.setState({ tableError : 'Success' });
        }
    }

    onClick = async () => {
        try {
            this.setState({tableError : ''});
            this.verifyCurrent();
            await this.verifyPrevious();
            console.log(this.state.status);
            if(!(this.state.status === 400)){
                const dateIns = new Date;
                const date = dateIns.toLocaleDateString() + '(' +dateIns.getHours() +':'+ dateIns.getMinutes() + ')';
                const threeDigit = 'OD20M05' + this.props.blockName.substring(0,3) + Math.floor(Math.random() * Math.floor(1000));
                const ration = await this.getRation();
                const accounts = await web3.eth.getAccounts();
                const s = Shop(this.props.address);
                await s.methods
                .purchase(ration, threeDigit, date, this.state.kerosene, this.state.rice, this.state.wheat, this.state.arhad)
                .send({
                    from : accounts[0],
                    value: web3.utils.toWei('72', 'wei')
                });
                this.saveToMongo();
            }
            
        } catch(e) {
            this.setState({tableError : e.message});
        }
    }

    renderButton(){
        return (
            <Button color='blue' onClick={this.onClick}>
            Make Payment
            </Button>
    
        );
    }

    renderComment = () => {
        const data = ['a', 'b', 'c'];
        const comments = this.props.dataComplaint.map((item, index) => {
            return (
                <Comment key={index}>
                    <Comment.Content>
                    <Comment.Author as='a'>{item.name}</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                    </Comment.Content>
                </Comment>
            );
        });

        return (
            <Comment.Group>
                <Header as='h3' dividing>
                    Complaints
                </Header>
                
                {comments}
            
                <Form reply onSubmit={this.postComplaint}>
                    <Form.TextArea 
                        value={this.state.currentComment}
                        onChange = {(e) => this.setState({currentComment : e.target.value})}
                    />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
            </Comment.Group>
        );

    }


    render() {
        return (
            <Layout headerToken={this.props.headerToken} loggedIn={this.props.loggedIn}>
                <Grid style={{color:'#2185D0'}} columns={1}>
                    <Grid.Row textAlign='center'>
                        <Grid.Column>
                            {this.renderTable()}
                        </Grid.Column>  
                    </Grid.Row>
                    <Grid.Row textAlign='center'>
                        <Grid.Column>
                            {this.renderButton()}
                        </Grid.Column>  
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            {this.renderCard()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign='center'>
                        <Grid.Column>
                            {this.renderRecordButton()}
                        </Grid.Column>
                        {/* <Grid.Column>
                            {this.renderComplaintButton()}
                        </Grid.Column>    */}
                    </Grid.Row>

                    
                </Grid>
                {this.renderComment()}
            </Layout>
        );
    }
}


export default ShopShow;
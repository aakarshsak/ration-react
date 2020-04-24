import React, { Component } from 'react';
import Layout from '../../components/layout';
import Shop from '../../ethereum/shop';
import { Card, Table, Grid, Button } from 'semantic-ui-react';
import {  Link, Router } from '../../routes';


class ShopShow extends Component {

    static async getInitialProps(props) {
        const address = props.query.address;
        const s = Shop(address);
        const details = await s.methods.getDetails().call();
        return { 
            managerName : details[0],
            items : [{quantity : details[1], name : 'Rice'},
                    {quantity: details[2], name : 'Wheat'},
                    {quantity : details[3], name : 'Arhad'}],
            fpdName : details[4],
            shopName : details[5],
            manager : details[6],
            addr : details[7],
            currentAddress : address
        };
    }

    renderTable() {
        const tableRows = this.props.items.map(item => {
            return (
                <Table.Row>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>{10}</Table.Cell>
                </Table.Row>
            );
        });
        return (
            <div>
                <h3><strong>STOCK STATEMENT</strong></h3>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Item Name</Table.HeaderCell>
                            <Table.HeaderCell>Stock</Table.HeaderCell>
                            <Table.HeaderCell>Price(per KG)</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableRows}
                    </Table.Body>
                </Table>
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
            }
        ];
        const desc = [
            {       
                header : this.props.addr,
                description : 'SHOP ADDRESS',
                meta : 'This is the name of the shop.',
                fluid : true
            }
        ];

        return (
            <div>
                <Card.Group items = {items} itemsPerRow = {3}/>
                <Card.Group items = {desc}/>
            </div>
        );
    }

    renderButton(){
        return (
            <Link route={`/shops/${this.props.currentAddress}/payment`}>
                <a>
                    <Button color='blue'>
                     Make Payment
                    </Button>
                </a>
            </Link>
        );
    }


    render() {
        return (
            <Layout>
                <Grid style={{color:'#2185D0'}} columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            {this.renderCard()}
                        </Grid.Column>
                    </Grid.Row>
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
                </Grid>
            </Layout>
        );
    }
}


export default ShopShow;
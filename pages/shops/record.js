import React, { Component } from 'react';
import Layout from '../../components/layout';
import validate from '../../localmodules/token_validate';
import { Header } from 'semantic-ui-react';
import get from '../../localmodules/express_get';
import Shop from '../../ethereum/shop';


export default class PreviousRecord extends Component {

    static async getInitialProps(props) {
        const { headerToken, loggedIn } = validate(props.query.headerToken);
        const address = props.query.address;
        const shop = Shop(address);
        const recordLength = await shop.methods.recordCount().call();
        // const records = await Promise.all(
        //     Array(parseInt(recordLength))
        //       .fill()
        //       .map((element, index) => {
        //         return shop.methods.recordList(index).call();
        //       })
        //   );
        console.log(recordLength);
        return { headerToken , loggedIn, address };
    }

    getHolderName = async (aadhar) => {
        const headers = {
            'Content-Type':'application/json', 
            'body' : aadhar
        };
        const { data, status } = await get('/user/login/me/name', headers)
        return data;
    }

    renderTable() {
        const tableRows = this.props.items.map((item, index) => {
            return (
                <Table.Row key={index}>
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
                            <Table.HeaderCell>SLNO.</Table.HeaderCell>
                            <Table.HeaderCell>Holder Name</Table.HeaderCell>
                            <Table.HeaderCell>Rice</Table.HeaderCell>
                            <Table.HeaderCell>Wheat</Table.HeaderCell>
                            <Table.HeaderCell>Arhad</Table.HeaderCell>
                            <Table.HeaderCell>Kerosene</Table.HeaderCell>
                            <Table.HeaderCell>Date(Time)</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableRows}
                    </Table.Body>
                </Table>
            </div>
        );
    }

    render() {
        return (
            <Layout loggedIn={this.props.loggedIn} headerToken={this.props.headerToken}>
                <Header as='h2' textAlign='center' style={{color:'#2185d0'}}>RECORD TIMESTAMP</Header>
            </Layout>
        );
    }
}
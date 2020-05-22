import React, { Component } from 'react';
import Layout from '../../components/layout';
import validate from '../../localmodules/token_validate';
import { Header, Table, Button } from 'semantic-ui-react';
import post from '../../localmodules/express_post';
import postWithData from '../../localmodules/express_post_data';
import Shop from '../../ethereum/shop';


export default class PreviousRecord extends Component {

    static async getInitialProps(props) {
        const { headerToken, loggedIn } = validate(props.query.headerToken);
        const address = props.query.address;
        console.log(address);
        const shop = Shop(address);
        
        const fpdNameValue = await shop.methods.fpdName().call();
        const dataInp = {
            fpdName : fpdNameValue
        }
        const headers = { 'Content-Type':'application/json'};
        const {data, status} = await postWithData('/record/record_list', headers, dataInp)
        const records = data['result'];
        console.log(records);
        let nameList = [];
        for(let i=0;i<records.length;i++){
            const data = {
                ration : records[i].ration
            }
            const headers = {
                'Content-Type':'application/json'
            };
            
            const { text, status } = await post('/user/login/me/name', headers, data);
            nameList[i] = text;
        }
        console.log(nameList);
        return { headerToken , loggedIn, address, records, nameList } //, recordLength, rice, wheat, arhad, kerosene };
    }

    renderTable() {

        const tableRows = this.props.records.map((item, index) => {
            return (
                <Table.Row key={index}>
                    <Table.Cell>{this.props.records.length - index}</Table.Cell>
                    <Table.Cell>{this.props.nameList[index]}</Table.Cell>
                    <Table.Cell>{item.rice}</Table.Cell>
                    <Table.Cell>{item.wheat}</Table.Cell>
                    <Table.Cell>{item.arhad}</Table.Cell>
                    <Table.Cell>{item.kerosene}</Table.Cell>
                    <Table.Cell>{item.date.substring(0, item.date.indexOf('('))}</Table.Cell>
                    {/* <Table.Cell>{item.orderid}</Table.Cell> */}
                </Table.Row>
            );
        });
        return (
            <div>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>SLNO.</Table.HeaderCell>
                            <Table.HeaderCell>Holder Name</Table.HeaderCell>
                            <Table.HeaderCell>Rice</Table.HeaderCell>
                            <Table.HeaderCell>Wheat</Table.HeaderCell>
                            <Table.HeaderCell>Arhad</Table.HeaderCell>
                            <Table.HeaderCell>Kerosene</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            {/* <Table.HeaderCell>Order Id</Table.HeaderCell> */}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableRows.reverse()}
                    </Table.Body>
                </Table>
            </div>
        );
    }

    render() {
        return (
            <Layout loggedIn={this.props.loggedIn} headerToken={this.props.headerToken}>
                <Header as='h2' textAlign='center' style={{color:'#2185d0'}}>RECORD TIMESTAMP</Header>
                {this.renderTable()}
            </Layout>
        );
    }
}




























// const recordLength = await shop.methods.recordCount().call();
        // const rice = await shop.methods.rice().call();
        // const wheat = await shop.methods.wheat().call();
        // const arhad = await shop.methods.arhad().call();
        // const kerosene = await shop.methods.kerosene().call();
        // console.log(rice, wheat, arhad, kerosene);
        // const records = await Promise.all(
        //     Array(parseInt(recordLength))
        //       .fill()
        //       .map((element, index) => {
        //         return shop.methods.recordList(index).call();
        //       })
        //   );
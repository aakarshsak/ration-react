import React, {Component} from 'react';
import Receipt from '../../components/receipt';
import Layout from '../../components/layout';
import validate from '../../localmodules/token_validate';
import get from '../../localmodules/express_get';
import Shop from '../../ethereum/shop';

export default class ReceiptApp extends Component {

    static async getInitialProps(props){
        const { headerToken, loggedIn } = validate(props.query.headerToken);
        const headers = { 'Content-Type':'application/json', 'x-auth-token' : headerToken};
        const {data, status} = await get('/user/login/me', headers);
        const address = props.query.address;

        const transaction = props.query.transaction;
        const splitted = transaction.split('-');
        const trans = {
            rice : splitted[0],
            wheat : splitted[1],
            arhad : splitted[2],
            kerosene : splitted[3],
            orderid : splitted[4]
        }
        console.log(transaction);
        const s = Shop(address);
        const details = await s.methods.getDetails().call();
        return { data, details, trans, headerToken, loggedIn};
    }

    render(){
        return (
            <Layout headerToken={this.props.headerToken} loggedIn={this.props.loggedIn}>
                <Receipt values = {this.props} />
            </Layout>
        );
    }
}
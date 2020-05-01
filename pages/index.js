import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/layout';
import { Link } from '../routes';
import get from '../localmodules/express_get';
import validate from '../localmodules/token_validate';
import Shop from '../ethereum/shop';
import {  } from '../localmodules/location/location_dropdown';
// import jsonArray from '../localmodules/data_initialization';

class App extends Component {
    
    state = { user : null };
    static async getInitialProps(props) {

        const shops = await factory.methods.getDeployedShops().call();
        let shopList = [];
        for(let i=0;i<shops.length;i++){
            const s = Shop(shops[i]);
            const details = await s.methods.getDetails().call();
            const blockName = await s.methods.blockName().call();
            const obj = {
                details,
                address : shops[i],
                blockName
            };
            shopList.push(obj);
        }
        //console.log(shopList);
        const { loggedIn, headerToken } = validate(props.query.headerToken);

        return { shops, headerToken, loggedIn, shopList };
    }

    getUserDetails = async (token) => {
        const headers = { 'Content-Type':'application/json', 'x-auth-token' : token};
        if(this.props.loggedIn){
            const {data, status} = await get('/user/login/me', headers);
            this.setState({user : data});
        }
    }

    renderShops = () => {
        const items = this.props.shopList.map((item) => {
            return{
                header : item.details[6].toUpperCase(),
                description : <Link route={`/${validate(this.props.headerToken).headerToken}/shops/${item.address}`}><a>View Shops</a></Link>,
                meta : item.details[8].substring(0,item.details[8].toLowerCase().indexOf("Chiknayakanhalli".toLowerCase()))
            };
        });

        return <Card.Group items={items} itemsPerRow={2}/>;
    }

    onClick = async (event) => {
        event.preventDefault();
        const headers = { 
                'Content-Type':'application/json',
                'x-auth-token' : this.props.headerToken
        };

        const {data, status} = await get('/user/login/me', headers);
        console.log(data);
        console.log(status);
    }

    render() {
        return (
            <Layout loggedIn={this.props.loggedIn} headerToken={this.props.headerToken}>
                <div>
                    {this.renderShops()}
                    <Button
                        onClick={this.onClick}
                        content="Create Shops"
                        icon="add circle"
                        primary
                    />
                </div>
            </Layout>
        );

    }

}

export default App;



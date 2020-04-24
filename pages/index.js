import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/layout';
import { Link } from '../routes';
import get from '../localmodules/express_get';
import validate from '../localmodules/token_validate';
// import jsonArray from '../localmodules/data_initialization';

class App extends Component {
    
    static async getInitialProps(props) {
        const shops = await factory.methods.getDeployedShops().call();
        const { loggedIn, headerToken } = validate(props.query.headerToken);
        return { shops, headerToken, loggedIn };
    }
    
    renderShops() {
        const items = this.props.shops.map(address => {
            return{
                header : address,
                description : <Link route={`shops/${address}`}><a>View Shops</a></Link>,
                fluid : true
            };
        });

        return <Card.Group items={items}/>;
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
                <div>{this.props.headerToken}</div>
            </Layout>
        );

    }

}

export default App;



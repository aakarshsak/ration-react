import React, {Component} from 'react';
import factory from '../ethereum/factory';
// import jsonArray from '../localmodules/data_initialization';

class App extends Component {

    static async getInitialProps() {
        const shops = await factory.methods.getDeployedShops().call();
        console.log(shops);

        return { shops };
    }
    

    render() {
        return <div>{this.props.shops}</div> 
    }

}

export default App;



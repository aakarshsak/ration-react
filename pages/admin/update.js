import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { saveToEthereum, manualSaveToEthereum } from '../../localmodules/data_initialization';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import Shop from '../../ethereum/shop';
import Layout from '../../components/layout';


export default class UpdateBlockChain extends Component {

    state = {
        managerName : '',
        fpdName : '',
        shopName : '',
        rice : '',
        wheat : '',
        arhad : '',
        kerosene : '',
        addr : '',
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const obj = this.state;
        const accounts = await web3.eth.getAccounts();
        //console.log(accounts, obj);
        obj.addr = obj.addr + ", Tumakuru, Karnataka - 572103";
        //console.log(obj.addr);
        saveToEthereum(obj);
    }

    onClick = async (event) => {
        event.preventDefault();


        const accounts = await web3.eth.getAccounts();
        const addresses = await factory.methods.getDeployedShops().call();
        console.log(addresses[addresses.length-1]);

        for(let i=0;i<addresses.length;i++){
            const s = Shop(addresses[i]);
            await s.methods.createRequest("TUMAKURU")
            .send({
                from: accounts[0],
            });
        }
    }

    saveMultiples = async (event) => {
        event.preventDefault();
        manualSaveToEthereum();

    }


    render() {
        return (
        
            <Layout>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Manager Name</label>
                        <Input
                            placeholder='Manager Name'
                            type='text'
                            value={this.state.managerName}
                            onChange={ event => this.setState({ managerName : event.target.value }) }
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Shop Name</label>
                        <Input
                            placeholder='Shop Name'
                            type='text'
                            value={this.state.shopName}
                            onChange={ event => this.setState({ shopName : event.target.value }) }
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Address</label>
                        <Input
                            placeholder='Address'
                            type='text'
                            value={this.state.addr}
                            onChange={ event => this.setState({ addr : event.target.value }) }
                            />
                    </Form.Field>
                    {/* <Form.Field>
                        <label>Block Name</label>
                        <Input
                            placeholder='Block Name'
                            type='text'
                            value={this.state.blockName}
                            onChange={ event => this.setState({ blockName : event.target.value }) }
                            />
                    </Form.Field> */}
                    <Form.Field>
                        <label>FPD Name</label>
                        <Input
                            placeholder='FPD Name'
                            type='text'
                            value={this.state.fpdName}
                            onChange={ event => this.setState({ fpdName : event.target.value }) }
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Rice</label>
                        <Input
                            placeholder='Rice'
                            type='number'
                            value={this.state.rice}
                            onChange={ event => this.setState({ rice : event.target.value }) }
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Wheat</label>
                        <Input
                            placeholder='Wheat'
                            type='number'
                            value={this.state.wheat}
                            onChange={ event => this.setState({ wheat : event.target.value }) }
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Arhad</label>
                        <Input
                            placeholder='Arhad'
                            type='number'
                            value={this.state.arhad}
                            onChange={ event => this.setState({ arhad : event.target.value }) }
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Kerosene</label>
                        <Input
                            placeholder='Kerosene'
                            type='number'
                            value={this.state.kerosene}
                            onChange={ event => this.setState({ kerosene : event.target.value }) }
                            />
                    </Form.Field>
                    <Button>Submit</Button>
                </Form>

                <Button onClick={this.onClick}>CLick</Button>
                <Button onClick={this.saveMultiples}>Save Multiples</Button>
            </Layout>
        );
    }
}
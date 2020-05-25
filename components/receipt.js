import React from 'react';
import { Container, Grid, Divider, Segment, Table } from 'semantic-ui-react';
import QRCode from 'qrcode.react';



const receiptGenerator = (props) => {

    const v = props.values;
    const d = new Date();
    const dateTime = d.toLocaleDateString() + '(' +d.getHours() +':'+ d.getMinutes() + ')';
    console.log(dateTime);
    let date = dateTime.substring(0, dateTime.indexOf('('));
    let time = dateTime.substring(dateTime.indexOf('(')+1, dateTime.length-1);
    let min = time.substring(time.indexOf(':')+1, time.length);
    if(min.length === 1){
        time = time.substring(0, time.indexOf(':')+1) + '0' + min;
        console.log(time, 'after changed');
    } 

    return (
        <Container style={{padding : '60px'}}>
            <Segment style={{padding : '60px'}}>
                <Grid verticalAlign='middle'>
                    <Grid.Row columns={2}>
                        {/* <Grid.Column width={3}></Grid.Column> */}
                        <Grid.Column textAlign='left' width={8}>
                            <h2>RECEIPT</h2>
                            <br />
                            <p><b>Bill From</b><br />
                            {v.details[6]} <br/>
                            {v.details[8]}</p>

                            <p>9606409972<br />
                            email@yourcompany.com</p>
                        </Grid.Column>
                        <Grid.Column textAlign='right' width={8}><QRCode value="http://facebook.github.io/react/" /></Grid.Column>
                        {/* <Grid.Column width={3}></Grid.Column> */}
                    </Grid.Row>
                    <Divider section />
                    <Grid.Row>
                        {/* <Grid.Column width={1} /> */}
                        <Grid.Column width={12}>
                            <p><b>Bill To</b> <br />
                            { v.data.name.first + " " + v.data.name.last }</p>
                            
                            <p>Date {date}
                            <br />Order ID {v.trans.orderid}<br />
                            Receipt #{1234255536}</p>
                                    
                            <p>Many thanks,<br/>
                            Team E-Ration</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Table celled structured>
                                <Table.Header width={3}>
                                    <Table.Row>
                                        <Table.HeaderCell >#</Table.HeaderCell>
                                        <Table.HeaderCell >Item</Table.HeaderCell>
                                        <Table.HeaderCell >Quantity(In Kg)</Table.HeaderCell>
                                        <Table.HeaderCell >Quantity To Reach Month Limit(In Kg)</Table.HeaderCell>
                                        <Table.HeaderCell >Price(Per Kg)</Table.HeaderCell>
                                        <Table.HeaderCell >Quantity X Price(Per Kg) = Price</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell width={1}>1</Table.Cell>
                                        <Table.Cell width={4}>Rice</Table.Cell>
                                        <Table.Cell width={1}>{v.trans.rice}</Table.Cell>
                                        <Table.Cell width={2}>{5-v.trans.rice}</Table.Cell>
                                        <Table.Cell width={2}>2</Table.Cell>
                                        <Table.Cell width={3}>
                                            {v.trans.rice} X 2 = <b>Rs {v.trans.rice * 2}</b>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>2</Table.Cell>
                                        <Table.Cell>Wheat </Table.Cell>
                                        <Table.Cell>{v.trans.wheat}</Table.Cell>
                                        <Table.Cell>{5 - v.trans.wheat}</Table.Cell>
                                        <Table.Cell>4</Table.Cell>
                                        <Table.Cell>
                                            {v.trans.wheat} X 4 = <b>Rs {v.trans.wheat * 4}</b>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>3</Table.Cell>
                                        <Table.Cell>Arhad</Table.Cell>
                                        <Table.Cell>{v.trans.arhad}</Table.Cell>
                                        <Table.Cell>{5 - v.trans.arhad}</Table.Cell>
                                        <Table.Cell>3</Table.Cell>
                                        <Table.Cell>
                                            {v.trans.arhad} X 3 = <b>Rs {v.trans.arhad * 3}</b>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>4</Table.Cell>
                                        <Table.Cell>Sugar</Table.Cell>
                                        <Table.Cell>{v.trans.kerosene}</Table.Cell>
                                        <Table.Cell>{5 - v.trans.kerosene}</Table.Cell>
                                        <Table.Cell>5</Table.Cell>
                                        <Table.Cell>
                                            {v.trans.kerosene} X 5 = <b>Rs {v.trans.kerosene * 5}</b>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row >
                                        <Table.Cell colSpan='5'><b>Subtotal</b></Table.Cell>
                                        <Table.Cell ><b>{v.trans.rice*2 + v.trans.wheat*4 + v.trans.arhad*3 + v.trans.kerosene*5}.00</b></Table.Cell>
                                    </Table.Row>
                                    <Table.Row >
                                        <Table.Cell colSpan='5'><b>Sales Tax(18%)</b></Table.Cell>
                                        <Table.Cell ><b>{Math.floor((v.trans.rice*2 + v.trans.wheat*4 + v.trans.arhad*3 + v.trans.kerosene*5)*0.2)}.00</b></Table.Cell>
                                    </Table.Row>
                                    <Table.Row >
                                        <Table.Cell colSpan='5'><b>Total</b></Table.Cell>
                                        <Table.Cell ><b>{Math.floor((v.trans.rice*2 + v.trans.wheat*4 + v.trans.arhad*3 + v.trans.kerosene*5)*1.2)}.00</b></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
                
                
            </Segment>
        </Container>
    );
}

export default receiptGenerator;
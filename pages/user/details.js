import React, {Component} from 'react';
import validate from '../../localmodules/token_validate';
import get from '../../localmodules/express_get';
import { Card, Grid, Image, Header, Segment, Divider } from 'semantic-ui-react';
import Layout from '../../components/layout';
import post from '../../localmodules/express_post_data';

export default class UserDetails extends Component {

    state = {
        mainContentValue : ''
    }
    
    static async getInitialProps(props) {
        const { headerToken, loggedIn } = validate(props.query.headerToken);
        const headers = { 'Content-Type':'application/json', 'x-auth-token' : headerToken};
        const {data, status} = await get('/user/login/me', headers);

        const dataInp = {
            ration : data.ration
        }
        const dataOrders = await post('/record/order_list', headers, dataInp);
        console.log(dataOrders.data);
        return { data, headerToken, loggedIn, dataOrders : dataOrders.data };
    }
    

    renderEachCard = () => {
        return (
            <Card.Content>
                <Card.Header>Details</Card.Header>
                <Card.Description>This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.This is a descriptive information that is a must watch.</Card.Description>
                <Card.Meta>Description</Card.Meta>
            </Card.Content>
        );
    }

    renderContent = () => {    
        if(this.state.mainContentValue === '1'){
            const cardItem = this.props.dataOrders.result.map( (item, index ) => {
                const date = item.date.split('(')[0];
                const time = item.date.split('(')[1];
                return (
                    <Card fluid style={{padding:'40px'}}>
                        <Grid.Column>
                            <b>{item.orderid}</b>
                            <span style={{float:'right'}}><b>{date}</b></span>
                            <Divider section />
                        </Grid.Column>
                        <Grid.Column>
                            <p style={{float:'left'}}>
                                Rice : {item.rice} Kg <br/>
                                Wheat : {item.wheat} Kg<br/>
                                Arhad : {item.arhad} Kg<br/>
                                Sugar : {item.kerosene} Kg<br/>
                            </p>
                            <h2 style={{float:'right'}}>₹ { item.rice*2 + item.wheat*4 + item.arhad*3 + item.kerosene*5 }</h2>
                            
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <a stype={{clear:'center'}}href='#'>View Receipt</a>
                        </Grid.Column>
                    </Card>
                );
            });
            return ( 
                <Grid.Column width={12}>
                    <Card fluid style={{padding:'25px'}}>
                        <Card.Content>
                            <center><h2 style={{color:'#2185D0'}}>ORDERS LIST</h2></center>
                        </Card.Content>
                    </Card>
                    <Segment >
                        {cardItem}
                    </Segment>     
                </Grid.Column>
            );
        } 
        return (
            <Grid.Column width={12}>
                <Card fluid style={{padding:'40px'}}>
                        <center><h2 style={{color:'#2185D0'}}>PERSONAL DETAILS</h2></center>
                    </Card>
                <Segment>
                    <Card fluid style={{padding:'25px'}}>
                        
                            <Card.Content><h3>Full Name</h3></Card.Content>
                        
                            <Card.Content>{this.props.data.name.first + ' ' + this.props.data.name.last}</Card.Content>
                        
                    </Card>
                    <Card fluid style={{padding:'25px'}}>
                        
                        <Card.Content><h3>Gender</h3></Card.Content>
                        
                        <Card.Content>{this.props.data.gender}</Card.Content>
                        
                    </Card>
                    <Card fluid style={{padding:'25px'}}>
                        
                        <Card.Content><h3>Email Address</h3></Card.Content>
                    
                    
                        <Card.Content>{this.props.data.email}</Card.Content>
                    
                    </Card>
                    <Card fluid style={{padding:'25px'}}>
                        
                        <Card.Content><h3>Mobile Number</h3></Card.Content>
                    
                        <Card.Content>{this.props.data.address.phone}</Card.Content>
                    
                    </Card>
                    <Card fluid style={{padding:'25px'}}>
                        
                        <Card.Content><h3>Address</h3></Card.Content>
                    
                    
                        <Card.Content>{this.props.data.address.house + ', ' + this.props.data.address.area + ', ' + this.props.data.address.district + ', ' + 
                        this.props.data.address.state + '-' + this.props.data.address.pin}
                        </Card.Content>
                    </Card>
                    <Card fluid style={{padding:'25px'}}>
                        
                        <Card.Content><h3>Block</h3></Card.Content>
                    
                    
                        <Card.Content>{this.props.data.address.area.toUpperCase()}</Card.Content>
                    
                    </Card>
                </Segment>
            </Grid.Column>
        );
    }

    onMyProfileClick = () => {
        console.log("Clicked my profile...");
        this.setState({mainContentValue : '3'});
    }

    onClickOrders = () => {
        console.log('Clicked on orders');
        this.setState({mainContentValue : '1'});
    }

    renderCard = () => {
        return (
            <Grid>
                <Grid.Column width={4}>
                    <Grid.Row>
                        <Card fluid style={{marginBottom : '30px'}}>
                            <Card.Content>
                                <Image style={{float:'left', marginRight: '20px'}} src='https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_2fd3e8.svg' circular size='mini' />                                 
                                <div>Hello, <br /><strong>{this.props.data.name.first}</strong></div>
                            </Card.Content>
                        </Card>
                    </Grid.Row>
                    <Grid.Row>
                        <Card fluid>
                            <Card.Content onClick={this.onClickOrders} href='#'>
                                <Image style={{float:'left',marginTop:'5px', marginRight: '20px'}} size='mini' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg==' size='mini' />                                 
                                <div style={{color:'grey', fontWeight: 'bold', marginTop:'7px'}}>MY ORDERS<Image size='mini'/></div>         
                            </Card.Content>
                            <Card.Content href='#' onClick={this.onMyProfileClick}>
                                <Image style={{float:'left',marginTop:'5px', marginRight: '20px'}} size='mini' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=' />
                                <div style={{color:'grey', fontWeight: 'bold', marginTop:'7px'}}>PROFILE<Image size='mini'/></div>      
                            </Card.Content>
                            <Card.Content href='/user/logout'>
                                <Image style={{float:'left', marginRight: '20px'}} src='data:image/jpeg;base64,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' size='mini' />                                 
                                <div style={{color:'grey', fontWeight: 'bold', marginTop:'7px'}}>LOGOUT<Image size='mini'/></div>        
                            </Card.Content>
                        </Card>
                    </Grid.Row>
                </Grid.Column>
                {this.renderContent()}
            </Grid>
        );
    }

    render(){
        return (
            <Layout loggedIn={this.props.loggedIn} headerToken={this.props.headerToken}>
                {this.renderCard()}
            </Layout>
        ); 
    }



}
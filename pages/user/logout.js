import React from 'react';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';
import Layout from '../../components/layout';
import { Router } from '../../routes';

const onClick = () => {
    Router.pushRoute(`/user/login`);
}

const logout = () => {
    return (
        <Layout>
            <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical>
                <Container text>
                <Header
                    as='h1'
                    content='Successfully Logged Out'
                    color='blue'
                    textAlign = 'center'
                    style={{
                    fontSize:'4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop:'2em',
                    }}
                />
                <Header
                    as='h2'
                    content='Login again to access the account.'
                    textAlign = 'center'
                    color='grey'
                    style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop:'.5em',
                    }}
                />
                <Button onClick={onClick} primary size='massive' style={{marginTop:'.5em'}}>
                    Login
                </Button>
                </Container>
            </Segment>
        </Layout>
      )
}


export default logout;
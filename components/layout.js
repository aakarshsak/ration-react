import React from 'react';
import Navbar from './navbar.js';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default (props) => {
    return (
        <div>  
            <Head>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>
            <Navbar loggedIn={props.loggedIn} headerToken={props.headerToken}/>
            <Container >{props.children}</Container>
        </div>
    );
}
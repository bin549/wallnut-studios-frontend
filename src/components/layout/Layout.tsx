import {Fragment} from 'react';
import {useEffect} from 'react';
import React from 'react'

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import Figure from 'react-bootstrap/Figure';
import useHttp from '../../hooks/use-http';
import {getAllQuotes} from '../../lib/api';
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'


const Layout = (props: any) => {
    const {sendRequest, status, data: loadedQuotes, error} = useHttp(
        getAllQuotes,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    return (
        <Fragment>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
            {/*<Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>*/}
            {/*    <Grid.Column style={{maxWidth: 450}}>*/}
            {/*        <Header as='h2' color='teal' textAlign='center'>*/}
            {/*            <Image*/}
            {/*                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7ZJW4kUXy9hjRk9eOpgLtv7glLvghcACX3d4GBYlvw&s'/>*/}
            {/*        </Header>*/}
            {/*    </Grid.Column>*/}
            {/*</Grid>*/}
        </Fragment>
    );
};

export default Layout;

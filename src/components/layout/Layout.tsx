import {Fragment} from 'react';
import {useEffect} from 'react';
import React from 'react'
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import useHttp from '../../hooks/use-http';
import {getSkillByPage} from '../../lib/api';


const Layout = (props: any) => {
    const {sendRequest, status, data: loadedQuotes, error} = useHttp(
        getSkillByPage,
        true
    )

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    return (
        <Fragment>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
};

export default Layout;

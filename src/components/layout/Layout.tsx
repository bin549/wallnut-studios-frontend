import {Fragment} from 'react';
import React from 'react'
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';


const Layout = (props: any) => {
    // const {sendRequest, status, data: loadedQuotes, error} = useHttp(
    //     getSkillByPage,
    //     true
    // )

    // useEffect(() => {
    //     sendRequest()
    // }, [sendRequest])

    return (
        <Fragment>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
};

export default Layout;

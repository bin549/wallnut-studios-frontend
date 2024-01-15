import {Fragment} from 'react';
import React from 'react'
import classes from './Layout.module.css';
import Navigation from './Navigation';


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
            <Navigation/>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
};

export default Layout;

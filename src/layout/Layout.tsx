import {Fragment} from 'react';
import React from 'react'
import classes from './Layout.module.css';
import Navigation from './Navigation';


const Layout = (props: any) => {

    // const {sendRequest, status, data: loadedQuotes, error} = useHttp(
    //     getSkillByPage,
    //     true
    // )
    function onModuleChanged(module_num: number) {
        props.onModuleChanged(module_num)
    }

    // useEffect(() => {
    //     sendRequest()
    // }, [sendRequest])

    return (
        <Fragment>
            <Navigation onModuleChanged={onModuleChanged}/>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
};

export default Layout;

import {NavLink} from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Wallnut Studios</div>
            <nav className={classes.nav}>
                <a href={"https://github.com/bin549"}>🐰(24Y)</a>
            </nav>
        </header>
    );
};

export default MainNavigation;

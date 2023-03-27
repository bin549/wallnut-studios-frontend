import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>肩部检测在线网址</div>
      <nav className={classes.nav}>
      </nav>
    </header>
  );
};

export default MainNavigation;

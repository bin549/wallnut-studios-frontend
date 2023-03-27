import { Fragment } from 'react';
import { useEffect } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import Figure from 'react-bootstrap/Figure';
import useHttp from '../../hooks/use-http';
import { getAllQuotes } from '../../lib/api';


const Layout = (props: any) => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7ZJW4kUXy9hjRk9eOpgLtv7glLvghcACX3d4GBYlvw&s"
          />
          <Figure.Caption>
            img.
          </Figure.Caption>
        </Figure>
    </Fragment>
  );
};

export default Layout;

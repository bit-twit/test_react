import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createHashHistory } from 'history';

import * as serviceWorker from './serviceWorker';
import './index.css';

import routes from './routes';

const appHistory = createHashHistory();

ReactDOM.render(
    <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
        {routes}
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

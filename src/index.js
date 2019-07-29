import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

import * as serviceWorker from './serviceWorker';
import './index.css';

import Detail from './pages/detail';
import List from "./pages/list";

const appHistory = createHashHistory();

ReactDOM.render(
    <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ List } />
        <Route path="/detail" component={ Detail } />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

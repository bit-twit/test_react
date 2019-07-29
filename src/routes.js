import React from 'react';
import { Route } from 'react-router';
import App from './pages/app';
import List from './pages/list';
import Detail from './pages/detail';

const routes = (
    <Route path="/" component={ App }>
        <Route exact path="/" component={ List } />
        <Route path="/detail/:repo" component={ Detail } />
    </Route>
);

export default routes;

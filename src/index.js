import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import rootReducer from './rootReducer';
import routes from './routes';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const appHistory = createHashHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

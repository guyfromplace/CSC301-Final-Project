import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import {  applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/index";
import { Router } from "react-router";
import { logger } from "redux-logger";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "react-router-redux";
import localStorage from "./middlewares/localStorage";

const browserHistory = createBrowserHistory();
const store = createStore(allReducers, applyMiddleware(thunk, logger, localStorage));

const history = syncHistoryWithStore(browserHistory, store);

const RootApp = () => (
    <Provider store={store}>
        <Router history={history}>
            <App history={history}/>
        </Router>
    </Provider>
);


ReactDOM.render(<RootApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

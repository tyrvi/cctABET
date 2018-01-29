import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/reducers.js';

// const middleWares = [];
// let NODE_ENV = 'development';

// if (NODE_ENV === 'development') {
//     const { logger } = require('redux-logger');

//     middleWares.push(logger);
// }

export const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

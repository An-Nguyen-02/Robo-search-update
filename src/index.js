import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {searchRobots, requestRobots} from './reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = 
  createStore(rootReducer,applyMiddleware(thunkMiddleWare, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

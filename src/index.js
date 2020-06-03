import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {createStore,applyMiddleware,combineReducers} from "redux";
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';
import "tachyons";
import {Provider} from 'react-redux';
import {searchRobots,requestRobotsReducer} from "./reducers";
import {createLogger} from "redux-logger/src";


const rootReducer=combineReducers({searchRobots,requestRobotsReducer: requestRobotsReducer});
const logger=createLogger();
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

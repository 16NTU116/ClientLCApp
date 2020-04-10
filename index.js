import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducers from './src/reducers';

const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducers, initialState, compose(applyMiddleware(...middleware))
);
const appRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(appRedux));

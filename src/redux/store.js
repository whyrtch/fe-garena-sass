import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from 'redux-logger'
import appReducer from './reducers'
import thunk from 'redux-thunk'

const loggerMiddleware = createLogger()

const reduxStore  = createStore(
    appReducer,
    composeWithDevTools(
        applyMiddleware(thunk, loggerMiddleware)
    )
);

export default reduxStore



import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Home from './Home'
import reduxStore from '../redux/store'

export default class Root extends Component {
    render() {
        return(
            <Provider store={reduxStore}>
                <Home/>
            </Provider>
        )
    }
}
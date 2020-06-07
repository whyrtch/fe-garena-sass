import React, { Component } from 'react';
import Navigation from './Navigation';

export class Header extends Component {
    render() {
        return (
            <header>
                <div id="header-container">
                    <img src={require('../assets/image/Sea-Undergraduate-Logo.png')} alt="" className="d-flex justify-content-end"/>
                    <Navigation />
                </div>
            </header>
        )
    }
}

export default Header

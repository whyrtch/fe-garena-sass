import React, { Component } from 'react';
import GLOBAL from '../utils/GLOBAL';

class Navigation extends Component {
    state = {
        links : GLOBAL.MENU_NAVIGATION
    }

    renderNavigation = () => {
        let list;
        list = this.state.links.map((data, index) =>
            <div key={index} className="nav-items">
                <a href={data.route}>{data.menu}</a>
            </div>
        )
        return list;
    }

    render() {
        return (
            <nav className="flex-container">
                {this.renderNavigation()}
            </nav>
        );
    }
}

export default Navigation;
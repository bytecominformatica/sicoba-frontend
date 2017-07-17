import React, {Component} from 'react';
import logo from '../images/logo.png';
import sidebarBackground from '../images/sidebar-background.jpg';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu() {
        $('.button-collapse').sideNav('hide');
    }

    render() {
        let icon = '';

        if (this.props.icon) {
            icon = <i className="material-icons">{this.props.icon}</i>;
        }
        return (
            <li><a href={this.props.href} onClick={this.closeMenu}>{icon}{this.props.name}</a></li>
        );
    }
}

export default MenuItem;

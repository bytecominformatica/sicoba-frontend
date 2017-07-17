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
        let icon = this.props.icon ? <i className={this.props.icon}></i> : '';
        let target = this.props.target ? this.props.target : '_self';

        return (
            <li><a href={this.props.href} onClick={this.closeMenu} target={target}>
                {icon}{this.props.name}
            </a></li>
        );
    }
}

export default MenuItem;

import React, {Component} from 'react';
import logo from '../logo.svg';

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick() {
        this.props.onMenuClick();
    }

    render() {
        const menuClass = this.props.show ? "menu--show" : "";
        const menuOverlayClass = this.props.show ? "menu__overlay--show" : "";
        return (
            <div>
                <div className={"menu " + menuClass}>
                    <div className="menu__header" align="center">
                        <img src={logo} width="100px" height="100px" alt="logo"/>
                    </div>
                    <ul className="menu__list">
                        <li>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://github.com/clairtonluz">Author</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://github.com/clairtonluz/demo-progressive-web-app">Source</a>
                        </li>
                    </ul>
                </div>
                <div className={"menu__overlay " + menuOverlayClass} onClick={this.onMenuClick}/>
            </div>
        );
    }
}

export default Drawer;

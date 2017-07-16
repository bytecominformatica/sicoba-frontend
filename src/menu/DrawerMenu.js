import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import logo from '../logo-negative.png';
import Home from '../home/Home';
import Login from '../auth/Login';
import NoMatch from './NoMatch';

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

            <Router>
                <div>
                    <div className={"menu " + menuClass}>
                        <div className="menu__header">
                            <img src={logo} width="100px" height="100px" alt="logo"/>
                        </div>
                        <ul className="menu__list">
                            <li><Link to="/" onClick={this.onMenuClick}>Dashboard</Link></li>
                            <ul>
                                <li><Link to="/commercial" onClick={this.onMenuClick}>Comercial</Link></li>
                            </ul>
                            <li><Link to="/financial" onClick={this.onMenuClick}>Financeiro</Link></li>
                            <li><Link to="/stock" onClick={this.onMenuClick}>Estoque</Link></li>
                            <li><Link to="/provider" onClick={this.onMenuClick}>Provedor</Link></li>
                        </ul>
                    </div>

                    <div className={"menu__overlay " + menuOverlayClass} onClick={this.onMenuClick}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Drawer;

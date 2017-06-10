import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import logo from '../logo-negative.png';
import Home from '../home/Home';

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);

        // this.props.history.listen((location, action) => {
        //     console.log("on route change");
        // });
    }

    onMenuClick() {
        this.props.onMenuClick();
    }

    render() {
        const About = () => (
            <div>
                <h2>About</h2>
            </div>
        )

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
                            <li><Link to="/" onClick={this.onMenuClick}>Home</Link></li>
                            <li><Link to="/customers" onClick={this.onMenuClick}>Clientes</Link></li>
                        </ul>
                    </div>

                    <div className={"menu__overlay " + menuOverlayClass} onClick={this.onMenuClick}/>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </div>
            </Router>
        );
    }
}

export default Drawer;

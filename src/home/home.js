import React, {Component} from 'react';
import logo from '../images/logo.png';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="logo"/>
                <h2>Welcome to React</h2>
            </div>
        );
    }
}

export default Home;

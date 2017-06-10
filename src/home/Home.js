import React, {Component} from 'react';
import logo from '../logo.png';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React</h2>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Home;

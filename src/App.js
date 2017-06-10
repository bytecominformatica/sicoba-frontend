import React, {Component} from 'react';
import Drawer from './menu/Drawer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App App-layout">
                <Drawer/>
            </div>
        );
    }
}

export default App;

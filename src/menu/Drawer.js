import React, {Component} from 'react';
import DrawerHeader from './DrawerHeader';
import DrawerMenu from './DrawerMenu';
import './Drawer.css';

class Drawer extends Component {

    constructor(props) {
        super(props);
        this.toogleMenu = this.toogleMenu.bind(this);
        this.state = {showMenu: false};
    }

    toogleMenu() {
        this.setState({showMenu: !this.state.showMenu});
    }

    render() {
        return (
            <div>
                <DrawerHeader onMenuClick={this.toogleMenu}/>
                <DrawerMenu show={this.state.showMenu} onMenuClick={this.toogleMenu}/>
            </div>
        );
    }
}

export default Drawer;

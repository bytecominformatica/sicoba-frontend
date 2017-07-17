import React, {Component} from 'react';
import logo from '../images/logo.png';
import sidebarBackground from '../images/sidebar-background.jpg';
import MenuItem from './menu-item';
import Submenu from './submenu';

class MenuDrawer extends Component {

    componentDidMount() {
        $(".button-collapse").sideNav({closeOnClick: false});
    }

    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="user-view">
                            <div className="background center">
                                <img src={sidebarBackground}/>
                            </div>
                            <a href="#!user"><img className="circle" src={logo} width="20px"/></a>
                            <a href="#!name"><span className="white-text name">Fulano de Tal</span></a>
                            <a href="#!email"><span className="white-text email">fulano@gmail.com</span></a>
                        </div>
                    </li>

                    <Submenu name="Comercial"/>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li><a className="subheader">Subheader</a></li>
                    <MenuItem name="Sugestões e Melhorias" href="https://github.com/bytecominformatica/sicoba/issues"/>

                </ul>
                <a href="#" data-activates="slide-out" className="button-collapse">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        );
    }
}

export default MenuDrawer;

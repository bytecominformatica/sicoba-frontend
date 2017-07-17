import React, {Component} from 'react';
import MenuItem from './menu-item';

class Submenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let identifier = window.btoa(this.props.name);
        let icon = '';

        if (this.props.icon) {
            icon = <i className="material-icons">{this.props.icon}</i>;
        }

        return (
            <ul>
                <li>
                    <a className="dropdown-button" data-activates="comercial">{this.props.name}
                        <i className="material-icons right">arrow_drop_down</i>
                    </a>
                </li>
                <ul id='comercial' className='dropdown-content'>
                    <MenuItem name="Clientes" href="#clientes" icon="supervisor_account"/>
                    <li><a href="#!">Planos</a></li>
                </ul>
            </ul>
        );
    }
}

export default Submenu;

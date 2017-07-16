import React, {Component} from 'react';
import erro404 from '../errors/erro404.jpg'
class NoMatch extends Component {
    render() {
        return (
            <div>
                <img src={erro404} alt="logo"/>
                <h3>Ops, não foi possível encontrar conteúdo para: <code>{this.props.location.pathname}</code></h3>
            </div>
        );
    }
}

export default NoMatch;

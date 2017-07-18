import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from '../home/home';
import NotFound from './not-found';

class MyRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/clientes" component={NotFound}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default MyRoutes;
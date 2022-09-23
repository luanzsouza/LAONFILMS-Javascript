import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Login from '../pages/Login';
import SingUp from '../pages/SignUp';


const Routes = () => {
    return (
        <Switch>
             <Route
                path='/singup'
                component={SingUp}
            />
             <Route
                path='/login'
             component={Login}
            />
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/login'
             component={Login}
            />
             <Route
                path='/'
                exact
                component={Home}
            />
            
        </Switch>
    );
}

export default Routes;

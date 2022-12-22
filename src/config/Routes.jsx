import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/details/Detail';

const Routes = () => {
  return (
    <Switch>
        <Route 
        path='/:category/search/:keyword'
        component={withRouter(Catalog)}
        />
        <Route 
        path='/:category/:id'
        component={withRouter(Detail)}
        />
        <Route 
        path='/:category'
        component={withRouter(Catalog)}
        />
        <Route 
        path="/"
        exact
        component={withRouter(Home)}
        />
    </Switch>
  )
}

export default Routes

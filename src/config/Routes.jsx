import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/details/Detail';
import SignInSignOut from '../pages/sign-in-sign-up/Sign-in-sign-out';
import { connect } from 'react-redux';

function Routes({currentUser}){


  return (
    <Switch>
        <Route 
        path='/:category/search/:keyword'
        component={withRouter(Catalog)}
        />

        <Route 
        exact
        path='/sign-in'
        component={withRouter(SignInSignOut)}
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


const mapStateToProps = state => ({

  currentUser: state.user.currentUser

})

export default connect(mapStateToProps)(Routes)


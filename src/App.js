import React, { Component } from 'react';
import './App.scss';
import 'swiper/swiper.min.css';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends Component {

  constructor (){
  super();

    this.state = {
     currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      createUserProfileDocument(user);


    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
     <div>
               <Route render={props => (
                <>
                <Header 
                {...props} 
                currentUser={this.state.currentUser}/>
                <Routes />
                <Footer/>
                </>
               )}
               
               />
     </div>
    );
  }
}

export default App;

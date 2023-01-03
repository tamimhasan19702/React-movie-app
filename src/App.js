import React, { Component } from 'react';
import './App.scss';
import 'swiper/swiper.min.css';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import Detail from './pages/details/Detail';


class App extends Component {

  constructor (){
  super();

    this.state = {
     currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
    if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState(
            {
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state)
          }
          );
        });
      
      }

      this.setState({ 
        currentUser: userAuth 
      });
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
                <Header {...props}/>
                <Routes currentUser={this.state.currentUser}/>
                <Footer/>
                </>
               )}
               
               />
     </div>
    );
  }
}


export default App;

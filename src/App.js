import React, { Component } from 'react';
import './App.scss';
import 'swiper/swiper.min.css';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


class App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount(){
 
   const {setCurrentUser} = this.props; 

   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
    if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            
              id: snapshot.id,
              ...snapshot.data()
          
            });

        });
      
      }

      setCurrentUser(userAuth);
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
                <Routes />
                <Footer/>
                </>
               )}
               
               />
     </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})


const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))

})


export default connect(
  mapStateToProps, 
  mapDispatchToProps)(App);

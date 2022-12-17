import React from 'react';
import './App.scss';
import 'swiper/swiper.min.css';

import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function App() {
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

export default App;

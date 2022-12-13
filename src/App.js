import React from 'react';
import './App.scss';
import 'swiper/swiper.min.css';
import { BoxIconElement } from 'boxicons';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/footer';

import Routes from './config/Routes';

function App() {
  return (
   <BrowserRouter>
             <Route render={props => (
              <>
              <Header {...props}/>
              <Routes />
              <Footer/>
              </>
             )}
             
             />
   </BrowserRouter>
  );
}

export default App;

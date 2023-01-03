import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={Store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>


);



import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg'
import Logo from '../../assets/logo-update.png';


function Footer() {
  return (
    <div className='footer' style={{backgroundImage: `url(${bg})`}}>
     <div className="footer-content container">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <Link to='/'>Movies</Link>
      </div>
     </div>

     <div className="footer-content-menus">
      
      <div className="footer-content-menu">
        <Link to='/'>Home</Link>
        <Link to='/'>Contact Us</Link>
        <Link to='/'>Terms of Service</Link>
        <Link to='/'>About Us</Link>
      </div>

      <div className="footer-content-menu">
        <Link to='/'>Live</Link>
        <Link to='/'>FAQ</Link>
        <Link to='/'>Premium</Link>
        <Link to='/'>Privacy Policy</Link>
      </div>

      <div className="footer-content-menu">
        <Link to='/'>You must watch</Link>
        <Link to='/'>Recent release</Link>
        <Link to='/'>Top IMDB</Link>
      </div>
      
     </div>
     
    </div>
  )
}

export default Footer

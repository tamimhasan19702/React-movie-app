import React,{useEffect, useRef} from 'react';
import './header.scss';
import Logo from '../../assets/logo-update.png';
import { Link,useLocation } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import logo from '../../assets/user.png'
import Button from '../button/Button';


const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'Tv Series',
        path: '/tv'
    }

];

function Header({ currentUser }) {

  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex(e => e.path === pathname );


  useEffect(()=> {
    const shrinkHeader = () => {
       if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        headerRef.current.classList.add('shrink');
       }else{
        headerRef.current.classList.remove('shrink');
       }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
        window.removeEventListener('scroll',shrinkHeader)
    };
  },[]);
  
 
  return (
    <div ref={headerRef} className="header">
        <div className="header-wrap container">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <Link to="/">Movies</Link>
            </div>
            <ul className="header-nav">
                {
                    headerNav.map((e,i) => (
                        <li key={i} className={`${i === active ? 'active' : ''}`}>
                        
                        <Link to={e.path}>
                           {e.display}
                        </Link>

                        </li>
                    ))
                          
                }

                <div className="logins">
                {
                        currentUser ? (
                            <div className='userImg'>

                             <img src={logo} alt="user" />

                             <p className='userText'><span className='welcome'>Welcome, </span>{currentUser.displayName}</p>

                             <Button
                             className='button'>
                            <Link  
                            onClick={() => auth.signOut()}
                            className='link'
                            to='./'>
                            Sign Out
                            </Link>
                             </Button>
                             
                            </div>
                        ) : (
                            <Button className='button'>
                            <Link 
                            to='./sign-in'
                            className='link'>
                            Sign In
                            </Link>
                            </Button>
                        )
                     }
                </div>
                
            </ul>
        </div>
    </div>
  )
}

export default Header
import React,{useEffect, useRef} from 'react';
import './header.scss';
import Logo from '../../assets/logo-update.png';
import { Link,useLocation } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';


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
                    <li>
                        
                        {
                        currentUser ? (
                            <div  
                            onClick={() => auth.signOut()}
                            className=''>
                            Sign Out
                            </div>
                        ) : (
                            <Link 
                            to='./sign-in'
                            className='active'>
                            Sign In
                            </Link>
                        )
                        }

                    </li>
            </ul>
        </div>
    </div>
  )
}

export default Header
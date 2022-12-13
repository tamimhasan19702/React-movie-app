import React,{useRef} from 'react';
import './header.scss';
import Logo from '../../assets/logo-update.png';
import { Link,useLocation } from 'react-router-dom';


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

function Header() {

  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex(e => e.path === pathname )
 
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
            </ul>
        </div>
    </div>
  )
}

export default Header
import React from 'react';
import HeroSlide from '../components/hero-slide/Hero-slide';
import { Link } from 'react-router-dom';
import { OutLineButton } from '../components/button/Button';


const Home = () => {
  return (
    <>
      <HeroSlide/>

      <div className="container">
        <div className="section mb-3">
          <div className="section-header mb-2">
            <h2>Trending Movies</h2>
            <Link to='/movie'>
             <OutLineButton className="small">
              View more
              </OutLineButton>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home

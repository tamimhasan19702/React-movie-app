import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './hero-slide.scss';
import { useHistory } from 'react-router-dom';
import Button, {OutLineButton} from '../button/Button';


const HeroSlide = () => {

  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems ] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
        const params = {page: 1}
        try {
            const response = await tmdbApi.getMoviesList(movieType.popular, {params});
            setMovieItems(response.results.slice(1, 4));
            console.log(response);
        } catch {
            console.log('error');
        }
    }
    getMovies();
}, []);


  return (
    <div className='hero-slide'>
      <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            // autoplay={{delay: 3500}}
      >
         {
          movieItems.map((item,i) => (
            <SwiperSlide key={i}>
                {({ isActive }) => (
                  <HeroSlideItem item={item} className={`${isActive ? 'active' : '' }`}/>
                )}
            </SwiperSlide>
          ))
         }
      </Swiper>
    </div>
  )
}



const HeroSlideItem = props => {

  let history = useHistory();

  const item = props.item;

  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path );

  return (
    <div
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie/' + item.id)}>
                            Watch now
                        </Button>
                        <OutLineButton onClick={() => console.log('a')}>
                            Watch trailer
                        </OutLineButton>
                    </div>
                </div>
                <div className="hero-slide-item-content-poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
  )
}

export default HeroSlide

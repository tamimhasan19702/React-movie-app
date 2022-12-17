import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './movielist.scss';
import { SwiperSlide,Swiper } from 'swiper/swiper-react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieList = (props) => {

  const [item, setItems] = useState([]);

  useEffect(() => {
   const getList = async () => {
    let response = null;
    const params = {};

    if(props.type !== 'similar'){

    switch(props.category){
        case category.movie: 
        response =  await tmdbApi.getMoviesList(props.type, {params});
        break;
        default: 
        response = await tmdbApi.getTvList(props.type, {params})
      }

    }
    else{
      response = await tmdbApi.similar(props.category, props.id);
    }
    setItems(response.results);
   }
   getList();
  }, []);


  return (
    <div>
      
    </div>
  )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;

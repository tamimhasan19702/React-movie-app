import React, { useEffect, useState } from 'react';
import './moviegrid.scss';
import MovieCard from '../movieCard/MovieCard';
import { useParams } from 'react-router';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';

const MovieGrid = (props) => {

   const [items, setItems] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPage, setTotalPage] = useState(0);
   const {keyword} = useParams();

   useEffect(() => {
    const getList = async () => {
        let response = null;

        if( keyword === undefined){
         const params = {};
         switch(props.category){
            case category.movie :
             response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
             break;
            default : 
             response =  await tmdbApi.getTvList(tvType.popular, {params}); 
           }
        }else{
      
        }
    }
   }, []);

  return (
    <div>
      Movie grid
    </div>
  )
}

export default MovieGrid

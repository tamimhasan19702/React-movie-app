import React, { useCallback, useEffect, useState } from 'react';
import './moviegrid.scss';
import MovieCard from '../movieCard/MovieCard';
import { useHistory, useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import Button, { OutLineButton } from '../button/Button';
import Input from '../input/Input';


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
         const params = {
            query: keyword
         }
         response = await tmdbApi.search(props.category, {params});
        }
        setItems(response.results)
        setTotalPage(response.total_pages)
    }
    getList();
   }, [props.category, keyword]);


   const loadmore = async () =>  {
    let response = null;

        if( keyword === undefined){
         const params = {
            page: page + 1
         };

         switch(props.category){

            case category.movie :
             response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
             break;

            default : 
             response =  await tmdbApi.getTvList(tvType.popular, {params}); 

           }
        }else{
         const params = {
            page: page + 1,
            query: keyword
         }
         response = await tmdbApi.search(props.category, {params});
        }
        setItems([...items, ...response.results ])
        setPage(page + 1)
   }

  return (
    <>
    <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword}/>
    </div>
    <div className='movie-grid'>
      {
        items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
      }
    </div>
    {
        page < totalPage ? (
            <div className='movie-grid-loadmore'>
              <OutLineButton className="small" onClick={loadmore}>Load more</OutLineButton>
            </div>
        ) : null
    }
    </>
  )
}


const MovieSearch = props => {

    const history = useHistory();

    const [keyword , setKeyword] = useState(props.keyword ? props.keyword : '');

    const gotoSearch = useCallback(
        () => {
            if(keyword.trim().length > 0){
                history.push(`${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if(e.keyCode === 13){
                gotoSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, gotoSearch])



    return (
        <div className='movie-search'>
        <Input 
        type = 'text'
        placeholder = 'Enter Keyword'
        value ={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        />
        <Button className='small' onClick={gotoSearch}>Search</Button>
        </div>
    )
}

export default MovieGrid

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './detail.scss';
import Cast from './Cast';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';
import DemoVideo from '../../components/demovideo/DemoVideo';
import { connect } from 'react-redux';
import Button from '../../components/button/Button';


const Detail = ({currentUser}) => {

  const { category,id } = useParams();
  const [item, setItem] = useState(null);

  

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category,id, {params:{}});
      setItem(response);
      window.scrollTo(0,0);

    }
    getDetail();
  }, [category, id]);
  

  
  return (
    <>
      {
        item && (
          <>  
          <div className='banner' style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}>
          </div>

          <div className="mb-3 movie-content container">
            <div className="movie-content-poster">
              <div className="movie-content-poster-img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}>

                </div>
             </div>  

             <div className="movie-content-info">

              <h1 className="title">
              {
              item.title || item.name
              }  
              </h1>

              <div className="genres">
                {
                item.genres && item.genres.slice(0,5).map((genre, i ) => (
                  <span key={i} className='genres-items'>{genre.name}</span>
                ))
                }
              </div>

              <p className="overview">
                {item.overview}
              </p>

              <div className="cast">
                <div className="section-header">
                  <h2>Casts</h2>
                </div>
                <Cast id={item.id}/>
              </div>

             </div>
          
          </div> 


          <div>

            { currentUser ? (
            
            <div className="container">
            
            <div className="section mb-3">
              <DemoVideo currentUser={currentUser}/>
            </div>

            <div className="section mb-3">
              <h1>Trailers</h1>
              <VideoList id={item.id}/>
           </div>

           <div className="section mb-3">
              <div className="section-header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type='similar' id={item.id}/>
            </div>

            </div>

            ) : (
              <div className='login-alert'>
             <h1>Please Sign-in/Sign-up to view this content</h1>
             <Button className='button'>
                                 <a 
                                 href='https://tmmovie-website.web.app/sign-in'
                                 className='link'>
                                 Sign In
                                 </a>
                                 </Button>
                </div>
         )}

          </div>        
          
          </>
        )
      }
    </>
  );
}

const mapStateToProps = state => ({

  currentUser: state.user.currentUser

})

export default connect(mapStateToProps)( Detail)


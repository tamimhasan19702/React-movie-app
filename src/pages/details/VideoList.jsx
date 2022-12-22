import React, {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';

function VideoList(props) {

  const {category} = useParams();

  const [videos, setvideos] = useState([]);

  useEffect(() => {
    const getvideos = async () => {
        const res = await tmdbApi.credits(category, props.id);
        setCasts(res.cast.slice(0,5));
    }
    getCredits();
  }, [category, props.id])

  return (
    <div>VideoList</div>
  )
}



const video = props => {
    
    const item = props.item;

    const iframeRef = useRef(null);
    
    return(
      <div className="video">
        <div className="video-title">
            <h2>{item.name}</h2>
        </div>
        <iframe 
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width='100%' 
        title='video'>
        </iframe>
      </div>
    )
}



export default VideoList
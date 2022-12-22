import React, {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';

function VideoList(props) {

  const {category} = useParams();

  const [videos, setvideos] = useState([]);

  useEffect(() => {
    const getvideos = async () => {
        const res = await tmdbApi.getVideos(category, props.id);
        setvideos(res.results.slice(0,5));
    }
    getvideos();
  }, [category, props.id])

  return (
    <div>
      {
        videos.map((item, i) => (
          <Video key={i} item={item}/>
        ))
      }
    </div>
  )
}



const Video = props => {
    
    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
      const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
      iframeRef.current.setAttribute('height', height);
    },[])
    
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
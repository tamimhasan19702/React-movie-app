import React from 'react'
import Button, { OutLineButton } from '../button/Button';
import { Link } from 'react-router-dom';
import './demovideo.scss';

function DemoVideo({currentUser}) {

return( 
        <div className="">

{
    currentUser ? (
      <div className='movie-video'>
                <iframe width="120%" height="1000px" src="https://www.youtube.com/embed/Uy6qr_l5vAE?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"></iframe>

            <div className="serverText">
            <p>If current server doesn't work please try other servers below.</p>
            <div className='serverName'>
             <OutLineButton><a href="#">Server 1</a> </OutLineButton>
             <OutLineButton><a href="#">Server 2</a> </OutLineButton>
             <OutLineButton><a href="#">Server 3</a> </OutLineButton>
             </div>
             </div>
            </div>
    ) : (
         <div className='login-alert'>
        <h1>Please Sign in to view the movie</h1>
        <Button className='button'>
                            <a 
                            href='https://tmmovie-website.web.app/sign-in'
                            className='link'>
                            Sign In
                            </a>
                            </Button>
           </div>
    )
  }

        </div>
             
)
}

export default DemoVideo


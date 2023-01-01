import React from 'react'
import { OutLineButton } from '../button/Button';
import './demovideo.scss';

function DemoVideo() {

return( 
            <div>
                <iframe width="100%" height="1000px" src="https://www.youtube.com/embed/Uy6qr_l5vAE?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <div className="serverText">
               <p>If current server doesn't work please try other servers below.</p>
            <div className='serverName'>
             <OutLineButton><a href="#">Server 1</a> </OutLineButton>
             <OutLineButton><a href="#">Server 2</a> </OutLineButton>
             <OutLineButton><a href="#">Server 3</a> </OutLineButton>
             </div>
             </div>
            </div>
            
)
}

export default DemoVideo

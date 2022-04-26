import React from 'react'
import YoutubeItem from './YoutubeItem';

function YoutubeList(props) {
    console.log(props);
  return (
    <div className='container'>
        <div className='youtube__list'>
            <ul>
            {props.videos.map((video, index)=>(
                <YoutubeItem key={index} video={video} />
            ))}
            </ul>
        </div>
    </div>
  )
}

export default YoutubeList
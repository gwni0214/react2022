import React from 'react'
import MovieItem from './MovieItem';

function MovieList(props) {
    console.log(props.videos);
  return (
    <div className='movie__list'>
      <ul>
        {/* {props.videos.results.map((list, index)=>(
          <MovieItem key={index} video={list} />
        ))}         */}
        {props.videos.map((list, index)=>(
            <MovieItem 
                key={index}
                video={list}
            />
        ))}
      </ul>
    </div>
  )
}

export default MovieList
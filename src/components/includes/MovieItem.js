import React from 'react'

function MovieItem(props) {
    // console.log(props.video);
  return (
    <li>
        <a href={`https://www.themoviedb.org/movie/${props.video.id}-${props.video.title}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${props.video.poster_path}`} alt={props.video.title} />
        <p>{props.video.title}</p>
        </a>
    </li>
  )
}

export default MovieItem
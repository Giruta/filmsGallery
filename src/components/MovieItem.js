import React from 'react';

const MovieItem = ({movie, removeMovie}) => {
  // console.log('movie = ', movie);
  // console.log('removeMovie = ', removeMovie);
  return (
    <div>
      <p>{movie.title}</p>
      <button onClick={removeMovie.bind(null, movie)}>
        Delete movie
      </button>
    </div>
  )
}

export default MovieItem;

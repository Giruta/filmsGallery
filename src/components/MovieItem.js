import React from 'react';

const MovieItem = ({movie, removeMovie, addMovieToWillWatch}) => {
  return (
    <>
      <div>
        <p>{movie.title}</p>
      </div>
      <div className='card'>
        <img
          className='card-img-top'
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
          alt="someImage"
        />
        <div className='card-body'>
          <h6 className='card-title'>{movie.title}</h6>
          <div className='d-flex justify-content-between align-items-center mb-4'>
            <p className='mb-0'>Rating: {movie.vote_average}</p>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={addMovieToWillWatch.bind(null, movie)}
            >
              Will Watch
            </button>
          </div>
          <button onClick={removeMovie.bind(null, movie)}>Delete movie</button>
        </div>
      </div>
    </>
  )
}

export default MovieItem;

import React from 'react';
import { moviesData } from '../moviesData';
import MovieItem from "./MovieItem";

let title = 'HELLO MOVIES GALLERY';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    }

    //this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies:updateMovies
    });
  };

  addMovieToWillWatch = movie => {

    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    console.log('this.state.moviesWillWatch after add = ', this.state.moviesWillWatch);
    console.log('this.state.moviesWillWatch.length after add= ', this.state.moviesWillWatch.length);

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  removeMovieFromWillWatch = movie => {

    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
      return item.id !== movie.id;
    })

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    })
  };

  render() {
    return (
      <>
        <h1 className='text-center'>{title}</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-10'>
              <div className='row'>
                {this.state.movies.map(movie => {
                  return (
                    <div className='col-6 mb-4' key={movie.id}>
                      <MovieItem
                        movie={movie}
                        removeMovie={this.removeMovie}
                        addMovieToWillWatch={this.addMovieToWillWatch}
                        removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='col-2'>
              <p>Will Watch: {this.state.moviesWillWatch.length}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;

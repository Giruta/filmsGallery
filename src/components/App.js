import React from 'react';
import { moviesData } from '../moviesData';
import MovieItem from "./MovieItem";

let title = 'HELLO MOVIES GALLERY';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: moviesData
    }

    //this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie = (movie) => {
    const updateMovie = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies:updateMovie
    });
  }

  render() {
    return (
      <>
        <h1>{title}</h1>
        <div>
          {this.state.movies.map(movie => {
            return <MovieItem
              key={movie.id}
              movie={movie}
              removeMovie={this.removeMovie}
            />
          })}
        </div>
      </>
    )
  }
}

export default App;

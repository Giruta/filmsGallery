import React from 'react';
import { moviesData } from '../moviesData';

let title = 'HELLO MOVIES GALLERY';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: moviesData
    }
  }

  removeMovie(movie) {
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
            return (
              <div key={movie.id}>
                <p>{movie.title}</p>
                <button onClick={this.removeMovie.bind(this, movie)}>
                  Delete movie
                </button>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default App;

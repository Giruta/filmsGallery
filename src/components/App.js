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

  render() {
    return (
      <div>
        {this.state.movies.map(function (movie) {
          return <p>{movie.title}</p>
        })}
      </div>
    )
  }
}

export default App;

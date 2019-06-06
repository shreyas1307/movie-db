import React, { Component } from "react";
import "./App.css";

import InputSection from "./components/InputSection/InputSection";
// import MovieList from "./components/MovieList/MovieList";
import Movie from "./components/MovieList/Movie/Movie";
// import Backdrop from "./components/UI/Backdrop/Backdrop";

class App extends Component {
  state = {
    movieSearch: []
  };

  inputHandler = event => {
    const { value } = event.target;

    let inputText = value;

    fetch(`https://www.omdbapi.com/?s=${inputText}&apikey=e2d95701`)
      .then(res => res.json())
      .then(data => {
        if (data.Search === undefined) {
          this.setState({ movieSearch: [] });
        } else {
          const movieData = data.Search;
          this.setState({ movieSearch: movieData });
        }
      });
  };

  render() {
    return (
      <div className="App">
        {/* <Backdrop> */}
        <InputSection inputHandler={this.inputHandler} />
        <div className="movie">
          {this.state.movieSearch.map(movie => {
            return (
              <div>
                <Movie
                  id={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  type={movie.Type}
                  poster={movie.Poster}
                  imdbID={movie.imdbID}
                />
              </div>
            );
          })}
        </div>
        {/* </Backdrop> */}
      </div>
    );
  }
}

export default App;

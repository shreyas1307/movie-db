import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    movieTitle: "",
    movieYear: "",
    plotRequest: "",
    movieDetails: {
      Title: "",
      Year: "",
      Rated: "",
      Released: "",
      RunTime: "",
      poster: "",
      plot: "",
      type: ""
    }
  };

  Getdata = () => {
    console.log("clicked");
    fetch(
      `https://www.omdbapi.com/?t=${this.state.movieTitle}&y=${
        this.state.movieYear
      }&plot=${this.state.plotRequest}&apikey=e2d95701`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          movieDetails: {
            Title: data.Title,
            Year: data.Year,
            Rated: data.Rated,
            Released: data.Released,
            RunTime: data.Runtime,
            poster: data.Poster,
            plot: data.Plot,
            type: data.Type
          }
        });
      });
  };

  movieHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <div className="input">
          <h1> Look up your Favorite Movie!</h1>
          <input
            type="text"
            name="movieTitle"
            value={this.state.movieTitle}
            placeholder="Name"
            onChange={this.movieHandler}
          />
          <input
            type="text"
            name="movieYear"
            value={this.state.movieYear}
            placeholder="Year"
            onChange={this.movieHandler}
          />
          <select name="plotRequest" onChange={this.movieHandler}>
            <option />
            <option value="">Short Plot</option>
            <option value="full">Full Plot</option>
          </select>
          <button onClick={this.Getdata}> Get Info!</button>
          <br />
          <br />
          <span>Powered by OMDb!</span>
        </div>

        <div className="movie">
          <div className="movie-poster">
            <img
              src={this.state.movieDetails.poster}
              alt={this.state.movieDetails.Title}
            />
          </div>

          <div className="movie-details">
            <h3>Movie:</h3>
            <p>{this.state.movieDetails.Title}</p>
            <h3>Year:</h3>
            <p>{this.state.movieDetails.Year}</p>
            <h3>Rated:</h3>
            <p>{this.state.movieDetails.Rated}</p>
            <h3>Released:</h3>
            <p>{this.state.movieDetails.Released}</p>
            <h3>Runtime:</h3>
            <p>{this.state.movieDetails.RunTime}</p>
            <h3>Type:</h3>
            <p>{this.state.movieDetails.type}</p>
          </div>

          <div className="movie-plot">
            <p>{this.state.movieDetails.plot}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

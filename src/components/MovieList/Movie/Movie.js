import React, { Component } from "react";
import classes from "./Movie.module.css";

class movie extends Component {
  state = {
    movieTitle: this.props.title,
    rating: "",
    release: ""
  };

  movieClickHandler = () => {
    fetch(`https://www.omdbapi.com/?t=${this.state.movieTitle}&apikey=e2d95701`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const rating = data.Rated;
        const release = data.Released;
        this.setState({
          rating: rating,
          release: release
        });
      });
  };

  componentWillReceiveProps() {
    setTimeout(this.setState({ movieTitle: this.props.title }), 1000);
  }

  //   const { title } = props;

  //Need to fetch more information about each movie title and then store it.
  //Try with useState Hooks for Functional Components
  //   fetch(`https://www.omdbapi.com/?t=${title}&apikey=e2d95701`)
  //     .then(res => res.json())
  //     .then(data => {
  //       const movieDetails = data;
  //       console.log(movieDetails);
  //     });
  render() {
    return (
      <div
        className={classes.movieDiv}
        key={this.props.id}
        onClick={this.movieClickHandler}
      >
        <img
          className={classes.img}
          src={this.props.poster}
          alt={this.props.title}
          width="240"
          height="360"
        />
        <h2>{this.props.title}</h2>
        <h3>{this.props.type.toUpperCase()}</h3>
        <h3>{this.props.year}</h3>
        <h3>{this.state.rating}</h3>
      </div>
    );
  }
}

export default movie;

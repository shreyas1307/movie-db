import React from "react";
import classes from "./Movie.module.css";

const movie = props => {
  //   const { title } = props;

  //Need to fetch more information about each movie title and then store it.
  //Try with useState Hooks for Functional Components
  //   fetch(`https://www.omdbapi.com/?t=${title}&apikey=e2d95701`)
  //     .then(res => res.json())
  //     .then(data => {
  //       const movieDetails = data;
  //       console.log(movieDetails);
  //     });

  return (
    <div className={classes.movieDiv} key={props.id}>
      <img
        className={classes.img}
        src={props.poster}
        alt={props.title}
        width="240"
        height="360"
      />
      <h2>{props.title}</h2>
      <h3>{props.type.toUpperCase()}</h3>
      <h3>{props.year}</h3>
    </div>
  );
};

export default movie;

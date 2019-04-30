import React from "react";
import Movie from "./Movie/Movie";

const movieList = props => {
  const { movieArray } = props;

  const movielist = movieArray.forEach(movie => {
    return (
      <Movie
        title={movie.Title}
        year={movie.Year}
        type={movie.Type}
        poster={movie.Poster}
        imdbID={movie.imdbID}
      />
    );
  });

  // let movieListing;
  // if (theArray === undefined) {
  //   return null;
  // } else {
  //   theArray.map(movie => {
  //     movieListing = (
  //       <div>
  //         <Movie
  //           title={movie.Title}
  //           year={movie.Year}
  //           type={movie.Type}
  //           poster={movie.Poster}
  //           imdbID={movie.imdbID}
  //         />
  //       </div>
  //     );
  //     return <div>{movieListing}</div>
  //   });
  // }
  return <div>{movielist}</div>;
};

export default movieList;

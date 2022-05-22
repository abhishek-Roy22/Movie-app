import React from "react";
import "./MovieList.css";

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <img src={movie.Poster} alt="/" />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </>
  );
}

export default MovieList;

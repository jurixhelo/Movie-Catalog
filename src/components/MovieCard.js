import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-item">
      <a
        href={`https://www.imdb.com/title/${movie.imdbID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/150"
          }
          alt={movie.Title}
        />
      </a>
      <p>{movie.Title}</p>
    </div>
  );
}

export default MovieCard;

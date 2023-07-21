import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movies }) => {
  return (
    <div>
      <div className="content">
        {movies &&
          movies.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    }
                    alt={movie.title}
                  />
                  <div className="movie-title">
                    <p>{movie.title}</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Movie;

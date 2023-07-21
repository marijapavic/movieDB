import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieCard = () => {
  const [movie, setMovie] = useState();
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=5c5aea335dc9608d9fb55851ac5bd210`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((error) => console.log(error.message));
  }, [params.id]);
  return (
    <div className="movie-container">
      <h2>{movie && movie.title}</h2>
      <div className="movie-info">
        <img
          src={
            movie && movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={movie && movie.title}
        />
        <div className="movie-details">
          <h4>Overview: </h4>
          <p>{movie && movie.overview}</p>
          <h4>Release date:</h4>
          <p>{movie && movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

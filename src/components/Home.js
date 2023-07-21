import React, { useState, useEffect } from "react";
import MovieCard from "./Movie";

const Home = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=5c5aea335dc9608d9fb55851ac5bd210&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, []);
  return <MovieCard movies={movies} />;
};

export default Home;

import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const Upcoming = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=5c5aea335dc9608d9fb55851ac5bd210&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, []);
  return <Movie movies={movies} />;
};

export default Upcoming;

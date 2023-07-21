import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=5c5aea335dc9608d9fb55851ac5bd210&query=${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        const res = data.results.filter((movie) => {
          return (
            value &&
            movie &&
            movie.title &&
            movie.title.toLowerCase().includes(value)
          );
        });
        setResults(res);
      })
      .catch((error) => console.log(error.message));
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    setIsOpen((isOpen) => !isOpen);
  };

  const clearSearch = () => {
    setInput("");
  };

  return (
    <div>
      <div className="search-box">
        <button className="btn-search">
          <BsSearch />
        </button>
        <input
          placeholder="Search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          className="input-search"
        />
      </div>

      <div className="results-list" onClick={() => setIsOpen(!isOpen)}>
        {isOpen && (
          <div>
            {results.map((movie) => {
              return (
                <Link
                  to={`/movies/${movie.id}`}
                  className="search-result"
                  onClick={clearSearch}
                  key={movie.id}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    }
                    alt={movie.title}
                    height="50px"
                  />
                  <div>{movie.title}</div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

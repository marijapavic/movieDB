import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import { BiCameraMovie } from "react-icons/bi";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="navbar">
          <NavLink to="/">
            <div className="nav-title">
              <BiCameraMovie className="movie-icon" />
              <h1>MovieDB</h1>
            </div>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/toprated">Top Rated</NavLink>
            </li>
            <li>
              <NavLink to="/upcoming">Upcoming</NavLink>
            </li>
          </ul>
          <SearchBar />
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/toprated" element={<TopRated />}></Route>
          <Route path="/upcoming" element={<Upcoming />}></Route>
          <Route path="/movies/:id" element={<MovieCard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

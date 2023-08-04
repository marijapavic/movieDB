import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
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

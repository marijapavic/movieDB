import Hamburger from "./Hamburger";
import { BiCameraMovie } from "react-icons/bi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="navbar">
      <NavLink to="/">
        <div className={`nav-title ${showNavbar && "active"}`}>
          <BiCameraMovie className="movie-icon" />
          <h1>MovieDB</h1>
        </div>
      </NavLink>
      <div className={`nav-elements ${showNavbar && "active"}`}>
        <ul>
          <li className="listitem">
            <NavLink to="/" onClick={handleShowNavbar}>
              Home
            </NavLink>
          </li>
          <li className="listitem">
            <NavLink to="/toprated" onClick={handleShowNavbar}>
              Top Rated
            </NavLink>
          </li>
          <li className="listitem">
            <NavLink to="/upcoming" onClick={handleShowNavbar}>
              Upcoming
            </NavLink>
          </li>
        </ul>
      </div>
      <div onClick={handleShowNavbar} className="ham">
        <Hamburger isOpen={showNavbar} />
      </div>
      <SearchBar handleShowNavbar={handleShowNavbar} />
    </header>
  );
};

export default Navbar;

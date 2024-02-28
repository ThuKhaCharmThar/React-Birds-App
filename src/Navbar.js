import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-ocean-blue">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isMenuOpen ? "show" : ""
          } justify-content-center`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link active fs-5"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/BirdList"
                className="nav-link fs-5"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                Birds
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-250">
        <div className="flex items-center justify-between h-20">
          <ul className="text-white hover:text-blue-300">
            Matthew Lui 
          </ul>
          <NavLink className="text-white hover:text-blue-300" exact to="/">
            Home
          </NavLink>
          <NavLink className="text-white hover:text-blue-300" exact to="/About">
            About
          </NavLink>
          <NavLink
            className="text-white hover:text-blue-300"
            exact
            to="/Portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            cclassName="text-white hover:text-blue-300"
            exact
            to="/Contact"
          >
            Contact
          </NavLink>
          <ul>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              LinkedIn
            </a>
          </ul>
          <ul>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              GitHub
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

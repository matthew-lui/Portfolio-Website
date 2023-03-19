import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <ul className="text-white hover:text-blue-300">Matthew Lui</ul>
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
          <NavLink className="text-white hover:text-blue-300" exact to="/Contact">
            Contact
          </NavLink>
          <ul>
            <a
              href="https://www.linkedin.com/in/lui-matthewm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </ul>
          <ul>
            <a
              href="https://github.com/matthew-lui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 ml-4"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
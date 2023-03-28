import React from 'react';
import { NavLink } from 'react-router-dom';
import MatthewLogo from './MatthewLogo.png';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          <ul className="text-white hover:text-blue-300">
            <img src={MatthewLogo} className="w-60 h-70" />
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
          <NavLink className="text-white hover:text-blue-300" exact to="/Contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

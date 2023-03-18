import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <NavLink className="navLink" exact to="/">Home</NavLink>
                <NavLink className="navLink" exact to="/About">About</NavLink>
                <NavLink className="navLink" exact to="/Portfolio">Portfolio</NavLink>
                <NavLink className="navLink" exact to="/Contact">Contact</NavLink>
            </nav>

        </div>
    );
}

export default Navbar;
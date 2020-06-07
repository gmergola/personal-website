import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
  return (
    <div>
        <nav>
          <ul>
            <li className="NavBar-list"><NavLink className="NavBar-link" exact to="/">Home</NavLink></li>
            <li className="NavBar-list"><NavLink className="NavBar-link" exact to="/about">About</NavLink></li>
            <li className="NavBar-list"><NavLink className="NavBar-link" exact to="/contact">Contact</NavLink></li>
            <li className="NavBar-list"><NavLink className="NavBar-link" exact to="/projects">projects</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar;
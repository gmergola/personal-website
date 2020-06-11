import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar-div">
        <nav>
          <ul>
            <li className="NavBar-list"><NavLink className="NavBar-link" exact to="/"><b>Home</b></NavLink></li>
            <li className="NavBar-list"><NavLink className="NavBar-link" exact to="/about"><b>About</b></NavLink></li>
            <li className="NavBar-list"><NavLink className="NavBar-link" exact to="/contact"><b>Contact</b></NavLink></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar;
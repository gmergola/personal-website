import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import resume from './images/Genna-resume.pdf';

function NavBar() {
  return (
    <div className="NavBar-container">
      <nav>
        <ul>
          <li className="NavBar-list">
            <NavLink className="NavBar-link" exact to="/">
              <b>Home</b>
            </NavLink>
          </li>
          <li className="NavBar-list">
            <NavLink className="NavBar-link" exact to="/about">
              <b>About</b>
            </NavLink>
          </li>
          <li className="NavBar-list">
            <NavLink className="NavBar-link" exact to="/contact">
              <b>Contact</b>
            </NavLink>
          </li>
          <li className="NavBar-list">
            <a className="NavBar-link" href={resume} download>
              <b>Download Resume</b>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

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
            <a className="NavBar-link" href="https://docs.google.com/document/d/1uVXYcAsbLHP8MNTOhjnVjyhFYnJltd1vMC4k34muxbw/edit">
              <b>Resume</b>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
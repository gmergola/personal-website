import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/about">About</NavLink></li>
        <li><NavLink exact to="/contact">Contact</NavLink></li>
        <li><NavLink exact to="/projects">projects</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;
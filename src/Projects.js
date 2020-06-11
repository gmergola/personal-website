import React from 'react';
import './Projects.css';
// import faceArrow from './images/face-arrow.gif';

function Projects(){
  return (
    <div id="Project-div">
      <h1 id="Project-title" className="Project-title" >Some Apps I've built...</h1>
      {/* <img className="Project-fac-arrow" src={faceArrow} alt=""/> */}
      <br/>
      <p className="Project-name">Jobly</p>
      <button className="Project-btn"><a className="Project-link"href="https://github.com/gmergola/react-jobly">Github Link </a></button>
      <p className="Project-info" >Built using: React, Express, and PostgreSQL </p>
      <p className="Project-name">Warbler</p>
      <button className="Project-btn"><a className="Project-link"href="https://github.com/gmergola/Warbler">Github Link </a></button>
      <p className="Project-info">A Twitter clone application built using: Python, Flask, and PostgreSQL</p>
      <div className="Project-bottom"></div>
    </div>
  )
}

export default Projects;
import React from 'react';
import './Projects.css';
// import faceArrow from './images/face-arrow.gif';

function Projects(){
  return (
    <div id="Project-div">
      <h1 id="Project-title" className="Project-title" >Some Apps I've built...</h1>
      <br/>
      <p className="Project-name">Jobly</p>
      <button className="Project-btn"><a className="Project-link"href="https://github.com/gmergola/react-jobly">Github Link </a></button>
      <p className="Project-info" >A site for users to find and apply for jobs</p>
      <p className="Project-info" ><b>Built using: </b> React, Express, and PostgreSQL </p>
      <p className="Project-name">Warbler</p>
      <button className="Project-btn"><a className="Project-link"href="https://github.com/gmergola/Warbler">Github Link </a></button>
      <p className="Project-info">A Twitter clone application</p>
      <p className="Project-info"><b>Built using: </b> Python, Flask, and PostgreSQL</p>
      <div className="Project-bottom"></div>
    </div>
  )
}

export default Projects;
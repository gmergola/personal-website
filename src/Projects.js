import React from 'react';
import './Projects.css';
import faceArrow from './images/face-arrow.gif';

function Projects(){
  console.log('projects rendered')
  return (
    <div>
      <h1 id="Project-title" className="Project-title" >Some Apps I've built...</h1>
      <img className="Project-fac-arrow" src={faceArrow} alt=""/>
      <br/>
      <a className="Project-link" href="https://github.com/gmergola/react-jobly">Jobly </a>
      <p className="Project-info" >Built using: React, Express,  and PostgreSQL </p>
      <a className="Project-link" href="https://github.com/gmergola/Warbler">Warbler</a>
      <p className="Project-info">A Twitter clone application built using: Python, Flask, and PostgreSQL</p>
      <div className="Project-bottom"></div>
    </div>
  )
}

export default Projects;
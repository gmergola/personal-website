import React from 'react';
import './Projects.css';
import faceArrow from './images/face-arrow.gif';

function Projects(){
  return (
    <div>
      <h1 className="Projects-title" >Some Apps I've built...</h1>
      <a className="Project-link" href="https://github.com/gmergola/react-jobly">Jobly </a>
      <p className="Project-info" >Built using: React, Express,  and PostgreSQL </p>
      <a className="Project-link" href="https://github.com/gmergola/Warbler">Warbler</a>
      <p className="Project-info">A Twitter clone application built using: Python, Flask, and PostgreSQL</p>
      <b><p className="Project-game-title">Let's Play some games!</p></b>
      <img className="Project-fac-arrow" src={faceArrow} alt=""/>
      <div><a className="Project-game" href="http://hospitable-smile.surge.sh/">Click to play Connect Four!</a></div>
    </div>
  )
}

export default Projects;
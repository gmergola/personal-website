import React from 'react';
import './Projects.css';
import jobly from './images/jobly-home.png';
import microblog from './images/microblog-home.png';
import warbler from './images/warbler-home.png';
import jeopardy from './images/jeopardy-home.png';

function Projects(){
  return (
    <div id="Project-div">
      <h1 id="Project-title" className="Project-title" >Some Apps I've built...</h1>
      <br/>
      <p className="Project-name">Jobly</p>
      <div><img className="Projects-picture" src={jobly} alt="jobly-home"/></div>
      <button className="Project-btn"><a className="Project-link"href="https://github.com/gmergola/react-jobly">Github Link </a></button>
      <p className="Project-info" >A site for users to find and apply for jobs</p>
      <p className="Project-info" ><b>Built using: </b> React, Express, and PostgreSQL </p>

      <p className="Project-name">Microblog</p>
      <div><img className="Projects-picture" src={microblog} alt="microblog-home"/></div>
      <button className="Project-btn"><a className="Project-link"href="https://github.com/gmergola/redux-microblog">Github Link </a></button>
      <p className="Project-info" >An innovative site for communicating on the information superhighway</p>
      <p className="Project-info" ><b>Built using: </b> React, Redux, Express, and PostgreSQL </p>

      <p className="Project-name">Warbler</p>
      <div><img className="Projects-picture" src={warbler} alt="warbler-home"/></div>
      <button className="Project-btn"><a className="Project-link"href="https://github.com/gmergola/Warbler">Github Link </a></button>
      <p className="Project-info">A Twitter clone application</p>
      <p className="Project-info"><b>Built using: </b> Python, Flask, and PostgreSQL</p>

      <p className="Project-name">Jeopardy!</p>
      <div><img className="Projects-picture" src={jeopardy} alt="jeopardy-home"/></div>
      <button className="Project-btn"><a className="Project-link"href="http://physical-achieve.surge.sh/">App link </a></button>
      <p className="Project-info">A game to play Jeopardy</p>
      <p className="Project-info"><b>Built using: </b> Vanilla Javascript, HTML, and CSS</p>
      {/* <p className="Project-name">Madlibs!</p>
      <button className="Project-btn"><a className="Project-link"href="http://nappy-breath.surge.sh/">App link </a></button>
      <p className="Project-info">An app to play madlibs</p>
      <p className="Project-info"><b>Built using: </b>React</p> */}
      <div className="Project-bottom"></div>
    </div>
  )
}

export default Projects;
import React from 'react';
import './About.css';
import resume from './images/resume.png';

function About(){
  return (
    <div>
      <h1 className="About-title">About Me</h1>
      <p className="About-info">
        I am a software engineer based in San Francisco, CA
      </p>
      <img className="About-resume" src={resume} alt="resume"/>
    </div>
  )
}

export default About;
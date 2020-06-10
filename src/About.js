import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <h1 className="About-title">About Me</h1>
      <p className="About-info">
        I am a software engineer based in San Francisco, CA
      </p>
      <button className="About-resume" >
        <a className="About-resume-link" href="https://docs.google.com/document/d/1uVXYcAsbLHP8MNTOhjnVjyhFYnJltd1vMC4k34muxbw/edit">Resume</a>
      </button>
    </div>
  )
}

export default About;
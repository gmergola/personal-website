import React, { useState } from 'react';
import pinkDot from './images/pink-dot.gif';
import './Home.css';
import Projects from './Projects';

function Home() {
  const [showIcon, setShowIcon] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  function showIntro() {
    setTimeout(() => {
      setShowIcon(false);
    }, 1350)
  }

  return (
    <div>
      {
        showIcon ?
          <img className="Home-pinkDot" src={pinkDot} alt="dot" />
          :
          <div>
            <p className="Home-intro">Hi, my name is</p>
            <p className="Home-name">Genna</p>
            <p className="Home-info">I build things for the web...</p>
            {showProjects ?
              <Projects />
              :
              <a onClick={() => setShowProjects(true)} href="#Project-title">
                <button className="Home-projects-btn">
                  checkout some apps i've built!
                </button>
              </a>}
          </div>
      }

      {showIntro()}
    </div>
  )
}

export default Home;
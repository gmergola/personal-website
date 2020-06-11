import React, { useState } from 'react';
import pinkDot from './images/pink-dot.gif';
import './Home.css';
import Projects from './Projects';
import { Link } from "react-scroll";



function Home() {
  const [showIcon, setShowIcon] = useState(true);

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
            <p className="Home-info"><b>I build things for the web...</b></p>
             <Link
             activeClass="active"
             className="Home-projects-btn"
             to="Project-div"
             spy={true}
             smooth={true}
             duration={1000}>
               Check out some apps I've built
             </Link>

             <Projects />

             <Link
             activeClass="active"
             className="Home-projects-btn"
             to="NavBar-div"
             spy={true}
             smooth={true}
             duration={1000}>
               Scroll to top
             </Link>
          </div>
      }
      {showIntro()}
    </div>
  )
}

export default Home;
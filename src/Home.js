import React from 'react';
import './Home.css';
import Projects from './Projects';
import { Link } from "react-scroll";
import me from './images/headshot.png';



function Home() {

  return (
    <div className="container">
      <img className="headshot" src={me} alt="me" />
      <div className="Home-intro-wrapper">
        <p className="Home-intro">Hi, my name is</p>
        <p className="Home-name">Genna</p>
        <p className="Home-info">I build things for the web...</p>
      </div>
      <div className="Home-btn-div">
        <Link
          activeClass="active"
          className="Home-projects-btn"
          to="Project-div"
          spy={true}
          smooth={true}
          duration={1000}>
          Check out some apps I've built
          </Link>
      </div>

      <Projects />

      <Link
        activeClass="active"
        className="Home-projects-btn"
        to="NavBar-container"
        spy={true}
        smooth={true}
        duration={2000}>
        Scroll to top
        </Link>
    </div >
  )
}

export default Home;
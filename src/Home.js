import React from 'react';
import './Home.css';
import Projects from './Projects';
import { Link } from "react-scroll";



function Home() {

  return (
    <div className="container">
      <div >
        <p className="Home-intro">Hi, my name is</p>
        <p className="Home-name">Genna</p>
        <p className="Home-info"><b>I build things for the web...</b></p>
        <div className="Home-btn-div"><Link
          activeClass="active"
          className="Home-projects-btn"
          to="Project-div"
          spy={true}
          smooth={true}
          duration={1000}>
          Check out some apps I've built
        </Link></div>

        <Projects />

        <Link
          activeClass="active"
          className="Home-projects-btn"
          to="NavBar-container"
          spy={true}
          smooth={true}
          duration={1000}>
          Scroll to top
        </Link>
      </div>
    </div>
  )
}

export default Home;
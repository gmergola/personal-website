import React, { useState } from 'react';
import pinkDot from './images/pink-dot.gif';
import './Home.css';

function Home() {
  const [showIcon, setShowIcon] = useState(true);
  const [showNameIs, setShowNameIs] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showBuild, setShowBuild] = useState(false);

  function showIntro() {
    setTimeout(() => {
      setShowIcon(false);
      setShowNameIs(true);
    }, 1350)

    setTimeout(() => {
      setShowName(true);
    }, 2000)

    setTimeout(() => {
      setShowBuild(true);
    }, 3000)
  }

  return (
    <div>
      {showIcon ? <img className="Home-pinkDot" src={pinkDot}
      alt="dot" />: ""}
      {showNameIs ? <p className="Home-intro">Hi, my name is...</p>: ""}
      {showName ? <p className="Home-name">Genna</p> : ""}
      {showBuild ? <p className="Home-info">I build things for the web...</p> : ""}
      {showIntro()}
    </div>
  )
}

export default Home;
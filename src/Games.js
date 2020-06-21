import React from 'react';
import './Projects.css';
import jeopardy from './images/jeopardy-home.png';
import guessingGame from './images/guessing-game.png';

function Games() {
  return (
    <div id="Project-div">
      <h1 id="Games-title" className="Project-title" >Some games I've built...</h1>
      <div className="Project-container">
        <img className="Projects-picture" src={jeopardy} alt="jeopardy-home" />
        <div className="Project-context">
          <p className="Project-name">Jeopardy!</p>
          <h5 className="Project-info">Built using: Javascript, JQuery, HTML, and CSS</h5>
          <p className="Project-info">
            A game to play Jeopardy! Jeopardy is a frontend application built using Javascript. It makes an axios GET
            request to the Jeopardy API to get questions and answers. Try it out by clicking the button below!
          </p>
          <button className="Project-btn"><a className="Project-link" href="http://physical-achieve.surge.sh/">Live App Demo </a></button>
        </div>
      </div>

      <div className="Project-container">
        <img className="Projects-picture" src={guessingGame} alt="guessing-game" />
        <div className="Project-context">
          <p className="Project-name">Guessing Game!</p>
          <h5 className="Project-info">Built using: Vanilla Javascript, HTML, and CSS</h5>
          <p className="Project-info">
            Guess a number between 1 and 100... The game will choose a random number for you to try and guess, it will let you know
            if your guess was to high, too low, or just right!
          </p>
          <button className="Project-btn"><a className="Project-link" href="https://github.com/gmergola/guessing-game">Github Link </a></button>
          <button className="Project-btn"><a className="Project-link" href="http://tan-market.surge.sh/">Live App Demo </a></button>
        </div>
      </div>
      <div className="Project-bottom"></div>
    </div>
  )
}

export default Games;
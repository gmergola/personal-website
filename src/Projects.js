import React from 'react';
import './Projects.css';
import jobly from './images/jobly-home.png';
// import microblog from './images/microblog-home.png';
import warbler from './images/warbler-home.png';
import jeopardy from './images/jeopardy-home.png';
import guessingGame from './images/guessing-game.png';
import questions from './images/questions.png';

function Projects() {

  return (
    <div id="Project-div">
      <h1 id="Project-title" className="Project-title" >Some apps I've built...</h1>
      <br />

      {/* <div className="Project-container">
        <img className="Projects-picture" src={microblog} alt="microblog-home" />
        <div className="Project-context">
          <p className="Project-name">Microblog</p>
          <h5 className="Project-info" >Built using: React, Redux, Express, and PostgreSQL  </h5>
          <p className="Project-info" >
            An innovative site for communicating on the information superhighway. Microblog was built with React and Redux on the
            frontend paired with Express and PostgreSQL on the backend. Microblog allows any user to post, edit, and delete posts. A user
            can also up or down vote a blog post as well as comment on it (comments can also be deleted).
          </p>
          <button className="Project-btn"><a className="Project-link" href="https://github.com/gmergola/Microblog">Github Link</a></button>
          <button className="Project-btn"><a className="Project-link" href="https://nervous-agnesi-2c7074.netlify.app/">Live App Demo</a></button>
        </div>
      </div> */}

      <div className="Project-container">
        <img className="Projects-picture" src={questions} alt="questions" />
        <div className="Project-context">
          <p className="Project-name">Questions!</p>
          <h5 className="Project-info">Built using: React, Express, and PostgreSQL</h5>
          <p className="Project-info">
          A Family Feud inspired game with a twist!
          Questions home page has a select form for the user to choose a question to answer.
          Once the user has selected a question they are to decide who is on team 1 and who is on team 2.
          Once the teams have been decided, team 1 and team 2 each submit an answer. After that, the team with the highest voted answer starts!
          Once the starting team has been selected, that team has three chances to guess as many correct answers as they can.
          If that team hits three incorrect answers, it is the other team's turn.
          Every question has 6 answers, when all 6 correct answers have been guessed, the team with the highest remaining points wins that round!
          </p>
          <button className="Project-btn"><a className="Project-link" href="https://github.com/gmergola/Questions">Github Link </a></button>
          <button className="Project-btn"><a className="Project-link" href="https://gracious-jang-a2386f.netlify.app/">Live App Demo</a></button>
        </div>
      </div>

      <div className="Project-container">
        <img className="Projects-picture" src={jobly} alt="jobly-home" />
        <div className="Project-context">
          <p className="Project-name">Jobly</p>
          <h5 className="Project-info" >Built using:  React, Express, and PostgreSQL</h5>
          <p className="Project-info" >
          A job application site
          Jobly has login, register, and logout features. When logged in the user can see a list of companies hiring as well as a list of jobs to apply to.
          The user has a profile page where they can see their profile information as well as edit that information.
          Jobly's express backend uses a JWT to ensure a user is logged in otherwise they cannot see the companies, jobs, or profile page.
          Jobly's frontend stores the JWT in localStorage to authenticate and authorize the user logging in.
          Jobly's backend makes use of JSON schema to validate forms before any information is sent and saved to the database.
          </p>
          <button className="Project-btn"><a className="Project-link" href="https://github.com/gmergola/Jobly">Github Link </a></button>
          <button className="Project-btn"><a className="Project-link" href="https://jolly-bartik-93b7c7.netlify.app/">Live App Demo</a></button>
        </div>
      </div>

      <div className="Project-container">
        <img className="Projects-picture" src={warbler} alt="warbler-home" />
        <div className="Project-context">
          <p className="Project-name">Warbler</p>
          <h5 className="Project-info">Built using: Python, Flask, and PostgreSQL</h5>
          <p className="Project-info">
            A Twitter clone application!
            Warbler was built with Flask and Jinja templates on the frontend paired with Flask and
            PostgreSQL on the backend. Warbler uses Flask's WTForms to validate information going in and out of the database.
            Warbler also uses Flask's Session to store if a user is logged in and the correct user. By correct user I mean, when
            the user is trying to edit their profile they can only edit their own and no one else's, a user can only delete their
            profile and no other, a user can only like other's posts and not their own. While using Warbler, a user can:
            write posts, like other's posts, edit their profile, follow other user's, and delete their profile.
            </p>
          <button className="Project-btn"><a className="Project-link" href="https://github.com/gmergola/Warbler">Github Link </a></button>
          <button className="Project-btn"><a className="Project-link" href="https://genna-k-warbler.herokuapp.com/">Live App Demo</a></button>
        </div>
      </div>

      <div className="Project-container">
        <img className="Projects-picture" src={jeopardy} alt="jeopardy-home" />
        <div className="Project-context">
          <p className="Project-name">Jeopardy!</p>
          <h5 className="Project-info">Built using: Javascript, JQuery, HTML, and CSS</h5>
          <p className="Project-info">
            A game to play Jeopardy.
            Jeopardy is a frontend application built using Javascript. It makes an axios GET
            request to the Jeopardy API to get questions and answers. Try it out!
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
            if your guess was too high, too low, or just right!
          </p>
          <button className="Project-btn"><a className="Project-link" href="https://github.com/gmergola/guessing-game">Github Link </a></button>
          <button className="Project-btn"><a className="Project-link" href="http://tan-market.surge.sh/">Live App Demo </a></button>
        </div>
      </div>

      <div className="Project-bottom"></div>
    </div>
  )
}

export default Projects;
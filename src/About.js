import React from 'react';
import './About.css';

/**TODO: margin check description */
function About() {
  return (
    <div>
      <h1 className="About-title">About Me</h1>
      <h3 className="About-SE"><i>I am a software engineer based in San Francisco, CA</i></h3>
      <div className="About-info">
        <h4 className="About-work">WORK EXPERIENCE</h4>

        <div className="About-info-container">
          <div className="About-info-pre">
            <h3>Software Engineer Intern @ Clever Counsel</h3>
            <p>May 2020 - June 2020 // San Francisco </p>
            <p><i>Clever Counsel is a tech start-up Leveraging technology to address the justice gap.</i></p>
          </div>
          <div className="About-info-body">
            <p>‣ Developed full stack user friendly functionality for the application across
              multiple areas using React, Flask with SQLAlchemy, mySQL, and AWS</p>
            <p>‣ Implemented and fully designed the frontend and backend of the search
              functionality for the application used in multiple components</p>
            <p>‣ Doubled frontend test coverage using jest with api mocking</p>
            <p>‣ Designed the frontend and backend functionality  for a user to write a note
              about a case</p>
            <p>‣ Collaborated with a team of five engineers to upgrade the fullstack code base
              for easier readability, ensuring long term success</p>
          </div>
        </div>
        <br />

        <div className="About-info-container">
          <div className="About-info-pre">
            <h3>Yoga Instructor @ Corepower Yoga </h3>
            <p>2017 - Present // San Francisco, New York City, Boston  </p>
            <p>
              <i>Corepower Yoga’s mission is to show the world the incredible
              life-changing things that happen when you root an intensely physical
              workout in the mindfulness of yoga.</i>
            </p>
          </div>
          <div className="About-info-body">
            <p>‣ Led groups of 20-50 people through an hour class while exercising my ability to
            keep everyone on track as well as controlling the music and temperature of the room.</p>
            <p>‣ Lead a 5 week Yoga Sculpt teacher training to approximately 30 students in NYC, where
            I recruited 7 out of 14 participants.</p>
            <p>‣ Was given a 10% raise as a result of demonstrating great communication and customer
            service skills between myself and the clients.</p>
          </div>
        </div>
        <br />

        <div className="About-info-container">
          <div className="About-info-pre">
            <h3>Professional Dancer @ Artichoke Dance Company  </h3>
            <p>2016 - 2019 // New York City</p>
            <p>
              <i>Artichoke Dance Company offers unique public performances and educational art experiences.
              Through the interactive nature of dance, they help people become more physically, socially,
                and environmentally conscious.</i>
            </p>
          </div>
          <div className="About-info-body">
            <p>‣ Performed for over a thousand audience members across NYC at sustainability conscious and environmentally
            aware events.</p>
            <p>‣ Created material for the whole company to use in over 20+ performances around NYC.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
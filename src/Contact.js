import React from 'react';
import './Contact.css';
import email from './images/email.png';
import facebook from './images/facebook-icon.png';
import github from './images/github.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';

function Contact() {
  return (
    <div>
      <h1 className="Contact-title">Contact Me</h1>
      <div className="Contact-icon-div">
        <a href="mailto:gennamergola@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="Contact-icon email" src={email} alt="email" />
        </a>
        <a href="https://www.linkedin.com/in/genna-mergola-73b109116/" target="_blank" rel="noopener noreferrer">
          <img className="Contact-icon email" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/gmergola" target="_blank" rel="noopener noreferrer">
          <img className="Contact-icon email" src={github} alt="github" />
        </a>
        <a href="https://twitter.com/GennaMergola" target="_blank" rel="noopener noreferrer">
          <img className="Contact-icon email" src={twitter} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/gennakearney/" target="_blank" rel="noopener noreferrer">
          <img className="Contact-icon email" src={instagram} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/genna.mergola/" target="_blank" rel="noopener noreferrer">
          <img className="Contact-icon email" src={facebook} alt="facebook" />
        </a>
      </div>
    </div>
  )
}

export default Contact;
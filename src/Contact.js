import React from 'react';
import './Contact.css';
import emailGif from './images/email.gif';
import arrow from './images/arrow-down.gif';

function Contact() {
  return (
    <div>
      <p className="Contact-email"><b>Click to Email me</b></p>
      <img className="Contact-arrow" src={arrow} alt="arrow" />
      <div>
        <a href="mailto:gennamergola@gmail.com">
          <img className="Contact-mail-gif" src={emailGif} alt="email-gif" />
        </a>
      </div>
    </div>
  )
}

export default Contact;
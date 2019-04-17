import React from 'react';
import emailLogo from './images/email.png';
import linkedLogo from './images/linkedin.png';
import githubLogo from './images/github.png';
import instaLogo from './images/instagram.png';
import HeroBlock from './HeroBlock.js';

export default class Contact extends React.Component {
  render() {
    return(<div className="contact-body">
        <HeroBlock />      
        <div className="contact-info">
          <img alt="email icon" className="contact-icon" src={emailLogo}></img><span className="contact-text"> jason.michael.hoffman@gmail.com</span><br />
          <img alt="linkedIn icon" className="contact-icon" src={linkedLogo}></img><span className="contact-text">  https://www.linkedin.com/in/publikwerker/</span><br />
          <img alt="github icon" className="contact-icon" src={githubLogo}></img><span className="contact-text">  https://github.com/publikwerker</span><br />
          <img alt="instagram icon" className="contact-icon" src={instaLogo}></img><span className="contact-text">  @publikwerker</span><br />
        </div>
      </div>
    )
  }
}
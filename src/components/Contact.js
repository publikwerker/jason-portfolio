import React from 'react';
import emailLogo from './images/email.png';
import linkedLogo from './images/linkedin.png';
import githubLogo from './images/github.png';
import instaLogo from './images/instagram.png';
import HeroBlock from './HeroBlock.js';

export default class Contact extends React.Component {
  render() {
    return(<main className="contact-body main-body">
        <HeroBlock />      
        <div className="contact-info">
        <a href="mailto:hello@publikwerker.com?Subject=I%20want%20to%20hire%20you!" target="_blank" rel="noopener noreferrer"><img alt="email icon" className="contact-icon" src={emailLogo}></img></a>
        <p className="contact-text"> hello@publikwerker.com</p>
          <a href="https://www.linkedin.com/in/publikwerker/" target="_blank" rel="noopener noreferrer">
          <img alt="linkedIn icon" className="contact-icon" src={linkedLogo}></img>
          </a>
          <p className="contact-text">  www.linkedin.com/in/publikwerker/</p>
          <a href="https://github.com/publikwerker" target="_blank" rel="noopener noreferrer">
          <img alt="github icon" className="contact-icon" src={githubLogo}></img></a>
          <p className="contact-text">  github.com/publikwerker</p>
          <a href="https://www.instagram.com/publikwerker/" target="_blank" rel="noopener noreferrer"><img alt="instagram icon" className="contact-icon" src={instaLogo}></img></a>
          <p className="contact-text">  @publikwerker</p>
        </div>
      </main>
    )
  }
}
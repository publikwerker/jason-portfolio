import React from 'react';
import { Link } from 'react-router-dom';
import emailLogo from './images/email.png';
import linkedLogo from './images/linkedin.png';
import githubLogo from './images/github.png';
import instaLogo from './images/instagram.png';
import HeroBlock from './HeroBlock.js';

export default class Contact extends React.Component {
  render() {
    return(<div className="contact-body">
      <p className="contact-text">	Yes, I welcome custom, collaborative, and commissioned work.</p>
        <HeroBlock />      
        <div className="contact-info">
        <a href="mailto:someone@example.com?Subject=I%20want%20to%20hire%20you!" target="_blank" rel="noopener noreferrer"><img alt="email icon" className="contact-icon" src={emailLogo}></img></a><span className="contact-text"> jason.michael.hoffman@gmail.com</span><br />
          <a href="https://www.linkedin.com/in/publikwerker/" target="_blank" rel="noopener noreferrer">
          <img alt="linkedIn icon" className="contact-icon" src={linkedLogo}></img>
          </a>
          <span className="contact-text">  www.linkedin.com/in/publikwerker/</span><br />
          <a href="https://github.com/publikwerker" target="_blank" rel="noopener noreferrer">
          <img alt="github icon" className="contact-icon" src={githubLogo}></img></a><span className="contact-text">  github.com/publikwerker</span><br />
          <a href="https://www.instagram.com/publikwerker/" target="_blank" rel="noopener noreferrer"><img alt="instagram icon" className="contact-icon" src={instaLogo}></img></a><span className="contact-text">  @publikwerker</span><br />
        </div>
      </div>
    )
  }
}
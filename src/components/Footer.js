import React from 'react';
const instaLogo = require('./images/instagram.png');
const linkedInLogo = require('./images/linkedin.png');
export default class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">

      <div className="footer-button-box row">
      
        <a className="button" href="https://www.instagram.com/publikwerker" >
        <img className="footer-link" src={instaLogo} alt="instagram logo" ></img>
        </a>

        <a className="button" href="https://www.linkedin.com/in/publikwerker" >
        <img className="footer-link" src={linkedInLogo} alt="LinkedIn logo" ></img>
        </a>
      </div>

      <p className="footer-text">All content Copyright &copy; 2021 Publikwerks, LLC</p>

      </footer>
    )
  }
}
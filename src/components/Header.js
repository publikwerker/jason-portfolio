import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {

    // these variables check the URL location, 
    // and render nav buttons only if not on that page already
    let contactCheck, aboutCheck, werkCheck;
    aboutCheck = (this.props.location.pathname === '/');
    contactCheck = (this.props.location.pathname === '/contact');
    werkCheck = (this.props.location.pathname === '/werk');
    const projectLink = <Link to="/werk">
        <li className="top-link button">Projects</li>
      </Link>;
    const homeLink = <Link to="/">
         <li className="top-link button">About</li>
       </Link>;
    const contactLink = <Link to="/contact">
        <li className="top-link button">Contact</li>
       </Link>;
    const werksLink = <a className="top-link button" href="https://www.publikwerks.com" target="_blank" rel="noopener noreferrer">Publikwerks</a>
    return (
      <header role="banner" className="header">
        <nav role="navigation">
          <ul className="top-nav row">
            {!werkCheck && projectLink}
            {!aboutCheck && homeLink}
            {!contactCheck && contactLink}
            {werksLink}
          </ul>
        </nav>
      </header>
    )
  }
}
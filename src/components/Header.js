import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./images/yaldabaothinsta.jpg";

export default class Header extends React.Component {
  render() {

    // these variables check the URL location, 
    // and render nav buttons only if not on that page already
    let contactCheck, 
        aboutCheck, 
        werkCheck,
        discloseCheck;
    aboutCheck = (this.props.location.pathname === '/');
    contactCheck = (this.props.location.pathname === '/contact');
    discloseCheck = (this.props.location.pathname === '/disclose');
    werkCheck = (this.props.location.pathname === '/werk');
    const projectLink = <Link to="/werk" className="top-link">
        <li className="button">Projects</li>
      </Link>;
    const homeLink = <Link to="/" className="top-link">
         <li className="button">About</li>
       </Link>;
    const contactLink = <Link to="/contact" className="top-link">
        <li className="button">Contact</li>
       </Link>;
    const discloseLink = <Link to="/disclose" className="top-link">
        <li className="button">Comic</li>
        </Link>
    const werksLink = 
    <div className="top-link" id="werksLink" >
      <a className="button" href="https://www.publikwerks.com" target="_blank" rel="noopener noreferrer">Publikwerks</a>
    </div>
    return (
      <header role="banner" className="header">
        <div className="header-logo-box">
          <img className="header-logo" src={Logo} alt="The head of a lion. The body of a worm." />
        </div>
        <nav role="navigation">
          <ul className="top-nav row">
            {!werkCheck && projectLink}
            {!aboutCheck && homeLink}
            {!contactCheck && contactLink}
            {!discloseCheck && discloseLink}
            {werksLink}
          </ul>
        </nav>
      </header>
    )
  }
}
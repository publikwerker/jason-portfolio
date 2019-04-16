import React from 'react';
import { Link } from 'react-router-dom';
export default class Header extends React.Component {


  render() {

    // these variables check the URL location, 
    // and render nav buttons only if not on that page already
    let contactCheck, aboutCheck, homeCheck;
    aboutCheck = (this.props.location.pathname === '/about');
    contactCheck = (this.props.location.pathname === '/contact');
    homeCheck = (this.props.location.pathname === '/');
    const topLogo = require(('./images/yaldabaothinsta.jpg'));
    const pubPik = require(('./images/HeadShotzJasonsqbw.jpg'));
    const aboutLink = <Link to="/about">
        <li className="top-link button">About</li>
      </Link>;
    const homeLink = <Link to="/">
         <li className="top-link button">Home</li>
       </Link>;
    const contactLink = <Link to="/contact">
        <li className="top-link button">Contact</li>
       </Link>;
    const werksLink = <a className="top-link button" href="https://www.publikwerks.com">Publikwerks</a>
    return (
      <header role="banner" className="header">
        <nav role="navigation">
          <ul className="top-nav row">
            {!aboutCheck && aboutLink}
            {!homeCheck && homeLink}
            {!contactCheck && contactLink}
            {werksLink}
          </ul>
        </nav>
        <img 
          id="yaldy" 
          className="not-mobile"  
          alt="worm with the head of a lion" 
          src={topLogo} />
        <img id="my-picture" alt="jason standing in a police lineup wearing a suit vest and top hat" src={pubPik} />
        <h1 className="header-title">Jason Hoffman</h1>
        <h2 className="bi-line">full-stack developer | entrepreneur | fine artist</h2>
      </header>
    )
  }
}
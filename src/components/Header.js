import React from 'react';
import { Link } from 'react-router-dom';
const Logo = require('./images/yaldabaothinsta.jpg');

export default class Header extends React.Component {
  render() {

    // these variables check the URL location, 
    // and render nav buttons only if not on that page already
    let contactCheck, 
        aboutCheck, 
        werkCheck,
        discloseCheck,
        voxelartCheck;
    aboutCheck = (this.props.location.pathname === '/');
    contactCheck = (this.props.location.pathname === '/contact');
    discloseCheck = (this.props.location.pathname === '/disclose');
    werkCheck = (this.props.location.pathname === '/werk');
    voxelartCheck = (this.props.location.pathname === '/voxelart');
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
    const voxelartLink = <Link to="/voxelart" className="top-link">
        <li className="button">Voxels</li>
        </Link>
    return (
      <header role="banner" className="header">
        <div className="header-logo-box">
          <a href="https://www.publikwerks.com" 
            target="_blank" rel="noopener noreferrer">
            <img className="header-logo" 
            src={Logo} 
            alt="The head of a lion. The body of a worm." />
          </a>
        </div>
        <nav role="navigation">
          <ul className="top-nav row">
            {!aboutCheck && homeLink}
            {!werkCheck && projectLink}
            {!contactCheck && contactLink}
            {!discloseCheck && discloseLink}
            {!voxelartCheck && voxelartLink}
          </ul>
        </nav>
      </header>
    )
  }
}
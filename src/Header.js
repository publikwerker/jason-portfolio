import React from 'react';

export default class Header extends React.Component {

  render() {

    const topLogo = require(('./images/yaldabaothinsta.jpg'));
    const pubPik = require(('./images/publikwerker15r.jpg'));
    return (
      <header role="banner" className="header">
        <nav role="navigation">
          <ul className="top-nav row">
            <li className="top-link">about</li>
            <li className="top-link">contact</li>
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
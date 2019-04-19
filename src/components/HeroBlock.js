import React from 'react';

export default class HeroBlock extends React.Component { 
  render(){
    const pubPik = require(('./images/HeadShotzJasonsqbw.jpg'));
    return (
      <div className="hero-block">
        <img id="my-picture" alt="jason standing in a police lineup wearing a suit vest and top hat" src={pubPik} />
        <h1 className="header-title">Jason Hoffman</h1>
        <h2 className="bi-line">full-stack developer | fine artist</h2>
      </div>
      )}
  }
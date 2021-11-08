import React from 'react';

export default class HeroBlock extends React.Component { 
  render(){
    const pubPik = require(('./images/HeadShotzJasonsqbw.jpg'));
    const headShot = require('./images/PSSsailor.png');

    return (
      <div className="hero-block">
        <img id="my-picture" alt="Primate Social Society NFT #7255: A drawing of a chimpanzee wearing a red striped shirt and a sailor's cap" src={headShot} />
        <h1 className="header-title">JASON HOFFMAN</h1>
        <h2 className="bi-line">full-stack developer</h2>
      </div>
      )}
  }
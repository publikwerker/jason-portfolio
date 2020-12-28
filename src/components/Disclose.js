import React from 'react';
import Emoji from './Emoji.js';
const discloseLogo = require('./images/discloseLogo.png');
const discloseComic = require('./images/discloseNo0011.png');
const discloseMerch = require('./images/discloseMerch.png');
const discloseEspresso = require('./images/discloseEspresso.png');
const disclosePatreon = require('./images/disclosePatreon.png');

export default class Disclose extends React.Component {
  render() {
    return (
      <main className="main-body">
      <div className="disclose-topBar">
        <h1>dot disclose comics</h1>
        <div className="body-copy-wrapper">
        <p className="body-copy">More than the sum of its parts<sup>*</sup>, this irreverent comic is the result of my loves for drawing, 'fringe' technologies, and all things space-related.</p>

        <img src={discloseLogo} className="disclose-logo" alt="A cartoon astronaut asks a cartoon grey alien why they are on this planet" />

        <p className="body-copy">A cheeky grey alien and a space-abiding computer programmer on government contract discuss the nature of reality.</p>

        <img src={discloseComic} className="disclose-logo" alt="for our intrepid programmer, satellite interface refers to a physical touchpad on the side of a satellite" />

        <p className="body-copy">The lonely programmer seems to hip to the latest conspiracies on reddit, but their perception is filtered by the internet. Who knows what's true, anymore?</p>
        
        <p className="body-copy">Subjected to the occasional potty humor and space nerd joke, the alien remains unfazed throughout. Dealing with humans is like dealing with small children. It requires a lot of patience. Eventually, humans will listen.</p>

        <p className="body-copy">New comics drop weekdays on <a href="https://www.instagram.com/dot_disclose_comics" target="_blank"  rel="noopener noreferrer" className="in-text-link">Instagram</a>, starting January 1st, 2021.</p>

        <p className="body-copy">New stickers introduced weekly on <a href="https://www.publikwerks.com/merch" target="_blank" rel="noopener noreferrer" className="in-text-link">publikwerks</a>.</p>
        </div>

        <div className="row">
          <a href="https://disclose.threadless.com/" target="_blank" rel="noopener noreferrer">
            <img src={discloseMerch} alt="grey alien saying check the merch, it's lit" className="disclose-cta"></img>
          </a>

          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=MQL7QM8GGX6TL&item_name=normalizing+alien+relations&currency_code=USD&amount=2" target="_blank" rel="noopener noreferrer">
            <img src={discloseEspresso} alt="Care to buy me an espresso?" className="disclose-cta"></img>
          </a>

          <a href="https://www.patreon.com/dot_disclose_comics" target="_blank" rel="noopener noreferrer">
            <img src={disclosePatreon} alt="please support the longer mission on Patreon" className="disclose-cta"></img>
          </a>
        </div>
        <div className="body-copy-wrapper">
        <p className="body-copy">* <i>Please Note:</i> Although it is not always true, in this case the result <em>really is</em> greater than the sum of its parts. See below.</p>

        <p className="body-copy"><i>Result</i> <br />( <Emoji symbol="💘" /> • <Emoji symbol="✒" /> ) • (  <Emoji symbol="💘" />  • <Emoji symbol="👽"/> ) • (  <Emoji symbol="💘" />  • <Emoji symbol="🪐" /> ) </p>

        <p className="body-copy indent">= <Emoji symbol="💘" /> <sup>3</sup> • ( <Emoji symbol="✒" /> )( <Emoji symbol="👽"/> )( <Emoji symbol="🪐" /> )</p>

        <p className="body-copy"><i>Sum</i> <br />(  <Emoji symbol="💘" />  • <Emoji symbol="✒" /> ) + (  <Emoji symbol="💘" />  • <Emoji symbol="👽"/> ) + (  <Emoji symbol="💘" />  • <Emoji symbol="🪐" /> )</p>

        <p className="body-copy indent">= 3 <Emoji symbol="💘" />  • ( <Emoji symbol="✒" />  + <Emoji symbol="👽"/> + <Emoji symbol="🪐" /> )</p>


        <p className="body-copy"><i>Proof:</i> The love is clearly exponential in the Left Hand Side and linear on the Right Hand Side.</p>

        <p  className="body-copy"><i>Therefore</i> <br /><Emoji symbol="💘" /><sup>3</sup>( <Emoji symbol="✒" /> )( <Emoji symbol="👽"/> )( <Emoji symbol="🪐" /> )  > 3<Emoji symbol="💘" />( <Emoji symbol="✒" />  + <Emoji symbol="👽"/> + <Emoji symbol="🪐" /> )</p>

        <p className="body-copy">Assuming <Emoji symbol="💘" /> > 3, and assuming <Emoji symbol="✒" />, <Emoji symbol="👽" />, and <Emoji symbol="🪐" /> are all > 1, then the result is greater than its parts.</p>
        </div>
      </div>
      </main>
    );
  };
};
import React from 'react';
import Emoji from './Emoji.js';
const discloseLogo = require('./images/discloseLogo.png');
const alienMerch = require('./images/alienMerch.png');
const spaceCoffee = require('./images/spaceCoffee.png');

export default class Disclose extends React.Component {
  render() {
    return (
      <main className="main-body">
      <div className="disclose-topBar">
      {/* the logo eventually be handled by a reactive header element that will swap out the logos and instaLinks according to page  */}
        <h1>dot disclose comics</h1>
        <p className="body-copy">More than the sum of its parts*, this irreverent comic is the result of my loves for drawing, 'fringe' technologies, and all things space-related.</p>

        <img src={discloseLogo} className="disclose-logo" alt="A cartoon astronaut talking to a cartoon grey alien" />

        <p className="body-copy">A cheeky grey alien and a space-abiding programmer discuss the nature of reality.</p>

        <div className="row">
          <a href="https://disclose.threadless.com/" target="_blank" rel="noopener noreferrer">
            <img src={alienMerch} alt="grey alien saying check the merch, it's lit" className="disclose-cta"></img>
          </a>

          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=MQL7QM8GGX6TL&item_name=normalizing+alien+relations&currency_code=USD&amount=2" target="_blank" rel="noopener noreferrer">
            <img src={spaceCoffee} alt="Care to buy me an espresso?" className="disclose-cta"></img>
          </a>
        </div>

        <p className="body-copy">* <i>Please Note:</i> Although not always true, in this case the result <em>really is</em> greater than the sum of its parts.</p>
        
        <p className="body-copy">See below.</p>

        <p className="body-copy"><i>Result</i> <br />( <Emoji symbol="💘" /> • <Emoji symbol="✒" /> ) • (  <Emoji symbol="💘" />  • <Emoji symbol="👽"/> ) • (  <Emoji symbol="💘" />  • <Emoji symbol="🪐" /> ) </p>

        <p className="indent-R">= <Emoji symbol="💘" /> <sup>3</sup> • ( <Emoji symbol="✒" /> )( <Emoji symbol="👽"/> )( <Emoji symbol="🪐" /> )</p>

        <p className="body-copy"><i>Sum</i> <br />(  <Emoji symbol="💘" />  • <Emoji symbol="✒" /> ) + (  <Emoji symbol="💘" />  • <Emoji symbol="👽"/> ) + (  <Emoji symbol="💘" />  • <Emoji symbol="🪐" /> )</p>

        <p className="indent-S">= 3 <Emoji symbol="💘" />  • ( <Emoji symbol="✒" />  + <Emoji symbol="👽"/> + <Emoji symbol="🪐" /> )</p>


        <p className="body-copy"><i>Proof:</i> The love is clearly exponential in the Left Hand Side and linear on the Right Hand Side.</p>

        <p  className="body-copy"><i>Therefor</i> <br /><Emoji symbol="💘" /><sup>3</sup>( <Emoji symbol="✒" /> )( <Emoji symbol="👽"/> )( <Emoji symbol="🪐" /> )  > 3<Emoji symbol="💘" />( <Emoji symbol="✒" />  + <Emoji symbol="👽"/> + <Emoji symbol="🪐" /> )</p>

        <p className="body-copy">Assuming <Emoji symbol="💘" /> > 3, and assuming <Emoji symbol="✒" />, <Emoji symbol="👽" />, and <Emoji symbol="🪐" /> are all > 1, then the result is greater than its parts.</p>
      </div>
      </main>
    );
  };
};
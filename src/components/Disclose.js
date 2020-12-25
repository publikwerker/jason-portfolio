import React from 'react';
const discloseLogo = require('./images/discloseLogo.png')

export default class Disclose extends React.Component {
  render() {
    return (
      <main className="main-body">
      <div className="disclose-topBar">
      {/* this will eventually be handled by a reactive header element that will swap out the logos according to page  */}
        <h1>dot disclose comics</h1>
        <p>More than the sum of its parts*, this irreverent comic is the result of my loves for drawing, 'fringe' technologies, and all things space-related.</p>
        <img src={discloseLogo} className="disclose-logo" alt="A cartoon astronaut talking to a cartoon grey alien" />
        <p>A cheeky grey alien and a space-abiding programmer discuss the nature of reality.</p>
        <p>* <i>Please Note:</i> Although not always true, in this case the result <em>is</em> greater than the sum of its parts. See below.</p>
        <p>( <span>heart • (pen+paper)</span> ) • ( <span>heart • (black box+alien)</span> ) • ( <span>heart • (telescope+rocket)</span> ) > ( <span>heart • (pen+paper)</span> ) + ( <span>heart • (black box+alien)</span> ) + ( <span>heart • (telescope+rocket)</span> ).</p>
        <p>( heart cubed • ( pen+paper)(black box+alien)(telescope+rocket) ) > ( 3 heart • (pen+paper+black box+alien+telescope+rocket) )</p>
        <p><i>Proof:</i> The love is clearly exponential in the Left Hand Side and only linear on the Right Hand Side.</p>
      </div>
      </main>
    );
  };
};
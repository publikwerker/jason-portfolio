import React from 'react';
const lineup = require('./images/publikwerker16r.jpg');

export default class About extends React.Component {
  render() {
    return(<main className="main-body">
      <img className="about-image" alt="the bearded lady and ringleader in a police lineup" src={lineup}></img>
        <h3>About Jason <i className="smaller">a.k.a.</i> Publikwerker</h3>
        
        <p className="body-copy">As Publikwerker, Jason Hoffman is the driving force behind Publikwerks, LLC, which offers custom website and web app design, collateral production, including logo design, branding, body copy, editing, and photo and video production.</p>

        <p className="body-copy">Born on the high deserts of the Colorado Front Range and raised upon the turbulent waters of the Pacific Ocean, Jason now lives in SE Portland, Oregon, wailing on a baritone ukulele, walking remote forest paths, and teaching their two children Wing Chun Kung Fu -- sometimes simultaneously.</p>

        <p className="body-copy">Yes, they welcome custom, collaborative, and commissioned work. Jason is congenial, tactful, and possesses an inclusive worldview.</p>

      </main>
    )
  }
}
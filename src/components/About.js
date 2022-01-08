import React from 'react';
const kawai = require('./images/PSSkawai.png');

export default class About extends React.Component {
  render() {
    return(<main className="main-body">
      <img className="about-image" alt="Primate Social Society NFT #690: A drawing of a chimpanzee wearing a green flannel shirt, black puffy vest, and pink kitty headphones" src={kawai}></img>
        <h3>About Jason <i className="smaller">a.k.a.</i> Publikwerker</h3>
        
        <p className="body-copy">Publikwerker is the driving force behind Publikwerks, LLC, which offers custom website, web app, and game design, collateral production, including metaverse assets.</p>

        <p className="body-copy">Born on the high deserts of the Colorado Front Range and raised upon the turbulent waters of the Pacific Ocean, Publikwerker now lives in SE Portland, Oregon, wailing on a baritone ukulele, walking remote forest paths, and teaching their two children Wing Chun Kung Fu -- sometimes simultaneously.</p>

        <p className="body-copy">Yes, they welcome custom, collaborative, and commissioned work. Publikwerker is congenial, tactful, and possesses an inclusive worldview.</p>

      </main>
    )
  }
}
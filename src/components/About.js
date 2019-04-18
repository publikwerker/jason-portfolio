import React from 'react';
const lineup = require('./images/publikwerker16r.jpg');

export default class About extends React.Component {
  render() {
    return(<div className="main-body">
      <img className="about-image" alt="the bearded lady and ringleader in a police lineup" src={lineup}></img>
        <h3>About Jason <i>a.k.a.</i> Publikwerker</h3>
        <p className="body-copy">Publikwerker is a full-stack web developer, artist, and writer who draws still pictures and writes moving words.</p>
        <p className="body-copy">A master of divergent thinking and creative problem solving, congenial and tactful, he chooses words thoughtfully and with an inclusive worldview.</p>
        <p className="body-copy">Born on the high deserts of Colorado and raised upon the turbulent waters of the Pacific Ocean, Publikwerker now lives in SE Portland, Oregon, where he wails on his baritone ukelele and teaches his two kids Wing Chun Kung Fu.</p>
        <p className="body-copy">	Yes, he does custom, collaborative, and commissioned work</p>
      </div>
    )
  }
}
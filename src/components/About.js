import React from 'react';
const lineup = require('./images/publikwerker16r.jpg');

export default class About extends React.Component {
  render() {
    return(<div className="main-body">
      <img className="about-image" alt="the bearded lady and ringleader in a police lineup" src={lineup}></img>
        <h3>About Jason <i>a.k.a.</i> Publikwerker</h3>
        <p className="body-copy">Jason is a full-stack web developer, Fine Artist, and writer who draws still pictures and writes moving words.</p>
        <p className="body-copy">A master of divergent thinking and creative problem solving, Jason makes use of his art and design background to craft beautiful, accessible code.</p>
        <p className="body-copy">Born on the high deserts of Colorado and raised upon the turbulent waters of the Pacific Ocean, Jason now lives in SE Portland, Oregon, where he wails on his baritone ukulele and teaches his two children Wing Chun Kung Fu.</p>
        <p className="body-copy">	Yes, he welcomes custom, collaborative, and commissioned work</p>
      </div>
    )
  }
}
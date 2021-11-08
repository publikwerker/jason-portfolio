import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import About from './components/About.js';
import Body from './components/Body.js';
import Contact from './components/Contact.js';
import Disclose from './components/Disclose.js';
import Footer from './components/Footer.js';
import Voxelart from './components/Voxelart.js';

export default class Portfolio extends Component {
  
  render() {
    return (
      <div className="Portfolio">
        <Router basename="/">
          <Route path="/" component={Header} />
          <Route exact path="/" component={About} />
          <Route exact path="/werk" component={Body} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/disclose" component={Disclose} />
          <Route exact path="/voxelart" component={Voxelart} />
          <Route path="/" component={Footer} />
        </Router>
      </div>
    );
  }
}


import React from 'react';
import './header.css';

export default class Header extends React.Component {

  render() {
    return (
      <div className="header">
      <img id="yaldy" alt="worm with the head of a lion" src="https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1549756325530/?format=500w" />
      <h1 className="header-title">Jason Hoffman</h1>
      <h2 className="bi-line">web developer | fine artist</h2>
      <img id="my-picture" alt="jason standing in a police lineup wearing a suit vest and top hat" src="https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/59a5ec6bd55b4150fe76e060/1504046215768/lineup.jpg?format=750w" />
      </div>
    )
  }
}
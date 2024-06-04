import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
      return (
      <nav className="centered rounded">
        <ul>
          <li><a href="#home" className="nav-button">Home</a></li>
          <li><a href="#about" className="nav-button">About Me</a></li>
          <li><a href="#projects" className="nav-button">Projects</a></li>
          <li><a href="#contact" className="nav-button">Contact</a></li>
        </ul>
      </nav>
    )
  }
}
import React, { Component } from 'react';
import Typewriter from "./Typewriter";

export default class Header extends Component {
  render() {
    return (
      <div className="homeSection">
        <div className="backgroundImage"></div>
        <div className="homeContent">
          <div class="image-container">
            <img className="homeImage" src={require('../images/squareImage.png')}/>
          </div>
          <div className="full-screen" id="home">
            <h1> <Typewriter text="Charlotte Lawrence" delay={100}/> </h1>
            <p>Final year Computer Science student at Lancaster University</p>
          </div>
        </div>
      </div>
      
    )
  }
}
import React from 'react';
import Typewriter from "./Typewriter";
import squareImage from '../images/squareImage.jpg';

const Header = () => {
  return (
    <header className="homeSection" role="banner">
      <div className="image-container">
        <img className="homeImage" src={squareImage} alt="Image of Charlotte Lawrence"/>
      </div>
      <div className="full-screen" id="home">
        <h1><Typewriter text="Charlotte Lawrence" delay={100}/></h1>
        <p>Final year Computer Science student at Lancaster University</p>
      </div>
    </header>
  );
}

export default Header;

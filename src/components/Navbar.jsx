import React, { memo } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar centered rounded" aria-label="Main navigation">
      <ul>
        <li><a href="#home" className="nav-button">Home</a></li>
        <li><a href="#about" className="nav-button">About Me</a></li>
        <li><a href="#projects" className="nav-button">Projects</a></li>
        <li><a href="#contact" className="nav-button">Contact</a></li>
      </ul>
    </nav>
  );
}

export default memo(Navbar);

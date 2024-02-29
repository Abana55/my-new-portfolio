import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
    <a href="#home" className="navbar__link">Home</a>
    <div className="navbar__links-container">
      <a href="#about" className="navbar__link">About</a>
      <a href="#projects" className="navbar__link">Projects</a>
      <a href="#contact" className="navbar__link">Contact</a>
    </div>
  </nav>
  );
}

export default Navbar;
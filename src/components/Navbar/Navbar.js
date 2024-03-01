import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">Home</Link>
      <div className="navbar__links-container">
        <Link to="/about" className="navbar__link">About</Link>
        <Link to="/projects" className="navbar__link">Projects</Link>
        <a href="#contact" className="navbar__link">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">Home</Link>
      <Link to="/about" className="navbar__link">About</Link>
      <Link to="/projects" className="navbar__link">Projects</Link>
      <Link to="/contact" className="navbar__link">Contact</Link>
    </nav>
  );
}

export default Navbar;
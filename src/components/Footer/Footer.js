import React from 'react';
import './Footer.scss';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2024 Alec Bana. All rights reserved.</p>
        <div className="footer__social-links">
          <a href="https://github.com/Abana55" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer__social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/alec-bana" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer__social-icon" />
          </a>
          <a href="https://medium.com/@anbana994" target="_blank" rel="noopener noreferrer">
            <FaMedium className="footer__social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
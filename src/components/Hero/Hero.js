import React from 'react';
import './Hero.scss';
import Skills from '../Skills/Skills';

function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a software engineer based in Miami, FL.</p>
     <section>
      <Skills/>
    </section> 
    </div>
    
  );
}

export default Hero;
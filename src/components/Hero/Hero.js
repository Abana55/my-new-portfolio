import React from "react";
import "./Hero.scss";
import Skills from "../Skills/Skills";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      {/* Foreground content only */}
      <div className="hero__content">
        <h1 className="hero__title">Welcome to My Portfolio</h1>
        <p className="hero__description">
          I’m a software engineer based in Miami, FL. Passionate about building
          efficient and scalable web applications, I specialize in full-stack
          development with modern technologies like React, Node.js, and MySQL.
        </p>
        <div className="hero__buttons">
          <Link to="/about" className="hero__button">About Me</Link>
          <Link to="/projects" className="hero__button">My Projects</Link>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default Hero;

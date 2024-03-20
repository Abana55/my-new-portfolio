import React from "react";
import "./Hero.scss";
import Skills from "../Skills/Skills";
import { Link } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import SpinningCube from '../SpinningCube/SpinningCube'; 
import GeometryNodeFlower from '../../assets/GeometryNodeFlower.glb';

function Hero() {
  return (
    <div className="hero">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GeometryNodeFlower position={[0, 0, 0]} />
      </Canvas>
      <div className="hero__content">
        <h1 className="hero__title">Welcome to My Portfolio</h1>
        <p className="hero__description">
          I'm a software engineer based in Miami, FL. Passionate about building
          efficient and scalable web applications, I specialize in full-stack
          development with a focus on modern technologies like React, Node.js,
          and Express as well as databases like MySQL.
        </p>
        <div className="hero__buttons">
          <Link to="/about" className="hero__button">
            About Me
          </Link>
          <Link to="/projects" className="hero__button">
            My Projects
          </Link>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default Hero;

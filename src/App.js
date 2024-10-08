import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { Canvas } from '@react-three/fiber';
import SpinningSphere from './components/SpinningCube/SpinningCube';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Canvas>
        <SpinningSphere />
      </Canvas>
      <Contact/>
      <Footer/>
    </Router>
  );
}

export default App;
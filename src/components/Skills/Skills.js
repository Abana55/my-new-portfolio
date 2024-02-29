import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDatabase, FaGithub, FaJest } from 'react-icons/fa';
import { SiExpress, SiMysql, SiHeroku, SiOauth } from 'react-icons/si';

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills__title">My Skills</h2>
      <div className="skills__icons">
        <FaHtml5 className="skill-icon" title="HTML" />
        <FaCss3Alt className="skill-icon" title="CSS" />
        <FaJsSquare className="skill-icon" title="JavaScript" />
        <FaNodeJs className="skill-icon" title="Node.js" />
        <FaReact className="skill-icon" title="React" />
        <SiExpress className="skill-icon" title="Express" />
        <SiMysql className="skill-icon" title="MySQL" />
        <FaDatabase className="skill-icon" title="Agile Development" />
        <FaGithub className="skill-icon" title="GitHub" />
        <FaJest className="skill-icon" title="Jest" />
        <SiHeroku className="skill-icon" title="Heroku" />
        <SiOauth className="skill-icon" title="OAuth" />
      </div>
    </div>
  );
}

export default Skills;
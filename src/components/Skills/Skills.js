import './Skills.scss';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiExpress, SiMysql, SiHeroku, SiGithub } from 'react-icons/si';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 50 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="skills"
    >
      <h2 className="skills__title">My Skills</h2>
      <div className="skills__icons">
        <FaHtml5 className="skill-icon skill-icon--html" title="HTML" alt="HTML logo" />
        <FaCss3Alt className="skill-icon skill-icon--css" title="CSS" alt="CSS logo" />
        <FaJsSquare className="skill-icon skill-icon--js" title="JavaScript" alt="JavaScript logo" />
        <FaNodeJs className="skill-icon skill-icon--node" title="Node.js" alt="Node.js logo" />
        <FaReact className="skill-icon skill-icon--react" title="React" alt="React logo" />
        <SiExpress className="skill-icon skill-icon--express" title="Express" alt="Express logo" />
        <SiMysql className="skill-icon skill-icon--mysql" title="MySQL" alt="MySQL logo" />
        <SiHeroku className="skill-icon skill-icon--heroku" title="Heroku" alt="Heroku logo" />
        <FaGitAlt className="skill-icon skill-icon--git" title="Git" alt="Git logo" />
        <SiGithub className="skill-icon skill-icon--github" title="GitHub" alt="GitHub logo" />
        <FaDocker className="skill-icon skill-icon--docker" title="Docker" alt="Docker logo" />
      </div>
    </motion.div>
  );
}

export default Skills;
import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import "./About.scss";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 110, x: -100 },
  visible: { opacity: .9, x: 0 },
};

function About() {
  return (
    <div className="about">
      <Element name="aboutMe" className="about__section">
        <motion.div
          className="about__section-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={sectionVariants}
        >
          <div className="about__box">
            <div className="about__section-title">About Me</div>
            <div className="about__section-content">
              As an aspiring Software Engineer, I am driven by a passion for
              leveraging technology to solve complex problems and create
              impactful solutions. My background in programming, combined with a
              keen interest in functional programming and data integration, has
              equipped me with a strong foundation in software development. I am
              intellectually curious, constantly seeking to expand my knowledge
              and skills in the ever-evolving tech landscape. My collaborative
              nature and effective communication skills enable me to work
              seamlessly within teams, contributing to a positive and productive
              environment. With a commitment to continuous learning and a love
              for technology, I am eager to contribute my expertise and grow as
              a professional in the dynamic field of software engineering.
              <div className="about__social-links">
                <a
                  href="https://github.com/Abana55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__social-link github"
                  alt='social media link for github'
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/alec-bana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__social-link linkedin"
                  alt='social media link for linked in'
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://medium.com/@anbana994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__social-link medium"
                  alt='social media link for medium'
                >
                  <FaMedium />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Element>
      <Element name="education" className="about__section">
        <motion.div
          className="about__section-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <div className="about__box">
            <div className="about__section-title">Education</div>
            <div className="about__section-content">
              <h4>BrainStation</h4>
              <p>Diploma, Software Engineering</p>
              <p>SEP-DEC 2023, MIAMI, FL</p>

              <div className="education__item">
                <h4>Florida International University</h4>
                <p>Student for Bachelor’s in Economics</p>
                <p>JAN 2017 - JUN 2020, MIAMI, FL</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Element>
      <Element name="experience" className="about__section">
        <motion.div
          className="about__section-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <div className="about__section-title">Experience</div>
          <div className="about__section-content">
            <div className="experience__item">
              <h4>Insurance Producer | Allstate</h4>
              <p>JULY 2022 - JULY 2023, Pembroke Pines, FL</p>
              <ul>
                <li>
                  Conducted personalized client consultations, identifying
                  coverage gaps, and recommending tailored insurance solutions,
                  resulting in a 15% increase in cross-selling and upselling
                  opportunities.
                </li>
                <li>
                  Effectively handled customer inquiries related to policy
                  information, renewals, cancellations, and updates, maintaining
                  a 95% customer satisfaction rate.
                </li>
              </ul>
            </div>
            <div className="experience__item">
              <h4>Financial Manager | Miami Sedation & Cosmetic Dentistry</h4>
              <p>JAN 2019 - JULY 2022, MIAMI, FL</p>
              <ul>
                <li>
                  Analyzed financial data and implemented cost-saving
                  strategies, resulting in a 12% reduction in operating expenses
                  without compromising service quality.
                </li>
                <li>
                  Utilized dental software to enhance patient value management,
                  contributing to a 15% revenue growth through accurate income
                  forecasting and patient base optimization.
                </li>
              </ul>
            </div>
            <div className="experience__item">
              <h4>
                Accounting Assistant | Miami Sedation & Cosmetic Dentistry
              </h4>
              <p>JAN 2014 - JAN 2019, MIAMI, FL</p>
              <ul>
                <li>
                  Maintained accurate financial records and expense tracking,
                  ensuring compliance with accounting standards and a 95%
                  accuracy rate in financial reporting.
                </li>
                <li>
                  Streamlined inventory management processes, reducing carrying
                  costs by 20% through better demand forecasting and inventory
                  turnover analysis.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Element>
    </div>
  );
}

export default About;

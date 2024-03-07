import React, { useState } from 'react';
import './ContactMe.scss';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <section className="contact">
      <button onClick={toggleModal} className="contact__title-button">Contact Me</button>
      <a href="/path/to/your/resume.pdf" download className="contact__resume-download">Download Resume</a>

      {isModalOpen && (
        <div className="contact__modal">
          <form className="contact__form">
            <input type="text" className="contact__input" placeholder="Your Name" />
            <input type="email" className="contact__input" placeholder="Your Email" />
            <textarea className="contact__textarea" placeholder="Your Message"></textarea>
            <button type="submit" className="contact__button">Send Message</button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Contact;
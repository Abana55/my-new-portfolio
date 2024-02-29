import React from 'react';
import './ContactMe.scss';

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact Me</h2>
      <form className="contact__form">
        <input type="text" className="contact__input" placeholder="Your Name" />
        <input type="email" className="contact__input" placeholder="Your Email" />
        <textarea className="contact__textarea" placeholder="Your Message"></textarea>
        <button type="submit" className="contact__button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
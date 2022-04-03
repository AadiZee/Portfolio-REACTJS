import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>adnanzaib6@gmail.com</h5>
            <a
              href="mailto:adnanzaib6@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>aadizee69</h5>
            <a href="https://m.me/aadizee69" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            {/* enter number after phone */}
            <a
              href="https://api.whatsapp.com/send?phone"
              target="_blank"
              rel="noreferrer"
            >
              Send a Whatsapp message
            </a>
          </article>
        </div>
        <div className="contact__form">
          <form onSubmit={sendEmail} ref={form}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Full Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="7"
            />

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

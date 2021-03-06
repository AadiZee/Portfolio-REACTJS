import React from "react";
import "./Footer.css";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        React Portfolio
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/aadizee/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/AadiZee" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/aadizee69"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AadiZee. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  SiCodingninjas,
  SiCodechef,
  SiGithub,
  SiLeetcode,
} from "react-icons/si";
import { BiUpArrowCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer__logo'>Vibhu Badal Gupta</a> */}

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#qualification">Qualification</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Certificates</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://github.com/vibhubgupta"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub className="footer__socials-icon" />
        </a>
        <a
          href="https://www.instagram.com/thewittybrown/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="footer__socials-icon" />
        </a>
        <a
          href="https://leetcode.com/vibhubgupta/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode className="footer__socials-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/vibhu-badal-gupta/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="footer__socials-icon" />
        </a>
        <a
          href="https://www.codingninjas.com/codestudio/profile/9ae86c94-00a0-4496-bf0f-c7734b73e665"
          target="_blank"
          rel="noreferrer"
        >
          <SiCodingninjas className="footer__socials-icon" />
        </a>
        <a
          href="https://www.codechef.com/users/vibhubgupta"
          target="_blank"
          rel="noreferrer"
        >
          <SiCodechef className="footer__socials-icon" />
        </a>
      </div>

      <div className="footer__copyright">
        <h4>Made with &#10084; and 🍺</h4>
        <h4>
          <strong>© Vibhu Badal Gupta</strong>
        </h4>
      </div>

      <a href="#" className="footer__uparrow">
        <BiUpArrowCircle />
      </a>
    </footer>
  );
};

export default Footer;

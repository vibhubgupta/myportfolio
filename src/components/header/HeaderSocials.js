import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./headerSocials.css";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/vibhu-badal-gupta/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="header__socials-icon" />
      </a>
      <a href="https://github.com/vibhubgupta" target="_blank" rel="noreferrer">
        <BsGithub className="header__socials-icon" />
      </a>
      <a
        href="https://leetcode.com/vibhubgupta/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode className="header__socials-icon" />
      </a>
      <a
        href="https://www.instagram.com/thewittybrown/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className="header__socials-icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;

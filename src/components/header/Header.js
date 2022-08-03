import React from "react";
import "./header.css";
import CTA from "./Cta.js";
import ME from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 20,
            strings: [
              "&lt;&gt; <span>Hello World</strong></span> 🙏&lt;&frasl;&gt;",
              "<strong> Full Stack Developer | Django x React.js </strong>",
              "<strong> Ex-SDE Intern, CRIS | Research Intern, NIDM </strong>",
              "<strong>Chief Convener&#8594;DELCON'22 International Conference</strong>",
              "<strong>Head, Logistics&#8594;Moksha Inno'22</strong>",
              "<strong>Vice-Chairperson&#8594;IEEE NSUT Student Branch</strong>",
            ],
          }}
        />
        <h1>
          <strong>I'm Vibhu Badal Gupta</strong>
        </h1>
        {/* <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 35,
            strings: [
              "&lt;&gt; <span>Hello World</strong></span> 🙏&lt;&frasl;&gt;",
              "<strong> EAT &#8594; SLEEP &#8594; CODE &#8594; REPEAT </strong>",
              "<strong>Init &#8594;Commit&#8594;Add&#8594;Push</strong>",
              "<strong>Build&#8594;Test&#8594;Deploy</strong>",
            ],
          }}
        /> */}
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

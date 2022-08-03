import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { RiComputerLine } from "react-icons/ri";
import { BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiCodeBlock className="about__icon" />
              <h5>03+</h5>
              <small>
                Years Experience in <strong>Programming</strong>
              </small>
            </article>

            <article className="about__card">
              <BsGithub className="about__icon" />
              <h5>10+</h5>
              <small>
                Major <strong>Projects</strong> on Github
              </small>
            </article>

            <article className="about__card">
              <RiComputerLine className="about__icon" />
              <h5>300+</h5>
              <small>
                {" "}
                <strong>DSA Problems</strong> solved
              </small>
            </article>
          </div>
          <p>
            &gt; I see myself as a versatile professional having explored many
            different fields.
            <br />
            &gt; Full Stack Developer with experience in ReactJS &amp; Django
            Frameworks.
            <br />
            &gt; Competitive Coder in C++ with 300+ questions solved on various
            platforms. <br />
            &gt; Research Intern at{" "}
            <a href="https://nidm.gov.in/" target="_blank">
              {" "}
              NIDM
            </a>{" "}
            , Ministry of Home Affairs
            <br />
            &gt;Ex-SDE Intern at{" "}
            <a
              href="https://cris.org.in/crisweb/design1/index.jsp"
              target="_blank"
            >
              {" "}
              CRIS
            </a>{" "}
            , Ministry of Indian Railways <br />
            &gt; Strong engineering professional background in Mechanical
            Engineering from{" "}
            <a href="http://www.nsit.ac.in/" target="_blank">
              {" "}
              NSUT, Delhi
            </a>{" "}
            .
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me &nbsp; <BsFillTelephoneFill />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

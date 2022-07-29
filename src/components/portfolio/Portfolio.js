import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Banaras Locomotive Works, CRIS</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://deverp.indianrailways.gov.in/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live Project
            </a>
            {/* <a
              href=""
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>IEEE DELCON 2022</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://www.delcon2022.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live Project
            </a>
            <a
              href="https://github.com/vibhubgupta/Delcon"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Facebook Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://drive.google.com/file/d/1B5-h1nC0wITDP-frMPmNT4htNvzhD6P8/view?usp=sharing"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/vibhubgupta/codeial-final-live"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>My Personal Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/vibhubgupta"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="" className="btn" target="_blank" rel="noreferrer">
              Live
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Movie-App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/vibhubgupta/movie-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="" className="btn" target="_blank" rel="noreferrer">
              Live
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Virtual Lamp Lighting</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="" className="btn" target="_blank" rel="noreferrer">
              Live
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

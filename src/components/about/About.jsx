import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me-about.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Months Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            A passionate programmer and problem solver with four months of
            trainee experience in development and 3 years+ in problem-solving.
            Creating a website with a usable and clean user interface experience
            is my goal. I am self-driven and hungry to learn new technologies
            and strategies in this rapidly changing industry. I know the
            importance of creating highly readable and easily maintainable
            source code. So my main focus is to maintain proper guidelines and
            architecture while developing the website. I always try to improve
            my coding style by getting up to date with the new updates in the
            development environment. While working with an already existing
            website try to update it with more efficient code so that users get
            full performance. Strong eye for detail and tenacity to never quit
            on something until it is absolutely perfect.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;

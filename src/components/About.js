import React from "react";
import "../App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div>
      {/* <!-- About--> */}
      <section className="resume-section" id="about" name="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Vivekanand
            <span className="text-primary"> Bharkad</span>
          </h1>
          <div className="subheading mb-5">
             Nanded, MH 431605 · 9284220752 ·
            <a href="mailto:shubhamhirap@gmail.com">bharkadvivek@gmail.com</a>
          </div>
          <p className="lead mb-5">
            Experienced Front-End React.Js developer, Self motivated and Self-learner, ability to maintain and develop responsive user interface.
            Ability to build Single Page Applications(SPAs) with React.JS. Always looking forward to learn new skills. Proficiency in 
            React.js, Redux, JavaScript, Git, Agile methodology, HTML, CSS. Good understanding of Node.JS and REST APIs.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/vivekanand-bharkad-80a1441b8/"
            >
              <FaLinkedin />
            </a>
            <a className="social-icon" href="https://github.com/bharkadvivek">
              <FaGithub />
            </a>
            {/* <a className="social-icon" href="https://twitter.com/shubhamhirap">
              <FaTwitter />
            </a> */}
            <a className="social-icon" href="bharkadvivek@gmail.com">
              <SiGmail />
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default About;
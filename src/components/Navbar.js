import React from "react";
import "../App.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Vivekanand Bharkad</span>
          {/* <!-- <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span> --> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {/* <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li> */}
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  About
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="experience">
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Experience
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Education
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Skills
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="projects">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Projects
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#interests">
                <Link
                  activeClass="active"
                  to="interests"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Interests
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
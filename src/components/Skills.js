import React from "react";
import "../App.css";
import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiVisualstudiocode,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      {/* <!-- Skills--> */}
      <section class="resume-section" id="skills" name="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Skills</h2>
          <div class="subheading mb-3">Programming Languages & Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">React.Js
              <SiReact />
            </li><br/>
            <li className="list-inline-item">Javascript
              <SiJavascript />
            </li><br/>
            <li className="list-inline-item">Node.JS
              <SiNodedotjs />
            </li><br/>
            {/* <li class="list-inline-item">
              <SiTypescript />
            </li> */}
            <li class="list-inline-item">Git
              <SiGit />
            </li><br/>
            {/* <li class="list-inline-item">
              <SiNpm />
            </li> */}
            {/* <li class="list-inline-item">
              <SiYarn />
            </li> */}
            <li class="list-inline-item">HTML
              <SiHtml5 />
            </li><br/>
            <li class="list-inline-item">CSS
              <SiCss3 /> 
            </li><br/>
            <li class="list-inline-item">Bootstrap
              <SiBootstrap />
            </li><br/>
            <li class="list-inline-item"> VS code
              <SiVisualstudiocode />
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
    </div>
  );
};

export default Skills;
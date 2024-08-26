import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import htmlIcon from '../static/images/html-icon.svg';
import bootstrapIcon from '../static/images/bootstrap-5-logo-icon.svg';
import tailwindIcon from "../static/images/tailwind-css-icon.svg";
import javascriptIcon from '../static/images/javascript-programming-language-icon.svg';
import nodeJsIcon from '../static/images/node-js-icon.svg';
import expressJsIcon from '../static/images/express-js-icon.svg';
import reactJsIcon from '../static/images/react-js-icon.svg';
import pythonIcon from '../static/images/python-programming-language-icon.svg';
import javaIcon from '../static/images/java-programming-language-icon.svg';
import mongoIcon from '../static/images/mongodb-icon.svg';
import mysqlIcon from '../static/images/mysql-icon.svg';
import vsCodeIcon from "../static/images/visual-studio-code-icon.svg";
import gitIcon from "../static/images/git-icon.svg";
import gitHubIcon from "../static/images/github-icon-skills.svg";
import cssIcon from "../static/images/css-icon.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { icon: htmlIcon, label: "HTML" },
    {icon:cssIcon, label: "CSS"},
    { icon: bootstrapIcon, label: "Bootstrap" },
    { icon: tailwindIcon, label: "Tailwind CSS" },
    { icon: javascriptIcon, label: "JavaScript" },
    { icon: nodeJsIcon, label: "Node.js" },
    { icon: expressJsIcon, label: "Express.js" },
    { icon: reactJsIcon, label: "React.js" },
    { icon: pythonIcon, label: "Python" },
    { icon: javaIcon, label: "Java" },
    { icon: mongoIcon, label: "MongoDB" },
    { icon: mysqlIcon, label: "MySQL" },
    { icon: vsCodeIcon, label: "Visual Studio Code" },
    { icon: gitIcon, label: "Git" },
    { icon: gitHubIcon, label: "GitHub" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="heading">My <span>Skills</span></h2>
              <p className="skill">
                Passionate about learning and coding, dedicated to building responsive web applications with an unyielding commitment to innovation and continuous growth.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.icon} alt={skill.label} width={100} height={100} />
                    <h2>{skill.label}</h2>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

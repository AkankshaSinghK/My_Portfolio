import React, { useEffect } from "react";
import initializeScrollReveal from "../utils/scrollReveal";
import profileImage from "../static/images/p1.jpeg";
import resume from "../static/assets/Akanksha Singh - NewResume.pdf";
import TypewriterEffect from "../utils/TypewriterEffect";

const Home = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    initializeScrollReveal();
  }, []);

  const messages = [
    "Frontend Developer",
    "MERN Developer",
    "FullStack Developer",
    "Web Developer",
  ];

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Akanksha Singh</h1>
        <h3>
          And I'm a{" "}
          <span className="multiple-text">
            <TypewriterEffect textArray={messages} />
          </span>
        </h3>
        <p>
          A fervent web development enthusiast with a deep passion for crafting
          immersive digital experiences.
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/akanksha-singh-50350a229/">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="https://github.com/AkankshaSinghK">
            <i className="bx bxl-github" />
          </a>
        </div>
        <a href={resume} download="Akanksha Singh - Resume.pdf" className="btn">
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;

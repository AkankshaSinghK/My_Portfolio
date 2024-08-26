
import React from 'react';
import profileImage from '../static/images/p1.jpeg'; 
import TypewriterEffect from "../utils/TypewriterEffect"; 




const About = () => {

 
  const messages = ["Frontend Developer", "MERN Developer", "FullStack Developer","Web Developer"];

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={profileImage} alt="Profile" />
      </div>

      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>I'm a <span className="multiple-text"><TypewriterEffect textArray={messages} /></span></h3>
        <p>
          I am a passionate MCA graduate with a keen interest 
          in MERN stack development and frontend technologies. 
          My journey in computer applications has equipped me with
           a solid foundation in software development, database management,
            and system architecture. I thrive on challenges that require 
            innovative solutions and enjoy exploring the latest trends in 
            web development to create engaging and user-friendly interfaces. 
            With a commitment to continuous learning, I am dedicated to refining
             my skills and contributing to 
          impactful projects that push the boundaries of digital experiences.
        </p>
        <a
          href="https://www.linkedin.com/in/akanksha-singh-50350a229/"
          className="btn"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import hackerRankIcon from "../static/images/HackerRank_Icon.png";
import freeCodeCampLogo from "../static/images/logo.webp";
import gitImage from "../static/images/download (1).jpg";
import postmanIcon from "../static/images/postman.png";

const certificates = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    link: "https://api.badgr.io/public/assertions/tj0ksJCIQ0OP5m8Ne4Lvdw?identity__email=singhakanksha2897%40gmail.com",
    image: postmanIcon,
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/dadccef195fc",
    image: hackerRankIcon,
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/fdb3c8b94ba6",
    image: hackerRankIcon,
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/937efb660160",
    image: hackerRankIcon,
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/fcc478f73ab-f233-4bad-acec-8868b2c9df3c/responsive-web-design",
    image: freeCodeCampLogo,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/fcc478f73ab-f233-4bad-acec-8868b2c9df3c/javascript-algorithms-and-data-structures",
    image: freeCodeCampLogo,
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/fcc478f73ab-f233-4bad-acec-8868b2c9df3c/front-end-development-libraries",
    image: freeCodeCampLogo,
  },
  {
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/fcc478f73ab-f233-4bad-acec-8868b2c9df3c/back-end-development-and-apis",
    image: freeCodeCampLogo,
  },
  {
    title: "Git",
    issuer: "Spoken Tutorial",
    link: "https://spoken-tutorial.org/software-training/test/participant/certificate/76350/3090499/",
    image: gitImage,
  },
];

const Certificates = () => {
  return (
    <section className="certificate" id="certificate">
      <h2 className="heading">
        My <span>Certificates</span>
      </h2>
      <div className="certificate-container">
        {certificates.map((cert, index) => (
          <div className="certificate-box" key={index}>
            <div className="image-container">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="certificate-content">
              <h4>{cert.title}</h4>
              <p>Earned from {cert.issuer}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;


import React from 'react';

// Import images
import aromaHubImage from '../static/images/aroma_hub.png';
import busImage from '../static/images/bus.jpg';
import trainingImage from '../static/images/traplaca.png';
import spotifyImage from '../static/images/spotify.png';


const projects = [
  {
    title: 'Aroma Hub-eCommerce Platform',
    description: 'AROMA HUB, a sophisticated eCommerce platform for exquisite perfumes, using MERN (MongoDB, Express.js, React.js, Node.js) stack.',
    link: 'https://github.com/AkankshaSinghK/production-mern-aromaHub-eCommerce',
    image: aromaHubImage,
  },
  {
    title: 'portfolio Clone',
    description: 'Developed a Spotify Clone using MERN Stack with core functionalities like Authentication, Player Controls, Playlist Creation and Search functionality',
    link: 'https://github.com/AkankshaSinghK/Spotify_Clone',
    image: spotifyImage,
  },
  {
    title: 'Bus Management System',
    description: 'Developed a Bus Management System that allows users to search for routes and categories, such as daily bus, weekly bus, and AC bus.',
    link: 'https://github.com/AkankshaSinghK/Bus-Management-System',
    image: busImage,
  },
  {
    title: 'Traplaca- A guide to training, placement and career.',
    description: 'A platform connecting job seekers and company recruiters.',
    link: 'https://github.com/AkankshaSinghK/trapalaca-final',
    image: trainingImage,
  },
  // {
  //   title: 'Personal Portfolio',
  //    description: 'A portfolio to showcase my skills achievements and know more about me.',
  //   link: 'https://personal-portfolio-phi-six-40.vercel.app/',
  //    image: portfolioImage,
  //  },
  // {
  //   title: 'Dine Out- Food ordering App',
  //   description: 'Online food ordering app.',
  //   link: 'https://github.com/AkankshaSinghK/dine-out-flutter-',
  //   image: foodImage,
  // },
  // {
  //   title: 'Webpage using HTML CSS',
  //   description: 'Myntra homepage with full responsiveness.',
  //   link: 'https://github.com/AkankshaSinghK/GITHUB_AKANKSHA_SINGH_SCIFOR/tree/main/Project/Mini_Project_1',
  //   image: shopImage,
  // },
];

const Projects = () => {
  return (
    <section className="project" id="projects">
      <h2 className="heading">My <span>Projects</span></h2>
      <div className="project-container">
        {projects.map((proj, index) => (
          <div className="project-box" key={index}>
            <img src={proj.image} alt={proj.title} />
            <div className="project-layer">
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

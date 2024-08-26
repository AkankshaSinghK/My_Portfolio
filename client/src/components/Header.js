import React, { useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';



const Header = () => {

  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    const handleMenuClick = () => {
      menuIcon.classList.toggle('bxs-x-circle');
      navbar.classList.toggle('active');
    };

    menuIcon.addEventListener('click', handleMenuClick);

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const onScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
          });
          document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
      });

      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);
    };

    window.addEventListener('scroll', onScroll);

    // Remove toggle icon and navbar when clicking on a navbar link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menuIcon.classList.remove('bxs-x-circle');
        navbar.classList.remove('active');
      });
    });

    // Cleanup event listeners
    return () => {
      menuIcon.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', onScroll);
      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {
          menuIcon.classList.remove('bxs-x-circle');
          navbar.classList.remove('active');
        });
      });
    };

  }, []);

  return (
    <header className="header">
      <a className="logo">My Portfolio</a>
      <i class="bx bx-menu" id="menu-icon"></i>
     
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#certificate">Certificates</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

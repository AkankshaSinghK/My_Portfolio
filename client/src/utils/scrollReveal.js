import ScrollReveal from "scrollreveal";

const initializeScrollReveal = () => {
  ScrollReveal({
    distance: "80px",
    duration: 3000,
    delay: 300,
    interval: 200,
  });

  ScrollReveal().reveal(".home-content,.about-content h2", { origin: "top" });
  ScrollReveal().reveal(
    ".home-img, .project-box, .contact form, .certificate-container",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(".home-content h1, .about-content h3,.about-img", { origin: "left" });
  ScrollReveal().reveal(
    ".home-content p, .about-content p, .skill-bx, .certificate-box",
    { origin: "right" }
  );
};

export default initializeScrollReveal;

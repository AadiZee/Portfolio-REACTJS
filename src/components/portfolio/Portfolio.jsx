import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Delicious",
    github: "https://github.com/AadiZee?tab=repositories",
  },

  {
    id: 2,
    image: IMG2,
    title: "Admin-Dashboard",
    github: "https://github.com/AadiZee?tab=repositories",
  },

  {
    id: 3,
    image: IMG3,
    title: "Cryptoverse",
    github: "https://github.com/AadiZee?tab=repositories",
  },

  {
    id: 4,
    image: IMG4,
    title: "Dictionary-PWA",
    github: "https://github.com/AadiZee?tab=repositories",
  },

  {
    id: 5,
    image: IMG5,
    title: "Movie-List-with-Filtering-Animation",
    github: "https://github.com/AadiZee?tab=repositories",
  },

  {
    id: 6,
    image: IMG6,
    title: "Space-Tourism-Design-System",
    github: "https://github.com/AadiZee?tab=repositories",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

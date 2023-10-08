import React from "react";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import "./project.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-SHOP.COM",
    github: "https://github.com/MehediNSU/E-SHOP.COM",
    demo: "https://eshop4.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Information Management System",
    github: "https://github.com/MehediNSU/Information-Management-System",
    demo: "https://informationmanagementsystem3.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "To-Do list",
    github: "https://github.com/MehediNSU/React-ToDoList",
    demo: "https://todolist30.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Forkify",
    github: "https://github.com/MehediNSU/Forkify",
    demo: "https://forkify-v2.netlify.app/",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;

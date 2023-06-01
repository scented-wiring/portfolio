import { useState } from "react";
import { projectsArray } from "../projectsArray";
import "../styles/Projects.css";

const Projects = () => {
  const [hover, setHover] = useState("");

  const setClassName = (name) => {
    if (hover === name) {
      return "description-show";
    } else {
      return "description-hide";
    }
  };

  return (
    <div id="Projects">
      <div className="box">
        <div className="heading">
          <h2>Projects</h2>
        </div>
        <article>
          <p>
            Below is a list of some of the projects I've completed since I
            started training to be a developer.
            <br />
            <br />
            Each has a link to its corresponding Github repo and several have
            been deployed to Heroku and have links to live demos.
          </p>
          <div id="note">
            Note: Heroku apps sometimes take a minute to load so please be
            patient <i className="far fa-smile-beam"></i>
          </div>
        </article>

        <div id="project-gallery">
          {projectsArray.map((project) => {
            return (
              <div
                className="project"
                onMouseOver={() => setHover(project.name)}
                onMouseOut={() => setHover("")}
                key={projectsArray.indexOf(project)}
              >
                <img src={project.image} alt={`${project.name} screenshot`} />

                <div className={setClassName(project.name)}>
                  <div className="project-title">{project.name}</div>
                  <div className="project-links">
                    {project.links.map((link) => {
                      return (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          key={project.links.indexOf(link)}
                        >
                          <i className="fas fa-link"></i>
                          {link.destination}
                        </a>
                      );
                    })}
                  </div>
                  <div className="project-description">
                    {project.description}
                  </div>
                  <div className="project-technologies">
                    {project.technologies}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

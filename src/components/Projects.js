import React from "react";
import { projectsArray } from "../projectsArray";
import "../styles/Projects.css";

const Projects = () => {
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
        </article>

        <div id="project-gallery">
          {projectsArray.map((project) => {
            return (
              <div className="project" key={projectsArray.indexOf(project)}>
                <div className="title">
                  <h3>{project.name}</h3>
                </div>
                <img src={project.image} alt={`${project.name} screenshot`} />
                <div className="project-links">
                  {project.links.map((link) => {
                    return (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.links.indexOf(link)}
                        className="transition"
                      >
                        {link.destination}
                      </a>
                    );
                  })}
                </div>
                <p>{project.description}</p>
                <p className="project-technologies">{project.technologies}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

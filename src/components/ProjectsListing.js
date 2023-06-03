import React from "react";
import "../styles/ProjectsListing.css";
import { projectsArray } from "../projectsArray";

const ProjectsListing = () => {
  return (
    <div id="project-gallery">
      {projectsArray.map((project) => {
        return (
          <div
            className="project transition"
            key={projectsArray.indexOf(project)}
          >
            <div className="title transition">
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
  );
};

export default ProjectsListing;

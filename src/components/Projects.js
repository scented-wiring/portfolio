import { useState } from "react";
import { projectsArray } from "../projectsArray";
import { AnimateLink } from "./helpers/index";
import "../styles/Projects.css";

const Projects = () => {
  const [hover, setHover] = useState("");

  return (
    <div>
      <div id="Projects"></div>
      <div className="box">
        <div className="heading">
          <h1>Projects</h1>
          <p>
            Below is a list of projects I've developed from most recent to
            earliest.
            <br />
            <br />
            Each has a link to its corresponding Github repo, if you wish to
            view the code, and several have been deployed to Heroku and have
            links to live demos.
            <br />
            <br />
            Note: Heroku apps can take a minute to load so please be patient :)
          </p>
          <div id="project-gallery">
            {projectsArray.map((project) => {
              return (
                <div
                  className="project"
                  onMouseOver={() => setHover(project.name)}
                  onMouseOut={() => setHover("")}
                  style={{ backgroundImage: `url(${project.image})` }}
                  key={projectsArray.indexOf(project)}
                >
                  <div
                    className={
                      hover === project.name
                        ? "description-show"
                        : "description"
                    }
                  >
                    <div className="project-title">{project.name}</div>
                    <div className="project-description">
                      {project.description}
                    </div>
                    <div className="project-technologies">
                      {project.technologies}
                    </div>
                    <div className="project-links">
                      {project.links.map((link) => {
                        return (
                          <AnimateLink>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.destination}
                            </a>
                          </AnimateLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

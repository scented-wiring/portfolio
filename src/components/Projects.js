import { useState } from "react";
import { projectsArray } from "../projectsArray";
import "../styles/Projects.css";
import { AnimateLink, SlideWhenVisible } from "./helpers/index";

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
            Each has a link to its corresponding Github repo if you wish to view
            the code and several have been deployed to Heroku and have links to
            live demos.
            <br />
            <br />
            Note: Heroku apps can take a minute to load so please be patient :)
          </p>
          <div id="project-gallery">
            {projectsArray.map((project) => {
              return (
                <SlideWhenVisible>
                  <div
                    className="project"
                    onMouseOver={() => setHover(project.name)}
                    onMouseOut={() => setHover("")}
                    key={projectsArray.indexOf(project)}
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                    />
                    <div
                      className={
                        hover === project.name
                          ? "description-show"
                          : "description-hide"
                      }
                    >
                      <div className="project-title">{project.name}</div>
                      <div className="project-links">
                        {project.links.map((link) => {
                          return (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <AnimateLink key={project.links.indexOf(link)}>
                                <i class="fas fa-link"></i>
                                {link.destination}
                              </AnimateLink>
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
                </SlideWhenVisible>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

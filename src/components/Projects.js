import { useState } from "react";
import { projectsArray } from "../projectsArray";
import "../styles/Projects.css";

const Projects = () => {
  const [hover, setHover] = useState("");

  return (
    <div id="Projects">
      <div className="box">
        <div className="heading">
          <h1>Projects</h1>
          <div id="project-gallery">
            {projectsArray.map((project) => {
              return (
                <div
                  className="project"
                  onMouseOver={() => setHover(project.name)}
                  onMouseOut={() => setHover("")}
                  style={{ backgroundImage: `url(${project.image})` }}
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

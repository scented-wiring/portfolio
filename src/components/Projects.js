import React from "react";
import ProjectsListing from "./ProjectsListing";

const Projects = () => {
  return (
    <div id="Projects">
      <div className="box">
        <div className="center">
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
        <ProjectsListing />
      </div>
    </div>
  );
};

export default Projects;

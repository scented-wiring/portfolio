import toptrumps from "../images/screenshots/toptrumps.png";
import surrealestate from "../images/screenshots/surrealestate.png";
import portfolio from "../images/screenshots/portfolio.png";
import pickup from "../images/screenshots/pickup.png";
import weather from "../images/screenshots/weather.png";
import nasa from "../images/screenshots/nasa.png";
import booklibrary from "../images/screenshots/booklibrary.png";
import cruiseships from "../images/screenshots/cruiseships.png";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div id="Projects">
      <div className="box">
        <div className="heading">
          <h1>Projects</h1>
          <div id="project-gallery">
            <div className="project">
              <div className="description">Animal Top Trumps App</div>
              <img
                className="screenshot"
                src={toptrumps}
                alt="Animal Top Trumps app screenshot"
              />
            </div>
            <div className="project">
              <img
                className="screenshot"
                src={surrealestate}
                alt="Surreal Estate app screenshot"
              />
            </div>
            <div className="project">
              <img
                className="screenshot"
                src={portfolio}
                alt="Portfolio screenshot"
              />
            </div>
            <div className="project">
              <img
                className="screenshot"
                src={pickup}
                alt="Pickup box component screenshot"
              />
            </div>
            <div className="project">
              <img
                className="screenshot"
                src={weather}
                alt="Weather app screenshot"
              />
            </div>
            <div className="project">
              <img
                className="screenshot"
                src={nasa}
                alt="Nasa pictures app screenshot"
              />
            </div>
            <div className="project">
              <img
                className="screenshot"
                src={booklibrary}
                alt="Book library api screenshot"
              />
            </div>
            <div className="project">
              <img
                className="screenshot"
                src={cruiseships}
                alt="Cruise ships app screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

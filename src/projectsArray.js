import toptrumps from "./images/screenshots/toptrumps.png";
import surrealestate from "./images/screenshots/surrealestate.png";
import portfolio from "./images/screenshots/portfolio.png";
import pickup from "./images/screenshots/pickup.png";
import weather from "./images/screenshots/weather.png";
import nasa from "./images/screenshots/nasa.png";
import booklibrary from "./images/screenshots/booklibrary.png";
import cruiseships from "./images/screenshots/cruiseships.png";

const projectsArray = [
  {
    name: "Animal Top Trumps",
    description:
      "Create Top Trumps cards and battle them against a computer opponent.",
    technologies: "Built with React, Express and MySQL.",
    image: toptrumps,
    links: (
      <a
        href="https://github.com/scented-wiring/animal-top-trumps"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
  },
  {
    name: "Surreal Estate",
    description:
      "Create, edit and save properties and filter/arrange them in displays.",
    technologies: "Built with React.",
    image: surrealestate,
    links: (
      <a
        href="https://github.com/scented-wiring/surreal-estate"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
  },
  {
    name: "Portfolio",
    description: "This website!",
    technologies: "Built with React and Express.",
    image: portfolio,
    links: (
      <a
        href="https://github.com/scented-wiring/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
  },
  {
    name: "Pick-up Location Box",
    description: "Suggests locations based on user input.",
    technologies: "Built with React.",
    image: pickup,
    links: (
      <div>
        <a
          href="https://github.com/scented-wiring/pickup-location-box"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://pickup-location-box.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Heroku
        </a>
      </div>
    ),
  },
  {
    name: "Weather",
    description: "Displays 7 day forecast for selected city.",
    technologies: "Built with React.",
    image: weather,
    links: (
      <a
        href="https://github.com/scented-wiring/weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
  },
  {
    name: "NASA Image Search",
    description: "Returns images from the NASA API based on search query.",
    technologies: "Built with React.",
    image: nasa,
    links: (
      <a
        href="https://github.com/scented-wiring/tech-test"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
  },
  {
    name: "Book Library API",
    description: "CRUD book data",
    technologies: "Built with Express and MySQL.",
    image: booklibrary,
    links: (
      <a
        href="https://github.com/scented-wiring/book-library-api"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
  },
  {
    name: "Cruise Ships",
    description:
      "Control a cruise ship as it makes stops at ports from an itinerary.",
    technologies: "Built with vanilla JS.",
    image: cruiseships,
    links: (
      <a
        href="https://github.com/scented-wiring/cruise-ships"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
  },
];

export { projectsArray };

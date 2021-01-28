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
  },
  {
    name: "Surreal Estate",
    description:
      "Create, edit and save properties and filter/arrange them in displays.",
    technologies: "Built with React.",
    image: surrealestate,
  },
  {
    name: "Portfolio",
    description: "This website!",
    technologies: "Built with React.",
    image: portfolio,
  },
  {
    name: "Pick-up Location Box",
    description: "Suggests locations based on user input.",
    technologies: "Built with React.",
    image: pickup,
  },
  {
    name: "Weather",
    description: "Displays 7 day forecast for selected city.",
    technologies: "Built with React.",
    image: weather,
  },
  {
    name: "NASA Image Search",
    description: "Returns images from the NASA API based on search query.",
    technologies: "Built with React.",
    image: nasa,
  },
  {
    name: "Book Library API",
    description: "CRUD book data",
    technologies: "Built with Express and MySQL.",
    image: booklibrary,
  },
  {
    name: "Cruise Ships",
    description:
      "Control a cruise ship as it makes stops at ports from an itinerary.",
    technologies: "Built with vanilla JS.",
    image: cruiseships,
  },
];

export { projectsArray };

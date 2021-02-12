import toptrumpslite from "./images/screenshots/toptrumpslite.png";
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
    name: "Portfolio",
    description: "This website!",
    technologies: "Built with React and Framer Motion.",
    image: portfolio,
    links: [
      {
        href: "https://github.com/scented-wiring/portfolio",
        destination: "Github",
      },
    ],
  },
  {
    name: "Animal Top Trumps",
    description:
      "Create Top Trumps cards and battle them against a computer opponent. A Work in Progress.",
    technologies: "Built with React, Express and MySQL.",
    image: toptrumps,
    links: [
      {
        href: "https://github.com/scented-wiring/animal-top-trumps",
        destination: "Github",
      },
    ],
  },
  {
    name: "Animal Top Trumps Lite",
    description:
      "A scaled down and completed version of the Animal Top Trumps project.",
    technologies: "Built with React, and Framer Motion.",
    image: toptrumpslite,
    links: [
      {
        href: "https://animaltoptrumps-lite.herokuapp.com/",
        destination: "Heroku",
      },
      {
        href: "https://github.com/scented-wiring/animal-toptrumps-lite",
        destination: "Github",
      },
    ],
  },
  {
    name: "Pick-up Location Box",
    description: "Suggests locations based on user input.",
    technologies: "Built with React.",
    image: pickup,
    links: [
      {
        href: "https://github.com/scented-wiring/pickup-location-box",
        destination: "Github",
      },
      {
        href: "https://pickup-location-box.herokuapp.com/",
        destination: "Heroku",
      },
    ],
  },
  {
    name: "Surreal Estate",
    description:
      "Create, edit and save properties and filter/arrange them in displays.",
    technologies: "Built with React.",
    image: surrealestate,
    links: [
      {
        href: "https://github.com/scented-wiring/surreal-estate",
        destination: "Github",
      },
    ],
  },
  {
    name: "Weather",
    description: "Displays 5 day forecast for selected British city.",
    technologies: "Built with React.",
    image: weather,
    links: [
      {
        href: "https://github.com/scented-wiring/weather-app",
        destination: "Github",
      },
      {
        href: "https://gb-weather-app.herokuapp.com/",
        destination: "Heroku",
      },
    ],
  },
  {
    name: "NASA Image Search",
    description: "Returns images from the NASA API based on search query.",
    technologies: "Built with React.",
    image: nasa,
    links: [
      {
        href: "https://github.com/scented-wiring/tech-test",
        destination: "Github",
      },
      {
        href: "https://nasa-api-image-search.herokuapp.com/",
        destination: "Heroku",
      },
    ],
  },
  {
    name: "Library API",
    description: "Create, read, update and delete book data via HTTP requests.",
    technologies: "Built with Express and MySQL.",
    image: booklibrary,
    links: [
      {
        href: "https://github.com/scented-wiring/book-library-api",
        destination: "Github",
      },
    ],
  },
  {
    name: "Cruise Ships",
    description:
      "Control a cruise ship as it makes stops at ports from an itinerary.",
    technologies: "Built with vanilla JS.",
    image: cruiseships,
    links: [
      {
        href: "https://github.com/scented-wiring/cruise-ships",
        destination: "Github",
      },
    ],
  },
];

export { projectsArray };

import gamesearch from "./images/screenshots/gamesearch.png";
import toptrumpslite from "./images/screenshots/toptrumpslite.png";
import fortunefish from "./images/screenshots/fortunefish.png";
import portfolio from "./images/screenshots/portfolio.png";

const projectsArray = [
  {
    name: "Gamesearch",
    description: "Search for game titles and filter/order results",
    technologies: "Built with React and TypeScript.",
    image: gamesearch,
    links: [
      {
        href: "https://gamesearch-app.herokuapp.com/",
        destination: "App",
      },
      {
        href: "https://github.com/scented-wiring/gamesearch",
        destination: "Github",
      },
    ],
  },
  {
    name: "Portfolio",
    description: "This website!",
    technologies: "Built with React.",
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
    description: "Play a game of Top Trumps against an 'AI'",
    technologies: "Built with React.",
    image: toptrumpslite,
    links: [
      {
        href: "https://animaltoptrumps-lite.herokuapp.com/",
        destination: "App",
      },
      {
        href: "https://github.com/scented-wiring/animal-toptrumps-lite",
        destination: "Github",
      },
    ],
  },
  {
    name: "Fortune Fish",
    description:
      "Randomly determines the user's fortune. Inspired by the Christmas cracker trinket of the same name.",
    technologies: "Built with React and TypeScript.",
    image: fortunefish,
    links: [
      {
        href: "https://fortune-fish.herokuapp.com/",
        destination: "App",
      },
      {
        href: "https://github.com/scented-wiring/fortune-fish",
        destination: "Github",
      },
    ],
  },
];

export { projectsArray };

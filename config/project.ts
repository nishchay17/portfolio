import { Project } from "../interface/Project";

export const ProjectLists: Project[] = [
  {
    id: "team-collab",
    name: "Team Collab",
    description:
      "Collaborate with Team with team collab. Assign and monitor tasks and share files with the team.",
    image: "/img/team-collab.png",
    tag: ["React", "Node", "MongoDB", "Express"],
    github: "https://github.com/nishchay17/teams-frontend",
    live: "https://teams-task.netlify.app/",
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    description:
      "E-commerce website for selling t-shirt complete with payment options, with a simple UI.",
    image: "/img/tee.png",
    tag: ["React", "Node", "MongoDB", "Express"],
    github: "https://github.com/nishchay17/TeeStoreFrontend",
    live: "https://theteestore.netlify.app/",
  },
  {
    id: "cdf-(cli)",
    name: "CDF (CLI)",
    description:
      "Npm package for generating files with boilerplate code, for competitive programmers.",
    tag: ["Node", "CLI", "470+ Downloads on NPM"],
    github: "https://github.com/nishchay17/dirMaker",
    live: "https://www.npmjs.com/package/@nishchay17/cdf",
  },
  {
    id: "url-shortener",
    name: "Url Shortener",
    description:
      "Used shrtco.de's API to shorten the given URL and persisted in the local storage.",
    image: "/img/url.png",
    tag: ["React"],
    github: "https://github.com/nishchay17/Shortly",
    live: "https://shortlytif.netlify.app/",
  },
  {
    id: "trivia-game",
    name: "Trivia Game",
    description:
      "Trivia Game app with mobile first design, used Opent DB's API for fetching Questions.",
    image: "/img/trivia.png",
    tag: ["React"],
    github: "https://github.com/nishchay17/trivia",
    live: "https://nishchay17.github.io/trivia/#/",
  },
];

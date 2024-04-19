const TECH = [
  {
    id: "basic",
    name: "Web basics",
    techs: ["Javascript", "Next js", "React js", "Typescript"],
  },
  {
    id: "ui",
    name: "UI and animation",
    techs: ["Tailwind", "Framer motion", "Shadcn"],
  },
  {
    id: "lib",
    name: "Addtional Libraries",
    techs: ["Zod", "React query", "Next auth", "Drizzle"],
  },
  {
    id: "db",
    name: "Database",
    techs: ["Postgresql", "MongoDB", "Redis"],
  },
  {
    id: "backend",
    name: "Backend",
    techs: ["Node js", "Express", "Spring boot"],
  },
] as const;
export default TECH;

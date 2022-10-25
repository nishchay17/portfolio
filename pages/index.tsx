import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";

import { ReactElement } from "react";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { Container } from "@chakra-ui/layout";

const HeroSection = dynamic(() => import("../components/Landing/HeroSection"));
const Projects = dynamic(() => import("../components/Landing/Projects"));
const Tech = dynamic(() => import("../components/Landing/Tech"));
const Social = dynamic(() => import("../components/Landing/Social"));

import Layout from "../components/Layout";
import { Project } from "../interface/Project";
import { supabase } from "../lib/supabase";
interface Props {
  data: Project[];
}

function Home({ data }: Props): ReactElement {
  return (
    <Layout withAnimation={false}>
      <HeroSection />
      <Container maxW="1600px" px={[0, 0, 0, 0, "2rem"]}>
        <Projects projects={data} />
      </Container>
      <Tech />
      <Social />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = [
    {
      id: 47,
      created_at: "2021-10-26T11:08:33.323102+00:00",
      name: "Team Collab",
      description:
        "Collaborate with Team with team collab. Assign and monitor tasks and share files with the team.",
      github: "https://github.com/nishchay17/teams-frontend",
      live: "https://teams-task.netlify.app/",
      tag: "React Node MongoDB Express",
      image: "team-collab.png",
    },
    {
      id: 48,
      created_at: "2021-10-26T11:09:26.136681+00:00",
      name: "E-commerce",
      description:
        "E-commerce website for selling t-shirt complete with payment options, with a simple UI.",
      github: "https://github.com/nishchay17/TeeStoreFrontend",
      live: "https://theteestore.netlify.app/",
      tag: "React Node MongoDB Express",
      image: "tee.png",
    },
    {
      id: 51,
      created_at: "2021-10-26T11:12:45.663238+00:00",
      name: "Url Shortener",
      description:
        "Used shrtco.de's API to shorten the given URL and persisted in the local storage.",
      github: "https://github.com/nishchay17/Shortly",
      live: "https://shortlytif.netlify.app/",
      tag: "React",
      image: "url.png",
    },
    {
      id: 50,
      created_at: "2021-10-26T11:12:10.976+00:00",
      name: "CDF (CLI)",
      description:
        "Generate files with boilerplate code, for competitive programmers. 470+ Downloads on NPM.",
      github: "https://github.com/nishchay17/dirMaker",
      live: "https://www.npmjs.com/package/@nishchay17/cdf",
      tag: "Node CLI\r\n",
      image: "cdn.png",
    },
  ];
  return {
    props: { data },
  };
};

export default Home;

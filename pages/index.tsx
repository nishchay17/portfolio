import { ReactElement } from "react";
import dynamic from "next/dynamic";
import { Container } from "@chakra-ui/layout";

const HeroSection = dynamic(() => import("../components/Landing/HeroSection"));
const Projects = dynamic(() => import("../components/Landing/Projects"));
const Tech = dynamic(() => import("../components/Landing/Tech"));
const Social = dynamic(() => import("../components/Landing/Social"));

import Layout from "../components/Layout";
import { projects } from "../config/project";

function Home(): ReactElement {
  return (
    <Layout withAnimation={false}>
      <HeroSection />
      <Container maxW="1600px" px={[0, 0, 0, 0, "2rem"]}>
        <Projects projects={projects} />
      </Container>
      <Tech />
      <Social />
    </Layout>
  );
}

export default Home;

import { ReactElement } from "react";
import dynamic from "next/dynamic";
import { Container } from "@chakra-ui/layout";

const HeroSection = dynamic(() => import("../components/Landing/HeroSection"));
const Projects = dynamic(() => import("../components/Landing/Projects"));
const Tech = dynamic(() => import("../components/Landing/Tech"));
const Social = dynamic(() => import("../components/Landing/Social"));

import Layout from "../components/Layout";

function Home(): ReactElement {
  return (
    <Layout withAnimation={false}>
      <HeroSection />
      <Container maxW="container.xl">
        <Projects />
      </Container>
      <Tech />
      <Social />
    </Layout>
  );
}

export default Home;

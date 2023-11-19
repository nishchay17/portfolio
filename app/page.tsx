import { ReactElement } from "react";
import { Container } from "@chakra-ui/layout";

import HeroSection from "../components/Landing/HeroSection";
import Projects from "../components/Landing/Projects";
import Tech from "../components/Landing/Tech";
import Social from "../components/Landing/Social";
import Layout from "../components/Layout";

import { projects } from "../config/project";
import TECH from "../config/tech";

function Home(): ReactElement {
  return (
    <Layout withAnimation={false}>
      <HeroSection />
      <Container maxW="container.xl">
        <Projects projects={[...projects]} />
      </Container>
      <Tech techs={[...TECH]} />
      <Social />
    </Layout>
  );
}

export default Home;

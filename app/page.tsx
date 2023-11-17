import { ReactElement } from "react";
import { Container } from "@chakra-ui/layout";

import HeroSection from "../components/Landing/HeroSection";
import Projects from "../components/Landing/Projects";
import Tech from "../components/Landing/Tech";
import Social from "../components/Landing/Social";
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

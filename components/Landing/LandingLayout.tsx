import React, { ReactElement } from "react";
import { Container } from "@chakra-ui/react";

import Experience from "./Experience";
import HeroSection from "./HeroSection";
import Projects from "./Projects";

function LandingLayout(): ReactElement {
  return (
    <Container maxW="container.xl">
      <HeroSection />
      <Projects />
      <Experience />
    </Container>
  );
}

export default LandingLayout;

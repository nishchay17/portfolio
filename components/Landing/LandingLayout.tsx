import React, { ReactElement } from "react";
import { Container } from "@chakra-ui/react";

import Experience from "./Experience";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Tech from "./Tech";
import Social from "./Social";

function LandingLayout(): ReactElement {
  return (
    <>
      <Container maxW="container.xl">
        <HeroSection />
        <Projects />
        <Experience />
        <Tech />
      </Container>
      <Social />
    </>
  );
}

export default LandingLayout;

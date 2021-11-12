import React, { ReactElement } from "react";
import { Container } from "@chakra-ui/react";

import Experience from "./Experience";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Tech from "./Tech";
import Social from "./Social";
import { Project } from "../../interface/Project";

interface Props {
  projects: Project[];
}

function LandingLayout({ projects }: Props): ReactElement {
  return (
    <>
      <Container maxW="container.xl">
        <HeroSection />
        <Projects projects={projects} />
        <Experience />
      </Container>
      <Tech />
      <Social />
    </>
  );
}

export default LandingLayout;

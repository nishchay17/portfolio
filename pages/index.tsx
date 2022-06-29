import { ReactElement, useState } from "react";
import type { GetStaticProps } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/layout";
import { Waypoint } from "react-waypoint";

const HeroSection = dynamic(() => import("../components/Landing/HeroSection"));
const Projects = dynamic(() => import("../components/Landing/Projects"));
const Experience = dynamic(() => import("../components/Landing/Experience"));
const Tech = dynamic(() => import("../components/Landing/Tech"));
const Social = dynamic(() => import("../components/Landing/Social"));

import Nav from "../components/Nav";
import Layout from "../components/layout";
import { Project } from "../interface/Project";
import { supabase } from "../lib/supabase";
import polygon from "../public/svg/polygon-glow.svg";
import polygon1 from "../public/svg/polygon-glow1.svg";
import polygon2 from "../public/svg/polygon-glow2.svg";
import polygon3 from "../public/svg/polygon-glow3.svg";
interface Props {
  data: Project[];
}

function Home({ data }: Props): ReactElement {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const setSticky = () => {
    setIsSticky(true);
  };
  const removeSticky = () => {
    setIsSticky(false);
  };
  const onWaypointPositionChange = ({
    currentPosition,
  }: {
    currentPosition: string;
  }) => {
    if (currentPosition === "above") {
      setSticky();
    }
    if (currentPosition === "below") {
      removeSticky();
    }
  };

  return (
    <>
      <Waypoint
        onEnter={removeSticky}
        onPositionChange={onWaypointPositionChange}
      />
      <Layout withAnimation={false}>
        <Box
          position="absolute"
          zIndex={-10}
          left="-25%"
          top="-10%"
          opacity={0.22}
        >
          <Image src={polygon} height="1000px" width="1000px" alt="glow" />
        </Box>
        <Box
          position="absolute"
          zIndex={-10}
          right="0"
          top="20%"
          opacity={0.15}
        >
          <Image src={polygon1} height="700px" width="700px" alt="glow" />
        </Box>
        <Box position="absolute" zIndex={-10} left="10" top="50%" opacity={0.3}>
          <Image src={polygon2} height="850px" width="900px" alt="glow" />
        </Box>
        <Nav isSticky={isSticky} />
        <Container maxW="container.xl">
          <HeroSection />
        </Container>
        <Container maxW="container.xl">
          <Projects projects={data} />
        </Container>
        <Tech />
        <Social />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase.from("Project").select();

  if (error) {
    return {
      props: { data: [] },
    };
  }
  return {
    props: { data },
    revalidate: 36000, // 10 hour
  };
};

export default Home;

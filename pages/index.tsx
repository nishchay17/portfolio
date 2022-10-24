import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";

import { ReactElement, useState } from "react";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { Container } from "@chakra-ui/layout";
import { Waypoint } from "react-waypoint";

const HeroSection = dynamic(() => import("../components/Landing/HeroSection"));
const Projects = dynamic(() => import("../components/Landing/Projects"));
const Tech = dynamic(() => import("../components/Landing/Tech"));
const Social = dynamic(() => import("../components/Landing/Social"));

import Nav from "../components/Nav";
import Layout from "../components/layout";
import { Project } from "../interface/Project";
import { supabase } from "../lib/supabase";
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
        <Nav isSticky={isSticky} />
        <HeroSection />
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

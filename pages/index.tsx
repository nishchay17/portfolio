import { ReactElement } from "react";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { Container } from "@chakra-ui/layout";

const HeroSection = dynamic(() => import("../components/Landing/HeroSection"));
const Projects = dynamic(() => import("../components/Landing/Projects"));
const Experience = dynamic(() => import("../components/Landing/Experience"));
const Tech = dynamic(() => import("../components/Landing/Tech"));
const Social = dynamic(() => import("../components/Landing/Social"));

import Layout from "../components/layout";
import { Project } from "../interface/Project";
import { supabase } from "../lib/supabase";
interface Props {
  data: Project[];
}

function Home({ data }: Props): ReactElement {
  return (
    <Layout withAnimation={false}>
      <Container maxW="container.xl">
        <HeroSection />
        <Projects projects={data} />
        <Experience />
      </Container>
      <Tech />
      <Social />
    </Layout>
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
    revalidate: 3600,
  };
};

export default Home;

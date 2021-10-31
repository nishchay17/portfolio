import type { GetStaticProps } from "next";
import { ReactElement } from "react";

import LandingLayout from "../components/Landing/LandingLayout";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { Project } from "../interface/Project";
import { supabase } from "../lib/supabase";

interface Props {
  data: Project[];
}

function Home({ data }: Props): ReactElement {
  return (
    <Layout withAnimation={false}>
      <LandingLayout projects={data} />
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

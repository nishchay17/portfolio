import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import ProjectLayout from "../../components/ProjectPage/ProjectLayout";
import Layout from "../../components/layout";
import Nav from "../../components/Nav";
import { supabase } from "../../lib/supabase";
import { Project as Pro } from "../../interface/Project";
import { Container } from "@chakra-ui/react";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface Props {
  project: Pro;
}

function Project({ project }: Props): ReactElement {
  return (
    <Layout title="Project">
      <Container maxW="container.xl">
        <Nav />
      </Container>
      <ProjectLayout project={project} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await supabase.from("Project").select();

  const paths = data?.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as IParams;
  const { data } = await supabase.from("Project").select().match({ id });
  if (data) return { props: { project: data[0] } };
  else {
    return { props: { project: {} }, revalidate: 3600 };
  }
};

export default Project;

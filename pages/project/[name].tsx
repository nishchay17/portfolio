import React, { ReactElement } from "react";
import { useRouter } from "next/router";

import ProjectLayout from "../../components/ProjectPage/ProjectLayout";
import Layout from "../../components/layout";

function Project(): ReactElement {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout title="Project">
      <ProjectLayout name={name?.toString()} />
    </Layout>
  );
}

export default Project;

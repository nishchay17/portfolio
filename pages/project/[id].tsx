import React, { ReactElement } from "react";
import { useRouter } from "next/router";

import ProjectLayout from "../../components/ProjectPage/ProjectLayout";
import Layout from "../../components/Layout";
import { projects } from "../../config/project";
import { Project } from "../../interface/Project";

function Project(): ReactElement {
  const router = useRouter();
  const { id } = router.query;
  let project: Project = {
    id: 99,
    name: "No project found",
    description: "No project with this Id found",
    tag: "",
  };

  if (id) {
    const currentProject = projects.find((project) => project.id == +id);
    if (!!currentProject) {
      project = currentProject;
    }
  }

  return (
    <Layout title="Project">
      {!project ? <></> : <ProjectLayout project={project} />}
    </Layout>
  );
}

export default Project;

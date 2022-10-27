import React, { ReactElement, useEffect, useState } from "react";

import ProjectLayout from "../../components/ProjectPage/ProjectLayout";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { projects } from "../../config/project";
import { Project } from "../../interface/Project";

function Project(): ReactElement {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    setProject(projects.filter((project) => project.id == +id)[0]);
  }, [router.query, id]);

  return (
    <Layout title="Project">
      {project === null ? <></> : <ProjectLayout project={project} />}
    </Layout>
  );
}

export default Project;

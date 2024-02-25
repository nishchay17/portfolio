import { ReactElement } from "react";
import type { Metadata } from "next";

import { projects } from "../../../config/project";
import { Project } from "../../../interface/Project";

export const metadata: Metadata = {
  title: "Project",
};

function Project({ params: { id } }: { params: { id: string } }): ReactElement {
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

  return <div>{JSON.stringify(project)}</div>;
}

export default Project;

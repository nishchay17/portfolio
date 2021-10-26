import React, { ReactElement, useEffect, useState } from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { useToast } from "@chakra-ui/react";

import AdminNav from "./AdminNav";
import { Project } from "../../../interface/Project";
import DeleteProject from "./DeleteProject";
import ProjectForm from "./ProjectForm";
import { addProject, deleteProject } from "./handleBackend";

interface Props {
  projectList: Project[];
}

function DashboardLayout({ projectList }: Props): ReactElement {
  const dummyProject = {
    name: "",
    live: "",
    github: "",
    description: "",
    tag: "",
    id: "",
  };

  const [currentProject, setCurrentProject] = useState<Project>(dummyProject);
  const [newProject, setNewProject] = useState<Project>(dummyProject);
  const [projectLists, setProjectLists] = useState<Project[]>([]);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => setProjectLists(projectList), [setProjectLists, projectList]);

  const deleteModal = useDisclosure();
  const editModal = useDisclosure();
  const addModal = useDisclosure();

  const toast = useToast();

  async function deleteCurrProject() {
    const data = await deleteProject(currentProject.id, currentProject.image);
    if (!data) {
      toast({
        title: "Error",
        description: "Could not delete the project",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Project deleted",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setProjectLists((pre) => {
        return pre.filter((project) => project.id != currentProject.id);
      });
      deleteModal.onClose();
    }
  }

  async function addCurrProject(project: Project) {
    const data = await addProject(project, file);
    if (data === null || data?.length === 0) {
      toast({
        title: "Error",
        description: "Could not add the project",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Project added",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setProjectLists((pre) => [...pre, data[0]]);
      addModal.onClose();
      setNewProject(dummyProject);
      setFile(null);
    }
  }

  return (
    <Container maxW="container.xl">
      <AdminNav onProjectAdd={addModal.onOpen} />
      <Heading>
        <Box
          as="span"
          fontSize="3xl"
          borderBottom="3px solid"
          borderColor="teal"
        >
          All Projects
        </Box>
      </Heading>
      <Box mt="2rem">
        {projectLists &&
          projectLists.map((project: Project) => (
            <Flex
              borderRadius="lg"
              border="3px solid"
              borderColor="teal.300"
              bg="teal.100"
              p="0.5rem"
              mb="1rem"
              key={project.id}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text color={"black"}>{project.name}</Text>
              <Flex>
                <Button
                  size="sm"
                  colorScheme="yellow"
                  mr="0.5rem"
                  onClick={() => {
                    setCurrentProject(project);
                    editModal.onOpen();
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    setCurrentProject(project);
                    deleteModal.onOpen();
                  }}
                  size="sm"
                  colorScheme="red"
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          ))}
      </Box>
      {currentProject && (
        <DeleteProject
          isOpen={deleteModal.isOpen}
          onClose={deleteModal.onClose}
          project={currentProject}
          deleteProject={deleteCurrProject}
        />
      )}
      {currentProject && (
        <ProjectForm
          setFile={setFile}
          file={file}
          handleSubmit={addCurrProject}
          isOpen={editModal.isOpen}
          onClose={editModal.onClose}
          project={currentProject}
          handleChangeProject={setCurrentProject}
        />
      )}
      <ProjectForm
        handleSubmit={addCurrProject}
        isAdd={true}
        isOpen={addModal.isOpen}
        onClose={addModal.onClose}
        project={newProject}
        handleChangeProject={setNewProject}
        setFile={setFile}
        file={file}
      />
    </Container>
  );
}

export default DashboardLayout;

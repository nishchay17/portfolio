import React, { ReactElement, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Button,
  Box,
  Input,
} from "@chakra-ui/react";

import { Project } from "../../../interface/Project";

interface Props {
  isOpen: any;
  onClose: () => void;
  project: Project;
  deleteProject: () => void;
}

function DeleteProject({
  isOpen,
  onClose,
  project,
  deleteProject,
}: Props): ReactElement {
  const [projectName, setProjectName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  function handleDelete() {
    if (projectName === project.name) {
      deleteProject();
      setProjectName("");
    } else {
      setError(true);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Are you sure?</ModalHeader>
        <ModalBody>
          <Text>
            This project{" "}
            <Box as="span" fontWeight="bold">
              {project.name}
            </Box>{" "}
            will be deleted
          </Text>
          <Text mb="1rem">Type this project name for deleting it</Text>
          <Input
            type="text"
            placeholder="Enter project name"
            variant="filled"
            isInvalid={error}
            value={projectName}
            onChange={(e) => {
              setError(false);
              setProjectName(e.target.value);
            }}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            variant="ghost"
            colorScheme="red"
            onClick={handleDelete}
            mr="0.5rem"
          >
            Delete
          </Button>
          <Button
            colorScheme="teal"
            mr={3}
            onClick={() => {
              setProjectName("");
              onClose();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteProject;

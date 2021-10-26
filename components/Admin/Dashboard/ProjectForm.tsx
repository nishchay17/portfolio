import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useRef,
  useState,
} from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Icon,
  Button,
  Flex,
  Text,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";

import { Project } from "../../../interface/Project";
import FormGroup from "./FormGroup";

interface Props {
  isOpen: any;
  isAdd: boolean;
  project: Project;
  onClose: () => void;
  handleChangeProject: Dispatch<SetStateAction<Project>>;
  handleSubmit: (project: Project) => Promise<void>;
  setFile: Dispatch<SetStateAction<File | null>>;
  file: File | null;
}

function ProjectForm({
  isOpen,
  onClose,
  project,
  isAdd,
  handleSubmit,
  handleChangeProject,
  setFile,
  file,
}: Props): ReactElement {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    handleChangeProject({ ...project, [e.target.name]: e.target.value });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {isAdd ? (
          <ModalHeader>Add new project</ModalHeader>
        ) : (
          <ModalHeader>Edit {project.name}</ModalHeader>
        )}
        <ModalBody>
          <FormGroup
            name="name"
            label="Project name"
            value={project.name}
            error={false}
            onChange={handleChange}
          />
          <FormGroup
            name="tag"
            label="Tags"
            value={project.tag}
            error={false}
            helpText="Enter space-separated tags"
            onChange={handleChange}
          />
          <FormGroup
            name="description"
            label="Description"
            value={project.description}
            error={false}
            showTextArea={true}
            onChange={handleChange}
          />
          <FormGroup
            name="github"
            label="Github link"
            value={project.github}
            error={false}
            onChange={handleChange}
          />
          <FormGroup
            name="live"
            label="Live link"
            value={project.live}
            error={false}
            onChange={handleChange}
          />
          <Flex mt="1.5rem" userSelect="none">
            <Flex
              as={FormLabel}
              alignItems="center"
              cursor="pointer"
              htmlFor="image"
            >
              <Icon as={AttachmentIcon} mr="0.5rem" />
              {file ? (
                <Text noOfLines={1}> {file.name}</Text>
              ) : (
                <Text>Upload Image</Text>
              )}
            </Flex>
            <Input
              ref={ref}
              display="none"
              id="image"
              type="file"
              name="image"
              accept="image/*"
              onChange={(event) => {
                if (event.target.files) setFile(event.target.files[0]);
              }}
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="ghost"
            colorScheme={isAdd ? "teal" : "yellow"}
            onClick={() => {
              setIsLoading(true);
              handleSubmit(project);
              setIsLoading(false);
            }}
            isLoading={isLoading}
            mr="0.5rem"
          >
            {isAdd ? "Add" : "Edit"}
          </Button>
          <Button
            colorScheme="teal"
            mr={3}
            onClick={() => {
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

ProjectForm.defaultProps = {
  isAdd: false,
};

export default ProjectForm;

import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Img } from "@chakra-ui/react";
import { Badge, Box, Container, Flex, Text } from "@chakra-ui/layout";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiGithub,
} from "react-icons/fi";

import { ProjectLists } from "../../config/project";
import { Project } from "../../interface/Project";
import MotionBox from "../MotionBox";

interface Props {
  name?: string;
}

function ProjectLayout({ name }: Props): ReactElement {
  const [project, setProject] = useState<Project>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    ProjectLists.map((data, index) => {
      if (data.id == name) {
        setProject(data);
        setCurrentIndex(index);
      }
    });
  }, [name]);

  return (
    <Container maxW="container.xl">
      <Flex
        mt="1rem"
        justifyContent="space-between"
        flexDirection={["column", "row"]}
      >
        <Link href="/#projects">
          <a>
            <Button
              variant="link"
              colorScheme="teal"
              leftIcon={<FiChevronLeft />}
            >
              Back
            </Button>
          </a>
        </Link>

        <Flex mt={["0.5rem", 0]} flexDirection={["column", "row"]}>
          <Link
            href={
              ProjectLists[
                (currentIndex + ProjectLists.length - 1) % ProjectLists.length
              ].id
            }
          >
            <a>
              <Button colorScheme="teal" leftIcon={<FiChevronLeft />}>
                Previous Project
              </Button>
            </a>
          </Link>

          <Link
            href={ProjectLists[(currentIndex + 1) % ProjectLists.length].id}
          >
            <a>
              <Button
                colorScheme="teal"
                rightIcon={<FiChevronRight />}
                mt={["0.5rem", 0]}
                ml={[0, "0.5rem"]}
              >
                Next Project
              </Button>
            </a>
          </Link>
        </Flex>
      </Flex>
      <Flex
        my="3rem"
        justifyContent="space-between"
        flexDirection={["column-reverse", "column-reverse", "row"]}
      >
        <Box width={["100%", "100%", "40%"]}>
          <Text fontSize="4xl" fontWeight="600">
            {project?.name}
          </Text>
          <Flex flexWrap="wrap">
            {project?.tag.map((name, idx) => (
              <Badge
                mt="0.3rem"
                key={idx}
                mr="0.5rem"
                colorScheme="teal"
                fontSize="0.85rem"
              >
                {name}
              </Badge>
            ))}
          </Flex>
          <Box mt="1rem">
            <Text>{project?.description}</Text>
            <ButtonGroup colorScheme="teal" mt="2rem">
              {project?.github && (
                <a
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button leftIcon={<FiGithub />}>Github</Button>
                </a>
              )}
              {project?.live && (
                <a
                  href={project?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button leftIcon={<FiArrowUpRight />}>Live</Button>
                </a>
              )}
            </ButtonGroup>
          </Box>
        </Box>
        {project?.image && (
          <MotionBox
            as={Img}
            fallback={<Text>Loading Image...</Text>}
            layoutId={project?.id}
            draggable={false}
            borderRadius="7px"
            border="0.2rem solid"
            borderColor="teal"
            src={project?.image}
            alt={project?.id}
            width={["100%", "100%", "50%"]}
            mb={["2rem", "2rem", 0]}
          />
        )}
      </Flex>
    </Container>
  );
}

export default ProjectLayout;

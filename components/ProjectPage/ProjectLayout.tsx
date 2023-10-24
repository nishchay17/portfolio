import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Img } from "@chakra-ui/react";
import { Badge, Box, Container, Flex, Text } from "@chakra-ui/layout";
import { FiArrowUpRight, FiChevronLeft, FiGithub } from "react-icons/fi";
import { BsFileEarmarkText } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import { Project } from "../../interface/Project";
import MotionBox from "../MotionBox";
interface Props {
  project: Project;
}
interface themeProp {
  children: any;
  href?: string;
}

const markdownTheme = {
  h1: (props: themeProp) => {
    const { children } = props;
    return (
      <Text as="h1" fontSize={"4xl"} my={4}>
        {children}
      </Text>
    );
  },
  h2: (props: themeProp) => {
    const { children } = props;
    return (
      <Text as="h3" fontSize={"3xl"} my={4}>
        {children}
      </Text>
    );
  },
  h3: (props: themeProp) => {
    const { children } = props;
    return (
      <Text as="h3" fontSize={"2xl"} my={3}>
        {children}
      </Text>
    );
  },
  code: (props: themeProp) => {
    const { children } = props;
    return (
      <Text
        overflow="auto"
        my={2}
        bg="blackAlpha.800"
        color="white"
        py="0.3rem"
        px="0.6rem"
        borderRadius="5px"
      >
        {children}
      </Text>
    );
  },
  a: (props: themeProp) => {
    const { children, href } = props;
    if (href)
      return (
        <Link href={href}>
          <a target={"_blank"} rel="noreferrer">
            {children}
          </a>
        </Link>
      );
    else return <a>{children}</a>;
  },
};

function ProjectLayout({ project }: Props): ReactElement {
  const [readme, setReadme] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  function getReadMeUrl(repoLink: string): string {
    const repoSplit = repoLink.split("/");
    return `https://raw.githubusercontent.com/nishchay17/${
      repoSplit[repoSplit.length - 1]
    }/main/README.md`;
  }

  async function fetchReadme(url: string) {
    try {
      const res = await fetch(url);
      const data = await res.text();
      return data;
    } catch (error) {
      console.error(error);
    }
    return "";
  }

  useEffect(() => {
    async function getReadme(githubLink: string) {
      const url = getReadMeUrl(githubLink);
      setIsLoading(true);
      try {
        const readmeData = await fetchReadme(url);
        setReadme(readmeData);
      } catch (err) {
        setReadme(null);
      } finally {
        setIsLoading(false);
      }
    }
    if (project.github) getReadme(project.github);
  }, [project]);

  return (
    <Container maxW="container.xl">
      <Flex
        mt="3rem"
        justifyContent="space-between"
        flexDirection={["column", "row"]}
      >
        <Link href="/">
          <a>
            <Button
              shadow="none"
              variant="outline"
              leftIcon={<FiChevronLeft />}
              size="sm"
            >
              Back
            </Button>
          </a>
        </Link>
      </Flex>
      <Flex
        p="2rem"
        borderRadius="7px"
        my="3rem"
        justifyContent="space-between"
        flexDirection={["column-reverse", "column-reverse", "row"]}
      >
        <Box width={["100%", "100%", "40%"]}>
          <Text fontSize="5xl" letterSpacing="1px" fontWeight="600">
            {project?.name}
          </Text>
          <Flex flexWrap="wrap" mb="0.5rem">
            {project?.additionalTags?.map((name, idx) => (
              <Badge
                mt="0.3rem"
                key={idx}
                mr="0.5rem"
                colorScheme="purple"
                fontSize="0.85rem"
              >
                {name}
              </Badge>
            ))}
            {project?.tag.split(",").map((name, idx) => (
              <Badge
                mt="0.3rem"
                key={idx}
                mr="0.5rem"
                colorScheme="blackAlpha"
                fontSize="0.85rem"
              >
                {name}
              </Badge>
            ))}
          </Flex>
          <Text fontSize="lg">Created on: {project.createdOn}</Text>
          <Box mt="1rem">
            <Text>{project?.description}</Text>
            <ButtonGroup variant="btn-black" mt="2rem">
              {project?.github && (
                <a
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button leftIcon={<FiGithub />} size="sm">
                    Github
                  </Button>
                </a>
              )}
              {project?.live && (
                <a
                  href={project?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button leftIcon={<FiArrowUpRight />} size="sm">
                    Live
                  </Button>
                </a>
              )}
            </ButtonGroup>
          </Box>
        </Box>
        {project?.image && (
          <MotionBox
            as={Img}
            fallback={<Text>Loading Image...</Text>}
            draggable={false}
            borderRadius="7px"
            border="1px"
            borderColor="blackAlpha.300"
            src={`/img/${project.image}`}
            alt={project?.id}
            width={["100%", "100%", "50%"]}
            mb={["2rem", "2rem", 0]}
          />
        )}
      </Flex>
      {isLoading && <>Loading Additional information</>}
      {readme && (
        <Box
          p="2rem"
          mb="3rem"
          bg="yellow.50"
          borderRadius="7px"
          border="1px solid"
          borderColor="blackAlpha.300"
        >
          <Box mb="1.5rem">
            <Flex alignItems="center" mb="0.5rem">
              <Text fontSize="1.75rem" mr="0.7rem">
                README
              </Text>
              <BsFileEarmarkText size="2rem" />
            </Flex>
            <hr />
          </Box>
          <ReactMarkdown components={ChakraUIRenderer(markdownTheme)} skipHtml>
            {readme}
          </ReactMarkdown>
        </Box>
      )}
    </Container>
  );
}

export default ProjectLayout;

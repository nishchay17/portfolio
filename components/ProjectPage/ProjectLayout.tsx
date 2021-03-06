import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Img } from "@chakra-ui/react";
import {
  Badge,
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Code,
} from "@chakra-ui/layout";
import { FiArrowUpRight, FiChevronLeft, FiGithub } from "react-icons/fi";
import { BsFileEarmarkText } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import axios from "axios";

import { Project } from "../../interface/Project";
import MotionBox from "../MotionBox";
import { supabase } from "../../lib/supabase";
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
      <Heading as="h1" fontSize={"4xl"} my={4}>
        {children}
      </Heading>
    );
  },
  h2: (props: themeProp) => {
    const { children } = props;
    return (
      <Heading as="h3" fontSize={"3xl"} my={4}>
        {children}
      </Heading>
    );
  },
  h3: (props: themeProp) => {
    const { children } = props;
    return (
      <Heading as="h3" fontSize={"2xl"} my={3}>
        {children}
      </Heading>
    );
  },
  code: (props: themeProp) => {
    const { children } = props;
    return (
      <Code
        my={2}
        bg="#212144"
        color="white"
        py="0.3rem"
        px="0.6rem"
        borderRadius="5px"
      >
        {children}
      </Code>
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
  const [readme, setReadme] = useState(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  function getReadMeUrl(repoLink: string): string {
    const repoSplit = repoLink.split("/");
    return `https://raw.githubusercontent.com/nishchay17/${
      repoSplit[repoSplit.length - 1]
    }/main/README.md`;
  }

  function getUrl(image: string): string | null {
    const { publicURL } = supabase.storage.from("image").getPublicUrl(image);
    return publicURL;
  }

  async function fetchReadme(url: string) {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error);
      return "";
    }
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
      </Flex>
      <Flex
        my="3rem"
        justifyContent="space-between"
        flexDirection={["column-reverse", "column-reverse", "row"]}
      >
        <Box width={["100%", "100%", "40%"]}>
          <Text fontSize="5xl" fontWeight="500">
            {project?.name}
          </Text>
          <Flex flexWrap="wrap">
            {project?.tag.split(" ").map((name, idx) => (
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
            src={getUrl(project.image)}
            alt={project?.id}
            width={["100%", "100%", "50%"]}
            mb={["2rem", "2rem", 0]}
          />
        )}
      </Flex>
      {isLoading && <>Loading Additional information</>}
      {readme && (
        <Box padding="1rem" mb="3rem">
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

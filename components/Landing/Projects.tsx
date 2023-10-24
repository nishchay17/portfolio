import React, { ReactElement, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge, Box, Flex, Grid, Text, Heading } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { Project } from "../../interface/Project";
import MotionBox from "../MotionBox";
import { projects } from "../../config/project";

const item = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
  hidden: { opacity: 0, y: 50 },
};

interface ProjectWithIndex extends Project {
  index: number;
  bg: string;
}

function ProjectCard({
  image,
  name,
  description,
  id,
  index,
  bg,
  additionalTags,
}: ProjectWithIndex): ReactElement {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Link href={`/project/${id}`}>
      <a>
        <MotionBox
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={item}
          custom={index}
          cursor="pointer"
          width={"100%"}
          height={"100%"}
          borderRadius="7px"
          border="1px"
          borderColor="blackAlpha.300"
          overflow="hidden"
        >
          <MotionBox initial={false} layoutId={id} position="relative">
            <Image
              objectFit="cover"
              src={image ? `/img/${image}` : "/img/no-img.png"}
              height={400}
              width={708}
              quality={100}
              alt={`${image}`}
              draggable={false}
            />
          </MotionBox>
          <Box
            borderTop="1px"
            borderColor="blackAlpha.300"
            mt={-1.5}
            px="1rem"
            pb="1rem"
            bg={bg}
            h="full"
          >
            <Flex gap="0.5rem" alignItems="center" mt="1rem">
              <Text fontSize="xl">{name}</Text>
              {additionalTags?.map((tag) => (
                <Badge colorScheme="purple" key={tag}>
                  {tag}
                </Badge>
              ))}
            </Flex>
            <Text>{description}</Text>
          </Box>
        </MotionBox>
      </a>
    </Link>
  );
}

function Projects(): ReactElement {
  const _projects = projects.map((project) => ({
    ...project,
    bg: project.bg ?? "blue.50",
  }));

  return (
    <>
      <Box id="projects" />
      <Box
        mb="2rem"
        mt={["2rem", "5rem"]}
        pb="2rem"
        borderRadius="7px"
        transform="translateY(1.5rem)"
      >
        <Heading
          as="h3"
          textAlign="center"
          fontSize={["4xl", "5xl", "6xl"]}
          py="3.5rem"
          fontWeight={600}
          lineHeight={"100%"}
        >
          Featured Projects
        </Heading>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap="1rem"
        >
          {_projects.map((data, idx) => (
            <ProjectCard key={data.id} index={idx} {...data} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Projects;

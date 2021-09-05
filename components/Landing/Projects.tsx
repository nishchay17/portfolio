import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, Grid, Text } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { Project } from "../../interface/Project";
import { ProjectLists } from "../../config/project";
import MotionBox from "../MotionBox";

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
}

function ProjectCard({
  image,
  name,
  description,
  tag,
  id,
  index,
}: ProjectWithIndex): ReactElement {
  const routrer = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={item}
      custom={index}
      onClick={() =>
        routrer.push(`/project/${name.toLowerCase().split(" ").join("-")}`)
      }
      cursor="pointer"
      width={"100%"}
      bg="blackAlpha.800"
      color="whiteAlpha.900"
      borderRadius="7px"
      p="1rem"
    >
      <Box width="100%" display={image ? "block" : ["none", "block"]}>
        <MotionBox
          as={Image}
          layoutId={id}
          alt="project-img"
          draggable={false}
          initial={false}
          width="100%"
          height="auto"
          src={image ? image : "/img/no-img.png"}
        />
      </Box>
      <Flex flexDirection="column" justifyContent="space-between">
        <Box>
          <Text fontWeight="600" mt={image ? "1rem" : [0, "1rem"]}>
            {name}
          </Text>
          <Text fontSize="0.9rem" lineHeight="120%" mt="1rem" noOfLines={3}>
            {description}
          </Text>
        </Box>
        <Flex mt="1rem" flexWrap="wrap">
          {tag.map((name, idx) => (
            <Badge
              colorScheme="teal"
              size="0.7rem"
              key={idx}
              mt="0.5rem"
              mr="0.5rem"
            >
              {name}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </MotionBox>
  );
}

function Projects(): ReactElement {
  return (
    <Box as="section" my="2rem" id="projects">
      <Text as="h3" fontSize="4xl" py="2rem">
        Projects
      </Text>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap="0.5rem"
      >
        {ProjectLists.map((data, idx) => (
          <ProjectCard key={data.id} index={idx} {...data} />
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;

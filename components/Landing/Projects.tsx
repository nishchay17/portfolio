import React, { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Badge, Box, Flex, Grid, Text } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useColorMode } from "@chakra-ui/color-mode";

import { Project } from "../../interface/Project";
import MotionBox from "../MotionBox";
import { supabase } from "../../lib/supabase";

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
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  function getUrl(image: string): string {
    if (image === "") return "/img/no-img.png";
    const { publicURL, error } = supabase.storage
      .from("image")
      .getPublicUrl(image);
    if (error || !publicURL) return "/img/no-img.png";
    return publicURL;
  }

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={item}
      custom={index}
      onClick={() => routrer.push(`/project/${id}`)}
      cursor="pointer"
      width={"100%"}
      bg={colorMode === "dark" ? "gray.700" : "blackAlpha.800"}
      color="whiteAlpha.900"
      borderRadius="7px"
      p="1rem"
      display="flex"
      flexDirection="column"
    >
      <Box width="100%" display={image ? "block" : ["none", "block"]}>
        <MotionBox initial={false} layoutId={id}>
          <Image
            src={getUrl(image ? image : "")}
            height={214}
            width={380}
            quality={90}
            alt="project-img"
            draggable={false}
          />
        </MotionBox>
      </Box>
      <Flex flex={1} flexDirection="column" justifyContent="space-between">
        <Box>
          <Text fontWeight="600" mt={image ? "1rem" : [0, "1rem"]}>
            {name}
          </Text>
          <Text fontSize="0.9rem" lineHeight="120%" mt="1rem" noOfLines={3}>
            {description}
          </Text>
        </Box>
        <Flex mt="1rem" flexWrap="wrap">
          {tag.split(" ").map((name, idx) => (
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

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props): ReactElement {
  return (
    <Box as="section" my="2rem" id="projects">
      <Text as="h3" fontSize="4xl" py="2rem">
        Projects
      </Text>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap="0.5rem"
      >
        {projects.map((data, idx) => (
          <ProjectCard key={data.id} index={idx} {...data} />
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;

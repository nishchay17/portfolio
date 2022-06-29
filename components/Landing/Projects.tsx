import React, { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Badge, Box, Flex, Grid, Text, Heading } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useColorMode } from "@chakra-ui/color-mode";

import { Project } from "../../interface/Project";
import MotionBox from "../MotionBox";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

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
    <Link href={`/project/${id}`}>
      <a>
        <MotionBox
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={item}
          custom={index}
          onClick={() => routrer.push(`/project/${id}`)}
          cursor="pointer"
          width={"100%"}
          height={"100%"}
          backdropFilter="blur(10px) saturate(151%)"
          bg="rgba(10, 10, 10, 0.3)"
          color="whiteAlpha.900"
          borderRadius="7px"
          p="1rem"
          display="flex"
          border={"1px solid rgba(233, 233, 233, 0.1)"}
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
              <Text fontSize="xl" mt={image ? "1rem" : [0, "1rem"]}>
                {name}
              </Text>
              <Text lineHeight="120%" mt="1rem" noOfLines={3}>
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
      </a>
    </Link>
  );
}

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props): ReactElement {
  return (
    <>
      <Box id="projects" />
      <Box as="section" mb="2rem" transform="translateY(1.5rem)">
        <Heading as="h3" fontSize="6xl" letterSpacing="4px" py="2rem">
          Projects
        </Heading>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap="0.8rem"
        >
          {projects.map((data, idx) => (
            <ProjectCard key={data.id} index={idx} {...data} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Projects;

import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Badge, Box, Flex, Grid, Text, Heading } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Link from "next/link";

import { Project } from "../../interface/Project";
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
  bg: String;
}

function ProjectCard({
  image,
  name,
  description,
  tag,
  id,
  index,
  bg,
}: ProjectWithIndex): ReactElement {
  const routrer = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const [isMouseIn, setIsMouseIn] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Link href={`/project/${id}`}>
      <a>
        <MotionBox
          onMouseEnter={() => setIsMouseIn(true)}
          onMouseLeave={() => setIsMouseIn(false)}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={item}
          custom={index}
          onClick={() => routrer.push(`/project/${id}`)}
          cursor="pointer"
          width={"100%"}
          height={"100%"}
          bg={bg}
          sx={{
            transition: "all 0.7s",
            ":hover": {
              bg: bg.split(".")[0] + ".100",
            },
          }}
          borderRadius="7px"
          p={["1rem", "1rem", "1rem", "1.5rem", "2rem"]}
          display="flex"
          flexDirection="column"
        >
          <MotionBox initial={false} layoutId={id} position="relative">
            <Image
              src={image ? `/img/${image}` : "/img/no-img.png"}
              height={400}
              width={708}
              quality={90}
              alt={`${image}`}
              draggable={false}
            />
            {isMouseIn && (
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                as="p"
                position="absolute"
                top={"50%"}
                left="50%"
                textAlign="center"
                lineHeight="100%"
                transform="translate(-50%, -50%)"
                fontSize={["2xl", "2xl", "2xl", "3xl", "4xl"]}
                fontWeight={600}
                bg={bg.split(".")[0] + ".300"}
                p="0.5rem 2rem"
                borderRadius="7px"
              >
                {name}
              </MotionBox>
            )}
          </MotionBox>
        </MotionBox>
      </a>
    </Link>
  );
}

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props): ReactElement {
  const colors = ["yellow.50", "red.50", "green.50", "purple.50"];
  const _projects = projects.map((project, idx) => ({
    ...project,
    bg: colors[idx] ?? "blue.50",
  }));

  return (
    <>
      <Box id="projects" />
      <Box
        mb="2rem"
        mt={["2rem", "5rem"]}
        px={["1rem", "2rem"]}
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

import React, { ReactElement } from "react";
import { Box, Container, Flex, Text, Grid, Heading } from "@chakra-ui/layout";
import {
  SiNextdotjs,
  SiReact,
  SiChakraui,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiJavascript,
} from "react-icons/si";

interface TechNameProp {
  name: string;
  children: ReactElement;
}

function Tech(): ReactElement {
  function Techname({ name, children }: TechNameProp): ReactElement {
    return (
      <Flex
        px="1.5rem"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        flexDirection="column"
        border="1px solid rgba(233, 233, 233, 0.1)"
        borderRadius="7px"
        p="1.5rem 1rem"
        backdropFilter="blur(10px) saturate(151%)"
      >
        {children}
        <Text mt="1rem" fontSize="xl">
          {name}
        </Text>
      </Flex>
    );
  }

  return (
    <Box as="section" mt="4rem" py="4rem" bg="blackAlpha.100">
      <Container maxW="1600px" px={["1rem", "2rem"]}>
        <Heading
          as="h3"
          py="2rem"
          lineHeight="110%"
          mb="2rem"
          fontSize="6xl"
          fontWeight={600}
          textAlign="center"
        >
          Tech that I love and use
        </Heading>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={["1rem", "1.5rem"]}
        >
          <Techname name="Next js">
            <SiNextdotjs size="5rem" />
          </Techname>
          <Techname name="React js">
            <SiReact size="5rem" />
          </Techname>
          <Techname name="Chakra UI">
            <SiChakraui size="5rem" />
          </Techname>
          <Techname name="Typescript">
            <SiTypescript size="5rem" />
          </Techname>
          <Techname name="Node js">
            <SiNodedotjs size="5rem" />
          </Techname>
          <Techname name="Express">
            <SiExpress size="5rem" />
          </Techname>
          <Techname name="Javascript">
            <SiJavascript size="5rem" />
          </Techname>
          <Techname name="Bootstrap">
            <SiBootstrap size="5rem" />
          </Techname>
        </Grid>
      </Container>
    </Box>
  );
}

export default Tech;

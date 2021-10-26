import React, { ReactElement } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/react";

import MotionBox from "../MotionBox";
interface TechNameProp {
  name: string;
}

function Tech(): ReactElement {
  function Techname({ name }: TechNameProp): ReactElement {
    return (
      <MotionBox
        as={Box}
        textAlign="center"
        bg="blackAlpha.800"
        p="1rem"
        color="white"
        borderRadius="7px"
      >
        <Text fontSize="1.2rem">{name}</Text>
      </MotionBox>
    );
  }

  return (
    <Box as="section" my="2rem">
      <Text as="h3" fontSize="4xl" py="2rem">
        Tech that I love
      </Text>
      <MotionBox
        as={Grid}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(6, 1fr)",
        ]}
        gap="0.5rem"
      >
        <Techname name="Next js" />
        <Techname name="React js" />
        <Techname name="Chakra UI" />
        <Techname name="Typescript" />
        <Techname name="Node js" />
        <Techname name="Express" />
      </MotionBox>
    </Box>
  );
}

export default Tech;

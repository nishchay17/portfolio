import React, { ReactElement } from "react";
import { Box, Container, Flex, Text, Heading } from "@chakra-ui/layout";

interface TechNameProp {
  name: string;
}

function Tech({ techs }: { techs: string[] }): ReactElement {
  function Techname({ name }: TechNameProp): ReactElement {
    return (
      <Text
        border="1px"
        borderRadius="7px"
        px="0.75rem"
        py="0.1rem"
        fontSize="md"
        borderColor="blackAlpha.300"
      >
        {name}
      </Text>
    );
  }

  return (
    <Box as="section" mt="4rem" py={["4rem", "5rem"]}>
      <Container maxW="container.xl">
        <Heading
          as="h3"
          fontSize={["4xl", "5xl", "6xl"]}
          fontWeight={500}
          lineHeight={"100%"}
          mb="1.5rem"
        >
          Tech that I love and use
        </Heading>
        <Flex gap="1rem" rowGap="0.75rem" wrap="wrap">
          {techs.map((tech) => (
            <Techname key={tech} name={tech} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

export default Tech;

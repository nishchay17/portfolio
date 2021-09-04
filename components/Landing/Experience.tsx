import React, { ReactElement } from "react";
import { Box, Flex, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FiMinus } from "react-icons/fi";

interface Props {}

function Experience({}: Props): ReactElement {
  return (
    <Flex flexDirection="column" my="2rem" as="section">
      <Text fontSize="4xl" py="2rem">
        Experience
      </Text>

      <Box width={["100%", "100%", "40rem"]} pl="2rem" position="relative">
        <Text fontSize="2xl">The Internet Folks</Text>
        <Text opacity="0.6">
          Software Engineer Intern <i>Dec 2020 - June 2021</i>
        </Text>
        <Box
          position="absolute"
          top="9%"
          left={0}
          border="6px solid var(--primary-color)"
          borderRadius="50%"
          height="1.5rem"
          width="1.5rem"
        />
      </Box>
      <List spacing={1} ml="3rem" mt="1rem">
        <ListItem>
          <ListIcon as={FiMinus} color="green.500" />
          Used Next js (react js) with server-side rendering
        </ListItem>
        <ListItem>
          <ListIcon as={FiMinus} color="green.500" />
          Used Redux (Redux toolkit) for state management
        </ListItem>
        <ListItem>
          <ListIcon as={FiMinus} color="green.500" />
          Implemented Debouncing to reduce API calls up to 70%
        </ListItem>
      </List>
    </Flex>
  );
}

export default Experience;

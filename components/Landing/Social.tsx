import { Box, Container } from "@chakra-ui/layout";
import React, { ReactElement } from "react";

function Social(): ReactElement {
  return (
    <Box as="footer" bg="blackAlpha.800" mt="4rem" width="100%" height="10rem">
      <Box height="0.5rem" width="100%" bg="teal.500" />
      <Container py={["1rem", "2rem"]} maxW="container.xl" color="white">
        Footer
      </Container>
    </Box>
  );
}

export default Social;

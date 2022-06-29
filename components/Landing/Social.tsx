import React, { ReactElement } from "react";
import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

function Social(): ReactElement {
  return (
    <Box as="footer" mt="4rem" width="100%">
      <Container py={["1.5rem", "2rem"]} maxW="container.xl" color="white">
        <Flex alignContent="center" justifyContent="space-between">
          <Text fontSize="2xl" lineHeight={["115%", "130%"]}>
            Let&apos;s Connect
          </Text>
          <Grid
            gap="1.2rem"
            templateColumns="repeat(3, 1fr)"
            alignContent="center"
            sx={{
              "& > *": {
                cursor: "pointer",
                transition: "all 0.1s",
              },
              "& > *:hover": {
                color: "whiteAlpha.700",
              },
            }}
          >
            <a
              href="https://github.com/nishchay17"
              aria-label="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size="2rem" />
            </a>
            <a
              href="https://www.instagram.com/nishchay17"
              aria-label="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size="2rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/nishchay-trivedi-61219978"
              aria-label="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size="2rem" />
            </a>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
}

export default Social;

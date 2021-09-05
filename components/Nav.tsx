import React, { ReactElement } from "react";
import Link from "next/link";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

function Nav(): ReactElement {
  return (
    <>
      <Box height="0.5rem" width="100%" bg="teal.500" />
      <Container maxW="container.xl" py="1rem">
        <nav>
          <Flex alignItems="center" justifyContent="space-between">
            <Link href="/">
              <a>
                <h1>Nishchay</h1>
              </a>
            </Link>
            <Flex>
              <a
                href="https://www.linkedin.com/in/nishchay-trivedi-61219978"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text
                  sx={{
                    ":hover": {
                      color: "teal.800",
                    },
                  }}
                  mr="1rem"
                >
                  Linkedin
                </Text>
              </a>
              <Link href="/#projects">
                <a>
                  <Text
                    sx={{
                      ":hover": {
                        color: "teal.800",
                      },
                    }}
                  >
                    Projects
                  </Text>
                </a>
              </Link>
            </Flex>
          </Flex>
        </nav>
      </Container>
    </>
  );
}

export default Nav;

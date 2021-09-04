import React, { ReactElement } from "react";
import Link from "next/link";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

function Nav(): ReactElement {
  return (
    <>
      <Box height="0.5rem" width="100%" bg="teal.500" />
      <Container maxW="container.xl" py="1rem">
        <nav>
          <Flex alignItems="center">
            <Text>
              <Link href="/">
                <a>Nishchay</a>
              </Link>
            </Text>
          </Flex>
        </nav>
      </Container>
    </>
  );
}

export default Nav;

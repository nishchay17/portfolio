import React, { ReactElement } from "react";
import Link from "next/link";
import { Container, Flex, Text } from "@chakra-ui/react";

import ThemeToggleButton from "./ThemeToggleButton";
import MotionBox from "./MotionBox";

function Nav(): ReactElement {
  return (
    <>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        as={Container}
        maxW="container.xl"
        py="1rem"
        px={0}
      >
        <Flex as={"nav"} alignItems="center" justifyContent="space-between">
          <Link href="/">
            <a>
              <h1>Nishchay</h1>
            </a>
          </Link>
          <Flex alignItems="center">
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
              >
                Linkedin
              </Text>
            </a>
            <Link href="/#projects">
              <a>
                <Text
                  mx="1rem"
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
            <ThemeToggleButton />
          </Flex>
        </Flex>
      </MotionBox>
    </>
  );
}

export default Nav;

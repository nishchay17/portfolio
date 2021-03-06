import React, { ReactElement } from "react";
import Link from "next/link";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

import MotionBox from "./MotionBox";

interface NavProp {
  isSticky: boolean;
}

function Nav({ isSticky }: NavProp): ReactElement {
  // console.log(isSticky)
  return (
    <Box
      position="fixed"
      top={0}
      zIndex={1000}
      right={0}
      left={0}
      backdropFilter="blur(10px) saturate(151%)"
      bg="rgba(24, 24, 24, 0.5)"
      className={isSticky ? "nav sticky-nav" : "nav"}
      boxShadow={isSticky ? "0 1px 1px rgba(233, 233, 233, 0.1)" : ""}
    >
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        as={Container}
        maxW="container.xl"
      >
        <Flex as={"nav"} alignItems="center" justifyContent="space-between">
          <Link href="/">
            <a>
              <h1>Nishchay17</h1>
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
                    color: "white",
                  },
                }}
              >
                Linkedin
              </Text>
            </a>
            <Link href="/#projects">
              <a>
                <Text
                  ml="1rem"
                  sx={{
                    ":hover": {
                      color: "white",
                    },
                  }}
                >
                  Projects
                </Text>
              </a>
            </Link>
          </Flex>
        </Flex>
      </MotionBox>
    </Box>
  );
}

export default Nav;

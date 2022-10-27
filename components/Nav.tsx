import React, { ReactElement } from "react";
import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

import MotionBox from "./MotionBox";

interface NavProp {
  isSticky: boolean;
}

function Nav({ isSticky }: NavProp): ReactElement {
  return (
    <Box
      position="fixed"
      top={0}
      zIndex={1000}
      right={0}
      left={0}
      backdropFilter="blur(10px) saturate(151%)"
      className={isSticky ? "nav sticky-nav" : "nav"}
      boxShadow={isSticky ? "0 1px 1px rgba(255, 255, 255, 0.1)" : ""}
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        mx={["1rem", "3rem"]}
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
                    color: "black",
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
                      color: "black",
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

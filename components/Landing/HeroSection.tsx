import React, { ReactElement } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FiDownload, FiMail, FiArrowDown } from "react-icons/fi";
import { Container } from "@chakra-ui/layout";

import MotionBox from "../MotionBox";

const margin = 3;

function HeroSection(): ReactElement {
  return (
    <Box
      my={`${margin}rem`}
      mx={`calc(${margin}rem / 1.5)`}
      className="hero-gradient"
    >
      <Container maxW="container.xl">
        <Box height={`calc(100vh - ${2 * margin}rem)`}>
          <Flex
            as="section"
            justifyContent="center"
            flexDirection="column"
            height="100%"
            alignItems={"center"}
          >
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              as={Flex}
              flexDirection="column"
              width={["100%", "95%", "75%"]}
            >
              <Heading
                fontSize={["40px", "6vw"]}
                letterSpacing="1px"
                lineHeight={1}
                fontWeight={600}
                textAlign="center"
              >
                Hello there <br /> I am Nishchay
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.6 }}
              as={Text}
              fontSize={["1xl", "1.5vw"]}
              mt="1rem"
              lineHeight="120%"
              textAlign="center"
            >
              A full stack developer, <br /> designing and developing web
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              as={Flex}
              mt="4rem"
              flexDirection={["column", "row"]}
              alignItems="center"
            >
              <a
                href={process.env.NEXT_PUBLIC_RESUME}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  isFullWidth={false}
                  colorScheme="gray"
                  leftIcon={<FiDownload size="1.2rem" />}
                >
                  Download Resume
                </Button>
              </a>
              <a href="mailto:nishchay13971@gmail.com">
                <MotionBox
                  as={Button}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  isFullWidth={false}
                  leftIcon={<FiMail size="1.2rem" />}
                  colorScheme="gray"
                  ml={[0, "1rem"]}
                  mt={["1rem", 0]}
                >
                  Get In Touch
                </MotionBox>
              </a>
            </MotionBox>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;

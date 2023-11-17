import React, { ReactElement } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FiDownload, FiMail } from "react-icons/fi";
import { Container } from "@chakra-ui/layout";

import MotionBox from "../MotionBox";

const margin = 3;

function HeroSection(): ReactElement {
  return (
    <Box
      my={[0, `${margin}rem`]}
      mx={[0, `calc(${margin}rem / 1.5)`]}
      className="hero-gradient"
    >
      <Container maxW="container.xl">
        <Box height={["100vh", `calc(100vh - ${2 * margin}rem)`]}>
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
                fontSize={["2.75rem", "3rem", "4rem", "6vw"]}
                letterSpacing="1px"
                lineHeight={1}
                fontWeight={500}
                textAlign="center"
              >
                Hello there <br /> I am Nishchay
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              as={Text}
              fontSize={["1.1rem", "1.2rem", "1.3rem", "1.4rem", "1.4vw"]}
              mt="1rem"
              color="blackAlpha.800"
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
                  variant="btn-black"
                  leftIcon={<FiDownload size="1.2rem" />}
                  size="sm"
                >
                  Download Resume
                </Button>
              </a>
              <a href="mailto:nishchay13971@gmail.com">
                <MotionBox
                  as={Button}
                  size="sm"
                  variant="btn-black"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  leftIcon={<FiMail size="1.2rem" />}
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

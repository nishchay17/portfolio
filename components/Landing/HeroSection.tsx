import React, { ReactElement } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FiDownload, FiMail, FiArrowDown } from "react-icons/fi";

import MotionBox from "../MotionBox";

function HeroSection(): ReactElement {
  return (
    <Box height={"100vh"}>
      <Flex
        as="section"
        justifyContent="center"
        flexDirection="column"
        height="100%"
        alignItems={"center"}
      >
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          as={Flex}
          flexDirection="column"
          width={["100%", "95%", "75%", "70%", "65%"]}
          mt="5rem"
        >
          <Heading
            fontSize={["20vw", "7rem", "9rem", "11rem"]}
            letterSpacing="7px"
            lineHeight={1}
          >
            Nishchay
          </Heading>
          <Heading
            fontSize={["20vw", "7rem", "9rem", "11rem"]}
            letterSpacing="7px"
            alignSelf="flex-end"
            lineHeight={0.85}
          >
            Trivedi
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ delay: 0.5 }}
          as={Text}
          fontSize={["1xl", "2xl"]}
          mt="1rem"
          lineHeight="110%"
          letterSpacing="0.5px"
        >
          Creating Web Experiences And More
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
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
              colorScheme="blackAlpha"
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
              colorScheme="blackAlpha"
              ml={[0, "1rem"]}
              mt={["1rem", 0]}
            >
              Get In Touch
            </MotionBox>
          </a>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          as={Flex}
          alignItems="center"
          mt="5rem"
        >
          <Text opacity="0.6" fontWeight="400">
            Scroll down to know more
          </Text>
          <MotionBox
            animate={{
              y: [-3, 3, -3],
              transition: { duration: 2, repeat: Infinity, delay: 1 },
            }}
          >
            <Box ml="0.5rem" opacity="0.6">
              <FiArrowDown />
            </Box>
          </MotionBox>
        </MotionBox>
      </Flex>
    </Box>
  );
}

export default HeroSection;

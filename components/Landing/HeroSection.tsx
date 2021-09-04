import React, { ReactElement } from "react";
import Image from "next/image";
import { Box, Button, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import Lottie from "lottie-react";

import * as shapes from "../../public/animation/shape.json";
import MotionBox from "../MotionBox";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: shapes,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function HeroSection(): ReactElement {
  return (
    <Flex
      as="section"
      height={["85vh", "80vh"]}
      justifyContent="space-between"
      alignItems={["flex-end", "center"]}
    >
      <Box>
        <MotionBox
          as={Heading}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          fontWeight="700"
          fontSize={["6xl", "7xl"]}
          lineHeight="100%"
        >
          Nishchay{" "}
          <Box as="span" fontSize={["6xl", "7xl"]} fontWeight="500">
            Trivedi
          </Box>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          as={Text}
          fontSize={"2xl"}
          mt="1rem"
          lineHeight="110%"
        >
          Creating Web Experiences And More
        </MotionBox>
        <Flex mt="2rem" flexDirection={["column", "row"]}>
          <Tooltip label="Download me 🚀">
            <a
              href={process.env.NEXT_PUBLIC_RESUME}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                isFullWidth={false}
                colorScheme="teal"
                leftIcon={
                  <Image
                    width={20}
                    height={20}
                    alt="download"
                    draggable={false}
                    src="/svg/download.svg"
                  />
                }
              >
                Download Resume
              </Button>
            </a>
          </Tooltip>
          <a href="mailto:nishchay13971@gmail.com">
            <MotionBox
              as={Button}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
              }}
              isFullWidth={false}
              leftIcon={
                <Image
                  width={20}
                  height={20}
                  alt="mail"
                  draggable={false}
                  src="/svg/mail.svg"
                />
              }
              colorScheme="teal"
              variant="outline"
              ml={[0, "1rem"]}
              mt={["1rem", 0]}
            >
              Get In Touch
            </MotionBox>
          </a>
        </Flex>
        <MotionBox
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          as={Flex}
          opacity="0.6"
          alignItems="center"
          mt="5rem"
        >
          <Text>Scroll down to know more</Text>
          <MotionBox
            animate={{
              y: [-5, 5, -5],
              transition: { duration: 2, repeat: Infinity },
            }}
          >
            <Box ml="0.5rem">
              <Image
                width={20}
                height={20}
                alt="scroll"
                src="/svg/arrow-down.svg"
              />
            </Box>
          </MotionBox>
        </MotionBox>
      </Box>

      <Box
        userSelect="none"
        width="40%"
        height="90%"
        display={["none", "none", "block"]}
        bg="teal.100"
      >
        {/* <Lottie animationData={shapes} /> */}
      </Box>
    </Flex>
  );
}

export default HeroSection;

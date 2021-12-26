import React, { ReactElement } from "react";
import Image from "next/image";
import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { keyframes } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

import Next from "../../public/svg/nextjs.svg";
import ReactImage from "../../public/svg/react.svg";
import Chakra from "../../public/svg/chakraui.svg";
import Typescript from "../../public/svg/typescript.svg";
import Node from "../../public/svg/nodejs.svg";
import Express from "../../public/svg/express.svg";
import Javascript from "../../public/svg/javascript.svg";
import Bootstrap from "../../public/svg/bootstrap.svg";

interface TechNameProp {
  name: string;
  svg: string;
}

const slide = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-12rem * 8))}
`;

function Tech(): ReactElement {
  const slideAnimation = `${slide} 20s linear infinite`;
  const { colorMode } = useColorMode();

  function Techname({ name, svg }: TechNameProp): ReactElement {
    return (
      <Box height={["12rem", "12rem"]} width="12rem">
        <Flex
          px="1.5rem"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Image src={svg} title={name} alt={name} />
        </Flex>
      </Box>
    );
  }

  return (
    <Box as="section" my="2rem">
      <Container maxW="container.xl">
        <Text as="h3" fontSize="4xl" py="2rem" lineHeight="110%">
          Tech that I love and use
        </Text>
      </Container>
      <Flex
        id="slider"
        bg={colorMode === "dark" ? "whiteAlpha.900" : "white"}
        height={["12rem", "12rem"]}
        overflow="hidden"
        position="relative"
      >
        <Flex
          id="slider-track"
          animation={slideAnimation}
          width="calc(12rem * 16)"
        >
          <Techname name="Next js" svg={Next} />
          <Techname name="React js" svg={ReactImage} />
          <Techname name="Chakra UI" svg={Chakra} />
          <Techname name="Typescript" svg={Typescript} />
          <Techname name="Node js" svg={Node} />
          <Techname name="Express" svg={Express} />
          <Techname name="Javascript" svg={Javascript} />
          <Techname name="Bootstrap" svg={Bootstrap} />

          <Techname name="Next js" svg={Next} />
          <Techname name="React js" svg={ReactImage} />
          <Techname name="Chakra UI" svg={Chakra} />
          <Techname name="Typescript" svg={Typescript} />
          <Techname name="Node js" svg={Node} />
          <Techname name="Express" svg={Express} />
          <Techname name="Javascript" svg={Javascript} />
          <Techname name="Bootstrap" svg={Bootstrap} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Tech;

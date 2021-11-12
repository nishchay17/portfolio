import React, { ReactElement } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { keyframes } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
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
          <img src={svg} title={name} />
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
          <Techname name="Next js" svg="/svg/nextjs.svg" />
          <Techname name="React js" svg="/svg/react.svg" />
          <Techname name="Chakra UI" svg="/svg/chakraui.svg" />
          <Techname name="Typescript" svg="/svg/typescript.svg" />
          <Techname name="Node js" svg="/svg/nodejs.svg" />
          <Techname name="Express" svg="/svg/express.svg" />
          <Techname name="Javascript" svg="/svg/javascript.svg" />
          <Techname name="Bootstrap" svg="/svg/bootstrap.svg" />

          <Techname name="Next js" svg="/svg/nextjs.svg" />
          <Techname name="React js" svg="/svg/react.svg" />
          <Techname name="Chakra UI" svg="/svg/chakraui.svg" />
          <Techname name="Typescript" svg="/svg/typescript.svg" />
          <Techname name="Node js" svg="/svg/nodejs.svg" />
          <Techname name="Express" svg="/svg/express.svg" />
          <Techname name="Javascript" svg="/svg/javascript.svg" />
          <Techname name="Bootstrap" svg="/svg/bootstrap.svg" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Tech;

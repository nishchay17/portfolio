import React, { ReactElement } from "react";
import { Box, Flex, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FiMinus } from "react-icons/fi";

const exps = [
  {
    company: "Homelane",
    title: "Software Engineer Intern",
    date: "Jan 2022 - Present",
    points: [
      "Worked on developing dashboard using React js and SCSS",
      "Fixed existing bugs and added functionalities like dashboard popups and API integration",
    ],
  },
  {
    company: "The Internet Folks",
    title: "Software Engineer Intern",
    date: "Dec 2020 - June 2021",
    points: [
      "Used Next js (react js) with server-side rendering",
      "Used Redux (Redux toolkit) for state management",
      "Converted UI design to reusable, scalable react components",
      "Implemented Debouncing to reduce API calls",
    ],
  },
];

function Experience(): ReactElement {
  return (
    <Flex flexDirection="column" my="2rem" as="section">
      <Text as="h3" fontSize="4xl" py="2rem">
        Experience
      </Text>

      {exps.map(({ company, title, points, date }) => {
        return (
          <Box key={date} mb="2rem">
            <Box
              width={["100%", "100%", "40rem"]}
              pl="2rem"
              position="relative"
            >
              <Text fontSize="2xl">{company}</Text>
              <Text opacity="0.6">
                {title} <i>{date}</i>
              </Text>
              <Box
                position="absolute"
                top="9%"
                left={0}
                border="6px solid var(--primary-color)"
                borderRadius="50%"
                height="1.5rem"
                width="1.5rem"
              />
            </Box>
            <List spacing={1} ml="3rem" mt="1rem">
              {points.map((ptn) => {
                return (
                  <ListItem key={ptn}>
                    <ListIcon as={FiMinus} color="green.500" />
                    {ptn}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        );
      })}
    </Flex>
  );
}

export default Experience;

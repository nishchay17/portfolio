import React, { ReactElement, useState } from "react";
import { Box, Grid } from "@chakra-ui/layout";

const ROW = 9;
const COL = 6;
const COLORS = [
  "teal.200",
  "teal.500",
  "blue.600",
  "gray.700",
  "teal.200",
  "teal.500",
  "blue.600",
  "gray.700",
  "white",
]; // double color entry to increase probability to get an non white color

function HeroImg(): ReactElement {
  const [reload, setReload] = useState<Boolean>(false);

  function getRandomColor(): string {
    const index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index];
  }

  return (
    <Grid
      templateColumns={`repeat(${COL}, 1fr)`}
      gap={"7px"}
      onClick={() => setReload((r) => !r)}
      cursor="pointer"
    >
      {Array(ROW * COL)
        .fill(1)
        .map((_, i) => {
          const color = getRandomColor();
          return (
            <Box
              key={i}
              borderRadius={"4px"}
              height={"3.2rem"}
              width={"3.2rem"}
              bg={color}
              transition={`all ${0.3}s ease`}
              transitionDelay={`${0.01 * i}s`}
            />
          );
        })}
    </Grid>
  );
}

export default HeroImg;

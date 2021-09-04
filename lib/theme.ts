import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

const fonts = {
  ...chakraTheme.fonts,
  body: `Sora`,
  heading: `Sora`,
};

const components = {
  Heading: {
    baseStyle: {
      fontWeight: "400",
    },
  },
};

export const theme = extendTheme({ fonts, components });

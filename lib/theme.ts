import {
  theme as chakraTheme,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

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

export const theme = extendTheme({ fonts, components, config });

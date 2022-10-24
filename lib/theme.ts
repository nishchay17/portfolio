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
  body: `'Source Sans Pro', sans-serif`,
  heading: `"Cormorant Garamond", serif`,
};

const components = {
  Heading: {
    baseStyle: {
      fontWeight: "500",
      letterSpacing: "1px",
    },
  },
  Button: {
    baseStyle: {
      fontWeight: "400",
      boxShadow: "0px 0px 3px 0px rgba(182,150,250,0.5)",
      _hover: {
        boxShadow: "0px 0px 5px 0px rgba(182,150,250,0.5)",
      },
    },
  },
  Text: {
    baseStyle: {
      letterSpacing: "0.5px",
    },
  },
};

const styles = {
  global: {
    body: {
      color: "#1d1d1d",
    },
  },
};

export const theme = extendTheme({ fonts, components, config, styles });

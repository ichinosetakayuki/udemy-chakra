import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
  globalCss: {
    "html, body": {
      bg: "gray.100",
      color: "gray.800",
    },
  },
});

export const system = createSystem(defaultConfig, config);
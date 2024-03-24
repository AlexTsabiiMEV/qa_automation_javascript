import { defineConfig } from "cypress";

const setupNodeEvents = (on, config) => {
  // implement node event listeners here
};

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    retries: {
      openMode: 2,
      runMode: 2,
    },
  },
  homeWork12: {
    experimentalStudio: true,
    retries: {
      openMode: 2,
      runMode: 2,
    },
  },
  config: {
    setupNodeEvents,
  },
});

import { defineConfig } from "cypress";

const setupNodeEvents = (on, config) => {
  require("cypress-mochawesome-reporter/plugin")(on);
};

export default defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    experimentalStudio: true,
    retries: {
      openMode: 2,
      runMode: 2,
    },
    baseUrl: "https://qauto.forstudy.space/",
    auth: {
      baseAuthUsername: "guest",
      baseAuthpassword: "welcome2qauto",
    },
    userAuth: {
      userAuthEmail: "alexander.tsabii@mev.com",
      userAuthPassword: "Qwerty123@@@",
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

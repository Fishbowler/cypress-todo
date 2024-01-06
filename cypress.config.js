const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://eviltester.github.io/simpletodolist",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

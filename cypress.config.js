const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} = require('@simonsmith/cypress-image-snapshot/plugin')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://eviltester.github.io/simpletodolist",
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on)
    },
  },
  fixturesFolder: "cypress/fixtures",
});

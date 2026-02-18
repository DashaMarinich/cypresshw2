const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "retries": 2,
   defaultCommandTimeout: 50000,
  e2e: {
    "baseUrl": "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

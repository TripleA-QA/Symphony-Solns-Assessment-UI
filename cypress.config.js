const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 150000,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
},
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  
  },
  screenshotsFolder: 'cypress/screenshots',
},
});

// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
// const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);
//   on("file:preprocessor", createBundler({plugins: [createEsbuildPlugin(config)]}));
//   return config;
// }

// module.exports = defineConfig({
//   video: false,
//   defaultCommandTimeout: 5000,
//   pageLoadTimeout: 10000,
//   e2e: {
//     specPattern: "cypress/e2e/**/*.feature", //"**/*.feature",
//     supportFile: false,
//     setupNodeEvents,
//   },
// })

// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const {
//   addCucumberPreprocessorPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor");
// const {
//   createEsbuildPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// async function setupNodeEvents(on, config) {
//   // Tambahkan plugin Cucumber Preprocessor
//   await addCucumberPreprocessorPlugin(on, config);

//   // Gunakan bundler untuk memproses file
//   on(
//     "file:preprocessor",
//     createBundler({ plugins: [createEsbuildPlugin(config)] }),
//   );

//   return config;
// }

// module.exports = defineConfig({
//   video: false, // Nonaktifkan perekaman video
//   defaultCommandTimeout: 5000, // Timeout untuk perintah Cypress
//   pageLoadTimeout: 10000, // Timeout untuk memuat halaman
//   e2e: {
//     specPattern: "cypress/e2e/**/*.feature", // Cari file .feature di folder e2e
//     supportFile: "cypress/support/e2e.js", // File support untuk e2e testing // false
//     setupNodeEvents, // Gunakan fungsi setupNodeEvents yang didefinisikan di atas
//     stepDefinitions: "cypress/support/step_definitions/**/*.js",
//   },
// });


const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // Tambahkan plugin Cucumber Preprocessor
  await addCucumberPreprocessorPlugin(on, config);

  // Gunakan bundler untuk memproses file
  on(
    "file:preprocessor",
    createBundler({ plugins: [createEsbuildPlugin(config)] }),
  );

  return config;
}

module.exports = defineConfig({
  video: false, // Nonaktifkan perekaman video
  defaultCommandTimeout: 5000, // Timeout untuk perintah Cypress
  pageLoadTimeout: 10000, // Timeout untuk memuat halaman
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.feature", // Cari file .feature di folder e2e
    supportFile: "cypress/support/e2e.js", // File support untuk e2e testing
    setupNodeEvents, // Gunakan fungsi setupNodeEvents yang didefinisikan di atas
    stepDefinitions: "cypress/support/step_definitions/**/*.js",
  },
});
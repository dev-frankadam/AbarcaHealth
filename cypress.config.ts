const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents (on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
      on("file:preprocessor", bundler),
      on("task", {})
      await addCucumberPreprocessorPlugin(on, config)
      return config
    },
  },
});
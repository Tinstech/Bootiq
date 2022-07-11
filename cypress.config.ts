import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'izfxoe',
  video: false,

  viewportHeight: 800,
  viewportWidth: 1280,
  chromeWebSecurity: false,
  e2e: {
    env:
    {
      "NCDB_BASE_URL": "https://ncdb.test.gts.bootiq-devel.eu/",
      "ER_USER_CREDENTIAL": "gts",
      "NCDB_USER_PC_CREDENTIAL": "cypressTest1",
      "OO2_BASE_URL": "https://ncdb.test.gts.bootiq-devel.eu/",
      "DM_BASE_URL": "https://ncdb.test.gts.bootiq-devel.eu/"
    },
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/newtests/*.{js,jsx,ts,tsx}',
  },
})

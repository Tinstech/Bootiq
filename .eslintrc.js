const path = require('path')

module.exports = {
    plugins: ['eslint-plugin-cypress'],
    env: { 'cypress/globals': true }
}
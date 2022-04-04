const { waitForCoverage } = require('./lib')

require('../tools/hasStorybook')

waitForCoverage()

module.exports = require('./base.config.json')

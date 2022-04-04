const { waitForCoverage } = require('./lib')
const { dirName } = require('./testOne/__config__/componentUnderTest.json')
const path = require('path')

require('../tools/hasStorybook')

waitForCoverage()

const config = require('./base.config.json')

const rootDir = path.resolve(path.join(__dirname, config.rootDir))
const jestDir = path.join('<rootDir>', path.relative(rootDir, dirName))

config.testMatch = [
  path.join(jestDir, '/**/*.test.{ts,tsx}'),
  '<rootDir>/support/test/testOne/*.test.tsx',
]

config.collectCoverageFrom = [
  path.join(jestDir, '/**/*.{ts,tsx}'),
  `!${path.join(jestDir, '/**/*.stories.{ts,tsx}')}`,
  `!${path.join(jestDir, '/sandbox/**/*')}`,
]

module.exports = config

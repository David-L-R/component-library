const path = require('path')

// -- Path specification. Change on test workbench refactoring.

const ROOT_DIR = '../../' // Path to repo root, relative to this config file.

const TEST_WORKBENCH_DIR = 'support/test'
const AUTO_CONFIG_DIR = 'testOne/__config__' // Path to generated config files.
const COVERAGE_DIR = '__coverage__' // Path to generated coverage files.

const CUT_CONFIG_FILE = 'componentUnderTest.json' // Path to the generated Component under Test config.
const SB_CONFIG_FILE = 'storybook.json' // Path to the generated storybook config.

// --- Paths derived from specification. Should not be changed.

const cutConfig = path.join(AUTO_CONFIG_DIR, CUT_CONFIG_FILE)
const sbConfig = path.join(AUTO_CONFIG_DIR, SB_CONFIG_FILE)
const coverage = path.join(COVERAGE_DIR, 'lcov-report/index.html') // Path to the html coverage index file.

const absRoot = path.resolve(path.join(__dirname, ROOT_DIR))
const jestDir = path.relative(absRoot, path.resolve(__dirname))
const mockDir = path.join(TEST_WORKBENCH_DIR, '__mocks__')

module.exports = {
  cutConfig: path.join(path.resolve(__dirname), cutConfig),
  sbConfig: path.join(path.resolve(__dirname), sbConfig),
  coverage: path.join(path.resolve(__dirname), coverage),
  coverageDir: path.join(path.resolve(__dirname), COVERAGE_DIR),
  jestDir: jestDir,
  absRootDir: absRoot,
  relRootDir: ROOT_DIR,
  mockDir: mockDir,
  autoConfigDir: path.join(path.resolve(__dirname), AUTO_CONFIG_DIR),
}

let sbConfig = require('../main')

;(sbConfig.stories = [
  '../../src/sandbox/**/*.stories.tsx',
  '../../support/**/*.stories.mdx',
]),
  (module.exports = sbConfig)

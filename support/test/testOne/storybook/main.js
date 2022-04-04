const fs = require('fs')
const path = require('path')

const sbConfig = path.resolve('support/test/testOne/__config__/storybook.json')

if (!fs.existsSync(sbConfig)) {
  console.warn(`Auto-generated config file is not present: '${sbConfig}'.`)
}

module.exports = require(sbConfig)

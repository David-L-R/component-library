/* eslint-disable no-console */
const { exec } = require('child_process')
const { exit } = require('process')
const path = require('path')
const fs = require('fs')
const paths = require('./paths')

// --- Parse test parameters

const args = process.argv.slice(2)
// Last command should contain component root dir.
const providedComponentDir = args[args.length - 1]

if (!providedComponentDir) {
  console.error(`\nPlease provide the directory of the component under test.\n`)
  exit(1)
}

const componentDir = path.join(paths.absRootDir, providedComponentDir)

if (!fs.existsSync(componentDir)) {
  console.error(`\nComponent path does not exist: '${componentDir}'.\n`)
  exit(1)
}

// --- Write config files

if (!fs.existsSync(paths.autoConfigDir)) {
  fs.mkdirSync(paths.autoConfigDir)
}

fs.writeFileSync(
  paths.cutConfig,
  JSON.stringify({
    dirName: componentDir,
  })
)

fs.writeFileSync(
  paths.sbConfig,
  JSON.stringify({
    stories: [path.join(componentDir, '/**/*.stories.tsx')],
  })
)

// --- Run Jest

const testOnePath = path.join(paths.jestDir, 'testOne.config.js')

const cmd = `yarn run jest -u -c ${testOnePath}`

console.info(`\nRunning tests for components in ${componentDir}`)
exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.info(stderr, stdout)
  } else {
    console.info(stdout)
  }
})

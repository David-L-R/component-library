const fs = require('fs')
const paths = require('./paths')
const url = require('url')

/**
 * Opens the Istanbul coverage in the browser.
 */
const openCoverage = () => {
  const coverageLocation = url.pathToFileURL(paths.coverage)
  const start =
    process.platform == 'darwin'
      ? 'open'
      : process.platform == 'win32'
      ? 'start'
      : 'xdg-open'

  require('child_process').exec(start + ' ' + coverageLocation)
}

/**
 * Waits for the coverage file to change, then opens it.
 */
const waitForCoverage = () => {
  let watcher
  if (fs.existsSync(paths.coverage)) {
    watcher = fs.watch(paths.coverage, () => {
      openCoverage()
      watcher.close()
    })
  }
}

module.exports = {
  waitForCoverage: waitForCoverage,
}

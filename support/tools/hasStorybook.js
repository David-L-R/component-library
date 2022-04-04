/* eslint-disable no-console */
let http = require('http')

const STORYBOOK_PORT = 6006

/**
 * Checks if a http server is running on storybookPort.
 */
const hasStorybook = function () {
  const options = {
    method: 'HEAD',
    host: 'localhost',
    port: STORYBOOK_PORT,
  }
  let request = http.request(options)
  request.on('error', function () {
    console.error(
      'Could not start Jest as it requires Storybook to process snapshots.\n'
    )
    console.error(
      '> Please make sure that Storybook is running on http://localhost:' +
        STORYBOOK_PORT +
        '\n'
    )
    process.exit(1)
  })

  request.end()
}

hasStorybook('localhost')

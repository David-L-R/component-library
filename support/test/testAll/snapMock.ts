/**
 * Mocking support for Storyshots.
 */

import glob from 'glob'
import path from 'path'

import { mockDir } from '../paths'

const modulePaths = glob.sync(path.join(mockDir, '/**/*.js'))

modulePaths.forEach((e) => {
  const nodeModule = path.relative(mockDir, e).replace(/\.[^/.]+$/, '')
  // Using doMock instead of mock, because mock is unable to handle variables.
  // Discussion on this issue: https://github.com/facebook/jest/issues/2567
  jest.doMock(nodeModule, () => () => 'mock')
})

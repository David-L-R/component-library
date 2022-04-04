import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

import visualConfig, { makeMatchOptions } from '../testAll/visualConfig'

import { dirName } from './__config__/componentUnderTest.json'

visualConfig.configPath = 'support/test/testOne/storybook'
visualConfig.test = imageSnapshot({
  getMatchOptions: makeMatchOptions(dirName),
})

initStoryshots(visualConfig)

import initStoryshots from '@storybook/addon-storyshots'
import smokeConfig from '../testAll/smokeConfig'

smokeConfig.configPath = 'support/test/testOne/storybook'

initStoryshots(smokeConfig)

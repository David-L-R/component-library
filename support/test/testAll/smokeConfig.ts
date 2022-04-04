import { renderOnly } from '@storybook/addon-storyshots'
import { render } from '@testing-library/react'
import './snapMock'

// Exported for use in test toolbox (smoke tests for a single component).
const smokeConfig = {
  renderer: render,
  suite: 'Smoke test',
  test: renderOnly,
  configPath: '.storybook',
}

export default smokeConfig

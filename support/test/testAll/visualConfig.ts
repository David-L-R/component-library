// Test based on https://storybook.js.org/docs/react/workflows/snapshot-testing.

import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import path from 'path'
import { render } from '@testing-library/react'
import { StoryshotsOptions } from '@storybook/addon-storyshots/dist/ts3.9/api/StoryshotsOptions'
import { MatchImageSnapshotOptions } from 'jest-image-snapshot'
import './snapMock'

export const comparisonMethods: {
  [method: string]: MatchImageSnapshotOptions
} = {
  structuralSimilarity: {
    // SSIM docs: https://github.com/americanexpress/jest-image-snapshot#recommendations-when-using-ssim-comparison
    comparisonMethod: 'ssim',
    failureThresholdType: 'percent',
    failureThreshold: 0.01,
  },
  pixelMatch: {
    // Default option
    comparisonMethod: 'pixelmatch',
    failureThresholdType: 'percent',
    failureThreshold: 0.2, // 0.2% of pixels. Allows for some rendering noise in github actions pipe.
  },
}

// Options is not exported, using any here.
export const makeMatchOptions = (
  dirName = 'src'
): ((options: any) => MatchImageSnapshotOptions) => ({
  context: { fileName },
}: any): MatchImageSnapshotOptions => {
  // Construct custom snapshots dir.
  const snapshotPath = path.join(
    dirName,
    path.dirname(fileName),
    '__snapshots__'
  )

  return {
    customSnapshotsDir: snapshotPath,
    ...comparisonMethods.structuralSimilarity,
  }
}

const visualConfig: StoryshotsOptions = {
  renderer: render,
  suite: `Visual tests`,
  test: imageSnapshot({ getMatchOptions: makeMatchOptions() }),
  configPath: '.storybook/test',
}

export default visualConfig

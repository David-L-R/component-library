# Test workbench setup

The test workbench follows this setup: running all tests is the base configuration. Methods for running single tests is extended from this configuration.

## Changing Jest configuration

- The base configuration file (which is used when running all tests) can be adjusted in `./base.config.json`. It is a basic Jest configuration file, docs can be found (here)[https://jestjs.io/docs/configuration]. This configuration file is loaded by `./test.config.js` and `./testCI.config.js`.
- If you want to adjust Jest configuration for running tests on a single component, you can extend the base configuration in `./testOne.config.js`.

## Refactoring the test workbench

If you want to refactor the test workbench, update the following files accordingly: `./base.config.json` and `./paths.js`.

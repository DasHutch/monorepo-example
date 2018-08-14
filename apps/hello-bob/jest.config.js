const common = require('../../jest.config.base');
const paths = require('./config/paths');

module.exports = {
    ...common,
    globals: {
        'ts-jest': {
            tsConfigFile: paths.appTsTestConfig,
        }
    },
    setupTestFrameworkScriptFile: paths.testsSetup,
    setupFiles: [
        './config/polyfills.js'
    ],
    collectCoverageFrom: [
        '<rootDir>/**/*.ts?(x)',
    ],
    coveragePathIgnorePatterns: [
        ...common.coveragePathIgnorePatterns,
        "index.tsx?",
        "<rootDir>\/src\/.*\/.*\.test.e2e.(tsx?)",
        "<rootDir>/src/assets/",
        "<rootDir>/src/images.d.ts"
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/config/',
        '<rootDir>/coverage/',
        '<rootDir>/scripts/',
        '<rootDir>/build/'
    ]
};

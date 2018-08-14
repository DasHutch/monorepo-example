const common = require('../../jest.config.base');

module.exports = {
    ...common,
    globals: {
        'ts-jest': {
            tsConfigFile: './config/tsconfig/tsconfig.test.json',
            enableTsDiagnostics: true
        }
    },
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    },
    setupTestFrameworkScriptFile: "../../scripts/jest.init.js",
    testMatch: [
        "<rootDir>/**/?(*.)(spec|test).(j|t)s?(x)",
    ],
    collectCoverageFrom: [
        '<rootDir>/**/*.ts?(x)',
    ],
    coveragePathIgnorePatterns: [
        ...common.coveragePathIgnorePatterns,
        "index.ts",
        "<rootDir>\/src\/.*\/.*\.test.e2e.(tsx?)",
        "<rootDir>/src/assets/",
        "<rootDir>/src/images.d.ts"
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/coverage/',
        '<rootDir>/scripts/',
        '<rootDir>/build/'
    ]
};

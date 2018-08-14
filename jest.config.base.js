module.exports = {
    resetMocks: true,
    resetModules: true,
    setupTestFrameworkScriptFile: '<rootDir>/scripts/jest.init.js',
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover",
        'html'
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/coverage/',
        '<rootDir>/scripts/',
        '<rootDir>/storybook-static/'
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|jpg|png|gif|svg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest"
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$',
    ],
    testMatch: [
        "<rootDir>/**/?(*.)(spec|test).(j|t)s?(x)",
    ],
    testURL: "http://localhost/"
}

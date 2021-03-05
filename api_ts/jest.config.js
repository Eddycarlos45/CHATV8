/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
 clearMocks: true,
    maxWorkers: 1,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
      '**/__tests__/**/*test.[jt]s?(x)',
      '!**/__tests__/coverage/**',
      '!**/__tests__/utils/**',
      '!**/__tests__/images/**',
    ],
};

module.exports = {
  bail: 1,
  coverageDirectory: '<rootDir>/.coverage',
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  verbose: true,
};

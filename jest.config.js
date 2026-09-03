const { pathsToModuleNameMapper } = require('ts-jest');
const ts = require('typescript');

const { config: tsconfig } = ts.readConfigFile(
  './tsconfig.json',
  ts.sys.readFile,
);
const paths = tsconfig?.compilerOptions?.paths ?? {};

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
  collectCoverageFrom: [
    'src/**/*.(t|j)s',
    'libs/**/*.(t|j)s',
    'apps/**/*.(t|j)s',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/post-backend/'],
};

module.exports = {
    name: 'remix-tests',
    verbose: true,
    silent: true, // Silent console messages, specially the 'remix-simulator' ones
    transform: {
      '^.+\\.[tj]sx?$': 'ts-jest',
    },
    rootDir: "./",
    testTimeout: 30000,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html', 'json'],
  };
  
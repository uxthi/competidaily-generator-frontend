const config = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};

module.exports = config;

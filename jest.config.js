/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  // testEnvironment: "node",
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "utils", "__dirname"],
  // transformIgnorePatterns: [
  //   // Change MODULE_NAME_HERE to your module that isn't being compiled
  //   "/node_modules/(?!MODULE_NAME_HERE).+\\.js$",
  // ],
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
};

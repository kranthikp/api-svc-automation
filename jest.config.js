module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  // testResultsProcessor: "jest-allure2-reporter",
  collectCoverage: true,
  collectReporters: ["html"],
  reporters: [
    "default",
    // "jest-junit",
    "jest-spec-reporter",
    ["jest-html-reporter", { resultsDir: "./reports" }],
    // ["jest-allure2-reporter", { resultsDir: "my-results-dir" }],
    // "jest-ci-spec-reporter",
  ],
};

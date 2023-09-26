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
    [
      "jest-stare",
      {
        "resultDir": "results/jest-stare",
        "reportTitle": "jest-stare!",
        "additionalResultsProcessors": [
          "jest-junit"
        ],
        "coverageLink": "../../coverage/lcov-report/index.html",
        "jestStareConfigJson": "jest-stare.json",
        "jestGlobalConfigJson": "globalStuff.json"
      }
    ]    
  ],
};

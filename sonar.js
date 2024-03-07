const sonarqubeScanner = require("sonarqube-scanner");
require("dotenv").config({ path: ".env.local" }); //This is for .env.local

const server = sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    options: {
      "sonar.projectKey": process.env.SONAR_PROJECT_KEY,
      "sonar.projectName": process.env.SONAR_PROJECT_NAME,
      "sonar.token": process.env.SONAR_TOKEN,
      "sonar.scm.enabled": "false",
      "sonar.sources": ".",
      "sonar.tests": ".",
      "sonar.inclusions": "**", // Entry point of your code
      "sonar.test.inclusions": "**/*.test.*",
      "sonar.test.exclusions": "**/node_modules/**",
      "sonar.javascript.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "coverage/sonar-report.xml",
      "sonar.eslint.reportPaths": "coverage/report.json",
    },
  },

  function () {}
);
module.exports = server;

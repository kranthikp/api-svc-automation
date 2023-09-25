# API TEST AUTOMATION FRAMEWORK Using Javascript, Jest and Axios
#### Author : kkpanda

## Framework Overview
- Framework: Jest, Node.js, JavaScript

#### Why This Framework:
- Jest: Highly popular testing framework with built-in test runners and assertions.
- Node.js: Enables server-side scripting for API testing.
- JavaScript: Widely used language for web development, making it ideal for API automation.

## Framework Capabilities
#### Jest:
- Built-in Test Runner
- Assertions Library
- Snapshot Testing
- Parallel Test Execution

#### Node.js:
- Server-side JavaScript
- Lightweight and Fast
- Vast Ecosystem

#### JavaScript:
- Web-Focused Language
- Popularity and Community Support
- Cross-Platform Compatibility

## API Test Overview
#### API Test Types
- Functional Testing
  - Validate API functionality
  - endpoints
  - request/response data
  - error handling
  - schema validation

- Performance Testing
  - Measure API response times, throughput, and scalability.
  - Load Testing
  - Determine how an API behaves under heavy concurrent requests.

- Security Testing
  - Detect vulnerabilities like SQL injection or unauthorized access.

#### API Functional Test Checklists
- Request Validation
  - Ensure correct HTTP methods, headers, and parameters.
- Response Validation
  - Verify status codes, headers, and response data accuracy.
- Data Consistency
  - Check data integrity during data transfer.
- Error Handling
  - Confirm appropriate error responses and messages.
- Performance Metrics
  - Monitor response times and resource usage.

## Setup:
- to setup env : install and verify node & npm
- To setup project `npm install --save-dev jest axios jest-html-reporters winston`

## Framework Structure
- api-tests/
 - config/
   - testConfig.js
 - helpers/
   - apiHelpers.js
 - logs/
   - api.log
 - tests/
   - sampleTest.spec.js
 - jest.config.js
 - report.html

## Summary:
- In summary, our framework, composed of Jest, Node.js, and JavaScript, equips us with a robust and efficient set of tools for API automation. 
- These capabilities translate into faster, more reliable testing, which ultimately leads to higher-quality APIs and accelerated development cycles.
- Jenkins Integration with junit trend report and CI/CD pipeline deployment 
- Compatible for integration with web and other automation like testcafe, playwright, cypress, k6
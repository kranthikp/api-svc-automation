const { makeRequest } = require('../../helpers/apiHelpers');
const testData = require('../../testdata/testData.json');

test.each(testData)(
    'data-driven should return status code ',
    async (description, endpoint, expectedStatusCode) => {
        let response;
        try {
            response = await makeRequest(`${endpoint}`);
        } catch (error) {
            response = error.response;
        }
        expect(response.status).toBe(expectedStatusCode);
    }
);

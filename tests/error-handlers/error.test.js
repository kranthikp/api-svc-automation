const axios = require('axios');

async function getUsers() {
    try {
        const response = await axios.get('https://reqres.in/api/users');

        // Check if the response status code is in the 2xx range (successful response).
        if (response.status >= 200 && response.status < 300) {
            console.log('Request was successful.');
            console.log('Response data:', response.data);
        } else {
            console.error('Request failed with status code:', response.status);
            console.error('Response data:', response.data);
        }
    } catch (error) {
        // Handle request errors
        if (error.response) {
            // The request was made and the server responded with a non-2xx status code
            console.error('Request failed with status code:', error.response.status);
            console.error('Response data:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received from the server.');
        } else {
            // Something else went wrong
            console.error('Error:', error.message);
        }
    }
}
describe('Sample API Tests', () => {
    test('Fetch user details', async () => {
        // Call the function to make the request
        getUsers()
    });
});

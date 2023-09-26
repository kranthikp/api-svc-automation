const axios = require('axios');

describe('Sample Error Handler Tests -> to Pass', () => {
    test('Fetch user details', async () => {
        try {
            const response = await axios.get('https://reqres.in/api/1');//https://reqres.in/api/usersdata
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
                console.error('Request failed with status code:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                console.error('No response received from the server.');
            } else {
                console.error('Error:', error.message);
            }
        }
    });
});

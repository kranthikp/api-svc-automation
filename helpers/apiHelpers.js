const axios = require('axios');
const { apiUrl } = require('../configs/testConfig');
const winston = require('winston');

const logger = winston.createLogger({
 level: 'info',
 format: winston.format.json(),
 transports: [
   new winston.transports.File({ filename: 'logs/api.log' }),
 ],
});

async function makeRequest(endpoint, method = 'get', data = null, headers = {}) {
 try {
   const response = await axios({
     method,
     url: `${apiUrl}/${endpoint}`,
     data,
     headers,
   });

   logger.info(`API Request: ${method.toUpperCase()} ${endpoint}`);
   logger.info(`API Response: ${JSON.stringify(response.data)}`);

   return response;
 } catch (error) {
   logger.error(`API Request Error: ${error.message}`);
   throw error;
 }
}

module.exports = {
 makeRequest,
};
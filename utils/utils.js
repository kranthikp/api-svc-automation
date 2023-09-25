const axios = require('axios');

async function getRequest(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

async function postRequest(url, data) {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
}
module.exports = { getRequest, postRequest };
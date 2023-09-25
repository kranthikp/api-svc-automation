const axios = require("axios");
const { postRequest, getRequest } = require("../../utils/utils");
const { apiUrl } = require('../configs/testConfig');

describe("API Tests", () => {
  test("GET Request", async () => {
    const response = await getRequest(`${apiUrl}/api/users/2`);
    expect(response.status).toBe(200);
    // expect(response.data).to.be.an("object");
  });

  test("POST request works", async () => {
    const response = await postRequest(`${apiUrl}/api/users`, {
      name: "morpheus",
      job: "leader",
    });
    // console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data.name).toEqual("morpheus");
    expect(response.data.job).toEqual("leader");
  });
});

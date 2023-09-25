const axios = require("axios");
const { postRequest } = require("../../utils/utils");

describe("API Tests", () => {
  test("GET Request", async () => {
    const response = await axios.get("https://reqres.in/api/users/2");
    expect(response.status).toBe(200);
    // expect(response.data).to.be.an("object");
  });

  test("POST request works", async () => {
    const response = await postRequest("https://reqres.in/api/users", {
      name: "morpheus",
      job: "leader",
    });
    console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data.name).toEqual("morpheus");
    expect(response.data.job).toEqual("leader");
  });
});

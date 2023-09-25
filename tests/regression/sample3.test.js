const { makeRequest } = require('../../helpers/apiHelpers');

describe('Sample API Tests', () => {
  test('Fetch user details', async () => {
    const response = await makeRequest('api/users/2');
    //console.log(response)
    expect(response.status).toBe(200);
    expect(response.data.data).toHaveProperty('id');
    expect(response.data.data).toHaveProperty('email');
  });

  test('Create new user', async () => {
    const data = {
      name: "morpheus",
      job: "leader",
    };
    const response = await makeRequest('api/users', 'post', data);
    expect(response.status).toBe(201);
    //console.log(response)
    expect(response.data.name).toEqual("morpheus");
    expect(response.data.job).toEqual("leader");
    expect(response.data).toHaveProperty('createdAt');
    expect(response.data).toHaveProperty('id');
  });

  test.skip('Send XML request', async () => {
    const xmlData = `
  <user>
    <name>XML User</name>
    <email>xml@example.com</email>
  </user>
`;
    const headers = { 'Content-Type': 'application/xml' };
    const response = await makeRequest('users', 'post', xmlData, headers);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
  });
});

describe('Sample API Tests 2', () => {
  test('Fetch user details', async () => {
    const response = await makeRequest('api/users/2');
    //console.log(response)
    expect(response.status).toBe(200);
    expect(response.data.data).toHaveProperty('id');
    expect(response.data.data).toHaveProperty('email');
  });

  test('Create new user', async () => {
    const data = {
      name: "morpheus",
      job: "leader",
    };
    const response = await makeRequest('api/users', 'post', data);
    expect(response.status).toBe(201);
    //console.log(response)
    expect(response.data.name).toEqual("morpheus");
    expect(response.data.job).toEqual("leader");
    expect(response.data).toHaveProperty('createdAt');
    expect(response.data).toHaveProperty('id');
  });

  test.skip('Send XML request', async () => {
    const xmlData = `
  <user>
    <name>XML User</name>
    <email>xml@example.com</email>
  </user>
`;
    const headers = { 'Content-Type': 'application/xml' };
    const response = await makeRequest('users', 'post', xmlData, headers);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
  });
});


describe('Sample API Tests 3', () => {
  test('Fetch user details', async () => {
    const response = await makeRequest('api/users/2');
    //console.log(response)
    expect(response.status).toBe(200);
    expect(response.data.data).toHaveProperty('id');
    expect(response.data.data).toHaveProperty('email');
  });

  test('Create new user', async () => {
    const data = {
      name: "morpheus",
      job: "leader",
    };
    const response = await makeRequest('api/users', 'post', data);
    expect(response.status).toBe(201);
    //console.log(response)
    expect(response.data.name).toEqual("morpheus");
    expect(response.data.job).toEqual("leader");
    expect(response.data).toHaveProperty('createdAt');
    expect(response.data).toHaveProperty('id');
  });

  test.skip('Send XML request', async () => {
    const xmlData = `
  <user>
    <name>XML User</name>
    <email>xml@example.com</email>
  </user>
`;
    const headers = { 'Content-Type': 'application/xml' };
    const response = await makeRequest('users', 'post', xmlData, headers);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
  });
});
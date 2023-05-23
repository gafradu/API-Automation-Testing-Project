const { spec } = require("pactum");

const baseURL = "https://reqres.in";
const desiredUser = "2";
const desiredPage = 1;
let totalUsers = "";

describe("Get Single User Endpoint Scenarios", () => {
  before(async () => {
    const resp = await spec()
      .get(`${baseURL}/api/users?page=${desiredPage}`)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
      totalUsers = resp.total;
      console.log(totalUsers);
  });

  it("Positive Flow", async () => {
    await spec()
      .get(`${baseURL}/api/users/${totalUsers}`)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
  });

  it("Negative Flow - User Does Does Not Exist", async () => {
    await spec()
      .get(`${baseURL}/api/users/${totalUsers+1}`)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(404);
  });
});

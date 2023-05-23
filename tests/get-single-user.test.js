const { spec } = require("pactum");

const baseURL = "https://reqres.in";
const userId = "2";

describe("Get Single User Endpoint Scenarios", () => {
  it("Get a Single User Positive Test", async () => {
    await spec()
      .get(`${baseURL}/api/users/${userId}`)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
  });

  it("Try to get a Single User which does not exist", async () => {
    await spec()
      .get(`${baseURL}/api/users/50`)
      .expectStatus(404);
  });
});

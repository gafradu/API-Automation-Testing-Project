const { spec } = require("pactum");

const baseURL = "https://reqres.in";
const desiredUser = "2";

describe("Get Single User Endpoint Scenarios", () => {
  it("Positive Flow", async () => {
    await spec()
      .get(`${baseURL}/api/users/${desiredUser}`)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
  });

  it("Negative Flow - User Does Does Not Exist", async () => {
    await spec()
      .get(`${baseURL}/api/users/50`)
      .expectStatus(404);
  });
});

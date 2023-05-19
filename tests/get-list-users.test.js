const { spec } = require("pactum");

const baseURL = "https://reqres.in";
const desiredPage = "2";

describe("Get List Users Endpoint Scenarios", () => {
  it("Positive Flow", async () => {
    await spec()
      .get(`${baseURL}/api/users?page=${desiredPage}`)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
  });
});
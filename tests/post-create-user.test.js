const { spec } = require("pactum");

const baseURL = "https://reqres.in";

describe("Create User Endpoint Scenarios", () => {
  it("Positive Flow", async () => {
    const requestBody = {
      name: "Raymond Guran",
      job: "Tester",
    };

    await spec()
      .post(`${baseURL}/api/users`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectBodyContains("Raymond Guran")
      .expectStatus(201);
  });
});

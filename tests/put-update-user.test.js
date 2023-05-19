const { spec } = require("pactum");

const baseURL = "https://reqres.in";
const desiredUser = "2";

describe("Update User Endpoint Scenarios", () => {
  it("Positive Flow", async () => {
    const requestBody = {
      name: "Raducu",
      job: "Jobless",
    };

    await spec()
      .put(`${baseURL}/api/users/${desiredUser}`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectBodyContains("Raducu")
      .expectStatus(200);
  });
});
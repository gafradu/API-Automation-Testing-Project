const { spec } = require("pactum");

const baseURL = "https://reqres.in";
const desiredUser = 2;

describe("Delete User Endpoint Scenarios", () => {
  it("Positive Flow", async () => {
    await spec()
      .delete(`${baseURL}/api/users/${desiredUser}`)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(204);
  });
});

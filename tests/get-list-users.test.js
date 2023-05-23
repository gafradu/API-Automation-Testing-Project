const { spec } = require("pactum");

const baseURL = "https://reqres.in";
const pageId = "2";

describe("Get List Users Endpoint Scenarios", () => {
  it("Get All Users from a Page Positive Test", async () => {
    await spec()
      .get(`${baseURL}/api/users?page=${pageId}`)
      .expectStatus(200);
  });
});
const { spec } = require("pactum");

const baseURL = "https://reqres.in";

const requestBodyEmail = {
  email: "eve.holt@reqres.in",
};

const requestBodyPassword = {
  password: "cityslicka",
};

describe("Login Endpoint Scenarios", () => {
  it("Negative Flow - Missing Email", async () => {
    await spec()
      .post(`${baseURL}/api/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBodyPassword)
      .expectStatus(400)
      .expectBodyContains("Missing email or username");
  });

  it("Negative Flow - Missing Password", async () => {
    await spec()
      .post(`${baseURL}/api/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBodyEmail)
      .expectStatus(400)
      .expectBodyContains("Missing password");
  });

  it("Negative Flow - User Does Not Exist", async () => {
    await spec()
      .post(`${baseURL}/api/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody({
        email: "aefwergwgg@gmail.com",
        password: "tneteqefqf",
      })
      .expectStatus(400)
      .expectBodyContains("user not found");
  });

  it("Positive Flow", async () => {
    await spec()
      .post(`${baseURL}/api/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody(Object.assign(requestBodyEmail, requestBodyPassword))
      .expectBodyContains("token")
      .expectStatus(200);
  });
});

const { spec } = require("pactum");

const baseURL = "https://reqres.in";

const requestBodyEmail = {
  email: "eve.holt@reqres.in",
};

const requestBodyPassword = {
  password: "cityslicka",
};

describe("Login Endpoint Scenarios", () => {
  it("Try to login w/o entering the Email", async () => {
    await spec()
      .post(`${baseURL}/api/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBodyPassword)
      .expectStatus(400)
      .expectBodyContains("Missing email or username");
  });

  it("Try to login w/o entering the Password", async () => {
    await spec()
      .post(`${baseURL}/api/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBodyEmail)
      .expectStatus(400)
      .expectBodyContains("Missing password");
  });

  it("Try to login w/ a user which does not exist ", async () => {
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

  it("Login with a correct user positive test", async () => {
    await spec()
      .post(`${baseURL}/api/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody(Object.assign(requestBodyEmail, requestBodyPassword))
      .expectBodyContains("token")
      .expectStatus(200);
  });
});

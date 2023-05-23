const { spec } = require("pactum");

const { faker } = require('@faker-js/faker');

const randomName = faker.person.fullName();
const randomJob = faker.person.jobTitle();

const baseURL = "https://reqres.in";

console.log(randomName);
console.log(randomJob);

describe("Create User Endpoint Scenarios", () => {
  it("Positive Flow", async () => {
    const requestBody = {
      name: randomName,
      job: randomJob,
    };

    await spec()
      .post(`${baseURL}/api/users`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectBodyContains(randomName)
      .expectStatus(201);
  });

});

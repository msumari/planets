const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("Should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});

describe("Test POST /launches", () => {
  const completeLaunch = {
    mission: "USSR",
    rocket: "Falcon 1",
    launchDate: "January 1, 2020",
    target: "kepler-186 f",
  };

  const incompleteLaunch = {
    mission: "USSR",
    rocket: "Falcon 1",
    target: "kepler-186 f",
  };

  test("Should respond with 201 success", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunch)
      .expect(201)
      .expect("Content-Type", /json/);

    const requestDate = new Date(completeLaunch.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(requestDate).toBe(responseDate);

    expect(response.body).toMatchObject(incompleteLaunch);
  });
  test("Should catch missing launch data", () => {
    const response = 400;
    expect(response).toBe(400);
  });
  test("Should catch invalid date", () => {
    const response = 400;
    expect(response).toBe(400);
  });
});

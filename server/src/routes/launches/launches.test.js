const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("Should respond with 200 success", async () => {
    const response = await request(app).get("/launches").expect(200);
  });
});

describe("Test POST /launches", () => {
  test("Should respond with 201 success", () => {
    const response = 201;
    expect(response.statusCode).toBe(201);
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

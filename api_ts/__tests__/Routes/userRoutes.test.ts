import { server } from "../../app";
import Db from "../../infra/db";

const db = new Db();
const request = require("supertest");

beforeAll(() => {
  db.createConnection();
});

describe("User Routes", () => {
  test("should create a user", async () => {
    const response = await request(server).post("/signup").send({
      name: "test",
      email: "test2@email.com",
      password: "test123",
    });

    expect(response.status).toBe(201);
  });

  test("should success response to /login", async () => {
    const response = await request(server).post("/login").send({
      email: "test2@email.com",
      password: "test123",
    });
    expect(response.status).toBe(200);
  });

  test("should not success response to /login", async () => {
    const response = await request(server).post("/login").send({
      email: "fake@email.com",
      password: "test123",
    });
    expect(response.status).toBe(404);
  });

  test("should not create a user with wrong fields", async () => {
    const response = await request(server).post("/signup").send({
      name: "",
      email: "",
      password: "",
    });
    expect(response.body.errors[0].constraints.isNotBlank).toEqual(
      "Digite um nome por favor"
    );
    expect(response.body.errors[1].constraints.isNotBlank).toEqual(
      "Digite um email"
    );
    expect(response.body.errors[1].constraints.isEmail).toEqual(
      "E-mail inválido"
    );
    expect(response.body.errors[2].constraints.isNotBlank).toEqual(
      "Digite uma senha"
    );
    expect(response.body.errors[2].constraints.minLength).toEqual(
      "A senha deve ter no mínimo 6 caracteres."
    );
  });
});

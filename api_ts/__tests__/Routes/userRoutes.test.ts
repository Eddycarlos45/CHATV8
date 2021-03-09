import { server } from "../../app";
const request = require("supertest");

describe("User Routes", () => {
  test("should create a user", async () => {
    const response = await request(server).post("/signup").send({
      name: "test",
      email: "test2@email.com",
      password: "test123",
    });

    expect(response.status).toBe(201);
  });
  test("should not create a user with empty fields", async () => {
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
    expect(response.body.errors[2].constraints.isNotBlank).toEqual(
      "Digite uma senha"
    );
  });

  test("should not create a user with unformated email", async () => {
    const response = await request(server).post("/signup").send({
      name: "test",
      email: "test@",
      password: "123456",
    });
    expect(response.body.errors[0].constraints.isEmail).toEqual(
      "E-mail inválido"
    );
  });

  test("should not create a user with minLenght password", async () => {
    const response = await request(server).post("/signup").send({
      name: "test",
      email: "test@email.com",
      password: "12345",
    });
    expect(response.body.errors[0].constraints.minLength).toEqual(
      "A senha deve ter no mínimo 6 caracteres."
    );
  });
});

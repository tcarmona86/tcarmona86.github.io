const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  
  it("GET - Devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto.", async () => {
    const response = await request(server).get("/cafes");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("nombre");
  });

  it("Se obtiene un código 404 al intentar eliminar un café con un id que no existe. ", async () => {
    const response = await request(server)
      .delete("/cafes/999")
      .set("Authorization", "tokenDePrueba");
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  it("POST - Agrega un nuevo café y devuelve un código 201", async () => {
    const nuevoCafe = { id: 10, nombre: "Latte" };
    const response = await request(server).post("/cafes").send(nuevoCafe);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(
      expect.arrayContaining([expect.objectContaining(nuevoCafe)])
    );
  });


  it("PUT - Devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload.", async () => {
    const cafeEditado = { id: 20, nombre: "Flat White" };
    const response = await request(server).put("/cafes/99").send(cafeEditado);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });
});

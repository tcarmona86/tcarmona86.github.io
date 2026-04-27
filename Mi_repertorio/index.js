const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// iniciar servidor
app.listen(3000, () => console.log("Servidor encendido en puerto 3000"));

// GET /muestra el repertorio de canciones
app.get("/canciones", (req, res) => {
  const repertorio = JSON.parse(fs.readFileSync("repertorio.json"));
  res.json(repertorio);
});

// POST /agrega cancion
app.post("/canciones", (req, res) => {
  const nuevaCancion = req.body;
  const repertorio = JSON.parse(fs.readFileSync("repertorio.json"));
  repertorio.push(nuevaCancion);
  fs.writeFileSync("repertorio.json", JSON.stringify(repertorio));
  res.send("Canción agregada con éxito!");
});

// PUT /modifica cancion
app.put("/canciones/:id", (req, res) => {
  const { id } = req.params;
  const cancionEditada = req.body;
  let repertorio = JSON.parse(fs.readFileSync("repertorio.json"));
  const index = repertorio.findIndex(c => c.id == id);
  repertorio[index] = cancionEditada;
  fs.writeFileSync("repertorio.json", JSON.stringify(repertorio));
  res.send("Canción modificada con éxito!");
});

// DELETE /elimina cancion por id 
app.delete("/canciones/:id", (req, res) => {
  const { id } = req.params;
  let repertorio = JSON.parse(fs.readFileSync("repertorio.json"));
  repertorio = repertorio.filter(c => c.id != id);
  fs.writeFileSync("repertorio.json", JSON.stringify(repertorio));
  res.send("Canción eliminada con éxito!");
});

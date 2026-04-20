
const fs = require("fs");

const leer = () => {
  const data = fs.readFileSync("citas.json", "utf8");
  const citas = JSON.parse(data);
  console.log(citas);
};

// Nueva Cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
  const data = fs.readFileSync("citas.json", "utf8");
  const citas = JSON.parse(data);

  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  citas.push(nuevaCita);

  fs.writeFileSync("citas.json", JSON.stringify(citas));
  console.log("Cita registrada:", nuevaCita);
};


module.exports = { leer, registrar };

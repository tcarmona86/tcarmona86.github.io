import fs from "fs";

export const logger = (req, res, next) => {
  const log = `[${new Date().toISOString()}] Método: ${req.method} - Ruta: ${req.originalUrl}\n`;

  // Guardar en archivo logs.txt
  fs.appendFileSync("logs.txt", log);

  // Mostrar también en consola
  console.log(log);

  next();
};

import express from "express";
import cors from "cors";
import usuariosRoutes from "./src/routes/usuarios.routes.js";
import { requestLogger } from "./src/log/logger.js"; // usa el nombre correcto
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(requestLogger);

app.use(cors());
app.use(express.json());
app.use(usuariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

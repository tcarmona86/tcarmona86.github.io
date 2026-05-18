import express from "express";
import joyasRoutes from "./routes/joyas.routes.js";
import joyasFiltrosRoutes from "./routes/joyasFiltros.routes.js";
import { logger } from "./middlewares/logger.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(logger);
app.use(joyasRoutes);
app.use(joyasFiltrosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

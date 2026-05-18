import express from "express";
import { obtenerJoyasPorFiltros } from "../models/joyasFiltros.model.js";

const router = express.Router();

router.get("/joyas/filtros", async (req, res) => {
  try {
    const joyas = await obtenerJoyasPorFiltros(req.query);
    res.json(joyas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

export default router;

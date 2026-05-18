import express from "express";
import { obtenerJoyas } from "../models/joyas.model.js";

const router = express.Router();

router.get("/joyas", async (req, res) => {
  try {
    const joyas = await obtenerJoyas(req.query);
    res.json(joyas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

export default router;

import { Router } from "express";
import { verificarToken } from "../middlewares/auth.middleware.js";
import { register, login, logout} from "../controllers/auth.controller.js";
import { buscarUsuarioPorEmail } from "../models/usuarios.model.js";

const router = Router();

router.post("/usuarios", register);   
router.post("/login", login);         
router.post("/logout", logout)


router.get("/usuarios", verificarToken, async (req, res) => {
  try {
    const user = await buscarUsuarioPorEmail(req.user.email);
    res.json([user]); 
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario" });
  }
});

export default router;

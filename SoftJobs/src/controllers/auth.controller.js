import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { registrarUsuario, buscarUsuarioPorEmail } from "../models/usuarios.model.js";
import { eventLogger, errorLogger } from "../log/logger.js";

// Log para creación de usuario
export const register = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;

    // 🔹 Verificar si el email ya existe
    const existingUser = await buscarUsuarioPorEmail(email);
    if (existingUser) {
      errorLogger(new Error(`Intento de registro duplicado: ${email}`), req);
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await registrarUsuario({ email, password: hashedPassword, rol, lenguage });

    eventLogger(`Usuario creado: ${email}`);
    res.status(201).json({ message: "Usuario registrado", user });
  } catch (error) {
    errorLogger(error, req);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

// Log para inicio de sesión
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await buscarUsuarioPorEmail(email);
    if (!user) {
      errorLogger(new Error("Usuario no encontrado"), req);
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      errorLogger(new Error("Credenciales inválidas"), req);
      return res.status(400).json({ message: "Credenciales inválidas" });
    }
    const token = jwt.sign(
        { email: user.email, rol: user.rol },
        process.env.JWT_SECRET,{ expiresIn: "1h" }
    );

    eventLogger(`Usuario inició sesión: ${user.email}`);

    res.json({
      message: "Login exitoso",
      token,
      user: {
        email: user.email,
        rol: user.rol,
        lenguage: user.lenguage
      }
    });
  } catch (error) {
    errorLogger(error, req);
    res.status(500).json({ error: "Error en login" });
  }
};

// Log para cierre de sesión
export const logout = (req, res) => {
  const email = req.user?.email || "desconocido"
  eventLogger(`Usuario cerró sesión: ${email}`)
  res.json({ message: "Logout exitoso" })
}
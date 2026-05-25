import jwt from "jsonwebtoken"
import { errorLogger, eventLogger } from "../log/logger.js"


export const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    eventLogger("Acceso sin token")
    return res.status(401).json({ message: "Token requerido" })
  }

  const parts = authHeader.split(" ")
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    errorLogger(new Error("Formato de token inválido"), req)
    return res.status(401).json({ message: "Formato de token inválido" })
  }

  const token = parts[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    eventLogger(`Token válido para usuario ${decoded.email} en ${req.originalUrl}`)
    next()
  } catch (error) {
    errorLogger(error, req)
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expirado" })
    }
    return res.status(401).json({ message: "Token inválido" })
  }
}

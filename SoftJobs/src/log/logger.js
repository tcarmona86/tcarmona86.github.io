import fs from "fs"
import path from "path"

// Carpeta de logs
const logDir = path.join(process.cwd(), "logs")
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

// escribir en archivo log
const writeLog = (filename, message) => {
  const logPath = path.join(logDir, filename)
  fs.appendFileSync(logPath, message + "\n")
}

// Middleware
export const requestLogger = (req, res, next) => {
  const log = `[${new Date().toISOString()}] REQUEST: ${req.method} ${req.originalUrl}`
  writeLog("events.log", log)
  console.log(log)
  next()
}

//registrar errores
export const errorLogger = (error, req) => {
  const log = `[${new Date().toISOString()}] ERROR: ${error.message} - Ruta: ${req.originalUrl}`
  writeLog("error.log", log)
  console.error(log)
}

// registrar eventos
export const eventLogger = (message) => {
  const log = `[${new Date().toISOString()}] EVENT: ${message}`
  writeLog("events.log", log)
  console.log(log)
}

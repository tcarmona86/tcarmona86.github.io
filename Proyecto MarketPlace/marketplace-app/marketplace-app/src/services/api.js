import axios from "axios";

/**
 * Instancia centralizada de Axios.
 * Toda la app debe importar "api" desde aquí en lugar de usar axios directamente,
 * para mantener un único punto de configuración (baseURL, headers, interceptores).
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor: agrega el token JWT (si existe) a cada request saliente.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor: si el token expiró (401), limpiamos sesión y redirigimos al login.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;

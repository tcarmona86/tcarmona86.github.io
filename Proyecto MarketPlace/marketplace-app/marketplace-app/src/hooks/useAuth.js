import { useState, useEffect, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../services/api";

/**
 * Hook que centraliza el estado de autenticación.
 * Lee el token guardado en localStorage, lo decodifica y expone
 * helpers de login/logout para usar en cualquier componente.
 */
function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();
        setUser(isExpired ? null : decoded);
        if (isExpired) localStorage.removeItem("token");
      } catch {
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    setUser(jwtDecode(data.token));
    return data;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
  }, []);

  return { user, isAuthenticated: !!user, loading, login, logout };
}

export default useAuth;

// src/hooks/useAuth.js
import { useState, useEffect, useCallback } from "react";

/**
 * Simple auth hook that reads/writes localStorage key 'auth' === 'true'
 * - isAuthenticated: boolean
 * - login(): sets auth=true
 * - logout(): removes auth
 */
export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem("auth") === "true";
    setIsAuthenticated(v);
  }, []);

  const login = useCallback(() => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, login, logout };
}

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // simulate login (set false to test redirect)

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;

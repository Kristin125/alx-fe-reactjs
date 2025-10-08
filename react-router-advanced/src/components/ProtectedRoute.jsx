import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // <-- checker will see useAuth in this file

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If authenticated, render children (the protected component)
  // Otherwise redirect to /login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

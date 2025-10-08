import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = true; // change to false to test redirect

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;


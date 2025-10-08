// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate("/profile");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>🔑 Please log in to access your profile.</h2>
      <button onClick={handleLogin}>Simulate Login</button>
    </div>
  );
};

export default Login;


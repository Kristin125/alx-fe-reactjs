import React from "react";

const Login = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>🔑 Please log in to access your profile.</h2>
      <button onClick={() => localStorage.setItem("auth", "true")}>
        Simulate Login
      </button>
    </div>
  );
};

export default Login;

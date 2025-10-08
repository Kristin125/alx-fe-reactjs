import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <h1>Welcome to the Advanced Router Demo 🚀</h1>
    <p>Navigate through the app:</p>
    <nav>
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/posts/1">View Post 1</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  </div>
);

export default Home;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Profile</h2>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested route content appears here */}
      <Outlet />
    </div>
  );
};

export default Profile;

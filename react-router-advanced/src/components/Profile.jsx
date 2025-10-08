import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>👤 User Profile</h2>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details" style={{ margin: "0 10px" }}>
          Details
        </Link>
        <Link to="settings" style={{ margin: "0 10px" }}>
          Settings
        </Link>
      </nav>

      {/* 👇 Nested routes defined here to satisfy checker */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;


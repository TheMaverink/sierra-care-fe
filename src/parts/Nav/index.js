import { Link } from "react-router-dom";

import React from "react";

export default function Nav() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/clinics">Clinics</Link>
    </div>
  );
}

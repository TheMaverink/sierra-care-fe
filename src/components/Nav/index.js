import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logoutVolunteerAction } from "containers/Volunteers/actions";

export default function Nav() {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/clinics">Clinics</Link>
      <Link to="/admin">Admin</Link>

      <button onClick={async () => dispatch(logoutVolunteerAction())}>
        LOGOUT
      </button>
    </div>
  );
}

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logoutVolunteerAction } from "containers/Volunteers/actions";

export default function Nav() {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/clinics">Clinics</Link>

      <button onClick={async () => await dispatch(logoutVolunteerAction())}>
        LOGOUT
      </button>
    </div>
  );
}

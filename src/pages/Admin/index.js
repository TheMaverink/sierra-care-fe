import React from "react";

import AddVolunteerForm from "./components/AddVolunteerForm";
import AddClinicForm from "./components/AddClinicForm";

export default function AdminPage() {
  return (
    <div>
      <AddVolunteerForm />
      <AddClinicForm />
    </div>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AddPatientForm from "./components/AddPatientForm";
import { getPatientsAction } from "containers/Patients/actions";


export default function AddPatient() {
  const dispatch = useDispatch();
  return (
    <>
      <AddPatientForm />
    </>
  );
}

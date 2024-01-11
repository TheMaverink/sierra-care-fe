import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { getPatientAction } from "containers/Patients/actions";
import { patientSelector } from "containers/Patients/selectors";

import { Paper, Typography, Grid, Divider } from "@mui/material";

export default function PatientProfile() {
  const dispatch = useDispatch();

  let location = useLocation();

  const patient = useSelector(patientSelector);

  const query = new URLSearchParams(location.search);
  const patientId = query.get("patientId");

  React.useEffect(() => {
    console.log("patient");
    console.log(patient);
  }, [patient]);

  React.useEffect(() => {
    dispatch(getPatientAction(patientId));
  }, []);

  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Patient Profile
      </Typography>
      <Divider style={{ marginBottom: 20 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Typography>
            <strong>Name:</strong>{" "}
            {`${patient?.firstName} ${patient?.middleName} ${patient?.lastName}`}
          </Typography>
          <Typography>
            <strong>Gender:</strong> {patient?.gender}
          </Typography>
          <Typography>
            <strong>Date of Birth:</strong>{" "}
            {new Date(patient?.dob).toLocaleDateString()}
          </Typography>
          <Typography>
            <strong>Marital Status:</strong> {patient?.maritalStatus}
          </Typography>
          <Typography>
            <strong>Number of Children:</strong> {patient?.noOfChildren}
          </Typography>
          <Typography>
            <strong>Job:</strong> {patient?.job}
          </Typography>
          <Typography>
            <strong>Income:</strong> {patient?.income}
          </Typography>
          <Typography>
            <strong>English Speaking Level:</strong>{" "}
            {patient?.englishSpeakingLevel}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Health Information
          </Typography>
          <Typography>
            <strong>Blood Type:</strong> {patient?.bloodType}
          </Typography>
          <Typography>
            <strong>Health Risk:</strong> {patient?.healthRisk}
          </Typography>
          <Typography>
            <strong>Is Pregnant:</strong> {patient?.isPregnant ? "Yes" : "No"}
          </Typography>
          {patient?.isPregnant && (
            <Typography>
              <strong>Conceiving Date:</strong>{" "}
              {new Date(patient?.conceivingDate).toLocaleDateString()}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography>
            <strong>Email:</strong> {patient?.email}
          </Typography>
          <Typography>
            <strong>Mobile Phone:</strong> {patient?.mobilePhone}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

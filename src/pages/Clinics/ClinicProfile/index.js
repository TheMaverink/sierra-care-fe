import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { getClinicAction } from "containers/Clinics/actions";
import { clinicSelector } from "containers/Clinics/selectors";

import { Paper, Typography, Grid, Divider } from "@mui/material";

export default function ClinicProfile() {
  const dispatch = useDispatch();

  let location = useLocation();

  const clinic = useSelector(clinicSelector);

  const query = new URLSearchParams(location.search);
  const clinicId = query.get("clinicId");

  React.useEffect(() => {
    dispatch(getClinicAction(clinicId));
  }, []);

  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Clinic
      </Typography>
      <Divider style={{ marginBottom: 20 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Clinic Information
          </Typography>
          <Typography>
            <strong>Name:</strong>{" "}
            {`${clinic?.name}`}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography>
            <strong>Email:</strong> {clinic?.email}
          </Typography>
          <Typography>
            <strong>Mobile Phone:</strong> {clinic?.mobilePhone}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

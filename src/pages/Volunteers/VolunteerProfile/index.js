import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { getVolunteerAction } from "containers/Volunteers/actions";
import { volunteerSelector } from "containers/Volunteers/selectors";

import { Paper, Typography, Grid, Divider } from "@mui/material";

export default function VolunteerProfile() {
  const dispatch = useDispatch();

  let location = useLocation();

  const volunteer = useSelector(volunteerSelector);

  const query = new URLSearchParams(location.search);
  const volunteerId = query.get("volunteerId");

  React.useEffect(() => {
    dispatch(getVolunteerAction(volunteerId));
  }, []);

  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Volunteer Profile
      </Typography>
      <Divider style={{ marginBottom: 20 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Typography>
            <strong>Name:</strong>{" "}
            {`${volunteer?.firstName} ${volunteer?.middleName} ${volunteer?.lastName}`}
          </Typography>
          <Typography>
            <strong>Gender:</strong> {volunteer?.gender}
          </Typography>
          <Typography>
            <strong>Date of Birth:</strong>{" "}
            {new Date(volunteer?.dob).toLocaleDateString()}
          </Typography>
          <Typography>
            <strong>Job:</strong> {volunteer?.job}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography>
            <strong>Email:</strong> {volunteer?.email}
          </Typography>
          <Typography>
            <strong>Mobile Phone:</strong> {volunteer?.mobilePhone}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

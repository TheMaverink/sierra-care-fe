import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Formik, Form, Field } from "formik";
import { Button, TextField, Typography, Container, Box } from "@mui/material";

import { createPatientLogAction } from "containers/Patients/actions";

const initialValues = {
  title: "",
  description: "",
};

const CreatePatientLog = ({ patientId, patient }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {


    dispatch(createPatientLogAction({ ...values, patientId }));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Patient Log Form
        </Typography>
        <div>{`number logs ${patient?.logs?.length}`}</div>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <Field name="title">
              {({ field, meta }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label="Title"
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="description">
              {({ field, meta }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  multiline
                  rows={4}
                  label="Description"
                  {...field}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default CreatePatientLog;

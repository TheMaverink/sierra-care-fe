import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Formik, useFormik, Form, Field } from "formik";

import { createVolunteerAction } from "containers/Volunteers/actions";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";

import {
  initialValues,
  validationSchema,
  genderOptions,
  maritalStatusOptions,
  bloodTypeOptions,
  englishSpeakingLevelsMarks,
  healthRiskLevelsMarks,
  handleGetLocation,
} from "./formManagement";

const VolunteerForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("values");
        console.log(values);
        dispatch(createVolunteerAction(values));
      }}
    >
      {(props) => {
        const {
          errors,
          handleBlur,
          handleSubmit,
          handleChange,
          isSubmitting,
          isValid,
          setFieldValue,
          touched,
          values,
        } = props;
        return (
          <Form>
            <TextField
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              fullWidth
            />

            <TextField
              label="Middle Name"
              name="middleName"
              value={values.middleName}
              onChange={handleChange}
              error={touched.middleName && Boolean(errors.middleName)}
              helperText={touched.middleName && errors.middleName}
              fullWidth
            />

            <TextField
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              fullWidth
            />
            {/* Add similar fields for middleName, lastName, and other text fields */}

            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              value={values.dob}
              onChange={handleChange}
              error={touched.dob && Boolean(errors.dob)}
              helperText={touched.dob && errors.dob}
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={values.gender}
                onChange={handleChange}
                error={touched.gender && Boolean(errors.gender)}
              >
                {genderOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Job"
              name="job"
              value={values.job}
              onChange={handleChange}
              error={touched.job && Boolean(errors.job)}
              helperText={touched.job && errors.job}
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                name="role"
                value={values.gender}
                onChange={handleChange}
                error={touched.gender && Boolean(errors.gender)}
              >
                {["normal", "admin"].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Mobile Phone"
              name="mobilePhone"
              value={values.mobilePhone}
              onChange={handleChange}
              error={touched.mobilePhone && Boolean(errors.mobilePhone)}
              helperText={touched.mobilePhone && errors.mobilePhone}
              fullWidth
            />

            <TextField
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
            />

            <TextField
              label="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default VolunteerForm;

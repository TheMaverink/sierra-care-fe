import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Formik, useFormik, Form, Field } from "formik";

import { createPatientAction } from "containers/Patients/actions";

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

const PatientForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
   
        dispatch(createPatientAction(values));
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

            <FormControl fullWidth>
              <InputLabel>Marital Status</InputLabel>
              <Select
                name="maritalStatus"
                value={values.maritalStatus}
                onChange={handleChange}
                error={touched.maritalStatus && Boolean(errors.maritalStatus)}
              >
                {maritalStatusOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Number of Children"
              name="noOfChildren"
              value={values.noOfChildren}
              onChange={handleChange}
              error={touched.noOfChildren && Boolean(errors.noOfChildren)}
              helperText={touched.noOfChildren && errors.noOfChildren}
              fullWidth
            />

            <TextField
              label="Job"
              name="job"
              value={values.job}
              onChange={handleChange}
              error={touched.job && Boolean(errors.job)}
              helperText={touched.job && errors.job}
              fullWidth
            />

            <TextField
              label="Income"
              name="income"
              value={values.income}
              onChange={handleChange}
              error={touched.income && Boolean(errors.income)}
              helperText={touched.income && errors.income}
              fullWidth
            />

            <Slider
              name="englishSpeakingLevel"
              value={values.englishSpeakingLevel}
              onChange={handleChange}
              valueLabelDisplay="auto"
              step={1}
              marks={englishSpeakingLevelsMarks}
              min={1}
              max={5}
              // defaultValue={16}
            />

            <FormControlLabel
              control={
                <Switch
                  name="ownsMobilePhone"
                  checked={values.ownsMobilePhone}
                  onChange={handleChange}
                />
              }
              label="Owns Mobile Phone"
            />

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

            <Button
              variant="contained"
              color="primary"
              onClick={handleGetLocation}
            >
              Get location
            </Button>

            <FormControlLabel
              control={
                <Switch
                  name="isPregnant"
                  checked={values.isPregnant}
                  onChange={handleChange}
                />
              }
              label="Are you pregnant?"
            />

            <TextField
              label="Conceiving date"
              name="conceivingDate"
              type="date"
              value={values.conceivingDate}
              onChange={handleChange}
              error={touched.conceivingDate && Boolean(errors.conceivingDate)}
              helperText={touched.conceivingDate && errors.conceivingDate}
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>Blood Type</InputLabel>
              <Select
                name="bloodType"
                value={values.bloodType}
                onChange={handleChange}
                error={touched.bloodType && Boolean(errors.bloodType)}
              >
                {bloodTypeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Field name="healthRisk">
              {({ field }) => (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <div style={{ minWidth: "50px" }}>Health Risk:</div>
                  <Slider
                    name="healthRisk"
                    value={values.healthRisk}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    step={1}
                    marks={healthRiskLevelsMarks}
                    min={0}
                    max={3}
                    // defaultValue={16}
                  />
                </div>
              )}
            </Field>

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PatientForm;

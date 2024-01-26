import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Formik, useFormik, Form, Field } from "formik";

import { createClinicAction } from "containers/Clinics/actions";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";

import { initialValues, validationSchema } from "./formManagement";

const ClinicForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
 
        dispatch(createClinicAction(values));
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
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              fullWidth
            />

            <TextField
              label="Address"
              name="address"
              value={values.address}
              onChange={handleChange}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
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
              label="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
              fullWidth
            />

            <TextField
              label="Manager Name"
              name="managerName"
              value={values.managerName}
              onChange={handleChange}
              error={touched.managerName && Boolean(errors.managerName)}
              helperText={touched.managerName && errors.managerName}
              fullWidth
            />

            <TextField
              label="Number Midwives"
              name="numberMidwives"
              value={values.numberMidwives}
              onChange={handleChange}
              error={touched.numberMidwives && Boolean(errors.numberMidwives)}
              helperText={touched.numberMidwives && errors.numberMidwives}
              fullWidth
            />

            <TextField
              label="Approximate No of monthly patients"
              name="approximatedMonthlyNumberPatients"
              value={values.approximatedMonthlyNumberPatients}
              onChange={handleChange}
              error={
                touched.approximatedMonthlyNumberPatients &&
                Boolean(errors.approximatedMonthlyNumberPatients)
              }
              helperText={
                touched.approximatedMonthlyNumberPatients &&
                errors.approximatedMonthlyNumberPatients
              }
              fullWidth
            />

            <FormControlLabel
              control={
                <Switch
                  label="Is a private clinic?"
                  name="isPrivateClinic"
                  checked={values.isPrivateClinic}
                  onChange={handleChange}
                />
              }
            />

            <FormControlLabel
              control={
                <Switch
                  label="Has clean water?"
                  name="hasCleanWater"
                  checked={values.hasCleanWater}
                  onChange={handleChange}
                />
              }
            />

            <FormControlLabel
              control={
                <Switch
                  label="Has solar energy?"
                  name="hasSolarEnergy"
                  checked={values.hasSolarEnergy}
                  onChange={handleChange}
                />
              }
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

export default ClinicForm;

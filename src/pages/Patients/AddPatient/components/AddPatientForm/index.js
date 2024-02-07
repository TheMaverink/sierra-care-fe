import React from "react";
import styled from "styled-components";

import { Formik, Form, Field, useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createPatientAction } from "containers/Patients/actions";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import MapPicker from "components/MapPicker";

import { validationSchema, initialValues } from "./formManagement";

import {
  genderOptions,
  maritalStatusOptions,
  bloodTypeOptions,
  englishSpeakingLevelsMarks,
  healthRiskLevelsMarks,
  handleGetLocation,
} from "./formManagement";

const FormWrapper = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    padding: 5% 10%;
    /* width: 75%; */

    .form-title {
      color: black;
      font-size: 32px;
    }

    .form-helper-text {
      min-height: 30px;
      color: #83313199;
      font-size: 10px;
      font-weight: 600;
      opacity: 0.85;
    }

    .form-helper-text-info {
      color: #03421399;
      opacity: 1;
    }

    .form-control-sliders {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 50px;
      margin-bottom: 20px;

      .form-sliders-input-label {
        /* border: 50px solid red; */
      }
    }
  }
`;

const PatientForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log("handleSubmit values");
    console.log(values);
    await dispatch(createPatientAction(values));
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const {
    errors,
    handleBlur,
    handleChange,
    isSubmitting,
    isValid,
    setFieldValue,
    touched,
    values,
  } = formik;

  React.useEffect(() => {
    console.log("FORMIK!");
    console.log("values!!!");
    console.log(formik.values);
    console.log("errors");
    console.log(errors);
    console.log("-----");
  }, [formik]);

  const hasCurrentLocation =
    values?.locationCoordinates?.lat && values?.locationCoordinates?.lng;

  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in 'YYYY-MM-DD' format

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <h4 className="form-title">Add Patient</h4>
        <FormControl>
          <TextField
            className="formField"
            label="First Name"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
            fullWidth
          />
          <FormHelperText className="form-helper-text">
            {errors?.firstName}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <TextField
            className="formField"
            label="Middle Name"
            name="middleName"
            onChange={formik.handleChange}
            value={formik.values.middleName}
            error={touched.middleName && Boolean(errors.middleName)}
            helperText={touched.middleName && errors.middleName}
            fullWidth
          />
          <FormHelperText className="form-helper-text">
            {errors?.middleName}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <TextField
            className="formField"
            label="Last Name"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
            fullWidth
          />
          <FormHelperText className="form-helper-text">
            {errors?.lastName}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <TextField
            className="formField"
            name="dob"
            type="date"
            value={values.dob}
            onChange={handleChange}
            error={touched.dob && Boolean(errors.dob)}
            helperText={touched.dob && errors.dob}
            fullWidth
            inputProps={{ max: currentDate }}
          />
          <FormHelperText className="form-helper-text">
            {errors?.dob}
          </FormHelperText>
        </FormControl>

        <FormControl>
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
          <FormHelperText className="form-helper-text">
            {errors?.gender}
          </FormHelperText>
        </FormControl>

        {values.gender == "Female" && (
          <FormControl fullWidth>
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
            <FormHelperText className="form-helper-text">
              {errors?.isPregnant}
            </FormHelperText>
          </FormControl>
        )}

        {!!values.isPregnant && (
          <FormControl fullWidth>
            <TextField
              name="conceivingDate"
              type="date"
              value={values.conceivingDate}
              onChange={handleChange}
              error={touched.conceivingDate && Boolean(errors.conceivingDate)}
              helperText={touched.conceivingDate && errors.conceivingDate}
              fullWidth
              inputProps={{ max: currentDate }}
            />
            <FormHelperText className="form-helper-text">
              {errors?.conceivingDate}
            </FormHelperText>
          </FormControl>
        )}

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
          <FormHelperText className="form-helper-text">
            {errors?.maritalStatus}
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Number of Children"
            name="noOfChildren"
            value={values.noOfChildren}
            onChange={handleChange}
            error={touched.noOfChildren && Boolean(errors.noOfChildren)}
            helperText={touched.noOfChildren && errors.noOfChildren}
            fullWidth
          />
          <FormHelperText className="form-helper-text">
            {errors?.noOfChildren}
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Job"
            name="job"
            value={values.job}
            onChange={handleChange}
            error={touched.job && Boolean(errors.job)}
            helperText={touched.job && errors.job}
            fullWidth
          />
          <FormHelperText className="form-helper-text">
            {errors?.job}
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Income"
            name="income"
            value={values.income}
            onChange={handleChange}
            error={touched.income && Boolean(errors.income)}
            helperText={touched.income && errors.income}
            fullWidth
          />
          <FormHelperText className="form-helper-text">
            {errors?.income}
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth className="form-control-sliders">
          <p className="form-sliders-input-label">English Speaking level</p>
          <Slider
            name="englishSpeakingLevel"
            value={values.englishSpeakingLevel}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={5}
            marks={englishSpeakingLevelsMarks}
            // defaultValue={16}
          />
          <FormHelperText className="form-helper-text">
            {errors?.englishSpeakingLevel}
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth>
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
          <FormHelperText className="form-helper-text">
            {errors?.ownsMobilePhone}
          </FormHelperText>
        </FormControl>

        {values.ownsMobilePhone && (
          <FormControl fullWidth>
            <TextField
              label="Mobile Phone"
              name="mobilePhone"
              value={values.mobilePhone}
              onChange={handleChange}
              error={touched.mobilePhone && Boolean(errors.mobilePhone)}
              helperText={touched.mobilePhone && errors.mobilePhone}
              fullWidth
            />
            <FormHelperText className="form-helper-text">
              {errors?.mobilePhone}
            </FormHelperText>
          </FormControl>
        )}

        <FormControl fullWidth>
          <TextField
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            fullWidth
          />
          <FormHelperText className="form-helper-text">
            {errors?.email}
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth>
          <Button
            variant="contained"
            color="primary"
            onClick={async () => await handleGetLocation(formik)}
          >
            {hasCurrentLocation
              ? "Update current location"
              : "Get current location"}
          </Button>
          <FormHelperText className="form-helper-text form-helper-text-info">
            {hasCurrentLocation &&
              `lat:${values?.locationCoordinates?.lat}, long:${values?.locationCoordinates?.lng}`}
          </FormHelperText>
     

          <FormHelperText className="form-helper-text form-helper-text-info">
            {values?.locationCoordinatesFormatted}
          </FormHelperText>
          <FormHelperText className="form-helper-text">
            {errors?.locationCoordinates}
          </FormHelperText>
        </FormControl>

        {hasCurrentLocation && (
          <FormControl fullWidth>
            <FormControlLabel
              control={
                <Switch
                  name="doesLiveAtFetchedLocation"
                  checked={values.doesLiveAtFetchedLocation}
                  onChange={handleChange}
                />
              }
              label="Do you live here?"
            />
            <FormHelperText className="form-helper-text">
              {errors?.doesLiveAtFetchedLocation}
            </FormHelperText>
          </FormControl>
        )}

        {!values?.doesLiveAtFetchedLocation && (
          <FormControl fullWidth>
            <MapPicker
              locationCoordinates={values?.locationCoordinates}
              setCurrentAddressLoc={(loc, formattedLoc) => {
                setFieldValue("addressLocationCoordinates", loc);
                setFieldValue(
                  "addressLocationCoordinatesFormatted",
                  formattedLoc
                );
              }}
            />
            <FormHelperText className="form-helper-text form-helper-text-info ">
              {values?.addressLocationCoordinates &&
                `lat:${values?.addressLocationCoordinates?.lat}, long:${values?.addressLocationCoordinates?.lng}`}
            </FormHelperText>
            <FormHelperText className="form-helper-text form-helper-text-info ">
              {values?.addressLocationCoordinatesFormatted &&
                `${values?.addressLocationCoordinatesFormatted}`}
            </FormHelperText>
            <FormHelperText className="form-helper-text">
              {errors?.addressLocationCoordinates}
            </FormHelperText>
            <FormHelperText className="form-helper-text">
              {errors?.addressLocationCoordinatesFormatted}
            </FormHelperText>
          </FormControl>
        )}

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
          <FormHelperText className="form-helper-text">
            {errors?.bloodType}
          </FormHelperText>
        </FormControl>

        <FormControl>
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
          <FormHelperText className="form-helper-text">
            {errors?.healthRisk}
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!(Object.values(errors).length === 0)}
        >
          Submit
        </Button>
      </form>
    </FormWrapper>
  );
};

export default PatientForm;

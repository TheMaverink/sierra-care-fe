import React from "react";
import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";

const FiltersBar = ({ updateFilters }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        sex: "",
        ageRange: [0, 100],
      }}
      onSubmit={updateFilters}
    >
      <Form>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Field name="name">
            {({ field }) => (
              <TextField label="Name" variant="outlined" {...field} />
            )}
          </Field>
          <Field name="sex">
            {({ field }) => (
              <Select label="Sex" variant="outlined" {...field}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            )}
          </Field>
          <Field name="ageRange">
            {({ field }) => (
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div style={{ minWidth: "50px" }}>Age:</div>
                <Slider
                  {...field}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => value}
                  max={100}
                />
              </div>
            )}
          </Field>
          <Button type="submit" variant="contained">
            Apply Filters
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FiltersBar;

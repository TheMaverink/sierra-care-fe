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

          <Button type="submit" variant="contained">
            Apply Filters
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FiltersBar;

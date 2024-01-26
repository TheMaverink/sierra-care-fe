import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";

const FiltersBarWrapper = styled.div`
  background-color: white;
  width: 100%;

  .form-filters-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 6px;
  }
`;

const FieldWrapper = styled.div`
  border: 1px solid red;
  .field-wrapper-label {
  }
`;

const Filters = ({ formik }) => {
  const fields = formik.initialValues;
  console.log("fields!!!!");
  console.log(fields);
  return (
    <FiltersBarWrapper>
      <form>
        <div className="form-filters-wrapper">
          {"name" in fields && (
            <FieldWrapper>
              <div className="field-wrapper-label">Search by name</div>
              <TextField
                name="name"
                onChange={formik.handleChange}
                label="Name"
                variant="outlined"
              />
            </FieldWrapper>
          )}

          {"gender" in fields && (
            <FieldWrapper>
              <div className="field-wrapper-label">Gender</div>
              <Select
                defaultValue="all"
                label="Gender"
                variant="outlined"
                name="gender"
                onChange={formik.handleChange}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FieldWrapper>
          )}

          {"ageRange" in fields && (
            <FieldWrapper>
              <div className="field-wrapper-label">Age range</div>

              <Slider
                name="ageRange"
                defaultValue={[0, 100]}
                value={formik.values.ageRange}
                onChange={formik.handleChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value, index) =>
                  index === 1 ? `${value} yr` : `${value} yrs`
                }
                min={0}
                max={100}
                step={1}
              />
            </FieldWrapper>
          )}
        </div>
      </form>
    </FiltersBarWrapper>
  );
};

export default Filters;

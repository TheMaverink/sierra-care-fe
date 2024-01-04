import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

// import {
//   getAllClinicsAction,
// } from "./actions";

const initialState = {
  isClinicsReducerLoading: false,
  clinics: null,
};

export const ClinicsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
});

export default ClinicsSlice;

import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

// import {
//   getAllPatientsAction,
// } from "./actions";

const initialState = {
  isPatientsReducerLoading: false,
  patients: null,
};

export const PatientsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
});

export default PatientsSlice;

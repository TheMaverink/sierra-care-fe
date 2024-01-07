import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import { getPatientsAction } from "./actions";

const initialState = {
  isPatientsReducerLoading: false,
  patients: null,
};

export const PatientsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPatientsAction.pending, (state) => {
        state.isPatientsReducerLoading = true;
        state.patients = null;
      })
      .addCase(getPatientsAction.rejected, (state) => {
        state.isPatientsReducerLoading = false;
        state.patients = null;
      })
      .addCase(getPatientsAction.fulfilled, (state, action) => {
        state.isPatientsReducerLoading = false;
        state.patients = action.payload;
      });
  },
});

export default PatientsSlice;

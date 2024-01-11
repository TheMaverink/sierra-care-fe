import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import {
  getPatientsAction,
  getPatientAction,
  createPatientAction,
  getPatientsOverviewAction,
  createPatientLogAction,
} from "./actions";

const initialState = {
  isPatientsReducerLoading: false,
  patients: null,
  patient: null,
  patientsOverview: null,
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
      })
      .addCase(createPatientAction.pending, (state) => {
        state.isPatientsReducerLoading = true;
      })
      .addCase(createPatientAction.rejected, (state) => {
        state.isPatientsReducerLoading = false;
      })
      .addCase(createPatientAction.fulfilled, (state, action) => {
        state.isPatientsReducerLoading = false;
      })
      .addCase(getPatientAction.pending, (state) => {
        state.isPatientsReducerLoading = true;
      })
      .addCase(getPatientAction.rejected, (state) => {
        state.isPatientsReducerLoading = false;
      })
      .addCase(getPatientAction.fulfilled, (state, action) => {
        state.isPatientsReducerLoading = false;
        state.patient = action.payload;
      })
      .addCase(getPatientsOverviewAction.pending, (state) => {
        state.isPatientsReducerLoading = true;
      })
      .addCase(getPatientsOverviewAction.rejected, (state) => {
        state.isPatientsReducerLoading = false;
      })
      .addCase(getPatientsOverviewAction.fulfilled, (state, action) => {
        state.isPatientsReducerLoading = false;
        state.patientsOverview = action.payload;
      })
      .addCase(createPatientLogAction.pending, (state) => {
        state.isPatientsReducerLoading = true;
      })
      .addCase(createPatientLogAction.rejected, (state) => {
        state.isPatientsReducerLoading = false;
      })
      .addCase(createPatientLogAction.fulfilled, (state, action) => {
        state.isPatientsReducerLoading = false;
        state.patient = action.payload;
      });
  },
});

export default PatientsSlice;

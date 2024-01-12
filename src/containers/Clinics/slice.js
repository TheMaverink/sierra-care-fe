import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import { getClinicsAction, createClinicAction } from "./actions";

const initialState = {
  isClinicsReducerLoading: false,
  clinics: null,
};

export const ClinicsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClinicsAction.pending, (state) => {
        state.isClinicsReducerLoading = true;
        state.clinics = null;
      })
      .addCase(getClinicsAction.rejected, (state) => {
        state.isClinicsReducerLoading = false;
        state.clinics = null;
      })
      .addCase(getClinicsAction.fulfilled, (state, action) => {
        state.isClinicsReducerLoading = false;
        state.clinics = action.payload;
      })
      .addCase(createClinicAction.pending, (state) => {
        state.isClinicsReducerLoading = true;
        state.clinics = null;
      })
      .addCase(createClinicAction.rejected, (state) => {
        state.isClinicsReducerLoading = false;
        state.clinics = null;
      })
      .addCase(createClinicAction.fulfilled, (state, action) => {
        state.isClinicsReducerLoading = false;
        state.clinics = action.payload;
      });
  },
});

export default ClinicsSlice;

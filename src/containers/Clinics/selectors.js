import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const clinicsSelector = (state) => state[SLICE_NAME];

export const isClinicsliceLoadingSelector = createSelector(
  clinicsSelector,
  (clinicsState) => {
    return clinicsState.isClinicsReducerLoading;
  }
);

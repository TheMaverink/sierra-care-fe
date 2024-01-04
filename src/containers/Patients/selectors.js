import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const patientsSelector = (state) => state[SLICE_NAME];

export const isPatientsSliceLoadingSelector = createSelector(
  patientsSelector,
  (patientsState) => {
    return patientsState.isPatientsReducerLoading;
  }
);

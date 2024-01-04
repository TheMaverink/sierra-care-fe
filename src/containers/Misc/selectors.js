import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import { isPatientsSliceLoadingSelector } from "containers/Patients/selectors";
import { isVolunteersSliceLoadingSelector } from "containers/Volunteers/selectors";
import { isClinicsliceLoadingSelector } from "containers/Clinics/selectors";

export const miscSelector = (state) => state[SLICE_NAME];

export const isAppLoadingSelector = createSelector(
  isPatientsSliceLoadingSelector,
  isVolunteersSliceLoadingSelector,
  isClinicsliceLoadingSelector,

  (...loadingStates) => loadingStates.some((loading) => loading)
);

import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const volunteersSelector = (state) => state[SLICE_NAME];

export const isThisVolunteerAuthenticatedSelector = createSelector(
  volunteersSelector,
  (volunteersState) => {
    return volunteersState.isThisVolunteerAuthenticated;
  }
);

export const isVolunteersSliceLoadingSelector = createSelector(
  volunteersSelector,
  (volunteersState) => {
    return volunteersState.isVolunteersReducerLoading;
  }
);

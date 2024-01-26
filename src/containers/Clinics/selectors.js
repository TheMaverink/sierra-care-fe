import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const clinicsSelector = (state) => state[SLICE_NAME];

export const isClinicsSliceLoadingSelector = createSelector(
  clinicsSelector,
  (clinicsState) => {
    return clinicsState.isClinicsReducerLoading;
  }
);

export const clinicsListSelector = createSelector(
  clinicsSelector,
  (clinicsState) => {
    return clinicsState?.clinics;
  }
);

export const clinicSelector = createSelector(
  clinicsSelector,
  (clinicsState) => {
    return clinicsState?.clinic;
  }
);

export const clinicsListNormalizedDataSelector = createSelector(
  clinicsListSelector,
  (clinicsList) => {
    if (
      clinicsList?.currentPage &&
      clinicsList?.data &&
      clinicsList?.numberOfPages &&
      clinicsList?.data?.length > 0
    ) {
      let normalizeDataArray = [];

      clinicsList.data.forEach((clinicData) => {
        const {
          _id: id,
          name,
          email,
          images,
          locationCoordinates,
          address,
          phoneNumber,
          managerName,
          numberMidwives,
          approximatedMonthlyNumberPatients,
          isPrivateClinic,
          logs,
        } = clinicData;

        normalizeDataArray.push({
          id,
          image: images?.length > 0 && images[0],
          name,
          email,
          locationCoordinates,
          address,
          phoneNumber,
          managerName,
          numberMidwives,
          approximatedMonthlyNumberPatients,
          isPrivateClinic,
          logs,
        });
      });

      return normalizeDataArray;
    } else {
      return [];
    }
  }
);

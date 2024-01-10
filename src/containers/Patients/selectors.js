import { createSelector } from "@reduxjs/toolkit";
import moment from "moment";

import { SLICE_NAME } from "./consts";

export const patientsSelector = (state) => state[SLICE_NAME];

export const isPatientsSliceLoadingSelector = createSelector(
  patientsSelector,
  (patientsState) => {
    return patientsState?.isPatientsReducerLoading;
  }
);

export const patientsListSelector = createSelector(
  patientsSelector,
  (patientsState) => {
    //currentPage
    //data
    //numberOfPages
    return patientsState?.patients;
  }
);

export const patientSelector = createSelector(
  patientsSelector,
  (patientsState) => {
    return patientsState?.patient;
  }
);

export const patientsListNormalizedDataSelector = createSelector(
  patientsListSelector,
  (patientsList) => {
    //currentPage
    //data
    //numberOfPages
    if (
      patientsList?.currentPage &&
      patientsList?.data &&
      patientsList?.numberOfPages &&
      patientsList?.data?.length > 0
    ) {
      let normalizeDataArray = [];

      patientsList.data.forEach((patientData) => {
        const {
          _id: id,
          firstName,
          middleName,
          lastName,
          gender,
          patientImages,
          dob,
          pregnant,
          healthRisk,
        } = patientData;

        console.log("patientData");
        console.log(patientData);

        normalizeDataArray.push({
          id,
          image: patientImages?.length > 0 && patientImages[0],
          name: `${firstName} ${middleName ? middleName[0] : ""} ${lastName}`,
          gender,
          pregnant,
          age: moment().diff(dob, "years"),
          healthRisk,
        });
      });

      return normalizeDataArray;
    } else {
      return [];
    }
  }
);

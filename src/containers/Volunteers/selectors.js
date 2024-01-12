import moment from "moment";
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

export const volunteersOverviewSelector = createSelector(
  volunteersSelector,
  (volunteersState) => {
    return volunteersState?.volunteersOverview;
  }
);

export const volunteerSelector = createSelector(
  volunteersSelector,
  (volunteersState) => {
    return volunteersState?.volunteer;
  }
);

export const volunteersListSelector = createSelector(
  volunteersSelector,
  (volunteersState) => {
    return volunteersState?.volunteers;
  }
);

export const volunteersListNormalizedDataSelector = createSelector(
  volunteersListSelector,
  (volunteersList) => {
    if (
      volunteersList?.currentPage &&
      volunteersList?.data &&
      volunteersList?.numberOfPages &&
      volunteersList?.data?.length > 0
    ) {
      let normalizeDataArray = [];

      volunteersList.data.forEach((volunteerData) => {
        const {
          _id: id,
          firstName,
          middleName,
          lastName,
          gender,
          volunteerImages,
          dob,
          mobilePhone,
          email,
          job,
          role,
          logs,
        } = volunteerData;

        console.log("volunteerData");
        console.log(volunteerData);

        normalizeDataArray.push({
          id,
          image: volunteerImages?.length > 0 && volunteerImages[0],
          name: `${firstName} ${middleName ? middleName[0] : ""} ${lastName}`,
          gender,
          mobilePhone,
          email,
          age: moment().diff(dob, "years"),
          job,
          role,
          logs,
        });
      });

      return normalizeDataArray;
    } else {
      return [];
    }
  }
);

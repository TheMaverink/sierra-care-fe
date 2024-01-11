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

export const patientsOverviewSelector = createSelector(
  patientsSelector,
  (patientsState) => {
    return patientsState?.patientsOverview;
  }
);

export const patientsOverviewChartsDataSelector = createSelector(
  patientsOverviewSelector,
  (patientsOverview) => {
    const patientsOverviewChartsData = {};

    if (patientsOverview) {
      patientsOverviewChartsData.ages = [
        {
          name: "<18",
          data: patientsOverview.ageRange1,
        },
        {
          name: "18-25",
          data: patientsOverview.ageRange2,
        },
        {
          name: "25-35",
          data: patientsOverview.ageRange3,
        },
        {
          name: "35-45",
          data: patientsOverview.ageRange4,
        },
        {
          name: "45-55",
          data: patientsOverview.ageRange5,
        },
        {
          name: ">55",
          data: patientsOverview.ageRange6,
        },
      ];

      patientsOverviewChartsData.mobilePhoneAccess = [
        {
          name: "noAccess",
          label: "No Access",
          value: Math.round(
            (100 *
              (patientsOverview.totalPatients -
                patientsOverview.patientsWithMobilePhoneAccess)) /
              patientsOverview.totalPatients
          ),
        },
        {
          name: "withAccess",
          label: "With Access",
          value: Math.round(
            (100 * patientsOverview.patientsWithMobilePhoneAccess) /
              patientsOverview.totalPatients
          ),
        },
      ];

      patientsOverviewChartsData.englishLevel = [
        {
          name: "unknownLevel",
          label: "Unknown",
          value: Math.round(
            (100 *
              (patientsOverview.totalPatients -
                patientsOverview.unknownEnglishSpeakingPatients)) /
              patientsOverview.unknownEnglishSpeakingPatients
          ),
        },
        {
          name: "noLevel",
          label: "No English",
          value: Math.round(
            (100 * patientsOverview.noEnglishSpeakingPatients) /
              patientsOverview.totalPatients
          ),
        },
        {
          name: "begginer",
          label: "Begginer",
          value: Math.round(
            (100 * patientsOverview.beginnerEnglishSpeakingPatients) /
              patientsOverview.totalPatients
          ),
        },
        {
          name: "elementary",
          label: "Elementary",
          value: Math.round(
            (100 * patientsOverview.elementaryEnglishSpeakingPatients) /
              patientsOverview.totalPatients
          ),
        },
        {
          name: "intermediate",
          label: "Intermediate",
          value: Math.round(
            (100 * patientsOverview.intermediateEnglishSpeakingPatients) /
              patientsOverview.totalPatients
          ),
        },
        {
          name: "advanced",
          label: "Advanced",
          value: Math.round(
            (100 * patientsOverview.advancedEnglishSpeakingPatients) /
              patientsOverview.totalPatients
          ),
        },
      ];

      return patientsOverviewChartsData;
    } else {
      return null;
    }
  }
);

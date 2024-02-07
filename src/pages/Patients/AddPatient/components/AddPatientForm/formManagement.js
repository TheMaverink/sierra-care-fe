import * as Yup from "yup";
import { setDefaults, fromLatLng } from "react-geocode";

setDefaults({
  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  language: "en",
  region: "us",
});

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  middleName: Yup.string(),
  lastName: Yup.string().required("Required"),
  dob: Yup.date().required("Required"),
  gender: Yup.string().required("Required"),
  isPregnant: Yup.boolean(),
  conceivingDate: Yup.date(),
  maritalStatus: Yup.string(),
  noOfChildren: Yup.number(),
  job: Yup.string(),
  income: Yup.string(),
  englishSpeakingLevel: Yup.number(),
  ownsMobilePhone: Yup.boolean().required("Required"),
  mobilePhone: Yup.string(),
  email: Yup.string().email("Invalid email"),
  locationCoordinates: Yup.object().required(
    "Location coordinates are required"
  ),
  locationCoordinatesFormatted:Yup.string(),
  doesLiveAtFetchedLocation: Yup.boolean().required("Required"),
  addressLocationCoordinates: Yup.object(),
  addressLocationCoordinatesFormatted: Yup.string(),
  bloodType: Yup.string(),
  healthRisk: Yup.number(),
});

export const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  noOfChildren: 0,
  job: "",
  income: "",
  englishSpeakingLevel: 0,
  ownsMobilePhone: false,
  mobilePhone: "",
  locationCoordinates: "",
  locationCoordinatesFormatted:"",
  addressLocationCoordinates: "",
  addressLocationCoordinatesFormatted: "",
  doesLiveAtFetchedLocation: true,
  isPregnant: false,
  conceivingDate: undefined,
  email: "",
  patientImages: [],
  bloodType: "",
  healthRisk: 0,
};

export const genderOptions = ["Female", "Male", "Other"];
export const maritalStatusOptions = [
  "Single",
  "Married",
  "Unknown",
  "Widowed",
  "Divorced",
];
export const bloodTypeOptions = ["A", "B", "AB", "O"];

export const handleGetLocation = async (formik) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;

        formik.setFieldValue("locationCoordinates", {
          lat: latitude,
          lng: longitude,
        });

        const result = await fromLatLng(latitude, longitude);



        formik.setFieldValue(
          "locationCoordinatesFormatted",
          result?.results[0]?.formatted_address
        );
      },
      (error) => {
        console.error("Error getting location:", error.message);
        // Handle errors, if needed
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    // Handle lack of Geolocation support, if needed
  }
};

export const englishSpeakingLevelsMarks = [
  {
    value: 1,
    label: "none",
  },
  {
    value: 2,
    label: "beginner",
  },
  {
    value: 3,
    label: "elementary",
  },
  {
    value: 4,
    label: "intermediate",
  },
  {
    value: 5,
    label: "advanced",
  },
];

export const healthRiskLevelsMarks = [
  {
    value: 0,
    label: "Unknown",
  },
  {
    value: 1,
    label: "Low Risk",
  },
  {
    value: 2,
    label: "Medium Risk",
  },
  {
    value: 3,
    label: "High Risk",
  },
];

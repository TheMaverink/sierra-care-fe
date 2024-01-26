import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  middleName: Yup.string(),
  lastName: Yup.string().required("Required"),
  // dob: Yup.date().required("Required"),
  gender: Yup.string().required("Required"),
  maritalStatus: Yup.string(),
  noOfChildren: Yup.number(),
  job: Yup.string(),
  income: Yup.string(),
  englishSpeakingLevel: Yup.number(),
  ownsMobilePhone: Yup.boolean().required("Required"),
  // mobilePhone: Yup.string().when("ownsMobilePhone", {
  //   is: true,
  //   then: Yup.string().required("Required"),
  //   otherwise: Yup.string(),
  // }),
  locationCoordinates: Yup.string(),
  address: Yup.string(),
  isPregnant: Yup.boolean(),
  // conceivingDate: Yup.date().when("isPregnant", {
  //   is: true,
  //   then: Yup.date().required("Required"),
  //   otherwise: Yup.date(),
  // }),
  email: Yup.string().email("Invalid email"),
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
  address: "",
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

export const handleGetLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
   
        const { latitude, longitude } = position.coords;
        // setFieldValue(field.name, { latitude, longitude });
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

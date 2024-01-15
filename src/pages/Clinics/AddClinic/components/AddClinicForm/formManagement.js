import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  address: Yup.string(),
  email: Yup.string().email("Invalid email"),
  phoneNumber: Yup.string(),
  managerName: Yup.string(),
  // numberMidwives: Yup.number(),
  approximatedMonthlyNumberPatients: Yup.string(),
  isPrivateClinic: Yup.boolean(),
  hasCleanWater: Yup.boolean(),
  hasSolarEnergy: Yup.boolean(),
});

export const initialValues = {
  name: "",
  address: "",
  email: "",
  phoneNumber: "",
  managerName: "",
  numberMidwives:"",
  approximatedMonthlyNumberPatients:"",
  isPrivateClinic: false,
  hasCleanWater: false,
  hasSolarEnergy: false,
};

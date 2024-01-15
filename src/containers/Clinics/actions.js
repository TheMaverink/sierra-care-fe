import { createAsyncThunk } from "@reduxjs/toolkit";
import { getClinicsApi, createClinicApi, getClinicApi } from "./api";

export const getClinicsAction = createAsyncThunk(
  "clinics/get",
  async (payload, { rejectWithValue }) => {
    try {
      const getClinicsApiResponse = await getClinicsApi(payload);

      console.log("getClinicsApiResponse");
      console.log(getClinicsApiResponse);

      return getClinicsApiResponse.data;
    } catch (error) {
      console.log("loginVolunteerAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const createClinicAction = createAsyncThunk(
  "clinics/new",
  async (payload, { rejectWithValue }) => {
    try {
      const createClinicApiResponse = await createClinicApi(payload);

      console.log("createClinicApiResponse");
      console.log(createClinicApiResponse);

      return createClinicApiResponse.data;
    } catch (error) {
      console.log("logoutVolunteerAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getClinicAction = createAsyncThunk(
  "clinic/getClinic",
  async (payload, { rejectWithValue }) => {
    try {
      const getClinicApiResponse = await getClinicApi(payload);

      console.log("getClinicApiResponse");
      console.log(getClinicApiResponse);

      return getClinicApiResponse.data;
    } catch (error) {
      console.log("getPatientsAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

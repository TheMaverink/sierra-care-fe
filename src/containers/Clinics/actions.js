import { createAsyncThunk } from "@reduxjs/toolkit";
import { getClinicsApi, createClinicApi } from "./api";

export const getClinicsAction = createAsyncThunk(
  "clinics/get",
  async (_, { rejectWithValue }) => {
    try {
      const getClinicsApiResponse = await getClinicsApi();

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

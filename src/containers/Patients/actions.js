import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPatientsApi } from "./api";

export const getPatientsAction = createAsyncThunk(
  "patients/get",
  async (payload, { rejectWithValue }) => {
    try {
      const getPatientsApiResponse = await getPatientsApi(payload);

      console.log("getPatientsApiResponse")
      console.log(getPatientsApiResponse)

      return getPatientsApiResponse.data;
    } catch (error) {
      console.log("getPatientsAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

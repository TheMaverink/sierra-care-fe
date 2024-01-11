import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getPatientsApi,
  createPatientApi,
  getPatientApi,
  getPatientsOverviewApi,
  createPatientLogApi,
} from "./api";

export const getPatientsAction = createAsyncThunk(
  "patients/get",
  async (payload, { rejectWithValue }) => {
    try {
      const getPatientsApiResponse = await getPatientsApi(payload);

      console.log("getPatientsApiResponse");
      console.log(getPatientsApiResponse);

      return getPatientsApiResponse.data;
    } catch (error) {
      console.log("getPatientsAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPatientAction = createAsyncThunk(
  "patients/getPatient",
  async (payload, { rejectWithValue }) => {
    try {
      const getPatientApiResponse = await getPatientApi(payload);

      console.log("getPatientApiResponse");
      console.log(getPatientApiResponse);

      return getPatientApiResponse.data;
    } catch (error) {
      console.log("getPatientsAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPatientAction = createAsyncThunk(
  "patients/create",
  async (payload, { rejectWithValue }) => {
    try {
      const createPatientApiResponse = await createPatientApi(payload);

      console.log("createPatientApiResponse");
      console.log(createPatientApiResponse);

      return createPatientApiResponse.data;
    } catch (error) {
      console.log("getPatientsAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPatientsOverviewAction = createAsyncThunk(
  "patients/overview",
  async (_, { rejectWithValue }) => {
    try {
      const getPatientsOverviewApiResponse = await getPatientsOverviewApi();

      console.log("getPatientsOverviewApiResponse");
      console.log(getPatientsOverviewApiResponse);

      return getPatientsOverviewApiResponse.data;
    } catch (error) {
      console.log("getPatientsAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPatientLogAction = createAsyncThunk(
  "patients/create_log",
  async (payload, { rejectWithValue }) => {
    try {
      const createPatientLogApiResponse = await createPatientLogApi(payload);

      console.log("createPatientLogApiResponse");
      console.log(createPatientLogApiResponse);

      return createPatientLogApiResponse.data;
    } catch (error) {
      console.log("getPatientsAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

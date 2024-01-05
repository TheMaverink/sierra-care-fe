import { createAsyncThunk } from "@reduxjs/toolkit";

import { volunteerLoginApi } from "./api";

export const loginVolunteerAction = createAsyncThunk(
  "volunteers/login",
  async (payload, { rejectWithValue }) => {
    try {
      const volunteerLoginApiResponse = await volunteerLoginApi(payload);
      
      if(volunteerLoginApiResponse?.data?.token){
        localStorage.setItem("token", volunteerLoginApiResponse.data.token);
        return volunteerLoginApiResponse.data;
      }else{
        return rejectWithValue("Something went wrong with the authentication");
      }
  
    } catch (error) {
      console.log("loginVolunteerAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutVolunteerAction = createAsyncThunk(
  "volunteers/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("token");
    } catch (error) {
      console.log("logoutVolunteerAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

const initialState = {
  volunteersList: null,
  //this volunteer
  thisVolunteer:null,
  isThisVolunteerAuthenticated:false,
  //misc
  isVolunteersReducerLoading: false,
};

export const VolunteersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
});

export default VolunteersSlice;

import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import {
  loginVolunteerAction,
  logoutVolunteerAction,
  isVolunteerLoggedInAction,
} from "./actions";

const initialState = {
  volunteersList: null,
  //this volunteer
  thisVolunteer: null,
  isThisVolunteerAuthenticated: false,
  //misc
  isVolunteersReducerLoading: false,
};

export const VolunteersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginVolunteerAction.pending, (state) => {
        state.isVolunteersReducerLoading = true;
        state.thisVolunteer = null;
        state.isThisVolunteerAuthenticated = false;
      })
      .addCase(loginVolunteerAction.rejected, (state) => {
        state.isVolunteersReducerLoading = false;
        state.thisVolunteer = null;
        state.isThisVolunteerAuthenticated = false;
      })
      .addCase(loginVolunteerAction.fulfilled, (state, action) => {
        state.isVolunteersReducerLoading = false;
        state.thisVolunteer = action.payload;
        state.isThisVolunteerAuthenticated = true;
      })
      .addCase(logoutVolunteerAction.pending, (state) => {
        state.isVolunteersReducerLoading = true;
      })
      .addCase(logoutVolunteerAction.rejected, (state) => {
        state.isVolunteersReducerLoading = false;
      })
      .addCase(logoutVolunteerAction.fulfilled, (state) => {
        state.isVolunteersReducerLoading = false;
        state.thisVolunteer = null;
        state.isThisVolunteerAuthenticated = false;
      })
      .addCase(isVolunteerLoggedInAction.pending, (state) => {
        state.isVolunteersReducerLoading = true;
      })
      .addCase(isVolunteerLoggedInAction.rejected, (state) => {
        state.isVolunteersReducerLoading = false;
      })
      .addCase(isVolunteerLoggedInAction.fulfilled, (state, action) => {

        state.isVolunteersReducerLoading = false;
        state.isThisVolunteerAuthenticated = action?.payload?.isVolunteerLoggedIn || false;
        state.thisVolunteer = action?.payload?.volunteer || null;
      });
  },
});

export default VolunteersSlice;

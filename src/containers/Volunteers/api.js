import axios from "config/api";

export const volunteerLoginApi = (volunteerData) =>
  axios.post("/volunteers/login", volunteerData);

export const isVolunteerLoggedInApi = () =>
  axios.get("/volunteers/isVolunteerLoggedIn");

export const getVolunteersOverviewApi = () => {
  return axios.get(`/volunteers/overview`);
};

export const createVolunteerApi = (payload) => {
  return axios.post(`/volunteers/new`, payload);
};

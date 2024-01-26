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

export const getVolunteersApi = (payload) => {
  const { page, limit, searchQuery, gender, role } = payload;

  const url = `/volunteers?page=${page}&limit=${limit}&searchQuery=${
    searchQuery || ""
  }&gender=${gender ? gender : "all"}&role=${role ? role : "all"}`;

  return axios.get(url);
};

export const getVolunteerApi = (payload) => {
  const url = `/volunteers/volunteer/${payload}`;
  return axios.get(url);
};

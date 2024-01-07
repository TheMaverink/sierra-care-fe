import axios from "config/api";

export const getPatientsApi = (payload) => {
  const { page, limit, searchQuery } = payload;

  const url = `/patients?page=${page}&limit=${limit}&searchQuery=${searchQuery}`;

  return axios.get(url);
};

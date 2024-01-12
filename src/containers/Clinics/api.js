import axios from "config/api";

export const getClinicsApi = (payload) => {
  const { page, limit, searchQuery } = payload;

  const url = `/clinics?page=${page}&limit=${limit}&searchQuery=${searchQuery}`;

  return axios.get(url);
};

export const createClinicApi = (payload) => {
  return axios.post(`/clinics/new`, payload);
};

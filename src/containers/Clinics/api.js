import axios from "config/api";

export const getClinicsApi = () => {
  return axios.get(`/clinics/`);
};

export const createClinicApi = (payload) => {
  return axios.post(`/clinics/new`, payload);
};

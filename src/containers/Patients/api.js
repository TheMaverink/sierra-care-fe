import axios from "config/api";

export const getPatientsApi = (payload) => {
  const { page, limit, searchQuery, gender, ageMin, ageMax } = payload;

  const url = `/patients?page=${page}&limit=${limit}&searchQuery=${searchQuery || ""}&gender=${
    gender ? gender : "all"
  }&ageMin=${ageMin ? ageMin : 0}&ageMax=${ageMax ? ageMax : 100}`;

  return axios.get(url);
};

export const createPatientApi = (patientData) => {
  return axios.post("/patients/new", patientData);
};

export const getPatientApi = (payload) => {
  const url = `/patients/patient/${payload}`;
  return axios.get(url);
};

export const getPatientsOverviewApi = () => {
  return axios.get(`/patients/overview`);
};

export const createPatientLogApi = (payload) => {
  return axios.post(`/patients/log/new`, payload);
};

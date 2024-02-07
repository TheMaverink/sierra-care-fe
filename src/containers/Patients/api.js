import axios from "config/api";

export const getPatientsApi = (payload) => {
  const { page, limit, searchQuery, gender, ageMin, ageMax } = payload;

  console.log("searchQuery")
  console.log(searchQuery)

  const encodedSearchQuery = encodeURIComponent(searchQuery);

  console.log("encodedSearchQuery")
  console.log(encodedSearchQuery)

  const url = `/patients?page=${page}&limit=${limit}&searchQuery=${encodedSearchQuery || ""}&gender=${
    gender ? gender : "all"
  }&ageMin=${ageMin ? ageMin : 0}&ageMax=${ageMax ? ageMax : 100}`;

  console.log("url")
  console.log(url)


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

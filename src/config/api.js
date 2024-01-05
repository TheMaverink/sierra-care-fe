import axios from "axios";

import { getEnvVars } from "./env";

const { BASE_API_URL } = getEnvVars();

const instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


// instance.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.status === 401) {
//       store.dispatch({ type: 'LOGOUT_ADMIN_REQUEST' })
//     }
//     return Promise.reject(err)
//   },
// )

export default instance;


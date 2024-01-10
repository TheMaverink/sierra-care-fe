import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";


import PatientsContainer from "containers/Patients";
import VolunteersContainer from "containers/Volunteers";
import ClinicsContainer from "containers/Clinics";
import MiscContainer from "containers/Misc";

const listenerMiddlewareInstance = createListenerMiddleware({
  onError: () => console.error,
});

// let middlewares = [listenerMiddlewareInstance];

// if (process.env.NODE_ENV === "development") {
//   middlewares = [logger];
// }

const store = configureStore({
  reducer: {
    [PatientsContainer.slice.name]: PatientsContainer.slice.reducer,
    [VolunteersContainer.slice.name]: VolunteersContainer.slice.reducer,
    [ClinicsContainer.slice.name]: ClinicsContainer.slice.reducer,
    [MiscContainer.slice.name]: MiscContainer.slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(middlewares),
    getDefaultMiddleware(),
});


export default store
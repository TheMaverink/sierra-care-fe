import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Nav from "parts/Nav";

import AppRouter from "components/AppRouter";

import LoginPage from "pages/Login";
import DashboardPage from "pages/Dashboard";
import ProfilePage from "pages/Profile";

import PatientsPage from "pages/Patients/Patients";
import PatientPage from "pages/Patients/Patient";
import ClinicsPage from "pages/Clinics/Clinics";
import ClinicPage from "pages/Clinics/Clinic";

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Nav />
        <div className="app-router-container">
 
          <AppRouter className="APP_ROUTER" />
        </div>

        {/* <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route exact path="/patients" element={<PatientsPage />} />
          <Route exact path="/clinics" element={<ClinicsPage />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

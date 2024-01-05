import React from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "parts/Nav";
import AppRouter from "components/AppRouter";

import { setAuthToken } from "utils/setAuthToken";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <BrowserRouter>
      <Nav />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

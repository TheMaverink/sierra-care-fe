import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Nav from "components/Nav";
import AppRouter from "components/AppRouter";

import { setAuthToken } from "utils/setAuthToken";
import { isThisVolunteerAuthenticatedSelector } from "containers/Volunteers/selectors";
import { isVolunteerLoggedInAction } from "containers/Volunteers/actions";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    dispatch(isVolunteerLoggedInAction());
  }, []);

  const isThisVolunteerAuthenticated = useSelector(
    isThisVolunteerAuthenticatedSelector
  );

  return (
    <BrowserRouter>
      {isThisVolunteerAuthenticated && <Nav />}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

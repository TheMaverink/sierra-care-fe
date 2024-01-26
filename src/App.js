import React from "react";
import styled from "styled-components";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "config/theme";

import AppRouter from "components/AppRouter";
import SideBar from "components/SideBar";
import Header from "components/Header";
import Nav from "components/Nav";

import { setAuthToken } from "utils/setAuthToken";
import { isThisVolunteerAuthenticatedSelector } from "containers/Volunteers/selectors";
import { isVolunteerLoggedInAction } from "containers/Volunteers/actions";

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    "sidebar header header header"
    "sidebar main main main";
  height: 100vh;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      "header"
      "main";
  }
`;

function App() {
  const dispatch = useDispatch();
  // const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = React.useState(true);

  const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false);

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
      <AppStyled className="app">
        <Header openSideBar={() => setOpenSidebarToggle(!openSidebarToggle)} />
        {isThisVolunteerAuthenticated && (
          <Nav openSideBar={() => setOpenSidebarToggle(!openSidebarToggle)} />
        )}

        <AppRouter />
      </AppStyled>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import pages from "pages";
import NotFound from "pages/NotFound";

import PageWrapper from "components/PageWrapper"

import { isAppLoadingSelector } from "containers/Misc/selectors";
import { isThisVolunteerAuthenticatedSelector } from "containers/Volunteers/selectors";

const AppRouter = (props) => {
  const isAuthenticated = useSelector(isThisVolunteerAuthenticatedSelector);
  const isAppLoading = useSelector(isAppLoadingSelector);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {Object.entries(pages).map((page) => {
        const pagePath = page[0].toLowerCase().replace(/page$/, "");
        const PageComponent = page[1];
        const routeId = `${pagePath}-route`;
        //TODO! fix this when refreshed into login, login works and doesnt redirect
        return pagePath === "login" ? (
          !isAuthenticated ? (
            <Route
              key={routeId}
              path={`/${pagePath}`}
              element={<PageWrapper><PageComponent /></PageWrapper>}
            />
          ) : (
            <Route
              key={routeId}
              path="*"
              element={<Navigate to="/dashboard" />}
            />
          )
        ) : !isAuthenticated && !isAppLoading ? (
          <Route key={routeId} path="*" element={<Navigate to="/login" />} />
        ) : (
          <Route
            key={routeId}
            path={`/${pagePath}`}
            element={<PageWrapper><PageComponent {...props} /></PageWrapper>}
          />
        );
      })}

      <Route key={"notFound"} path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

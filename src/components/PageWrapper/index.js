import React from "react";
import styled from "styled-components";

const PageWrapperStyled = styled.main`
  grid-area: main;
  border: 3px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PageWrapper = ({ children }) => {
  return <PageWrapperStyled>{children}</PageWrapperStyled>;
};

export default PageWrapper;

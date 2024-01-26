import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import {loginVolunteerAction} from "containers/Volunteers/actions"
// import {isThisVolunteerAuthenticatedSelector} from "containers/VolunteersSelectors"

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LoginForm = () => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await dispatch(loginVolunteerAction(values));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledLabel htmlFor="email">Email:</StyledLabel>
      <StyledInput
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <StyledLabel htmlFor="password">Password:</StyledLabel>
      <StyledInput
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
};

export default LoginForm;

import React from "react";
import styled from "styled-components";

import AddPatientForm from "./components/AddPatientForm";

const AddPatientPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5%;
  background-color: white;
`;

export default function AddPatientPage() {
  return (
    <AddPatientPageWrapper>
      <AddPatientForm />
    </AddPatientPageWrapper>
  );
}

import React from "react";
import styled from "styled-components";
import Card from "components/Card";

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 10px 0;
  width:100%;
`;

const Cards = ({ patientsOverview }) => {
  return (
    <CardsWrapper>
      {typeof patientsOverview?.totalPatients == "number" && (
        <Card
          value={patientsOverview?.totalPatients}
          description="Total patients"
        />
      )}
      {typeof patientsOverview?.patientsCreatedThisWeek == "number" && (
        <Card
          value={patientsOverview?.patientsCreatedThisWeek}
          description="New Patients this week"
        />
      )}
      {typeof patientsOverview?.patientsBornThisYear == "number" && (
        <Card
          value={patientsOverview?.patientsBornThisYear}
          description="Births this year"
        />
      )}
      {typeof patientsOverview?.patientsDeaths == "number" && (
        <Card
          value={patientsOverview?.patientsDeaths}
          description={"Deaths\nRecorded"}
        />
      )}
    </CardsWrapper>
  );
};

export default Cards;

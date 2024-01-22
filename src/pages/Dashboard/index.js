import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { getPatientsOverviewAction } from "containers/Patients/actions";
import { getVolunteersOverviewAction } from "containers/Volunteers/actions";

import {
  patientsOverviewSelector,
  patientsOverviewChartsDataSelector,
} from "containers/Patients/selectors";
import { volunteersOverviewSelector } from "containers/Volunteers/selectors";

import Cards from "./components/Cards";
import Charts from "./components/Charts";

const DashboardPageWrapper = styled.div``;

export default function DashboardPage() {
  const dispatch = useDispatch();

  const patientsOverview = useSelector(patientsOverviewSelector);
  const patientsOverviewChartsData = useSelector(
    patientsOverviewChartsDataSelector
  );

  const volunteersOverview = useSelector(volunteersOverviewSelector);

  React.useEffect(() => {
    dispatch(getPatientsOverviewAction());
    dispatch(getVolunteersOverviewAction());
  }, []);

  React.useEffect(() => {
    console.log("patientsOverview");
    console.log(patientsOverview);
    // console.log("volunteersOverview");
    // console.log(volunteersOverview);
    // console.log("patientsOverviewChartsData");
    // console.log(patientsOverviewChartsData);
    // console.log("patientsOverview?.patientsBornThisYear");
    // console.log(patientsOverview?.patientsBornThisYear);
  }, [patientsOverview, volunteersOverview, patientsOverviewChartsData]);

  return (
    <>
      <Cards patientsOverview={patientsOverview} />
      <Charts patientsOverviewChartsData={patientsOverviewChartsData}></Charts>
    </>

    //PIE chart with sexes
    //cards X new patients this week
    // Counter for “births this year”
    // Counter for “complications/deaths”
    //I’m thinking a bar chart showing age groups <18, 18-25, 25-35 etc etc

    //Pie Chart of English speakers
    //Pie chart showing mobile phone access (needs adjusting data from jotform)

    // FOR LATER
    // Horizontal Bar chart to show medical conditions (we don’t have exact definitions yet but there is medical names for the complications)
    //linear chart patients overtime
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPatientsOverviewAction } from "containers/Patients/actions";
import { getVolunteersOverviewAction } from "containers/Volunteers/actions";

import {
  patientsOverviewSelector,
  patientsOverviewChartsDataSelector,
} from "containers/Patients/selectors";
import { volunteersOverviewSelector } from "containers/Volunteers/selectors";

import Card from "components/Card";
import AgesChart from "./components/charts/AgesChart";
import MobilePhoneAccessChart from "./components/charts/MobilePhoneAccessChart";
import EnglishLevelChart from "./components/charts/EnglishLevelChart";

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
    <div>
      {typeof patientsOverview?.totalPatients == "number" && (
        <Card
          value={patientsOverview?.totalPatients}
          description="Total patients"
        />
      )}

      {typeof patientsOverview?.patientsCreatedThisWeek == "number" && (
        <Card
          value={patientsOverview?.patientsCreatedThisWeek}
          description="Patients created this week"
        />
      )}

      {typeof patientsOverview?.patientsBornThisYear == "number" && (
        <Card
          value={patientsOverview?.patientsBornThisYear}
          description="births this year"
        />
      )}

      {typeof patientsOverview?.patientsDeaths == "number" && (
        <Card value={patientsOverview?.patientsDeaths} description="deaths" />
      )}

      {patientsOverviewChartsData?.ages && (
        <AgesChart data={patientsOverviewChartsData?.ages} />
      )}

      {patientsOverviewChartsData?.mobilePhoneAccess && (
        <MobilePhoneAccessChart
          data={patientsOverviewChartsData?.mobilePhoneAccess}
        />
      )}

      {patientsOverviewChartsData?.englishLevel && (
        <EnglishLevelChart data={patientsOverviewChartsData?.englishLevel} />
      )}
    </div>

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

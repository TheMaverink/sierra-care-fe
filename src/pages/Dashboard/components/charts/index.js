import React from "react";
import styled from "styled-components";

import AgesChart from "./AgesChart";
import MobilePhoneAccessChart from "./MobilePhoneAccessChart";
import EnglishLevelChart from "./EnglishLevelChart";

const ChartsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  margin: 10px 0;
  border: 1px solid orange;
  width: 100%;
  height:100%;
`;

export default function Charts({ patientsOverviewChartsData }) {
  return (
    <ChartsWrapper>
      {patientsOverviewChartsData?.ages && (
        <AgesChart data={patientsOverviewChartsData?.ages} />
      )}

      {patientsOverviewChartsData?.englishLevel && (
        <EnglishLevelChart data={patientsOverviewChartsData?.englishLevel} />
      )}

      {patientsOverviewChartsData?.mobilePhoneAccess && (
        <MobilePhoneAccessChart
          data={patientsOverviewChartsData?.mobilePhoneAccess}
        />
      )}
    </ChartsWrapper>
  );
}

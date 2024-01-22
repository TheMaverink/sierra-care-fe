import React from "react";
import styled from "styled-components"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AgesChartWrapper = styled.div`

/* grid-column: 0 / 3; */
  /* grid-row: third-line / 4; */

  grid-column-start:1;
grid-column-end:3;
/* grid-row-start
grid-row-end */

`

export default function AgesChart(props) {
  const { data } = props;

  return (
    <AgesChartWrapper>
    <ResponsiveContainer >
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="data" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </AgesChartWrapper>
  );
}

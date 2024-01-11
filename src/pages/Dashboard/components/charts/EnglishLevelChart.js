import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

// const data = [
//   { name: "Group A", value: 400,label:"label test" },
//   { name: "Group B", value: 300,label:"label test" },
//   { name: "Group C", value: 300,label:"label test" },
//   { name: "Group D", value: 200,label:"label test" },
// ];

const COLORS = [
  "#0088FE",
  "#00C393",
  "#02C41F",
  "#10C492",
  "#55C494",
  "#40C11F",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, index,label } = props;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {label}
    </text>
  );
};
export default function EnglishLevelChart(props) {
  const { data,label } = props;

  React.useEffect(() => {
    console.log("WQK!!");
    console.log(props);
  }, [props]);
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

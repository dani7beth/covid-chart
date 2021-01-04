import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { province: "Alabama", deaths: 300, confirmed: 456 },
  { province: "Kansas", deaths: 400, confirmed: 230 },
  { province: "Texas", deaths: 600, confirmed: 345 },
  { province: "Texas", deaths: 100, confirmed: 5 },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/mc8r7e6p/";

  render() {
    return (
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
        <XAxis dataKey="province" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="province" height={30} stroke="#8884d8" />
        <Bar dataKey="deaths" fill="#ff5252" />
        <Bar dataKey="confirmed" fill="#82ca9d" />
      </BarChart>
    );
  }
}

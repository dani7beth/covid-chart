import axios from "axios";
import { useEffect, useState } from "react";
import { USData } from "./hardCodedData";
import { normalizeData } from "./format.js";
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

const options = {
  method: "GET",
  url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
  params: { country: "US" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  },
};

const CovidChart = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.covid19Stats);
        let formatedData = normalizeData(response.data.data.covid19Stats);
        let sortedData = formatedData.sort((a, b) => b.confirmed - a.confirmed);
        setChartData(sortedData);
      })
      .catch(function (error) {
        console.error(error);
        setChartData(USData);
      });
  }, []);

  return (
    <div>
      <h3>Stats</h3>
      <BarChart
        width={500}
        height={300}
        data={chartData}
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
    </div>
  );
};
export default CovidChart;

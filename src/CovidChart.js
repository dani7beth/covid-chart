import axios from "axios";
import { useEffect, useState } from "react";
import { USData } from "./hardCodedData";

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
        setChartData(response.data.data.covid19Stats);
      })
      .catch(function (error) {
        console.error(error);
        setChartData(USData);
      });
  }, []);

  return (
    <div>
      <h1>Stats</h1>
      <p>{chartData.length}</p>
    </div>
  );
};
export default CovidChart;

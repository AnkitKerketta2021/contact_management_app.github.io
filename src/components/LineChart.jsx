import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [apiDatas, setapiDatas] = useState();
  const [lineData, setlineData] = useState([]);
  const [sortedData, setsortedData] = useState();
  const [demoData, setdemoData] = useState([
    557, 657, 944, 1437, 2120, 2929, 5580, 6169, 8237, 9927,
  ]);
  const [lineChartData, setlineChartData] = useState({
    series: [
      {
        name: "Cases",
        data: sortedData ? sortedData : demoData,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Covid-19 cases fluctuations per month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  });

  // ! =============================== Fetch API Data ===============================

  const fetchApiData = async () =>
    await axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        setapiDatas(res.data.cases);
        setlineData(Object.values(res.data.cases));
      })
      .catch((err) => console.log(err.message));
  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    setsortedData(lineData.splice(0, 10));
  }, [lineData]);

  return (
    sortedData && (
      <div>
        <div id="chart">
          <ReactApexChart
            options={lineChartData.options}
            series={lineChartData.series}
            type="line"
            height={350}
          />
        </div>
      </div>
    )
  );
};

export default LineChart;

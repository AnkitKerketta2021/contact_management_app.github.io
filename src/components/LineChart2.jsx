import React, { useEffect, useState } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


const LineChart2 = () => {

  const [cases, setcases] = useState()
  const [deaths, setdeaths] = useState()
  const [recovered, setrecovered] = useState();
  const [graphLabel, setgraphLabel] = useState([]);


     // ! ======================================= API CALL =======================================
  let fetchApi = async() => {
    try {
      let data = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      setcases(Object.values(data.data.cases).slice(0,100));
      setdeaths(Object.values(data.data.deaths).slice(0,100));
      setrecovered(Object.values(data.data.recovered).slice(0,100));
      setgraphLabel(Object.keys(data.data.cases).slice(0,100))
    } catch (error) {
      console.log("ERROR---->", error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  let labels = graphLabel;
  const data = {
  labels,
  datasets: [
    {
      label: 'Cases',
      data: cases,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Deaths',
      data: deaths,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Recovered',
      data: recovered,
      borderColor: 'rgb(43, 102, 5)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default LineChart2
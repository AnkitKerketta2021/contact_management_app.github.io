/* import { json } from "react-router-dom";

let data1 = [];
let data2 = [];
let num1 = 10;

const apiData = async () => {
  await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  ).then((res) => data1.push(Object.values(JSON.parse(res.cases))));

  for (let index = 0; index < num1; index++) {
    data2.push(data1[index + 2]);
  }
};
export { data1, data2, apiData };
 */
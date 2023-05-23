import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import LineChart from "../components/LineChart";
import axios from "axios";

const ChartsAndMaps = () => {
  const [apiData, setapiData] = useState([]);
  const [state, setstate] = useState([]);

  const fetchApiData = async () =>
    await axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        setapiData(res.data);
        for (let index = 0; index < res.data.length; index++) {
          let data = [];
          data.push({
            countryName: res[index].country,
            activeCases: res[index].active,
            recovered: res[index].recovered,
            death: res[index].deaths,
          });
          setstate(data);
        }
      })
      .catch((err) => console.log(err.message));
  useEffect(() => {
    fetchApiData();
  }, []);

  // useEffect(() => {
  //   for (let index = 0; index < apiData.length; index++) {
  //     apiData.map((val, index) => {
  //       let data = {
  //         countryName: val.country,
  //         activeCases: val.active,
  //         recovered: val.recovered,
  //         death: val.deaths,
  //       };
  //       setstate(data);
  //     });
  //   }
  // }, [apiData]);


  const markers = [
    {
      geocode: [38.54, -97],
      popUp: "United State",
      activeCases:804795,
      recovered:105074558,
      death:1164351,
      imgUrl:'https://disease.sh/assets/img/flags/us.png'
    },
    {
      geocode: [36, 138],
      popUp: "Japan",
      activeCases:33728878,
      recovered:0,
      death:74694,
      imgUrl:'https://disease.sh/assets/img/flags/jp.png'
    },
    {
      geocode: [35, 105],
      popUp: "China",
      activeCases:118977,
      recovered:379053,
      death:5272,
      imgUrl:'https://disease.sh/assets/img/flags/cn.png'
    },
    {
      geocode: [60, 100],
      popUp: "Russia",
      activeCases:172124,
      recovered:22346830,
      death:398919,
      imgUrl:'https://disease.sh/assets/img/flags/ru.png'
    },
    {
      geocode: [20, 77],
      popUp: "India",
      activeCases:7104,
      recovered:44448392,
      death:531843,
      imgUrl:'https://disease.sh/assets/img/flags/in.png'
    },
    {
      geocode: [9, 7],
      popUp: "Nigeria",
      activeCases:3567,
      recovered:259953,
      death:3155,
      imgUrl:'https://disease.sh/assets/img/flags/ng.png'
    },
  ];
  const customIcon = new Icon({
    iconUrl:
      "https://png.pngtree.com/png-clipart/20220131/original/pngtree-3d-pin-map-marker-location-front-view-png-image_7249831.png",
    iconSize: [38, 38],
  });
  return (
    <div className="text-center">
      <h3 className="mt-12">CHARTS AND MAPS</h3>

      <LineChart />
      <br />
      <br />

      <MapContainer
        className="h-[70vh] w-[65vw] mx-10 lg:w-[60vw] lg:h-[70vh] sm:h-[200px]"
        center={[12.9716, 77.5946]}
        zoom={2}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <div>
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>
                <img src={marker.imgUrl} alt="" />
                <br />
                <h4>{marker.popUp}</h4>
                <br />
                <span>Active cases: {marker.activeCases}</span>
                <br />
                <span>Recovered: {marker.recovered}</span>
                <br />
                <span>Death: {marker.death}</span>
                <br />
              </Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>
    </div>
  );
};

export default ChartsAndMaps;

import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import axios from "axios";
import LineChart2 from "../components/LineChart2";

const ChartsAndMaps = () => {
  const [apiData, setapiData] = useState([]);
  const [state, setstate] = useState([]);

  // ! ======================================= API CALL =======================================
  const fetchApiData = async () => {
    try {
      let data = await axios.get("https://disease.sh/v3/covid-19/countries");
      setapiData(data.data);
    } catch (error) {
      console.log("ERROR---->", error.message);
    }
  };
console.log(apiData,"DATA");
  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    apiData.map((val, index) => {
      let data1 = {
      geocode: [val.countryInfo.lat, val.countryInfo.long],
      popUp: val.country,
      activeCases: val.active,
      recovered: val.recovered,
      death: val.deaths,
      imgUrl: val.countryInfo.flag,
    }
        
        state.push(data1)
      
    });
  }, [apiData]);

console.log(state,"SSSSS");
  const markers = state
  const customIcon = new Icon({
    iconUrl:
      "https://png.pngtree.com/png-clipart/20220131/original/pngtree-3d-pin-map-marker-location-front-view-png-image_7249831.png",
    iconSize: [38, 38],
  });
  return (
    <div className="text-center">
      <h3 className="mt-12">CHARTS AND MAPS</h3>

      <br />
      <br />
      <hr />
      <LineChart2 />
      <hr />
      <br />
      <br />

      <MapContainer
        className="h-[70vh] w-[65vw] mx-10 lg:w-[60vw] lg:h-[70vh] sm:h-[200px]"
        center={[7, 77]}
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

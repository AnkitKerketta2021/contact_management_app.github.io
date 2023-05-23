import React from "react";
import { Route, Routes, useLocation, useParams} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import SideNavigationBar from "./navbars/SideNavigationBar";
import ChartsAndMaps from "./pages/ChartsAndMaps";

const RouterComp = () => {
  let path = useLocation()
  let urlPath = path.pathname.split('/')
  return (
    <div className="flex">
    <SideNavigationBar/>
    <div className="grid">
    <header className="relative top-0 text-center">
     {urlPath[1]=="mapsandcharts"?<h1>Charts and Maps</h1>:<h1>Contact Page</h1>}
    </header>
      <div>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/mapsandcharts" element={<ChartsAndMaps />} />
      </Routes>
      </div>
    </div>
    </div>
  );
};

export default RouterComp;

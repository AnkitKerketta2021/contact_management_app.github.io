import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./sideBar.css"

function SideNavigationBar() {
    const [displaySideBar, setdisplaySideBar] = useState(false);
  return (
    <div className="sidebar">
     {displaySideBar? <Sidebar>
        <Menu 
        className="sideMenu fixed top-1 left-3"
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
                gap:'2px'
              },
            },
          }}
        >
          <h4>Contact Management App</h4>
          <MenuItem component={<Link to="/" />}> Contact</MenuItem>
          <MenuItem component={<Link to="/mapsandcharts" />}> Maps & Charts</MenuItem>
          <MenuItem className="relative -bottom-24" onClick={()=>setdisplaySideBar(false)}> Close Menu</MenuItem>
        </Menu>
      </Sidebar>: <Menu className="w-[120px] m-2 sticky top-1" onClick={()=>setdisplaySideBar(true)}><MenuItem className="bg-slate-100 rounded-md" component={<Link  />}> Sidebar</MenuItem></Menu>}
    </div>
  );
}

export default SideNavigationBar;

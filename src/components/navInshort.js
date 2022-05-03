import React from "react";
import "./navInshort.css";
import HamburgerDrawer from "./hamburgerDrawer";

const NavInshort = ({setCategory}) => {
  return (
    <div className="nav">
      <div className="menu">
          <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="logo"
      />
    </div>
  );
};

export default NavInshort;
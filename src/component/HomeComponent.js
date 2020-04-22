import React, { useState } from "react";
import { Media } from "reactstrap";
import NavBar from "./NavBar.js";
import Search from "./SearchComponent.js";
import { baseUrl } from "../shared/BaseUrl.js";

const HomeComponent = (props) => {
  return (
    <div>
      <NavBar />
      <div className="logo">
        <Media>
          <Media src={baseUrl + "images/logo.png"} alt="logo" />
        </Media>
        <div className="search">
          <Search appList={props.appList} />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;

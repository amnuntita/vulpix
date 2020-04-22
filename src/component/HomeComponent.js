import React, { useState } from "react";
import { Media } from "reactstrap";
import NavBar from "./NavBar.js";
import { baseUrl } from "../shared/BaseUrl.js";

const HomeComponent = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Media className="logo">
          <Media src={baseUrl + "images/logo_transparent.png"} alt="logo" />
        </Media>
      </div>
    </div>
  );
};

export default HomeComponent;

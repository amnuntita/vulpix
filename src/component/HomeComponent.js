import React, { useState } from "react";
import { Media } from "reactstrap";
import NavBar from "./NavBar.js";
import Search from "./SearchComponent.js";
import { baseUrl } from "../shared/BaseUrl.js";
import { logDOM } from "@testing-library/react";

const HomeComponent = (props) => {
  return (
    <div>
      <NavBar />
      <div className="logo">
        <Media>
          <Media src={baseUrl + "public/logo.png"} alt="vulpix" />
        </Media>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default HomeComponent;

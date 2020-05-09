import React, { useState, useEffect, Component } from "react";
import SideBar from "./SideBar.js";
import AppDetail from "./AppDetail.js";
import AppScore from "./AppScore.js";
import { baseUrl } from "../shared/BaseUrl.js";

const AppDisplay = (props) => {
  return (
    <div>
      <SideBar />
      <div className="row">
        <AppDetail select={props.select} />
      </div>
      <div className="row">
        <AppScore appId={props.select} cat="Device" />
      </div>
    </div>
  );
};

export default AppDisplay;

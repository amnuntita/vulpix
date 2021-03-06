import React from "react";

import AppDetail from "./AppDetail.js";
import AppScore from "./AppScore.js";

const AppDisplay = ({ select }) => {
  return (
    <div>
      <div style={{ fontFamily: "Nunito" }}>
        <div className="row">
          <AppDetail select={select} />
        </div>
        <div className="appcard col-11 col-md-5" style={{ fontSize: 26 }}>
          VULPIX analysis - detected leaked information
        </div>
        <div className="row">
          <AppScore appId={select} cat="Device" />
        </div>
        <div className="row">
          <AppScore appId={select} cat="Simcard" />
        </div>
        <div className="row">
          <AppScore appId={select} cat="User" />
        </div>
        <div className="row">
          <AppScore appId={select} cat="Media" />
        </div>
        <div className="row">
          <AppScore appId={select} cat="Location" />
        </div>
      </div>
    </div>
  );
};

export default AppDisplay;

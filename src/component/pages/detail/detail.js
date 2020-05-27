import React from "react";
import AppDesc from "./AppDesc.js";
import AppScore from "./AppScore.js";

const AppDisplay = (props) => {
  return (
    <div>
      <div style={{ fontFamily: "Nunito" }}>
        <div className="row">
          <AppDesc select={props.select} />
        </div>
        <div className="appcard col-11 col-md-5" style={{ fontSize: 26 }}>
          VULPIX analysis - detected leaked information
        </div>
        <div className="row">
          <AppScore appId={props.select} cat="Device" />
        </div>
        <div className="row">
          <AppScore appId={props.select} cat="Simcard" />
        </div>
        <div className="row">
          <AppScore appId={props.select} cat="User" />
        </div>
        <div className="row">
          <AppScore appId={props.select} cat="Media" />
        </div>
        <div className="row">
          <AppScore appId={props.select} cat="Location" />
        </div>
      </div>
    </div>
  );
};

export default AppDisplay;

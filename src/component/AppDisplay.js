import React, { useState, useEffect, Component } from "react";
import SideBar from "./SideBar.js";
import NavBar from "./NavBar.js";
import AppDetail from "./AppDetail.js";
import AppScore from "./AppScore.js";
import { baseUrl } from "../shared/BaseUrl.js";

const AppDisplay = (props) => {
  return (
    <div>
      <SideBar />

      <div style={{ fontFamily: "Nunito" }}>
        <div className="row">
          <AppDetail select={props.select} />
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

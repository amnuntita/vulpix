import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Media,
  Col,
  Row,
} from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";

const AppDetail = (props) => {
  const [app, setApp] = useState(false);
  const [appTitle, setTitle] = useState("");
  const [appDev, setDev] = useState("");
  const [appIcon, setIcon] = useState("");
  const [appRating, setRating] = useState("");
  const [appDownload, setDownload] = useState("");
  const [appDesc, setDesc] = useState("");
  const appId = props.select;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(baseUrl + "api/apps/" + appId);
      res
        .json()
        .then((res) => setApp(res))
        .then(setTitle(app.title))
        .then(setDev(app.developerId))
        .then(setIcon(app.icon))
        .then(setRating(app.scoreText))
        .then(setDownload(app.installs));
    }
    fetchData();
  });

  const number = (p, text) => {
    //console.log(p);
    return (
      <div className="col-sm box">
        {p}
        <div style={{ fontSize: 20, textAlign: "center" }}>{text}</div>
      </div>
    );
  };

  return (
    <div className="appcard col-11 col-md-5">
      <Card>
        <CardBody>
          <div className="row">
            <Media left className="icon">
              <Media src={appIcon} alt="Generic placeholder image" />
            </Media>
            <div className="col">
              <CardTitle>
                <h1>{appTitle}</h1>
              </CardTitle>
              <CardSubtitle>Developer: {appDev}</CardSubtitle>
              <CardText style={{ marginTop: 2 }}>{appDesc}</CardText>
            </div>
          </div>
          <div className="row">
            {number(appDownload, "download")}
            {number(appRating, "rating")}
            {number(59, "VULPIX score")}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AppDetail;

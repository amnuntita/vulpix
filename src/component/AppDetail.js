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
  const [appDev, setDev] = useState("");
  const [devName, setDevName] = useState("");
  const [appId, setId] = useState("");
  useEffect(() => {
    setId(props.select);
    async function fetchData() {
      const res = await fetch(baseUrl + "api/apps/" + appId);
      res
        .json()
        .then((res) => setApp(res))
        .then(setDev(app.developer));
    }
    fetchData();
    if (appDev) {
      setDevName(appDev.devId);
    }
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
              <Media src={app.icon} alt="Generic placeholder image" />
            </Media>
            <div className="col">
              <CardTitle>
                <h1>{app.title}</h1>
              </CardTitle>
              <CardSubtitle>Developer: {devName}</CardSubtitle>
            </div>
          </div>
          <div className="row">
            {number(app.installs, "download")}
            {number(app.scoreText, "rating")}
            {number(59, "VULPIX score")}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AppDetail;

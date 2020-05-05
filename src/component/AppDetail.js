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
  const appId = props.select;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(baseUrl + "api/apps/" + appId);
      res
        .json()
        .then((res) => {
          setApp(res);
          return res;
        })
        .then((app) => {
          setDev(app.developer);
        });
    }
    fetchData();
  }, []);

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
              <CardTitle style={{ fontSize: 32 }}>{app.title}</CardTitle>
              <CardSubtitle>Developer:{appDev.devId}</CardSubtitle>
              <CardText style={{ marginTop: 2 }}>
                Description: {app.summary}
              </CardText>
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

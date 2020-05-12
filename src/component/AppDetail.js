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
import { Link } from "react-router-dom";

const AppDetail = (props) => {
  const [app, setApp] = useState(false);
  const appId = props.select;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(baseUrl + "app/" + appId);
      res
        .json()
        .then((res) => {
          setApp(res[0]);
          return res;
        })
        .then((res) => console.log(appId));
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
              <CardSubtitle>
                <b>Developer:</b> {app.dev}
              </CardSubtitle>
              <CardText>
                <b>Category: </b> {app.cat}
              </CardText>
              <CardText>
                <b>Description: </b> {app.desc}
              </CardText>
              <CardText>
                <b>Privacy Policy: </b> <a href={app.policy}>{app.policy}</a>
              </CardText>
            </div>
          </div>
          <div className="row">
            {number(app.download, "download")}
            {number(app.rating, "rating")}
            {number(59, "VULPIX score")}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AppDetail;

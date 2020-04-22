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

const AppDetail = (props) => {
  const [appName, setName] = useState("");
  const [appDev, setDev] = useState("");
  const [appIcon, setIcon] = useState("");
  const [appRating, setRating] = useState("");
  const [appDownload, setDownload] = useState("");
  const [appDesc, setDesc] = useState("");
  const appList = props.appList;
  const select = props.select;
  useEffect(() => {
    const name = () => {
      const app = appList[select];
      if (app) {
        setName("Application");
        setDev(app.developer);
        setIcon(app.icon);
        setRating(app.rating);
        setDownload(app.downloads);
        setDesc(app.short_desc);
      }
    };
    name();
  });

  console.log(appDownload);

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
                <h1>{appName}</h1>
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

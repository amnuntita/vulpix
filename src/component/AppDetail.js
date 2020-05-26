import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Media,
} from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";

const numStyle = {
  fontSize: 30,
  marginTop: 20,
};
const lnumStyle = {
  fontSize: 20,
  marginTop: 30,
};
const scoreStyle = {
  fontSize: 30,
  marginTop: 30,
};
const vStyle = {
  borderColor: "#0000a0",
  borderWidth: 1,
  backgroundColor: "#FFD801",
};

const AppDetail = (props) => {
  const [app, setApp] = useState(false);
  const appId = props.select;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/app/" + appId);
      res.json().then((res) => {
        setApp(res.rows[0]);
        return res;
      });
    }
    fetchData();
  }, [appId]);

  const number = (p, text) => {
    //console.log(p);
    var long = false;
    if (app.download && text == "Download" && app.download.length > 4) {
      var num = app.download.split(",")[0];
      if (app.download.length > 13) {
        var num = num.concat(app.download.split(",")[1]);
        var long = true;
      }
      if (app.download.length > 8) num = num.concat("M+");
      else num = num.concat("K+");
    } else {
      var num = p;
    }
    return (
      <div className="col-sm">
        <div className="box">
          <div style={long ? lnumStyle : numStyle}>{num}</div>
          {text}
        </div>
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
                <h>{app.title}</h>
              </CardTitle>
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
          <hr />
          <div className="row">
            {number(app.download, "Download")}
            {number(app.rating, "Rating")}
            <div className="col-sm">
              <div className="box" style={vStyle}>
                <div style={scoreStyle}>32</div>
                <div style={{ fontSize: 15 }}>VULPIX score</div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AppDetail;

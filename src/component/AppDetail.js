import React, { useState, useEffect } from "react";
import { baseUrl } from "../shared/BaseUrl.js";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Media,
} from "reactstrap";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Put out of Component to avoid unneed re-create every rerender time
// Or create out of this file, then import
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
    (async () => {
      let res = await fetch(`${baseUrl}app/${appId}`);
      res = await res.json();
      setApp(res[0]);
      // console.log(res);
    })();
  }, [appId]);

  // var should have been un used nowadays, use const, or let instead
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

  // Do not use 'div' too much, Not good
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
                <strong>Developer:</strong> {app.dev}
              </CardSubtitle>
              <CardText>
                <strong>Category: </strong> {app.cat}
                <br />
                <strong>Description: </strong> {app.desc}
                <br />
                <strong>Privacy Policy: </strong>{" "}
                <a href={app.policy}>{app.policy}</a>
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

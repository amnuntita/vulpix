import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Row,
  Media,
} from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";

const AppScore = (props) => {
  const [vulList, setList] = useState([]);
  const [res, setRes] = useState();
  const apk = baseUrl + "res?appId=" + props.appId + ".apk&q=" + props.cat;
  const cat = props.cat == "Media" ? "Media and Device Usage" : props.cat;

  useEffect(() => {
    async function fetchVul() {
      const res = await fetch(apk);
      res
        .json()
        .then((res) => {
          setList(res);
          return vulList;
        })
        .then((vulList) => {
          setRes(vulList[0]);
        });
    }

    fetchVul();
  }, [props]);

  function DisplayPI({ PI, leak }) {
    if (leak) {
      return (
        <div className="leakbox">
          <div
            className="col-md-2 col-5 picon"
            style={({ marginLeft: 0 }, { marginRight: 0 }, { marginTop: 4 })}
          >
            <Media src={baseUrl + "public/icon/" + PI + ".png"} />
          </div>
          <div className="smalltext">{PI}</div>
        </div>
      );
    } else {
      return (
        <div className="ibox">
          <div
            className="col-md-2 col-5 picon"
            style={
              ({ marginLeft: 0 },
              { marginRight: 0 },
              { marginTop: 4 },
              { opacity: 0.2 })
            }
          >
            <Media src={baseUrl + "public/icon/" + PI + ".png"} />
          </div>
          <div className="smalltext">{PI}</div>
        </div>
      );
    }
  }

  const DisplayIcon = (vulList) => {
    if (vulList.length == 0) {
      return (
        <Col>
          <CardText style={{ textAlign: "center" }}>
            ----- No VULPIX result for this app -----
          </CardText>
        </Col>
      );
    } else {
      return (
        <div className="row" style={{ marginLeft: 30 }}>
          {Object.keys(vulList[0]).map((k) => {
            if (k != "title") {
              return <DisplayPI PI={k} leak={vulList[0][k]} />;
            }
          })}
        </div>
      );
    }
  };

  return (
    <div className="appcard col-11 col-md-5">
      <Card>
        <CardBody>
          <div className="row">
            <CardTitle className="cat">{cat}</CardTitle>
          </div>
          <hr />
          {DisplayIcon(vulList)}
        </CardBody>
      </Card>
    </div>
  );
};

export default AppScore;

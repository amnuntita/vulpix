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
  const apk = baseUrl + "res/" + props.appId + ".apk/" + props.cat;

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

  function DisplayPI({ PI }) {
    return (
      <div className="col-md-3" style={({ marginLeft: 2 }, { marginRight: 2 })}>
        <Media src={baseUrl + "public/icon/" + PI + ".png"} />
      </div>
    );
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
        <div className="row">
          {Object.keys(vulList[0]).map((k) => {
            console.log(k);
            return <DisplayPI PI={k} />;
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
            <CardTitle style={{ fontSize: 24 }}>{props.cat}</CardTitle>
          </div>
          {DisplayIcon(vulList)}
        </CardBody>
      </Card>
    </div>
  );
};

export default AppScore;

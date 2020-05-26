import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Col, Media } from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";

const AppScore = (props) => {
  const [vulList, setList] = useState([]);
  //const [res, setRes] = useState();
  const apk = "/" + props.cat + "/" + props.appId;
  const cat = props.cat === "Media" ? "Media and Device Usage" : props.cat;

  useEffect(() => {
    async function fetchVul() {
      const res = await fetch(apk);
      res
        .json()
        .then((res) => {
          setList(res.rows[0]);
          return vulList;
        })
        .then((vulList) => {
          console.log(vulList);
        });
    }

    fetchVul();
  }, [props.appId]);

  function DisplayPI({ PI, leak }) {
    return (
      <div className={leak ? "leakbox" : "ibox"}>
        <div className="col-md-2 col-5 picon">
          <Media src={baseUrl + "public/icon/" + PI + ".png"} />
        </div>
        <div className="smalltext">{PI.split("_").join(" ")}</div>
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
        <div className="row" style={{ marginLeft: 30 }}>
          {Object.keys(vulList).map((k) => {
            if (k != "title") {
              return <DisplayPI PI={k} leak={parseInt(vulList[k])} />;
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
          <div>{DisplayIcon(vulList)}</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AppScore;

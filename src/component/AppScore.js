import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";

const AppScore = (props) => {
  const [vulList, setList] = useState([]);
  const apk = baseUrl + "res/" + props.appId + ".apk";

  useEffect(() => {
    async function fetchVul() {
      const res = await fetch(apk);
      res.json().then((res) => {
        setList(res);
        return res;
      });
    }

    fetchVul();
  }, []);

  return <div></div>;
};

export default AppScore;

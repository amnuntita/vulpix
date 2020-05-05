import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
  CardImg,
  CardText,
  Media,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/BaseUrl.js";

const ResultComponent = (props) => {
  const [qres, setRes] = useState("");
  const [resList, setList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(baseUrl + "api/apps?q=twitter");
      res.json().then((res) => setRes(res));
    }
    fetchData();
    if (qres) {
      setList(qres.results);
    }
  }, [qres]);

  return <div>{JSON.stringify(resList)}</div>;
};

export default ResultComponent;

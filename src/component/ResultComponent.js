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
  const query = "api/apps?q=" + props.query;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(baseUrl + query);
      res
        .json()
        .then((res) => {
          setRes(res);
          return res;
        })
        .then((res) => setList(res.results));
    }
    fetchData();
  }, []);

  return <div>{JSON.stringify(resList)}</div>;
};

export default ResultComponent;

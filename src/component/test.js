import React, { useState, useEffect } from "react";
import { baseUrl } from "../shared/BaseUrl.js";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

const Test = (props) => {
  const [result, setRes] = useState([]);
  const [query, setQuery] = useState("");

  console.log("I'm working bitch");

  return <div>Hey!!!</div>;
};

export default Test;

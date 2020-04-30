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

const Test = () => {
  const [app, setApp] = useState({});
  const [selectedApp, setSelected] = useState(false);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("api/apps");
      res
        .json()
        .then((res) => setApp(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(app)}</span>
    </div>
  );
};

export default Test;

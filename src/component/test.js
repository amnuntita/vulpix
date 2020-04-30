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
  const [appTitle, setTitle] = useState("");
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://localhost:3002/api/apps/com.canva.editor"
      );
      res
        .json()
        .then((res) => setApp(res))
        .then(setTitle(app.title))
        .catch((err) => setErrors(err));
    }
    fetchData();
  });

  console.log(app.title);

  return (
    <div>
      <span>{appTitle}</span>
    </div>
  );
};

export default Test;

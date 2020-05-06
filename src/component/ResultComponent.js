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
import SideBar from "./SideBar.js";
import { Sidebar } from "semantic-ui-react";
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
        .then((res) => {
          setList(res.results);
          return resList;
        })
        .then((resList) => {
          console.log(resList);
        });
    }
    fetchData();
  }, []);

  function DisplayApp({ app }) {
    return (
      <div className="res">
        <Card key={app.appId}>
          <CardBody>
            <div className="row">
              <Link to={`/detail/${app.appId}`}>
                <Media left className="icon">
                  <Media src={app.icon} alt="Generic placeholder image" />
                </Media>
              </Link>
              <div className="col">
                <CardTitle style={{ fontSize: 20 }}>{app.title}</CardTitle>
                <CardSubtitle>Developer: {app.developer.devId}</CardSubtitle>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <SideBar />
      <div className="row">
        {resList.map((app) => {
          return (
            <div className="col-12 col-md-3 m-1">
              <DisplayApp app={app} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultComponent;

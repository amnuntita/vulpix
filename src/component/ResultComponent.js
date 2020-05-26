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
import NavBar from "./NavBar.js";
import SearchComponent from "./SearchComponent.js";

const ResultComponent = (props) => {
  const [qres, setRes] = useState("");
  const [resList, setList] = useState([]);
  const [num, setNum] = useState(false);
  const query = "search/?q=" + props.query;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(baseUrl + query);
      console.log(baseUrl + query);
      res
        .json()
        .then((res) => {
          setRes(res);
          return res;
        })
        .then((res) => {
          setList(res.rows);
          return resList;
        })
        .then((resList) => {
          if (resList.length > 0) setNum(resList.length);
        });
    }
    fetchData();
  }, [resList.length]);

  function DisplayApp() {
    return (
      <div>
        <div className="textstyle">
          {num} results for keyword "{props.query}"
        </div>
        <div className="row">
          {resList.map((app) => {
            return (
              <div className="col-12 col-md-3 m-1">
                <div className="res">
                  <Card key={app.apk}>
                    <CardBody>
                      <div className="row">
                        <Media left className="icon">
                          <Media
                            src={app.icon}
                            alt="Generic placeholder image"
                          />
                        </Media>
                        <div className="col">
                          <Link to={`/detail/${app.apk}`}>
                            <CardTitle style={{ fontSize: 20 }}>
                              {app.title}
                            </CardTitle>
                          </Link>
                          <CardSubtitle>Developer: {app.dev}</CardSubtitle>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="resultSearch">
        <SearchComponent />
      </div>
      <DisplayApp />
    </div>
  );
};

export default ResultComponent;

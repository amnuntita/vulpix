import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";

function AppScore() {
  const AppScore = () => {
    return (
      <div className="appcard col-11 col-md-5">
        <Card>
          <CardBody>
            <CardTitle>Application Name</CardTitle>
            <CardSubtitle>Developer</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  return AppScore();
}

export default AppScore;

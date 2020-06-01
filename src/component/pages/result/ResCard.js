import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  FormGroup,
  Media,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

const ResCard = (props) => {
  const app = props.app;

  return (
    <div className="col-12 col-md-3 m-1">
      <div className="res">
        <Card key={app.apk + app.version}>
          <CardBody>
            <div className="row">
              <Media left className="icon">
                <Media src={app.icon} alt="Generic placeholder image" />
              </Media>
              <div className="col">
                <Link to={`/detail/${app.apk}`}>
                  <CardTitle style={{ fontSize: 20 }}>{app.title}</CardTitle>
                </Link>
                <CardSubtitle>Developer: {app.dev}</CardSubtitle>
                <CardSubtitle style={{ marginTop: 2 }}>
                  Version: {app.version}
                </CardSubtitle>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ResCard;

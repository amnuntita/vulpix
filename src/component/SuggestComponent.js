import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const SuggestComponent = ({ suggestItems }) => {
  console.log(suggestItems);
  return (
    <div style={{ fontSize: "small" }}>
      {suggestItems.map((app) => {
        return (
          //Link is better as it only move root page and makes it routable
          <Link key={app.title} to={`/result/${app.title}`}>
            <ListGroupItem>{app.title}</ListGroupItem>
          </Link>
        );
      })}
    </div>
  );
};

export default SuggestComponent;

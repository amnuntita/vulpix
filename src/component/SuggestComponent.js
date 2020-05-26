import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { ListGroupItem } from "reactstrap";

const SuggestComponent = ({ suggestItems }) => {
  return (
    <div style={{ fontSize: "small" }}>
      {
        // If 'suggest' is existed && not empty, then show
        suggestItems && suggestItems.length !== 0 ? (
          suggestItems.map((app) => (
            // Deletable If you understanded
            // Do not use 'a' tag if route among routes in Our website
            // Bc of what 'a' tag did is create the new whole page again and again which's slow
            // On the other hand, 'Link' just change only Root component, much faster ,in short
            // You can cover any component w/ 'Link' to make it routable
            <Link key={app.title} to={`/result/${app.title}`}>
              <ListGroupItem>{app.title}</ListGroupItem>
            </Link>
          ))
        ) : (
          // If There no search result, show No Result!
          <ListGroupItem>No Result!</ListGroupItem>
        )
      }
    </div>
  );
};

export default SuggestComponent;

import React, { useState, useEffect } from "react";
import { ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const SuggestComponent = (props) => {
  const [suggestItems, setSuggestItems] = useState([]);
  const searchTerm = props.searchTerm;

  useEffect(() => {
    // Deletable If you understanded
    // Create lambda function, then use it immediately
    async function fetchSuggest() {
      const res = await fetch(
        /*"http://localhost:3002/" +*/ "suggest/?q=" + searchTerm
      );
      res.json().then((res) => {
        setSuggestItems(res.rows);
      });
    }
    fetchSuggest();
  }, [searchTerm]);

  function ListSuggest() {
    if (searchTerm.length == 0) {
      return <div>nothing here</div>;
    } else {
      return (
        <div>
          {suggestItems.map((app) => {
            return (
              <Link key={app.title} to={`/result/${app.title}`}>
                <ListGroupItem>{app.title}</ListGroupItem>
              </Link>
            );
          })}
        </div>
      );
    }
  }
  return (
    <div style={{ fontSize: "small" }}>
      <ListSuggest />
    </div>
  );
};

export default SuggestComponent;

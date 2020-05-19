import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, DropdownItem } from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";

const SuggestComponent = (props) => {
  const [suggest, setSuggest] = useState([]);
  const term = props.term;

  useEffect(() => {
    async function fetchSuggest() {
      const res = await fetch(baseUrl + "suggest/?q=" + term);
      res.json().then((res) => {
        setSuggest(res);
      });
    }
    fetchSuggest();
  }, [term]);

  function ListSuggest() {
    if (term.length == 0) {
      return <div></div>;
    }
    return suggest.map((app) => {
      return (
        <ListGroupItem tag="a" href={`/result/${app.title}`} action>
          {app.title}
        </ListGroupItem>
      );
    });
  }

  return (
    <div>
      <ListSuggest />
    </div>
  );
};

export default SuggestComponent;

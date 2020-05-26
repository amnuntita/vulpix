import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { baseUrl } from "../shared/BaseUrl.js";

import { Form, Input, Button } from "reactstrap";

import SuggestComponent from "./SuggestComponent.js";

const Search = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestItems, setSuggestItems] = useState([]);

  useEffect(() => {
    // Deletable If you understanded
    // Create lambda function, then use it immediately
    if (searchTerm !== "") {
      (async () => {
        const res = await fetch(`${baseUrl}suggest/?q=${searchTerm}`);
        res.json().then((result) => setSuggestItems(result));
      })();
    }
  }, [searchTerm]);

  const handleInputChange = async (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      history.push(`/result/${searchTerm}`);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="text" onChange={handleInputChange} value={searchTerm} />
      </Form>
      <div className="suggest">
        {searchTerm.length !== 0 && (
          <SuggestComponent suggestItems={suggestItems} />
        )}
      </div>
      <div>
        <div className="searchButton">
          <Button>
            <Link to={`/result/${searchTerm}`}>Go</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Search);

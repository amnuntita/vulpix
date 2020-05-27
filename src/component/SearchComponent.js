import React, { useState, useEffect } from "react";
import { Input, Button, Form } from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";
import { Link, withRouter } from "react-router-dom";
import SuggestComponent from "./SuggestComponent.js";

const Search = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestItems, setSuggestItems] = useState([]);

  useEffect(() => {
    // Deletable If you understanded
    // Create lambda function, then use it immediately
    if (searchTerm !== "") {
      (async () => {
        const res = await fetch(`/suggest/?q=${searchTerm}`);
        res.json().then((result) => {
          setSuggestItems(result.rows);
          console.log("doing something");
          return suggestItems;
        });
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
        <Input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="text"
        />
        <div className="suggest">
          {searchTerm.length !== 0 && (
            <SuggestComponent suggestItems={suggestItems} />
          )}
        </div>
        <div className="searchButton">
          <Button style={{ backgroundColor: "#000850" }}>
            <Link to={`/result/${searchTerm}`}>Go</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default withRouter(Search);

import React, { useState } from "react";
import { Input, Button, Form } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import SuggestComponent from "./SuggestComponent.js";

const Search = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
          <SuggestComponent searchTerm={searchTerm} />
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
